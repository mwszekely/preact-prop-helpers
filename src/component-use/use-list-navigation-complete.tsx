import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildParameters, UseProcessedChildReturnType, UseProcessedChildrenContext, UseProcessedChildrenContextSelf, UseProcessedChildrenParameters, UseProcessedChildrenReturnType, useProcessedChild, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { UseRearrangeableChildrenParameters, UseRearrangeableChildrenReturnType, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenReturnType } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelectionChildParameters, UseSelectionContext, UseSelectionParameters, useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType, useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseTextContentParameters, UseTextContentReturnType, useTextContent } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { TargetedOmit, TargetedPick, useCallback } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UsePressParameters } from "./use-press.js";

export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends
    UseListNavigationSelectionChildInfo<ChildElement>,
    ManagedChildInfo<number> { }

export interface UseCompleteListNavigationChildrenInfo<ChildElement extends Element> extends
    UseProcessedChildInfo<ChildElement>,
    ManagedChildInfo<number> { }

export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "singleSelectionParameters" | "multiSelectionParameters">,
    TargetedOmit<Pick<UsePaginatedChildrenParameters<ChildElement>, "paginatedChildrenParameters">, "paginatedChildrenParameters", "childCount">,
    Pick<UseRefElementParameters<ParentElement>, "refElementParameters">,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters", "untabbableBehavior"> {

    listNavigationCompleteParameters: UseCompleteListNavigationParametersSelf;
}

export interface UseCompleteListNavigationParametersSelf extends Pick<UseRearrangeableChildrenParameters<any>["rearrangeableChildrenParameters"], "getSortValueAt"> { }


export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseRefElementReturnType<ParentElement>, "propsStable">,
    TargetedOmit<UseProcessedChildrenReturnType<any, any>, "rearrangeableChildrenReturn", "indexDemangler" | "indexMangler" | "children">,
    Pick<UseProcessedChildrenReturnType<any, any>, never>,
    Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">,
    Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusReturn">,
    OmitStrong<UseListNavigationSelectionReturnType<ParentElement, ChildElement>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    context: CompleteListNavigationContext<ChildElement, M>;
}


/* Contains information the parent list passes to a) each child, and b) the child processor, if used. */
export interface CompleteListNavigationContext<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseChildrenHaveFocusContext<ChildElement>,
    UseTypeaheadNavigationContext,
    UseSelectionContext,
    UseManagedChildrenContext<M>,
    RovingTabIndexChildContext,
    UseProcessedChildrenContext {
    listNavigationCompleteContext: UseCompleteListNavigationContextSelf;
}
export interface UseCompleteListNavigationContextSelf extends UseCompleteListNavigationParametersSelf { }


export interface UseCompleteListNavigationChildrenParameters<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildInfo<TabbableChildElement>, SM extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends
    OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, SM>, "rearrangeableChildrenParameters">,
    TargetedOmit<UseProcessedChildrenParameters<TabbableChildElement, SM>, "rearrangeableChildrenParameters", "getSortValueAt"> {
    context: CompleteListNavigationContext<TabbableChildElement, M>;
}



export interface UseCompleteListNavigationChildrenReturnType<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends
    OmitStrong<UseRearrangeableChildrenReturnType<M>, never>,
    OmitStrong<UsePaginatedChildrenReturnType, "context">,
    OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseCompleteListNavigationChildrenContext<TabbableChildElement, M>;
}




export type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> =
    // All types in the user-supplied info type that aren't in the base type (since we handle it) 
    Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> |
    // except for these extra types! Because the user supplies them.
    // TODO: Where exactly does focusSelf come from? (should be typed)
    // I feel like this always happens with focusSelf, why.
    UseListNavigationSelectionChildInfoKeysParameters | "focusSelf";



export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseGenericChildParameters<CompleteListNavigationContext<ChildElement, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>,
    OmitStrong<UseListNavigationSelectionChildParameters<ChildElement, M>, "context" | "info" | "refElementReturn">,
    Pick<UseRefElementParameters<ChildElement>, "refElementParameters">,
    Pick<UseTextContentParameters<ChildElement>, "textContentParameters">,
    Pick<UseHasCurrentFocusParameters<ChildElement>, "hasCurrentFocusParameters"> {
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationSelectionChildReturnType<ChildElement, M>, "info" | "propsChild" | "propsTabbable" | "hasCurrentFocusParameters" | "pressParameters" | "textContentParameters">,
    OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable">,
    Pick<UseTextContentReturnType, "textContentReturn">,
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
export const useCompleteListNavigation = /*@__PURE__*/ monitored(function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    //staggeredChildrenParameters,
    refElementParameters,
    listNavigationCompleteParameters: { getSortValueAt },
    ...void1
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
    useEnsureStability("useCompleteListNavigation", getSortValueAt);

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

    const { propsStable: propsRef, refElementReturn } = useRefElement<ParentElement>({ refElementParameters });

    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, indexDemangler, indexMangler, rearrange, reverse, shuffle, sort } = useCreateProcessedChildrenContext();

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters: { onChildrenMountChange, ...mcp1 },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        typeaheadNavigationReturn,
        props,

        ...void2
    } = useListNavigationSelection<ParentElement, ChildElement>({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        multiSelectionParameters,
        paginatedChildrenParameters,
        refElementReturn,
        childrenHaveFocusReturn: { getAnyFocused: useStableCallback((): boolean => childrenHaveFocusReturn.getAnyFocused()) },
        rearrangeableChildrenReturn: { indexDemangler, indexMangler }
    });

    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });

    const mcr: UseManagedChildrenReturnType<M> = useManagedChildren<M>({
        managedChildrenParameters: {
            onChildrenMountChange,
            ...mcp1
        }
    });
    const { context: { managedChildContext: managedChildRTIContext }, managedChildrenReturn } = mcr;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    const { getAnyFocused } = childrenHaveFocusReturn;

    const processedChildrenContext = useMemoObject<UseProcessedChildrenContextSelf>({ getTabbableIndex, setTabbableIndex, getAnyFocused });

    const context = useMemoObject<CompleteListNavigationContext<ChildElement, M>>({
        childrenHaveFocusChildContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext,
        managedChildContext: managedChildRTIContext,
        processedChildrenContext,
        listNavigationCompleteContext: useMemoObject<UseCompleteListNavigationContextSelf>({ getSortValueAt }),
        ...contextProcessing
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);


    return {
        context,
        props: useMergedProps(props, propsRef),
        managedChildrenReturn,
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn,
        refElementReturn,
        rearrangeableChildrenReturn: { reverse, shuffle, rearrange, sort },
    }
});

/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 */
export const useCompleteListNavigationChildren = /*@__PURE__*/ monitored(function useCompleteListNavigationChildren<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildInfo<TabbableChildElement>, RM extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>>({
    context,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters,
    managedChildrenParameters
}: UseCompleteListNavigationChildrenParameters<TabbableChildElement, M, RM>): UseCompleteListNavigationChildrenReturnType<TabbableChildElement, RM> {

    const { listNavigationCompleteContext: { getSortValueAt } } = context;

    const {
        context: contextRPS,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
    } = useProcessedChildren<TabbableChildElement, RM>({
        paginatedChildrenParameters,
        rearrangeableChildrenParameters: {
            getSortValueAt,
            ...rearrangeableChildrenParameters
        },
        staggeredChildrenParameters,
        managedChildrenParameters,
        context,
    });

    return {
        context: contextRPS,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn
    }
})

/* This is the context passed from the child processor to the outer processed child component. Only used for processed children. */
export interface UseCompleteListNavigationChildrenContext<RowElement extends Element, M extends UseCompleteListNavigationChildrenInfo<RowElement>> extends UseProcessedChildContext<RowElement, M> { }

export interface UseCompleteListNavigationChildOuterParameters<RowElement extends Element, RsM extends UseCompleteListNavigationChildrenInfo<RowElement>> extends
    UseProcessedChildParameters<RowElement, RsM>,
    UseRefElementParameters<RowElement> {
    context: UseCompleteListNavigationChildrenContext<RowElement, RsM>;
}

export interface UseCompleteListNavigationChildOuterReturnType<RowElement extends Element, RsM extends UseCompleteListNavigationChildrenInfo<RowElement>> extends
    OmitStrong<UseProcessedChildReturnType<RowElement, RsM>, "refElementParameters">,
    OmitStrong<UseRefElementReturnType<RowElement>, "propsStable"> {
    hide: boolean;
}

export const useCompleteListNavigationChildOuter = /*@__PURE__*/ monitored(function useCompleteListNavigationChildOuter<RowElement extends Element, RsM extends UseCompleteListNavigationChildrenInfo<RowElement>>({
    context,
    info,
    refElementParameters: { onElementChange: oec1, onMount, onUnmount }
}: UseCompleteListNavigationChildOuterParameters<RowElement, RsM>): UseCompleteListNavigationChildOuterReturnType<RowElement, RsM> {

    const {
        propsStable,
        refElementReturn
    } = useRefElement<RowElement>({
        refElementParameters: {
            onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
            onMount,
            onUnmount
        }
    });

    const {
        props,
        ...processedChildReturn
    } = useProcessedChild<RowElement, RsM>({
        context,
        info
    });

    const { refElementParameters: { onElementChange: oec2 } } = processedChildReturn;

    return {
        ...processedChildReturn,
        props: useMergedProps<RowElement>(props, propsStable),

        refElementReturn,
        hide: processedChildReturn.paginatedChildReturn.hideBecausePaginated || processedChildReturn.staggeredChildReturn.hideBecauseStaggered
    }
})

/**
 * 
 * @compositeParams
 */
export const useCompleteListNavigationChild = /*@__PURE__*/ monitored(function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    info: { index, focusSelf, untabbable, ...customUserInfo },  // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters: { getText, onTextContentChange: otcc1, ...void10 },
    refElementParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, processedChildrenContext, rearrangeableChildrenContext, listNavigationCompleteContext, ...void5 },
    ...void1
}: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M> {
    const { refElementReturn, propsStable, ...void6 } = useRefElement<ChildElement>({ refElementParameters });
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 },
        pressParameters: { excludeSpace, onPressSync, ...void2 },
        textContentParameters: { onTextContentChange: otcc2, ...void8 },
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        info: infoFromListNav,
        rovingTabIndexChildReturn,
        propsChild,
        propsTabbable,
        ...void4
    } = useListNavigationSelectionChild<ChildElement>({
        info: { index, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        singleSelectionChildParameters,
        multiSelectionChildParameters,
        refElementReturn
    });
    const { textContentReturn, ...void9 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } })

    const allStandardInfo: UseCompleteListNavigationChildInfo<ChildElement> = {
        index,
        focusSelf,
        getElement: refElementReturn.getElement,
        untabbable,
        ...infoFromListNav,
    }

    const { managedChildReturn } = useManagedChild<M>({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } as M });

    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableMergedCallback(ocfic1, ocfic2, ocfic3);
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
        propsChild
    );

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    assertEmptyObject(void10);

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
        rovingTabIndexChildReturn
    }

});

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
    info: i1,
    ...rest
}: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M> {

    const { multiSelectionChildParameters: { onMultiSelectChange }, info: i2, ...void2 } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected },
        multiSelectionChildReturn: {
            changeMultiSelected: useStableCallback((...args) => { ret.multiSelectionChildReturn.changeMultiSelected(...args); })
        }
    });

    const ret: UseCompleteListNavigationChildReturnType<ChildElement, M> = useCompleteListNavigationChild({
        multiSelectionChildParameters: {
            initiallyMultiSelected: multiSelected,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange!(e); }),
            ...multiSelectionChildParameters
        },
        info: { ...i1, ...i2 },
        ...rest
    });

    const { multiSelectionChildReturn, ...ret2 } = ret;
    assertEmptyObject(void2);
    return { ...ret2, multiSelectionChildReturn };
}