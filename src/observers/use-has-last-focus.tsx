
import { $getElement, UseRefElementReturnType, $refElementReturn } from "../dom-helpers/use-ref-element.js";

import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { assertEmptyObject } from "../util/assert.js";
import { TargetedPick, useCallback, useEffect } from "../util/lib.js";
import { Nullable } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { $onLastActiveElementChange, UseActiveElementParameters, UseActiveElementReturnType, $activeElementParameters, $activeElementReturn, useActiveElement } from "./use-active-element.js";

export const $hasLastFocusParameters = Symbol();
export const $hasLastFocusReturn = Symbol();
export const $onLastFocusedChanged = Symbol();
export const $onLastFocusedInnerChanged = Symbol();
export const $getLastFocused = Symbol();
export const $getLastFocusedInner = Symbol();

export interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     * 
     * @remarks This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     * 
     * @stable
     */
    [$onLastFocusedChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;

    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     * 
     * @stable
     */
    [$onLastFocusedInnerChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
}


export interface UseHasLastFocusParameters<T extends Node> extends UseActiveElementParameters, TargetedPick<UseRefElementReturnType<T>, typeof $refElementReturn, typeof $getElement> {
    [$hasLastFocusParameters]: UseHasLastFocusParametersSelf;
}

export interface HasLastFocusReturnTypeSelf {
    /** @stable */
    [$getLastFocused](): boolean;
    /** @stable */
    [$getLastFocusedInner](): boolean;
}

export interface UseHasLastFocusReturnType extends UseActiveElementReturnType {
    [$hasLastFocusReturn]: HasLastFocusReturnTypeSelf;
}

/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 * 
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 * 
 * @compositeParams
 */
export const useHasLastFocus = monitored(function useHasLastFocus<T extends Node>(args: UseHasLastFocusParameters<T>): UseHasLastFocusReturnType {
    const {
        [$refElementReturn]: { [$getElement]: getElement },
        [$activeElementParameters]: { [$onLastActiveElementChange]: onLastActiveElementChange, ...activeElementParameters },
        [$hasLastFocusParameters]: { [$onLastFocusedChanged]: onLastFocusedChanged, [$onLastFocusedInnerChanged]: onLastFocusedInnerChanged, ...void1 }
    } = args;

    assertEmptyObject(void1);


    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);

    const [getLastFocused, setLastFocused] = usePassiveState<boolean, UIEvent | undefined>(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState<boolean, UIEvent | undefined>(onLastFocusedInnerChanged, returnFalse, runImmediately);

    const { [$activeElementReturn]: activeElementReturn } = useActiveElement({
        [$activeElementParameters]: {
            [$onLastActiveElementChange]: useCallback<NonNullable<typeof onLastActiveElementChange>>((lastActiveElement, prevLastActiveElement, e) => {
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
            setLastFocused(false, undefined);
            setLastFocusedInner(false, undefined);
        }
    }, []);

    return {
        [$activeElementReturn]: activeElementReturn,
        [$hasLastFocusReturn]: {
            [$getLastFocused]: getLastFocused,
            [$getLastFocusedInner]: getLastFocusedInner,
        }
    };
})
