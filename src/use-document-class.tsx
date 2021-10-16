import clsx from "clsx";
import { useEffect } from "preact/hooks";

type P = Parameters<typeof clsx>;

export function useDocumentClass(className: P[0], active?: boolean, element?: HTMLElement) {
    element ??= document.documentElement;
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
