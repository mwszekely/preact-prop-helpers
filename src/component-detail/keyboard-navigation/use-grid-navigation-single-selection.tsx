import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ExtendMerge, OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseGridNavigationCellContext, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowParameters, UseGridNavigationRowReturnType, GridChildCellInfo as gcci, GridChildRowInfo as gcri, useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./use-grid-navigation-partial.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType, useSingleSelection, useSingleSelectionChild } from "./use-single-selection.js";

/**
 * List navigation gets single selection, so grid navigation does too.
 * 
 * Any given row of the grid can be selected, akin to it being a single select list but with options that can be left/right arrowed to.
 * 
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;

export interface GridSingleSelectChildRowInfo<RowElement extends Element, CellElement extends Element> extends gcri<RowElement, CellElement>, UseSingleSelectionChildInfo<RowElement> { }
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends gcci<CellElement> { }
export interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends ExtendMerge<UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>, OmitStrong<UseSingleSelectionParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexReturn">> { }
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, UseSingleSelectionReturnType<RowElement, RM>> { }
export interface UseGridNavigationRowSingleSelectionContext extends UseGridNavigationRowContext, UseSingleSelectionContext { }
export interface UseGridNavigationCellSingleSelectionContext extends UseGridNavigationCellContext, UseSingleSelectionContext { }
export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>, UseSingleSelectionChildParameters<RowElement, RM>> { }
export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM>, UseSingleSelectionChildReturnType<RowElement>> { }
export interface UseGridNavigationSingleSelectionCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationCellParameters<RowElement, CellElement, CM> { }
export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationCellReturnType<CellElement, CM> { }

export function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    refElementReturn,
    ...void2
}: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {
    monitorCallCount(useGridNavigationSingleSelection);

    const {
        context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext },
        linearNavigationReturn,
        managedChildrenParameters,
        propsParent,
        propsStableParentOrChild,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
    } = useGridNavigation<ParentOrRowElement, RowElement, CellElement, RM, CM>({
        gridNavigationParameters,
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        refElementReturn
    });

    const {
        childrenHaveFocusParameters,
        context: { singleSelectionContext },
        singleSelectionReturn,
    } = useSingleSelection<ParentOrRowElement, RowElement, RM>({
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionParameters
    });

    assertEmptyObject(void2);

    return {
        context: useStableObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            singleSelectionContext,
            typeaheadNavigationContext
        }),
        childrenHaveFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        propsParent,
        propsStableParentOrChild,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn
    }
}

export function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({
    info: mcp1,
    linearNavigationParameters,
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
    singleSelectionParameters,
    ...void1
}: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement, RM, CM> {
    monitorCallCount(useGridNavigationSingleSelectionRow);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, info: mcp2, props: propsSS, singleSelectionChildReturn, ...void2 } = useSingleSelectionChild<RowElement, RM>({ info: mcp1, context: { singleSelectionContext }, singleSelectionParameters });
    const { context, gridNavigationRowParameters, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace }, props: propsGN, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentReturn, typeaheadNavigationReturn, info: mcp3, ...void3 } = useGridNavigationRow<RowElement, CellElement, RM, CM>({ context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        context,
        gridNavigationRowParameters,
        linearNavigationReturn,
        info: { ...mcp2, ...mcp3 },
        managedChildrenParameters,
        pressParameters: { excludeSpace },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((hasFocus, hadFocus) => { ocfic1?.(hasFocus, hadFocus); ocfic2?.(hasFocus, hadFocus) }) },
        props: useMergedProps(propsGN, propsSS),
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn
    }
}

// EZ
export function useGridNavigationSingleSelectionCell<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>>(p: UseGridNavigationSingleSelectionCellParameters<any, CellElement, CM>): UseGridNavigationSingleSelectionCellReturnType<CellElement, CM> {
    monitorCallCount(useGridNavigationSingleSelectionCell);
    return useGridNavigationCell<CellElement, CM>(p);
}