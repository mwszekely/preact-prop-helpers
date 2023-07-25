import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { TargetedPick } from "../util/lib.js";
import { ElementProps, FocusEventType, Nullable } from "../util/types.js";
export interface UseHasCurrentFocusParametersSelf<T extends Node> {
    /**
     * Whether the element itself currently has focus.
     *
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     *
     * @stable
     */
    onCurrentFocusedChanged: Nullable<OnPassiveStateChange<boolean, FocusEventType<T>>>;
    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     *
     * @see this.onFocusedChanged
     *
     * @stable
     */
    onCurrentFocusedInnerChanged: Nullable<OnPassiveStateChange<boolean, FocusEventType<T>>>;
}
export interface UseHasCurrentFocusParameters<T extends Node> extends TargetedPick<UseRefElementReturnType<T>, "refElementReturn", "getElement"> {
    hasCurrentFocusParameters: UseHasCurrentFocusParametersSelf<T>;
}
export interface UseHasCurrentFocusReturnTypeSelf<E extends Element> {
    propsStable: ElementProps<E>;
    /**
     * Modifies the element to be able to track its own focus state
     */
    /** @stable */
    getCurrentFocused(): boolean;
    /** @stable */
    getCurrentFocusedInner(): boolean;
}
export interface UseHasCurrentFocusReturnType<E extends Element> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnTypeSelf<E>;
}
/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
export declare function useHasCurrentFocus<T extends Element>(args: UseHasCurrentFocusParameters<T>): UseHasCurrentFocusReturnType<T>;
//# sourceMappingURL=use-has-current-focus.d.ts.map