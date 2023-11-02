import { UseRefElement } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { FocusEventType } from "../util/lib.js";
import { GenericHook, Nullable, Parameter, StandardDepsPick, StandardDepsPropsStable } from "../util/types.js";
export interface UseHasCurrentFocusParametersSelf<T extends Node> {
    /**
     * Whether the element itself currently has focus.
     *
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     *
     * @stable
     */
    onCurrentFocusedChanged: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     *
     * @see this.onFocusedChanged
     *
     * @stable
     */
    onCurrentFocusedInnerChanged: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
}
export interface UseHasCurrentFocusReturnTypeSelf {
    /** @stable */
    getCurrentFocused(): boolean;
    /** @stable */
    getCurrentFocusedInner(): boolean;
}
export type UseHasCurrentFocus<E extends Element> = GenericHook<"hasCurrentFocus", UseHasCurrentFocusParametersSelf<E>, [StandardDepsPick<"return", UseRefElement<E>, "refElementReturn", "pick", "getElement">], UseHasCurrentFocusReturnTypeSelf, [StandardDepsPropsStable<E>]>;
/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
export declare const useHasCurrentFocus: <T extends Element>(args: {
    hasCurrentFocusParameters: UseHasCurrentFocusParametersSelf<T>;
} & StandardDepsPick<"return", UseRefElement<T>, "refElementReturn", "pick", "getElement">) => {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnTypeSelf;
} & StandardDepsPropsStable<T>;
//# sourceMappingURL=use-has-current-focus.d.ts.map