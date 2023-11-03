import { UseRefElement } from "../../dom-helpers/use-ref-element.js";
import { Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps, StandardHook } from "../../util/types.js";
import { UseLinearNavigation } from "./use-linear-navigation.js";
import { RovingTabIndexChildContext, UseRovingTabIndex, UseRovingTabIndexChild, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType } from "./use-roving-tabindex.js";
import { UseTypeaheadNavigation, UseTypeaheadNavigationChild, UseTypeaheadNavigationChildContext, UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildInfoKeysParameters, UseTypeaheadNavigationChildInfoKeysReturnType } from "./use-typeahead-navigation.js";
export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement>, UseTypeaheadNavigationChildInfo<TabbableChildElement> {
}
export type UseListNavigation<ParentOrChildElement extends Element, ChildElement extends Element> = StandardHook<"listNavigation", never, [
    StandardDepsPick<"params", UseRovingTabIndex<ParentOrChildElement, ChildElement>>,
    StandardDepsOmit<"params", UseTypeaheadNavigation<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn">,
    StandardDepsOmit<"params", UseLinearNavigation<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn">
], never, [
    StandardDepsPick<"return", UseRovingTabIndex<ParentOrChildElement, ChildElement>>,
    StandardDepsPick<"return", UseTypeaheadNavigation<ParentOrChildElement, ChildElement>>,
    StandardDepsPick<"return", UseLinearNavigation<ParentOrChildElement, ChildElement>>,
    StandardDepsContext<UseListNavigationChildContext>,
    StandardDepsProps<ParentOrChildElement>
]>;
export type UseListNavigationChild<ChildElement extends Element> = StandardHook<"listNavigationChild", never, [
    StandardDepsInfo<UseListNavigationChildInfo<ChildElement>, UseListNavigationChildInfoKeysParameters>,
    StandardDepsContext<UseListNavigationChildContext>,
    StandardDepsPick<"return", UseRefElement<ChildElement>, "refElementReturn", "pick", "getElement">
], never, [
    StandardDepsInfo<UseListNavigationChildInfo<ChildElement>, UseListNavigationChildInfoKeysReturnType>,
    StandardDepsProps<ChildElement>,
    StandardDepsPick<"return", UseTypeaheadNavigationChild<ChildElement>>,
    StandardDepsPick<"return", UseRovingTabIndexChild<ChildElement>>
]>;
/** {@link useListNavigationChild} requires the same `info` that {@link useRovingTabIndexChild} and {@link useTypeaheadNavigationChild} do (there is no `useLinearNavigationChild`) */
export type UseListNavigationChildInfoKeysParameters = UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters;
export type UseListNavigationChildInfoKeysReturnType = UseRovingTabIndexChildInfoKeysReturnType | UseTypeaheadNavigationChildInfoKeysReturnType;
export interface UseListNavigationChildContext extends RovingTabIndexChildContext, UseTypeaheadNavigationChildContext {
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
export declare const useListNavigation: <ParentElement extends Element, ChildElement extends Element>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, ...void1 }: {} & StandardDepsPick<"params", UseRovingTabIndex<ParentElement, ChildElement>> & StandardDepsOmit<"params", UseTypeaheadNavigation<ParentElement, ChildElement>, "rovingTabIndexReturn"> & StandardDepsOmit<"params", UseLinearNavigation<ParentElement, ChildElement>, "rovingTabIndexReturn">) => {} & StandardDepsPick<"return", UseRovingTabIndex<ParentElement, ChildElement>> & StandardDepsPick<"return", UseTypeaheadNavigation<ParentElement, ChildElement>> & StandardDepsPick<"return", UseLinearNavigation<ParentElement, ChildElement>> & StandardDepsContext<UseListNavigationChildContext, keyof UseListNavigationChildContext> & StandardDepsProps<ParentElement>;
/**
 * @compositeParams
 */
export declare const useListNavigationChild: <ChildElement extends Element>({ info: { index, untabbable, ...void1 }, context, refElementReturn, ...void2 }: {} & StandardDepsInfo<UseListNavigationChildInfo<ChildElement>, UseListNavigationChildInfoKeysParameters> & StandardDepsContext<UseListNavigationChildContext, keyof UseListNavigationChildContext> & StandardDepsPick<"return", UseRefElement<ChildElement>, "refElementReturn", "pick", "getElement">) => {} & StandardDepsInfo<UseListNavigationChildInfo<ChildElement>, UseListNavigationChildInfoKeysReturnType> & StandardDepsProps<ChildElement> & StandardDepsPick<"return", UseTypeaheadNavigationChild<ChildElement>> & StandardDepsPick<"return", UseRovingTabIndexChild<ChildElement>>;
//# sourceMappingURL=use-list-navigation-partial.d.ts.map