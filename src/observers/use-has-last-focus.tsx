
import { useCallback, useEffect } from "preact/hooks";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useActiveElement, UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element.js";

export interface UseHasLastFocusParameters<T extends Node> extends UseActiveElementParameters {
    refElementReturn: Pick<UseRefElementReturnType<T>["refElementReturn"], "getElement">;
    hasLastFocusParameters: {

        /**
         * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
         * 
         * This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
         */
        onLastFocusedChanged: null | ((focused: boolean, prevFocused: boolean | undefined) => void);

        /**
         * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
         */
        onLastFocusedInnerChanged: null | ((focused: boolean, prevFocused: boolean | undefined) => void);
    }
}

export interface UseHasLastFocusReturnType extends UseActiveElementReturnType {
    hasLastFocusReturn: {
        /** STABLE */
        getLastFocused(): boolean;
        /** STABLE */
        getLastFocusedInner(): boolean;
    }
}

export function useHasLastFocus<T extends Node>(args: UseHasLastFocusParameters<T>): UseHasLastFocusReturnType {
    const {
        refElementReturn: { getElement },
        activeElementParameters: { onLastActiveElementChange, ...activeElementParameters },
        hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ..._void }
    } = args;


    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    
    const [getLastFocused, setLastFocused] = usePassiveState<boolean, UIEvent>(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState<boolean, UIEvent>(onLastFocusedInnerChanged, returnFalse, runImmediately);

    const { activeElementReturn } = useActiveElement({
        activeElementParameters: {
            onLastActiveElementChange: useCallback<NonNullable<typeof onLastActiveElementChange>>((lastActiveElement, prevLastActiveElement, e) => {
                const selfElement = getElement();
                const focused = (selfElement != null && (selfElement == lastActiveElement as Node | null));
                const focusedInner = (!!selfElement?.contains(lastActiveElement as Node | null));
                setLastFocused(focused, e);
                setLastFocusedInner(focusedInner, e);
                onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement, e);
            }, []),
            ...activeElementParameters
        },
    });

    useEffect(() => {
        return () => {
            setLastFocused(false);
            setLastFocusedInner(false);
        }
    }, []);

    return {
        activeElementReturn,
        hasLastFocusReturn: {
            getLastFocused,
            getLastFocusedInner,
        }
    };
}
