import { identity } from "lodash-es";
import { useCallback } from "preact/hooks";
import { useGridNavigationSingleSelectionSortable } from "../component-detail/use-grid-navigation-single-selection-sortable.js";
import { useGridNavigationSingleSelectionCell, useGridNavigationSingleSelectionRow } from "../component-detail/use-grid-navigation-single-selection.js";
import { usePaginatedChild, usePaginatedChildren } from "../component-detail/use-paginated-children.js";
import { useStaggeredChild, useStaggeredChildren } from "../component-detail/use-staggered-children.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, sortableChildrenParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters }) {
    monitorCallCount(useCompleteGridNavigation);
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.hidden)
            return false;
        return true;
    }, []);
    const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, rearrangeableChildrenReturn, propsStable, ...gridNavigationSingleSelectionReturn } = useGridNavigationSingleSelectionSortable({
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
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const mcr = useManagedChildren({ managedChildrenParameters: { onChildCountChange: useStableCallback(c => onChildCountChange(c)), ...managedChildrenParameters } });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr; // TODO: This is split into two lines for TypeScript reasons? Can this be fixed? E.G. like    vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  why doesn't that work?
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildCountChange }, context: { paginatedChildContext } } = usePaginatedChildren({ managedChildrenReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters });
    //const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useStableObject({
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
    };
}
export function useCompleteGridNavigationRow({ managedChildParameters, context: contextIncomingForRowAsChildOfTable, completeGridNavigationRowParameters, singleSelectionChildParameters, rovingTabIndexChildParameters, rovingTabIndexChildParameters: { hidden }, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, sortableChildParameters }) {
    monitorCallCount(useCompleteGridNavigationRow);
    const { index } = managedChildParameters;
    const { managedChildParameters: { setChildCountIfPaginated, setPaginationVisible, setParentIsPaginated }, paginatedChildReturn: { paginatedVisible, isPaginated, hideBecausePaginated }, props: paginationProps } = usePaginatedChild({ managedChildParameters: { index }, context: contextIncomingForRowAsChildOfTable });
    const { managedChildParameters: { setParentIsStaggered, setStaggeredVisible }, staggeredChildReturn: { isStaggered, hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild({ managedChildParameters: { index }, context: contextIncomingForRowAsChildOfTable });
    rovingTabIndexChildParameters.hidden ||= (hideBecausePaginated || hideBecauseStaggered);
    singleSelectionChildParameters.disabled ||= rovingTabIndexChildParameters.hidden;
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.hidden)
            return false;
        return true;
    }, []);
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const r = useGridNavigationSingleSelectionRow({
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
    const { gridNavigationRowParameters: { focusSelf, setTabbableColumnIndex }, linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, context: contextGNR } = r;
    //const { rowAsChildOfGridReturn: { props: propsRowAsChild, ...rowAsChildOfGridReturn }, rowAsParentOfCellsReturn: { propsStable: propsParentOfCells, ...rowAsParentOfCellsReturn } } = r;
    const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const { getElement } = refElementReturn;
    const baseInfo = {
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
    };
    const { managedChildReturn } = useManagedChild({ context: contextIncomingForRowAsChildOfTable, managedChildParameters: { index } }, { ...baseInfo, ...completeGridNavigationRowParameters });
    const context = useStableObject({
        ...contextGNR,
        ...contextMC
    });
    const { hasCurrentFocusParameters } = useChildrenHaveFocusChild({ context: contextIncomingForRowAsChildOfTable });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ refElementReturn, hasCurrentFocusParameters: { ...hasCurrentFocusParameters, onCurrentFocusedChanged: null } });
    const props = useMergedProps(propsStable, 
    // TODO: Rows don't use tabIndex, but just excluding props here is...weird.
    r.props, hasCurrentFocusReturn.propsStable, paginationProps, staggeredProps);
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
    };
}
export function useCompleteGridNavigationCell({ gridNavigationCellParameters, managedChildParameters, context: { gridNavigationCellContext, managedChildContext, rovingTabIndexContext, typeaheadNavigationContext }, rovingTabIndexChildParameters: { hidden }, rovingTabIndexChildParameters, textContentParameters, completeGridNavigationCellParameters: { focusSelf, ...completeGridNavigationCellParameters }, }) {
    monitorCallCount(useCompleteGridNavigationCell);
    const { index } = managedChildParameters;
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentReturn, pressParameters, props: propsRti } = useGridNavigationSingleSelectionCell({
        gridNavigationCellParameters,
        managedChildParameters,
        context: { gridNavigationCellContext, rovingTabIndexContext, typeaheadNavigationContext },
        rovingTabIndexChildParameters,
        refElementReturn,
        textContentParameters: { hidden, ...textContentParameters }
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, ...hasCurrentFocusParameters }, refElementReturn });
    const baseInfo = {
        focusSelf,
        getElement: refElementReturn.getElement,
        hidden: rovingTabIndexChildParameters.hidden,
        index: managedChildParameters.index,
        getTabbable: rovingTabIndexChildReturn.getTabbable,
        setTabbable: rovingTabIndexChildReturn.setTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable,
    };
    const { managedChildReturn } = useManagedChild({
        context: { managedChildContext },
        managedChildParameters: { index }
    }, {
        ...baseInfo,
        ...completeGridNavigationCellParameters
    });
    const props = useMergedProps(propsStable, propsRti, hasCurrentFocusReturn.propsStable);
    return {
        props,
        refElementReturn,
        rovingTabIndexChildReturn,
        pressParameters,
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn
    };
}
//# sourceMappingURL=use-grid-navigation-complete.js.map