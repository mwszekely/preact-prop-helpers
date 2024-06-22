import { UseGridNavigationRowContext, $gridNavigationCellParameters, $gridNavigationParameters, $gridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { $linearNavigationParameters, $getLowestIndex, $getHighestIndex, $isValidForLinearNavigation, $linearNavigationReturn } from "../component-detail/keyboard-navigation/use-linear-navigation.js";
import { $focusSelfChild, $getLocallyTabbable, $setLocallyTabbable, $untabbable, $untabbableBehavior, $getTabbable, $getTabbableIndex, RovingTabIndexChildContext, $setTabbableIndex, $rovingTabIndexChildReturn, $rovingTabIndexContext, $rovingTabIndexParameters, $rovingTabIndexReturn } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { $isValidForTypeaheadNavigation, UseTypeaheadNavigationContext, $typeaheadNavigationContext, $typeaheadNavigationParameters, $typeaheadNavigationReturn } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenReturnType, $paginatedChildrenParameters, $paginatedChildrenReturn } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType, $processedChildrenContext, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { $children, $indexDemangler, $indexMangler, $rearrange, $reverse, $shuffle, $sort, UseRearrangeableChildrenReturnType, $rearrangeableChildrenParameters, $rearrangeableChildrenReturn, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenReturnType, $staggeredChildrenParameters, $staggeredChildrenReturn } from "../component-detail/processed-children/use-staggered-children.js";
import { $multiSelectionChildParameters, $multiSelectionChildReturn, $multiSelectionContext, $multiSelectionParameters, $multiSelectionReturn } from "../component-detail/selection/use-multi-selection.js";
import { MakeSelectionDeclarativeParameters, UseSelectionContext, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { $initiallySingleSelectedIndex, $onSingleSelectedIndexChange, $singleSelectedIndex, $changeSingleSelectedIndex, $singleSelectionChildParameters, $singleSelectionChildReturn, $singleSelectionContext, $singleSelectionDeclarativeParameters, $singleSelectionParameters, $singleSelectionReturn } from "../component-detail/selection/use-single-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType, useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "../component-detail/use-grid-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { $getElement, UseRefElementParameters, UseRefElementReturnType, $refElementParameters, $refElementReturn, useRefElement } from "../dom-helpers/use-ref-element.js";
import { $getText, $onTextContentChange, $textContentParameters, $textContentReturn, UseTextContentParameters, UseTextContentReturnType, useTextContent } from "../dom-helpers/use-text-content.js";
import { $getAnyFocused, UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, $childrenHaveFocusChildContext, $childrenHaveFocusParameters, $childrenHaveFocusReturn, useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { $hasCurrentFocusParameters, $hasCurrentFocusReturn, $onCurrentFocusedChanged, $onCurrentFocusedInnerChanged, UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { $index, ManagedChildInfo, ManagedChildren, $getChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, $managedChildContext, $managedChildReturn, $managedChildrenParameters, $managedChildrenReturn, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { TargetedOmit, useCallback } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { $excludeSpace, $pressParameters } from "./use-press.js";


export type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> =
    // All types in the user-supplied info type that aren't in the base type (since we handle it) 
    Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> |
    // except for these extra types! Because the user supplies them.
    UseGridNavigationSelectionRowInfoKeysParameters;

export type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> =
    Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> |
    UseGridNavigationSelectionCellInfoKeysParameters | typeof $focusSelfChild;

export interface UseCompleteGridNavigationRowInfo<RowElement extends Element> extends GridSelectChildRowInfo<RowElement>, ManagedChildInfo<number> { }
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSelectChildCellInfo<CellElement>, ManagedChildInfo<number> { }

export interface UseCompleteGridNavigationRowsInfo<ChildElement extends Element> extends
    UseProcessedChildInfo<ChildElement>,
    ManagedChildInfo<number> { }

export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, typeof $rearrangeableChildrenReturn | typeof $refElementReturn | typeof $managedChildrenReturn | typeof $linearNavigationParameters | typeof $typeaheadNavigationParameters | typeof $rovingTabIndexParameters | typeof $childrenHaveFocusReturn>,
    TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, typeof $linearNavigationParameters, typeof $getLowestIndex | typeof $getHighestIndex | typeof $isValidForLinearNavigation>,
    TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, typeof $typeaheadNavigationParameters, typeof $isValidForTypeaheadNavigation>,
    TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, typeof $rovingTabIndexParameters, typeof $untabbableBehavior>,
    Pick<UseRefElementParameters<ParentOrRowElement>, typeof $refElementParameters> {

}






export interface UseCompleteGridNavigationRowsParameters<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends
    OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, M>, never> {
}

export interface UseCompleteGridNavigationRowsReturnType<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends
    OmitStrong<UseRearrangeableChildrenReturnType<M>, never>,
    OmitStrong<UsePaginatedChildrenReturnType, "context">,
    OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
}




export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>,
    OmitStrong<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" | typeof $managedChildrenReturn | typeof $refElementReturn | typeof $linearNavigationParameters | typeof $typeaheadNavigationParameters>,
    Pick<UseTextContentParameters<RowElement>, typeof $textContentParameters>,
    TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, typeof $linearNavigationParameters, typeof $getLowestIndex | typeof $getHighestIndex | typeof $isValidForLinearNavigation>,
    TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, typeof $typeaheadNavigationParameters, typeof $isValidForTypeaheadNavigation>,
    OmitStrong<UseHasCurrentFocusParameters<RowElement>, typeof $refElementReturn> {
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationCellContext<CellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>,
    Pick<UseTextContentParameters<CellElement>, typeof $textContentParameters>,
    OmitStrong<UseGridNavigationSelectionCellParameters<CellElement>, "info" | "context" | typeof $refElementReturn> {
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
    OmitStrong<UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>, "props" | "context" | typeof $childrenHaveFocusParameters | typeof $managedChildrenParameters>,
    Pick<UseManagedChildrenReturnType<RM>, typeof $managedChildrenReturn>,
    Pick<UseRefElementReturnType<ParentOrRowElement>, typeof $refElementReturn>,
    TargetedOmit<UseProcessedChildrenReturnType<RowElement, any>, typeof $rearrangeableChildrenReturn, typeof $indexDemangler | typeof $indexMangler | typeof $children>,
    Pick<UseChildrenHaveFocusReturnType<RowElement>, typeof $childrenHaveFocusReturn> {
    contextChildren: CompleteGridNavigationRowContext<RowElement, RM>;
    contextProcessing: UseProcessedChildrenContext;
    props: ElementProps<ParentOrRowElement>;
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM>, typeof $hasCurrentFocusParameters | typeof $managedChildrenParameters | "info" | typeof $textContentParameters>,
    Pick<UseManagedChildrenReturnType<CM>, typeof $managedChildrenReturn>,
    Pick<UseHasCurrentFocusReturnType<RowElement>, typeof $hasCurrentFocusReturn>,
    Pick<UseRefElementReturnType<RowElement>, typeof $refElementReturn>,
    Pick<UseTextContentReturnType, typeof $textContentReturn>,
    Pick<UseManagedChildReturnType<RM>, typeof $managedChildReturn> {
    context: CompleteGridNavigationCellContext<CellElement, CM>;
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSelectionCellReturnType<CellElement>, typeof $hasCurrentFocusParameters | "info" | typeof $textContentParameters>,
    OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">,
    Pick<UseTextContentReturnType, typeof $textContentReturn>,
    UseHasCurrentFocusReturnType<CellElement>,
    UseManagedChildReturnType<CM> {
    props: ElementProps<CellElement>;
}

/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 */
export const useCompleteGridNavigation = monitored(function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({
    [$gridNavigationParameters]: gridNavigationParameters,
    [$linearNavigationParameters]: linearNavigationParameters,
    [$rovingTabIndexParameters]: rovingTabIndexParameters,
    [$singleSelectionParameters]: singleSelectionParameters,
    [$multiSelectionParameters]: multiSelectionParameters,
    [$typeaheadNavigationParameters]: typeaheadNavigationParameters,
    [$paginatedChildrenParameters]: paginatedChildrenParameters,
    [$refElementParameters]: refElementParameters,
    ...void1
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> {
    assertEmptyObject(void1);
    const getChildren: () => ManagedChildren<RM> = useCallback<() => ManagedChildren<RM>>(() => managedChildrenReturn[$getChildren](), []);
    const getLowestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);


    const isValidForNavigation = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child[$untabbable])
            return false;
        return true;
    }, []);

    const { [$refElementReturn]: refElementReturn, propsStable, ...void2 } = useRefElement<ParentOrRowElement>({ [$refElementParameters]: refElementParameters })

    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, [$indexDemangler]: indexDemangler, [$indexMangler]: indexMangler, [$rearrange]: rearrange, [$reverse]: reverse, [$shuffle]: shuffle, [$sort]: sort } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback((): boolean => childrenHaveFocusReturn[$getAnyFocused]());
    const {
        [$childrenHaveFocusParameters]: childrenHaveFocusParameters,
        [$managedChildrenParameters]: managedChildrenParameters,
        context: { [$gridNavigationRowContext]: gridNavigationRowContext, [$rovingTabIndexContext]: rovingTabIndexContext, [$singleSelectionContext]: singleSelectionContext, [$multiSelectionContext]: multiSelectionContext, [$typeaheadNavigationContext]: typeaheadNavigationContext },
        props,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$linearNavigationReturn]: linearNavigationReturn,
        [$singleSelectionReturn]: singleSelectionReturn,
        [$multiSelectionReturn]: multiSelectionReturn,
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn,
        ...void3
    }: UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement> = useGridNavigationSelection<ParentOrRowElement, RowElement>({
        [$gridNavigationParameters]: gridNavigationParameters,
        [$singleSelectionParameters]: singleSelectionParameters,
        [$multiSelectionParameters]: multiSelectionParameters,
        [$paginatedChildrenParameters]: paginatedChildrenParameters,
        [$refElementReturn]: refElementReturn,
        [$linearNavigationParameters]: { [$getLowestIndex]: getLowestChildIndex, [$getHighestIndex]: getHighestChildIndex, [$isValidForLinearNavigation]: isValidForNavigation, ...linearNavigationParameters },
        [$managedChildrenReturn]: { [$getChildren]: getChildren },
        [$rovingTabIndexParameters]: { [$untabbableBehavior]: "focus-parent", ...rovingTabIndexParameters },
        [$typeaheadNavigationParameters]: { [$isValidForTypeaheadNavigation]: isValidForNavigation, ...typeaheadNavigationParameters },
        [$childrenHaveFocusReturn]: { [$getAnyFocused]: getAnyFocused },
        [$rearrangeableChildrenReturn]: { [$indexDemangler]: indexDemangler, [$indexMangler]: indexMangler }
    });



    const { context: { [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext }, [$childrenHaveFocusReturn]: childrenHaveFocusReturn } = useChildrenHaveFocus<RowElement>({ [$childrenHaveFocusParameters]: childrenHaveFocusParameters });
    const { context: { [$managedChildContext]: managedChildContext }, [$managedChildrenReturn]: managedChildrenReturn }: UseManagedChildrenReturnType<RM> = useManagedChildren<RM>({ [$managedChildrenParameters]: managedChildrenParameters });
    const { [$getTabbableIndex]: getTabbableIndex, [$setTabbableIndex]: setTabbableIndex } = rovingTabIndexReturn;
    const processedChildrenContext = useMemoObject<UseProcessedChildrenContext[typeof $processedChildrenContext]>({ [$getTabbableIndex]: getTabbableIndex, [$setTabbableIndex]: setTabbableIndex, [$getAnyFocused]: getAnyFocused/*, [RgetElement]: refElementReturn[RgetElement]*/ });
    const c2 = useMemoObject<UseProcessedChildrenContext>({
        [$processedChildrenContext]: processedChildrenContext,
        ...contextProcessing
    });
    const context = useMemoObject<CompleteGridNavigationRowContext<RowElement, RM>>({
        [$singleSelectionContext]: singleSelectionContext,
        [$multiSelectionContext]: multiSelectionContext,
        [$managedChildContext]: managedChildContext,
        [$rovingTabIndexContext]: rovingTabIndexContext,
        [$typeaheadNavigationContext]: typeaheadNavigationContext,
        [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext,
        [$gridNavigationRowContext]: gridNavigationRowContext,
        contextProcessing: c2
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        contextChildren: context,
        contextProcessing: c2,
        props: useMergedProps(props, propsStable),
        [$refElementReturn]: refElementReturn,

        [$managedChildrenReturn]: managedChildrenReturn,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$childrenHaveFocusReturn]: childrenHaveFocusReturn,
        [$linearNavigationReturn]: linearNavigationReturn,
        [$singleSelectionReturn]: singleSelectionReturn,
        [$multiSelectionReturn]: multiSelectionReturn,
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn,
        [$rearrangeableChildrenReturn]: { [$rearrange]: rearrange, [$reverse]: reverse, [$shuffle]: shuffle, [$sort]: sort }
    }

})



/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 */
export const useCompleteGridNavigationRows = monitored(function useCompleteGridNavigationRows<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>>({
    context,
    [$paginatedChildrenParameters]: paginatedChildrenParameters,
    [$rearrangeableChildrenParameters]: rearrangeableChildrenParameters,
    [$staggeredChildrenParameters]: staggeredChildrenParameters,
    [$managedChildrenParameters]: managedChildrenParameters
}: UseCompleteGridNavigationRowsParameters<TabbableChildElement, M>): UseCompleteGridNavigationRowsReturnType<TabbableChildElement, M> {
    const {
        context: contextRPS,
        [$paginatedChildrenReturn]: paginatedChildrenReturn,
        [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn,
        [$staggeredChildrenReturn]: staggeredChildrenReturn,
    } = useProcessedChildren<TabbableChildElement, M>({
        [$paginatedChildrenParameters]: paginatedChildrenParameters,
        [$rearrangeableChildrenParameters]: rearrangeableChildrenParameters,
        [$staggeredChildrenParameters]: staggeredChildrenParameters,
        [$managedChildrenParameters]: managedChildrenParameters,
        //refElementReturn: context.processedChildrenContext,
        context,
    });

    return {
        context: contextRPS,
        [$paginatedChildrenReturn]: paginatedChildrenReturn,
        [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn,
        [$staggeredChildrenReturn]: staggeredChildrenReturn
    }
})

/**
 * @compositeParams
 */
export const useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({

    info: { [$index]: index, [$untabbable]: untabbable, ...customUserInfo },
    context: contextIncomingForRowAsChildOfTable,
    [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: otcc1 },

    [$linearNavigationParameters]: linearNavigationParameters,
    [$rovingTabIndexParameters]: rovingTabIndexParameters,
    [$typeaheadNavigationParameters]: typeaheadNavigationParameters,
    [$hasCurrentFocusParameters]: { [$onCurrentFocusedChanged]: ocfc1, [$onCurrentFocusedInnerChanged]: ocfic3, ...void5 },
    [$singleSelectionChildParameters]: singleSelectionChildParameters,
    [$multiSelectionChildParameters]: multiSelectionChildParameters,
    ...void1

}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {

    // Create some helper functions
    const getChildren = useCallback(() => managedChildrenReturn[$getChildren](), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const isValidForNavigation = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child[$untabbable])
            return false;
        return true;
    }, []);

    // Someone somewhere needs useRefElement, no shock there
    const { [$refElementReturn]: refElementReturn, propsStable, ...void6 } = useRefElement<RowElement>({ [$refElementParameters]: {} });

    // Enormous bag of parameters for useGridNavigationRow
    const parameters: UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM> = {
        [$rovingTabIndexParameters]: rovingTabIndexParameters,
        [$typeaheadNavigationParameters]: { [$isValidForTypeaheadNavigation]: isValidForNavigation, ...typeaheadNavigationParameters },
        [$linearNavigationParameters]: { [$isValidForLinearNavigation]: isValidForNavigation, [$getHighestIndex]: getHighestChildIndex, [$getLowestIndex]: getLowestChildIndex, ...linearNavigationParameters },
        [$managedChildrenReturn]: { [$getChildren]: getChildren },
        [$refElementReturn]: refElementReturn,
        context: contextIncomingForRowAsChildOfTable,
        info: { [$index]: index, [$untabbable]: untabbable },
        //textContentReturn: { getTextContent: useStableCallback(() => textContentReturn.getTextContent()) },
        [$singleSelectionChildParameters]: singleSelectionChildParameters,
        [$multiSelectionChildParameters]: multiSelectionChildParameters
    }

    // Actually call useGridNavigationRow,
    // and get an enormous bag of return values
    const {
        [$linearNavigationReturn]: linearNavigationReturn,
        [$managedChildrenParameters]: managedChildrenParameters,
        [$pressParameters]: pressParameters,
        [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$singleSelectionChildReturn]: singleSelectionChildReturn,
        [$multiSelectionChildReturn]: multiSelectionChildReturn,
        [$textContentParameters]: { [$onTextContentChange]: otcc2 },
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn,
        [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic1, ...void3 },
        context: contextGNR,
        info: infoRowReturn,
        props: p3,
        ...void2
    }: UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM> = useGridNavigationSelectionRow<RowElement, CellElement>(parameters);

    const { [$textContentReturn]: textContentReturn, ...void7 } = useTextContent({ [$refElementReturn]: refElementReturn, [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: useStableMergedCallback(otcc1, otcc2) } })

    // This is all the info the parent needs about us, the row
    // (NOT the info the cells provide to us, the row)
    const completeInfo: UseCompleteGridNavigationRowInfo<RowElement> = {
        [$getElement]: refElementReturn[$getElement],
        [$index]: index,
        [$untabbable]: untabbable,
        ...infoRowReturn,
    }

    // Call both `useManagedChildren` and `useManagedChild` with their appropriate parameters.
    const { context: contextMC, [$managedChildrenReturn]: managedChildrenReturn } = useManagedChildren<CM>({ [$managedChildrenParameters]: managedChildrenParameters });
    const { [$managedChildReturn]: managedChildReturn, ...void4 } = useManagedChild<RM>({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } as RM })

    const context = useMemoObject<CompleteGridNavigationCellContext<CellElement, CM>>({
        ...contextGNR,
        ...contextMC,
    });

    const { [$hasCurrentFocusReturn]: hasCurrentFocusReturn } = useHasCurrentFocus<RowElement>({
        [$refElementReturn]: refElementReturn,
        [$hasCurrentFocusParameters]: {
            [$onCurrentFocusedChanged]: ocfc1,
            [$onCurrentFocusedInnerChanged]: useStableMergedCallback(ocfic1, ocfic3),
        }
    });

    const props = useMergedProps(
        propsStable,
        p3,
        hasCurrentFocusReturn.propsStable,
    );

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);

    return {
        [$pressParameters]: pressParameters,
        [$hasCurrentFocusReturn]: hasCurrentFocusReturn,
        [$managedChildrenReturn]: managedChildrenReturn,
        [$textContentReturn]: textContentReturn,
        [$managedChildReturn]: managedChildReturn,
        [$linearNavigationReturn]: linearNavigationReturn,
        [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$singleSelectionChildReturn]: singleSelectionChildReturn,
        [$multiSelectionChildReturn]: multiSelectionChildReturn,
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn,
        [$refElementReturn]: refElementReturn,
        context,
        props,
    }
})

/**
 * @compositeParams
 */
export const useCompleteGridNavigationCell = monitored(function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    [$gridNavigationCellParameters]: gridNavigationCellParameters,
    context,
    [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: otcc1, ...void4 },
    info: { [$focusSelfChild]: focusSelf, [$index]: index, [$untabbable]: untabbable, ...customUserInfo },
    ...void1
}: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM> {
    const { [$refElementReturn]: refElementReturn, propsStable } = useRefElement<CellElement>({ [$refElementParameters]: {} });
    const {
        [$hasCurrentFocusParameters]: hasCurrentFocusParameters,
        [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn,
        [$textContentParameters]: { [$onTextContentChange]: otcc2 },
        [$pressParameters]: { [$excludeSpace]: es1 },
        props: propsRti,
        info: info2,
        ...void2
    } = useGridNavigationSelectionCell<CellElement>({
        [$gridNavigationCellParameters]: gridNavigationCellParameters,
        info: { [$index]: index, [$untabbable]: untabbable},
        context,
        [$refElementReturn]: refElementReturn,
        //textContentReturn: { getTextContent: useStableCallback((): string | null => textContentReturn.getTextContent()) },
    });
    const { [$textContentReturn]: textContentReturn, ...void3 } = useTextContent({ [$refElementReturn]: refElementReturn, [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: useStableMergedCallback(otcc1, otcc2) } })

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    const { [$hasCurrentFocusReturn]: hasCurrentFocusReturn } = useHasCurrentFocus<CellElement>({
        [$hasCurrentFocusParameters]: {
            [$onCurrentFocusedChanged]: null,
            ...hasCurrentFocusParameters
        },
        [$refElementReturn]: refElementReturn
    });

    const baseInfo: UseCompleteGridNavigationCellInfo<CellElement> = {
        [$getElement]: refElementReturn[$getElement],
        [$getLocallyTabbable]: rovingTabIndexChildReturn[$getTabbable],
        [$setLocallyTabbable]: info2[$setLocallyTabbable],
        [$focusSelfChild]: focusSelf,
        [$index]: index,
        [$untabbable]: untabbable
    }

    const { [$managedChildReturn]: managedChildReturn } = useManagedChild<CM>({ context, info: { ...baseInfo, ...customUserInfo } as CM })

    const props = useMergedProps(
        propsStable,
        propsRti,
        hasCurrentFocusReturn.propsStable
    );

    return {
        props,
        [$refElementReturn]: refElementReturn,
        [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn,
        [$pressParameters]: { [$excludeSpace]: useStableCallback(() => (es1?.() || false)) },
        [$hasCurrentFocusReturn]: hasCurrentFocusReturn,
        [$managedChildReturn]: managedChildReturn,
        [$textContentReturn]: textContentReturn
    }
})

export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>>, typeof $singleSelectionReturn> { }

export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, typeof $singleSelectionReturn, typeof $changeSingleSelectedIndex>,
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, typeof $multiSelectionReturn, never>,
    OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, typeof $singleSelectionReturn | typeof $multiSelectionReturn> { }

export function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({
    [$singleSelectionDeclarativeParameters]: singleSelectionDeclarativeParameters,
    [$singleSelectionParameters]: singleSelectionParameters,
    ...normalGridNavParameters
}: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, RM> {
    const ret2: UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> = useCompleteGridNavigation<ParentOrRowElement, RowElement, RM>({
        [$singleSelectionParameters]: {
            [$initiallySingleSelectedIndex]: singleSelectionDeclarativeParameters[$singleSelectedIndex],
            [$onSingleSelectedIndexChange]: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...normalGridNavParameters
    });
    const { [$singleSelectionParameters]: { [$onSingleSelectedIndexChange]: onSingleSelectedIndexChange } } = useSelectionDeclarative({
        [$singleSelectionDeclarativeParameters]: singleSelectionDeclarativeParameters,
        [$singleSelectionReturn]: ret2[$singleSelectionReturn]
    });

    return ret2;
}
