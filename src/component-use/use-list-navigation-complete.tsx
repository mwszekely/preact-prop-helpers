import { h } from "preact";
import { useCallback } from "preact/hooks";
import { useListNavigationSingleSelection, useListNavigationSingleSelectionChild } from "../component-detail/use-list-navigation-single-selection";
import { UseListNavigationSingleSelectionSortableChildInfo, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType } from "../component-detail/use-list-navigation-single-selection-sortable";
import { useSortableChildren } from "../component-detail/use-sortable-children";
import { useMergedProps } from "../dom-helpers/use-merged-props";
import { useRefElement } from "../dom-helpers/use-ref-element";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusChildParameters, UseChildrenHaveFocusReturnTypeInfo } from "../observers/use-children-have-focus";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus";
import { ManagedChildren, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-child-manager";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { usePress, UsePressParameters, UsePressReturnType } from "./use-press";


export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters" | "singleSelectionParameters"> {
    linearNavigationParameters: Omit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["linearNavigationParameters"], "getHighestIndex" | "indexDemangler" | "indexMangler" | "isValid">;
    typeaheadNavigationParameters: Omit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["typeaheadNavigationParameters"], "isValid">;
    rearrangeableChildrenParameters: Omit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
    sortableChildrenParameters: UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["sortableChildrenParameters"];
}

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>
    extends Pick<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "rovingTabIndexReturn" | "singleSelectionReturn" | "linearNavigationReturn" | "typeaheadNavigationReturn" | "rearrangeableChildrenReturn" | "sortableChildrenReturn"> {
    props: h.JSX.HTMLAttributes<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;

    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeInfo["childrenHaveFocusReturn"];
    //rearrangeableChildrenParameters: Pick<UseRearrangeableChildrenParameters["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
}


export interface CompleteListNavigationContext<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends UseManagedChildrenContext<M>,
    Pick<UseChildrenHaveFocusReturnTypeInfo, "childrenHaveFocusChildContext">,
    Pick<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext"> {
        childrenHaveFocusChildContext: UseChildrenHaveFocusChildParameters["childrenHaveFocusChildContext"];
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
export function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>({
    linearNavigationParameters,
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    typeaheadNavigationParameters,
    ...completeListNavigationParameters
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
    //type M = UseListNavigationSingleSelectionChildInfo<ChildElement>;
    const getChildren: () => ManagedChildren<M> = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const getValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        return !child.hidden;
    }, []);

    const { rearrangeableChildrenReturn, sortableChildrenReturn } = useSortableChildren<ParentElement, M>({
        rearrangeableChildrenParameters,
        sortableChildrenParameters
    });
    const { indexDemangler, indexMangler } = rearrangeableChildrenReturn;
    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        singleSelectionContext,
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn
    } = useListNavigationSingleSelection<ParentElement, ChildElement, M>({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getHighestIndex: getHighestChildIndex, isValid: getValid, indexDemangler, indexMangler, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValid: getValid, ...typeaheadNavigationParameters },
        ...completeListNavigationParameters,
    });

    //const { linearNavigationReturn, typeaheadNavigationReturn } = listNavigationSingleSelectionSortableReturn;

    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<M>({ managedChildrenParameters });
    const props = useMergedProps(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
    const context = useStableObject<CompleteListNavigationContext<ParentElement, ChildElement, M>>({
        singleSelectionContext,
        managedChildContext,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        childrenHaveFocusChildContext
    });

    return {
        context,
        props,

        managedChildrenReturn,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        //rearrangeableChildrenParameters: { getHighestChildIndex, getValid },
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn
    }
}

export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableChildParameters<ChildElement>, "managedChildParameters" | "typeaheadNavigationChildParameters"> {
    //managedChildContext: UseManagedChildParameters<M>["managedChildContext"];
    context: CompleteListNavigationContext<any, ChildElement, M>;
    pressParameters: UsePressParameters<ChildElement, never>["pressParameters"];
    singleSelectionChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["singleSelectionChildParameters"];
    //childrenHaveFocusChildContext: UseChildrenHaveFocusChildParameters["childrenHaveFocusChildContext"];
    completeListNavigationChildParameters: Omit<M, keyof UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>;
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>
    extends Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement>, "singleSelectionChildReturn" | "rovingTabIndexChildReturn"> {
    pressReturn: UsePressReturnType<ChildElement>["pressReturn"];
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
    props: h.JSX.HTMLAttributes<ChildElement>;
}

export function useCompleteListNavigationChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>({
    managedChildParameters: { hidden, disabled, index },
    completeListNavigationChildParameters,
    singleSelectionChildParameters,
    typeaheadNavigationChildParameters,
    context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext },
    pressParameters: { onPressSync: ops1, ...pressParameters },
    ..._void
}: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M> {

    if (hidden)
        disabled = true;

    const { refElementReturn } = useRefElement<ChildElement>({ refElementParameters: {} });
    const { getElement } = refElementReturn;
    const { focusSelf } = pressParameters;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        managedChildParameters: { getSelected, selected, setSelected },
        pressParameters: { onPressSync: ops2, ...p1 },
        rovingTabIndexChildReturn,
        singleSelectionChildReturn
    } = useListNavigationSingleSelectionChild<ChildElement>({
        managedChildParameters: { disabled, hidden, index },
        singleSelectionChildParameters: { ...singleSelectionChildParameters },
        rovingTabIndexChildContext,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        typeaheadNavigationChildParameters
    });
    const { getTabbable, setTabbable, tabbable } = rovingTabIndexChildReturn;

    const { pressReturn } = usePress<ChildElement>({
        pressParameters: {
            ...p1,
            ...pressParameters,
            onPressSync: (e) => {
                ops2?.(e);
                ops1?.(e);
            }
        }, refElementReturn
    });

    const mcp1: UseListNavigationSingleSelectionSortableChildInfo<ChildElement> = {
        disabled,
        focusSelf,
        getElement,
        getSelected,
        getTabbable,
        hidden,
        index,
        selected,
        setSelected,
        setTabbable,
        tabbable
    }

    const { managedChildReturn } = useManagedChild<M>({
        context: { managedChildContext },
        managedChildParameters: {
            ...mcp1,
            ...completeListNavigationChildParameters
        } as M
    })

    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ childrenHaveFocusChildContext });
    const onCurrentFocusedInnerChanged = useStableCallback<NonNullable<typeof ocfic1>>((focused, prev) => {
        ocfic1?.(focused, prev);
        ocfic2?.(focused, prev);
    })
    const { hasCurrentFocusReturn } = useHasCurrentFocus<ChildElement>({ hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, onCurrentFocusedChanged: null }, refElementReturn });


    const props = useMergedProps<ChildElement>(
        refElementReturn.propsStable,
        pressReturn.propsStable,
        hasCurrentFocusReturn.propsStable,
        rovingTabIndexChildReturn.propsUnstable,
        singleSelectionChildReturn.propsUnstable
    );

    return {
        props,
        pressReturn,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        hasCurrentFocusReturn,
        managedChildReturn
    }

}
