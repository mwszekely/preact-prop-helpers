import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { UseRearrangeableChildrenReturnType, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelectionChildParameters, UseSelectionContext, UseSelectionParameters, useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType, useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseStaggeredChildrenReturnType } from "../index.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
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
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters", "untabbableBehavior"> { }

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseRefElementReturnType<ParentElement>, "propsStable">,
    TargetedOmit<UseProcessedChildrenReturnType<any, any>, "rearrangeableChildrenReturn", "indexDemangler" | "indexMangler" | "children">,
    Pick<UseProcessedChildrenReturnType<any, any>, never>,
    Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">,
    Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusReturn">,
    OmitStrong<UseListNavigationSelectionReturnType<ParentElement, ChildElement>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    contextChildren: CompleteListNavigationContext<ChildElement, M>;
    contextProcessing: UseProcessedChildrenContext;
}


export interface CompleteListNavigationContext<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseChildrenHaveFocusContext<ChildElement>,
    UseTypeaheadNavigationContext,
    UseSelectionContext,
    UseManagedChildrenContext<M>,
    RovingTabIndexChildContext {
}


export interface UseCompleteListNavigationChildrenParameters<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends
    OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, M>, "refElementReturn"> {
}

export interface UseCompleteListNavigationChildrenReturnType<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends
    OmitStrong<UseRearrangeableChildrenReturnType<M>, never>,
    OmitStrong<UsePaginatedChildrenReturnType, "context">,
    OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
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
    Pick<UseHasCurrentFocusParameters<ChildElement>, "hasCurrentFocusParameters"> {
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationSelectionChildReturnType<ChildElement, M>, "info" | "propsChild" | "propsTabbable" | "hasCurrentFocusParameters" | "pressParameters">,
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
export const useCompleteListNavigation = monitored(function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    //staggeredChildrenParameters,
    refElementParameters,
    ...void1
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
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

    const contextChildren = useMemoObject<CompleteListNavigationContext<ChildElement, M>>({
        childrenHaveFocusChildContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext,
        managedChildContext: managedChildRTIContext,
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });

    return {
        contextChildren,
        contextProcessing: useMemoObject({
            processedChildrenContext,
            ...contextProcessing
        }),
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
export const useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>>({
    context,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters,
    managedChildrenParameters
}: UseCompleteListNavigationChildrenParameters<TabbableChildElement, M>): UseCompleteListNavigationChildrenReturnType<TabbableChildElement, M> {
    const {
        context: contextRPS,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
    } = useProcessedChildren<TabbableChildElement, M>({
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        staggeredChildrenParameters,
        managedChildrenParameters,
        refElementReturn: context.processedChildrenContext,
        context,
    });

    return {
        context: contextRPS,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn
    }
})

/**
 * 
 * @compositeParams
 */
export const useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    info: { index, focusSelf, untabbable, ...customUserInfo },  // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters,
    refElementParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 },
    ...void1
}: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M> {
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
    } = useListNavigationSelectionChild<ChildElement>({
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
        untabbable,
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
        propsChild
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