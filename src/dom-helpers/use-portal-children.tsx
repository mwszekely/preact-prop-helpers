
import { cloneElement, h, VNode } from "preact";
import { createPortal } from "preact/compat";
import { useCallback, useLayoutEffect, useMemo } from "preact/hooks";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useState } from "../preact-extensions/use-state.js";
import { generateRandomId } from "../util/random-id.js";

export interface UsePortalChildrenParameters {
    target: string | Element | null;
}

export interface UsePortalChildrenReturnType {
    children: VNode;
    portalElement: Element | null;
    pushChild: PushPortalChild;
    updateChild: UpdatePortalChild;
    removeChild: RemovePortalChild;
}

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
export function usePortalChildren({ target }: UsePortalChildrenParameters) {

    const [pushChild, setPushChild] = useState<PushPortalChild | null>(null);
    const [updateChild, setUpdateChild] = useState<UpdatePortalChild | null>(null);
    const [removeChild, setRemoveChild] = useState<RemovePortalChild | null>(null);

    const pushChildStable = useStableCallback<NonNullable<typeof pushChild>>((child) => {
        return pushChild?.(child) ?? -1;
    });

    const updateChildStable = useStableCallback<NonNullable<typeof updateChild>>((index, child) => {
        return updateChild?.(index, child);
    });

    const removeChildStable = useStableCallback<NonNullable<typeof removeChild>>((index) => {
        return removeChild?.(index);
    });

    const element = useMemo(() => { return target == null? null : typeof target == "string"? document.getElementById(target) : target; }, [target]);
    const children = !element? null : createPortal(<PortalChildren setPushChild={setPushChild} setUpdateChild={setUpdateChild} setRemoveChild={setRemoveChild} />, element!);

    return {
        children: children,
        pushChild: pushChildStable,
        updateChild: updateChildStable,
        removeChild: removeChildStable,
        portalElement: element
    }
}


export type StateUpdater<S> = (value: ((prevState: S) => S)) => void;
export type PushPortalChild = (child: h.JSX.Element) => number;
export type UpdatePortalChild = (index: number, child: h.JSX.Element) => void;
export type RemovePortalChild = (index: number) => void;


/**
 * Implementation
 */
function PortalChildren({ setPushChild, setUpdateChild, setRemoveChild }: { setPushChild: StateUpdater<PushPortalChild | null>, setUpdateChild: StateUpdater<UpdatePortalChild | null>, setRemoveChild: StateUpdater<RemovePortalChild | null> }) {
    const [children, setChildren, getChildren] = useState<h.JSX.Element[]>([]);
    const pushChild: PushPortalChild | null = useCallback((child: h.JSX.Element) => {
        const randomKey = generateRandomId();
        let index = getChildren().length;
        setChildren(prev => ([...prev, cloneElement(child, { key: randomKey, index })]));
        return index;
    }, []);

    const updateChild: UpdatePortalChild | null = useCallback((index: number, child: h.JSX.Element) => {
        const key = getChildren()[index]?.key;
        console.assert(key);
        if (key) {
            setChildren(prev => {
                let newChildren = prev.slice();
                newChildren.splice(index, 1, cloneElement(child, { key: key as string, index }));
                return newChildren;
            });
            return index;
        }
    }, []);

    const removeChild: RemovePortalChild | null = useCallback((index: number) => {
        const key = getChildren()[index]?.key;
        console.assert(key);
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

    return (
        <>{children}</>
    );
}
