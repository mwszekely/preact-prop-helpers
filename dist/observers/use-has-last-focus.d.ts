import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { Nullable } from "../util/types.js";
import { PropNames_ActiveElementParameters_onLastActiveElementChange, UseActiveElementParameters } from "./use-active-element.js";
export declare const PropNames_HasLastFocusParameters_onLastFocusedChanged = "PropNames.HasLastFocusParameters.onLastFocusedChanged";
export declare const PropNames_HasLastFocusParameters_onLastFocusedInnerChanged = "PropNames.HasLastFocusParameters.onLastFocusedInnerChanged";
export declare const PropNames_HasLastFocusReturn_getLastFocused = "PropNames.HasLastFocusReturnType.getLastFocused";
export declare const PropNames_HasLastFocusReturn_getLastFocusedInner = "PropNames.HasLastFocusReturnType.getLastFocusedInner";
export interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     *
     * @remarks This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     *
     * @stable
     */
    [PropNames_HasLastFocusParameters_onLastFocusedChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     *
     * @stable
     */
    [PropNames_HasLastFocusParameters_onLastFocusedInnerChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
}
export interface HasLastFocusReturnTypeSelf {
    /** @stable */
    [PropNames_HasLastFocusReturn_getLastFocused](): boolean;
    /** @stable */
    [PropNames_HasLastFocusReturn_getLastFocusedInner](): boolean;
}
export interface UseHasLastFocusParameters<T extends Node> extends UseHasLastFocusParametersSelf, Pick<UseRefElementReturnType<T>, typeof PropNames_RefElementReturn_getElement> {
}
export interface UseHasLastFocusReturnType extends HasLastFocusReturnTypeSelf, Pick<UseActiveElementParameters, typeof PropNames_ActiveElementParameters_onLastActiveElementChange> {
}
/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export declare const useHasLastFocus: <T extends Node>({ [PropNames_HasLastFocusParameters_onLastFocusedChanged]: onLastFocusedChanged, [PropNames_HasLastFocusParameters_onLastFocusedInnerChanged]: onLastFocusedInnerChanged, [PropNames_RefElementReturn_getElement]: getElement, ...void1 }: UseHasLastFocusParameters<T>) => UseHasLastFocusReturnType;
//# sourceMappingURL=use-has-last-focus.d.ts.map