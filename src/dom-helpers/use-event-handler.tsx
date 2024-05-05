import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";

/**
 * This is used to select *just* the typed addEventListener 
 * and not the generic "I'll accept any string and any handler" one.
 * 
 * TODO: This """works""" but it's not great and implicitly relies on
 * lib.dom.ts always giving the two overloads in the same order, with the
 * typed one first. *That* probably won't change, but if more overloads
 * are ever added this will need adjustment.
 * 
 * See https://stackoverflow.com/a/52761156 for how selecting the correct overload works.
 */
/*type FirstOverloadParameters<T> =
    T extends { (...args: infer R): any; (...args: any[]): any; (...args: any[]): any; (...args: any[]): infer R } ? R :
    T extends { (...args: infer R): any; (...args: any[]): any; (...args: any[]): any } ? R :
    T extends { (...args: infer R): any; (...args: any[]): any } ? R :
    T extends (...args: infer R) => any ? R : [];*/

// Get just the typed version of addEventListener, if it exists
type TypedAddEventListener<T extends EventTarget> = T["addEventListener"]; //(...args: FirstOverloadParameters<(T["addEventListener"])>) => void;

// Returns the first argument of "addEventListener" (the event type as a string)
type TypedEventListenerTypes<T extends EventTarget> = (TypedAddEventListener<T> extends ((type: infer K2, ...args: any[]) => any) ? K2 : string) & string;


// TODO: This isn't quite able to narrow down the exact event type for unknown reasons.
// Instead it returns a union of all available event types, which is...fine, I guess.
// I don't know why `infer H` is doing that when the type should be narrowed by `T` though...
// Note that the type parameter is still used, even though it doesn't narrow down the type,
// because otherwise, instead of being a union of all types, it's just `any`
//type TypedEventHandler<E extends EventTarget, T extends TypedEventListenerTypes<E>> = TypedAddEventListener<E> extends ((type: T, handler: infer H, ...args: any[]) => any) ? NonNullable<H> : never;
//((TypedAddEventListener<E> & ((type: T, handler: (e: Event) => void, ...args: any[]) => any)) extends ((type: T, handler: (e: infer H) => any, ...args: any[]) => any) ? H : Function) /*& (T extends keyof GlobalEventHandlersEventMap? GlobalEventHandlersEventMap[T] : (e: Event) => void)*/;

/*type Parameters2<T extends (EventListenerObject | ((...args: any) => any))> =
    T extends EventListenerObject ? Parameters<T["handleEvent"]> :
    T extends (...args: infer P) => any ? P : never;*/


//    type TypedEventHandlerEvent<E extends EventTarget, T extends TypedEventListenerTypes<E>> = Parameters2<TypedEventHandler<E, T>>[0];
type TypedEventHandlerEvent<E extends EventTarget, _T extends TypedEventListenerTypes<E>> = Event;


/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 * 
 * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`). 
 * 
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 * 
 * @param target - A *non-Preact* node to attach the event to.
 * *
 */
export const useGlobalHandler = monitored(function useGlobalHandler<T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends TypedEventHandlerEvent<T, EventType>>(target: T | null | undefined, type: EventType, handler: null | ((e: H) => void), options?: Parameters<TypedAddEventListener<T>>[2], mode?: "grouped" | "single"): void {
    mode ||= "grouped";
    useEnsureStability("useGlobalHandler", target, mode);

    if (!target)
            return;

    if (mode === "grouped") {
        // Note to self: The typing doesn't improve even if this is split up into a sub-function.
        // No matter what, it seems impossible to get the handler's event object typed perfectly.
        // It seems like it's guaranteed to always be a union of all available types.
        // Again, no matter what combination of sub- or sub-sub-functions used.
        useGlobalHandlerGrouped<T, EventType, H>(target, type, handler, options);
    }
    else {
        useGlobalHandlerSingle<T, EventType, H>(target, type, handler, options);
    }
})

type GlobalHandlerInfo = { listener: EventListener; listeners: Set<EventListener>; };
type MapOfOptionsToInfo = Map<string, GlobalHandlerInfo>
type MapOfTypeToMapOfOptionsToInfo = Map<TypedEventListenerTypes<EventTarget>, MapOfOptionsToInfo>;
let mapThing = new Map<EventTarget, MapOfTypeToMapOfOptionsToInfo>();

function doMapThing<T extends EventTarget, EventType extends TypedEventListenerTypes<T>>(op: (i: GlobalHandlerInfo, h: EventListener) => void, target: T, type: EventType, handler: null | EventListener, options: Parameters<TypedAddEventListener<T>>[2]): void {
    if (handler) {

        const optionsKey = JSON.stringify(options);
        const byType = mapThing.get(target) || (new Map() as MapOfTypeToMapOfOptionsToInfo);
        const byOptions = (byType.get(type) || (new Map() as MapOfOptionsToInfo));
        const info = byOptions.get(optionsKey) || { listener: null!, listeners: new Set() };

        op(info, handler);

        byOptions.set(optionsKey, info);
        byType.set(type, byOptions);
        mapThing.set(target, byType);
    }
}


function addToMapThing<T extends EventTarget, EventType extends TypedEventListenerTypes<T>>(target: T, type: EventType, handler: null | EventListener, options: Parameters<TypedAddEventListener<T>>[2]): void {
    doMapThing((info, h) => {
        info.listeners.add(h);
        if (info.listener == null)
            target.addEventListener(type, info.listener = e => info.listeners.forEach(fn => fn(e)), options);
    }, target, type, handler, options);

}

function removeFromMapThing<T extends EventTarget, EventType extends TypedEventListenerTypes<T>>(target: T, type: EventType, handler: null | EventListener, options?: Parameters<TypedAddEventListener<T>>[2]): void {
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
function useGlobalHandlerGrouped<T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends TypedEventHandlerEvent<T, EventType>>(target: T, type: EventType, handler: null | ((e: H) => void), options?: Parameters<TypedAddEventListener<T>>[2]): void {
    let stableHandler: EventListener | null = useStableCallback<EventListener>((handler as any) ?? (() => { })) as (EventListener | null);
    if (handler == null)
        stableHandler = null;

    useEffect(() => {
        if (stableHandler) {
            addToMapThing(target, type, stableHandler, options);
            return () => removeFromMapThing(target, type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}

function useGlobalHandlerSingle<T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends TypedEventHandlerEvent<T, EventType>>(target: T, type: EventType, handler: null | ((e: H) => void), options?: Parameters<TypedAddEventListener<T>>[2]): void {
    let stableHandler: EventListener | null = useStableCallback<EventListener>((handler as any) ?? (() => { })) as (EventListener | null);
    if (handler == null)
        stableHandler = null;

    useEffect(() => {
        if (stableHandler) {
            target.addEventListener(type, stableHandler, options);

            return () => target.removeEventListener(type, stableHandler, options);
        }
    }, [target, type, stableHandler]);
}
