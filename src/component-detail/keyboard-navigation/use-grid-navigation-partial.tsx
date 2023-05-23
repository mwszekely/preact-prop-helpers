import { useCallback } from "preact/hooks";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { focus } from "../../util/focus.js";
import { OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";

export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> { setTabbableColumnIndex: SetTabbableIndex }
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> { }

export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends
    OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters"> {
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>["linearNavigationParameters"], "arrowKeyDirection">
    gridNavigationParameters: {
        onTabbableColumnChange: OnPassiveStateChange<number | null, Event> | null;
    };
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement, RM>, "context"> {
    context: UseGridNavigationRowContext;
}

export interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: {
        rowIsUntabbableBecauseOfGrid: boolean;
        setTabbableRow: SetTabbableIndex;
        getCurrentTabbableColumn: () => (number | null);
        setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
    }
}

export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationChildParameters<RowElement, RM>, "rovingTabIndexParameters" | "context">,
    OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "rovingTabIndexParameters" | "linearNavigationParameters"> {

    managedChildrenReturn: Pick<UseManagedChildrenReturnType<CM>["managedChildrenReturn"], "getChildren">;
    context: UseGridNavigationRowContext;
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["linearNavigationParameters"], "arrowKeyDirection">
    /** (These are the parameters for the row controlling the cells, not any other combination of parent/child/row/cell) */
    rovingTabIndexParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["rovingTabIndexParameters"], never>;

}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    UseListNavigationChildReturnType<RowElement, RM>,
    OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>, "propsStableParentOrChild" | "propsParent" | "context" | "rovingTabIndexReturn"> {
    gridNavigationRowParameters: Pick<GridChildRowInfo<RowElement, CellElement>, "focusSelf" | "setTabbableColumnIndex">;
    rovingTabIndexReturn: OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>["rovingTabIndexReturn"], "focusSelf">;
    context: UseGridNavigationCellContext;
}








export interface UseGridNavigationCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildParameters<CellElement, CM> {
    gridNavigationCellParameters: {
        colSpan: number;
    }
    context: UseGridNavigationCellContext;
}

export interface UseGridNavigationCellContext extends UseListNavigationContext {
    gridNavigationCellContext: {
        getRowIndex: () => number;
        setTabbableRow: SetTabbableIndex; //(u: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        getCurrentTabbableColumn: () => (number | null);
        setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
        setTabbableCell: SetTabbableIndex; //(updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
    }
}

export interface UseGridNavigationCellReturnType<CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<CellElement, CM> { }

export function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({
    gridNavigationParameters: { onTabbableColumnChange, ...void3 },
    linearNavigationParameters,
    rovingTabIndexParameters: { onTabbableIndexChange, untabbable, ...rovingTabIndexParameters },
    managedChildrenReturn,
    typeaheadNavigationParameters,
    refElementReturn,
    ...void2
}: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {
    monitorCallCount(useGridNavigation);

    const { getChildren } = managedChildrenReturn;
    const { initiallyTabbedIndex } = rovingTabIndexParameters

    const [getCurrentTabbableColumn, setCurrentTabbableColumn] = usePassiveState<number | null, Event>(onTabbableColumnChange, useStableCallback(() => { return (initiallyTabbedIndex ?? 0) }));

    const onTabbableIndexChangeOverride = useStableCallback((nextRow: number | null, previousRow: number | null | undefined, reason: Event | undefined) => {
        const children = getChildren();
        onTabbableIndexChange?.(nextRow, previousRow, reason);
        const nextColumn = getCurrentTabbableColumn();
        if (previousRow != null)
            children.getAt(previousRow)?.setTabbableColumnIndex(nextColumn, reason, false);
        if (nextRow != null)
            children.getAt(nextRow)?.setTabbableColumnIndex(nextColumn, reason, false);

    })

    const {
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        managedChildrenParameters,
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        propsParent,
        propsStableParentOrChild,
        ...void1
    } = useListNavigation<ParentOrRowElement, RowElement, RM>({
        linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChangeOverride, untabbable, ...rovingTabIndexParameters },
        refElementReturn,
        managedChildrenReturn,
        typeaheadNavigationParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    const gridNavigationRowContext = useMemoObject<UseGridNavigationRowContext["gridNavigationRowContext"]>({
        rowIsUntabbableBecauseOfGrid: !!untabbable,
        setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
        getCurrentTabbableColumn,
        setCurrentTabbableColumn
    })

    return {
        propsParent,
        propsStableParentOrChild,
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
}

export function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({
    context: {
        rovingTabIndexContext: contextRTI,
        typeaheadNavigationContext: contextTN,
        gridNavigationRowContext: { setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn, rowIsUntabbableBecauseOfGrid }
    },
    linearNavigationParameters,
    rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 },
    info: managedChildParameters,
    managedChildrenReturn,
    refElementReturn,
    textContentParameters,
    typeaheadNavigationParameters,
    ...void1
}: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
    monitorCallCount(useGridNavigationRow);

    const { getChildren } = managedChildrenReturn;
    const getIndex = useStableCallback(() => { return managedChildParameters.index })
    const whenThisRowIsFocused = useStableCallback((e: RowElement) => {
        let index = (getCurrentTabbableColumn() ?? 0);
        let child = getChildren().getAt(index);
        let highestIndex = getChildren().getHighestIndex();
        while ((!child || child.hidden) && index > 0) {
            --index;
            child = getChildren().getAt(index);
        }
        while ((!child || child.hidden) && index <= highestIndex) {
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
    }, []);
    const focusSelf = whenThisRowIsFocused;

    const {
        hasCurrentFocusParameters,
        pressParameters,
        props: propsLNC,
        rovingTabIndexChildReturn,
        textContentReturn,
        info,
        ...void2
    } = useListNavigationChild<RowElement, RM>({ info: managedChildParameters, refElementReturn, textContentParameters, context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN }, rovingTabIndexParameters: { untabbable: rowIsUntabbableBecauseOfGrid } });
    const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
    const {
        linearNavigationReturn,
        managedChildrenParameters,
        propsStableParentOrChild: propsLN,
        propsParent: propsLN2,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        context: { rovingTabIndexContext: rtiContext, typeaheadNavigationContext: tnContext }
    } = useListNavigation<RowElement, CellElement, CM>({ managedChildrenReturn, refElementReturn, typeaheadNavigationParameters, rovingTabIndexParameters: { untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange }, linearNavigationParameters: { arrowKeyDirection: "horizontal", ...linearNavigationParameters } });


    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);

    const { setTabbableIndex } = rovingTabIndexReturn;

    const gridNavigationCellContext = useMemoObject({
        setTabbableRow,
        getRowIndex: getIndex,
        getCurrentTabbableColumn,
        setCurrentTabbableColumn,
        setTabbableCell: setTabbableIndex
    })

    // TODO: propsLN2 (awful name) is just the tabIndex=0 or -1 from rovingTabIndex, which flips around when `untabbable` flips.
    // We can ignore it here, because our tabIndex is entirely controlled by our own list navigation,
    // but it shouldn't just be ignored wholesale like this.
    const props = useMergedProps(propsLN, /*propsLN2,*/ propsLNC, {
        // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
        onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget))
    });
    props.tabIndex = -1;

    return {
        context: useMemoObject({
            rovingTabIndexContext: rtiContext,
            gridNavigationCellContext,
            typeaheadNavigationContext: tnContext
        }),
        info,
        hasCurrentFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        props,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        gridNavigationRowParameters: { focusSelf, setTabbableColumnIndex: setTabbableIndex },
    }

}


export function useGridNavigationCell<CellElement extends Element, CM extends GridChildCellInfo<CellElement>>({
    context: {
        gridNavigationCellContext: {
            getRowIndex,
            setTabbableRow,
            getCurrentTabbableColumn: _getCurrentColumn,
            setCurrentTabbableColumn,
            setTabbableCell
        },
        rovingTabIndexContext,
        typeaheadNavigationContext
    },
    info,
    refElementReturn,
    textContentParameters,
    gridNavigationCellParameters: {
        colSpan
    },
    rovingTabIndexParameters,
    ...void1
}: UseGridNavigationCellParameters<any, CellElement, CM>): UseGridNavigationCellReturnType<CellElement, CM> {
    monitorCallCount(useGridNavigationCell);

    const { index } = info;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 },
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        props,
        info: infoLs,
        ...void2
    } = useListNavigationChild<CellElement, CM>({
        info,
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        textContentParameters,
        refElementReturn,
        rovingTabIndexParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        info: infoLs,
        props,
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                ocfic1?.(focused, prev, e);

                if (focused) {
                    setTabbableRow(getRowIndex(), e, false);
                    setCurrentTabbableColumn(index, e);
                    setTabbableCell((prev) => {
                        if (prev != null && (prev < index || prev > index + colSpan)) {
                            return prev;
                        }
                        return index;
                    }, e, false);
                }
            })
        },
    }
}