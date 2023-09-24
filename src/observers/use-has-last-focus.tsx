
import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { useEffect } from "../util/lib.js";
import { Nullable } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { PropNames_ActiveElementParameters_onLastActiveElementChange, UseActiveElementParameters } from "./use-active-element.js";

const P = `PropNames.HasLastFocusParameters`;
const R = `PropNames.HasLastFocusReturnType`;

export const PropNames_HasLastFocusParameters_onLastFocusedChanged = `${P}.onLastFocusedChanged`;
export const PropNames_HasLastFocusParameters_onLastFocusedInnerChanged = `${P}.onLastFocusedInnerChanged`;
export const PropNames_HasLastFocusReturn_getLastFocused = `${R}.getLastFocused`;
export const PropNames_HasLastFocusReturn_getLastFocusedInner = `${R}.getLastFocusedInner`;

export interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     * 
     * @remarks This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     * 
     * @stable
     */
    [PropNames_HasLastFocusParameters_onLastFocusedChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;

    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     * 
     * @stable
     */
    [PropNames_HasLastFocusParameters_onLastFocusedInnerChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
}



export interface HasLastFocusReturnTypeSelf {
    /** @stable */
    [PropNames_HasLastFocusReturn_getLastFocused](): boolean;
    /** @stable */
    [PropNames_HasLastFocusReturn_getLastFocusedInner](): boolean;
}

export interface UseHasLastFocusParameters<T extends Node> extends UseHasLastFocusParametersSelf, Pick<UseRefElementReturnType<T>, typeof PropNames_RefElementReturn_getElement> { }
export interface UseHasLastFocusReturnType extends HasLastFocusReturnTypeSelf, Pick<UseActiveElementParameters, typeof PropNames_ActiveElementParameters_onLastActiveElementChange> { }

/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 * 
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 * 
 * @compositeParams
 */
export const useHasLastFocus = monitored(function useHasLastFocus<T extends Node>({
    [PropNames_HasLastFocusParameters_onLastFocusedChanged]: onLastFocusedChanged,
    [PropNames_HasLastFocusParameters_onLastFocusedInnerChanged]: onLastFocusedInnerChanged,
    [PropNames_RefElementReturn_getElement]: getElement,
    ...void1
}: UseHasLastFocusParameters<T>): UseHasLastFocusReturnType {
    useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
    assertEmptyObject(void1);

    const [getLastFocused, setLastFocused] = usePassiveState<boolean, UIEvent | undefined>(onLastFocusedChanged, returnFalse, runImmediately);
    const [getLastFocusedInner, setLastFocusedInner] = usePassiveState<boolean, UIEvent | undefined>(onLastFocusedInnerChanged, returnFalse, runImmediately);

    useEffect(() => {
        return () => {
            setLastFocused(false, undefined);
            setLastFocusedInner(false, undefined);
        }
    }, []);

    return {
        [PropNames_ActiveElementParameters_onLastActiveElementChange]: useStableCallback((lastActiveElement, _prevLastActiveElement, e) => {
            const selfElement = getElement();
            const focused = (selfElement != null && (selfElement == lastActiveElement as Node | null));
            const focusedInner = (!!selfElement?.contains(lastActiveElement as Node | null));
            setLastFocused(focused, e);
            setLastFocusedInner(focusedInner, e);
        }, []),
        [PropNames_HasLastFocusReturn_getLastFocused]: getLastFocused,
        [PropNames_HasLastFocusReturn_getLastFocusedInner]: getLastFocusedInner,
    };
})
