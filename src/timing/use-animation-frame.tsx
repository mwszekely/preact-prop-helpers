import { noop } from "lodash-es";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { createContext, createElement, useCallback, useContext, useEffect, useRef } from "../util/lib.js";
import { ElementProps, Nullable, VNode } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

type RafCallbackType = (msSinceLast: number, tag?: any) => void;

interface ContextType {
    addCallback: (callback: RafCallbackType, tag?: any) => void;
    removeCallback: (callback: RafCallbackType) => void;
}

const SharedAnimationFrameContext = createContext<null | ContextType>(null);

/**
 * When a bunch of unrelated components all use `requestAnimationFrame`,
 * yes, this actually is faster. I wish it wasn't. It's lame.
 */
export function ProvideBatchedAnimationFrames({ children }: { children: ElementProps<EventTarget>["children"] }) {

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
        createElement(SharedAnimationFrameContext.Provider, { value: contextInfo.current, children }) as VNode
    )
}

export interface UseAnimationFrameParameters {
    /**
     * Callback with effectively the same rules as `requestAnimationFrame`
     * 
     * Doesn't need to be stable.
     */
    callback: Nullable<((msSinceLast: number) => void)>;
}

/**
 * The callback you provide will start running every frame after the component mounts.
 * 
 * @remarks Passing `null` is fine and simply stops the effect until you restart it by providing a non-null callback; it doesn't need to be stable.
 * 
 * {@include } {@link UseAnimationFrameParameters}
 * 
 * {@include } {@link ProvideBatchedAnimationFrames}
 */
export const useAnimationFrame = monitored(function useAnimationFrame({ callback }: UseAnimationFrameParameters): void {

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
})
