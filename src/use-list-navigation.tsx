import { Context, h, Ref } from "preact";
import { StateUpdater, useCallback, useRef } from "preact/hooks";
import { useRefElement, UseRefElementPropsReturnType } from "./use-ref-element";
import { useLayoutEffect } from "./use-layout-effect";
import { MergedProps, useMergedProps } from "./use-merged-props"
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";
import { useLogicalDirection } from "./use-logical-direction";
import { RovingTabIndexChildInfo, useRovingTabIndex, UseRovingTabIndexChildParameters, UseRovingTabIndexChildPropsReturnType, UseRovingTabIndexSiblingProps } from "./use-roving-tabindex";
import { useLinearNavigation, useTypeaheadNavigation, UseTypeaheadNavigationParameters } from "./use-keyboard-navigation";
import { UseChildManagerReturnType, UseManagedChildReturnType } from "./use-child-manager";
import { UseRovingTabIndexParameters } from "index";




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



export interface UseListNavigationReturnType<ChildElement extends Element, I extends UseListNavigationChildInfo> extends Omit<UseChildManagerReturnType<I>, "useManagedChild"> {
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
    setTabbableIndex: StateUpdater<number | null>;

    navigateToIndex: (index: number | null) => void;
    navigateToNext: () => void;
    navigateToPrev: () => void;
    navigateToStart: () => void;
    navigateToEnd: () => void;

    focusCurrent: null | (() => void);
}

export interface UseListNavigationChildReturnType<ChildElement extends Element> {
    useListNavigationChildProps: <P extends h.JSX.HTMLAttributes<ChildElement>>({ tabIndex, ...props }: P) => UseListNavigationChildPropsReturnType<ChildElement, P>;
    useListNavigationSiblingProps: UseRovingTabIndexSiblingProps<ChildElement>;
    tabbable: boolean;
}


/** Arguments passed to the parent `useListNavigation` */
export interface UseListNavigationParameters extends Omit<UseTypeaheadNavigationParameters, "getIndex" | "setIndex">, Omit<UseRovingTabIndexParameters, "tabbableIndex"> {

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

    initialIndex?: number | null;
}

/** Arguments passed to the child 'useListNavigationChild` */
export interface UseListNavigationChildInfo extends RovingTabIndexChildInfo {
    /**
     * If provided, allows this component to be navigated to by typing this string. 
     * It should be the same text content as whatever's displayed, ideally.
     */
    text: string | null;
}

/** Type of the child's sub-hook */
export type UseListNavigationChild<ChildElement extends Element, I extends UseListNavigationChildInfo = UseListNavigationChildInfo> = ({ text, index, ...i }: UseListNavigationChildParameters<I>) => UseListNavigationChildReturnType<ChildElement>;

export type UseListNavigationChildParameters<I extends UseListNavigationChildInfo> = UseRovingTabIndexChildParameters<I>;

/** Return type of the child `useListNavigationChildProps` */
export type UseListNavigationChildPropsReturnType<ChildElement extends Element, P extends h.JSX.HTMLAttributes<ChildElement>> = MergedProps<ChildElement, UseRovingTabIndexChildPropsReturnType<ChildElement, { onClick: () => void; }>, P>;

export type UseListNavigationChildProps<ChildElement extends Element> = <P extends h.JSX.HTMLAttributes<ChildElement>>(p: P) => UseListNavigationChildPropsReturnType<ChildElement, P>


/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ChildElement extends Element, I extends UseListNavigationChildInfo = UseListNavigationChildInfo>({ initialIndex, focusOnChange, collator, keyNavigation }: UseListNavigationParameters): UseListNavigationReturnType<ChildElement, I> {

    keyNavigation ??= "either";

    // Keep track of three things related to the currently tabbable element's index:
    // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
    const [tabbableIndex, setTabbableIndex, getTabbableIndex] = useState<number | null>(initialIndex === undefined? 0 : initialIndex);


    const setIndex = useCallback((index: (number | null) | ((prev: number) => (number | null))) => {
        if (index != null) {
            if (typeof index === "function")
                setTabbableIndex(prev => (prev != null? index(prev) : prev) ?? prev);
            else
                setTabbableIndex(index);
        }
    }, []);
    const { managedChildren, indicesByElement, useRovingTabIndexChild, focusCurrent, ...rest } = useRovingTabIndex<I>({ focusOnChange, tabbableIndex })
    const { currentTypeahead, invalidTypeahead, useTypeaheadNavigationChild } = useTypeaheadNavigation<ChildElement, I>({ collator, getIndex: getTabbableIndex, setIndex, typeaheadTimeout: 1000 });
    const { navigateToEnd, navigateToIndex, navigateToNext, navigateToPrev, navigateToStart, useLinearNavigationChild } = useLinearNavigation<ChildElement>({ navigationDirection: keyNavigation, getIndex: getTabbableIndex, setIndex, managedChildren });


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

        focusCurrent,

        ...rest
    }
}







