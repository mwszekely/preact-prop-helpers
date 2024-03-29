import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { OmitStrong } from "../../util/types.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "../use-sortable-children.js";
import { UseListNavigationSelectionChildContext, UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildInfoKeysReturnType, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType } from "./use-list-navigation-selection.js";
export type UseListNavigationSelectionSortableChildInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;
export type UseListNavigationSelectionSortableChildInfoKeysReturnType = UseListNavigationSelectionChildInfoKeysReturnType;
export type UseListNavigationSelectionSortableChildContext = UseListNavigationSelectionChildContext;
export interface UseListNavigationSelectionSortableChildInfo<TabbableChildElement extends Element> extends UseListNavigationSelectionChildInfo<TabbableChildElement>, UseSortableChildInfo {
}
export interface UseListNavigationSelectionSortableParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>> extends OmitStrong<UseListNavigationSelectionParameters<ParentOrChildElement, ChildElement, M>, "rearrangeableChildrenReturn" | "managedChildrenReturn">, UseSortableChildrenParameters<M> {
}
export interface UseListNavigationSelectionSortableReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>> extends UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement>, UseSortableChildrenReturnType<M> {
}
export interface UseListNavigationSelectionSortableChildParameters<ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>> extends UseGenericChildParameters<UseListNavigationSelectionSortableChildContext, Pick<UseListNavigationSelectionSortableChildInfo<ChildElement>, UseListNavigationSelectionSortableChildInfoKeysParameters>>, UseListNavigationSelectionChildParameters<ChildElement, M> {
}
export interface UseListNavigationSelectionSortableChildReturnType<ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>> extends UseListNavigationSelectionChildReturnType<ChildElement, M> {
}
/**
 * Combines {@link useListNavigation}, {@link useSelection}, and {@link useSortableChildren}.
 *
 * @remarks This is a separate hook because {@link useSortableChildren} imposes unique requirements to the structure of your `children`.
 *
 * @hasChild {@link useListNavigationSelectionSortableChild}
 *
 * @compositeParams
 */
export declare const useListNavigationSelectionSortable: <ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionSortableChildInfo<ChildElement>>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, rearrangeableChildrenParameters, sortableChildrenParameters, refElementReturn, paginatedChildrenParameters, childrenHaveFocusReturn, ...void3 }: UseListNavigationSelectionSortableParameters<ParentOrChildElement, ChildElement, M>) => UseListNavigationSelectionSortableReturnType<ParentOrChildElement, ChildElement, M>;
/**
 * @compositeParams
 */
export declare const useListNavigationSelectionSortableChild: <ChildElement extends Element>({ info, context, refElementReturn, textContentParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseListNavigationSelectionSortableChildParameters<ChildElement, UseListNavigationSelectionSortableChildInfo<ChildElement>>) => UseListNavigationSelectionSortableChildReturnType<ChildElement, UseListNavigationSelectionSortableChildInfo<ChildElement>>;
//# sourceMappingURL=use-list-navigation-selection-sortable.d.ts.map