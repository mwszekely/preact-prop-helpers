import { h, PreactDOMAttributes } from "preact";
import { useCallback, useEffect, useLayoutEffect } from "preact/hooks";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useStableCallback } from "./use-stable-callback";

/**
 * This is used to select *just* the typed addEventListener 
 * and not the generic "I'll accept any string and any handler" one.
 * 
 * TODO: This """works""" but it's not great and implicitly relies on
 * lib.dom.ts always giveing the two overloads in the same order, with the
 * typed one first. *That* probably won't change, but if more overloads
 * are ever added this will need adjustment.
 * 
 * See https://stackoverflow.com/a/52761156 for how selecting the correct overload works.
 */
type FirstOverloadParameters<T> =
    T extends { (...args: infer R): any; (...args: any[]): any; (...args: any[]): any; (...args: any[]): infer R } ? R :
    T extends { (...args: infer R): any; (...args: any[]): any; (...args: any[]): any } ? R :
    T extends { (...args: infer R): any; (...args: any[]): any } ? R :
    T extends (...args: infer R) => any ? R : [];

// Get just the typed version of addEventListener, if it exists
type TypedAddEventListener<T extends EventTarget> = (...args: FirstOverloadParameters<(T["addEventListener"])>) => void;

// Returns the first argument of "addEventListener" (the event type as a string)
type TypedEventListenerTypes<T extends EventTarget> = TypedAddEventListener<T> extends ((type: infer K2, ...args: any[]) => any) ? K2 : string;


// TODO: This isn't quite able to narrow down the exact event type for unknown reasons.
// Instead it returns a union of all available event types, which is...fine, I guess.
// I don't know why `infer H` is doing that when the type should be narrowed by `T` though...
// Note that the type parameter is still used, even though it doesn't narrow down the type,
// because otherwise, instead of being a union of all types, it's just `any`
type TypedEventHandler<E extends EventTarget, T extends TypedEventListenerTypes<E>> = TypedAddEventListener<E> extends ((type: T, handler: infer H, ...args: any[]) => any) ? NonNullable<H> : never;
//((TypedAddEventListener<E> & ((type: T, handler: (e: Event) => void, ...args: any[]) => any)) extends ((type: T, handler: (e: infer H) => any, ...args: any[]) => any) ? H : Function) /*& (T extends keyof GlobalEventHandlersEventMap? GlobalEventHandlersEventMap[T] : (e: Event) => void)*/;

type Parameters2<T extends (EventListenerObject | ((...args: any) => any))> =
    T extends EventListenerObject ? Parameters<T["handleEvent"]> :
    T extends (...args: infer P) => any ? P : never;


type TypedEventHandlerEvent<E extends EventTarget, T extends TypedEventListenerTypes<E>> = Parameters2<TypedEventHandler<E, T>>[0];


/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 * 
 * Due to typing limitations, this function must be called like this:
 * 
 * `useEventHandler(element, "input")<InputEvent>(e => {})`
 * 
 * The type argument is optional, but narrows down the type from "a union of all events" to whatever you specify, and errors if it doesn't exist.
 * 
 * There is a separate version that attaches event handlers to a set of props. 
 * It takes different event string types (onEvent vs onevent).
 * 
 * @param target A *non-Preact* node to attach the event to.
 * @returns
 * *
 */
export function useGlobalHandler<T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends TypedEventHandlerEvent<T, EventType>>(target: T, type: EventType, handler: null | ((e: H) => void), options?: Parameters<TypedAddEventListener<T>>[2]): void {

    // Note to self: The typing doesn't improve even if this is split up into a sub-function.
    // No matter what, it seems impossible to get the handler's event object typed perfectly.
    // It seems like it's guaranteed to always be a union of all available tupes.
    // Again, no matter what combination of sub- or sub-sub-functions used.

    const stableHandler = useStableCallback(handler??(()=>{})) as EventListener;

    useEffect(() => {
        target.addEventListener(type, stableHandler, options);

        return () => target.removeEventListener(type, stableHandler, options);
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
export function useLocalHandler<ElementType extends (HTMLElementTagNameMap[keyof HTMLElementTagNameMap] | SVGElementTagNameMap[keyof SVGElementTagNameMap])>() {
    return useCallback(<EventType extends Exclude<keyof h.JSX.DOMAttributes<ElementType>, keyof PreactDOMAttributes>>(type: EventType, handler: NonNullable<h.JSX.DOMAttributes<ElementType>[EventType]>) => {
        
        const stableHandler = useStableCallback(handler);

        type Attributes = (ElementType extends HTMLElement? h.JSX.HTMLAttributes<ElementType> : 
            ElementType extends SVGElement? h.JSX.SVGAttributes<ElementType> : h.JSX.DOMAttributes<ElementType>)
        
        const useLocalEventHandlerProps = useCallback(<P extends Attributes>(props: P) => {
            type P2 = Required<Pick<h.JSX.DOMAttributes<ElementType>, EventType>>;
            return useMergedProps<ElementType>()({ [type]: stableHandler } as { [K in EventType]: typeof handler }, props) as MergedProps<ElementType, P2, P>;
        }, [type]);

        return { useLocalEventHandlerProps };

    }, []);
}
