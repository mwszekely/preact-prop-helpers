/**
 * Allows for hiding the scroll bar of the root HTML element
 * without shifting the layout of the page more than adding a few pixels
 * of padding to the root element if necessary.
 */
export declare function useHideScroll(hideScroll: boolean): {
    getScrollbarWidth: () => number | null;
    getScrollbarHeight: () => number | null;
};
//# sourceMappingURL=use-hide-scroll.d.ts.map