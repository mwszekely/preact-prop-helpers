import { useCallback, useMemo } from "./lib.js";
import { getBuildMode } from "./mode.js";
export function generateStack() {
    if (getBuildMode() === 'development') {
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
 * @returns A function that retrieves the stack at the time this hook was called (in development mode only).
 */
export function useStack() {
    const stack = useMemo(generateStack, []);
    const getStack = useCallback(() => stack, []);
    return getStack;
}
//# sourceMappingURL=stack.js.map