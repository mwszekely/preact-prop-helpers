import { Inputs } from "../util/lib.js";
import { EffectChange } from "./use-effect-debug.js";
/**
 * Wrap the native `useLayoutEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect - Same as the built-in's
 * @param inputs - Same as the built-in's
 */
export declare function useLayoutEffectDebug<I extends Inputs>(effect: (prev: I | undefined, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs?: I): void;
//# sourceMappingURL=use-layout-effect-debug.d.ts.map