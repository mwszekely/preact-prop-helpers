import { createContext } from "preact";
import { UseManagedChildrenContext, UseMultiSelectionChildDeclarativeParametersSelf, UseMultiSelectionChildParametersSelf, UseMultiSelectionParametersSelf, useMemoObject } from "preact-prop-helpers";
import { StateUpdater, useContext } from "preact/hooks";
import { fromStringBoolean, fromStringString, useTestSyncState } from "../util.js";
import { useManagedChildParameters } from "./managed-children.parameters.js";



export interface MultiSelectionConstants {
    setMultiSelectionMode(multiSelectionMode: UseMultiSelectionParametersSelf["multiSelectionMode"]): Promise<void>;
}

export type MultiSelectionChildConstants = Record<`setMultiSelected_${number}`, (multiSelected: boolean) => Promise<void>> &  Record<`setMultiSelectionDisabled_${number}`, (multiSelectionDisabled: boolean) => Promise<void>>;

/**
 * For use by Stages themselves to compose into larger Stages, not by any outside stage consumers.
 * 
 * By rendering this component, a child that uses useMultiSelection (or any of its composites) can use the parameters the test expects it to use.
 * 
 * Just have the component actually calling `useMultiSelection` also call `useMultiSelectionParameters` to get its currently-to-be-tested parameters.
 */
export function Parameters_MultiSelection({ children }: { children: any }) {
    const [multiSelectionMode, setMultiSelectionMode] = useTestSyncState("MultiSelection", "setMultiSelectionMode", "activation", fromStringString);

    return (
        <C1.Provider value={useMemoObject({ multiSelectionMode })}>
            {children}
        </C1.Provider>
    );
}

/**
 * @returns Returns the current test's requested parameters for useMultiSelection (based on the URL params).
 */
export function useMultiSelectionParameters() { return useContext(C1); }
export function useMultiSelectionChildParameters() { return useContext(C2); }
const C1 = createContext<TestBasesMultiSelectionImplProps>(null!);
const C2 = createContext<TestBasesMultiSelectionChildImplProps>(null!);
interface TestBasesMultiSelectionImplProps extends Pick<UseMultiSelectionParametersSelf, "multiSelectionMode"> { }
interface TestBasesMultiSelectionChildImplProps extends Pick<UseMultiSelectionChildDeclarativeParametersSelf<any>, "multiSelected">, Pick<UseMultiSelectionChildParametersSelf<any>, "multiSelectionDisabled"> {
    setMultiSelected: StateUpdater<boolean>;
 }



const C = createContext<UseManagedChildrenContext<{ index: number }>>(null!);

export function Parameters_MultiSelectionChild({ children }: { children: any }) {
    const { index } = useManagedChildParameters();
    const [multiSelected, setMultiSelected] = useTestSyncState("MultiSelectionChild", `setMultiSelected_${index}`, false, fromStringBoolean);
    const [multiSelectionDisabled, setMultiSelectionDisabled] = useTestSyncState("MultiSelectionChild", `setMultiSelectionDisabled_${index}`, false, fromStringBoolean);

    return (
        <C2.Provider value={useMemoObject({ index, multiSelected, setMultiSelected, multiSelectionDisabled })}>
            {children}
        </C2.Provider>
    )
}


