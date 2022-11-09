import { GridChildCellInfo as gcci, GridChildRowInfo as gcri, useGridNavigation, useGridNavigationCell, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, useGridNavigationRow, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./use-grid-navigation-partial";
import { SelectableChildInfo, useSingleSelection, useSingleSelectionChild, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnTypeInfo, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection";
import { assertEmptyObject } from "../preact-extensions/use-child-manager";
import { useStableCallback } from "../preact-extensions/use-stable-callback";

/**
 * List navigation gets single selection, so grid navigation does too.
 * 
 * Any given row of the grid can be selected, akin to it being a single select list but with options that can be left/right arrowed to.
 * 
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;

export interface GridSingleSelectChildRowInfo<RowElement extends Element> extends gcri<RowElement>, SelectableChildInfo<RowElement> { }
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends gcci<CellElement> {
}

export interface UseGridNavigationSingleSelectionParameters<RowElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement>> extends UseGridNavigationParameters<RowElement, M>, Omit<UseSingleSelectionParameters<RowElement>, "rovingTabIndexReturn"> {
    managedChildrenReturn: UseGridNavigationParameters<RowElement, M>["managedChildrenReturn"] & UseSingleSelectionParameters<RowElement>["managedChildrenReturn"];
}
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends UseGridNavigationReturnType<ParentOrRowElement, RowElement>, UseSingleSelectionReturnType {
    // gridNavigationRowContext: UseGridNavigationRowParameters<RowElement, any, any, any>["asChildRowParameters"]["gridNavigationRowContext"]
}



export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> {
    asChildRowParameters: UseGridNavigationRowParameters<RowElement, CellElement, _RM, CM>["asChildRowParameters"] & UseSingleSelectionChildParameters<RowElement>;
    asParentRowParameters: UseGridNavigationRowParameters<RowElement, CellElement, _RM, CM>["asParentRowParameters"];

}

export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element> {
    asChildRowReturn: UseGridNavigationRowReturnType<RowElement, CellElement>["asChildRowReturn"] & UseSingleSelectionChildReturnTypeInfo<RowElement>;
    asParentRowReturn: UseGridNavigationRowReturnType<RowElement, CellElement>["asParentRowReturn"]
}








export interface UseGridNavigationSingleSelectionCellParameters<CellElement extends Element> extends UseGridNavigationCellParameters<CellElement> { }
export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> { }

export function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    ..._void2
}: UseGridNavigationSingleSelectionParameters<RowElement, M>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement> {
    const gnr = useGridNavigation<ParentOrRowElement, RowElement, M>({
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

export function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({
    asChildRowParameters,
    asParentRowParameters,
    ..._void1
}: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 }, managedChildParameters: mcp3, ...sscr } = useSingleSelectionChild<RowElement>(asChildRowParameters);
    const { asChildRowReturn: { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void2 }, managedChildParameters: mcp2, ...gnr_crr }, asParentRowReturn: { ...gnr_prr } } = useGridNavigationRow<RowElement, CellElement, RM, CM>({ asChildRowParameters, asParentRowParameters });
    const onCurrentFocusedInnerChanged = useStableCallback<NonNullable<typeof ocfic2>>((focused, prevFocused) => { ocfic1?.(focused, prevFocused); ocfic2?.(focused, prevFocused); })

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);

    return {
        asChildRowReturn: { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }, managedChildParameters: { ...mcp2, ...mcp3 }, ...gnr_crr, ...sscr },
        asParentRowReturn: { ...gnr_prr },
    }

}

// EZ
export function useGridNavigationSingleSelectionCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionCellParameters<CellElement>): UseGridNavigationSingleSelectionCellReturnType<CellElement> {
    return useGridNavigationCell<CellElement>(p);
}