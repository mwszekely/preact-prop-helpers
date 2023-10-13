import "./mode.js";
export declare function generateStack(): string | undefined;
/**
 * Returns a function that retrieves the stack at the time this hook was called (in development mode only).
 *
 * @remarks The global variable `_generate_setState_stacks` must be true, or no stack will be generated.
 */
export declare function useStack(): () => string | undefined;
//# sourceMappingURL=stack.d.ts.map