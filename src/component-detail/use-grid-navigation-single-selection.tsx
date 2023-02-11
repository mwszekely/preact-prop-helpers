import { assertEmptyObject } from "../preact-extensions/use-managed-children";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { GridChildCellInfo as gcci, GridChildRowInfo as gcri, useGridNavigation, useGridNavigationCell, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, useGridNavigationRow, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./use-grid-navigation-partial";
import { SelectableChildInfo, useSingleSelection, useSingleSelectionChild, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection";

type OmitStrong<T, K extends keyof T> = Omit<T, K>;


/**
 * List navigation gets single selection, so grid navigation does too.
 * 
 * Any given row of the grid can be selected, akin to it being a single select list but with options that can be left/right arrowed to.
 * 
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;

export interface GridSingleSelectChildRowInfo<RowElement extends Element, CellElement extends Element> extends gcri<RowElement, CellElement>, SelectableChildInfo<RowElement> { }
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends gcci<CellElement> {
}

export interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, M>, OmitStrong<UseSingleSelectionParameters<RowElement>, "rovingTabIndexReturn"> {
    managedChildrenReturn: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, M>["managedChildrenReturn"] & UseSingleSelectionParameters<RowElement>["managedChildrenReturn"];
}
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, UseSingleSelectionReturnType<RowElement> {
    // gridNavigationRowContext: UseGridNavigationRowParameters<RowElement, any, any, any>["rowAsChildOfGridParameters"]["gridNavigationRowContext"]
}



export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> {
    rowAsChildOfGridParameters: UseGridNavigationRowParameters<RowElement, CellElement, _RM, CM>["rowAsChildOfGridParameters"] & UseSingleSelectionChildParameters<RowElement>;
    rowAsParentOfCellsParameters: UseGridNavigationRowParameters<RowElement, CellElement, _RM, CM>["rowAsParentOfCellsParameters"];

}

export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element> {
    rowAsChildOfGridReturn: UseGridNavigationRowReturnType<RowElement, CellElement>["rowAsChildOfGridReturn"] & OmitStrong<UseSingleSelectionChildReturnType<RowElement>, "pressParameters">;
    rowAsParentOfCellsReturn: UseGridNavigationRowReturnType<RowElement, CellElement>["rowAsParentOfCellsReturn"]
}








export interface UseGridNavigationSingleSelectionCellParameters<RowElement extends Element, CellElement extends Element> extends UseGridNavigationCellParameters<RowElement, CellElement> { }
export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> { }

export function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    ..._void2
}: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {
    const gnr = useGridNavigation<ParentOrRowElement, RowElement, CellElement, RM, CM>({
        gridNavigationParameters,
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });

    const { rovingTabIndexReturn } = gnr;

    const ssr = useSingleSelection<RowElement>({
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionParameters
    });

    assertEmptyObject(_void2);

    return {
        ...gnr,
        ...ssr,
    }
}

export function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({
    rowAsChildOfGridParameters,
    rowAsParentOfCellsParameters,
    ..._void1
}: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> {
    const { managedChildParameters, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 }, singleSelectionChildReturn } = useSingleSelectionChild<RowElement>(rowAsChildOfGridParameters);
    const { rowAsChildOfGridReturn: { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void2 }, gridNavigationRowParameters, rovingTabIndexChildReturn, textContentReturn, pressParameters, ...void4 }, rowAsParentOfCellsReturn } = useGridNavigationRow<RowElement, CellElement, RM, CM>({ rowAsChildOfGridParameters, rowAsParentOfCellsParameters });
    const onCurrentFocusedInnerChanged = useStableCallback<NonNullable<typeof ocfic2>>((focused, prevFocused, e) => { ocfic1?.(focused, prevFocused, e); ocfic2?.(focused, prevFocused, e); })

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);
    assertEmptyObject(void4);

    return {
        rowAsChildOfGridReturn: { 
            pressParameters,
            textContentReturn,
            managedChildParameters, 
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }, 
            gridNavigationRowParameters,
            rovingTabIndexChildReturn, 
            singleSelectionChildReturn
         },
        rowAsParentOfCellsReturn
    }

}

// EZ
export function useGridNavigationSingleSelectionCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionCellParameters<any, CellElement>): UseGridNavigationSingleSelectionCellReturnType<CellElement> {
    return useGridNavigationCell<CellElement>(p);
}