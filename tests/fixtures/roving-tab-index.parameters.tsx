import { createContext } from "preact";
import { RovingTabIndexChildContext, UseManagedChildrenContext, UseRovingTabIndexChildInfo, UseRovingTabIndexParametersSelf, useMemoObject } from "preact-prop-helpers";
import { useContext } from "preact/hooks";
import { fromStringBoolean, fromStringNumber, fromStringString, useTestSyncState } from "../util.js";
import { } from "./base.stage.js";
import { useManagedChildParameters } from "./managed-children.parameters.js";



export interface RovingTabIndexConstants {
    setInitiallyTabbedIndex(index: number): Promise<void>;
    setUntabbable(untabbable: boolean): Promise<void>;
    setUntabbableBehavior(untabbableBehavior: UseRovingTabIndexParametersSelf<any>["untabbableBehavior"]): Promise<void>;
}

export type ListNavigationChildConstantsShared = Record<`setUntabbable_${number}`, (untabbable: boolean) => Promise<void>>;

/**
 * For use by Stages themselves to compose into larger Stages, not by any outside stage consumers.
 * 
 * By rendering this component, a child that uses useRovingTabIndex (or any of its composites) can use the parameters the test expects it to use.
 * 
 * Just have the component actually calling `useRovingTabIndex` also call `useRovingTabIndexParameters` to get its currently-to-be-tested parameters.
 */
export function Parameters_RovingTabIndex({ children }: { children: any }) {
    const [initiallyTabbedIndex, setInitiallyTabbedIndex] = useTestSyncState("RovingTabIndex", "setInitiallyTabbedIndex", 0, fromStringNumber);
    const [untabbable, setUntabbable] = useTestSyncState("RovingTabIndex", "setUntabbable", false, fromStringBoolean);
    const [untabbableBehavior, setUntabbableBehavior] = useTestSyncState("RovingTabIndex", "setUntabbableBehavior", "focus-parent", fromStringString);

    return (
            <C1.Provider value={useMemoObject({ initiallyTabbedIndex, untabbable, untabbableBehavior })}>
                {children}
            </C1.Provider>
    );
}

/**
 * @returns Returns the current test's requested parameters for useRovingTabIndex (based on the URL params).
 */
export function useRovingTabIndexParameters() { return useContext(C1); }
export function useRovingTabIndexChildParameters() { return useContext(C2); }
const C1 = createContext<TestBasesRovingTabIndexImplProps>(null!);
const C2 = createContext<TestBasesRovingTabIndexChildImplProps>(null!);
interface TestBasesRovingTabIndexImplProps extends Pick<UseRovingTabIndexParametersSelf<any>, "untabbable" | "untabbableBehavior" | "initiallyTabbedIndex"> { }
interface TestBasesRovingTabIndexChildImplProps extends Pick<UseRovingTabIndexChildInfo<any>, "untabbable"> { }



const C = createContext<UseManagedChildrenContext<UseRovingTabIndexChildInfo<HTMLLIElement>> & RovingTabIndexChildContext>(null!);

export function Parameters_RovingTabIndexChild({ children }: { children: any }) {
    const { index } = useManagedChildParameters();


    const [untabbable, setUntabbable] = useTestSyncState("ListNavigationChildShared", `setUntabbable_${index}`, false, fromStringBoolean);

    return (
        <C2.Provider value={useMemoObject({ untabbable })}>
            {children}
        </C2.Provider>
    )
}


