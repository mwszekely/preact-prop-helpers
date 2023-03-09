import { OmitTargeted } from "../util/types.js";
import { UseListNavigationSingleSelectionChildInfo, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnType, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnType } from "./use-list-navigation-single-selection.js";
import { UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenReturnType } from "./use-sortable-children.js";
export interface UseListNavigationSingleSelectionSortableChildInfo<TabbableChildElement extends Element> extends UseListNavigationSingleSelectionChildInfo<TabbableChildElement>, UseSortableChildInfo {
}
export interface UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends OmitTargeted<UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "linearNavigationParameters", "indexDemangler" | "indexMangler">, UseSortableChildrenParameters<M> {
}
export interface UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement>, UseSortableChildrenReturnType<M> {
}
export interface UseListNavigationSingleSelectionSortableChildParameters<ChildElement extends Element> extends UseListNavigationSingleSelectionChildParameters<ChildElement> {
}
export interface UseListNavigationSingleSelectionSortableChildReturnType<ChildElement extends Element> extends UseListNavigationSingleSelectionChildReturnType<ChildElement> {
}
export declare function useListNavigationSingleSelectionSortable<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, rearrangeableChildrenParameters, sortableChildrenParameters, ...void3 }: UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement, ChildElement, M>;
export declare function useListNavigationSingleSelectionSortableChild<ChildElement extends Element>({ managedChildParameters: { index, ..._void5 }, rovingTabIndexChildParameters, singleSelectionChildParameters, context, refElementReturn, textContentParameters, ..._void1 }: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>): UseListNavigationSingleSelectionSortableChildReturnType<ChildElement>;
//# sourceMappingURL=use-list-navigation-single-selection-sortable.d.ts.map