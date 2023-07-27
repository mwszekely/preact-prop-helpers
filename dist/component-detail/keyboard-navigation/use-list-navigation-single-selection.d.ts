import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, ExtendMerge, OmitStrong } from "../../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSingleSelectionChildInfo<TabbableChildElement> {
}
export interface UseListNavigationSingleSelectionChildContext extends UseListNavigationContext, UseSingleSelectionContext {
}
export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn">> {
}
export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends ExtendMerge<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, UseSingleSelectionReturnType<ChildElement>> {
    context: UseListNavigationSingleSelectionChildContext;
}
export type UseListNavigationSingleSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSingleSelectionChildInfoKeysParameters;
export type UseListNavigationSingleSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSingleSelectionChildInfoKeysReturnType;
export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element> extends UseGenericChildParameters<UseListNavigationSingleSelectionChildContext, Pick<UseListNavigationSingleSelectionChildInfo<ChildElement>, UseListNavigationSingleSelectionChildInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<ChildElement>, "context" | "info">, OmitStrong<UseSingleSelectionChildParameters<ChildElement>, "context" | "info"> {
}
export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement>, UseSingleSelectionChildReturnType<ChildElement>>, "props"> {
    propsTabbable: ElementProps<any>;
    propsChild: ElementProps<any>;
}
/**
 * Combines {@link useListNavigation} and {@link useSingleSelection}.
 *
 * @remarks The single-selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSingleSelectionChild}
 *
 * @compositeParams
 */
export declare function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, ...void3 }: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, UseListNavigationSingleSelectionChildInfo<ChildElement>>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement>;
/**
 * @compositeParams
 */
export declare function useListNavigationSingleSelectionChild<ChildElement extends Element>({ info: { index, untabbable, unselectable, ...void2 }, context, refElementReturn, textContentParameters, ...void1 }: UseListNavigationSingleSelectionChildParameters<ChildElement>): UseListNavigationSingleSelectionChildReturnType<ChildElement>;
//# sourceMappingURL=use-list-navigation-single-selection.d.ts.map