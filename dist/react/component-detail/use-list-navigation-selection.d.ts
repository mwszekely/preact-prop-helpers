import { ElementProps } from "../util/lib.js";
import { GenericHook, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps } from "../util/types.js";
import { UseListNavigation, UseListNavigationChild, UseListNavigationChildContext, UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseSelection, UseSelectionChild, UseSelectionChildContext, UseSelectionChildInfo, UseSelectionChildInfoKeysParameters, UseSelectionChildInfoKeysReturnType } from "./selection/use-selection.js";
export interface UseListNavigationSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSelectionChildInfo<TabbableChildElement> {
}
export interface UseListNavigationSelectionChildContext extends UseListNavigationChildContext, UseSelectionChildContext {
}
export type UseListNavigationSelection<ParentElement extends Element, ChildElement extends Element> = GenericHook<"listNavigationSelection", never, [
    StandardDepsPick<"params", UseListNavigation<ParentElement, ChildElement>>,
    StandardDepsOmit<"params", UseSelection<ParentElement, ChildElement>, "rovingTabIndexReturn">
], never, [
    StandardDepsPick<"return", UseListNavigation<ParentElement, ChildElement>>,
    StandardDepsPick<"return", UseSelection<ParentElement, ChildElement>>,
    StandardDepsContext<UseListNavigationSelectionChildContext>,
    StandardDepsProps<ParentElement>
]>;
export type UseListNavigationSelectionChild<ChildElement extends Element> = GenericHook<"listNavigationSelectionChild", never, [
    StandardDepsInfo<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysParameters>,
    StandardDepsContext<UseListNavigationSelectionChildContext>,
    StandardDepsPick<"params", UseListNavigationChild<ChildElement>>,
    StandardDepsPick<"params", UseSelectionChild<ChildElement>>
], never, [
    StandardDepsPick<"return", UseListNavigationChild<ChildElement>>,
    StandardDepsPick<"return", UseSelectionChild<ChildElement>>,
    StandardDepsInfo<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysReturnType>,
    {
        propsChild: ElementProps<ChildElement>;
        propsTabbable: ElementProps<ChildElement>;
    }
]>;
export type UseListNavigationSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSelectionChildInfoKeysParameters;
export type UseListNavigationSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
export declare const useListNavigationSelection: <ParentOrChildElement extends Element, ChildElement extends Element>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, childrenHaveFocusReturn, ...void3 }: {} & StandardDepsPick<"params", UseListNavigation<ParentOrChildElement, ChildElement>> & StandardDepsOmit<"params", UseSelection<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn">) => {} & StandardDepsPick<"return", UseListNavigation<ParentOrChildElement, ChildElement>> & StandardDepsPick<"return", UseSelection<ParentOrChildElement, ChildElement>> & StandardDepsContext<UseListNavigationSelectionChildContext, keyof UseListNavigationSelectionChildContext> & StandardDepsProps<ParentOrChildElement>;
/**
 * @compositeParams
 */
export declare const useListNavigationSelectionChild: <ChildElement extends Element>({ info: { index, untabbable, ...void2 }, context, refElementReturn, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: {} & StandardDepsInfo<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysParameters> & StandardDepsContext<UseListNavigationSelectionChildContext, keyof UseListNavigationSelectionChildContext> & StandardDepsPick<"params", UseListNavigationChild<ChildElement>> & StandardDepsPick<"params", UseSelectionChild<ChildElement>>) => {} & StandardDepsPick<"return", UseListNavigationChild<ChildElement>> & StandardDepsPick<"return", UseSelectionChild<ChildElement>> & StandardDepsInfo<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysReturnType> & {
    propsChild: ElementProps<ChildElement>;
    propsTabbable: ElementProps<ChildElement>;
};
//# sourceMappingURL=use-list-navigation-selection.d.ts.map