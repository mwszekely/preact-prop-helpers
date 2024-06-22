import { $getElement, $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { onfocusin, onfocusout, useCallback, useEffect, useRef } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
export const $onCurrentFocusedChanged = Symbol();
export const $onCurrentFocusedInnerChanged = Symbol();
export const $hasCurrentFocusParameters = Symbol();
export const $getCurrentFocused = Symbol();
export const $getCurrentFocusedInner = Symbol();
export const $hasCurrentFocusReturn = Symbol();
/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
export const useHasCurrentFocus = monitored(function useHasCurrentFocus(args) {
    const { [$hasCurrentFocusParameters]: { [$onCurrentFocusedChanged]: onCurrentFocusedChanged, [$onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged }, [$refElementReturn]: { [$getElement]: getElement } } = args;
    useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);
    const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, runImmediately);
    const onFocusIn = useCallback((e) => {
        setFocusedInner(true, e);
        setFocused(e.target == getElement(), e);
    }, []);
    const onFocusOut = useCallback((e) => {
        // Even if we're focusOut-ing to another inner element,
        // that'll be caught during onFocusIn,
        // so just set everything to false and let that revert things back to true if necessary.
        setFocusedInner(false, e);
        setFocused(false, e);
    }, []);
    useEffect(() => {
        return () => {
            setFocused(false, undefined);
            setFocusedInner(false, undefined);
        };
    }, []);
    const propsStable = useRef({
        [onfocusin]: onFocusIn,
        [onfocusout]: onFocusOut
    });
    return {
        [$hasCurrentFocusReturn]: {
            propsStable: propsStable.current,
            [$getCurrentFocused]: getFocused,
            [$getCurrentFocusedInner]: getFocusedInner,
        }
    };
});
//# sourceMappingURL=use-has-current-focus.js.map