import { createContext } from "preact";
import { Nullable, UseManagedChildrenContext, UseSingleSelectionChildParametersSelf, UseSingleSelectionDeclarativeParametersSelf, UseSingleSelectionParametersSelf, useMemoObject } from "preact-prop-helpers";
import { StateUpdater, useContext } from "preact/hooks";
import { fromStringBoolean, fromStringNumber, fromStringString, useTestSyncState } from "../util.js";
import { useManagedChildParameters } from "./managed-children.parameters.js";



export interface SingleSelectionConstants {
    setSingleSelectedIndex(singleSelectedIndex: UseSingleSelectionDeclarativeParametersSelf["singleSelectedIndex"]): Promise<void>;
    setSingleSelectionMode(singleSelectionMode: UseSingleSelectionParametersSelf["singleSelectionMode"]): Promise<void>;
}
export type SingleSelectionChildConstants = Record<`setSingleSelectionDisabled_${number}`, (singleSelectionDisabled: boolean) => Promise<void>>;

/**
 * For use by Stages themselves to compose into larger Stages, not by any outside stage consumers.
 * 
 * By rendering this component, a child that uses useSingleSelection (or any of its composites) can use the parameters the test expects it to use.
 * 
 * Just have the component actually calling `useSingleSelection` also call `useSingleSelectionParameters` to get its currently-to-be-tested parameters.
 */
export function Parameters_SingleSelection({ children }: { children: any }) {
    const [singleSelectedIndex, setSingleSelectedIndex] = useTestSyncState("SingleSelection", "setSingleSelectedIndex", null, fromStringNumber);
    const [singleSelectionMode, setSingleSelectionMode] = useTestSyncState("SingleSelection", "setSingleSelectionMode", "activation", fromStringString);

    return (
        <C1.Provider value={useMemoObject({ singleSelectedIndex, singleSelectionMode, setSingleSelectedIndex })}>
            {children}
        </C1.Provider>
    );
}

/**
 * @returns Returns the current test's requested parameters for useSingleSelection (based on the URL params).
 */
export function useSingleSelectionParameters() { return useContext(C1); }
export function useSingleSelectionChildParameters() { return useContext(C2); }
const C1 = createContext<TestBasesSingleSelectionImplProps>(null!);
const C2 = createContext<TestBasesSingleSelectionChildImplProps>(null!);
interface TestBasesSingleSelectionImplProps extends Pick<UseSingleSelectionDeclarativeParametersSelf, "singleSelectedIndex">, Pick<UseSingleSelectionParametersSelf, "singleSelectionMode"> { 
    setSingleSelectedIndex: StateUpdater<Nullable<number>>;
}
interface TestBasesSingleSelectionChildImplProps extends Pick<UseSingleSelectionChildParametersSelf, "singleSelectionDisabled"> { }



const C = createContext<UseManagedChildrenContext<{ index: number }>>(null!);

export function Parameters_SingleSelectionChild({ children }: { children: any }) {
    const { index } = useManagedChildParameters();
    const [singleSelectionDisabled, setSingleSelectionDisabled] = useTestSyncState("SingleSelectionChild", `setSingleSelectionDisabled_${index}`, false, fromStringBoolean)

    return (
        <C2.Provider value={useMemoObject({ index, singleSelectionDisabled })}>
            {children}
        </C2.Provider>
    )
}


