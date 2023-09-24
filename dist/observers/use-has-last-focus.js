import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { useEffect } from "../util/lib.js";
import { PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
const P = `PropNames.HasLastFocusParameters`;
const R = `PropNames.HasLastFocusReturnType`;
export const PNames = {
    onLastFocusedChanged: `${P}.onLastFocusedChanged`,
    onLastFocusedInnerChanged: `${P}.onLastFocusedInnerChanged`
};
export const RNames = {
    getLastFocused: `${R}.getLastFocused`,
    getLastFocusedInner: `${R}.getLastFocusedInner`
};
PropNames.HasLastFocusParameters ??= PNames;
PropNames.HasLastFocusReturn ??= RNames;
/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export const useHasLastFocus = monitored(function useHasLastFocus({ [PropNames.HasLastFocusParameters.onLastFocusedChanged]: onLastFocusedChanged, [PropNames.HasLastFocusParameters.onLastFocusedInnerChanged]: onLastFocusedInnerChanged, [PropNames.RefElementReturn.getElement]: getElement, ...void1 }) {
    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    assertEmptyObject(void1);
    const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, runImmediately);
    useEffect(() => {
        return () => {
            setLastFocused(false, undefined);
            setLastFocusedInner(false, undefined);
        };
    }, []);
    return {
        [PropNames.ActiveElementParameters.onLastActiveElementChange]: useStableCallback((lastActiveElement, _prevLastActiveElement, e) => {
            const selfElement = getElement();
            const focused = (selfElement != null && (selfElement == lastActiveElement));
            const focusedInner = (!!selfElement?.contains(lastActiveElement));
            setLastFocused(focused, e);
            setLastFocusedInner(focusedInner, e);
        }, []),
        [PropNames.HasLastFocusReturn.getLastFocused]: getLastFocused,
        [PropNames.HasLastFocusReturn.getLastFocusedInner]: getLastFocusedInner,
    };
});
//# sourceMappingURL=use-has-last-focus.js.map