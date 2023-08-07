import { useListNavigationSelectionSortable, useListNavigationSelectionSortableChild, UseListNavigationSelectionSortableChildInfo, UseListNavigationSelectionSortableChildInfoKeysParameters, UseListNavigationSelectionSortableChildParameters, UseListNavigationSelectionSortableChildReturnType, UseListNavigationSelectionSortableParameters, UseListNavigationSelectionSortableReturnType } from "../component-detail/keyboard-navigation/use-list-navigation-selection-sortable.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { usePaginatedChild, UsePaginatedChildContext, usePaginatedChildren, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturnType } from "../component-detail/use-paginated-children.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, useSelectionChildDeclarative, UseSelectionChildParameters, UseSelectionContext, useSelectionDeclarative, UseSelectionParameters } from "../component-detail/use-selection.js";
import { useStaggeredChild, UseStaggeredChildContext, useStaggeredChildren, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturnType } from "../component-detail/use-staggered-children.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement, UseRefElementParameters, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus, UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, UseGenericChildParameters, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { TargetedOmit, TargetedPick, useCallback } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { UsePressParameters } from "./use-press.js";

export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends
    UseListNavigationSelectionSortableChildInfo<ChildElement>,
    UsePaginatedChildrenInfo<ChildElement>,
    UseStaggeredChildrenInfo,
    ManagedChildInfo<number> { }

export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters" | "multiSelectionParameters" | "sortableChildrenParameters">,
    Pick<UsePaginatedChildrenParameters<ParentElement, ChildElement>, "paginatedChildrenParameters">,
    Pick<UseStaggeredChildrenParameters, "staggeredChildrenParameters">,
    Pick<UseRefElementParameters<ParentElement>, "refElementParameters">,
    TargetedOmit<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    TargetedOmit<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "rearrangeableChildrenParameters", "onRearranged">,
    TargetedOmit<UseListNavigationSelectionSortableParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters", "untabbableBehavior"> { }

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">,
    Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">,
    Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">,
    Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusReturn">,
    OmitStrong<UseListNavigationSelectionSortableReturnType<ParentElement, ChildElement, M>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    context: CompleteListNavigationContext<ChildElement, M>;
}


export interface CompleteListNavigationContext<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseManagedChildrenContext<M>,
    UsePaginatedChildContext,
    UseStaggeredChildContext,
    UseChildrenHaveFocusContext<ChildElement>,
    UseTypeaheadNavigationContext,
    UseSelectionContext,
    RovingTabIndexChildContext { }


export type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> =
    // All types in the user-supplied info type that aren't in the base type (since we handle it) 
    Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> |
    // except for these extra types! Because the user supplies them.
    // TODO: Where exactly do getSortValue and focusSelf come from? (should be typed)
    // Is it because useSortableChildren doesn't have a child version? But then why focusSelf from rovingTabIndex?
    UseListNavigationSelectionSortableChildInfoKeysParameters | "getSortValue" | "focusSelf";



export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseGenericChildParameters<CompleteListNavigationContext<ChildElement, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>,
    OmitStrong<UseListNavigationSelectionSortableChildParameters<ChildElement, M>, "context" | "info" | "refElementReturn">,
    Pick<UseRefElementParameters<ChildElement>, "refElementParameters">,
    Pick<UseHasCurrentFocusParameters<ChildElement>, "hasCurrentFocusParameters"> {
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationSelectionSortableChildReturnType<ChildElement, M>, "info" | "propsChild" | "propsTabbable" | "hasCurrentFocusParameters" | "pressParameters">,
    OmitStrong<UsePaginatedChildReturnType<ChildElement>, "info" | "props">,
    OmitStrong<UseStaggeredChildReturnType<ChildElement>, "info" | "props">,
    OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable">,
    UseHasCurrentFocusReturnType<ChildElement>,
    UseManagedChildReturnType<M>,
    TargetedPick<UsePressParameters<any>, "pressParameters", "onPressSync" | "excludeSpace"> {

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
}


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
export function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    refElementParameters,
    ...void1
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
    monitorCallCount(useCompleteListNavigation);

    const { initiallySingleSelectedIndex } = singleSelectionParameters;
    const getChildren: () => ManagedChildren<M> = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const getHighestIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);

    const { propsStable: propsRef, refElementReturn } = useRefElement<ParentElement>({ refElementParameters })

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters: { onChildrenMountChange, ...mcp1 },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        typeaheadNavigationReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        props,

        ...void2
    } = useListNavigationSelectionSortable<ParentElement, ChildElement, M>({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        multiSelectionParameters,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax) }),
            ...rearrangeableChildrenParameters
        },
        paginatedChildrenParameters,
        refElementReturn,
        sortableChildrenParameters,
        childrenHaveFocusReturn: { getAnyFocused: useStableCallback((): boolean => childrenHaveFocusReturn.getAnyFocused()) }
    });

    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: mcp2, context: { paginatedChildContext } }: UsePaginatedChildrenReturnType = usePaginatedChildren<ParentElement, ChildElement, M>({ refElementReturn, managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, rovingTabIndexReturn, paginatedChildrenParameters, rearrangeableChildrenReturn: { indexDemangler: rearrangeableChildrenReturn.indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn }: UseStaggeredChildrenReturnType = useStaggeredChildren({ managedChildrenReturn: { getChildren: useStableCallback((): ManagedChildren<M> => managedChildrenReturn.getChildren()) }, staggeredChildrenParameters });

    const mcr: UseManagedChildrenReturnType<M> = useManagedChildren<M>({
        managedChildrenParameters: {
            onChildrenMountChange,
            ...mcp2,
            ...mcp1
        }
    });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr;
    const context = useMemoObject<CompleteListNavigationContext<ChildElement, M>>(useMemoObject({
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
    }
}

/**
 * 
 * @compositeParams
 */
export function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    info: { index, focusSelf, untabbable, getSortValue, ...customUserInfo },  // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters,
    refElementParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 },
    ...void1
}: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M> {
    monitorCallCount(useCompleteListNavigationChild);


    const { info: infoFromPaginated, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild<ChildElement>({ info: { index }, context: { paginatedChildContext } })
    const { info: infoFromStaggered, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild<ChildElement>({ info: { index }, context: { staggeredChildContext } });

    // TODO: uPC and pSC can't exactly return `{ info: { untabbable: false } }`, or can they...? 
    // (Really it's more about *should* they -- I don't like this hook doing more than just calling sub-hooks, but where else does this logic take place if not here?)
    untabbable ||= (hideBecausePaginated || hideBecauseStaggered);

    const { refElementReturn, propsStable, ...void6 } = useRefElement<ChildElement>({ refElementParameters });
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 },
        pressParameters: { excludeSpace, onPressSync, ...void2 },
        textContentReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        info: infoFromListNav,
        rovingTabIndexChildReturn,
        propsChild,
        propsTabbable,
        ...void4
    } = useListNavigationSelectionSortableChild<ChildElement>({
        info: { index, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        singleSelectionChildParameters,
        multiSelectionChildParameters,
        refElementReturn,
        textContentParameters
    });


    const allStandardInfo: UseCompleteListNavigationChildInfo<ChildElement> = {
        index,
        focusSelf,
        getElement: refElementReturn.getElement,
        getSortValue,
        untabbable,
        ...infoFromStaggered,
        ...infoFromPaginated,
        ...infoFromListNav,
    }

    const { managedChildReturn } = useManagedChild<M>({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } as M });

    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableCallback<NonNullable<typeof ocfic1>>((focused, prev, e) => {
        ocfic1?.(focused, prev, e);
        ocfic2?.(focused, prev, e);
        ocfic3?.(focused, prev, e);
    })
    const { hasCurrentFocusReturn } = useHasCurrentFocus<ChildElement>({
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged,
            onCurrentFocusedChanged
        },
        refElementReturn
    });


    const props = useMergedProps<ChildElement>(
        propsStable,
        hasCurrentFocusReturn.propsStable,
        propsChild,
        paginationProps,
        staggeredProps
    );

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
    }

}

export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, "singleSelectionParameters" | "singleSelectionReturn">,
    TargetedOmit<UseSelectionParameters<ParentElement, ChildElement, M>, "singleSelectionParameters", "initiallySingleSelectedIndex" | "onSingleSelectedIndexChange"> { }

export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn", "changeSingleSelectedIndex">,
    TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "multiSelectionReturn", never>,
    OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn" | "multiSelectionReturn"> { }


export interface UseCompleteListNavigationChildDeclarativeParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<MakeSelectionDeclarativeChildParameters<UseCompleteListNavigationChildParameters<ChildElement, M>>, "multiSelectionChildParameters" | "multiSelectionChildReturn">,
    TargetedOmit<UseSelectionChildParameters<ChildElement, M>, "multiSelectionChildParameters", "initiallyMultiSelected" | "onMultiSelectChange"> { }

export interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, "singleSelectionChildReturn", never>,
    TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, "multiSelectionChildReturn", "changeMultiSelected">,
    OmitStrong<UseCompleteListNavigationChildReturnType<ChildElement, M>, "singleSelectionChildReturn" | "multiSelectionChildReturn"> { }

export function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    singleSelectionParameters,
    singleSelectionDeclarativeParameters,
    ...rest
}: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M> {

    const ret: UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> = useCompleteListNavigation({
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


export function useCompleteListNavigationChildDeclarative<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    multiSelectionChildParameters,
    multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange },
    ...rest
}: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M> {

    const ret: UseCompleteListNavigationChildReturnType<ChildElement, M> = useCompleteListNavigationChild({
        multiSelectionChildParameters: {
            initiallyMultiSelected: multiSelected,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange!(e); }),
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