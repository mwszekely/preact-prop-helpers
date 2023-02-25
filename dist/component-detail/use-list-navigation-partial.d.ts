import { UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
import { UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-typeahead-navigation.js";
type OmitStrong<T, K extends keyof T> = Omit<T, K>;
export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement> {
    _e?: TabbableChildElement;
}
/**
 * @param fromUserInteraction Whether the user interacted with this child as a means of navigating to it.  In that was the case, the child is also focused. Otherwise, focus moves as the browser determines.
 */
export type NavigateToIndex = (i: number | null, fromUserInteraction: boolean) => void;
export interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexParameters<ChildElement, M>, OmitStrong<UseTypeaheadNavigationParameters<ChildElement>, "rovingTabIndexReturn">, OmitStrong<UseLinearNavigationParameters<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn"> {
}
export interface UseListNavigationChildParameters<ChildElement extends Element> extends UseRovingTabIndexChildParameters<ChildElement>, UseTypeaheadNavigationChildParameters<ChildElement> {
}
export interface UseListNavigationReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends UseRovingTabIndexReturnType<ChildElement>, UseLinearNavigationReturnType<ParentOrChildElement>, UseTypeaheadNavigationReturnType<ParentOrChildElement> {
}
export interface UseListNavigationChildReturnType<ChildElement extends Element> extends UseRovingTabIndexChildReturnType<ChildElement>, UseTypeaheadNavigationChildReturnType {
}
export type UseListNavigationChild<ChildElement extends Element> = (a: UseListNavigationChildParameters<ChildElement>) => UseListNavigationChildReturnType<ChildElement>;
/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 *
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 */
export declare function useListNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, ..._void1 }: UseListNavigationParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationReturnType<ParentOrChildElement, ChildElement>;
export declare function useListNavigationChild<ChildElement extends Element>({ rovingTabIndexChildParameters, rovingTabIndexChildContext, typeaheadNavigationChildContext, managedChildParameters, refElementReturn, textContentParameters, ..._void2 }: UseListNavigationChildParameters<ChildElement>): UseListNavigationChildReturnType<ChildElement>;
export {};
//# sourceMappingURL=use-list-navigation-partial.d.ts.map