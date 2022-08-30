import { h, VNode } from "preact";
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { useEffect } from "./use-effect";
import { useStableGetter } from "./use-stable-getter";
import { ChildFlagOperations, ManagedChildInfo, ManagedChildren, OnChildrenMountChange, useChildrenFlag } from "./use-child-manager";
import { useLinearNavigation, UseLinearNavigationParameters, UseLinearNavigationReturnType, useTypeaheadNavigation, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-keyboard-navigation";
import { useMergedProps } from "./use-merged-props";
import { useEnsureStability } from "./use-passive-state";
import { useRovingTabIndex, UseRovingTabIndexParameters, UseRovingTabIndexReturnType, UseRovingTabIndexSubInfo } from "./use-roving-tabindex";
import { useSortableChildren, UseSortableChildrenReturnType } from "./use-sortable-children";
import { useStableCallback } from "./use-stable-callback";
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


/** Arguments passed to the parent `useListNavigation` */
export interface UseListNavigationParameters extends UseRovingTabIndexParameters {
    listNavigation: {

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

    typeaheadNavigation: Omit<UseTypeaheadNavigationParameters, "getIndex" | "setIndex">;
    linearNavigation: Omit<UseLinearNavigationParameters, "navigateToFirst" | "navigateToLast" | "navigateToNext" | "navigateToPrev">;
}


type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



//export type UseListNavigationChildParameters<I extends UseListNavigationChildInfo> = Omit<I, "rerenderAndFocus" | "setTabbable" | "getTabbable">;

/** Type of the child's sub-hook */
//export type UseListNavigationChild<ChildElement extends Element, I extends UseListNavigationChildInfo> = ({ text, index, ...i }: UseListNavigationChildParameters<I>) => UseListNavigationChildReturnType<ChildElement>;

function identity<T>(t: T) { return t; }

/**
 * @param fromUserInteraction Whether the user interacted with this child as a means of navigating to it.  In that was the case, the child is also focused. Otherwise, focus moves as the browser determines.
 */
export type NavigateToIndex = (i: number | null, fromUserInteraction: boolean) => void;

// <ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, K extends string, I extends ListNavigationChildInfo<K>>
export interface UseListNavigationReturnType<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string> {

    /** **STABLE** */
    useListNavigationChild: UseListNavigationChild<ChildElement, C, K | "selected">;
    /** **STABLE** */
    useListNavigationProps: (props: h.JSX.HTMLAttributes<ParentOrChildElement>) => h.JSX.HTMLAttributes<ParentOrChildElement>;

    children: ManagedChildren<number, UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, K | "selected">;

    rovingTabIndex: UseRovingTabIndexReturnType<ChildElement, UseListNavigationSubInfo<C>, K | "selected">["rovingTabIndex"];
    typeaheadNavigation: Omit<UseTypeaheadNavigationReturnType<ParentOrChildElement>, "useTypeaheadNavigationProps" | "useTypeaheadNavigationChild">;
    linearNavigation: Omit<UseLinearNavigationReturnType<ParentOrChildElement>, "useLinearNavigationProps">;
    listNavigation: { navigateToIndex: NavigateToIndex };
}

export interface UseListNavigationSubInfo<C> {
    text: string;
    /**
     * If a child is hidden, then it will be skipped over
     * during keyboard navigation, and the HTML `hidden`
     * attribute will be applied.
     */
    hidden?: boolean;

    subInfo: C;
}

//export type UseListNavigationChildInfoNeeded<K extends string, I extends RovingTabIndexChildInfo<K>> = RovingTabIndexChildInfoNeeded<K, I>;

export interface UseListNavigationChildParameters<C, K extends string> {
    ls: UseListNavigationSubInfo<C>;
    managedChild: Omit<ManagedChildInfo<number, C, K | "selected" | "tabbable">, "subInfo">;
    rti: Partial<Omit<UseRovingTabIndexSubInfo<any, C>, "getElement" | "subInfo">>;
}

export interface UseListNavigationSingleSelectionChildParameters<C, K extends string> extends UseListNavigationChildParameters<C, K> {

}

export type UseListNavigationChild<ChildElement extends Element, C, K extends string> = (a: UseListNavigationChildParameters<C, K>) => UseListNavigationChildReturnType<ChildElement>;

export interface UseListNavigationChildReturnType<ChildElement extends Element> {
    useListNavigationChildProps: (p: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement>;
    tabbable: boolean;
    getTabbable(): boolean;
    getElement: () => ChildElement | null;
}


/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string>({
    managedChildren: mc,
    rovingTabIndex,
    listNavigation: { indexDemangler, indexMangler },
    linearNavigation,
    typeaheadNavigation
}: UseListNavigationParameters): UseListNavigationReturnType<ParentOrChildElement, ChildElement, C, K> {
    indexMangler ??= identity;
    indexDemangler ??= identity;

    useEnsureStability("useListNavigation", indexMangler, indexDemangler);


    const {
        rovingTabIndex: {
            getTabbableIndex,
            setTabbableIndex,
            focusSelf
        },
        useRovingTabIndexChild,
        children
    } = useRovingTabIndex<ChildElement, UseListNavigationSubInfo<C>, K | "selected">({
        managedChildren: mc,
        rovingTabIndex
    });

    const navigateToIndex = useCallback((i: number | null, fromUserInteraction: boolean) => {
        if (i != null) {
            const nextIndex = tryNavigateToIndex({ children, default: 0, target: i, searchDirection: 1, indexMangler: indexMangler ?? identity, indexDemangler: indexDemangler ?? identity });
            setTabbableIndex(i == null ? null : nextIndex, fromUserInteraction);
        }
        else {
            setTabbableIndex(null, fromUserInteraction);
        }
    }, []);

    const {
        useTypeaheadNavigationChild,
        useTypeaheadNavigationProps,
        currentTypeahead,
        invalidTypeahead
    } = useTypeaheadNavigation<ParentOrChildElement>({
        getIndex: getTabbableIndex,
        setIndex: useCallback((index: (number | null) | ((prev: number | null) => (number | null))) => {
            setTabbableIndex(index, true);
        }, []),
        ...typeaheadNavigation
    });
    const { useLinearNavigationProps } = useLinearNavigation<ParentOrChildElement>({
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
    });

    const useListNavigationProps = useCallback((props: h.JSX.HTMLAttributes<ParentOrChildElement>): h.JSX.HTMLAttributes<ParentOrChildElement> => {
        return useLinearNavigationProps(useTypeaheadNavigationProps(props));
    }, [useLinearNavigationProps, useTypeaheadNavigationProps]);


    const useListNavigationChild = useCallback<UseListNavigationChild<ChildElement, C, K>>(({ managedChild: { index, flags }, rti: { blurSelf, focusSelf }, ls: { text, hidden, subInfo } }) => {

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
            tabbable,
            getTabbable,
            getElement
        } = useRovingTabIndexChild({
            managedChild: { index, flags },
            rovingTabIndex: { blurSelf, focusSelf, subInfo: { text, hidden, subInfo } }
        });

        const useListNavigationChildProps: (p: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement> = function ({ ...props }) {
            return useMergedProps<ChildElement>(useRovingTabIndexChildProps((({ inert: hidden } as h.JSX.HTMLAttributes<ChildElement>))), props);
        }

        return {
            useListNavigationChildProps,
            tabbable,
            getTabbable,
            getElement
        }
    }, [useTypeaheadNavigationChild, useRovingTabIndexChild, navigateToIndex]);

    return {
        useListNavigationChild,
        useListNavigationProps,

        children,
        listNavigation: { navigateToIndex },
        rovingTabIndex: { focusSelf, getTabbableIndex, setTabbableIndex },
        linearNavigation: {},
        typeaheadNavigation: { currentTypeahead, invalidTypeahead }
    }
}



export interface UseListNavigationSingleSelectionParameters extends UseListNavigationParameters {
    singleSelection: { selectedIndex: number | null; }
}

export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string> extends Omit<UseListNavigationReturnType<ParentOrChildElement, ChildElement, C, K>, "useListNavigationChild" | "useListNavigationProps"> {
    /** **STABLE** */
    useListNavigationSingleSelectionChild: UseListNavigationSingleSelectionChild<ParentOrChildElement, ChildElement, C, K>;
    /** **STABLE** */
    useListNavigationSingleSelectionProps: UseListNavigationReturnType<ParentOrChildElement, ChildElement, C, K>["useListNavigationProps"];
}

export type UseListNavigationSingleSelectionChild<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string> = (p: UseListNavigationSingleSelectionChildParameters<C, K>) => UseListNavigationSingleSelectionChildReturnType<ParentOrChildElement, ChildElement, C, K>;
export interface UseListNavigationSingleSelectionChildReturnType<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string> extends ReturnType<UseListNavigationReturnType<ParentOrChildElement, ChildElement, C, K>["useListNavigationChild"]> {
    selected: boolean;
    getSelected(): boolean;
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
export function useListNavigationSingleSelection<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string>({
    singleSelection: { selectedIndex },
    listNavigation,
    managedChildren: { onChildrenMountChange: ocmc, ...mc },
    rovingTabIndex: { initialIndex, ...rovingTabIndex },
    linearNavigation,
    typeaheadNavigation
}: UseListNavigationSingleSelectionParameters): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, C, K | "selected"> {
    const list: UseListNavigationReturnType<ParentOrChildElement, ChildElement, C, K | "selected"> = useListNavigation<ParentOrChildElement, ChildElement, C, K | "selected">({
        listNavigation,
        managedChildren: {
            ...mc,
            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((mounted, unmounted) => {
                onChildrenMountChange(mounted, unmounted);
                ocmc?.(mounted, unmounted);
            })
        },
        rovingTabIndex: {
            initialIndex: (initialIndex ?? selectedIndex ?? undefined),
            ...rovingTabIndex
        },
        linearNavigation,
        typeaheadNavigation
    });

    const {
        children,
        useListNavigationChild,
        useListNavigationProps,
        ...listRest
    } = list;

    const {
        changeIndex: changeSelectedIndex,
        getCurrentIndex: getSelectedIndex,
        onChildrenMountChange
    } = useChildrenFlag<UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, K | "selected">({
        children: list.children,
        initialIndex: selectedIndex,
        key: "selected",
        closestFit: false
    });

    useLayoutEffect(() => {
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);

    return {
        children,
        useListNavigationSingleSelectionChild: useCallback<UseListNavigationSingleSelectionChild<ParentOrChildElement, ChildElement, C, K | "selected">>(({ managedChild: { index, flags }, rti, ls }) => {
            const [isSelected, setIsSelected, getIsSelected] = useState(getSelectedIndex() == index);
            const selectedRef = useRef<ChildFlagOperations>({ get: getIsSelected, set: setIsSelected, isValid: useStableCallback(() => !ls.hidden) });

            const ret = useListNavigationChild({
                managedChild: {
                    index,
                    flags: {
                        selected: selectedRef.current,
                        ...flags
                    } as Partial<Record<K | "selected" | "tabbable", ChildFlagOperations>>
                },
                rti,
                ls
            });
            return { ...ret, selected: isSelected, getSelected: getIsSelected }
        }, []),
        useListNavigationSingleSelectionProps: useCallback((...p: Parameters<typeof useListNavigationProps>) => { return useListNavigationProps(...p) }, []),
        ...listRest
    }
}








export interface UseSortableListNavigationParameters {
    linearNavigation: UseListNavigationParameters["linearNavigation"];
    listNavigation: Omit<UseListNavigationParameters["listNavigation"], "indexMangler" | "indexDemangler">;
    managedChildren: UseListNavigationParameters["managedChildren"];
    rovingTabIndex: UseListNavigationParameters["rovingTabIndex"];
    typeaheadNavigation: UseListNavigationParameters["typeaheadNavigation"];
}

export type UseSortableListNavigationChildParameters<C, K extends string> = UseListNavigationChildParameters<C, K>;
export type UseSortableListNavigationChild<ChildElement extends HTMLElement | SVGElement, C, K extends string> = (p: UseSortableListNavigationChildParameters<C, K>) => UseListNavigationChildReturnType<ChildElement>;

export interface UseSortableListNavigationReturnType<ParentElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string, G extends any[]> extends Omit<UseListNavigationReturnType<ParentElement, ChildElement, C, K>, "useListNavigationChild" | "useListNavigationProps"> {
    useSortableListNavigationProps: (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => h.JSX.HTMLAttributes<ParentElement>
    useSortableListNavigationChild: UseSortableListNavigationChild<ChildElement, C, K>;
    sortable: Omit<UseSortableChildrenReturnType<any, C, K, G>, "useSortableProps">;
}

export function useSortableListNavigation<ParentElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, typeaheadNavigation }: UseSortableListNavigationParameters): UseSortableListNavigationReturnType<ParentElement, ChildElement, C, K, []> {

    const {
        indexDemangler,
        indexMangler,
        demangleMap,
        mangleMap,
        rearrange,
        sort,
        useSortableProps,
        shuffle
    } = useSortableChildren<ParentElement, C, K, [], number>({
        getIndex: useCallback((row) => row.index, []),
        getValue: useCallback((row) => row.index, []),
        compare: useCallback((lhs, rhs) => { return lhs - rhs; }, []),
    });

    const {
        useListNavigationChild,
        useListNavigationProps,
        ...rest
    } = useListNavigation<ParentElement, ChildElement, C, K>({
        linearNavigation: linearNavigation,
        listNavigation: { indexDemangler, indexMangler, ...listNavigation },
        managedChildren: managedChildren,
        rovingTabIndex: rovingTabIndex,
        typeaheadNavigation: typeaheadNavigation,
    });

    const useSortableListNavigationProps = (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => {
        return (useListNavigationProps(useSortableProps(props)))
    }
    const useSortableListNavigationChild = (p: UseListNavigationChildParameters<C, K>) => {
        return useListNavigationChild(p)
    }

    return ({
        useSortableListNavigationProps,
        useSortableListNavigationChild,
        sortable: { sort, shuffle, rearrange, demangleMap, indexDemangler, indexMangler, mangleMap },
        ...rest
    });

}

export type UseSortableListNavigationSingleSelectionChild<ParentElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string> = (args: UseListNavigationSingleSelectionChildParameters<C, K>) => UseListNavigationSingleSelectionChildReturnType<ParentElement, ChildElement, C, K | "selected">;

export interface UseSortableListNavigationSingleSelectionParameters {
    linearNavigation: UseListNavigationSingleSelectionParameters["linearNavigation"];
    listNavigation: Omit<UseListNavigationSingleSelectionParameters["listNavigation"], "indexMangler" | "indexDemangler">;
    managedChildren: UseListNavigationSingleSelectionParameters["managedChildren"];
    rovingTabIndex: UseListNavigationSingleSelectionParameters["rovingTabIndex"];
    typeaheadNavigation: UseListNavigationSingleSelectionParameters["typeaheadNavigation"];
    singleSelection: UseListNavigationSingleSelectionParameters["singleSelection"];
}

export interface UseSortableListNavigationSingleSelectionReturnType<ParentElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string, G extends any[]> extends Omit<UseListNavigationReturnType<ParentElement, ChildElement, C, K>, "useListNavigationChild" | "useListNavigationProps"> {
    useSortableListNavigationSingleSelectionProps: (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => h.JSX.HTMLAttributes<ParentElement>
    useSortableListNavigationSingleSelectionChild: UseSortableListNavigationSingleSelectionChild<ParentElement, ChildElement, C, K>;
    sortable: Omit<UseSortableChildrenReturnType<any, C, K, G>, "useSortableProps">;
}

export function useSortableListNavigationSingleSelection<ParentElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string>({ linearNavigation, listNavigation, managedChildren, rovingTabIndex, singleSelection, typeaheadNavigation }: UseSortableListNavigationSingleSelectionParameters): UseSortableListNavigationSingleSelectionReturnType<ParentElement, ChildElement, C, K, []> {

    const {
        indexDemangler,
        indexMangler,
        demangleMap,
        mangleMap,
        rearrange,
        sort,
        useSortableProps,
        shuffle
    } = useSortableChildren<ParentElement, C, K, [], number>({
        getIndex: useCallback((row) => row.index, []),
        getValue: useCallback((row) => row.index, []),
        compare: useCallback((lhs, rhs) => { return lhs - rhs; }, []),
    });

    const {
        useListNavigationSingleSelectionChild,
        useListNavigationSingleSelectionProps,
        ...rest
    } = useListNavigationSingleSelection<ParentElement, ChildElement, C, K>({
        linearNavigation: linearNavigation,
        listNavigation: { indexDemangler, indexMangler, ...listNavigation },
        managedChildren: managedChildren,
        rovingTabIndex: rovingTabIndex,
        typeaheadNavigation: typeaheadNavigation,
        singleSelection: singleSelection
    });

    const useSortableListNavigationSingleSelectionProps = (props: Omit<h.JSX.HTMLAttributes<ParentElement>, "children"> & { children: VNode<any>[]; }) => {
        return (useListNavigationSingleSelectionProps(useSortableProps(props)));
    }
    const useSortableListNavigationSingleSelectionChild = (p: UseListNavigationChildParameters<C, K>) => {
        return useListNavigationSingleSelectionChild(p);
    }

    return ({
        useSortableListNavigationSingleSelectionChild,
        useSortableListNavigationSingleSelectionProps,
        sortable: { sort, shuffle, rearrange, demangleMap, indexDemangler, indexMangler, mangleMap },
        ...rest
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
        while ((target >= lower && (children.getAt(target) == null) || !!children.getAt(target)?.subInfo.subInfo.hidden))
            target = indexDemangler(indexMangler(target) - 1);

        return target < lower ? indexDemangler(lower) : target;
    }
    else if (searchDirection === 1) {
        while ((target <= upper && children.getAt(target) == null) || !!children.getAt(target)?.subInfo.subInfo.hidden)
            target = indexDemangler(indexMangler(target) + 1);

        return target > upper ? indexDemangler(upper) : target;
    }
    else {
        return lower;
    }
}

