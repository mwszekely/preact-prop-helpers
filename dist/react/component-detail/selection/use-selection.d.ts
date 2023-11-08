import { Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsPick, StandardDepsProps, StandardDepsPropsStable, StandardHook } from "../../util/types.js";
import { UseMultiSelection, UseMultiSelectionChild, UseMultiSelectionChildContext, UseMultiSelectionChildDeclarative, UseMultiSelectionChildInfo, UseMultiSelectionChildInfoKeysParameters, UseMultiSelectionChildInfoKeysReturnType } from "./use-multi-selection.js";
import { UseSingleSelection, UseSingleSelectionChild, UseSingleSelectionChildContext, UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionDeclarative } from "./use-single-selection.js";
export interface UseSelectionChildInfo<E extends Element> extends UseSingleSelectionChildInfo<E>, UseMultiSelectionChildInfo<E> {
}
export type UseSelectionChildInfoKeysParameters = UseSingleSelectionChildInfoKeysParameters | UseMultiSelectionChildInfoKeysParameters;
export type UseSelectionChildInfoKeysReturnType = UseSingleSelectionChildInfoKeysReturnType | UseMultiSelectionChildInfoKeysReturnType;
export interface UseSelectionChildContext extends UseSingleSelectionChildContext, UseMultiSelectionChildContext {
}
export type UseSelection<ParentElement extends Element, ChildElement extends Element> = StandardHook<"selection", never, [StandardDepsPick<"params", UseSingleSelection<ParentElement, ChildElement>>, StandardDepsPick<"params", UseMultiSelection<ParentElement, ChildElement>>], never, [StandardDepsPick<"return", UseSingleSelection<ParentElement, ChildElement>>, StandardDepsPick<"return", UseMultiSelection<ParentElement, ChildElement>>, StandardDepsPropsStable<ParentElement>, StandardDepsContext<UseSelectionChildContext>]>;
export type UseSelectionChild<ChildElement extends Element> = StandardHook<"selection", never, [StandardDepsPick<"params", UseSingleSelectionChild<ChildElement>>, StandardDepsPick<"params", UseMultiSelectionChild<ChildElement>>, StandardDepsInfo<UseSelectionChildInfo<ChildElement>, UseSelectionChildInfoKeysParameters>, StandardDepsContext<UseSelectionChildContext>], never, [StandardDepsPick<"return", UseSingleSelectionChild<ChildElement>>, StandardDepsPick<"return", UseMultiSelectionChild<ChildElement>>, StandardDepsInfo<UseSelectionChildInfo<ChildElement>, UseSelectionChildInfoKeysReturnType>, StandardDepsProps<ChildElement>]>;
/**
 * Allows the children of this component to be selected, either with a `singleSelectedIndex` prop on the parent, or via each child's individual `multiSelected` prop.
 *
 * @remarks Single-selection and multi-selection are not mutually exclusive, though the cases where you would want both are uncommon.
 *
 * Most of the time, you'll want to pick and choose one mode to work with:
 *
 * ```md-literal
 * * Single-selection is controlled by the parent -- it receives a `singleSelectedIndex` parameter that represents the currently selected child and handles all the logic related to coordinating the deselection of the old child.
 * * Multi-selection is controlled by each individual child -- they have a `multiSelected` parameter that can be optionally reported back to the parent (so it can show the % of all children selected, or similar)
 * ```
 *
 * @see {@link useSingleSelection}
 * @see {@link useMultiSelection}
 *
 * @compositeParams
 *
 * @hasChild {@link useSelectionChild}
 */
export declare function useSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }: Parameter<UseSelection<ParentOrChildElement, ChildElement>>): ReturnType<UseSelection<ParentOrChildElement, ChildElement>>;
/**
 *
 * @compositeParams
 */
export declare function useSelectionChild<ChildElement extends Element>({ context, info: { index, untabbable, ...void2 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void3 }: Parameter<UseSelectionChild<ChildElement>>): ReturnType<UseSelectionChild<ChildElement>>;
export type UseSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element> = StandardHook<"selectionDeclarative", never, [StandardDepsPick<"params", UseSingleSelectionDeclarative<ParentOrChildElement, ChildElement>>], never, [StandardDepsPick<"return", UseSingleSelectionDeclarative<ParentOrChildElement, ChildElement>>]>;
export type UseSelectionChildDeclarative<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> = StandardHook<"selectionChildDeclarative", never, [StandardDepsPick<"params", UseMultiSelectionChildDeclarative<ChildElement, M>>], never, [StandardDepsPick<"return", UseMultiSelectionChildDeclarative<ChildElement, M>>, StandardDepsInfo<M, "setSelectedFromParent">]>;
export declare function useSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element>(args: Parameter<UseSelectionDeclarative<ParentOrChildElement, ChildElement>>): ReturnType<UseSelectionDeclarative<ParentOrChildElement, ChildElement>>;
export declare function useSelectionChildDeclarative<ChildElement extends Element>(args: Parameter<UseSelectionChildDeclarative<ChildElement, UseSelectionChildInfo<ChildElement>>>): ReturnType<UseSelectionChildDeclarative<ChildElement, UseSelectionChildInfo<ChildElement>>>;
//# sourceMappingURL=use-selection.d.ts.map