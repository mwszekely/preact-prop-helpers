import { $getHighestIndex, $getLowestIndex, $isValidForLinearNavigation, $linearNavigationParameters, $linearNavigationReturn } from "../component-detail/keyboard-navigation/use-linear-navigation.js";
import { $focusSelfChild, $untabbable, $untabbableBehavior, $getTabbableIndex, RovingTabIndexChildContext, $setTabbableIndex, $rovingTabIndexChildReturn, $rovingTabIndexContext, $rovingTabIndexParameters, $rovingTabIndexReturn } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { $isValidForTypeaheadNavigation, UseTypeaheadNavigationContext, $typeaheadNavigationContext, $typeaheadNavigationParameters, $typeaheadNavigationReturn } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { $childCount, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, $paginatedChildrenParameters, $paginatedChildrenReturn } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType, $processedChildrenContext, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { $children, $indexDemangler, $indexMangler, $rearrange, $reverse, $shuffle, $sort, UseRearrangeableChildrenReturnType, $rearrangeableChildrenParameters, $rearrangeableChildrenReturn, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenReturnType, $staggeredChildrenParameters, $staggeredChildrenReturn } from "../component-detail/processed-children/use-staggered-children.js";
import { $initiallyMultiSelected, $multiSelected, $onMultiSelectChange, $onMultiSelectedChange, $changeMultiSelected, $multiSelectionChildDeclarativeParameters, $multiSelectionChildParameters, $multiSelectionChildReturn, $multiSelectionContext, $multiSelectionParameters, $multiSelectionReturn } from "../component-detail/selection/use-multi-selection.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelectionChildParameters, UseSelectionContext, UseSelectionParameters, useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { $initiallySingleSelectedIndex, $onSingleSelectedIndexChange, $singleSelectedIndex, $changeSingleSelectedIndex, $getSingleSelectedIndex, $singleSelectionChildParameters, $singleSelectionChildReturn, $singleSelectionContext, $singleSelectionDeclarativeParameters, $singleSelectionParameters, $singleSelectionReturn } from "../component-detail/selection/use-single-selection.js";
import { UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType, useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { $getElement, UseRefElementParameters, UseRefElementReturnType, $refElementParameters, $refElementReturn, useRefElement } from "../dom-helpers/use-ref-element.js";
import { $getText, $onTextContentChange, $textContentParameters, $textContentReturn, UseTextContentParameters, UseTextContentReturnType, useTextContent } from "../dom-helpers/use-text-content.js";
import { $getAnyFocused, UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, $childrenHaveFocusChildContext, $childrenHaveFocusParameters, $childrenHaveFocusReturn, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { $hasCurrentFocusParameters, $hasCurrentFocusReturn, $onCurrentFocusedChanged, $onCurrentFocusedInnerChanged, UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { $index, ManagedChildInfo, ManagedChildren, $onChildrenMountChange, $getChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, $managedChildContext, $managedChildReturn, $managedChildrenParameters, $managedChildrenReturn, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { TargetedOmit, TargetedPick, useCallback } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { $excludeSpace, $onPressSync, $pressParameters, UsePressParameters } from "./use-press.js";

export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends
    UseListNavigationSelectionChildInfo<ChildElement>,
    ManagedChildInfo<number> { }

export interface UseCompleteListNavigationChildrenInfo<ChildElement extends Element> extends
    UseProcessedChildInfo<ChildElement>,
    ManagedChildInfo<number> { }

export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, typeof $singleSelectionParameters | typeof $multiSelectionParameters>,
    TargetedOmit<Pick<UsePaginatedChildrenParameters<ChildElement>, typeof $paginatedChildrenParameters>, typeof $paginatedChildrenParameters, typeof $childCount>,
    Pick<UseRefElementParameters<ParentElement>, typeof $refElementParameters>,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, typeof $linearNavigationParameters, typeof $getLowestIndex | typeof $getHighestIndex | typeof $isValidForLinearNavigation>,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, typeof $typeaheadNavigationParameters, typeof $isValidForTypeaheadNavigation>,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, typeof $rovingTabIndexParameters, typeof $untabbableBehavior> { }

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseRefElementReturnType<ParentElement>, "propsStable">,
    TargetedOmit<UseProcessedChildrenReturnType<any, any>, typeof $rearrangeableChildrenReturn, typeof $indexDemangler | typeof $indexMangler | typeof $children>,
    Pick<UseProcessedChildrenReturnType<any, any>, never>,
    Pick<UseManagedChildrenReturnType<M>, typeof $managedChildrenReturn>,
    Pick<UseChildrenHaveFocusReturnType<ChildElement>, typeof $childrenHaveFocusReturn>,
    OmitStrong<UseListNavigationSelectionReturnType<ParentElement, ChildElement>, "context" | typeof $childrenHaveFocusParameters | typeof $managedChildrenParameters> {
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
    OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, M>, never> {
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
    UseListNavigationSelectionChildInfoKeysParameters | typeof $focusSelfChild;



export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseGenericChildParameters<CompleteListNavigationContext<ChildElement, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>,
    OmitStrong<UseListNavigationSelectionChildParameters<ChildElement, M>, "context" | "info" | typeof $refElementReturn>,
    Pick<UseRefElementParameters<ChildElement>, typeof $refElementParameters>,
    Pick<UseTextContentParameters<ChildElement>, typeof $textContentParameters>,
    Pick<UseHasCurrentFocusParameters<ChildElement>, typeof $hasCurrentFocusParameters> {
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationSelectionChildReturnType<ChildElement, M>, "info" | "propsChild" | "propsTabbable" | typeof $hasCurrentFocusParameters | typeof $pressParameters | typeof $textContentParameters>,
    OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable">,
    Pick<UseTextContentReturnType, typeof $textContentReturn>,
    UseHasCurrentFocusReturnType<ChildElement>,
    UseManagedChildReturnType<M>,
    TargetedPick<UsePressParameters<any>, typeof $pressParameters, typeof $onPressSync | typeof $excludeSpace> {

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
    [$linearNavigationParameters]: linearNavigationParameters,
    [$typeaheadNavigationParameters]: typeaheadNavigationParameters,
    [$rovingTabIndexParameters]: rovingTabIndexParameters,
    [$singleSelectionParameters]: singleSelectionParameters,
    [$multiSelectionParameters]: multiSelectionParameters,
    [$refElementParameters]: refElementParameters,
    [$paginatedChildrenParameters]: paginatedChildrenParameters,
    //staggeredChildrenParameters,
    ...void1
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
    const getChildren: () => ManagedChildren<M> = useCallback(() => managedChildrenReturn[$getChildren](), []);
    const getLowestIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const getHighestIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child[$untabbable])
            return false;
        return true;
    }, []);

    const { propsStable: propsRef, [$refElementReturn]: refElementReturn } = useRefElement<ParentElement>({ [$refElementParameters]: refElementParameters });

    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, [$indexDemangler]: indexDemangler, [$indexMangler]: indexMangler, [$rearrange]: rearrange, [$reverse]: reverse, [$shuffle]: shuffle, [$sort]: sort } = useCreateProcessedChildrenContext();

    const {
        [$childrenHaveFocusParameters]: childrenHaveFocusParameters,
        [$managedChildrenParameters]: { [$onChildrenMountChange]: onChildrenMountChange, ...mcp1 },
        context: { [$rovingTabIndexContext]: rovingTabIndexContext, [$singleSelectionContext]: singleSelectionContext, [$multiSelectionContext]: multiSelectionContext, [$typeaheadNavigationContext]: typeaheadNavigationContext },
        [$linearNavigationReturn]: linearNavigationReturn,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$singleSelectionReturn]: singleSelectionReturn,
        [$multiSelectionReturn]: multiSelectionReturn,
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn,
        props,

        ...void2
    } = useListNavigationSelection<ParentElement, ChildElement>({
        [$managedChildrenReturn]: { [$getChildren]: getChildren },
        [$linearNavigationParameters]: { [$getLowestIndex]: getLowestIndex, [$getHighestIndex]: getHighestIndex, [$isValidForLinearNavigation]: isValidForNavigation, ...linearNavigationParameters },
        [$typeaheadNavigationParameters]: { [$isValidForTypeaheadNavigation]: isValidForNavigation, ...typeaheadNavigationParameters },
        [$rovingTabIndexParameters]: { [$untabbableBehavior]: "focus-parent", ...rovingTabIndexParameters },
        [$singleSelectionParameters]: singleSelectionParameters,
        [$multiSelectionParameters]: multiSelectionParameters,
        [$refElementReturn]: refElementReturn,
        [$paginatedChildrenParameters]: paginatedChildrenParameters,
        [$childrenHaveFocusReturn]: { [$getAnyFocused]: useStableCallback((): boolean => childrenHaveFocusReturn[$getAnyFocused]()) },
        [$rearrangeableChildrenReturn]: { [$indexDemangler]: indexDemangler, [$indexMangler]: indexMangler }
    });

    const { context: { [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext }, [$childrenHaveFocusReturn]: childrenHaveFocusReturn } = useChildrenHaveFocus({ [$childrenHaveFocusParameters]: childrenHaveFocusParameters });

    const mcr: UseManagedChildrenReturnType<M> = useManagedChildren<M>({
        [$managedChildrenParameters]: {
            [$onChildrenMountChange]: onChildrenMountChange,
            ...mcp1
        }
    });
    const { context: { [$managedChildContext]: managedChildRTIContext }, [$managedChildrenReturn]: managedChildrenReturn } = mcr;
    const { [$getTabbableIndex]: getTabbableIndex, [$setTabbableIndex]: setTabbableIndex } = rovingTabIndexReturn;
    const { [$getAnyFocused]: getAnyFocused } = childrenHaveFocusReturn;

    const contextChildren = useMemoObject<CompleteListNavigationContext<ChildElement, M>>({
        [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext,
        [$rovingTabIndexContext]: rovingTabIndexContext,
        [$singleSelectionContext]: singleSelectionContext,
        [$multiSelectionContext]: multiSelectionContext,
        [$typeaheadNavigationContext]: typeaheadNavigationContext,
        [$managedChildContext]: managedChildRTIContext,
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    const processedChildrenContext = useMemoObject<UseProcessedChildrenContext[typeof $processedChildrenContext]>({ [$getTabbableIndex]: getTabbableIndex, [$setTabbableIndex]: setTabbableIndex, [$getAnyFocused]: getAnyFocused/*, [RgetElement]: refElementReturn[RgetElement]*/ });

    return {
        contextChildren,
        contextProcessing: useMemoObject<UseProcessedChildrenContext>({
            [$processedChildrenContext]: processedChildrenContext,
            ...contextProcessing
        }),
        props: useMergedProps(props, propsRef),
        [$managedChildrenReturn]: managedChildrenReturn,
        [$linearNavigationReturn]: linearNavigationReturn,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$singleSelectionReturn]: singleSelectionReturn,
        [$multiSelectionReturn]: multiSelectionReturn,
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn,
        [$refElementReturn]: refElementReturn,
        [$childrenHaveFocusReturn]: childrenHaveFocusReturn,
        [$rearrangeableChildrenReturn]: { [$reverse]: reverse, [$shuffle]: shuffle, [$rearrange]: rearrange, [$sort]: sort },
    }
});

/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 */
export const useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>>({
    context,
    [$rearrangeableChildrenParameters]: rearrangeableChildrenParameters,
    [$paginatedChildrenParameters]: paginatedChildrenParameters,
    [$staggeredChildrenParameters]: staggeredChildrenParameters,
    [$managedChildrenParameters]: managedChildrenParameters
}: UseCompleteListNavigationChildrenParameters<TabbableChildElement, M>): UseCompleteListNavigationChildrenReturnType<TabbableChildElement, M> {
    const {
        context: contextRPS,
        [$paginatedChildrenReturn]: paginatedChildrenReturn,
        [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn,
        [$staggeredChildrenReturn]: staggeredChildrenReturn,
    } = useProcessedChildren<TabbableChildElement, M>({
        [$managedChildrenParameters]: managedChildrenParameters,
        [$paginatedChildrenParameters]: paginatedChildrenParameters,
        [$staggeredChildrenParameters]: staggeredChildrenParameters,
        [$rearrangeableChildrenParameters]: rearrangeableChildrenParameters,
        context,
    });

    return {
        context: contextRPS,
        [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn,
        [$paginatedChildrenReturn]: paginatedChildrenReturn,
        [$staggeredChildrenReturn]: staggeredChildrenReturn,
    }
})

/**
 * 
 * @compositeParams
 */
export const useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    info: { [$index]: index, [$focusSelfChild]: focusSelf, [$untabbable]: untabbable, ...customUserInfo },  // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: otcc1, ...void10 },
    [$refElementParameters]: refElementParameters,
    [$hasCurrentFocusParameters]: { [$onCurrentFocusedChanged]: onCurrentFocusedChanged, [$onCurrentFocusedInnerChanged]: ocfic3, ...void7 },
    [$singleSelectionChildParameters]: singleSelectionChildParameters,
    [$multiSelectionChildParameters]: multiSelectionChildParameters,
    context: { [$managedChildContext]: managedChildContext, [$rovingTabIndexContext]: rovingTabIndexContext, [$singleSelectionContext]: singleSelectionContext, [$multiSelectionContext]: multiSelectionContext, [$typeaheadNavigationContext]: typeaheadNavigationContext, [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext, ...void5 },
    ...void1
}: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M> {
    const { [$refElementReturn]: refElementReturn, propsStable, ...void6 } = useRefElement<ChildElement>({ [$refElementParameters]: refElementParameters });
    const {
        [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic1, ...void3 },
        [$pressParameters]: { [$excludeSpace]: excludeSpace, [$onPressSync]: onPressSync, ...void2 },
        [$textContentParameters]: { [$onTextContentChange]: otcc2, ...void8 },
        info: infoFromListNav,
        [$singleSelectionChildReturn]: singleSelectionChildReturn,
        [$multiSelectionChildReturn]: multiSelectionChildReturn,
        [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn,
        propsChild,
        propsTabbable,
        ...void4
    } = useListNavigationSelectionChild<ChildElement>({
        info: { [$index]: index, [$untabbable]: untabbable },
        context: { [$rovingTabIndexContext]: rovingTabIndexContext, [$singleSelectionContext]: singleSelectionContext, [$multiSelectionContext]: multiSelectionContext, [$typeaheadNavigationContext]: typeaheadNavigationContext },
        [$singleSelectionChildParameters]: singleSelectionChildParameters,
        [$multiSelectionChildParameters]: multiSelectionChildParameters,
        [$refElementReturn]: refElementReturn
    });
    const { [$textContentReturn]: textContentReturn, ...void9 } = useTextContent({ [$refElementReturn]: refElementReturn, [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: useStableMergedCallback(otcc1, otcc2) } })

    const allStandardInfo: UseCompleteListNavigationChildInfo<ChildElement> = {
        [$index]: index,
        [$focusSelfChild]: focusSelf,
        [$getElement]: refElementReturn[$getElement],
        [$untabbable]: untabbable,
        ...infoFromListNav,
    }

    const { [$managedChildReturn]: managedChildReturn } = useManagedChild<M>({ context: { [$managedChildContext]: managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } as M });

    const { [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic2 } } = useChildrenHaveFocusChild({ context: { [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableMergedCallback(ocfic1, ocfic2, ocfic3);
    const { [$hasCurrentFocusReturn]: hasCurrentFocusReturn } = useHasCurrentFocus<ChildElement>({
        [$hasCurrentFocusParameters]: {
            [$onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
            [$onCurrentFocusedChanged]: onCurrentFocusedChanged
        },
        [$refElementReturn]: refElementReturn
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
        [$pressParameters]: {
            [$onPressSync]: onPressSync,
            [$excludeSpace]: excludeSpace
        },
        [$textContentReturn]: textContentReturn,
        [$hasCurrentFocusReturn]: hasCurrentFocusReturn,
        [$refElementReturn]: refElementReturn,
        [$singleSelectionChildReturn]: singleSelectionChildReturn,
        [$multiSelectionChildReturn]: multiSelectionChildReturn,
        [$managedChildReturn]: managedChildReturn,
        [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn
    }

});

export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, typeof $singleSelectionParameters | typeof $singleSelectionReturn>,
    TargetedOmit<UseSelectionParameters<ParentElement, ChildElement, M>, typeof $singleSelectionParameters, typeof $initiallySingleSelectedIndex | typeof $onSingleSelectedIndexChange> { }

export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, typeof $singleSelectionReturn, typeof $changeSingleSelectedIndex>,
    TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, typeof $multiSelectionReturn, never>,
    OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, typeof $singleSelectionReturn | typeof $multiSelectionReturn> { }


export interface UseCompleteListNavigationChildDeclarativeParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<MakeSelectionDeclarativeChildParameters<UseCompleteListNavigationChildParameters<ChildElement, M>>, typeof $multiSelectionChildParameters | typeof $multiSelectionChildReturn>,
    TargetedOmit<UseSelectionChildParameters<ChildElement, M>, typeof $multiSelectionChildParameters, typeof $initiallyMultiSelected | typeof $onMultiSelectChange> { }

export interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, typeof $singleSelectionChildReturn, never>,
    TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, typeof $multiSelectionChildReturn, typeof $changeMultiSelected>,
    OmitStrong<UseCompleteListNavigationChildReturnType<ChildElement, M>, typeof $singleSelectionChildReturn | typeof $multiSelectionChildReturn> { }

export function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    [$singleSelectionParameters]: singleSelectionParameters,
    [$singleSelectionDeclarativeParameters]: singleSelectionDeclarativeParameters,
    ...rest
}: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M> {

    const ret: UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> = useCompleteListNavigation({
        [$singleSelectionParameters]: {
            [$initiallySingleSelectedIndex]: singleSelectionDeclarativeParameters[$singleSelectedIndex],
            // Needs to be a (stable) callback because of declaration order
            [$onSingleSelectedIndexChange]: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...rest
    });
        const { [$singleSelectionParameters]: { [$onSingleSelectedIndexChange]: onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({ [$singleSelectionDeclarativeParameters]: singleSelectionDeclarativeParameters, [$singleSelectionReturn]: ret[$singleSelectionReturn] });

    const { [$singleSelectionReturn]: { [$getSingleSelectedIndex]: getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return { ...ret2, [$singleSelectionReturn]: { [$getSingleSelectedIndex]: getSingleSelectedIndex } };
}


export function useCompleteListNavigationChildDeclarative<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    [$multiSelectionChildParameters]: multiSelectionChildParameters,
    [$multiSelectionChildDeclarativeParameters]: { [$multiSelected]: multiSelected, [$onMultiSelectedChange]: onMultiSelectedChange },
    info: i1,
    ...rest
}: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M> {

    const { [$multiSelectionChildParameters]: { [$onMultiSelectChange]: onMultiSelectChange }, info: i2, ...void2 } = useSelectionChildDeclarative({
        [$multiSelectionChildDeclarativeParameters]: { [$onMultiSelectedChange]: onMultiSelectedChange, [$multiSelected]: multiSelected },
        [$multiSelectionChildReturn]: {
            [$changeMultiSelected]: useStableCallback((...args) => { ret[$multiSelectionChildReturn][$changeMultiSelected](...args); })
        }
    });

    const ret: UseCompleteListNavigationChildReturnType<ChildElement, M> = useCompleteListNavigationChild({
        [$multiSelectionChildParameters]: {
            [$initiallyMultiSelected]: multiSelected,
            [$onMultiSelectChange]: useStableCallback((e) => { onMultiSelectChange!(e); }),
            ...multiSelectionChildParameters
        },
        info: { ...i1, ...i2 },
        ...rest
    });

    const { [$multiSelectionChildReturn]: multiSelectionChildReturn, ...ret2 } = ret;
    assertEmptyObject(void2);
    return { ...ret2, [$multiSelectionChildReturn]: multiSelectionChildReturn };
}