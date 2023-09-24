import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { ElementProps, FocusEventType, Nullable } from "../util/types.js";
export declare const PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged = "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged";
export declare const PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged = "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged";
export declare const PropNames_HasCurrentFocusReturn_getCurrentFocused = "PropNames.HasCurrentFocusReturn.getCurrentFocused";
export declare const PropNames_HasCurrentFocusReturn_getCurrentFocusedInner = "PropNames.HasCurrentFocusReturn.getCurrentFocusedInner";
export interface UseHasCurrentFocusParametersSelf<T extends Node> {
    /**
     * Whether the element itself currently has focus.
     *
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     *
     * @stable
     */
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     *
     * @see this.onFocusedChanged
     *
     * @stable
     */
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
}
export interface UseHasCurrentFocusReturnTypeSelf<E extends Element> {
    props: ElementProps<E>;
    /** @stable */
    [PropNames_HasCurrentFocusReturn_getCurrentFocused](): boolean;
    /** @stable */
    [PropNames_HasCurrentFocusReturn_getCurrentFocusedInner](): boolean;
}
export interface UseHasCurrentFocusParameters<T extends Node> extends UseHasCurrentFocusParametersSelf<T>, Pick<UseRefElementReturnType<T>, typeof PropNames_RefElementReturn_getElement> {
}
export interface UseHasCurrentFocusReturnType<E extends Element> extends UseHasCurrentFocusReturnTypeSelf<E> {
}
/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
export declare const useHasCurrentFocus: <T extends Element>({ [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged, [PropNames_RefElementReturn_getElement]: getElement }: UseHasCurrentFocusParameters<T>) => UseHasCurrentFocusReturnType<T>;
//# sourceMappingURL=use-has-current-focus.d.ts.map