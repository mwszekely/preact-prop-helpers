import { h } from "preact";
import { useCallback } from "preact/hooks";
import { useListNavigationSingleSelection, useListNavigationSingleSelectionChild } from "../component-detail/use-list-navigation-single-selection";
import { UseListNavigationSingleSelectionSortableChildInfo, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType } from "../component-detail/use-list-navigation-single-selection-sortable";
import { UseSortableChildInfo, useSortableChildren } from "../component-detail/use-sortable-children";
import { useMergedProps } from "../dom-helpers/use-merged-props";
import { useRefElement } from "../dom-helpers/use-ref-element";
import { useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusChildParameters, UseChildrenHaveFocusReturnType } from "../observers/use-children-have-focus";
import { useHasCurrentFocus, UseHasCurrentFocusReturnType } from "../observers/use-has-current-focus";
import { ManagedChildren, useManagedChild, useManagedChildren, UseManagedChildrenContext, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-managed-children";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { usePress, UsePressParameters, UsePressReturnType } from "./use-press";

export interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters"> {
    linearNavigationParameters: Omit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["linearNavigationParameters"], "getHighestIndex" | "indexDemangler" | "indexMangler" | "isValid">;
    typeaheadNavigationParameters: Omit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["typeaheadNavigationParameters"], "isValid">;
    rearrangeableChildrenParameters: Omit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
    sortableChildrenParameters: UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["sortableChildrenParameters"];
    rovingTabIndexParameters: Omit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>["rovingTabIndexParameters"], "initiallyTabbedIndex">;
}

export interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>
    extends Pick<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "rovingTabIndexReturn" | "singleSelectionReturn" | "linearNavigationReturn" | "typeaheadNavigationReturn" | "rearrangeableChildrenReturn" | "sortableChildrenReturn"> {
    props: h.JSX.HTMLAttributes<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;

    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnType<ChildElement>["childrenHaveFocusReturn"];
    //rearrangeableChildrenParameters: Pick<UseRearrangeableChildrenParameters["rearrangeableChildrenParameters"], "getHighestChildIndex" | "getValid">;
}


export interface CompleteListNavigationContext<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends UseManagedChildrenContext<M>,
    Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusChildContext">,
    Pick<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "singleSelectionContext" | "rovingTabIndexChildContext" | "typeaheadNavigationChildContext"> {
    childrenHaveFocusChildContext: UseChildrenHaveFocusChildParameters<ChildElement>["childrenHaveFocusChildContext"];
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
    rovingTabIndexParameters,
    singleSelectionParameters,
    ...completeListNavigationParameters
}: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M> {
    //type M = UseListNavigationSingleSelectionChildInfo<ChildElement>;
    const { initiallySelectedIndex } = singleSelectionParameters;
    const getChildren: () => ManagedChildren<M> = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const getValid = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        return !child.hidden;
    }, []);

    const { rearrangeableChildrenReturn, sortableChildrenReturn } = useSortableChildren<M>({
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
        rovingTabIndexParameters: { initiallyTabbedIndex: initiallySelectedIndex, ...rovingTabIndexParameters },
        singleSelectionParameters,
        ...completeListNavigationParameters,
    });

    //const { linearNavigationReturn, typeaheadNavigationReturn } = listNavigationSingleSelectionSortableReturn;

    const { childrenHaveFocusChildContext, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren<M>({ managedChildrenParameters });
    const props = useMergedProps<ParentElement>(linearNavigationReturn.propsStable, typeaheadNavigationReturn.propsStable);
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
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn
    }
}

export interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, ExtraOmits extends keyof M> {
    context: CompleteListNavigationContext<any, ChildElement, M>;
    pressParameters: UsePressParameters<ChildElement>["pressParameters"];
    singleSelectionChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["singleSelectionChildParameters"];
    textContentParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["textContentParameters"];
    completeListNavigationChildParameters: Omit<M, keyof UseListNavigationSingleSelectionSortableChildInfo<ChildElement> | ExtraOmits>;
    rovingTabIndexChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["rovingTabIndexChildParameters"];
    managedChildParameters: UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["managedChildParameters"];
    sortableChildParameters: Pick<UseSortableChildInfo, "getSortValue">;
    //singleSelectionChildParameters: Pick<UseListNavigationSingleSelectionSortableChildParameters<ChildElement>["singleSelectionChildParameters"], "disabled">;
    //managedChildParameters: Omit<UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, "getElement" | "getSelected" | "setSelected" | "getTabbable" | "setTabbable" | "tabbable" | "selected" | "focusSelf">;
}

export interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>
    extends Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement>, "singleSelectionChildReturn" | "rovingTabIndexChildReturn"> {
    pressReturn: UsePressReturnType<ChildElement>["pressReturn"];
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
    props: h.JSX.HTMLAttributes<ChildElement>;
}

export function useCompleteListNavigationChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, ExtraOmits extends Exclude<keyof M, keyof UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>>({
    //managedChildParameters: { hidden, disabled, index, getSortValue },
    completeListNavigationChildParameters,
    singleSelectionChildParameters,
    rovingTabIndexChildParameters,
    managedChildParameters,
    textContentParameters,
    context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexChildContext, singleSelectionContext, typeaheadNavigationChildContext },
    pressParameters: { onPressSync: ops1, ...pressParameters },
    sortableChildParameters: { getSortValue },
    ..._void
}: UseCompleteListNavigationChildParameters<ChildElement, M, ExtraOmits>): UseCompleteListNavigationChildReturnType<ChildElement, M> {
    const { hidden } = rovingTabIndexChildParameters;
    const { index } = managedChildParameters;
    let { disabled } = singleSelectionChildParameters;
    if (hidden)
        disabled = true;

    const { refElementReturn } = useRefElement<ChildElement>({ refElementParameters: {} });
    const { getElement } = refElementReturn;
    const { focusSelf } = pressParameters;
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 },
        pressParameters: { onPressSync: ops2, ...p1 },
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        managedChildParameters: { setLocalSelected }
    } = useListNavigationSingleSelectionChild<ChildElement>({
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden },
        singleSelectionChildParameters: { ...singleSelectionChildParameters },
        rovingTabIndexChildContext,
        singleSelectionContext,
        typeaheadNavigationChildContext,
        refElementReturn,
        textContentParameters
    });
    const { getTabbable, setTabbable, tabbable } = rovingTabIndexChildReturn;

    const { pressReturn } = usePress<ChildElement>({
        pressParameters: {
            ...p1,
            ...pressParameters,
            onPressSync: disabled ? null : ((e) => {
                ops2?.(e);
                ops1?.(e);
            })
        }, refElementReturn
    });

    const { getSelected, selected } = singleSelectionChildReturn;

    const mcp1: UseListNavigationSingleSelectionSortableChildInfo<ChildElement> = {
        disabled,
        focusSelf,
        getElement,
        getSelected,
        getTabbable,
        hidden,
        index,
        selected,
        setLocalSelected,
        setTabbable,
        tabbable,
        getSortValue
    }

    const { managedChildReturn } = useManagedChild<M>({ context: { managedChildContext }, managedChildParameters: { index } }, { ...mcp1, ...completeListNavigationChildParameters } as M);

    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ childrenHaveFocusChildContext });
    const onCurrentFocusedInnerChanged = useStableCallback<NonNullable<typeof ocfic1>>((focused, prev, e) => {
        ocfic1?.(focused, prev, e);
        ocfic2?.(focused, prev, e);
    })
    const { hasCurrentFocusReturn } = useHasCurrentFocus<ChildElement>({ hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, onCurrentFocusedChanged: null }, refElementReturn });


    const props = useMergedProps<ChildElement>(
        refElementReturn.propsStable,
        pressReturn.propsUnstable,
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

/*
function foo<ParentElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>(p: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>) {
    const { singleSelectionReturn } = useCompleteListNavigation<ParentElement, ChildElement, M>(p);
    const selectedIndex = 0;
    useSingleSelectionDeclarative({ singleSelectionReturn, singleSelectionDeclarativeParameters: { selectedIndex } })
}*/
