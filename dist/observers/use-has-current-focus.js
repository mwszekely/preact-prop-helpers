import { useCallback, useEffect, useRef } from "react";
import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function useHasCurrentFocus(args) {
    monitorCallCount(useHasCurrentFocus);
    const { hasCurrentFocusParameters: { onCurrentFocusedChanged: onFocusedChanged, onCurrentFocusedInnerChanged: onFocusedInnerChanged }, refElementReturn: { getElement } } = args;
    useEnsureStability("useHasCurrentFocus", onFocusedChanged, onFocusedInnerChanged, getElement);
    const [getFocused, setFocused] = usePassiveState(onFocusedChanged, returnFalse, runImmediately);
    const [getFocusedInner, setFocusedInner] = usePassiveState(onFocusedInnerChanged, returnFalse, runImmediately);
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
            setFocused(false);
            setFocusedInner(false);
        };
    }, []);
    const propsStable = useRef({
        onFocus: onFocusIn,
        onBlur: onFocusOut
    });
    useEffect(() => {
        return () => {
            setFocused(false);
            setFocusedInner(false);
        };
    }, []);
    return {
        hasCurrentFocusReturn: {
            propsStable: propsStable.current,
            getCurrentFocused: getFocused,
            getCurrentFocusedInner: getFocusedInner,
        }
    };
}
//# sourceMappingURL=use-has-current-focus.js.map