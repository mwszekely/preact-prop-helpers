import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { ManagedChildOmits, ManagedChildrenOmits } from "./use-child-manager";
import { LinearNavigationOmits, TypeaheadNavigationOmits } from "./use-keyboard-navigation";
import { RovingTabIndexChildOmits, RovingTabIndexParametersOmits } from "./use-roving-tabindex";
import { useHasFocus, UseHasFocusParameters } from "./use-has-focus";
import { ListNavigationChildOmits, ListNavigationParametersOmits, useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo } from "./use-list-navigation";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";
import { useMergedProps } from "./use-merged-props";

/**
 * Grids are implemented using two sets of list navigation.
 * 
 * This results in a lot of things with very similar names and just confusion all around. Please use caution.
 */

// Parameters (parent, row, cell)
export interface UseGridNavigationParameters<LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends UseListNavigationParameters<LsOmits | "indexMangler" | "indexDemangler", LnOmits | "navigationDirection", TnOmits, RtiOmits, McOmits> {
    gridNavigation: {
        rowIndexMangler?: UseListNavigationParameters<never, never, never, never, never>["listNavigation"]["indexMangler"];
        rowIndexDemangler?: UseListNavigationParameters<never, never, never, never, never>["listNavigation"]["indexDemangler"];
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
    hasFocus: UseHasFocusParameters<CellElement>;
}



export interface UseGridNavigationReturnTypeInfo<ChildElement extends Element, RowSubInfo, ExtraFlagKeys extends string> extends UseListNavigationReturnTypeInfo<ChildElement, UseGridNavigationRowSubInfo<RowSubInfo>, ExtraFlagKeys> {
    gridNavigation: {
        getCurrentColumn(): number | null;
        currentColumn: number | null;
    }
}
export interface UseGridNavigationReturnTypeWithHooks<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> extends UseGridNavigationReturnTypeInfo<RowElement, CR, KR> {
    useGridNavigationRow: UseGridNavigationRow<RowElement, CellElement, CR, CC, KR, KC>;
    gridNavigationProps: h.JSX.HTMLAttributes<ParentOrRowElement>;
}

export interface UseGridNavigationRowReturnTypeInfo<Row extends Element, Cell extends Element, CellSubInfo, KC extends string> {
    asChildRow: UseListNavigationChildReturnTypeInfo<Row>;
    asParentOfCells: UseListNavigationReturnTypeInfo<Cell, UseGridNavigationCellSubInfo<CellSubInfo>, KC>;
}

export interface UseGridNavigationRowReturnTypeWithHooks<Row extends Element, Cell extends Element, CellSubInfo, KC extends string> extends UseGridNavigationRowReturnTypeInfo<Row, Cell, CellSubInfo, KC> {
    useGridNavigationCell: UseGridNavigationCell<Cell, CellSubInfo, KC>;
    gridNavigationRowProps: h.JSX.HTMLAttributes<Row>;
}

export interface UseGridNavigationCellReturnTypeInfo<Cell extends Element> extends UseListNavigationChildReturnTypeInfo<Cell> {
    gridNavigation: {
        //rowIsTabbable: boolean;
        //getRowIsTabbable(): boolean;
        getCurrentColumn(): number | null;
    }
}

export interface UseGridNavigationCellReturnTypeWithHooks<Cell extends Element> extends UseGridNavigationCellReturnTypeInfo<Cell> {
    props: h.JSX.HTMLAttributes<Cell>;
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
    managedChildren: mc,
    rovingTabIndex: rti,
    listNavigation: ls,
    linearNavigation: ln,
    typeaheadNavigation: tn,
    gridNavigation: { rowIndexDemangler, rowIndexMangler }
}: UseGridNavigationParameters<never, never, never, never, never>): UseGridNavigationReturnTypeWithHooks<ParentOrRowElement, RowElement, CellElement, RowSubInfo, CellSubInfo, RowExtraFlags, CellExtraFlags> {
    const [currentColumn, setCurrentColumn, getCurrentColumn] = useState<number | null>(rti.initialIndex ?? 0);

    const {
        useListNavigationChild: useListNavigationChildAsGridRow,
        props: useListNavigationPropsAsGridParent,
        ...parentLsReturnType
    } = useListNavigation<ParentOrRowElement, RowElement, UseGridNavigationRowSubInfo<RowSubInfo>, RowExtraFlags>({
        managedChildren: mc,
        rovingTabIndex: rti,
        listNavigation: { indexDemangler: rowIndexDemangler, indexMangler: rowIndexMangler, ...ls },
        linearNavigation: { navigationDirection: "vertical", ...ln },
        typeaheadNavigation: tn,
    });


    const useGridNavigationRow = useCallback<UseGridNavigationRow<RowElement, CellElement, RowSubInfo, CellSubInfo, RowExtraFlags, CellExtraFlags>>(({ asChildRowOfSection: asChild, asParentRowOfCells: asParent }) => {
        // Override the focusSelf that rovingTabIndex does.
        // Instead of focusing the entire row, we ask the cell that corresponds
        // to our current column to focus itself.
        const focusSelfRow = useStableCallback(() => {
            debugger;
            const c2 = getCurrentColumn();
            navigateToColumn(c2 ?? 0, true);
        });

        const rowLsChildReturnType = useListNavigationChildAsGridRow({
            managedChild: asChild.managedChild,
            listNavigation: { ...asChild.listNavigation },
            rovingTabIndex: { ...asChild.rovingTabIndex, focusSelf: focusSelfRow },
            subInfo: { subInfo: asChild.subInfo },
        });
        const { rovingTabIndex: { tabbable }, props: listNavigationChildProps } = rowLsChildReturnType;
        useEffect(() => {
            if (!tabbable) {
                navigateToColumn(null, false);
            }
        }, [tabbable]);

        const rowLsReturnType = useListNavigation<RowElement, CellElement, UseGridNavigationCellSubInfo<CellSubInfo>, CellExtraFlags>({
            managedChildren: { ...asParent.managedChildren },
            rovingTabIndex: { ...asParent.rovingTabIndex },
            linearNavigation: {
                ...asParent.linearNavigation,
                navigationDirection: "horizontal",
            },
            typeaheadNavigation: { ...asParent.typeaheadNavigation, noTypeahead: true },
            listNavigation: { ...asParent.listNavigation }
        });

        const { rovingTabIndex: { setTabbableIndex }, useListNavigationChild: useGridNavigationColumn2, props: useGridNavigationColumnProps, listNavigation: { navigateToIndex: navigateToColumn } } = rowLsReturnType;

        //const rowHidden = !!asChild.rovingTabIndex.hidden;

        const useGridNavigationCell = useCallback<UseGridNavigationCell<CellElement, CellSubInfo, CellExtraFlags>>(({ subInfo, hasFocus: { onLastFocusedInnerChanged, ...hasFocus }, managedChild, listNavigation: ls, rovingTabIndex: { focusSelf: focusSelfCell, ...rti } }) => {
            const {
                props: listNavigationChildProps,
                rovingTabIndex: rti_cell_ret
            } = useGridNavigationColumn2({
                managedChild: managedChild,
                listNavigation: { ...ls },
                rovingTabIndex: { focusSelf: focusSelfCell, ...rti },
                subInfo: { subInfo }
            });

            const { props: hasFocusProps, ...hasFocusRet } = useHasFocus<CellElement>({
                onLastFocusedInnerChanged: useStableCallback((focused: boolean, prev: boolean | undefined) => {
                    onLastFocusedInnerChanged?.(focused, prev);
                    if (focused) {
                        setCurrentColumn(managedChild.index);
                        setTabbableIndex(managedChild.index, false);
                    }
                }),
                ...hasFocus
            })

            const ret: UseGridNavigationCellReturnTypeWithHooks<CellElement> = {
                gridNavigation: { getCurrentColumn },
                rovingTabIndex: rti_cell_ret,
                hasFocus: hasFocusRet,
                props: useMergedProps(listNavigationChildProps, hasFocusProps)
            }

            return ret;

        }, []);

        const ret: UseGridNavigationRowReturnTypeWithHooks<RowElement, CellElement, CellSubInfo, CellExtraFlags> = {
            asParentOfCells: {
                linearNavigation: rowLsReturnType.linearNavigation,
                listNavigation: rowLsReturnType.listNavigation,
                managedChildren: rowLsReturnType.managedChildren,
                rovingTabIndex: rowLsReturnType.rovingTabIndex,
                typeaheadNavigation: rowLsReturnType.typeaheadNavigation,

            },
            asChildRow: rowLsChildReturnType,

            useGridNavigationCell,
            gridNavigationRowProps: useMergedProps(listNavigationChildProps, useGridNavigationColumnProps)
        }

        return ret;
    }, []);

    return {
        gridNavigation: {
            getCurrentColumn,
            currentColumn
        },
        linearNavigation: parentLsReturnType.linearNavigation,
        listNavigation: parentLsReturnType.listNavigation,
        rovingTabIndex: parentLsReturnType.rovingTabIndex,
        typeaheadNavigation: parentLsReturnType.typeaheadNavigation,
        managedChildren: parentLsReturnType.managedChildren,
        useGridNavigationRow,
        gridNavigationProps: useListNavigationPropsAsGridParent,
    }
}
