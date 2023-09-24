
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange, returnFalse, runImmediately, useEnsureStability, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { assertEmptyObject } from "../util/assert.js";
import { useEffect } from "../util/lib.js";
import { Nullable, PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseActiveElementParameters } from "./use-active-element.js";

declare module "../util/types.js" { interface PropNames { HasLastFocusParameters: typeof PNames } }
declare module "../util/types.js" { interface PropNames { HasLastFocusReturn: typeof RNames } }

const P = `PropNames.HasLastFocusParameters`;
const R = `PropNames.HasLastFocusReturnType`;


export const PNames = {
    onLastFocusedChanged: `${P}.onLastFocusedChanged`,
    onLastFocusedInnerChanged: `${P}.onLastFocusedInnerChanged`
} as const;

export const RNames = {
    getLastFocused: `${R}.getLastFocused`,
    getLastFocusedInner: `${R}.getLastFocusedInner`
} as const;

PropNames.HasLastFocusParameters ??=  PNames;
PropNames.HasLastFocusReturn ??=  RNames;

export interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     * 
     * @remarks This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     * 
     * @stable
     */
    [PropNames.HasLastFocusParameters.onLastFocusedChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;

    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     * 
     * @stable
     */
    [PropNames.HasLastFocusParameters.onLastFocusedInnerChanged]: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
}



export interface HasLastFocusReturnTypeSelf {
    /** @stable */
    [PropNames.HasLastFocusReturn.getLastFocused](): boolean;
    /** @stable */
    [PropNames.HasLastFocusReturn.getLastFocusedInner](): boolean;
}

export interface UseHasLastFocusParameters<T extends Node> extends UseHasLastFocusParametersSelf, Pick<UseRefElementReturnType<T>, (typeof PropNames)["RefElementReturn"]["getElement"]> { }
export interface UseHasLastFocusReturnType extends HasLastFocusReturnTypeSelf, Pick<UseActiveElementParameters, (typeof PropNames)["ActiveElementParameters"]["onLastActiveElementChange"]> { }

/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 * 
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 * 
 * @compositeParams
 */
export const useHasLastFocus = monitored(function useHasLastFocus<T extends Node>({
    [PropNames.HasLastFocusParameters.onLastFocusedChanged]: onLastFocusedChanged,
    [PropNames.HasLastFocusParameters.onLastFocusedInnerChanged]: onLastFocusedInnerChanged,
    [PropNames.RefElementReturn.getElement]: getElement,
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
        [PropNames.ActiveElementParameters.onLastActiveElementChange]: useStableCallback((lastActiveElement, _prevLastActiveElement, e) => {
            const selfElement = getElement();
            const focused = (selfElement != null && (selfElement == lastActiveElement as Node | null));
            const focusedInner = (!!selfElement?.contains(lastActiveElement as Node | null));
            setLastFocused(focused, e);
            setLastFocusedInner(focusedInner, e);
        }, []),
        [PropNames.HasLastFocusReturn.getLastFocused]: getLastFocused,
        [PropNames.HasLastFocusReturn.getLastFocusedInner]: getLastFocusedInner,
    };
})
