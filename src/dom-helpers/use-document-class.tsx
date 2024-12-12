import { clsx } from "clsx";
import { getDocument } from "../util/get-window.js";
import { useEffect } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";

type P = Parameters<typeof clsx>;

/**
 * Allows adding/removing a CSS class to the `window`, `document`, or other global `HTMLElement`.
 * 
 * @param className - The class (as a string) to be adding/removing
 * @param active - If `true`, the default, then the class is added to the element. If `false`, it's removed.
 * @param element - The element to affect. By default, it's the root `<html>` element
 * 
 * #__NO_SIDE_EFFECTS__
 */
export function useDocumentClass(className: P[0], active?: boolean, element?: HTMLElement) {
    return useMonitoring(function useDocumentClass(): void {
        element ??= getDocument()?.documentElement;
        className = clsx(className);

        useEffect(() => {
            if (element) {
                if (active !== false) {
                    element.classList.add(className as string);
                    return () => element!.classList.remove(className as string);
                }
            }

        }, [className, active, element]);
    });
}
