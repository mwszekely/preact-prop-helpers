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
export declare const useListNavigationSelection: <ParentOrChildElement extends Element, ChildElement extends Element>({ "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, ...args }: UseListNavigationSelectionParameters<ParentOrChildElement, ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>) => UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement>;
/**
 * @compositeParams
 */
export declare const useListNavigationSelectionChild: <ChildElement extends Element>({ info: { index, untabbable, ...void2 }, context, ...args }: UseListNavigationSelectionChildParameters<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>) => UseListNavigationSelectionChildReturnType<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>;
//# sourceMappingURL=use-list-navigation-selection.d.ts.map