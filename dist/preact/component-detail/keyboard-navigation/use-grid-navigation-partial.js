import { identity } from "lodash-es";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { focus } from "../../util/focus.js";
import { useMonitoring } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
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
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 *
 * @compositeParams
 */
export function useGridNavigation({ gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 }, linearNavigationParameters, ...listNavigationParameters }) {
    return useMonitoring(function useGridNavigation() {
        const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
            let t = (initiallyTabbableColumn ?? 0);
            return { actual: t, ideal: t };
        }));
        const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, props, ...void1 } = useListNavigation({
            linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
            ...listNavigationParameters
        });
        assertEmptyObject(void1);
        assertEmptyObject(void3);
        const gridNavigationRowContext = useMemoObject({
            //rowIsUntabbableBecauseOfGrid: !!untabbable,
            setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
            getTabbableColumn,
            setTabbableColumn
        });
        return {
            props,
            managedChildrenParameters,
            context: useMemoObject({
                gridNavigationRowContext,
                rovingTabIndexContext,
                typeaheadNavigationContext
            }),
            linearNavigationReturn,
            rovingTabIndexReturn,
            typeaheadNavigationReturn
        };
    });
}
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
export function useGridNavigationRow({ 
// Stuff for the row as a child of the parent grid
info: { index, untabbable, ...void3 }, context: contextFromParent, 
// Stuff for the row as a parent of child cells
linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, 
// Both/neither
refElementReturn, ...void1 }) {
    return useMonitoring(function useGridNavigationRow() {
        const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
        const getIndex = useStableCallback(() => { return index; });
        // When this row is focused from the parent's `useRovingTabIndex`,
        // instead of focusing the row element, this function focuses the appropriate cell element.
        const whenThisRowIsFocused = useStableCallback((e) => {
            const { getChildren } = managedChildrenReturn;
            if (contextFromParent.rovingTabIndexContext.untabbable) {
                // If the parent is untabbable, and this row was requested to focus itself (as part of parentFocusSelf),
                // then we focus the parent grid instead of the child cell.
                contextFromParent.rovingTabIndexContext.parentFocusSelf(true);
            }
            else {
                // If the parent is tabbable (normal behavior), 
                // then we focus the cell that should be focused in this row.
                let { ideal, actual: _actual } = (getTabbableColumn());
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
        const { props: propsLNC, info: { getLocallyTabbable, setLocallyTabbable, ...void2 }, hasCurrentFocusParameters, pressParameters, rovingTabIndexChildReturn, textContentParameters, ...void6 } = useListNavigationChild({ info: { index, untabbable }, refElementReturn, context: contextFromParent });
        const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
        console.log(`Row ${index} is untabbable? ${allChildCellsAreUntabbable.toString()}`);
        const { props: propsLN, context: contextULN, linearNavigationReturn, managedChildrenParameters, rovingTabIndexReturn, typeaheadNavigationReturn, ...void5 } = useListNavigation({
            managedChildrenReturn,
            refElementReturn,
            typeaheadNavigationParameters,
            processedIndexManglerReturn: { indexDemangler: identity, indexMangler: identity },
            rovingTabIndexParameters: {
                untabbableBehavior: "leave-child-focused",
                focusSelfParent: whenThisRowIsFocused,
                untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
                initiallyTabbedIndex,
                onTabbableIndexChange: useStableCallback((v, p, r) => {
                    setTabbableColumn(p => ({ ideal: p?.ideal ?? null, actual: p?.actual ?? null }), r);
                    onTabbableIndexChange?.(v, p, r);
                })
            },
            linearNavigationParameters: {
                onNavigateLinear: useStableCallback((next, event) => {
                    setTabbableColumn(prev => ({ ideal: next, actual: next }), event);
                }),
                disableHomeEndKeys: true,
                pageNavigationSize: 0,
                arrowKeyDirection: "horizontal",
                ...linearNavigationParameters
            },
            paginatedChildrenParameters: { paginationMin: null, paginationMax: null }
        });
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
        const { setTabbableIndex } = rovingTabIndexReturn;
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
        propsLN.tabIndex = propsLNC.tabIndex = -1;
        const props = useMergedProps(propsLN, propsLNC, {
            // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
            onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget))
        });
        const contextToChildren = useMemoObject({
            gridNavigationCellContext,
            ...contextULN
        });
        return {
            context: contextToChildren,
            props: useTagProps(props, "data-use-grid-navigation-partial-row"),
            info: { focusSelf, getLocallyTabbable, setLocallyTabbable },
            hasCurrentFocusParameters,
            pressParameters,
            rovingTabIndexChildReturn,
            textContentParameters,
            linearNavigationReturn,
            managedChildrenParameters,
            rovingTabIndexReturn,
            typeaheadNavigationReturn
        };
    });
}
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
export function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }) {
    return useMonitoring(function useGridNavigationCell() {
        colSpan ??= 1;
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, rovingTabIndexChildReturn, textContentParameters, pressParameters, props, info: infoLs, ...void2 } = useListNavigationChild({
            info: { index, untabbable },
            context: { rovingTabIndexContext, typeaheadNavigationContext },
            refElementReturn,
        });
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
        assertEmptyObject(void7);
        return {
            info: infoLs,
            props: useMergedProps(props, {
                onClick: (e) => {
                    setTabbableColumn(prev => {
                        return ({ ideal: index, actual: index });
                    }, e);
                }
            }),
            rovingTabIndexChildReturn,
            textContentParameters,
            pressParameters,
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                    ocfic1?.(focused, prev, e);
                    if (focused) {
                        setTabbableRow(getRowIndex(), e, false);
                        setTabbableColumn(prev => {
                            return { actual: index ?? null, ideal: prev?.ideal ?? null };
                        }, e);
                        setTabbableCell((prev) => {
                            if (prev != null && (prev < index || prev > index + (colSpan))) {
                                return prev;
                            }
                            return index;
                        }, e, false);
                    }
                })
            },
        };
    });
}
//# sourceMappingURL=use-grid-navigation-partial.js.map