type TypedAddEventListener<T extends EventTarget> = T["addEventListener"];
type TypedEventListenerTypes<T extends EventTarget> = (TypedAddEventListener<T> extends ((type: infer K2, ...args: any[]) => any) ? K2 : string) & string;
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
export declare const useGlobalHandler: <T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends Event>(target: T, type: EventType, handler: ((e: H) => void) | null, options?: Parameters<TypedAddEventListener<T>>[2], mode?: "grouped" | "single") => void;
export {};
//# sourceMappingURL=use-event-handler.d.ts.map