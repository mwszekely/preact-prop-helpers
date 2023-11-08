import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useStableMergedCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsPick, StandardDepsProps, StandardDepsPropsStable, StandardHook } from "../../util/types.js";
import { UseMultiSelection, UseMultiSelectionChild, UseMultiSelectionChildContext, UseMultiSelectionChildDeclarative, UseMultiSelectionChildInfo, UseMultiSelectionChildInfoKeysParameters, UseMultiSelectionChildInfoKeysReturnType, useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative } from "./use-multi-selection.js";
import { UseSingleSelection, UseSingleSelectionChild, UseSingleSelectionChildContext, UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionDeclarative, useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative } from "./use-single-selection.js";


export interface UseSelectionChildInfo<E extends Element> extends UseSingleSelectionChildInfo<E>, UseMultiSelectionChildInfo<E> { }
export type UseSelectionChildInfoKeysParameters = UseSingleSelectionChildInfoKeysParameters | UseMultiSelectionChildInfoKeysParameters;
export type UseSelectionChildInfoKeysReturnType = UseSingleSelectionChildInfoKeysReturnType | UseMultiSelectionChildInfoKeysReturnType;
export interface UseSelectionChildContext extends UseSingleSelectionChildContext, UseMultiSelectionChildContext { }


export type UseSelection<ParentElement extends Element, ChildElement extends Element> = StandardHook<
    "selection",
    never, [StandardDepsPick<"params", UseSingleSelection<ParentElement, ChildElement>>, StandardDepsPick<"params", UseMultiSelection<ParentElement, ChildElement>>],
    never, [StandardDepsPick<"return", UseSingleSelection<ParentElement, ChildElement>>, StandardDepsPick<"return", UseMultiSelection<ParentElement, ChildElement>>, StandardDepsPropsStable<ParentElement>, StandardDepsContext<UseSelectionChildContext>]
>;
export type UseSelectionChild<ChildElement extends Element> = StandardHook<
    "selection",
    never, [StandardDepsPick<"params", UseSingleSelectionChild<ChildElement>>, StandardDepsPick<"params", UseMultiSelectionChild<ChildElement>>, StandardDepsInfo<UseSelectionChildInfo<ChildElement>, UseSelectionChildInfoKeysParameters>, StandardDepsContext<UseSelectionChildContext>],
    never, [StandardDepsPick<"return", UseSingleSelectionChild<ChildElement>>, StandardDepsPick<"return", UseMultiSelectionChild<ChildElement>>, StandardDepsInfo<UseSelectionChildInfo<ChildElement>, UseSelectionChildInfoKeysReturnType>, StandardDepsProps<ChildElement>]
>;

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
export function useSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }: Parameter<UseSelection<ParentOrChildElement, ChildElement>>): ReturnType<UseSelection<ParentOrChildElement, ChildElement>> {
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc1, ...void3 }, context: contextSS, singleSelectionReturn, ...void1 } = useSingleSelection<ParentOrChildElement, ChildElement>({ managedChildrenReturn, rovingTabIndexReturn, singleSelectionParameters });
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc2, ...void4 }, context: contextMS, propsStable, ...void2 } = useMultiSelection<ParentOrChildElement, ChildElement>({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    return {
        propsStable,
        childrenHaveFocusParameters: { onCompositeFocusChange: useStableMergedCallback(ocfc1, ocfc2) },
        context: useMemoObject({ ...contextSS, ...contextMS }),
        singleSelectionReturn
    }
}

/**
 * 
 * @compositeParams
 */
export function useSelectionChild<ChildElement extends Element>({
    context,
    info: {
        index,
        untabbable,
        ...void2
    },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void3
}: Parameter<UseSelectionChild<ChildElement>>): ReturnType<UseSelectionChild<ChildElement>> {
    const { props: p1, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, pressParameters: { onPressSync: opc1 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, singleSelectionChildReturn, } = useSingleSelectionChild<ChildElement>({ context, info: { index, untabbable }, singleSelectionChildParameters });
    const { props: p2, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, pressParameters: { onPressSync: opc2 }, multiSelectionChildReturn, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...void4 } = useMultiSelectionChild<ChildElement>({ context, info: { index }, multiSelectionChildParameters });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);

    return {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
        info: {
            getMultiSelected,
            setSelectedFromParent,
            getSingleSelected,
            setLocalSingleSelected,
            singleSelected,
            getMultiSelectionDisabled,
        },
        multiSelectionChildReturn,
        pressParameters: { onPressSync: useStableMergedCallback(opc1, opc2) },
        props: useMergedProps(p1, p2),
        singleSelectionChildReturn
    }
}

export type UseSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element> = StandardHook<
    "selectionDeclarative",
    never, [StandardDepsPick<"params", UseSingleSelectionDeclarative<ParentOrChildElement, ChildElement>>],
    never, [StandardDepsPick<"return", UseSingleSelectionDeclarative<ParentOrChildElement, ChildElement>>]
>;

export type UseSelectionChildDeclarative<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> = StandardHook<
    "selectionChildDeclarative",
    never, [StandardDepsPick<"params", UseMultiSelectionChildDeclarative<ChildElement, M>>],
    never, [StandardDepsPick<"return", UseMultiSelectionChildDeclarative<ChildElement, M>>, StandardDepsInfo<M, "setSelectedFromParent">]
>;

export function useSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element>(args: Parameter<UseSelectionDeclarative<ParentOrChildElement, ChildElement>>): ReturnType<UseSelectionDeclarative<ParentOrChildElement, ChildElement>> {
    return useSingleSelectionDeclarative(args);
}

export function useSelectionChildDeclarative<ChildElement extends Element>(args: Parameter<UseSelectionChildDeclarative<ChildElement, UseSelectionChildInfo<ChildElement>>>): ReturnType<UseSelectionChildDeclarative<ChildElement, UseSelectionChildInfo<ChildElement>>> {
    return useMultiSelectionChildDeclarative<ChildElement>(args);
}
