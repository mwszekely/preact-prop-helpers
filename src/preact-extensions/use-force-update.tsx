import { useRef, useState } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";

/**
 * Returns a function that will, when called, force the component
 * that uses this hook to re-render itself.
 * 
 * @remarks It's a bit smelly, so best to use sparingly.
 */
export function useForceUpdate() {
    return useMonitoring(function useForceUpdate() {
        const [, set] = useState(0);
        return useRef(() => set(i => ++i)).current;
    });
}