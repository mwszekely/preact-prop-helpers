import { h } from "preact";
import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { UseLinearNavigationParameters } from "./use-linear-navigation.js";
import { UseRovingTabIndexChildInfo } from "./use-roving-tabindex.js";
export interface UsePaginatedChildrenInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    setParentIsPaginated(parentIsPaginated: boolean): void;
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}
export interface UsePaginatedChildrenParameters<E extends Element, M extends UsePaginatedChildrenInfo<E>> {
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    linearNavigationParameters: Pick<UseLinearNavigationParameters<any, E>["linearNavigationParameters"], "indexDemangler">;
    paginatedChildrenParameters: {
        paginationMin: number | null;
        paginationMax: number | null;
    };
}
export interface UsePaginatedChildContext {
    paginatedChildContext: {
        getDefaultIsPaginated(): boolean;
        getDefaultPaginationVisible(i: number): boolean;
    };
}
export interface UsePaginatedChildrenReturnType {
    managedChildrenParameters: {
        onChildCountChange: (count: number) => void;
    };
    paginatedChildrenReturn: {
        refreshPagination: (min: number | null, max: number | null) => void;
        /**
         * **IMPORTANT**: This is only tracked when pagination is enabled.
         *
         * If pagination is not enabled, this is either `null` or some undefined previous number.
         */
        childCount: number | null;
    };
    context: UsePaginatedChildContext;
}
export declare function usePaginatedChildren<E extends Element, M extends UsePaginatedChildrenInfo<E>>({ managedChildrenReturn: { getChildren }, linearNavigationParameters: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin } }: UsePaginatedChildrenParameters<E, M>): UsePaginatedChildrenReturnType;
export interface UsePaginatedChildParameters {
    managedChildParameters: {
        index: number;
    };
    context: UsePaginatedChildContext;
}
export interface UsePaginatedChildReturn<ChildElement extends Element> {
    props: h.JSX.HTMLAttributes<ChildElement>;
    paginatedChildReturn: {
        paginatedVisible: boolean;
        isPaginated: boolean;
        hideBecausePaginated: boolean;
    };
    managedChildParameters: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated" | "setParentIsPaginated">;
}
export declare function usePaginatedChild<ChildElement extends Element>({ managedChildParameters: { index }, context: { paginatedChildContext: { getDefaultPaginationVisible, getDefaultIsPaginated } } }: UsePaginatedChildParameters): UsePaginatedChildReturn<ChildElement>;
//# sourceMappingURL=use-paginated-children.d.ts.map