import { PropNames_RefElementReturn_getElement } from "../dom-helpers/use-ref-element.js";
import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { onfocusin, onfocusout, useCallback, useEffect, useRef } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
const P = `PropNames.HasCurrentFocusParameters`;
const R = `PropNames.HasCurrentFocusReturn`;
export const PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged = `${P}.onCurrentFocusedChanged`;
export const PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged = `${P}.onCurrentFocusedInnerChanged`;
export const PropNames_HasCurrentFocusReturn_getCurrentFocused = `${R}.getCurrentFocused`;
export const PropNames_HasCurrentFocusReturn_getCurrentFocusedInner = `${R}.getCurrentFocusedInner`;
/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
export const useHasCurrentFocus = monitored(function useHasCurrentFocus({ [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged, [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged, [PropNames_RefElementReturn_getElement]: getElement }) {
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
        [PropNames_HasCurrentFocusReturn_getCurrentFocused]: getFocused,
        [PropNames_HasCurrentFocusReturn_getCurrentFocusedInner]: getFocusedInner,
        props: propsStable.current,
    };
});
//# sourceMappingURL=use-has-current-focus.js.map