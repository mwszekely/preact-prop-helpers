import { h } from "preact";
import { useCallback } from "preact/hooks";
import { UseGridNavigationRowReturnType } from "../component-detail/use-grid-navigation-partial";
import { useGridNavigationSingleSelectionCell, UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, useGridNavigationSingleSelectionRow, UseGridNavigationSingleSelectionRowReturnType } from "../component-detail/use-grid-navigation-single-selection";
import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, useGridNavigationSingleSelectionSortable, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType } from "../component-detail/use-grid-navigation-single-selection-sortable";
import { usePaginatedChild, UsePaginatedChildContext, usePaginatedChildren, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturn } from "../component-detail/use-paginated-children";
import { UseSortableChildInfo } from "../component-detail/use-sortable-children";
import { useStaggeredChild, UseStaggeredChildContext, useStaggeredChildren, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturn } from "../component-detail/use-staggered-children";
import { useMergedProps } from "../dom-helpers/use-merged-props";
import { useRefElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus";
import { ManagedChildren, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children";
import { identity } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";


/*export interface UseCompleteGridNavigationChildInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement> {
    
}*/

export interface UseCompleteGridNavigationRowInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, UsePaginatedChildrenInfo<RowElement>, UseStaggeredChildrenInfo<RowElement> { }
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSingleSelectSortableChildCellInfo<CellElement> { }

export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters"> {
    linearNavigationParameters: Omit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["linearNavigationParameters"], "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">;
    typeaheadNavigationParameters: Omit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["typeaheadNavigationParameters"], "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">;
    rearrangeableChildrenParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>["rearrangeableChildrenParameters"], "onRearranged" | "getHighestChildIndex" | "isValid">;
    rovingTabIndexParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    paginatedChildrenParameters: Pick<UsePaginatedChildrenParameters<RowElement, M>, "paginatedChildrenParameters">["paginatedChildrenParameters"];
    staggeredChildrenParameters: Pick<UseStaggeredChildrenParameters<RowElement, M>, "staggeredChildrenParameters">["staggeredChildrenParameters"];
}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> {
    rowAsChildOfGridParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsChildOfGridParameters"], "textContentParameters" | "managedChildrenReturn" | "singleSelectionContext" | "gridNavigationRowContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "refElementReturn"> & {
        context: CompleteGridNavigationContext<any, RowElement, CellElement, RM, CM>; //UseManagedChildParameters<RM>["context"];
        //managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
        completeGridNavigationRowParameters: Omit<RM, keyof UseCompleteGridNavigationRowInfo<RowElement, CellElement>>;
        sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
        textContentParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsChildOfGridParameters"]["textContentParameters"], "hidden">;
    };
    rowAsParentOfCellsParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsParentOfCellsParameters"], "managedChildrenReturn" | "rovingTabIndexParameters" | "linearNavigationParameters" | "typeaheadNavigationParameters"> & {
        linearNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsParentOfCellsParameters"]["linearNavigationParameters"], "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">;
        typeaheadNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsParentOfCellsParameters"]["typeaheadNavigationParameters"], "isValid">;
        rovingTabIndexParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsParentOfCellsParameters"]["rovingTabIndexParameters"], "initiallyTabbedIndex" | "untabbable">;
    };
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, M extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionCellParameters<any, CellElement>, "textContentParameters" | "typeaheadNavigationChildContext" | "rovingTabIndexChildContext" | "gridNavigationCellContext" | "refElementReturn"> {
    //pressParameters: UsePressParameters<CellElement>["pressParameters"];
    //sortableChildParameters: { getSortValue: UseSortableChildInfo["getSortValue"] };
    //managedChildContext: UseManagedChildParameters<M>["managedChildContext"];
    textContentParameters: Omit<UseGridNavigationSingleSelectionCellParameters<any, CellElement>["textContentParameters"], "hidden">;
    completeGridNavigationCellParameters: Pick<M, "focusSelf"> & Omit<M, keyof UseCompleteGridNavigationCellInfo<CellElement>>;
    context: CompleteGridNavigationRowContext<any, CellElement, M>;
    //managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
}


export interface CompleteGridNavigationContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseManagedChildrenContext<RM>, UsePaginatedChildContext, UseStaggeredChildContext,
    Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusChildContext">,
    Pick<UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationRowContext"> {

}


export interface CompleteGridNavigationRowContext<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildrenContext<M>,
    Pick<UseGridNavigationRowReturnType<ParentElement, ChildElement>["rowAsParentOfCellsReturn"], "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationCellContext"> {
    //completeGridNavigationContext: {
        //onClick: () => void;
        // onPressSync: UsePressParameters<ChildElement>["pressParameters"]["onPressSync"]
    //}
}


export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>
    extends
    Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">,
    Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">,
    Omit<UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "typeaheadNavigationChildContext" | "singleSelectionContext" | "rovingTabIndexChildContext" | "gridNavigationRowContext" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: h.JSX.HTMLAttributes<ParentOrRowElement>;
    context: CompleteGridNavigationContext<ParentOrRowElement, RowElement, CellElement, RM, CM>;

    managedChildrenReturn: UseManagedChildrenReturnType<RM>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<RowElement>["childrenHaveFocusReturn"];
    /*completeGridNavigationReturn: {
        toJson(): object;
    }*/
    //rearrangeableChildrenParameters: Pick<UseRearrangeableChildrenParameters["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> {
    context: CompleteGridNavigationRowContext<RowElement, CellElement, CM>;
    props: h.JSX.HTMLAttributes<RowElement>;
    rowAsParentOfCellsReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["rowAsParentOfCellsReturn"] & {
        managedChildrenReturn: UseManagedChildrenReturnType<CM>["managedChildrenReturn"];
    };
    rowAsChildOfGridReturn: Omit<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["rowAsChildOfGridReturn"], "textContentReturn"> & {
        managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
        paginatedChildReturn: UsePaginatedChildReturn<RowElement>["paginatedChildReturn"];
        staggeredChildReturn: UseStaggeredChildReturn<RowElement>["staggeredChildReturn"];
        textContentReturn: Omit<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["rowAsChildOfGridReturn"]["textContentReturn"], "hidden">;
    };
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<RowElement>["hasCurrentFocusReturn"];
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>, "hasCurrentFocusParameters">,
    //UsePressReturnType<CellElement>, 
    UseRefElementReturnType<CellElement>, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: h.JSX.HTMLAttributes<CellElement>;

}


export function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    sortableChildrenParameters,
    rearrangeableChildrenParameters,
    paginatedChildrenParameters,
    staggeredChildrenParameters
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {

    const getChildren: () => ManagedChildren<RM> = useCallback<() => ManagedChildren<RM>>(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);

    const isValid = useStableCallback((index: number): boolean => { return !(getChildren().getAt(index)?.hidden) });

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        rovingTabIndexChildContext,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        gridNavigationRowContext,
        rearrangeableChildrenReturn,
        ...gridNavigationSingleSelectionReturn
    } = useGridNavigationSingleSelectionSortable<ParentOrRowElement, RowElement, CellElement, RM, CM>({
        gridNavigationParameters,
        linearNavigationParameters: { getHighestIndex: getHighestChildIndex, isValid, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { initiallyTabbedIndex: singleSelectionParameters.initiallySelectedIndex, ...rovingTabIndexParameters },
        singleSelectionParameters,
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); }),
            ...rearrangeableChildrenParameters
        },
        sortableChildrenParameters
    });

    const { linearNavigationReturn, typeaheadNavigationReturn } = gridNavigationSingleSelectionReturn;
    const { indexDemangler } = rearrangeableChildrenReturn;

    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus<RowElement>({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<RM>({ managedChildrenParameters: { onChildCountChange: useStableCallback(c => onChildCountChange(c)), ...managedChildrenParameters } });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildCountChange }, context: { paginatedChildContext } } = usePaginatedChildren<RowElement, RM>({ managedChildrenReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters })
    const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    /*const getDefaultPaginationVisible = useStableCallback((i: number) => {
        return (i >= (paginatedChildrenParameters.paginationMin ?? -Infinity)) && (i < (paginatedChildrenParameters.paginationMax ?? Infinity));
    });*/
    const context = useStableObject<CompleteGridNavigationContext<ParentOrRowElement, RowElement, CellElement, RM, CM>>({
        singleSelectionContext,
        managedChildContext,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        childrenHaveFocusChildContext,
        gridNavigationRowContext,
        paginatedChildContext,
        staggeredChildContext
    });

    return {
        context,
        props,

        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        ...gridNavigationSingleSelectionReturn,
        childrenHaveFocusReturn,
        paginatedChildrenReturn,
        /*completeGridNavigationReturn: {
            toJson: useCallback(() => {
                return toJsonArray(getChildren(), info => {
                    return info.
                })
            }, [])
        }*/
        //rearrangeableChildrenParameters: { getHighestChildIndex: getHighestChildIndex, getValid },
    }

}

export function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    rowAsChildOfGridParameters: {
        managedChildParameters,
        context: { childrenHaveFocusChildContext, gridNavigationRowContext, managedChildContext: mcc1, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext, staggeredChildContext, paginatedChildContext },
        completeGridNavigationRowParameters,
        singleSelectionChildParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexChildParameters: { hidden },
        textContentParameters,
        ...rowAsChildOfGridParameters
    },
    rowAsParentOfCellsParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        ...rowAsParentOfCellsParameters
    }
}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {

    const { index } = managedChildParameters;
    const {
        managedChildParameters: { setChildCountIfPaginated, setPaginationVisible, setParentIsPaginated },
        paginatedChildReturn: { paginatedVisible, isPaginated, hideBecausePaginated },
        props: paginationProps
    } = usePaginatedChild<RowElement>({ managedChildParameters: { index }, context: { paginatedChildContext } });

    const {
        managedChildParameters: { setParentIsStaggered, setStaggeredVisible },
        staggeredChildReturn: { staggeredVisible, isStaggered, hideBecauseStaggered },
        props: staggeredProps
    } = useStaggeredChild<RowElement>({ managedChildParameters: { index }, context: { staggeredChildContext } })

    rovingTabIndexChildParameters.hidden ||= (hideBecausePaginated || hideBecauseStaggered);
    singleSelectionChildParameters.disabled ||= rovingTabIndexChildParameters.hidden;

    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        return !child.hidden;
    }, []);

    const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} });


    const r: UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> = useGridNavigationSingleSelectionRow<RowElement, CellElement, RM, CM>({
        rowAsParentOfCellsParameters: {
            ...rowAsParentOfCellsParameters,
            rovingTabIndexParameters: { initiallyTabbedIndex: 0, ...rovingTabIndexParameters },
            typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
            linearNavigationParameters: { isValid, getHighestIndex: getHighestChildIndex, pageNavigationSize: 0, indexDemangler: identity, indexMangler: identity, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
        },
        rowAsChildOfGridParameters: {
            ...rowAsChildOfGridParameters,
            refElementReturn,
            rovingTabIndexChildParameters,
            gridNavigationRowContext,
            rovingTabIndexChildContext,
            singleSelectionContext,
            typeaheadNavigationChildContext,
            singleSelectionChildParameters,
            managedChildParameters,
            textContentParameters: { hidden, ...textContentParameters },
            managedChildrenReturn: { getChildren },
        }
    });

    const { rowAsChildOfGridReturn, rowAsParentOfCellsReturn } = r;


    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters: r.rowAsParentOfCellsReturn.managedChildrenParameters });
    const { getElement } = refElementReturn;

    const baseInfo: UseCompleteGridNavigationRowInfo<RowElement, CellElement> = {
        getElement,
        setTabbable: r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.setTabbable,
        getTabbable: r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.getTabbable,
        tabbable: r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.tabbable,
        index: managedChildParameters.index,
        hidden: rovingTabIndexChildParameters.hidden,
        selected: r.rowAsChildOfGridReturn.singleSelectionChildReturn.selected,
        focusSelf: r.rowAsChildOfGridReturn.gridNavigationRowParameters.focusSelf,
        getSelected: r.rowAsChildOfGridReturn.singleSelectionChildReturn.getSelected,
        setLocalSelected: r.rowAsChildOfGridReturn.managedChildParameters.setLocalSelected,
        disabled: singleSelectionChildParameters.disabled,
        setTabbableColumnIndex: r.rowAsChildOfGridReturn.gridNavigationRowParameters.setTabbableColumnIndex,
        getSortValue: rowAsChildOfGridParameters.sortableChildParameters.getSortValue,
        setPaginationVisible,
        setChildCountIfPaginated: setChildCountIfPaginated,
        setParentIsPaginated,
        setParentIsStaggered,
        setStaggeredVisible
    }

    const { managedChildReturn } = useManagedChild<RM>({ context: { managedChildContext: mcc1 }, managedChildParameters: { index } }, { ...baseInfo, ...completeGridNavigationRowParameters } as RM)


    const context = useStableObject<CompleteGridNavigationRowContext<RowElement, CellElement, CM>>({
        managedChildContext,
        rovingTabIndexChildContext: r.rowAsParentOfCellsReturn.rovingTabIndexChildContext,
        typeaheadNavigationChildContext: r.rowAsParentOfCellsReturn.typeaheadNavigationChildContext,
       // completeGridNavigationContext: useStableObject({}),
        gridNavigationCellContext: r.rowAsParentOfCellsReturn.gridNavigationCellContext,
    });
    const { hasCurrentFocusParameters } = useChildrenHaveFocusChild({ childrenHaveFocusChildContext });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ refElementReturn, hasCurrentFocusParameters: { ...hasCurrentFocusParameters, onCurrentFocusedChanged: null } });
    const props = useMergedProps(
        refElementReturn.propsStable,
        // TODO: Rows don't use tabIndex, but just excluding props here is...weird.
        //r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.propsUnstable,
        r.rowAsChildOfGridReturn.singleSelectionChildReturn.propsUnstable,
        r.rowAsParentOfCellsReturn.linearNavigationReturn.propsStable,
        r.rowAsParentOfCellsReturn.typeaheadNavigationReturn.propsStable,
        hasCurrentFocusReturn.propsStable,
        paginationProps,
        staggeredProps
    );

    return {
        context,
        props,
        rowAsParentOfCellsReturn: {
            ...rowAsParentOfCellsReturn,
            managedChildrenReturn
        },
        rowAsChildOfGridReturn: {
            ...rowAsChildOfGridReturn,
            managedChildReturn,
            staggeredChildReturn: { isStaggered, staggeredVisible, hideBecauseStaggered },
            paginatedChildReturn: { isPaginated, paginatedVisible, hideBecausePaginated }
        },
        hasCurrentFocusReturn

        //managedChildrenReturn,
        //...gridNavigationSingleSelectionReturn
    }
}

export function useCompleteGridNavigationCell<CellElement extends Element, M extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationCellParameters,
    managedChildParameters,
    context: { gridNavigationCellContext, managedChildContext, rovingTabIndexChildContext, typeaheadNavigationChildContext },
    rovingTabIndexChildParameters: { hidden },
    rovingTabIndexChildParameters,
    textContentParameters,
    //managedChildContext,
    completeGridNavigationCellParameters: { focusSelf, ...completeGridNavigationCellParameters },
    //sortableChildParameters: { getSortValue },
    //    pressParameters: { onPressSync, ...pressParameters },
}: UseCompleteGridNavigationCellParameters<CellElement, M>): UseCompleteGridNavigationCellReturnType<CellElement, M> {

    const { index } = managedChildParameters;

    const { refElementReturn } = useRefElement<CellElement>({ refElementParameters: {} });

    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters
    } = useGridNavigationSingleSelectionCell<CellElement>({
        gridNavigationCellContext,
        gridNavigationCellParameters,
        managedChildParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        rovingTabIndexChildParameters,
        refElementReturn,
        textContentParameters: { hidden, ...textContentParameters }
    });

    const { hasCurrentFocusReturn } = useHasCurrentFocus<CellElement>({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, ...hasCurrentFocusParameters }, refElementReturn });



    /* const { pressReturn } = usePress<CellElement>({
         pressParameters: {
             onPressSync: useStableCallback<NonNullable<typeof onPressSync>>(e => {
                 onPressSync?.(e);
                 completeGridNavigationContext.onPressSync?.(e);
             }),
             focusSelf: null,
             ...pressParameters
         },
         refElementReturn
     });*/



    const baseInfo: UseCompleteGridNavigationCellInfo<CellElement> = {
        focusSelf,
        getElement: refElementReturn.getElement,
        hidden: rovingTabIndexChildParameters.hidden,
        index: managedChildParameters.index,
        getTabbable: rovingTabIndexChildReturn.getTabbable,
        setTabbable: rovingTabIndexChildReturn.setTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable,
        //getSortValue
    }

    const { managedChildReturn } = useManagedChild<M>({
        context: { managedChildContext },
        managedChildParameters: { index }
    },
        {
            ...baseInfo,
            ...completeGridNavigationCellParameters
        } as M)

    const props = useMergedProps(
        refElementReturn.propsStable,
        //pressReturn.propsStable,
        rovingTabIndexChildReturn.propsUnstable,
        hasCurrentFocusReturn.propsStable
    );

    return {
        props,
        refElementReturn,
        rovingTabIndexChildReturn,
        pressParameters,
        //pressReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn
    }
}
