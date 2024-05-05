import { clsx } from "clsx";
import { getDocument } from "../util/get-window.js";
import { useEffect } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
/**
 * Allows adding/removing a CSS class to the `window`, `document`, or other global `HTMLElement`.
 *
 * @param className - The class (as a string) to be adding/removing
 * @param active - If `true`, the default, then the class is added to the element. If `false`, it's removed.
 * @param element - The element to affect. By default, it's the root `<html>` element
 */
export const useDocumentClass = monitored(function useDocumentClass(className, active, element) {
    element ??= getDocument()?.documentElement;
    className = clsx(className);
    useEffect(() => {
        if (element) {
            if (active !== false) {
                element.classList.add(className);
                return () => element.classList.remove(className);
            }
        }
    }, [className, active, element]);
});
//# sourceMappingURL=use-document-class.js.map