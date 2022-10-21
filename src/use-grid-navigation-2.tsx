import { useState } from "./use-state";
import { assertEmptyObject, UseManagedChildParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useListNavigation, useListNavigationChild, UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationParameters, UseListNavigationReturnTypeInfo } from "./use-list-navigation";
import { useStableCallback } from "use-stable-callback";
import { UseRovingTabIndexChildInfo } from "use-roving-tabindex";
import { StateUpdater } from "preact/hooks";
import { useStableObject } from "use-stable-getter";

export interface GridChildRowInfo<RowElement extends Element> extends UseListNavigationChildInfo<RowElement> { }
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> { }

export interface UseGridNavigationParameters<RowElement extends Element, M extends GridChildRowInfo<RowElement>> extends UseListNavigationParameters<RowElement, M> { }
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends UseListNavigationReturnTypeInfo<ParentOrRowElement, RowElement> {
    gridNavigationRowParameters: UseGridNavigationRowParameters<RowElement, any, any, any>["asChildRowOfTable"]["gridNavigationRowParameters"]
}



export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>> {
    asChildRowOfTable: UseListNavigationChildParameters<RowElement> & {
        managedChildrenReturn: Pick<UseManagedChildrenReturnTypeInfo<CM>["managedChildrenReturn"], "getChildren">;
        gridNavigationRowParameters: {
            _private: { getCurrentColumn: () => (number | null), setCurrentColumn: StateUpdater<number | null> }
        }
    };
    asParentRowOfCells: UseListNavigationParameters<CellElement, CM>;

}

export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> {
    asChildRowOfTable: UseListNavigationChildReturnTypeInfo<RowElement> & {
        managedChildParameters: Pick<UseManagedChildParameters<UseRovingTabIndexChildInfo<RowElement>>["managedChildParameters"], "tabbable" | "getTabbable" | "setTabbable" | "focusSelf">;
    };
    asParentRowOfCells: UseListNavigationReturnTypeInfo<RowElement, CellElement>;
}








export interface UseGridNavigationCellParameters<CellElement extends Element> extends UseListNavigationChildParameters<CellElement> { }
export interface UseGridNavigationCellReturnType<CellElement extends Element> extends UseListNavigationChildReturnTypeInfo<CellElement> { }



export function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, M extends GridChildRowInfo<RowElement>>({
    linearNavigationParameters,
    managedChildrenReturn,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    ..._void2
}: UseGridNavigationParameters<RowElement, M>): UseGridNavigationReturnType<ParentOrRowElement, RowElement> {

    const { initiallyTabbedIndex } = rovingTabIndexParameters

    const [currentColumn, setCurrentColumn, getCurrentColumn] = useState<number | null>(initiallyTabbedIndex ?? 0);

    const {
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        managedChildrenParameters,
        typeaheadNavigationChildParameters,
        rovingTabIndexChildParameters,
        ...void1
    } = useListNavigation<ParentOrRowElement, RowElement, M>({
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(_void2);

    return {
        managedChildrenParameters,
        typeaheadNavigationChildParameters,
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        rovingTabIndexChildParameters,
        gridNavigationRowParameters: useStableObject({
            _private: useStableObject({
                getCurrentColumn,
                setCurrentColumn
            })
        })
    }
}

export function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement>, CM extends GridChildRowInfo<CellElement>>({

    asChildRowOfTable: { gridNavigationRowParameters: { _private: { getCurrentColumn, setCurrentColumn } }, ...asChildRowOfTable },
    asParentRowOfCells,
    ..._void1
}: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement> {
    const { managedChildrenReturn: { getChildren } } = asChildRowOfTable;
    const focusSelf = useStableCallback((e: RowElement) => {
        const index = (getCurrentColumn() ?? 0);
        const child = getChildren().getAt(index);
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
        managedChildParameters,
        rovingTabIndexChildReturn,
        hasCurrentFocusParameters,
        ..._void2
    } = useListNavigationChild<RowElement>(asChildRowOfTable);

    const {
        linearNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        ..._void3
    } = useListNavigation<RowElement, CellElement, CM>(asParentRowOfCells)

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);


    return {
        asChildRowOfTable: {
            hasCurrentFocusParameters,
            managedChildParameters: { focusSelf, ...managedChildParameters },
            rovingTabIndexChildReturn
        },
        asParentRowOfCells: {
            linearNavigationReturn,
            managedChildrenParameters,
            rovingTabIndexChildParameters,
            rovingTabIndexReturn,
            typeaheadNavigationChildParameters,
            typeaheadNavigationReturn
        },
    }
}


export function useGridNavigationCell<CellElement extends Element>({
    managedChildParameters: { hidden, index, ...void3 },
    rovingTabIndexChildParameters,
    rovingTabIndexReturn,
    typeaheadNavigationChildParameters,
    ..._void1
}: UseGridNavigationCellParameters<CellElement>): UseGridNavigationCellReturnType<CellElement> {
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        managedChildParameters,
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
                    if (index == 0)
                        debugger;

                    setCurrentColumn(index);
                    setTabbableIndex(index, false);
                }
            })
        },
        managedChildParameters,
        rovingTabIndexChildReturn
    }
}