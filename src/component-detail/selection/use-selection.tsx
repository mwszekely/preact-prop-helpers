import { UseHasCurrentFocusParameters } from "../../observers/use-has-current-focus.js";
import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ElementProps, OmitStrong, PropNames } from "../../util/types.js";
import { MakeMultiSelectionChildDeclarativeParameters, MakeMultiSelectionChildDeclarativeReturnType, UseMultiSelectionChildDeclarativeParameters, UseMultiSelectionChildInfo, UseMultiSelectionChildInfoKeysParameters, UseMultiSelectionChildInfoKeysReturnType, UseMultiSelectionChildParameters, UseMultiSelectionChildReturnType, UseMultiSelectionContext, UseMultiSelectionParameters, UseMultiSelectionReturnType, useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative } from "./use-multi-selection.js";
import { MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionContext, UseSingleSelectionDeclarativeParameters, UseSingleSelectionParameters, UseSingleSelectionReturnType, useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative } from "./use-single-selection.js";


export interface UseSelectionChildInfo<E extends Element> extends UseSingleSelectionChildInfo<E>, UseMultiSelectionChildInfo<E> { }
export type UseSelectionChildInfoKeysParameters = UseSingleSelectionChildInfoKeysParameters | UseMultiSelectionChildInfoKeysParameters;
export type UseSelectionChildInfoKeysReturnType = UseSingleSelectionChildInfoKeysReturnType | UseMultiSelectionChildInfoKeysReturnType;
export interface UseSelectionContext extends UseSingleSelectionContext, UseMultiSelectionContext { }


export interface UseSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends
    UseSingleSelectionParameters<ParentOrChildElement, ChildElement, M>,
    UseMultiSelectionParameters<M> {
}

export interface UseSelectionReturnType<ParentElement extends Element, ChildElement extends Element> extends
    UseSingleSelectionReturnType<ChildElement>,
    UseMultiSelectionReturnType<ParentElement, ChildElement> {
    context: UseSelectionContext;
}

export interface UseSelectionChildParameters<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends
    UseGenericChildParameters<UseSelectionContext, Pick<M, UseSelectionChildInfoKeysParameters>>,
    OmitStrong<UseSingleSelectionChildParameters<ChildElement, M>, "info" | "context">,
    OmitStrong<UseMultiSelectionChildParameters<ChildElement, M>, "info" | "context"> {
}

export interface UseSelectionChildReturnType<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends
    Pick<UseHasCurrentFocusParameters<ChildElement>, typeof PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged>,
    OmitStrong<UseSingleSelectionChildReturnType<ChildElement, M>, "props" | "info" | typeof PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged>,
    OmitStrong<UseMultiSelectionChildReturnType<ChildElement, M>, "props" | "info" | typeof PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged> {
    props: ElementProps<ChildElement>[];
    info: Pick<M, UseSelectionChildInfoKeysReturnType>;
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
 * @compositeParams
 * 
 * @hasChild {@link useSelectionChild}
 */
export function useSelection<ParentOrChildElement extends Element, ChildElement extends Element>({
    [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused,
    [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
    [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: multiSelectionAriaPropName,
    [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode,
    [PropNames.MultiSelectionParameters.onSelectionChange]: onSelectionChange,
    [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex,
    [PropNames.SingleSelectionParameters.initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
    [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
    [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: singleSelectionAriaPropName,
    [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode,
    ...void1
}: UseSelectionParameters<ParentOrChildElement, ChildElement, UseSelectionChildInfo<ChildElement>>): UseSelectionReturnType<ParentOrChildElement, ChildElement> {
    const {
        [PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange]: ocfc1,
        context: contextSS,
        ...singleSelectionReturn
    } = useSingleSelection<ParentOrChildElement, ChildElement>({
        [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
        [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex,
        [PropNames.SingleSelectionParameters.initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
        [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
        [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: singleSelectionAriaPropName,
        [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode
    });
    const {
        [PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange]: ocfc2,
        context: contextMS,
        props: propsStable,
        ...multiSelectionReturn
    } = useMultiSelection<ParentOrChildElement, ChildElement>({
        [PropNames.ChildrenHaveFocusReturn.getAnyFocused]: getAnyFocused,
        [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
        [PropNames.MultiSelectionParameters.multiSelectionAriaPropName]: multiSelectionAriaPropName,
        [PropNames.MultiSelectionParameters.multiSelectionMode]: multiSelectionMode,
        [PropNames.MultiSelectionParameters.onSelectionChange]: onSelectionChange,

    });
    assertEmptyObject(void1);

    return {
        ...multiSelectionReturn,
        ...singleSelectionReturn,
        [PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange]: useStableCallback((...a) => { ocfc1!(...a); ocfc2!(...a); }),
        props: propsStable,
        context: useMemoObject({ ...contextSS, ...contextMS }),
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
    [PropNames.MultiSelectionChildParameters.initiallyMultiSelected]: initiallyMultiSelected,
    [PropNames.MultiSelectionChildParameters.multiSelectionDisabled]: multiSelectionDisabled,
    [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: onMultiSelectChange,
    [PropNames.SingleSelectionChildParameters.singleSelectionDisabled]: singleSelectionDisabled,
    ...void3
}: UseSelectionChildParameters<ChildElement, UseSelectionChildInfo<ChildElement>>): UseSelectionChildReturnType<ChildElement, UseSelectionChildInfo<ChildElement>> {
    const {
        props: p1,
        info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 },
        [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: ocfic1,
        [PropNames.PressParameters.onPressSync]: opc1,
        ...singleSelectionChildReturn
    } = useSingleSelectionChild<ChildElement>({
        context,
        info: { index, untabbable },
        [PropNames.SingleSelectionChildParameters.singleSelectionDisabled]: singleSelectionDisabled
    });
    const {
        props: p2,
        [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: ocfic2,
        [PropNames.PressParameters.onPressSync]: opc2,
        info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 },
        ...multiSelectionChildReturn
    } = useMultiSelectionChild<ChildElement>({
        context,
        info: { index },
        [PropNames.MultiSelectionChildParameters.initiallyMultiSelected]: initiallyMultiSelected,
        [PropNames.MultiSelectionChildParameters.multiSelectionDisabled]: multiSelectionDisabled,
        [PropNames.MultiSelectionChildParameters.onMultiSelectChange]: onMultiSelectChange,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void5);

    return {
        [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: useStableCallback((...a) => { ocfic1!(...a); ocfic2!(...a); }),
        info: {
            getMultiSelected,
            setSelectedFromParent,
            getSingleSelected,
            setLocalSingleSelected,
            singleSelected,
            getMultiSelectionDisabled,
        },
        ...multiSelectionChildReturn,
        ...singleSelectionChildReturn,
        [PropNames.PressParameters.onPressSync]: useStableCallback((...a) => { opc1!(...a); opc2!(...a); }),
        props: [p1, p2],
    }
}

export type MakeSelectionDeclarativeParameters<P> = MakeSingleSelectionDeclarativeParameters<P>;
export type MakeSelectionDeclarativeReturnType<R> = MakeSingleSelectionDeclarativeReturnType<R>;
export type MakeSelectionDeclarativeChildParameters<P extends UseMultiSelectionChildParameters<any, any>> = MakeMultiSelectionChildDeclarativeParameters<P>;
export type MakeSelectionDeclarativeChildReturnType<R extends UseMultiSelectionChildReturnType<any, any>> = MakeMultiSelectionChildDeclarativeReturnType<R>;
export interface UseSelectionDeclarativeParameters<ChildElement extends Element> extends UseSingleSelectionDeclarativeParameters<ChildElement> { }
export interface UseSelectionChildDeclarativeParameters<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends UseMultiSelectionChildDeclarativeParameters<ChildElement, M> { }

export function useSelectionDeclarative<ChildElement extends Element>(args: UseSelectionDeclarativeParameters<ChildElement>) {
    return useSingleSelectionDeclarative(args);
}

export function useSelectionChildDeclarative<ChildElement extends Element>(args: UseSelectionChildDeclarativeParameters<ChildElement, UseSelectionChildInfo<ChildElement>>) {
    return useMultiSelectionChildDeclarative(args);
}