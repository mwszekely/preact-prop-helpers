import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { ElementProps, FocusEventType, Nullable } from "../util/types.js";
export interface UseHasCurrentFocusParameters<T extends Node> {
    refElementReturn: Required<Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">>;
    hasCurrentFocusParameters: {
        /**
         * Whether the element itself currently has focus.
         *
         * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
         */
        onCurrentFocusedChanged?: Nullable<OnPassiveStateChange<boolean, FocusEventType<T>>>;
        /**
         * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
         *
         * @see this.onFocusedChanged
         */
        onCurrentFocusedInnerChanged?: Nullable<OnPassiveStateChange<boolean, FocusEventType<T>>>;
    };
}
export interface UseHasCurrentFocusReturnType<E extends Element> {
    hasCurrentFocusReturn: {
        propsStable: ElementProps<E>;
        /**
         * Modifies the element to be able to track its own focus state
         */
        /** STABLE */
        getCurrentFocused(): boolean;
        /** STABLE */
        getCurrentFocusedInner(): boolean;
    };
}
export declare function useHasCurrentFocus<T extends Element>(args: UseHasCurrentFocusParameters<T>): UseHasCurrentFocusReturnType<T>;
//# sourceMappingURL=use-has-current-focus.d.ts.map