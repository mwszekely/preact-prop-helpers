import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { focus } from "../../util/focus.js";
import { OmitStrong, TargetedOmit, TargetedPick } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { SetTabbableIndex, UseRovingTabIndexChildInfoKeysReturnType } from "./use-roving-tabindex.js";

export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> { }
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> { }

export interface UseGridNavigationCellParamersSelf {
    colSpan: number;
}

export interface UseGridNavigationCellContextSelf {
    //allChildCellsAreUntabbable: boolean;
    getRowIndex: () => number;
    setTabbableRow: SetTabbableIndex; //(u: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
    setTabbableCell: SetTabbableIndex; //(updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
}

export interface UseGridNavigationParametersSelf {
    /**
     * TODO: This may be called even when there is no actual change in the numeric values
     */
    onTabbableColumnChange: OnPassiveStateChange<TabbableColumnInfo, Event> | null;
}

export interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
}

export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends
    OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters">,
    TargetedOmit<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters", "arrowKeyDirection"> {
    gridNavigationParameters: UseGridNavigationParametersSelf;
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement, RM>, "context"> {
    context: UseGridNavigationRowContext;
}


export interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}

export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationChildParameters<RowElement, RM>, "context">,
    TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters", "disableHomeEndKeys" | "onNavigateLinear" | "arrowKeyDirection">,
    TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "rovingTabIndexParameters", "focusSelfParent" | "untabbableBehavior">,
    OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters">,
    TargetedPick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn", "getChildren"> {

    context: UseGridNavigationRowContext;

}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    UseListNavigationChildReturnType<RowElement, RM>,
    OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn" | "propsStableParentOrChild" | "propsParent" | "context">,
    TargetedOmit<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn", "focusSelf"> {
    context: UseGridNavigationCellContext;
    info: Pick<RM, UseRovingTabIndexChildInfoKeysReturnType | "focusSelf">;
}







export interface UseGridNavigationCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildParameters<CellElement, CM> {
    gridNavigationCellParameters: UseGridNavigationCellParamersSelf;
    context: UseGridNavigationCellContext;
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


export interface UseGridNavigationCellReturnType<CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<CellElement, CM> { }

export function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({
    gridNavigationParameters: { onTabbableColumnChange, ...void3 },
    linearNavigationParameters,
    ...listNavigationParameters
}: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM> {
    monitorCallCount(useGridNavigation);

    const [getTabbableColumn, setTabbableColumn] = usePassiveState<TabbableColumnInfo, Event>(onTabbableColumnChange, useStableCallback(() => {
        let t = (listNavigationParameters.rovingTabIndexParameters.initiallyTabbedIndex ?? 0);
        return { actual: t, ideal: t }
    }));

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
    // Stuff for the row as a child of the parent grid
    info: managedChildParameters,
    textContentParameters,
    context: contextFromParent,

    // Stuff for the row as a parent of child cells
    linearNavigationParameters,
    rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 },
    managedChildrenReturn,
    typeaheadNavigationParameters,

    // Both/neither
    refElementReturn,
    ...void1
}: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
    monitorCallCount(useGridNavigationRow);
    const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;

    const getIndex = useStableCallback(() => { return managedChildParameters.index })
    const whenThisRowIsFocused = useStableCallback((e: RowElement) => {
        const { getChildren } = managedChildrenReturn;

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
    }, []);
    const focusSelf = whenThisRowIsFocused;

    const {
        props: propsLNC,
        info,
        ...ulncRet
    } = useListNavigationChild<RowElement, RM>({ info: managedChildParameters, refElementReturn, textContentParameters, context: contextFromParent });
    const allChildCellsAreUntabbable = !ulncRet.rovingTabIndexChildReturn.tabbable;

    const {
        propsStableParentOrChild: propsLN,
        // This is just tabIndex = 0 or -1, see the TODO below
        propsParent: propsLN2,
        context: contextULN,
        ...ulnRet
    } = useListNavigation<RowElement, CellElement, CM>({
        managedChildrenReturn,
        refElementReturn,
        typeaheadNavigationParameters,
        rovingTabIndexParameters: {
            untabbableBehavior: "leave-child-focused",
            focusSelfParent: whenThisRowIsFocused,
            untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
            initiallyTabbedIndex,
            onTabbableIndexChange: useStableCallback((v, p, r) => {
                setTabbableColumn({ ideal: v, actual: v });
                onTabbableIndexChange?.(v, p, r);
            })
        },
        linearNavigationParameters: {
            onNavigateLinear: useStableCallback((next, event) => {
                setTabbableColumn(prev => ({ ideal: next, actual: prev?.actual ?? next }), event);
            }),
            disableHomeEndKeys: true,
            arrowKeyDirection: "horizontal",
            ...linearNavigationParameters
        }
    });


    assertEmptyObject(void1);
    assertEmptyObject(void4);

    const { setTabbableIndex } = ulnRet.rovingTabIndexReturn;

    const gridNavigationCellContext = useMemoObject<UseGridNavigationCellContextSelf>({
        //allChildCellsAreUntabbable,
        setTabbableRow,
        getRowIndex: getIndex,
        getTabbableColumn,
        setTabbableColumn,
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

    const contextToChildren = useMemoObject<UseGridNavigationCellContext>({
        gridNavigationCellContext,
        ...contextULN
    });

    return {
        context: contextToChildren,
        props,
        info: { focusSelf, ...info },
        ...ulncRet,
        ...ulnRet,
    }

}


export function useGridNavigationCell<CellElement extends Element, CM extends GridChildCellInfo<CellElement>>({
    context: {
        gridNavigationCellContext: {
            getRowIndex,
            setTabbableRow,
            getTabbableColumn: _getCurrentColumn,
            setTabbableColumn,
            setTabbableCell,
            //allChildCellsAreUntabbable,
            ...void4
        },
        rovingTabIndexContext,
        typeaheadNavigationContext,
        ...void5
    },
    info,
    refElementReturn,
    textContentParameters,
    gridNavigationCellParameters: {
        colSpan,
        ...void6
    },
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
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);

    return {
        info: infoLs,
        props: useMergedProps(props, { onClick: () => setTabbableColumn(prev => ({ ideal: index, actual: (prev?.actual ?? index) })) }),
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                ocfic1?.(focused, prev, e);

                if (focused) {
                    setTabbableRow(getRowIndex(), e, false);
                    setTabbableColumn(prev => { debugger; return { actual: index, ideal: prev?.ideal ?? index }; }, e);
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