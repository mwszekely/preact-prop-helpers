import { UsePressParameters } from "component-use/use-press";
import { h } from "preact";
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { useTextContent, UseTextContentParameters } from "../dom-helpers/use-text-content";
import { assertEmptyObject } from "../preact-extensions/use-managed-children";
import { OnPassiveStateChange, usePassiveState } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableGetter, useStableObject } from "../preact-extensions/use-stable-getter";
import { useState } from "../preact-extensions/use-state";
import { UseRovingTabIndexChildParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex";



export interface UseTypeaheadNavigationReturnType<ParentOrChildElement extends Element> {
    typeaheadNavigationReturn: {
        getCurrentTypeahead(): string | null;
        typeaheadStatus: "invalid" | "valid" | "none";
        //invalidTypeahead: boolean | null;
        propsStable: h.JSX.HTMLAttributes<ParentOrChildElement>;
    }
    typeaheadNavigationChildContext: UseTypeaheadNavigationChildParameters<ParentOrChildElement>["typeaheadNavigationChildContext"];
}




export interface UseTypeaheadNavigationParameters<TabbableChildElement extends Element> {
    typeaheadNavigationParameters: {


        /**
         * Must return true if the given child can be navigated to.
         * 
         * Generally corresponds to a `hidden` or `disabled` prop.
         * @param i 
         */
        isValid(i: number): boolean;


        /**
         * A collator to use when comparing. If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
         */
        collator: null | Intl.Collator;

        noTypeahead: boolean;

        typeaheadTimeout: number;
    };

    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<TabbableChildElement>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">
}

/** Arguments passed to the child 'useTypeaheadNavigationChild` */


export interface UseTypeaheadNavigationChildParameters<ChildElement extends Element> {
    managedChildParameters: Pick<UseRovingTabIndexChildParameters<ChildElement>["managedChildParameters"], "index">;

    textContentParameters: Pick<UseTextContentParameters<ChildElement>["textContentParameters"], "getText" | "hidden">;

    //typeaheadNavigationChildParameters: {

    //getText(element: Element | null): string;

    //hidden: boolean;
    //}

    refElementReturn: Pick<UseRefElementReturnType<ChildElement>["refElementReturn"], "getElement">;

    typeaheadNavigationChildContext: {

        typeaheadNavigationChildParameters: {
            excludeSpace: () => boolean;
            sortedTypeaheadInfo: Array<TypeaheadInfo>;
            insertingComparator: (lhs: string | null, rhs: TypeaheadInfo) => number;
        }
    }
}

export interface UseTypeaheadNavigationChildReturnType {
    pressParameters: Pick<UsePressParameters<any>["pressParameters"], "excludeSpace">;

    textContentReturn: { getTextContent(): string | null }
}

interface TypeaheadInfo { text: string | null; unsortedIndex: number; }

/** Type of the child's sub-hook */
export type UseTypeaheadNavigationChild<ChildElement extends Element> = (args: UseTypeaheadNavigationChildParameters<ChildElement>) => UseTypeaheadNavigationChildReturnType;


/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 * 
 * @see useListNavigation, which packages everything up together.
 */
export function useTypeaheadNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({
    typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValid, ..._void3 },
    rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ..._void1 },
    ..._void2
}: UseTypeaheadNavigationParameters<ChildElement>): UseTypeaheadNavigationReturnType<ParentOrChildElement> {

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);

    // For typeahead, keep track of what our current "search" string is (if we have one)
    // and also clear it every 1000 ms since the last time it changed.
    // Next, keep a mapping of typeahead values to indices for faster searching.
    // And, for the user's sake, let them know when their typeahead can't match anything anymore
    const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState<string | null, Event>(useStableCallback((currentTypeahead, prev, reason) => {
        const handle = setTimeout(() => { setCurrentTypeahead(null, undefined!); setTypeaheadStatus("none"); }, typeaheadTimeout ?? 1000);
        updateBasedOnTypeaheadChange(currentTypeahead, reason!);
        return () => clearTimeout(handle);
    }));
    //useTimeout({ timeout: typeaheadTimeout ?? 1000, callback: () => { setCurrentTypeahead(null); setInvalidTypeahead(null); }, triggerIndex: currentTypeahead });
    const sortedTypeaheadInfo = useRef<TypeaheadInfo[]>([]);
    const [typeaheadStatus, setTypeaheadStatus] = useState<`${"in" | ""}valid` | "none">("none");

    // Handle typeahead for input method editors as well
    // Essentially, when active, ignore further keys 
    // because we're waiting for a CompositionEnd event
    const [, setImeActive, getImeActive] = useState(false);

    // Because composition events fire *after* keydown events 
    // (but within the same task, which, TODO, could be browser-dependent),
    // we can use this to keep track of which event we're listening for on the first keydown.
    const [nextTypeaheadChar, setNextTypeaheadChar] = useState<string | null>(null);
    useLayoutEffect(() => {
        if (nextTypeaheadChar !== null) {
            setCurrentTypeahead(typeahead => ((typeahead ?? "") + nextTypeaheadChar), undefined!);
            setNextTypeaheadChar(null);
        }
    }, [nextTypeaheadChar]);


    const comparatorShared = useStableCallback((safeLhs: string, safeRhs: string) => {
        let compare: number;
        // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
        // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
        safeLhs = safeLhs.normalize("NFD");
        safeRhs = safeRhs.normalize("NFD")

        if (collator)
            compare = collator.compare(safeLhs, safeRhs)
        else
            compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");

        return compare;
    });

    const insertingComparator = useStableCallback((lhs: string | null, rhs: TypeaheadInfo) => {

        if (typeof lhs === "string" && typeof rhs.text === "string") {
            return comparatorShared(lhs, rhs.text);
        }

        return (lhs as unknown as number) - (rhs as unknown as number);
    });

    const typeaheadComparator = useStableCallback((lhs: string, rhs: TypeaheadInfo) => {

        if (typeof lhs === "string" && typeof rhs.text === "string") {
            // During typeahead, all strings longer than ours should be truncated
            // so that they're all considered equally by that point.
            return comparatorShared(lhs, rhs.text.substring(0, lhs.length));
        }

        return (lhs as unknown as number) - (rhs as unknown as number);
    });

    const isDisabled = useStableGetter(noTypeahead);


    const propsStable = useRef<h.JSX.HTMLAttributes<ParentOrChildElement>>({
        onKeyDown: useStableCallback((e: h.JSX.TargetedKeyboardEvent<ParentOrChildElement>) => {
            if (isDisabled())
                return;

            const imeActive = getImeActive();

            const key = e.key;

            // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
            if (e.ctrlKey || e.metaKey)
                return;

            if (!imeActive && e.key === "Backspace") {
                // Remove the last character in a way that doesn't split UTF-16 surrogates.
                setCurrentTypeahead(t => t == null ? null : [...t].reverse().slice(1).reverse().join(""), e as h.JSX.TargetedKeyboardEvent<any>);
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

        }),
        onCompositionStart: useStableCallback((e: CompositionEvent) => {
            setNextTypeaheadChar(e.data);
            setImeActive(false);
        }),
        onCompositionEnd: useStableCallback((_e: CompositionEvent) => { setImeActive(true) }),
    });

    // Handle changes in typeahead that cause changes to the tabbable index
    /* useEffect(() => {
         
     }, [currentTypeahead]);*/

    const excludeSpace = useStableCallback(() => { return typeaheadStatus != "none" });

    return {
        typeaheadNavigationChildContext: useStableObject({
            typeaheadNavigationChildParameters: useStableObject({
                insertingComparator,
                sortedTypeaheadInfo: sortedTypeaheadInfo.current,
                excludeSpace
            }),

        }),
        typeaheadNavigationReturn: {
            getCurrentTypeahead,
            typeaheadStatus,
            propsStable: propsStable.current
        }
    }






    function updateBasedOnTypeaheadChange(currentTypeahead: string | null, reason: Event) {
        if (currentTypeahead && sortedTypeaheadInfo.current.length) {



            const sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, typeaheadComparator);

            if (sortedTypeaheadIndex < 0) {
                // The user has typed an entry that doesn't exist in the list
                // (or more specifically "for which there is no entry that starts with that input")
                setTypeaheadStatus("invalid");
            }
            else {
                setTypeaheadStatus("valid");

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
                    if (!isValid(u))
                        return;

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
                while (i >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                    updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                    --i;
                }

                i = sortedTypeaheadIndex;
                while (i < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
                    updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
                    ++i;
                }

                if (lowestUnsortedIndexNext !== null)
                    setIndex(sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex, reason, true);
                else if (lowestUnsortedIndexAll !== null)
                    setIndex(sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex, reason, true);
            }
        }
    }
}


export function useTypeaheadNavigationChild<ChildElement extends Element>({
    managedChildParameters: { index, ...void1 },
    textContentParameters: { getText, hidden, ...void5 },
    typeaheadNavigationChildContext: { typeaheadNavigationChildParameters: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } },
    refElementReturn: { getElement, ...void3 },
    //typeaheadNavigationChildParameters: { ...void5 },
    ...void4
}: UseTypeaheadNavigationChildParameters<ChildElement>): ReturnType<UseTypeaheadNavigationChild<ChildElement>> {

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);

    const { textContentReturn } = useTextContent({
        refElementReturn: { getElement },
        textContentParameters: {
            getText,
            hidden,
            onTextContentChange: useCallback<OnPassiveStateChange<string | null, never>>((text: string | null) => {
                if (text) {
                    // Find where to insert this item.
                    // Because all index values should be unique, the returned sortedIndex
                    // should always refer to a new location (i.e. be negative)                
                    const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                    console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);
                    if (sortedIndex < 0) {
                        sortedTypeaheadInfo.splice(-sortedIndex - 1, 0, { text, unsortedIndex: index });
                    }
                    else {
                        sortedTypeaheadInfo.splice(sortedIndex, 0, { text, unsortedIndex: index });
                    }

                    return () => {
                        // When unmounting, find where we were and remove ourselves.
                        // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
                        const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                        console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { unsortedIndex: index, text }) == 0);

                        if (sortedIndex >= 0) {
                            sortedTypeaheadInfo.splice(sortedIndex, 1);
                        }
                    }
                }

            }, [])
        }
    })

    return { textContentReturn, pressParameters: { excludeSpace } }

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
    let firstIndex = 0;
    let lastIndex = array.length - 1;
    while (firstIndex <= lastIndex) {
        const testIndex = (lastIndex + firstIndex) >> 1;
        const comparisonResult = comparator(wanted, array[testIndex]);

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
