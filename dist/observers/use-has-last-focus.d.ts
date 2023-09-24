import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { Nullable, PropNames } from "../util/types.js";
import { UseActiveElementParameters } from "./use-active-element.js";
declare module "../util/types.js" {
    interface PropNames {
        HasLastFocusParameters: typeof PNames;
    }
}
declare module "../util/types.js" {
    interface PropNames {
        HasLastFocusReturn: typeof RNames;
    }
}
export declare const PNames: {
    readonly onLastFocusedChanged: "PropNames.HasLastFocusParameters.onLastFocusedChanged";
    readonly onLastFocusedInnerChanged: "PropNames.HasLastFocusParameters.onLastFocusedInnerChanged";
};
export declare const RNames: {
    readonly getLastFocused: "PropNames.HasLastFocusReturnType.getLastFocused";
    readonly getLastFocusedInner: "PropNames.HasLastFocusReturnType.getLastFocusedInner";
};
export interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     *
     * @remarks This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     *
     * @stable
     */
    [PropNames.HasLastFocusParameters.onLastFocusedChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     *
     * @stable
     */
    [PropNames.HasLastFocusParameters.onLastFocusedInnerChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
}
export interface HasLastFocusReturnTypeSelf {
    /** @stable */
    [PropNames.HasLastFocusReturn.getLastFocused](): boolean;
    /** @stable */
    [PropNames.HasLastFocusReturn.getLastFocusedInner](): boolean;
}
export interface UseHasLastFocusParameters<T extends Node> extends UseHasLastFocusParametersSelf, Pick<UseRefElementReturnType<T>, (typeof PropNames)["RefElementReturn"]["getElement"]> {
}
export interface UseHasLastFocusReturnType extends HasLastFocusReturnTypeSelf, Pick<UseActiveElementParameters, (typeof PropNames)["ActiveElementParameters"]["onLastActiveElementChange"]> {
}
/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export declare const useHasLastFocus: <T extends Node>({ [PropNames.HasLastFocusParameters.onLastFocusedChanged]: onLastFocusedChanged, [PropNames.HasLastFocusParameters.onLastFocusedInnerChanged]: onLastFocusedInnerChanged, [PropNames.RefElementReturn.getElement]: getElement, ...void1 }: UseHasLastFocusParameters<T>) => UseHasLastFocusReturnType;
//# sourceMappingURL=use-has-last-focus.d.ts.map