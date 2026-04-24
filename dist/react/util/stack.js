import { useCallback, useMemo } from "./lib.js";
import "./mode.js";
export function generateStack() {
    if (process.env.NODE_ENV === 'development' && globalThis._generate_setState_stacks) {
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
 * @remarks The global variable `_generate_setState_stacks` must be true, or no stack will be generated.
 */
export function useStack() {
    if (process.env.NODE_ENV === "development") {
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