import { options } from "preact";
import { useEffect, useState } from "preact/hooks";
import { generateRandomId } from "../util/random-id.js";
const previousInputs = new Map();
const toRun = new Map();
// TODO: Whether this goes in options.diffed or options._commit
// is a post-suspense question.
// Right now, using options._commit has the problem of running
// *after* refs are applied, but we need to come before even that
// so `ref={someStableFunction}` works.
// 
// Also it's private.
//
// ...
// Well, useEvent or whatever is finally, finally 4 years later finally here
// which is cool and means we won't need this at all soon.
// So for now we'll stick with diff to prevent any weirdness with
// commit being private and all.
const commitName = "diffed";
const originalCommit = options[commitName];
const newCommit = (...args) => {
    for (const [id, effectInfo] of toRun) {
        const oldInputs = previousInputs.get(id);
        if (argsChanged(oldInputs, effectInfo.inputs)) {
            effectInfo.cleanup?.();
            effectInfo.cleanup = effectInfo.effect();
            previousInputs.set(id, effectInfo.inputs);
        }
    }
    toRun.clear();
    originalCommit?.(...args);
};
options[commitName] = newCommit;
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
    const [id] = useState(() => generateRandomId());
    if (effect)
        toRun.set(id, { effect, inputs, cleanup: null });
    else
        toRun.delete(id);
    useEffect(() => {
        return () => {
            toRun.delete(id);
            previousInputs.delete(id);
        };
    }, [id]);
}
function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs ||
        oldArgs.length !== newArgs?.length ||
        newArgs?.some((arg, index) => arg !== oldArgs[index]));
}
//# sourceMappingURL=use-before-layout-effect.js.map