import { $getAnyFocused, UseChildrenHaveFocusReturnType, $childrenHaveFocusReturn } from "../../observers/use-children-have-focus.js";
import { $index, $getChildren, UseManagedChildrenReturnType, $managedChildrenReturn } from "../../preact-extensions/use-managed-children.js";
import { TargetedPick } from "../../util/lib.js";
import { ElementProps, Nullable } from "../../util/types.js";
import { UseLinearNavigationParameters } from "../keyboard-navigation/use-linear-navigation.js";
import { $getTabbableIndex, $setTabbableIndex, UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType, $rovingTabIndexReturn } from "../keyboard-navigation/use-roving-tabindex.js";
import { $indexDemangler, $rearrangeableChildrenReturn } from "./use-rearrangeable-children.js";
export declare const $paginatedChildrenParameters: unique symbol;
export declare const $paginationMin: unique symbol;
export declare const $paginationMax: unique symbol;
export declare const $childCount: unique symbol;
export declare const $setPaginationVisible: unique symbol;
export declare const $setChildCountIfPaginated: unique symbol;
export declare const $parentIsPaginated: unique symbol;
export declare const $hideBecausePaginated: unique symbol;
export declare const $refreshPagination: unique symbol;
export declare const $paginatedChildReturn: unique symbol;
export declare const $paginatedChildContext: unique symbol;
export declare const $paginatedChildrenReturn: unique symbol;
export declare const $getDefaultPaginationVisible: unique symbol;
export interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, typeof $index> {
    [$setPaginationVisible](visible: boolean): void;
    [$setChildCountIfPaginated](count: number): void;
}
export interface UsePaginatedChildrenParametersSelf {
    [$paginationMin]: Nullable<number>;
    [$paginationMax]: Nullable<number>;
    [$childCount]: Nullable<number>;
}
export interface UsePaginatedChildrenParameters<TabbableChildElement extends Element> extends Pick<UseManagedChildrenReturnType<UsePaginatedChildrenInfo<TabbableChildElement>>, typeof $managedChildrenReturn>, TargetedPick<UseLinearNavigationParameters<any, TabbableChildElement>, typeof $rearrangeableChildrenReturn, typeof $indexDemangler>, TargetedPick<UseChildrenHaveFocusReturnType<TabbableChildElement>, typeof $childrenHaveFocusReturn, typeof $getAnyFocused>, TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElement>, typeof $rovingTabIndexReturn, typeof $getTabbableIndex | typeof $setTabbableIndex> {
    [$paginatedChildrenParameters]: UsePaginatedChildrenParametersSelf;
}
export interface UsePaginatedChildContextSelf {
    [$parentIsPaginated]: boolean;
    [$getDefaultPaginationVisible](i: number): boolean;
}
export interface UsePaginatedChildContext {
    [$paginatedChildContext]: UsePaginatedChildContextSelf;
}
export interface UsePaginatedChildrenReturnTypeSelf {
    /**
     * If the values returned by `indexDemangler` change (e.g. when sorting), then this must be called to re-sync everything.
     *
     * @stable
     */
    [$refreshPagination]: (min: Nullable<number>, max: Nullable<number>) => void;
}
export interface UsePaginatedChildrenReturnType {
    [$paginatedChildrenReturn]: UsePaginatedChildrenReturnTypeSelf;
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
export declare const usePaginatedChildren: <TabbableChildElement extends Element>({ [$managedChildrenReturn]: { [$getChildren]: getChildren }, [$rearrangeableChildrenReturn]: { [$indexDemangler]: indexDemangler }, [$paginatedChildrenParameters]: { [$paginationMax]: paginationMax, [$paginationMin]: paginationMin, [$childCount]: childCount }, [$rovingTabIndexReturn]: { [$getTabbableIndex]: getTabbableIndex, [$setTabbableIndex]: setTabbableIndex }, [$childrenHaveFocusReturn]: { [$getAnyFocused]: getAnyFocused } }: UsePaginatedChildrenParameters<TabbableChildElement>) => UsePaginatedChildrenReturnType;
export interface UsePaginatedChildParameters {
    info: {
        index: number;
    };
    context: UsePaginatedChildContext;
}
export interface UsePaginatedChildReturnType<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    [$paginatedChildReturn]: UsePaginatedChildReturnTypeSelf;
    info: Pick<UsePaginatedChildrenInfo<ChildElement>, typeof $setPaginationVisible | typeof $setChildCountIfPaginated>;
}
export interface UsePaginatedChildReturnTypeSelf {
    /**
     * Whether this child is part of a paginated parent component.
     */
    [$parentIsPaginated]: boolean;
    /**
     * Whether this child should hide itself because the parent is paginated and this child is outside of the current range.
     */
    [$hideBecausePaginated]: boolean;
}
/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
export declare const usePaginatedChild: <ChildElement extends Element>({ info: { index }, context: { [$paginatedChildContext]: { [$parentIsPaginated]: parentIsPaginated, [$getDefaultPaginationVisible]: getDefaultPaginationVisible } } }: UsePaginatedChildParameters) => UsePaginatedChildReturnType<ChildElement>;
//# sourceMappingURL=use-paginated-children.d.ts.map