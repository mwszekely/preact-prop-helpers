import { h } from "preact";
import { useCallback } from "preact/hooks";
import { useListNavigationSingleSelectionSortable, UseListNavigationSingleSelectionSortableChildInfo, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType } from "../component-detail/use-list-navigation-single-selection-sortable.js";
import { useListNavigationSingleSelectionChild } from "../component-detail/use-list-navigation-single-selection.js";
import { usePaginatedChild, UsePaginatedChildContext, usePaginatedChildren, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturn } from "../component-detail/use-paginated-children.js";
import { UseSortableChildInfo } from "../component-detail/use-sortable-children.js";
import { useStaggeredChild, UseStaggeredChildContext, useStaggeredChildren, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturn } from "../component-detail/use-staggered-children.js";
import { UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationContext } from "../component-detail/use-typeahead-navigation.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusChildParameters, UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { ManagedChildren, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { OmitStrong, PickTargeted } from "../util/types.js";
import { UseSingleSelectionContext } from "../component-detail/use-single-selection.js";
import { RovingTabIndexChildContext } from "../component-detail/use-roving-tabindex.js";

export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, UsePaginatedChildrenInfo<ChildElement>, UseStaggeredChildrenInfo<ChildElement> { }

export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters">,
    PickTargeted<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getHighestIndex" | "isValid"> {
    linearNavigationParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["linearNavigationParameters"], "getHighestIndex" | "isValid">;
    typeaheadNavigationParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["typeaheadNavigationParameters"], "isValid">;
    rearrangeableChildrenParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rearrangeableChildrenParameters"], "onRearranged">;
    sortableChildrenParameters: UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["sortableChildrenParameters"];
    rovingTabIndexParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    paginatedChildrenParameters: Pick<UsePaginatedChildrenParameters<ChildElement, M>, "paginatedChildrenParameters">["paginatedChildrenParameters"];
    staggeredChildrenParameters: Pick<UseStaggeredChildrenParameters<ChildElement, M>, "staggeredChildrenParameters">["staggeredChildrenParameters"];
}

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">,
    Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">,
    OmitStrong<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "context" | "propsStable" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    propsStable: h.JSX.HTMLAttributes<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;

    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<ChildElement>["childrenHaveFocusReturn"];
}


export interface CompleteListNavigationContext<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseManagedChildrenContext<M>,
    UsePaginatedChildContext,
    UseStaggeredChildContext,
    UseChildrenHaveFocusContext<ChildElement>,
    UseTypeaheadNavigationContext,
    UseSingleSelectionContext<ChildElement>,
    RovingTabIndexChildContext<ChildElement>
    //Pick<UseTypeaheadNavigationChildParameters<ChildElement>, "typeaheadNavigationChildContext">,
    //Pick<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext"> 
    {}

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
export function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    ...completeListNavigationParameters
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
    const { initiallySelectedIndex } = singleSelectionParameters;
    const getChildren: () => ManagedChildren<M> = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.hidden)
            return false;
        return true;
    }, []);

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        propsStable
    } = useListNavigationSingleSelectionSortable<ParentElement, ChildElement, M>({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getHighestIndex: getHighestChildIndex, isValid, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { initiallyTabbedIndex: initiallySelectedIndex, ...rovingTabIndexParameters },
        singleSelectionParameters,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax) }),
            ...rearrangeableChildrenParameters
        },
        sortableChildrenParameters,
        ...completeListNavigationParameters,
    });

    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<M>({
        managedChildrenParameters: {
            onChildCountChange: useStableCallback((c) => { onChildCountChange(c) }),
            ...managedChildrenParameters
        }
    });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildCountChange }, context: { paginatedChildContext } } = usePaginatedChildren<ChildElement, M>({ managedChildrenReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler: rearrangeableChildrenReturn.indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters });
    const context = useStableObject<CompleteListNavigationContext<ParentElement, ChildElement, M>>(useStableObject({
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
        propsStable,

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
    }
}

export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>, ExtraOmits extends keyof M> {
    context: CompleteListNavigationContext<any, ChildElement, M>;
    singleSelectionChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["singleSelectionChildParameters"];
    textContentParameters: OmitStrong<UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["textContentParameters"], "hidden">;
    completeListNavigationChildParameters: OmitStrong<M, keyof UseCompleteListNavigationChildInfo<ChildElement> | ExtraOmits> & Pick<M, "focusSelf">;
    rovingTabIndexChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["rovingTabIndexChildParameters"];
    managedChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["managedChildParameters"];
    sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
    //singleSelectionChildParameters: Pick<UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["singleSelectionChildParameters"], "disabled">;
    //managedChildParameters: OmitStrong<UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, "getElement" | "getSelected" | "setSelected" | "getTabbable" | "setTabbable" | "tabbable" | "selected" | "focusSelf">;
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>
    extends Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement>, "singleSelectionChildReturn" | "rovingTabIndexChildReturn" | "pressParameters">, OmitStrong<UseRefElementReturnType<ChildElement> , "propsStable"> {
    //pressReturn: UsePressReturnType<ChildElement>["pressReturn"];
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
    props: h.JSX.HTMLAttributes<ChildElement>;
    paginatedChildReturn: UsePaginatedChildReturn<ChildElement>["paginatedChildReturn"];
    staggeredChildReturn: UseStaggeredChildReturn<ChildElement>["staggeredChildReturn"];
}

export function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>, ExtraOmits extends Exclude<keyof M, keyof UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>>({
    //managedChildParameters: { hidden, disabled, index, getSortValue },
    completeListNavigationChildParameters: { focusSelf, ...completeListNavigationChildParameters },
    singleSelectionChildParameters,
    rovingTabIndexChildParameters: { hidden },
    managedChildParameters,
    textContentParameters,
    context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, typeaheadNavigationContext },
    sortableChildParameters: { getSortValue },
    ..._void
}: UseCompleteListNavigationChildParameters<ChildElement, M, ExtraOmits>): UseCompleteListNavigationChildReturnType<ChildElement, M> {
    const { index } = managedChildParameters;
    const { managedChildParameters: { setChildCountIfPaginated, setPaginationVisible, setParentIsPaginated }, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild<ChildElement>({ managedChildParameters: { index }, context: { paginatedChildContext } })
    const { managedChildParameters: { setParentIsStaggered, setStaggeredVisible }, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild<ChildElement>({ managedChildParameters, context: { staggeredChildContext } });

    hidden ||= (hideBecausePaginated || hideBecauseStaggered);

    let { disabled } = singleSelectionChildParameters;
    if (hidden)
        disabled = true;

    const { refElementReturn, propsStable } = useRefElement<ChildElement>({ refElementParameters: {} });
    const { getElement } = refElementReturn;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        pressParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        managedChildParameters: { setLocalSelected },
        props: propsLs
    } = useListNavigationSingleSelectionChild<ChildElement>({
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden },
        singleSelectionChildParameters: { ...singleSelectionChildParameters },
        context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        refElementReturn,
        textContentParameters: { hidden, ...textContentParameters }
    });
    const { getTabbable, setTabbable, tabbable } = rovingTabIndexChildReturn;

    const { getSelected, selected } = singleSelectionChildReturn;

    const mcp1: UseCompleteListNavigationChildInfo<ChildElement> = {
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
    }

    const { managedChildReturn } = useManagedChild<M>({ context: { managedChildContext }, managedChildParameters: { index } }, { ...mcp1, ...completeListNavigationChildParameters } as M);

    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableCallback<NonNullable<typeof ocfic1>>((focused, prev, e) => {
        ocfic1?.(focused, prev, e);
        ocfic2?.(focused, prev, e);
    })
    const { hasCurrentFocusReturn } = useHasCurrentFocus<ChildElement>({ hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, onCurrentFocusedChanged: null }, refElementReturn });


    const props = useMergedProps<ChildElement>(
        propsStable,
        hasCurrentFocusReturn.propsStable,
        propsLs,
        paginationProps,
        staggeredProps
    );

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
    }

}
