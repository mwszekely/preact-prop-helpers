import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { ManagedChildOmits, ManagedChildrenOmits } from "./use-child-manager";
import { LinearNavigationOmits, TypeaheadNavigationOmits } from "./use-keyboard-navigation";
import { RovingTabIndexChildOmits, RovingTabIndexParametersOmits } from "./use-roving-tabindex";
import { useHasFocus, UseHasFocusParameters } from "./use-has-focus";
import { ListNavigationChildOmits, ListNavigationParametersOmits, useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo } from "./use-list-navigation";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";

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

export interface UseGridNavigationRowParameters<
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
    asChildRowOfSection: UseListNavigationChildParameters<CR, KR, LsChildOmits, RtiChildOmits, McChildOmits, SubbestInfo>
        
}
export interface UseGridNavigationCellParameters<CellElement extends Element, CC, KC extends string, LsChildOmits extends ListNavigationChildOmits, RtiChildOmits extends RovingTabIndexChildOmits, McChildOmits extends ManagedChildOmits, SubbestInfo> extends
    UseListNavigationChildParameters<CC, KC, LsChildOmits, RtiChildOmits, McChildOmits, SubbestInfo> {
    hasFocus: UseHasFocusParameters<CellElement>;
}



export interface UseGridNavigationReturnTypeInfo<ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string> extends UseListNavigationReturnTypeInfo<ChildElement, LsSubInfo, ExtraFlagKeys> {
    gridNavigation: {
        getCurrentColumn(): number | null;
        currentColumn: number | null;
    }
}
export interface UseGridNavigationReturnTypeWithHooks<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> extends UseGridNavigationReturnTypeInfo<RowElement, CR, KR> {
    useGridNavigationRow: UseGridNavigationRow<RowElement, CellElement, CR, CC, KR, KC>;
    useGridNavigationProps: (props: h.JSX.HTMLAttributes<ParentOrRowElement>) => h.JSX.HTMLAttributes<ParentOrRowElement>;
}

export interface UseGridNavigationRowReturnTypeInfo<Row extends Element, Cell extends Element, CC, KC extends string> {
    asChildRow: UseListNavigationChildReturnTypeInfo<Row>;
    asParentOfCells: UseListNavigationReturnTypeInfo<Cell, CC, KC>;
}

export interface UseGridNavigationRowReturnTypeWithHooks<Row extends Element, Cell extends Element, CC, KC extends string> extends UseGridNavigationRowReturnTypeInfo<Row, Cell, CC, KC> {
    useGridNavigationCell: UseGridNavigationCell<Cell, CC, KC>;
    useGridNavigationRowProps: (props: h.JSX.HTMLAttributes<Row>) => h.JSX.HTMLAttributes<Row>;
}

export interface UseGridNavigationCellReturnTypeInfo<Cell extends Element> extends UseListNavigationChildReturnTypeInfo<Cell> {
    gridNavigation: {
        //rowIsTabbable: boolean;
        //getRowIsTabbable(): boolean;
        getCurrentColumn(): number | null;
    }
}

export interface UseGridNavigationCellReturnTypeWithHooks<Cell extends Element> extends UseGridNavigationCellReturnTypeInfo<Cell> {
    useGridNavigationCellProps: (props: h.JSX.HTMLAttributes<Cell>) => h.JSX.HTMLAttributes<Cell>;
}


export type UseGridNavigationRow<Row extends Element, Cell extends Element, CR, CC, KR extends string, KC extends string> = (a: UseGridNavigationRowParameters<CR, KR, never, never, never, never, never, never, never, never, CR>) => UseGridNavigationRowReturnTypeWithHooks<Row, Cell, CC, KC>;
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
        useListNavigationProps: useListNavigationPropsAsGridParent,
        ...parentLsReturnType
    } = useListNavigation<ParentOrRowElement, RowElement, RowSubInfo, RowExtraFlags>({
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
        const focusSelf = useStableCallback(() => {
            const c2 = getCurrentColumn();
            if (asChild.rovingTabIndex.focusSelf) {
                asChild.rovingTabIndex.focusSelf();
            }
            else {
                navigateToIndex(c2 ?? 0, true);
            }
        });

        const rowLsChildReturnType = useListNavigationChildAsGridRow({
            managedChild: asChild.managedChild,
            listNavigation: { ...asChild.listNavigation },
            rovingTabIndex: { ...asChild.rovingTabIndex, focusSelf },
            subInfo: asChild.subInfo,
        });
        const { rovingTabIndex: { tabbable }, useListNavigationChildProps } = rowLsChildReturnType;
        useEffect(() => {
            if (!tabbable) {
                navigateToIndex(null, false);
            }
        }, [tabbable]);

        const rowLsReturnType = useListNavigation<CellElement, CellElement, CellSubInfo, CellExtraFlags>({
            managedChildren: { ...asParent.managedChildren },
            rovingTabIndex: { ...asParent.rovingTabIndex },
            linearNavigation: {
                ...asParent.linearNavigation,
                navigationDirection: "horizontal",
            },
            typeaheadNavigation: { ...asParent.typeaheadNavigation, noTypeahead: true },
            listNavigation: { ...asParent.listNavigation }
        });

        const { rovingTabIndex: { setTabbableIndex }, useListNavigationChild: useGridNavigationColumn2, useListNavigationProps: useGridNavigationColumnProps, listNavigation: { navigateToIndex } } = rowLsReturnType;

        //const rowHidden = !!asChild.rovingTabIndex.hidden;

        const useGridNavigationCell = useCallback<UseGridNavigationCell<CellElement, CellSubInfo, CellExtraFlags>>(({ subInfo, hasFocus: { onLastFocusedInnerChanged, ...hasFocus }, managedChild, listNavigation: ls, rovingTabIndex: { focusSelf: fs, ...rti } }) => {
            //rti.hidden || rowHidden;

            const focusSelf = useStableCallback(() => {
                setCurrentColumn(managedChild.index);
                setTabbableIndex(managedChild.index, false);
                if (fs)
                    fs();
                else
                    (rti_cell_ret.getElement() as Element & Partial<HTMLElement>)?.focus?.();
            });
            /*const blurSelf = useStableCallback(() => {
                if (bs)
                    bs();
                else
                    (rti_cell_ret.getElement() as Element & Partial<HTMLElement>)?.blur?.();
            });*/
            const {
                useListNavigationChildProps,
                rovingTabIndex: rti_cell_ret
            } = useGridNavigationColumn2({
                managedChild: managedChild,
                listNavigation: { ...ls },
                rovingTabIndex: { focusSelf, ...rti },
                subInfo
            });

            const { useHasFocusProps } = useHasFocus<CellElement>({
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
                useGridNavigationCellProps: function <P extends h.JSX.HTMLAttributes<CellElement>>(props: P) { return useListNavigationChildProps(useGridNavigationColumnProps(useHasFocusProps(props))); }
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
            useGridNavigationRowProps: function <P extends h.JSX.HTMLAttributes<RowElement>>(props: P) {
                const ret = useListNavigationChildProps(props);
                ret.tabIndex = -1;
                return ret;
            }
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
        useGridNavigationProps: useListNavigationPropsAsGridParent,
    }
}
