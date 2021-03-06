
import { Component, options, VNode } from "preact";
import { EffectCallback, Inputs, useEffect, useState } from "preact/hooks";
import { generateRandomId } from "./use-random-id";

const previousInputs = new Map<string, Inputs | undefined>();
const toRun = new Map<string, { effect: EffectCallback, inputs?: Inputs, cleanup: null | undefined | void | (() => void) }>();


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

const originalCommit = options[commitName] as (vnode: VNode, commitQueue: Component[]) => void;
const newCommit: typeof originalCommit = (...args) => {
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
}
options[commitName] = newCommit as never

/**
 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
 * 
 * Every render, we send the arguments to be evaluated after diffing has completed,
 * which happens before.
 * 
 * @param effect 
 * @param inputs 
 */
export function useBeforeLayoutEffect(effect: EffectCallback, inputs?: Inputs) {

    /*(() => {
        const cleanup = useRef<void | (() => void) | null>(null);
        const prevArgsRef = useRef<Inputs>(null!);
        if (argsChanged(inputs, prevArgsRef.current)) {
            prevArgsRef.current = inputs!;
            if (cleanup.current)
                cleanup.current();
            cleanup.current = effect();
        }
    })();*/

    const [id] = useState(() => generateRandomId());
    toRun.set(id, { effect, inputs, cleanup: null });

    useEffect(() => {
        return () => {
            toRun.delete(id);
            previousInputs.delete(id);
        }
    }, [id])
}

function argsChanged(oldArgs?: Inputs, newArgs?: Inputs): boolean {
    return !!(
        !oldArgs ||
        oldArgs.length !== newArgs?.length ||
        newArgs?.some((arg, index) => arg !== oldArgs[index])
    );
}