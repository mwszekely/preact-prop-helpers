import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import { ManagedChildren } from "./use-child-manager";
import { UseListNavigationSubInfo, useListNavigation, UseListNavigationChildParameters, UseListNavigationParameters } from "./use-list-navigation";
import { OnTabbableIndexChange, UseRovingTabIndexSubInfo } from "./use-roving-tabindex";
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
    //initialRow ??= 0;
    //initialColumn ??= 0;

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
            if (asChild.rti.focusSelf) {
                asChild.rti.focusSelf();
            }
            else {
                const c1 = getCurrentColumn2();
                const c2 = getCurrentColumn();
                console.assert(c1 == c1);
                columns.getAt(c2 ?? 0)?.subInfo.focusSelf();
            }
        });

        const { tabbable: rowIsTabbable, useListNavigationChildProps } = useGridNavigationRow2({
            managedChild: asChild.managedChild,
            li: asChild.li,
            rti: { ...asChild.rti, focusSelf }
        });
        useEffect(() => {
            if (!rowIsTabbable)
                setTabbableIndex(null, false);
        }, [rowIsTabbable]);

        const onTabbableIndexChange = useStableCallback<OnTabbableIndexChange>((i) => {
            if (i != null)
                setCurrentColumn(i);
            asParent.rovingTabIndex.onTabbableIndexChange?.(i);
        });

        const {
            children: columns,
            useListNavigationChild: useGridNavigationColumn2,
            useListNavigationProps: useGridNavigationColumnProps,
            rovingTabIndex: {
                getTabbableIndex: getCurrentColumn2,
                setTabbableIndex,
            }
        } = useListNavigation<CellElement, CellElement, CC, KC>({
            managedChildren: { ...asParent.managedChildren },
            rovingTabIndex: { ...asParent.rovingTabIndex, onTabbableIndexChange },
            linearNavigation: {
                ...asParent.linearNavigation,
                navigationDirection: "inline",
            },
            typeaheadNavigation: { ...asParent.typeaheadNavigation, noTypeahead: true },
            listNavigation: { ...asParent.listNavigation }
        });

        const useGridNavigationCell = useCallback<UseGridNavigationCell<CellElement, CC, KC>>(({ managedChild, li, rti: { blurSelf: bs, focusSelf: fs, ...rti } }) => {
            const focusSelf = useStableCallback(() => {
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
            const { tabbable: cellIsTabbable, useListNavigationChildProps, getElement } = useGridNavigationColumn2({
                managedChild: managedChild,
                li: li,
                rti: { blurSelf, focusSelf, ...rti }
            });

            return {
                cellIsTabbable,
                getCurrentColumn,
                useGridNavigationCellProps: function <P extends h.JSX.HTMLAttributes<CellElement>>(props: P) { return useListNavigationChildProps(useGridNavigationColumnProps(props)); }
            }

        }, []);

        return {
            cells: columns,
            rowIsTabbable,
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
