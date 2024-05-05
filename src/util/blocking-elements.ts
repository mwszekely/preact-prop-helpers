

import type { DocumentWithBlockingElements } from "blocking-elements";
import "wicg-inert";

let be: DocumentWithBlockingElements["$blockingElements"];
(async () => {
    let d = !!globalThis.document;
    globalThis.document ??= {} as any;
    await import("blocking-elements");
    if (!d)
        delete (globalThis as any).document;
})()

export function blockingElements() { return be!; }

