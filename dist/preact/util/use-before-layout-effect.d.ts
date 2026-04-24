import { useInsertionEffect } from "./lib.js";
/**
 * Preact builds must call this before rendering anything. It installs the Option Hook callbacks
 * that enable `useInsertionEffect`, which is needed by this library.
 *
 * @param options The Options object; i.e. `import("preact").options`.
 */
export declare function preactAddUseInsertionEffectHook(options: typeof import("preact")["options"]): void;
/**
 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
 *
 * @remarks Every render, we send the arguments to be evaluated after diffing has completed,
 * which happens before.
 *
 * @param effect
 * @param inputs
 */
export declare const useBeforeLayoutEffect: typeof useInsertionEffect;
//# sourceMappingURL=use-before-layout-effect.d.ts.map