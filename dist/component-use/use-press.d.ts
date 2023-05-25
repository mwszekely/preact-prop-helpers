import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state.js";
import { ElementProps, FocusEventType, KeyboardEventType, MouseEventType, PointerEventType, TouchEventType } from "../util/types.js";
export type PressEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E>;
export type PressChangeEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E> | FocusEventType<E>;
export interface UsePressParameters<E extends EventTarget> {
    refElementReturn: Required<Pick<UseRefElementReturnType<E>["refElementReturn"], "getElement">>;
    pressParameters: {
        onPressingChange?: OnPassiveStateChange<boolean, PressChangeEventReason<E>>;
        /**
         * What should happen when this widget has been "pressed".
         *
         * This must be a sync event handler; async handlers must be taken care of externally.
         *
         * Setting to `null` or `undefined` effectively disables the press event handler.
         */
        onPressSync: ((e: PressEventReason<E>) => void) | null | undefined;
        /** Pass a function that returns `true` to prevent the spacebar from contributing to press events */
        excludeSpace?(): boolean;
        /** Pass a function that returns `true` to prevent the enter key from contributing to press events */
        excludeEnter?(): boolean;
        /** Pass a function that returns `true` to prevent the pointer (mouse, touch, etc.) from contributing to press events */
        excludePointer?(): boolean;
        /**
         * Whether certain methods of pressing this component should be deactivated.
         *
         * For example, during typeahead, the space key shouldn't count as a press, it should just count for the search.
         *
         * If true, then all presses are disabled.  If false/undefined/null, no presses are disabled.
         */
        /**
         * Ensures that when a button is pressed it properly receives focus (even on iOS Safari).
         *
         * Generally, this should just be `e => e.focus()`
         * @param element
         */
        focusSelf(element: E): void;
        /**
         * If `true`, holding down the `Enter` key will repeatedly fire press events as each sequential repeated keyboard event happens.
         */
        allowRepeatPresses?: boolean;
        /**
         * After this number of milliseconds have passed pressing down but not up, the returned `longPress` value will be set to `true`
         * and the user's actions will not fire an actual press event.
         */
        longPressThreshold?: number | null;
    };
}
export interface UsePressReturnType<E extends Element> {
    pressReturn: {
        /**
         * Sort of like when the CSS `:active` pseudo-element would apply,
         * but specifically for presses only, so it's a more accurate reflection
         * of what will happen for the user. Useful for styling mostly.
         */
        pressing: boolean;
        getIsPressing(): boolean;
        /**
         * Similar to pseudoActive, but for if the button as been pressed down for a determined length of time.
         */
        longPress: boolean | null;
    };
    props: ElementProps<E>;
}
/**
 * Adds the necessary event handlers to create a "press"-like event for
 * any element, whether it's a native &lt;button> or regular &lt;div>,
 * and allows for a "long press" that can be used to,
 * e.g., show a tooltip *instead* of activating a press.
 *
 * Notably, the following cases are covered:
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text, it just presses the button twice.
 * * Text selection that happens to end/start with this element won't invoke a press.
 * * The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 *
 * In addition, returns a "more accurate" CSS `active` and `hover`; more accurate
 * in that `hover` won't mess up mobile devices that see `hover` and mess up your click events,
 * and in that `active` accurately displays when a press would occur or not.
 *
 * @param onClickSync
 * @param exclude Whether the polyfill shouldn't apply (can specify for specific interactions)
 */
export declare function usePress<E extends Element>(args: UsePressParameters<E>): UsePressReturnType<E>;
/**
 * This function can be used to enable/disable button vibration pulses on an app-wide scale.
 *
 *
 * @param func The function to run when a button is tapped.
 * (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
 */
export declare function setPressVibrate(func: () => void): void;
//# sourceMappingURL=use-press.d.ts.map