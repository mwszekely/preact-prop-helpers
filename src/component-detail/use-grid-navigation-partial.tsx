import { assertEmptyObject, UseManagedChildrenReturnType } from "../preact-extensions/use-child-manager";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { useListNavigation, useListNavigationChild, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial";
import { SetTabbableIndex } from "./use-roving-tabindex";

/*
export function useGridNavigationProps<ParentOrRowElement extends Element, RowElement extends Element>(r: UseGridNavigationReturnType<ParentOrRowElement, RowElement>, ...otherProps: h.JSX.HTMLAttributes<ParentOrRowElement>[]) {
    return useListNavigationProps<ParentOrRowElement, RowElement>(r, ...otherProps)
}
export function useGridNavigationRowProps<RowElement extends Element, CellElement extends Element>(r: UseGridNavigationRowReturnType<RowElement, CellElement>, ...otherProps: h.JSX.HTMLAttributes<RowElement>[]) {
    return useListNavigationProps<RowElement, CellElement>(r.asParentRowOfCells, ...useListNavigationChildProps<RowElement>(r.asChildRowOfTable, ...otherProps));
}
export function useGridNavigationCellProps<CellElement extends Element>(r: UseGridNavigationCellReturnType<CellElement>, ...otherProps: h.JSX.HTMLAttributes<CellElement>[]) {
    return useListNavigationChildProps<CellElement>(r, ...otherProps);
}*/


export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> { setTabbableColumnIndex: SetTabbableIndex }
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}

export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends Omit<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters"> {
    gridNavigationParameters: {
        onTabbableColumnChange: OnPassiveStateChange<number | null, Event> | null;
    };
    linearNavigationParameters: Omit<UseListNavigationParameters<ParentOrChildElement, RowElement, M>["linearNavigationParameters"], "navigationDirection">
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element,  RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationReturnType<ParentOrRowElement, RowElement> {
    gridNavigationRowContext: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>["rowAsChildOfGridParameters"]["gridNavigationRowContext"]
}



export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> {
    rowAsChildOfGridParameters: UseListNavigationChildParameters<RowElement> & {
        managedChildrenReturn: Pick<UseManagedChildrenReturnType<CM>["managedChildrenReturn"], "getChildren">;
        gridNavigationRowContext: {
            _r?: RowElement;
            _c?: CellElement;
         
            gridNavigationRowParameters: {
                setTabbableRow: SetTabbableIndex; // (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
                getCurrentTabbableColumn: () => (number | null);
                setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
            }
        }
    };
    rowAsParentOfCellsParameters: Omit<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters" | "rovingTabIndexParameters"> & {
        rovingTabIndexParameters: Omit<UseListNavigationParameters<RowElement, CellElement, CM>["rovingTabIndexParameters"], "untabbable">
        linearNavigationParameters: Omit<UseListNavigationParameters<RowElement, CellElement, CM>["linearNavigationParameters"], "navigationDirection">
    }

}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> {
    rowAsChildOfGridReturn: UseListNavigationChildReturnType<RowElement> & {
        gridNavigationRowParameters: Pick<GridChildRowInfo<RowElement, CellElement>, "focusSelf" | "setTabbableColumnIndex">;
    };
    rowAsParentOfCellsReturn: Omit<UseListNavigationReturnType<RowElement, CellElement>, "rovingTabIndexReturn"> & {
        rovingTabIndexReturn: Omit<UseListNavigationReturnType<RowElement, CellElement>["rovingTabIndexReturn"], "focusSelf">;
        gridNavigationCellContext: UseGridNavigationCellParameters<RowElement, CellElement>["gridNavigationCellContext"];
    };
}








export interface UseGridNavigationCellParameters<_RowElement extends Element, CellElement extends Element> extends UseListNavigationChildParameters<CellElement> {
    gridNavigationCellParameters: {
        colSpan: number;
    }
    gridNavigationCellContext: {
        _c?: CellElement;
        gridNavigationCellParameters: {
            getRowIndex: () => number;
            setTabbableRow:  SetTabbableIndex; //(u: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
            getCurrentTabbableColumn: () => (number | null);
            setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
            setTabbableCell: SetTabbableIndex; //(updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        }
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
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
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

    return {
        managedChildrenParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        gridNavigationRowContext: useStableObject({
            gridNavigationRowParameters: useStableObject({
                setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
                getCurrentTabbableColumn,
                setCurrentTabbableColumn
            })
        })
    }
}

export function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({
    rowAsChildOfGridParameters: { gridNavigationRowContext: { gridNavigationRowParameters: { setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn } }, ...asChildRowOfTable },
    rowAsParentOfCellsParameters: { linearNavigationParameters, rovingTabIndexParameters: { ...rovingTabIndexParameters }, ...asParentRowOfCellsP },
    ..._void1
}: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement> {
    const { managedChildrenReturn: { getChildren } } = asChildRowOfTable;
    const getIndex = useStableCallback(() => { return asChildRowOfTable.managedChildParameters.index })
    const focusSelf = useStableCallback((e: RowElement) => {
        let index = (getCurrentTabbableColumn() ?? 0);
        let child = getChildren().getAt(index);
        while ((!child) && index > 0) {
            --index;
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

    const lncr = useListNavigationChild<RowElement>(asChildRowOfTable);
    const untabbable = !lncr.rovingTabIndexChildReturn.tabbable;
    const lnr = useListNavigation<RowElement, CellElement, CM>({ ...asParentRowOfCellsP, rovingTabIndexParameters: { untabbable, ...rovingTabIndexParameters }, linearNavigationParameters: { navigationDirection: "horizontal", ...linearNavigationParameters } });


    assertEmptyObject(_void1);

    const { rovingTabIndexReturn: { setTabbableIndex },rovingTabIndexReturn, linearNavigationReturn, managedChildrenParameters, rovingTabIndexChildContext, typeaheadNavigationChildContext, typeaheadNavigationReturn } = lnr;


    return {
        rowAsChildOfGridReturn: { gridNavigationRowParameters: { focusSelf, setTabbableColumnIndex: setTabbableIndex }, ...lncr, },
        rowAsParentOfCellsReturn: {
            ...lnr ,
            gridNavigationCellContext: useStableObject ({
                gridNavigationCellParameters: useStableObject({
                    setTabbableRow,
                    getRowIndex: getIndex,
                    getCurrentTabbableColumn,
                    setCurrentTabbableColumn,
                    setTabbableCell: setTabbableIndex
                })
            }),
            linearNavigationReturn,
            managedChildrenParameters,
            rovingTabIndexChildContext,
            rovingTabIndexReturn,
            typeaheadNavigationChildContext,
            typeaheadNavigationReturn,

        }
    }

}


export function useGridNavigationCell<CellElement extends Element>({
//    managedChildParameters: { hidden, index, ...void3 },
    rovingTabIndexChildContext,
    typeaheadNavigationChildContext,
    //typeaheadNavigationChildParameters,
    rovingTabIndexChildParameters,
    managedChildParameters,
    refElementReturn,
    textContentParameters,
    gridNavigationCellParameters: {
        colSpan
    },
    gridNavigationCellContext: {
        gridNavigationCellParameters: {
            getRowIndex,
            setTabbableRow,
            getCurrentTabbableColumn: _getCurrentColumn,
            setCurrentTabbableColumn,
            setTabbableCell
        }
    },
    ..._void1
}: UseGridNavigationCellParameters<any, CellElement>): UseGridNavigationCellReturnType<CellElement> {
    const { index } = managedChildParameters;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        rovingTabIndexChildReturn,
        textContentReturn,
        ...void2
    } = useListNavigationChild<CellElement>({
        rovingTabIndexChildParameters,
        managedChildParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        textContentParameters,
        //typeaheadNavigationChildParameters,
        refElementReturn
    });

    assertEmptyObject(_void1);
    assertEmptyObject(void2);
//    assertEmptyObject(void3);

    return {
        rovingTabIndexChildReturn,
        textContentReturn,
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