
import { UseRefElement } from "../dom-helpers/use-ref-element.js";

import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback, useEffect } from "../util/lib.js";
import { Nullable, Parameter, StandardDepsPick, StandardHook } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseActiveElement, useActiveElement } from "./use-active-element.js";

export interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     * 
     * @remarks This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     * 
     * @stable
     */
    onLastFocusedChanged: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;

    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     * 
     * @stable
     */
    onLastFocusedInnerChanged: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
}

export interface UseHasLastFocusReturnTypeSelf {
    /** @stable */
    getLastFocused(): boolean;
    /** @stable */
    getLastFocusedInner(): boolean;
}


export type UseHasLastFocus<E extends Element> = StandardHook<
    "hasLastFocus", 
    UseHasLastFocusParametersSelf, [ 
        StandardDepsPick<"params", UseActiveElement, "activeElementParameters">,
        StandardDepsPick<"return", UseRefElement<E>, "refElementReturn", "pick", "getElement">
    ],
    UseHasLastFocusReturnTypeSelf, [
        StandardDepsPick<"return", UseActiveElement>
    ]
>;


/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 * 
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 * 
 * @compositeParams
 */
export const useHasLastFocus = monitored(function useHasLastFocus<T extends Element>(args: Parameter<UseHasLastFocus<T>>): ReturnType<UseHasLastFocus<T>> {
    const {
        refElementReturn: { getElement },
        activeElementParameters: { onLastActiveElementChange, ...activeElementParameters },
        hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ...void1 },
        ...void3
    } = args;

    assertEmptyObject(void1);


    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);

    const [getLastFocused, setLastFocused] = usePassiveState<boolean, UIEvent | undefined>(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState<boolean, UIEvent | undefined>(onLastFocusedInnerChanged, returnFalse, runImmediately);

    const { activeElementReturn, ...void2 } = useActiveElement({
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
            setLastFocused(false, undefined);
            setLastFocusedInner(false, undefined);
        }
    }, []);

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        activeElementReturn,
        hasLastFocusReturn: {
            getLastFocused,
            getLastFocusedInner,
        }
    };
})
