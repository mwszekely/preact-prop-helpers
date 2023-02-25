import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../preact-extensions/use-passive-state.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";
type OmitStrong<T, K extends keyof T> = Omit<T, K>;
export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> {
    setTabbableColumnIndex: SetTabbableIndex;
}
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}
export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters"> {
    gridNavigationParameters: {
        onTabbableColumnChange: OnPassiveStateChange<number | null, Event> | null;
    };
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>["linearNavigationParameters"], "navigationDirection">;
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationReturnType<ParentOrRowElement, RowElement> {
    gridNavigationRowContext: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>["rowAsChildOfGridParameters"]["gridNavigationRowContext"];
}
export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, _RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> {
    rowAsChildOfGridParameters: UseListNavigationChildParameters<RowElement> & {
        managedChildrenReturn: Pick<UseManagedChildrenReturnType<CM>["managedChildrenReturn"], "getChildren">;
        gridNavigationRowContext: {
            _r?: RowElement;
            _c?: CellElement;
            gridNavigationRowParameters: {
                setTabbableRow: SetTabbableIndex;
                getCurrentTabbableColumn: () => (number | null);
                setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
            };
        };
    };
    rowAsParentOfCellsParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters" | "rovingTabIndexParameters"> & {
        rovingTabIndexParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["rovingTabIndexParameters"], "untabbable">;
        linearNavigationParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["linearNavigationParameters"], "navigationDirection">;
    };
}
export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> {
    rowAsChildOfGridReturn: UseListNavigationChildReturnType<RowElement> & {
        gridNavigationRowParameters: Pick<GridChildRowInfo<RowElement, CellElement>, "focusSelf" | "setTabbableColumnIndex">;
    };
    rowAsParentOfCellsReturn: OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "rovingTabIndexReturn"> & {
        rovingTabIndexReturn: OmitStrong<UseListNavigationReturnType<RowElement, CellElement>["rovingTabIndexReturn"], "focusSelf">;
        gridNavigationCellContext: UseGridNavigationCellParameters<RowElement, CellElement>["gridNavigationCellContext"];
    };
}
export interface UseGridNavigationCellParameters<_RowElement extends Element, CellElement extends Element> extends UseListNavigationChildParameters<CellElement> {
    gridNavigationCellParameters: {
        colSpan: number;
    };
    gridNavigationCellContext: {
        _c?: CellElement;
        gridNavigationCellParameters: {
            getRowIndex: () => number;
            setTabbableRow: SetTabbableIndex;
            getCurrentTabbableColumn: () => (number | null);
            setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
            setTabbableCell: SetTabbableIndex;
        };
    };
}
export interface UseGridNavigationCellReturnType<CellElement extends Element> extends UseListNavigationChildReturnType<CellElement> {
}
export declare function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, rovingTabIndexParameters: { onTabbableIndexChange, ...rovingTabIndexParameters }, managedChildrenReturn, typeaheadNavigationParameters, ..._void2 }: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ rowAsChildOfGridParameters: { gridNavigationRowContext: { gridNavigationRowParameters: { setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn } }, ...asChildRowOfTable }, rowAsParentOfCellsParameters: { linearNavigationParameters, rovingTabIndexParameters: { ...rovingTabIndexParameters }, ...asParentRowOfCellsP }, ..._void1 }: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement>;
export declare function useGridNavigationCell<CellElement extends Element>({ rovingTabIndexChildContext, typeaheadNavigationChildContext, rovingTabIndexChildParameters, managedChildParameters, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan }, gridNavigationCellContext: { gridNavigationCellParameters: { getRowIndex, setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn, setTabbableCell } }, ..._void1 }: UseGridNavigationCellParameters<any, CellElement>): UseGridNavigationCellReturnType<CellElement>;
export {};
//# sourceMappingURL=use-grid-navigation-partial.d.ts.map