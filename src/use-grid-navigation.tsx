import { Context, h, Ref } from "preact";
import { StateUpdater, useCallback, useRef } from "preact/hooks";
import { useRefElement, UseRefElementPropsReturnType } from "./use-ref-element";
import { useLayoutEffect } from "./use-layout-effect";
import { MergedProps, useMergedProps } from "./use-merged-props"
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";
import { useLogicalDirection } from "./use-logical-direction";
import { RovingTabIndexChildInfo, useRovingTabIndex, UseRovingTabIndexChildParameters, UseRovingTabIndexChildPropsReturnType, UseRovingTabIndexSiblingProps } from "./use-roving-tabindex";
import { useLinearNavigation, useTypeaheadNavigation, UseTypeaheadNavigationParameters } from "./use-keyboard-navigation";
import { ManagedChildInfo, useChildFlag, useChildManager, UseChildManagerReturnType, UseManagedChildReturnType } from "./use-child-manager";
import { useStableGetter } from "./use-stable-getter";
import { useHasFocus, UseHasFocusPropsReturnType } from "./use-has-focus";
import { useEffect } from "./use-effect";
import { useForceUpdate } from "./use-force-update";
import { useStableCallback } from "./use-stable-callback";

export interface UseGridNavigationRowInfo extends RovingTabIndexChildInfo {
    setIsTabbableRow(tabbable: boolean): void;

    /**
     * If a grid row is hidden, it will be skipped over
     * during keyboard navigation, and the HTML `hidden`
     * attribute will be applied.
     */
    hidden?: boolean;
}

export type UseGridNavigationRowParameters<I extends UseGridNavigationRowInfo> = Omit<UseRovingTabIndexChildParameters<I>, "setIsTabbableRow">; //I;

export interface UseGridNavigationCellInfo extends RovingTabIndexChildInfo {  }
export type UseGridNavigationCellParameters<I extends UseGridNavigationCellInfo> = Omit<UseRovingTabIndexChildParameters<I>, "setIsTabbableRow">;

export type UseGridNavigationRow<R extends Element, C extends Element, IR extends UseGridNavigationRowInfo, IC extends UseGridNavigationCellInfo> = ({ index, ...info }: UseGridNavigationRowParameters<IR>) => {
    useGridNavigationRowProps: <P extends h.JSX.HTMLAttributes<R>>(props: P) => UseRefElementPropsReturnType<R, UseRefElementPropsReturnType<R, MergedProps<R, {
        onKeyDown: (e: KeyboardEvent) => void;
    }, UseHasFocusPropsReturnType<R, P>>>>;
    useGridNavigationCell: UseGridNavigationCell<C, IC>;
    cellCount: number;
    isTabbableRow: boolean;
    currentColumn: number | null;
    managedCells: IC[];
}

export type UseGridNavigationCell<C extends Element, I extends UseGridNavigationCellInfo> = (params: UseGridNavigationCellParameters<I>) => {
    useGridNavigationCellProps: <P extends h.JSX.HTMLAttributes<C>>(props: P) => h.JSX.HTMLAttributes<C>;
}

function identity<T>(t: T) { return t; }

function tryNavigateToIndex<I extends UseGridNavigationRowInfo | UseGridNavigationCellInfo>(managedCells: (I | null | undefined)[], initial: number, target: number, searchDirection: 1 | -1, indexMangler: (n: number) => number, indexDemangler: (n: number) => number) {
    function helper() {
        if (searchDirection === -1) {
            while (target >= 0 && (managedCells[target] == null || !!(managedCells[target] as UseGridNavigationRowInfo | null)?.hidden))
                target = indexMangler(indexDemangler(target) - 1);

            return target < 0 ? initial : target;
        }
        else if (searchDirection === 1) {
            while (target < managedCells.length && managedCells[target] == null || !!(managedCells[target] as UseGridNavigationRowInfo | null)?.hidden)
                target = indexMangler(indexDemangler(target) + 1);

            return target >= managedCells.length ? initial : target;
        }
        else {
            return initial;
        }
    }
    return (helper())
}

export interface UseGridNavigationParameters {
    shouldFocusOnChange(): boolean,
    indexMangler?(unmangled: number): number,
    indexDemangler?(mangled: number): number
}

export function useGridNavigation<R extends Element, C extends Element, IR extends UseGridNavigationRowInfo, IC extends UseGridNavigationCellInfo>({ shouldFocusOnChange, indexMangler, indexDemangler }: UseGridNavigationParameters) {

    indexMangler ??= identity;
    indexDemangler ??= identity;

    const getFocusCellOnRowChange = useStableCallback(shouldFocusOnChange);

    // Keep track of our currently tabbable row and column.
    // These are mangled, and so relative to the DOM order, not component order.
    // Any operations done on these numbers need to be demangled first,
    // otherwise they'll be incorrect.
    const [currentRow, setCurrentRow2, getCurrentRow] = useState<number | null>(0);
    const [currentColumn, setCurrentColumn2, getCurrentColumn] = useState(0);

    // Functions used for navigating to different rows.
    // Each row has its own useRovingTabIndex -- if it's not the 
    // current row, then all of its children are non-tabbable.
    // Otherwise, it is tabbable, with the tabbable cell being currentColumn.
    // This happens automatically when these functions are called.
    const navigateToFirstRow = useCallback(() => { setCurrentRow2(c => tryNavigateToIndex(managedRows, c ?? 0, 0, 1, indexMangler!, indexDemangler!)); }, [indexMangler, indexDemangler])
    const navigateToLastRow = useCallback(() => { setCurrentRow2(c => tryNavigateToIndex(managedRows, c ?? 0, managedRows.length - 1, -1, indexMangler!, indexDemangler!)); }, [indexMangler, indexDemangler])
    const navigateToPrevRow = useCallback(() => { setCurrentRow2(c => { return tryNavigateToIndex(managedRows, c ?? 0, indexMangler!(Math.max(0, indexDemangler!(c ?? 0) - 1)), -1, indexMangler!, indexDemangler!); }); }, [indexMangler, indexDemangler])
    const navigateToNextRow = useCallback(() => { setCurrentRow2(c => { return tryNavigateToIndex(managedRows, c ?? 0, indexMangler!(Math.min((managedRows.length - 1), indexDemangler!(c ?? 0) + 1)), 1, indexMangler!, indexDemangler!); }); }, [indexMangler, indexDemangler]);

    // Track child rows and manage keyboard navigation among them.
    const { childCount, managedChildren: managedRows, indicesByElement: rowIndicesByElement, getMountIndex: getRowMountIndex, mountedChildren: mountedRows, totalChildrenMounted: totalRowsMounted, totalChildrenUnounted: totalRowsUnmounted, useManagedChild: useManagedRow } = useChildManager<IR>();
    const { useLinearNavigationChild: useLinearNavigationChildRow } = useLinearNavigation<R>({
        managedChildren: managedRows,
        index: indexMangler(getCurrentRow() ?? 0),
        navigateToFirst: navigateToFirstRow,
        navigateToLast: navigateToLastRow,
        navigateToNext: navigateToNextRow,
        navigateToPrev: navigateToPrevRow,
        navigationDirection: "block"
    })

    // Actually handle notifying the relevant rows when they
    // change from untabbable to tabbable or vice-versa.
    useChildFlag(currentRow, managedRows.length, useCallback((index, tabbable) => { managedRows[index]?.setIsTabbableRow(tabbable) }, [managedRows]), useEffect);

    /**
     * Optional, but provides typeahead for each column in the table.
     */
    const useGridNavigationColumn = useCallback(({ }: {}) => {
        const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild } = useTypeaheadNavigation({ getIndex: getCurrentRow, setIndex: setCurrentRow2 });

        const useGridNavigationColumnChild = useCallback(({ index: rowIndex, text, hidden }: { index: number, text: string, hidden?: boolean }) => {
            useTypeaheadNavigationChild({ index: rowIndex, text: hidden? null : text });
        }, [useTypeaheadNavigationChild]);

        return { useGridNavigationColumnChild, currentTypeahead, invalidTypeahead };
    }, [])

    // Last thing before we return -- here's the hook for individual rows and their cells.
    const useGridNavigationRow: UseGridNavigationRow<R, C, IR, IC> = useCallback(({ index: rowIndex, hidden, ...info }: UseGridNavigationRowParameters<IR>) => {

        // When we change the current column, we send that information
        // to the parent via setState, but that doesn't do anything
        // for us.  The parent doesn't ever manage rows' cells for them.
        // 
        // So to get us to also update alongside the parent,
        // we just use forceUpdate.
        // We could also keep a copy of, like, "what this row thinks
        // the current column is" that *should* always be kept in-
        // sync with "getCurrentColumn()" as a state variable,
        // but it *just* being used for that is arguably *more* confusing.
        //
        // Basically, information regarding the currently selected column
        // "belongs" to *both* this row and the parent, conceptually,
        // but for cleanliness' sake, just one of them gets it,
        // and the other is manually updated whenever it changes.
        const forceUpdate = useForceUpdate();


        // "Shortcut" for any given row to know that it should or should not
        // consider one of its cells tabbable.  Also used to determine
        // if a change to the current selected cell should also
        // trigger focusing that cell.
        const [isTabbableRow, setIsTabbableRow] = useState(false);

        // If we're not the tabbable row, then for the purposes of tabIndex
        // calculations, we don't have a tabbable child cell.
        let currentColumn = isTabbableRow ? getCurrentColumn() : null;

        // Track child cells and manage keyboard navigation among them.
        const { managedChildren: managedCells, useRovingTabIndexChild: useRovingTabIndexCell, childCount: cellCount } = useRovingTabIndex<IC>({
            shouldFocusOnChange: getFocusCellOnRowChange,
            tabbableIndex: currentColumn
        });

        // More navigation stuff
        const navigateToFirstColumn = useCallback(() => {
            setCurrentColumn2(tryNavigateToIndex(managedCells, 0, 0, 1, identity, identity));
            forceUpdate();
        }, [])
        const navigateToLastColumn = useCallback(() => { setCurrentColumn2(tryNavigateToIndex(managedCells, managedCells.length, managedCells.length, -1, identity, identity)); forceUpdate(); }, [])
        const navigateToPrevColumn = useCallback(() => {
            setCurrentColumn2(c => {
                return tryNavigateToIndex(managedCells, c, c - 1, -1, identity, identity)
            })
            forceUpdate();
        }, [])
        const navigateToNextColumn = useCallback(() => {
            setCurrentColumn2(c => {
                return tryNavigateToIndex(managedCells, c, c + 1, 1, identity, identity);
            })
            forceUpdate();
        }, [])

        const { useLinearNavigationChild: useLinearNavigationChildCell } = useLinearNavigation<C>({
            managedChildren: managedCells,
            navigationDirection: "inline",
            index: currentColumn ?? 0,
            disableHomeEndKeys: true,
            navigateToFirst: navigateToFirstColumn,
            navigateToLast: navigateToLastColumn,
            navigateToPrev: navigateToPrevColumn,
            navigateToNext: navigateToNextColumn
        });

        // Notify the relevant child cells when they should/should not be tabbable
        useChildFlag(currentColumn, managedCells.length, useCallback((cellIndex, cellIsTabbable) => {
            if (cellIndex != null)
                managedCells[cellIndex]?.setTabbable(cellIsTabbable);
        }, [managedCells]), useEffect);

        // Any time we become the currently tabbable row,
        // make sure that we're in a valid cell, and shift left/right if not to find one.
        // TODO: Seems kinda janky? Is there no cleaner way to accomplish this,
        // especially since it's similar to other code?
        useEffect(() => {
            if (isTabbableRow) {
                let cellIndex = getCurrentColumn();
                while (cellIndex >= 0 && managedCells[cellIndex] == null) {
                    --cellIndex;
                }
                if (cellIndex < 0) {
                    cellIndex = getCurrentColumn();
                    while (cellIndex < managedCells.length && managedCells[cellIndex] == null) {
                        ++cellIndex;
                    }
                    if (cellIndex == managedCells.length)
                        cellIndex = getCurrentColumn();
                }
                if (cellIndex != getCurrentColumn())
                    setCurrentColumn2(cellIndex);
            }
        }, [isTabbableRow]);

        const { useManagedChildProps: useManagedRowProps } = useManagedRow<R>({
            index: rowIndex,
            setIsTabbableRow,
            hidden,
            ...info
        } as any as IR);
        const { useLinearNavigationChildProps: useLinearNavigationChildRowProps } = useLinearNavigationChildRow()

        const useGridNavigationRowProps = useCallback(<P extends h.JSX.HTMLAttributes<R>>(props: P) => useManagedRowProps(useLinearNavigationChildRowProps(useMergedProps<R>()({ hidden: !!hidden, "data-index": rowIndex }, props))), [useManagedRowProps, !!hidden]);



        const getRowIndex = useStableGetter(rowIndex);
        const useGridNavigationCell: UseGridNavigationCell<C, IC> = useCallback((info: UseGridNavigationCellParameters<IC>) => {
            const [tabbable, setTabbable] = useState(false);
            const { useRovingTabIndexChildProps } = useRovingTabIndexCell<C>({ ...info, setTabbable } as IC);
            const { useLinearNavigationChildProps: useLinearNavigationChildCellProps } = useLinearNavigationChildCell();

            // Any time we interact with this cell, set it to be
            // our "currently tabbable" cell, regardless of
            // any previously selected row/column.
            //
            // TODO: Mouseup/down might be preferable,
            // but it doesn't fire on label elements here?????
            const onClick = useCallback(() => {
                setCurrentRow2(getRowIndex());
                setCurrentColumn2(info.index);
            }, [info.index])

            const useGridNavigationCellProps = useCallback(<P extends h.JSX.HTMLAttributes<C>>(props: P) => useRovingTabIndexChildProps(useLinearNavigationChildCellProps(useMergedProps<C>()({ onClick }, props))), [useLinearNavigationChildCellProps]);

            return { tabbable, useGridNavigationCellProps };
        }, [useLinearNavigationChildCell]);

        return {
            currentColumn,
            useGridNavigationRowProps,
            useGridNavigationCell,
            cellCount,
            isTabbableRow,
            managedCells: managedCells as IC[]
        };

    }, [useLinearNavigationChildRow, useManagedRow, indexDemangler, indexMangler]);

    return {
        useGridNavigationRow,
        useGridNavigationColumn,
        rowCount: childCount,
        cellIndex: currentColumn,
        rowIndex: currentRow,
        managedRows

    }

}


