import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../preact-extensions/use-passive-state.js";
import { OmitStrong } from "../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";
export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> {
    setTabbableColumnIndex: SetTabbableIndex;
}
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}
export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters"> {
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>["linearNavigationParameters"], "navigationDirection">;
    gridNavigationParameters: {
        onTabbableColumnChange: OnPassiveStateChange<number | null, Event> | null;
    };
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement, RM>, "context"> {
    context: OmitStrong<UseGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM>, "managedChildContext">;
}
export interface UseGridNavigationRowContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>> extends UseListNavigationContext<ParentOrRowElement, RowElement, RM> {
    gridNavigationRowContext: {
        _r?: RowElement;
        _c?: CellElement;
        setTabbableRow: SetTabbableIndex;
        getCurrentTabbableColumn: () => (number | null);
        setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
    };
}
export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends OmitStrong<UseListNavigationChildParameters<RowElement, RM>, "context">, OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters" | "rovingTabIndexParameters"> {
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<CM>["managedChildrenReturn"], "getChildren">;
    context: OmitStrong<UseGridNavigationRowContext<Element, RowElement, CellElement, RM>, "managedChildContext">;
    rovingTabIndexParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["rovingTabIndexParameters"], "untabbable">;
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["linearNavigationParameters"], "navigationDirection">;
}
export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<RowElement>, OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>, "context" | "propsStable" | "rovingTabIndexReturn"> {
    gridNavigationRowParameters: Pick<GridChildRowInfo<RowElement, CellElement>, "focusSelf" | "setTabbableColumnIndex">;
    rovingTabIndexReturn: OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>["rovingTabIndexReturn"], "focusSelf">;
    context: OmitStrong<UseGridNavigationCellContext<RowElement, CellElement, CM>, "managedChildContext">;
}
export interface UseGridNavigationCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildParameters<CellElement, CM> {
    gridNavigationCellParameters: {
        colSpan: number;
    };
    context: OmitStrong<UseGridNavigationCellContext<RowElement, CellElement, CM>, "managedChildContext">;
}
export interface UseGridNavigationCellContext<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationContext<RowElement, CellElement, CM> {
    gridNavigationCellContext: {
        _r?: RowElement;
        _c?: CellElement;
        getRowIndex: () => number;
        setTabbableRow: SetTabbableIndex;
        getCurrentTabbableColumn: () => (number | null);
        setCurrentTabbableColumn: PassiveStateUpdater<number | null, Event>;
        setTabbableCell: SetTabbableIndex;
    };
}
export interface UseGridNavigationCellReturnType<CellElement extends Element> extends UseListNavigationChildReturnType<CellElement> {
}
export declare function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, rovingTabIndexParameters: { onTabbableIndexChange, ...rovingTabIndexParameters }, managedChildrenReturn, typeaheadNavigationParameters, ..._void2 }: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN, gridNavigationRowContext: { setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn } }, linearNavigationParameters, rovingTabIndexParameters: { ...rovingTabIndexParameters }, info: managedChildParameters, managedChildrenReturn, refElementReturn, rovingTabIndexChildParameters, textContentParameters, typeaheadNavigationParameters, ..._void1 }: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement, CM>;
export declare function useGridNavigationCell<CellElement extends Element, CM extends GridChildCellInfo<CellElement>>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn, setTabbableCell }, rovingTabIndexContext, typeaheadNavigationContext }, rovingTabIndexChildParameters, info: managedChildParameters, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan }, ..._void1 }: UseGridNavigationCellParameters<any, CellElement, CM>): UseGridNavigationCellReturnType<CellElement>;
//# sourceMappingURL=use-grid-navigation-partial.d.ts.map