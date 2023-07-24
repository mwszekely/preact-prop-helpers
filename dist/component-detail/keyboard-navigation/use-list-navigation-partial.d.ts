import { ElementProps, ExtendMerge, OmitStrong } from "../../util/types.js";
import { UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation.js";
import { RovingTabIndexChildContext, UseRovingTabIndexChildInfo, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
import { UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-typeahead-navigation.js";
export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement> {
}
export interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseTypeaheadNavigationParameters<ChildElement, M>, "rovingTabIndexReturn">, OmitStrong<UseLinearNavigationParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn"> {
}
export interface UseListNavigationReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends OmitStrong<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement, M>, "props">, OmitStrong<UseTypeaheadNavigationReturnType<ParentOrChildElement>, "propsStable">, OmitStrong<UseLinearNavigationReturnType<ParentOrChildElement>, "propsStable"> {
    propsStableParentOrChild: ElementProps<ParentOrChildElement>;
    propsParent: ElementProps<ParentOrChildElement>;
    context: UseListNavigationContext;
}
export interface UseListNavigationChildParameters<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>, InfoParameterKeys extends keyof M> extends ExtendMerge<UseRovingTabIndexChildParameters<ChildElement, M, InfoParameterKeys>, UseTypeaheadNavigationChildParameters<ChildElement, M>> {
    context: UseListNavigationContext;
}
export interface UseListNavigationContext extends RovingTabIndexChildContext, UseTypeaheadNavigationContext {
}
export interface UseListNavigationChildReturnType<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexChildReturnType<ChildElement, M>, UseTypeaheadNavigationChildReturnType {
}
/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 *
 * @remarks In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 *
 * @compositeParams
 *
 * @hasChild {@link useListNavigationChild}
 */
export declare function useListNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, ...void1 }: UseListNavigationParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationReturnType<ParentOrChildElement, ChildElement, M>;
/**
 * @compositeParams
 */
export declare function useListNavigationChild<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({ info, context, refElementReturn, textContentParameters, ...void2 }: UseListNavigationChildParameters<ChildElement, M, never>): UseListNavigationChildReturnType<ChildElement, M>;
//# sourceMappingURL=use-list-navigation-partial.d.ts.map