import { useCallback, useMemo } from "./lib.js";
import { BuildMode } from "./mode.js";
export function generateStack() {
    if (BuildMode === 'development' && window._generate_setState_stacks) {
        try {
            throw new Error();
        }
        catch (e) {
            return e.stack;
        }
    }
    return undefined;
}
/**
 * Returns a function that retrieves the stack at the time this hook was called (in development mode only).
 *
 *
 */
export function useStack() {
    if (BuildMode === "development") {
        const stack = useMemo(generateStack, []);
        const getStack = useCallback(() => stack, []);
        return getStack;
    }
    else {
        return returnEmptyString;
    }
}
function returnEmptyString() { return ""; }
//# sourceMappingURL=stack.js.map