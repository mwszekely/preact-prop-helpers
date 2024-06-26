import { UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildParameters, UseProcessedChildReturnType, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType, useProcessedChild, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { UseRearrangeableChildrenReturnType, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenReturnType } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeSelectionDeclarativeParameters, UseSelectionContext, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType, useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "../component-detail/use-grid-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseTextContentParameters, UseTextContentReturnType, useTextContent } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { TargetedOmit, useCallback } from "../util/lib.js";
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
    OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "rearrangeableChildrenReturn" | "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rovingTabIndexParameters" | "childrenHaveFocusReturn">,
    TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "rovingTabIndexParameters", "untabbableBehavior">,
    Pick<UseRefElementParameters<ParentOrRowElement>, "refElementParameters"> {

}






export interface UseCompleteGridNavigationRowsParameters<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends
    OmitStrong<UseProcessedChildrenParameters<RowElement, RsM>, "context"> {
    context: CompleteGridNavigationRowContext<RowElement, RM>
}

/* The context that's returned by (e.g.) the <tbody> to be consumed by the <tr>'s outer child processor */
export interface UseCompleteGridNavigationRowsContext<RowElement extends Element, M extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseProcessedChildContext<RowElement, M> { }

export interface UseCompleteGridNavigationRowsReturnType<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends
    OmitStrong<UseRearrangeableChildrenReturnType<M>, never>,
    OmitStrong<UsePaginatedChildrenReturnType, "context">,
    OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseCompleteGridNavigationRowsContext<TabbableChildElement, M>;
}




export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>,
    OmitStrong<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">,
    Pick<UseTextContentParameters<RowElement>, "textContentParameters">,
    UseRefElementParameters<RowElement>,
    TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    OmitStrong<UseHasCurrentFocusParameters<RowElement>, "refElementReturn"> {
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationCellContext<CellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>,
    Pick<UseTextContentParameters<CellElement>, "textContentParameters">,
    OmitStrong<UseGridNavigationSelectionCellParameters<CellElement>, "info" | "context" | "refElementReturn"> {
}

/* The context that is provided by the (e.g.) <table> to each <tr>, including the outer useProcessedChild. */
export interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    UseManagedChildrenContext<RM>,

    UseChildrenHaveFocusContext<RowElement>,
    UseTypeaheadNavigationContext,
    UseSelectionContext,
    RovingTabIndexChildContext,
    UseGridNavigationRowContext,
    UseProcessedChildrenContext {
}


export interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends
    UseManagedChildrenContext<CM>,
    UseTypeaheadNavigationContext,
    RovingTabIndexChildContext,
    UseGridNavigationCellSelectionContext {
}


export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>, "props" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters">,
    Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">,
    Pick<UseRefElementReturnType<ParentOrRowElement>, "refElementReturn">,
    TargetedOmit<UseProcessedChildrenReturnType<RowElement, any>, "rearrangeableChildrenReturn", "indexDemangler" | "indexMangler" | "children">,
    Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusReturn"> {
    context: CompleteGridNavigationRowContext<RowElement, RM>;
    props: ElementProps<ParentOrRowElement>;
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM>, "hasCurrentFocusParameters" | "managedChildrenParameters" | "info" | "textContentParameters">,
    Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">,
    Pick<UseHasCurrentFocusReturnType<RowElement>, "hasCurrentFocusReturn">,
    Pick<UseRefElementReturnType<RowElement>, "refElementReturn">,
    Pick<UseTextContentReturnType, "textContentReturn">,
    Pick<UseManagedChildReturnType<RM>, "managedChildReturn"> {
    context: CompleteGridNavigationCellContext<CellElement, CM>;
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSelectionCellReturnType<CellElement>, "hasCurrentFocusParameters" | "info" | "textContentParameters">,
    OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">,
    Pick<UseTextContentReturnType, "textContentReturn">,
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
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    typeaheadNavigationParameters,
    paginatedChildrenParameters,
    refElementParameters,
    ...void1
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> {
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
    const { context: { rearrangeableChildrenContext, ...void4 }, indexDemangler, indexMangler, rearrange, reverse, shuffle, sort } = useCreateProcessedChildrenContext();
    const getAnyFocused = useStableCallback((): boolean => childrenHaveFocusReturn.getAnyFocused());
    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        props,
        rovingTabIndexReturn,
        linearNavigationReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        typeaheadNavigationReturn,
        ...void3
    }: UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement> = useGridNavigationSelection<ParentOrRowElement, RowElement>({
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
    const { context: { managedChildContext }, managedChildrenReturn }: UseManagedChildrenReturnType<RM> = useManagedChildren<RM>({ managedChildrenParameters });
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
    const c2 = useMemoObject<UseProcessedChildrenContext>({
        processedChildrenContext,
        rearrangeableChildrenContext,
    });
    const context = useMemoObject<CompleteGridNavigationRowContext<RowElement, RM>>({
        singleSelectionContext,
        multiSelectionContext,
        managedChildContext,
        rovingTabIndexContext,
        typeaheadNavigationContext,
        childrenHaveFocusChildContext,
        gridNavigationRowContext,
        processedChildrenContext,
        rearrangeableChildrenContext
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        context,
        props: useMergedProps(props, propsStable),
        refElementReturn,

        managedChildrenReturn,
        rovingTabIndexReturn,
        childrenHaveFocusReturn,
        linearNavigationReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        typeaheadNavigationReturn,
        rearrangeableChildrenReturn: { rearrange, reverse, shuffle, sort }
    }

})



/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 */
export const useCompleteGridNavigationRows = monitored(function useCompleteGridNavigationRows<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowInfo<TabbableChildElement>, RsM extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>>({
    context,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters,
    managedChildrenParameters
}: UseCompleteGridNavigationRowsParameters<TabbableChildElement, M, RsM>): UseCompleteGridNavigationRowsReturnType<TabbableChildElement, RsM> {
    const {
        context: contextRPS,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
    } = useProcessedChildren<TabbableChildElement, RsM>({
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
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
});

export interface UseCompleteGridNavigationRowOuterParameters<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends
    UseProcessedChildParameters<RowElement, RsM>,
    UseRefElementParameters<RowElement> {
    context: UseCompleteGridNavigationRowsContext<RowElement, RsM>;
}

export interface UseCompleteGridNavigationRowOuterReturnType<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends
    OmitStrong<UseProcessedChildReturnType<RowElement, RsM>, "refElementParameters">,
    OmitStrong<UseRefElementReturnType<RowElement>, "propsStable"> {
    hide: boolean;
}

export const useCompleteGridNavigationRowOuter = monitored(function useCompleteGridNavigationRowOuter<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>>({
    context,
    info,
    refElementParameters: { onElementChange: oec1, onMount, onUnmount }
}: UseCompleteGridNavigationRowOuterParameters<RowElement, RsM>): UseCompleteGridNavigationRowOuterReturnType<RowElement, RsM> {

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
    refElementParameters,
    ...void1

}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {

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
    const { refElementReturn, propsStable, ...void6 } = useRefElement<RowElement>({ refElementParameters });

    // Enormous bag of parameters for useGridNavigationRow
    const parameters: UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM> = {
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
    }: UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM> = useGridNavigationSelectionRow<RowElement, CellElement>(parameters);

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

    const { hasCurrentFocusReturn } = useHasCurrentFocus<RowElement>({
        refElementReturn,
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: ocfc1,
            onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic3),
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
}: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM> {
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

    const { hasCurrentFocusReturn } = useHasCurrentFocus<CellElement>({
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
        hasCurrentFocusReturn.propsStable
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
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>>, "singleSelectionReturn"> { }

export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn", "changeSingleSelectedIndex">,
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "multiSelectionReturn", never>,
    OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn" | "multiSelectionReturn"> { }

export function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({
    singleSelectionDeclarativeParameters,
    singleSelectionParameters,
    ...normalGridNavParameters
}: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, RM> {
    const ret2: UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> = useCompleteGridNavigation<ParentOrRowElement, RowElement, RM>({
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
