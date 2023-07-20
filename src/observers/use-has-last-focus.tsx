
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { assertEmptyObject } from "../util/assert.js";
import { TargetedPick, useCallback, useEffect } from "../util/lib.js";
import { Nullable } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { UseActiveElementParameters, UseActiveElementReturnType, useActiveElement } from "./use-active-element.js";

export interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     * 
     * This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     */
    onLastFocusedChanged?: Nullable<((focused: boolean, prevFocused: boolean | undefined) => void)>;

    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     */
    onLastFocusedInnerChanged?: Nullable<((focused: boolean, prevFocused: boolean | undefined) => void)>;
}


export interface UseHasLastFocusParameters<T extends Node> extends UseActiveElementParameters, TargetedPick<UseRefElementReturnType<T>, "refElementReturn", "getElement"> {
    hasLastFocusParameters: UseHasLastFocusParametersSelf;
}

export interface HasLastFocusReturnTypeSelf {
    /** STABLE */
    getLastFocused(): boolean;
    /** STABLE */
    getLastFocusedInner(): boolean;
}

export interface UseHasLastFocusReturnType extends UseActiveElementReturnType {
    hasLastFocusReturn: HasLastFocusReturnTypeSelf;
}

/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 * 
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 * 
 * @compositeParams
 */
export function useHasLastFocus<T extends Node>(args: UseHasLastFocusParameters<T>): UseHasLastFocusReturnType {
    monitorCallCount(useHasLastFocus);

    const {
        refElementReturn: { getElement },
        activeElementParameters: { onLastActiveElementChange, ...activeElementParameters },
        hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ...void1 }
    } = args;

    assertEmptyObject(void1);


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
