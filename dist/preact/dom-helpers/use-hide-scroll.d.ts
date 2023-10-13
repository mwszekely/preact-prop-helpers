/**
 * Allows for hiding the scroll bar of the root HTML element
 * without shifting the layout of the page by adding a few pixels
 * of padding to the root element if necessary.
 *
 * @param hideScroll - Whether the scroll bar is hidden or not (i.e. `true` to hide the scroll bar, `false` to allow it to be visible)
 */
export declare const useHideScroll: (hideScroll: boolean) => {
    getScrollbarWidth: () => number | null;
    getScrollbarHeight: () => number | null;
};
//# sourceMappingURL=use-hide-scroll.d.ts.map