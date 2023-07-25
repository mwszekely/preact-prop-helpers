import { identity } from "lodash-es";
import { UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, UseGridNavigationCellSingleSelectionSortableContext, UseGridNavigationSingleSelectionSortableCellInfoKeysParameters, UseGridNavigationSingleSelectionSortableCellParameters, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowInfoKeysParameters, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType, useGridNavigationSingleSelectionSortable, useGridNavigationSingleSelectionSortableCell, useGridNavigationSingleSelectionSortableRow } from "../component-detail/keyboard-navigation/use-grid-navigation-single-selection-sortable.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { MakeSingleSelectionDeclarativeParameters, UseSingleSelectionContext, useSingleSelectionDeclarative } from "../component-detail/keyboard-navigation/use-single-selection.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildContext, UsePaginatedChildReturnType, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, usePaginatedChild, usePaginatedChildren } from "../component-detail/use-paginated-children.js";
import { UseStaggeredChildContext, UseStaggeredChildReturnType, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, useStaggeredChild, useStaggeredChildren } from "../component-detail/use-staggered-children.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
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
    UseGridNavigationSingleSelectionSortableRowInfoKeysParameters;

export type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> =
    Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> |
    UseGridNavigationSingleSelectionSortableCellInfoKeysParameters | "getSortValue" | "focusSelf";

export interface UseCompleteGridNavigationRowInfo<RowElement extends Element> extends GridSingleSelectSortableChildRowInfo<RowElement>, UsePaginatedChildrenInfo<RowElement>, UseStaggeredChildrenInfo<RowElement> { }
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSingleSelectSortableChildCellInfo<CellElement> { }

export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters">,
    TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValid">,
    TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "typeaheadNavigationParameters", "isValid">,
    TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "rearrangeableChildrenParameters", "onRearranged">,
    TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex" | "untabbableBehavior">,

    Pick<UsePaginatedChildrenParameters<ParentOrRowElement, RowElement, M>, "paginatedChildrenParameters">,
    Pick<UseStaggeredChildrenParameters<RowElement, M>, "staggeredChildrenParameters"> {

}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>,
    OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" | "textContentParameters" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">,
    TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "textContentParameters", never>,
    TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">,
    TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters", "isValid"> {
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseGenericChildParameters<CompleteGridNavigationCellContext<CellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>,

    OmitStrong<UseGridNavigationSingleSelectionSortableCellParameters<CellElement, CM>, "info" | "context" | "refElementReturn"> {
}


export interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    UseManagedChildrenContext<RM>,
    UsePaginatedChildContext,
    UseStaggeredChildContext,
    UseChildrenHaveFocusContext<RowElement>,
    UseTypeaheadNavigationContext,
    UseSingleSelectionContext,
    RovingTabIndexChildContext,
    UseGridNavigationRowContext { }


export interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends
    UseManagedChildrenContext<CM>,
    UseTypeaheadNavigationContext,
    RovingTabIndexChildContext,
    UseGridNavigationCellSingleSelectionSortableContext {

    /*completeGridNavigationCellContext: {
        // TODO: This should be in the normal version, not the complete version, what happened?
        excludeSpace: undefined | (() => boolean);
    }*/
}


export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>
    extends
    Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">,
    Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">,
    Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">,
    Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusReturn">,
    OmitStrong<UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "propsStableParentOrChild" | "propsParent" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    context: CompleteGridNavigationRowContext<RowElement, RM>;
    props: ElementProps<ParentOrRowElement>;
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "hasCurrentFocusParameters" | "context" | "managedChildrenParameters" | "info" | "textContentReturn">,
    Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">,
    Pick<UseHasCurrentFocusReturnType<RowElement>, "hasCurrentFocusReturn">,
    Pick<UseManagedChildReturnType<RM>, "managedChildReturn">,
    Pick<UsePaginatedChildReturnType<RowElement>, "paginatedChildReturn">,
    Pick<UseStaggeredChildReturnType<RowElement>, "staggeredChildReturn">,
    Pick<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "textContentReturn"> {
    context: CompleteGridNavigationCellContext<CellElement, CM>;
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement, CM>, "hasCurrentFocusParameters" | "info">,
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
export function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    sortableChildrenParameters,
    rearrangeableChildrenParameters,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    ...void1
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {
    monitorCallCount(useCompleteGridNavigation);
    assertEmptyObject(void1);
    const getChildren: () => ManagedChildren<RM> = useCallback<() => ManagedChildren<RM>>(() => managedChildrenReturn.getChildren(), []);
    const getLowestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);


    const isValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);

    const { refElementReturn } = useRefElement<ParentOrRowElement>({})

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        rearrangeableChildrenReturn,
        propsParent,
        propsStableParentOrChild,
        rovingTabIndexReturn,
        ...gridNavigationSingleSelectionReturn
    }: UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> = useGridNavigationSingleSelectionSortable<ParentOrRowElement, RowElement, CellElement, RM, CM>({
        gridNavigationParameters,
        linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValid, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { initiallyTabbedIndex: singleSelectionParameters.initiallySelectedIndex, untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        paginatedChildrenParameters,
        refElementReturn,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); }),
            ...rearrangeableChildrenParameters
        },
        sortableChildrenParameters
    });


    const { indexDemangler } = rearrangeableChildrenReturn;

    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus<RowElement>({ childrenHaveFocusParameters });
    const mcr: UseManagedChildrenReturnType<RM> = useManagedChildren<RM>({ managedChildrenParameters: { onChildrenCountChange: useStableCallback(c => onChildrenCountChange?.(c)), ...managedChildrenParameters } });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr;          // TODO: This is split into two lines for TypeScript reasons? Can this be fixed? E.G. like vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  why doesn't that work?
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildrenCountChange }, context: { paginatedChildContext } }: UsePaginatedChildrenReturnType = usePaginatedChildren<ParentOrRowElement, RowElement, RM>({ refElementReturn, managedChildrenReturn, paginatedChildrenParameters, rovingTabIndexReturn, linearNavigationParameters: { indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn }: UseStaggeredChildrenReturnType = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters })

    const context = useMemoObject<CompleteGridNavigationRowContext<RowElement, RM>>({
        singleSelectionContext,
        managedChildContext,
        rovingTabIndexContext,
        typeaheadNavigationContext,
        childrenHaveFocusChildContext,
        paginatedChildContext,
        staggeredChildContext,
        gridNavigationRowContext
    });

    return {
        context,
        props: useMergedProps(propsParent, propsStableParentOrChild),

        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        rovingTabIndexReturn,
        childrenHaveFocusReturn,
        paginatedChildrenReturn,
        ...gridNavigationSingleSelectionReturn,
    }

}

/**
 * @compositeParams
 */
export function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({

    info: { index, unselectable, untabbable, ...customUserInfo },
    context: contextIncomingForRowAsChildOfTable,
    textContentParameters,

    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    ...void1

}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
    monitorCallCount(useCompleteGridNavigationRow);

    const {
        info: infoPaginatedChild,
        paginatedChildReturn,
        props: paginationProps
    } = usePaginatedChild<RowElement>({ info: { index }, context: contextIncomingForRowAsChildOfTable });

    const {
        info: infoStaggeredChild, // { setParentIsStaggered, setStaggeredVisible },
        staggeredChildReturn,
        props: staggeredProps
    } = useStaggeredChild<RowElement>({ info: { index }, context: contextIncomingForRowAsChildOfTable })

    untabbable ||= (paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered);
    unselectable ||= untabbable;

    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const isValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);

    const { refElementReturn, propsStable } = useRefElement<RowElement>({ refElementParameters: {} });


    const r: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM> = useGridNavigationSingleSelectionSortableRow<RowElement, CellElement, RM, CM>({
        rovingTabIndexParameters,
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        linearNavigationParameters: { isValid, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, pageNavigationSize: 0, indexDemangler: identity, indexMangler: identity, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        refElementReturn,
        context: contextIncomingForRowAsChildOfTable,
        info: { index, unselectable, untabbable },
        textContentParameters
    });

    const {
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
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
        getSortValue: useCallback(() => {
            let rows = getChildren();
            let columnIndex = contextIncomingForRowAsChildOfTable.gridNavigationRowContext.getTabbableColumn() || 0;
            let cell = rows.getAt(columnIndex as never);
            return cell?.getSortValue();
        }, []),
        index,
        unselectable,
        untabbable,
        ...infoRowReturn,
        ...infoPaginatedChild,
        ...infoStaggeredChild,
    }



    const { managedChildReturn } = useManagedChild<RM>({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } as RM })


    const context = useMemoObject<CompleteGridNavigationCellContext<CellElement, CM>>({
        ...contextGNR,
        ...contextMC,
        //completeGridNavigationCellContext: { excludeSpace }
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void4 } } = useChildrenHaveFocusChild<RowElement>({ context: contextIncomingForRowAsChildOfTable });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus<RowElement>({ refElementReturn, hasCurrentFocusParameters: { onCurrentFocusedChanged: useStableCallback((a, b) => { ocfic1?.(a, b); ocfic2?.(a, b) }) } });
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
    } = useGridNavigationSingleSelectionSortableCell<CellElement, CM>({
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

    const { managedChildReturn } = useManagedChild<CM>({ context, info: {...baseInfo, ...customUserInfo} as CM })

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

export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends
    OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>>, "singleSelectionReturn"> { }

export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionReturn", "changeSelectedIndex">,
    OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionReturn"> { }

export function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    singleSelectionDeclarativeParameters,
    sortableChildrenParameters,
    staggeredChildrenParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
}: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {
    const ret: UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> = useCompleteGridNavigation<ParentOrRowElement, RowElement, CellElement, RM, CM>({
        linearNavigationParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySelectedIndex: singleSelectionDeclarativeParameters.selectedIndex, onSelectedIndexChange: useStableCallback((...e) => onSelectedIndexChange?.(...e)), ...singleSelectionParameters },
        sortableChildrenParameters,
        staggeredChildrenParameters,
        typeaheadNavigationParameters,
        gridNavigationParameters,
    });
    const { singleSelectionParameters: { onSelectedIndexChange } } = useSingleSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });

    const { singleSelectionReturn: { getSelectedIndex }, ...ret2 } = ret;
    return { ...ret2, singleSelectionReturn: { getSelectedIndex } };
}
