import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, OmitStrong, TargetedPick } from "../../util/types.js";
import { UseProcessedIndexManglerReturnType } from "../processed-children/use-processed-index-mangler.js";
import { UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation.js";
import { RovingTabIndexChildContext, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
import { UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildInfoKeysParameters, UseTypeaheadNavigationChildInfoKeysReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-typeahead-navigation.js";
export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement>, UseTypeaheadNavigationChildInfo<TabbableChildElement> {
}
export interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends OmitStrong<UseRovingTabIndexParameters<ParentOrChildElement, ChildElement, M>, "processedIndexManglerReturn">, OmitStrong<UseTypeaheadNavigationParameters<ChildElement>, "rovingTabIndexReturn">, OmitStrong<UseLinearNavigationParameters<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexDemangler" | "indexMangler"> {
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
 * @hasChild {@link useListNavigationChild}
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useListNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, ...void1 }: UseListNavigationParameters<ParentOrChildElement, ChildElement, UseListNavigationChildInfo<ChildElement>>): UseListNavigationReturnType<ParentOrChildElement, ChildElement>;
/**
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useListNavigationChild<ChildElement extends Element>({ info: { index, untabbable, ...void1 }, context, refElementReturn, ...void2 }: UseListNavigationChildParameters<ChildElement>): UseListNavigationChildReturnType<ChildElement>;
//# sourceMappingURL=use-list-navigation-partial.d.ts.map