import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { useStableMergedCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ExtendMerge, OmitStrong, TargetedOmit } from "../../util/types.js";
import { MakeMultiSelectionChildDeclarativeParameters, MakeMultiSelectionChildDeclarativeReturnType, UseMultiSelectionChildDeclarativeParameters, UseMultiSelectionChildInfo, UseMultiSelectionChildInfoKeysParameters, UseMultiSelectionChildInfoKeysReturnType, UseMultiSelectionChildParameters, UseMultiSelectionChildReturnType, UseMultiSelectionContext, UseMultiSelectionParameters, UseMultiSelectionReturnType, useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative } from "./use-multi-selection.js";
import { MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionDeclarativeParameters, UseSingleSelectionParameters, UseSingleSelectionReturnType, useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative } from "./use-single-selection.js";


export interface UseSelectionChildInfo<E extends Element> extends UseSingleSelectionChildInfo<E>, UseMultiSelectionChildInfo<E> { }
export type UseSelectionChildInfoKeysParameters = UseSingleSelectionChildInfoKeysParameters | UseMultiSelectionChildInfoKeysParameters;
export type UseSelectionChildInfoKeysReturnType = UseSingleSelectionChildInfoKeysReturnType | UseMultiSelectionChildInfoKeysReturnType;
export interface UseSelectionContext extends UseSingleSelectionContext, UseMultiSelectionContext { }

export interface UseSelectionChildReturnTypeSelf {

    /** 
     * When the parent's as an "activation" selection mode,
     * (for either single- or multi-select) 
     * then the consumer is responsible for calling this function 
     * when whatever you define as "activation" occurs. Generally, 
     * this is a click or press event (from `usePress`).
     * 
     * This is not necessary in the "focus" selection mode, though
     * it's not recommended to use "focus" mode for multi-selection
     * anyway.
     */
    firePressSelectionEvent: (e: Event) => void;
}

export interface UseSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends
    UseSingleSelectionParameters<ParentOrChildElement, ChildElement, M>,
    UseMultiSelectionParameters<M> {
}

export interface UseSelectionReturnType<ParentElement extends Element, ChildElement extends Element> extends
    ExtendMerge<UseSingleSelectionReturnType<ParentElement>,
    UseMultiSelectionReturnType<ParentElement, ChildElement>> {
    context: UseSelectionContext;
}

export interface UseSelectionChildParameters<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends
    UseGenericChildParameters<UseSelectionContext, Pick<M, UseSelectionChildInfoKeysParameters>>,
    OmitStrong<UseSingleSelectionChildParameters<ChildElement, M>, "info" | "context">,
    OmitStrong<UseMultiSelectionChildParameters<ChildElement, M>, "info" | "context"> {
}

export interface UseSelectionChildReturnType<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends
    ExtendMerge<
        OmitStrong<UseMultiSelectionChildReturnType<ChildElement, M>, "multiSelectionChildReturn">,
        OmitStrong<UseSingleSelectionChildReturnType<ChildElement, M>, "singleSelectionChildReturn">>,
    TargetedOmit<UseMultiSelectionChildReturnType<ChildElement, M>, "multiSelectionChildReturn", "firePressSelectionEvent">,
    TargetedOmit<UseSingleSelectionChildReturnType<ChildElement, M>, "singleSelectionChildReturn", "firePressSelectionEvent"> {
        selectionChildReturn: UseSelectionChildReturnTypeSelf;
}

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
 * @hasChild {@link useSelectionChild}
 * 
 * @compositeParams
 */
export function useSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }: UseSelectionParameters<ParentOrChildElement, ChildElement, UseSelectionChildInfo<ChildElement>>): UseSelectionReturnType<ParentOrChildElement, ChildElement> {
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc1, ...void3 }, context: contextSS, singleSelectionReturn, ...void1 } = useSingleSelection<ParentOrChildElement, ChildElement>({ managedChildrenReturn, rovingTabIndexReturn, singleSelectionParameters });
    const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc2, ...void4 }, context: contextMS, multiSelectionReturn, propsStable, ...void2 } = useMultiSelection<ParentOrChildElement, ChildElement>({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    return {
        propsStable,
        childrenHaveFocusParameters: { onCompositeFocusChange: useStableMergedCallback(ocfc1 as any, ocfc2) },
        context: useMemoObject({ ...contextSS, ...contextMS }),
        multiSelectionReturn,
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
}: UseSelectionChildParameters<ChildElement, UseSelectionChildInfo<ChildElement>>): UseSelectionChildReturnType<ChildElement, UseSelectionChildInfo<ChildElement>> {
    const { props: p1, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, singleSelectionChildReturn, } = useSingleSelectionChild<ChildElement>({ context, info: { index, untabbable }, singleSelectionChildParameters });
    const { props: p2, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, multiSelectionChildReturn, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...void4 } = useMultiSelectionChild<ChildElement>({ context, info: { index }, multiSelectionChildParameters });
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
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        selectionChildReturn: { firePressSelectionEvent: useStableMergedCallback(singleSelectionChildReturn.firePressSelectionEvent, multiSelectionChildReturn.firePressSelectionEvent) },
        props: useMergedProps(p1, p2)
    }
}

export type MakeSelectionDeclarativeParameters<P> = MakeSingleSelectionDeclarativeParameters<P>;
export type MakeSelectionDeclarativeReturnType<R> = MakeSingleSelectionDeclarativeReturnType<R>;
export type MakeSelectionDeclarativeChildParameters<P extends UseMultiSelectionChildParameters<any, any>> = MakeMultiSelectionChildDeclarativeParameters<P>;
export type MakeSelectionDeclarativeChildReturnType<R extends UseMultiSelectionChildReturnType<any, any>> = MakeMultiSelectionChildDeclarativeReturnType<R>;
export interface UseSelectionDeclarativeParameters<ChildElement extends Element> extends UseSingleSelectionDeclarativeParameters<ChildElement> { }
export interface UseSelectionChildDeclarativeParameters<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends UseMultiSelectionChildDeclarativeParameters<ChildElement, M> { }

/**
 * @compositeParams
 */
export function useSelectionDeclarative<ChildElement extends Element>(args: UseSelectionDeclarativeParameters<ChildElement>) {
    return useSingleSelectionDeclarative(args);
}

/**
 * @compositeParams
 */
export function useSelectionChildDeclarative<ChildElement extends Element>(args: UseSelectionChildDeclarativeParameters<ChildElement, UseSelectionChildInfo<ChildElement>>) {
    return useMultiSelectionChildDeclarative(args);
}
