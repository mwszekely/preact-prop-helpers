import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { focus } from "../../util/focus.js";
import { debugLog, identity } from "../../util/lib.js";
import { ElementPropsAll, EventType, Nullable, OmitStrong, TargetedOmit, TargetedPick } from "../../util/types.js";
import { useMonitoring } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { OriginalIndex } from "../processed-children/use-processed-index-mangler.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";

export interface GridChildRowInfo<RowElement extends Element> extends UseListNavigationChildInfo<RowElement> { }
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> { }

export interface UseGridNavigationCellParametersSelf {
    /**
     * How many columns this cell spans (all cells default to 1).
     * 
     * Any following cells should skip over the `index`es this one covered with its `colSpan`. E.G. if this cell is `index=5` and `colSpan=3`, the next cell would be `index=8`, **not** `index=6`
     */
    colSpan: Nullable<number>;
}

export interface UseGridNavigationCellContextSelf {
    //allChildCellsAreUntabbable: boolean;
    getRowIndex: () => OriginalIndex;
    setTabbableRow: SetTabbableIndex; //(u: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
    setTabbableCell: SetTabbableIndex; //(updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
}

export interface UseGridNavigationParametersSelf {
    /**
     * TODO: This may be called even when there is no actual change in the numeric values
     * 
     * @stable
     */
    onTabbableColumnChange: Nullable<OnPassiveStateChange<TabbableColumnInfo, EventType<any, any> | undefined>>;

    /**
     * Which column of cells is initially tabbable the first time the user interacts with the control.
     */
    initiallyTabbableColumn: number;
}

export interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
}

export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, RM extends GridChildRowInfo<RowElement>> extends
    OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, RM>, "linearNavigationParameters">,
    TargetedOmit<UseListNavigationParameters<ParentOrChildElement, RowElement, RM>, "linearNavigationParameters", "arrowKeyDirection"> {
    gridNavigationParameters: UseGridNavigationParametersSelf;
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends
    OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement>, "context"> {
    context: UseGridNavigationRowContext;
}


export interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}

export type UseGridNavigationRowInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationRowInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | "focusSelf";
export type UseGridNavigationCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationCellInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType;

export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends
    UseGenericChildParameters<UseGridNavigationRowContext, Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysParameters>>,
    OmitStrong<UseListNavigationChildParameters<RowElement>, "info" | "context">,
    TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters", "disableHomeEndKeys" | "onNavigateLinear" | "arrowKeyDirection" | "pageNavigationSize">,
    TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "rovingTabIndexParameters", "focusSelfParent" | "untabbableBehavior">,
    OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "processedIndexManglerReturn" | "paginatedChildrenParameters" | "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters" | "managedChildrenReturn">,
    TargetedPick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn", "getChildAt" | "getLowestChildIndex" | "getHighestChildIndex" | "forEachChild"> {


}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> extends
    UseListNavigationChildReturnType<RowElement>,
    OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "rovingTabIndexReturn" | "context">,
    TargetedOmit<UseListNavigationReturnType<RowElement, CellElement>, "rovingTabIndexReturn", "focusSelf"> {
    context: UseGridNavigationCellContext;
    info: Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysReturnType>;
}







export interface UseGridNavigationCellParameters<CellElement extends Element> extends
    UseGenericChildParameters<UseGridNavigationCellContext, Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysParameters>>,
    OmitStrong<UseListNavigationChildParameters<CellElement>, "context" | "info"> {
    gridNavigationCellParameters: UseGridNavigationCellParametersSelf;
}

export interface TabbableColumnInfo {
    /** Which cell in this row is actually tabbable? */
    actual: OriginalIndex | null;
    /** Which column was the last column the user navigated to? */
    ideal: OriginalIndex | null;
}

export interface UseGridNavigationCellContext extends UseListNavigationContext {
    gridNavigationCellContext: UseGridNavigationCellContextSelf;
}


export interface UseGridNavigationCellReturnType<CellElement extends Element> extends UseListNavigationChildReturnType<CellElement> {
    info: Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysReturnType>;
}

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
export function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridChildRowInfo<RowElement>>({
    gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 },
    linearNavigationParameters,
    managedChildrenReturn,
    ...listNavigationParameters
}: UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>): UseGridNavigationReturnType<ParentOrRowElement, RowElement> {
    return useMonitoring(function useGridNavigation(): UseGridNavigationReturnType<ParentOrRowElement, RowElement> {
        const [getTabbableColumn, setTabbableColumn] = usePassiveState<TabbableColumnInfo, EventType<any, any> | undefined>(onTabbableColumnChange, useStableCallback(() => {
            let t = (initiallyTabbableColumn ?? 0) as OriginalIndex;
            return { actual: t, ideal: t }
        }));

        const {
            linearNavigationReturn,
            rovingTabIndexReturn,
            typeaheadNavigationReturn,
            managedChildrenParameters,
            context: { rovingTabIndexContext, typeaheadNavigationContext },
            props,
            ...void1
        } = useListNavigation<ParentOrRowElement, RowElement, RM>({
            linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
            managedChildrenReturn,
            ...listNavigationParameters
        });

        assertEmptyObject(void1);
        assertEmptyObject(void3);

        const gridNavigationRowContext = useMemoObject<UseGridNavigationRowContextSelf>({
            //rowIsUntabbableBecauseOfGrid: !!untabbable,
            setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
            getTabbableColumn,
            setTabbableColumn
        })

        return {
            props,
            managedChildrenParameters,
            context: useMemoObject<UseGridNavigationRowContext>({
                gridNavigationRowContext,
                rovingTabIndexContext,
                typeaheadNavigationContext
            }),
            linearNavigationReturn,
            rovingTabIndexReturn,
            typeaheadNavigationReturn
        }
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
export function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>>({
    // Stuff for the row as a child of the parent grid
    info: { index, untabbable, ...void3 },
    context: contextFromParent,

    // Stuff for the row as a parent of child cells
    linearNavigationParameters,
    rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 },
    managedChildrenReturn,
    typeaheadNavigationParameters,

    // Both/neither
    refElementReturn,
    ...void1
}: UseGridNavigationRowParameters<RowElement, CellElement, CM>): UseGridNavigationRowReturnType<RowElement, CellElement> {
    return useMonitoring(function useGridNavigationRow(): UseGridNavigationRowReturnType<RowElement, CellElement> {
        const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;

        const getIndex = useStableCallback(() => { return index as OriginalIndex });

        // When this row is focused from the parent's `useRovingTabIndex`,
        // instead of focusing the row element, this function focuses the appropriate cell element.
        const whenThisRowIsFocused = useStableCallback((e: RowElement) => {

            if (contextFromParent.rovingTabIndexContext.untabbable) {
                debugLog(`useGridNavigationRow.whenThisRowIsFocused A`);

                // If the parent is untabbable, and this row was requested to focus itself (as part of parentFocusSelf),
                // then we focus the parent grid instead of the child cell.
                contextFromParent.rovingTabIndexContext.parentFocusSelf(true);
            }
            else {
                debugLog(`useGridNavigationRow.whenThisRowIsFocused B`);

                // If the parent is tabbable (normal behavior), 
                // then we focus the cell that should be focused in this row.
                let { ideal, actual: _actual } = (getTabbableColumn());

                let index = (ideal ?? 0) as OriginalIndex;
                let child = managedChildrenReturn.getChildAt(index);
                let lowestIndex = managedChildrenReturn.getLowestChildIndex();
                let highestIndex = managedChildrenReturn.getHighestChildIndex();
                while ((!child || child.untabbable) && index > lowestIndex) {
                    --index;
                    child = managedChildrenReturn.getChildAt(index);
                }
                while ((!child || child.untabbable) && index <= highestIndex) {
                    ++index;
                    child = managedChildrenReturn.getChildAt(index);
                }
                if (child) {
                    const e = child.getElement()!;
                    console.log("1b");
                    child.focusSelf(e);
                }
                else {
                    focus(e);
                }
            }
        }, []);
        const focusSelf = whenThisRowIsFocused;

        const {
            props: propsLNC,
            info: { getLocallyTabbable, setLocallyTabbable, ...void2 },
            hasCurrentFocusParameters,
            pressParameters,
            rovingTabIndexChildReturn,
            textContentParameters,
            ...void6
        } = useListNavigationChild<RowElement>({ info: { index, untabbable }, refElementReturn, context: contextFromParent });
        const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
        //console.log(`Row ${index} is untabbable? ${allChildCellsAreUntabbable.toString()}`)

        const {
            props: propsLN,
            context: contextULN,
            linearNavigationReturn,
            managedChildrenParameters,
            rovingTabIndexReturn,
            typeaheadNavigationReturn,
            ...void5
        } = useListNavigation<RowElement, CellElement, CM>({
            managedChildrenReturn,
            refElementReturn,
            typeaheadNavigationParameters,
            processedIndexManglerReturn: { indexFromOriginalToRepositioned: identity<any>, indexFromRepositionedToOriginal: identity<any> },
            rovingTabIndexParameters: {
                untabbableBehavior: "leave-child-focused",
                focusSelfParent: whenThisRowIsFocused,
                untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
                initiallyTabbedIndex,
                onTabbableIndexChange: useStableCallback((v, p, r) => {
                    debugLog(`useGridNavigationRow.useListNavigation.onTabbableIndexChange`);
                    setTabbableColumn(p => ({ ideal: p?.ideal ?? null, actual: p?.actual ?? null }), r);
                    onTabbableIndexChange?.(v, p, r);
                })
            },
            linearNavigationParameters: {
                onNavigateLinear: useStableCallback((next, event) => {
                    debugLog(`useGridNavigationRow.useListNavigation.onNavigateLinear`);
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

        const gridNavigationCellContext = useMemoObject<UseGridNavigationCellContextSelf>({
            //allChildCellsAreUntabbable,
            setTabbableRow,
            getRowIndex: getIndex,
            getTabbableColumn,
            setTabbableColumn,
            setTabbableCell: setTabbableIndex
        });


        // These will often have conflicting values, but we always use -1 for rows no matter what,
        // so instead of negotiating a resolution we can just give a straight answer.
        (propsLN as ElementPropsAll<RowElement>).tabIndex = (propsLNC as ElementPropsAll<RowElement>).tabIndex = -1;
        const props = useMergedProps<RowElement>(propsLN, propsLNC, {
            // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
            onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget))
        });

        const contextToChildren = useMemoObject<UseGridNavigationCellContext>({
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
        }
    });
}

/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 * 
 * @compositeParams
 */
export function useGridNavigationCell<CellElement extends Element>({
    context: {
        gridNavigationCellContext: {
            getRowIndex,
            setTabbableRow,
            getTabbableColumn: _getCurrentColumn,
            setTabbableColumn,
            setTabbableCell,
            ...void4
        },
        rovingTabIndexContext,
        typeaheadNavigationContext,
        ...void5
    },
    info: { index: indexUntyped, untabbable, ...void7 },
    refElementReturn,
    gridNavigationCellParameters: {
        colSpan,
        ...void6
    },
    ...void1
}: UseGridNavigationCellParameters<CellElement>): UseGridNavigationCellReturnType<CellElement> {
    const index = indexUntyped as OriginalIndex;

    return useMonitoring(function useGridNavigationCell(): UseGridNavigationCellReturnType<CellElement> {
        colSpan ??= 1;

        const {
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 },
            rovingTabIndexChildReturn,
            textContentParameters,
            pressParameters,
            props,
            info: infoLs,
            ...void2
        } = useListNavigationChild<CellElement>({
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
                    debugLog(`useGridNavigationCell.onClick`);
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
                        debugLog(() => `Grid cell at { row: ${getRowIndex()}, col: ${index} } has received focus`);
                        debugLog("      Setting tabbable row");
                        setTabbableRow(getRowIndex(), e, false);
                        debugLog("      Setting tabbable column");
                        setTabbableColumn(prev => {
                            return { actual: index ?? null, ideal: prev?.ideal ?? null };
                        }, e);
                        debugLog("      Setting tabbable cell");
                        setTabbableCell((prev) => {
                            if (prev != null && (prev < index || prev > index + (colSpan!))) {
                                return prev;
                            }
                            return index;
                        }, e, false);
                    }
                    else {
                        debugLog(() => `Grid cell at { row: ${getRowIndex()}, col: ${index} } has lost focus.`);
                    }
                })
            },
        }
    });
}