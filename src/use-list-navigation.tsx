import { h } from "preact";
import { StateUpdater, useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { ManagedChildInfo, ManagedChildren, useChildrenFlag } from "./use-child-manager";
import { useLinearNavigation, UseLinearNavigationParameters, UseLinearNavigationReturnType, useTypeaheadNavigation, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnType } from "./use-keyboard-navigation";
import { useMergedProps } from "./use-merged-props";
import { useEnsureStability } from "./use-passive-state";
import { RTI, useRovingTabIndex, UseRovingTabIndexParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex";
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
export interface UseListNavigationParameters<C, K extends string> extends UseRovingTabIndexParameters<C, K> {
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
         * it needs to be demangled to do "normal" math on it, and then re-mangled
         * to turn that absolute row index back into a mangled one.
         * @param transformedIndex 
         */
        indexDemangler?(transformedIndex: number): number;

        typeahead: Omit<UseTypeaheadNavigationParameters, "getIndex" | "setIndex">;
        linear: Omit<UseLinearNavigationParameters, "navigateToFirst" | "navigateToLast" | "navigateToNext" | "navigateToPrev">;
    }
}


type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



//export type UseListNavigationChildParameters<I extends UseListNavigationChildInfo> = Omit<I, "rerenderAndFocus" | "setTabbable" | "getTabbable">;

/** Type of the child's sub-hook */
//export type UseListNavigationChild<ChildElement extends Element, I extends UseListNavigationChildInfo> = ({ text, index, ...i }: UseListNavigationChildParameters<I>) => UseListNavigationChildReturnType<ChildElement>;

function identity<T>(t: T) { return t; }

// <ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, K extends string, I extends ListNavigationChildInfo<K>>
export interface UseListNavigationReturnType<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string> {
    rti: Omit<UseRovingTabIndexReturnType<ChildElement, LI<C>, K>, "useRovingTabIndexChild">;
    typeahead: Omit<UseTypeaheadNavigationReturnType<ParentOrChildElement>, "useTypeaheadNavigationProps" | "useTypeaheadNavigationChild">;
    linear: Omit<UseLinearNavigationReturnType<ParentOrChildElement>, "useLinearNavigationProps">;

    /** **STABLE** */
    useListNavigationChild: UseListNavigationChild<ParentOrChildElement, ChildElement, C, K>;
    /** **STABLE** */
    useListNavigationProps: (props: h.JSX.HTMLAttributes<ParentOrChildElement>) => h.JSX.HTMLAttributes<ParentOrChildElement>;
    children: ManagedChildren<number, RTI<ChildElement, LI<C>>, K>;
}

//export interface ListNavigationChildInfo<E extends Element, C, K extends string> extends RovingTabIndexChildInfo<E, ListNavigationChildInfoB & C, K> {}

export interface LI<C> {
    text: string;
    /**
     * If a child is hidden, then it will be skipped over
     * during keyboard navigation, and the HTML `hidden`
     * attribute will be applied.
     */
    hidden?: boolean;

    info4: C;
}

//export type UseListNavigationChildInfoNeeded<K extends string, I extends RovingTabIndexChildInfo<K>> = RovingTabIndexChildInfoNeeded<K, I>;

export interface UseListNavigationChildParameters<C, K extends string> {
    managedChild: Omit<ManagedChildInfo<number, C, K>, "info">;
    rti: Partial<Omit<RTI<any, C>, "getElement" | "info3">>;
    li: Pick<LI<C>, "text" | "hidden" | "info4">;
};

export interface UseListNavigationSingleSelectionChildParameters<C, K extends string> extends UseListNavigationChildParameters<C, K> {};

export type UseListNavigationChild<_ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string> = (a: UseListNavigationChildParameters<C, K>) => {
    useListNavigationChildProps: (p: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement>;
    tabbable: boolean;
    getElement: () => ChildElement | null;
};

/*type UseListNavigationChildWithSingleSelection<_ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string> = (a: UseListNavigationChildParameters<C, K>) => {
    useListNavigationChildProps: (p: h.JSX.HTMLAttributes<ChildElement>) => h.JSX.HTMLAttributes<ChildElement>;
    tabbable: boolean;
    getElement: () => ChildElement | null;
};*/
/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ParentOrChildElement extends HTMLElement | SVGElement, ChildElement extends HTMLElement | SVGElement, C, K extends string>({
    managedChildren: mc,
    rovingTabIndex,
    listNavigation: { indexDemangler, indexMangler, linear, typeahead }
}: UseListNavigationParameters<C, K>): UseListNavigationReturnType<ParentOrChildElement, ChildElement, C, K> {
    //type I2 = ManagedChildInfo<number, LI<ChildElement, C, K | "tabbable">>;
    indexMangler ??= identity;
    indexDemangler ??= identity;
    //navigationDirection ??= "either";
    //initialIndex ??= 0;

    useEnsureStability("useListNavigation", indexMangler, indexDemangler);


    const {
        getTabbableIndex,
        setTabbableIndex,
        focusSelf,
        useRovingTabIndexChild,
        children
    } = useRovingTabIndex<ChildElement, LI<C>, K>({
        managedChildren: mc,
        rovingTabIndex
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

    const { useTypeaheadNavigationChild, useTypeaheadNavigationProps, currentTypeahead, invalidTypeahead } = useTypeaheadNavigation<ParentOrChildElement>({ getIndex: getTabbableIndex, setIndex, ...typeahead });
    const { useLinearNavigationProps } = useLinearNavigation<ParentOrChildElement>({ navigateToPrev, navigateToNext, navigateToFirst, navigateToLast, ...linear });

    const useListNavigationProps = useCallback((props: h.JSX.HTMLAttributes<ParentOrChildElement>): h.JSX.HTMLAttributes<ParentOrChildElement> => {
        return useLinearNavigationProps(useTypeaheadNavigationProps(props));
    }, [useLinearNavigationProps, useTypeaheadNavigationProps]);


    const useListNavigationChild = useCallback<UseListNavigationChild<ParentOrChildElement, ChildElement, C, K>>(({ managedChild: { index, flags }, rti: { blurSelf, focusSelf }, li: { text, hidden, info4 } }) => {

        const _v: void = useTypeaheadNavigationChild({ text, index });

        const { useRovingTabIndexChildProps, tabbable, getElement } = useRovingTabIndexChild({ managedChildren: { index }, rti: { blurSelf, focusSelf, info3: { text, hidden, info4 } } });

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

        children,
        rti: { children, focusSelf, getTabbableIndex, setTabbableIndex },
        linear: {},
        typeahead: { currentTypeahead, invalidTypeahead }
    }
}

function test() {
    const { children, linear, rti, typeahead, useListNavigationChild, useListNavigationProps } = useListNavigation<HTMLLabelElement, HTMLDivElement, { foo: "bar" }, "selected">({ managedChildren: {}, rovingTabIndex: {}, listNavigation: { linear: {}, typeahead: {} } });
    const {  } = useListNavigationChild({ managedChild: { index: 0, flags: {  } }, rti: { }, li: { text: "", info4: { foo: "bar" } } });
}



//export interface UseListNavigationSingleSelectionInfoBase<ChildElement extends Element, C, K extends string> extends ListNavigationChildInfo<C> {}

export interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, C, K extends string> extends UseListNavigationParameters<C, K> {
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
    managedChildren: mc, 
    rovingTabIndex 
}: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, C, K>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, C, K | "selected"> {

    const list: UseListNavigationReturnType<ParentOrChildElement, ChildElement, C, K | "selected"> = useListNavigation<ParentOrChildElement, ChildElement, C, K | "selected">({
        listNavigation,
        managedChildren: mc,
        rovingTabIndex
        /*initialIndex: (selectedIndex ?? 0),
        onTabbedOutOf: useStableCallback(() => { if (selectedIndex != null) list.setTabbableIndex(selectedIndex, false) }),
        ...args,
        onChildrenMountChange: useStableCallback<OnChildrenMountChange<ListNavigationChildInfo<any, C, K>>>((m, u) => { ocmc?.(m, u); onChildrenMountChange(m, u) })*/
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
    } = useChildrenFlag<RTI<ChildElement, LI<C>>, K | "selected">({
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
        useListNavigationSingleSelectionChild: useCallback<UseListNavigationSingleSelectionChild<ParentOrChildElement, ChildElement, C, K | "selected">>(({ managedChild, rti, li }) => {
            const [isSelected, setIsSelected, getIsSelected] = useState(getSelectedIndex() == managedChild.index);
            const selectedRef = useRef({ get: getIsSelected, set: (a: Parameters<StateUpdater<boolean>>[0]) => { setIsSelected(a); console.log(`Child ${managedChild.index} had set(${a.toString()}) called`); }, isValid: useStableCallback(() => !li.hidden) });
            const ret = useListNavigationChild({
                managedChild,
                rti,
                li
            });
            console.log(`Child ${managedChild.index} rendering with selected: ${isSelected} and tabbable: ${ret.tabbable.toString()}`);
            return { ...ret, selected: isSelected, getSelected: getIsSelected }
        }, []),
        useListNavigationSingleSelectionProps: useCallback((...p: Parameters<typeof useListNavigationProps>) => { return useListNavigationProps(...p) }, []),
        ...listRest
    }
}






export function tryNavigateToIndex<ChildElement extends Element, C, K extends string>(children: ManagedChildren<number, RTI<ChildElement, LI<C>>, K>, initial: number, target: number, searchDirection: 1 | -1, indexMangler: (n: number) => number, indexDemangler: (n: number) => number) {
    function helper() {
        if (searchDirection === -1) {
            while (target >= 0 && (children.getAt(target) == null || !!children.getAt(target)?.info.info3.hidden))
                target = indexMangler(indexDemangler(target) - 1);

            return target < 0 ? initial : target;
        }
        else if (searchDirection === 1) {
            while (target <= children.getHighestIndex() && children.getAt(target) == null || !!children.getAt(target)?.info.info3.hidden)
                target = indexMangler(indexDemangler(target) + 1);

            return target > children.getHighestIndex() ? initial : target;
        }
        else {
            return initial;
        }
    }
    return (helper())
}

