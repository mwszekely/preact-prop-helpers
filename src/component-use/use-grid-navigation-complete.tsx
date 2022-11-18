import { h } from "preact";
import { useCallback } from "preact/hooks";
import { UseGridNavigationRowReturnType } from "../component-detail/use-grid-navigation-partial";
import { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, useGridNavigationSingleSelectionCell, UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, useGridNavigationSingleSelectionRow, UseGridNavigationSingleSelectionRowReturnType } from "../component-detail/use-grid-navigation-single-selection";
import { useGridNavigationSingleSelectionSortable, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType } from "../component-detail/use-grid-navigation-single-selection-sortable";
import { useMergedProps } from "../dom-helpers/use-merged-props";
import { useRefElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusReturnTypeInfo } from "../observers/use-children-have-focus";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus";
import { ManagedChildren, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-child-manager";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { usePress, UsePressParameters, UsePressReturnType } from "./use-press";


export interface UseCompleteGridNavigationParameters<_ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>, "managedChildrenReturn" | "linearNavigationParameters" | "rearrangeableChildrenParameters"> {
    linearNavigationParameters: Omit<UseGridNavigationSingleSelectionParameters<RowElement, M>["linearNavigationParameters"], "getHighestIndex" | "indexMangler" | "indexDemangler">;
    rearrangeableChildrenParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">
}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> {
    asChildRowParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asChildRowParameters"], "managedChildrenReturn" | "singleSelectionContext" | "gridNavigationRowContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext"> & {
        context: CompleteGridNavigationContext<any, RowElement, RM>; //UseManagedChildParameters<RM>["context"];
        //managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
        completeGridNavigationRowParameters: Omit<RM, keyof GridSingleSelectChildRowInfo<CellElement>>;
    };
    asParentRowParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asParentRowParameters"], "managedChildrenReturn" | "linearNavigationParameters"> & {
        linearNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asParentRowParameters"]["linearNavigationParameters"], "getHighestIndex" | "pageNavigationSize">
    };
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, M extends GridSingleSelectChildCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionCellParameters<CellElement>, "typeaheadNavigationChildContext" | "rovingTabIndexChildContext" | "gridNavigationCellContext"> {
    pressParameters: UsePressParameters<CellElement>["pressParameters"];
    //managedChildContext: UseManagedChildParameters<M>["managedChildContext"];
    completeGridNavigationCellParameters: Omit<M, keyof GridSingleSelectChildCellInfo<CellElement>>;
    context: CompleteGridNavigationRowContext<any, CellElement, M>;
    //managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
}


export interface CompleteGridNavigationContext<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectChildRowInfo<ChildElement> = GridSingleSelectChildRowInfo<ChildElement>> extends UseManagedChildrenContext<M>,
    Pick<UseChildrenHaveFocusReturnTypeInfo, "childrenHaveFocusChildContext">,
    Pick<UseGridNavigationSingleSelectionReturnType<ParentElement, ChildElement>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationRowContext"> {

}


export interface CompleteGridNavigationRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectChildCellInfo<ChildElement> = GridSingleSelectChildCellInfo<ChildElement>> extends UseManagedChildrenContext<M>,
    Pick<UseGridNavigationRowReturnType<ParentElement, ChildElement>["asParentRowReturn"], "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationCellContext"> {
    completeGridNavigationContext: {
        onPressSync: UsePressParameters<ChildElement>["pressParameters"]["onPressSync"]
    }
}


export interface UseCompleteGridNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectChildRowInfo<ChildElement>>
    extends Omit<UseGridNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "typeaheadNavigationChildContext" | "singleSelectionContext" | "rovingTabIndexChildContext" | "gridNavigationRowContext" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: h.JSX.HTMLAttributes<ParentElement>;
    context: CompleteGridNavigationContext<ParentElement, ChildElement, M>;

    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeInfo["childrenHaveFocusReturn"];
    //rearrangeableChildrenParameters: Pick<UseRearrangeableChildrenParameters["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> {
    context: CompleteGridNavigationRowContext<RowElement, CellElement, CM>;
    props: h.JSX.HTMLAttributes<RowElement>;
    asParentRowReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["asParentRowReturn"];
    asChildRowReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["asChildRowReturn"];
    managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<RowElement>["hasCurrentFocusReturn"];
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>, "hasCurrentFocusParameters">,
    UsePressReturnType<CellElement>, UseRefElementReturnType<CellElement>, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: h.JSX.HTMLAttributes<CellElement>;

}


export function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement> = GridSingleSelectChildRowInfo<RowElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    sortableChildrenParameters,
    rearrangeableChildrenParameters
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, M>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, M> {

    const getChildren: () => ManagedChildren<M> = useCallback<() => ManagedChildren<M>>(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);

    //const getValid = useStableCallback<GetValid>((index): boolean => { return !(getChildren().getAt(index)?.hidden) });

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        rovingTabIndexChildContext,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        gridNavigationRowContext,
        ...gridNavigationSingleSelectionReturn
    } = useGridNavigationSingleSelectionSortable<ParentOrRowElement, RowElement, M>({
        gridNavigationParameters,
        linearNavigationParameters: { getHighestIndex: getHighestChildIndex, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters,
        singleSelectionParameters,
        typeaheadNavigationParameters,
        rearrangeableChildrenParameters,
        sortableChildrenParameters
    });

    const { linearNavigationReturn, typeaheadNavigationReturn } = gridNavigationSingleSelectionReturn;

    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<M>({ managedChildrenParameters });
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
        ...gridNavigationSingleSelectionReturn,
        childrenHaveFocusReturn,
        //rearrangeableChildrenParameters: { getHighestChildIndex: getHighestChildIndex, getValid },
    }

}

export function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement> = GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement> = GridSingleSelectChildCellInfo<CellElement>>({
    asChildRowParameters: {
        managedChildParameters,
        context: { childrenHaveFocusChildContext, gridNavigationRowContext, managedChildContext: mcc1, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext },
        completeGridNavigationRowParameters,
        singleSelectionChildParameters,
        typeaheadNavigationChildParameters,
        ...asChildRowParameters
    },
    asParentRowParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        ...asParentRowParameters
    }
}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {

    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);

    const r: UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> = useGridNavigationSingleSelectionRow<RowElement, CellElement, RM, CM>({
        asParentRowParameters: {
            ...asParentRowParameters,
            rovingTabIndexParameters,
            typeaheadNavigationParameters,
            linearNavigationParameters: { getHighestIndex: getHighestChildIndex, pageNavigationSize: 0, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
        },
        asChildRowParameters: {
            ...asChildRowParameters,
            gridNavigationRowContext,
            rovingTabIndexChildContext,
            singleSelectionContext,
            typeaheadNavigationChildContext,
            singleSelectionChildParameters,
            typeaheadNavigationChildParameters,
            managedChildParameters,
            managedChildrenReturn: { getChildren },
        }
    });

    const { asChildRowReturn, asParentRowReturn } = r;


    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters: r.asParentRowReturn.managedChildrenParameters });
    const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { getElement } = refElementReturn;

    const baseInfo: GridSingleSelectChildRowInfo<RowElement> = {
        getElement,
        setTabbable: r.asChildRowReturn.rovingTabIndexChildReturn.setTabbable,
        getTabbable: r.asChildRowReturn.rovingTabIndexChildReturn.getTabbable,
        tabbable: r.asChildRowReturn.rovingTabIndexChildReturn.tabbable,
        ...managedChildParameters,
        ...r.asChildRowReturn.managedChildParameters,
    }

    const { managedChildReturn } = useManagedChild<RM>({
        context: { managedChildContext: mcc1 },
        managedChildParameters: {
            ...baseInfo,
            ...completeGridNavigationRowParameters
        } as RM
    })


    const context = useStableObject<CompleteGridNavigationRowContext<RowElement, CellElement, CM>>({
        managedChildContext,
        rovingTabIndexChildContext: r.asParentRowReturn.rovingTabIndexChildContext,
        typeaheadNavigationChildContext: r.asParentRowReturn.typeaheadNavigationChildContext,
        completeGridNavigationContext: useStableObject({ onPressSync: r.asChildRowReturn.pressParameters.onPressSync as any }),
        gridNavigationCellContext: r.asParentRowReturn.gridNavigationCellContext,
    });
    const { hasCurrentFocusParameters } = useChildrenHaveFocusChild({ childrenHaveFocusChildContext });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ refElementReturn, hasCurrentFocusParameters: { ...hasCurrentFocusParameters, onCurrentFocusedChanged: null } });
    const props = useMergedProps(
        refElementReturn.propsStable,
        // TODO: Rows don't use tabIndex, but just excluding props here is...weird.
        //r.asChildRowReturn.rovingTabIndexChildReturn.propsUnstable,
        r.asChildRowReturn.singleSelectionChildReturn.propsUnstable,
        r.asParentRowReturn.linearNavigationReturn.propsStable,
        r.asParentRowReturn.typeaheadNavigationReturn.propsStable,
        hasCurrentFocusReturn.propsStable
    );
    return {
        context,
        props,
        asParentRowReturn,
        asChildRowReturn,

        managedChildReturn,
        hasCurrentFocusReturn

        //managedChildrenReturn,
        //...gridNavigationSingleSelectionReturn
    }
}

export function useCompleteGridNavigationCell<CellElement extends Element, M extends GridSingleSelectChildCellInfo<CellElement> = GridSingleSelectChildCellInfo<CellElement>>({
    gridNavigationCellParameters,
    managedChildParameters,
    typeaheadNavigationChildParameters,
    context: { completeGridNavigationContext, gridNavigationCellContext, managedChildContext, rovingTabIndexChildContext, typeaheadNavigationChildContext },
    //managedChildContext,
    completeGridNavigationCellParameters,
    pressParameters: { onPressSync, ...pressParameters },
}: UseCompleteGridNavigationCellParameters<CellElement, M>): UseCompleteGridNavigationCellReturnType<CellElement, M> {
    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn
    } = useGridNavigationSingleSelectionCell<CellElement>({
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



    const baseInfo: GridSingleSelectChildCellInfo<CellElement> = {
        focusSelf: pressParameters.focusSelf,
        getElement: refElementReturn.getElement,
        hidden: managedChildParameters.hidden,
        index: managedChildParameters.index,
        getTabbable: rovingTabIndexChildReturn.getTabbable,
        setTabbable: rovingTabIndexChildReturn.setTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable
    }

    const { managedChildReturn } = useManagedChild<M>({
        context: { managedChildContext },
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
