import { UseGridNavigationRowReturnType } from "../component-detail/use-grid-navigation-partial";
import { UseGridNavigationSingleSelectionRowReturnType } from "../component-detail/use-grid-navigation-single-selection";
import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, useGridNavigationSingleSelectionSortable, useGridNavigationSingleSelectionSortableCell, UseGridNavigationSingleSelectionSortableCellParameters, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, useGridNavigationSingleSelectionSortableRow, UseGridNavigationSingleSelectionSortableRowParameters } from "../component-detail/use-grid-navigation-single-selection-sortable";
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { ManagedChildren, useManagedChild, UseManagedChildParameters, useManagedChildren, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-child-manager";
import { useChildrenHaveFocus, UseChildrenHaveFocusReturnTypeInfo } from "../observers/use-children-have-focus";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus";
import { useMergedProps } from "../dom-helpers/use-merged-props";
import { useRefElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { GetValid } from "../component-detail/use-sortable-children";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { usePress, UsePressParameters, UsePressReturnType } from "./use-press";


export interface UseCompleteGridNavigationParameters<_ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectSortableChildRowInfo<RowElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>, "managedChildrenReturn" | "linearNavigationParameters" | "rearrangeableChildrenParameters"> {
    linearNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>["linearNavigationParameters"], "getHighestIndex">;
    rearrangeableChildrenParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> {
    asChildRowParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asChildRowParameters"], "managedChildrenReturn"> & {
        managedChildContext: UseManagedChildParameters<RM>["managedChildContext"];
        //managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
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
    //managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
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

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> {
    context: CompleteGridNavigationRowContext<RowElement, CellElement, CM>;
    props: h.JSX.HTMLAttributes<RowElement>;
    asParentRowReturn: UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement>["asParentRowReturn"];
    asChildRowReturn: UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement>["asChildRowReturn"];
    managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>, "hasCurrentFocusParameters">,
    UsePressReturnType<CellElement>, UseRefElementReturnType<CellElement>, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: h.JSX.HTMLAttributes<CellElement>;

}


export function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectSortableChildRowInfo<RowElement> = GridSingleSelectSortableChildRowInfo<RowElement>>({
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

    const { linearNavigationReturn, typeaheadNavigationReturn } = gridNavigationSingleSelectionSortableReturn;

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
        managedChildParameters,
        managedChildContext: mcc1,
        completeGridNavigationRowParameters,
        ...asChildRowParameters
    },
    asParentRowParameters: {
        linearNavigationParameters,
        ...asParentRowParameters
    }
}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {

    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);

    const r: UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> = useGridNavigationSingleSelectionSortableRow<RowElement, CellElement, RM, CM>({
        asParentRowParameters: {
            ...asParentRowParameters,
            linearNavigationParameters: { getHighestIndex: getHighestChildIndex, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
        },
        asChildRowParameters: {
            ...asChildRowParameters,
            managedChildParameters,
            managedChildrenReturn: { getChildren },
        }
    });

    const { asChildRowReturn, asParentRowReturn } = r;


    const { managedChildContext: mcc2, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters: r.asParentRowReturn.managedChildrenParameters });
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

    const { managedChildReturn } = useManagedChild<RM>({
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
        rovingTabIndexChildContext: r.asParentRowReturn.rovingTabIndexChildContext,
        typeaheadNavigationChildContext: r.asParentRowReturn.typeaheadNavigationChildContext,
        completeGridNavigationContext: useStableObject({ onPressSync: r.asChildRowReturn.pressParameters.onPressSync as any }),
        gridNavigationCellContext: r.asParentRowReturn.gridNavigationCellContext,
    });
    return {
        context,
        props,
        asParentRowReturn,
        asChildRowReturn,

        managedChildReturn

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
}: UseCompleteGridNavigationCellParameters<CellElement, M>): UseCompleteGridNavigationCellReturnType<CellElement, M> {
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

    const { managedChildReturn } = useManagedChild<M>({
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
        rovingTabIndexChildReturn,
        pressReturn,
        refElementReturn,
        hasCurrentFocusReturn,
        managedChildReturn
    }
}
