import { useState } from "../preact-extensions/use-state.js";
import { useCallback, useLayoutEffect, useRef } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";

/**
 * 
 * Allows a component to use the boolean result of a media query as part of its render.
 * 
 * @remarks Please note that there is a re-render penalty incurred by using this hook -- it will
 * always cause any component that uses it to re-render one extra time on mount as it
 * stores the result of the media query. This can be mitigated with the `defaultGuess`
 * parameter -- if you guess correctly (`true`/`false`), then there's no penalty. Hooray.
 * 
 * @param query - Must be in parens, e.g. `(max-width: 600px)`
 * @param defaultGuess - Optional. If you pass the same value that's measured after rendering, no re-render will occur.
 * @returns `UseMediaQueryReturnType`
 */
export const useMediaQuery = monitored(function useMediaQuery(query: string | null | undefined, defaultGuess?: boolean): UseMediaQueryReturnType {

    if (typeof "window" === "undefined") {
        const matches = defaultGuess || false;
        return {
            matches,
            getMatches: useCallback(() => matches, [matches])
        };
    }
    else {

        const queryList = useRef<MediaQueryList | null>();

        // queryList.current ??= (query == null ? null : matchMedia(query))
        // This ^^^ is not done because it seems to cause reflows at inopportune moments.
        // Specifically on iOS Safari (tested on 12).
        // It's always iOS Safari.
        // At any rate it botches transitions that happen on a just-mounted component, somehow.
        const [matches, setMatches, getMatches] = useState<null | boolean>(defaultGuess ?? null);

        console.assert(!query || query.startsWith("("));

        useLayoutEffect(() => {
            if (!query)
                return;

            queryList.current = matchMedia(query);
            setMatches(queryList.current.matches || false);

            const handler = (e: MediaQueryListEvent) => {
                setMatches(e.matches);
            }

            queryList.current.addEventListener("change", handler, { passive: true });
            return () => queryList.current?.removeEventListener("change", handler);

        }, [query]);

        return {
            matches,
            getMatches
        };
    }
})

export interface UseMediaQueryReturnType {
    matches: boolean | null;
    getMatches(): boolean | null;
}

