import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { ManagedChildOmits, ManagedChildrenOmits } from "./use-child-manager";
import { LinearNavigationOmits, TypeaheadNavigationOmits } from "./use-keyboard-navigation";
import { RovingTabIndexChildOmits, RovingTabIndexParametersOmits } from "./use-roving-tabindex";
import { ListNavigationChildOmits, ListNavigationParametersOmits, useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo } from "./use-list-navigation";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";
import { useMergedProps } from "./use-merged-props";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus";

/**
 * Grids are implemented using two sets of list navigation.
 * 
 * This results in a lot of things with very similar names and just confusion all around. Please use caution.
 */

// Parameters (parent, row, cell)
export interface UseGridNavigationParameters<LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends UseListNavigationParameters<LsOmits | "indexMangler" | "indexDemangler", LnOmits | "navigationDirection", TnOmits, RtiOmits, McOmits> {
    gridNavigationParameters: {
        rowIndexMangler?: UseListNavigationParameters<never, never, never, never, never>["listNavigationParameters"]["indexMangler"];
        rowIndexDemangler?: UseListNavigationParameters<never, never, never, never, never>["listNavigationParameters"]["indexDemangler"];
    }
}


export interface UseGridNavigationRowSubInfo<CR> {
    subInfo: CR;
}

export interface UseGridNavigationCellSubInfo<CC> {
    subInfo: CC;
}

export interface UseGridNavigationRowParameters<
    RowElement extends Element,
    CR,
    KR extends string,
    LsOmits extends ListNavigationParametersOmits,
    LnOmits extends LinearNavigationOmits,
    TnOmits extends TypeaheadNavigationOmits,
    RtiOmits extends RovingTabIndexParametersOmits,
    McOmits extends ManagedChildrenOmits,

    LsChildOmits extends ListNavigationChildOmits,
    RtiChildOmits extends RovingTabIndexChildOmits,
    McChildOmits extends ManagedChildOmits,

    SubbestInfo
> {
    asParentRowOfCells: UseListNavigationParameters<LsOmits, LnOmits | "navigationDirection", TnOmits, RtiOmits, McOmits>;
    asChildRowOfSection: UseListNavigationChildParameters<RowElement, UseGridNavigationRowSubInfo<CR>, KR, LsChildOmits, RtiChildOmits | "focusSelf", McChildOmits, SubbestInfo>

}
export interface UseGridNavigationCellParameters<CellElement extends Element, CC, KC extends string, LsChildOmits extends ListNavigationChildOmits, RtiChildOmits extends RovingTabIndexChildOmits, McChildOmits extends ManagedChildOmits, SubbestInfo> extends
    UseListNavigationChildParameters<CellElement, UseGridNavigationCellSubInfo<CC>, KC, LsChildOmits, RtiChildOmits, McChildOmits, SubbestInfo> {
}



export interface UseGridNavigationReturnTypeInfo<ParentOrRowElement extends Element, RowElement extends Element, RowSubInfo, ExtraFlagKeys extends string> extends UseListNavigationReturnTypeInfo<ParentOrRowElement, RowElement, UseGridNavigationRowSubInfo<RowSubInfo>, ExtraFlagKeys> {
    gridNavigationReturn: {
        getCurrentColumn(): number | null;
        currentColumn: number | null;
    }
}
export interface UseGridNavigationReturnTypeWithHooks<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> extends UseGridNavigationReturnTypeInfo<ParentOrRowElement, RowElement, CR, KR> {
    useGridNavigationRow: UseGridNavigationRow<RowElement, CellElement, CR, CC, KR, KC>;
    //gridNavigationProps: h.JSX.HTMLAttributes<ParentOrRowElement>;
}

export interface UseGridNavigationRowReturnTypeInfo<Row extends Element, Cell extends Element, CellSubInfo, KC extends string> {
    asChildRow: UseListNavigationChildReturnTypeInfo<Row>;
    asParentOfCells: UseListNavigationReturnTypeInfo<Row, Cell, UseGridNavigationCellSubInfo<CellSubInfo>, KC>;
}

export interface UseGridNavigationRowReturnTypeWithHooks<Row extends Element, Cell extends Element, CellSubInfo, KC extends string> extends UseGridNavigationRowReturnTypeInfo<Row, Cell, CellSubInfo, KC> {
    useGridNavigationCell: UseGridNavigationCell<Cell, CellSubInfo, KC>;
    //gridNavigationRowProps: h.JSX.HTMLAttributes<Row>;
}

export interface UseGridNavigationCellReturnTypeInfo<Cell extends Element> extends UseListNavigationChildReturnTypeInfo<Cell> {
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<Cell>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged" | "onCurrentFocusedInnerChanged">>;
    gridNavigationReturn: {
        //rowIsTabbable: boolean;
        //getRowIsTabbable(): boolean;
        getCurrentColumn(): number | null;
    }
}

export interface UseGridNavigationCellReturnTypeWithHooks<Cell extends Element> extends UseGridNavigationCellReturnTypeInfo<Cell> {
    //props: h.JSX.HTMLAttributes<Cell>;
    //onLastFocusedInnerChanged: (focused: boolean, prev: boolean | undefined) => void;
}


export type UseGridNavigationRow<Row extends Element, Cell extends Element, CR, CC, KR extends string, KC extends string> = (a: UseGridNavigationRowParameters<Row, CR, KR, never, never, never, never, never, never, never, never, CR>) => UseGridNavigationRowReturnTypeWithHooks<Row, Cell, CC, KC>;
export type UseGridNavigationCell<Cell extends Element, CC, KC extends string> = (p: UseGridNavigationCellParameters<Cell, CC, KC, never, never, never, CC>) => UseGridNavigationCellReturnTypeWithHooks<Cell>;


export function useGridNavigation<
    ParentOrRowElement extends Element,
    RowElement extends Element,
    CellElement extends Element,
    RowSubInfo,
    CellSubInfo,
    RowExtraFlags extends string,
    CellExtraFlags extends string
>({
    managedChildrenParameters: mc,
    rovingTabIndexParameters: rti,
    listNavigationParameters: ls,
    linearNavigationParameters: ln,
    typeaheadNavigationParameters: tn,
    gridNavigationParameters: { rowIndexDemangler, rowIndexMangler }
}: UseGridNavigationParameters<never, never, never, never, never>): UseGridNavigationReturnTypeWithHooks<ParentOrRowElement, RowElement, CellElement, RowSubInfo, CellSubInfo, RowExtraFlags, CellExtraFlags> {
    const [currentColumn, setCurrentColumn, getCurrentColumn] = useState<number | null>(rti.initialIndex ?? 0);

    const {
        useListNavigationChild: useListNavigationChildAsGridRow,
        ...parentLsReturnType
    } = useListNavigation<ParentOrRowElement, RowElement, UseGridNavigationRowSubInfo<RowSubInfo>, RowExtraFlags>({
        managedChildrenParameters: mc,
        rovingTabIndexParameters: rti,
        listNavigationParameters: { indexDemangler: rowIndexDemangler, indexMangler: rowIndexMangler, ...ls },
        linearNavigationParameters: { navigationDirection: "vertical", ...ln },
        typeaheadNavigationParameters: tn,
    });


    const useGridNavigationRow = useCallback<UseGridNavigationRow<RowElement, CellElement, RowSubInfo, CellSubInfo, RowExtraFlags, CellExtraFlags>>(({ asChildRowOfSection: asChild, asParentRowOfCells: asParent }) => {
        // Override the focusSelf that rovingTabIndex does.
        // Instead of focusing the entire row, we ask the cell that corresponds
        // to our current column to focus itself.
        const focusSelfRow = useStableCallback(() => {
            const c2 = getCurrentColumn();
            navigateToColumn(c2 ?? 0, true);
        });

        const rowLsChildReturnType = useListNavigationChildAsGridRow({
            refElementReturn: asChild.refElementReturn,
            managedChildParameters: asChild.managedChildParameters,
            listNavigationChildParameters: asChild.listNavigationChildParameters,
            rovingTabIndexChildParameters: { ...asChild.rovingTabIndexChildParameters, focusSelf: focusSelfRow },
            subInfo: { subInfo: asChild.subInfo },
        });
        const { rovingTabIndexChildReturn: { tabbable } } = rowLsChildReturnType;

        useEffect(() => {
            if (!tabbable) {
                navigateToColumn(null, false);
            }
        }, [tabbable]);

        const rowLsReturnType = useListNavigation<RowElement, CellElement, UseGridNavigationCellSubInfo<CellSubInfo>, CellExtraFlags>({
            managedChildrenParameters: { ...asParent.managedChildrenParameters },
            rovingTabIndexParameters: { ...asParent.rovingTabIndexParameters },
            linearNavigationParameters: {
                ...asParent.linearNavigationParameters,
                navigationDirection: "horizontal",
            },
            typeaheadNavigationParameters: { ...asParent.typeaheadNavigationParameters, noTypeahead: true },
            listNavigationParameters: { ...asParent.listNavigationParameters }
        });

        const {
            rovingTabIndexReturn: { setTabbableIndex },
            useListNavigationChild: useGridNavigationColumn2,
            listNavigationReturn: { navigateToIndex: navigateToColumn },
        } = rowLsReturnType;

        //const rowHidden = !!asChild.rovingTabIndex.hidden;

        const useGridNavigationCell = useCallback<UseGridNavigationCell<CellElement, CellSubInfo, CellExtraFlags>>(({
            subInfo,
            managedChildParameters,
            listNavigationChildParameters: ls,
            refElementReturn,
            rovingTabIndexChildParameters: { focusSelf: focusSelfCell, ...rti }
        }) => {
            const {
                rovingTabIndexChildReturn: rti_cell_ret,
                hasCurrentFocusParameters
            } = useGridNavigationColumn2({
                refElementReturn,
                managedChildParameters: managedChildParameters,
                listNavigationChildParameters: { ...ls },
                rovingTabIndexChildParameters: { focusSelf: focusSelfCell, ...rti },
                subInfo: { subInfo }
            });

            const ret: UseGridNavigationCellReturnTypeWithHooks<CellElement> = {

                gridNavigationReturn: { getCurrentColumn },
                rovingTabIndexChildReturn: rti_cell_ret,
                hasCurrentFocusParameters: {
                    ...hasCurrentFocusParameters,
                    onCurrentFocusedInnerChanged: useStableCallback((focused: boolean, prev: boolean | undefined) => {
                        if (focused) {
                            if (managedChildParameters.index == 0)
                                debugger;

                            setCurrentColumn(managedChildParameters.index);
                            setTabbableIndex(managedChildParameters.index, false);
                        }
                    })
                },

            }

            return ret;

        }, []);

        const ret: UseGridNavigationRowReturnTypeWithHooks<RowElement, CellElement, CellSubInfo, CellExtraFlags> = {
            asParentOfCells: {
                linearNavigationReturn: rowLsReturnType.linearNavigationReturn,
                listNavigationReturn: rowLsReturnType.listNavigationReturn,
                managedChildrenReturn: rowLsReturnType.managedChildrenReturn,
                rovingTabIndexReturn: rowLsReturnType.rovingTabIndexReturn,
                typeaheadNavigationReturn: rowLsReturnType.typeaheadNavigationReturn,

            },
            asChildRow: rowLsChildReturnType,

            useGridNavigationCell
        }

        return ret;
    }, []);

    return {
        gridNavigationReturn: {
            getCurrentColumn,
            currentColumn
        },
        linearNavigationReturn: parentLsReturnType.linearNavigationReturn,
        listNavigationReturn: parentLsReturnType.listNavigationReturn,
        rovingTabIndexReturn: parentLsReturnType.rovingTabIndexReturn,
        typeaheadNavigationReturn: parentLsReturnType.typeaheadNavigationReturn,
        managedChildrenReturn: parentLsReturnType.managedChildrenReturn,
        useGridNavigationRow,
    }
}
