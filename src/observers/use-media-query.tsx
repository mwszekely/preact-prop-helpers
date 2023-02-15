import { useLayoutEffect, useRef } from "preact/hooks";
import { useState } from "../preact-extensions/use-state";

export function useMediaQuery(query: string | null | undefined) {
    const queryList = useRef<MediaQueryList | null>();
    queryList.current ??= (query == null ? null : matchMedia(query))
    const [matches, setMatches, getMatches] = useState(queryList.current?.matches || false);

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

