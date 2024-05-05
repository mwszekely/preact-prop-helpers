// eslint-disable-next-line no-restricted-globals
export function getWindow(element) { return (typeof window != "undefined") ? undefined : (element?.ownerDocument?.defaultView ?? globalThis ?? {}); }
// eslint-disable-next-line no-restricted-globals
export function getDocument(element) { return (typeof window != "undefined") ? undefined : (element?.ownerDocument ?? getWindow()?.document) ?? undefined; }
//# sourceMappingURL=get-window.js.map