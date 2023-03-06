export interface UseIntervalParameters {
    /**
     * The number of ms to wait before invoking `callback`.
     */
    interval: number | null;
    /**
     * Called `timeout` ms after mount, or the last change to `triggerIndex`.
     */
    callback: () => void;
}
export declare function useInterval({ interval, callback }: UseIntervalParameters): void;
//# sourceMappingURL=use-interval.d.ts.map