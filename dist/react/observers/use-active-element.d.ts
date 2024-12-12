import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { Nullable } from "../util/lib.js";
export interface UseActiveElementParametersSelf {
    /**
     * Called any time the active element changes.
     *
     * @stable
     */
    onActiveElementChange: Nullable<OnPassiveStateChange<Element | null, FocusEvent>>;
    /**
     * Called any time the active element changes and is not null.
     *
     * @stable
     */
    onLastActiveElementChange: Nullable<OnPassiveStateChange<Element, FocusEvent>>;
    /**
     * Called any time the window gains/loses focus.
     *
     * @stable
     */
    onWindowFocusedChange: Nullable<OnPassiveStateChange<boolean, FocusEvent>>;
    /**
     * This must be a function that returns the document associated with whatever elements we're listening to.
     *
     * E.G. someDivElement.ownerDocument
     *
     * @stable
     */
    getDocument(): Document;
}
export interface UseActiveElementParameters {
    activeElementParameters: UseActiveElementParametersSelf;
}
export interface UseActiveElementReturnTypeSelf {
    /**
     * Returns whatever element is currently focused, or `null` if there's no focused element
     * @stable
     */
    getActiveElement: () => Element | null;
    /**
     * Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element
     * @stable
     */
    getLastActiveElement: () => Element;
    /**
     * Returns if the window itself has focus or not
     * @stable
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument } }: UseActiveElementParameters): UseActiveElementReturnType;
//# sourceMappingURL=use-active-element.d.ts.map