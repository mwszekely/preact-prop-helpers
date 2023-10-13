/**
 * Allows you to inspect when the entire URL changes,
 * either because the hash changed or because the Back/Forward
 * browser buttons were pressed.
 *
 * @remarks If the URL is set programmatically
 * in a way that doesn't trigger either of those, like
 * `history.replaceState`, well, 🤷 there's no way to track that.
 * So beware of other libraries that modify page history out from under you.
 *
 * In general, you'll want to inspect a specific directory of
 * a path, or a specific query parameter value, not the
 * entire URL.
 */
export declare const useUrl: (onUrlChange: (url: string) => void) => readonly [() => string, (newUrlOrSetter: string | ((prev: string | undefined) => string), action: "push" | "replace") => void];
//# sourceMappingURL=use-url.d.ts.map