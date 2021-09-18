import { Context, h, Ref } from "preact";
import { StateUpdater, useCallback, useRef } from "preact/hooks";
import { useRefElement, UseRefElementPropsReturnType } from "./use-ref-element";
import { useLayoutEffect } from "./use-layout-effect";
import { MergedProps, useMergedProps } from "./use-merged-props"
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";
import { useLogicalDirection } from "./use-logical-direction";
import { RovingTabIndexChildInfo, useRovingTabIndex, UseRovingTabIndexChildPropsReturnType, UseRovingTabIndexSiblingProps } from "./use-roving-tabindex";
import { useLinearNavigation, useTypeaheadNavigation, UseTypeaheadNavigationParameters } from "./use-keyboard-navigation";
import { ManagedChildInfo, useChildFlag, useChildManager, UseChildManagerReturnType, UseManagedChildReturnType } from "./use-child-manager";
import { useListNavigation, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildPropsReturnType } from "./use-list-navigation";
import { useStableGetter } from "./use-stable-getter";
import { useHasFocus, UseHasFocusPropsReturnType } from "./use-has-focus";
import { useEffect } from "./use-effect";

export interface UseGridNavigationRowInfo extends ManagedChildInfo<number> {
    setIsTabbableRow(tabbable: boolean, newIndex: number): void;
}

export type UseGridNavigationRowParameters<I extends UseGridNavigationRowInfo> = Omit<I, "setIsTabbableRow">;

export interface UseGridNavigationCellInfo extends UseListNavigationChildInfo { }
export type UseGridNavigationCellParameters<I extends UseGridNavigationCellInfo> = UseListNavigationChildParameters<I>;

export type UseGridNavigationRow<R extends Element, C extends Element, IR extends UseGridNavigationRowInfo, IC extends UseGridNavigationCellInfo> = ({ index, ...info }: UseGridNavigationRowParameters<IR>) => {
    useGridNavigationRowProps: <P extends h.JSX.HTMLAttributes<R>>(props: P) => UseRefElementPropsReturnType<R, UseRefElementPropsReturnType<R, MergedProps<R, {
        onKeyDown: (e: KeyboardEvent) => void;
    }, UseHasFocusPropsReturnType<R, P>>>>;
    useGridNavigationCell: UseGridNavigationCell<C, IC>;
    cellCount: number;
    tabbableCell: number | null;
    isTabbableRow: boolean;
}

export type UseGridNavigationCell<C extends Element, I extends UseGridNavigationCellInfo> = ({ index, text, ...info }: UseGridNavigationCellParameters<I>) => {
    tabbable: boolean;
    useGridNavigationCellProps: <P extends h.JSX.HTMLAttributes<C>>(props: P) => UseListNavigationChildPropsReturnType<C, P>;
}

export function useGridNavigation<R extends Element, C extends Element, IR extends UseGridNavigationRowInfo, IC extends UseGridNavigationCellInfo>({ focusOnChange: foc }: { focusOnChange: boolean }) {

    const getFocusCellOnRowChange = useStableGetter(foc);

    const [currentRow, setCurrentRow, getCurrentRow] = useState(0);
    const [lastKnownCellIndex, setLastKnownCellIndex, getLastKnownCellIndex] = useState(0);

    useEffect(([prev]) => { console.log(`currentRow: ${prev} -> ${currentRow}`) }, [currentRow]);

    const { childCount, managedChildren, indicesByElement, getMountIndex, mountedChildren, totalChildrenMounted, totalChildrenUnounted, useManagedChild } = useChildManager<UseGridNavigationRowInfo>();
    const { useLinearNavigationChild } = useLinearNavigation<R>({ managedChildren, getIndex: getCurrentRow, setIndex: setCurrentRow, navigationDirection: "block" })

    useChildFlag(currentRow, managedChildren.length, useCallback((index, tabbable) => managedChildren[index]?.setIsTabbableRow(tabbable, lastKnownCellIndex), [lastKnownCellIndex, managedChildren]));

    const useGridNavigationRow: UseGridNavigationRow<R, C, IR, IC> = useCallback(({ index, ...info }: UseGridNavigationRowParameters<IR>) => {

        const { useHasFocusProps, lastFocusedInner } = useHasFocus<R>();

        const [isTabbableRow, setIsTabbableRow] = useState(false);

        // Besides just being a list nav child, it's also a list nav parent
        // yaaaayyy

        const {
            useListNavigationChild: useListNavigationChild2,
            childCount: cellCount,
            indicesByElement: cellIndicesByElement,
            managedChildren: managedCells,
            navigateToIndex: setCellIndex,
            tabbableIndex: tabbableCell,
            focusCurrent
        } = useListNavigation<C, IC>({ focusOnChange: (isTabbableRow && getFocusCellOnRowChange()), keyNavigation: "inline", initialIndex: null });

        // Any time we become the currently tabbable row,
        // make sure the correct cell is selected and focused.
        // Any other time, make sure no cell is tabbable.
        useEffect(() => {
            if (isTabbableRow) {
                setCellIndex(getLastKnownCellIndex());
            }
            else {
                setCellIndex(null);
            }
        }, [isTabbableRow])

        // Any time we become the currently tabbable row,
        // request the component rerender and focus itself.
        useEffect(() => {
            if (isTabbableRow && getFocusCellOnRowChange()) {
                focusCurrent?.();
            }
        }, [focusCurrent, isTabbableRow])

        // Any time the current cell changes 
        // (probably because we interacted with it, thus focusing it, 
        // changing it from null if the row wasn't already focused)
        // make sure that we're the currently tabbable row if we weren't already.
        useLayoutEffect(() => {
            if (tabbableCell !== null) {
                setLastKnownCellIndex(tabbableCell);
                setIsTabbableRow(true);
                setCurrentRow(index);
            }
        }, [index, tabbableCell, setLastKnownCellIndex])


        const { useManagedChildProps } = useManagedChild<R>({
            index, setIsTabbableRow: useCallback((tabbable, newIndex) => {
                if (tabbable) {
                    setCellIndex(newIndex);
                }
                setIsTabbableRow(tabbable);
            }, []), ...info
        });
        const { useLinearNavigationChildProps } = useLinearNavigationChild()

        const useGridNavigationRowProps = useCallback(<P extends h.JSX.HTMLAttributes<R>>(props: P) => useManagedChildProps(useLinearNavigationChildProps(useHasFocusProps(props))), [useManagedChildProps]);




        const useGridNavigationCell: UseGridNavigationCell<C, IC> = useCallback(({ index, text, ...info }: UseGridNavigationCellParameters<IC>) => {
            const { tabbable, useListNavigationChildProps } = useListNavigationChild2({ text, index, ...info } as any);

            const useGridNavigationCellProps = useCallback(<P extends h.JSX.HTMLAttributes<C>>(props: P) => useListNavigationChildProps(props), [useListNavigationChildProps]);

            return { tabbable, useGridNavigationCellProps };
        }, [useListNavigationChild2]);

        return { useGridNavigationRowProps, useGridNavigationCell, cellCount, tabbableCell, isTabbableRow };

    }, [setLastKnownCellIndex, useLinearNavigationChild, useManagedChild]);

    return {
        useGridNavigationRow,
        rowCount: childCount,
        cellIndex: lastKnownCellIndex,
        rowIndex: currentRow

    }

}


