import { UsePressParameters } from "../../component-use/use-press.js";
import { UseTextContentParameters } from "../../dom-helpers/use-text-content.js";
import { UseGenericChildParameters } from "../../preact-extensions/use-managed-children.js";
import { returnNull, useEnsureStability, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { TargetedPick, useCallback, useLayoutEffect, useRef } from "../../util/lib.js";
import { CompositionEventType, ElementProps, EventType, KeyboardEventType, Nullable } from "../../util/types.js";
import { useMonitoring } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { OriginalIndex, UseProcessedIndexManglerReturnType } from "../processed-children/use-processed-index-mangler.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";

export interface UseTypeaheadNavigationReturnTypeSelf {
    /** Returns the string currently typed by the user. Stable, but cannot be called during render. */
    getCurrentTypeahead(): string | null;

    /**
     * What the current status of the user's input is:
     * 
     * * `"none"`: Typeahead is not in progress; the user has not typed anything (or has not for the given timeout period).
     * * `"valid"`: The string the user has typed so far corresponds to at least one child
     * * `"invalid"`: The string the user has typed so does not correspond to any child
     */
    typeaheadStatus: "invalid" | "valid" | "none";
}

export interface UseTypeaheadNavigationContextSelf {
    /** 
     * Stable, but don't call during render.
     * 
     * @stable
     */
    excludeSpace: () => boolean;
    sortedTypeaheadInfo: Array<TypeaheadInfo>;
    insertingComparator: (lhs: string | null, rhs: TypeaheadInfo) => number;
}

export interface UseTypeaheadNavigationParametersSelf<TabbableChildElement extends Element> {

    /**
     * **Optional**
     * 
     * Called any time the currently tabbable index changes as a result of a typeahead-related keypress
     * 
     * @nonstable
     */
    onNavigateTypeahead: Nullable<(newIndex: number | null, event: KeyboardEventType<TabbableChildElement>) => void>;


    /**
     * Must return true if the given child can be navigated to.
     * 
     * Generally corresponds to a `hidden` or `disabled` prop.
     * @param index - Which child to query
     * 
     * @nonstable
     */
    isValidForTypeaheadNavigation(index: number): boolean;


    /**
     * A collator to use when comparing. 
     * If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
     * 
     * @nonstable
     */
    collator: Nullable<Intl.Collator>;

    /**
     * If true, no typeahead-related processing will occur, effectively disabling this invocation of `useTypeaheadNavigation` altogether.
     */
    noTypeahead: boolean;

    /**
     * How long after the user's last typeahead-related keypress does it take for the system to reset?
     */
    typeaheadTimeout: number;


    /**
     * From `ManagedChildren`
     * 
     * TODO: Obviously remove this once `ManagedChildren` is removed
     */
    getHighestIndex(): OriginalIndex;
}

export interface UseTypeaheadNavigationReturnType<ParentOrChildElement extends Element> {
    typeaheadNavigationReturn: UseTypeaheadNavigationReturnTypeSelf;
    propsStable: ElementProps<ParentOrChildElement>;
    context: UseTypeaheadNavigationContext;
}

export interface UseTypeaheadNavigationContext {
    typeaheadNavigationContext: UseTypeaheadNavigationContextSelf;
}


export interface UseTypeaheadNavigationChildInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index" | "untabbable"> { }


export interface UseTypeaheadNavigationParameters<TabbableChildElement extends Element> extends
    TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElement>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex">,
    TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexFromRepositionedToOriginal" | "indexFromOriginalToRepositioned"> {
    typeaheadNavigationParameters: UseTypeaheadNavigationParametersSelf<TabbableChildElement>;
}

export type UseTypeaheadNavigationChildInfoKeysParameters = "index" | "untabbable";
export type UseTypeaheadNavigationChildInfoKeysReturnType = never;

/** Arguments passed to the child `useTypeaheadNavigationChild` */
export interface UseTypeaheadNavigationChildParameters<ChildElement extends Element> extends
    UseGenericChildParameters<UseTypeaheadNavigationContext, Pick<UseTypeaheadNavigationChildInfo<ChildElement>, UseTypeaheadNavigationChildInfoKeysParameters>>
    //TargetedPick<UseTextContentReturnType, "textContentReturn", "getTextContent">,
    /*TargetedPick<UseRefElementReturnType<ChildElement>, "refElementReturn", "getElement">*/ {
}

export interface UseTypeaheadNavigationChildReturnType extends
    TargetedPick<UseTextContentParameters<any>, "textContentParameters", "onTextContentChange">,
    TargetedPick<UsePressParameters<any>, "pressParameters", "excludeSpace"> {
}

interface TypeaheadInfo {
    text: string | null;
    indexOriginal: OriginalIndex;
}


/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 *  
 * @see useListNavigation, which packages everything up together.
 * 
 * @hasChild {@link useTypeaheadNavigationChild}
 * 
 * @compositeParams
 */
export function useTypeaheadNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({
    typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, getHighestIndex, ...void3 },
    rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void1 },
    processedIndexManglerReturn: { indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, ...void4 },
    ...void2
}: UseTypeaheadNavigationParameters<ChildElement>): UseTypeaheadNavigationReturnType<ParentOrChildElement> {
    return useMonitoring(function useTypeaheadNavigation(): UseTypeaheadNavigationReturnType<ParentOrChildElement> {
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);

        useEnsureStability("useTypeaheadNavigation", onNavigateTypeahead, isValidForTypeaheadNavigation, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal);

        // For typeahead, keep track of what our current "search" string is (if we have one)
        // and also clear it every 1000 ms since the last time it changed.
        // Next, keep a mapping of typeahead values to indices for faster searching.
        // And, for the user's sake, let them know when their typeahead can't match anything anymore
        const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState<string | null, EventType<any, any> | undefined>(useStableCallback((currentTypeahead, prev, reason) => {
            const handle = setTimeout(() => { setCurrentTypeahead(null, undefined); setTypeaheadStatus("none"); }, typeaheadTimeout ?? 1000);
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
                setCurrentTypeahead(typeahead => ((typeahead ?? "") + nextTypeaheadChar), undefined);
                setNextTypeaheadChar(null);
            }
        }, [nextTypeaheadChar]);


        const comparatorShared = useStableCallback((safeLhs: string, safeRhs: string, normalizeFirst: boolean) => {
            let compare: number;
            if (normalizeFirst) {
                // For the purposes of typeahead, only compare a string of the same size as our currently typed string.
                // By normalizing them first, we ensure this byte-by-byte handling of raw character data works out okay.
                safeLhs = safeLhs.normalize("NFD");
                safeRhs = safeRhs.normalize("NFD");
            }

            if (collator)
                compare = collator.compare(safeLhs, safeRhs)
            else
                compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");

            return compare;
        });

        const insertingComparator = useStableCallback((lhs: string | null, rhs: TypeaheadInfo) => {

            if (typeof lhs === "string" && typeof rhs.text === "string") {
                return comparatorShared(lhs, rhs.text, true);
            }

            return (lhs as unknown as number) - (rhs as unknown as number);
        });

        const typeaheadComparator = useStableCallback((lhs: string, rhs: TypeaheadInfo) => {

            if (typeof lhs === "string" && typeof rhs.text === "string") {

                let trimmedRet = comparatorShared(lhs.normalize("NFD"), rhs.text.substring(0, lhs.length).normalize("NFD"), false);
                return trimmedRet;
            }

            return (lhs as unknown as number) - (rhs as unknown as number);
        });

        const isDisabled = useStableGetter(noTypeahead);


        const propsStable = useRef<ElementProps<ParentOrChildElement>>(useTagProps({
            onKeyDown: useStableCallback((e) => {
                if (isDisabled())
                    return;

                const imeActive = getImeActive();

                const key = e.key;

                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                if (e.ctrlKey || e.metaKey)
                    return;

                if (!imeActive && e.key === "Backspace") {
                    // Remove the last character in a way that doesn't split UTF-16 surrogates.
                    setCurrentTypeahead(t => t == null ? null : [...t].reverse().slice(1).reverse().join(""), e);
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
            onCompositionStart: useStableCallback((e: CompositionEventType<ParentOrChildElement>) => {
                setNextTypeaheadChar(e.data);
                setImeActive(false);
            }),
            onCompositionEnd: useStableCallback((_e: CompositionEventType<ParentOrChildElement>) => { setImeActive(true) }),
        }, "data-typeahead-navigation"));

        const excludeSpace = useStableCallback(() => { return typeaheadStatus != "none" });

        return {
            context: useMemoObject({
                typeaheadNavigationContext: useMemoObject({
                    insertingComparator,
                    sortedTypeaheadInfo: sortedTypeaheadInfo.current,
                    excludeSpace
                }),

            }),
            typeaheadNavigationReturn: {
                getCurrentTypeahead,
                typeaheadStatus
            },
            propsStable: propsStable.current
        }






        function updateBasedOnTypeaheadChange(currentTypeahead: string | null, reason: EventType<any, any>) {
            if (currentTypeahead && sortedTypeaheadInfo.current.length) {


                // Note the important distinction between "sorted" and "reordered":
                // "sorted" is used for fast searching, whereas "reordered" is the visual, processedChildren thing.
                const typeaheadIndexIntoSortedChildren2 = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, typeaheadComparator);
                //const sortedTypeaheadIndex = indexFromOriginalToRepositioned(unsortedTypeaheadIndex);

                if (typeaheadIndexIntoSortedChildren2 < 0) {
                    // The user has typed an entry that doesn't exist in the list
                    // (or more specifically "for which there is no entry that starts with that input")
                    setTypeaheadStatus("invalid");
                }
                else {
                    setTypeaheadStatus("valid");

                    // If we've gotten here, we know at least one child matches
                    // our typeahead search. There could be multiple, though,
                    // so we also need to find the best candidate of those.

                    // Find the range of all possible candidates surrounding the one we just found.
                    let lowestCandidateTypeaheadIndex = typeaheadIndexIntoSortedChildren2;
                    while (lowestCandidateTypeaheadIndex >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[lowestCandidateTypeaheadIndex]) == 0) {
                        --lowestCandidateTypeaheadIndex;
                    }

                    let highestCandidateTypeaheadIndex = typeaheadIndexIntoSortedChildren2;
                    while (highestCandidateTypeaheadIndex < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[highestCandidateTypeaheadIndex]) == 0) {
                        ++highestCandidateTypeaheadIndex;
                    }

                    let sortedCandidates = sortedTypeaheadInfo.current.slice(lowestCandidateTypeaheadIndex + 1, highestCandidateTypeaheadIndex);

                    // Now find the best candidate of those
                    sortedCandidates.sort((lhs, rhs) => {
                        // Knowing that both lhs and rhs start with the search string,
                        // try to find a way to prefer one over the other.
                        //
                        // (Reminder: low scores are "good", high scores are "bad")

                        function score(info: TypeaheadInfo) {
                            if (info.text == null || currentTypeahead == null) {
                                /// Shouldn't ever happen???
                                debugger;
                                return 1000;
                            }

                            // Exact matches score the highest
                            if (info.text.length == currentTypeahead.length)
                                return -100;

                            const nextChar = info.text.substring(currentTypeahead.length, currentTypeahead.length + 1);

                            // Failing that, matches at a word boundary or similar score highly.
                            if (/\s/.test(nextChar))
                                return -10;
                            // Similar to the above, but spaces are better boundaries than other non-letters
                            if (/\P{Letter}/v.test(nextChar))
                                return -9;

                            // Okay, prefer matches that are as close as possible to our current match,
                            // to prevent jumpiness.
                            // (The math gets a bit weird to translate "close distance (low number)" -> "bad score (high number)"
                            const infoRepositionedIndex = indexFromOriginalToRepositioned(info.indexOriginal);
                            const currentRepositionedIndex = indexFromOriginalToRepositioned(getTabbableIndex() ?? 0 as OriginalIndex);
                            const distance = (Math.abs(currentRepositionedIndex - infoRepositionedIndex));
                            const proportionateDistance = 1 - (distance / getHighestIndex());

                            return 0 - proportionateDistance;
                        }

                        return score(lhs) - score(rhs);
                    })

                    let toSet: OriginalIndex | null = sortedCandidates[0]?.indexOriginal ?? null;


                    if (toSet != null) {
                        setTabbableIndex(toSet, reason, true);
                        onNavigateTypeahead?.(toSet, reason as KeyboardEventType<any>);
                    }
                    else {
                        // We get here if the only matching child we found was untabbable/missing
                        setTypeaheadStatus("invalid");
                    }
                }
            }
        }
    });
}

/**
 * 
 * @compositeParams
 */
export function useTypeaheadNavigationChild<ChildElement extends Element>({
    info: { index, untabbable, ...void1 },
    //textContentReturn: { getTextContent, ...void5 },
    context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } },
    ...void4
}: UseTypeaheadNavigationChildParameters<ChildElement>): UseTypeaheadNavigationChildReturnType {
    return useMonitoring(function useTypeaheadNavigationChild(): UseTypeaheadNavigationChildReturnType {
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void4);

        const handleTextContentUpdate = useCallback((text: string | null, untabbable: boolean) => {
            if (text && !untabbable) {
                // Find where to insert this item.
                // Because all index values should be unique, the returned sortedIndex
                // should always refer to a new location (i.e. be negative)   
                //
                // TODO: adding things on mount/unmount means that it's 
                // hard to make grid navigation typeahead work smoothly with tables -- 
                // every time we change columns, every row resorts itself, even though
                // each row should be able to just do that on mount.
                // 
                // We probably need to instead just sort on-demand, which is better for
                // performance anyway, but is tricky to code without major lag on the
                // first keystroke.
                //
                // Or we need to be able to support columns here, within typeahead?
                // Don't really like that idea (what if we want 3d navigation, woo-ooo-ooo).
                const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { indexOriginal: index, text }) == 0);
                if (sortedIndex < 0) {
                    sortedTypeaheadInfo.splice(-sortedIndex - 1, 0, { text, indexOriginal: index });
                }
                else {
                    sortedTypeaheadInfo.splice(sortedIndex, 1, { text, indexOriginal: index });
                }

                return () => {
                    // When unmounting, find where we were and remove ourselves.
                    // Again, we should always find ourselves because there should be no duplicate values if each index is unique.
                    const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
                    console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, { indexOriginal: index, text }) == 0);

                    if (sortedIndex >= 0) {
                        sortedTypeaheadInfo.splice(sortedIndex, 1);
                    }
                }
            }
        }, []);

        const [getText, setText] = usePassiveState<string | null, unknown>(useStableCallback((next, prev) => {
            return handleTextContentUpdate(next, untabbable);
        }), returnNull);

        useLayoutEffect(() => {
            return handleTextContentUpdate(getText(), untabbable);
        }, [untabbable])


        /*const onTextContentChange: UseTextContentParametersSelf<any>["onTextContentChange"] = useStableCallback<OnPassiveStateChange<string | null, never>>((text: string | null) => {
            setText(text);
        });*/

        return {
            textContentParameters: { onTextContentChange: setText },
            pressParameters: { excludeSpace }
        };
    });
}

/**
 * Your usual binary search implementation.
 * 
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array - The array to search through
 * @param wanted - The value you'd like to find
 * @param comparator - Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not. 
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 * 
 * #__NO_SIDE_EFFECTS__
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
