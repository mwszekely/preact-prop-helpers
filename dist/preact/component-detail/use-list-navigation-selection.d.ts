import { $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { $childrenHaveFocusReturn } from "../observers/use-children-have-focus.js";
import { $index, UseGenericChildParameters, $managedChildrenReturn } from "../preact-extensions/use-managed-children.js";
import { ElementProps, ExtendMerge, OmitStrong, TargetedOmit } from "../util/types.js";
import { $linearNavigationParameters } from "./keyboard-navigation/use-linear-navigation.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./keyboard-navigation/use-list-navigation-partial.js";
import { $untabbable, $initiallyTabbedIndex, $rovingTabIndexParameters, $rovingTabIndexReturn } from "./keyboard-navigation/use-roving-tabindex.js";
import { $typeaheadNavigationParameters } from "./keyboard-navigation/use-typeahead-navigation.js";
import { $paginatedChildrenParameters } from "./processed-children/use-paginated-children.js";
import { $rearrangeableChildrenReturn } from "./processed-children/use-rearrangeable-children.js";
import { $multiSelectionChildParameters, $multiSelectionParameters } from "./selection/use-multi-selection.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysParameters, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType } from "./selection/use-selection.js";
import { $singleSelectionChildParameters, $singleSelectionParameters } from "./selection/use-single-selection.js";
export interface UseListNavigationSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSelectionChildInfo<TabbableChildElement> {
}
export interface UseListNavigationSelectionChildContext extends UseListNavigationContext, UseSelectionContext {
}
export interface UseListNavigationSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, typeof $rovingTabIndexParameters>, TargetedOmit<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, typeof $rovingTabIndexParameters, typeof $initiallyTabbedIndex>, OmitStrong<UseSelectionParameters<ParentOrChildElement, ChildElement, M>, typeof $rovingTabIndexReturn> {
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
export declare const useListNavigationSelection: <ParentOrChildElement extends Element, ChildElement extends Element>({ [$linearNavigationParameters]: linearNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$singleSelectionParameters]: singleSelectionParameters, [$multiSelectionParameters]: multiSelectionParameters, [$managedChildrenReturn]: managedChildrenReturn, [$refElementReturn]: refElementReturn, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn, [$childrenHaveFocusReturn]: childrenHaveFocusReturn, ...void3 }: UseListNavigationSelectionParameters<ParentOrChildElement, ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>) => UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement>;
/**
 * @compositeParams
 */
export declare const useListNavigationSelectionChild: <ChildElement extends Element>({ info: { [$index]: index, [$untabbable]: untabbable, ...void2 }, context, [$refElementReturn]: refElementReturn, [$singleSelectionChildParameters]: singleSelectionChildParameters, [$multiSelectionChildParameters]: multiSelectionChildParameters, ...void1 }: UseListNavigationSelectionChildParameters<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>) => UseListNavigationSelectionChildReturnType<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>;
//# sourceMappingURL=use-list-navigation-selection.d.ts.map