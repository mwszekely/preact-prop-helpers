import { identity } from "lodash-es";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { focus } from "../../util/focus.js";
import { ElementProps, EventType, Nullable, OmitStrong } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";


const P1 = `PropNames.GridNavigationParameters`;
const P2 = `PropNames.GridNavigationRowParameters`;
const P3 = `PropNames.GridNavigationCellParameters`;
const R1 = `PropNames.GridNavigationReturn`;
const R2 = `PropNames.GridNavigationRowReturn`;
const R3 = `PropNames.GridNavigationCellReturn`;

export interface GridChildRowInfo<RowElement extends Element> extends UseListNavigationChildInfo<RowElement> { }
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> { }

export interface UseGridNavigationCellParametersSelf {
    /**
     * How many columns this cell spans (all cells default to 1).
     * 
     * Any following cells should skip over the `index`es this one covered with its `colSpan`. E.G. if this cell is `index=5` and `colSpan=3`, the next cell would be `index=8`, **not** `index=6`
     */
    "PropNames.GridNavigationCellParameters.colSpan": Nullable<number>;
}

export interface UseGridNavigationCellContextSelf {
    //allChildCellsAreUntabbable: boolean;
    getRowIndex: () => number;
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
    "PropNames.GridNavigationParameters.onTabbableColumnChange": Nullable<OnPassiveStateChange<TabbableColumnInfo, EventType<any, any> | undefined>>;

    /**
     * Which column of cells is initially tabbable the first time the user interacts with the control.
     */
    "PropNames.GridNavigationParameters.initiallyTabbableColumn": number;
}

export interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
}

export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, RM extends GridChildRowInfo<RowElement>> extends
    UseGridNavigationParametersSelf,
    OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, RM>, "PropNames.LinearNavigationParameters.arrowKeyDirection"> { }
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends
    OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement>, "context"> {
    context: UseGridNavigationRowContext;
}


export interface UseGridNavigationRowContext extends
    UseListNavigationContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}

export type UseGridNavigationRowInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationRowInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | "focusSelf";
export type UseGridNavigationCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationCellInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType;

export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends
    UseGenericChildParameters<UseGridNavigationRowContext, Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysParameters>>,
    OmitStrong<UseListNavigationChildParameters<RowElement>, "info" | "context">,
    OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys" |
        "PropNames.LinearNavigationParameters.onNavigateLinear" |
        "PropNames.LinearNavigationParameters.arrowKeyDirection" |
        "PropNames.LinearNavigationParameters.pageNavigationSize" |
        "PropNames.RearrangeableReturn.indexMangler" |
        "PropNames.RearrangeableReturn.indexDemangler" |
        "PropNames.PaginatedParameters.paginationMax" |
        "PropNames.PaginatedParameters.paginationMin" |
        // typeof "PropNames.RefElementReturn.getElement" |
         "PropNames.RovingTabIndexParameters.focusSelfParent" |
        // typeof "PropNames.RovingTabIndexParameters.initiallyTabbedIndex" |
        // typeof "PropNames.RovingTabIndexParameters.onTabbableIndexChange" |
        //typeof "PropNames.RovingTabIndexParameters.untabbable" |
         "PropNames.RovingTabIndexParameters.untabbableBehavior"
    >,
    Pick<UseManagedChildrenReturnType<CM>, "PropNames.ManagedChildrenReturn.getChildren"> { }

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> extends
    OmitStrong<UseListNavigationChildReturnType<RowElement>, "props">,
    OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "context" | "props">,
    OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "props" | "PropNames.RovingTabIndexReturn.focusSelf"> {
    context: UseGridNavigationCellContext;
    info: Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysReturnType>;
    props: ElementProps<RowElement>[];
}







export interface UseGridNavigationCellParameters<CellElement extends Element> extends
    UseGridNavigationCellParametersSelf,
    UseGenericChildParameters<UseGridNavigationCellContext, Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysParameters>>,
    OmitStrong<UseListNavigationChildParameters<CellElement>, "context" | "info"> {
}

export interface TabbableColumnInfo {
    /** Which cell in this row is actually tabbable? */
    actual: number | null;
    /** Which column was the last column the user navigated to? */
    ideal: number | null;
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
 * @compositeParams
 * 
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 */
export const useGridNavigation = monitored(function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element>({
    "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
    "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
    "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
    "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation,
    "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
    "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
    "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
    "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
    "PropNames.ManagedChildrenReturn.getChildren": getChildren,
    "PropNames.PaginatedParameters.paginationMax": paginationMax,
    "PropNames.PaginatedParameters.paginationMin": paginationMin,
    "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
    "PropNames.RearrangeableReturn.indexMangler": indexMangler,
    "PropNames.RefElementReturn.getElement": getElement,
    "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
    "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
    "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
    "PropNames.RovingTabIndexParameters.untabbable": untabbable,
    "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior,
    "PropNames.TypeaheadNavigationParameters.collator": collator,
    "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation,
    "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
    "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
    "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    "PropNames.GridNavigationParameters.onTabbableColumnChange": onTabbableColumnChange,
    "PropNames.GridNavigationParameters.initiallyTabbableColumn": initiallyTabbableColumn,
    ...void2
}: UseGridNavigationParameters<ParentOrRowElement, RowElement, GridChildRowInfo<RowElement>>): UseGridNavigationReturnType<ParentOrRowElement, RowElement> {
    const [getTabbableColumn, setTabbableColumn] = usePassiveState<TabbableColumnInfo, EventType<any, any> | undefined>(onTabbableColumnChange, useStableCallback(() => {
        let t = (initiallyTabbableColumn ?? 0);
        return { actual: t, ideal: t }
    }));

    const {
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        props,
        ...retLN
    } = useListNavigation<ParentOrRowElement, RowElement>({
        "PropNames.LinearNavigationParameters.arrowKeyDirection": "vertical",
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys,
        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear,
        "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.PaginatedParameters.paginationMax": paginationMax,
        "PropNames.PaginatedParameters.paginationMin": paginationMin,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout
    });

    assertEmptyObject(void2);
    const { "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex } = retLN;

    const gridNavigationRowContext = useMemoObject<UseGridNavigationRowContextSelf>({
        setTabbableRow: setTabbableIndex,
        getTabbableColumn,
        setTabbableColumn
    })

    return {
        props,
        context: useMemoObject<UseGridNavigationRowContext>({
            gridNavigationRowContext,
            rovingTabIndexContext,
            typeaheadNavigationContext
        }),
        ...retLN
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
    "PropNames.TextContentParameters.getText": getText,
    context: contextFromParent,

    // Stuff for the row as a parent of child cells
    "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
    "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
    "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation,
    "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
    "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
    "PropNames.RovingTabIndexParameters.untabbable": rowIsUntabbableAndSoAreCells,
    "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
    "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange,
    "PropNames.RefElementReturn.getElement": getElement,
    "PropNames.ManagedChildrenReturn.getChildren": getChildren,
    "PropNames.TypeaheadNavigationParameters.collator": collator,
    "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation,
    "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
    "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
    "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout,
    ...void1
}: UseGridNavigationRowParameters<RowElement, CellElement, GridChildCellInfo<CellElement>>): UseGridNavigationRowReturnType<RowElement, CellElement> {
    const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;

    const getIndex = useStableCallback(() => { return index })

    // When this row is focused from the parent's `useRovingTabIndex`,
    // instead of focusing the row element, this function focuses the appropriate cell element.
    const whenThisRowIsFocused = useStableCallback((e: RowElement) => {

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
        ...retLN
    } = useListNavigationChild<RowElement>({
        info: { index, untabbable },
        context: contextFromParent,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.TextContentParameters.getText": getText,
    });
    const allChildCellsAreUntabbable = !retLN["PropNames.RovingTabIndexChildReturn.tabbable"];

    const {
        props: propsLN,
        context: contextULN,
        ...retLS
    } = useListNavigation<RowElement, CellElement>({
        "PropNames.RearrangeableReturn.indexDemangler": identity,
        "PropNames.RearrangeableReturn.indexMangler": identity,

        "PropNames.RovingTabIndexParameters.untabbableBehavior": "leave-child-focused",
        "PropNames.RovingTabIndexParameters.focusSelfParent": whenThisRowIsFocused,
        "PropNames.RovingTabIndexParameters.untabbable": allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": useStableCallback((v, p, r) => {
            setTabbableColumn({ ideal: v, actual: v }, r);
            onTabbableIndexChange?.(v, p, r);
        }),
        "PropNames.LinearNavigationParameters.onNavigateLinear": useStableCallback((next, event) => {
            setTabbableColumn(prev => ({ ideal: next, actual: prev?.actual ?? next }), event);
        }),
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": true,
        "PropNames.LinearNavigationParameters.pageNavigationSize": 0,
        "PropNames.LinearNavigationParameters.arrowKeyDirection": "horizontal",

        "PropNames.PaginatedParameters.paginationMax": null,
        "PropNames.PaginatedParameters.paginationMin": null,

        "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex,
        "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex,
        "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation,
        "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd,
        "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart,
        "PropNames.RefElementReturn.getElement": getElement,

        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.TypeaheadNavigationParameters.collator": collator,
        "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout
    });


    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    const { "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex } = retLS;

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
    //propsLN.tabIndex = propsLNC.tabIndex = -1;
    const props: ElementProps<RowElement>[] = [
        ...propsLN,
        propsLNC,
        // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
        { onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget)) }
    ];

    const contextToChildren = useMemoObject<UseGridNavigationCellContext>({
        gridNavigationCellContext,
        ...contextULN
    });

    return {
        context: contextToChildren,
        props,
        info: { focusSelf, getLocallyTabbable, setLocallyTabbable },
        ...retLS,
        ...retLN
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
    "PropNames.RefElementReturn.getElement": getElement,
    "PropNames.TextContentParameters.getText": getText,
    "PropNames.GridNavigationCellParameters.colSpan": colSpan,
    ...void1
}: UseGridNavigationCellParameters<CellElement>): UseGridNavigationCellReturnType<CellElement> {
    colSpan ??= 1;

    const {
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        "PropNames.PressParameters.excludeSpace": excludeSpace,
        "PropNames.RovingTabIndexChildReturn.getTabbable": getTabbable,
        "PropNames.RovingTabIndexChildReturn.tabbable": tabbable,
        "PropNames.TextContentReturn.getTextContent": getTextContent,
        props,
        info: infoLS,
        ...void2
    } = useListNavigationChild<CellElement>({
        info: { index, untabbable },
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.TextContentParameters.getText": getText
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void7);


    return {
        info: infoLS,
        props: useMergedProps(props, { onClick: (e) => setTabbableColumn(prev => ({ ideal: index, actual: (prev?.actual ?? index) }), e) }),
        "PropNames.RovingTabIndexChildReturn.getTabbable": getTabbable,
        "PropNames.PressParameters.excludeSpace": excludeSpace,
        "PropNames.RovingTabIndexChildReturn.tabbable": tabbable,
        "PropNames.TextContentReturn.getTextContent": getTextContent,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": useStableCallback((focused, prev, e) => {
            onCurrentFocusedInnerChanged?.(focused, prev, e);

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

    }
})