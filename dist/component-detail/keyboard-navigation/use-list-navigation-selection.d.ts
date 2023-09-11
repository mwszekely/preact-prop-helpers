import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, ExtendMerge, OmitStrong, TargetedOmit } from "../../util/types.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysParameters, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType } from "../use-selection.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
export interface UseListNavigationSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSelectionChildInfo<TabbableChildElement> {
}
export interface UseListNavigationSelectionChildContext extends UseListNavigationContext, UseSelectionContext {
}
export interface UseListNavigationSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexParameters">, TargetedOmit<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex">, OmitStrong<UseSelectionParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn"> {
}
export interface UseListNavigationSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends OmitStrong<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, "props">, OmitStrong<UseSelectionReturnType<ParentOrChildElement, ChildElement>, "propsStable"> {
    context: UseListNavigationSelectionChildContext;
    props: ElementProps<ParentOrChildElement>;
}
export type UseListNavigationSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSelectionChildInfoKeysParameters;
export type UseListNavigationSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
export interface UseListNavigationSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends UseGenericChildParameters<UseListNavigationSelectionChildContext, Pick<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<ChildElement>, "context" | "info">, OmitStrong<UseSelectionChildParameters<ChildElement, M>, "context" | "info"> {
}
export interface UseListNavigationSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement>, UseSelectionChildReturnType<ChildElement, M>>, "props"> {
    propsTabbable: ElementProps<any>;
    propsChild: ElementProps<any>;
}
/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
export declare const useListNavigationSelection: <ParentOrChildElement extends Element, ChildElement extends Element>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void3 }: UseListNavigationSelectionParameters<ParentOrChildElement, ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>) => UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement>;
/**
 * @compositeParams
 */
export declare const useListNavigationSelectionChild: <ChildElement extends Element>({ info: { index, untabbable, ...void2 }, context, refElementReturn, textContentParameters, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseListNavigationSelectionChildParameters<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>) => UseListNavigationSelectionChildReturnType<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>;
//# sourceMappingURL=use-list-navigation-selection.d.ts.map