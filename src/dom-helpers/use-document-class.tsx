import { clsx } from "clsx";
import { useEffect } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";

export function getDocument(element?: Node) { return (element?.ownerDocument ?? document ?? window.document ?? globalThis.document); }

type P = Parameters<typeof clsx>;

export function useDocumentClass(className: P[0], active?: boolean, element?: HTMLElement) {
    monitorCallCount(useDocumentClass);
    element ??= getDocument().documentElement;
    className = clsx(className);

    useEffect(() => {
        if (element) {
            if (active !== false) {
                element.classList.add(className as string);
                return () => element!.classList.remove(className as string);
            }
        }

    }, [className, active, element]);

}
