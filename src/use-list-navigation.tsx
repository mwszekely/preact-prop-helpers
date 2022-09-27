import { h, VNode } from "preact";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { usePress } from "./use-press";
import { useChildrenHaveFocus, UseChildrenHaveFocusParameters, UseHasFocusParameters } from "./use-has-focus";
import { ChildFlagOperations, ManagedChildOmits, ManagedChildren, ManagedChildrenOmits, OnChildrenMountChange, useChildrenFlag } from "./use-child-manager";
import { LinearNavigationOmits, TypeaheadNavigationOmits, useLinearNavigation, UseLinearNavigationParameters, UseLinearNavigationReturnTypeInfo, useTypeaheadNavigation, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnTypeInfo } from "./use-keyboard-navigation";
import { useMergedProps } from "./use-merged-props";
import { useEnsureStability } from "./use-passive-state";
import { RovingTabIndexChildOmits, RovingTabIndexParametersOmits, useRovingTabIndex, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnTypeInfo, UseRovingTabIndexParameters, UseRovingTabIndexReturnTypeInfo, UseRovingTabIndexSubInfo } from "./use-roving-tabindex";
import { useSortableChildren, UseSortableChildrenParameters, UseSortableChildrenReturnTypeInfo } from "./use-sortable-children";
import { useStableCallback } from "./use-stable-callback";
import { useStableGetter } from "./use-stable-getter";
import { useState } from "./use-state";


/**
 * 
 * TODO: This table was scrapped when this was changed to just accept a collator directly,
 * but it's not bad for a collation crash course and I might use it again.
 * Even just as a "this is why it's important and good to use these things" thing.
 * 
 * |Lang.|Target|User input|`base`|`accent`|`case`|`variant`|
 * |----|----|----|----|----|----|----|
 * |EN|Hi|Bye|❌|❌|❌|❌|
 * |EN|Hi|Hi|✅|✅|✅|✅|
 * |EN|Hi|Ｈｉ|✅|✅|✅|❌|
 * |EN|Hi|hi|✅|✅|❌|❌|
 * |EN|Hi|Hï|✅|❌|❌|❌|
 * |EN|å|aa|❌|❌|❌|❌|
 * |DA|å|aa|✅|✅|✅|❌|
 * |DA|å|AA|✅|✅|❌|❌|
 * |DA|å|Aa|✅|✅|❌|❌|
 * |DA|å|aA|❌|❌|❌|❌|
 * |EN|å|a|✅|✅|❌|❌|
 * |DA|å|a|✅|✅|❌|❌|
 * |JP|着|着|✅|✅|✅|✅|
 * |JP|カ|ｶ|✅|✅|✅|✅|
 * |JP|カ|か|✅|✅|✅|❌|
 * |JP|カ|ヵ|✅|✅|✅|❌|
 * |JP|カ|㋕|✅|✅|❌|❌|
 * |JP|カ|ガ|✅|❌|❌|❌|
 * |JP|カ|力|❌|❌|❌|❌|
 * |ZH|紅|红|❌|❌|❌|❌|
 * 
 * 
 * (Note to self: At some point, this file will probably be normalized
 * by somebody and 着 will turn back into 着.)
 * 
 */
const _dummy: any = null;


function identity<T>(t: T) { return t; }
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export interface UseListNavigationSubInfo<C> {
    text: string;

    subInfo: C;
}

/**
 * @param fromUserInteraction Whether the user interacted with this child as a means of navigating to it.  In that was the case, the child is also focused. Otherwise, focus moves as the browser determines.
 */
export type NavigateToIndex = (i: number | null, fromUserInteraction: boolean) => void;


interface LSP {

    /**
     * This and indexDemangler are used to allow children to be navigated in an order
     * that doesn't necessarily match their child order, like if a list is sorted.
     * 
     * Used to turn an "absolute" index into a "sorted/filtered/mangled" one.
     * 
     * For example, navigateToFirst mangles 0 and navigates to that resulting row.
     * @param rawIndex 
     */
    indexMangler?(rawIndex: number): number;

    /**
     * Used to turn a "mangled" index into it's "unsorted" or "unmangled" index.
     * 
     * For example, when incrementing or decrementing the currently selected index,
     * it needs to be demangled to do "normal" math on it, and then re-mangled (above)
     * to turn that absolute row index back into a mangled one.
     * @param transformedIndex 
     */
    indexDemangler?(transformedIndex: number): number;
}

export type ListNavigationParametersOmits = keyof LSP;

// *** Parameters (list, list-single, list-child, list-single-child)
export interface UseListNavigationParameters<LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends
    UseRovingTabIndexParameters<RtiOmits, McOmits>,
    UseTypeaheadNavigationParameters<TnOmits | "getIndex" | "setIndex">,
    UseLinearNavigationParameters<LnOmits | "navigateToFirst" | "navigateToLast" | "navigateToNext" | "navigateToPrev"> {
    listNavigation: Omit<LSP, LsOmits>;
}

interface SSP {
    selectedIndex: number | null;
    onSelectedIndexChange: (event: Event, newIndex: number) => void;
    selectionMode: "focus" | "activation";
}
export type SingleSelectionOmits = keyof SSP;

export interface UseListNavigationSingleSelectionParameters<SSOmits extends SingleSelectionOmits, LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends UseListNavigationParameters<LsOmits, LnOmits, TnOmits, RtiOmits | "initialIndex", McOmits> {
    singleSelection: Omit<SSP, SSOmits>;
    childrenHaveFocus: Partial<UseChildrenHaveFocusParameters["childrenHaveFocus"]>;
}
export type ListNavigationChildOmits = keyof UseListNavigationSubInfo<any>;
export interface UseListNavigationChildParameters<LsSubInfo, ExtraFlagKeys extends string, LsOmits extends ListNavigationChildOmits, RtiOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits, SubbestInfo> extends
    UseRovingTabIndexChildParameters<UseListNavigationSubInfo<LsSubInfo>, ExtraFlagKeys, RtiOmits, McOmits, SubbestInfo> {
    //rovingTabIndex: Omit<UseRovingTabIndexChildParameters<UseListNavigationSubInfo<LsSubInfo>, ExtraFlagKeys, never>["rovingTabIndex"], "subInfo">;
    listNavigation: Omit<UseListNavigationSubInfo<LsSubInfo>, LsOmits | "subInfo">;
}

export interface UseListNavigationSingleSelectionChildParameters<E extends Element, C, K extends string, LsOmits extends ListNavigationChildOmits, RtiOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits, SubbestInfo> extends UseListNavigationChildParameters<C, K | "selected", LsOmits, RtiOmits, McOmits, SubbestInfo> {
    hasFocus: UseHasFocusParameters<E>;
}



export interface UseListNavigationReturnTypeInfo<ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string> extends UseRovingTabIndexReturnTypeInfo<UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<LsSubInfo>>, "tabbable" | ExtraFlagKeys>, UseTypeaheadNavigationReturnTypeInfo, UseLinearNavigationReturnTypeInfo {
    listNavigation: { navigateToIndex: NavigateToIndex };
}

// *** Return types (list, list-single, list-child, list-single-child)
export interface UseListNavigationReturnTypeWithHooks<ParentOrChildElement extends Element, ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string> extends
    UseListNavigationReturnTypeInfo<ChildElement, LsSubInfo, ExtraFlagKeys> {

    /** **STABLE** */
    useListNavigationChild: UseListNavigationChild<ChildElement, LsSubInfo, ExtraFlagKeys>;
    /** **STABLE** */
    useListNavigationProps: (props: h.JSX.HTMLAttributes<ParentOrChildElement>) => h.JSX.HTMLAttributes<ParentOrChildElement>;
}

export interface UseListNavigationChildReturnTypeInfo<ChildElement extends Element> extends UseRovingTabIndexChildReturnTypeInfo<ChildElement> {

}

export interface UseListNavigationChildReturnTypeWithHooks<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement> {
    useListNavigationChildProps: (p: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement>;
}

export interface UseListNavigationSingleSelectionReturnTypeInfo<ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string> extends UseListNavigationReturnTypeInfo<ChildElement, LsSubInfo, ExtraFlagKeys> {
    singleSelection: {}
}

export interface UseListNavigationSingleSelectionReturnTypeWithHooks<ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string> extends
    UseListNavigationSingleSelectionReturnTypeInfo<ChildElement, C, K> {
    /** **STABLE** */
    useListNavigationSingleSelectionChild: UseListNavigationSingleSelectionChild<ChildElement, C, K>;
    /** **STABLE** */
    useListNavigationSingleSelectionProps: UseListNavigationReturnTypeWithHooks<ParentOrChildElement, ChildElement, C, K>["useListNavigationProps"];
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


export type UseListNavigationChild<ChildElement extends Element, C, K extends string> = (a: UseListNavigationChildParameters<C, K, never, never, never, C>) => UseListNavigationChildReturnTypeWithHooks<ChildElement>;

export type UseListNavigationSingleSelectionChild<ChildElement extends Element, C, K extends string> = (p: UseListNavigationSingleSelectionChildParameters<ChildElement, C, K, never, never, never, C>) => UseListNavigationSingleSelectionChildReturnTypeWithHooks<ChildElement>;



/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ParentOrChildElement extends Element, ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string>({
    managedChildren: { onChildrenMountChange, ...mc },
    rovingTabIndex,
    listNavigation: { indexDemangler, indexMangler },
    linearNavigation,
    typeaheadNavigation
}: UseListNavigationParameters<never, never, never, never, never>): UseListNavigationReturnTypeWithHooks<ParentOrChildElement, ChildElement, LsSubInfo, ExtraFlagKeys> {
    indexMangler ??= identity;
    indexDemangler ??= identity;

    useEnsureStability("useListNavigation", indexMangler, indexDemangler);


    const parentReturnType = useRovingTabIndex<ChildElement, UseListNavigationSubInfo<LsSubInfo>, ExtraFlagKeys>({
        managedChildren: {
            ...mc, onChildrenMountChange: useCallback<OnChildrenMountChange<number>>((m, u) => {
                onChildrenMountChange?.(m, u);
            }, [])
        },
        rovingTabIndex
    });

    const { useRovingTabIndexChild, managedChildren: { children }, rovingTabIndex: { getTabbableIndex, setTabbableIndex } } = parentReturnType;

    const navigateToIndex = useCallback((i: number | null, fromUserInteraction: boolean) => {
        if (i != null) {
            const nextIndex = tryNavigateToIndex({
                children: children,
                default: 0,
                target: i,
                searchDirection: 1,
                indexMangler: indexMangler ?? identity,
                indexDemangler: indexDemangler ?? identity
            });
            setTabbableIndex(i == null ? null : nextIndex, fromUserInteraction);
        }
        else {
            setTabbableIndex(null, fromUserInteraction);
        }
    }, []);

    const {
        useTypeaheadNavigationChild,
        useTypeaheadNavigationProps,
        typeaheadNavigation: {
            currentTypeahead,
            invalidTypeahead
        }
    } = useTypeaheadNavigation<ParentOrChildElement>({
        typeaheadNavigation: {
            getIndex: getTabbableIndex,
            setIndex: useCallback((index: (number | null) | ((prev: number | null) => (number | null))) => {
                setTabbableIndex(index, true);
            }, []),
            ...typeaheadNavigation
        }
    });
    const { useLinearNavigationProps } = useLinearNavigation<ParentOrChildElement>({
        linearNavigation: {
            navigateToPrev: useCallback(() => {
                setTabbableIndex(c => {
                    return tryNavigateToIndex({ children, default: c ?? 0, target: indexDemangler!(indexMangler!((c ?? 0)) - 1), searchDirection: -1, indexMangler: indexMangler ?? identity, indexDemangler: indexDemangler ?? identity })
                }, true)
            }, []),
            navigateToNext: useCallback(() => {
                setTabbableIndex(c => {
                    return tryNavigateToIndex({ children, default: c ?? 0, target: indexDemangler!(indexMangler!(c ?? 0) + 1), searchDirection: 1, indexMangler: indexMangler ?? identity, indexDemangler: indexDemangler ?? identity });
                }, true)
            }, []),
            navigateToFirst: useCallback(() => { navigateToIndex(indexDemangler!(0), true); }, []),
            navigateToLast: useCallback(() => { navigateToIndex(indexDemangler!(children.getHighestIndex()), true); }, []),
            ...linearNavigation
        }
    });

    const useListNavigationProps = useCallback((props: h.JSX.HTMLAttributes<ParentOrChildElement>): h.JSX.HTMLAttributes<ParentOrChildElement> => {
        return useLinearNavigationProps(useTypeaheadNavigationProps(props));
    }, [useLinearNavigationProps, useTypeaheadNavigationProps]);


    const useListNavigationChild = useCallback<UseListNavigationChild<ChildElement, LsSubInfo, ExtraFlagKeys>>(({ managedChild: { index, flags }, rovingTabIndex: { blurSelf, focusSelf, hidden }, listNavigation: { text }, subInfo }) => {

        const _v: void = useTypeaheadNavigationChild({ text, index });
        const getIndex = useStableGetter(index);
        useEffect(() => {

            return () => {
                if (getTabbableIndex() == getIndex()) {
                    navigateToIndex(index, false);
                }
            };
        }, []);

        const {
            useRovingTabIndexChildProps,
            rovingTabIndex: {
                tabbable,
                getTabbable,
                getElement
            }
        } = useRovingTabIndexChild({
            managedChild: { index, flags },
            rovingTabIndex: { blurSelf, focusSelf, hidden: !!hidden },
            subInfo: { text, subInfo }
        });

        const useListNavigationChildProps: (p: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement> = function ({ ...props }) {
            return useMergedProps<ChildElement>(useRovingTabIndexChildProps((({ inert: hidden } as h.JSX.HTMLAttributes<ChildElement>))), props);
        }

        return {
            useListNavigationChildProps,
            rovingTabIndex: {
                tabbable,
                getTabbable,
                getElement
            }
        }
    }, [useTypeaheadNavigationChild, useRovingTabIndexChild, navigateToIndex]);

    return {
        useListNavigationChild,
        useListNavigationProps,

        listNavigation: { navigateToIndex },
        managedChildren: parentReturnType.managedChildren,
        rovingTabIndex: parentReturnType.rovingTabIndex,
        linearNavigation: {},
        typeaheadNavigation: { currentTypeahead, invalidTypeahead }
        /*listNavigation: { navigateToIndex },
        rovingTabIndex: { focusSelf, getTabbableIndex, setTabbableIndex },
        linearNavigation: {},
        typeaheadNavigation: { currentTypeahead, invalidTypeahead }*/
    }
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
    singleSelection: { selectedIndex, selectionMode, onSelectedIndexChange },
    listNavigation,
    managedChildren,
    rovingTabIndex: { ...rovingTabIndex },
    linearNavigation,
    typeaheadNavigation,
    childrenHaveFocus: { onAllLostFocus, onAnyGainedFocus }
}: UseListNavigationSingleSelectionParameters<never, never, never, never, never, never>): UseListNavigationSingleSelectionReturnTypeWithHooks<ParentOrChildElement, ChildElement, C, K> {
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

    const { useChildrenHaveFocusChild } = useChildrenHaveFocus({
        childrenHaveFocus: {
            onAllLostFocus: useStableCallback(() => {
                onAllLostFocus?.();
                if (selectedIndex != null)
                    setTabbableIndex(selectedIndex, false);
            }),
            onAnyGainedFocus
        }, managedChildren: {
            onAfterChildLayoutEffect: null,
            onChildrenMountChange: null
        }
    });

    const stableOnChange = useStableCallback(onSelectedIndexChange);

    const {
        useListNavigationChild,
        useListNavigationProps,
        ...listRest
    } = parentReturnType;

    const { managedChildren: { children }, rovingTabIndex: { setTabbableIndex } } = listRest;

    const {
        changeIndex: changeSelectedIndex,
        getCurrentIndex: getSelectedIndex,
        //reevaluateClosestFit
    } = useChildrenFlag<UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, K | "selected">({
        children: children,
        initialIndex: selectedIndex,
        key: "selected",
        closestFit: false
    });

    useLayoutEffect(() => {
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);

    return {
        useListNavigationSingleSelectionChild: useCallback<UseListNavigationSingleSelectionChild<ChildElement, C, K | "selected">>(({ managedChild: { index, flags }, rovingTabIndex: rti, listNavigation: ls, hasFocus: { onFocusedInnerChanged, ...hasFocus }, subInfo }) => {
            const [isSelected, setIsSelected, getIsSelected] = useState(getSelectedIndex() == index);
            const selectedRef = useRef<ChildFlagOperations>({ get: getIsSelected, set: setIsSelected, isValid: useStableCallback(() => !rti.hidden) });
            const { useChildrenHaveFocusChildProps, getElement } = useChildrenHaveFocusChild({
                onFocusedInnerChanged: useStableCallback((focused: boolean, prev: boolean | undefined) => {
                    onFocusedInnerChanged?.(focused, prev);
                    if (selectionMode == 'focus' && focused) {
                            stableOnChange({ target: getElement(), currentTarget: getElement() } as Event, getIndex());
                        
                    }
                }),
                ...hasFocus,
                managedChild: { index }
            });

            const {
                rovingTabIndex: rti_ret,
                useListNavigationChildProps
            } = useListNavigationChild({
                managedChild: {
                    index,
                    flags: {
                        selected: selectedRef.current,
                        ...flags
                    } as Partial<Record<K | "selected" | "tabbable", ChildFlagOperations>>
                },
                rovingTabIndex: rti,
                listNavigation: ls,
                subInfo,
            });
            const getIndex = useStableGetter(index);

            const usePressProps = usePress<ChildElement>({ onClickSync: (e) => { stableOnChange(e, getIndex()); }, exclude: {}, hasFocus });

            return {
                useListNavigationSingleSelectionChildProps: (props: h.JSX.HTMLAttributes<ChildElement>) => usePressProps(useChildrenHaveFocusChildProps(useListNavigationChildProps(props))),
                rovingTabIndex: rti_ret,
                singleSelection: { selected: isSelected, getSelected: getIsSelected }
            };
        }, [selectionMode]),
        useListNavigationSingleSelectionProps: useCallback((...p: Parameters<typeof useListNavigationProps>) => { return useListNavigationProps(...p) }, []),
        ...listRest,
        singleSelection: {}
    }
}








export interface UseSortableListNavigationParameters<C, K extends string, G extends any[], V, LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends
    UseListNavigationParameters<LsOmits | "indexMangler" | "indexDemangler", LnOmits, TnOmits, RtiOmits, McOmits>,
    UseSortableChildrenParameters<C, K, G, V> {
}

export type UseSortableListNavigationChildParameters<C, K extends string, LsOmits extends ListNavigationChildOmits, RtiOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits> = UseListNavigationChildParameters<C, K, LsOmits, RtiOmits, McOmits, C>;
export type UseSortableListNavigationChild<ChildElement extends Element, C, K extends string> = (p: UseSortableListNavigationChildParameters<C, K, never, never, never>) => UseListNavigationChildReturnTypeWithHooks<ChildElement>;

export interface UseSortableListNavigationReturnTypeInfo<ChildElement extends Element, C, K extends string, G extends any[]> extends UseListNavigationReturnTypeInfo<ChildElement, C, K>,
    UseSortableChildrenReturnTypeInfo<C, K, G> {

}

export interface UseSortableListNavigationReturnTypeWithHooks<ParentElement extends Element, ChildElement extends Element, C, K extends string, G extends any[]> extends UseSortableListNavigationReturnTypeInfo<ChildElement, C, K, G> {
    useSortableListNavigationProps: (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => h.JSX.HTMLAttributes<ParentElement>
    useSortableListNavigationChild: UseSortableListNavigationChild<ChildElement, C, K>;
}

export function useSortableListNavigation<ParentElement extends Element, ChildElement extends Element, C, K extends string, G extends any[], V>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation, rearrangeableChildren, sortableChildren }: UseSortableListNavigationParameters<C, K, G, V, never, never, never, never, never>): UseSortableListNavigationReturnTypeWithHooks<ParentElement, ChildElement, C, K, G> {

    const {
        useSortableProps,
        ...sortableChildrenReturnType
    } = useSortableChildren<ParentElement, C, K, G, V>({
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
        /*managedChildren: listNavReturnType.managedChildren,
        listNavigation: listNavReturnType.listNavigation,
        linearNavigation: listNavReturnType.linearNavigation,
        rovingTabIndex: listNavReturnType.rovingTabIndex,
        typeaheadNavigation: listNavReturnType.typeaheadNavigation,
        sortableChildren: sortableChildrenReturnType.sortableChildren,
        rearrangeableChildren: sortableChildrenReturnType.rearrangeableChildren*/
    });

}

export type UseSortableListNavigationSingleSelectionChild<ChildElement extends Element, C, K extends string> = (args: UseListNavigationSingleSelectionChildParameters<ChildElement, C, K, never, never, never, C>) => UseListNavigationSingleSelectionChildReturnTypeWithHooks<ChildElement>;

export interface UseSortableListNavigationSingleSelectionParameters<SSOmits extends SingleSelectionOmits, LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends UseListNavigationSingleSelectionParameters<SSOmits, LsOmits | "indexMangler" | "indexDemangler", LnOmits, TnOmits, RtiOmits, McOmits> {

}

export interface UseSortableListNavigationSingleSelectionReturnTypeInfo<ChildElement extends Element, C, K extends string, G extends any[]> extends UseSortableChildrenReturnTypeInfo<C, K, G>, UseListNavigationReturnTypeInfo<ChildElement, C, K> {

}

export interface UseSortableListNavigationSingleSelectionReturnTypeWithHooks<ParentElement extends Element, ChildElement extends Element, C, K extends string, G extends any[]> extends
    UseSortableListNavigationSingleSelectionReturnTypeInfo<ChildElement, C, K, G> {
    useSortableListNavigationSingleSelectionProps: (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => h.JSX.HTMLAttributes<ParentElement>
    useSortableListNavigationSingleSelectionChild: UseSortableListNavigationSingleSelectionChild<ChildElement, C, K>;
}

export function useSortableListNavigationSingleSelection<ParentElement extends Element, ChildElement extends Element, C, K extends string>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, singleSelection, typeaheadNavigation, childrenHaveFocus }: UseSortableListNavigationSingleSelectionParameters<never, never, never, never, never, never>): UseSortableListNavigationSingleSelectionReturnTypeWithHooks<ParentElement, ChildElement, C, K, []> {

    const {
        useSortableProps,
        ...sortableReturnType
    } = useSortableChildren<ParentElement, C, K, [], number>({
        rearrangeableChildren: { getIndex: useCallback((row) => row.index, []) },
        sortableChildren: {
            getValue: useCallback((row) => row.index, []),
            compare: useCallback((lhs, rhs) => { return lhs - rhs; }, []),
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
    const useSortableListNavigationSingleSelectionChild = (p: UseListNavigationSingleSelectionChildParameters<ChildElement, C, K, never, never, never, C>) => {
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















export interface TryNavigateToIndexParameters<ChildElement extends Element, C, K extends string> {
    children: ManagedChildren<number, UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, K>;
    default: number;
    target: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;

}

export function tryNavigateToIndex<ChildElement extends Element, C, K extends string>({ children, searchDirection, indexDemangler, indexMangler, target }: TryNavigateToIndexParameters<ChildElement, C, K>) {
    const upper = children.getHighestIndex();
    const lower = 0;

    if (searchDirection === -1) {
        while ((target >= lower && (children.getAt(target) == null) || !!children.getAt(target)?.subInfo.hidden))
            target = indexDemangler(indexMangler(target) - 1);

        return target < lower ? indexDemangler(lower) : target;
    }
    else if (searchDirection === 1) {
        while ((target <= upper && children.getAt(target) == null) || !!children.getAt(target)?.subInfo.hidden)
            target = indexDemangler(indexMangler(target) + 1);

        return target > upper ? indexDemangler(upper) : target;
    }
    else {
        return lower;
    }
}

