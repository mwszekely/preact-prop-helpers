import { ComponentChildren, createContext } from "preact";
import { useCallback, useContext, useEffect, useRef } from "preact/hooks";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import noop from "lodash-es/noop";

type RafCallbackType = (msSinceLast: number, tag?: any) => void;

interface ContextType {
    addCallback: (callback: RafCallbackType, tag?: any) => void;
    removeCallback: (callback: RafCallbackType) => void;
}

const SharedAnimationFrameContext = createContext<null | ContextType>(null);

export function ProvideBatchedAnimationFrames({ children }: { children: ComponentChildren }) {

    const addCallback = useCallback<ContextType["addCallback"]>((callbackToBeBatched, tag) => { allCallbacks.current.set(callbackToBeBatched, tag); }, []);
    const removeCallback = useCallback<ContextType["removeCallback"]>((callback) => { allCallbacks.current.delete(callback); }, []);

    const contextInfo = useRef<ContextType>(null!);
    if (contextInfo.current == null)
        contextInfo.current = { addCallback, removeCallback };
    const allCallbacks = useRef<Map<RafCallbackType, any>>(null!);
    if (allCallbacks.current == null)
        allCallbacks.current = new Map();

    useEffect(() => {
        let handle = -1;

        function rafWithBatchedCallbacks(msSinceLast: number) {
            for (const [batchedRafCallback, tag] of allCallbacks.current) {
                batchedRafCallback(msSinceLast, tag);
            }
            handle = requestAnimationFrame(rafWithBatchedCallbacks);
        }

        handle = requestAnimationFrame(rafWithBatchedCallbacks);

        return () => cancelAnimationFrame(handle);
    }, []);

    return (
        <SharedAnimationFrameContext.Provider value={contextInfo.current}>
            {children}
        </SharedAnimationFrameContext.Provider>)
}

export interface UseAnimationFrameParameters {
    /**
     * Callback with effectively the same rules as `requestAnimationFrame`
     * 
     * Doesn't need to be stable.
     */
    callback: null | ((msSinceLast: number) => void);
}

/**
 * The (optionally non-stable) `callback` you provide will start running every frame after the component mounts.
 * 
 * Passing `null` is fine and simply stops the effect until you restart it by providing a non-null callback.
 * 
 * **This hook does not return anything at all, including no prop-modifying hooks**
 */
export function useAnimationFrame({ callback }: UseAnimationFrameParameters): void {
    // Get a wrapper around the given callback that's stable
    const stableCallback = useStableCallback(callback ?? noop);
    const hasCallback = (callback != null);

    const sharedAnimationFrameContext = useContext(SharedAnimationFrameContext);

    useEffect(() => {
        if (sharedAnimationFrameContext) {
            if (hasCallback) {
                sharedAnimationFrameContext.addCallback(stableCallback);
            }
            else {
                sharedAnimationFrameContext.removeCallback(stableCallback);
            }
        }
        else {
            if (hasCallback) {
                // Get a wrapper around the wrapper around the callback
                // that also calls `requestAnimationFrame` again.
                const rafCallback = (ms: number) => {
                    handle = requestAnimationFrame(rafCallback);
                    stableCallback(ms);
                }
                let handle = requestAnimationFrame(rafCallback);
                return () => cancelAnimationFrame(handle);
            }
        }
    }, [sharedAnimationFrameContext, hasCallback])
}
