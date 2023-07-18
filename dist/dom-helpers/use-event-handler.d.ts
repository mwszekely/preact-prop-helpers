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
type FirstOverloadParameters<T> = T extends {
    (...args: infer R): any;
    (...args: any[]): any;
    (...args: any[]): any;
    (...args: any[]): infer R;
} ? R : T extends {
    (...args: infer R): any;
    (...args: any[]): any;
    (...args: any[]): any;
} ? R : T extends {
    (...args: infer R): any;
    (...args: any[]): any;
} ? R : T extends (...args: infer R) => any ? R : [];
type TypedAddEventListener<T extends EventTarget> = (...args: FirstOverloadParameters<(T["addEventListener"])>) => void;
type TypedEventListenerTypes<T extends EventTarget> = TypedAddEventListener<T> extends ((type: infer K2, ...args: any[]) => any) ? K2 : string;
type TypedEventHandler<E extends EventTarget, T extends TypedEventListenerTypes<E>> = TypedAddEventListener<E> extends ((type: T, handler: infer H, ...args: any[]) => any) ? NonNullable<H> : never;
type Parameters2<T extends (EventListenerObject | ((...args: any) => any))> = T extends EventListenerObject ? Parameters<T["handleEvent"]> : T extends (...args: infer P) => any ? P : never;
type TypedEventHandlerEvent<E extends EventTarget, T extends TypedEventListenerTypes<E>> = Parameters2<TypedEventHandler<E, T>>[0];
/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target - A *non-Preact* node to attach the event to.
 * *
 */
export declare function useGlobalHandler<T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends TypedEventHandlerEvent<T, EventType>>(target: T, type: EventType, handler: null | ((e: H) => void), options?: Parameters<TypedAddEventListener<T>>[2], mode?: "grouped" | "single"): void;
export {};
//# sourceMappingURL=use-event-handler.d.ts.map