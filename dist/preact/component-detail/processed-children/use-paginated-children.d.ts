import { UseChildrenHaveFocus } from "../../observers/use-children-have-focus.js";
import { UseManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { ElementProps } from "../../util/lib.js";
import { Nullable, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsPick, StandardDepsProps, StandardHook } from "../../util/types.js";
import { UseRovingTabIndex, UseRovingTabIndexChildInfo } from "../keyboard-navigation/use-roving-tabindex.js";
import { UseRearrangeableChildren } from "./use-rearrangeable-children.js";
export interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}
export interface UsePaginatedChildrenParametersSelf {
    paginationMin: Nullable<number>;
    paginationMax: Nullable<number>;
    childCount: Nullable<number>;
}
export interface UsePaginatedChildrenReturnTypeSelf {
    /**
     * If the values returned by `indexDemangler` change (e.g. when sorting), then this must be called to re-sync everything.
     *
     * @stable
     */
    refreshPagination: (min: Nullable<number>, max: Nullable<number>) => void;
}
export type UsePaginatedChildren<TabbableChildElement extends Element> = StandardHook<"paginatedChildren", UsePaginatedChildrenParametersSelf, [
    StandardDepsPick<"return", UseRearrangeableChildren<any>, "rearrangeableChildrenReturn", "pick", "indexDemangler">,
    StandardDepsPick<"return", UseManagedChildren<UsePaginatedChildrenInfo<TabbableChildElement>>, "managedChildrenReturn", "pick", "getChildren">,
    StandardDepsPick<"return", UseChildrenHaveFocus<TabbableChildElement>, "childrenHaveFocusReturn", "pick", "getAnyFocused">,
    StandardDepsPick<"return", UseRovingTabIndex<any, TabbableChildElement>, "rovingTabIndexReturn", "pick", "getTabbableIndex" | "setTabbableIndex">
], UsePaginatedChildrenReturnTypeSelf, [StandardDepsContext<UsePaginatedChildContext, "paginatedChildContext">]>;
export type UsePaginatedChild<TabbableChildElement extends Element> = StandardHook<"paginatedChild", never, [
    StandardDepsContext<UsePaginatedChildContext, "paginatedChildContext">,
    StandardDepsInfo<UsePaginatedChildrenInfo<TabbableChildElement>, "index">
], UsePaginatedChildReturnTypeSelf, [
    StandardDepsProps<TabbableChildElement>,
    StandardDepsInfo<UsePaginatedChildrenInfo<TabbableChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">
]>;
export interface UsePaginatedChildContextSelf {
    parentIsPaginated: boolean;
    getDefaultPaginationVisible(i: number): boolean;
}
export interface UsePaginatedChildContext {
    paginatedChildContext: UsePaginatedChildContextSelf;
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
export declare const usePaginatedChildren: <TabbableChildElement extends Element>({ managedChildrenReturn: { getChildren }, rearrangeableChildrenReturn: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin, childCount }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, childrenHaveFocusReturn: { getAnyFocused } }: {
    paginatedChildrenParameters: UsePaginatedChildrenParametersSelf;
} & StandardDepsPick<"return", UseRearrangeableChildren<any>, "rearrangeableChildrenReturn", "pick", "indexDemangler"> & StandardDepsPick<"return", UseManagedChildren<UsePaginatedChildrenInfo<TabbableChildElement>>, "managedChildrenReturn", "pick", "getChildren"> & StandardDepsPick<"return", UseChildrenHaveFocus<TabbableChildElement>, "childrenHaveFocusReturn", "pick", "getAnyFocused"> & StandardDepsPick<"return", UseRovingTabIndex<any, TabbableChildElement>, "rovingTabIndexReturn", "pick", "setTabbableIndex" | "getTabbableIndex">) => {
    paginatedChildrenReturn: UsePaginatedChildrenReturnTypeSelf;
} & StandardDepsContext<UsePaginatedChildContext, "paginatedChildContext">;
export interface UsePaginatedChildParameters {
    info: {
        index: number;
    };
    context: UsePaginatedChildContext;
}
export interface UsePaginatedChildReturnType<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    paginatedChildReturn: UsePaginatedChildReturnTypeSelf;
    info: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">;
}
export interface UsePaginatedChildReturnTypeSelf {
    /**
     * Whether this child is part of a paginated parent component.
     */
    parentIsPaginated: boolean;
    /**
     * Whether this child should hide itself because the parent is paginated and this child is outside of the current range.
     */
    hideBecausePaginated: boolean;
}
/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
export declare const usePaginatedChild: <ChildElement extends Element>({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }: {} & StandardDepsContext<UsePaginatedChildContext, "paginatedChildContext"> & StandardDepsInfo<UsePaginatedChildrenInfo<ChildElement>, "index">) => {
    paginatedChildReturn: UsePaginatedChildReturnTypeSelf;
} & StandardDepsProps<ChildElement> & StandardDepsInfo<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">;
//# sourceMappingURL=use-paginated-children.d.ts.map