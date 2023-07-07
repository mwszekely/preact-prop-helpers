import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { focus } from "../../util/focus.js";
import { OmitStrong, OmitTargeted, PickTargeted } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";

export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> {
    focusSelf: (e: RowElement) => void;
}

export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> { }

export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends
OmitTargeted<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters", "arrowKeyDirection"> {
    gridNavigationParameters: {
        onTabbableColumnChange: OnPassiveStateChange<TabbableColumnInfo, Event> | null;
    };
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement, RM>, "context"> {
    context: UseGridNavigationRowContext;
}

export interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: {
        //rowIsUntabbableBecauseOfGrid: boolean;
        setTabbableRow: SetTabbableIndex;
        getTabbableColumn: () => TabbableColumnInfo;
        setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
    }
}

export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationChildParameters<RowElement, RM>, "context">,
    OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters"> {

    managedChildrenReturn: Pick<UseManagedChildrenReturnType<CM>["managedChildrenReturn"], "getChildren">;
    context: UseGridNavigationRowContext;
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["linearNavigationParameters"], "onNavigateLinear" | "arrowKeyDirection">
    /** (These are the parameters for the row controlling the cells, not any other combination of parent/child/row/cell) */
    rovingTabIndexParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["rovingTabIndexParameters"], "focusSelfParent" | "untabbableBehavior">;

}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    UseListNavigationChildReturnType<RowElement, RM>,
    OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn" | "propsStableParentOrChild" | "propsParent" | "context"> ,
    PickTargeted<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn", "focusSelf"> {
    //gridNavigationRowParameters: Pick<GridChildRowInfo<RowElement, CellElement>, "focusSelf">;
    context: UseGridNavigationCellContext;
    info: Pick<RM, "getLocallyTabbable" | "setLocallyTabbable" | "focusSelf">;
}








export interface UseGridNavigationCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildParameters<CellElement, CM> {
    gridNavigationCellParameters: {
        colSpan: number;
    }
    context: UseGridNavigationCellContext;
}

interface TabbableColumnInfo {
    literal: number | null;
    ideal: number | null;
}

export interface UseGridNavigationCellContext extends UseListNavigationContext {
    gridNavigationCellContext: {
        allChildCellsAreUntabbable: boolean;
        getRowIndex: () => number;
        setTabbableRow: SetTabbableIndex; //(u: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        getTabbableColumn: () => TabbableColumnInfo;
        setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
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

    const [getTabbableColumn, setTabbableColumn] = usePassiveState<TabbableColumnInfo, Event>(onTabbableColumnChange, useStableCallback(() => {
        let t = (initiallyTabbedIndex ?? 0);
        return { literal: t, ideal: t }
    }));

    const onTabbableRowChange = useStableCallback((nextRow: number | null, previousRow: number | null | undefined, reason: Event | undefined) => {
        return;
        /*const children = getChildren();
        onTabbableIndexChange?.(nextRow, previousRow, reason);
        const { literal, ideal } = getCurrentTabbableColumn();
        if (previousRow != null)
            children.getAt(previousRow)?.setTabbableColumnIndex(ideal, reason, false);
        if (nextRow != null)
            children.getAt(nextRow)?.setTabbableColumnIndex(ideal, reason, false);
*/
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
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableRowChange, untabbable, ...rovingTabIndexParameters },
        refElementReturn,
        managedChildrenReturn,
        typeaheadNavigationParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    const gridNavigationRowContext = useMemoObject<UseGridNavigationRowContext["gridNavigationRowContext"]>({
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

        let { ideal, literal } = (getTabbableColumn());
        console.log(`${managedChildParameters.index}.whenThisRowIsFocused(${ideal}, ${literal})`)
        let index = (ideal ?? 0);
        let child = getChildren().getAt(index);
        let highestIndex = getChildren().getHighestIndex();
        while ((!child || child.untabbable) && index > 0) {
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
            untabbableBehavior: "leave-child-focused", focusSelfParent: whenThisRowIsFocused, untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange: useStableCallback((v, p, r) => {
                debugger;
                setTabbableColumn({ ideal: v, literal: v });
                onTabbableIndexChange?.(v, p, r);
            })
        },
        linearNavigationParameters: {
            onNavigateLinear: useStableCallback((next, event) => {
                setTabbableColumn(prev => ({ ideal: next, literal: prev?.literal ?? next }), event);
            }),
            arrowKeyDirection: "horizontal",
            ...linearNavigationParameters
        }
    });


    assertEmptyObject(void1);
    assertEmptyObject(void4);

    const { setTabbableIndex } = ulnRet. rovingTabIndexReturn;

    const gridNavigationCellContext = useMemoObject<UseGridNavigationCellContext["gridNavigationCellContext"]>({
        allChildCellsAreUntabbable,
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
        info: { focusSelf,...info },
        //gridNavigationRowParameters: { focusSelf },
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

    return {
        info: infoLs,
        props: useMergedProps(props, { onClick: () => setTabbableColumn(prev => ({ ideal: index, literal: (prev?.literal ?? index) })) }),
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                ocfic1?.(focused, prev, e);

                if (focused) {
                    setTabbableRow(getRowIndex(), e, false);
                    setTabbableColumn(prev => { debugger; return { literal: index, ideal: prev?.ideal ?? index }; }, e);
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