import { UseChildrenHaveFocusReturnType } from "../../observers/use-children-have-focus.js";
import { UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { TargetedPick } from "../../util/lib.js";
import { ElementProps, Nullable } from "../../util/types.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "../keyboard-navigation/use-roving-tabindex.js";
import { UseProcessedIndexManglerReturnType } from "./use-processed-index-mangler.js";
export interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}
export interface UsePaginatedChildrenParametersSelf {
    paginationMin: Nullable<number>;
    paginationMax: Nullable<number>;
    childCount: Nullable<number>;
}
export interface UsePaginatedChildrenParameters<TabbableChildElement extends Element> extends Pick<UseManagedChildrenReturnType<UsePaginatedChildrenInfo<TabbableChildElement>>, "managedChildrenReturn">, TargetedPick<UseChildrenHaveFocusReturnType<TabbableChildElement>, "childrenHaveFocusReturn", "getAnyFocused">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexDemangler" | "indexMangler">, TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElement>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex"> {
    paginatedChildrenParameters: UsePaginatedChildrenParametersSelf;
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
    refreshPagination: (min: Nullable<number>, max: Nullable<number>) => void;
}
export interface UsePaginatedChildrenReturnType {
    paginatedChildrenReturn: UsePaginatedChildrenReturnTypeSelf;
    context: UsePaginatedChildContext;
}
/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 *
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 *
 * @hasChild {@link usePaginatedChild}
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function usePaginatedChildren<TabbableChildElement extends Element>({ managedChildrenReturn: { getChildren }, paginatedChildrenParameters: { paginationMax, paginationMin, childCount }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, childrenHaveFocusReturn: { getAnyFocused }, processedIndexManglerReturn: { indexDemangler, indexMangler } }: UsePaginatedChildrenParameters<TabbableChildElement>): UsePaginatedChildrenReturnType;
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function usePaginatedChild<ChildElement extends Element>({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }: UsePaginatedChildParameters): UsePaginatedChildReturnType<ChildElement>;
//# sourceMappingURL=use-paginated-children.d.ts.map