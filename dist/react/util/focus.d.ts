import "./mode.js";
/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
export declare function focus(e: Element | null): void;
/**
 * When an element unmounts, default HTML behavior is to just send focus to the body, which is wildly unhelpful. It means you lose your place in the keyboard tab order.
 *
 * If you still have access to the element that's unmounting, or perhaps its parent from beforehand, this will find the next suitable element to send focus to instead of the body.
 *
 * **Important**: This function is linear on the number of DOM nodes in your document, so it's not particularly fast. Only call it once when you need its value, not every time tab focus changed or something.
 */
export declare function findBackupFocus(unmountingElement: Element | null | undefined): HTMLElement;
//# sourceMappingURL=focus.d.ts.map