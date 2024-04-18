import { } from "./base.stage.js";
import { Parameters_LinearNavigation, Parameters_LinearNavigationChild } from "./linear-navigation.parameters.js";
import { Parameters_RovingTabIndex, Parameters_RovingTabIndexChild } from "./roving-tab-index.parameters.js";
import { Parameters_SingleSelection } from "./single-selection.parameters.js";




export type ListNavigationChildConstants = Record<`setUntabbable_${number}`, (untabbable: boolean) => Promise<void>>;

/**
 * For use by Stages themselves to compose into larger Stages, not by any outside stage consumers.
 * 
 * By rendering this component, a child that uses useListNavigation (or any of its composites) can use the parameters the test expects it to use.
 * 
 * Just have the component actually calling `useListNavigation` also call `useListNavigationParameters` to get its currently-to-be-tested parameters.
 */
export function Parameters_ListNavigation({ children }: { children: any }) {

    return (
        <Parameters_RovingTabIndex>
            <Parameters_LinearNavigation>
                <Parameters_SingleSelection>
                    {children}
                </Parameters_SingleSelection>
            </Parameters_LinearNavigation>
        </Parameters_RovingTabIndex>
    );
}

/**
 * @returns Returns the current test's requested parameters for useListNavigation (based on the URL params).
 */
/*export function useListNavigationParameters() { return useContext(C1); }
export function useListNavigationChildParameters() { return useContext(C2); }
const C1 = createContext<TestBasesListNavigationImplProps>(null!);
const C2 = createContext<TestBasesListNavigationChildImplProps>(null!);
interface TestBasesListNavigationImplProps extends Pick<{}, never> { }
interface TestBasesListNavigationChildImplProps extends Pick<{}, never> { }*/



export function Parameters_ListNavigationChild({ children }: { children: any }) {

    return (
        <Parameters_RovingTabIndexChild>
            <Parameters_LinearNavigationChild>
                {children}
            </Parameters_LinearNavigationChild>
        </Parameters_RovingTabIndexChild>
    )
}


