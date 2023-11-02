import { identity } from "lodash-es";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseRefElement } from "../../dom-helpers/use-ref-element.js";
import { UseHasCurrentFocus } from "../../observers/use-has-current-focus.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { focus } from "../../util/focus.js";
import { EventType } from "../../util/lib.js";
import { GenericHook, Nullable, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { UseListNavigation, UseListNavigationChild, UseListNavigationChildContext, UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
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
    getRowIndex: () => number;
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
    setTabbableCell: SetTabbableIndex;
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

export type UseGridNavigation<ParentElement extends Element, RowElement extends Element> = GenericHook<
    "gridNavigation", 
    UseGridNavigationParametersSelf, [
        StandardDepsOmit<"params", UseListNavigation<ParentElement, RowElement>, "linearNavigationParameters", [
            StandardDepsPick<"params", UseListNavigation<ParentElement, RowElement>, "linearNavigationParameters", "omit", "arrowKeyDirection">
        ]>
    ],
    never, [
        StandardDepsPick<"return", UseListNavigation<ParentElement, RowElement>>,
        StandardDepsContext<UseGridNavigationRowContext>,
        StandardDepsProps<ParentElement>
    ]
>;

export type UseGridNavigationRow<RowElement extends Element, CellElement extends Element> = GenericHook<
    "gridNavigationRow", 
    never, [
        StandardDepsOmit<"params", UseListNavigation<RowElement, CellElement>, "rearrangeableChildrenReturn" | "paginatedChildrenParameters", [
            StandardDepsPick<"params", UseListNavigation<RowElement, CellElement>, "linearNavigationParameters", "omit", "disableHomeEndKeys" | "pageNavigationSize" | "arrowKeyDirection">,
            StandardDepsPick<"params", UseListNavigation<RowElement, CellElement>, "rovingTabIndexParameters", "omit", "untabbableBehavior" | "focusSelfParent">,
        ]>,
        StandardDepsInfo<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysParameters>,
        StandardDepsContext<UseGridNavigationRowContext>
    ],
    never, [
        StandardDepsPick<"return", UseListNavigation<RowElement, CellElement>>,
        StandardDepsOmit<"return", UseListNavigationChild<CellElement>, never, [
            StandardDepsPick<"params", UseHasCurrentFocus<RowElement>, "hasCurrentFocusParameters", "pick", "onCurrentFocusedInnerChanged">
        ]>,
        StandardDepsInfo<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysReturnType>,
        StandardDepsContext<UseGridNavigationCellContext>,
        StandardDepsProps<RowElement>
    ]
>;

export type UseGridNavigationCell<CellElement extends Element> = GenericHook<
    "gridNavigationCell", 
    UseGridNavigationCellParametersSelf, [
        StandardDepsPick<"return", UseRefElement<CellElement>, "refElementReturn", "pick", "getElement">,
        StandardDepsInfo<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysParameters>,
        StandardDepsContext<UseGridNavigationCellContext>
    ],
    never, [
        StandardDepsPick<"return", UseListNavigationChild<CellElement>>,
        StandardDepsInfo<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysReturnType>,
        StandardDepsProps<CellElement>
    ]
>;

export interface UseGridNavigationRowContext extends UseListNavigationChildContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}

export type UseGridNavigationRowInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationRowInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | "focusSelf";
export type UseGridNavigationCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationCellInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType;

export interface TabbableColumnInfo {
    /** Which cell in this row is actually tabbable? */
    actual: number | null;
    /** Which column was the last column the user navigated to? */
    ideal: number | null;
}

export interface UseGridNavigationCellContext extends UseListNavigationChildContext {
    gridNavigationCellContext: UseGridNavigationCellContextSelf;
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
 * @compositeParams
 * 
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 */
export const useGridNavigation = monitored(function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element>({
    gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 },
    linearNavigationParameters,
    ...listNavigationParameters
}: Parameter<UseGridNavigation<ParentOrRowElement, RowElement>>): ReturnType<UseGridNavigation<ParentOrRowElement, RowElement>> {
    const [getTabbableColumn, setTabbableColumn] = usePassiveState<TabbableColumnInfo, EventType<any, any> | undefined>(onTabbableColumnChange, useStableCallback(() => {
        let t = (initiallyTabbableColumn ?? 0);
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
    } = useListNavigation<ParentOrRowElement, RowElement>({
        linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
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
})

/**
 * Child hook for {@link useGridNavigation}
 * 
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 * 
 * @compositeParams
 */
export const useGridNavigationRow = monitored(function useGridNavigationRow<RowElement extends Element, CellElement extends Element>({
    // Stuff for the row as a child of the parent grid
    info: { index, untabbable, ...void3 },
    context: contextFromParent,

    // Stuff for the row as a parent of child cells
    linearNavigationParameters: { onNavigateLinear, ...linearNavigationParameters },
    rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 },
    managedChildrenReturn,
    typeaheadNavigationParameters,

    // Both/neither
    refElementReturn,
    ...void1
}: Parameter<UseGridNavigationRow<RowElement, CellElement>>): ReturnType<UseGridNavigationRow<RowElement, CellElement>> {
    const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;

    const getIndex = useStableCallback(() => { return index })

    // When this row is focused from the parent's `useRovingTabIndex`,
    // instead of focusing the row element, this function focuses the appropriate cell element.
    const whenThisRowIsFocused = useStableCallback((e: RowElement) => {
        const { getChildren } = managedChildrenReturn;

        if (contextFromParent.rovingTabIndexContext.getUntabbable()) {
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
                const e = child.getElement()!;
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

    const {
        props: propsLN,
        context: contextULN,
        linearNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        ...void5
    } = useListNavigation<RowElement, CellElement>({
        managedChildrenReturn,
        refElementReturn,
        typeaheadNavigationParameters,
        rearrangeableChildrenReturn: { indexDemangler: identity, indexMangler: identity },
        rovingTabIndexParameters: {
            untabbableBehavior: "leave-child-focused",
            focusSelfParent: whenThisRowIsFocused,
            untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
            initiallyTabbedIndex,
            onTabbableIndexChange: useStableCallback((v, p, r) => {
                setTabbableColumn({ ideal: v, actual: v }, r);
                onTabbableIndexChange?.(v, p, r);
            })
        },
        linearNavigationParameters: {
            onNavigateLinear: useStableCallback((next, event) => {
                setTabbableColumn(prev => ({ ideal: next, actual: prev?.actual ?? next }), event);
                onNavigateLinear?.(next, event);
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
    })


    // These will often have conflicting values, but we always use -1 for rows no matter what,
    // so instead of negotiating a resolution we can just give a straight answer.
    propsLN.tabIndex = propsLNC.tabIndex = -1;
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

})

/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 * 
 * @compositeParams
 */
export const useGridNavigationCell = monitored(function useGridNavigationCell<CellElement extends Element>({
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
    info: { index, untabbable, ...void7 },
    refElementReturn,
    gridNavigationCellParameters: {
        colSpan,
        ...void6
    },
    ...void1
}: Parameter<UseGridNavigationCell<CellElement>>): ReturnType<UseGridNavigationCell<CellElement>> {
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
        props: useMergedProps(props, { onClick: (e) => setTabbableColumn(prev => ({ ideal: index, actual: (prev?.actual ?? index) }), e) }),
        rovingTabIndexChildReturn,
        textContentParameters,
        pressParameters,
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                ocfic1?.(focused, prev, e);

                if (focused) {
                    setTabbableRow(getRowIndex(), e, false);
                    setTabbableColumn(prev => { return { actual: index, ideal: prev?.ideal ?? index }; }, e);
                    setTabbableCell((prev) => {
                        if (prev != null && (prev < index || prev > index + (colSpan!))) {
                            return prev;
                        }
                        return index;
                    }, e, false);
                }
            })
        },
    }
})
