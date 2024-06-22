import { $asyncHandler, UseAsyncHandlerParameters, UseAsyncHandlerReturnType } from "../dom-helpers/use-async-handler.js";
import { $getElement, UseRefElementReturnType, $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { TargetedPick } from "../util/lib.js";
import { ElementProps, FocusEventType, KeyboardEventType, MouseEventType, Nullable, OmitStrong, PointerEventType, TargetedOmit, TouchEventType } from "../util/types.js";
import { $capture, $debounce, $throttle } from "../preact-extensions/use-async.js";
export declare const $pressParameters: unique symbol;
export declare const $onPressingChange: unique symbol;
export declare const $onPressSync: unique symbol;
export declare const $excludeSpace: unique symbol;
export declare const $excludeEnter: unique symbol;
export declare const $excludePointer: unique symbol;
export declare const $focusSelf: unique symbol;
export declare const $allowRepeatPresses: unique symbol;
export declare const $longPressThreshold: unique symbol;
export declare const $pressing: unique symbol;
export declare const $getIsPressing: unique symbol;
export declare const $longPress: unique symbol;
export declare const $asyncHandlerParameters: unique symbol;
export declare const $asyncHandlerReturn: unique symbol;
export type PressEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E>;
export type PressChangeEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E> | FocusEventType<E>;
export interface UsePressParameters<E extends EventTarget> extends TargetedPick<UseRefElementReturnType<E>, typeof $refElementReturn, typeof $getElement> {
    [$pressParameters]: UsePressParametersSelf<E>;
}
export interface UsePressParametersSelf<E extends EventTarget> {
    /**  */
    [$onPressingChange]: Nullable<OnPassiveStateChange<boolean, PressChangeEventReason<E>>>;
    /**
     * What should happen when this widget has been "pressed".
     *
     * This must be a sync event handler; async handlers must be taken care of externally.
     *
     * Setting to `null` or `undefined` effectively disables the press event handler.
     *
     * @nonstable
     */
    [$onPressSync]: Nullable<((e: PressEventReason<E>) => void)>;
    /** Pass a function that returns `true` to prevent the spacebar from contributing to press events @nonstable */
    [$excludeSpace]: Nullable<() => boolean>;
    /** Pass a function that returns `true` to prevent the enter key from contributing to press events @nonstable */
    [$excludeEnter]: Nullable<() => boolean>;
    /** Pass a function that returns `true` to prevent the pointer (mouse, touch, etc.) from contributing to press events @nonstable */
    [$excludePointer]: Nullable<() => boolean>;
    /**
     * Ensures that when a button is pressed it properly receives focus (even on iOS Safari).
     *
     * Generally, this should just be `e => e.focus()`
     * @param element - The element that is (presumably) about to receive focus
     *
     * @nonstable
     */
    [$focusSelf](element: E): void;
    /**
     * If `true`, holding down the `Enter` key will repeatedly fire press events as each sequential repeated keyboard event happens.
     */
    [$allowRepeatPresses]: Nullable<boolean>;
    /**
     * After this number of milliseconds have passed pressing down but not up, the returned `longPress` value will be set to `true`
     * and the user's actions will not fire an actual press event.
     */
    [$longPressThreshold]: Nullable<number>;
}
export interface UsePressReturnTypeSelf {
    /**
     * Sort of like when the CSS `:active` pseudo-element would apply,
     * but specifically for presses only, so it's a more accurate reflection
     * of what will happen for the user. Useful for styling mostly.
     */
    [$pressing]: boolean;
    /**
     * @stable
     */
    [$getIsPressing](): boolean;
    /**
     * Similar to pseudoActive, but for if the button as been pressed down for a determined length of time.
     */
    [$longPress]: boolean | null;
}
export interface UsePressReturnType<E extends Element> {
    pressReturn: UsePressReturnTypeSelf;
    props: ElementProps<E>;
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
export declare const usePress: <E extends Element>(args: UsePressParameters<E>) => UsePressReturnType<E>;
export interface UsePressAsyncParameters<E extends Element> extends OmitStrong<UsePressParameters<E>, typeof $pressParameters>, TargetedOmit<UsePressParameters<E>, typeof $pressParameters, typeof $onPressSync> {
    [$asyncHandlerParameters]: OmitStrong<UseAsyncHandlerParameters<PressEventReason<E>, void>, typeof $capture>;
}
export interface UsePressAsyncReturnType<E extends Element> extends UsePressReturnType<E> {
    [$asyncHandlerReturn]: UseAsyncHandlerReturnType<PressEventReason<E>, void>;
}
export declare function usePressAsync<E extends Element>({ [$asyncHandlerParameters]: { [$debounce]: debounce, [$throttle]: throttle, [$asyncHandler]: asyncHandler }, [$pressParameters]: pressParameters, [$refElementReturn]: refElementReturn }: UsePressAsyncParameters<E>): UsePressAsyncReturnType<E>;
/**
 * This function can be used to enable/disable button vibration pulses on an app-wide scale.
 *
 *
 * @param func - The function to run when a button is tapped. (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
 */
export declare function setPressVibrate(func: () => void): void;
//# sourceMappingURL=use-press.d.ts.map