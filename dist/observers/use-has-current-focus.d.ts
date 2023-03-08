import { h } from "preact";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
export interface UseHasCurrentFocusParameters<T extends Node> {
    refElementReturn: Required<Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">>;
    hasCurrentFocusParameters: {
        /**
         * Whether the element itself currently has focus.
         *
         * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
         */
        onCurrentFocusedChanged: null | OnPassiveStateChange<boolean, h.JSX.TargetedEvent<T>>;
        /**
         * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
         *
         * @see this.onFocusedChanged
         */
        onCurrentFocusedInnerChanged: null | OnPassiveStateChange<boolean, h.JSX.TargetedEvent<T>>;
    };
}
export interface UseHasCurrentFocusReturnType<E extends Node> {
    hasCurrentFocusReturn: {
        propsStable: h.JSX.HTMLAttributes<E>;
        /**
         * Modifies the element to be able to track its own focus state
         */
        /** STABLE */
        getCurrentFocused(): boolean;
        /** STABLE */
        getCurrentFocusedInner(): boolean;
    };
}
export declare function useHasCurrentFocus<T extends Node>(args: UseHasCurrentFocusParameters<T>): UseHasCurrentFocusReturnType<T>;
//# sourceMappingURL=use-has-current-focus.d.ts.map