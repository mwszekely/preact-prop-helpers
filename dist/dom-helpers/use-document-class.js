import { clsx } from "clsx";
import { useEffect } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function getDocument(element) { return (element?.ownerDocument ?? document ?? window.document ?? globalThis.document); }
export function useDocumentClass(className, active, element) {
    monitorCallCount(useDocumentClass);
    element ??= getDocument().documentElement;
    className = clsx(className);
    useEffect(() => {
        if (element) {
            if (active !== false) {
                element.classList.add(className);
                return () => element.classList.remove(className);
            }
        }
    }, [className, active, element]);
}
//# sourceMappingURL=use-document-class.js.map