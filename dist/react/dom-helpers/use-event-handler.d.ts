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
type TypedAddEventListener<T extends EventTarget> = T["addEventListener"];
type TypedEventListenerTypes<T extends EventTarget> = (TypedAddEventListener<T> extends ((type: infer K2, ...args: any[]) => any) ? K2 : string) & string;
type TypedEventHandlerEvent<E extends EventTarget, _T extends TypedEventListenerTypes<E>> = Event;
/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target - A *non-Preact* node to attach the event to.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useGlobalHandler<T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends TypedEventHandlerEvent<T, EventType>>(target: T | null | undefined, type: EventType, handler: null | ((e: H) => void), options?: Parameters<TypedAddEventListener<T>>[2], mode?: "grouped" | "single"): void;
export {};
//# sourceMappingURL=use-event-handler.d.ts.map