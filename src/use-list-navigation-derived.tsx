import { h, VNode } from "preact";
import { useCallback } from "preact/hooks";
import { useMergedProps } from "./use-merged-props";
import { ChildFlagOperations, ManagedChildOmits, ManagedChildrenOmits } from "./use-child-manager";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus";
import { LinearNavigationOmits, TypeaheadNavigationOmits } from "./use-keyboard-navigation";
import { ListNavigationChildOmits, ListNavigationParametersOmits, useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationChildReturnTypeWithHooks, UseListNavigationParameters, UseListNavigationReturnTypeInfo, UseListNavigationReturnTypeWithHooks, UseListNavigationSubInfo } from "./use-list-navigation";
import { usePress } from "./use-press";
import { RovingTabIndexChildOmits, RovingTabIndexParametersOmits, UseRovingTabIndexSubInfo } from "./use-roving-tabindex";
import { SingleSelectionChildOmits, SingleSelectionOmits, useSingleSelection, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnTypeInfo, UseSingleSelectionParameters, UseSingleSelectionReturnTypeInfo } from "./use-single-selection";
import { useSortableChildren, UseSortableChildrenParameters, UseSortableChildrenReturnTypeInfo } from "./use-sortable-children";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";

/**
 * These are all variations on useListNavigation that also incorporate sorting, selection, or both.
 * 
 * There aren't grid-nav versions of these because, geez, look at all this boilerplate just for lists.
 * Like 3 screens worth of interface types and 6 screens of functions that just move variables around.
 * Uh...when you inevitably need to do it yourself implement it here later lol (@me, myself in the future)
 */

export interface UseListNavigationSingleSelectionParameters<ChildElement extends Element, C, K extends string, SSOmits extends SingleSelectionOmits, LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends
    UseListNavigationParameters<LsOmits, LnOmits, TnOmits, RtiOmits | "initialIndex", McOmits>,
    UseSingleSelectionParameters<ChildElement, C, K, SSOmits | "children" | "setTabbableIndex">
//UseChildrenHaveFocusParameters 
{
    //childrenHaveFocus: Partial<UseChildrenHaveFocusParameters["childrenHaveFocus"]>;
}
export interface UseListNavigationSingleSelectionReturnTypeInfo<ParentOrChildElement extends Element, ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string> extends
    UseListNavigationReturnTypeInfo<ParentOrChildElement, ChildElement, LsSubInfo, ExtraFlagKeys>,
    UseSingleSelectionReturnTypeInfo {
}
export interface UseListNavigationSingleSelectionReturnTypeWithHooks<ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string> extends
    UseListNavigationSingleSelectionReturnTypeInfo<ParentOrChildElement, ChildElement, C, K> {
    /** **STABLE** */
    useListNavigationSingleSelectionChild: UseListNavigationSingleSelectionChild<ChildElement, C, K>;
    /** **STABLE** */
    //props: UseListNavigationReturnTypeWithHooks<ParentOrChildElement, ChildElement, C, K>["props"];
}


export type UseListNavigationSingleSelectionChild<ChildElement extends Element, LsSubInfo, K extends string> = (p: UseListNavigationSingleSelectionChildParameters<ChildElement, LsSubInfo, K, never, never, never, never, LsSubInfo>) => UseListNavigationSingleSelectionChildReturnTypeWithHooks<ChildElement>;
export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element, C, K extends string, SsOmits extends SingleSelectionChildOmits, LsOmits extends ListNavigationChildOmits, RtiOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits, SubbestInfo> extends
    UseListNavigationChildParameters<ChildElement, C, K | "selected", LsOmits, RtiOmits, McOmits, SubbestInfo>,
    UseSingleSelectionChildParameters<ChildElement, UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, "tabbable" | "selected" | K, SsOmits | "focusSelf", McOmits, SubbestInfo> {
}
// Omit<ManagedChildInfo<number, UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, K | "selected" | "tabbable">, McOmits | "subInfo">
// Omit<ManagedChildInfo<number, UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, K | "selected" | "tabbable">, McOmits | "subInfo">

export interface UseListNavigationSingleSelectionChildReturnTypeInfo<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement>, UseSingleSelectionChildReturnTypeInfo<ChildElement> {

    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<ChildElement>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged" | "onCurrentFocusedInnerChanged">>;
    /*singleSelectionChildReturn: {
        selected: boolean;
        getSelected(): boolean;
    }*/
}
export interface UseListNavigationSingleSelectionChildReturnTypeWithHooks<ChildElement extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<ChildElement> {
    //props: UseListNavigationChildReturnTypeWithHooks<ChildElement>["props"];
}















export type UseSortableListNavigationChildParameters<ChildElement extends Element, C, K extends string, LsOmits extends ListNavigationChildOmits, RtiOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits> = UseListNavigationChildParameters<ChildElement, C, K, LsOmits, RtiOmits, McOmits, C>;
export type UseSortableListNavigationChild<ChildElement extends Element, C, K extends string> = (p: UseSortableListNavigationChildParameters<ChildElement, C, K, never, never, never>) => UseListNavigationChildReturnTypeWithHooks<ChildElement>;





export interface UseSortableListNavigationReturnTypeInfo<ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string> extends UseListNavigationReturnTypeInfo<ParentOrChildElement, ChildElement, C, K>,
    UseSortableChildrenReturnTypeInfo<C, K> {
}
export type UseSortableListNavigationSingleSelectionChild<ChildElement extends Element, C, K extends string> = (args: UseListNavigationSingleSelectionChildParameters<ChildElement, C, K, never, never, never, never, C>) => UseListNavigationSingleSelectionChildReturnTypeWithHooks<ChildElement>;
export interface UseSortableListNavigationSingleSelectionReturnTypeInfo<ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string> extends
    UseSortableChildrenReturnTypeInfo<C, K>,
    UseListNavigationSingleSelectionReturnTypeInfo<ParentOrChildElement, ChildElement, C, K> {
}
export interface UseSortableListNavigationParameters<C, K extends string, LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends
    UseListNavigationParameters<LsOmits | "indexMangler" | "indexDemangler", LnOmits, TnOmits, RtiOmits, McOmits>,
    UseSortableChildrenParameters<C, K> {
}
export interface UseSortableListNavigationReturnTypeWithHooks<ParentElement extends Element, ChildElement extends Element, C, K extends string> extends UseSortableListNavigationReturnTypeInfo<ParentElement, ChildElement, C, K> {
    useProps: (props: h.JSX.HTMLAttributes<ParentElement>) => h.JSX.HTMLAttributes<ParentElement>
    useSortableListNavigationChild: UseSortableListNavigationChild<ChildElement, C, K>;
}
export interface UseSortableListNavigationSingleSelectionParameters<ChildElement extends Element, C, K extends string, SSOmits extends SingleSelectionOmits, LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends UseListNavigationSingleSelectionParameters<ChildElement, C, K, SSOmits, LsOmits | "indexMangler" | "indexDemangler", LnOmits, TnOmits, RtiOmits, McOmits> {

}
export interface UseSortableListNavigationSingleSelectionReturnTypeWithHooks<ParentElement extends Element, ChildElement extends Element, C, K extends string> extends
    UseSortableListNavigationSingleSelectionReturnTypeInfo<ParentElement, ChildElement, C, K> {
    useProps: (props: h.JSX.HTMLAttributes<ParentElement>) => h.JSX.HTMLAttributes<ParentElement>
    useSortableListNavigationSingleSelectionChild: UseSortableListNavigationSingleSelectionChild<ChildElement, C, K>;
}


/**
 * It's very common to combine a tabbable list of things and "selection" of one of those things.
 * 
 * Lists, radio buttons, tabs, etc. etc.
 * 
 * This is a shortcut that combines the two with the correct typing.
 * @param param0 
 * @returns 
 */
export function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string>({
    singleSelectionParameters: { selectedIndex, setSelectedIndex },
    listNavigationParameters,
    managedChildrenParameters,
    rovingTabIndexParameters: { ...rovingTabIndexParameters },
    linearNavigationParameters,
    typeaheadNavigationParameters
}: UseListNavigationSingleSelectionParameters<ChildElement, C, K, never, never, never, never, never, never>): UseListNavigationSingleSelectionReturnTypeWithHooks<ParentOrChildElement, ChildElement, C, K> {
    const {
        listNavigationReturn,
        managedChildrenReturn,
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        useListNavigationChild
    } = useListNavigation<ParentOrChildElement, ChildElement, C, K | "selected">({
        listNavigationParameters,
        managedChildrenParameters,
        rovingTabIndexParameters: {
            initialIndex: (selectedIndex ?? undefined),
            ...rovingTabIndexParameters
        },
        linearNavigationParameters,
        typeaheadNavigationParameters,
    });

    const { children } = managedChildrenReturn;
    const { setTabbableIndex } = rovingTabIndexReturn

    //    const getSelectionMode = useStableGetter(selectionMode);

    const { useSingleSelectionChild, singleSelectionReturn } = useSingleSelection<ParentOrChildElement, ChildElement, UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, "tabbable" | "selected" | K>({
        singleSelectionParameters: {
            children: children,
            selectedIndex,
            setSelectedIndex,
            setTabbableIndex
        },
        //childrenHaveFocusP: { onAllLostFocus, onAnyGainedFocus }
    });

    return {
        useListNavigationSingleSelectionChild: useCallback<UseListNavigationSingleSelectionChild<ChildElement, C, K | "selected">>((args): UseListNavigationSingleSelectionChildReturnTypeWithHooks<ChildElement> => {
            let {
                listNavigationChildParameters,
                managedChildParameters: { index, flags },
                rovingTabIndexChildParameters,
                singleSelectionChildParameters: { unselectable, ...ss },
                refElementReturn,
                subInfo
            } = args;
            let { hidden, focusSelf } = rovingTabIndexChildParameters;
            unselectable ||= (hidden ?? false);
            const {
                flags: ssflags,
                singleSelectionChildReturn,
                hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ofic1, onCurrentFocusedInnerChanged: ofic3 },
                refElementParameters: { onElementChange },
 //               onElementChange,
   //             onFocusedInnerChanged: ofic1,
     //           onLastFocusedInnerChanged,
                pressReturn,
            } = useSingleSelectionChild({
                refElementReturn,
                managedChildParameters: { index, flags },
                singleSelectionChildParameters: { ...ss, focusSelf, unselectable }
            });

            const {
                hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ofic2 },
                rovingTabIndexChildReturn
            } = useListNavigationChild({
                refElementReturn,
                listNavigationChildParameters,
                rovingTabIndexChildParameters,
                managedChildParameters: {
                    index,
                    flags: {
                        ...ssflags,
                        ...flags
                    } as Partial<Record<K | "selected" | "tabbable", ChildFlagOperations>>
                },
                subInfo,
            });

            const onCurrentFocusedInnerChanged = useStableCallback((f: boolean, p: boolean | undefined) => {
                ofic1?.(f, p);
                ofic2?.(f, p);
                ofic3?.(f, p);
            });

            return {
                pressReturn,
                hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
                refElementParameters: { onElementChange },
                rovingTabIndexChildReturn,
                singleSelectionChildReturn,
            };
        }, []),
        listNavigationReturn,
        linearNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn
    }
}

export function useSortableListNavigation<ParentElement extends Element, ChildElement extends Element, C, K extends string>(args: UseSortableListNavigationParameters<C, K, never, never, never, never, never>): UseSortableListNavigationReturnTypeWithHooks<ParentElement, ChildElement, C, K> {

    const {
        linearNavigationParameters,
        listNavigationParameters,
        managedChildrenParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        rearrangeableChildrenParameters,
        sortableChildrenParameters
    } = args;

    const {
        useSortableProps,
        rearrangeableChildrenReturn,
        sortableChildrenReturn
    } = useSortableChildren<ParentElement, C, K>({
        rearrangeableChildrenParameters,
        sortableChildrenParameters,
    });

    const { indexDemangler, indexMangler } = rearrangeableChildrenReturn;

    const {
        useListNavigationChild,
        listNavigationReturn,
        managedChildrenReturn,
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    } = useListNavigation<ParentElement, ChildElement, C, K>({
        linearNavigationParameters,
        listNavigationParameters: { indexDemangler, indexMangler, ...listNavigationParameters },
        managedChildrenParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });

    const useSortableListNavigationProps = useSortableProps;

    const useSortableListNavigationChild: UseSortableListNavigationChild<ChildElement, C, K> = (p) => {
        return useListNavigationChild(p);
    }

    return ({
        useProps: useSortableListNavigationProps,
        useSortableListNavigationChild,
        listNavigationReturn,
        managedChildrenReturn,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        linearNavigationReturn
    });

}


export function useSortableListNavigationSingleSelection<ParentElement extends Element, ChildElement extends Element, C, K extends string>({
    linearNavigationParameters,
    listNavigationParameters,
    managedChildrenParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    typeaheadNavigationParameters
}: UseSortableListNavigationSingleSelectionParameters<ChildElement, C, K, never, never, never, never, never, never>): UseSortableListNavigationSingleSelectionReturnTypeWithHooks<ParentElement, ChildElement, C, K> {

    const {
        useSortableProps,
        rearrangeableChildrenReturn,
        sortableChildrenReturn
    } = useSortableChildren<ParentElement, C, K>({
        rearrangeableChildrenParameters: { getIndex: useCallback((row) => row.index, []) },
        sortableChildrenParameters: {
            compare: useCallback((lhs, rhs) => { return lhs.index - rhs.index; }, []),
        }
    });

    const { indexDemangler, indexMangler } = rearrangeableChildrenReturn;

    const {
        useListNavigationSingleSelectionChild,
        listNavigationReturn,
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        linearNavigationReturn,
    } = useListNavigationSingleSelection<ParentElement, ChildElement, C, K>({
        linearNavigationParameters: linearNavigationParameters,
        listNavigationParameters: { indexDemangler, indexMangler, ...listNavigationParameters },
        managedChildrenParameters: managedChildrenParameters,
        rovingTabIndexParameters: rovingTabIndexParameters,
        typeaheadNavigationParameters: typeaheadNavigationParameters,
        singleSelectionParameters: singleSelectionParameters
    });

    const useSortableListNavigationSingleSelectionProps = useSortableProps;

    const useSortableListNavigationSingleSelectionChild = (p: UseListNavigationSingleSelectionChildParameters<ChildElement, C, K, never, never, never, never, C>) => {
        return useListNavigationSingleSelectionChild(p);
    }

    return ({
        useSortableListNavigationSingleSelectionChild,
        useProps: useSortableListNavigationSingleSelectionProps,
        listNavigationReturn,
        managedChildrenReturn,
        linearNavigationReturn,
        rearrangeableChildrenReturn,
        rovingTabIndexReturn,
        sortableChildrenReturn,
        typeaheadNavigationReturn,
        singleSelectionReturn
    });

}

