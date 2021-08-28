import { Context, h, Ref } from "preact";
import { StateUpdater, useCallback, useRef } from "preact/hooks";
import { useRefElement, UseRefElementPropsReturnType } from "./use-ref-element";
import { useLayoutEffect } from "./use-layout-effect";
import { MergedProps, useMergedProps } from "./use-merged-props"
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";
import { useLogicalDirection } from "./use-logical-direction";
import { RovingTabIndexChildInfo, useRovingTabIndex, UseRovingTabIndexChildPropsReturnType, UseRovingTabIndexPropsReturnType, UseRovingTabIndexSiblingProps } from "./use-roving-tabindex";
import type { UseLinearNavigationPropsReturnType, UseTypeaheadNavigationParameters, UseTypeaheadNavigationPropsReturnType } from "./use-keyboard-navigation";
import { useLinearNavigation, useTypeaheadNavigation } from "./use-keyboard-navigation";
import { UseHasFocusPropsReturnType } from "./use-has-focus";
import { UseChildManagerReturnType, UseManagedChildReturnType } from "./use-child-manager";




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
const dummy: any = null;



export interface UseListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, I extends UseListNavigationChildInfo> extends Omit<UseChildManagerReturnType<I>, "useManagedChild"> {
    useListNavigationProps: UseListNavigationProps<ParentElement>;
    useListNavigationChild: UseListNavigationChild<ChildElement, I>;

    currentTypeahead: string | null;

    invalidTypeahead: boolean | null;

    /**
     * The index of the currently tabbable index.
     */
    tabbableIndex: number;

    //managedChildren: I[];

    /**
     * Allows programmatic control of the currently tabbable index.
     */
    setTabbableIndex: StateUpdater<number>;

    navigateToIndex: (index: number) => void;
    navigateToNext: () => void;
    navigateToPrev: () => void;
    navigateToStart: () => void;
    navigateToEnd: () => void;

    focusSelf: () => void;
}

export interface UseListNavigationChildReturnType<ChildElement extends Element> {
    useListNavigationChildProps: <P extends h.JSX.HTMLAttributes<ChildElement>>({ tabIndex, ...props }: P) => UseListNavigationChildPropsReturnType<ChildElement, P>;
    useListNavigationSiblingProps: UseRovingTabIndexSiblingProps<ChildElement>;
    tabbable: boolean;
}


/** Arguments passed to the parent `useListNavigation` */
export interface UseListNavigationParameters extends Omit<UseTypeaheadNavigationParameters<number>, "getIndex" | "setIndex"> {

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
     * Controls which arrow keys are used to navigate through the component.
     * Relative to the writing mode, so in English, "inline" corresponds
     * to the left & right arrow keys, and "block" to the up & down arrow keys.
     * 
     * Use "either" to allow navigation in either direction.
     * 
     * Use "none" to disallow navigation via the arrow keys (typeahead is still allowed).
     */
    keyNavigation?: "inline" | "block" | "either" | "none";
}

/** Arguments passed to the child 'useListNavigationChild` */
export interface UseListNavigationChildInfo extends RovingTabIndexChildInfo<number> {
    /**
     * If provided, allows this component to be navigated to by typing this string. 
     * It should be the same text content as whatever's displayed, ideally.
     */
    text: string | null;
}

/** Type of the parent's prop-modifying function */
export type UseListNavigationProps<ParentElement extends Element> = <P extends h.JSX.HTMLAttributes<ParentElement>>({ ...props }: P) => UseListNavigationPropsReturnType<ParentElement, P>;

/** Type of the child's sub-hook */
export type UseListNavigationChild<ChildElement extends Element, I extends UseListNavigationChildInfo = UseListNavigationChildInfo> = ({ text, index, ...i }: Omit<I, "setTabbable">) => UseListNavigationChildReturnType<ChildElement>;

export type UseListNavigationChildParameters<I extends UseListNavigationChildInfo> = Omit<I, "setTabbable">;

/** Return type of the parent `useListNavigationProps` */
export type UseListNavigationPropsReturnType<ParentElement extends Element, P extends h.JSX.HTMLAttributes<ParentElement>> = MergedProps<ParentElement, UseHasFocusPropsReturnType<ParentElement, {}>, UseTypeaheadNavigationPropsReturnType<ParentElement, UseLinearNavigationPropsReturnType<ParentElement, P>>>;

/** Return type of the child `useListNavigationChildProps` */
export type UseListNavigationChildPropsReturnType<ChildElement extends Element, P extends h.JSX.HTMLAttributes<ChildElement>> = MergedProps<ChildElement, UseRovingTabIndexChildPropsReturnType<ChildElement, { onClick: () => void; }>, P>;

export type UseListNavigationChildProps<ChildElement extends Element> = <P extends h.JSX.HTMLAttributes<ChildElement>>(p: P) => UseListNavigationChildPropsReturnType<ChildElement, P>


/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ParentElement extends Element, ChildElement extends Element, I extends UseListNavigationChildInfo = UseListNavigationChildInfo>({ collator, keyNavigation }: UseListNavigationParameters): UseListNavigationReturnType<ParentElement, ChildElement, I> {

    keyNavigation ??= "either";

    // Keep track of three things related to the currently tabbable element's index:
    // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
    const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState(0);

    const setIndex = useCallback((index: number | ((prev: number) => number)) => {
        setTabbableIndex(index);
    }, [])
    const { childCount, managedChildren, indicesByElement, useRovingTabIndexProps, useRovingTabIndexChild, focusSelf } = useRovingTabIndex<ParentElement, I>({ tabbableIndex: tabbableIndex as any })
    const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild, useTypeaheadNavigationProps } = useTypeaheadNavigation<ParentElement, ChildElement, number>({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
    const { navigateToEnd, navigateToIndex, navigateToNext, navigateToPrev, navigateToStart, useLinearNavigationChild, useLinearNavigationProps } = useLinearNavigation<ParentElement, ChildElement>({ getIndex: getTabbableIndex, setIndex, managedChildren });

    // Any time the tabbable index changes, notify the previous
    // and next child as such, and optionally focus that next one.
    /*useLayoutEffect(([prevTabbableIndex]) => {
        console.log(`Notifying children of index change from ${prevTabbableIndex} to ${tabbableIndex}`);
        managedChildren[prevTabbableIndex]?.setTabbable(false);
        managedChildren[tabbableIndex]?.setTabbable(true)
    }, [tabbableIndex])*/


    const useListNavigationProps: UseListNavigationProps<ParentElement> = function <P extends h.JSX.HTMLAttributes<ParentElement>>(props: P): UseListNavigationPropsReturnType<ParentElement, P> {
        const p1 = useLinearNavigationProps(props);
        const p2 = useTypeaheadNavigationProps(p1);
        let ret = useRovingTabIndexProps(p2);
        return ret;
    }

    const useListNavigationChild: UseListNavigationChild<ChildElement, I> = useCallback((info: UseListNavigationChildParameters<I>): UseListNavigationChildReturnType<ChildElement> => {

        const { useTypeaheadNavigationChildProps } = useTypeaheadNavigationChild(info);
        const { useLinearNavigationChildProps } = useLinearNavigationChild();

        const { useRovingTabIndexChildProps, useRovingTabIndexSiblingProps, tabbable } = useRovingTabIndexChild<ChildElement>(info);

        const useListNavigationChildProps: UseListNavigationChildProps<ChildElement> = function <P extends h.JSX.HTMLAttributes<ChildElement>>({ ...props }: P) {

            return useMergedProps<ChildElement>()(useRovingTabIndexChildProps(useTypeaheadNavigationChildProps(useLinearNavigationChildProps({ onClick: roveToSelf }))), props);
        }

        const roveToSelf = useCallback(() => { navigateToIndex(info.index); }, [])

        return {
            useListNavigationChildProps,
            useListNavigationSiblingProps: useRovingTabIndexSiblingProps,
            tabbable,
            //roveToSelf,
            //element
        }
    }, [useTypeaheadNavigationChild, useLinearNavigationChild, useRovingTabIndexChild, navigateToIndex]);

    return {
        useListNavigationProps,
        useListNavigationChild,

        currentTypeahead,
        invalidTypeahead,

        tabbableIndex,
        setTabbableIndex,

        managedChildren,
        indicesByElement,

        navigateToIndex,
        navigateToNext,
        navigateToPrev,
        navigateToStart,
        navigateToEnd,

        focusSelf
    }
}







