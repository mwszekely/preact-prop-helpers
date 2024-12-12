import { Nullable } from "../util/types.js";
export interface UseTimeoutParameters {
    /**
     * The number of ms to wait before invoking `callback`.
     * If `null`, cancels the timeout immediately.
     */
    timeout: Nullable<number>;
    /**
     * Changes to this prop between renders can be used to clear the current timeout and create a new one.
     */
    triggerIndex?: unknown;
    /**
     * Called `timeout` ms after mount, or the last change to `triggerIndex`.
     *
     * Does *not* need to be stable. Go ahead and pass an anonymous function.
     */
    callback: () => void;
}
/**
 * Runs a function the specified number of milliseconds after the component renders.
 *
 * @remarks This is particularly useful to function as "useEffect on a delay".
 *
 * @remarks
 * {@include } {@link UseTimeoutParameters}
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useTimeout({ timeout, callback, triggerIndex }: UseTimeoutParameters): {
    getElapsedTime: () => number;
    getRemainingTime: () => number | null;
};
//# sourceMappingURL=use-timeout.d.ts.map