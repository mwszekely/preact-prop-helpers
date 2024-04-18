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
type GetTypedAddEventListenerParams<E extends EventTarget, _K> = FirstOverloadParameters<E["addEventListener"]>;
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
export declare const useGlobalHandler: <E extends EventTarget, K, H extends (...args: any[]) => void>(target: E, type: GetTypedAddEventListenerParams<E, K>[0], handler: H | null, options?: boolean | AddEventListenerOptions, mode?: "grouped" | "single") => void;
export {};
//# sourceMappingURL=use-event-handler.d.ts.map