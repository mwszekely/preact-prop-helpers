import { ExtendMerge, OmitStrong } from "../../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends ExtendMerge<UseListNavigationChildInfo<TabbableChildElement>, UseSingleSelectionChildInfo<TabbableChildElement>> {
}
export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn">> {
}
export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationReturnType<ParentOrChildElement, ChildElement, M>, UseSingleSelectionReturnType<ChildElement, M>> {
}
export interface UseListNavigationSingleSelectionChildContext extends UseListNavigationContext, UseSingleSelectionContext {
}
export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationChildParameters<ChildElement, M>, UseSingleSelectionChildParameters<ChildElement, M>> {
}
export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationChildReturnType<ChildElement, M>, UseSingleSelectionChildReturnType<ChildElement>> {
}
export declare function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, ...void3 }: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, M>;
export declare function useListNavigationSingleSelectionChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({ info, context, refElementReturn, textContentParameters, rovingTabIndexParameters, singleSelectionParameters, ...void1 }: UseListNavigationSingleSelectionChildParameters<ChildElement, M>): UseListNavigationSingleSelectionChildReturnType<ChildElement, M>;
//# sourceMappingURL=use-list-navigation-single-selection.d.ts.map