import { identity } from "lodash-es";
import { PropNames_PressParameters_excludeSpace } from "../../component-use/use-press.js";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { PropNames_RefElementReturn_getElement } from "../../dom-helpers/use-ref-element.js";
import { PropNames_TextContentParameters_getText, PropNames_TextContentReturn_getTextContent } from "../../dom-helpers/use-text-content.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged } from "../../observers/use-has-current-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren } from "../../preact-extensions/use-managed-children.js";
import { usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { focus } from "../../util/focus.js";
import { monitored } from "../../util/use-call-count.js";
import { PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin } from "../processed-children/use-paginated-children.js";
import { PropNames_RearrangeableReturn_indexDemangler, PropNames_RearrangeableReturn_indexMangler } from "../processed-children/use-rearrangeable-children.js";
import { PropNames_LinearNavigationParameters_arrowKeyDirection, PropNames_LinearNavigationParameters_disableHomeEndKeys, PropNames_LinearNavigationParameters_getHighestIndex, PropNames_LinearNavigationParameters_getLowestIndex, PropNames_LinearNavigationParameters_isValidForLinearNavigation, PropNames_LinearNavigationParameters_navigatePastEnd, PropNames_LinearNavigationParameters_navigatePastStart, PropNames_LinearNavigationParameters_onNavigateLinear, PropNames_LinearNavigationParameters_pageNavigationSize } from "./use-linear-navigation.js";
import { useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { PropNames_RovingTabIndexChildReturn_getTabbable, PropNames_RovingTabIndexChildReturn_tabbable, PropNames_RovingTabIndexParameters_focusSelfParent, PropNames_RovingTabIndexParameters_initiallyTabbedIndex, PropNames_RovingTabIndexParameters_onTabbableIndexChange, PropNames_RovingTabIndexParameters_untabbable, PropNames_RovingTabIndexParameters_untabbableBehavior, PropNames_RovingTabIndexReturn_setTabbableIndex } from "./use-roving-tabindex.js";
import { PropNames_TypeaheadNavigationParameters_collator, PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation, PropNames_TypeaheadNavigationParameters_noTypeahead, PropNames_TypeaheadNavigationParameters_onNavigateTypeahead, PropNames_TypeaheadNavigationParameters_typeaheadTimeout } from "./use-typeahead-navigation.js";
const P1 = `PropNames.GridNavigationParameters`;
const P2 = `PropNames.GridNavigationRowParameters`;
const P3 = `PropNames.GridNavigationCellParameters`;
const R1 = `PropNames.GridNavigationReturn`;
const R2 = `PropNames.GridNavigationRowReturn`;
const R3 = `PropNames.GridNavigationCellReturn`;
export const PropNames_GridNavigationParameters_onTabbableColumnChange = `${P1}.onTabbableColumnChange`;
export const PropNames_GridNavigationParameters_initiallyTabbableColumn = `${P1}.initiallyTabbableColumn`;
export const PropNames_GridNavigationCellParameters_colSpan = `${P3}.colSpan`;
/**
 * Implements 2-dimensional grid-based keyboard navigation, similarly to {@link useListNavigation}.
 *
 * @remarks Due to the complexity of this hook, it is *highly* recommended to use {@link useCompleteGridNavigation} instead.
 * But if you do need to it's designed to work well with intellisense -- just keep plugging the holes until the errors stop and that's 95% of it right there.
 *
 * Some features and/or limitations of this hook:
 *
 * ```md-literal
 * * Like all other hooks (except sorting), the only DOM restriction is that the rows and cells are descendants of the grid as a whole **somewhere**.
 * * Rows are given priority over columns. Sorting/filtering happens by row, Page Up/Down, the Home/End keys, and typeahead affect the current row, etc.
 * * Cells can have a `colSpan` or be missing, and moving with the arrow keys will "remember" the correct column to be in as focus jumps around.
 * ```
 *
 * @compositeParams
 *
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 */
export const useGridNavigation = monitored(function useGridNavigation({ [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_GridNavigationParameters_onTabbableColumnChange]: onTabbableColumnChange, [PropNames_GridNavigationParameters_initiallyTabbableColumn]: initiallyTabbableColumn, ...void2 }) {
    const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
        let t = (initiallyTabbableColumn ?? 0);
        return { actual: t, ideal: t };
    }));
    const { context: { rovingTabIndexContext, typeaheadNavigationContext }, props, ...retLN } = useListNavigation({
        [PropNames_LinearNavigationParameters_arrowKeyDirection]: "vertical",
        [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
        [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
        [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
        [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
        [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
        [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
        [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
        [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_PaginatedParameters_paginationMax]: paginationMax,
        [PropNames_PaginatedParameters_paginationMin]: paginationMin,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange,
        [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
        [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior,
        [PropNames_TypeaheadNavigationParameters_collator]: collator,
        [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
    });
    assertEmptyObject(void2);
    const { [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex } = retLN;
    const gridNavigationRowContext = useMemoObject({
        setTabbableRow: setTabbableIndex,
        getTabbableColumn,
        setTabbableColumn
    });
    return {
        props,
        context: useMemoObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            typeaheadNavigationContext
        }),
        ...retLN
    };
});
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
export const useGridNavigationRow = monitored(function useGridNavigationRow({ 
// Stuff for the row as a child of the parent grid
info: { index, untabbable, ...void3 }, [PropNames_TextContentParameters_getText]: getText, context: contextFromParent, 
// Stuff for the row as a parent of child cells
[PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_RovingTabIndexParameters_untabbable]: rowIsUntabbableAndSoAreCells, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, ...void1 }) {
    const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
    const getIndex = useStableCallback(() => { return index; });
    // When this row is focused from the parent's `useRovingTabIndex`,
    // instead of focusing the row element, this function focuses the appropriate cell element.
    const whenThisRowIsFocused = useStableCallback((e) => {
        if (contextFromParent.rovingTabIndexContext.getUntabbable()) {
            // If the parent is untabbable, and this row was requested to focus itself (as part of parentFocusSelf),
            // then we focus the parent grid instead of the child cell.
            contextFromParent.rovingTabIndexContext.parentFocusSelf(true);
        }
        else {
            // If the parent is tabbable (normal behavior), 
            // then we focus the cell that should be focused in this row.
            let { ideal, actual } = (getTabbableColumn());
            let index = (ideal ?? 0);
            let child = getChildren().getAt(index);
            let lowestIndex = getChildren().getLowestIndex();
            let highestIndex = getChildren().getHighestIndex();
            while ((!child || child.untabbable) && index > lowestIndex) {
                --index;
                child = getChildren().getAt(index);
            }
            while ((!child || child.untabbable) && index <= highestIndex) {
                ++index;
                child = getChildren().getAt(index);
            }
            if (child) {
                const e = child.getElement();
                child.focusSelf(e);
            }
            else {
                focus(e);
            }
        }
    }, []);
    const focusSelf = whenThisRowIsFocused;
    const { props: propsLNC, info: { getLocallyTabbable, setLocallyTabbable, ...void2 }, ...retLN } = useListNavigationChild({
        info: { index, untabbable },
        context: contextFromParent,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_TextContentParameters_getText]: getText,
    });
    const allChildCellsAreUntabbable = !retLN[PropNames_RovingTabIndexChildReturn_tabbable];
    const { props: propsLN, context: contextULN, ...retLS } = useListNavigation({
        [PropNames_RearrangeableReturn_indexDemangler]: identity,
        [PropNames_RearrangeableReturn_indexMangler]: identity,
        [PropNames_RovingTabIndexParameters_untabbableBehavior]: "leave-child-focused",
        [PropNames_RovingTabIndexParameters_focusSelfParent]: whenThisRowIsFocused,
        [PropNames_RovingTabIndexParameters_untabbable]: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex,
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: useStableCallback((v, p, r) => {
            setTabbableColumn({ ideal: v, actual: v }, r);
            onTabbableIndexChange?.(v, p, r);
        }),
        [PropNames_LinearNavigationParameters_onNavigateLinear]: useStableCallback((next, event) => {
            setTabbableColumn(prev => ({ ideal: next, actual: prev?.actual ?? next }), event);
        }),
        [PropNames_LinearNavigationParameters_disableHomeEndKeys]: true,
        [PropNames_LinearNavigationParameters_pageNavigationSize]: 0,
        [PropNames_LinearNavigationParameters_arrowKeyDirection]: "horizontal",
        [PropNames_PaginatedParameters_paginationMax]: null,
        [PropNames_PaginatedParameters_paginationMin]: null,
        [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
        [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
        [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
        [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
        [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_TypeaheadNavigationParameters_collator]: collator,
        [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const { [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex } = retLS;
    const gridNavigationCellContext = useMemoObject({
        //allChildCellsAreUntabbable,
        setTabbableRow,
        getRowIndex: getIndex,
        getTabbableColumn,
        setTabbableColumn,
        setTabbableCell: setTabbableIndex
    });
    // These will often have conflicting values, but we always use -1 for rows no matter what,
    // so instead of negotiating a resolution we can just give a straight answer.
    //propsLN.tabIndex = propsLNC.tabIndex = -1;
    const props = [
        ...propsLN,
        propsLNC,
        // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
        { onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget)) }
    ];
    const contextToChildren = useMemoObject({
        gridNavigationCellContext,
        ...contextULN
    });
    return {
        context: contextToChildren,
        props,
        info: { focusSelf, getLocallyTabbable, setLocallyTabbable },
        ...retLS,
        ...retLN
    };
});
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
export const useGridNavigationCell = monitored(function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_TextContentParameters_getText]: getText, [PropNames_GridNavigationCellParameters_colSpan]: colSpan, ...void1 }) {
    colSpan ??= 1;
    const { [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged, [PropNames_PressParameters_excludeSpace]: excludeSpace, [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable, [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable, [PropNames_TextContentReturn_getTextContent]: getTextContent, props, info: infoLS, ...void2 } = useListNavigationChild({
        info: { index, untabbable },
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_TextContentParameters_getText]: getText
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void7);
    return {
        info: infoLS,
        props: useMergedProps(props, { onClick: (e) => setTabbableColumn(prev => ({ ideal: index, actual: (prev?.actual ?? index) }), e) }),
        [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable,
        [PropNames_PressParameters_excludeSpace]: excludeSpace,
        [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable,
        [PropNames_TextContentReturn_getTextContent]: getTextContent,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: useStableCallback((focused, prev, e) => {
            onCurrentFocusedInnerChanged?.(focused, prev, e);
            if (focused) {
                setTabbableRow(getRowIndex(), e, false);
                setTabbableColumn(prev => { return { actual: index, ideal: prev?.ideal ?? index }; }, e);
                setTabbableCell((prev) => {
                    if (prev != null && (prev < index || prev > index + (colSpan))) {
                        return prev;
                    }
                    return index;
                }, e, false);
            }
        })
    };
});
//# sourceMappingURL=use-grid-navigation-partial.js.map