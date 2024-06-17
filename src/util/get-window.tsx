// eslint-disable-next-line no-restricted-globals
export function getWindow(element?: Node | null | undefined): Window | undefined { return (typeof window == "undefined") ? undefined : ((element?.ownerDocument?.defaultView ?? globalThis ?? {}) as any as Window); }
// eslint-disable-next-line no-restricted-globals
export function getDocument(element?: Node | null | undefined): Document | undefined { return (typeof window == "undefined") ? undefined : (element?.ownerDocument ?? (getWindow() as Window)?.document as Document) ?? undefined; }