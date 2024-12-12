import { usePassiveState } from "../preact-extensions/use-passive-state.js";
import { getDocument } from "../util/get-window.js";
import { useEffect } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";

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
export function useHideScroll(hideScroll: boolean): UseHideScrollReturnType {
    return useMonitoring(function useHideScroll(): UseHideScrollReturnType {
        const [getScrollbarWidth, setScrollbarWidth] = usePassiveState<number | null, never>(null);
        const [getScrollbarHeight, setScrollbarHeight] = usePassiveState<number | null, never>(null);

        useEffect(() => {
            const document = getDocument();
            if (hideScroll && document) {

                // When scrolling is resumed, we'll need to restore the original scroll positions
                // so we need to keep this information around
                const originalScrollTop = document.documentElement.scrollTop;
                const originalScrollLeft = document.documentElement.scrollLeft;

                // Measure the width of the page (minus the scrollbar)
                const widthWithScrollBar = document.documentElement.scrollWidth;
                const heightWithScrollBar = document.documentElement.scrollHeight;

                // Apply a class that hides the scrollbar.
                document.documentElement.classList.add("document-scroll-hidden");

                // In case multiple things are locking scroll, keep track of how many are doing that
                // (just add 1 on enable, subtract 1 on disable)
                document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString();

                // Measure the new width without a scrollbar 
                // so we can take the difference as the scrollbar width.
                const widthWithoutScrollBar = document.documentElement.scrollWidth;
                const heightWithoutScrollBar = document.documentElement.scrollHeight;
                let scrollbarWidth = (widthWithoutScrollBar - widthWithScrollBar);
                let scrollbarHeight = (heightWithoutScrollBar - heightWithScrollBar);

                // Failsafe -- if this measuring trick does something unexpected, just ignore it
                if (scrollbarWidth > 80)
                    scrollbarWidth = 0;
                if (scrollbarHeight > 80)
                    scrollbarHeight = 0;

                // Make our measurements available as CSS properties for general use
                document.documentElement.style.setProperty("--root-scrollbar-width", `${scrollbarWidth}px`);
                document.documentElement.style.setProperty("--root-scrollbar-height", `${scrollbarHeight}px`);
                document.documentElement.style.setProperty("--root-scrollstop-top", `${originalScrollTop}px`);
                document.documentElement.style.setProperty("--root-scrollstop-left", `${originalScrollLeft}px`);

                setScrollbarWidth(scrollbarWidth);
                setScrollbarHeight(scrollbarHeight);

                return () => {
                    // Undo all the things we just did
                    document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") - 1).toString();
                    if (document.documentElement.dataset["scrollHiders"] == "0") {

                        // If we were the last scroll-locking thing to stop, then remove the class that stops scrolling.
                        document.documentElement.removeAttribute("data-scroll-hiders");
                        document.documentElement.classList.remove("document-scroll-hidden");

                        // Also, restore the original scroll position
                        // We do this by forcing the scroll behavior to not be smooth
                        // (it's instant if nothing is set to smooth, https://www.w3.org/TR/cssom-view/#scrolling),
                        // scrolling, then restoring the original scroll behavior 
                        // (which was probably already auto anyway, but just to be safe)
                        const originalScrollBehavior = document.documentElement.style.scrollBehavior;
                        document.documentElement.style.scrollBehavior = "auto";
                        document.documentElement.scrollTo({ top: originalScrollTop, left: originalScrollLeft, behavior: "auto" });
                        document.documentElement.style.scrollBehavior = originalScrollBehavior;
                    }
                }

            }
        }, [hideScroll]);

        return { getScrollbarWidth, getScrollbarHeight };
    });
}

