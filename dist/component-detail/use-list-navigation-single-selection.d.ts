import { OmitStrong } from "../util/types.js";
import { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./use-list-navigation-partial.js";
import { SelectableChildInfo, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionParameters, UseSingleSelectionReturnType } from "./use-single-selection.js";
export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, SelectableChildInfo<TabbableChildElement> {
}
export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ChildElement>, "rovingTabIndexReturn"> {
    managedChildrenReturn: UseListNavigationParameters<ParentOrChildElement, ChildElement, M>["managedChildrenReturn"] & UseSingleSelectionParameters<ChildElement>["managedChildrenReturn"];
}
export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends OmitStrong<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, "context">, OmitStrong<UseSingleSelectionReturnType<ChildElement>, "context"> {
    context: UseListNavigationSingleSelectionChildContext<ParentOrChildElement, ChildElement>;
}
export interface UseListNavigationSingleSelectionChildContext<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationContext<ParentOrChildElement, ChildElement>, UseSingleSelectionContext<ChildElement> {
}
export declare function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, ..._void3 }: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement>;
export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element> extends OmitStrong<UseListNavigationChildParameters<ChildElement>, "context">, OmitStrong<UseSingleSelectionChildParameters<ChildElement>, "context"> {
    context: UseListNavigationSingleSelectionChildContext<Element, ChildElement>;
    managedChildParameters: UseListNavigationChildParameters<ChildElement>["managedChildParameters"] & UseSingleSelectionChildParameters<ChildElement>["managedChildParameters"];
}
export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element> extends UseListNavigationChildReturnType<ChildElement>, UseSingleSelectionChildReturnType<ChildElement> {
}
export declare function useListNavigationSingleSelectionChild<ChildElement extends Element>({ managedChildParameters: { index, ..._void5 }, rovingTabIndexChildParameters: { hidden, ...void7 }, singleSelectionChildParameters, context, refElementReturn, textContentParameters, ..._void1 }: UseListNavigationSingleSelectionChildParameters<ChildElement>): UseListNavigationSingleSelectionChildReturnType<ChildElement>;
//# sourceMappingURL=use-list-navigation-single-selection.d.ts.map