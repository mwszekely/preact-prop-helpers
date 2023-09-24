import { UseChildrenHaveFocusReturnType } from "../../observers/use-children-have-focus.js";
import { UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, Nullable, PropNames } from "../../util/types.js";
import { UseLinearNavigationParameters } from "../keyboard-navigation/use-linear-navigation.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "../keyboard-navigation/use-roving-tabindex.js";
declare module "../../util/types.js" {
    interface PropNames {
        PaginatedParameters: typeof P1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        PaginatedReturn: typeof R1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        PaginatedChildParameters: typeof P2Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        PaginatedChildReturn: typeof R2Names;
    }
}
export declare const P1Names: {
    readonly paginationMin: "PropNames.PaginatedParameters.paginationMin";
    readonly paginationMax: "PropNames.PaginatedParameters.paginationMax";
    readonly childCount: "PropNames.PaginatedParameters.childCount";
};
export declare const R1Names: {
    readonly refreshPagination: "PropNames.PaginatedReturn.refreshPagination";
};
export declare const P2Names: {};
export declare const R2Names: {
    readonly parentIsPaginated: "PropNames.PaginatedChildReturn.parentIsPaginated";
    readonly hideBecausePaginated: "PropNames.PaginatedChildReturn.hideBecausePaginated";
};
export interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}
export interface UsePaginatedChildrenParametersSelf {
    [PropNames.PaginatedParameters.paginationMin]: Nullable<number>;
    [PropNames.PaginatedParameters.paginationMax]: Nullable<number>;
    [PropNames.PaginatedParameters.childCount]: Nullable<number>;
}
export interface UsePaginatedChildrenParameters<TabbableChildElement extends Element> extends UsePaginatedChildrenParametersSelf, Pick<UseManagedChildrenReturnType<UsePaginatedChildrenInfo<TabbableChildElement>>, typeof PropNames.ManagedChildrenReturn.getChildren>, Pick<UseLinearNavigationParameters<any, TabbableChildElement>, typeof PropNames.RearrangeableReturn.indexDemangler>, Pick<UseChildrenHaveFocusReturnType<TabbableChildElement>, typeof PropNames.ChildrenHaveFocusReturn.getAnyFocused>, Pick<UseRovingTabIndexReturnType<any, TabbableChildElement>, typeof PropNames.RovingTabIndexReturn.getTabbableIndex | typeof PropNames.RovingTabIndexReturn.setTabbableIndex> {
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
    [PropNames.PaginatedReturn.refreshPagination]: (min: Nullable<number>, max: Nullable<number>) => void;
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
export declare const usePaginatedChildren: <TabbableChildElement extends Element>({ [PropNames.ManagedChildrenReturn.getChildren]: getChildren, [PropNames.RearrangeableReturn.indexDemangler]: indexDemangler, [PropNames.PaginatedParameters.paginationMax]: paginationMax, [PropNames.PaginatedParameters.paginationMin]: paginationMin, [PropNames.PaginatedParameters.childCount]: childCount, [PropNames.RovingTabIndexReturn.getTabbableIndex]: getTabbableIndex, [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex, [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused, }: UsePaginatedChildrenParameters<TabbableChildElement>) => UsePaginatedChildrenReturnType;
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
    [PropNames.PaginatedChildReturn.parentIsPaginated]: boolean;
    /**
     * Whether this child should hide itself because the parent is paginated and this child is outside of the current range.
     */
    [PropNames.PaginatedChildReturn.hideBecausePaginated]: boolean;
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