import { ElementProps, Nullable } from "../util/types.js";
type RafCallbackType = (msSinceLast: number, tag?: any) => void;
interface ContextType {
    addCallback: (callback: RafCallbackType, tag?: any) => void;
    removeCallback: (callback: RafCallbackType) => void;
}
/**
 * When a bunch of unrelated components all use `requestAnimationFrame`,
 * yes, this actually is faster. I wish it wasn't. It's lame.
 */
export declare function ProvideBatchedAnimationFrames({ children }: {
    children: ElementProps<EventTarget>["children"];
}): import("preact").VNode<{
    value: ContextType | null;
    children?: import("preact").ComponentChildren;
}>;
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
export declare function useAnimationFrame({ callback }: UseAnimationFrameParameters): void;
export {};
//# sourceMappingURL=use-animation-frame.d.ts.map