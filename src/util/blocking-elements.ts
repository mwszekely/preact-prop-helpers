

import type { DocumentWithBlockingElements } from "blocking-elements";



let be: DocumentWithBlockingElements["$blockingElements"];
(async () => {
    if (typeof window !== 'undefined') {
        let d = !!globalThis.document;
        globalThis.document ??= {} as any;

        /// @ts-expect-error
        await import("wicg-inert");
        await import("blocking-elements");
        be = (document as DocumentWithBlockingElements).$blockingElements;
        if (!d)
            delete (globalThis as any).document;
    }
})()

export function blockingElements() { return be!; }

