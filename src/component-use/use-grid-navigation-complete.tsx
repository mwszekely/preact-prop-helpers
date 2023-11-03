import { UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationChildContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildren } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildren, UseProcessedChildrenContext, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { UseRearrangeableChildren, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildren } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeSelectionDeclarativeParameters, UseSelectionChildContext, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelection, UseGridNavigationSelectionCell, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionRow, UseGridNavigationSelectionRowInfoKeysParameters, useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "../component-detail/use-grid-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElement, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseTextContent, useTextContent } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocus, UseChildrenHaveFocusContext, useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocus, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, UseManagedChild, UseManagedChildContext, UseManagedChildren, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback } from "../util/lib.js";
import { OmitStrong, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps, StandardHook, TargetedOmit } from "../util/types.js";
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

export type UseCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> = StandardHook<
    "completeGridNavigation", 
    never, [
        StandardDepsOmit<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "rearrangeableChildrenReturn" | "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rovingTabIndexParameters" | "childrenHaveFocusReturn", [
            StandardDepsPick<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "linearNavigationParameters", "omit", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
            StandardDepsPick<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "typeaheadNavigationParameters", "omit", "isValidForTypeaheadNavigation">,
            StandardDepsPick<"params", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "rovingTabIndexParameters", "omit", "untabbableBehavior">
        ]>,
        StandardDepsPick<"params", UseRefElement<ParentOrRowElement>>

    ],
    never, [
        StandardDepsPick<"return", UseRefElement<ParentOrRowElement>>,
        StandardDepsPick<"return", UseManagedChildren<RM>>,
        StandardDepsPick<"return", UseChildrenHaveFocus<RowElement>>,
        StandardDepsPick<"return", UseProcessedChildren<RowElement, any>, "rearrangeableChildrenReturn", "pick", "rearrange" | "reverse" | "shuffle" | "sort">,
        StandardDepsOmit<"return", UseGridNavigationSelection<ParentOrRowElement, RowElement>, "managedChildrenParameters" | "childrenHaveFocusParameters">,
        StandardDepsProps<ParentOrRowElement>,
        {

            contextChildren: CompleteGridNavigationRowContext<RowElement, RM>;
            contextProcessing: UseProcessedChildrenContext;
        }
    ]
>;

export type UseCompleteGridNavigationRows<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> = StandardHook<
    "completeGridNavigationRows", 
    never, [
        StandardDepsPick<"params", UseProcessedChildren<TabbableChildElement, M>>,
        StandardDepsContext<UseProcessedChildrenContext>
    ],
    never, [
        StandardDepsPick<"return", UseRearrangeableChildren<M>, never>,
        StandardDepsPick<"return", UsePaginatedChildren<TabbableChildElement>>,
        StandardDepsPick<"return", UseStaggeredChildren>,
        StandardDepsContext<UseProcessedChildContext<TabbableChildElement, M>>
    ]
>;
export type UseCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> = StandardHook<
    "completeGridNavigationRow", 
    never, [
        StandardDepsInfo<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>,
        StandardDepsContext<CompleteGridNavigationRowContext<RowElement, RM>>,
        StandardDepsOmit<"params", UseGridNavigationSelectionRow<RowElement, CellElement>, "managedChildrenReturn" | "refElementReturn", [
            StandardDepsPick<"params", UseGridNavigationSelectionRow<RowElement, CellElement>, "linearNavigationParameters", "omit", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
            StandardDepsPick<"params", UseGridNavigationSelectionRow<RowElement, CellElement>, "typeaheadNavigationParameters", "omit", "isValidForTypeaheadNavigation">,
        ]>,
        StandardDepsOmit<"params", UseTextContent<RowElement>, "refElementReturn">,
        StandardDepsOmit<"params", UseHasCurrentFocus<RowElement>, "refElementReturn">
    ],
    never, [
        StandardDepsOmit<"return", UseGridNavigationSelectionRow<RowElement, CellElement>, "textContentParameters" | "hasCurrentFocusParameters" | "managedChildrenParameters">,
        StandardDepsPick<"return", UseHasCurrentFocus<RowElement>>,
        StandardDepsPick<"return", UseRefElement<RowElement>>,
        StandardDepsPick<"return", UseTextContent<RowElement>>,
        StandardDepsPick<"return", UseManagedChildren<CM>>,
        StandardDepsPick<"return", UseManagedChild<RM>>,

        StandardDepsContext<CompleteGridNavigationCellContext<CellElement, CM>>,
        StandardDepsProps<RowElement>
    ]

>;
export type UseCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> = StandardHook<
    "completeGridNavigationCell", 
    never, [
        StandardDepsInfo<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>,
        StandardDepsOmit<"params", UseGridNavigationSelectionCell<CellElement>, "refElementReturn">,
        StandardDepsOmit<"params", UseTextContent<CellElement>, "refElementReturn">,
        StandardDepsContext<CompleteGridNavigationCellContext<CellElement, CM>>
    ],
    never, [
        StandardDepsOmit<"return", UseGridNavigationSelectionCell<CellElement>, "hasCurrentFocusParameters" | "textContentParameters">,
        StandardDepsPick<"return", UseRefElement<CellElement>>,
        StandardDepsPick<"return", UseHasCurrentFocus<CellElement>>,
        StandardDepsPick<"return", UseTextContent<CellElement>>,
        StandardDepsPick<"return", UseManagedChild<CM>>,
        StandardDepsProps<CellElement>
    ]
>;

export interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    UseManagedChildContext<RM>,

    UseChildrenHaveFocusContext<RowElement>,
    UseTypeaheadNavigationChildContext,
    UseSelectionChildContext,
    RovingTabIndexChildContext,
    UseGridNavigationRowContext {
    contextProcessing: UseProcessedChildrenContext;
}


export interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends
    UseManagedChildContext<CM>,
    UseTypeaheadNavigationChildContext,
    RovingTabIndexChildContext,
    UseGridNavigationCellSelectionContext {
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
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    typeaheadNavigationParameters,
    paginatedChildrenParameters,
    refElementParameters,
    ...void1
}: Parameter<UseCompleteGridNavigation<ParentOrRowElement, RowElement, RM>>): ReturnType<UseCompleteGridNavigation<ParentOrRowElement, RowElement, RM>> {
    assertEmptyObject(void1);
    const getChildren: () => ManagedChildren<RM> = useCallback<() => ManagedChildren<RM>>(() => managedChildrenReturn.getChildren(), []);
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

    const { refElementReturn, propsStable, ...void2 } = useRefElement<ParentOrRowElement>({ refElementParameters })

    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, indexDemangler, indexMangler, rearrange, reverse, shuffle, sort } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback((): boolean => childrenHaveFocusReturn.getAnyFocused());
    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        props,
        rovingTabIndexReturn,
        linearNavigationReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        ...void3
    }: ReturnType<UseGridNavigationSelection<ParentOrRowElement, RowElement>> = useGridNavigationSelection<ParentOrRowElement, RowElement>({
        gridNavigationParameters,
        singleSelectionParameters,
        multiSelectionParameters,
        paginatedChildrenParameters,
        refElementReturn,
        linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        childrenHaveFocusReturn: { getAnyFocused },
        rearrangeableChildrenReturn: { indexDemangler, indexMangler }
    });



    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus<RowElement>({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn }: ReturnType<UseManagedChildren<RM>> = useManagedChildren<RM>({ managedChildrenParameters });
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
    const c2 = useMemoObject({
        processedChildrenContext,
        ...contextProcessing
    });
    const context = useMemoObject<CompleteGridNavigationRowContext<RowElement, RM>>({
        singleSelectionContext,
        multiSelectionContext,
        managedChildContext,
        rovingTabIndexContext,
        typeaheadNavigationContext,
        childrenHaveFocusChildContext,
        gridNavigationRowContext,
        contextProcessing: c2
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        contextChildren: context,
        contextProcessing: c2,
        props: useMergedProps(props, propsStable),
        refElementReturn,

        managedChildrenReturn,
        rovingTabIndexReturn,
        childrenHaveFocusReturn,
        linearNavigationReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        rearrangeableChildrenReturn: { rearrange, reverse, shuffle, sort }
    }

})



/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 */
export const useCompleteGridNavigationRows = monitored(function useCompleteGridNavigationRows<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>>({
    context,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters,
    managedChildrenParameters
}: Parameter<UseCompleteGridNavigationRows<TabbableChildElement, M>>): ReturnType<UseCompleteGridNavigationRows<TabbableChildElement, M>> {
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
        //refElementReturn: context.processedChildrenContext,
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
 * @compositeParams
 */
export const useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({

    info: { index, untabbable, ...customUserInfo },
    context: contextIncomingForRowAsChildOfTable,
    textContentParameters: { getText, onTextContentChange: otcc1 },

    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1

}: Parameter<UseCompleteGridNavigationRow<RowElement, CellElement, RM, CM>>): ReturnType<UseCompleteGridNavigationRow<RowElement, CellElement, RM, CM>> {

    // Create some helper functions
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const isValidForNavigation = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);

    // Someone somewhere needs useRefElement, no shock there
    const { refElementReturn, propsStable, ...void6 } = useRefElement<RowElement>({ refElementParameters: {} });

    // Enormous bag of parameters for useGridNavigationRow
    const parameters: Parameter<UseGridNavigationSelectionRow<RowElement, CellElement>> = {
        rovingTabIndexParameters,
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        linearNavigationParameters: { isValidForLinearNavigation: isValidForNavigation, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        refElementReturn,
        context: contextIncomingForRowAsChildOfTable,
        info: { index, untabbable },
        //textContentReturn: { getTextContent: useStableCallback(() => textContentReturn.getTextContent()) },
        singleSelectionChildParameters,
        multiSelectionChildParameters
    }

    // Actually call useGridNavigationRow,
    // and get an enormous bag of return values
    const {
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        textContentParameters: { onTextContentChange: otcc2 },
        typeaheadNavigationReturn,
        context: contextGNR,
        info: infoRowReturn,
        props: p3,
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 },
        ...void2
    }: ReturnType<UseGridNavigationSelectionRow<RowElement, CellElement>> = useGridNavigationSelectionRow<RowElement, CellElement>(parameters);

    const { textContentReturn, ...void7 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } })

    // This is all the info the parent needs about us, the row
    // (NOT the info the cells provide to us, the row)
    const completeInfo: UseCompleteGridNavigationRowInfo<RowElement> = {
        getElement: refElementReturn.getElement,
        index,
        untabbable,
        ...infoRowReturn,
    }

    // Call both `useManagedChildren` and `useManagedChild` with their appropriate parameters.
    const { context: contextMC, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters });
    const { managedChildReturn, ...void4 } = useManagedChild<RM>({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } as RM })

    const context = useMemoObject<CompleteGridNavigationCellContext<CellElement, CM>>({
        ...contextGNR,
        ...contextMC,
    });

    const { hasCurrentFocusReturn, propsStable: hcfrPropsStable } = useHasCurrentFocus<RowElement>({
        refElementReturn,
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: ocfc1,
            onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic3),
        }
    });

    const props = useMergedProps(
        propsStable,
        p3,
        hcfrPropsStable,
    );

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);

    return {
        pressParameters,
        hasCurrentFocusReturn,
        managedChildrenReturn,
        context,
        textContentReturn,
        managedChildReturn,
        linearNavigationReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        typeaheadNavigationReturn,
        refElementReturn,
        props,
    }
})

/**
 * @compositeParams
 */
export const useCompleteGridNavigationCell = monitored(function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationCellParameters,
    context,
    textContentParameters: { getText, onTextContentChange: otcc1, ...void4 },
    info: { focusSelf, index, untabbable, ...customUserInfo },
    ...void1
}: Parameter<UseCompleteGridNavigationCell<CellElement, CM>>): ReturnType<UseCompleteGridNavigationCell<CellElement, CM>> {
    const { refElementReturn, propsStable } = useRefElement<CellElement>({ refElementParameters: {} });
    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn,
        textContentParameters: { onTextContentChange: otcc2 },
        pressParameters: { excludeSpace: es1 },
        props: propsRti,
        info: info2,
        ...void2
    } = useGridNavigationSelectionCell<CellElement>({
        gridNavigationCellParameters,
        info: { index, untabbable },
        context,
        refElementReturn,
        //textContentReturn: { getTextContent: useStableCallback((): string | null => textContentReturn.getTextContent()) },
    });
    const { textContentReturn, ...void3 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } })

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    const { hasCurrentFocusReturn, propsStable: hcfPropsStable } = useHasCurrentFocus<CellElement>({
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: null,
            ...hasCurrentFocusParameters
        },
        refElementReturn
    });

    const baseInfo: UseCompleteGridNavigationCellInfo<CellElement> = {
        getElement: refElementReturn.getElement,
        getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
        setLocallyTabbable: info2.setLocallyTabbable,
        focusSelf,
        index,
        untabbable
    }

    const { managedChildReturn } = useManagedChild<CM>({ context, info: { ...baseInfo, ...customUserInfo } as CM })

    const props = useMergedProps(
        propsStable,
        propsRti,
        hcfPropsStable
    );

    return {
        props,
        refElementReturn,
        rovingTabIndexChildReturn,
        pressParameters: { excludeSpace: useStableCallback(() => (es1?.() || false)) },
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn
    }
})

export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<Parameter<UseCompleteGridNavigation<ParentOrRowElement, RowElement, RM>>>, "singleSelectionReturn"> { }

export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    TargetedOmit<ReturnType<UseCompleteGridNavigation<ParentOrRowElement, RowElement, RM>>, "singleSelectionReturn", "changeSingleSelectedIndex">,
    OmitStrong<ReturnType<UseCompleteGridNavigation<ParentOrRowElement, RowElement, RM>>, "singleSelectionReturn"> { }

export function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({
    singleSelectionDeclarativeParameters,
    singleSelectionParameters,
    ...normalGridNavParameters
}: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, RM> {
    const ret2: ReturnType<UseCompleteGridNavigation<ParentOrRowElement, RowElement, RM>> = useCompleteGridNavigation<ParentOrRowElement, RowElement, RM>({
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
            onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...normalGridNavParameters
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange } } = useSelectionDeclarative({
        singleSelectionDeclarativeParameters,
        singleSelectionReturn: ret2.singleSelectionReturn
    });

    return ret2;
}
