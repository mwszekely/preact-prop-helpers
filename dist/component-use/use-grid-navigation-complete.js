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
export function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, sortableChildrenParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters }) {
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
    const { childrenHaveFocusParameters, managedChildrenParameters, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext, gridNavigationRowContext, rearrangeableChildrenReturn, propsStable, ...gridNavigationSingleSelectionReturn } = useGridNavigationSingleSelectionSortable({
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
    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const mcr = useManagedChildren({ managedChildrenParameters: { onChildCountChange: useStableCallback(c => onChildCountChange(c)), ...managedChildrenParameters } });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr; // TODO: This is split into two lines for TypeScript reasons? Can this be fixed? E.G. like    vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  why doesn't that work?
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildCountChange }, context: { paginatedChildContext } } = usePaginatedChildren({ managedChildrenReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters });
    //const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useStableObject({
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
        propsStable,
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        ...gridNavigationSingleSelectionReturn,
        childrenHaveFocusReturn,
        paginatedChildrenReturn,
    };
}
export function useCompleteGridNavigationRow({ rowAsChildOfGridParameters: { managedChildParameters, context: { childrenHaveFocusChildContext, gridNavigationRowContext, managedChildContext: mcc1, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext, staggeredChildContext, paginatedChildContext }, completeGridNavigationRowParameters, singleSelectionChildParameters, rovingTabIndexChildParameters, rovingTabIndexChildParameters: { hidden }, textContentParameters, ...rowAsChildOfGridParameters }, rowAsParentOfCellsParameters: { linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, ...rowAsParentOfCellsParameters } }) {
    const { index } = managedChildParameters;
    const { managedChildParameters: { setChildCountIfPaginated, setPaginationVisible, setParentIsPaginated }, paginatedChildReturn: { paginatedVisible, isPaginated, hideBecausePaginated }, props: paginationProps } = usePaginatedChild({ managedChildParameters: { index }, context: { paginatedChildContext } });
    const { managedChildParameters: { setParentIsStaggered, setStaggeredVisible }, staggeredChildReturn: { isStaggered, hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild({ managedChildParameters: { index }, context: { staggeredChildContext } });
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
    const { rowAsChildOfGridReturn: { props: propsRowAsChild, ...rowAsChildOfGridReturn }, rowAsParentOfCellsReturn: { propsStable: propsParentOfCells, ...rowAsParentOfCellsReturn } } = r;
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters: r.rowAsParentOfCellsReturn.managedChildrenParameters });
    const { getElement } = refElementReturn;
    const baseInfo = {
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
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext: mcc1 }, managedChildParameters: { index } }, { ...baseInfo, ...completeGridNavigationRowParameters });
    const context = useStableObject({
        managedChildContext,
        rovingTabIndexChildContext: r.rowAsParentOfCellsReturn.rovingTabIndexChildContext,
        typeaheadNavigationChildContext: r.rowAsParentOfCellsReturn.typeaheadNavigationChildContext,
        // completeGridNavigationContext: useStableObject({}),
        gridNavigationCellContext: r.rowAsParentOfCellsReturn.gridNavigationCellContext,
    });
    const { hasCurrentFocusParameters } = useChildrenHaveFocusChild({ childrenHaveFocusChildContext });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ refElementReturn, hasCurrentFocusParameters: { ...hasCurrentFocusParameters, onCurrentFocusedChanged: null } });
    const props = useMergedProps(propsStable, 
    // TODO: Rows don't use tabIndex, but just excluding props here is...weird.
    propsParentOfCells, r.rowAsChildOfGridReturn.props, hasCurrentFocusReturn.propsStable, paginationProps, staggeredProps);
    return {
        rowAsParentOfCellsReturn: {
            ...rowAsParentOfCellsReturn,
            hasCurrentFocusReturn,
            managedChildrenReturn,
            propsStable: props,
            context,
        },
        rowAsChildOfGridReturn: {
            ...rowAsChildOfGridReturn,
            props: propsRowAsChild,
            managedChildReturn,
            staggeredChildReturn: { isStaggered, hideBecauseStaggered },
            paginatedChildReturn: { isPaginated, paginatedVisible, hideBecausePaginated }
        }
    };
}
export function useCompleteGridNavigationCell({ gridNavigationCellParameters, managedChildParameters, context: { gridNavigationCellContext, managedChildContext, rovingTabIndexChildContext, typeaheadNavigationChildContext }, rovingTabIndexChildParameters: { hidden }, rovingTabIndexChildParameters, textContentParameters, completeGridNavigationCellParameters: { focusSelf, ...completeGridNavigationCellParameters }, }) {
    const { index } = managedChildParameters;
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentReturn, pressParameters, props: propsRti } = useGridNavigationSingleSelectionCell({
        gridNavigationCellContext,
        gridNavigationCellParameters,
        managedChildParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
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