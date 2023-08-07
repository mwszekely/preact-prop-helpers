import { useListNavigationSelectionSortable, useListNavigationSelectionSortableChild } from "../component-detail/keyboard-navigation/use-list-navigation-selection-sortable.js";
import { usePaginatedChild, usePaginatedChildren } from "../component-detail/use-paginated-children.js";
import { useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/use-selection.js";
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
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 * @hasChild {@link useCompleteListNavigationChild}
 *
 * @compositeParams
 */
export function useCompleteListNavigation({ linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, staggeredChildrenParameters, refElementParameters, ...void1 }) {
    monitorCallCount(useCompleteListNavigation);
    const { initiallySingleSelectedIndex } = singleSelectionParameters;
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { propsStable: propsRef, refElementReturn } = useRefElement({ refElementParameters });
    const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...mcp1 }, context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, rearrangeableChildrenReturn, sortableChildrenReturn, props, ...void2 } = useListNavigationSelectionSortable({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        multiSelectionParameters,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); }),
            ...rearrangeableChildrenParameters
        },
        paginatedChildrenParameters,
        refElementReturn,
        sortableChildrenParameters,
        childrenHaveFocusReturn: { getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused()) }
    });
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: mcp2, context: { paginatedChildContext } } = usePaginatedChildren({ refElementReturn, managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, rovingTabIndexReturn, paginatedChildrenParameters, rearrangeableChildrenReturn: { indexDemangler: rearrangeableChildrenReturn.indexDemangler } });
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
        multiSelectionContext,
        staggeredChildContext,
        typeaheadNavigationContext,
    }));
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        context,
        props: useMergedProps(props, propsRef),
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        sortableChildrenReturn,
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn
    };
}
/**
 *
 * @compositeParams
 */
export function useCompleteListNavigationChild({ info: { index, focusSelf, untabbable, getSortValue, ...customUserInfo }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
textContentParameters, refElementParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 }, singleSelectionChildParameters, multiSelectionChildParameters, context: { managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 }, ...void1 }) {
    monitorCallCount(useCompleteListNavigationChild);
    const { info: infoFromPaginated, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild({ info: { index }, context: { paginatedChildContext } });
    const { info: infoFromStaggered, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild({ info: { index }, context: { staggeredChildContext } });
    // TODO: uPC and pSC can't exactly return `{ info: { untabbable: false } }`, or can they...? 
    // (Really it's more about *should* they -- I don't like this hook doing more than just calling sub-hooks, but where else does this logic take place if not here?)
    untabbable ||= (hideBecausePaginated || hideBecauseStaggered);
    const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, pressParameters: { excludeSpace, onPressSync, ...void2 }, textContentReturn, singleSelectionChildReturn, multiSelectionChildReturn, info: infoFromListNav, rovingTabIndexChildReturn, propsChild, propsTabbable, ...void4 } = useListNavigationSelectionSortableChild({
        info: { index, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        singleSelectionChildParameters,
        multiSelectionChildParameters,
        refElementReturn,
        textContentParameters
    });
    const allStandardInfo = {
        index,
        focusSelf,
        getElement: refElementReturn.getElement,
        getSortValue,
        untabbable,
        ...infoFromStaggered,
        ...infoFromPaginated,
        ...infoFromListNav,
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, e) => {
        ocfic1?.(focused, prev, e);
        ocfic2?.(focused, prev, e);
        ocfic3?.(focused, prev, e);
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged,
            onCurrentFocusedChanged
        },
        refElementReturn
    });
    const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild, paginationProps, staggeredProps);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
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
        multiSelectionChildReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        paginatedChildReturn,
        staggeredChildReturn,
        rovingTabIndexChildReturn
    };
}
export function useCompleteListNavigationDeclarative({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }) {
    const ret = useCompleteListNavigation({
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
            // Needs to be a (stable) callback because of declaration order
            onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...rest
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
}
export function useCompleteListNavigationChildDeclarative({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, ...rest }) {
    const ret = useCompleteListNavigationChild({
        multiSelectionChildParameters: {
            initiallyMultiSelected: multiSelected,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange(e); }),
            ...multiSelectionChildParameters
        },
        ...rest
    });
    const { multiSelectionChildParameters: { onMultiSelectChange }, info, ...void2 } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected },
        multiSelectionChildReturn: ret.multiSelectionChildReturn
    });
    const { multiSelectionChildReturn, ...ret2 } = ret;
    assertEmptyObject(void2);
    return { ...ret2, multiSelectionChildReturn };
}
//# sourceMappingURL=use-list-navigation-complete.js.map