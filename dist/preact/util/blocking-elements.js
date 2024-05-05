import "wicg-inert";
let be;
(async () => {
    let d = !!globalThis.document;
    globalThis.document ??= {};
    await import("blocking-elements");
    if (!d)
        delete globalThis.document;
})();
export function blockingElements() { return be; }
//# sourceMappingURL=blocking-elements.js.map