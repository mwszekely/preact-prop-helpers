import { identity } from "lodash-es";
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { UseGridNavigationCellContext, UseGridNavigationRowContext } from "../component-detail/use-grid-navigation-partial.js";
import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType, useGridNavigationSingleSelectionSortable } from "../component-detail/use-grid-navigation-single-selection-sortable.js";
import { UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionRowReturnType, useGridNavigationSingleSelectionCell, useGridNavigationSingleSelectionRow } from "../component-detail/use-grid-navigation-single-selection.js";
import { UsePaginatedChildContext, UsePaginatedChildReturn, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, usePaginatedChild, usePaginatedChildren } from "../component-detail/use-paginated-children.js";
import { RovingTabIndexChildContext } from "../component-detail/use-roving-tabindex.js";
import { UseSingleSelectionContext } from "../component-detail/use-single-selection.js";
import { UseSortableChildInfo } from "../component-detail/use-sortable-children.js";
import { UseStaggeredChildContext, UseStaggeredChildReturn, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, useStaggeredChild, useStaggeredChildren } from "../component-detail/use-staggered-children.js";
import { UseTypeaheadNavigationContext } from "../component-detail/use-typeahead-navigation.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildren, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { OmitStrong } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";

export interface UseCompleteGridNavigationRowInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, UsePaginatedChildrenInfo<RowElement>, UseStaggeredChildrenInfo<RowElement> { }
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSingleSelectSortableChildCellInfo<CellElement> { }

export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters"> {
    linearNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["linearNavigationParameters"], "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">;
    typeaheadNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["typeaheadNavigationParameters"], "isValid">;
    rearrangeableChildrenParameters: OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>["rearrangeableChildrenParameters"], "onRearranged">;
    rovingTabIndexParameters: OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    paginatedChildrenParameters: Pick<UsePaginatedChildrenParameters<RowElement, M>, "paginatedChildrenParameters">["paginatedChildrenParameters"];
    staggeredChildrenParameters: Pick<UseStaggeredChildrenParameters<RowElement, M>, "staggeredChildrenParameters">["staggeredChildrenParameters"];
}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "context" | "textContentParameters" | "managedChildrenReturn" | "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters" | "typeaheadNavigationParameters"> {

    context: CompleteGridNavigationRowContext<any, RowElement, CellElement, RM, CM>;
    completeGridNavigationRowParameters: OmitStrong<RM, keyof UseCompleteGridNavigationRowInfo<RowElement, CellElement>>;
    sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
    textContentParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["textContentParameters"], "hidden">;

    linearNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["linearNavigationParameters"], "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">;
    typeaheadNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["typeaheadNavigationParameters"], "isValid">;
    rovingTabIndexParameters: OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rovingTabIndexParameters"], "initiallyTabbedIndex">;

}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, M extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionCellParameters<any, CellElement>, "context" | "textContentParameters" | "refElementReturn"> {
    textContentParameters: OmitStrong<UseGridNavigationSingleSelectionCellParameters<any, CellElement>["textContentParameters"], "hidden">;
    completeGridNavigationCellParameters: Pick<M, "focusSelf"> & OmitStrong<M, keyof UseCompleteGridNavigationCellInfo<CellElement>>;
    context: CompleteGridNavigationCellContext<any, CellElement, M>;
}


export interface CompleteGridNavigationRowContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseManagedChildrenContext<RM>,
    UsePaginatedChildContext,
    UseStaggeredChildContext,
    UseChildrenHaveFocusContext<RowElement>,
    UseTypeaheadNavigationContext,
    UseSingleSelectionContext<RowElement>,
    RovingTabIndexChildContext<RowElement>,
    UseGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement>
//Pick<UseTypeaheadNavigationChildParameters<RowElement>, "typeaheadNavigationChildContext">,
//Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusChildContext">,
//Pick<UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationRowContext"> 
{

}


export interface CompleteGridNavigationCellContext<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteGridNavigationCellInfo<ChildElement>> extends
    UseManagedChildrenContext<M>,
    UseTypeaheadNavigationContext,
    RovingTabIndexChildContext<ChildElement>,
    UseGridNavigationCellContext<ParentElement, ChildElement>
//Pick<UseGridNavigationRowReturnType<ParentElement, ChildElement>, "typeaheadNavigationChildContext" | "rovingTabIndexChildContext" | "gridNavigationCellContext"> 
{
}


export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>
    extends
    Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">,
    Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">,
    OmitStrong<UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    //props: h.JSX.HTMLAttributes<ParentOrRowElement>;
    context: CompleteGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM, CM>;

    managedChildrenReturn: UseManagedChildrenReturnType<RM>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<RowElement>["childrenHaveFocusReturn"];
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>, "context" | "gridNavigationRowParameters" | "managedChildrenParameters" | "managedChildParameters" | "pressParameters" | "textContentReturn"> {
    managedChildrenReturn: UseManagedChildrenReturnType<CM>["managedChildrenReturn"];
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<RowElement>["hasCurrentFocusReturn"];
    //propsStable: h.JSX.HTMLAttributes<RowElement>;
    context: CompleteGridNavigationCellContext<RowElement, CellElement, CM>;
    managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
    paginatedChildReturn: UsePaginatedChildReturn<RowElement>["paginatedChildReturn"];
    staggeredChildReturn: UseStaggeredChildReturn<RowElement>["staggeredChildReturn"];
    textContentReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["textContentReturn"];

}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>, "hasCurrentFocusParameters">,
    OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">,
    UseHasCurrentFocusReturnType<CellElement>,
    UseManagedChildReturnType<CM> {
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
    monitorCallCount(useCompleteGridNavigation);

    const getChildren: () => ManagedChildren<RM> = useCallback<() => ManagedChildren<RM>>(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);


    const isValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.hidden)
            return false;
        return true;
    }, []);

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        rearrangeableChildrenReturn,
        propsStable,
        ...gridNavigationSingleSelectionReturn
    }: UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> = useGridNavigationSingleSelectionSortable<ParentOrRowElement, RowElement, CellElement, RM, CM>({
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

    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus<RowElement>({ childrenHaveFocusParameters });
    const mcr: UseManagedChildrenReturnType<RM> = useManagedChildren<RM>({ managedChildrenParameters: { onChildCountChange: useStableCallback(c => onChildCountChange(c)), ...managedChildrenParameters } });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr;    // TODO: This is split into two lines for TypeScript reasons? Can this be fixed? E.G. like    vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  why doesn't that work?
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildCountChange }, context: { paginatedChildContext } }: UsePaginatedChildrenReturnType = usePaginatedChildren<RowElement, RM>({ managedChildrenReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn }: UseStaggeredChildrenReturnType = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters })
    //const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);

    const context = useStableObject<CompleteGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM, CM>>({
        singleSelectionContext,
        managedChildContext,
        rovingTabIndexContext,
        typeaheadNavigationContext,
        childrenHaveFocusChildContext,
        paginatedChildContext,
        staggeredChildContext,
        gridNavigationRowContext
    });

    return {
        context,
        propsStable,

        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        ...gridNavigationSingleSelectionReturn,
        childrenHaveFocusReturn,
        paginatedChildrenReturn,
    }

}

export function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({

    managedChildParameters,
    context: contextIncomingForRowAsChildOfTable,
    completeGridNavigationRowParameters,
    singleSelectionChildParameters,
    rovingTabIndexChildParameters,
    rovingTabIndexChildParameters: { hidden },
    textContentParameters,

    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    sortableChildParameters

}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
    monitorCallCount(useCompleteGridNavigationRow);

    const { index } = managedChildParameters;
    const {
        managedChildParameters: { setChildCountIfPaginated, setPaginationVisible, setParentIsPaginated },
        paginatedChildReturn: { paginatedVisible, isPaginated, hideBecausePaginated },
        props: paginationProps
    } = usePaginatedChild<RowElement>({ managedChildParameters: { index }, context: contextIncomingForRowAsChildOfTable });

    const {
        managedChildParameters: { setParentIsStaggered, setStaggeredVisible },
        staggeredChildReturn: { isStaggered, hideBecauseStaggered },
        props: staggeredProps
    } = useStaggeredChild<RowElement>({ managedChildParameters: { index }, context: contextIncomingForRowAsChildOfTable })

    rovingTabIndexChildParameters.hidden ||= (hideBecausePaginated || hideBecauseStaggered);
    singleSelectionChildParameters.disabled ||= rovingTabIndexChildParameters.hidden;

    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.hidden)
            return false;
        return true;
    }, []);

    const { refElementReturn, propsStable } = useRefElement<RowElement>({ refElementParameters: {} });


    const r: UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> = useGridNavigationSingleSelectionRow<RowElement, CellElement, RM, CM>({
        rovingTabIndexParameters: { initiallyTabbedIndex: 0, ...rovingTabIndexParameters },
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        linearNavigationParameters: { isValid, getHighestIndex: getHighestChildIndex, pageNavigationSize: 0, indexDemangler: identity, indexMangler: identity, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        refElementReturn,
        rovingTabIndexChildParameters,
        context: contextIncomingForRowAsChildOfTable,
        singleSelectionChildParameters,
        managedChildParameters,
        textContentParameters: { hidden, ...textContentParameters },
    });

    const {
        gridNavigationRowParameters: { focusSelf, setTabbableColumnIndex },
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        context: contextGNR
    } = r;

    //const { rowAsChildOfGridReturn: { props: propsRowAsChild, ...rowAsChildOfGridReturn }, rowAsParentOfCellsReturn: { propsStable: propsParentOfCells, ...rowAsParentOfCellsReturn } } = r;


    const { context: contextMC, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters });
    const { getElement } = refElementReturn;

    const baseInfo: UseCompleteGridNavigationRowInfo<RowElement, CellElement> = {
        getElement,
        setTabbable: rovingTabIndexChildReturn.setTabbable,
        getTabbable: rovingTabIndexChildReturn.getTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable,
        index: managedChildParameters.index,
        hidden: rovingTabIndexChildParameters.hidden,
        selected: singleSelectionChildReturn.selected,
        focusSelf,
        getSelected: singleSelectionChildReturn.getSelected,
        setLocalSelected: r.managedChildParameters.setLocalSelected,
        disabled: singleSelectionChildParameters.disabled,
        setTabbableColumnIndex,
        getSortValue: sortableChildParameters.getSortValue,
        setPaginationVisible,
        setChildCountIfPaginated: setChildCountIfPaginated,
        setParentIsPaginated,
        setParentIsStaggered,
        setStaggeredVisible
    }


    const { managedChildReturn } = useManagedChild<RM>({ context: contextIncomingForRowAsChildOfTable, managedChildParameters: { index } }, { ...baseInfo, ...completeGridNavigationRowParameters } as RM)


    const context = useStableObject<CompleteGridNavigationCellContext<RowElement, CellElement, CM>>({
        ...contextGNR,
        ...contextMC
    });
    const { hasCurrentFocusParameters } = useChildrenHaveFocusChild<RowElement>({ context: contextIncomingForRowAsChildOfTable });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus<RowElement>({ refElementReturn, hasCurrentFocusParameters: { ...hasCurrentFocusParameters, onCurrentFocusedChanged: null } });
    const props = useMergedProps(
        propsStable,
        // TODO: Rows don't use tabIndex, but just excluding props here is...weird.
        r.props,
        hasCurrentFocusReturn.propsStable,
        paginationProps,
        staggeredProps
    );

    return {
        hasCurrentFocusParameters,
        hasCurrentFocusReturn,
        managedChildrenReturn,
        context,
        managedChildReturn,
        staggeredChildReturn: { isStaggered, hideBecauseStaggered },
        paginatedChildReturn: { isPaginated, paginatedVisible, hideBecausePaginated },
        linearNavigationReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        props,
    }
}

export function useCompleteGridNavigationCell<CellElement extends Element, M extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationCellParameters,
    managedChildParameters,
    context: { gridNavigationCellContext, managedChildContext, rovingTabIndexContext, typeaheadNavigationContext },
    rovingTabIndexChildParameters: { hidden },
    rovingTabIndexChildParameters,
    textContentParameters,
    completeGridNavigationCellParameters: { focusSelf, ...completeGridNavigationCellParameters },
}: UseCompleteGridNavigationCellParameters<CellElement, M>): UseCompleteGridNavigationCellReturnType<CellElement, M> {
    monitorCallCount(useCompleteGridNavigationCell);

    const { index } = managedChildParameters;

    const { refElementReturn, propsStable } = useRefElement<CellElement>({ refElementParameters: {} });

    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        props: propsRti
    } = useGridNavigationSingleSelectionCell<CellElement>({
        gridNavigationCellParameters,
        managedChildParameters,
        context: { gridNavigationCellContext, rovingTabIndexContext, typeaheadNavigationContext },
        rovingTabIndexChildParameters,
        refElementReturn,
        textContentParameters: { hidden, ...textContentParameters }
    });

    const { hasCurrentFocusReturn } = useHasCurrentFocus<CellElement>({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, ...hasCurrentFocusParameters }, refElementReturn });

    const baseInfo: UseCompleteGridNavigationCellInfo<CellElement> = {
        focusSelf,
        getElement: refElementReturn.getElement,
        hidden: rovingTabIndexChildParameters.hidden,
        index: managedChildParameters.index,
        getTabbable: rovingTabIndexChildReturn.getTabbable,
        setTabbable: rovingTabIndexChildReturn.setTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable,
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
        propsStable,
        propsRti,
        hasCurrentFocusReturn.propsStable
    );

    return {
        props,
        refElementReturn,
        rovingTabIndexChildReturn,
        pressParameters,
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn
    }
}
