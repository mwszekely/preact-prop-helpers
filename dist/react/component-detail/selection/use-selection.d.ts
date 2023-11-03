import { Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsPick, StandardDepsProps, StandardDepsPropsStable, StandardHook } from "../../util/types.js";
import { MakeMultiSelectionChildDeclarativeParameters, MakeMultiSelectionChildDeclarativeReturnType, UseMultiSelection, UseMultiSelectionChild, UseMultiSelectionChildContext, UseMultiSelectionChildDeclarativeParameters, UseMultiSelectionChildInfo, UseMultiSelectionChildInfoKeysParameters, UseMultiSelectionChildInfoKeysReturnType } from "./use-multi-selection.js";
import { MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, UseSingleSelection, UseSingleSelectionChild, UseSingleSelectionChildContext, UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionDeclarativeParameters } from "./use-single-selection.js";
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
export type MakeSelectionDeclarativeParameters<P> = MakeSingleSelectionDeclarativeParameters<P>;
export type MakeSelectionDeclarativeReturnType<R> = MakeSingleSelectionDeclarativeReturnType<R>;
export type MakeSelectionDeclarativeChildParameters<P extends Parameter<UseMultiSelectionChild<any>>> = MakeMultiSelectionChildDeclarativeParameters<P>;
export type MakeSelectionDeclarativeChildReturnType<R extends ReturnType<UseMultiSelectionChild<any>>> = MakeMultiSelectionChildDeclarativeReturnType<R>;
export interface UseSelectionDeclarativeParameters<ChildElement extends Element> extends UseSingleSelectionDeclarativeParameters<ChildElement> {
}
export interface UseSelectionChildDeclarativeParameters<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends UseMultiSelectionChildDeclarativeParameters<ChildElement, M> {
}
export declare function useSelectionDeclarative<ChildElement extends Element>(args: UseSelectionDeclarativeParameters<ChildElement>): {
    singleSelectionParameters: {
        onSingleSelectedIndexChange: import("./use-single-selection.js").SelectedIndexChangeHandler;
    };
};
export declare function useSelectionChildDeclarative<ChildElement extends Element>(args: UseSelectionChildDeclarativeParameters<ChildElement, UseSelectionChildInfo<ChildElement>>): import("./use-multi-selection.js").UseMultiSelectionChildDeclarativeReturnType<ChildElement, UseMultiSelectionChildInfo<ChildElement>>;
//# sourceMappingURL=use-selection.d.ts.map