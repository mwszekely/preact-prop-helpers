import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { onfocusin, onfocusout, useCallback, useEffect, useRef } from "../util/lib.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
const P = `PropNames.HasCurrentFocusParameters`;
const R = `PropNames.HasCurrentFocusReturn`;
export const PNames = {
    onCurrentFocusedChanged: `${P}.onCurrentFocusedChanged`,
    onCurrentFocusedInnerChanged: `${P}.onCurrentFocusedInnerChanged`
};
export const RNames = {
    getCurrentFocused: `${R}.getCurrentFocused`,
    getCurrentFocusedInner: `${R}.getCurrentFocusedInner`
};
PropNames.HasCurrentFocusParameters ??= PNames;
PropNames.HasCurrentFocusReturn ??= RNames;
/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
export const useHasCurrentFocus = monitored(function useHasCurrentFocus({ [PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged]: onCurrentFocusedChanged, [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged, [PropNames.RefElementReturn.getElement]: getElement }) {
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
        [PropNames.HasCurrentFocusReturn.getCurrentFocused]: getFocused,
        [PropNames.HasCurrentFocusReturn.getCurrentFocusedInner]: getFocusedInner,
        props: propsStable.current,
    };
});
//# sourceMappingURL=use-has-current-focus.js.map