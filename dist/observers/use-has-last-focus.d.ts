import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { TargetedPick } from "../util/lib.js";
import { Nullable } from "../util/types.js";
import { UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element.js";
export interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     *
     * @remarks This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     *
     * @stable
     */
    onLastFocusedChanged?: Nullable<((focused: boolean, prevFocused: boolean | undefined) => void)>;
    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     *
     * @stable
     */
    onLastFocusedInnerChanged?: Nullable<((focused: boolean, prevFocused: boolean | undefined) => void)>;
}
export interface UseHasLastFocusParameters<T extends Node> extends UseActiveElementParameters, TargetedPick<UseRefElementReturnType<T>, "refElementReturn", "getElement"> {
    hasLastFocusParameters: UseHasLastFocusParametersSelf;
}
export interface HasLastFocusReturnTypeSelf {
    /** @stable */
    getLastFocused(): boolean;
    /** @stable */
    getLastFocusedInner(): boolean;
}
export interface UseHasLastFocusReturnType extends UseActiveElementReturnType {
    hasLastFocusReturn: HasLastFocusReturnTypeSelf;
}
/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export declare function useHasLastFocus<T extends Node>(args: UseHasLastFocusParameters<T>): UseHasLastFocusReturnType;
//# sourceMappingURL=use-has-last-focus.d.ts.map