import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { ElementProps, FocusEventType, Nullable, PropNames } from "../util/types.js";
declare module "../util/types.js" {
    interface PropNames {
        HasCurrentFocusParameters: typeof PNames;
    }
}
declare module "../util/types.js" {
    interface PropNames {
        HasCurrentFocusReturn: typeof RNames;
    }
}
export declare const PNames: {
    readonly onCurrentFocusedChanged: "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged";
    readonly onCurrentFocusedInnerChanged: "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged";
};
export declare const RNames: {
    readonly getCurrentFocused: "PropNames.HasCurrentFocusReturn.getCurrentFocused";
    readonly getCurrentFocusedInner: "PropNames.HasCurrentFocusReturn.getCurrentFocusedInner";
};
export interface UseHasCurrentFocusParametersSelf<T extends Node> {
    /**
     * Whether the element itself currently has focus.
     *
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     *
     * @stable
     */
    [PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged]: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     *
     * @see this.onFocusedChanged
     *
     * @stable
     */
    [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
}
export interface UseHasCurrentFocusReturnTypeSelf<E extends Element> {
    props: ElementProps<E>;
    /** @stable */
    [PropNames.HasCurrentFocusReturn.getCurrentFocused](): boolean;
    /** @stable */
    [PropNames.HasCurrentFocusReturn.getCurrentFocusedInner](): boolean;
}
export interface UseHasCurrentFocusParameters<T extends Node> extends UseHasCurrentFocusParametersSelf<T>, Pick<UseRefElementReturnType<T>, (typeof PropNames)["RefElementReturn"]["getElement"]> {
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
export declare const useHasCurrentFocus: <T extends Element>({ [PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged]: onCurrentFocusedChanged, [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged, [PropNames.RefElementReturn.getElement]: getElement }: UseHasCurrentFocusParameters<T>) => UseHasCurrentFocusReturnType<T>;
//# sourceMappingURL=use-has-current-focus.d.ts.map