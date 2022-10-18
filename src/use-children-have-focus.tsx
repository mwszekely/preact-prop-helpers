
import { useCallback, useRef } from "preact/hooks";
//import { UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus";
import { usePassiveState } from "./use-passive-state";
import { UseRefElementParameters } from "./use-ref-element";
import { useStableCallback } from "./use-stable-callback";


export interface UseChildrenHaveFocusParameters {
    childrenHaveFocusParameters: {
        onAnyGainedFocus: null | (() => void);
        onAllLostFocus: null | (() => void);
    }
}

export interface UseChildrenHaveFocusChildReturnType<E extends Element> {
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<E>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>;
    refElementParameters: Required<Pick<UseRefElementParameters<E>["refElementParameters"], "onElementChange">>;
}

export interface UseChildrenHaveFocusReturnTypeInfo {
}


export interface UseChildrenHaveFocusReturnTypeWithHooks extends UseChildrenHaveFocusReturnTypeInfo {
    useChildrenHaveFocusChild: <E extends Element>() => UseChildrenHaveFocusChildReturnType<E>;
}

export function useChildrenHaveFocus(args: UseChildrenHaveFocusParameters): UseChildrenHaveFocusReturnTypeWithHooks {
    const { childrenHaveFocusParameters: { onAllLostFocus, onAnyGainedFocus } } = args;

    const allElementsRef = useRef<Set<Node>>(new Set());
    const [_getFocusCount, setFocusCount] = usePassiveState<number>(useStableCallback((anyFocused: number, anyPreviouslyFocused: number | undefined) => {
        console.assert(anyFocused >= 0 && anyFocused <= 1);

        if (anyFocused && !anyPreviouslyFocused)
            onAnyGainedFocus?.();
        if (!anyFocused && anyPreviouslyFocused)
            onAllLostFocus?.();
    }));

    const useChildrenHaveFocusChild = useCallback(<E extends Element>(): UseChildrenHaveFocusChildReturnType<E> => {


        return {
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useCallback((focused: boolean, prev: boolean | undefined) => {
                    if (focused) {
                        setFocusCount(p => (p ?? 0) + 1);
                    }
                    else if (!focused && prev) {
                        setFocusCount(p => (p ?? 0) - 1);
                    }
                }, []),
            },
            refElementParameters: {
                onElementChange: useCallback((e: E | null, _prev: E | null | undefined) => {
                    if (e) {
                        allElementsRef.current.add(e);
                        return () => {
                            allElementsRef.current.delete(e);
                        }
                    }
                }, [])
            }
        };
    }, []);

    return {
        useChildrenHaveFocusChild
    }
}
