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
export interface UsePaginatedChildrenParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UsePaginatedChildrenInfo<TabbableChildElement>> extends Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn"> {
    linearNavigationParameters: Pick<UseLinearNavigationParameters<any, TabbableChildElement, M>["linearNavigationParameters"], "indexDemangler">;
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<any, TabbableChildElement, M>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">;
    refElementReturn: Pick<UseRefElementReturnType<ParentElement>["refElementReturn"], "getElement">;
    paginatedChildrenParameters: {
        paginationMin: Nullable<number>;
        paginationMax: Nullable<number>;
    };
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
export declare function usePaginatedChildren<ParentElement extends Element, TabbableChildElement extends Element, M extends UsePaginatedChildrenInfo<TabbableChildElement>>({ managedChildrenReturn: { getChildren }, linearNavigationParameters: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, refElementReturn: { getElement } }: UsePaginatedChildrenParameters<ParentElement, TabbableChildElement, M>): UsePaginatedChildrenReturnType;
export interface UsePaginatedChildParameters {
    info: {
        index: number;
    };
    context: UsePaginatedChildContext;
}
export interface UsePaginatedChildReturn<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    paginatedChildReturn: {
        paginatedVisible: boolean;
        parentIsPaginated: boolean;
        hideBecausePaginated: boolean;
    };
    info: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">;
}
export declare function usePaginatedChild<ChildElement extends Element>({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }: UsePaginatedChildParameters): UsePaginatedChildReturn<ChildElement>;
//# sourceMappingURL=use-paginated-children.d.ts.map