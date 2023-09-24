import { UseGenericChildParameters } from "../preact-extensions/use-managed-children.js";
import { ElementProps, ExtendMerge, OmitStrong } from "../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseRovingTabIndexReturnTypeSelf } from "./keyboard-navigation/use-roving-tabindex.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysParameters, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType } from "./selection/use-selection.js";
export interface UseListNavigationSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSelectionChildInfo<TabbableChildElement> {
}
export interface UseListNavigationSelectionChildContext extends UseListNavigationContext, UseSelectionContext {
}
export interface UseListNavigationSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends Omit<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, never>, Omit<UseSelectionParameters<ParentOrChildElement, ChildElement, M>, keyof UseRovingTabIndexReturnTypeSelf> {
}
export interface UseListNavigationSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends OmitStrong<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, "props">, OmitStrong<UseSelectionReturnType<ParentOrChildElement, ChildElement>, "props"> {
    context: UseListNavigationSelectionChildContext;
    props: ElementProps<ParentOrChildElement>[];
}
export type UseListNavigationSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSelectionChildInfoKeysParameters;
export type UseListNavigationSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
export interface UseListNavigationSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends UseGenericChildParameters<UseListNavigationSelectionChildContext, Pick<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<ChildElement>, "context" | "info">, OmitStrong<UseSelectionChildParameters<ChildElement, M>, "context" | "info"> {
}
export interface UseListNavigationSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement>, UseSelectionChildReturnType<ChildElement, M>>, "props"> {
    propsTabbable: ElementProps<any>[];
    propsChild: ElementProps<any>[];
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
export declare const useListNavigationSelection: <ParentOrChildElement extends Element, ChildElement extends Element>({ "PropNames.ChildrenHaveFocusReturn.getAnyFocused": getAnyFocused, "PropNames.LinearNavigationParameters.arrowKeyDirection": arrowKeyDirection, "PropNames.LinearNavigationParameters.disableHomeEndKeys": disableHomeEndKeys, "PropNames.LinearNavigationParameters.getHighestIndex": getHighestIndex, "PropNames.LinearNavigationParameters.getLowestIndex": getLowestIndex, "PropNames.LinearNavigationParameters.isValidForLinearNavigation": isValidForLinearNavigation, "PropNames.LinearNavigationParameters.navigatePastEnd": navigatePastEnd, "PropNames.LinearNavigationParameters.navigatePastStart": navigatePastStart, "PropNames.LinearNavigationParameters.onNavigateLinear": onNavigateLinear, "PropNames.LinearNavigationParameters.pageNavigationSize": pageNavigationSize, "PropNames.ManagedChildrenReturn.getChildren": getChildren, "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": multiSelectionAriaPropName, "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode, "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange, "PropNames.PaginatedParameters.paginationMax": paginationMax, "PropNames.PaginatedParameters.paginationMin": paginationMin, "PropNames.RearrangeableReturn.indexDemangler": indexDemangler, "PropNames.RearrangeableReturn.indexMangler": indexMangler, "PropNames.RefElementReturn.getElement": getElement, "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParent, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex, "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": onSingleSelectedIndexChange, "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": singleSelectionAriaPropName, "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode, "PropNames.TypeaheadNavigationParameters.collator": collator, "PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation": isValidForTypeaheadNavigation, "PropNames.TypeaheadNavigationParameters.noTypeahead": noTypeahead, "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": onNavigateTypeahead, "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": typeaheadTimeout, ...void3 }: UseListNavigationSelectionParameters<ParentOrChildElement, ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>) => UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement>;
/**
 * @compositeParams
 */
export declare const useListNavigationSelectionChild: <ChildElement extends Element>({ info: { index, untabbable, ...void2 }, context, "PropNames.MultiSelectionChildParameters.initiallyMultiSelected": initiallyMultiSelected, "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": multiSelectionDisabled, "PropNames.MultiSelectionChildParameters.onMultiSelectChange": onMultiSelectChange, "PropNames.RefElementReturn.getElement": getElement, "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": singleSelectionDisabled, "PropNames.TextContentParameters.getText": getText, ...void1 }: UseListNavigationSelectionChildParameters<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>) => UseListNavigationSelectionChildReturnType<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>;
//# sourceMappingURL=use-list-navigation-selection.d.ts.map