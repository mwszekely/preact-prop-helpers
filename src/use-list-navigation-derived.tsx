import { h, VNode } from "preact";
import { useCallback } from "preact/hooks";
import { ChildFlagOperations, ManagedChildOmits, ManagedChildrenOmits } from "./use-child-manager";
import { UseChildrenHaveFocusParameters, UseHasFocusParameters } from "./use-has-focus";
import { LinearNavigationOmits, TypeaheadNavigationOmits } from "./use-keyboard-navigation";
import { ListNavigationChildOmits, ListNavigationParametersOmits, useListNavigation, UseListNavigationChildParameters, UseListNavigationChildReturnTypeInfo, UseListNavigationChildReturnTypeWithHooks, UseListNavigationParameters, UseListNavigationReturnTypeInfo, UseListNavigationReturnTypeWithHooks, UseListNavigationSubInfo } from "./use-list-navigation";
import { usePress } from "./use-press";
import { RovingTabIndexChildOmits, RovingTabIndexParametersOmits, UseRovingTabIndexSubInfo } from "./use-roving-tabindex";
import { SingleSelectionChildOmits, SingleSelectionOmits, useSingleSelection, UseSingleSelectionChildParameters, UseSingleSelectionParameters, UseSingleSelectionReturnTypeInfo } from "./use-single-selection";
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

export interface UseListNavigationSingleSelectionParameters<ChildElement extends Element, C, K extends string, SSOmits extends SingleSelectionOmits, LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends UseListNavigationParameters<LsOmits, LnOmits, TnOmits, RtiOmits | "initialIndex", McOmits>, UseSingleSelectionParameters<ChildElement, C, K, SSOmits | "children" | "setTabbableIndex"> {
    childrenHaveFocus: Partial<UseChildrenHaveFocusParameters["childrenHaveFocus"]>;
}
export interface UseListNavigationSingleSelectionReturnTypeInfo<ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string> extends UseListNavigationReturnTypeInfo<ChildElement, LsSubInfo, ExtraFlagKeys>, UseSingleSelectionReturnTypeInfo<ChildElement, UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<LsSubInfo>>, "tabbable" | "selected" | ExtraFlagKeys> {
}
export interface UseListNavigationSingleSelectionReturnTypeWithHooks<ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string> extends
    UseListNavigationSingleSelectionReturnTypeInfo<ChildElement, C, K> {
    /** **STABLE** */
    useListNavigationSingleSelectionChild: UseListNavigationSingleSelectionChild<ChildElement, C, K>;
    /** **STABLE** */
    useListNavigationSingleSelectionProps: UseListNavigationReturnTypeWithHooks<ParentOrChildElement, ChildElement, C, K>["useListNavigationProps"];
}


export type UseListNavigationSingleSelectionChild<ChildElement extends Element, LsSubInfo, K extends string> = (p: UseListNavigationSingleSelectionChildParameters<ChildElement, LsSubInfo, K, never, never, never, never, LsSubInfo>) => UseListNavigationSingleSelectionChildReturnTypeWithHooks<ChildElement>;
export interface UseListNavigationSingleSelectionChildParameters<E extends Element, C, K extends string, SsOmits extends SingleSelectionChildOmits, LsOmits extends ListNavigationChildOmits, RtiOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits, SubbestInfo> extends UseListNavigationChildParameters<C, K | "selected", LsOmits, RtiOmits, McOmits, SubbestInfo> {
    hasFocus: UseHasFocusParameters<E>;
    singleSelection: UseSingleSelectionChildParameters<E, C, K, SsOmits>["singleSelection"];
}
export interface UseListNavigationSingleSelectionChildReturnTypeInfo<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement> {
    singleSelection: {
        selected: boolean;
        getSelected(): boolean;
    }
}
export interface UseListNavigationSingleSelectionChildReturnTypeWithHooks<ChildElement extends Element> extends UseListNavigationSingleSelectionChildReturnTypeInfo<ChildElement> {
    useListNavigationSingleSelectionChildProps: UseListNavigationChildReturnTypeWithHooks<ChildElement>["useListNavigationChildProps"];
}















export type UseSortableListNavigationChildParameters<C, K extends string, LsOmits extends ListNavigationChildOmits, RtiOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits> = UseListNavigationChildParameters<C, K, LsOmits, RtiOmits, McOmits, C>;
export type UseSortableListNavigationChild<ChildElement extends Element, C, K extends string> = (p: UseSortableListNavigationChildParameters<C, K, never, never, never>) => UseListNavigationChildReturnTypeWithHooks<ChildElement>;





export interface UseSortableListNavigationReturnTypeInfo<ChildElement extends Element, C, K extends string> extends UseListNavigationReturnTypeInfo<ChildElement, C, K>,
    UseSortableChildrenReturnTypeInfo<C, K> {
}
export type UseSortableListNavigationSingleSelectionChild<ChildElement extends Element, C, K extends string> = (args: UseListNavigationSingleSelectionChildParameters<ChildElement, C, K, never, never, never, never, C>) => UseListNavigationSingleSelectionChildReturnTypeWithHooks<ChildElement>;
export interface UseSortableListNavigationSingleSelectionReturnTypeInfo<ChildElement extends Element, C, K extends string> extends UseSortableChildrenReturnTypeInfo<C, K>, UseListNavigationReturnTypeInfo<ChildElement, C, K> {
}
export interface UseSortableListNavigationParameters<C, K extends string, LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends
    UseListNavigationParameters<LsOmits | "indexMangler" | "indexDemangler", LnOmits, TnOmits, RtiOmits, McOmits>,
    UseSortableChildrenParameters<C, K> {
}
export interface UseSortableListNavigationReturnTypeWithHooks<ParentElement extends Element, ChildElement extends Element, C, K extends string> extends UseSortableListNavigationReturnTypeInfo<ChildElement, C, K> {
    useSortableListNavigationProps: (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => h.JSX.HTMLAttributes<ParentElement>
    useSortableListNavigationChild: UseSortableListNavigationChild<ChildElement, C, K>;
}
export interface UseSortableListNavigationSingleSelectionParameters<ChildElement extends Element, C, K extends string, SSOmits extends SingleSelectionOmits, LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends UseListNavigationSingleSelectionParameters<ChildElement, C, K, SSOmits, LsOmits | "indexMangler" | "indexDemangler", LnOmits, TnOmits, RtiOmits, McOmits> {

}
export interface UseSortableListNavigationSingleSelectionReturnTypeWithHooks<ParentElement extends Element, ChildElement extends Element, C, K extends string> extends
    UseSortableListNavigationSingleSelectionReturnTypeInfo<ChildElement, C, K> {
    useSortableListNavigationSingleSelectionProps: (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => h.JSX.HTMLAttributes<ParentElement>
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
    singleSelection: { selectedIndex, selectionMode, setSelectedIndex },
    listNavigation,
    managedChildren,
    rovingTabIndex: { ...rovingTabIndex },
    linearNavigation,
    typeaheadNavigation,
    childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus }
}: UseListNavigationSingleSelectionParameters<ChildElement, C, K, never, never, never, never, never, never>): UseListNavigationSingleSelectionReturnTypeWithHooks<ParentOrChildElement, ChildElement, C, K> {
    const parentReturnType = useListNavigation<ParentOrChildElement, ChildElement, C, K | "selected">({
        listNavigation,
        managedChildren,
        rovingTabIndex: {
            initialIndex: (selectedIndex ?? undefined),
            ...rovingTabIndex
        },
        linearNavigation,
        typeaheadNavigation
    });

    const getSelectionMode = useStableGetter(selectionMode);

    const { useSingleSelectionChild, ...singleSelectionInfo } = useSingleSelection<ParentOrChildElement, ChildElement, UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, "tabbable" | "selected" | K>({
        singleSelection: {
            children: parentReturnType.managedChildren.children,
            selectedIndex,
            selectionMode,
            setSelectedIndex,
            setTabbableIndex: parentReturnType.rovingTabIndex.setTabbableIndex
        },
        childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus }
    });

    const stableOnChange = useStableCallback(setSelectedIndex);

    const {
        useListNavigationChild,
        useListNavigationProps,
        ...listRest
    } = parentReturnType;

    return {
        useListNavigationSingleSelectionChild: useCallback<UseListNavigationSingleSelectionChild<ChildElement, C, K | "selected">>(({ managedChild: { index, flags }, rovingTabIndex: rti, listNavigation: ls, hasFocus, singleSelection: { focusSelf, unselectable, ...ss }, subInfo }) => {
            const { useSingleSelectionChildProps, flags: ssflags, ...singleSelectionInfo } = useSingleSelectionChild({
                managedChild: { index, flags },
                hasFocus,
                singleSelection: { ...ss, focusSelf, unselectable: (unselectable || (rti.hidden ?? false)) }
            });

            const {
                rovingTabIndex: rti_ret,
                useListNavigationChildProps
            } = useListNavigationChild({
                managedChild: {
                    index,
                    flags: {
                        ...ssflags,
                        ...flags
                    } as Partial<Record<K | "selected" | "tabbable", ChildFlagOperations>>
                },
                rovingTabIndex: rti,
                listNavigation: ls,
                subInfo,
            });
            const getIndex = useStableGetter(index);

            const usePressProps = usePress<ChildElement>({
                onClickSync: (e) => {
                    const selectionMode = getSelectionMode();
                    if (selectionMode == "activation")
                        stableOnChange(getIndex(), e);
                },
                exclude: {},
                hasFocus,
                focusSelf
            });

            return {
                useListNavigationSingleSelectionChildProps: (props: h.JSX.HTMLAttributes<ChildElement>) => usePressProps(useSingleSelectionChildProps(useListNavigationChildProps(props))),
                rovingTabIndex: rti_ret,
                singleSelection: singleSelectionInfo.singleSelection
            };
        }, []),
        useListNavigationSingleSelectionProps: useCallback((...p: Parameters<typeof useListNavigationProps>) => { return useListNavigationProps(...p) }, []),
        ...listRest,
        ...singleSelectionInfo
    }
}

export function useSortableListNavigation<ParentElement extends Element, ChildElement extends Element, C, K extends string>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation, rearrangeableChildren, sortableChildren }: UseSortableListNavigationParameters<C, K, never, never, never, never, never>): UseSortableListNavigationReturnTypeWithHooks<ParentElement, ChildElement, C, K> {

    const {
        useSortableProps,
        ...sortableChildrenReturnType
    } = useSortableChildren<ParentElement, C, K>({
        rearrangeableChildren,
        sortableChildren,
    });

    const { rearrangeableChildren: { indexDemangler, indexMangler } } = sortableChildrenReturnType;

    const {
        useListNavigationChild,
        useListNavigationProps,
        ...listNavReturnType
    } = useListNavigation<ParentElement, ChildElement, C, K>({
        linearNavigation: linearNavigation,
        listNavigation: { indexDemangler, indexMangler, ...listNavigation },
        managedChildren: managedChildren,
        rovingTabIndex,
        typeaheadNavigation: typeaheadNavigation,
    });

    const useSortableListNavigationProps = (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => {
        return (useListNavigationProps(useSortableProps(props)))
    }
    const useSortableListNavigationChild: UseSortableListNavigationChild<ChildElement, C, K> = (p) => {
        return useListNavigationChild(p)
    }

    return ({
        useSortableListNavigationProps,
        useSortableListNavigationChild,
        ...listNavReturnType,
        ...sortableChildrenReturnType
    });

}


export function useSortableListNavigationSingleSelection<ParentElement extends Element, ChildElement extends Element, C, K extends string>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, singleSelection, typeaheadNavigation, childrenHaveFocus }: UseSortableListNavigationSingleSelectionParameters<ChildElement, C, K, never, never, never, never, never, never>): UseSortableListNavigationSingleSelectionReturnTypeWithHooks<ParentElement, ChildElement, C, K> {

    const {
        useSortableProps,
        ...sortableReturnType
    } = useSortableChildren<ParentElement, C, K>({
        rearrangeableChildren: { getIndex: useCallback((row) => row.index, []) },
        sortableChildren: {
            compare: useCallback((lhs, rhs) => { return lhs.index - rhs.index; }, []),
        }
    });

    const { rearrangeableChildren: { indexDemangler, indexMangler } } = sortableReturnType;

    const {
        useListNavigationSingleSelectionChild,
        useListNavigationSingleSelectionProps,
        ...listNavReturnType
    } = useListNavigationSingleSelection<ParentElement, ChildElement, C, K>({
        linearNavigation: linearNavigation,
        listNavigation: { indexDemangler, indexMangler, ...listNavigation },
        managedChildren: managedChildren,
        rovingTabIndex: rovingTabIndex,
        typeaheadNavigation: typeaheadNavigation,
        singleSelection: singleSelection,
        childrenHaveFocus: childrenHaveFocus
    });

    const useSortableListNavigationSingleSelectionProps = (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => {
        return (useListNavigationSingleSelectionProps(useSortableProps(props)));
    }
    const useSortableListNavigationSingleSelectionChild = (p: UseListNavigationSingleSelectionChildParameters<ChildElement, C, K, never, never, never, never, C>) => {
        return useListNavigationSingleSelectionChild(p);
    }

    return ({
        useSortableListNavigationSingleSelectionChild,
        useSortableListNavigationSingleSelectionProps,
        //sortable: { sort, shuffle, rearrange, demangleMap, indexDemangler, indexMangler, mangleMap },
        ...sortableReturnType,
        ...listNavReturnType
    });

}

