import { useEffect, useRef } from "../util/lib.js";
/**
 *
 */
export function useWhatCausedRender(who, { props, state }) {
    const prevProps = useRef(undefined);
    const prevState = useRef(undefined);
    useEffect(() => {
        if (prevProps.current != undefined) {
            const propDifferences = describeDifferences(1, who + ".props", props, prevProps.current, 0);
            if (propDifferences.length)
                console.log(propDifferences);
        }
        if (prevState.current != undefined) {
            const stateDifferences = describeDifferences(10, who + ".state", state, prevState.current, 0);
            if (stateDifferences.length)
                console.log(stateDifferences);
        }
        prevProps.current = props;
        prevState.current = state;
    });
}
function describeDifferences(maxDepth, path, lhs, rhs, depth) {
    if (depth > maxDepth)
        return [];
    if (lhs === rhs)
        return [];
    if (typeof lhs != typeof rhs) {
        return [{ path, newValue: lhs, oldValue: rhs }];
    }
    if (typeof lhs == "number" || typeof lhs == "string" || typeof rhs == "boolean" || lhs == null || rhs == null) {
        if (lhs != rhs)
            return [{ path, newValue: lhs, oldValue: rhs }];
        else
            return [];
    }
    // If we're at our max depth, just count this different in and of itself as a difference -- don't recurse down to find why.
    if (lhs != rhs && depth == maxDepth) {
        return [{ path, newValue: lhs, oldValue: rhs }];
    }
    // We don't check for equality -- we just recurse down the property chain.
    const allKeys = new Set([...Object.keys(lhs ?? {}), ...Object.keys(rhs ?? {})]);
    return Array.from(allKeys).map(key => describeDifferences(maxDepth, path + "." + key, lhs[key], rhs[key], depth + 1)).flat();
}
//# sourceMappingURL=use-what-caused-render.js.map