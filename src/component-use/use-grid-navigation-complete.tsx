import { UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { GridSelectSortableChildCellInfo, GridSelectSortableChildRowInfo, UseGridNavigationCellSelectionSortableContext, UseGridNavigationSelectionSortableCellInfoKeysParameters, UseGridNavigationSelectionSortableCellParameters, UseGridNavigationSelectionSortableCellReturnType, UseGridNavigationSelectionSortableParameters, UseGridNavigationSelectionSortableReturnType, UseGridNavigationSelectionSortableRowInfoKeysParameters, UseGridNavigationSelectionSortableRowParameters, UseGridNavigationSelectionSortableRowReturnType, useGridNavigationSelectionSortable, useGridNavigationSelectionSortableCell, useGridNavigationSelectionSortableRow } from "../component-detail/keyboard-navigation/use-grid-navigation-selection-sortable.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildContext, UsePaginatedChildReturnType, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, usePaginatedChild, usePaginatedChildren } from "../component-detail/use-paginated-children.js";
import { MakeSelectionDeclarativeParameters, UseSelectionContext, useSelectionDeclarative } from "../component-detail/use-selection.js";
import { UseStaggeredChildContext, UseStaggeredChildReturnType, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, useStaggeredChild, useStaggeredChildren } from "../component-detail/use-staggered-children.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { TargetedOmit, useCallback } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";


export type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> =
    // All types in the user-supplied info type that aren't in the base type (since we handle it) 
    Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> |
    // except for these extra types! Because the user supplies them.
    // TODO: Where exactly do getSortValue and focusSelf come from? (should be typed)
    // Is it because useSortableChildren doesn't have a child version? But then why focusSelf from rovingTabIndex?
    UseGridNavigationSelectionSortableRowInfoKeysParameters;

export type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> =
    Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> |
    UseGridNavigationSelectionSortableCellInfoKeysParameters | "getSortValue" | "focusSelf";

export interface UseCompleteGridNavigationRowInfo<RowElement extends Element> extends GridSelectSortableChildRowInfo<RowElement>, UsePaginatedChildrenInfo<RowElement>, UseStaggeredChildrenInfo, ManagedChildInfo<number> { }
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSelectSortableChildCellInfo<CellElement>, ManagedChildInfo<number> { }

export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters" | "childrenHaveFocusReturn">,
    TargetedOmit<UseGridNavigationSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseGridNavigationSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    TargetedOmit<UseGridNavigationSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "rearrangeableChildrenParameters", "onRearranged">,
    TargetedOmit<UseGridNavigationSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "rovingTabIndexParameters", "untabbableBehavior">,

    Pick<UseRefElementParameters<ParentOrRowElement>, "refElementParameters">,
    Pick<UsePaginatedChildrenParameters<ParentOrRowElement, RowElement>, "paginatedChildrenParameters">,
    Pick<UseStaggeredChildrenParameters, "staggeredChildrenParameters"> {

}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>,
    OmitStrong<UseGridNavigationSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" | "textContentParameters" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">,
    TargetedOmit<UseGridNavigationSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "textContentParameters", never>,
    TargetedOmit<UseGridNavigationSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseGridNavigationSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    OmitStrong<UseHasCurrentFocusParameters<RowElement>, "refElementReturn"> {
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationCellContext<CellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>,

    OmitStrong<UseGridNavigationSelectionSortableCellParameters<CellElement, CM>, "info" | "context" | "refElementReturn"> {
}


export interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    UseManagedChildrenContext<RM>,
    UsePaginatedChildContext,
    UseStaggeredChildContext,
    UseChildrenHaveFocusContext<RowElement>,
    UseTypeaheadNavigationContext,
    UseSelectionContext,
    RovingTabIndexChildContext,
    UseGridNavigationRowContext { }


export interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends
    UseManagedChildrenContext<CM>,
    UseTypeaheadNavigationContext,
    RovingTabIndexChildContext,
    UseGridNavigationCellSelectionSortableContext {
}


export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationSelectionSortableReturnType<ParentOrRowElement, RowElement, RM>, "props" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters">,
    Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">,
    Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">,
    Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">,
    Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusReturn"> {
    context: CompleteGridNavigationRowContext<RowElement, RM>;
    props: ElementProps<ParentOrRowElement>;
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "hasCurrentFocusParameters" | "managedChildrenParameters" | "info">,
    Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">,
    Pick<UseHasCurrentFocusReturnType<RowElement>, "hasCurrentFocusReturn">,
    Pick<UseManagedChildReturnType<RM>, "managedChildReturn">,
    Pick<UsePaginatedChildReturnType<RowElement>, "paginatedChildReturn">,
    Pick<UseStaggeredChildReturnType<RowElement>, "staggeredChildReturn"> {
    context: CompleteGridNavigationCellContext<CellElement, CM>;
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSelectionSortableCellReturnType<CellElement>, "hasCurrentFocusParameters" | "info">,
    OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">,
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
export function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    typeaheadNavigationParameters,
    sortableChildrenParameters,
    rearrangeableChildrenParameters,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    refElementParameters,
    ...void1
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> {
    monitorCallCount(useCompleteGridNavigation);
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

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        rearrangeableChildrenReturn,
        props,
        rovingTabIndexReturn,
        linearNavigationReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        ...void3
    }: UseGridNavigationSelectionSortableReturnType<ParentOrRowElement, RowElement, RM> = useGridNavigationSelectionSortable<ParentOrRowElement, RowElement, RM>({
        gridNavigationParameters,
        linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        multiSelectionParameters,
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        paginatedChildrenParameters,
        refElementReturn,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); }),
            ...rearrangeableChildrenParameters
        },
        childrenHaveFocusReturn: { getAnyFocused: useStableCallback((): boolean => childrenHaveFocusReturn.getAnyFocused()) },
        sortableChildrenParameters
    });


    const { indexDemangler } = rearrangeableChildrenReturn;

    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus<RowElement>({ childrenHaveFocusParameters });
    const mcr: UseManagedChildrenReturnType<RM> = useManagedChildren<RM>({ managedChildrenParameters: { onChildrenCountChange: useStableCallback(c => onChildrenCountChange?.(c)), ...managedChildrenParameters } });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr;          // TODO: This is split into two lines for TypeScript reasons? Can this be fixed? E.G. like vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  why doesn't that work?
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildrenCountChange }, context: { paginatedChildContext } }: UsePaginatedChildrenReturnType = usePaginatedChildren<ParentOrRowElement, RowElement, RM>({ refElementReturn, managedChildrenReturn, paginatedChildrenParameters, rovingTabIndexReturn, rearrangeableChildrenReturn: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn }: UseStaggeredChildrenReturnType = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters })

    const context = useMemoObject<CompleteGridNavigationRowContext<RowElement, RM>>({
        singleSelectionContext,
        multiSelectionContext,
        managedChildContext,
        rovingTabIndexContext,
        typeaheadNavigationContext,
        childrenHaveFocusChildContext,
        paginatedChildContext,
        staggeredChildContext,
        gridNavigationRowContext
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        context,
        props: useMergedProps(props, propsStable),

        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        rovingTabIndexReturn,
        childrenHaveFocusReturn,
        paginatedChildrenReturn,
        linearNavigationReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn
    }

}

/**
 * @compositeParams
 */
export function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({

    info: { index, untabbable, ...customUserInfo },
    context: contextIncomingForRowAsChildOfTable,
    textContentParameters,

    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    gridNavigationSelectionSortableRowParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1

}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
    monitorCallCount(useCompleteGridNavigationRow);

    const {
        info: infoPaginatedChild,
        paginatedChildReturn,
        props: paginationProps,
        ...void7
    } = usePaginatedChild<RowElement>({ info: { index }, context: contextIncomingForRowAsChildOfTable });

    const {
        info: infoStaggeredChild,
        staggeredChildReturn,
        props: staggeredProps,
        ...void8
    } = useStaggeredChild<RowElement>({ info: { index }, context: contextIncomingForRowAsChildOfTable })

    untabbable ||= (paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered);

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

    const { refElementReturn, propsStable, ...void6 } = useRefElement<RowElement>({ refElementParameters: {} });


    const r: UseGridNavigationSelectionSortableRowReturnType<RowElement, CellElement, RM, CM> = useGridNavigationSelectionSortableRow<RowElement, CellElement, RM, CM>({
        rovingTabIndexParameters,
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        linearNavigationParameters: { isValidForLinearNavigation: isValidForNavigation, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        refElementReturn,
        context: contextIncomingForRowAsChildOfTable,
        info: { index, untabbable },
        textContentParameters,
        gridNavigationSelectionSortableRowParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters
    });

    const {
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        context: contextGNR,
        info: infoRowReturn,
        props: p3,
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 },
        ...void2
    } = r;
    const { context: contextMC, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters });

    const completeInfo: UseCompleteGridNavigationRowInfo<RowElement> = {
        getElement: refElementReturn.getElement,
        index,
        untabbable,
        ...infoRowReturn,
        ...infoPaginatedChild,
        ...infoStaggeredChild,
    }

    const { managedChildReturn, ...void4 } = useManagedChild<RM>({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } as RM })

    const context = useMemoObject<CompleteGridNavigationCellContext<CellElement, CM>>({
        ...contextGNR,
        ...contextMC,
    });

    const { hasCurrentFocusReturn } = useHasCurrentFocus<RowElement>({
        refElementReturn,
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: ocfc1,
            onCurrentFocusedInnerChanged: useStableCallback((focused, prevFocused, reason) => {
                // Call grid navigation's focus change
                ocfic1?.(focused, prevFocused, reason);
                ocfic3?.(focused, prevFocused, reason);
            }),
        }
    });

    const props = useMergedProps(
        propsStable,
        p3,
        hasCurrentFocusReturn.propsStable,
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
    assertEmptyObject(void8);

    return {
        pressParameters,
        hasCurrentFocusReturn,
        managedChildrenReturn,
        context,
        managedChildReturn,
        staggeredChildReturn,
        paginatedChildReturn,
        linearNavigationReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        props,
    }
}

/**
 * @compositeParams
 */
export function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationCellParameters,
    context,
    textContentParameters,
    info: { focusSelf, index, untabbable, getSortValue, ...customUserInfo },
    ...void1
}: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM> {
    monitorCallCount(useCompleteGridNavigationCell);

    const { refElementReturn, propsStable } = useRefElement<CellElement>({ refElementParameters: {} });

    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters: { excludeSpace: es1 },
        props: propsRti,
        info: info2,
        ...void2
    } = useGridNavigationSelectionSortableCell<CellElement>({
        gridNavigationCellParameters,
        info: { index, untabbable },
        context,
        refElementReturn,
        textContentParameters,
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);

    const { hasCurrentFocusReturn } = useHasCurrentFocus<CellElement>({
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: null,
            ...hasCurrentFocusParameters
        },
        refElementReturn
    });

    const baseInfo: UseCompleteGridNavigationCellInfo<CellElement> = {
        getSortValue,
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
}

export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>>, "singleSelectionReturn"> { }

export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn", "changeSingleSelectedIndex">,
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "multiSelectionReturn", never>,
    OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn" | "multiSelectionReturn"> { }

export function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    singleSelectionDeclarativeParameters,
    multiSelectionParameters,
    sortableChildrenParameters,
    staggeredChildrenParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    refElementParameters,
    ...void1
}: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {
    const ret: UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM> = useCompleteGridNavigation<ParentOrRowElement, RowElement, CellElement, RM>({
        linearNavigationParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex, onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)), ...singleSelectionParameters },
        multiSelectionParameters,
        sortableChildrenParameters,
        staggeredChildrenParameters,
        refElementParameters,
        typeaheadNavigationParameters,
        gridNavigationParameters,
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange } } = useSelectionDeclarative({
        singleSelectionDeclarativeParameters,
        singleSelectionReturn: ret.singleSelectionReturn
    });

    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void1);
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
}
