import { identity } from "lodash-es";
import { UseGridNavigationCellContext, UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType, useGridNavigationSingleSelectionSortable } from "../component-detail/keyboard-navigation/use-grid-navigation-single-selection-sortable.js";
import { UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionRowReturnType, useGridNavigationSingleSelectionCell, useGridNavigationSingleSelectionRow } from "../component-detail/keyboard-navigation/use-grid-navigation-single-selection.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { MakeSingleSelectionDeclarativeParameters, UseSingleSelectionContext, useSingleSelectionDeclarative } from "../component-detail/keyboard-navigation/use-single-selection.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildContext, UsePaginatedChildReturn, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, usePaginatedChild, usePaginatedChildren } from "../component-detail/use-paginated-children.js";
import { UseStaggeredChildContext, UseStaggeredChildReturn, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, useStaggeredChild, useStaggeredChildren } from "../component-detail/use-staggered-children.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildren, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { TargetedOmit, useCallback } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
export interface UseCompleteGridNavigationRowInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, UsePaginatedChildrenInfo<RowElement>, UseStaggeredChildrenInfo<RowElement> { }
export interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSingleSelectSortableChildCellInfo<CellElement> { }

export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters">,
    TargetedOmit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">,
    TargetedOmit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "typeaheadNavigationParameters", "isValid">,
    TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "rearrangeableChildrenParameters", never>,
    TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex" | "untabbableBehavior">,

    Pick<UsePaginatedChildrenParameters<ParentOrRowElement, RowElement, M>, "paginatedChildrenParameters">,
    Pick<UseStaggeredChildrenParameters<RowElement, M>, "staggeredChildrenParameters"> {

}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "context" | "textContentParameters" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">,
    TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "textContentParameters", never>,
    TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">,
    TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters", "isValid"> {

    context: CompleteGridNavigationRowContext<any, RowElement, CellElement, RM, CM>;
    info: OmitStrong<RM, Exclude<keyof UseCompleteGridNavigationRowInfo<RowElement, CellElement>, "getSortValue" | "index" | "untabbable" | "unselectable">>;
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionCellParameters<any, CellElement, CM>, "info" | "context" | "refElementReturn"> {

    info: Omit<CM, Exclude<keyof UseCompleteGridNavigationCellInfo<CellElement>, "index" | "untabbable" | "focusSelf">>;
    context: CompleteGridNavigationCellContext<any, CellElement, CM>;
}


export interface CompleteGridNavigationRowContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, _CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    UseManagedChildrenContext<RM>,
    UsePaginatedChildContext,
    UseStaggeredChildContext,
    UseChildrenHaveFocusContext<RowElement>,
    UseTypeaheadNavigationContext,
    UseSingleSelectionContext,
    RovingTabIndexChildContext,
    UseGridNavigationRowContext { }


export interface CompleteGridNavigationCellContext<ParentElement extends Element, ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends
    UseManagedChildrenContext<CM>,
    UseTypeaheadNavigationContext,
    RovingTabIndexChildContext,
    UseGridNavigationCellContext {

    completeGridNavigationCellContext: {
        // TODO: This should be in the normal version, not the complete version, what happened?
        excludeSpace: undefined | (() => boolean);
    }
}


export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>
    extends
    Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">,
    Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">,
    Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">,
    Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusReturn">,
    OmitStrong<UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "propsStableParentOrChild" | "propsParent" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    context: CompleteGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM, CM>;
    props: ElementProps<ParentOrRowElement>;
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "hasCurrentFocusParameters" | "context" | "managedChildrenParameters" | "info" | "pressParameters" | "textContentReturn">,
    Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">,
    Pick<UseHasCurrentFocusReturnType<RowElement>, "hasCurrentFocusReturn">,
    Pick<UseManagedChildReturnType<RM>, "managedChildReturn">,
    Pick<UsePaginatedChildReturn<RowElement>, "paginatedChildReturn">,
    Pick<UseStaggeredChildReturn<RowElement>, "staggeredChildReturn">,
    Pick<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "textContentReturn"> {
    context: CompleteGridNavigationCellContext<RowElement, CellElement, CM>;
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement, CM>, "hasCurrentFocusParameters" | "info">,
    OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">,
    UseHasCurrentFocusReturnType<CellElement>,
    UseManagedChildReturnType<CM> {
    props: ElementProps<CellElement>;
}


export function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    sortableChildrenParameters,
    rearrangeableChildrenParameters: { onRearranged, ...rearrangeableChildrenParameters },
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
        refElementReturn,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax); onRearranged?.(); }),
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
    //const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);

    const context = useMemoObject<CompleteGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM, CM>>({
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

export function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({

    info,
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
    } = usePaginatedChild<RowElement>({ info, context: contextIncomingForRowAsChildOfTable });

    const {
        info: infoStaggeredChild, // { setParentIsStaggered, setStaggeredVisible },
        staggeredChildReturn,
        props: staggeredProps
    } = useStaggeredChild<RowElement>({ info, context: contextIncomingForRowAsChildOfTable })

    info.untabbable ||= (paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered);
    info.unselectable ||= info.untabbable;

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


    const r: UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement, RM, CM> = useGridNavigationSingleSelectionRow<RowElement, CellElement, RM, CM>({
        rovingTabIndexParameters,
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        linearNavigationParameters: { isValid, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, pageNavigationSize: 0, indexDemangler: identity, indexMangler: identity, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        refElementReturn,
        context: contextIncomingForRowAsChildOfTable,
        info,
        textContentParameters
    });

    const {
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters: { excludeSpace },  // TODO: Pass this through context? (this is for children, so it doesn't actually matter, but for completeness...)
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

    const completeInfo: UseCompleteGridNavigationRowInfo<RowElement, CellElement> = {
        getElement: refElementReturn.getElement,
        ...info,
        ...infoRowReturn,
        ...infoPaginatedChild,
        ...infoStaggeredChild
    }



    const { managedChildReturn } = useManagedChild<RM>({ context: contextIncomingForRowAsChildOfTable, info: completeInfo as RM })


    const context = useMemoObject<CompleteGridNavigationCellContext<RowElement, CellElement, CM>>({
        ...contextGNR,
        ...contextMC,
        completeGridNavigationCellContext: { excludeSpace }
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

export function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
    gridNavigationCellParameters,
    context: { gridNavigationCellContext, managedChildContext, rovingTabIndexContext, typeaheadNavigationContext, completeGridNavigationCellContext: { excludeSpace: es2 } },
    textContentParameters,
    info,
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
    } = useGridNavigationSingleSelectionCell<CellElement, CM>({
        gridNavigationCellParameters,
        info,
        context: { gridNavigationCellContext, rovingTabIndexContext, typeaheadNavigationContext },
        refElementReturn,
        textContentParameters,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);

    const { hasCurrentFocusReturn } = useHasCurrentFocus<CellElement>({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, ...hasCurrentFocusParameters }, refElementReturn });

    const baseInfo: UseCompleteGridNavigationCellInfo<CellElement> = {
        getElement: refElementReturn.getElement,
        getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
        setLocallyTabbable: info2.setLocallyTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable,
        ...info
    }

    const { managedChildReturn } = useManagedChild<CM>({ context: { managedChildContext }, info: baseInfo as CM })

    const props = useMergedProps(
        propsStable,
        propsRti,
        hasCurrentFocusReturn.propsStable
    );

    return {
        props,
        refElementReturn,
        rovingTabIndexChildReturn,
        pressParameters: { excludeSpace: useStableCallback(() => (es1?.() || es2?.() || false)) },
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn
    }
}

export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>>, "singleSelectionReturn"> { }

export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionReturn", "changeSelectedIndex">,
    OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionReturn"> { }

export function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({
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
}: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, CellElement, RM, CM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {
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
