import { useListNavigationSingleSelectionSortable } from "../component-detail/keyboard-navigation/use-list-navigation-single-selection-sortable.js";
import { useListNavigationSingleSelectionChild } from "../component-detail/keyboard-navigation/use-list-navigation-single-selection.js";
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
import { enhanceEvent } from "../util/event.js";
import { useCallback } from "../util/lib.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * All the list-related hooks combined into one giant hook that encapsulates everything.
 *
 * Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 *
 *
 * @compositeParams
 */
export function useCompleteListNavigation({ linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, paginatedChildrenParameters, staggeredChildrenParameters, ...completeListNavigationParameters }) {
    monitorCallCount(useCompleteListNavigation);
    const { initiallySelectedIndex } = singleSelectionParameters;
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { propsStable: propsRef, refElementReturn } = useRefElement({});
    const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...mcp1 }, context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, rearrangeableChildrenReturn, sortableChildrenReturn, propsParent, propsStableParentOrChild } = useListNavigationSingleSelectionSortable({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getLowestIndex, getHighestIndex, isValid, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { initiallyTabbedIndex: initiallySelectedIndex, untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); }),
            ...rearrangeableChildrenParameters
        },
        refElementReturn,
        sortableChildrenParameters,
        ...completeListNavigationParameters,
    });
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: mcp2, context: { paginatedChildContext } } = usePaginatedChildren({ refElementReturn, managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, rovingTabIndexReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler: rearrangeableChildrenReturn.indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, staggeredChildrenParameters });
    const mcr = useManagedChildren({
        managedChildrenParameters: {
            onChildrenMountChange,
            ...mcp2,
            ...mcp1
        }
    });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr;
    const context = useMemoObject(useMemoObject({
        childrenHaveFocusChildContext,
        managedChildContext,
        paginatedChildContext,
        rovingTabIndexContext,
        singleSelectionContext,
        staggeredChildContext,
        typeaheadNavigationContext
    }));
    return {
        context,
        props: useMergedProps(propsParent, propsRef, propsStableParentOrChild),
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        sortableChildrenReturn,
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn
    };
}
export function useCompleteListNavigationChild({ info: { index, focusSelf, unselectable, untabbable, getSortValue, ...info }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
textContentParameters, context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, typeaheadNavigationContext }, ...void1 }) {
    monitorCallCount(useCompleteListNavigationChild);
    assertEmptyObject(void1);
    //const { onPressSync, ...pressParameters1 } = (pressParameters ?? {});
    const { info: mcp3, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild({ info: { index }, context: { paginatedChildContext } });
    const { info: mcp4, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild({ info: { index }, context: { staggeredChildContext } });
    untabbable ||= (hideBecausePaginated || hideBecauseStaggered);
    unselectable ||= (hideBecausePaginated || hideBecauseStaggered);
    if (untabbable)
        unselectable = true;
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, pressParameters: { excludeSpace, ...pressParameters2 }, textContentReturn, singleSelectionChildReturn, info: mcp5, rovingTabIndexChildReturn, propsChild, propsTabbable } = useListNavigationSingleSelectionChild({
        info: { index, unselectable, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        refElementReturn,
        textContentParameters
    });
    const onPress = useStableCallback((e) => {
        if (singleSelectionContext.selectionMode == "activation")
            singleSelectionContext.onSelectedIndexChange?.(enhanceEvent(e, { selectedIndex: index }));
    });
    const onPressSync = (rovingTabIndexContext.untabbable || unselectable || untabbable) ? null : onPress;
    //const { propsStable: pressRefProps, refElementReturn: pressRefElementReturn } = useRefElement<any>({ refElementParameters: {} })
    const mcp1 = {
        index,
        focusSelf,
        getElement: refElementReturn.getElement,
        getSortValue,
        unselectable,
        untabbable,
        ...mcp4,
        ...mcp3,
        ...mcp5,
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: { ...mcp1, ...info } });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, e) => {
        ocfic1?.(focused, prev, e);
        ocfic2?.(focused, prev, e);
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, onCurrentFocusedChanged: null }, refElementReturn });
    const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild, paginationProps, staggeredProps);
    return {
        propsChild: props,
        propsTabbable,
        pressParameters: {
            onPressSync,
            excludeSpace
        },
        textContentReturn,
        refElementReturn,
        singleSelectionChildReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        paginatedChildReturn,
        staggeredChildReturn,
        rovingTabIndexChildReturn,
        //propsPressStable: useMergedProps(pressProps, pressRefProps)
    };
}
export function useCompleteListNavigationDeclarative({ linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters }) {
    const ret = useCompleteListNavigation({
        linearNavigationParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: {
            initiallySelectedIndex: singleSelectionDeclarativeParameters.selectedIndex,
            // Needs to be a (stable) callback because of declaration order
            onSelectedIndexChange: useStableCallback((...e) => onSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        sortableChildrenParameters,
        staggeredChildrenParameters,
        typeaheadNavigationParameters
    });
    const { singleSelectionParameters: { onSelectedIndexChange } } = useSingleSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSelectedIndex }, ...ret2 } = ret;
    return { ...ret2, singleSelectionReturn: { getSelectedIndex } };
}
//# sourceMappingURL=use-list-navigation-complete.js.map