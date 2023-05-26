/**
 * Allows you to inspect when the entire URL changes,
 * either because the hash changed or because the Back/Forward
 * browser buttons were pressed (if the URL is set programmatically
 * in a way that doesn't trigger either of those, like
 * `history.replaceState`, well, 🤷 there's no way to track that).
 *
 * In general, you'll want to inspect a specific directory of
 * a path, or a specific query parameter value, not the
 * entire URL.
 */
export declare function useUrl(onUrlChange: (url: string) => void): readonly [() => string, (newUrlOrSetter: string | ((prev: string | undefined) => string), history2: "push" | "replace") => void];
//# sourceMappingURL=use-url.d.ts.map