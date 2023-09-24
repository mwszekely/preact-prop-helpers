import { UseGenericChildParameters } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { ExtendMerge, OmitStrong, PropNames } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { GridChildCellInfo, GridChildRowInfo, UseGridNavigationCellContext, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowInfoKeysReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType, useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./keyboard-navigation/use-grid-navigation-partial.js";
import { UseListNavigationChildInfoKeysParameters } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType, useSelection, useSelectionChild } from "./selection/use-selection.js";
import { UseListNavigationSelectionChildInfoKeysParameters } from "./use-list-navigation-selection.js";

/**
 * List navigation gets  selection, so grid navigation does too.
 * 
 * Any given row of the grid can be selected, akin to it being a  select list but with options that can be left/right arrowed to.
 * 
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;

export type UseGridNavigationSelectionRowInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;
export type UseGridNavigationSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
export type UseGridNavigationSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;

export interface GridSelectChildRowInfo<RowElement extends Element> extends GridChildRowInfo<RowElement>, UseSelectionChildInfo<RowElement> { }
export interface GridSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> { }
export interface UseGridNavigationSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, never>,
    OmitStrong<UseSelectionParameters<ParentOrRowElement, RowElement, RM>, never> { }

export interface UseGridNavigationSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends
    UseGridNavigationReturnType<ParentOrRowElement, RowElement>,
    OmitStrong<UseSelectionReturnType<ParentOrRowElement, RowElement>, "props"> {
    context: UseGridNavigationRowSelectionContext;
}
export interface UseGridNavigationRowSelectionContext extends UseGridNavigationRowContext, UseSelectionContext { }
export interface UseGridNavigationCellSelectionContext extends UseGridNavigationCellContext { }
export interface UseGridNavigationSelectionRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSelectChildRowInfo<RowElement>, CM extends GridSelectChildCellInfo<CellElement>> extends
    UseGenericChildParameters<UseGridNavigationRowSelectionContext, Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>>,
    OmitStrong<UseGridNavigationRowParameters<RowElement, CellElement, CM>, "info" | "context">,
    OmitStrong<UseSelectionChildParameters<RowElement, RM>, "info" | "context"> {
    info: Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>;
}

export interface UseGridNavigationSelectionRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends
    ExtendMerge<OmitStrong<UseGridNavigationRowReturnType<RowElement, CellElement>, "context" | "info">, OmitStrong<UseSelectionChildReturnType<RowElement, RM>, "info">> {
    context: UseGridNavigationCellSelectionContext;
    info: Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysReturnType>;
}
export interface UseGridNavigationSelectionCellParameters<CellElement extends Element> extends
    UseGenericChildParameters<UseGridNavigationCellSelectionContext, Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysParameters>>,
    OmitStrong<UseGridNavigationCellParameters<CellElement>, "context" | "info"> {
    info: Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysParameters>;
}

export interface UseGridNavigationSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
    info: Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysReturnType>;
}

/**
 * Combines {@link useGridNavigation} and {@link useSelection}.
 * 
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 * 
 * @hasChild {@link useGridNavigationSelectionRow}
 * @hasChild {@link useGridNavigationSelectionCell}
 * 
 * @compositeParams
 */
export const useGridNavigationSelection = monitored(function useGridNavigationSelection<ParentOrRowElement extends Element, RowElement extends Element>({

    // Both
    [PropNames.ManagedChildrenReturn.getChildren]: getChildren,

    // Grid navigation
    [PropNames.GridNavigationParameters.initiallyTabbableColumn]: initiallyTabbableColumn,
    [PropNames.GridNavigationParameters.onTabbableColumnChange]: onTabbableColumnChange,
    [PropNames.LinearNavigationParameters.disableHomeEndKeys]: disableHomeEndKeys,
    [PropNames.LinearNavigationParameters.getHighestIndex]: getHighestIndex,
    [PropNames.LinearNavigationParameters.getLowestIndex]: getLowestIndex,
    [PropNames.LinearNavigationParameters.isValidForLinearNavigation]: isValidForLinearNavigation,
    [PropNames.LinearNavigationParameters.navigatePastEnd]: navigatePastEnd,
    [PropNames.LinearNavigationParameters.navigatePastStart]: navigatePastStart,
    [PropNames.LinearNavigationParameters.onNavigateLinear]: onNavigateLinear,
    [PropNames.LinearNavigationParameters.pageNavigationSize]: pageNavigationSize,
    [PropNames.PaginatedParameters.paginationMax]: paginationMax,
    [PropNames.PaginatedParameters.paginationMin]: paginationMin,
    [PropNames.RearrangeableReturn.indexDemangler]: indexDemangler,
    [PropNames.RearrangeableReturn.indexMangler]: indexMangler,
    [PropNames.RefElementReturn.getElement]: getElement,
    [PropNames.RovingTabIndexParameters.focusSelfParent]: focusSelfParent,
    [PropNames.RovingTabIndexParameters.initiallyTabbedIndex]: initiallyTabbedIndex,
    [PropNames.RovingTabIndexParameters.onTabbableIndexChange]: onTabbableIndexChange,
    [PropNames.RovingTabIndexParameters.untabbable]: untabbable,
    [PropNames.RovingTabIndexParameters.untabbableBehavior]: untabbableBehavior,
    [PropNames.TypeaheadNavigationParameters.collator]: collator,
    [PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
    [PropNames.TypeaheadNavigationParameters.noTypeahead]: noTypeahead,
    [PropNames.TypeaheadNavigationParameters.onNavigateTypeahead]: onNavigateTypeahead,
    [PropNames.TypeaheadNavigationParameters.typeaheadTimeout]: typeaheadTimeout,

    // Selection
    [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused,
    [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: multiSelectionAriaPropName,
    [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode,
    [PropNames.MultiSelectionParameters.onSelectionChange]: onSelectionChange,
    [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex,
    [PropNames.SingleSelectionParameters.initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
    [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
    [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: singleSelectionAriaPropName,
    [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode,
    ...void2
}: UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, GridSelectChildRowInfo<RowElement>>): UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement> {

    const {
        context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext },
        props: propsGN,
        ...retGN
    } = useGridNavigation<ParentOrRowElement, RowElement>({
        [PropNames.GridNavigationParameters.initiallyTabbableColumn]: initiallyTabbableColumn,
        [PropNames.GridNavigationParameters.onTabbableColumnChange]: onTabbableColumnChange,
        [PropNames.LinearNavigationParameters.disableHomeEndKeys]: disableHomeEndKeys,
        [PropNames.LinearNavigationParameters.getHighestIndex]: getHighestIndex,
        [PropNames.LinearNavigationParameters.getLowestIndex]: getLowestIndex,
        [PropNames.LinearNavigationParameters.isValidForLinearNavigation]: isValidForLinearNavigation,
        [PropNames.LinearNavigationParameters.navigatePastEnd]: navigatePastEnd,
        [PropNames.LinearNavigationParameters.navigatePastStart]: navigatePastStart,
        [PropNames.LinearNavigationParameters.onNavigateLinear]: onNavigateLinear,
        [PropNames.LinearNavigationParameters.pageNavigationSize]: pageNavigationSize,
        [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
        [PropNames.PaginatedParameters.paginationMax]: paginationMax,
        [PropNames.PaginatedParameters.paginationMin]: paginationMin,
        [PropNames.RearrangeableReturn.indexDemangler]: indexDemangler,
        [PropNames.RearrangeableReturn.indexMangler]: indexMangler,
        [PropNames.RefElementReturn.getElement]: getElement,
        [PropNames.RovingTabIndexParameters.focusSelfParent]: focusSelfParent,
        [PropNames.RovingTabIndexParameters.initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames.RovingTabIndexParameters.onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames.RovingTabIndexParameters.untabbable]: untabbable,
        [PropNames.RovingTabIndexParameters.untabbableBehavior]: untabbableBehavior,
        [PropNames.TypeaheadNavigationParameters.collator]: collator,
        [PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
        [PropNames.TypeaheadNavigationParameters.noTypeahead]: noTypeahead,
        [PropNames.TypeaheadNavigationParameters.onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames.TypeaheadNavigationParameters.typeaheadTimeout]: typeaheadTimeout
        //rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
    });

    const {
        context: { singleSelectionContext, multiSelectionContext },
        props: propsSS,
        ...retSS
    } = useSelection<ParentOrRowElement, RowElement>({
        [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused,
        [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
        [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: multiSelectionAriaPropName,
        [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode,
        [PropNames.MultiSelectionParameters.onSelectionChange]: onSelectionChange,
        [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex,
        [PropNames.SingleSelectionParameters.initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
        [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
        [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: singleSelectionAriaPropName,
        [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode
    });

    assertEmptyObject(void2);

    return {
        context: useMemoObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            singleSelectionContext,
            multiSelectionContext,
            typeaheadNavigationContext
        }),
        props: [...propsGN, propsSS],
        ...retGN,
        ...retSS
    }
})

/**
 * @compositeParams
 */
export const useGridNavigationSelectionRow = monitored(function useGridNavigationSelectionRow<RowElement extends Element, CellElement extends Element>({
    info: mcp1,
    context,


    [PropNames.LinearNavigationParameters.getHighestIndex]: getHighestIndex,
    [PropNames.LinearNavigationParameters.getLowestIndex]: getLowestIndex,
    [PropNames.LinearNavigationParameters.isValidForLinearNavigation]: isValidForLinearNavigation,
    [PropNames.LinearNavigationParameters.navigatePastEnd]: navigatePastEnd,
    [PropNames.LinearNavigationParameters.navigatePastStart]: navigatePastStart,
    [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
    [PropNames.RefElementReturn.getElement]: getElement,
    [PropNames.RovingTabIndexParameters.initiallyTabbedIndex]: initiallyTabbedIndex,
    [PropNames.RovingTabIndexParameters.onTabbableIndexChange]: onTabbableIndexChange,
    [PropNames.RovingTabIndexParameters.untabbable]: untabbable,
    [PropNames.TextContentParameters.getText]: getText,
    [PropNames.TypeaheadNavigationParameters.collator]: collator,
    [PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
    [PropNames.TypeaheadNavigationParameters.noTypeahead]: noTypeahead,
    [PropNames.TypeaheadNavigationParameters.onNavigateTypeahead]: onNavigateTypeahead,
    [PropNames.TypeaheadNavigationParameters.typeaheadTimeout]: typeaheadTimeout,


    [PropNames.MultiSelectionChildParameters.initiallyMultiSelected]: initiallyMultiSelected,
    [PropNames.MultiSelectionChildParameters.multiSelectionDisabled]: multiSelectionDisabled,
    [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: onMultiSelectChange,
    [PropNames.SingleSelectionChildParameters.singleSelectionDisabled]: singleSelectionDisabled,
    ...void1
}: UseGridNavigationSelectionRowParameters<RowElement, CellElement, GridSelectChildRowInfo<RowElement>, GridSelectChildCellInfo<CellElement>>): UseGridNavigationSelectionRowReturnType<RowElement, CellElement, GridSelectChildRowInfo<RowElement>> {
    const {
        info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 },
        props: propsSelection,
        [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: ocfic2,
        ...retSS
    } = useSelectionChild<RowElement>({
        info: mcp1,
        context,
        [PropNames.MultiSelectionChildParameters.initiallyMultiSelected]: initiallyMultiSelected,
        [PropNames.MultiSelectionChildParameters.multiSelectionDisabled]: multiSelectionDisabled,
        [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: onMultiSelectChange,
        [PropNames.SingleSelectionChildParameters.singleSelectionDisabled]: singleSelectionDisabled
    });
    const {
        info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 },
        props: propsGridNavigation,
        context: contextGridNavigation,
        [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: ocfic1,
        [PropNames.ManagedChildrenParameters.onChildrenMountChange]: onChildrenMountChange,
        ...retGN
    } = useGridNavigationRow<RowElement, CellElement>({
        context,
        info: mcp1,
        [PropNames.LinearNavigationParameters.getHighestIndex]: getHighestIndex,
        [PropNames.LinearNavigationParameters.getLowestIndex]: getLowestIndex,
        [PropNames.LinearNavigationParameters.isValidForLinearNavigation]: isValidForLinearNavigation,
        [PropNames.LinearNavigationParameters.navigatePastEnd]: navigatePastEnd,
        [PropNames.LinearNavigationParameters.navigatePastStart]: navigatePastStart,
        [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
        [PropNames.RefElementReturn.getElement]: getElement,
        [PropNames.RovingTabIndexParameters.initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames.RovingTabIndexParameters.onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames.RovingTabIndexParameters.untabbable]: untabbable,
        [PropNames.TextContentParameters.getText]: getText,
        [PropNames.TypeaheadNavigationParameters.collator]: collator,
        [PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
        [PropNames.TypeaheadNavigationParameters.noTypeahead]: noTypeahead,
        [PropNames.TypeaheadNavigationParameters.onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames.TypeaheadNavigationParameters.typeaheadTimeout]: typeaheadTimeout,
    });

    assertEmptyObject(void1);
    assertEmptyObject(void8);
    assertEmptyObject(void9);

    return {
        props: [...propsGridNavigation, ...propsSelection],
        context: contextGridNavigation,
        info: {
            getLocallyTabbable,
            getSingleSelected,
            singleSelected,
            setLocallyTabbable,
            setLocalSingleSelected,
            focusSelf,
            getMultiSelected,
            setSelectedFromParent,
            getMultiSelectionDisabled
        },
        [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: useStableCallback((hasFocus, hadFocus, reason) => { ocfic1?.(hasFocus, hadFocus, reason); ocfic2?.(hasFocus, hadFocus, reason) }),
        [PropNames.ManagedChildrenParameters.onChildrenMountChange]: onChildrenMountChange,
        ...retGN,
        ...retSS,
    }
})

/**
 * @compositeParams
 */
export const useGridNavigationSelectionCell = monitored(function useGridNavigationSelectionCell<CellElement extends Element>(p: UseGridNavigationSelectionCellParameters<CellElement>): UseGridNavigationSelectionCellReturnType<CellElement> {
    return useGridNavigationCell<CellElement>(p);
})