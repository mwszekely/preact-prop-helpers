import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { OmitStrong } from "../../util/types.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "../use-sortable-children.js";
import { UseListNavigationSingleSelectionChildContext, UseListNavigationSingleSelectionChildInfo, UseListNavigationSingleSelectionChildInfoKeysParameters, UseListNavigationSingleSelectionChildInfoKeysReturnType, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnType, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnType } from "./use-list-navigation-single-selection.js";
export type UseListNavigationSingleSelectionSortableChildInfoKeysParameters = UseListNavigationSingleSelectionChildInfoKeysParameters;
export type UseListNavigationSingleSelectionSortableChildInfoKeysReturnType = UseListNavigationSingleSelectionChildInfoKeysReturnType;
export type UseListNavigationSingleSelectionSortableChildContext = UseListNavigationSingleSelectionChildContext;
export interface UseListNavigationSingleSelectionSortableChildInfo<TabbableChildElement extends Element> extends UseListNavigationSingleSelectionChildInfo<TabbableChildElement>, UseSortableChildInfo {
}
export interface UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends OmitStrong<UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "rearrangeableChildrenReturn" | "managedChildrenReturn">, UseSortableChildrenParameters<M> {
}
export interface UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement>, UseSortableChildrenReturnType<M> {
}
export interface UseListNavigationSingleSelectionSortableChildParameters<ChildElement extends Element> extends UseGenericChildParameters<UseListNavigationSingleSelectionSortableChildContext, Pick<UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, UseListNavigationSingleSelectionSortableChildInfoKeysParameters>>, UseListNavigationSingleSelectionChildParameters<ChildElement> {
}
export interface UseListNavigationSingleSelectionSortableChildReturnType<ChildElement extends Element> extends UseListNavigationSingleSelectionChildReturnType<ChildElement> {
}
/**
 * Combines {@link useListNavigation}, {@link useSingleSelection}, and {@link useSortableChildren}.
 *
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 *
 * @hasChild {@link useListNavigationSingleSelectionSortableChild}
 *
 * @compositeParams
 */
export declare function useListNavigationSingleSelectionSortable<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, rearrangeableChildrenParameters, sortableChildrenParameters, refElementReturn, paginatedChildrenParameters, ...void3 }: UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement, ChildElement, M>;
/**
 * @compositeParams
 */
export declare function useListNavigationSingleSelectionSortableChild<ChildElement extends Element>({ info, context, refElementReturn, textContentParameters, ...void1 }: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>): UseListNavigationSingleSelectionSortableChildReturnType<ChildElement>;
//# sourceMappingURL=use-list-navigation-single-selection-sortable.d.ts.map