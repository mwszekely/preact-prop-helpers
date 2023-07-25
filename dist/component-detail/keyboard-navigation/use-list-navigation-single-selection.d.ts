import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, ExtendMerge, OmitStrong } from "../../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters as UseSingleSelectionChildInfoParameterKeys, UseSingleSelectionChildInfoKeysReturnType as UseSingleSelectionChildInfoReturnKeys, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSingleSelectionChildInfo<TabbableChildElement> {
}
export interface UseListNavigationSingleSelectionChildContext extends UseListNavigationContext, UseSingleSelectionContext {
}
export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn">> {
}
export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationReturnType<ParentOrChildElement, ChildElement, M>, UseSingleSelectionReturnType<ChildElement>> {
    context: UseListNavigationSingleSelectionChildContext;
}
export type UseListNavigationSingleSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSingleSelectionChildInfoParameterKeys;
export type UseListNavigationSingleSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSingleSelectionChildInfoReturnKeys;
export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends UseGenericChildParameters<UseListNavigationSingleSelectionChildContext, Pick<M, UseListNavigationSingleSelectionChildInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<ChildElement, M>, "context" | "info">, OmitStrong<UseSingleSelectionChildParameters<ChildElement>, "context" | "info"> {
}
export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement, M>, UseSingleSelectionChildReturnType<ChildElement>>, "props"> {
    propsTabbable: ElementProps<any>;
    propsChild: ElementProps<any>;
}
export declare function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, ...void3 }: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, M>;
export declare function useListNavigationSingleSelectionChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({ info: { index, untabbable, unselectable, ...void2 }, context, refElementReturn, textContentParameters, ...void1 }: UseListNavigationSingleSelectionChildParameters<ChildElement, M>): UseListNavigationSingleSelectionChildReturnType<ChildElement, M>;
//# sourceMappingURL=use-list-navigation-single-selection.d.ts.map