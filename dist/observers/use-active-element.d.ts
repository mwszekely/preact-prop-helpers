import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { Nullable } from "../util/lib.js";
export declare const PropNames_ActiveElementParameters_onActiveElementChange = "PropNames.ActiveElementParameters.onActiveElementChange";
export declare const PropNames_ActiveElementParameters_onLastActiveElementChange = "PropNames.ActiveElementParameters.onLastActiveElementChange";
export declare const PropNames_ActiveElementParameters_onWindowFocusedChange = "PropNames.ActiveElementParameters.onWindowFocusedChange";
export declare const PropNames_ActiveElementParameters_getDocument = "PropNames.ActiveElementParameters.getDocument";
export declare const PropNames_ActiveElementReturn_getActiveElement = "PropNames.ActiveElementReturn.getActiveElement";
export declare const PropNames_ActiveElementReturn_getLastActiveElement = "PropNames.ActiveElementReturn.getLastActiveElement";
export declare const PropNames_ActiveElementReturn_getWindowFocused = "PropNames.ActiveElementReturn.getWindowFocused";
export interface UseActiveElementParametersSelf {
    /**
     * Called any time the active element changes.
     *
     * @stable
     */
    [PropNames_ActiveElementParameters_onActiveElementChange]: Nullable<OnPassiveStateChange<Element | null, FocusEvent>>;
    /**
     * Called any time the active element changes and is not null.
     *
     * @stable
     */
    [PropNames_ActiveElementParameters_onLastActiveElementChange]: Nullable<OnPassiveStateChange<Element, FocusEvent>>;
    /**
     * Called any time the window gains/loses focus.
     *
     * @stable
     */
    [PropNames_ActiveElementParameters_onWindowFocusedChange]: Nullable<OnPassiveStateChange<boolean, FocusEvent>>;
    /**
     * This must be a function that returns the document associated with whatever elements we're listening to.
     *
     * E.G. someDivElement.ownerDocument
     *
     * @stable
     */
    [PropNames_ActiveElementParameters_getDocument](): Document;
}
export interface UseActiveElementReturnTypeSelf {
    /**
     * Returns whatever element is currently focused, or `null` if there's no focused element
     * @stable
     */
    [PropNames_ActiveElementReturn_getActiveElement]: () => Element | null;
    /**
     * Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element
     * @stable
     */
    [PropNames_ActiveElementReturn_getLastActiveElement]: () => Element;
    /**
     * Returns if the window itself has focus or not
     * @stable
     */
    [PropNames_ActiveElementReturn_getWindowFocused]: () => boolean;
}
export interface UseActiveElementParameters extends UseActiveElementParametersSelf {
}
export interface UseActiveElementReturnType extends UseActiveElementReturnTypeSelf {
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
export declare const useActiveElement: ({ [PropNames_ActiveElementParameters_onActiveElementChange]: onActiveElementChange, [PropNames_ActiveElementParameters_onLastActiveElementChange]: onLastActiveElementChange, [PropNames_ActiveElementParameters_onWindowFocusedChange]: onWindowFocusedChange, [PropNames_ActiveElementParameters_getDocument]: getDocument }: UseActiveElementParameters) => UseActiveElementReturnType;
//# sourceMappingURL=use-active-element.d.ts.map