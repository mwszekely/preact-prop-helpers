import { useRef, useState } from "preact/hooks";

/**
 * Returns a function that will, when called, force the component
 * that uses this hook to re-render itself.
 * 
 * It's a bit smelly, so best to use sparingly.
 */
export function useForceUpdate() {
    const [, set] = useState(0);
    return useRef(() => set(i => ++i)).current;
}