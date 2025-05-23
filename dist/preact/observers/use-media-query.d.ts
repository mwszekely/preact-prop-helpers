/**
 * Allows a component to use the boolean result of a media query as part of its render.
 *
 * @remarks **Note the return type** is ***not*** a boolean; it is an object that contains
 * a boolean and a stable getter.
 *
 * Please note that there is a re-render penalty incurred by using this hook -- it will
 * always cause any component that uses it to re-render one extra time on mount as it
 * stores the result of the media query. This can be mitigated with the `defaultGuess`
 * parameter -- if you guess correctly (`true`/`false`), then there's no penalty. Hooray.
 *
 * @param query - Must be in parens, e.g. `(max-width: 600px)`
 * @param defaultGuess - Optional. If you pass the same value that's measured after rendering, no re-render will occur.
 * @returns `UseMediaQueryReturnType`.
 */
export declare function useMediaQuery(query: string | null | undefined, defaultGuess?: boolean): UseMediaQueryReturnType;
export interface UseMediaQueryReturnType {
    matches: boolean | null;
    getMatches(): boolean | null;
}
//# sourceMappingURL=use-media-query.d.ts.map