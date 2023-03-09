import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { OmitStrong } from "../util/types.js";
import { GridChildCellInfo as gcci, GridChildRowInfo as gcri, useGridNavigation, useGridNavigationCell, UseGridNavigationCellContext, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, useGridNavigationRow, UseGridNavigationRowContext, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./use-grid-navigation-partial.js";
import { SelectableChildInfo, useSingleSelection, useSingleSelectionChild, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";

/**
 * List navigation gets single selection, so grid navigation does too.
 * 
 * Any given row of the grid can be selected, akin to it being a single select list but with options that can be left/right arrowed to.
 * 
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;

export interface GridSingleSelectChildRowInfo<RowElement extends Element, CellElement extends Element> extends gcri<RowElement, CellElement>, SelectableChildInfo<RowElement> { }
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends gcci<CellElement> { }

//                                                                                                                                                                                                                                                                                                             vvvvvvvvvv `useGridNavigation` provides us with this, so we don't need it.
export interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, M>, OmitStrong<UseSingleSelectionParameters<RowElement>, "rovingTabIndexReturn"> {
    // Defined explicitly as the intersection of the two types it extends
    managedChildrenReturn: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, M>["managedChildrenReturn"] & UseSingleSelectionParameters<RowElement>["managedChildrenReturn"];
}
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "context">,
    OmitStrong<UseSingleSelectionReturnType<RowElement>, "context"> {
    context: UseGridNavigationRowSingleSelectionContext<ParentOrRowElement, RowElement, CellElement>;
}

export interface UseGridNavigationRowSingleSelectionContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element> extends UseGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement>, UseSingleSelectionContext<RowElement> { }
export interface UseGridNavigationCellSingleSelectionContext<RowElement extends Element, CellElement extends Element> extends UseGridNavigationCellContext<RowElement, CellElement>, UseSingleSelectionContext<RowElement> { }



export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends
    OmitStrong<UseGridNavigationRowParameters<RowElement, CellElement, _RM, CM>, "context">,
    OmitStrong<UseSingleSelectionChildParameters<RowElement>, "context"> {
    context: UseGridNavigationRowSingleSelectionContext<Element, RowElement, CellElement>;
}

export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element> extends
    OmitStrong<UseGridNavigationRowReturnType<RowElement, CellElement>, "pressParameters">,
    OmitStrong<UseSingleSelectionChildReturnType<RowElement>, "props"> {
    pressParameters: UseGridNavigationRowReturnType<RowElement, CellElement>["pressParameters"];
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
    const {
        context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext },
        linearNavigationReturn,
        managedChildrenParameters,
        propsStable,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
    } = useGridNavigation<ParentOrRowElement, RowElement, CellElement, RM, CM>({
        gridNavigationParameters,
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });

    const {
        childrenHaveFocusParameters,
        context: { singleSelectionContext },
        singleSelectionReturn
    } = useSingleSelection<RowElement>({
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionParameters
    });

    assertEmptyObject(_void2);

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
        propsStable,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn
    }
}

export function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({
    managedChildParameters: mcp1,
    singleSelectionChildParameters,
    linearNavigationParameters,
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexChildParameters,
    rovingTabIndexParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
    ..._void1
}: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, managedChildParameters: mcp2, props: propsSS, singleSelectionChildReturn } = useSingleSelectionChild<RowElement>({ managedChildParameters: mcp1, singleSelectionChildParameters, context: { singleSelectionContext } });
    const { context, gridNavigationRowParameters, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace }, props: propsGN, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentReturn, typeaheadNavigationReturn } = useGridNavigationRow<RowElement, CellElement, RM, CM>({ context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationParameters, managedChildParameters: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexChildParameters, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters });

    assertEmptyObject(_void1);

    return {

        context,
        gridNavigationRowParameters,
        linearNavigationReturn,
        managedChildParameters: mcp2,
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
export function useGridNavigationSingleSelectionCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionCellParameters<any, CellElement>): UseGridNavigationSingleSelectionCellReturnType<CellElement> {
    return useGridNavigationCell<CellElement>(p);
}