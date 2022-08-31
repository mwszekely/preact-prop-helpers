import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { useHasFocus } from "./use-has-focus";
import { useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";

/**
 * Grids are implemented using two sets of list navigation.
 * 
 * This results in a lot of things with very similar names and just confusion all around. Please use caution.
 */

// Parameters (parent, row, cell)
export interface UseGridNavigationParameters extends Omit<UseListNavigationParameters, "linearNavigation"> {
    linearNavigation: Omit<UseListNavigationParameters["linearNavigation"], "navigationDirection">;
}

export interface UseGridNavigationRowParameters<CR, KR extends string> {
    asChildRow: Omit<UseListNavigationChildParameters<CR, KR>, "listNavigation"> & { listNavigation: Omit<UseListNavigationChildParameters<CR, KR>, "subInfo">["listNavigation"]; gridNavigation: { subInfo: CR; } }
    asParentOfCells: UseListNavigationParameters;
}
export interface UseGridNavigationCellParameters<CC, KC extends string> extends Omit<UseListNavigationChildParameters<CC, KC>, "listNavigation"> {
    listNavigation: Omit<UseListNavigationChildParameters<CC, KC>["listNavigation"], "subInfo">;
    gridNavigation: {
        subInfo: CC;
    }
}


// Return types (parent, row, cell)

export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> extends Omit<UseListNavigationReturnType<ParentOrRowElement, RowElement, CR, KR>, "useListNavigationChild" | "useListNavigationProps"> {
    gridNavigation: {
        //rows: ManagedChildren<number, UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<CR>>, KR>;
        getCurrentColumn(): number | null;
        currentColumn: number | null;
    }
    useGridNavigationRow: UseGridNavigationRow<RowElement, CellElement, CR, CC, KR, KC>;
    useGridNavigationProps: (props: h.JSX.HTMLAttributes<ParentOrRowElement>) => h.JSX.HTMLAttributes<ParentOrRowElement>;
}

export interface UseGridNavigationRowReturnType<Row extends Element, Cell extends Element, CC, KC extends string> {
    asChildRow: Omit<UseListNavigationChildReturnType<Row>, "useListNavigationChildProps">
    asParentOfCells: Omit<UseListNavigationReturnType<Row, Cell, CC, KC>, "useListNavigationChild" | "useListNavigationProps">;
    //children: ManagedChildren<number, UseRovingTabIndexSubInfo<Cell, UseListNavigationSubInfo<CC>>, "selected" | KC>;
    useGridNavigationCell: UseGridNavigationCell<Cell, CC, KC>;
    useGridNavigationRowProps: (props: h.JSX.HTMLAttributes<Row>) => h.JSX.HTMLAttributes<Row>;
}

export interface UseGridNavigationCellReturnType<Cell extends Element> extends Omit<UseListNavigationChildReturnType<Cell>, "useListNavigationChildProps"> {
    gridNavigation: {
        //rowIsTabbable: boolean;
        //getRowIsTabbable(): boolean;
        getCurrentColumn(): number | null;
    }
    useGridNavigationCellProps: (props: h.JSX.HTMLAttributes<Cell>) => h.JSX.HTMLAttributes<Cell>;
}


export type UseGridNavigationRow<Row extends Element, Cell extends Element, CR, CC, KR extends string, KC extends string> = (a: UseGridNavigationRowParameters<CR, KR>) => UseGridNavigationRowReturnType<Row, Cell, CC, KC>;
export type UseGridNavigationCell<Cell extends Element, CC, KC extends string> = (p: UseGridNavigationCellParameters<CC, KC>) => UseGridNavigationCellReturnType<Cell>;


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
    typeaheadNavigation: tn
}: UseGridNavigationParameters): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RowSubInfo, CellSubInfo, RowExtraFlags, CellExtraFlags> {
    const [currentColumn, setCurrentColumn, getCurrentColumn] = useState<number | null>(rti.initialIndex ?? 0);

    const parentLsReturnType = useListNavigation<ParentOrRowElement, RowElement, RowSubInfo, RowExtraFlags>({
        managedChildren: mc,
        rovingTabIndex: rti,
        listNavigation: ls,
        linearNavigation: { navigationDirection: "block", ...ln },
        typeaheadNavigation: tn,
    });

    const { useListNavigationChild: useListNavigationChildAsGridRow, useListNavigationProps: useListNavigationPropsAsGridParent } = parentLsReturnType;

    const useGridNavigationRow = useCallback<UseGridNavigationRow<RowElement, CellElement, RowSubInfo, CellSubInfo, RowExtraFlags, CellExtraFlags>>(({ asChildRow: asChild, asParentOfCells: asParent }) => {
        // Override the focusSelf that rovingTabIndex does.
        // Instead of focusing the entire row, we ask the cell that corresponds
        // to our current column to focus itself.
        const focusSelf = useStableCallback(() => {
            const c2 = getCurrentColumn();
            console.log(`row #${asChild.managedChild.index},${c2} focusSelf`);
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
            rovingTabIndex: { ...asChild.rovingTabIndex, focusSelf }
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
                navigationDirection: "inline",
            },
            typeaheadNavigation: { ...asParent.typeaheadNavigation, noTypeahead: true },
            listNavigation: { ...asParent.listNavigation }
        });

        const { rovingTabIndex: { setTabbableIndex }, useListNavigationChild: useGridNavigationColumn2, useListNavigationProps: useGridNavigationColumnProps, listNavigation: { navigateToIndex } } = rowLsReturnType;

        //const rowHidden = !!asChild.rovingTabIndex.hidden;

        const useGridNavigationCell = useCallback<UseGridNavigationCell<CellElement, CellSubInfo, CellExtraFlags>>(({ managedChild, listNavigation: ls, rovingTabIndex: { blurSelf: bs, focusSelf: fs, ...rti }, gridNavigation: { subInfo } }) => {
            //rti.hidden || rowHidden;

            const focusSelf = useStableCallback(() => {
                console.log(`cell #${managedChild.index} focusSelf`);
                setCurrentColumn(managedChild.index);
                setTabbableIndex(managedChild.index, false);
                if (fs)
                    fs();
                else
                    (rti_cell_ret.getElement() as Element & Partial<HTMLElement>)?.focus?.();
            });
            const blurSelf = useStableCallback(() => {
                if (bs)
                    bs();
                else
                    (rti_cell_ret.getElement() as Element & Partial<HTMLElement>)?.blur?.();
            });
            const {
                useListNavigationChildProps,
                rovingTabIndex: rti_cell_ret
            } = useGridNavigationColumn2({
                managedChild: managedChild,
                listNavigation: { ...ls, subInfo },
                rovingTabIndex: { blurSelf, focusSelf, ...rti }
            });

            const { useHasFocusProps } = useHasFocus<CellElement>({
                onLastFocusedInnerChanged: useStableCallback((focused: boolean) => {
                    if (focused) {
                        setCurrentColumn(managedChild.index);
                        setTabbableIndex(managedChild.index, false);
                    }
                })
            })

            const ret: UseGridNavigationCellReturnType<CellElement> = {
                gridNavigation: { getCurrentColumn },
                rovingTabIndex: rti_cell_ret,
                useGridNavigationCellProps: function <P extends h.JSX.HTMLAttributes<CellElement>>(props: P) { return useListNavigationChildProps(useGridNavigationColumnProps(useHasFocusProps(props))); }
            }

            return ret;

        }, []);

        const ret: UseGridNavigationRowReturnType<RowElement, CellElement, CellSubInfo, CellExtraFlags> = {
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
