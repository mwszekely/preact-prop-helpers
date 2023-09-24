import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { Nullable } from "../util/lib.js";
import { PropNames } from "../util/types.js";
declare module "../util/types.js" {
    interface PropNames {
        ActiveElementParameters: typeof PNames;
    }
}
declare module "../util/types.js" {
    interface PropNames {
        ActiveElementReturn: typeof RNames;
    }
}
declare const PNames: {
    readonly onActiveElementChange: "PropNames.ActiveElementParameters.onActiveElementChange";
    readonly onLastActiveElementChange: "PropNames.ActiveElementParameters.onLastActiveElementChange";
    readonly onWindowFocusedChange: "PropNames.ActiveElementParameters.onWindowFocusedChange";
    readonly getDocument: "PropNames.ActiveElementParameters.getDocument";
};
declare const RNames: {
    readonly getActiveElement: "PropNames.ActiveElementReturn.getActiveElement";
    readonly getLastActiveElement: "PropNames.ActiveElementReturn.getLastActiveElement";
    readonly getWindowFocused: "PropNames.ActiveElementReturn.getWindowFocused";
};
export interface UseActiveElementParametersSelf {
    /**
     * Called any time the active element changes.
     *
     * @stable
     */
    [PropNames.ActiveElementParameters.onActiveElementChange]: Nullable<OnPassiveStateChange<Element | null, FocusEvent>>;
    /**
     * Called any time the active element changes and is not null.
     *
     * @stable
     */
    [PropNames.ActiveElementParameters.onLastActiveElementChange]: Nullable<OnPassiveStateChange<Element, FocusEvent>>;
    /**
     * Called any time the window gains/loses focus.
     *
     * @stable
     */
    [PropNames.ActiveElementParameters.onWindowFocusedChange]: Nullable<OnPassiveStateChange<boolean, FocusEvent>>;
    /**
     * This must be a function that returns the document associated with whatever elements we're listening to.
     *
     * E.G. someDivElement.ownerDocument
     *
     * @stable
     */
    [PropNames.ActiveElementParameters.getDocument](): Document;
}
export interface UseActiveElementReturnTypeSelf {
    /**
     * Returns whatever element is currently focused, or `null` if there's no focused element
     * @stable
     */
    [PropNames.ActiveElementReturn.getActiveElement]: () => Element | null;
    /**
     * Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element
     * @stable
     */
    [PropNames.ActiveElementReturn.getLastActiveElement]: () => Element;
    /**
     * Returns if the window itself has focus or not
     * @stable
     */
    [PropNames.ActiveElementReturn.getWindowFocused]: () => boolean;
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
export declare const useActiveElement: ({ [PropNames.ActiveElementParameters.onActiveElementChange]: onActiveElementChange, [PropNames.ActiveElementParameters.onLastActiveElementChange]: onLastActiveElementChange, [PropNames.ActiveElementParameters.onWindowFocusedChange]: onWindowFocusedChange, [PropNames.ActiveElementParameters.getDocument]: getDocument }: UseActiveElementParameters) => UseActiveElementReturnType;
export {};
//# sourceMappingURL=use-active-element.d.ts.map