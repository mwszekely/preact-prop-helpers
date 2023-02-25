import { ComponentChildren } from "preact";
export declare function ProvideBatchedAnimationFrames({ children }: {
    children: ComponentChildren;
}): import("preact").JSX.Element;
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
export declare function useAnimationFrame({ callback }: UseAnimationFrameParameters): void;
//# sourceMappingURL=use-animation-frame.d.ts.map