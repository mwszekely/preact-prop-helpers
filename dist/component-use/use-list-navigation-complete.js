import { useCallback } from "preact/hooks";
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
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { usePress } from "./use-press.js";
/**
 * All the list-related hooks combined into one giant hook that encapsulates everything.
 *
 * Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 *
 *
 * @returns
 */
export function useCompleteListNavigation({ linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, paginatedChildrenParameters, staggeredChildrenParameters, ...completeListNavigationParameters }) {
    monitorCallCount(useCompleteListNavigation);
    const { initiallySelectedIndex } = singleSelectionParameters;
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.hidden)
            return false;
        return true;
    }, []);
    const { propsStable: propsRef, refElementReturn } = useRefElement({});
    const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...managedChildrenParameters }, context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn, rearrangeableChildrenReturn, sortableChildrenReturn, propsParent, propsStableParentOrChild } = useListNavigationSingleSelectionSortable({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getHighestIndex, isValid, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { initiallyTabbedIndex: initiallySelectedIndex, ...rovingTabIndexParameters },
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
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildrenCountChange }, context: { paginatedChildContext } } = usePaginatedChildren({ refElementReturn, managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, rovingTabIndexReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler: rearrangeableChildrenReturn.indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, staggeredChildrenParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({
        managedChildrenParameters: {
            onChildrenCountChange: useStableCallback((c) => { onChildrenCountChange(c); }),
            onChildrenMountChange,
            ...managedChildrenParameters
        }
    });
    const context = useStableObject(useStableObject({
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
export function useCompleteListNavigationChild({ info, textContentParameters, context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, typeaheadNavigationContext }, sortableChildParameters, pressParameters, rovingTabIndexParameters, singleSelectionParameters, staggeredChildrenParameters, paginatedChildrenParameters, ...void1 }) {
    monitorCallCount(useCompleteListNavigationChild);
    assertEmptyObject(void1);
    const { onPressSync, ...pressParameters1 } = (pressParameters ?? {});
    let { index, focusSelf, hidden, disabled } = info;
    const { info: mcp3, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild({ info: { index }, context: { paginatedChildContext }, paginatedChildrenParameters });
    const { info: mcp4, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild({ info, context: { staggeredChildContext }, staggeredChildrenParameters });
    hidden ||= (hideBecausePaginated || hideBecauseStaggered);
    if (hidden)
        disabled = true;
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, pressParameters: { excludeSpace, ...pressParameters2 }, textContentReturn, singleSelectionChildReturn, info: mcp5, props: propsLs, rovingTabIndexChildReturn } = useListNavigationSingleSelectionChild({
        info: { index, disabled, hidden },
        context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        refElementReturn,
        textContentParameters: { hidden, ...textContentParameters },
        rovingTabIndexParameters,
        singleSelectionParameters
    });
    const onPress = useStableCallback((e) => {
        if (singleSelectionParameters.selectionMode == "activation")
            singleSelectionContext.onSelectedIndexChange?.(index, e);
        onPressSync?.(e);
    });
    const { propsStable: pressRefProps, refElementReturn: pressRefElementReturn } = useRefElement({ refElementParameters: {} });
    const { pressReturn, props: pressProps } = usePress({
        refElementReturn: pressRefElementReturn,
        pressParameters: {
            focusSelf,
            ...pressParameters1,
            ...pressParameters2,
            onPressSync: (rovingTabIndexParameters.untabbable || info.disabled || info.hidden) ? null : onPress,
            excludeSpace: useStableCallback(() => { return excludeSpace?.() || false; }),
        }
    });
    const mcp1 = {
        index,
        focusSelf,
        getElement: refElementReturn.getElement,
        getSortValue: sortableChildParameters.getSortValue,
        disabled,
        hidden,
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
    const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsLs, paginationProps, staggeredProps);
    return {
        props,
        pressReturn,
        textContentReturn,
        refElementReturn,
        singleSelectionChildReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        paginatedChildReturn,
        staggeredChildReturn,
        rovingTabIndexChildReturn,
        propsPressStable: useMergedProps(pressProps, pressRefProps)
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
            onSelectedIndexChange: useStableCallback((a, e) => onSelectedIndexChange?.(a, e)),
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