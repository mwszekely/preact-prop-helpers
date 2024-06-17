let be;
(async () => {
    if (typeof window !== undefined) {
        let d = !!globalThis.document;
        globalThis.document ??= {};
        /// @ts-expect-error
        await import("wicg-inert");
        await import("blocking-elements");
        if (!d)
            delete globalThis.document;
    }
})();
export function blockingElements() { return be; }
//# sourceMappingURL=blocking-elements.js.map