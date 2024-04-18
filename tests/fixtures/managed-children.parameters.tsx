import { createContext } from "preact";
import { useContext, useMemoObject } from "preact-prop-helpers";
import { fromStringBoolean, fromStringNumber, useTestSyncState } from "../util.js";

export interface ManagedChildrenConstants {
    setChildCount(count: number): void;
}

export type ManagedChildConstants = Record<`setUnmounted_${number}`, (unmounted: boolean) => Promise<void>>;

export function Parameters_ManagedChildren({ children }: { children: any }) {
    const [childCount, setChildCount] = useTestSyncState("ManagedChildren", "setChildCount", 10, fromStringNumber);

    return (
        <C1.Provider value={childCount}>
            {children}
        </C1.Provider>
    );
}

export function Parameters_ManagedChild({ children, index }: { children: any, index: number }) {
    const [unmounted, setUnmounted] = useTestSyncState("ManagedChild", `setUnmounted_${index}`, false, fromStringBoolean);

    return (
        <C2.Provider value={useMemoObject({ unmounted, index })}>
            {children}
        </C2.Provider>
    );
}

const C1 = createContext<number>(10);
const C2 = createContext<{ unmounted: boolean, index: number }>(null!);

export function useManagedChildrenCount() {
    return useContext(C1);
}

export function useManagedChildParameters() {
    return useContext(C2);
}
