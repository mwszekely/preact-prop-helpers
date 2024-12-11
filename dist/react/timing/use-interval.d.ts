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
    /**
     * By default, the callback will be called as soon as interval is non-null, and then on every interval afterwards.
     *
     * Set this to true to only call the callback after the first interval has passed.
     */
    noRisingEdge?: boolean;
}
/**
 * Runs a function every time the specified number of milliseconds elapses while the component is mounted.
 *
 * @remarks
 * {@include } {@link UseIntervalParameters}
 */
export declare const useInterval: ({ interval, callback, noRisingEdge }: UseIntervalParameters) => void;
//# sourceMappingURL=use-interval.d.ts.map