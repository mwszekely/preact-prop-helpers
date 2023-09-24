import { UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { RovingTabIndexChildContext, SetTabbableIndex } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenParametersSelf, UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { UseRearrangeableChildrenReturnType, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenParametersSelf, UseStaggeredChildrenReturnType } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeSelectionDeclarativeParameters, UseSelectionContext, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType, useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "../component-detail/use-grid-navigation-selection.js";
import { UseRefElementParameters, UseRefElementParametersSelf, UseRefElementReturnType, UseRefElementReturnTypeSelf, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusParametersSelf, UseChildrenHaveFocusReturnTypeSelf, useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParametersSelf, UseHasCurrentFocusReturnType, UseHasCurrentFocusReturnTypeSelf, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, OnChildrenMountChange, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildReturnTypeSelf, UseManagedChildrenContext, UseManagedChildrenParametersSelf, UseManagedChildrenReturnType, UseManagedChildrenReturnTypeSelf, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";


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
        "PropNames.LinearNavigationParameters.getLowestIndex" |
        "PropNames.LinearNavigationParameters.getHighestIndex" |
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation" |
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation" |
        "PropNames.RovingTabIndexParameters.untabbableBehavior" |
        "PropNames.RefElementReturn.getElement" |
        "PropNames.RovingTabIndexReturn.setTabbableIndex" |
        "PropNames.ManagedChildrenReturn.getChildren" |
        "PropNames.RearrangeableReturn.indexMangler" |
        "PropNames.RearrangeableReturn.indexDemangler" |
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused">,
    UseRefElementParameters<ParentOrRowElement>,
    UseChildrenHaveFocusParametersSelf<RowElement>,
    OmitStrong<UsePaginatedChildrenParametersSelf, "PropNames.PaginatedParameters.childCount">,
    OmitStrong<UseStaggeredChildrenParametersSelf, "PropNames.StaggeredParameters.childCount">,
    UseManagedChildrenParametersSelf<M> { }






export interface UseCompleteGridNavigationRowsParameters<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends
    OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, M>, "PropNames.RefElementReturn.getElement"> { }

export interface UseCompleteGridNavigationRowsReturnType<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends
    OmitStrong<UseRearrangeableChildrenReturnType<M>, never>,
    OmitStrong<UsePaginatedChildrenReturnType, "context">,
    OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
}




export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>,
    OmitStrong<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" |
        "PropNames.LinearNavigationParameters.getLowestIndex" |
        "PropNames.LinearNavigationParameters.getHighestIndex" |
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation" |
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation" |
        "PropNames.RovingTabIndexParameters.untabbable" |
        "PropNames.ManagedChildrenReturn.getChildren" |
        "PropNames.RefElementReturn.getElement">,
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
        "PropNames.ManagedChildrenParameters.onChildrenMountChange" |
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange">,
    OmitStrong<UseManagedChildrenReturnTypeSelf<RM>, never>,
    OmitStrong<UseRefElementReturnTypeSelf<ParentOrRowElement>, "props">,
    OmitStrong<UseRefElementReturnTypeSelf<ParentOrRowElement>, "props">,
    OmitStrong<UseChildrenHaveFocusReturnTypeSelf, never>,
    OmitStrong<UseManagedChildrenReturnTypeSelf<RM>, never>,
    OmitStrong<UseProcessedChildrenReturnType<RowElement, any>,
        "context" |
        "PropNames.RearrangeableReturn.indexDemangler" |
        "PropNames.RearrangeableReturn.indexMangler" |
        "PropNames.RearrangeableReturn.children" |
        "PropNames.StaggeredReturn.stillStaggering" |
        "PropNames.PaginatedReturn.refreshPagination"> {
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

    "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn,
    "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange,
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
    "PropNames.RefElementParameters.onElementChange": onElementChange,
    "PropNames.RefElementParameters.onMount": onMount,
    "PropNames.RefElementParameters.onUnmount": onUnmount,
    "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
    "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
    "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc2,
    "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": ocfc1,
    "PropNames.StaggeredParameters.staggered": staggered,
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
        "PropNames.RefElementReturn.getElement": getElement,
        ...retRE
    } = useRefElement<ParentOrRowElement>({
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
        ...retCPC
    } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback((): boolean => getAnyFocused2());
    const setTabbableIndex: SetTabbableIndex = useStableCallback<SetTabbableIndex>((...a) => setTabbableIndex2(...a));
    const {
        context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        props,
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": ocfc2,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex2,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc1,
        "PropNames.RovingTabIndexReturn.focusSelf": focusSelf,
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex,
        "PropNames.SingleSelectionReturn.getSingleSelectedIndex": getSingleSelectedIndex,
        "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus,
        ...retGN
    }: UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement> = useGridNavigationSelection<ParentOrRowElement, RowElement>({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn,
        "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestChildIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestChildIndex,
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
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.RovingTabIndexParameters.untabbableBehavior": "focus-parent",
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange,
        "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName,
        "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    });

    //const { "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": onCompositeFocusChange } = retGN

    const onCompositeFocusChange = useStableCallback<UseChildrenHaveFocusParametersSelf<any>["PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange"]>((...a) => { ocfc1?.(...a); ocfc2?.(...a); })

    const {
        context: { childrenHaveFocusChildContext },
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused2,
        ...retCHF
    } = useChildrenHaveFocus<RowElement>({
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": onCompositeFocusChange
    });

    const onChildrenMountChange = useStableCallback<OnChildrenMountChange<number>>((...a) => { ocmc1?.(...a); ocmc2?.(...a); })
    const {
        context: { managedChildContext },
        "PropNames.ManagedChildrenReturn.getChildren": getChildrenButItsDeclaredTooLateToBeUseful,
        ...retMC
    }: UseManagedChildrenReturnType<RM> = useManagedChildren<RM>({
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange
    });

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
        "PropNames.RearrangeableReturn.rearrange": rearrange,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.sort": sort,
        "PropNames.RovingTabIndexReturn.focusSelf": focusSelf,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.SingleSelectionReturn.changeSingleSelectedIndex": changeSingleSelectedIndex,
        "PropNames.SingleSelectionReturn.getSingleSelectedIndex": getSingleSelectedIndex,
        "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus,
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused2,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
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
    "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
    "PropNames.ManagedChildrenReturn.getChildren": getChildren,
    "PropNames.PaginatedParameters.paginationMax": paginationMax,
    "PropNames.PaginatedParameters.paginationMin": paginationMin,
    "PropNames.RearrangeableParameters.adjust": adjust,
    "PropNames.RearrangeableParameters.children": childrin,
    "PropNames.RearrangeableParameters.compare": compare,
    "PropNames.RearrangeableParameters.getIndex": getIndex,
    "PropNames.RearrangeableParameters.onRearranged": onRearranged,
    "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
    "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
    "PropNames.StaggeredParameters.staggered": staggered,
    "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
    "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
    "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
    ...void1
}: UseCompleteGridNavigationRowsParameters<TabbableChildElement, M>): UseCompleteGridNavigationRowsReturnType<TabbableChildElement, M> {

    const {
        context: contextRPS,
        "PropNames.RearrangeableReturn.children": childout,
        "PropNames.PaginatedReturn.refreshPagination": refreshPagination,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RearrangeableReturn.rearrange": rearrange,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.sort": sort,
        "PropNames.StaggeredReturn.stillStaggering": stillStaggering,
        ...retPC
    } = useProcessedChildren<TabbableChildElement, M>({
        "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RearrangeableParameters.adjust": adjust,
        "PropNames.RearrangeableParameters.children": childrin,
        "PropNames.RearrangeableParameters.compare": compare,
        "PropNames.RearrangeableParameters.getIndex": getIndex,
        "PropNames.RearrangeableParameters.onRearranged": onRearranged,
        "PropNames.RefElementReturn.getElement": context.processedChildrenContext["PropNames.RefElementReturn.getElement"],
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.StaggeredParameters.staggered": staggered,
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
        context,
    });

    assertEmptyObject(void1);

    return {
        context: contextRPS,
        "PropNames.RearrangeableReturn.children": childout,
        "PropNames.PaginatedReturn.refreshPagination": refreshPagination,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RearrangeableReturn.rearrange": rearrange,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.sort": sort,
        "PropNames.StaggeredReturn.stillStaggering": stillStaggering,
        ...retPC
    }
})

/**
 * @compositeParams
 */
export const useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({

    info: { index, untabbable, ...customUserInfo },
    context: contextIncomingForRowAsChildOfTable,
    "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
    "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic3,
    "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
    "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
    "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected,
    "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
    "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange,
    "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
    "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
    "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
    "PropNames.TextContentParameters.getText": getText,
    "PropNames.TypeaheadNavigationParameters.collator": collator,
    "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
    "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
    "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    "PropNames.RefElementParameters.onElementChange": onElementChange,
    "PropNames.RefElementParameters.onMount": onMount,
    "PropNames.RefElementParameters.onUnmount": onUnmount,
    "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
    "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
    "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc1,
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
        "PropNames.RefElementReturn.getElement": getElement,
        ...retRE
    } = useRefElement<RowElement>({
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount
    });

    // Enormous bag of parameters for useGridNavigationRow
    const parameters: UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM> = {
        context: contextIncomingForRowAsChildOfTable,
        info: { index, untabbable },
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestChildIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestChildIndex,
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForNavigation,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForNavigation,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.ManagedChildrenReturn.getChildren": getCells,
        "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected,
        "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled,
        "PropNames.TextContentParameters.getText": getText,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    }


    // Actually call useGridNavigationRow,
    // and get an enormous bag of return values
    const {
        context: contextGNR,
        info: infoRowReturn,
        props: p3,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.PressParameters.excludeSpace": excludeSpace,
        "PropNames.PressParameters.onPressSync": onPressSync,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": ocmc2,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.focusSelf": focusSelf,

        "PropNames.RovingTabIndexChildReturn.tabbable": tabbable,
        "PropNames.RovingTabIndexChildReturn.getTabbable": getTabbable,
        "PropNames.TextContentReturn.getTextContent": getTextContent,
        "PropNames.MultiSelectionChildReturn.getMultiSelected": getMultiSelected,
        "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus,
        "PropNames.SingleSelectionChildReturn.singleSelected": singleSelected,
        "PropNames.MultiSelectionChildReturn.multiSelected": multiSelected,
        "PropNames.SingleSelectionChildReturn.getSingleSelected": getSingleSelected,
        "PropNames.SingleSelectionChildReturn.singleSelectedOffset": singleSelectedOffset,
        "PropNames.SingleSelectionChildReturn.singleSelectionMode": singleSelectionMode,
        "PropNames.SingleSelectionChildReturn.getSingleSelectedOffset": getSingleSelectedOffset,
        "PropNames.MultiSelectionChildReturn.changeMultiSelected": changeMultiSelected,
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
        "PropNames.ManagedChildrenReturn.getChildren": getCells2,
        ...retMC
    } = useManagedChildren<CM>({
        "PropNames.ManagedChildrenParameters.onAfterChildLayoutEffect": onAfterChildLayoutEffect,
        "PropNames.ManagedChildrenParameters.onChildrenCountChange": onChildrenCountChange,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange
    });
    const {
        "PropNames.ManagedChildReturn.getChildren": getRows2,
        ...retMCC
    } = useManagedChild<RM>({
        context: contextIncomingForRowAsChildOfTable,
        info: { ...completeInfo, ...customUserInfo } as RM
    });


    const onCurrentFocusedInnerChanged = useStableCallback<UseHasCurrentFocusParametersSelf<RowElement>["PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged"]>((focused, prevFocused, reason) => {
        ocfic2?.(focused, prevFocused, reason);
        ocfic3?.(focused, prevFocused, reason);
    })
    const {
        props: p2,
        "PropNames.HasCurrentFocusReturn.getCurrentFocused": getCurrentFocused,
        "PropNames.HasCurrentFocusReturn.getCurrentFocusedInner": getCurrentFocusedInner,
        ...retHCF
    } = useHasCurrentFocus<RowElement>({
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged
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
        "PropNames.HasCurrentFocusReturn.getCurrentFocused": getCurrentFocused,
        "PropNames.HasCurrentFocusReturn.getCurrentFocusedInner": getCurrentFocusedInner,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        "PropNames.ManagedChildrenParameters.onChildrenMountChange": onChildrenMountChange,
        "PropNames.ManagedChildrenReturn.getChildren": getCells,
        "PropNames.ManagedChildReturn.getChildren": getRows,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.PressParameters.excludeSpace": excludeSpace,
        "PropNames.PressParameters.onPressSync": onPressSync,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.RovingTabIndexReturn.getTabbableIndex": getTabbableIndex,
        "PropNames.RovingTabIndexReturn.focusSelf": focusSelf,

        "PropNames.RovingTabIndexChildReturn.tabbable": tabbable,
        "PropNames.RovingTabIndexChildReturn.getTabbable": getTabbable,
        "PropNames.TextContentReturn.getTextContent": getTextContent,
        "PropNames.MultiSelectionChildReturn.getMultiSelected": getMultiSelected,
        "PropNames.TypeaheadNavigationReturn.getCurrentTypeahead": getCurrentTypeahead,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus,
        "PropNames.SingleSelectionChildReturn.singleSelected": singleSelected,
        "PropNames.MultiSelectionChildReturn.multiSelected": multiSelected,
        "PropNames.SingleSelectionChildReturn.getSingleSelected": getSingleSelected,
        "PropNames.SingleSelectionChildReturn.singleSelectedOffset": singleSelectedOffset,
        "PropNames.SingleSelectionChildReturn.singleSelectionMode": singleSelectionMode,
        "PropNames.SingleSelectionChildReturn.getSingleSelectedOffset": getSingleSelectedOffset,
        "PropNames.MultiSelectionChildReturn.changeMultiSelected": changeMultiSelected,
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
    "PropNames.RefElementParameters.onElementChange": onElementChange,
    "PropNames.RefElementParameters.onMount": onMount,
    "PropNames.RefElementParameters.onUnmount": onUnmount,
    "PropNames.GridNavigationCellParameters.colSpan": colSpan,
    "PropNames.RefElementReturn.getElement": getElement,
    "PropNames.TextContentParameters.getText": getText,
    "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
    "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2,

    ...void1
}: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM> {
    const { props: propsStable, ...retRE } = useRefElement<CellElement>({
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.RefElementParameters.onMount": onMount,
        "PropNames.RefElementParameters.onUnmount": onUnmount
    });

    const {
        "PropNames.PressParameters.excludeSpace": es1,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1,
        props: propsRti,
        info: info2,
        ...retGNS
    } = useGridNavigationSelectionCell<CellElement>({
        info: { index, untabbable },
        context,
        "PropNames.GridNavigationCellParameters.colSpan": colSpan,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.TextContentParameters.getText": getText,
    });

    assertEmptyObject(void1);

    const onCurrentFocusedInnerChanged = useStableCallback<UseHasCurrentFocusParametersSelf<CellElement>["PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged"]>((...a) => { ocfic1?.(...a); ocfic2?.(...a) });
    const {
        props: p1,
        ...retHCF
    } = useHasCurrentFocus<CellElement>({
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": onCurrentFocusedChanged,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        "PropNames.RefElementReturn.getElement": getElement
    });

    const baseInfo: UseCompleteGridNavigationCellInfo<CellElement> = {
        getElement,
        getLocallyTabbable: retGNS["PropNames.RovingTabIndexChildReturn.getTabbable"],
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
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        "PropNames.PressParameters.excludeSpace": useStableCallback(() => (es1?.() || false)),
        ...retRE,
        ...retMCR,
        ...retHCF,
        ...retGNS,
    }
})

export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>>, "PropNames.SingleSelectionReturn.changeSingleSelectedIndex"> { }

export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "PropNames.SingleSelectionReturn.changeSingleSelectedIndex"> { }

export function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": onCompositeFocusChange,
    "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn,
    "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange,
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
    "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": ossici,
    "PropNames.SingleSelectionParameters.singleSelectedIndex": singleSelectedIndex,
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
    "PropNames.StaggeredParameters.staggered": staggered,
    ...normalGridNavParameters
}: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, RM> {

    const retLN: UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> = useCompleteGridNavigation<ParentOrRowElement, RowElement, CellElement, RM>({
        "PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange": onCompositeFocusChange,
        "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn,
        "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange,
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
        "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": singleSelectedIndex,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": useStableCallback((...e) => ossicd?.(...e)),
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
