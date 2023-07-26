/**
 * When called inside a hook, monitors each call of that hook and prints the results to a table once things settle.
 *
 * @remarks Re-renders and such are all collected together when the table is printed to the console with `requestIdleCallback`.
 */
export declare function monitorCallCount(hook: Function): void;
export declare function hideCallCount(hook: Function | "all"): void;
//# sourceMappingURL=use-call-count.d.ts.map