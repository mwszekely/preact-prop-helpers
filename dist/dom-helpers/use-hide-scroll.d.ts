/**
 * Allows for hiding the scroll bar of the root HTML element
 * without shifting the layout of the page more than adding a fow pixels
 * of padding to the root element if necessary.
 * @param hideScroll
 */
export declare function useHideScroll(hideScroll: boolean): {
    getScrollbarWidth: () => number | null;
    getScrollbarHeight: () => number | null;
};
//# sourceMappingURL=use-hide-scroll.d.ts.map