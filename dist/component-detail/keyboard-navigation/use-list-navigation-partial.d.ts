import { PropNames_RefElementReturn_getElement } from "../../dom-helpers/use-ref-element.js";
import { PropNames_TextContentParameters_getText } from "../../dom-helpers/use-text-content.js";
import { PropNames_ManagedChildrenReturn_getChildren, UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, OmitStrong } from "../../util/types.js";
import { PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin } from "../processed-children/use-paginated-children.js";
import { PropNames_RearrangeableReturn_indexDemangler, PropNames_RearrangeableReturn_indexMangler } from "../processed-children/use-rearrangeable-children.js";
import { PropNames_LinearNavigationParameters_arrowKeyDirection, PropNames_LinearNavigationParameters_disableHomeEndKeys, PropNames_LinearNavigationParameters_getHighestIndex, PropNames_LinearNavigationParameters_getLowestIndex, PropNames_LinearNavigationParameters_isValidForLinearNavigation, PropNames_LinearNavigationParameters_navigatePastEnd, PropNames_LinearNavigationParameters_navigatePastStart, PropNames_LinearNavigationParameters_onNavigateLinear, PropNames_LinearNavigationParameters_pageNavigationSize, UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation.js";
import { PropNames_RovingTabIndexParameters_focusSelfParent, PropNames_RovingTabIndexParameters_initiallyTabbedIndex, PropNames_RovingTabIndexParameters_onTabbableIndexChange, PropNames_RovingTabIndexParameters_untabbable, PropNames_RovingTabIndexParameters_untabbableBehavior, RovingTabIndexChildContext, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType, UseRovingTabIndexReturnTypeSelf } from "./use-roving-tabindex.js";
import { PropNames_TypeaheadNavigationParameters_collator, PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation, PropNames_TypeaheadNavigationParameters_noTypeahead, PropNames_TypeaheadNavigationParameters_onNavigateTypeahead, PropNames_TypeaheadNavigationParameters_typeaheadTimeout, UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildInfoKeysParameters, UseTypeaheadNavigationChildInfoKeysReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-typeahead-navigation.js";
export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement>, UseTypeaheadNavigationChildInfo<TabbableChildElement> {
}
export interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexParameters<ParentOrChildElement, ChildElement, M>, Omit<UseTypeaheadNavigationParameters<ChildElement>, keyof UseRovingTabIndexReturnTypeSelf>, Omit<UseLinearNavigationParameters<ParentOrChildElement, ChildElement>, keyof UseRovingTabIndexReturnTypeSelf> {
}
export interface UseListNavigationReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends OmitStrong<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "props">, OmitStrong<UseTypeaheadNavigationReturnType<ParentOrChildElement>, "props">, OmitStrong<UseLinearNavigationReturnType<ParentOrChildElement>, "props"> {
    props: ElementProps<ParentOrChildElement>[];
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
export declare const useListNavigation: <ParentOrChildElement extends Element, ChildElement extends Element>({ [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection, [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys, [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex, [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex, [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd, [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart, [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear, [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize, [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_RearrangeableReturn_indexMangler]: indexMangler, [PropNames_RovingTabIndexParameters_focusSelfParent]: focusSelfParent, [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: onTabbableIndexChange, [PropNames_RovingTabIndexParameters_untabbable]: untabbable, [PropNames_RovingTabIndexParameters_untabbableBehavior]: untabbableBehavior, [PropNames_TypeaheadNavigationParameters_collator]: collator, [PropNames_TypeaheadNavigationParameters_isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames_TypeaheadNavigationParameters_noTypeahead]: noTypeahead, [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: onNavigateTypeahead, [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: typeaheadTimeout, [PropNames_RefElementReturn_getElement]: getElement, ...void1 }: UseListNavigationParameters<ParentOrChildElement, ChildElement, UseListNavigationChildInfo<ChildElement>>) => UseListNavigationReturnType<ParentOrChildElement, ChildElement>;
/**
 * @compositeParams
 */
export declare const useListNavigationChild: <ChildElement extends Element>({ info: { index, untabbable, ...void1 }, context, [PropNames_RefElementReturn_getElement]: getElement, [PropNames_TextContentParameters_getText]: getText, ...void2 }: UseListNavigationChildParameters<ChildElement>) => UseListNavigationChildReturnType<ChildElement>;
//# sourceMappingURL=use-list-navigation-partial.d.ts.map