import { useCallback, useEffect, useRef } from "preact/hooks";
import { useStableCallback } from "./use-stable-callback";


/**
 * Allows for an effect to run that's not based on (specifically) render-based dependencies.
 * 
 * I.E. The same `useEffect` logic applies where an effect and its cleanup are only
 * run when the dependency changes/the component (un)mounts, but you can
 * change the dependency remotely during, e.g., an event handler, **without
 * needing the entire component to re-render** (unless of course you cause it
 * to re-render during the effect callback).
 * 
 * @param initialValue If provided, your callback will be called once on mount with this value. Otherwise, it's not called on mount at all.
 * @returns A (stable) function that should be called any time your dependency might have updated.  If it's not strictly equal, it will immediately invoke your callback (and optionally, before that, any cleanup function returned by the last callback).
 */
export function useRemoteEffect<T>(callback: (value: T) => (void | (() => void)), initialValue?: T) {
    const cleanupCallbackRef = useRef<null | (() => void)>(null);

    // Shared between "dependency changed" and "component unmounted".
    const onShouldCleanUp = useCallback(() => {
        let cleanupCallback = cleanupCallbackRef.current;
        if (cleanupCallback)
            cleanupCallback();
    }, []);

    // The actual code the user calls to (possibly) run a new effect.
    const dependencyRef = useRef<T | typeof Unset>(Unset); 
    const onDependencyChange = useStableCallback((dep: T) => {
        if (dep !== dependencyRef.current) {
            onShouldCleanUp();
            dependencyRef.current = dep;
            cleanupCallbackRef.current = (callback(dep) ?? null);
        }
    });


    // Handle running on mount/unmount
    useEffect(() => {
        if (initialValue !== undefined)
            cleanupCallbackRef.current = (callback(initialValue) ?? null);

        return onShouldCleanUp;
    }, []);
    
    return onDependencyChange;
}

const Unset = Symbol();
