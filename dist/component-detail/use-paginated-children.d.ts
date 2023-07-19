import { UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { UseManagedChildrenParameters, UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { TargetedPick } from "../util/lib.js";
import { ElementProps, Nullable } from "../util/types.js";
import { UseLinearNavigationParameters } from "./keyboard-navigation/use-linear-navigation.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./keyboard-navigation/use-roving-tabindex.js";
export interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement> {
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}
export interface UsePaginatedChildrenParametersSelf {
    paginationMin: Nullable<number>;
    paginationMax: Nullable<number>;
}
export interface UsePaginatedChildrenParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UsePaginatedChildrenInfo<TabbableChildElement>> extends Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">, TargetedPick<UseLinearNavigationParameters<any, TabbableChildElement, M>, "linearNavigationParameters", "indexDemangler">, TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElement, M>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex">, TargetedPick<UseRefElementReturnType<ParentElement>, "refElementReturn", "getElement"> {
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
    refreshPagination: (min: Nullable<number>, max: Nullable<number>) => void;
    /**
     * **IMPORTANT**: This is only tracked when pagination is enabled.
     *
     * If pagination is not enabled, this is either `null` or some undefined previous number.
     */
    childCount: Nullable<number>;
}
export interface UsePaginatedChildrenReturnType extends TargetedPick<UseManagedChildrenParameters<any>, "managedChildrenParameters", "onChildrenCountChange"> {
    paginatedChildrenReturn: UsePaginatedChildrenReturnTypeSelf;
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
export declare function usePaginatedChildren<ParentElement extends Element, TabbableChildElement extends Element, M extends UsePaginatedChildrenInfo<TabbableChildElement>>({ managedChildrenReturn: { getChildren }, linearNavigationParameters: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, refElementReturn: { getElement } }: UsePaginatedChildrenParameters<ParentElement, TabbableChildElement, M>): UsePaginatedChildrenReturnType;
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
    paginatedVisible: boolean;
    parentIsPaginated: boolean;
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
export declare function usePaginatedChild<ChildElement extends Element>({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }: UsePaginatedChildParameters): UsePaginatedChildReturnType<ChildElement>;
//# sourceMappingURL=use-paginated-children.d.ts.map