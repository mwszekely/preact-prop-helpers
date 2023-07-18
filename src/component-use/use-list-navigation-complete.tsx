import { useListNavigationSingleSelectionSortable, UseListNavigationSingleSelectionSortableChildInfo, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType } from "../component-detail/keyboard-navigation/use-list-navigation-single-selection-sortable.js";
import { useListNavigationSingleSelectionChild } from "../component-detail/keyboard-navigation/use-list-navigation-single-selection.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { MakeSingleSelectionDeclarativeParameters, UseSingleSelectionContext, useSingleSelectionDeclarative, UseSingleSelectionParameters } from "../component-detail/keyboard-navigation/use-single-selection.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { usePaginatedChild, UsePaginatedChildContext, usePaginatedChildren, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturn } from "../component-detail/use-paginated-children.js";
import { useStaggeredChild, UseStaggeredChildContext, useStaggeredChildren, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturn } from "../component-detail/use-staggered-children.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { ManagedChildren, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { enhanceEvent } from "../util/event.js";
import { TargetedOmit, useCallback } from "../util/lib.js";
import { ElementProps, ExtendMerge, OmitStrong } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { PressEventReason, UsePressParameters } from "./use-press.js";

export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends ExtendMerge<UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, ExtendMerge<UsePaginatedChildrenInfo<ChildElement>, UseStaggeredChildrenInfo<ChildElement>>> { }

export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters" | "sortableChildrenParameters">,
    Pick<UsePaginatedChildrenParameters<ParentElement, ChildElement, M>, "paginatedChildrenParameters">,
    Pick<UseStaggeredChildrenParameters<ChildElement, M>, "staggeredChildrenParameters">,
    TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValid">,
    TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "typeaheadNavigationParameters", "isValid">,
    TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "rearrangeableChildrenParameters", "onRearranged">,
    TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex" | "untabbableBehavior"> { }

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">,
    Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">,
    Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">,
    Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusReturn">,
    OmitStrong<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "propsStableParentOrChild" | "propsParent" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;
}


export interface CompleteListNavigationContext<_ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseManagedChildrenContext<M>,
    UsePaginatedChildContext,
    UseStaggeredChildContext,
    UseChildrenHaveFocusContext<ChildElement>,
    UseTypeaheadNavigationContext,
    UseSingleSelectionContext,
    RovingTabIndexChildContext { }


export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends 
Pick<UseListNavigationSingleSelectionSortableChildParameters<ChildElement, M>, "textContentParameters"> {
    context: CompleteListNavigationContext<any, ChildElement, M>;
    info: Omit<M, Exclude<keyof UseCompleteListNavigationChildInfo<ChildElement>, "getSortValue" | "index" | "focusSelf" | "untabbable" | "unselectable">>;
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>
    extends Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement, M>, "textContentReturn" | "rovingTabIndexChildReturn" | "singleSelectionChildReturn">, OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable"> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];

    /**
     * These props should be passed to whichever element is tabbable. 
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended.
     * 
     * @see propsChild
     */
    propsTabbable: ElementProps<any>;

    /**
     * These props should be passed to whichever element is considered the child element of the list (e.g. the `li` in an `ol`). 
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended. 
     * But it may also be different, e.g. if that `li` contains an `input`.
     * 
     * @see propsTabbable
     */
    propsChild: ElementProps<any>;

    /**
     * This hook does not include `usePress`, so when you call it for whatever element is responsible for selecting this child, pass it these parameters.
     */
    pressParameters: Pick<UsePressParameters<any>["pressParameters"], "onPressSync" | "excludeSpace">;
    paginatedChildReturn: UsePaginatedChildReturn<ChildElement>["paginatedChildReturn"];
    staggeredChildReturn: UseStaggeredChildReturn<ChildElement>["staggeredChildReturn"];
}


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
    monitorCallCount(useCompleteListNavigation);

    const { initiallySelectedIndex } = singleSelectionParameters;
    const getChildren: () => ManagedChildren<M> = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const getHighestIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);

    const { propsStable: propsRef, refElementReturn } = useRefElement<ParentElement>({})

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters: { onChildrenMountChange, ...mcp1 },
        context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        propsParent,
        propsStableParentOrChild
    } = useListNavigationSingleSelectionSortable<ParentElement, ChildElement, M>({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getLowestIndex, getHighestIndex, isValid, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { initiallyTabbedIndex: initiallySelectedIndex, untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax) }),
            ...rearrangeableChildrenParameters
        },
        refElementReturn,
        sortableChildrenParameters,
        ...completeListNavigationParameters,
    });

    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: mcp2, context: { paginatedChildContext } }: UsePaginatedChildrenReturnType = usePaginatedChildren<ParentElement, ChildElement, M>({ refElementReturn, managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, rovingTabIndexReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler: rearrangeableChildrenReturn.indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn }: UseStaggeredChildrenReturnType = useStaggeredChildren({ managedChildrenReturn: { getChildren: useStableCallback((): ManagedChildren<M> => managedChildrenReturn.getChildren()) }, staggeredChildrenParameters });

    const mcr: UseManagedChildrenReturnType<M> = useManagedChildren<M>({
        managedChildrenParameters: {
            onChildrenMountChange,
            ...mcp2,
            ...mcp1
        }
    });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr;
    const context = useMemoObject<CompleteListNavigationContext<ParentElement, ChildElement, M>>(useMemoObject({
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
    }
}

export function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    info: { index, focusSelf, unselectable, untabbable, getSortValue, ...info },  // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters,
    context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, typeaheadNavigationContext },
    ...void1
}: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M> {
    monitorCallCount(useCompleteListNavigationChild);
    assertEmptyObject(void1);
    //const { onPressSync, ...pressParameters1 } = (pressParameters ?? {});

    const { info: mcp3, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild<ChildElement>({ info: { index }, context: { paginatedChildContext } })
    const { info: mcp4, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild<ChildElement>({ info: { index }, context: { staggeredChildContext } });

    untabbable ||= (hideBecausePaginated || hideBecauseStaggered);
    unselectable ||= (hideBecausePaginated || hideBecauseStaggered);

    if (untabbable)
        unselectable = true;

    const { refElementReturn, propsStable } = useRefElement<ChildElement>({ refElementParameters: {} });
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        pressParameters: { excludeSpace, ...pressParameters2 },
        textContentReturn,
        singleSelectionChildReturn,
        info: mcp5,
        rovingTabIndexChildReturn,
        propsChild,
        propsTabbable
    } = useListNavigationSingleSelectionChild<ChildElement, M>({
        info: { index, unselectable, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        refElementReturn,
        textContentParameters
    });
    const onPress = useStableCallback((e: PressEventReason<any>) => {
        if (singleSelectionContext.selectionMode == "activation")
            singleSelectionContext.onSelectedIndexChange?.(enhanceEvent(e, { selectedIndex: index }));
    });
    const onPressSync = (rovingTabIndexContext.untabbable || unselectable || untabbable) ? null : onPress;
    //const { propsStable: pressRefProps, refElementReturn: pressRefElementReturn } = useRefElement<any>({ refElementParameters: {} })


    const mcp1: UseCompleteListNavigationChildInfo<ChildElement> = {
        index,
        focusSelf,
        getElement: refElementReturn.getElement,
        getSortValue,
        unselectable,
        untabbable,
        ...mcp4,
        ...mcp3,
        ...mcp5,
    }

    const { managedChildReturn } = useManagedChild<M>({ context: { managedChildContext }, info: { ...mcp1, ...info } as M });

    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableCallback<NonNullable<typeof ocfic1>>((focused, prev, e) => {
        ocfic1?.(focused, prev, e);
        ocfic2?.(focused, prev, e);
    })
    const { hasCurrentFocusReturn } = useHasCurrentFocus<ChildElement>({ hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, onCurrentFocusedChanged: null }, refElementReturn });


    const props = useMergedProps<ChildElement>(
        propsStable,
        hasCurrentFocusReturn.propsStable,
        propsChild,
        paginationProps,
        staggeredProps
    );

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
    }

}

export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, "singleSelectionParameters" | "singleSelectionReturn">,
    TargetedOmit<UseSingleSelectionParameters<ParentElement, ChildElement, M>, "singleSelectionParameters", "initiallySelectedIndex" | "onSelectedIndexChange"> { }

export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn", "changeSelectedIndex">,
    OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn"> { }

export function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    singleSelectionDeclarativeParameters,
    sortableChildrenParameters,
    staggeredChildrenParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters
}: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M> {

    const ret: UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> = useCompleteListNavigation({
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
