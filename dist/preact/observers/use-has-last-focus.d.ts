import { UseRefElement } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { GenericHook, Nullable, Parameter, StandardDepsPick } from "../util/types.js";
import { UseActiveElement } from "./use-active-element.js";
export interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     *
     * @remarks This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     *
     * @stable
     */
    onLastFocusedChanged: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     *
     * @stable
     */
    onLastFocusedInnerChanged: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
}
export interface UseHasLastFocusReturnTypeSelf {
    /** @stable */
    getLastFocused(): boolean;
    /** @stable */
    getLastFocusedInner(): boolean;
}
export type UseHasLastFocus<E extends Element> = GenericHook<"hasLastFocus", UseHasLastFocusParametersSelf, [
    StandardDepsPick<"params", UseActiveElement, "activeElementParameters">,
    StandardDepsPick<"return", UseRefElement<E>, "refElementReturn", "pick", "getElement">
], UseHasLastFocusReturnTypeSelf, [
    StandardDepsPick<"return", UseActiveElement>
]>;
/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export declare const useHasLastFocus: <T extends Element>(args: {
    hasLastFocusParameters: UseHasLastFocusParametersSelf;
} & StandardDepsPick<"params", UseActiveElement, "activeElementParameters"> & StandardDepsPick<"return", UseRefElement<T>, "refElementReturn", "pick", "getElement">) => {
    hasLastFocusReturn: UseHasLastFocusReturnTypeSelf;
} & StandardDepsPick<"return", UseActiveElement>;
//# sourceMappingURL=use-has-last-focus.d.ts.map