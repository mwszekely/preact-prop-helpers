import { useCallback } from "preact/hooks";
import { useGridNavigationCell, UseGridNavigationCellParameters, UseGridNavigationCellReturnType } from "./use-grid-navigation-partial";
import { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, useGridNavigationSingleSelection, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, useGridNavigationSingleSelectionRow, UseGridNavigationSingleSelectionRowParameters, UseGridNavigationSingleSelectionRowReturnType } from "./use-grid-navigation-single-selection";
//import { UseSingleSelectionChildParameters, UseSingleSelectionChildReturnTypeInfo, UseSingleSelectionParameters, UseSingleSelectionReturnTypeInfo } from "./use-single-selection";
import { UseSortableChildInfo, useSortableChildren, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "./use-sortable-children";

/**
 * Like list navigation single selection sortable etc. etc. etc.
 * 
 * The combinations are getting a bit silly but I swear this is the last one.
 */
const _dummy = 0;

export interface GridSingleSelectSortableChildRowInfo<RowElement extends Element> extends GridSingleSelectChildRowInfo<RowElement>, UseSortableChildInfo { }
export interface GridSingleSelectSortableChildCellInfo<CellElement extends Element> extends GridSingleSelectChildCellInfo<CellElement> { }

export interface UseGridNavigationSingleSelectionSortableParameters<RowElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement>> extends Omit<UseGridNavigationSingleSelectionParameters<RowElement, M>, "linearNavigationParameters">, UseSortableChildrenParameters<M> {
    linearNavigationParameters: Omit<UseGridNavigationSingleSelectionParameters<RowElement, M>["linearNavigationParameters"], "indexMangler" | "indexDemangler">
}
export interface UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement>> extends UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement>, Omit<UseSortableChildrenReturnType<ParentOrRowElement, M>, "linearNavigationParameters"> { }
export interface UseGridNavigationSingleSelectionSortableRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, _RM, CM> { }
export interface UseGridNavigationSingleSelectionSortableRowReturnType<RowElement extends Element, CellElement extends Element> extends UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> { }
export interface UseGridNavigationSingleSelectionSortableCellParameters<CellElement extends Element> extends UseGridNavigationCellParameters<CellElement> { }
export interface UseGridNavigationSingleSelectionSortableCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> { }

export function useGridNavigationSingleSelectionSortable<ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectSortableChildRowInfo<RowElement>>({
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    linearNavigationParameters,
    ...gridNavigationSingleSelectionParameters
}: UseGridNavigationSingleSelectionSortableParameters<RowElement, M>): UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, M> {
    const { ...scr } = useSortableChildren<ParentOrRowElement, M>({ rearrangeableChildrenParameters, sortableChildrenParameters });
    const { rearrangeableChildrenReturn: { indexDemangler, indexMangler } } = scr;
    const gnr = useGridNavigationSingleSelection<ParentOrRowElement, RowElement, M>({
        linearNavigationParameters: { indexDemangler, indexMangler, ...linearNavigationParameters },
        ...gridNavigationSingleSelectionParameters
    });

    return { ...gnr, ...scr, }
}

export function useGridNavigationSingleSelectionSortableRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>(p: UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement> {
    return useGridNavigationSingleSelectionRow<RowElement, CellElement, RM, CM>(p);
}

// EZ
export function useGridNavigationSingleSelectionSortableCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionSortableCellParameters<CellElement>): UseGridNavigationSingleSelectionSortableCellReturnType<CellElement> {
    return useGridNavigationCell<CellElement>(p);
}