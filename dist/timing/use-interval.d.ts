import { Nullable } from "../util/types.js";
export interface UseIntervalParameters {
    /**
     * The number of ms to wait before invoking `callback`.
     */
    interval: Nullable<number>;
    /**
     * Called `timeout` ms after mount, or the last change to `triggerIndex`.
     */
    callback: () => void;
}
/**
 * Runs a function every time the specified number of milliseconds elapses while the component is mounted.
 *
 * {@include } {@link UseIntervalParameters}
 */
export declare function useInterval({ interval, callback }: UseIntervalParameters): void;
//# sourceMappingURL=use-interval.d.ts.map