import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, OmitStrong } from "../../util/types.js";
import { UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation.js";
import { RovingTabIndexChildContext, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
import { UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildInfoKeysParameters, UseTypeaheadNavigationChildInfoKeysReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-typeahead-navigation.js";
export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement>, UseTypeaheadNavigationChildInfo<TabbableChildElement> {
}
export interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseTypeaheadNavigationParameters<ChildElement, M>, "rovingTabIndexReturn">, OmitStrong<UseLinearNavigationParameters<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn"> {
}
export interface UseListNavigationReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends OmitStrong<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement, M>, "props">, OmitStrong<UseTypeaheadNavigationReturnType<ParentOrChildElement>, "propsStable">, OmitStrong<UseLinearNavigationReturnType<ParentOrChildElement>, "propsStable"> {
    propsStableParentOrChild: ElementProps<ParentOrChildElement>;
    propsParent: ElementProps<ParentOrChildElement>;
    context: UseListNavigationContext;
}
export type UseListNavigationChildInfoKeysParameters = UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters;
export type UseListNavigationChildInfoKeysReturnType = UseRovingTabIndexChildInfoKeysReturnType | UseTypeaheadNavigationChildInfoKeysReturnType;
export interface UseListNavigationChildParameters<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseGenericChildParameters<UseListNavigationContext, Pick<M, UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters>>, OmitStrong<UseRovingTabIndexChildParameters<ChildElement, M>, "info" | "context">, OmitStrong<UseTypeaheadNavigationChildParameters<ChildElement, M>, "info" | "context"> {
}
export interface UseListNavigationContext extends RovingTabIndexChildContext, UseTypeaheadNavigationContext {
}
export interface UseListNavigationChildReturnType<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexChildReturnType<ChildElement, M>, UseTypeaheadNavigationChildReturnType {
    info: Pick<M, UseListNavigationChildInfoKeysReturnType>;
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
export declare function useListNavigationChild<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({ info: { index, untabbable, ...void1 }, context, refElementReturn, textContentParameters, ...void2 }: UseListNavigationChildParameters<ChildElement, M>): UseListNavigationChildReturnType<ChildElement, M>;
//# sourceMappingURL=use-list-navigation-partial.d.ts.map