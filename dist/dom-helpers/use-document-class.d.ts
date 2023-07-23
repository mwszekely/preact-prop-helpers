import { clsx } from "clsx";
export declare function getDocument(element?: Node): Document;
type P = Parameters<typeof clsx>;
/**
 * Allows adding/removing a CSS class to the `window`, `document`, or other global `HTMLElement`.
 *
 * @param className - The class (as a string) to be adding/removing
 * @param active - If `true`, the default, then the class is added to the element. If `false`, it's removed.
 * @param element - The element to affect. By default, it's the root `<html>` element
 */
export declare function useDocumentClass(className: P[0], active?: boolean, element?: HTMLElement): void;
export {};
//# sourceMappingURL=use-document-class.d.ts.map