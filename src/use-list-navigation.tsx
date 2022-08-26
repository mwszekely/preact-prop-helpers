import { h } from "preact";
import { StateUpdater, useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { ManagedChildren, useChildrenFlag, UseManagedChildrenParameters } from "./use-child-manager";
import { useLinearNavigation, UseLinearNavigationChildInfo, UseLinearNavigationParameters, UseLinearNavigationReturnType, useTypeaheadNavigation, UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-keyboard-navigation";
import { useMergedProps } from "./use-merged-props";
import { useEnsureStability } from "./use-passive-state";
import { RovingTabIndexChildInfoBase, RovingTabIndexChildInfoNeeded, useRovingTabIndex, UseRovingTabIndexParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex";
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


/*
export interface UseListNavigationReturnType<ChildElement extends Element, I extends ManagedChildInfo<number>> {

    useListNavigationProps: <P extends h.JSX.HTMLAttributes<any>>(props: P) => h.JSX.HTMLAttributes<any>;

    useListNavigationChild: UseListNavigationChild<ChildElement, I>;

    currentTypeahead: string | null;

    invalidTypeahead: boolean | null;

    tabbableIndex: number | null;

    navigateToIndex: (index: number | null) => void;
    navigateToNext: () => void;
    navigateToPrev: () => void;
    navigateToFirst: () => void;
    navigateToLast: () => void;

    focusCurrent: null | (() => void);
}

export interface UseListNavigationChildReturnType<ChildElement extends Element> {
    useListNavigationChildProps: ({ tabIndex, ...props }: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement>;
    useListNavigationSiblingProps: UseRovingTabIndexChildReturnType<ChildElement>["useRovingTabIndexSiblingProps"];
    tabbable: boolean | null;
}*/


/** Arguments passed to the parent `useListNavigation` */
export interface UseListNavigationParameters<K extends string, I extends ListNavigationChildInfoBase<K>> extends UseRovingTabIndexParameters<I>, Omit<UseTypeaheadNavigationParameters, "getIndex" | "setIndex">, Omit<UseLinearNavigationParameters, (`navigateTo${string}` & keyof UseLinearNavigationParameters)> {

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
     * it needs to be demangled to do "normal" math on it, and then re-mangled
     * to turn that absolute row index back into a mangled one.
     * @param transformedIndex 
     */
    indexDemangler?(transformedIndex: number): number;
    
}
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



//export type UseListNavigationChildParameters<I extends UseListNavigationChildInfo> = Omit<I, "rerenderAndFocus" | "setTabbable" | "getTabbable">;

/** Type of the child's sub-hook */
//export type UseListNavigationChild<ChildElement extends Element, I extends UseListNavigationChildInfo> = ({ text, index, ...i }: UseListNavigationChildParameters<I>) => UseListNavigationChildReturnType<ChildElement>;

function identity<T>(t: T) { return t; }

export interface ListNavigationChildInfoBase<K extends string> extends RovingTabIndexChildInfoBase<K>, UseTypeaheadNavigationChildInfo, UseLinearNavigationChildInfo {
    text: string;
    /**
     * If a child is hidden, then it will be skipped over
     * during keyboard navigation, and the HTML `hidden`
     * attribute will be applied.
     */
    hidden?: boolean;
}

export type UseListNavigationChildInfoNeeded<K extends string, I extends RovingTabIndexChildInfoBase<K>> = RovingTabIndexChildInfoNeeded<K, I>;

export type UseListNavigationChild<ParentOrChildElement extends Element, K extends string = string, I extends ListNavigationChildInfoBase<K> = ListNavigationChildInfoBase<K>> = (a: {info: UseListNavigationChildInfoNeeded<K, I>}) => {
    useListNavigationChildProps: (p: h.JSX.HTMLAttributes<ParentOrChildElement>) => h.JSX.HTMLAttributes<ParentOrChildElement>;
    tabbable: boolean;
    getElement: () => ParentOrChildElement | null;
};
/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, K extends string = string, I extends ListNavigationChildInfoBase<K> = ListNavigationChildInfoBase<K>>({ initialIndex, onChildrenMountChange, collator, disableArrowKeys, disableHomeEndKeys, navigationDirection, noTypeahead, typeaheadTimeout, onTabbableIndexChange, indexMangler, indexDemangler, onAfterChildLayoutEffect, onTabbableRender, onTabbedInTo, onTabbedOutOf }: UseListNavigationParameters<K, I>): UseListNavigationReturnType<ParentOrChildElement, ChildElement, K, I> {

    indexMangler ??= identity;
    indexDemangler ??= identity;
    navigationDirection ??= "either";
    initialIndex ??= 0;

    useEnsureStability("useListNavigation", indexMangler, indexDemangler);


    const {
        getTabbableIndex,
        setTabbableIndex,
        useRovingTabIndexChild,
        children,
        ...rest1
    } = useRovingTabIndex<ChildElement, K, I>({
        initialIndex,
        onTabbableIndexChange,
        onChildrenMountChange,
        onAfterChildLayoutEffect,
        onTabbableRender,
        onTabbedInTo,
        onTabbedOutOf
    })


    const navigateToIndex = useCallback((i: number | null, fromUserInteraction: boolean) => {
        setTabbableIndex(i == null ? null : tryNavigateToIndex(children, 0, i, 1, indexMangler ?? identity, indexDemangler ?? identity), fromUserInteraction);
    }, [])
    const navigateToFirst = useCallback(() => {
        setTabbableIndex(tryNavigateToIndex(children, 0, 0, 1, indexMangler ?? identity, indexDemangler ?? identity), true);
    }, [])
    const navigateToLast = useCallback(() => {
        setTabbableIndex(tryNavigateToIndex(children, children.getHighestIndex() + 1, children.getHighestIndex(), -1, indexMangler ?? identity, indexDemangler ?? identity), true);
    }, [])
    const navigateToPrev = useCallback(() => {
        setTabbableIndex(c => {
            return tryNavigateToIndex(children, c ?? 0, (c ?? 0) - 1, -1, indexMangler ?? identity, indexDemangler ?? identity)
        }, true)
    }, [])
    const navigateToNext = useCallback(() => {
        setTabbableIndex(c => {
            return tryNavigateToIndex(children, c ?? 0, (c ?? 0) + 1, 1, indexMangler ?? identity, indexDemangler ?? identity);
        }, true)
    }, [])

    const setIndex = useCallback((index: (number | null) | ((prev: number | null) => (number | null))) => {
        setTabbableIndex(index, true);
    }, []);

    const { useTypeaheadNavigationChild, useTypeaheadNavigationProps, ...rest2 } = useTypeaheadNavigation<ParentOrChildElement, I>({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout, noTypeahead });
    const { useLinearNavigationProps, ...rest3 } = useLinearNavigation<ParentOrChildElement>({ navigationDirection, navigateToPrev, navigateToNext, navigateToFirst, navigateToLast, disableArrowKeys, disableHomeEndKeys });

    const useListNavigationProps = useCallback((props: h.JSX.HTMLAttributes<ParentOrChildElement>): h.JSX.HTMLAttributes<ParentOrChildElement> => {
        return useLinearNavigationProps(useTypeaheadNavigationProps(props));
    }, [useLinearNavigationProps, useTypeaheadNavigationProps]);


    const useListNavigationChild = useCallback<UseListNavigationChild<ChildElement, K, I>>(({ info: { flags, index, text, blurSelf, focusSelf, hidden, ...restInfo } }) => {

        const _v: void = useTypeaheadNavigationChild({ index, text });

        const { useRovingTabIndexChildProps, tabbable, getElement } = useRovingTabIndexChild({ info: {  ...(restInfo as I), flags, index, text, blurSelf, focusSelf, hidden } });

        const useListNavigationChildProps: (p: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement> = function ({ ...props }) {
            return useMergedProps<ChildElement>(useRovingTabIndexChildProps((({ inert: hidden } as h.JSX.HTMLAttributes<ChildElement>))), props);
        }

        return {
            useListNavigationChildProps,
            tabbable,
            getElement
        }
    }, [useTypeaheadNavigationChild, useRovingTabIndexChild, navigateToIndex]);

    return {
        useListNavigationChild,
        useListNavigationProps,

        getTabbableIndex,
        setTabbableIndex,

        children,

        ...rest1,
        ...rest2,
        ...rest3
    }
}

export interface UseListNavigationReturnType<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, K extends string = string, I extends ListNavigationChildInfoBase<K> = ListNavigationChildInfoBase<K>> extends
    Omit<UseRovingTabIndexReturnType<ChildElement, K, I>, "useRovingTabIndexChild">,
    Omit<UseTypeaheadNavigationReturnType<ParentOrChildElement, I>, "useTypeaheadNavigationProps" | "useTypeaheadNavigationChild">,
    Omit<UseLinearNavigationReturnType<ParentOrChildElement>, "useLinearNavigationProps"> {
    /** **STABLE** */
    useListNavigationChild: UseListNavigationChild<ChildElement, K, I>;
    /** **STABLE** */
    useListNavigationProps: (props: h.JSX.HTMLAttributes<ParentOrChildElement>) => h.JSX.HTMLAttributes<ParentOrChildElement>;
}


export interface UseListNavigationSingleSelectionInfoBase<K extends string = string> extends ListNavigationChildInfoBase<"selected" | K> {

}

export interface UseListNavigationSingleSelectionParameters<K extends string, I extends ListNavigationChildInfoBase<K>> extends Omit<UseListNavigationParameters<K, I>, "initialIndex"> {
    selectedIndex: number | null;
}

export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, K extends string, I extends UseListNavigationSingleSelectionInfoBase<K>> extends Omit<UseListNavigationReturnType<ParentOrChildElement, ChildElement, K, I>, "useListNavigationChild" | "useListNavigationProps"> {
    /** **STABLE** */
    useListNavigationSingleSelectionChild: UseListNavigationSingleSelectionChild<ParentOrChildElement, ChildElement, K, I>;
    /** **STABLE** */
    useListNavigationSingleSelectionProps: UseListNavigationReturnType<ParentOrChildElement, ChildElement, K, I>["useListNavigationProps"];
}

export type UseListNavigationSingleSelectionChild<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, K extends string = string, I extends UseListNavigationSingleSelectionInfoBase<K> = UseListNavigationSingleSelectionInfoBase<K>> = (...p: Parameters<UseListNavigationReturnType<ParentOrChildElement, ChildElement, K, I>["useListNavigationChild"]>) => UseListNavigationSingleSelectionChildReturnType<ParentOrChildElement, ChildElement, K, I>;
export interface UseListNavigationSingleSelectionChildReturnType<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, K extends string = string, I extends UseListNavigationSingleSelectionInfoBase<K> = UseListNavigationSingleSelectionInfoBase<K>> extends ReturnType<UseListNavigationReturnType<ParentOrChildElement, ChildElement, K, I>["useListNavigationChild"]> {
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
export function useListNavigationSingleSelection<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, K extends string = string, I extends UseListNavigationSingleSelectionInfoBase<K> = UseListNavigationSingleSelectionInfoBase<K>>({ selectedIndex, onChildrenMountChange: ocmc, ...args }: UseListNavigationSingleSelectionParameters<K, I>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, K, I> {

    const list: UseListNavigationReturnType<ParentOrChildElement, ChildElement, K, I> = useListNavigation<ParentOrChildElement, ChildElement, K, I>({
        initialIndex: (selectedIndex ?? 0),
        onTabbedOutOf: useStableCallback(() => { if (selectedIndex != null) list.setTabbableIndex(selectedIndex, false) }),
        ...args,
        onChildrenMountChange: useStableCallback<NonNullable<UseManagedChildrenParameters<ListNavigationChildInfoBase<string>>["onChildrenMountChange"]>>((m, u) => { ocmc?.(m, u); onChildrenMountChange(m, u) })
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
    } = useChildrenFlag<"selected", UseListNavigationSingleSelectionInfoBase>({
        children: list.children,
        initialIndex: selectedIndex,
        key: "selected",
        closestFit: false
    });

    useLayoutEffect(() => {
        console.log(`useEffect(${selectedIndex})`)
        changeSelectedIndex(selectedIndex);
    }, [selectedIndex]);

    return {
        children,
        useListNavigationSingleSelectionChild: useCallback(({ info: { flags: { ...flags }, ...info } }: Parameters<typeof useListNavigationChild>[0]) => {
            const [isSelected, setIsSelected, getIsSelected] = useState(getSelectedIndex() == info.index);
            const selectedRef = useRef({ get: getIsSelected, set: (a: Parameters<StateUpdater<boolean>>[0]) => { setIsSelected(a); console.log(`Child ${info.index} had set(${a.toString()}) called`); }, isValid: useStableCallback(() => !info.hidden) });
            const ret = useListNavigationChild({ info: { ...(info as I), flags: { ...flags, selected: selectedRef.current } } });
            console.log(`Child ${info.index} rendering with selected: ${isSelected} and tabbable: ${ret.tabbable.toString()}`);
            return { ...ret, selected: isSelected, getSelected: getIsSelected }
        }, []),
        useListNavigationSingleSelectionProps: useCallback((...p: Parameters<typeof useListNavigationProps>) => { return useListNavigationProps(...p) }, []),
        ...listRest
    }
}






export function tryNavigateToIndex<I extends { hidden?: boolean, index: number }>(children: ManagedChildren<I>, initial: number, target: number, searchDirection: 1 | -1, indexMangler: (n: number) => number, indexDemangler: (n: number) => number) {
    function helper() {
        if (searchDirection === -1) {
            while (target >= 0 && (children.getAt(target) == null || !!children.getAt(target)?.hidden))
                target = indexMangler(indexDemangler(target) - 1);

            return target < 0 ? initial : target;
        }
        else if (searchDirection === 1) {
            while (target <= children.getHighestIndex() && children.getAt(target) == null || !!children.getAt(target)?.hidden)
                target = indexMangler(indexDemangler(target) + 1);

            return target > children.getHighestIndex() ? initial : target;
        }
        else {
            return initial;
        }
    }
    return (helper())
}

