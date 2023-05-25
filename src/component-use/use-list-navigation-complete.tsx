import { useCallback } from "preact/hooks";
import { useListNavigationSingleSelectionSortable, UseListNavigationSingleSelectionSortableChildInfo, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType } from "../component-detail/keyboard-navigation/use-list-navigation-single-selection-sortable.js";
import { useListNavigationSingleSelectionChild } from "../component-detail/keyboard-navigation/use-list-navigation-single-selection.js";
import { RovingTabIndexChildContext, UseRovingTabIndexChildParameters } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { MakeSingleSelectionDeclarativeParameters, UseSingleSelectionChildParameters, UseSingleSelectionContext, useSingleSelectionDeclarative } from "../component-detail/keyboard-navigation/use-single-selection.js";
import { UseSortableChildInfo } from "../component-detail/keyboard-navigation/use-sortable-children.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { usePaginatedChild, UsePaginatedChildContext, UsePaginatedChildParameters, usePaginatedChildren, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType, UsePaginatedChildReturn } from "../component-detail/use-paginated-children.js";
import { useStaggeredChild, UseStaggeredChildContext, UseStaggeredChildParameters, useStaggeredChildren, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenReturnType, UseStaggeredChildReturn } from "../component-detail/use-staggered-children.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement, UseRefElementReturnType } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus.js";
import { ManagedChildren, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, OmitStrong, OmitTargeted, PickTargeted } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { PressEventReason, usePress, UsePressParameters, UsePressReturnType } from "./use-press.js";
import { enhanceEvent } from "../util/event.js";

export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, UsePaginatedChildrenInfo<ChildElement>, UseStaggeredChildrenInfo<ChildElement> { }

export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters">,
    PickTargeted<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getHighestIndex" | "isValid"> {
    linearNavigationParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["linearNavigationParameters"], "getHighestIndex" | "isValid">;
    typeaheadNavigationParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["typeaheadNavigationParameters"], "isValid">;
    rearrangeableChildrenParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rearrangeableChildrenParameters"], "onRearranged">;
    sortableChildrenParameters: UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["sortableChildrenParameters"];
    rovingTabIndexParameters: OmitStrong<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
    paginatedChildrenParameters: Pick<UsePaginatedChildrenParameters<ParentElement, ChildElement, M>, "paginatedChildrenParameters">["paginatedChildrenParameters"];
    staggeredChildrenParameters: Pick<UseStaggeredChildrenParameters<ChildElement, M>, "staggeredChildrenParameters">["staggeredChildrenParameters"];
}

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">,
    Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">,
    OmitStrong<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "propsStableParentOrChild" | "propsParent" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;

    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<ChildElement>["childrenHaveFocusReturn"];
}


export interface CompleteListNavigationContext<_ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseManagedChildrenContext<M>,
    UsePaginatedChildContext,
    UseStaggeredChildContext,
    UseChildrenHaveFocusContext<ChildElement>,
    UseTypeaheadNavigationContext,
    UseSingleSelectionContext,
    RovingTabIndexChildContext { }


export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> {
    context: CompleteListNavigationContext<any, ChildElement, M>;
    /**
     * **NOTE**: Unusually, the press parameters are entirely optional.  
     * 
     * Pass `null` as the entire `pressParameters` object to disable default press behavior entirely.
     */
    pressParameters: OmitStrong<UsePressParameters<any>["pressParameters"], "excludeSpace"> | null,
    textContentParameters: OmitStrong<UseListNavigationSingleSelectionSortableChildParameters<ChildElement, M>["textContentParameters"], "hidden">;
    info: Omit<M, Exclude<keyof UseCompleteListNavigationChildInfo<ChildElement>, "index" | "focusSelf" | "hidden" | "disabled">>;
    sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
    rovingTabIndexParameters: UseRovingTabIndexChildParameters<any, any>["rovingTabIndexParameters"];
    singleSelectionParameters: UseSingleSelectionChildParameters<any, any>["singleSelectionParameters"];
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>
    extends Pick<UsePressReturnType<any>, "pressReturn">, Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement, M>, "textContentReturn" | "rovingTabIndexChildReturn" | "singleSelectionChildReturn">, OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable"> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
    props: ElementProps<ChildElement>;
    /** 
     * Spread these props onto whatever element is the "clickable" part of this list item.
     * 
     * **Optional**, as it's entirely possible that this list item isn't selected with a simple press but some more complicated process, like in a grid list.
     * 
     * */
    propsPressStable: ElementProps<any>;
    paginatedChildReturn: UsePaginatedChildReturn<ChildElement>["paginatedChildReturn"];
    staggeredChildReturn: UseStaggeredChildReturn<ChildElement>["staggeredChildReturn"];
}


/**
 * All the list-related hooks combined into one giant hook that encapsulates everything.
 * 
 * Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 * 
 * 
 * 
 * @returns 
 */
export function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    ...completeListNavigationParameters
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
    monitorCallCount(useCompleteListNavigation);

    const { initiallySelectedIndex } = singleSelectionParameters;
    const getChildren: () => ManagedChildren<M> = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const isValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.hidden)
            return false;
        return true;
    }, []);

    const { propsStable: propsRef, refElementReturn } = useRefElement<ParentElement>({})

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters: { onChildrenMountChange, ...managedChildrenParameters },
        context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        propsParent,
        propsStableParentOrChild
    } = useListNavigationSingleSelectionSortable<ParentElement, ChildElement, M>({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getHighestIndex, isValid, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValid, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { initiallyTabbedIndex: initiallySelectedIndex, ...rovingTabIndexParameters },
        singleSelectionParameters,
        rearrangeableChildrenParameters: {
            onRearranged: useStableCallback(() => { refreshPagination(paginatedChildrenParameters.paginationMin, paginatedChildrenParameters.paginationMax) }),
            ...rearrangeableChildrenParameters
        },
        refElementReturn,
        sortableChildrenParameters,
        ...completeListNavigationParameters,
    });

    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildrenCountChange }, context: { paginatedChildContext } } = usePaginatedChildren<ParentElement, ChildElement, M>({ refElementReturn, managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, rovingTabIndexReturn, paginatedChildrenParameters, linearNavigationParameters: { indexDemangler: rearrangeableChildrenReturn.indexDemangler } });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn: { getChildren: useStableCallback(() => managedChildrenReturn.getChildren()) }, staggeredChildrenParameters });

    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<M>({
        managedChildrenParameters: {
            onChildrenCountChange: useStableCallback((c) => { onChildrenCountChange(c) }),
            onChildrenMountChange,
            ...managedChildrenParameters
        }
    });
    const context = useMemoObject<CompleteListNavigationContext<ParentElement, ChildElement, M>>(useMemoObject({
        childrenHaveFocusChildContext,
        managedChildContext,
        paginatedChildContext,
        rovingTabIndexContext,
        singleSelectionContext,
        staggeredChildContext,
        typeaheadNavigationContext
    }));

    return {
        context,
        props: useMergedProps(propsParent, propsRef, propsStableParentOrChild),

        managedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        sortableChildrenReturn,
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn
    }
}

export function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    info,
    textContentParameters,
    context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, typeaheadNavigationContext },
    sortableChildParameters,
    pressParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    ...void1
}: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M> {
    monitorCallCount(useCompleteListNavigationChild);
    assertEmptyObject(void1);
    const { onPressSync, ...pressParameters1 } = (pressParameters ?? {});

    let { index, focusSelf, hidden, disabled } = info;
    const { info: mcp3, paginatedChildReturn, paginatedChildReturn: { hideBecausePaginated }, props: paginationProps } = usePaginatedChild<ChildElement>({ info: { index }, context: { paginatedChildContext } })
    const { info: mcp4, staggeredChildReturn, staggeredChildReturn: { hideBecauseStaggered }, props: staggeredProps } = useStaggeredChild<ChildElement>({ info, context: { staggeredChildContext } });

    hidden ||= (hideBecausePaginated || hideBecauseStaggered);

    if (hidden)
        disabled = true;

    const { refElementReturn, propsStable } = useRefElement<ChildElement>({ refElementParameters: {} });
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        pressParameters: { excludeSpace, ...pressParameters2 },
        textContentReturn,
        singleSelectionChildReturn,
        info: mcp5,
        props: propsLs,
        rovingTabIndexChildReturn
    } = useListNavigationSingleSelectionChild<ChildElement, M>({
        info: { index, disabled, hidden },
        context: { rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext },
        refElementReturn,
        textContentParameters: { hidden, ...textContentParameters },
        rovingTabIndexParameters,
        singleSelectionParameters
    });
    const onPress = useStableCallback((e: PressEventReason<any>) => {
        if (singleSelectionParameters.selectionMode == "activation")
            singleSelectionContext.onSelectedIndexChange?.(enhanceEvent(e, { selectedIndex: index }));
        onPressSync?.(e);
    });
    const { propsStable: pressRefProps, refElementReturn: pressRefElementReturn } = useRefElement<any>({ refElementParameters: {} })
    const {
        pressReturn,
        props: pressProps
    } = usePress({
        refElementReturn: pressRefElementReturn,
        pressParameters: {
            focusSelf,
            ...pressParameters1,
            ...pressParameters2,
            onPressSync: (rovingTabIndexParameters.untabbable || info.disabled || info.hidden) ? null : onPress,
            excludeSpace: useStableCallback(() => { return excludeSpace?.() || false; }),
        }
    })

    const mcp1: UseCompleteListNavigationChildInfo<ChildElement> = {
        index,
        focusSelf,
        getElement: refElementReturn.getElement,
        getSortValue: sortableChildParameters.getSortValue,
        disabled,
        hidden,
        ...mcp4,
        ...mcp3,
        ...mcp5,
    }

    const { managedChildReturn } = useManagedChild<M>({ context: { managedChildContext }, info: { ...mcp1, ...info } as M });

    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableCallback<NonNullable<typeof ocfic1>>((focused, prev, e) => {
        ocfic1?.(focused, prev, e);
        ocfic2?.(focused, prev, e);
    })
    const { hasCurrentFocusReturn } = useHasCurrentFocus<ChildElement>({ hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, onCurrentFocusedChanged: null }, refElementReturn });


    const props = useMergedProps<ChildElement>(
        propsStable,
        hasCurrentFocusReturn.propsStable,
        propsLs,
        paginationProps,
        staggeredProps
    );

    return {
        props,
        pressReturn,
        textContentReturn,
        refElementReturn,
        singleSelectionChildReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        paginatedChildReturn,
        staggeredChildReturn,
        rovingTabIndexChildReturn,
        propsPressStable: useMergedProps(pressProps, pressRefProps)
    }

}

export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, "singleSelectionReturn"> { }
export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitTargeted<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn", "changeSelectedIndex"> { }

export function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    rovingTabIndexParameters,
    singleSelectionDeclarativeParameters,
    sortableChildrenParameters,
    staggeredChildrenParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters
}: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M> {

    const ret: UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> = useCompleteListNavigation({
        linearNavigationParameters,
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: {
            initiallySelectedIndex: singleSelectionDeclarativeParameters.selectedIndex,
            // Needs to be a (stable) callback because of declaration order
            onSelectedIndexChange: useStableCallback((...e) => onSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        sortableChildrenParameters,
        staggeredChildrenParameters,
        typeaheadNavigationParameters
    });
    const { singleSelectionParameters: { onSelectedIndexChange } } = useSingleSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });

    const { singleSelectionReturn: { getSelectedIndex }, ...ret2 } = ret;
    return { ...ret2, singleSelectionReturn: { getSelectedIndex } };
}
