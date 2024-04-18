import { createContext } from "preact";
import { UseLinearNavigationChildInfo, UseLinearNavigationParametersSelf, UseManagedChildrenContext, useMemoObject } from "preact-prop-helpers";
import { useContext } from "preact/hooks";
import { fromStringBoolean, fromStringString, useTestSyncState } from "../util.js";
import { useManagedChildParameters } from "./managed-children.parameters.js";



export interface LinearNavigationConstants {
    setTabbedIndex(index: number | null): Promise<void>;
    setUntabbable(untabbable: boolean): Promise<void>;
    setArrowKeyDirection(direction: UseLinearNavigationParametersSelf<any>["arrowKeyDirection"]): Promise<void>;
    setDisableHomeEndKeys(direction: UseLinearNavigationParametersSelf<any>["disableHomeEndKeys"]): Promise<void>;
    setNavigatePastEnd(direction: UseLinearNavigationParametersSelf<any>["navigatePastEnd"]): Promise<void>;
    setNavigatePastStart(direction: UseLinearNavigationParametersSelf<any>["navigatePastStart"]): Promise<void>;
}

//export type LinearNavigationChildConstants = Record<`setUntabbable_${number}`, (untabbable: boolean) => Promise<void>>;

/**
 * For use by Stages themselves to compose into larger Stages, not by any outside stage consumers.
 * 
 * By rendering this component, a child that uses useLinearNavigation (or any of its composites) can use the parameters the test expects it to use.
 * 
 * Just have the component actually calling `useLinearNavigation` also call `useLinearNavigationParameters` to get its currently-to-be-tested parameters.
 */
export function Parameters_LinearNavigation({ children }: { children: any }) {
    const [arrowKeyDirection, setArrowKeyDirection] = useTestSyncState("LinearNavigation", "setArrowKeyDirection", "either", fromStringString);
    const [disableHomeEndKeys, setDisableHomeEndKeys] = useTestSyncState("LinearNavigation", "setDisableHomeEndKeys", false, fromStringBoolean);
    const [navigatePastStart, setNavigatePastStart] = useTestSyncState("LinearNavigation", "setNavigatePastStart", "wrap", fromStringString);
    const [navigatePastEnd, setNavigatePastEnd] = useTestSyncState("LinearNavigation", "setNavigatePastEnd", "wrap", fromStringString);

    return (
        <C1.Provider value={useMemoObject({ arrowKeyDirection, disableHomeEndKeys, navigatePastEnd, navigatePastStart })}>
            {children}
        </C1.Provider>
    );
}

/**
 * @returns Returns the current test's requested parameters for useLinearNavigation (based on the URL params).
 */
export function useLinearNavigationParameters() { return useContext(C1); }
export function useLinearNavigationChildParameters() { return useContext(C2); }
const C1 = createContext<TestBasesLinearNavigationImplProps>(null!);
const C2 = createContext<TestBasesLinearNavigationChildImplProps>(null!);
interface TestBasesLinearNavigationImplProps extends Pick<UseLinearNavigationParametersSelf<any>, "arrowKeyDirection" | "disableHomeEndKeys" | "navigatePastEnd" | "navigatePastStart"> { }
interface TestBasesLinearNavigationChildImplProps extends Pick<UseLinearNavigationChildInfo<any>, "index"> { }



const C = createContext<UseManagedChildrenContext<{ index: number }>>(null!);

export function Parameters_LinearNavigationChild({ children }: { children: any }) {
    const { index } = useManagedChildParameters();


    //const [untabbable, setUntabbable] = useTestSyncState("ListNavigationChildShared", `setUntabbable_${index}`, false, fromStringBoolean);

    return (
        <C2.Provider value={useMemoObject({ index })}>
            {children}
        </C2.Provider>
    )
}


