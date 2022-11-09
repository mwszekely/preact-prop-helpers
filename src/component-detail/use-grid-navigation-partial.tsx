import { StateUpdater } from "preact/hooks";
import { assertEmptyObject, UseManagedChildParameters, UseManagedChildrenReturnType } from "../preact-extensions/use-child-manager";
import { PassiveStateUpdater, usePassiveState } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { useListNavigation, useListNavigationChild, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial";

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


export interface GridChildRowInfo<RowElement extends Element> extends UseListNavigationChildInfo<RowElement> { setTabbableColumnIndex: (u: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void; }
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}

export interface UseGridNavigationParameters<RowElement extends Element, M extends GridChildRowInfo<RowElement>> extends Omit<UseListNavigationParameters<RowElement, M>, "linearNavigationParameters"> {
    gridNavigationParameters: {
        onTabbableColumnChange: PassiveStateUpdater<number | null>;
    };
    linearNavigationParameters: Omit<UseListNavigationParameters<RowElement, M>["linearNavigationParameters"], "navigationDirection">
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends UseListNavigationReturnType<ParentOrRowElement, RowElement> {
    gridNavigationRowContext: UseGridNavigationRowParameters<RowElement, any, any, any>["asChildRowParameters"]["gridNavigationRowContext"]
}



export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>> {
    asChildRowParameters: UseListNavigationChildParameters<RowElement> & {
        managedChildrenReturn: Pick<UseManagedChildrenReturnType<CM>["managedChildrenReturn"], "getChildren">;
        gridNavigationRowContext: {
            _r?: RowElement;
            _c?: CellElement;
         
            gridNavigationRowParameters: {
                setTabbableRow: (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
                getCurrentTabbableColumn: () => (number | null);
                setCurrentTabbableColumn: PassiveStateUpdater<number | null>;
            }
        }
    };
    asParentRowParameters: Omit<UseListNavigationParameters<CellElement, CM>, "linearNavigationParameters"> & {
        linearNavigationParameters: Omit<UseListNavigationParameters<CellElement, CM>["linearNavigationParameters"], "navigationDirection">
    }

}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> {
    asChildRowReturn: UseListNavigationChildReturnType<RowElement> & {
        managedChildParameters: Pick<UseManagedChildParameters<GridChildRowInfo<RowElement>>["managedChildParameters"], "focusSelf" | "setTabbableColumnIndex">;
    };
    asParentRowReturn: Omit<UseListNavigationReturnType<RowElement, CellElement>, "rovingTabIndexReturn"> & {
        rovingTabIndexReturn: Omit<UseListNavigationReturnType<RowElement, CellElement>["rovingTabIndexReturn"], "focusSelf">;
        gridNavigationCellContext: UseGridNavigationCellParameters<CellElement>["gridNavigationCellContext"];
    };
}








export interface UseGridNavigationCellParameters<CellElement extends Element> extends UseListNavigationChildParameters<CellElement> {
    gridNavigationCellParameters: {
        colSpan: number;
    }
    gridNavigationCellContext: {
        _c?: CellElement;
        gridNavigationCellParameters: {
            getRowIndex: () => number;
            setTabbableRow: (u: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
            getCurrentTabbableColumn: () => (number | null);
            setCurrentTabbableColumn: PassiveStateUpdater<number | null>;
            setTabbableCell: (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        }
    }
}
export interface UseGridNavigationCellReturnType<CellElement extends Element> extends UseListNavigationChildReturnType<CellElement> { }

export function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, M extends GridChildRowInfo<RowElement>>({
    gridNavigationParameters: { onTabbableColumnChange, ...void3 },
    linearNavigationParameters,
    rovingTabIndexParameters: { onTabbableIndexChange, ...rovingTabIndexParameters },
    managedChildrenReturn,
    typeaheadNavigationParameters,
    ..._void2
}: UseGridNavigationParameters<RowElement, M>): UseGridNavigationReturnType<ParentOrRowElement, RowElement> {
    const { getChildren } = managedChildrenReturn;
    const { initiallyTabbedIndex } = rovingTabIndexParameters

    const [getCurrentTabbableColumn, setCurrentTabbableColumn] = usePassiveState<number | null>(onTabbableColumnChange, useStableCallback(() => { return (initiallyTabbedIndex ?? 0) }));

    const onTabbableIndexChangeOverride = useStableCallback((i: number | null, p: number | null | undefined) => {
        const children = getChildren();
        onTabbableIndexChange?.(i, p);
        if (p != null)
            children.getAt(p)?.setTabbableColumnIndex(null, false);
        if (i != null)
            children.getAt(i)?.setTabbableColumnIndex(getCurrentTabbableColumn(), false);

    })

    const {
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        ...void1
    } = useListNavigation<ParentOrRowElement, RowElement, M>({
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

export function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>>({
    asChildRowParameters: { gridNavigationRowContext: { gridNavigationRowParameters: { setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn } }, ...asChildRowOfTable },
    asParentRowParameters: { linearNavigationParameters, ...asParentRowOfCellsP },
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
    const lnr = useListNavigation<RowElement, CellElement, CM>({ ...asParentRowOfCellsP, linearNavigationParameters: { navigationDirection: "horizontal", ...linearNavigationParameters } });


    assertEmptyObject(_void1);

    const { rovingTabIndexReturn: { setTabbableIndex } } = lnr;
    const gridNavigationCellContext = useStableObject({
        gridNavigationCellParameters: useStableObject({
            setTabbableRow,
            getRowIndex: getIndex,
            getCurrentTabbableColumn,
            setCurrentTabbableColumn,
            setTabbableCell: setTabbableIndex
        })
    })

    return {
        asChildRowReturn: { managedChildParameters: { focusSelf, setTabbableColumnIndex: setTabbableIndex }, ...lncr, },
        asParentRowReturn: { gridNavigationCellContext, ...lnr }
    }

}


export function useGridNavigationCell<CellElement extends Element>({
    managedChildParameters: { hidden, index, ...void3 },
    rovingTabIndexChildContext,
    typeaheadNavigationChildContext,
    typeaheadNavigationChildParameters,
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
}: UseGridNavigationCellParameters<CellElement>): UseGridNavigationCellReturnType<CellElement> {
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        rovingTabIndexChildReturn,
        ...void2
    } = useListNavigationChild<CellElement>({
        managedChildParameters: { hidden, index },
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        typeaheadNavigationChildParameters
    });

    assertEmptyObject(_void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused: boolean, prev: boolean | undefined) => {
                ocfic1?.(focused, prev);

                if (focused) {
                    setTabbableRow(getRowIndex(), false);
                    setCurrentTabbableColumn(index);
                    setTabbableCell(prev => {
                        if (prev != null && (prev < index || prev > index + colSpan)) {
                            return prev;
                        }
                        return index;
                    }, false);
                }
            })
        },
        rovingTabIndexChildReturn
    }
}