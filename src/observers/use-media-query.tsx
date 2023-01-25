import { useEffect } from "preact/hooks";
import { useState } from "../preact-extensions/use-state";

export function useMediaQuery(query: string | null | undefined) {
    const [matches, setMatches, getMatches] = useState(false);

    console.assert(!query || query.startsWith("("));

    useEffect(() => {
        if (!query)
            return;

        const q = matchMedia(query);

        const handler = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        }
        q.addEventListener("change", handler, { passive: true });
        return () => q.removeEventListener("change", handler);

    }, [query]);

    return { 
        matches, 
        getMatches 
    };
}

