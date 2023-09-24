import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenParametersSelf, UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildrenContext, UseProcessedChildrenParameters, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { UseRearrangeableChildrenReturnType, UseRearrangeableChildrenReturnTypeSelf, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenParametersSelf, UseStaggeredChildrenReturnType } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelectionChildParameters, UseSelectionContext, UseSelectionParameters, useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType, useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { UseRefElementParameters, UseRefElementParametersSelf, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParametersSelf, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenParametersSelf, UseManagedChildrenReturnType, UseManagedChildrenReturnTypeSelf, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UsePressParameters } from "./use-press.js";

export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends
    UseListNavigationSelectionChildInfo<ChildElement>,
    ManagedChildInfo<number> { }

export interface UseCompleteListNavigationChildrenInfo<ChildElement extends Element> extends
    UseProcessedChildInfo<ChildElement>,
    ManagedChildInfo<number> { }

type ListNavOmits = "PropNames.LinearNavigationParameters.getHighestIndex" |
    "PropNames.LinearNavigationParameters.getLowestIndex" |
    "PropNames.RearrangeableReturn.indexMangler" |
    "PropNames.RearrangeableReturn.indexDemangler" |
    "PropNames.RefElementReturn.getElement" |
    "PropNames.ChildrenHaveFocusReturn.getAnyFocused" |
    "PropNames.ManagedChildrenReturn.getChildren" |
    "PropNames.LinearNavigationParameters.isValidForLinearNavigation" |
    "PropNames.RovingTabIndexParameters.untabbableBehavior" |
    "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation";

export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, ListNavOmits>,
    OmitStrong<UsePaginatedChildrenParametersSelf, "PropNames.PaginatedParameters.childCount">,
    OmitStrong<UseStaggeredChildrenParametersSelf, "PropNames.StaggeredParameters.childCount">,
    OmitStrong<UseRefElementParameters<ParentElement>, never>,
    OmitStrong<UseManagedChildrenParametersSelf<M>, never>
/* Pick<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, keyof UseSingleSelectionParameters<any>>,
    TargetedOmit<Pick<UsePaginatedChildrenParameters<ChildElement>, "paginatedChildrenParameters">, "paginatedChildrenParameters", "childCount">,
    Pick<UseRefElementParameters<ParentElement>, "refElementParameters">,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters", "untabbableBehavior">*/ { }

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationSelectionReturnType<ParentElement, ChildElement>, "props" | "context">,
    //OmitStrong<UsePaginatedChildrenReturnTypeSelf, never>,
    OmitStrong<UseRefElementReturnType<ParentElement>, "props">,
    OmitStrong<UseManagedChildrenReturnTypeSelf<M>, never>,
    OmitStrong<UseRearrangeableChildrenReturnTypeSelf<any>, "PropNames.RearrangeableReturn.children">
/*OmitStrong<UseRefElementReturnType<ParentElement>, "propsStable">,
    TargetedOmit<UseProcessedChildrenReturnType<any, any>, "rearrangeableChildrenReturn", "indexDemangler" | "indexMangler" | "children">,
    Pick<UseProcessedChildrenReturnType<any, any>, never>,
    Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">,
    Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusReturn">,
    OmitStrong<UseListNavigationSelectionReturnType<ParentElement, ChildElement>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters">*/ {
    props: ElementProps<ParentElement>[];
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
    OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, M>, "PropNames.RefElementReturn.getElement" | "PropNames.ChildrenHaveFocusReturn.getAnyFocused" | "PropNames.RovingTabIndexReturn.getTabbableIndex" | "PropNames.RovingTabIndexReturn.setTabbableIndex" | "PropNames.ManagedChildrenReturn.getChildren"> {
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
    OmitStrong<UseListNavigationSelectionChildParameters<ChildElement, M>, "context" | "info" | "PropNames.RefElementReturn.getElement">,
    UseRefElementParametersSelf<ChildElement>,
    UseHasCurrentFocusParametersSelf<ChildElement> {
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationSelectionChildReturnType<ChildElement, M>, "info" | "propsChild" | "propsTabbable">,
    OmitStrong<UseRefElementReturnType<ChildElement>, "props">,
    OmitStrong<UseHasCurrentFocusReturnType<ChildElement>, "props">,
    UseManagedChildReturnType<M>,
    Pick<UsePressParameters<any>, "PropNames.PressParameters.onPressSync" | "PropNames.PressParameters.excludeSpace"> {

    /**
     * These props should be passed to whichever element is tabbable. 
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended.
     * 
     * @see propsChild
     */
    propsTabbable: ElementProps<any>[];

    /**
     * These props should be passed to whichever element is considered the child element of the list (e.g. the `li` in an `ol`). 
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended. 
     * But it may also be different, e.g. if that `li` contains an `input`.
     * 
     * @see propsTabbable
     */
    propsChild: ElementProps<any>[];
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
    "PropNames.RefElementParameters.onElementChange": onElementChange,
    "PropNames.RefElementParameters.onMount": onMount,
    "PropNames.RefElementParameters.onUnmount": onUnmount,
    "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection,
    "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
    "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
    "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
    "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
    "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
    "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName,
    "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
    "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange,
    "PropNames.PaginatedParameters.paginationMax": paginationMax,
    "PropNames.PaginatedParameters.paginationMin": paginationMin,
    "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
    "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
    "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
    "PropNames.RovingTabIndexParameters.untabbable": untabbable,
    "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex,
    "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange,
    "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
    "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode,
    "PropNames.TypeaheadNavigationParameters.collator": collator,
    "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
    "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
    "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
    "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
    "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc1,
    "PropNames.StaggeredParameters.staggered": staggered,
    ...void4
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
    const getChildren: () => ManagedChildren<M> = useCallback(() => getChildren2(), []);
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

    const {
        props: propsRef,
        "PropNames.RefElementReturn.getElement": getElement,
        ...void3
    } = useRefElement<ParentElement>({
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount
    });

    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const {
        context: contextProcessing,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RearrangeableReturn.rearrange": rearrange,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.sort": sort,
        ...void1
    } = useCreateProcessedChildrenContext();

    const {
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        props,
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": ocfc2,
        "PropNames.RovingTabIndexReturn.focusSelf": focusSelf,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex,
        "PropNames.SingleSelectionReturn.getSingleSelectedIndex": getSingleSelectedIndex,
        "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc2,
        ...void2
    } = useListNavigationSelection<ParentElement, ChildElement>({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": useStableCallback(() => getAnyFocused()),
        "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForNavigation,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
        "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
        "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.RovingTabIndexParameters.untabbableBehavior": "focus-parent",
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange,
        "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
        "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RefElementReturn.getElement": getElement,
    });

    const {
        context: { childrenHaveFocusChildContext },
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        ...void5
    } = useChildrenHaveFocus<ChildElement>({
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": useStableCallback((...a) => { ocfc2?.(...a); }),
    });

    const {
        "PropNames.ManagedChildrenReturn.getChildren": getChildren2,
        context: managedChildRTIContext,
        ...void6
    }: UseManagedChildrenReturnType<M> = useManagedChildren<M>({
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": useStableCallback((...a) => { ocmc1?.(...a); ocmc2?.(...a) })
    });

    const contextChildren = useMemoObject<CompleteListNavigationContext<ChildElement, M>>({
        childrenHaveFocusChildContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext,
        ...managedChildRTIContext,
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);

    const processedChildrenContext = useMemoObject<UseProcessedChildrenContext["processedChildrenContext"]>({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.StaggeredParameters.staggered": staggered,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren
    });

    return {
        contextChildren,
        contextProcessing: useMemoObject<UseProcessedChildrenContext>({
            processedChildrenContext,
            ...contextProcessing
        }),
        props: [...props, propsRef],
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.sort": sort,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.rearrange": rearrange,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": useStableCallback((...a) => { ocfc2?.(...a); }),
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": useStableCallback((...a) => { ocmc1?.(...a); ocmc2?.(...a) }),
        "PropNames.RovingTabIndexReturn.focusSelf": focusSelf,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex,
        "PropNames.SingleSelectionReturn.getSingleSelectedIndex": getSingleSelectedIndex,
        "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus
    }
});

/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 */
export const useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>>({
    context,
    "PropNames.PaginatedParameters.paginationMax": paginationMax,
    "PropNames.PaginatedParameters.paginationMin": paginationMin,
    "PropNames.RearrangeableParameters.adjust": adjust,
    "PropNames.RearrangeableParameters.children": children,
    "PropNames.RearrangeableParameters.compare": compare,
    "PropNames.RearrangeableParameters.getIndex": getIndex,
    "PropNames.RearrangeableParameters.onRearranged": onRearranged,
    "PropNames.StaggeredParameters.staggered": staggered,
    "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
    "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
    "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
    ...void1
}: UseCompleteListNavigationChildrenParameters<TabbableChildElement, M>): UseCompleteListNavigationChildrenReturnType<TabbableChildElement, M> {
    const {
        context: contextRPS,
        ...retPC
    } = useProcessedChildren<TabbableChildElement, M>({
        "PropNames.RefElementReturn.getElement": context.processedChildrenContext["PropNames.RefElementReturn.getElement"],
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": context.processedChildrenContext["PropNames.ChildrenHaveFocusReturn.getAnyFocused"],
        "PropNames.ManagedChildrenReturn.getChildren": context.processedChildrenContext["PropNames.ManagedChildrenReturn.getChildren"],
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RearrangeableParameters.adjust": adjust,
        "PropNames.RearrangeableParameters.children": children,
        "PropNames.RearrangeableParameters.compare": compare,
        "PropNames.RearrangeableParameters.getIndex": getIndex,
        "PropNames.RearrangeableParameters.onRearranged": onRearranged,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": context.processedChildrenContext["PropNames.RovingTabIndexReturn.getTabbableIndex"],
        "PropNames.RovingTabIndexReturn.setTabbableIndex": context.processedChildrenContext["PropNames.RovingTabIndexReturn.setTabbableIndex"],
        "PropNames.StaggeredParameters.staggered": staggered,
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
        context,
    });

    return {
        context: contextRPS,
        ...retPC
    }
})

/**
 * 
 * @compositeParams
 */
export const useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    info: { index, focusSelf, untabbable, ...customUserInfo },  // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
    "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic3,
    "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected,
    "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
    "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange,
    "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
    "PropNames.TextContentParameters.getText": getText,
    "PropNames.RefElementParameters.onElementChange": onElementChange,
    "PropNames.RefElementParameters.onMount": onMount,
    "PropNames.RefElementParameters.onUnmount": onUnmount,
    //textContentParameters,
    //refElementParameters,
    //hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    //singleSelectionChildParameters,
    //multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 },
    ...void1
}: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M> {
    const {
        props: propsStable,
        ...retRE
    } = useRefElement<ChildElement>({
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount
    });
    const { "PropNames.RefElementReturn.getElement": getElement } = retRE;
    const {
        info: infoFromListNav,
        propsChild,
        propsTabbable,
        ...retLN
    } = useListNavigationSelectionChild<ChildElement>({
        info: { index, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected,
        "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
        "PropNames.TextContentParameters.getText": getText
    });


    const allStandardInfo: UseCompleteListNavigationChildInfo<ChildElement> = {
        index,
        focusSelf,
        getElement: getElement,
        untabbable,
        ...infoFromListNav,
    }

    const retMC = useManagedChild<M>({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } as M });

    const { "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1 } = retLN;
    const { "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2 } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });

    const {
        props: props2,
        ...retHCF
    } = useHasCurrentFocus<ChildElement>({
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": useStableCallback<NonNullable<typeof ocfic1>>((focused, prev, e) => {
            ocfic1?.(focused, prev, e);
            ocfic2?.(focused, prev, e);
            ocfic3?.(focused, prev, e);
        }),
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
        "PropNames.RefElementReturn.getElement": getElement
    });


    const props: ElementProps<ChildElement>[] = [
        propsStable,
        props2,
        ...propsChild
    ];

    assertEmptyObject(void1);
    assertEmptyObject(void5);

    return {
        propsChild: props,
        propsTabbable: propsTabbable,
        ...retHCF,
        ...retLN,
        ...retRE,
        ...retMC
    }

});

export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange" |
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex">,
    OmitStrong<UseSelectionParameters<ParentElement, ChildElement, M>,
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex" |
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused" |
        "PropNames.ManagedChildrenReturn.getChildren"
        | "PropNames.RovingTabIndexReturn.setTabbableIndex"> { }

export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "PropNames.SingleSelectionReturn.changeSingleSelectedIndex">,
    //OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "multiSelectionReturn", never>,
    OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, never> { }


export interface UseCompleteListNavigationChildDeclarativeParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<MakeSelectionDeclarativeChildParameters<UseCompleteListNavigationChildParameters<ChildElement, M>>, "info" | "context" | "PropNames.MultiSelectionChildReturn.changeMultiSelected">,
    OmitStrong<UseSelectionChildParameters<ChildElement, M>, "info" | "context" | "PropNames.MultiSelectionChildParameters.initiallyMultiSelected" | "PropNames.MultiSelectionChildParameters.onMultiSelectChange"> {
    info: Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>;
    context: CompleteListNavigationContext<ChildElement, M>
}

export interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<UseCompleteListNavigationChildReturnType<ChildElement, M>, "PropNames.MultiSelectionChildReturn.changeMultiSelected">/*,
    OmitStrong<UseCompleteListNavigationChildReturnType<ChildElement, M>, "singleSelectionChildReturn" | "multiSelectionChildReturn">*/ { }

export function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    "PropNames.SingleSelectionParameters.singleSelectedIndex": singleSelectedIndex,
    "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection,
    "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
    "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
    "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
    "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
    "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
    "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName,
    "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
    "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange,
    "PropNames.PaginatedParameters.paginationMax": paginationMax,
    "PropNames.PaginatedParameters.paginationMin": paginationMin,
    "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
    "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
    "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
    "PropNames.RovingTabIndexParameters.untabbable": untabbable,
    "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
    "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode,
    "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": ossici,
    "PropNames.TypeaheadNavigationParameters.collator": collator,
    "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
    "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
    "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
    "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
    "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
    "PropNames.RefElementParameters.onElementChange": onElementChange,
    "PropNames.RefElementParameters.onMount": onMount,
    "PropNames.RefElementParameters.onUnmount": onUnmount,
    "PropNames.StaggeredParameters.staggered": staggered,
    ...rest
}: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M> {

    const retLN: UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> = useCompleteListNavigation({
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": singleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": useStableCallback((...e) => ossicd?.(...e)),
        "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
        "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
        "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
        "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount,
        "PropNames.StaggeredParameters.staggered": staggered
    });
    const {
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex,
    } = retLN;
    const {
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": ossicd
    } = useSelectionDeclarative({
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": ossici,
        "PropNames.SingleSelectionParameters.singleSelectedIndex": singleSelectedIndex,
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex
    });

    return retLN;
}


export function useCompleteListNavigationChildDeclarative<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    "PropNames.MultiSelectionChildParameters.multiSelected": multiSelected,
    context,
    info: uinfo,
    "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
    "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
    "PropNames.MultiSelectionChildParameters.onMultiSelectChange": omsci,
    "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
    "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
    "PropNames.TextContentParameters.getText": getText,
    "PropNames.RefElementParameters.onElementChange": onElementChange,
    "PropNames.RefElementParameters.onMount": onMount,
    "PropNames.RefElementParameters.onUnmount": onUnmount,
    ...void1
}: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M> {

    const ret: UseCompleteListNavigationChildReturnType<ChildElement, M> = useCompleteListNavigationChild<ChildElement, M>({
        context,
        info: uinfo,
        "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": multiSelected,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": useStableCallback((e) => { omscd!(e); }),
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
        "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
        "PropNames.TextContentParameters.getText": getText,
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount,
    });
    const { "PropNames.MultiSelectionChildReturn.changeMultiSelected": changeMultiSelected } = ret;
    const {
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": omscd,
        info,
        ...void2
    } = useSelectionChildDeclarative({
        "PropNames.MultiSelectionChildParameters.multiSelected": multiSelected,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": omsci,
        "PropNames.MultiSelectionChildReturn.changeMultiSelected": changeMultiSelected,


    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return ret;
}