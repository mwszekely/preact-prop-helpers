import { UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { OmitStrong } from "../../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SetTabbableIndex } from "./use-roving-tabindex.js";
export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> {
}
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}
export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters"> {
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>["linearNavigationParameters"], "arrowKeyDirection">;
    gridNavigationParameters: {
        onTabbableColumnChange: OnPassiveStateChange<TabbableColumnInfo, Event> | null;
    };
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement, RM>, "context"> {
    context: UseGridNavigationRowContext;
}
export interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: {
        setTabbableRow: SetTabbableIndex;
        getTabbableColumn: () => TabbableColumnInfo;
        setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
    };
}
export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends OmitStrong<UseListNavigationChildParameters<RowElement, RM>, "context">, OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters"> {
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<CM>["managedChildrenReturn"], "getChildren">;
    context: UseGridNavigationRowContext;
    linearNavigationParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["linearNavigationParameters"], "onNavigateLinear" | "arrowKeyDirection">;
    /** (These are the parameters for the row controlling the cells, not any other combination of parent/child/row/cell) */
    rovingTabIndexParameters: OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>["rovingTabIndexParameters"], "focusSelfParent" | "untabbableBehavior">;
}
export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<RowElement, RM>, OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>, "propsStableParentOrChild" | "propsParent" | "context" | "rovingTabIndexReturn"> {
    gridNavigationRowParameters: Pick<GridChildRowInfo<RowElement, CellElement>, "focusSelf">;
    rovingTabIndexReturn: OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>["rovingTabIndexReturn"], "focusSelf">;
    context: UseGridNavigationCellContext;
}
export interface UseGridNavigationCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildParameters<CellElement, CM> {
    gridNavigationCellParameters: {
        colSpan: number;
    };
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
        setTabbableRow: SetTabbableIndex;
        getTabbableColumn: () => TabbableColumnInfo;
        setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
        setTabbableCell: SetTabbableIndex;
    };
}
export interface UseGridNavigationCellReturnType<CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<CellElement, CM> {
}
export declare function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, rovingTabIndexParameters: { onTabbableIndexChange, untabbable, ...rovingTabIndexParameters }, managedChildrenReturn, typeaheadNavigationParameters, refElementReturn, ...void2 }: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN, gridNavigationRowContext: { setTabbableRow, getTabbableColumn, setTabbableColumn } }, linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, info: managedChildParameters, managedChildrenReturn, refElementReturn, textContentParameters, typeaheadNavigationParameters, ...void1 }: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
export declare function useGridNavigationCell<CellElement extends Element, CM extends GridChildCellInfo<CellElement>>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn, setTabbableColumn, setTabbableCell }, rovingTabIndexContext, typeaheadNavigationContext }, info, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan }, ...void1 }: UseGridNavigationCellParameters<any, CellElement, CM>): UseGridNavigationCellReturnType<CellElement, CM>;
export {};
//# sourceMappingURL=use-grid-navigation-partial.d.ts.map