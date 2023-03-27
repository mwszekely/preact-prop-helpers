import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useListNavigation, useListNavigationChild, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";

export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> { setTabbableColumnIndex: SetTabbableIndex }
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {}

export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends
    OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters"> {
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>["linearNavigationParameters"], "arrowKeyDirection">
    gridNavigationParameters: {
        onTabbableColumnChange: OnPassiveStateChange<number | null, Event> | null;
    };
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement, RM>, "context"> {
    context: OmitStrong<UseGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM>, "managedChildContext">;
}

export interface UseGridNavigationRowContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>> extends UseListNavigationContext<ParentOrRowElement, RowElement, RM> {
    gridNavigationRowContext: {
        _r?: RowElement;
        _c?: CellElement;
        setTabbableRow: SetTabbableIndex; // (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        getCurrentTabbableColumn: () => (number | null);
        setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
    }
}

export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    OmitStrong<UseListNavigationChildParameters<RowElement, RM>, "context">,
    OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters" | "rovingTabIndexParameters"> {

    managedChildrenReturn: Pick<UseManagedChildrenReturnType<CM>["managedChildrenReturn"], "getChildren">;
    context: OmitStrong<UseGridNavigationRowContext<Element, RowElement, CellElement, RM>, "managedChildContext">;
    rovingTabIndexParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["rovingTabIndexParameters"], "untabbable">
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["linearNavigationParameters"], "arrowKeyDirection">


}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends
    UseListNavigationChildReturnType<RowElement, RM>,
    OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>, "context" | "propsStable" | "rovingTabIndexReturn"> {
    gridNavigationRowParameters: Pick<GridChildRowInfo<RowElement, CellElement>, "focusSelf" | "setTabbableColumnIndex">;
    rovingTabIndexReturn: OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>["rovingTabIndexReturn"], "focusSelf">;
    context: OmitStrong<UseGridNavigationCellContext<RowElement, CellElement, CM>, "managedChildContext">;
}








export interface UseGridNavigationCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildParameters<CellElement, CM> {
    gridNavigationCellParameters: {
        colSpan: number;
    }
    context: OmitStrong<UseGridNavigationCellContext<RowElement, CellElement, CM>, "managedChildContext">;
}

export interface UseGridNavigationCellContext<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationContext<RowElement, CellElement, CM> {
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

export interface UseGridNavigationCellReturnType<CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<CellElement, CM> { }

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
        linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
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
    info: managedChildParameters,
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexChildParameters,
    textContentParameters,
    typeaheadNavigationParameters,
    ..._void1
}: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM> {
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
        textContentReturn,
        info,
        ...void2
    } = useListNavigationChild<RowElement, RM>({ info: managedChildParameters, refElementReturn, rovingTabIndexChildParameters, textContentParameters, context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN } });
    const untabbable = !rovingTabIndexChildReturn.tabbable;
    const {
        linearNavigationReturn,
        managedChildrenParameters,
        propsStable: propsLN,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        context: { rovingTabIndexContext: rtiContext, typeaheadNavigationContext: tnContext }
    } = useListNavigation<RowElement, CellElement, CM>({ managedChildrenReturn, typeaheadNavigationParameters, rovingTabIndexParameters: { untabbable, ...rovingTabIndexParameters }, linearNavigationParameters: { arrowKeyDirection: "horizontal", ...linearNavigationParameters } });


    assertEmptyObject(_void1);
    assertEmptyObject(void2);

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
    rovingTabIndexChildParameters,
    info: managedChildParameters,
    refElementReturn,
    textContentParameters,
    gridNavigationCellParameters: {
        colSpan
    },
    ..._void1
}: UseGridNavigationCellParameters<any, CellElement, CM>): UseGridNavigationCellReturnType<CellElement, CM> {
    monitorCallCount(useGridNavigationCell);

    const { index } = managedChildParameters;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        props,
        info,
        ...void2
    } = useListNavigationChild<CellElement, CM>({
        rovingTabIndexChildParameters,
        info: managedChildParameters,
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        textContentParameters,
        refElementReturn
    });

    assertEmptyObject(_void1);
    assertEmptyObject(void2);

    return {
        info,
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