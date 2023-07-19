import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
export interface UseActiveElementParametersSelf {
    /**
     * Called any time the active element changes. Must be stable.
     */
    onActiveElementChange?: OnPassiveStateChange<Element | null, FocusEvent> | null | undefined;
    /**
     * Called any time the active element changes and is not null.
     * Must be stable.
     */
    onLastActiveElementChange?: OnPassiveStateChange<Element, FocusEvent> | null | undefined;
    /**
     * Called any time the window gains/loses focus. Must be stable.
     */
    onWindowFocusedChange?: OnPassiveStateChange<boolean, FocusEvent> | null | undefined;
    /**
     * This must be a function that returns the document associated with whatever elements we're listening to.
     *
     * E.G. someDivElement.ownerDocument
     *
     * **MUST** be stable
     */
    getDocument(): Document;
    /**
     * By default, event handlers are attached to the document's defaultView Window.
     * If you need something different, override it here.
     *
     * **MUST** be stable
     */
    getWindow?: ((document: Document) => Window) | null | undefined;
}
export interface UseActiveElementParameters {
    activeElementParameters: UseActiveElementParametersSelf;
}
export interface UseActiveElementReturnTypeSelf {
    /**
     * Returns whatever element is currently focused, or `null` if there's no focused element
     * **STABLE**
     */
    getActiveElement: () => Element | null;
    /**
     * Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element
     * **STABLE**
     */
    getLastActiveElement: () => Element;
    /**
     * Returns if the window itself has focus or not
     * **STABLE**
     */
    getWindowFocused: () => boolean;
}
export interface UseActiveElementReturnType {
    activeElementReturn: UseActiveElementReturnTypeSelf;
}
/**
 * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus
 *
 * @remarks The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes
 *
 * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
 *
 * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
 *
 * @compositeParams
 */
export declare function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument, getWindow } }: UseActiveElementParameters): UseActiveElementReturnType;
//# sourceMappingURL=use-active-element.d.ts.map