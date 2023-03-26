import { noop } from "lodash-es";
import { useInsertionEffect } from "react";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
 *
 * Every render, we send the arguments to be evaluated after diffing has completed,
 * which happens before.
 *
 * @param effect
 * @param inputs
 */
export function useBeforeLayoutEffect(effect, inputs) {
    monitorCallCount(useBeforeLayoutEffect);
    useInsertionEffect(effect || noop, inputs);
}
//# sourceMappingURL=use-before-layout-effect.js.map