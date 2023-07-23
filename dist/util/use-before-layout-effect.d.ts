import { EffectCallback, Inputs } from "preact/hooks";
/**
 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
 *
 * @remarks Every render, we send the arguments to be evaluated after diffing has completed,
 * which happens before.
 *
 * @param effect
 * @param inputs
 */
export declare function useBeforeLayoutEffect(effect: EffectCallback | null, inputs?: Inputs): void;
//# sourceMappingURL=use-before-layout-effect.d.ts.map