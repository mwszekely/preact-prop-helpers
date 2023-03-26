import { OnPassiveStateChange, PassiveStateUpdater } from "../preact-extensions/use-passive-state.js";
import { FocusEventType } from "../util/types.js";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus.js";
export interface UseChildrenHaveFocusParameters<T extends Element> {
    childrenHaveFocusParameters: {
        /**
         * Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.
         */
        onCompositeFocusChange: null | OnPassiveStateChange<boolean, FocusEventType<T>>;
    };
}
export interface UseChildrenHaveFocusChildReturnType<E extends Element> {
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<E>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>;
}
export interface UseChildrenHaveFocusReturnType<T extends Element> {
    childrenHaveFocusReturn: {
        getAnyFocused(): boolean;
    };
    context: UseChildrenHaveFocusContext<T>;
}
export interface UseChildrenHaveFocusContext<T extends Element> {
    childrenHaveFocusChildContext: {
        /** **STABLE** */
        setFocusCount: PassiveStateUpdater<number, FocusEventType<T>>;
    };
}
export interface UseChildrenHaveFocusChildParameters<T extends Element> {
    context: UseChildrenHaveFocusContext<T>;
}
/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 */
export declare function useChildrenHaveFocus<ChildElement extends Element>(args: UseChildrenHaveFocusParameters<ChildElement>): UseChildrenHaveFocusReturnType<ChildElement>;
export declare function useChildrenHaveFocusChild<E extends Element>({ context: { childrenHaveFocusChildContext: { setFocusCount } } }: UseChildrenHaveFocusChildParameters<E>): UseChildrenHaveFocusChildReturnType<E>;
//# sourceMappingURL=use-children-have-focus.d.ts.map