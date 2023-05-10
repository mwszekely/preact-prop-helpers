import { RenderableProps } from "preact";
import { StateUpdater, useCallback, useEffect, useRef, useState } from "preact/hooks";
import { ListNavConstants } from "./stage-list-nav.js";
import { useForceUpdate } from "../../dist/index.js";
import { PressConstants } from "./stage-press.js";


export interface TestingConstants {
    Press: PressConstants;
    ListNav: ListNavConstants;
}

export function useTestSyncState<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, key2: K2, initialState: TestingConstants[K][K2] extends (...args: any[]) => any ? Parameters<TestingConstants[K][K2]>[0] : never) {
    type S = TestingConstants[K][K2] extends (...args: any[]) => any ? Parameters<TestingConstants[K][K2]>[0] : never;
    const [value, setValue] = useTestSyncState2<S>(initialState);
    installTestingHandler(key, key2, setValue as TestingConstants[K][K2]);
    return value;
}


/**
 * A special version of `useState` whose `setState` returns a promise that resolves a bit after the function finishes rendering.
 * 
 * By calling this from Playwright (via `run`), a component's state can be changed and then inspected afterwards.
 * @param initialState 
 * @returns 
 */
function useTestSyncState2<S>(initialState: S | (() => S)): [S, (...args: Parameters<StateUpdater<S>>) => Promise<ReturnType<StateUpdater<S>>>] {
    let resolveRef = useRef<(() => void) | null>(null);
    let promiseRef = useRef<Promise<void> | null>(null);
    const [value, setValue] = useState<S>(initialState);
    const forceUpdate = useForceUpdate();

    // Explicitly wait until we've had a chance to draw (i.e. all component children have also rendered) with useEffect
    useEffect(() => {
        // Also wait for a short moment afterwards just in case there's more settling that needs to be done
        let handle = setTimeout(() => { resolveRef.current?.(); resolveRef.current = promiseRef.current = null; }, 50);
        return () => clearTimeout(handle);
    });

    return [value, useCallback(async (...args: Parameters<StateUpdater<S>>) => {
        setValue(...args);
        forceUpdate();  // TODO: It's either this, or resolve the promise immediately (if the value hasn't changed)
        return promiseRef.current ??= new Promise<void>(resolve => { resolveRef.current = resolve; })
    }, [])]
}

export function TestItem({ children }: RenderableProps<{}>) {
    return (
        <>
            {children}
        </>
    )
}