import { useGridNavigationCell, UseGridNavigationCellParameters, UseGridNavigationCellReturnType } from "./use-grid-navigation-partial.js";
import { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, useGridNavigationSingleSelection, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, useGridNavigationSingleSelectionRow, UseGridNavigationSingleSelectionRowParameters, UseGridNavigationSingleSelectionRowReturnType } from "./use-grid-navigation-single-selection.js";
import { UseSortableChildInfo, useSortableChildren, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "./use-sortable-children.js";

type OmitStrong<T, K extends keyof T> = Omit<T, K>

/**
 * Like list navigation single selection sortable etc. etc. etc.
 * 
 * The combinations are getting a bit silly but I swear this is the last one.
 */
const _dummy = 0;

export interface GridSingleSelectSortableChildRowInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectChildRowInfo<RowElement, CellElement>, UseSortableChildInfo { }
export interface GridSingleSelectSortableChildCellInfo<CellElement extends Element> extends GridSingleSelectChildCellInfo<CellElement> {
    //getSortValue: UseSortableChildInfo["getSortValue"];
}

export interface UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "linearNavigationParameters">, UseSortableChildrenParameters<M> {
    linearNavigationParameters: OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>["linearNavigationParameters"], "indexMangler" | "indexDemangler">
}
export interface UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, UseSortableChildrenReturnType<RM> { }
export interface UseGridNavigationSingleSelectionSortableRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, _RM, CM> { }
export interface UseGridNavigationSingleSelectionSortableRowReturnType<RowElement extends Element, CellElement extends Element> extends UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> { }
export interface UseGridNavigationSingleSelectionSortableCellParameters<RowElement extends Element, CellElement extends Element> extends UseGridNavigationCellParameters<RowElement, CellElement> { }
export interface UseGridNavigationSingleSelectionSortableCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> { }

export function useGridNavigationSingleSelectionSortable<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>({
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    linearNavigationParameters,
    ...gridNavigationSingleSelectionParameters
}: UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {
    const { ...scr } = useSortableChildren<RM>({ rearrangeableChildrenParameters, sortableChildrenParameters });
    const { rearrangeableChildrenReturn: { indexDemangler, indexMangler } } = scr;
    const gnr = useGridNavigationSingleSelection<ParentOrRowElement, RowElement, CellElement, RM, CM>({
        linearNavigationParameters: { indexDemangler, indexMangler, ...linearNavigationParameters },
        ...gridNavigationSingleSelectionParameters
    });

    return { ...gnr, ...scr, }
}

export function useGridNavigationSingleSelectionSortableRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>(p: UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement> {
    return useGridNavigationSingleSelectionRow<RowElement, CellElement, RM, CM>(p);
}

// EZ
export function useGridNavigationSingleSelectionSortableCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionSortableCellParameters<any, CellElement>): UseGridNavigationSingleSelectionSortableCellReturnType<CellElement> {
    return useGridNavigationCell<CellElement>(p);
}