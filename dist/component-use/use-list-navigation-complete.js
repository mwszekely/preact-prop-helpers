import { useCallback } from "preact/hooks";
import { useListNavigationSingleSelection, useListNavigationSingleSelectionChild } from "../component-detail/use-list-navigation-single-selection.js";
import { usePaginatedChild, usePaginatedChildren } from "../component-detail/use-paginated-children.js";
import { useSortableChildren } from "../component-detail/use-sortable-children.js";
import { useStaggeredChild, useStaggeredChildren } from "../component-detail/use-staggered-children.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
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
    //type M = UseListNavigationSingleSelectionChildInfo<ChildElement>;
    const { initiallySelectedIndex } = singleSelectionParameters;
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.hidden)
            return false;
        return true;
    }, []);
    const { rearrangeableChildrenReturn: { indexDemangler, indexMangler, ...rearrangeableChildrenReturn }, sortableChildrenReturn } = useSortableChildren({
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); }),
            ...rearrangeableChildrenParameters
        },
        sortableChildrenParameters
    });
    const { childrenHaveFocusParameters, managedChildrenParameters, rovingTabIndexChildContext, typeaheadNavigationChildContext, singleSelectionContext, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, typeaheadNavigationReturn } = useListNavigationSingleSelection({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getHighestIndex: getHighestChildIndex, isValid, indexDemangler, indexMangler, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { initiallyTabbedIndex: initiallySelectedIndex, ...rovingTabIndexParameters },
        singleSelectionParameters,
        ...completeListNavigationParameters,
    });
    //const { linearNavigationReturn, typeaheadNavigationReturn } = listNavigationSingleSelectionSortableReturn;
    //const [childCount, setChildCount] = useState(0);
    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({
        managedChildrenParameters: {
            onChildCountChange: useStableCallback((c) => { onChildCountChange(c); }),
            ...managedChildrenParameters
        }
    });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildCountChange }, context: { paginatedChildContext } } = usePaginatedChildren({ managedChildrenReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters });
    const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useStableObject({
        singleSelectionContext,
        managedChildContext,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        childrenHaveFocusChildContext,
        paginatedChildContext,
        staggeredChildContext
    });
    return {
        context,
        props,
        managedChildrenReturn,
        rearrangeableChildrenReturn: {
            indexDemangler,
            indexMangler,
            ...rearrangeableChildrenReturn
        },
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
export function useCompleteListNavigationChild({ 
//managedChildParameters: { hidden, disabled, index, getSortValue },
completeListNavigationChildParameters: { focusSelf, ...completeListNavigationChildParameters }, singleSelectionChildParameters, rovingTabIndexChildParameters: { hidden }, managedChildParameters, textContentParameters, context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext, paginatedChildContext, staggeredChildContext }, 
//pressParameters: { onPressSync: ops1, ...pressParameters },
sortableChildParameters: { getSortValue }, ..._void }) {
    const { index } = managedChildParameters;
    const { managedChildParameters: { setChildCountIfPaginated, setPaginationVisible, setParentIsPaginated }, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild({ managedChildParameters: { index }, context: { paginatedChildContext } });
    const { managedChildParameters: { setParentIsStaggered, setStaggeredVisible }, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild({ managedChildParameters, context: { staggeredChildContext } });
    //let { hidden } = rovingTabIndexChildParameters;
    hidden ||= (hideBecausePaginated || hideBecauseStaggered);
    let { disabled } = singleSelectionChildParameters;
    if (hidden)
        disabled = true;
    const { refElementReturn } = useRefElement({ refElementParameters: {} });
    const { getElement } = refElementReturn;
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, pressParameters, rovingTabIndexChildReturn, singleSelectionChildReturn, managedChildParameters: { setLocalSelected } } = useListNavigationSingleSelectionChild({
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden },
        singleSelectionChildParameters: { ...singleSelectionChildParameters },
        rovingTabIndexChildContext,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        refElementReturn,
        textContentParameters: { hidden, ...textContentParameters }
    });
    const { getTabbable, setTabbable, tabbable } = rovingTabIndexChildReturn;
    /* const { pressReturn } = usePress<ChildElement>({
         pressParameters: {
             ...p1,
             ...pressParameters,
             onPressSync: disabled ? null : ((e) => {
                 ops2?.(e);
                 ops1?.(e);
             })
         }, refElementReturn
     });*/
    const { getSelected, selected } = singleSelectionChildReturn;
    const mcp1 = {
        disabled,
        focusSelf,
        getElement,
        getSelected,
        getTabbable,
        hidden,
        index,
        selected,
        setLocalSelected,
        setTabbable,
        tabbable,
        getSortValue,
        setChildCountIfPaginated,
        setPaginationVisible,
        setParentIsPaginated,
        setParentIsStaggered,
        setStaggeredVisible
    };
    const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, managedChildParameters: { index } }, { ...mcp1, ...completeListNavigationChildParameters });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ childrenHaveFocusChildContext });
    const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, e) => {
        ocfic1?.(focused, prev, e);
        ocfic2?.(focused, prev, e);
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, onCurrentFocusedChanged: null }, refElementReturn });
    const props = useMergedProps(refElementReturn.propsStable, hasCurrentFocusReturn.propsStable, rovingTabIndexChildReturn.propsUnstable, singleSelectionChildReturn.propsUnstable, paginationProps, staggeredProps);
    return {
        props,
        pressParameters,
        refElementReturn,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        paginatedChildReturn,
        staggeredChildReturn
    };
}
/*
function foo<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>(p: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>) {
    const { singleSelectionReturn } = useCompleteListNavigation<ParentElement, ChildElement, M>(p);
    const selectedIndex = 0;
    useSingleSelectionDeclarative({ singleSelectionReturn, singleSelectionDeclarativeParameters: { selectedIndex } })
}*/
//# sourceMappingURL=use-list-navigation-complete.js.map