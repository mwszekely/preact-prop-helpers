import { h } from "preact";
import { useCallback, useEffect } from "preact/hooks";
import {  } from "./use-roving-tabindex";
import { ManagedChildren } from "./use-child-manager";
import { ListNavigationChildInfoBase, useListNavigation, UseListNavigationChildInfoNeeded, UseListNavigationParameters } from "./use-list-navigation";
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

export interface UseGridNavigationRowInfoBase<K extends string> extends ListNavigationChildInfoBase<K> {
    /**
     * If a child is hidden, then it will be skipped over
     * during keyboard navigation, and the HTML `hidden`
     * attribute will be applied.
     */
    //hidden?: boolean;
}
export interface UseGridNavigationCellInfoBase<K extends string> extends ListNavigationChildInfoBase<K> { }

export type UseGridNavigationRowInfoNeeded<K extends string, I extends UseGridNavigationRowInfoBase<K>> = Omit<UseListNavigationChildInfoNeeded<K, I>, "initialIndex">;
export type UseGridNavigationCellInfoNeeded<K extends string, I extends UseGridNavigationCellInfoBase<K>> = UseListNavigationChildInfoNeeded<K, I>;


export interface UseGridNavigationParameters<K extends string, IR extends UseGridNavigationRowInfoBase<K>> extends Omit<UseListNavigationParameters<K, IR>, "initialIndex" | "navigationDirection"> {
    indexMangler?(unmangled: number): number;
    indexDemangler?(mangled: number): number;
    //onRowMountChange?: UseManagedChildrenParameters<IR>["onChildrenMountChange"];
    initialRow?: number;
    initialColumn?: number;

}
/*
export type UseGridNavigationRowParameters<K extends string, I extends UseGridNavigationRowInfoBase<K>> = Omit<UseListNavigationParameters<K, I>, "initialIndex" | "onChildrenMountChange" | "noTypeahead" | "navigationDirection"> & UseRovingTabIndexChildParametersBase<K, Omit<UseGridNavigationRowInfoBase<K>, "initialIndex" | "noTypeahead" | "navigationDirection">> & {
    initialColumn?: number;
    onRowMountChange?: UseManagedChildrenParameters<I>["onChildrenMountChange"];
};*/


export type UseGridNavigationCell<C extends HTMLElement | SVGElement, K extends string = string, IC extends UseGridNavigationRowInfoBase<K> = UseGridNavigationRowInfoBase<K>> = (p: { info: UseGridNavigationCellInfoNeeded<K, IC> }) => {
    cellIsTabbable: boolean;
    getCurrentColumn(): number | null;
    useGridNavigationCellProps: <P extends h.JSX.HTMLAttributes<C>>(props: P) => h.JSX.HTMLAttributes<C>;
}

export type UseGridNavigationRowParameters<KR extends string, KC extends string, IR extends UseGridNavigationRowInfoBase<KR>, IC extends UseGridNavigationRowInfoBase<KC>> = { info: UseGridNavigationRowInfoNeeded<KR, IR> } & Omit<UseListNavigationParameters<KC, IC>, "noTypeahead" | "navigationDirection">;
export type UseGridNavigationRow<R extends HTMLElement, C extends HTMLElement | SVGElement, KR extends string = string, KC extends string = string, IR extends UseGridNavigationRowInfoBase<KR> = UseGridNavigationRowInfoBase<KR>, IC extends UseGridNavigationRowInfoBase<KC> = UseGridNavigationRowInfoBase<KC>> = (a: UseGridNavigationRowParameters<KR, KC, IR, IC>) => {
    rowIsTabbable: boolean;
    cells: ManagedChildren<IC>;
    getCurrentColumn(): number | null;
    useGridNavigationCell: UseGridNavigationCell<C, KC, IC>;
    useGridNavigationRowProps: <P extends h.JSX.HTMLAttributes<R>>(props: P) => h.JSX.HTMLAttributes<R>;
}

export function useGridNavigation<ParentOrRowElement extends HTMLElement, RowElement extends HTMLElement, CellElement extends HTMLElement, KR extends string = string, KC extends string = string, IR extends UseGridNavigationRowInfoBase<KR> = UseGridNavigationRowInfoBase<KR>, IC extends UseGridNavigationRowInfoBase<KC> = UseGridNavigationRowInfoBase<KC>>({ collator, disableArrowKeys, disableHomeEndKeys, noTypeahead, onTabbableIndexChange, typeaheadTimeout, indexMangler, indexDemangler, initialRow, initialColumn, onAfterChildLayoutEffect, onChildrenMountChange: onRowMountChangeUser, onTabbableRender, onTabbedInTo, onTabbedOutOf }: UseGridNavigationParameters<KR, IR>) {
    const [currentColumn, setCurrentColumn, getCurrentColumn] = useState<number | null>(initialColumn ?? 0);
    initialRow ??= 0;
    initialColumn ??= 0;

    const {
        children: rows,
        currentTypeahead: currentRowTypeahead,
        invalidTypeahead: invalidRowTypeahead,
        useListNavigationChild: useGridNavigationRow2,
        useListNavigationProps: useGridNavigationProps,
        getTabbableIndex: getTabbableRow
    } = useListNavigation<ParentOrRowElement, RowElement, KR, IR>({
        initialIndex: initialRow,
        collator,
        disableArrowKeys,
        disableHomeEndKeys,
        indexDemangler,
        indexMangler,
        navigationDirection: "block",
        noTypeahead,
        onTabbableIndexChange,
        typeaheadTimeout,
        onAfterChildLayoutEffect,
        onChildrenMountChange: onRowMountChangeUser,
        onTabbableRender,
        onTabbedInTo,
        onTabbedOutOf
    });

    const useGridNavigationRow = useCallback<UseGridNavigationRow<RowElement, CellElement, KR, KC, IR, IC>>(({ onChildrenMountChange, info: { flags, index, text, blurSelf: bs, focusSelf: fs, hidden, ...restInfo }, initialIndex, onAfterChildLayoutEffect, collator, disableArrowKeys, disableHomeEndKeys, indexDemangler, indexMangler, onTabbableIndexChange, onTabbableRender, onTabbedInTo, onTabbedOutOf, typeaheadTimeout }) => {
        const focusSelf = useCallback(() => {
            if (fs) {
                fs();
            }
            else {
                const c1 = getCurrentColumn2();
                const c2 = getCurrentColumn();
                console.assert(c1 == c1);
                columns.getAt(c2 ?? 0)?.focusSelf?.();
            }
        }, []);
        const blurSelf = useCallback(() => { bs?.() }, []);
        const { tabbable: rowIsTabbable, useListNavigationChildProps } = useGridNavigationRow2({ info: { flags, index, text, blurSelf, focusSelf, hidden, ...restInfo } as IR });
        useEffect(() => {
            if (!rowIsTabbable)
                setTabbableIndex(null, false);
        }, [rowIsTabbable])

        const {
            children: columns,
            currentTypeahead: _currentColumnTypeahead,
            invalidTypeahead: _invalidColumnTypeahead,
            useListNavigationChild: useGridNavigationColumn2,
            useListNavigationProps: useGridNavigationColumnProps,
            getTabbableIndex: getCurrentColumn2,
            setTabbableIndex,
        } = useListNavigation<CellElement, CellElement, KC, IC>({
            initialIndex,
            collator,
            disableArrowKeys,
            disableHomeEndKeys,
            indexDemangler,
            indexMangler,
            navigationDirection: "inline",
            noTypeahead: true,
            onTabbableIndexChange: useStableCallback<NonNullable<typeof onTabbableIndexChange>>((i) => { if (i != null) setCurrentColumn(i); onTabbableIndexChange?.(i); }),
            typeaheadTimeout,
            onAfterChildLayoutEffect,
            onChildrenMountChange,
            onTabbableRender,
            onTabbedInTo,
            onTabbedOutOf
        });

        const useGridNavigationCell = useCallback<UseGridNavigationCell<CellElement, KC, IC>>(({ info: { blurSelf: bs, focusSelf: fs, flags, index, text, hidden, ...restInfo } }) => {
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
            const { tabbable: cellIsTabbable, useListNavigationChildProps, getElement } = useGridNavigationColumn2({ info: { flags, index, text, blurSelf, focusSelf, hidden, ...restInfo } as IC });

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
        rows,
        currentRowTypeahead,
        invalidRowTypeahead,
        getTabbableRow
    }
}
