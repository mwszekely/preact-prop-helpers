import { h } from "preact";
import { useCallback } from "preact/hooks";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusChildParameters, UseChildrenHaveFocusReturnTypeInfo } from "./use-children-have-focus";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "./use-has-current-focus";
import { useListNavigationSingleSelectionSortable, useListNavigationSingleSelectionSortableChild, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType } from "./use-list-navigation-single-selection-sortable";
import { useMergedProps } from "./use-merged-props";
import { usePress, UsePressParameters, UsePressReturnType } from "./use-press";
import { useRefElement } from "./use-ref-element";
import { useStableCallback } from "./use-stable-callback";
import { useStableObject } from "./use-stable-getter";
import { useManagedChild, UseManagedChildParameters, useManagedChildren, UseManagedChildrenReturnType } from "./use-child-manager";
import { UseListNavigationSingleSelectionChildInfo } from "./use-list-navigation-single-selection";
import { UseListNavigationChildParameters } from "./use-list-navigation";


export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters" | "singleSelectionParameters" | "sortableChildrenParameters" | "typeaheadNavigationParameters"> {
    linearNavigationParameters: Omit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["linearNavigationParameters"], "getHighestIndex">
    rearrangeableChildrenParameters: Omit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rearrangeableChildrenParameters"], "getHighestChildIndex">
}

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>
    extends Pick<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "rovingTabIndexReturn" | "singleSelectionReturn" | "rearrangeableChildrenReturn" | "sortableChildrenReturn" | "linearNavigationReturn" | "typeaheadNavigationReturn"> {
    props: h.JSX.HTMLAttributes<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;

    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeInfo["childrenHaveFocusReturn"];
}


export type CompleteListNavigationContext<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> =
    Pick<UseManagedChildrenReturnType<M>, "managedChildContext"> &
    Pick<UseChildrenHaveFocusReturnTypeInfo, "childrenHaveFocusChildContext"> &
    Pick<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext">;

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
export function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    rearrangeableChildrenParameters,
    linearNavigationParameters,
    ...completeListNavigationParameters
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
    //type M = UseListNavigationSingleSelectionChildInfo<ChildElement>;
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);

    const {
        childrenHaveFocusParameters,
        managedChildrenParameters,
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        singleSelectionContext,
        ...listNavigationSingleSelectionSortableReturn
    } = useListNavigationSingleSelectionSortable<ParentElement, ChildElement, M>({
        managedChildrenReturn: { getChildren },
        rearrangeableChildrenParameters: { ...rearrangeableChildrenParameters, getHighestChildIndex },
        linearNavigationParameters: { getHighestIndex: getHighestChildIndex, ...linearNavigationParameters },
        ...completeListNavigationParameters,
    });

    const { linearNavigationReturn, typeaheadNavigationReturn } = listNavigationSingleSelectionSortableReturn;

    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { managedChildContext, managedChildrenReturn } = useManagedChildren<M>({ managedChildrenParameters });
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
        ...listNavigationSingleSelectionSortableReturn,
        childrenHaveFocusReturn
    }
}

export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableChildParameters<ChildElement>, "typeaheadNavigationChildContext" | "singleSelectionContext" | "rovingTabIndexChildContext" | "managedChildParameters" | "singleSelectionChildParameters" | "typeaheadNavigationChildParameters"> {
    managedChildContext: UseManagedChildParameters<M>["managedChildContext"];
    pressParameters: Omit<UsePressParameters<ChildElement, never>["pressParameters"], "onPressSync">;
    childrenHaveFocusChildContext: UseChildrenHaveFocusChildParameters["childrenHaveFocusChildContext"];
    completeListNavigationChildParameters: Omit<M, keyof UseListNavigationSingleSelectionChildInfo<ChildElement>>;
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element>
    extends Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement>, "singleSelectionChildReturn" | "rovingTabIndexChildReturn"> {
    pressReturn: UsePressReturnType<ChildElement>["pressReturn"];
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    props: h.JSX.HTMLAttributes<ChildElement>;
}

export function useCompleteListNavigationChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    managedChildParameters: { disabled, hidden, index },
    completeListNavigationChildParameters,
    singleSelectionChildParameters,
    typeaheadNavigationChildParameters,
    rovingTabIndexChildContext,
    singleSelectionContext,
    typeaheadNavigationChildContext,
    managedChildContext,
    childrenHaveFocusChildContext,
    pressParameters: { exclude, focusSelf, onPseudoActiveStart, onPseudoActiveStop }
}: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement> {

    const { refElementReturn } = useRefElement<ChildElement>({ refElementParameters: {} });
    const { getElement } = refElementReturn;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        managedChildParameters: { getSelected, selected, setSelected },
        pressParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn
    } = useListNavigationSingleSelectionSortableChild<ChildElement>({
        managedChildParameters: { disabled, hidden, index },
        rovingTabIndexChildContext,
        singleSelectionContext,
        singleSelectionChildParameters,
        typeaheadNavigationChildContext,
        typeaheadNavigationChildParameters
    });
    const { getTabbable, setTabbable, tabbable } = rovingTabIndexChildReturn;

    const { pressReturn } = usePress<ChildElement>({
        pressParameters: {
            ...pressParameters,
            exclude,
            focusSelf,
            onPseudoActiveStart,
            onPseudoActiveStop
        }, refElementReturn
    });

    const mcp1:  UseListNavigationSingleSelectionChildInfo<ChildElement> = {
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

    useManagedChild<M>({
        managedChildContext,
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
        hasCurrentFocusReturn
    }

}
