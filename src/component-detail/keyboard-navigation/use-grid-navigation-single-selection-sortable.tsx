import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { assertEmptyObject } from "../../util/assert.js";
import { useCallback } from "../../util/lib.js";
import { OmitStrong, TargetedOmit } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, UseGridNavigationCellSingleSelectionContext, UseGridNavigationRowSingleSelectionContext, UseGridNavigationSingleSelectionCellInfoKeysParameters, UseGridNavigationSingleSelectionCellInfoKeysReturnType, UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionCellReturnType, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, UseGridNavigationSingleSelectionRowInfoKeysParameters, UseGridNavigationSingleSelectionRowInfoKeysReturnType, UseGridNavigationSingleSelectionRowParameters, UseGridNavigationSingleSelectionRowReturnType, useGridNavigationSingleSelection, useGridNavigationSingleSelectionCell, useGridNavigationSingleSelectionRow } from "./use-grid-navigation-single-selection.js";
import { UseRovingTabIndexChildInfoKeysReturnType } from "./use-roving-tabindex.js";
import { UseSingleSelectionChildInfoKeysReturnType } from "./use-single-selection.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType, useSortableChildren } from "./use-sortable-children.js";

/**
 * Like list navigation single selection sortable etc. etc. etc.
 * 
 * The combinations are getting a bit silly but I swear this is the last one.
 */
const _dummy = 0;



export type UseGridNavigationSingleSelectionSortableRowInfoKeysParameters = UseGridNavigationSingleSelectionRowInfoKeysParameters;
export type UseGridNavigationSingleSelectionSortableRowInfoKeysReturnType = UseGridNavigationSingleSelectionRowInfoKeysReturnType;
export type UseGridNavigationSingleSelectionSortableCellInfoKeysParameters = UseGridNavigationSingleSelectionCellInfoKeysParameters;
export type UseGridNavigationSingleSelectionSortableCellInfoKeysReturnType = UseGridNavigationSingleSelectionCellInfoKeysReturnType;

export interface UseGridNavigationRowSingleSelectionSortableContext extends UseGridNavigationRowSingleSelectionContext { }
export interface UseGridNavigationCellSingleSelectionSortableContext extends UseGridNavigationCellSingleSelectionContext { }

export interface GridSingleSelectSortableChildRowInfo<RowElement extends Element> extends GridSingleSelectChildRowInfo<RowElement>, UseSortableChildInfo { }
export interface GridSingleSelectSortableChildCellInfo<CellElement extends Element> extends GridSingleSelectChildCellInfo<CellElement>, UseSortableChildInfo { }

export interface UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, RM>, "linearNavigationParameters" | "managedChildrenReturn">,
    TargetedOmit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, RM>, "linearNavigationParameters", "indexDemangler" | "indexMangler">,
    UseSortableChildrenParameters<RM> { }

export interface UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>> extends UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement>, UseSortableChildrenReturnType<RM> {
    context: UseGridNavigationRowSingleSelectionContext;
}

export interface UseGridNavigationSingleSelectionSortableRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends
    UseGenericChildParameters<UseGridNavigationRowSingleSelectionSortableContext, Pick<RM, UseGridNavigationSingleSelectionSortableRowInfoKeysParameters>>,
    OmitStrong<UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, CM>, "context" | "info"> { }
export interface UseGridNavigationSingleSelectionSortableRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement>, "context" | "info"> {
    info: Pick<RM, "focusSelf" | "getSortValue" | UseRovingTabIndexChildInfoKeysReturnType | UseSingleSelectionChildInfoKeysReturnType>;
    context: UseGridNavigationCellSingleSelectionContext;
}

export interface UseGridNavigationSingleSelectionSortableCellParameters<CellElement extends Element, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends
    UseGenericChildParameters<UseGridNavigationCellSingleSelectionSortableContext, Pick<CM, UseGridNavigationSingleSelectionSortableCellInfoKeysParameters>>,
    OmitStrong<UseGridNavigationSingleSelectionCellParameters<CellElement>, "context" | "info"> { }
export interface UseGridNavigationSingleSelectionSortableCellReturnType<CellElement extends Element> extends UseGridNavigationSingleSelectionCellReturnType<CellElement> { }

/**
 * Combines {@link useGridNavigation}, {@link useSingleSelection}, and {@link useSortableChildren}.
 * 
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 * 
 * @hasChild {@link useGridNavigationSingleSelectionSortableRow}
 * 
 * @compositeParams
 */
export function useGridNavigationSingleSelectionSortable<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>>({
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    linearNavigationParameters,
    managedChildrenReturn,
    gridNavigationParameters,
    paginatedChildrenParameters,
    refElementReturn,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters,
    ...void1
}: UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, RM>): UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, RM> {
    monitorCallCount(useGridNavigationSingleSelectionSortable);

    const { ...scr } = useSortableChildren<RM>({ rearrangeableChildrenParameters, sortableChildrenParameters, managedChildrenReturn });
    const { rearrangeableChildrenReturn: { indexDemangler, indexMangler } } = scr;
    const gnr = useGridNavigationSingleSelection<ParentOrRowElement, RowElement>({
        linearNavigationParameters: { indexDemangler, indexMangler, ...linearNavigationParameters },
        managedChildrenReturn,
        gridNavigationParameters,
        paginatedChildrenParameters,
        refElementReturn,
        rovingTabIndexParameters,
        singleSelectionParameters,
        typeaheadNavigationParameters
    });
    assertEmptyObject(void1);

    return { ...gnr, ...scr, }
}

/**
 * Besides just overriding `focusSelf` for `useRovingTabIndex`, this also overrides `getSortValue` to return the sort value of the current cell.
 * 
 * @compositeParams
 */
export function useGridNavigationSingleSelectionSortableRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>({
    context: ctxIncoming,
    info: { index, unselectable, untabbable, ...void2 },
    linearNavigationParameters,
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    ...void1
}: UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM> {
    monitorCallCount(useGridNavigationSingleSelectionSortableRow);

    const getSortValue = useCallback(() => {
        let rows = managedChildrenReturn.getChildren();
        let columnIndex = ctxIncoming.gridNavigationRowContext.getTabbableColumn() || 0;
        let cell = rows.getAt(columnIndex as never);
        return cell?.getSortValue();
    }, []);

    const {
        info: { getLocallyTabbable, getSelected, selected, setLocalSelected, setLocallyTabbable, focusSelf, ...void4 },
        context: ctxOutgoing,
        hasCurrentFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        props,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        ...void3
    } = useGridNavigationSingleSelectionRow<RowElement, CellElement>({
        context: ctxIncoming,
        info: { index, unselectable, untabbable },
        linearNavigationParameters,
        managedChildrenReturn,
        refElementReturn,
        rovingTabIndexParameters,
        textContentParameters,
        typeaheadNavigationParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    return {
        info: { getLocallyTabbable, getSelected, selected, setLocallyTabbable, setLocalSelected, getSortValue, focusSelf },
        context: ctxOutgoing,
        hasCurrentFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        props,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn
    }
}

/**
 * @compositeParams
 */
export function useGridNavigationSingleSelectionSortableCell<CellElement extends Element>({
    context,
    gridNavigationCellParameters,
    info: { index, untabbable, ...void2 },
    refElementReturn,
    textContentParameters,
    ...void1
}: UseGridNavigationSingleSelectionSortableCellParameters<CellElement, GridSingleSelectSortableChildCellInfo<CellElement>>): UseGridNavigationSingleSelectionSortableCellReturnType<CellElement> {
    monitorCallCount(useGridNavigationSingleSelectionSortableCell);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return useGridNavigationSingleSelectionCell<CellElement>({
        context,
        info: { index, untabbable },
        gridNavigationCellParameters,
        refElementReturn,
        textContentParameters,
    });
}
