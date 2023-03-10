import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { OmitStrong } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";

export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> { setTabbableColumnIndex: SetTabbableIndex }
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}

export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends
    OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters"> {
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>["linearNavigationParameters"], "navigationDirection">
    gridNavigationParameters: {
        onTabbableColumnChange: OnPassiveStateChange<number | null, Event> | null;
    };
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement>, "context"> {
    context: UseGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement>;
}

export interface UseGridNavigationRowContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element> extends UseListNavigationContext<ParentOrRowElement, RowElement> {
    gridNavigationRowContext: {
        _r?: RowElement;
        _c?: CellElement;
        setTabbableRow: SetTabbableIndex; // (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        getCurrentTabbableColumn: () => (number | null);
        setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
    }
}

export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationChildParameters<RowElement>, "context">,
    OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters" | "rovingTabIndexParameters"> {

    managedChildrenReturn: Pick<UseManagedChildrenReturnType<CM>["managedChildrenReturn"], "getChildren">;
    context: UseGridNavigationRowContext<Element, RowElement, CellElement>;
    rovingTabIndexParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["rovingTabIndexParameters"], "untabbable">
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["linearNavigationParameters"], "navigationDirection">


}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> extends
    UseListNavigationChildReturnType<RowElement>,
    OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "context" | "propsStable" | "rovingTabIndexReturn"> {
    gridNavigationRowParameters: Pick<GridChildRowInfo<RowElement, CellElement>, "focusSelf" | "setTabbableColumnIndex">;
    rovingTabIndexReturn: OmitStrong<UseListNavigationReturnType<RowElement, CellElement>["rovingTabIndexReturn"], "focusSelf">;
    context: UseGridNavigationCellContext<RowElement, CellElement>;
}








export interface UseGridNavigationCellParameters<RowElement extends Element, CellElement extends Element> extends UseListNavigationChildParameters<CellElement> {
    gridNavigationCellParameters: {
        colSpan: number;
    }
    context: UseGridNavigationCellContext<RowElement, CellElement>;
}

export interface UseGridNavigationCellContext<RowElement extends Element, CellElement extends Element> extends UseListNavigationContext<RowElement, CellElement> {
    gridNavigationCellContext: {
        _r?: RowElement;
        _c?: CellElement;
        getRowIndex: () => number;
        setTabbableRow: SetTabbableIndex; //(u: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        getCurrentTabbableColumn: () => (number | null);
        setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
        setTabbableCell: SetTabbableIndex; //(updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
    }
}

export interface UseGridNavigationCellReturnType<CellElement extends Element> extends UseListNavigationChildReturnType<CellElement> { }

export function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({
    gridNavigationParameters: { onTabbableColumnChange, ...void3 },
    linearNavigationParameters,
    rovingTabIndexParameters: { onTabbableIndexChange, ...rovingTabIndexParameters },
    managedChildrenReturn,
    typeaheadNavigationParameters,
    ..._void2
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
        propsStable,
        ...void1
    } = useListNavigation<ParentOrRowElement, RowElement, RM>({
        linearNavigationParameters: { navigationDirection: "vertical", ...linearNavigationParameters },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChangeOverride, ...rovingTabIndexParameters },
        managedChildrenReturn,
        typeaheadNavigationParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(_void2);
    assertEmptyObject(void3);

    const gridNavigationRowContext = useStableObject({
        setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
        getCurrentTabbableColumn,
        setCurrentTabbableColumn
    })

    return {
        propsStable,
        managedChildrenParameters,
        context: useStableObject({
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
        gridNavigationRowContext: { setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn }
    },
    linearNavigationParameters, rovingTabIndexParameters: { ...rovingTabIndexParameters },
    managedChildParameters,
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexChildParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    ..._void1
}: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement> {
    monitorCallCount(useGridNavigationRow);

    const { getChildren } = managedChildrenReturn;
    const getIndex = useStableCallback(() => { return managedChildParameters.index })
    const focusSelf = useStableCallback((e: RowElement) => {
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
            (e as Element as HTMLElement)?.focus?.();
        }
    }, []);

    const {
        hasCurrentFocusParameters,
        pressParameters,
        props: propsLNC,
        rovingTabIndexChildReturn,
        textContentReturn
    } = useListNavigationChild<RowElement>({ managedChildParameters, refElementReturn, rovingTabIndexChildParameters, textContentParameters, context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN } });
    const untabbable = !rovingTabIndexChildReturn.tabbable;
    const {
        linearNavigationReturn,
        managedChildrenParameters,
        propsStable: propsLN,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        context: { rovingTabIndexContext: rtiContext, typeaheadNavigationContext: tnContext }
    } = useListNavigation<RowElement, CellElement, CM>({ managedChildrenReturn, typeaheadNavigationParameters, rovingTabIndexParameters: { untabbable, ...rovingTabIndexParameters }, linearNavigationParameters: { navigationDirection: "horizontal", ...linearNavigationParameters } });


    assertEmptyObject(_void1);

    const { setTabbableIndex } = rovingTabIndexReturn;

    const gridNavigationCellContext = useStableObject({
        setTabbableRow,
        getRowIndex: getIndex,
        getCurrentTabbableColumn,
        setCurrentTabbableColumn,
        setTabbableCell: setTabbableIndex
    })

    const props = useMergedProps(propsLN, propsLNC);
    props.tabIndex = -1;

    return {
        context: useStableObject({
            rovingTabIndexContext: rtiContext,
            gridNavigationCellContext,
            typeaheadNavigationContext: tnContext
        }),
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


export function useGridNavigationCell<CellElement extends Element>({
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
    rovingTabIndexChildParameters,
    managedChildParameters,
    refElementReturn,
    textContentParameters,
    gridNavigationCellParameters: {
        colSpan
    },
    ..._void1
}: UseGridNavigationCellParameters<any, CellElement>): UseGridNavigationCellReturnType<CellElement> {
    monitorCallCount(useGridNavigationCell);

    const { index } = managedChildParameters;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        props,
        ...void2
    } = useListNavigationChild<CellElement>({
        rovingTabIndexChildParameters,
        managedChildParameters,
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        textContentParameters,
        refElementReturn
    });

    assertEmptyObject(_void1);
    assertEmptyObject(void2);

    return {
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