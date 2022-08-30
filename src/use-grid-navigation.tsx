import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { ManagedChildren } from "./use-child-manager";
import { useHasFocus } from "./use-has-focus";
import { useListNavigation, UseListNavigationChildParameters, UseListNavigationParameters, UseListNavigationReturnType, UseListNavigationSubInfo } from "./use-list-navigation";
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

export interface UseGridNavigationCellParameters<CC, KC extends string> extends UseListNavigationChildParameters<CC, KC> { }
/*
export type UseGridNavigationRowParameters<K extends string, I extends UseGridNavigationRowInfoBase<K>> = Omit<UseListNavigationParameters<K, I>, "initialIndex" | "onChildrenMountChange" | "noTypeahead" | "navigationDirection"> & UseRovingTabIndexChildParametersBase<K, Omit<UseGridNavigationRowInfoBase<K>, "initialIndex" | "noTypeahead" | "navigationDirection">> & {
    initialColumn?: number;
    onRowMountChange?: UseManagedChildrenParameters<I>["onChildrenMountChange"];
};*/


export type UseGridNavigationCell<Cell extends HTMLElement | SVGElement, CC, KC extends string> = (p: UseGridNavigationCellParameters<CC, KC>) => {
    cellIsTabbable: boolean;
    rowIsTabbable: boolean;
    getCellIsTabbable(): boolean;
    getRowIsTabbable(): boolean;
    getCurrentColumn(): number | null;
    useGridNavigationCellProps: (props: h.JSX.HTMLAttributes<Cell>) => h.JSX.HTMLAttributes<Cell>;
}

//export type UseGridNavigationRowParameters<KR extends string, KC extends string, IR extends UseGridNavigationRowInfoBase<KR>, IC extends UseGridNavigationRowInfoBase<KC>> = { info: UseGridNavigationRowInfoNeeded<KR, IR> } & Omit<UseListNavigationParameters<KC, IC>, "noTypeahead" | "navigationDirection">;
export type UseGridNavigationRow<Row extends HTMLElement, Cell extends HTMLElement | SVGElement, CR, CC, KR extends string, KC extends string> = (a: UseGridNavigationRowParameters<CR, KR>) => {
    rowIsTabbable: boolean;
    cells: ManagedChildren<number, UseRovingTabIndexSubInfo<Cell, UseListNavigationSubInfo<CC>>, KC>;
    getCurrentColumn(): number | null;
    useGridNavigationCell: UseGridNavigationCell<Cell, CC, KC>;
    useGridNavigationRowProps: (props: h.JSX.HTMLAttributes<Row>) => h.JSX.HTMLAttributes<Row>;
    typeaheadNavigation: UseListNavigationReturnType<Row, Cell, CR, KR>["typeaheadNavigation"];
    linearNavigation: UseListNavigationReturnType<Row, Cell, CR, KR>["linearNavigation"];
    rovingTabIndex: UseListNavigationReturnType<Row, Cell, CR, KR>["rovingTabIndex"];
    listNavigation: UseListNavigationReturnType<Row, Cell, CR, KR>["listNavigation"];
}

export function useGridNavigation<
    ParentOrRowElement extends HTMLElement,
    RowElement extends HTMLElement,
    CellElement extends HTMLElement,
    CR,
    CC,
    KR extends string,
    KC extends string
>({
    managedChildren: mc,
    rovingTabIndex: rti,
    listNavigation: li,
    linearNavigation: ln,
    typeaheadNavigation: tn
}: UseGridNavigationParameters) {
    const [currentColumn, setCurrentColumn, getCurrentColumn] = useState<number | null>(rti.initialIndex ?? 0);

    const {
        children: rows,
        useListNavigationChild: useGridNavigationRow2,
        useListNavigationProps: useGridNavigationProps,
    } = useListNavigation<ParentOrRowElement, RowElement, CR, KR>({
        managedChildren: mc,
        rovingTabIndex: rti,
        listNavigation: li,
        linearNavigation: { navigationDirection: "block", ...ln },
        typeaheadNavigation: tn,
    });

    const useGridNavigationRow = useCallback<UseGridNavigationRow<RowElement, CellElement, CR, CC, KR, KC>>(({ asChild, asParent }) => {
        const focusSelf = useStableCallback(() => {
            const c2 = getCurrentColumn();
            console.log(`row #${asChild.managedChild.index},${c2} focusSelf`);
            if (asChild.rti.focusSelf) {
                asChild.rti.focusSelf();
            }
            else {
                //const c1 = getCurrentColumn2();
                //console.assert(c1 == c2);
                li2.navigateToIndex(c2 ?? 0, true);
                //setTabbableIndex(c2 ?? 0, false);
                //columns.getAt(c2 ?? 0)?.subInfo.focusSelf();
            }
        });

        const { tabbable: rowIsTabbable, getTabbable: getRowIsTabbable, useListNavigationChildProps } = useGridNavigationRow2({
            managedChild: asChild.managedChild,
            li: asChild.li,
            rti: { ...asChild.rti, focusSelf }
        });
        useEffect(() => {
            if (!rowIsTabbable) {
                li2.navigateToIndex(null, false);
            }
        }, [rowIsTabbable]);

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
            rovingTabIndex: rti2,
            listNavigation: li2,
            linearNavigation: ln2,
            typeaheadNavigation: tn2
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

        const useGridNavigationCell = useCallback<UseGridNavigationCell<CellElement, CC, KC>>(({ managedChild, li, rti: { blurSelf: bs, focusSelf: fs, ...rti } }) => {
            const focusSelf = useStableCallback(() => {
                console.log(`cell #${managedChild.index} focusSelf`);
                setCurrentColumn(managedChild.index);
                rti2.setTabbableIndex(managedChild.index, false);
                if (fs)
                    fs();
                else
                    getElement()?.focus();
            });
            const blurSelf = useStableCallback(() => {
                if (bs)
                    bs();
                else
                    getElement()?.blur();
            });
            const { 
                tabbable, 
                useListNavigationChildProps, 
                getElement,
                getTabbable
             } = useGridNavigationColumn2({
                managedChild: managedChild,
                li: li,
                rti: { blurSelf, focusSelf, ...rti }
            });

            const { useHasFocusProps } = useHasFocus<CellElement>({
                onLastFocusedInnerChanged: useStableCallback((focused: boolean) => {
                    if (focused) {
                        setCurrentColumn(managedChild.index);
                        rti2.setTabbableIndex(managedChild.index, false);
                    }
                })
            })

            return {
                cellIsTabbable: tabbable,
                getCellIsTabbable: getTabbable,
                rowIsTabbable: getRowIsTabbable(),
                getRowIsTabbable: getRowIsTabbable,
                getCurrentColumn,
                useGridNavigationCellProps: function <P extends h.JSX.HTMLAttributes<CellElement>>(props: P) { return useListNavigationChildProps(useGridNavigationColumnProps(useHasFocusProps(props))); }
            }

        }, []);

        return {
            cells: columns,
            rowIsTabbable,
            rovingTabIndex: rti2,
            listNavigation: li2,
            typeaheadNavigation: tn2,
            linearNavigation: ln2,
            getCurrentColumn,
            useGridNavigationCell,
            useGridNavigationRowProps: function <P extends h.JSX.HTMLAttributes<RowElement>>(props: P) {
                const ret = useListNavigationChildProps(props);
                ret.tabIndex = -1;
                return ret;
            }
        }
    }, []);

    return {
        getCurrentColumn,
        useGridNavigationRow,
        useGridNavigationProps,
        currentColumn,
        rows
    }
}
