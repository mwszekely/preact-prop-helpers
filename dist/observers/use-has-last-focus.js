import { PropNames_RefElementReturn_getElement } from "../dom-helpers/use-ref-element.js";
import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { PropNames_ActiveElementParameters_onLastActiveElementChange } from "./use-active-element.js";
const P = `PropNames.HasLastFocusParameters`;
const R = `PropNames.HasLastFocusReturnType`;
export const PropNames_HasLastFocusParameters_onLastFocusedChanged = `${P}.onLastFocusedChanged`;
export const PropNames_HasLastFocusParameters_onLastFocusedInnerChanged = `${P}.onLastFocusedInnerChanged`;
export const PropNames_HasLastFocusReturn_getLastFocused = `${R}.getLastFocused`;
export const PropNames_HasLastFocusReturn_getLastFocusedInner = `${R}.getLastFocusedInner`;
/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export const useHasLastFocus = monitored(function useHasLastFocus({ [PropNames_HasLastFocusParameters_onLastFocusedChanged]: onLastFocusedChanged, [PropNames_HasLastFocusParameters_onLastFocusedInnerChanged]: onLastFocusedInnerChanged, [PropNames_RefElementReturn_getElement]: getElement, ...void1 }) {
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
        [PropNames_ActiveElementParameters_onLastActiveElementChange]: useStableCallback((lastActiveElement, _prevLastActiveElement, e) => {
            const selfElement = getElement();
            const focused = (selfElement != null && (selfElement == lastActiveElement));
            const focusedInner = (!!selfElement?.contains(lastActiveElement));
            setLastFocused(focused, e);
            setLastFocusedInner(focusedInner, e);
        }, []),
        [PropNames_HasLastFocusReturn_getLastFocused]: getLastFocused,
        [PropNames_HasLastFocusReturn_getLastFocusedInner]: getLastFocusedInner,
    };
});
//# sourceMappingURL=use-has-last-focus.js.map