
import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
//import { UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useStableCallback } from "./use-stable-callback";
import { useActiveElement, UseActiveElementParameters, UseActiveElementReturnType } from "./use-active-element";
import { returnFalse, useEnsureStability, usePassiveState } from "./use-passive-state";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "./use-ref-element";
import { useMergedProps } from "./use-merged-props";

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
        activeElementParameters: { onActiveElementChange, onLastActiveElementChange, ...activeElementParameters },
        hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ..._void }
    } = args;


    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    
    const [getLastFocused, setLastFocused] = usePassiveState<boolean>(onLastFocusedChanged, returnFalse);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState<boolean>(onLastFocusedInnerChanged, returnFalse);

    const { activeElementReturn } = useActiveElement({
        activeElementParameters: {
            onLastActiveElementChange: useCallback<NonNullable<typeof onLastActiveElementChange>>((lastActiveElement, prevLastActiveElement) => {
                const selfElement = getElement();
                const focused = (selfElement != null && (selfElement == lastActiveElement as Node | null));
                const focusedInner = (!!selfElement?.contains(lastActiveElement as Node | null));
                setLastFocused(focused);
                setLastFocusedInner(focusedInner);
                onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement);
            }, []),
            ...activeElementParameters
        },
    });

    return {
        activeElementReturn,
        hasLastFocusReturn: {
            getLastFocused,
            getLastFocusedInner,
        }
    };
}
