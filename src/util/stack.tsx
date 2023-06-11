import { useCallback, useMemo } from "preact/hooks";
import { getBuildMode } from "./mode.js";

/**
 * 
 * @returns A function that retrieves the stack at the time this hook was called (in development mode only).
 */
export function useStack() {
    const stack = useMemo(() => {
        if (getBuildMode() === 'development') {
            try {
                throw new Error();
            }
            catch (e) {
                return (e as Error).stack
            }
        }
        return undefined;
    }, []);
    const getStack = useCallback(() => stack, []);
    return getStack;
}
