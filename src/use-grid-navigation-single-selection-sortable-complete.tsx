import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, useGridNavigationSingleSelectionSortable, useGridNavigationSingleSelectionSortableCell, UseGridNavigationSingleSelectionSortableCellParameters, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, useGridNavigationSingleSelectionSortableRow, UseGridNavigationSingleSelectionSortableRowParameters } from "./use-grid-navigation-single-selection-sortable";
import { GridChildRowInfo, useGridNavigationCell, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationRowReturnType } from "./use-grid-navigation";
import { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, useGridNavigationSingleSelection, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, useGridNavigationSingleSelectionRow, UseGridNavigationSingleSelectionRowParameters, UseGridNavigationSingleSelectionRowReturnType } from "./use-grid-navigation-single-selection";
//import { UseSingleSelectionChildParameters, UseSingleSelectionChildReturnTypeInfo, UseSingleSelectionParameters, UseSingleSelectionReturnTypeInfo } from "./use-single-selection";
import { GetIndex, GetValid, useSortableChildren, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "./use-sortable-children";
import { useCallback } from "preact/hooks";
import { ManagedChildren, useManagedChild, UseManagedChildParameters, useManagedChildren, UseManagedChildrenReturnType } from "./use-child-manager";
import { useMergedProps } from "./use-merged-props";
import { useStableObject } from "./use-stable-getter";
import { useChildrenHaveFocus, UseChildrenHaveFocusReturnTypeInfo } from "./use-children-have-focus";
import { h, VNode } from "preact";
import { usePress, UsePressParameters } from "./use-press";
import { useRefElement } from "./use-ref-element";
import { useHasCurrentFocus } from "./use-has-current-focus";
import { useStableCallback } from "./use-stable-callback";
import { PassiveStateUpdater, returnZero, usePassiveState } from "./use-passive-state";


export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectSortableChildRowInfo<RowElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>, "managedChildrenReturn" | "linearNavigationParameters" | "rearrangeableChildrenParameters"> {
    completeGridNavigationParameters: { onTabbableColumnChange: null | undefined | PassiveStateUpdater<number | null>; }
    linearNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>["linearNavigationParameters"], "getHighestIndex">;
    rearrangeableChildrenParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> {
    asChildRowParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asChildRowParameters"], "managedChildrenReturn"> & {
        managedChildContext: UseManagedChildParameters<RM>["managedChildContext"];
        completeGridNavigationRowParameters: Omit<RM, keyof GridSingleSelectSortableChildRowInfo<CellElement>>;
    };
    asParentRowParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asParentRowParameters"], "managedChildrenReturn" | "linearNavigationParameters"> & {
        linearNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asParentRowParameters"]["linearNavigationParameters"], "getHighestIndex">
    };
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, M extends GridSingleSelectSortableChildCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableCellParameters<CellElement>, never> {
    pressParameters: UsePressParameters<CellElement, never>["pressParameters"];
    managedChildContext: UseManagedChildParameters<M>["managedChildContext"];
    completeGridNavigationCellParameters: Omit<M, keyof GridSingleSelectSortableChildCellInfo<CellElement>>;
    completeGridNavigationContext: CompleteGridNavigationRowContext<any, CellElement, M>["completeGridNavigationContext"];
}


export type CompleteGridNavigationContext<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectSortableChildRowInfo<ChildElement> = GridSingleSelectSortableChildRowInfo<ChildElement>> =
    Pick<UseManagedChildrenReturnType<M>, "managedChildContext"> &
    Pick<UseChildrenHaveFocusReturnTypeInfo, "childrenHaveFocusChildContext"> &
    Pick<UseGridNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationRowContext">;


export type CompleteGridNavigationRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectSortableChildCellInfo<ChildElement> = GridSingleSelectSortableChildCellInfo<ChildElement>> =
    Pick<UseManagedChildrenReturnType<M>, "managedChildContext"> &
    Pick<UseGridNavigationRowReturnType<ParentElement, ChildElement>["asParentRowReturn"], "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationCellContext"> & {
        completeGridNavigationContext: {
            onPressSync: UsePressParameters<ChildElement, never>["pressParameters"]["onPressSync"]
        }
    };


export interface UseCompleteGridNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectSortableChildRowInfo<ChildElement>>
    extends Omit<UseGridNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "typeaheadNavigationChildContext" | "singleSelectionContext" | "rovingTabIndexChildContext" | "gridNavigationRowContext" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: h.JSX.HTMLAttributes<ParentElement>;
    context: CompleteGridNavigationContext<ParentElement, ChildElement, M>;

    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeInfo["childrenHaveFocusReturn"];
}


export function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectSortableChildRowInfo<RowElement> = GridSingleSelectSortableChildRowInfo<RowElement>>({
    completeGridNavigationParameters: { onTabbableColumnChange },
    gridNavigationParameters,
    linearNavigationParameters,
    rearrangeableChildrenParameters: { getIndex, ...rearrangeableChildrenParameters },
    rovingTabIndexParameters,
    singleSelectionParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, M>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, M> {

    const getChildren: () => ManagedChildren<M> = useCallback<() => ManagedChildren<M>>(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);

    const getValid = useStableCallback<GetValid>((index): boolean => { return !(getChildren().getAt(index)?.hidden) });
    const [getCurrentTabbableColumn, setCurrentTabbableColumn] = usePassiveState<number | null>(onTabbableColumnChange, returnZero);

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        rovingTabIndexChildContext,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        gridNavigationRowContext,
        ...gridNavigationSingleSelectionSortableReturn
    } = useGridNavigationSingleSelectionSortable<ParentOrRowElement, RowElement, M>({
        gridNavigationParameters,
        linearNavigationParameters: { getHighestIndex: getHighestChildIndex, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rearrangeableChildrenParameters: { getHighestChildIndex: getHighestChildIndex, getValid, getIndex, ...rearrangeableChildrenParameters },
        rovingTabIndexParameters,
        singleSelectionParameters,
        sortableChildrenParameters,
        typeaheadNavigationParameters
    });

    const { linearNavigationReturn, typeaheadNavigationReturn, rovingTabIndexReturn } = gridNavigationSingleSelectionSortableReturn;

    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { managedChildContext, managedChildrenReturn } = useManagedChildren<M>({ managedChildrenParameters });
    const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useStableObject<CompleteGridNavigationContext<ParentOrRowElement, RowElement, M>>({
        singleSelectionContext,
        managedChildContext,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        childrenHaveFocusChildContext,
        gridNavigationRowContext,
    });

    return {
        context,
        props,

        managedChildrenReturn,
        ...gridNavigationSingleSelectionSortableReturn,
        childrenHaveFocusReturn
    }

}

export function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement> = GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement> = GridSingleSelectSortableChildCellInfo<CellElement>>({
    asChildRowParameters: {
        gridNavigationRowContext,
        managedChildParameters,
        rovingTabIndexChildContext,
        singleSelectionContext,
        singleSelectionChildParameters,
        typeaheadNavigationChildContext,
        typeaheadNavigationChildParameters,
        managedChildContext: mcc1,
        completeGridNavigationRowParameters
    },
    asParentRowParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,

    }
}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>) {

    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);

    const r: UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> = useGridNavigationSingleSelectionSortableRow<RowElement, CellElement, RM, CM>({
        asParentRowParameters: {
            linearNavigationParameters: { getHighestIndex: getHighestChildIndex, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
            rovingTabIndexParameters,
            typeaheadNavigationParameters
        },
        asChildRowParameters: {
            gridNavigationRowContext,
            managedChildParameters,
            managedChildrenReturn: { getChildren },
            rovingTabIndexChildContext,
            singleSelectionContext,
            singleSelectionChildParameters,
            typeaheadNavigationChildContext,
            typeaheadNavigationChildParameters
        }
    });

    const {
        asParentRowReturn: {
            managedChildrenParameters,
            rovingTabIndexChildContext: c1,
            typeaheadNavigationChildContext: c3,
            ...gridNavigationSingleSelectionSortableReturn
        },
        asChildRowReturn: {
            pressParameters: {
                onPressSync
            }
        }
    } = r;
    const { asChildRowReturn, asParentRowReturn } = r;


    const { managedChildContext: mcc2, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters });
    const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { getElement } = refElementReturn;

    const baseInfo: GridSingleSelectSortableChildRowInfo<RowElement> = {
        getElement,
        setTabbable: r.asChildRowReturn.rovingTabIndexChildReturn.setTabbable,
        getTabbable: r.asChildRowReturn.rovingTabIndexChildReturn.getTabbable,
        tabbable: r.asChildRowReturn.rovingTabIndexChildReturn.tabbable,
        ...managedChildParameters,
        ...r.asChildRowReturn.managedChildParameters,
    }

    useManagedChild<RM>({
        managedChildContext: mcc1,
        managedChildParameters: {
            ...baseInfo,
            ...completeGridNavigationRowParameters
        } as RM
    })

    const props = useMergedProps(
        refElementReturn.propsStable,
        // TODO: Rows don't use tabIndex, but just excluding props here is...weird.
        //r.asChildRowReturn.rovingTabIndexChildReturn.propsUnstable,
        r.asChildRowReturn.singleSelectionChildReturn.propsUnstable,
        r.asParentRowReturn.linearNavigationReturn.propsStable,
        r.asParentRowReturn.typeaheadNavigationReturn.propsStable,
    );
    const context = useStableObject<CompleteGridNavigationRowContext<RowElement, CellElement, CM>>({
        managedChildContext: mcc2,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        completeGridNavigationContext: useStableObject({ onPressSync: onPressSync as any }),
        gridNavigationCellContext: r.asParentRowReturn.gridNavigationCellContext,/* useStableObject({
            gridNavigationCellParameters: useStableObject({

                getRowIndex: getIndex,
                getCurrentTabbableColumn: gridNavigationRowContext.gridNavigationRowParameters.getCurrentTabbableColumn,
                setCurrentTabbableColumn: gridNavigationRowContext.gridNavigationRowParameters.setCurrentTabbableColumn,
                setTabbableCell: asParentRowReturn.rovingTabIndexReturn.setTabbableIndex,
                setTabbableRow: gridNavigationRowContext.gridNavigationRowParameters.setTabbableRow
                // setTabbableRow: gridNavigationRowContext.gridNavigationRowParameters.setTabbableRow
            })
        })*/
    });
    return {
        context,
        props,
        asParentRowReturn,
        asChildRowReturn

        //managedChildrenReturn,
        //...gridNavigationSingleSelectionSortableReturn
    }
}

export function useCompleteGridNavigationCell<CellElement extends Element, M extends GridSingleSelectSortableChildCellInfo<CellElement> = GridSingleSelectSortableChildCellInfo<CellElement>>({
    gridNavigationCellContext,
    gridNavigationCellParameters,
    managedChildParameters,
    rovingTabIndexChildContext,
    typeaheadNavigationChildContext,
    typeaheadNavigationChildParameters,
    completeGridNavigationContext,
    managedChildContext,
    completeGridNavigationCellParameters,
    pressParameters: { onPressSync, ...pressParameters },
}: UseCompleteGridNavigationCellParameters<CellElement, M>) {
    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn
    } = useGridNavigationSingleSelectionSortableCell<CellElement>({
        gridNavigationCellContext,
        gridNavigationCellParameters,
        managedChildParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        typeaheadNavigationChildParameters
    });

    const { refElementReturn } = useRefElement<CellElement>({ refElementParameters: {} });
    const { hasCurrentFocusReturn } = useHasCurrentFocus<CellElement>({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, ...hasCurrentFocusParameters }, refElementReturn });



    const { pressReturn } = usePress<CellElement>({
        pressParameters: {
            onPressSync: useStableCallback<NonNullable<typeof onPressSync>>(e => {
                onPressSync?.(e);
                completeGridNavigationContext.onPressSync?.(e);
            }),
            ...pressParameters
        },
        refElementReturn
    });



    const baseInfo: GridSingleSelectSortableChildCellInfo<CellElement> = {
        focusSelf: pressParameters.focusSelf,
        getElement: refElementReturn.getElement,
        hidden: managedChildParameters.hidden,
        index: managedChildParameters.index,
        getTabbable: rovingTabIndexChildReturn.getTabbable,
        setTabbable: rovingTabIndexChildReturn.setTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable
    }

    useManagedChild<M>({
        managedChildContext,
        managedChildParameters: {
            ...baseInfo,
            ...completeGridNavigationCellParameters
        } as M
    })

    const props = useMergedProps(
        refElementReturn.propsStable,
        pressReturn.propsStable,
        rovingTabIndexChildReturn.propsUnstable,
        hasCurrentFocusReturn.propsStable
    );

    return {
        props,
        pressReturn,
        refElementReturn,
        hasCurrentFocusReturn,
        rovingTabIndexChildReturn
    }
}
