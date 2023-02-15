import { useLayoutEffect, useRef } from "preact/hooks";
import { useState } from "../preact-extensions/use-state";

export function useMediaQuery(query: string | null | undefined) {
    const [matches, setMatches, getMatches] = useState(false);

    console.assert(!query || query.startsWith("("));

    useLayoutEffect(() => {
        if (!query)
            return;

        const queryList = matchMedia(query);
        setMatches(queryList.matches);

        const handler = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        }

        queryList.addEventListener("change", handler, { passive: true });
        return () => queryList.removeEventListener("change", handler);

    }, [query]);

    return {
        matches,
        getMatches
    };
}

