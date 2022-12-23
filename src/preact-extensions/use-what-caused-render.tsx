import { useEffect, useRef } from "preact/hooks";

export function useWhatCausedRender(allPropsAndState: any) {
    const prev = useRef<any>(undefined!);
    useEffect(() => {
        const differences = describeDifferences("", allPropsAndState, prev.current);
        if (differences.length)
            console.log(differences);
        prev.current = allPropsAndState
    });
}

console.log(describeDifferences("", 5, 5))
console.log(describeDifferences("", 5, 6))
console.log(describeDifferences("", null, undefined))
console.log(describeDifferences("", {}, {}))
console.log(describeDifferences("", { a: 5 }, { a: 5 }))
console.log(describeDifferences("", { a: 5 }, { a: 6 }))
console.log(describeDifferences("", { a: 5 }, { b: 5 }))
console.log(describeDifferences("", { a: { b: 5 } }, { a: { b: 6 } }))

interface Foo {
    path: string;
    oldValue: unknown;
    newValue: unknown;
}

function describeDifferences(path: string, lhs: any, rhs: any): Foo[] {
    if (typeof lhs != typeof rhs) {
        return [{ path, oldValue: lhs, newValue: rhs }];
    }
    if (typeof lhs == "number" || typeof lhs == "string" || typeof rhs == "boolean" || lhs == null || rhs == null) {
        if (lhs != rhs)
            return [{ path, oldValue: lhs, newValue: rhs }];
    }

    const allKeys = new Set([...Object.keys(lhs ?? {}), ...Object.keys(rhs ?? {})]);
    return Array.from(allKeys).map(key => describeDifferences(path + "." + key, lhs[key], rhs[key])).flat()
    /*for (const key of allKeys) {
        current = describeDifferences(path + ".key", current, lhs[key], rhs[key]);
    }

    return current;*/
}
