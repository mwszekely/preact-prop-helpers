import { PropNames_GridNavigationCellParameters_colSpan, PropNames_GridNavigationParameters_initiallyTabbableColumn, PropNames_GridNavigationParameters_onTabbableColumnChange, UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { PropNames_LinearNavigationParameters_disableHomeEndKeys, PropNames_LinearNavigationParameters_getHighestIndex, PropNames_LinearNavigationParameters_getLowestIndex, PropNames_LinearNavigationParameters_isValidForLinearNavigation, PropNames_LinearNavigationParameters_navigatePastEnd, PropNames_LinearNavigationParameters_navigatePastStart, PropNames_LinearNavigationParameters_onNavigateLinear, PropNames_LinearNavigationParameters_pageNavigationSize } from "../component-detail/keyboard-navigation/use-linear-navigation.js";
import { PropNames_RovingTabIndexChildReturn_getTabbable, PropNames_RovingTabIndexChildReturn_tabbable, PropNames_RovingTabIndexParameters_focusSelfParent, PropNames_RovingTabIndexParameters_initiallyTabbedIndex, PropNames_RovingTabIndexParameters_onTabbableIndexChange, PropNames_RovingTabIndexParameters_untabbable, PropNames_RovingTabIndexParameters_untabbableBehavior, PropNames_RovingTabIndexReturn_focusSelf, PropNames_RovingTabIndexReturn_getTabbableIndex, PropNames_RovingTabIndexReturn_setTabbableIndex, RovingTabIndexChildContext, SetTabbableIndex } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { PropNames_TypeaheadNavigationParameters_collator, PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation, PropNames_TypeaheadNavigationParameters_noTypeahead, PropNames_TypeaheadNavigationParameters_onNavigateTypeahead, PropNames_TypeaheadNavigationParameters_typeaheadTimeout, PropNames_TypeaheadNavigationReturn_getCurrentTypeahead, PropNames_TypeaheadNavigationReturn_typeaheadStatus, UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { PropNames_PaginatedParameters_childCount, PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin, PropNames_PaginatedReturn_refreshPagination, UsePaginatedChildrenParametersSelf, UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { PropNames_RearrangeableParameters_adjust, PropNames_RearrangeableParameters_children, PropNames_RearrangeableParameters_compare, PropNames_RearrangeableParameters_getIndex, PropNames_RearrangeableParameters_onRearranged, PropNames_RearrangeableReturn_children, PropNames_RearrangeableReturn_indexDemangler, PropNames_RearrangeableReturn_indexMangler, PropNames_RearrangeableReturn_rearrange, PropNames_RearrangeableReturn_reverse, PropNames_RearrangeableReturn_shuffle, PropNames_RearrangeableReturn_sort, UseRearrangeableChildrenReturnType, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { PropNames_StaggeredParameters_childCount, PropNames_StaggeredParameters_staggered, PropNames_StaggeredReturn_stillStaggering, UseStaggeredChildrenParametersSelf, UseStaggeredChildrenReturnType } from "../component-detail/processed-children/use-staggered-children.js";
import { PropNames_MultiSelectionChildParameters_initiallyMultiSelected, PropNames_MultiSelectionChildParameters_multiSelectionDisabled, PropNames_MultiSelectionChildParameters_onMultiSelectChange, PropNames_MultiSelectionChildReturn_changeMultiSelected, PropNames_MultiSelectionChildReturn_getMultiSelected, PropNames_MultiSelectionChildReturn_multiSelected, PropNames_MultiSelectionParameters_multiSelectionAriaPropName, PropNames_MultiSelectionParameters_multiSelectionMode, PropNames_MultiSelectionParameters_onSelectionChange } from "../component-detail/selection/use-multi-selection.js";
import { MakeSelectionDeclarativeParameters, UseSelectionContext, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { PropNames_SingleSelectionChildParameters_singleSelectionDisabled, PropNames_SingleSelectionChildReturn_getSingleSelected, PropNames_SingleSelectionChildReturn_getSingleSelectedOffset, PropNames_SingleSelectionChildReturn_singleSelected, PropNames_SingleSelectionChildReturn_singleSelectedOffset, PropNames_SingleSelectionChildReturn_singleSelectionMode, PropNames_SingleSelectionParameters_initiallySingleSelectedIndex, PropNames_SingleSelectionParameters_onSingleSelectedIndexChange, PropNames_SingleSelectionParameters_singleSelectedIndex, PropNames_SingleSelectionParameters_singleSelectionAriaPropName, PropNames_SingleSelectionParameters_singleSelectionMode, PropNames_SingleSelectionReturn_changeSingleSelectedIndex, PropNames_SingleSelectionReturn_getSingleSelectedIndex } from "../component-detail/selection/use-single-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType, useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "../component-detail/use-grid-navigation-selection.js";
import { PropNames_RefElementParameters_onElementChange, PropNames_RefElementParameters_onMount, PropNames_RefElementParameters_onUnmount, PropNames_RefElementReturn_getElement, UseRefElementParameters, UseRefElementParametersSelf, UseRefElementReturnType, UseRefElementReturnTypeSelf, useRefElement } from "../dom-helpers/use-ref-element.js";
import { PropNames_TextContentParameters_getText, PropNames_TextContentReturn_getTextContent } from "../dom-helpers/use-text-content.js";
import { PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange, PropNames_ChildrenHaveFocusReturn_getAnyFocused, UseChildrenHaveFocusContext, UseChildrenHaveFocusParametersSelf, UseChildrenHaveFocusReturnTypeSelf, useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged, PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged, PropNames_HasCurrentFocusReturn_getCurrentFocused, PropNames_HasCurrentFocusReturn_getCurrentFocusedInner, UseHasCurrentFocusParametersSelf, UseHasCurrentFocusReturnType, UseHasCurrentFocusReturnTypeSelf, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, OnChildrenMountChange, PropNames_ManagedChildReturn_getChildren, PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect, PropNames_ManagedChildrenParameters_onChildrenCountChange, PropNames_ManagedChildrenParameters_onChildrenMountChange, PropNames_ManagedChildrenReturn_getChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildReturnTypeSelf, UseManagedChildrenContext, UseManagedChildrenParametersSelf, UseManagedChildrenReturnType, UseManagedChildrenReturnTypeSelf, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { PropNames_PressParameters_excludeSpace, PropNames_PressParameters_onPressSync } from "./use-press.js";


export type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> =
    // All types in the user-supplied info type that aren't in the base type (since we handle it) 
    Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> |
    // except for these extra types! Because the user supplies them.
    UseGridNavigationSelectionRowInfoKeysParameters;

export type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> =
    Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> |
    UseGridNavigationSelectionCellInfoKeysParameters | "focusSelf";

export interface UseCompleteGridNavigationRowInfo<RowElement extends Element> extends GridSelectChildRowInfo<RowElement>, ManagedChildInfo<number> { }
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSelectChildCellInfo<CellElement>, ManagedChildInfo<number> { }

export interface UseCompleteGridNavigationRowsInfo<ChildElement extends Element> extends
    UseProcessedChildInfo<ChildElement>,
    ManagedChildInfo<number> { }

export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>,
        typeof PropNames_LinearNavigationParameters_getLowestIndex |
        typeof PropNames_LinearNavigationParameters_getHighestIndex |
        typeof PropNames_LinearNavigationParameters_isValidForLinearNavigation |
        typeof PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation |
        typeof PropNames_RovingTabIndexParameters_untabbableBehavior |
        typeof PropNames_RefElementReturn_getElement |
        typeof PropNames_RovingTabIndexReturn_setTabbableIndex |
        typeof PropNames_ManagedChildrenReturn_getChildren |
        typeof PropNames_RearrangeableReturn_indexMangler |
        typeof PropNames_RearrangeableReturn_indexDemangler |
        typeof PropNames_ChildrenHaveFocusReturn_getAnyFocused>,
    UseRefElementParameters<ParentOrRowElement>,
    UseChildrenHaveFocusParametersSelf<RowElement>,
    OmitStrong<UsePaginatedChildrenParametersSelf, typeof PropNames_PaginatedParameters_childCount>,
    OmitStrong<UseStaggeredChildrenParametersSelf, typeof PropNames_StaggeredParameters_childCount>,
    UseManagedChildrenParametersSelf<M> { }






export interface UseCompleteGridNavigationRowsParameters<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends
    OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, M>, typeof PropNames_RefElementReturn_getElement> { }

export interface UseCompleteGridNavigationRowsReturnType<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends
    OmitStrong<UseRearrangeableChildrenReturnType<M>, never>,
    OmitStrong<UsePaginatedChildrenReturnType, "context">,
    OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
}




export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>,
    OmitStrong<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" |
        typeof PropNames_LinearNavigationParameters_getLowestIndex |
        typeof PropNames_LinearNavigationParameters_getHighestIndex |
        typeof PropNames_LinearNavigationParameters_isValidForLinearNavigation |
        typeof PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation |
        typeof PropNames_RovingTabIndexParameters_untabbable |
        typeof PropNames_ManagedChildrenReturn_getChildren |
        typeof PropNames_RefElementReturn_getElement>,
    UseRefElementParametersSelf<RowElement>,
    UseHasCurrentFocusParametersSelf<RowElement>,
    UseManagedChildrenParametersSelf<RM> {
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationCellContext<CellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>,
    UseRefElementParametersSelf<CellElement>,
    UseHasCurrentFocusParametersSelf<CellElement>,
    OmitStrong<UseGridNavigationSelectionCellParameters<CellElement>, "info" | "context"> {
}


export interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    UseManagedChildrenContext<RM>,

    UseChildrenHaveFocusContext<RowElement>,
    UseTypeaheadNavigationContext,
    UseSelectionContext,
    RovingTabIndexChildContext,
    UseGridNavigationRowContext {
    contextProcessing: UseProcessedChildrenContext;
}


export interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends
    UseManagedChildrenContext<CM>,
    UseTypeaheadNavigationContext,
    RovingTabIndexChildContext,
    UseGridNavigationCellSelectionContext {
}


export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>, "props" | "context" |
        typeof PropNames_ManagedChildrenParameters_onChildrenMountChange |
        typeof PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange>,
    OmitStrong<UseManagedChildrenReturnTypeSelf<RM>, never>,
    OmitStrong<UseRefElementReturnTypeSelf<ParentOrRowElement>, "props">,
    OmitStrong<UseRefElementReturnTypeSelf<ParentOrRowElement>, "props">,
    OmitStrong<UseChildrenHaveFocusReturnTypeSelf, never>,
    OmitStrong<UseManagedChildrenReturnTypeSelf<RM>, never>,
    OmitStrong<UseProcessedChildrenReturnType<RowElement, any>,
        "context" |
        typeof PropNames_RearrangeableReturn_indexDemangler |
        typeof PropNames_RearrangeableReturn_indexMangler |
        typeof PropNames_RearrangeableReturn_children |
        typeof PropNames_StaggeredReturn_stillStaggering |
        typeof PropNames_PaginatedReturn_refreshPagination> {
    contextChildren: CompleteGridNavigationRowContext<RowElement, RM>;
    contextProcessing: UseProcessedChildrenContext;
    props: ElementProps<ParentOrRowElement>[];
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM>, "info" | "context">,
    OmitStrong<UseHasCurrentFocusReturnTypeSelf<RowElement>, "props">,
    OmitStrong<UseRefElementReturnTypeSelf<RowElement>, "props">,
    OmitStrong<UseManagedChildrenReturnTypeSelf<CM>, never>,
    OmitStrong<UseManagedChildReturnTypeSelf<RM>, never> {
    context: CompleteGridNavigationCellContext<CellElement, CM>;
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSelectionCellReturnType<CellElement>, "info" | "props">,
    OmitStrong<UseRefElementReturnType<CellElement>, "props">,
    OmitStrong<UseHasCurrentFocusReturnType<CellElement>, "props">,
    UseManagedChildReturnType<CM> {
    props: ElementProps<CellElement>[];
}

/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 */
export const useCompleteGridNavigation = monitored(function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({

    [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn,
    [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange,
    [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
    [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
    [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
    [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
    [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
    [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
    [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
    [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
    [PropNames_PaginatedParameters_paginationMax]: paginationMax,
    [PropNames_PaginatedParameters_paginationMin]: paginationMin,
    [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
    [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
    [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
    [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
    [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
    [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
    [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
    [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
    [PropNames_TypeaheadNavigationParameters_collator]: collator,
    [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
    [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
    [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    [PropNames_RefElementParameters_onElementChange]: onElementChange,
    [PropNames_RefElementParameters_onMount]: onMount,
    [PropNames_RefElementParameters_onUnmount]: onUnmount,
    [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
    [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
    [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc2,
    [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc1,
    [PropNames_StaggeredParameters_staggered]: staggered,
    ...void1
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> {
    assertEmptyObject(void1);
    const getChildren: () => ManagedChildren<RM> = useCallback<() => ManagedChildren<RM>>(() => getChildrenButItsDeclaredTooLateToBeUseful(), []);
    const getLowestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);


    const isValidForNavigation = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);

    const {
        props: propsStable,
        [PropNames_RefElementReturn_getElement]: getElement,
        ...retRE
    } = useRefElement<ParentOrRowElement>({
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_RefElementParameters_onMount]: onMount,
        [PropNames_RefElementParameters_onUnmount]: onUnmount
    });


    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const {
        context: contextProcessing,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RearrangeableReturn_rearrange]: rearrange,
        [PropNames_RearrangeableReturn_reverse]: reverse,
        [PropNames_RearrangeableReturn_shuffle]: shuffle,
        [PropNames_RearrangeableReturn_sort]: sort,
        ...retCPC
    } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback((): boolean => getAnyFocused2());
    const setTabbableIndex: SetTabbableIndex = useStableCallback<SetTabbableIndex>((...a) => setTabbableIndex2(...a));
    const {
        context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        props,
        [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: ocfc2,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex2,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc1,
        [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf,
        [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
        [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex,
        [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead,
        [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus,
        ...retGN
    }: UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement> = useGridNavigationSelection<ParentOrRowElement, RowElement>({
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn,
        [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange,
        [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
        [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestChildIndex,
        [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestChildIndex,
        [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForNavigation,
        [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
        [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
        [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
        [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
        [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
        [PropNames_RovingTabIndexParameters_untabbableBehavior]: "focus-parent",
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
        [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
        [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
        [PropNames_TypeaheadNavigationParameters_collator]: collator,
        [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForNavigation,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    });

    //const { [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange } = retGN

    const onCompositeFocusChange = useStableCallback<UseChildrenHaveFocusParametersSelf<any>[typeof PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]>((...a) => { ocfc1?.(...a); ocfc2?.(...a); })

    const {
        context: { childrenHaveFocusChildContext },
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused2,
        ...retCHF
    } = useChildrenHaveFocus<RowElement>({
        [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange
    });

    const onChildrenMountChange = useStableCallback<OnChildrenMountChange<number>>((...a) => { ocmc1?.(...a); ocmc2?.(...a); })
    const {
        context: { managedChildContext },
        [PropNames_ManagedChildrenReturn_getChildren]: getChildrenButItsDeclaredTooLateToBeUseful,
        ...retMC
    }: UseManagedChildrenReturnType<RM> = useManagedChildren<RM>({
        [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
        [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange
    });

    const processedChildrenContext = useMemoObject<UseProcessedChildrenContext["processedChildrenContext"]>({
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_StaggeredParameters_staggered]: staggered,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren
    });

    const c2 = useMemoObject<UseProcessedChildrenContext>({
        processedChildrenContext,
        ...contextProcessing
    });



    assertEmptyObject(void1);
    assertEmptyObject(retGN);
    assertEmptyObject(retCHF);
    assertEmptyObject(retRE);
    assertEmptyObject(retCPC);
    assertEmptyObject(retMC);

    const ret: UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> = {
        props: [...props, propsStable],
        contextProcessing: c2,
        contextChildren: useMemoObject<CompleteGridNavigationRowContext<RowElement, RM>>({
            singleSelectionContext,
            multiSelectionContext,
            managedChildContext,
            rovingTabIndexContext,
            typeaheadNavigationContext,
            childrenHaveFocusChildContext,
            gridNavigationRowContext,
            contextProcessing: c2
        }),
        [PropNames_RearrangeableReturn_rearrange]: rearrange,
        [PropNames_RearrangeableReturn_reverse]: reverse,
        [PropNames_RearrangeableReturn_shuffle]: shuffle,
        [PropNames_RearrangeableReturn_sort]: sort,
        [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
        [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex,
        [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead,
        [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus,
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused2,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        ...retGN,
        ...retCHF,
        ...retRE,
        ...retCPC,
        ...retMC
    }

    return ret;

})



/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 */
export const useCompleteGridNavigationRows = monitored(function useCompleteGridNavigationRows<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>>({
    context,
    [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
    [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
    [PropNames_PaginatedParameters_paginationMax]: paginationMax,
    [PropNames_PaginatedParameters_paginationMin]: paginationMin,
    [PropNames_RearrangeableParameters_adjust]: adjust,
    [PropNames_RearrangeableParameters_children]: childrin,
    [PropNames_RearrangeableParameters_compare]: compare,
    [PropNames_RearrangeableParameters_getIndex]: getIndex,
    [PropNames_RearrangeableParameters_onRearranged]: onRearranged,
    [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
    [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
    [PropNames_StaggeredParameters_staggered]: staggered,
    [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
    [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
    [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
    ...void1
}: UseCompleteGridNavigationRowsParameters<TabbableChildElement, M>): UseCompleteGridNavigationRowsReturnType<TabbableChildElement, M> {

    const {
        context: contextRPS,
        [PropNames_RearrangeableReturn_children]: childout,
        [PropNames_PaginatedReturn_refreshPagination]: refreshPagination,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RearrangeableReturn_rearrange]: rearrange,
        [PropNames_RearrangeableReturn_reverse]: reverse,
        [PropNames_RearrangeableReturn_shuffle]: shuffle,
        [PropNames_RearrangeableReturn_sort]: sort,
        [PropNames_StaggeredReturn_stillStaggering]: stillStaggering,
        ...retPC
    } = useProcessedChildren<TabbableChildElement, M>({
        [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RearrangeableParameters_adjust]: adjust,
        [PropNames_RearrangeableParameters_children]: childrin,
        [PropNames_RearrangeableParameters_compare]: compare,
        [PropNames_RearrangeableParameters_getIndex]: getIndex,
        [PropNames_RearrangeableParameters_onRearranged]: onRearranged,
        [PropNames_RefElementReturn_getElement]: context.processedChildrenContext[PropNames_RefElementReturn_getElement],
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_StaggeredParameters_staggered]: staggered,
        [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
        [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
        context,
    });

    assertEmptyObject(void1);

    return {
        context: contextRPS,
        [PropNames_RearrangeableReturn_children]: childout,
        [PropNames_PaginatedReturn_refreshPagination]: refreshPagination,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RearrangeableReturn_rearrange]: rearrange,
        [PropNames_RearrangeableReturn_reverse]: reverse,
        [PropNames_RearrangeableReturn_shuffle]: shuffle,
        [PropNames_RearrangeableReturn_sort]: sort,
        [PropNames_StaggeredReturn_stillStaggering]: stillStaggering,
        ...retPC
    }
})

/**
 * @compositeParams
 */
export const useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({

    info: { index, untabbable, ...customUserInfo },
    context: contextIncomingForRowAsChildOfTable,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic3,
    [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
    [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
    [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
    [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
    [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
    [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
    [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
    [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
    [PropNames_TextContentParameters_getText]: getText,
    [PropNames_TypeaheadNavigationParameters_collator]: collator,
    [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
    [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
    [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    [PropNames_RefElementParameters_onElementChange]: onElementChange,
    [PropNames_RefElementParameters_onMount]: onMount,
    [PropNames_RefElementParameters_onUnmount]: onUnmount,
    [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
    [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
    [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc1,
    ...void1

}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {

    // Create some helper functions
    const getRows = useCallback(() => getRows2(), []);
    const getCells = useCallback(() => getCells2(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getRows().getHighestIndex(), []);
    const getLowestChildIndex: (() => number) = useCallback<() => number>(() => getRows().getLowestIndex(), []);
    const isValidForNavigation = useCallback((i: number) => {
        const child = getRows().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);

    // Someone somewhere needs useRefElement, no shock there
    const {
        props: propsStable,
        [PropNames_RefElementReturn_getElement]: getElement,
        ...retRE
    } = useRefElement<RowElement>({
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_RefElementParameters_onMount]: onMount,
        [PropNames_RefElementParameters_onUnmount]: onUnmount
    });

    // Enormous bag of parameters for useGridNavigationRow
    const parameters: UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM> = {
        context: contextIncomingForRowAsChildOfTable,
        info: { index, untabbable },
        [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestChildIndex,
        [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestChildIndex,
        [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForNavigation,
        [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForNavigation,
        [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
        [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
        [PropNames_ManagedChildrenReturn_getChildren]: getCells,
        [PropNames_MultiSelectionChildParameters_initiallyMultiSelected]: initiallyMultiSelected,
        [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: multiSelectionDisabled,
        [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: onMultiSelectChange,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
        [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
        [PropNames_TextContentParameters_getText]: getText,
        [PropNames_TypeaheadNavigationParameters_collator]: collator,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    }


    // Actually call useGridNavigationRow,
    // and get an enormous bag of return values
    const {
        context: contextGNR,
        info: infoRowReturn,
        props: p3,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_PressParameters_excludeSpace]: excludeSpace,
        [PropNames_PressParameters_onPressSync]: onPressSync,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: ocmc2,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf,

        [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable,
        [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable,
        [PropNames_TextContentReturn_getTextContent]: getTextContent,
        [PropNames_MultiSelectionChildReturn_getMultiSelected]: getMultiSelected,
        [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead,
        [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus,
        [PropNames_SingleSelectionChildReturn_singleSelected]: singleSelected,
        [PropNames_MultiSelectionChildReturn_multiSelected]: multiSelected,
        [PropNames_SingleSelectionChildReturn_getSingleSelected]: getSingleSelected,
        [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: singleSelectedOffset,
        [PropNames_SingleSelectionChildReturn_singleSelectionMode]: singleSelectionMode,
        [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: getSingleSelectedOffset,
        [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected,
        ...retGNS
    }: UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM> = useGridNavigationSelectionRow<RowElement, CellElement>(parameters);

    // This is all the info the parent needs about us, the row
    // (NOT the info the cells provide to us, the row)
    const completeInfo: UseCompleteGridNavigationRowInfo<RowElement> = {
        getElement,
        index,
        untabbable,
        ...infoRowReturn,
    }

    const onChildrenMountChange = useStableCallback<OnChildrenMountChange<number>>((...a) => { ocmc1?.(...a); ocmc2?.(...a); });
    // Call both `useManagedChildren` and `useManagedChild` with their appropriate parameters.
    const {
        context: contextMC,
        [PropNames_ManagedChildrenReturn_getChildren]: getCells2,
        ...retMC
    } = useManagedChildren<CM>({
        [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
        [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange
    });
    const {
        [PropNames_ManagedChildReturn_getChildren]: getRows2,
        ...retMCC
    } = useManagedChild<RM>({
        context: contextIncomingForRowAsChildOfTable,
        info: { ...completeInfo, ...customUserInfo } as RM
    });


    const onCurrentFocusedInnerChanged = useStableCallback<UseHasCurrentFocusParametersSelf<RowElement>[typeof PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]>((focused, prevFocused, reason) => {
        ocfic2?.(focused, prevFocused, reason);
        ocfic3?.(focused, prevFocused, reason);
    })
    const {
        props: p2,
        [PropNames_HasCurrentFocusReturn_getCurrentFocused]: getCurrentFocused,
        [PropNames_HasCurrentFocusReturn_getCurrentFocusedInner]: getCurrentFocusedInner,
        ...retHCF
    } = useHasCurrentFocus<RowElement>({
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged
    });


    assertEmptyObject(void1);
    assertEmptyObject(retHCF);
    assertEmptyObject(retMCC);
    assertEmptyObject(retMC);
    assertEmptyObject(retGNS);

    const ret: UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> = {
        context: useMemoObject<CompleteGridNavigationCellContext<CellElement, CM>>({
            ...contextGNR,
            ...contextMC,
        }),
        props: [
            propsStable,
            ...p3,
            p2
        ],
        [PropNames_HasCurrentFocusReturn_getCurrentFocused]: getCurrentFocused,
        [PropNames_HasCurrentFocusReturn_getCurrentFocusedInner]: getCurrentFocusedInner,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
        [PropNames_ManagedChildrenReturn_getChildren]: getCells,
        [PropNames_ManagedChildReturn_getChildren]: getRows,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_PressParameters_excludeSpace]: excludeSpace,
        [PropNames_PressParameters_onPressSync]: onPressSync,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
        [PropNames_RovingTabIndexReturn_focusSelf]: focusSelf,

        [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable,
        [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable,
        [PropNames_TextContentReturn_getTextContent]: getTextContent,
        [PropNames_MultiSelectionChildReturn_getMultiSelected]: getMultiSelected,
        [PropNames_TypeaheadNavigationReturn_getCurrentTypeahead]: getCurrentTypeahead,
        [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus,
        [PropNames_SingleSelectionChildReturn_singleSelected]: singleSelected,
        [PropNames_MultiSelectionChildReturn_multiSelected]: multiSelected,
        [PropNames_SingleSelectionChildReturn_getSingleSelected]: getSingleSelected,
        [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: singleSelectedOffset,
        [PropNames_SingleSelectionChildReturn_singleSelectionMode]: singleSelectionMode,
        [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: getSingleSelectedOffset,
        [PropNames_MultiSelectionChildReturn_changeMultiSelected]: changeMultiSelected,
        ...retHCF,
        ...retGNS,
        ...retRE,
        ...retMCC
    }

    return ret;
})

/**
 * @compositeParams
 */
export const useCompleteGridNavigationCell = monitored(function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    //gridNavigationCellParameters,
    context,
    //textContentParameters,
    info: { focusSelf, index, untabbable, ...customUserInfo },
    [PropNames_RefElementParameters_onElementChange]: onElementChange,
    [PropNames_RefElementParameters_onMount]: onMount,
    [PropNames_RefElementParameters_onUnmount]: onUnmount,
    [PropNames_GridNavigationCellParameters_colSpan]: colSpan,
    [PropNames_RefElementReturn_getElement]: getElement,
    [PropNames_TextContentParameters_getText]: getText,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
    [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic2,

    ...void1
}: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM> {
    const { props: propsStable, ...retRE } = useRefElement<CellElement>({
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_RefElementParameters_onMount]: onMount,
        [PropNames_RefElementParameters_onUnmount]: onUnmount
    });

    const {
        [PropNames_PressParameters_excludeSpace]: es1,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: ocfic1,
        props: propsRti,
        info: info2,
        ...retGNS
    } = useGridNavigationSelectionCell<CellElement>({
        info: { index, untabbable },
        context,
        [PropNames_GridNavigationCellParameters_colSpan]: colSpan,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_TextContentParameters_getText]: getText,
    });

    assertEmptyObject(void1);

    const onCurrentFocusedInnerChanged = useStableCallback<UseHasCurrentFocusParametersSelf<CellElement>[typeof PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]>((...a) => { ocfic1?.(...a); ocfic2?.(...a) });
    const {
        props: p1,
        ...retHCF
    } = useHasCurrentFocus<CellElement>({
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: onCurrentFocusedChanged,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        [PropNames_RefElementReturn_getElement]: getElement
    });

    const baseInfo: UseCompleteGridNavigationCellInfo<CellElement> = {
        getElement,
        getLocallyTabbable: retGNS[PropNames_RovingTabIndexChildReturn_getTabbable],
        setLocallyTabbable: info2.setLocallyTabbable,
        focusSelf,
        index,
        untabbable
    }

    const { ...retMCR } = useManagedChild<CM>({ context, info: { ...baseInfo, ...customUserInfo } as CM });

    return {
        props: [
            propsStable,
            propsRti,
            p1
        ],
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        [PropNames_PressParameters_excludeSpace]: useStableCallback(() => (es1?.() || false)),
        ...retRE,
        ...retMCR,
        ...retHCF,
        ...retGNS,
    }
})

export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>>, typeof PropNames_SingleSelectionReturn_changeSingleSelectedIndex> { }

export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, typeof PropNames_SingleSelectionReturn_changeSingleSelectedIndex> { }

export function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange,
    [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn,
    [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange,
    [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
    [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
    [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
    [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
    [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
    [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
    [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
    [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
    [PropNames_PaginatedParameters_paginationMax]: paginationMax,
    [PropNames_PaginatedParameters_paginationMin]: paginationMin,
    [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
    [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
    [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
    [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
    [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: ossici,
    [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex,
    [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
    [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
    [PropNames_TypeaheadNavigationParameters_collator]: collator,
    [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
    [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
    [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
    [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
    [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
    [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
    [PropNames_RefElementParameters_onElementChange]: onElementChange,
    [PropNames_RefElementParameters_onMount]: onMount,
    [PropNames_RefElementParameters_onUnmount]: onUnmount,
    [PropNames_StaggeredParameters_staggered]: staggered,
    ...normalGridNavParameters
}: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, RM> {

    const retLN: UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> = useCompleteGridNavigation<ParentOrRowElement, RowElement, CellElement, RM>({
        [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: onCompositeFocusChange,
        [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn,
        [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange,
        [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
        [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
        [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
        [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
        [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
        [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: multiSelectionAriaPropName,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
        [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: singleSelectedIndex,
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: useStableCallback((...e) => ossicd?.(...e)),
        [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
        [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
        [PropNames_TypeaheadNavigationParameters_collator]: collator,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout,
        [PropNames_ManagedChildrenParameters_onAfterChildLayoutEffect]: onAfterChildLayoutEffect,
        [PropNames_ManagedChildrenParameters_onChildrenCountChange]: onChildrenCountChange,
        [PropNames_ManagedChildrenParameters_onChildrenMountChange]: onChildrenMountChange,
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_RefElementParameters_onMount]: onMount,
        [PropNames_RefElementParameters_onUnmount]: onUnmount,
        [PropNames_StaggeredParameters_staggered]: staggered
    });
    const {
        [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
    } = retLN;
    const {
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: ossicd
    } = useSelectionDeclarative({
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: ossici,
        [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex,
        [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex
    });

    return retLN;
}
