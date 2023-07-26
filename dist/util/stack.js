import { useCallback, useMemo } from "./lib.js";
import { getBuildMode } from "./mode.js";
export function generateStack() {
    if (getBuildMode() === 'development' && window._generate_setState_stacks) {
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
    if (getBuildMode() == "development") {
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