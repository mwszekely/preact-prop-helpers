import { UseSortableChildInfo } from "../component-detail/use-sortable-children";
import { h } from "preact";
import { useCallback } from "preact/hooks";
import { UseGridNavigationRowReturnType } from "../component-detail/use-grid-navigation-partial";
import { useGridNavigationSingleSelectionCell, UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, useGridNavigationSingleSelectionRow, UseGridNavigationSingleSelectionRowReturnType } from "../component-detail/use-grid-navigation-single-selection";
import { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, useGridNavigationSingleSelectionSortable, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType } from "../component-detail/use-grid-navigation-single-selection-sortable";
import { useMergedProps } from "../dom-helpers/use-merged-props";
import { useRefElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus";
import { ManagedChildren, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-child-manager";
import { identity } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { usePress, UsePressParameters, UsePressReturnType } from "./use-press";

/*export interface UseCompleteGridNavigationChildInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement> {
    
}*/


export interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters"> {
    linearNavigationParameters: Omit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["linearNavigationParameters"], "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">;
    typeaheadNavigationParameters: Omit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["typeaheadNavigationParameters"], "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">;
    rearrangeableChildrenParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>["rearrangeableChildrenParameters"], "getHighestChildIndex" | "isValid">;
    rovingTabIndexParameters: Omit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
}

export interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> {
    rowAsChildOfGridParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsChildOfGridParameters"], "managedChildrenReturn" | "singleSelectionContext" | "gridNavigationRowContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "refElementReturn"> & {
        context: CompleteGridNavigationContext<any, RowElement, CellElement, RM, CM>; //UseManagedChildParameters<RM>["context"];
        //managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
        completeGridNavigationRowParameters: Omit<RM, keyof GridSingleSelectSortableChildRowInfo<RowElement, CellElement>>;
        sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
    };
    rowAsParentOfCellsParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsParentOfCellsParameters"], "rovingTabIndexParameters" | "linearNavigationParameters" | "typeaheadNavigationParameters"> & {
        linearNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsParentOfCellsParameters"]["linearNavigationParameters"], "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">;
        typeaheadNavigationParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsParentOfCellsParameters"]["typeaheadNavigationParameters"], "isValid">;
        rovingTabIndexParameters: Omit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>["rowAsParentOfCellsParameters"]["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    };
}

export interface UseCompleteGridNavigationCellParameters<CellElement extends Element, M extends GridSingleSelectSortableChildCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionCellParameters<any, CellElement>, "typeaheadNavigationChildContext" | "rovingTabIndexChildContext" | "gridNavigationCellContext" | "refElementReturn"> {
    pressParameters: UsePressParameters<CellElement>["pressParameters"];
    //sortableChildParameters: { getSortValue: UseSortableChildInfo["getSortValue"] };
    //managedChildContext: UseManagedChildParameters<M>["managedChildContext"];
    completeGridNavigationCellParameters: Omit<M, keyof GridSingleSelectSortableChildCellInfo<CellElement>>;
    context: CompleteGridNavigationRowContext<any, CellElement, M>;
    //managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
}


export interface CompleteGridNavigationContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseManagedChildrenContext<RM>,
    Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusChildContext">,
    Pick<UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationRowContext"> {

}


export interface CompleteGridNavigationRowContext<ParentElement extends Element, ChildElement extends Element, M extends GridSingleSelectSortableChildCellInfo<ChildElement>> extends UseManagedChildrenContext<M>,
    Pick<UseGridNavigationRowReturnType<ParentElement, ChildElement>["rowAsParentOfCellsReturn"], "rovingTabIndexChildContext" | "typeaheadNavigationChildContext" | "gridNavigationCellContext"> {
    completeGridNavigationContext: {
        onPressSync: UsePressParameters<ChildElement>["pressParameters"]["onPressSync"]
    }
}


export interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>
    extends Omit<UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "typeaheadNavigationChildContext" | "singleSelectionContext" | "rovingTabIndexChildContext" | "gridNavigationRowContext" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: h.JSX.HTMLAttributes<ParentOrRowElement>;
    context: CompleteGridNavigationContext<ParentOrRowElement, RowElement, CellElement, RM, CM>;

    managedChildrenReturn: UseManagedChildrenReturnType<RM>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<RowElement>["childrenHaveFocusReturn"];
    //rearrangeableChildrenParameters: Pick<UseRearrangeableChildrenParameters["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
}

export interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> {
    context: CompleteGridNavigationRowContext<RowElement, CellElement, CM>;
    props: h.JSX.HTMLAttributes<RowElement>;
    rowAsParentOfCellsReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["rowAsParentOfCellsReturn"] & {
        managedChildrenReturn: UseManagedChildrenReturnType<CM>["managedChildrenReturn"];
    };
    rowAsChildOfGridReturn: UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement>["rowAsChildOfGridReturn"] & {
        managedChildReturn: UseManagedChildReturnType<RM>["managedChildReturn"];
    };
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<RowElement>["hasCurrentFocusReturn"];
}

export interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends
    Omit<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement>, "hasCurrentFocusParameters">,
    UsePressReturnType<CellElement>, UseRefElementReturnType<CellElement>, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: h.JSX.HTMLAttributes<CellElement>;

}


export function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    sortableChildrenParameters,
    rearrangeableChildrenParameters
}: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {

    const getChildren: () => ManagedChildren<RM> = useCallback<() => ManagedChildren<RM>>(() => managedChildrenReturn.getChildren(), []);
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
    } = useGridNavigationSingleSelectionSortable<ParentOrRowElement, RowElement, CellElement, RM, CM>({
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

    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus<RowElement>({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<RM>({ managedChildrenParameters });
    const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useStableObject<CompleteGridNavigationContext<ParentOrRowElement, RowElement, CellElement, RM, CM>>({
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

export function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>({
    rowAsChildOfGridParameters: {
        managedChildParameters,
        context: { childrenHaveFocusChildContext, gridNavigationRowContext, managedChildContext: mcc1, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext },
        completeGridNavigationRowParameters,
        singleSelectionChildParameters,
        rovingTabIndexChildParameters,
        ...rowAsChildOfGridParameters
    },
    rowAsParentOfCellsParameters: {
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        ...rowAsParentOfCellsParameters
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
        rowAsParentOfCellsParameters: {
            ...rowAsParentOfCellsParameters,
            rovingTabIndexParameters: { initiallyTabbedIndex: 0, ...rovingTabIndexParameters },
            typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
            linearNavigationParameters: { isValid, getHighestIndex: getHighestChildIndex, pageNavigationSize: 0, indexDemangler: identity, indexMangler: identity, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
        },
        rowAsChildOfGridParameters: {
            ...rowAsChildOfGridParameters,
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

    const { rowAsChildOfGridReturn, rowAsParentOfCellsReturn } = r;


    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters: r.rowAsParentOfCellsReturn.managedChildrenParameters });
    const { getElement } = refElementReturn;

    const baseInfo: GridSingleSelectSortableChildRowInfo<RowElement, CellElement> = {
        getElement,
        setTabbable: r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.setTabbable,
        getTabbable: r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.getTabbable,
        tabbable: r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.tabbable,
        index: managedChildParameters.index,
        hidden: rovingTabIndexChildParameters.hidden,
        selected: r.rowAsChildOfGridReturn.singleSelectionChildReturn.selected,
        focusSelf: r.rowAsChildOfGridReturn.gridNavigationRowParameters.focusSelf,
        getSelected: r.rowAsChildOfGridReturn.singleSelectionChildReturn.getSelected,
        setLocalSelected: r.rowAsChildOfGridReturn.managedChildParameters.setLocalSelected,
        disabled: singleSelectionChildParameters.disabled,
        setTabbableColumnIndex: r.rowAsChildOfGridReturn.gridNavigationRowParameters.setTabbableColumnIndex,
        getSortValue: rowAsChildOfGridParameters.sortableChildParameters.getSortValue
    }

    const { managedChildReturn } = useManagedChild<RM>({ context: { managedChildContext: mcc1 }, managedChildParameters: { index } }, { ...baseInfo, ...completeGridNavigationRowParameters } as RM)


    const context = useStableObject<CompleteGridNavigationRowContext<RowElement, CellElement, CM>>({
        managedChildContext,
        rovingTabIndexChildContext: r.rowAsParentOfCellsReturn.rovingTabIndexChildContext,
        typeaheadNavigationChildContext: r.rowAsParentOfCellsReturn.typeaheadNavigationChildContext,
        completeGridNavigationContext: useStableObject({ onPressSync: r.rowAsChildOfGridReturn.pressParameters.onPressSync as any }),
        gridNavigationCellContext: r.rowAsParentOfCellsReturn.gridNavigationCellContext,
    });
    const { hasCurrentFocusParameters } = useChildrenHaveFocusChild({ childrenHaveFocusChildContext });
    //const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ refElementReturn, hasCurrentFocusParameters: { ...hasCurrentFocusParameters, onCurrentFocusedChanged: null } });
    const props = useMergedProps(
        refElementReturn.propsStable,
        // TODO: Rows don't use tabIndex, but just excluding props here is...weird.
        //r.rowAsChildOfGridReturn.rovingTabIndexChildReturn.propsUnstable,
        r.rowAsChildOfGridReturn.singleSelectionChildReturn.propsUnstable,
        r.rowAsParentOfCellsReturn.linearNavigationReturn.propsStable,
        r.rowAsParentOfCellsReturn.typeaheadNavigationReturn.propsStable,
        hasCurrentFocusReturn.propsStable
    );
    
    return {
        context,
        props,
        rowAsParentOfCellsReturn: {
            ...rowAsParentOfCellsReturn,
            managedChildrenReturn
        },
        rowAsChildOfGridReturn: {
            ...rowAsChildOfGridReturn,
            managedChildReturn
        },
        hasCurrentFocusReturn

        //managedChildrenReturn,
        //...gridNavigationSingleSelectionReturn
    }
}

export function useCompleteGridNavigationCell<CellElement extends Element, M extends GridSingleSelectSortableChildCellInfo<CellElement>>({
    gridNavigationCellParameters,
    managedChildParameters,
    context: { completeGridNavigationContext, gridNavigationCellContext, managedChildContext, rovingTabIndexChildContext, typeaheadNavigationChildContext },
    rovingTabIndexChildParameters,
    textContentParameters,
    //managedChildContext,
    completeGridNavigationCellParameters,
    //sortableChildParameters: { getSortValue },
    pressParameters: { onPressSync, ...pressParameters },
}: UseCompleteGridNavigationCellParameters<CellElement, M>): UseCompleteGridNavigationCellReturnType<CellElement, M> {

    const { index } = managedChildParameters;

    const { refElementReturn } = useRefElement<CellElement>({ refElementParameters: {} });

    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn,
        textContentReturn
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



    const baseInfo: GridSingleSelectSortableChildCellInfo<CellElement> = {
        focusSelf: pressParameters.focusSelf,
        getElement: refElementReturn.getElement,
        hidden: rovingTabIndexChildParameters.hidden,
        index: managedChildParameters.index,
        getTabbable: rovingTabIndexChildReturn.getTabbable,
        setTabbable: rovingTabIndexChildReturn.setTabbable,
        tabbable: rovingTabIndexChildReturn.tabbable,
        //getSortValue
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
        managedChildReturn,
        textContentReturn
    }
}
