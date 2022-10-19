import { useCallback } from "preact/hooks";
import { returnZero, usePassiveState } from "use-passive-state";
import { ManagedChildOmits, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus";
import { LinearNavigationOmits, TypeaheadNavigationOmits, useLinearNavigation, UseLinearNavigationParameters, UseLinearNavigationReturnTypeInfo, useTypeaheadNavigation, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnTypeInfo } from "./use-keyboard-navigation";
import { RovingTabIndexChildOmits, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnTypeInfo, UseRovingTabIndexReturnTypeInfo, UseRovingTabIndexSubInfo } from "./use-roving-tabindex";

export interface UseGridNavigationParameters { }
export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RtiSubInfo, ExtraFlagKeys extends string> {
    rovingTabIndexChildParameters: Pick<UseRovingTabIndexChildParameters<RowElement, never>["rovingTabIndexChildParameters"], "hidden" | "index">;
    managedChildrenReturn: Pick<UseManagedChildrenReturnTypeInfo<number, UseRovingTabIndexSubInfo<CellElement, RtiSubInfo>, ExtraFlagKeys | "tabbable">["managedChildrenReturn"], "children">;
}
export interface UseGridNavigationCellParameters<CellElement extends Element> {
    rovingTabIndexChildParameters: Pick<UseRovingTabIndexChildParameters<CellElement, never>["rovingTabIndexChildParameters"], "focusSelf" | "hidden" | "index">;
}
export interface UseGridNavigationReturnType { }
export interface UseGridNavigationRowReturnType { }
export interface UseGridNavigationCellReturnType { }

export function useGridNavigation(a: UseGridNavigationParameters): UseGridNavigationReturnType {
    const onCurrentColumnChange = useCallback((newColumn: number, prevColumn: number | undefined) => { }, []);
    const [getCurrentColumn, setCurrentColumn] = usePassiveState(onCurrentColumnChange, returnZero);

    const useGridNavigationRow = useCallback(({ managedChildrenReturn: { children } }: UseGridNavigationRowParameters<CellElement, C, K>): UseGridNavigationRowReturnType => {
        const focusSelf = useCallback(() => { }, []);
        const useGridNavigationCell = useCallback((a: UseGridNavigationCellParameters): UseGridNavigationCellReturnType => {

        }, []);

        return {
            useGridNavigationRowReturn: { focusSelf },
            useGridNavigationCell
        }
    }, []);

    return {
        useGridNavigationRow
    }
}











