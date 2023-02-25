import { EffectCallback, Inputs } from "preact/hooks";
/**
 * Returns a randomly-generated ID with an optional prefix.
 * Note that if the prefix is *explicitly* set to "", then
 * IDs that are not valid under HTML4 may be generated. Oh no.
 *
 *
 * (This is here, in this particular file, to avoid circular dependencies
 * without also making a utilities file.
 * Once we can remove this hook, we can put this function back with useRandomId)
 */
export declare function generateRandomId(prefix?: string): string;
/**
 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
 *
 * Every render, we send the arguments to be evaluated after diffing has completed,
 * which happens before.
 *
 * @param effect
 * @param inputs
 */
export declare function useBeforeLayoutEffect(effect: EffectCallback | null, inputs?: Inputs): void;
//# sourceMappingURL=use-before-layout-effect.d.ts.map