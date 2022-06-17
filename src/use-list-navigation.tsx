import { h } from "preact";
import { useCallback } from "preact/hooks";
import { UseChildManagerReturnType } from "./use-child-manager";
import { useLinearNavigation, UseLinearNavigationChildInfo, useTypeaheadNavigation, UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationParameters } from "./use-keyboard-navigation";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useEnsureStability } from "./use-passive-state";
import { useRovingTabIndex, UseRovingTabIndexChildInfo, UseRovingTabIndexChildPropsReturnType, UseRovingTabIndexParameters, UseRovingTabIndexSiblingProps } from "./use-roving-tabindex";
import { useState } from "./use-state";


export type OmitStrong<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;


/**
 * 
 * TODO: This table was scrapped when this was changed to just accept a collator directly,
 * but it's not bad for a collation crash course and I might use it again.
 * Even just as a "this is why it's important and good to use these things" thing.
 * 
 * |Lang.|Target|User input|`base`|`accent`|`case`|`variant`|
 * |----|----|----|----|----|----|----|
 * |EN|Hi|Hi|✅|✅|✅|✅|
 * |EN|Hi|Ｈｉ|✅|✅|✅|❌|
 * |EN|Hi|hi|✅|✅|❌|❌|
 * |EN|Hi|Hï|✅|❌|❌|❌|
 * |EN|Hi|Bye|❌|❌|❌|❌|
 * |DA|å|aa|✅|✅|✅|❌|
 * |DA|å|AA|✅|✅|❌|❌|
 * |DA|å|Aa|✅|✅|❌|❌|
 * |EN|å|aa|❌|❌|❌|❌|
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



export interface UseListNavigationReturnType<ChildElement extends Element, I extends UseListNavigationChildInfo> extends OmitStrong<UseChildManagerReturnType<I>, "useManagedChild"> {

    useListNavigationProps: <P extends h.JSX.HTMLAttributes<any>>(props: P) => h.JSX.HTMLAttributes<any>;

    useListNavigationChild: UseListNavigationChild<ChildElement, I>;

    currentTypeahead: string | null;

    invalidTypeahead: boolean | null;

    /**
     * The index of the currently tabbable index.
     */
    tabbableIndex: number | null;

    //managedChildren: I[];

    /**
     * Allows programmatic control of the currently tabbable index.
     */
    //setTabbableIndex: StateUpdater<number | null>;

    navigateToIndex: (index: number | null) => void;
    navigateToNext: () => void;
    navigateToPrev: () => void;
    navigateToFirst: () => void;
    navigateToLast: () => void;

    focusCurrent: null | (() => void);
}

export interface UseListNavigationChildReturnType<ChildElement extends Element> {
    useListNavigationChildProps: <P extends h.JSX.HTMLAttributes<ChildElement>>({ tabIndex, ...props }: P) => UseListNavigationChildPropsReturnType<ChildElement, P>;
    useListNavigationSiblingProps: UseRovingTabIndexSiblingProps<ChildElement>;
    tabbable: boolean | null;
}


/** Arguments passed to the parent `useListNavigation` */
export interface UseListNavigationParameters extends OmitStrong<UseTypeaheadNavigationParameters, "getIndex" | "setIndex">, OmitStrong<UseRovingTabIndexParameters, "tabbableIndex"> {

    /**
     * Maps to Intl.Collator's ignorePunctuation parameter.  Whether punctuation (which is context and locale dependent) should be ignored when searching.
     * 
     * @default false
     */
    //ignorePunctuation?: boolean;

    /**
     * A collator to use when comparing. If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
     */
    collator?: Intl.Collator;

    /**
     * By default, pressing down at the end focuses the first element, and vice-versa.
     * 
     * This prop can be used to disable that behavior.
     */
    noWrap?: boolean;

    /**
     * By default, any typed characters will focus the next item that starts with the typed string.
     * 
     * This prop can be used to disable that behavior.
     */
    noTypeahead?: boolean;

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

    /**
     * Controls which arrow keys are used to navigate through the component.
     * Relative to the writing mode, so in English, "inline" corresponds
     * to the left & right arrow keys, and "block" to the up & down arrow keys.
     * 
     * Use "either" to allow navigation in either direction.
     * 
     * Use "none" to disallow navigation via the arrow keys (typeahead is still allowed).
     */
    keyNavigation?: "inline" | "block" | "either" | "none";

    initialIndex?: number | null;
}
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

/** Arguments passed to the child 'useListNavigationChild` */
export interface UseListNavigationChildInfo extends UseRovingTabIndexChildInfo, UseTypeaheadNavigationChildInfo, UseLinearNavigationChildInfo {
    /**
     * If a child is hidden, then it will be skipped over
     * during keyboard navigation, and the HTML `hidden`
     * attribute will be applied.
     */
    hidden?: boolean;
}
export type UseListNavigationChildParameters<I extends UseListNavigationChildInfo> = Omit<I, "rerenderAndFocus" | "setTabbable" | "getTabbable">;

/** Type of the child's sub-hook */
export type UseListNavigationChild<ChildElement extends Element, I extends UseListNavigationChildInfo> = ({ text, index, ...i }: UseListNavigationChildParameters<I>) => UseListNavigationChildReturnType<ChildElement>;


/** Return type of the child `useListNavigationChildProps` */
export type UseListNavigationChildPropsReturnType<ChildElement extends Element, P extends h.JSX.HTMLAttributes<ChildElement>> = MergedProps<ChildElement, UseRovingTabIndexChildPropsReturnType<ChildElement, { onClick: () => void; }>, P>;

export type UseListNavigationChildProps<ChildElement extends Element> = <P extends h.JSX.HTMLAttributes<ChildElement>>(p: P) => UseListNavigationChildPropsReturnType<ChildElement, P>

function identity<T>(t: T) { return t; }

/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ChildElement extends Element, I extends UseListNavigationChildInfo>({ initialIndex, shouldFocusOnChange, collator, keyNavigation, indexMangler, indexDemangler }: UseListNavigationParameters): UseListNavigationReturnType<ChildElement, I> {

    indexMangler ??= identity;
    indexDemangler ??= identity;
    keyNavigation ??= "either";

    useEnsureStability("useListNavigation", indexMangler, indexDemangler);

    // Keep track of three things related to the currently tabbable element's index:
    // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
    const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState<number | null>(initialIndex === undefined ? 0 : initialIndex);
    const { managedChildren, indicesByElement, useRovingTabIndexChild, focusCurrent, ...rest } = useRovingTabIndex<I>({ shouldFocusOnChange, tabbableIndex })

    /*const navigateToIndex = useCallback((i: number | null) => { setTabbableIndex(i); }, []);
    const navigateToFirst = useCallback(() => { tryNavigateToIndex(managedChildren,) setTabbableIndex(indexMangler!(0)); }, []);
    const navigateToLast = useCallback(() => { setTabbableIndex(indexMangler!(managedChildren.length - 1)); }, []);
    const navigateToPrev = useCallback(() => { setTabbableIndex(i => indexMangler!(indexDemangler!(i ?? 0) - 1)) }, [indexDemangler, indexMangler]);
    const navigateToNext = useCallback(() => { setTabbableIndex(i => indexMangler!(indexDemangler!(i ?? 0) + 1)) }, [indexDemangler, indexMangler]);
*/
    const navigateToIndex = useCallback((i: number | null) => {
        setTabbableIndex(i == null ? null : tryNavigateToIndex(managedChildren, 0, i, 1, indexMangler ?? identity, indexDemangler ?? identity));
    }, [])
    const navigateToFirst = useCallback(() => {
        setTabbableIndex(tryNavigateToIndex(managedChildren, 0, 0, 1, indexMangler ?? identity, indexDemangler ?? identity));
    }, [])
    const navigateToLast = useCallback(() => { setTabbableIndex(tryNavigateToIndex(managedChildren, managedChildren.length, managedChildren.length, -1, indexMangler ?? identity, indexDemangler ?? identity)); }, [])
    const navigateToPrev = useCallback(() => {
        setTabbableIndex(c => {
            return tryNavigateToIndex(managedChildren, c ?? 0, (c ?? 0) - 1, -1, indexMangler ?? identity, indexDemangler ?? identity)
        })
    }, [])
    const navigateToNext = useCallback(() => {
        setTabbableIndex(c => {
            return tryNavigateToIndex(managedChildren, c ?? 0, (c ?? 0) + 1, 1, indexMangler ?? identity, indexDemangler ?? identity);
        })
    }, [])

    const setIndex = useCallback((index: (number | null) | ((prev: number | null) => (number | null))) => {
        setTabbableIndex(index);
    }, []);
    const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild, useTypeaheadNavigationProps } = useTypeaheadNavigation<any, I>({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
    const { useLinearNavigationProps } = useLinearNavigation<any>({ navigationDirection: keyNavigation, index: getTabbableIndex() ?? 0, managedChildren, navigateToPrev, navigateToNext, navigateToFirst, navigateToLast });

    const useListNavigationProps = useCallback(<P extends h.JSX.HTMLAttributes<ChildElement>>(props: P) => {
        return useLinearNavigationProps(useTypeaheadNavigationProps(props));
    }, [useLinearNavigationProps, useTypeaheadNavigationProps]);

    const useListNavigationChild: UseListNavigationChild<ChildElement, I> = useCallback((info: UseListNavigationChildParameters<I>): UseListNavigationChildReturnType<ChildElement> => {

        const _v: void = useTypeaheadNavigationChild(info as I);
        //const { useLinearNavigationChildProps } = useLinearNavigationChild(info as I);

        const { useRovingTabIndexChildProps, useRovingTabIndexSiblingProps, tabbable } = useRovingTabIndexChild<ChildElement>(info as I);

        const useListNavigationChildProps: UseListNavigationChildProps<ChildElement> = function <P extends h.JSX.HTMLAttributes<ChildElement>>({ ...props }: P) {

            return useMergedProps<ChildElement>()(useRovingTabIndexChildProps((({ onClick: roveToSelf, hidden: info.hidden }))), props);
        }

        const roveToSelf = useCallback(() => { navigateToIndex(info.index); }, [])

        return {
            useListNavigationChildProps,
            useListNavigationSiblingProps: useRovingTabIndexSiblingProps,
            tabbable
        }
    }, [useTypeaheadNavigationChild, useRovingTabIndexChild, navigateToIndex]);

    return {
        useListNavigationChild,
        useListNavigationProps,

        currentTypeahead,
        invalidTypeahead,

        tabbableIndex,

        managedChildren,
        indicesByElement,

        navigateToIndex,
        navigateToNext,
        navigateToPrev,
        navigateToFirst,
        navigateToLast,

        focusCurrent,

        ...rest
    }
}







export function tryNavigateToIndex<I extends { hidden?: boolean }>(managedCells: (I | null | undefined)[], initial: number, target: number, searchDirection: 1 | -1, indexMangler: (n: number) => number, indexDemangler: (n: number) => number) {
    function helper() {
        if (searchDirection === -1) {
            while (target >= 0 && (managedCells[target] == null || !!managedCells[target]?.hidden))
                target = indexMangler(indexDemangler(target) - 1);

            return target < 0 ? initial : target;
        }
        else if (searchDirection === 1) {
            while (target < managedCells.length && managedCells[target] == null || !!managedCells[target]?.hidden)
                target = indexMangler(indexDemangler(target) + 1);

            return target >= managedCells.length ? initial : target;
        }
        else {
            return initial;
        }
    }
    return (helper())
}

