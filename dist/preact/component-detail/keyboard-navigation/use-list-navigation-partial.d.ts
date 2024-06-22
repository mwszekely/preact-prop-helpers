import { $refElementReturn } from "../../dom-helpers/use-ref-element.js";
import { $index, UseGenericChildParameters, $managedChildrenReturn } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, OmitStrong } from "../../util/types.js";
import { $paginatedChildrenParameters } from "../processed-children/use-paginated-children.js";
import { $rearrangeableChildrenReturn } from "../processed-children/use-rearrangeable-children.js";
import { UseLinearNavigationParameters, UseLinearNavigationReturnType, $linearNavigationParameters } from "./use-linear-navigation.js";
import { $untabbable, RovingTabIndexChildContext, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType, $rovingTabIndexParameters, $rovingTabIndexReturn } from "./use-roving-tabindex.js";
import { UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildInfoKeysParameters, UseTypeaheadNavigationChildInfoKeysReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType, $typeaheadNavigationParameters } from "./use-typeahead-navigation.js";
export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement>, UseTypeaheadNavigationChildInfo<TabbableChildElement> {
}
export interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseTypeaheadNavigationParameters<ChildElement>, typeof $rovingTabIndexReturn>, OmitStrong<UseLinearNavigationParameters<ParentOrChildElement, ChildElement>, typeof $rovingTabIndexReturn> {
}
export interface UseListNavigationReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends OmitStrong<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "props">, OmitStrong<UseTypeaheadNavigationReturnType<ParentOrChildElement>, "propsStable">, OmitStrong<UseLinearNavigationReturnType<ParentOrChildElement>, "propsStable"> {
    props: ElementProps<ParentOrChildElement>;
    context: UseListNavigationContext;
}
/** {@link useListNavigationChild} requires the same `info` that {@link useRovingTabIndexChild} and {@link useTypeaheadNavigationChild} do (there is no `useLinearNavigationChild`) */
export type UseListNavigationChildInfoKeysParameters = UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters;
export type UseListNavigationChildInfoKeysReturnType = UseRovingTabIndexChildInfoKeysReturnType | UseTypeaheadNavigationChildInfoKeysReturnType;
export interface UseListNavigationChildParameters<ChildElement extends Element> extends UseGenericChildParameters<UseListNavigationContext, Pick<UseListNavigationChildInfo<ChildElement>, UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters>>, OmitStrong<UseRovingTabIndexChildParameters<ChildElement>, "info" | "context">, OmitStrong<UseTypeaheadNavigationChildParameters<ChildElement>, "info" | "context"> {
}
export interface UseListNavigationContext extends RovingTabIndexChildContext, UseTypeaheadNavigationContext {
}
export interface UseListNavigationChildReturnType<ChildElement extends Element> extends UseRovingTabIndexChildReturnType<ChildElement>, UseTypeaheadNavigationChildReturnType {
    info: Pick<UseListNavigationChildInfo<ChildElement>, UseListNavigationChildInfoKeysReturnType>;
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
export declare const useListNavigation: <ParentOrChildElement extends Element, ChildElement extends Element>({ [$linearNavigationParameters]: linearNavigationParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$managedChildrenReturn]: managedChildrenReturn, [$refElementReturn]: refElementReturn, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn, ...void1 }: UseListNavigationParameters<ParentOrChildElement, ChildElement, UseListNavigationChildInfo<ChildElement>>) => UseListNavigationReturnType<ParentOrChildElement, ChildElement>;
/**
 * @compositeParams
 */
export declare const useListNavigationChild: <ChildElement extends Element>({ info: { [$index]: index, [$untabbable]: untabbable, ...void1 }, context, [$refElementReturn]: refElementReturn, ...void2 }: UseListNavigationChildParameters<ChildElement>) => UseListNavigationChildReturnType<ChildElement>;
//# sourceMappingURL=use-list-navigation-partial.d.ts.map