import { identity } from "lodash-es";
import { useGridNavigationSingleSelectionSortable } from "../component-detail/keyboard-navigation/use-grid-navigation-single-selection-sortable.js";
import { useGridNavigationSingleSelectionCell, useGridNavigationSingleSelectionRow } from "../component-detail/keyboard-navigation/use-grid-navigation-single-selection.js";
import { useSingleSelectionDeclarative } from "../component-detail/keyboard-navigation/use-single-selection.js";
import { usePaginatedChild, usePaginatedChildren } from "../component-detail/use-paginated-children.js";
import { useStaggeredChild, useStaggeredChildren } from "../component-detail/use-staggered-children.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @compositeParams
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 */
export function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, sortableChildrenParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, ...void1 }) {
    monitorCallCount(useCompleteGridNavigation);
    assertEmptyObject(void1);
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { refElementReturn } = useRefElement({});
    const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, rearrangeableChildrenReturn, propsParent, propsStableParentOrChild, rovingTabIndexReturn, ...gridNavigationSingleSelectionReturn } = useGridNavigationSingleSelectionSortable({
        gridNavigationParameters,
        linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValid, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { initiallyTabbedIndex: singleSelectionParameters.initiallySelectedIndex, untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        paginatedChildrenParameters,
        refElementReturn,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); }),
            ...rearrangeableChildrenParameters
        },
        sortableChildrenParameters
    });
    const { indexDemangler } = rearrangeableChildrenReturn;
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const mcr = useManagedChildren({ managedChildrenParameters: { onChildrenCountChange: useStableCallback(c => onChildrenCountChange?.(c)), ...managedChildrenParameters } });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr; // TODO: This is split into two lines for TypeScript reasons? Can this be fixed? E.G. like vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  why doesn't that work?
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildrenCountChange }, context: { paginatedChildContext } } = usePaginatedChildren({ refElementReturn, managedChildrenReturn, paginatedChildrenParameters, rovingTabIndexReturn, linearNavigationParameters: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters });
    //const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useMemoObject({
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
        props: useMergedProps(propsParent, propsStableParentOrChild),
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        rovingTabIndexReturn,
        childrenHaveFocusReturn,
        paginatedChildrenReturn,
        ...gridNavigationSingleSelectionReturn,
    };
}
/**
 * @compositeParams
 */
export function useCompleteGridNavigationRow({ info, context: contextIncomingForRowAsChildOfTable, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, ...void1 }) {
    monitorCallCount(useCompleteGridNavigationRow);
    const { info: infoPaginatedChild, paginatedChildReturn, props: paginationProps } = usePaginatedChild({ info, context: contextIncomingForRowAsChildOfTable });
    const { info: infoStaggeredChild, // { setParentIsStaggered, setStaggeredVisible },
    staggeredChildReturn, props: staggeredProps } = useStaggeredChild({ info, context: contextIncomingForRowAsChildOfTable });
    info.untabbable ||= (paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered);
    info.unselectable ||= info.untabbable;
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const r = useGridNavigationSingleSelectionRow({
        rovingTabIndexParameters,
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        linearNavigationParameters: { isValid, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, pageNavigationSize: 0, indexDemangler: identity, indexMangler: identity, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        refElementReturn,
        context: contextIncomingForRowAsChildOfTable,
        info,
        textContentParameters
    });
    const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p3, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = r;
    const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const completeInfo = {
        getElement: refElementReturn.getElement,
        ...info,
        ...infoRowReturn,
        ...infoPaginatedChild,
        ...infoStaggeredChild
    };
    const { managedChildReturn } = useManagedChild({ context: contextIncomingForRowAsChildOfTable, info: completeInfo });
    const context = useMemoObject({
        ...contextGNR,
        ...contextMC,
        //completeGridNavigationCellContext: { excludeSpace }
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void4 } } = useChildrenHaveFocusChild({ context: contextIncomingForRowAsChildOfTable });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ refElementReturn, hasCurrentFocusParameters: { onCurrentFocusedChanged: useStableCallback((a, b) => { ocfic1?.(a, b); ocfic2?.(a, b); }) } });
    const props = useMergedProps(propsStable, p3, hasCurrentFocusReturn.propsStable, paginationProps, staggeredProps);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    return {
        pressParameters,
        hasCurrentFocusReturn,
        managedChildrenReturn,
        context,
        managedChildReturn,
        staggeredChildReturn,
        paginatedChildReturn,
        linearNavigationReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        props,
    };
}
/**
 * @compositeParams
 */
export function useCompleteGridNavigationCell({ gridNavigationCellParameters, context: { gridNavigationCellContext, managedChildContext, rovingTabIndexContext, typeaheadNavigationContext }, textContentParameters, info: { focusSelf, index, untabbable, ...info }, ...void1 }) {
    monitorCallCount(useCompleteGridNavigationCell);
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentReturn, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSingleSelectionCell({
        gridNavigationCellParameters,
        info: { index, untabbable, ...info },
        context: { gridNavigationCellContext, rovingTabIndexContext, typeaheadNavigationContext },
        refElementReturn,
        textContentParameters,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, ...hasCurrentFocusParameters }, refElementReturn });
    const baseInfo = {
        getElement: refElementReturn.getElement,
        getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
        setLocallyTabbable: info2.setLocallyTabbable,
        //tabbable: rovingTabIndexChildReturn.tabbable,
        focusSelf,
        index,
        untabbable,
        ...info
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: baseInfo });
    const props = useMergedProps(propsStable, propsRti, hasCurrentFocusReturn.propsStable);
    return {
        props,
        refElementReturn,
        rovingTabIndexChildReturn,
        pressParameters: { excludeSpace: useStableCallback(() => (es1?.() || false)) },
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn
    };
}
export function useCompleteGridNavigationDeclarative({ gridNavigationParameters, linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters, }) {
    const ret = useCompleteGridNavigation({
        linearNavigationParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySelectedIndex: singleSelectionDeclarativeParameters.selectedIndex, onSelectedIndexChange: useStableCallback((...e) => onSelectedIndexChange?.(...e)), ...singleSelectionParameters },
        sortableChildrenParameters,
        staggeredChildrenParameters,
        typeaheadNavigationParameters,
        gridNavigationParameters,
    });
    const { singleSelectionParameters: { onSelectedIndexChange } } = useSingleSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSelectedIndex }, ...ret2 } = ret;
    return { ...ret2, singleSelectionReturn: { getSelectedIndex } };
}
//# sourceMappingURL=use-grid-navigation-complete.js.map