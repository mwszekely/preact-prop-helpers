import { useInsertionEffect, useLayoutEffect, useRef } from "./lib.js";
const thisIsPreactSoWeNeedAPolyfill = (useInsertionEffect === useLayoutEffect);
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
//
// Also, in theory this could be replaced with `useInsertionEffect`,
// but that probably won't be available in Preact for awhile.
const commitName = "diffed";
let incrementingId = 0;
const toRun = new Map();
let insertionEffectHookInstalled = false;
/**
 * Preact builds must call this before rendering anything. It installs the Option Hook callbacks
 * that enable `useInsertionEffect`, which is needed by this library.
 *
 * @param options The Options object; i.e. `import("preact").options`.
 */
export function preactAddUseInsertionEffectHook(options) {
    const newCommit = (vnode, ...args) => {
        for (const [_id, effectInfo] of toRun) {
            const oldInputs = effectInfo.prevInputs;
            if (argsChanged(oldInputs, effectInfo.inputs)) {
                effectInfo.cleanup?.();
                effectInfo.cleanup = effectInfo.effect();
                effectInfo.prevInputs = effectInfo.inputs;
            }
        }
        toRun.clear();
        originalCommit?.(vnode, ...args);
    };
    const originalCommit = options[commitName];
    options[commitName] = newCommit;
    insertionEffectHookInstalled = true;
}
function nextId() {
    let next = ++incrementingId;
    // TODO: This seems reasonable, but is is necessary or are we orders of magnitude from having to worry about overflow?
    if (incrementingId >= Number.MAX_SAFE_INTEGER)
        incrementingId = -Number.MAX_SAFE_INTEGER;
    return next;
}
const useBeforeLayoutEffectPreact = (function useBeforeLayoutEffectPreact(effect, inputs) {
    if (!insertionEffectHookInstalled) {
        throw new Error("Preact requires preactAddUseInsertionEffectHook to be called before rendering any nodes.");
    }
    // Note to self: This is by far the most called hook by sheer volume of dependencies.
    // So it should ideally be as quick as possible.
    const ref = useRef(null);
    ref.current ??= nextId();
    const id = ref.current;
    if (effect)
        toRun.set(id, { effect, inputs, cleanup: null });
    else
        toRun.delete(id);
    // Not needed, because the insertion cleanup would run before useEffect anyway, I think?
    /*useEffect(() => {
        return () => {
            toRun.delete(id);
        }
    }, [id])*/
});
function argsChanged(oldArgs, newArgs) {
    return !!(!oldArgs ||
        oldArgs.length !== newArgs?.length ||
        newArgs?.some((arg, index) => arg !== oldArgs[index]));
}
/**
 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
 *
 * @remarks Every render, we send the arguments to be evaluated after diffing has completed,
 * which happens before.
 *
 * @param effect
 * @param inputs
 */
export const useBeforeLayoutEffect = (thisIsPreactSoWeNeedAPolyfill ? useBeforeLayoutEffectPreact : useInsertionEffect);
//# sourceMappingURL=use-before-layout-effect.js.map