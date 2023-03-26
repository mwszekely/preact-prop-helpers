import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { cloneElement, useCallback, useLayoutEffect, useMemo } from "react";
import { createPortal } from "react-dom";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useState } from "../preact-extensions/use-state.js";
import { generateRandomId } from "../util/random-id.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
 *
 * Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
 *
 * TODO: Can't push a child until after the very first `useLayoutEffect`
 *
 * @param param0
 * @returns
 */
export function usePortalChildren({ target }) {
    monitorCallCount(usePortalChildren);
    const [pushChild, setPushChild] = useState(null);
    const [updateChild, setUpdateChild] = useState(null);
    const [removeChild, setRemoveChild] = useState(null);
    const pushChildStable = useStableCallback((child) => {
        return pushChild?.(child) ?? -1;
    });
    const updateChildStable = useStableCallback((index, child) => {
        return updateChild?.(index, child);
    });
    const removeChildStable = useStableCallback((index) => {
        return removeChild?.(index);
    });
    const element = useMemo(() => { return target == null ? null : typeof target == "string" ? document.getElementById(target) : target; }, [target]);
    const children = !element ? null : createPortal(_jsx(PortalChildren, { setPushChild: setPushChild, setUpdateChild: setUpdateChild, setRemoveChild: setRemoveChild }), element);
    return {
        children: children,
        pushChild: pushChildStable,
        updateChild: updateChildStable,
        removeChild: removeChildStable,
        portalElement: element
    };
}
/**
 * Implementation
 */
function PortalChildren({ setPushChild, setUpdateChild, setRemoveChild }) {
    const [children, setChildren, getChildren] = useState([]);
    const pushChild = useCallback((child) => {
        const randomKey = generateRandomId();
        let index = getChildren().length;
        setChildren(prev => ([...prev, cloneElement(child, { key: randomKey, index })]));
        return index;
    }, []);
    const updateChild = useCallback((index, child) => {
        const key = getChildren()[index]?.key;
        console.assert(!!key);
        if (key) {
            setChildren(prev => {
                let newChildren = prev.slice();
                newChildren.splice(index, 1, cloneElement(child, { key: key, index }));
                return newChildren;
            });
            return index;
        }
    }, []);
    const removeChild = useCallback((index) => {
        const key = getChildren()[index]?.key;
        console.assert(!!key);
        if (key) {
            setChildren(prev => {
                let newChildren = prev.slice();
                newChildren.splice(index, 1);
                return newChildren;
            });
            return index;
        }
    }, []);
    useLayoutEffect(() => { setPushChild(_ => pushChild); }, [pushChild]);
    useLayoutEffect(() => { setUpdateChild(_ => updateChild); }, [updateChild]);
    useLayoutEffect(() => { setRemoveChild(_ => removeChild); }, [removeChild]);
    return (_jsx(_Fragment, { children: children }));
}
//# sourceMappingURL=use-portal-children.js.map