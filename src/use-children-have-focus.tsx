
import { UseHasCurrentFocusParameters } from "./use-has-current-focus";
import { OnPassiveStateChange, PassiveStateUpdater, returnFalse, usePassiveState } from "./use-passive-state";
import { useStableCallback } from "./use-stable-callback";


export interface UseChildrenHaveFocusParameters {
    childrenHaveFocusParameters: {
        /** */
        onCompositeFocusChange: null | OnPassiveStateChange<boolean>;
    }
}

export interface UseChildrenHaveFocusChildReturnType<E extends Element> {
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<E>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>;
    //refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
}

export interface UseChildrenHaveFocusReturnTypeInfo {
    childrenHaveFocusReturn: { getAnyFocused(): boolean; }
    childrenHaveFocusChildParameters: UseChildrenHaveFocusChildParameters["childrenHaveFocusChildParameters"];
}


export interface UseChildrenHaveFocusReturnTypeWithHooks extends UseChildrenHaveFocusReturnTypeInfo {
    //useChildrenHaveFocusChild: <E extends Element>() => UseChildrenHaveFocusChildReturnType<E>;
}

function immediate(f: () => void) { f(); }

export function useChildrenHaveFocus(args: UseChildrenHaveFocusParameters): UseChildrenHaveFocusReturnTypeWithHooks {
    const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;

    const [getAnyFocused, setAnyFocused] = usePassiveState<boolean>(onCompositeFocusChange, returnFalse, immediate);
    const [_getFocusCount, setFocusCount] = usePassiveState<number>(useStableCallback((anyFocused: number, anyPreviouslyFocused: number | undefined) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);
        setAnyFocused(!!(anyFocused && !anyPreviouslyFocused));
    }));

    return {
        childrenHaveFocusReturn: { getAnyFocused, },
        childrenHaveFocusChildParameters: { _private: { setFocusCount } },
    }
}

export interface UseChildrenHaveFocusChildParameters {
    childrenHaveFocusChildParameters: {
        _private: {
            /** **STABLE** */
            setFocusCount: PassiveStateUpdater<number>;

            /** **STABLE** */
            //allElements: Set<Node>
        }
    }
}

export function useChildrenHaveFocusChild<E extends Element>({ childrenHaveFocusChildParameters: { _private: { setFocusCount } } }: UseChildrenHaveFocusChildParameters): UseChildrenHaveFocusChildReturnType<E> {
    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused: boolean, prev: boolean | undefined) => {
                if (focused) {
                    setFocusCount(p => (p ?? 0) + 1);
                }
                else if (!focused && prev) {
                    setFocusCount(p => (p ?? 0) - 1);
                }
            }),
        },
        /*refElementParameters: {
            onElementChange: useCallback((e: E | null, _prev: E | null | undefined) => {
                if (e) {
                    allElements.add(e);
                    return () => {
                        allElements.delete(e);
                    }
                }
            }, [])
        }*/
    };
}