import { StateUpdater, useCallback } from "preact/hooks";
import { assertEmptyObject, UseManagedChildParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useListNavigation, useListNavigationChild, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo } from "./use-list-navigation";
import { PassiveStateUpdater, usePassiveState } from "./use-passive-state";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter, useStableObject } from "./use-stable-getter";

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
    gridNavigationParameters: { onTabbableColumnChange: PassiveStateUpdater<number | null>; };
    linearNavigationParameters: Omit<UseListNavigationParameters<RowElement, M>["linearNavigationParameters"], "navigationDirection">
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends UseListNavigationReturnTypeInfo<ParentOrRowElement, RowElement> {
    gridNavigationRowParameters: UseGridNavigationRowParameters<RowElement, any, any, any>["asChildRowOfTable"]["gridNavigationRowParameters"]
}



export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>> {
    asChildRowOfTable: UseListNavigationChildParameters<RowElement> & {
        managedChildrenReturn: Pick<UseManagedChildrenReturnTypeInfo<CM>["managedChildrenReturn"], "getChildren">;
        gridNavigationRowParameters: {
            _private: {
                setTabbableRow: (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
                getCurrentColumn: () => (number | null);
                setCurrentColumn: PassiveStateUpdater<number | null>;
            }
        }
    };
    asParentRowOfCells: Omit<UseListNavigationParameters<CellElement, CM>, "linearNavigationParameters"> & {
        linearNavigationParameters: Omit<UseListNavigationParameters<CellElement, CM>["linearNavigationParameters"], "navigationDirection">
    }

}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> {
    asChildRowOfTable: UseListNavigationChildReturnTypeInfo<RowElement> & {
        managedChildParameters: Pick<UseManagedChildParameters<GridChildRowInfo<RowElement>>["managedChildParameters"], "focusSelf" | "setTabbableColumnIndex">;
    };
    asParentRowOfCells: Omit<UseListNavigationReturnTypeInfo<RowElement, CellElement>, "rovingTabIndexReturn"> & {
        rovingTabIndexReturn: Omit<UseListNavigationReturnTypeInfo<RowElement, CellElement>["rovingTabIndexReturn"], "focusSelf">;
        gridNavigationCellParameters: Pick<UseGridNavigationCellParameters<CellElement>["gridNavigationCellParameters"], "_private">;
    };
}








export interface UseGridNavigationCellParameters<CellElement extends Element> extends UseListNavigationChildParameters<CellElement> {
    gridNavigationCellParameters: {
        colSpan: number;
        _private: {
            setTabbableRow: (fromUserInteraction: boolean) => void;
            getCurrentColumn: () => (number | null);
            setCurrentColumn: PassiveStateUpdater<number | null>;
            setTabbableColumn: (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        }
    }
}
export interface UseGridNavigationCellReturnType<CellElement extends Element> extends UseListNavigationChildReturnTypeInfo<CellElement> { }

export interface UseGridNavigationContext<ParentOrRowElement extends Element, RowElement extends Element> extends Pick<UseGridNavigationReturnType<ParentOrRowElement, RowElement>, "typeaheadNavigationChildParameters" | "rovingTabIndexChildParameters" | "gridNavigationRowParameters"> { }
export interface UseGridNavigationRowContext<RowElement extends Element, CellElement extends Element> extends Pick<UseGridNavigationRowReturnType<RowElement, CellElement>["asParentRowOfCells"], "rovingTabIndexReturn" | "typeaheadNavigationChildParameters" | "rovingTabIndexChildParameters" | "gridNavigationCellParameters"> { }

export function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, M extends GridChildRowInfo<RowElement>>({
    gridNavigationParameters: { onTabbableColumnChange, ...void3 },
    linearNavigationParameters,
    managedChildrenReturn,
    rovingTabIndexParameters: { onTabbableIndexChange, initiallyTabbedIndex, ...void4 },
    typeaheadNavigationParameters,
    ..._void2
}: UseGridNavigationParameters<RowElement, M>): UseGridNavigationReturnType<ParentOrRowElement, RowElement> {

    const [getCurrentColumn, setCurrentColumn] = usePassiveState<number | null>(onTabbableColumnChange, useStableCallback(() => { return (initiallyTabbedIndex ?? 0) }));
    const { getChildren } = managedChildrenReturn;

    const {
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        managedChildrenParameters,
        typeaheadNavigationChildParameters,
        rovingTabIndexChildParameters,
        ...void1
    } = useListNavigation<ParentOrRowElement, RowElement, M>({
        linearNavigationParameters: {
            navigationDirection: "vertical",
            ...linearNavigationParameters
        },
        managedChildrenReturn,
        rovingTabIndexParameters: {
            onTabbableIndexChange: useStableCallback((i: number | null, p: number | null | undefined) => {
                const children = getChildren();
                onTabbableIndexChange?.(i, p);
                if (p != null)
                    children.getAt(p)?.setTabbableColumnIndex(null, false);
                if (i != null)
                    children.getAt(i)?.setTabbableColumnIndex(getCurrentColumn(), false);

            }), initiallyTabbedIndex
        },
        typeaheadNavigationParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(_void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    return {
        managedChildrenParameters,
        typeaheadNavigationChildParameters,
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        rovingTabIndexChildParameters,
        gridNavigationRowParameters: useStableObject({
            _private: useStableObject({
                setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
                getCurrentColumn,
                setCurrentColumn
            })
        })
    }
}

export function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>>({
    asChildRowOfTable: { gridNavigationRowParameters: { _private: { setTabbableRow, getCurrentColumn, setCurrentColumn } }, ...asChildRowOfTable },
    asParentRowOfCells: { linearNavigationParameters, managedChildrenReturn, rovingTabIndexParameters, typeaheadNavigationParameters, ...asParentRowOfCells },
    ..._void1
}: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement> {
    const { managedChildrenReturn: { getChildren } } = asChildRowOfTable;
    const focusSelf = useStableCallback((e: RowElement) => {
        let index = (getCurrentColumn() ?? 0);
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
            debugger;
            (e as Element as HTMLElement)?.focus?.();
        }
    }, []);

    const {
        rovingTabIndexChildReturn,
        hasCurrentFocusParameters,
        ..._void2
    } = useListNavigationChild<RowElement>(asChildRowOfTable);
    const getIndex = useStableGetter(asChildRowOfTable.managedChildParameters.index);
    const {
        linearNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex },
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        ..._void3
    } = useListNavigation<RowElement, CellElement, CM>({
        linearNavigationParameters: {
            navigationDirection: "horizontal",
            ...linearNavigationParameters
        },
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    })

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);

    return {
        asChildRowOfTable: {
            hasCurrentFocusParameters,
            managedChildParameters: { focusSelf, setTabbableColumnIndex: setTabbableIndex },
            rovingTabIndexChildReturn
        },
        asParentRowOfCells: {
            linearNavigationReturn,
            managedChildrenParameters,
            rovingTabIndexChildParameters,
            rovingTabIndexReturn: useStableObject({ getTabbableIndex, setTabbableIndex }),
            typeaheadNavigationChildParameters,
            typeaheadNavigationReturn,
            gridNavigationCellParameters: useStableObject({
                _private: useStableObject({
                    setTabbableRow: useCallback((fromUserInteraction: boolean) => { setTabbableRow(getIndex(), fromUserInteraction) }, []),
                    getCurrentColumn,
                    setCurrentColumn,
                    setTabbableColumn: setTabbableIndex
                })
            })
        }
    }

}


export function useGridNavigationCell<CellElement extends Element>({
    managedChildParameters: { hidden, index, ...void3 },
    rovingTabIndexChildParameters,
    rovingTabIndexReturn,
    typeaheadNavigationChildParameters,
    gridNavigationCellParameters: {
        _private: {
            setTabbableRow,
            getCurrentColumn,
            setCurrentColumn,
            setTabbableColumn
        },
        colSpan
    },
    ..._void1
}: UseGridNavigationCellParameters<CellElement>): UseGridNavigationCellReturnType<CellElement> {
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        rovingTabIndexChildReturn,
        ...void2
    } = useListNavigationChild<CellElement>({
        managedChildParameters: { hidden, index },
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
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
                    //if (index == 0)
                    debugger;
                    setTabbableRow(false);
                    setCurrentColumn(index);
                    setTabbableColumn(prev => {
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