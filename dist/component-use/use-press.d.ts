import { PropNames_RefElementReturn_getElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { ElementProps, FocusEventType, KeyboardEventType, MouseEventType, Nullable, PointerEventType, TouchEventType } from "../util/types.js";
export declare const PropNames_PressParameters_onPressingChange = "PropNames.PressParameters.onPressingChange";
export declare const PropNames_PressParameters_onPressSync = "PropNames.PressParameters.onPressSync";
export declare const PropNames_PressParameters_excludeSpace = "PropNames.PressParameters.excludeSpace";
export declare const PropNames_PressParameters_excludeEnter = "PropNames.PressParameters.excludeEnter";
export declare const PropNames_PressParameters_excludePointer = "PropNames.PressParameters.excludePointer";
export declare const PropNames_PressParameters_focusSelf = "PropNames.PressParameters.focusSelf";
export declare const PropNames_PressParameters_allowRepeatPresses = "PropNames.PressParameters.allowRepeatPresses";
export declare const PropNames_PressParameters_longPressThreshold = "PropNames.PressParameters.longPressThreshold";
export declare const PropNames_PressReturn_pressing = "PropNames.PressReturn.pressing";
export declare const PropNames_PressReturn_getIsPressing = "PropNames.PressReturn.getIsPressing";
export declare const PropNames_PressReturn_longPress = "PropNames.PressReturn.longPress";
export type PressEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E>;
export type PressChangeEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E> | FocusEventType<E>;
export interface UsePressParameters<E extends EventTarget> extends UsePressParametersSelf<E>, Pick<UseRefElementReturnType<E>, typeof PropNames_RefElementReturn_getElement> {
}
export interface UsePressParametersSelf<E extends EventTarget> {
    /**  */
    [PropNames_PressParameters_onPressingChange]: Nullable<OnPassiveStateChange<boolean, PressChangeEventReason<E>>>;
    /**
     * What should happen when this widget has been "pressed".
     *
     * This must be a sync event handler; async handlers must be taken care of externally.
     *
     * Setting to `null` or `undefined` effectively disables the press event handler.
     *
     * @nonstable
     */
    [PropNames_PressParameters_onPressSync]: Nullable<((e: PressEventReason<E>) => void)>;
    /** Pass a function that returns `true` to prevent the spacebar from contributing to press events @nonstable */
    [PropNames_PressParameters_excludeSpace]: Nullable<() => boolean>;
    /** Pass a function that returns `true` to prevent the enter key from contributing to press events @nonstable */
    [PropNames_PressParameters_excludeEnter]: Nullable<() => boolean>;
    /** Pass a function that returns `true` to prevent the pointer (mouse, touch, etc.) from contributing to press events @nonstable */
    [PropNames_PressParameters_excludePointer]: Nullable<() => boolean>;
    /**
     * Ensures that when a button is pressed it properly receives focus (even on iOS Safari).
     *
     * Generally, this should just be `e => e.focus()`
     * @param element - The element that is (presumably) about to receive focus
     *
     * @nonstable
     */
    [PropNames_PressParameters_focusSelf](element: E): void;
    /**
     * If `true`, holding down the `Enter` key will repeatedly fire press events as each sequential repeated keyboard event happens.
     */
    [PropNames_PressParameters_allowRepeatPresses]: Nullable<boolean>;
    /**
     * After this number of milliseconds have passed pressing down but not up, the returned `longPress` value will be set to `true`
     * and the user's actions will not fire an actual press event.
     */
    [PropNames_PressParameters_longPressThreshold]: Nullable<number>;
}
export interface UsePressReturnTypeSelf {
    /**
     * Sort of like when the CSS `:active` pseudo-element would apply,
     * but specifically for presses only, so it's a more accurate reflection
     * of what will happen for the user. Useful for styling mostly.
     */
    [PropNames_PressReturn_pressing]: boolean;
    /**
     * @stable
     */
    [PropNames_PressReturn_getIsPressing](): boolean;
    /**
     * Similar to pseudoActive, but for if the button as been pressed down for a determined length of time.
     */
    [PropNames_PressReturn_longPress]: boolean | null;
}
export interface UsePressReturnType<E extends Element> extends UsePressReturnTypeSelf {
    props: ElementProps<E>[];
}
/**
 * Adds the necessary event handlers to create a "press"-like event for
 * any element, whether it's a native &lt;button&gt; or regular &lt;div&gt;,
 * and allows for a "long press" that can be used to,
 * e.g., show a tooltip *instead* of activating a press.
 *
 * @remarks
 * Notably, the following cases are covered:
 * ```md-literal
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text, it just presses the button twice.
 * * Text selection that happens to end/start with this element won't invoke a press.
 * * The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 * ```
 *
 * In addition, returns a "more accurate" CSS `active` and `hover`; more accurate
 * in that `hover` won't mess up mobile devices that see `hover` and mess up your click events,
 * and in that `active` accurately displays when a press would occur or not.
 *
 * {@include } {@link setPressVibrate}
 *
 * @compositeParams
 *
 */
export declare const usePress: <E extends Element>({ [PropNames_RefElementReturn_getElement]: getElement, [PropNames_PressParameters_focusSelf]: focusSelf, [PropNames_PressParameters_onPressSync]: onPressSync, [PropNames_PressParameters_allowRepeatPresses]: allowRepeatPresses, [PropNames_PressParameters_longPressThreshold]: longPressThreshold, [PropNames_PressParameters_excludeEnter]: ee, [PropNames_PressParameters_excludePointer]: ep, [PropNames_PressParameters_excludeSpace]: es, [PropNames_PressParameters_onPressingChange]: opc, ..._void1 }: UsePressParameters<E>) => UsePressReturnType<E>;
/**
 * This function can be used to enable/disable button vibration pulses on an app-wide scale.
 *
 *
 * @param func - The function to run when a button is tapped. (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
 */
export declare function setPressVibrate(func: () => void): void;
//# sourceMappingURL=use-press.d.ts.map