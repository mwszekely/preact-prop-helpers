import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { Nullable } from "../util/types.js";
import { UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element.js";
export interface UseHasLastFocusParameters<T extends Node> extends UseActiveElementParameters {
    refElementReturn: Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">;
    hasLastFocusParameters: {
        /**
         * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
         *
         * This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
         */
        onLastFocusedChanged?: Nullable<((focused: boolean, prevFocused: boolean | undefined) => void)>;
        /**
         * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
         */
        onLastFocusedInnerChanged?: Nullable<((focused: boolean, prevFocused: boolean | undefined) => void)>;
    };
}
export interface UseHasLastFocusReturnType extends UseActiveElementReturnType {
    hasLastFocusReturn: {
        /** STABLE */
        getLastFocused(): boolean;
        /** STABLE */
        getLastFocusedInner(): boolean;
    };
}
export declare function useHasLastFocus<T extends Node>(args: UseHasLastFocusParameters<T>): UseHasLastFocusReturnType;
//# sourceMappingURL=use-has-last-focus.d.ts.map