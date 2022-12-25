import { useEffect, useRef } from "preact/hooks";

export function useWhatCausedRender(who: string, allPropsAndState: any) {
    const prev = useRef<any>(undefined!);
    useEffect(() => {
        const differences = describeDifferences(who, allPropsAndState, prev.current);
        if (differences.length)
            console.log(differences);
        prev.current = allPropsAndState
    });
}

interface DifferenceInfo {
    path: string;
    oldValue: unknown;
    newValue: unknown;
}

function describeDifferences(path: string, lhs: any, rhs: any): DifferenceInfo[] {
    if (typeof lhs != typeof rhs) {
        return [{ path, oldValue: lhs, newValue: rhs }];
    }
    if (typeof lhs == "number" || typeof lhs == "string" || typeof rhs == "boolean" || lhs == null || rhs == null) {
        if (lhs != rhs)
            return [{ path, oldValue: lhs, newValue: rhs }];
    }

    const allKeys = new Set([...Object.keys(lhs ?? {}), ...Object.keys(rhs ?? {})]);
    return Array.from(allKeys).map(key => describeDifferences(path + "." + key, lhs[key], rhs[key])).flat();
}
