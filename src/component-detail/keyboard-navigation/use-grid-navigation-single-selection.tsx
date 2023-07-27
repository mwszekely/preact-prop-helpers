import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ExtendMerge, OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { GridChildCellInfo, GridChildRowInfo, UseGridNavigationCellContext, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowInfoKeysReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType, useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./use-grid-navigation-partial.js";
import { UseListNavigationChildInfoKeysParameters } from "./use-list-navigation-partial.js";
import { UseListNavigationSingleSelectionChildInfoKeysParameters } from "./use-list-navigation-single-selection.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType, useSingleSelection, useSingleSelectionChild } from "./use-single-selection.js";

/**
 * List navigation gets single selection, so grid navigation does too.
 * 
 * Any given row of the grid can be selected, akin to it being a single select list but with options that can be left/right arrowed to.
 * 
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;

export type UseGridNavigationSingleSelectionRowInfoKeysParameters = UseListNavigationSingleSelectionChildInfoKeysParameters;
export type UseGridNavigationSingleSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSingleSelectionChildInfoKeysReturnType;
export type UseGridNavigationSingleSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationSingleSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;

export interface GridSingleSelectChildRowInfo<RowElement extends Element> extends GridChildRowInfo<RowElement>, UseSingleSelectionChildInfo<RowElement> { }
export interface GridSingleSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> { }
export interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement>> extends ExtendMerge<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, OmitStrong<UseSingleSelectionParameters<ParentOrRowElement, RowElement>, "rovingTabIndexReturn">> { }
export interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends ExtendMerge<UseGridNavigationReturnType<ParentOrRowElement, RowElement>, UseSingleSelectionReturnType<RowElement>> {
    context: UseGridNavigationRowSingleSelectionContext;
}
export interface UseGridNavigationRowSingleSelectionContext extends UseGridNavigationRowContext, UseSingleSelectionContext { }
export interface UseGridNavigationCellSingleSelectionContext extends UseGridNavigationCellContext, UseSingleSelectionContext { }
export interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends
    UseGenericChildParameters<UseGridNavigationRowSingleSelectionContext, Pick<GridSingleSelectChildRowInfo<RowElement>, UseGridNavigationSingleSelectionRowInfoKeysParameters>>,
    OmitStrong<UseGridNavigationRowParameters<RowElement, CellElement, CM>, "info" | "context">,
    OmitStrong<UseSingleSelectionChildParameters<RowElement>, "info" | "context"> {
    info: Pick<GridSingleSelectChildRowInfo<RowElement>, UseGridNavigationSingleSelectionRowInfoKeysParameters>;
}

export interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element> extends
    OmitStrong<ExtendMerge<UseGridNavigationRowReturnType<RowElement, CellElement>, UseSingleSelectionChildReturnType<RowElement>>, "context" | "info"> {
    context: UseGridNavigationCellSingleSelectionContext;
    info: Pick<GridSingleSelectChildRowInfo<RowElement>, UseGridNavigationSingleSelectionRowInfoKeysReturnType>;
}
export interface UseGridNavigationSingleSelectionCellParameters<CellElement extends Element> extends
    UseGenericChildParameters<UseGridNavigationCellSingleSelectionContext, Pick<GridSingleSelectChildCellInfo<CellElement>, UseGridNavigationSingleSelectionCellInfoKeysParameters>>,
    OmitStrong<UseGridNavigationCellParameters<CellElement>, "context" | "info"> {
    info: Pick<GridSingleSelectChildCellInfo<CellElement>, UseGridNavigationSingleSelectionCellInfoKeysParameters>;
}

export interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
    info: Pick<GridSingleSelectChildCellInfo<CellElement>, UseGridNavigationSingleSelectionCellInfoKeysReturnType>;
 }

/**
 * Combines {@link useGridNavigation} and {@link useSingleSelection}.
 * 
 * @remarks The single-selection behavior is optional, if you decide you need multi-selection instead within the same component.
 * 
 * @hasChild {@link useGridNavigationSingleSelectionRow}
 * @hasChild {@link useGridNavigationSingleSelectionCell}
 * 
 * @compositeParams
 */
export function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    refElementReturn,
    paginatedChildrenParameters,
    ...void2
}: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, GridSingleSelectChildRowInfo<RowElement>>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement> {
    monitorCallCount(useGridNavigationSingleSelection);

    const {
        context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext },
        linearNavigationReturn,
        managedChildrenParameters,
        propsParent,
        propsStableParentOrChild,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
    } = useGridNavigation<ParentOrRowElement, RowElement>({
        gridNavigationParameters,
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        paginatedChildrenParameters,
        refElementReturn
    });

    const {
        childrenHaveFocusParameters,
        context: { singleSelectionContext },
        singleSelectionReturn,
    } = useSingleSelection<ParentOrRowElement, RowElement>({
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionParameters
    });

    assertEmptyObject(void2);

    return {
        context: useMemoObject({
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

/**
 * @compositeParams
 */
export function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element>({
    info: mcp1,
    linearNavigationParameters,
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    context,
    ...void1
}: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, GridSingleSelectChildCellInfo<CellElement>>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement> {
    monitorCallCount(useGridNavigationSingleSelectionRow);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: { getSelected, selected, setLocalSelected, ...void8 }, props: propsSingleSelection, singleSelectionChildReturn, pressParameters: { onPressSync, ...void4 }, ...void2 } = useSingleSelectionChild<RowElement>({ info: mcp1, context });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentReturn, typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow<RowElement, CellElement>({ context, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);

    return {
        context: { ...contextGridNavigation, singleSelectionContext: context.singleSelectionContext },
        linearNavigationReturn,
        info: {
            getLocallyTabbable,
            getSelected,
            selected,
            setLocallyTabbable,
            setLocalSelected,
            focusSelf
        },
        managedChildrenParameters,
        pressParameters: { onPressSync, excludeSpace },
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((hasFocus, hadFocus) => { ocfic1?.(hasFocus, hadFocus); ocfic2?.(hasFocus, hadFocus) }) },
        props: useMergedProps(propsGridNavigation, propsSingleSelection),
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
export function useGridNavigationSingleSelectionCell<CellElement extends Element>(p: UseGridNavigationSingleSelectionCellParameters<CellElement>): UseGridNavigationSingleSelectionCellReturnType<CellElement> {
    monitorCallCount(useGridNavigationSingleSelectionCell);
    return useGridNavigationCell<CellElement>(p);
}