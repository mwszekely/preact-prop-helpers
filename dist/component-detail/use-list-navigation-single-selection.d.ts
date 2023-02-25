import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SelectableChildInfo, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
type OmitStrong<T, K extends keyof T> = Omit<T, K>;
export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, SelectableChildInfo<TabbableChildElement> {
}
export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ChildElement>, "rovingTabIndexReturn"> {
    managedChildrenReturn: UseListNavigationParameters<ParentOrChildElement, ChildElement, M>["managedChildrenReturn"] & UseSingleSelectionParameters<ChildElement>["managedChildrenReturn"];
}
export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationReturnType<ParentOrChildElement, ChildElement>, UseSingleSelectionReturnType<ChildElement> {
}
export declare function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, ..._void3 }: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement>;
export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element> extends UseListNavigationChildParameters<ChildElement>, UseSingleSelectionChildParameters<ChildElement> {
    managedChildParameters: UseListNavigationChildParameters<ChildElement>["managedChildParameters"] & UseSingleSelectionChildParameters<ChildElement>["managedChildParameters"];
}
export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element> extends UseListNavigationChildReturnType<ChildElement>, UseSingleSelectionChildReturnType<ChildElement> {
    pressParameters: UseListNavigationChildReturnType<ChildElement>["pressParameters"] & UseSingleSelectionChildReturnType<ChildElement>["pressParameters"];
}
export declare function useListNavigationSingleSelectionChild<ChildElement extends Element>({ managedChildParameters: { index, ..._void5 }, rovingTabIndexChildParameters: { hidden, ...void7 }, singleSelectionChildParameters, singleSelectionContext, rovingTabIndexChildContext, typeaheadNavigationChildContext, refElementReturn, textContentParameters, ..._void1 }: UseListNavigationSingleSelectionChildParameters<ChildElement>): UseListNavigationSingleSelectionChildReturnType<ChildElement>;
export {};
//# sourceMappingURL=use-list-navigation-single-selection.d.ts.map