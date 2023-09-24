import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { ElementProps, OmitStrong, PropNames } from "../../util/types.js";
import { UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation.js";
import { RovingTabIndexChildContext, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexParameters, UseRovingTabIndexReturnType, UseRovingTabIndexReturnTypeSelf } from "./use-roving-tabindex.js";
import { UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildInfoKeysParameters, UseTypeaheadNavigationChildInfoKeysReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-typeahead-navigation.js";
declare module "../../util/types.js" {
    interface PropNames {
        ListNavigationParameters: typeof P1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        ListNavigationReturn: typeof R1Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        ListNavigationChildParameters: typeof P2Names;
    }
}
declare module "../../util/types.js" {
    interface PropNames {
        ListNavigationChildReturn: typeof R2Names;
    }
}
export declare const P1Names: {};
export declare const R1Names: {};
export declare const P2Names: {};
export declare const R2Names: {
    readonly parentIsStaggered: "PropNames.ListNavigationChildReturn.parentIsStaggered";
};
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
export declare const useListNavigation: <ParentOrChildElement extends Element, ChildElement extends Element>({ [PropNames.LinearNavigationParameters.arrowKeyDirection]: arrowKeyDirection, [PropNames.LinearNavigationParameters.disableHomeEndKeys]: disableHomeEndKeys, [PropNames.LinearNavigationParameters.getHighestIndex]: getHighestIndex, [PropNames.LinearNavigationParameters.getLowestIndex]: getLowestIndex, [PropNames.LinearNavigationParameters.isValidForLinearNavigation]: isValidForLinearNavigation, [PropNames.LinearNavigationParameters.navigatePastEnd]: navigatePastEnd, [PropNames.LinearNavigationParameters.navigatePastStart]: navigatePastStart, [PropNames.LinearNavigationParameters.onNavigateLinear]: onNavigateLinear, [PropNames.LinearNavigationParameters.pageNavigationSize]: pageNavigationSize, [PropNames.ManagedChildrenReturn.getChildren]: getChildren, [PropNames.PaginatedParameters.paginationMax]: paginationMax, [PropNames.PaginatedParameters.paginationMin]: paginationMin, [PropNames.RearrangeableReturn.indexDemangler]: indexDemangler, [PropNames.RearrangeableReturn.indexMangler]: indexMangler, [PropNames.RovingTabIndexParameters.focusSelfParent]: focusSelfParent, [PropNames.RovingTabIndexParameters.initiallyTabbedIndex]: initiallyTabbedIndex, [PropNames.RovingTabIndexParameters.onTabbableIndexChange]: onTabbableIndexChange, [PropNames.RovingTabIndexParameters.untabbable]: untabbable, [PropNames.RovingTabIndexParameters.untabbableBehavior]: untabbableBehavior, [PropNames.TypeaheadNavigationParameters.collator]: collator, [PropNames.TypeaheadNavigationParameters.isValidForTypeaheadNavigation]: isValidForTypeaheadNavigation, [PropNames.TypeaheadNavigationParameters.noTypeahead]: noTypeahead, [PropNames.TypeaheadNavigationParameters.onNavigateTypeahead]: onNavigateTypeahead, [PropNames.TypeaheadNavigationParameters.typeaheadTimeout]: typeaheadTimeout, [PropNames.RefElementReturn.getElement]: getElement, ...void1 }: UseListNavigationParameters<ParentOrChildElement, ChildElement, UseListNavigationChildInfo<ChildElement>>) => UseListNavigationReturnType<ParentOrChildElement, ChildElement>;
/**
 * @compositeParams
 */
export declare const useListNavigationChild: <ChildElement extends Element>({ info: { index, untabbable, ...void1 }, context, [PropNames.RefElementReturn.getElement]: getElement, [PropNames.TextContentParameters.getText]: getText, ...void2 }: UseListNavigationChildParameters<ChildElement>) => UseListNavigationChildReturnType<ChildElement>;
//# sourceMappingURL=use-list-navigation-partial.d.ts.map