import { useCallback, useEffect } from "preact/hooks";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useMergedProps } from "./use-merged-props.js";
/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target A *non-Preact* node to attach the event to.
 * @returns
 * *
 */
export function useGlobalHandler(target, type, handler, options, mode) {
    monitorCallCount(useGlobalHandler);
    mode ||= "grouped";
    useEnsureStability("useGlobalHandler", mode);
    if (mode === "grouped") {
        // Note to self: The typing doesn't improve even if this is split up into a sub-function.
        // No matter what, it seems impossible to get the handler's event object typed perfectly.
        // It seems like it's guaranteed to always be a union of all available tupes.
        // Again, no matter what combination of sub- or sub-sub-functions used.
        useGlobalHandlerGrouped(target, type, handler, options);
    }
    else {
        useGlobalHandlerSingle(target, type, handler, options);
    }
}
let mapThing = new Map();
function doMapThing(op, target, type, handler, options) {
    if (handler) {
        const optionsKey = JSON.stringify(options);
        const byType = mapThing.get(target) || new Map();
        const byOptions = (byType.get(type) || new Map());
        const info = byOptions.get(optionsKey) || { listener: null, listeners: new Set() };
        op(info, handler);
        byOptions.set(optionsKey, info);
        byType.set(type, byOptions);
        mapThing.set(target, byType);
    }
}
function addToMapThing(target, type, handler, options) {
    doMapThing((info, h) => {
        info.listeners.add(h);
        if (info.listener == null)
            target.addEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
    }, target, type, handler, options);
}
function removeFromMapThing(target, type, handler, options) {
    doMapThing((info, h) => {
        info.listeners.delete(h);
        if (info.listener == null)
            target.removeEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
    }, target, type, handler, options);
}
/**
 * This is way faster for large numbers of event handlers.
 *
 * For example, if every button listens for a global click, or something,
 * it would be nice if it was efficient at least.
 */
function useGlobalHandlerGrouped(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => { }));
    if (handler == null)
        stableHandler = null;
    useEffect(() => {
        if (stableHandler) {
            addToMapThing(target, type, stableHandler, options);
            return () => removeFromMapThing(target, type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}
function useGlobalHandlerSingle(target, type, handler, options) {
    let stableHandler = useStableCallback(handler ?? (() => { }));
    if (handler == null)
        stableHandler = null;
    useEffect(() => {
        if (stableHandler) {
            target.addEventListener(type, stableHandler, options);
            return () => target.removeEventListener(type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}
/**
 * An alternative way to add an event handler to an element. Useful primarily when integrating 3rd party libraries that expect a generic "add event handler" function.
 *
 * Returns a function that allows you to modify a set of props to apply this handler.
 *
 * For typing reasons, this function is split into two.  Usage is like the following:
 *
 * ```
 * const { useLocalEventHandlerProps } = useLocalEventHandler<HTMLDivElement>()("onMouseDown", e => {  });
 * const divProps = useLocalEventHandlerProps(props);
 * ```
 */
export function useLocalHandler() {
    return useCallback((type, handler) => {
        const stableHandler = useStableCallback(handler);
        const useLocalEventHandlerProps = useCallback((props) => {
            return useMergedProps({ [type]: stableHandler }, props);
        }, [type]);
        return { useLocalEventHandlerProps };
    }, []);
}
//# sourceMappingURL=use-event-handler.js.map