import { Context, h, Ref } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { useRefElement, UseRefElementPropsReturnType } from "./use-ref-element";
import { useLayoutEffect } from "./use-layout-effect";
import { MergedProps, useMergedProps } from "./use-merged-props"
import { useState } from "./use-state";
import { useTimeout } from "./use-timeout";
import { useLogicalDirection } from "./use-logical-direction";
import { RovingTabIndexChildInfo, UseRovingTabIndexChildParameters } from "./use-roving-tabindex";
import { ManagedChildInfo } from "./use-child-manager";
import { useStableCallback } from "./use-stable-callback";








export interface UseLinearNavigationReturnType<ChildElement extends Element> {
    useLinearNavigationChild: UseLinearNavigationChild<ChildElement>;

    navigateToIndex(index: number | null): void;
    navigateToNext(): void;
    navigateToPrev(): void;
    navigateToStart(): void;
    navigateToEnd(): void;
}



export type UseLinearNavigationChild<E extends Element> = (() => UseLinearNavigationChildReturnType<E>);

export interface UseLinearNavigationChildReturnType<E extends Element> {
    useLinearNavigationChildProps: UseLinearNavigationChildProps<E>;
}

export type UseLinearNavigationChildProps<ChildElement extends Element> = <P extends h.JSX.HTMLAttributes<ChildElement>>(props: P) => UseRefElementPropsReturnType<ChildElement, MergedProps<ChildElement, { onKeyDown: (e: KeyboardEvent) => void; }, P>>;


/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters {
    /**
     * Controls which arrow keys are used to navigate through the component.
     * Relative to the writing mode, so in English, "inline" corresponds
     * to the left & right arrow keys, and "block" to the up & down arrow keys.
     * 
     * Use "either" to allow navigation in either direction.
     * 
     * Use "none" to disallow navigation with the arrow keys in any direction.
     */
    navigationDirection?: "inline" | "block" | "either" | "none";

    managedChildren: UseLinearNavigationChildInfo[];

    getIndex(): number | null;
    setIndex(value: number): void;
    setIndex(value: (previousValue: number | null) => number | null): void;
}

/** Arguments passed to the child 'useLinearNavigationChild` */
export interface UseLinearNavigationChildInfo extends ManagedChildInfo<number> { }

/** Return type of the child `useLinearNavigationChildProps` */
export type UseLinearNavigationChildPropsReturnType<ChildElement extends Element, P extends {}> = MergedProps<ChildElement, UseRefElementPropsReturnType<ChildElement, { tabIndex: number; }>, Omit<P, "tabIndex">>;


/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys.
 * 
 * @see useListNavigation, which packages everything up together.
 */
export function useLinearNavigation<ChildElement extends Element>({ getIndex, setIndex, managedChildren, navigationDirection }: UseLinearNavigationParameters): UseLinearNavigationReturnType<ChildElement> {

    navigationDirection ??= "either";

    const index = getIndex();
    const childCount = managedChildren.length;

    // Make sure the tabbable index never escapes the bounds of all available children
    // TODO: Keep track of the original index and keep it, at least until keyboard navigation.
    useLayoutEffect(() => {
        if (index !== null) {
            if (index < 0) {
                setIndex(0);
            }
            else if (childCount > 0 && index >= childCount) {
                setIndex(childCount - 1);
            }
        }
    }, [index, childCount]);

    // These allow us to manipulate what our current tabbable child is.
    const navigateToIndex = useCallback((index: number) => { setIndex(index < 0 ? (managedChildren.length + index) : index); }, []);
    const navigateToNext = useCallback(() => { setIndex(i => ++i); }, []);
    const navigateToPrev = useCallback(() => { setIndex(i => --i); }, []);
    const navigateToStart = useCallback(() => { navigateToIndex(0); }, [navigateToIndex]);
    const navigateToEnd = useCallback(() => { navigateToIndex(-1); }, [navigateToIndex]);


    const useLinearNavigationChild: UseLinearNavigationChild<ChildElement> = useCallback(() => {
        const { useRefElementProps, element } = useRefElement<ChildElement>();

        // Prefer the parent element's direction so that we're not calling getComputedStyle
        // on every single individual child, which is likely redundant.
        // TODO: Does useLogicalDirection need to hold a per-render & per-element cache to make this work?
        // Or does the browser automatically cache the computations until something changes?
        // Given that the values are live, it seems like it should be the latter...
        const { convertElementSize, getLogicalDirection } = useLogicalDirection(element?.parentElement ?? element);

        const useLinearNavigationChildProps: UseLinearNavigationChildProps<ChildElement> = (props) => {

            const onKeyDown = (e: KeyboardEvent) => {
                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                if (e.ctrlKey || e.metaKey)
                    return;

                const info = getLogicalDirection();

                let allowsBlockNavigation = (navigationDirection == "block" || navigationDirection == "either");
                let allowsInlineNavigation = (navigationDirection == "inline" || navigationDirection == "either");

                switch (e.key) {
                    case "ArrowUp": {
                        const propName = (info?.blockOrientation === "vertical" ? "blockDirection" : "inlineDirection");
                        const directionAllowed = (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation);
                        if (directionAllowed) {
                            if (info?.[propName] === "btt") {
                                navigateToNext();
                            }
                            else {
                                navigateToPrev();
                            }
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        break;
                    }
                    case "ArrowDown": {
                        const propName = (info?.blockOrientation === "vertical" ? "blockDirection" : "inlineDirection");
                        const directionAllowed = (info?.blockOrientation === "vertical" ? allowsBlockNavigation : allowsInlineNavigation);
                        if (directionAllowed) {
                            if (info?.[propName] === "btt") {
                                navigateToPrev();
                            }
                            else {
                                navigateToNext();
                            }
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        break;
                    }

                    case "ArrowLeft": {
                        const propName = (info?.inlineOrientation === "horizontal" ? "inlineDirection" : "blockDirection");
                        const directionAllowed = (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation);
                        if (directionAllowed) {
                            if (info?.[propName] === "rtl") {
                                navigateToNext();
                            }
                            else {
                                navigateToPrev();
                            }
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        break;
                    }
                    case "ArrowRight": {
                        const propName = (info?.inlineOrientation === "horizontal" ? "inlineDirection" : "blockDirection");
                        const directionAllowed = (info?.inlineOrientation === "horizontal" ? allowsInlineNavigation : allowsBlockNavigation);
                        if (directionAllowed) {
                            if (info?.[propName] === "rtl") {
                                navigateToPrev();
                            }
                            else {
                                navigateToNext();
                            }
                            e.preventDefault();
                            e.stopPropagation();
                        }
                        e.preventDefault();
                        e.stopPropagation();
                        break;
                    }
                    case "Home":
                        navigateToStart();
                        e.preventDefault();
                        e.stopPropagation();
                        break;

                    case "End":
                        navigateToEnd();
                        e.preventDefault();
                        e.stopPropagation();
                        break;
                }
            };


            return useRefElementProps(useMergedProps<ChildElement>()({ onKeyDown }, props));

        }
        return {
            useLinearNavigationChildProps
        }
    }, [navigationDirection, navigateToNext, navigateToPrev, navigateToStart, navigateToEnd])

    return {
        useLinearNavigationChild,

        navigateToIndex,
        navigateToNext,
        navigateToPrev,
        navigateToStart,
        navigateToEnd,
    }


}






export interface UseTypeaheadNavigationReturnType<ChildElement extends Element, I extends UseTypeaheadNavigationChildInfo> {
    useTypeaheadNavigationChild: UseTypeaheadNavigationChild<ChildElement, I>;


    currentTypeahead: string | null;
    invalidTypeahead: boolean | null;
}

export type UseTypeaheadNavigationChildProps<E extends Element> = <P extends h.JSX.HTMLAttributes<E>>(props: P) => MergedProps<E, P, P>
export interface UseTypeaheadNavigationChildReturnType<E extends Element> {
    useTypeaheadNavigationChildProps: UseTypeaheadNavigationChildProps<E>;
}


/** Arguments passed to the parent `useTypeaheadNavigation` */
export interface UseTypeaheadNavigationParameters {

    /**
     * A collator to use when comparing. If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
     */
    collator?: Intl.Collator;

    typeaheadTimeout?: number;

    getIndex(): number | null;
    setIndex(value: number): void;
    setIndex(value: (previousValue: number | null) => number | null): void;
}

/** Arguments passed to the child 'useTypeaheadNavigationChild` */
export interface UseTypeaheadNavigationChildInfo extends RovingTabIndexChildInfo {
    /**
     * If provided, allows this component to be navigated to by typing this string. 
     * It should be the same text content as whatever's displayed, ideally.
     */
    text: string | null;
}

export type UseTypeaheadNavigationChildParameters<I extends UseTypeaheadNavigationChildInfo> = UseRovingTabIndexChildParameters<I>;

/** Type of the child's sub-hook */
export type UseTypeaheadNavigationChild<ChildElement extends Element, I extends UseTypeaheadNavigationChildInfo> = ({ text, index, ...i }: UseTypeaheadNavigationChildParameters<I>) => UseTypeaheadNavigationChildReturnType<ChildElement>;

/** Return type of the child `useTypeaheadNavigationChildProps` */
export type UseTypeaheadNavigationChildPropsReturnType<ChildElement extends Element, P extends {}> = MergedProps<ChildElement, UseRefElementPropsReturnType<ChildElement, {
    onKeyDown: (e: KeyboardEvent) => void;
    onCompositionStart: (e: CompositionEvent) => void;
    onCompositionEnd: (e: CompositionEvent) => void;
}>, P>;


/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 * 
 * @see useListNavigation, which packages everything up together.
 */
export function useTypeaheadNavigation<ChildElement extends Element, I extends UseTypeaheadNavigationChildInfo>({ collator, getIndex, typeaheadTimeout, setIndex }: UseTypeaheadNavigationParameters): UseTypeaheadNavigationReturnType<ChildElement, I> {


    // For typeahead, keep track of what our current "search" string is (if we have one)
    // and also clear it every 1000 ms since the last time it changed.
    // Next, keep a mapping of typeahead values to indices for faster searching.
    // And, for the user's sake, let them know when their typeahead can't match anything anymore
    const [currentTypeahead, setCurrentTypeahead, getCurrentTypeahead] = useState<string | null>(null);
    useTimeout({ timeout: typeaheadTimeout ?? 1000, callback: () => { setCurrentTypeahead(null); setInvalidTypeahead(null); }, triggerIndex: currentTypeahead });
    const sortedTypeaheadInfo = useRef<{ text: string, unsortedIndex: number }[]>([]);
    const [invalidTypeahead, setInvalidTypeahead] = useState<boolean | null>(false);

    // Handle typeahead for input method editors as well
    // Essentially, when active, ignore further keys 
    // because we're waiting for a CompositionEnd event
    const [imeActive, setImeActive, getImeActive] = useState(false);

    // Because composition events fire *after* keydown events 
    // (but within the same task, which, TODO, could be browser-dependent),
    // we can use this to keep track of which event we're listening for on the first keydown.
    const [nextTypeaheadChar, setNextTypeaheadChar] = useState<string | null>(null);
    useLayoutEffect(() => {
        if (nextTypeaheadChar !== null) {
            setCurrentTypeahead(typeahead => ((typeahead ?? "") + nextTypeaheadChar));
            setNextTypeaheadChar(null);
        }
    }, [nextTypeaheadChar]);



    const comparator = useStableCallback((lhs: I["text"], rhs: { text: I["text"]; unsortedIndex: number; }) => {
        let compare: number;

        if (typeof lhs === "string" && typeof rhs.text === "string") {
            // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
            // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
            let safeLhs = lhs.normalize("NFD");
            let safeRhs = rhs.text.normalize("NFD").substr(0, safeLhs.length);

            if (collator)
                compare = collator.compare(safeLhs, safeRhs)
            else
                compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");

            return compare;
        }
        
        return (lhs as any) - (rhs as any);
    });

    // Handle changes in typeahead that cause changes to the tabbable index
    useEffect(() => {
        if (currentTypeahead && sortedTypeaheadInfo.current.length) {



            let sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, comparator);

            if (sortedTypeaheadIndex < 0) {
                // The user has typed an entry that doesn't exist in the list
                // (or more specifically "for which there is no entry that starts with that input")
                setInvalidTypeahead(true);
            }
            else {
                setInvalidTypeahead(false);

                /*
                  We know roughly where, in the sorted array of strings, our next typeahead location is.
                  But roughly isn't good enough if there are multiple matches.
                  To convert our sorted index to the unsorted index we need, we have to find the first
                  element that matches us *and* (if any such exist) is *after* our current selection.

                  In other words, the only way typeahead moves backwards relative to our current
                  position is if the only other option is behind us.

                  It's not specified in WAI-ARIA what to do in that case.  I suppose wrap back to the start?
                  Though there's also a case for just going upwards to the nearest to prevent jumpiness.
                  But if you're already doing typeahead on an unsorted list, like, jumpiness can't be avoided.
                  I dunno. Going back to the start is the simplist though.

                  Basically what this does: Starting from where we found ourselves after our binary search,
                  scan backwards and forwards through all adjacent entries that also compare equally so that
                  we can find the one whose `unsortedIndex` is the lowest amongst all other equal strings
                  (and also the lowest `unsortedIndex` yadda yadda except that it comes after us).

                  TODO: The binary search starts this off with a solid O(log n), but one-character 
                  searches are, thanks to pigeonhole principal, eventually guaranteed to become 
                  O(n*log n). This is annoying but probably not easily solvable? There could be an 
                  exception for one-character strings, but that's just kicking the can down 
                  the road. Maybe one or two characters would be good enough though.
                */


                // These are used to keep track of the candidates' positions in both our sorted array and the unsorted DOM.
                let lowestUnsortedIndexAll: number | null = null;
                let lowestSortedIndexAll = sortedTypeaheadIndex;

                // These two are only set for elements that are ahead of us, but the principle's the same otherwise
                let lowestUnsortedIndexNext: number | null = null;
                let lowestSortedIndexNext = sortedTypeaheadIndex;

                const updateBestFit = (u: number) => {
                    if (lowestUnsortedIndexAll == null || u < lowestUnsortedIndexAll) {
                        lowestUnsortedIndexAll = u;
                        lowestSortedIndexAll = i;
                    }
                    if ((lowestUnsortedIndexNext == null || u < lowestUnsortedIndexNext) && u > (getIndex() ?? -Infinity)) {
                        lowestUnsortedIndexNext = u;
                        lowestSortedIndexNext = i;
                    }
                }

                let i = sortedTypeaheadIndex;
                while (i >= 0 && comparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                    updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                    --i;
                }

                i = sortedTypeaheadIndex;
                while (i < sortedTypeaheadInfo.current.length && comparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                    updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                    ++i;
                }

                if (lowestUnsortedIndexNext !== null)
                    setIndex(sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex);
                else if (lowestUnsortedIndexAll !== null)
                    setIndex(sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex);
            }
        }
    }, [currentTypeahead]);

    const useTypeaheadNavigationChild = useCallback<UseTypeaheadNavigationChild<ChildElement, I>>(({ text, ...i }: UseTypeaheadNavigationChildParameters<I>) => {

        useEffect(() => {
            if (text) {

                // Find where to insert this item.
                // Because all index values should be unique, the returned sortedIndex
                // should always refer to a new location (i.e. be negative)                
                let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, comparator);
                console.assert(sortedIndex < 0);
                if (sortedIndex < 0) {
                    sortedTypeaheadInfo.current.splice(-sortedIndex - 1, 0, { text, unsortedIndex: i.index });
                }

                return () => {
                    // When unmounting, find where we were and remove ourselves.
                    // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
                    let sortedIndex = binarySearch(sortedTypeaheadInfo.current, text, comparator);
                    console.assert(sortedIndex >= 0);

                    if (sortedIndex >= 0) {
                        sortedTypeaheadInfo.current.splice(sortedIndex, 1);
                    }
                }
            }
        }, [text]);

        const useTypeaheadNavigationChildProps: UseTypeaheadNavigationChildProps<ChildElement> = function <P extends h.JSX.HTMLAttributes<ChildElement>>({ ...props }: P): UseTypeaheadNavigationChildPropsReturnType<ChildElement, P> {

            const { useRefElementProps, element } = useRefElement<ChildElement>();

            const onCompositionStart = (e: CompositionEvent) => { setImeActive(true) };
            const onCompositionEnd = (e: CompositionEvent) => {
                setNextTypeaheadChar(e.data);
                setImeActive(false);
            };

            const onKeyDown = (e: KeyboardEvent) => {

                const imeActive = getImeActive();

                let key = e.key;

                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                if (e.ctrlKey || e.metaKey)
                    return;

                if (!imeActive && e.key === "Backspace") {
                    // Remove the last character in a way that doesn't split UTF-16 surrogates.
                    setCurrentTypeahead(t => t === null ? null : [...t].reverse().slice(1).reverse().join(""));
                    e.preventDefault();
                    e.stopPropagation();
                    return;
                }

                // The key property represents the typed character OR the "named key attribute" of the key pressed.
                // There's no definite way to tell the difference, but for all intents and purposes
                // there are no one-character names, and there are no non-ASCII-alpha names.
                // Thus, any one-character or non-ASCII value for `key` is *almost certainly* a typed character.
                const isCharacterKey = (key.length === 1 || !/^[A-Za-z]/.test(key));
                if (isCharacterKey) {

                    if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) {
                        // Don't do anything because a spacebar can't ever 
                        // initiate a typeahead, only continue one.

                        // (Specifically, let the event continue propagation in this case)
                    }
                    else {

                        e.preventDefault();
                        e.stopPropagation();

                        // Note: Won't be true for the first keydown
                        // but will be overwritten before useLayoutEffect is called
                        // to actually apply the change
                        if (!imeActive)
                            setNextTypeaheadChar(key);
                    }
                }

            };

            return useMergedProps<ChildElement>()(useRefElementProps({ onKeyDown, onCompositionStart, onCompositionEnd, }), props);
        };

        return {
            useTypeaheadNavigationChildProps
        };


    }, []);

    return {
        useTypeaheadNavigationChild,

        currentTypeahead,
        invalidTypeahead,
    }
}


/**
 * Your usual binary search implementation.
 * 
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array The array to search through
 * @param wanted The value you'd like to find
 * @param comparator Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not. 
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 */
export function binarySearch<T, U, F extends (lhs: U, rhs: T) => number>(array: T[], wanted: U, comparator: F): number {
    var firstIndex = 0;
    var lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
        var testIndex = (lastIndex + firstIndex) >> 1;
        var comparisonResult = comparator(wanted, array[testIndex]);

        if (comparisonResult > 0) {
            firstIndex = testIndex + 1;
        }
        else if (comparisonResult < 0) {
            lastIndex = testIndex - 1;
        }
        else {
            return testIndex;
        }
    }

    return -firstIndex - 1;
}
