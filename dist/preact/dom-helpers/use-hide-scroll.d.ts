export interface UseHideScrollReturnType {
    getScrollbarWidth: () => number | null;
    getScrollbarHeight: () => number | null;
}
/**
 * Allows for hiding the scroll bar of the root HTML element
 * without shifting the layout of the page by adding a few pixels
 * of padding to the root element if necessary.
 *
 * @param hideScroll - Whether the scroll bar is hidden or not (i.e. `true` to hide the scroll bar, `false` to allow it to be visible)
 */
export declare function useHideScroll(hideScroll: boolean): UseHideScrollReturnType;
//# sourceMappingURL=use-hide-scroll.d.ts.map