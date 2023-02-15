import { useEffect, useRef } from "preact/hooks";
import { useState } from "../preact-extensions/use-state";

export function useMediaQuery(query: string | null | undefined) {
    const mediaList = useRef<MediaQueryList | null>(null);
    const [matches, setMatches, getMatches] = useState(false);

    console.assert(!query || query.startsWith("("));

    useEffect(() => {
        if (!query)
            return;

        mediaList.current = matchMedia(query);

        const handler = (e: MediaQueryListEvent) => {
            setMatches(e.matches);
        }

        mediaList.current.addEventListener("change", handler);
        return () => mediaList.current?.removeEventListener("change", handler);

    }, [query]);

    return {
        matches,
        getMatches
    };
}

