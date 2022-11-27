import { UseSortableChildInfo } from "component-detail/use-sortable-children";
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { UseGridNavigationRowReturnType } from "../component-detail/use-grid-navigation-partial";
import { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, useGridNavigationSingleSelectionCell, UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, useGridNavigationSingleSelectionRow, UseGridNavigationSingleSelectionRowReturnType } from "../component-detail/use-grid-navigation-single-selection";
import { GridSingleSelectSortableChildRowInfo, useGridNavigationSingleSelectionSortable, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType } from "../component-detail/use-grid-navigation-single-selection-sortable";
import { useMergedProps } from "../dom-helpers/use-merged-props";
import { useRefElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusReturnTypeInfo } from "../observers/use-children-have-focus";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus";
import { ManagedChildren, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-child-manager";
import { identity } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { usePress, UsePressParameters, UsePressReturnType } from "./use-press";


export interface UseCompleteGridNavigationParameters<_ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectSortableChildRowInfo<RowElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>, "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters"> {
    linearNavigationParameters: Omit<UseGridNavigationSingleSelectionParameters<RowElement, M>["linearNavigationParameters"], "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">;
    typeaheadNavigationParameters: Omit<UseGridNavigationSingleSelectionParameters<RowElement, M>["typeaheadNavigationParameters"], "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">;
    rearrangeableChildrenParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>["rearrangeableChildrenParameters"], "getHighestChildIndex" | "isValid">;
    rovingTabIndexParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<RowElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> {
    asChildRowParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asChildRowParameters"], "managedChildrenReturn" | "singleSelectionContext" | "gridNavigationRowContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "refElementReturn"> & {
        context: CompleteGridNavigationContext<any, RowElement, RM>; //UseManagedChildParameters<RM>["context"];
        //managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
        completeGridNavigationRowParameters: Omit<RM, keyof GridSingleSelectSortableChildRowInfo<CellElement>>;
        sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
    };
    asParentRowParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asParentRowParameters"], "rovingTabIndexParameters" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters"> & {
        linearNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asParentRowParameters"]["linearNavigationParameters"], "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">;
        typeaheadNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asParentRowParameters"]["typeaheadNavigationParameters"], "isValid">;
        rovingTabIndexParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["asParentRowParameters"]["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    };
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, M extends GridSingleSelectChildCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionCellParameters<CellElement>, "typeaheadNavigationChildContext" | "rovingTabIndexChildContext" | "gridNavigationCellContext" | "refElementReturn"> {
    pressParameters: UsePressParameters<CellElement>["pressParameters"];
    //managedChildContext: UseManagedChildParameters<M>["managedChildContext"];
    completeGridNavigationCellParameters: Omit<M, keyof GridSingleSelectChildCellInfo<CellElement>>;
    context: CompleteGridNavigationRowContext<any, CellElement, M>;
    //managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
}


export interface CompleteGridNavigationContext<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectSortableChildRowInfo<ChildElement>> extends UseManagedChildrenContext<M>,
    Pick<UseChildrenHaveFocusReturnTypeInfo, "childrenHaveFocusChildContext">,
    Pick<UseGridNavigationSingleSelectionReturnType<ParentElement, ChildElement>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationRowContext"> {

}


export interface CompleteGridNavigationRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectChildCellInfo<ChildElement>> extends UseManagedChildrenContext<M>,
    Pick<UseGridNavigationRowReturnType<ParentElement, ChildElement>["asParentRowReturn"], "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationCellContext"> {
    completeGridNavigationContext: {
        onPressSync: UsePressParameters<ChildElement>["pressParameters"]["onPressSync"]
    }
}


export interface UseCompleteGridNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectSortableChildRowInfo<ChildElement>>
    extends Omit<UseGridNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "typeaheadNavigationChildContext" | "singleSelectionContext" | "rovingTabIndexChildContext" | "gridNavigationRowContext" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: h.JSX.HTMLAttributes<ParentElement>;
    context: CompleteGridNavigationContext<ParentElement, ChildElement, M>;

    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeInfo["childrenHaveFocusReturn"];
    //rearrangeableChildrenParameters: Pick<UseRearrangeableChildrenParameters["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> {
    context: CompleteGridNavigationRowContext<RowElement, CellElement, CM>;
    props: h.JSX.HTMLAttributes<RowElement>;
    asParentRowReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["asParentRowReturn"];
    asChildRowReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["asChildRowReturn"];
    managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<RowElement>["hasCurrentFocusReturn"];
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>, "hasCurrentFocusParameters">,
    UsePressReturnType<CellElement>, UseRefElementReturnType<CellElement>, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: h.JSX.HTMLAttributes<CellElement>;

}


export function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectSortableChildRowInfo<RowElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    sortableChildrenParameters,
    rearrangeableChildrenParameters
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, M>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, M> {

    const getChildren: () => ManagedChildren<M> = useCallback<() => ManagedChildren<M>>(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);

    const isValid = useStableCallback((index: number): boolean => { return !(getChildren().getAt(index)?.hidden) });

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        rovingTabIndexChildContext,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        gridNavigationRowContext,
        ...gridNavigationSingleSelectionReturn
    } = useGridNavigationSingleSelectionSortable<ParentOrRowElement, RowElement, M>({
        gridNavigationParameters,
        linearNavigationParameters: { getHighestIndex: getHighestChildIndex, isValid, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { initiallyTabbedIndex: singleSelectionParameters.initiallySelectedIndex, ...rovingTabIndexParameters },
        singleSelectionParameters,
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        rearrangeableChildrenParameters,
        sortableChildrenParameters
    });

    const { linearNavigationReturn, typeaheadNavigationReturn } = gridNavigationSingleSelectionReturn;

    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<M>({ managedChildrenParameters });
    const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useStableObject<CompleteGridNavigationContext<ParentOrRowElement, RowElement, M>>({
        singleSelectionContext,
        managedChildContext,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        childrenHaveFocusChildContext,
        gridNavigationRowContext,
    });

    return {
        context,
        props,

        managedChildrenReturn,
        ...gridNavigationSingleSelectionReturn,
        childrenHaveFocusReturn,
        //rearrangeableChildrenParameters: { getHighestChildIndex: getHighestChildIndex, getValid },
    }

}

export function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({
    asChildRowParameters: {
        managedChildParameters,
        context: { childrenHaveFocusChildContext, gridNavigationRowContext, managedChildContext: mcc1, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext },
        completeGridNavigationRowParameters,
        singleSelectionChildParameters,
        rovingTabIndexChildParameters,
        ...asChildRowParameters
    },
    asParentRowParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        ...asParentRowParameters
    }
}: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {

    const { index } = managedChildParameters;

    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        return !child.hidden;
    }, []);

    const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} });

    const r: UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> = useGridNavigationSingleSelectionRow<RowElement, CellElement, RM, CM>({
        asParentRowParameters: {
            ...asParentRowParameters,
            rovingTabIndexParameters: { initiallyTabbedIndex: 0, ...rovingTabIndexParameters },
            typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
            linearNavigationParameters: { isValid, getHighestIndex: getHighestChildIndex, pageNavigationSize: 0, indexDemangler: identity, indexMangler: identity, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
        },
        asChildRowParameters: {
            ...asChildRowParameters,
            refElementReturn,
            rovingTabIndexChildParameters,
            gridNavigationRowContext,
            rovingTabIndexChildContext,
            singleSelectionContext,
            typeaheadNavigationChildContext,
            singleSelectionChildParameters,
            managedChildParameters,
            managedChildrenReturn: { getChildren },
        }
    });

    const { asChildRowReturn, asParentRowReturn } = r;


    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters: r.asParentRowReturn.managedChildrenParameters });
    const { getElement } = refElementReturn;

    const baseInfo: GridSingleSelectChildRowInfo<RowElement> = {
        getElement,
        setTabbable: r.asChildRowReturn.rovingTabIndexChildReturn.setTabbable,
        getTabbable: r.asChildRowReturn.rovingTabIndexChildReturn.getTabbable,
        tabbable: r.asChildRowReturn.rovingTabIndexChildReturn.tabbable,
        index: managedChildParameters.index,
        hidden: rovingTabIndexChildParameters.hidden,
        selected: r.asChildRowReturn.singleSelectionChildReturn.selected,
        focusSelf: r.asChildRowReturn.gridNavigationRowParameters.focusSelf,
        getSelected: r.asChildRowReturn.singleSelectionChildReturn.getSelected,
        setLocalSelected: r.asChildRowReturn.managedChildParameters.setLocalSelected,
        disabled: singleSelectionChildParameters.disabled,
        setTabbableColumnIndex: r.asChildRowReturn.gridNavigationRowParameters.setTabbableColumnIndex
    }

    const { managedChildReturn } = useManagedChild<RM>({ context: { managedChildContext: mcc1 }, managedChildParameters: { index } }, { ...baseInfo, ...completeGridNavigationRowParameters } as RM)


    const context = useStableObject<CompleteGridNavigationRowContext<RowElement, CellElement, CM>>({
        managedChildContext,
        rovingTabIndexChildContext: r.asParentRowReturn.rovingTabIndexChildContext,
        typeaheadNavigationChildContext: r.asParentRowReturn.typeaheadNavigationChildContext,
        completeGridNavigationContext: useStableObject({ onPressSync: r.asChildRowReturn.pressParameters.onPressSync as any }),
        gridNavigationCellContext: r.asParentRowReturn.gridNavigationCellContext,
    });
    const { hasCurrentFocusParameters } = useChildrenHaveFocusChild({ childrenHaveFocusChildContext });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ refElementReturn, hasCurrentFocusParameters: { ...hasCurrentFocusParameters, onCurrentFocusedChanged: null } });
    const props = useMergedProps(
        refElementReturn.propsStable,
        // TODO: Rows don't use tabIndex, but just excluding props here is...weird.
        //r.asChildRowReturn.rovingTabIndexChildReturn.propsUnstable,
        r.asChildRowReturn.singleSelectionChildReturn.propsUnstable,
        r.asParentRowReturn.linearNavigationReturn.propsStable,
        r.asParentRowReturn.typeaheadNavigationReturn.propsStable,
        hasCurrentFocusReturn.propsStable
    );
    return {
        context,
        props,
        asParentRowReturn,
        asChildRowReturn,

        managedChildReturn,
        hasCurrentFocusReturn

        //managedChildrenReturn,
        //...gridNavigationSingleSelectionReturn
    }
}

export function useCompleteGridNavigationCell<CellElement extends Element, M extends GridSingleSelectChildCellInfo<CellElement>>({
    gridNavigationCellParameters,
    managedChildParameters,
    context: { completeGridNavigationContext, gridNavigationCellContext, managedChildContext, rovingTabIndexChildContext, typeaheadNavigationChildContext },
    rovingTabIndexChildParameters,
    textContentParameters,
    //managedChildContext,
    completeGridNavigationCellParameters,
    pressParameters: { onPressSync, ...pressParameters },
}: UseCompleteGridNavigationCellParameters<CellElement, M>): UseCompleteGridNavigationCellReturnType<CellElement, M> {

    const { index } = managedChildParameters;

    const { refElementReturn } = useRefElement<CellElement>({ refElementParameters: {} });

    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn
    } = useGridNavigationSingleSelectionCell<CellElement>({
        gridNavigationCellContext,
        gridNavigationCellParameters,
        managedChildParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        rovingTabIndexChildParameters,
        refElementReturn,
        textContentParameters
    });

    const { hasCurrentFocusReturn } = useHasCurrentFocus<CellElement>({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, ...hasCurrentFocusParameters }, refElementReturn });



    const { pressReturn } = usePress<CellElement>({
        pressParameters: {
            onPressSync: useStableCallback<NonNullable<typeof onPressSync>>(e => {
                onPressSync?.(e);
                completeGridNavigationContext.onPressSync?.(e);
            }),
            ...pressParameters
        },
        refElementReturn
    });



    const baseInfo: GridSingleSelectChildCellInfo<CellElement> = {
        focusSelf: pressParameters.focusSelf,
        getElement: refElementReturn.getElement,
        hidden: rovingTabIndexChildParameters.hidden,
        index: managedChildParameters.index,
        getTabbable: rovingTabIndexChildReturn.getTabbable,
        setTabbable: rovingTabIndexChildReturn.setTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable
    }

    const { managedChildReturn } = useManagedChild<M>({
        context: { managedChildContext },
        managedChildParameters: { index }
    },
        {
            ...baseInfo,
            ...completeGridNavigationCellParameters
        } as M)

    const props = useMergedProps(
        refElementReturn.propsStable,
        pressReturn.propsStable,
        rovingTabIndexChildReturn.propsUnstable,
        hasCurrentFocusReturn.propsStable
    );

    return {
        props,
        rovingTabIndexChildReturn,
        pressReturn,
        refElementReturn,
        hasCurrentFocusReturn,
        managedChildReturn
    }
}
