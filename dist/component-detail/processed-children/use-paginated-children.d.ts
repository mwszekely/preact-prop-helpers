import { PropNames_ChildrenHaveFocusReturn_getAnyFocused, UseChildrenHaveFocusReturnType } from "../../observers/use-children-have-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, Nullable } from "../../util/types.js";
import { UseLinearNavigationParameters } from "../keyboard-navigation/use-linear-navigation.js";
import { PropNames_RovingTabIndexReturn_getTabbableIndex, PropNames_RovingTabIndexReturn_setTabbableIndex, UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "../keyboard-navigation/use-roving-tabindex.js";
import { PropNames_RearrangeableReturn_indexDemangler } from "./use-rearrangeable-children.js";
export declare const PropNames_PaginatedParameters_paginationMin = "PropNames.PaginatedParameters.paginationMin";
export declare const PropNames_PaginatedParameters_paginationMax = "PropNames.PaginatedParameters.paginationMax";
export declare const PropNames_PaginatedParameters_childCount = "PropNames.PaginatedParameters.childCount";
export declare const PropNames_PaginatedReturn_refreshPagination = "PropNames.PaginatedParameters.refreshPagination";
export declare const PropNames_PaginatedChildReturn_parentIsPaginated = "PropNames.PaginatedParameters.parentIsPaginated";
export declare const PropNames_PaginatedChildReturn_hideBecausePaginated = "PropNames.PaginatedParameters.hideBecausePaginated";
export interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}
export interface UsePaginatedChildrenParametersSelf {
    [PropNames_PaginatedParameters_paginationMin]: Nullable<number>;
    [PropNames_PaginatedParameters_paginationMax]: Nullable<number>;
    [PropNames_PaginatedParameters_childCount]: Nullable<number>;
}
export interface UsePaginatedChildrenParameters<TabbableChildElement extends Element> extends UsePaginatedChildrenParametersSelf, Pick<UseManagedChildrenReturnType<UsePaginatedChildrenInfo<TabbableChildElement>>, typeof PropNames_ManagedChildrenReturn_getChildren>, Pick<UseLinearNavigationParameters<any, TabbableChildElement>, typeof PropNames_RearrangeableReturn_indexDemangler>, Pick<UseChildrenHaveFocusReturnType<TabbableChildElement>, typeof PropNames_ChildrenHaveFocusReturn_getAnyFocused>, Pick<UseRovingTabIndexReturnType<any, TabbableChildElement>, typeof PropNames_RovingTabIndexReturn_getTabbableIndex | typeof PropNames_RovingTabIndexReturn_setTabbableIndex> {
}
export interface UsePaginatedChildContextSelf {
    parentIsPaginated: boolean;
    getDefaultPaginationVisible(i: number): boolean;
}
export interface UsePaginatedChildContext {
    paginatedChildContext: UsePaginatedChildContextSelf;
}
export interface UsePaginatedChildrenReturnTypeSelf {
    /**
     * If the values returned by `indexDemangler` change (e.g. when sorting), then this must be called to re-sync everything.
     *
     * @stable
     */
    [PropNames_PaginatedReturn_refreshPagination]: (min: Nullable<number>, max: Nullable<number>) => void;
}
export interface UsePaginatedChildrenReturnType extends UsePaginatedChildrenReturnTypeSelf {
    context: UsePaginatedChildContext;
}
/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 *
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 *
 * @compositeParams
 *
 * @hasChild {@link usePaginatedChild}
 */
export declare const usePaginatedChildren: <TabbableChildElement extends Element>({ [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_PaginatedParameters_childCount]: childCount, [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused, }: UsePaginatedChildrenParameters<TabbableChildElement>) => UsePaginatedChildrenReturnType;
export interface UsePaginatedChildParameters {
    info: {
        index: number;
    };
    context: UsePaginatedChildContext;
}
export interface UsePaginatedChildReturnType<ChildElement extends Element> extends UsePaginatedChildReturnTypeSelf {
    props: ElementProps<ChildElement>;
    info: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">;
}
export interface UsePaginatedChildReturnTypeSelf {
    /**
     * Whether this child is part of a paginated parent component.
     */
    [PropNames_PaginatedChildReturn_parentIsPaginated]: boolean;
    /**
     * Whether this child should hide itself because the parent is paginated and this child is outside of the current range.
     */
    [PropNames_PaginatedChildReturn_hideBecausePaginated]: boolean;
}
/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
export declare const usePaginatedChild: <ChildElement extends Element>({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }: UsePaginatedChildParameters) => UsePaginatedChildReturnType<ChildElement>;
//# sourceMappingURL=use-paginated-children.d.ts.map