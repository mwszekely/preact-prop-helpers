import { UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { OmitStrong, TargetedOmit, TargetedPick } from "../../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SetTabbableIndex, UseRovingTabIndexChildInfoKeysReturnType } from "./use-roving-tabindex.js";
export interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> {
}
export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}
export interface UseGridNavigationCellParamersSelf {
    colSpan: number;
}
export interface UseGridNavigationCellContextSelf {
    getRowIndex: () => number;
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
    setTabbableCell: SetTabbableIndex;
}
export interface UseGridNavigationParametersSelf {
    /**
     * TODO: This may be called even when there is no actual change in the numeric values
     */
    onTabbableColumnChange: OnPassiveStateChange<TabbableColumnInfo, Event> | null;
}
export interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
}
export interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters">, TargetedOmit<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters", "arrowKeyDirection"> {
    gridNavigationParameters: UseGridNavigationParametersSelf;
}
export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement, RM>, "context"> {
    context: UseGridNavigationRowContext;
}
export interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}
export interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends OmitStrong<UseListNavigationChildParameters<RowElement, RM>, "context">, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters", "disableHomeEndKeys" | "onNavigateLinear" | "arrowKeyDirection">, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "rovingTabIndexParameters", "focusSelfParent" | "untabbableBehavior">, OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters">, TargetedPick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn", "getChildren"> {
    context: UseGridNavigationRowContext;
}
export interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<RowElement, RM>, OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn" | "propsStableParentOrChild" | "propsParent" | "context">, TargetedOmit<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn", "focusSelf"> {
    context: UseGridNavigationCellContext;
    info: Pick<RM, UseRovingTabIndexChildInfoKeysReturnType | "focusSelf">;
}
export interface UseGridNavigationCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildParameters<CellElement, CM> {
    gridNavigationCellParameters: UseGridNavigationCellParamersSelf;
    context: UseGridNavigationCellContext;
}
export interface TabbableColumnInfo {
    /** Which cell in this row is actually tabbable? */
    actual: number | null;
    /** Which column was the last column the user navigated to? */
    ideal: number | null;
}
export interface UseGridNavigationCellContext extends UseListNavigationContext {
    gridNavigationCellContext: UseGridNavigationCellContextSelf;
}
export interface UseGridNavigationCellReturnType<CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<CellElement, CM> {
}
export declare function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, ...listNavigationParameters }: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;
export declare function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ info: managedChildParameters, textContentParameters, context: contextFromParent, linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, refElementReturn, ...void1 }: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;
export declare function useGridNavigationCell<CellElement extends Element, CM extends GridChildCellInfo<CellElement>>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }: UseGridNavigationCellParameters<any, CellElement, CM>): UseGridNavigationCellReturnType<CellElement, CM>;
//# sourceMappingURL=use-grid-navigation-partial.d.ts.map