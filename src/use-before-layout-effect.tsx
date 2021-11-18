
import { options, VNode } from "preact";
import { EffectCallback, Inputs, useEffect, useLayoutEffect, useState } from "preact/hooks";
import { generateRandomId } from "./use-random-id";

const previousInputs = new Map<string, Inputs | undefined>();
const toRun = new Map<string, { effect: EffectCallback, inputs?: Inputs }>();

// TODO: Whether this goes in options.diffed or options._commit
// is a post-suspense question.
// Right now, using options._commit has the problem of running
// *after* refs are applied, but we need to come before even that
// so `ref={someStableFunction}` works.
// 
// Also it's private.
const originalDiffed = options.diffed;
options.diffed = (vnode, ...args) => {
    
    for (let [id, { effect, inputs }] of toRun) {
        const oldInputs = previousInputs.get(id);
        if (argsChanged(oldInputs, inputs)) {
            effect();
            previousInputs.set(id, inputs);
        }
    }
    toRun.clear();
    originalDiffed?.(vnode, ...args);
}

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
    const [id] = useState(() => generateRandomId());
    toRun.set(id, { effect, inputs });

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