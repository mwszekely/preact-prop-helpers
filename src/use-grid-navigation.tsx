import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { ManagedChildren } from "./use-child-manager";
import { useHasFocus } from "./use-has-focus";
import { useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationParameters, UseListNavigationReturnType, UseListNavigationSubInfo } from "./use-list-navigation";
import { UseRovingTabIndexSubInfo } from "./use-roving-tabindex";
import { useStableCallback } from "./use-stable-callback";
import { useState } from "./use-state";
/*
export interface UseGridNavigationRowInfo extends UseRovingTabIndexChildInfo {
    setIsTabbableRow(tabbable: boolean): void;
    getIsTabbableRow(): boolean | null;

    /**
     * If a grid row is hidden, it will be skipped over
     * during keyboard navigation, and the HTML `hidden`
     * attribute will be applied.
     *
    hidden?: boolean;
}

export type UseGridNavigationRowParameters<I extends UseRovingTabIndexChildInfo> = Omit<UseRovingTabIndexChildParameters<I & { hidden?: boolean }>, "setIsTabbableRow" | "getIsTabbableRow">; //I;

export interface UseGridNavigationCellInfo extends UseRovingTabIndexChildInfo { hidden?: boolean; }
export type UseGridNavigationCellParameters<IC extends UseGridNavigationCellInfo> = UseRovingTabIndexChildParameters<IC>;

export interface UseGridNavigationRowReturnType<R extends Element, C extends Element, _IR extends UseGridNavigationRowInfo, IC extends UseGridNavigationCellInfo> {
    useGridNavigationRowProps: (props: h.JSX.HTMLAttributes<R>) => h.JSX.HTMLAttributes<R>;
    useGridNavigationCell: UseGridNavigationCell<C, IC>;
    cellCount: number;
    isTabbableRow: boolean | null;
    currentColumn: number | null;
    managedCells: IC[];
}

export type UseGridNavigationRow<R extends Element, C extends Element, IR extends UseGridNavigationRowInfo, IC extends UseGridNavigationCellInfo> = ({ index, ...info }: UseGridNavigationRowParameters<IR>) => UseGridNavigationRowReturnType<R, C, IR, IC>

export type UseGridNavigationCell<C extends Element, IC extends UseGridNavigationCellInfo> = (params: UseGridNavigationCellParameters<IC>) => {
    useGridNavigationCellProps: <P extends h.JSX.HTMLAttributes<C>>(props: P) => h.JSX.HTMLAttributes<C>;
}

*/



//export interface UseGridNavigationCellInfoBase<K extends string> extends ListNavigationChildInfoBase<K> { }

//export type UseGridNavigationRowInfoNeeded<K extends string, I extends UseGridNavigationRowInfoBase<K>> = Omit<UseListNavigationChildInfoNeeded<K, I>, "initialIndex">;
//export type UseGridNavigationCellInfoNeeded<K extends string, I extends UseGridNavigationCellInfoBase<K>> = UseListNavigationChildInfoNeeded<K, I>;


export interface UseGridNavigationParameters extends Omit<UseListNavigationParameters, "initialIndex" | "navigationDirection" | "linearNavigation"> {
    linearNavigation: Omit<UseListNavigationParameters["linearNavigation"], "navigationDirection">;
}

export interface UseGridNavigationRowParameters<CR, KR extends string> {
    asChild: UseListNavigationChildParameters<CR, KR>;
    asParent: UseListNavigationParameters;
}

export type UseGridNavigationRow<Row extends Element, Cell extends Element, CR, CC, KR extends string, KC extends string> = (a: UseGridNavigationRowParameters<CR, KR>) => UseGridNavigationRowReturnType<Row, Cell, CR, CC, KR, KC>;

export interface UseGridNavigationRowReturnType<Row extends Element, Cell extends Element, CR, CC, KR extends string, KC extends string> extends Omit<UseListNavigationChildReturnType<Row>, "useListNavigationChildProps"> {
    gn: {
        //rowIsTabbable: boolean;
        //cells: ManagedChildren<number, UseRovingTabIndexSubInfo<Cell, UseListNavigationSubInfo<CC>>, KC>;
        getCurrentColumn(): number | null;
    };
    children: ManagedChildren<number, UseRovingTabIndexSubInfo<Cell, UseListNavigationSubInfo<CC>>, "selected" | KC>;
    useGridNavigationCell: UseGridNavigationCell<Cell, CC, KC>;
    useGridNavigationRowProps: (props: h.JSX.HTMLAttributes<Row>) => h.JSX.HTMLAttributes<Row>;
}

export interface UseGridNavigationCellParameters<CC, KC extends string> extends UseListNavigationChildParameters<CC, KC> { }
/*
export type UseGridNavigationRowParameters<K extends string, I extends UseGridNavigationRowInfoBase<K>> = Omit<UseListNavigationParameters<K, I>, "initialIndex" | "onChildrenMountChange" | "noTypeahead" | "navigationDirection"> & UseRovingTabIndexChildParametersBase<K, Omit<UseGridNavigationRowInfoBase<K>, "initialIndex" | "noTypeahead" | "navigationDirection">> & {
    initialColumn?: number;
    onRowMountChange?: UseManagedChildrenParameters<I>["onChildrenMountChange"];
};*/


export type UseGridNavigationCell<Cell extends Element, CC, KC extends string> = (p: UseGridNavigationCellParameters<CC, KC>) => UseGridNavigationCellReturnType<Cell>;

export interface UseGridNavigationCellReturnType<Cell extends Element> extends Omit<UseListNavigationChildReturnType<Cell>, "useListNavigationChildProps"> {
    gn: {
        //rowIsTabbable: boolean;
        //getRowIsTabbable(): boolean;
        getCurrentColumn(): number | null;
    }
    useGridNavigationCellProps: (props: h.JSX.HTMLAttributes<Cell>) => h.JSX.HTMLAttributes<Cell>;
}

//export type UseGridNavigationRowParameters<KR extends string, KC extends string, IR extends UseGridNavigationRowInfoBase<KR>, IC extends UseGridNavigationRowInfoBase<KC>> = { info: UseGridNavigationRowInfoNeeded<KR, IR> } & Omit<UseListNavigationParameters<KC, IC>, "noTypeahead" | "navigationDirection">;

export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, CR, CC, KR extends string, KC extends string> extends Omit<UseListNavigationReturnType<ParentOrRowElement, RowElement, CR, KR>, "useListNavigationChild" | "useListNavigationProps"> {
    gridNavigation: {
        rows: ManagedChildren<number, UseRovingTabIndexSubInfo<RowElement, UseListNavigationSubInfo<CR>>, KR>;
        getCurrentColumn(): number | null;
        currentColumn: number | null;
    }
    useGridNavigationRow: UseGridNavigationRow<RowElement, CellElement, CR, CC, KR, KC>;
    useGridNavigationProps: (props: h.JSX.HTMLAttributes<ParentOrRowElement>) => h.JSX.HTMLAttributes<ParentOrRowElement>;
}

export function useGridNavigation<
    ParentOrRowElement extends Element,
    RowElement extends Element,
    CellElement extends Element,
    CR,
    CC,
    KR extends string,
    KC extends string
>({
    managedChildren: mc,
    rovingTabIndex: rti,
    listNavigation: ls,
    linearNavigation: ln,
    typeaheadNavigation: tn
}: UseGridNavigationParameters): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, CR, CC, KR, KC> {
    const [currentColumn, setCurrentColumn, getCurrentColumn] = useState<number | null>(rti.initialIndex ?? 0);

    const {
        children: rows,
        linearNavigation: ln_row_ret,
        listNavigation: ls_row_ret,
        rovingTabIndex: rti_row_ret,
        typeaheadNavigation: tn_row_ret,
        useListNavigationChild: useGridNavigationRow2,
        useListNavigationProps: useGridNavigationProps,
    } = useListNavigation<ParentOrRowElement, RowElement, CR, KR>({
        managedChildren: mc,
        rovingTabIndex: rti,
        listNavigation: ls,
        linearNavigation: { navigationDirection: "block", ...ln },
        typeaheadNavigation: tn,
    });

    const useGridNavigationRow = useCallback<UseGridNavigationRow<RowElement, CellElement, CR, CC, KR, KC>>(({ asChild, asParent }) => {
        const focusSelf = useStableCallback(() => {
            const c2 = getCurrentColumn();
            console.log(`row #${asChild.managedChild.index},${c2} focusSelf`);
            if (asChild.rovingTabIndex.focusSelf) {
                asChild.rovingTabIndex.focusSelf();
            }
            else {
                li_cell.navigateToIndex(c2 ?? 0, true);
            }
        });

        const { 
            rovingTabIndex: row_rti, 
            useListNavigationChildProps 
        } = useGridNavigationRow2({
            managedChild: asChild.managedChild,
            listNavigation: asChild.listNavigation,
            rovingTabIndex: { ...asChild.rovingTabIndex, focusSelf }
        });
        useEffect(() => {
            if (!row_rti.tabbable) {
                li_cell.navigateToIndex(null, false);
            }
        }, [row_rti.tabbable]);

        /*const onTabbableIndexChange = useStableCallback<OnTabbableIndexChange>((i) => {
            console.log(`row.onTabbableIndexChange(${i ?? "null"})`);
            if (i != null) {
                setCurrentColumn(i);
            }
            asParent.rovingTabIndex.onTabbableIndexChange?.(i);
        });*/

        const {
            children: columns,
            useListNavigationChild: useGridNavigationColumn2,
            useListNavigationProps: useGridNavigationColumnProps,
            rovingTabIndex: rti_cell,
            listNavigation: li_cell,
            linearNavigation: ln_cell,
            typeaheadNavigation: tn_cell
        } = useListNavigation<CellElement, CellElement, CC, KC>({
            managedChildren: { ...asParent.managedChildren },
            rovingTabIndex: { ...asParent.rovingTabIndex },
            linearNavigation: {
                ...asParent.linearNavigation,
                navigationDirection: "inline",
            },
            typeaheadNavigation: { ...asParent.typeaheadNavigation, noTypeahead: true },
            listNavigation: { ...asParent.listNavigation }
        });

        const useGridNavigationCell = useCallback<UseGridNavigationCell<CellElement, CC, KC>>(({ managedChild, listNavigation: ls, rovingTabIndex: { blurSelf: bs, focusSelf: fs, ...rti } }) => {
            const focusSelf = useStableCallback(() => {
                console.log(`cell #${managedChild.index} focusSelf`);
                setCurrentColumn(managedChild.index);
                rti_cell.setTabbableIndex(managedChild.index, false);
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
                listNavigation: { ...ls },
                rovingTabIndex: { blurSelf, focusSelf, ...rti }
            });

            const { useHasFocusProps } = useHasFocus<CellElement>({
                onLastFocusedInnerChanged: useStableCallback((focused: boolean) => {
                    if (focused) {
                        setCurrentColumn(managedChild.index);
                        rti_cell.setTabbableIndex(managedChild.index, false);
                    }
                })
            })

            const ret: UseGridNavigationCellReturnType<CellElement> = {
                gn: { getCurrentColumn },
                rovingTabIndex: rti_cell_ret,
                useGridNavigationCellProps: function <P extends h.JSX.HTMLAttributes<CellElement>>(props: P) { return useListNavigationChildProps(useGridNavigationColumnProps(useHasFocusProps(props))); }
            }

            return ret;

        }, []);

        const ret: UseGridNavigationRowReturnType<RowElement, CellElement, CR, CC, KR, KC> = {
            children: columns,
            gn: { getCurrentColumn },
            rovingTabIndex: row_rti,
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
            rows,
            currentColumn
        },
        children: rows,
        linearNavigation: ln_row_ret,
        listNavigation: ls_row_ret,
        rovingTabIndex: rti_row_ret,
        typeaheadNavigation: tn_row_ret,
        useGridNavigationRow,
        useGridNavigationProps,
    }
}
