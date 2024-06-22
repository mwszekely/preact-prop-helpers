import { $getElement, $refElementReturn } from "../../dom-helpers/use-ref-element.js";
import { $hasCurrentFocusParameters, $onCurrentFocusedInnerChanged } from "../../observers/use-has-current-focus.js";
import { $getChildren, $index, $managedChildrenParameters, $managedChildrenReturn, $onChildrenMountChange, useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { findBackupFocus } from "../../util/focus.js";
import { getDocument } from "../../util/get-window.js";
import { useCallback, useEffect, useRef } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
export const $rovingTabIndexReturn = Symbol();
export const $rovingTabIndexParameters = Symbol();
export const $rovingTabIndexContext = Symbol();
export const $rovingTabIndexChildReturn = Symbol();
export const $onUntabbableFocus = Symbol();
export const $initiallyTabbedIndex = Symbol();
export const $untabbable = Symbol();
export const $untabbableBehavior = Symbol();
export const $onTabbableIndexChange = Symbol();
export const $setTabbableIndex = Symbol();
export const $getTabbableIndex = Symbol();
export const $focusSelfChild = Symbol();
export const $focusSelfParent2 = Symbol();
export const $tabbable = Symbol();
export const $getTabbable = Symbol();
export const $setLocallyTabbable = Symbol();
export const $getLocallyTabbable = Symbol();
export const $getUntabbable = Symbol();
export const $getUntabbableBehavior = Symbol();
export const $parentFocusSelf = Symbol();
export const $giveParentFocusedElement = Symbol();
export const $getInitiallyTabbedIndex = Symbol();
export const $reevaluateClosestFit = Symbol();
/**
 * Implements a roving tabindex system where only one "focusable"
 * component in a set is able to receive a tab focus.
 *
 * @remarks *Which* of those elements receives focus is determined by you,
 * but it's recommended to offload that logic then to another hook, like
 * `useLinearNavigation`, which lets you change the tabbable element with
 * the arrow keys, `useTypeaheadNavigation`, which lets you change the
 * tabbable index with typeahead, or `useListNavigation(Complete)` if you
 * just want everything bundled together.
 *
 *
 * @hasChild {@link useRovingTabIndexChild}
 *
 * @compositeParams
 *
 * @param args - {@link UseRovingTabIndexParameters}
 * @returns - {@link UseRovingTabIndexReturnType}
 */
export const useRovingTabIndex = monitored(function useRovingTabIndex({ [$managedChildrenReturn]: { [$getChildren]: getChildren }, [$rovingTabIndexParameters]: { [$onUntabbableFocus]: focusSelfParentUnstable, [$untabbable]: untabbable, [$untabbableBehavior]: untabbableBehavior, [$initiallyTabbedIndex]: initiallyTabbedIndex, [$onTabbableIndexChange]: onTabbableIndexChange }, [$refElementReturn]: { [$getElement]: getElement }, ...void1 }) {
    const focusSelfParent = useStableCallback(focusSelfParentUnstable);
    untabbableBehavior ||= "focus-parent";
    const lastFocused = useRef(null);
    assertEmptyObject(void1);
    const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
    const getUntabbable = useStableGetter(untabbable);
    // Override the actual setter to include some extra logic related to avoiding hidden children, 
    // what to do when we're untabbable, what to do when we're tabbable but given `null`, etc.
    const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
        const children = getChildren();
        // Notify the relevant children that they should become tabbable/untabbable,
        // but also handle focus management when we changed due to user interaction
        return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
            const document = getDocument();
            let nextIndex = ((typeof updater === "function") ? updater(prevIndex ?? null) : updater);
            const untabbable = getUntabbable();
            let parentElement = getElement();
            console.assert(!!parentElement);
            // Whether or not we're currently tabbable, make sure that when we switch from untabbable to tabbable,
            // that we know which index to switch back to.
            if (nextIndex != null)
                setLastNonNullIndex(nextIndex, reason);
            // If we're untabbable, then any attempt to set a new index simply fails and sets it to `null`.
            if (untabbable) {
                // Focus the parent, since it's what's in the tab order right now
                // TODO: Replace this and the other focus(getElement())
                // with a user-replaceable focusParent, like item.focusSelf?
                //
                // Also TODO: Should these take fromUserInteraction into consideration?
                // Do we always move focus when we become untabbable?
                if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                    focusSelfParent(parentElement);
                return null;
            }
            // If the requested index is hidden, then there's no need to focus any elements or run any extra logic.
            if (nextIndex == null) {
                // Focus the parent (more to be polite)
                // TODO: Find the next/prev element and focus that instead,
                // doable with the `tabbable` library, but it doesn't have a next() function or anything,
                // so that needs to be manually done with a TreeWalker or something?
                if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                    focusSelfParent(parentElement);
                return null;
            }
            // If we've made a change, and it was because the user clicked on it or something,
            // then focus that element too
            if (document && prevIndex != nextIndex) {
                const nextChild = children.getAt(nextIndex);
                if (nextChild != null && fromUserInteraction) {
                    const element = nextChild[$getElement]();
                    if (element) {
                        if (document.activeElement == document.body || document.activeElement == null || !element.contains(document.activeElement)) {
                            nextChild[$focusSelfChild](element);
                        }
                    }
                }
            }
            // TODO: Redundant?
            if (nextIndex != null)
                setLastNonNullIndex(nextIndex, reason);
            // Finally, return the value the user requested the index be set to.
            return nextIndex ?? 0;
        }, reason);
    });
    // When we switch from tabbable to non/tabbable, we really want to remember the last tabbable child.
    // So every time we change the index for any reason, record that change as a back up here that can be restored.
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, useCallback(() => (initiallyTabbedIndex ?? 0), []));
    // Any time we switch to being untabbable, set the current tabbable index accordingly.
    useEffect(() => {
        const document = getDocument();
        let shouldFocusParentAfterwards = !!document && (getElement()?.contains(document.activeElement));
        if (untabbable)
            changeTabbableIndex(null, undefined);
        else {
            changeTabbableIndex(getLastNonNullIndex(), undefined);
        }
        if (shouldFocusParentAfterwards) {
            focusSelf(true);
        }
    }, [untabbable]);
    // Boilerplate related to notifying individual children when they become tabbable/untabbable
    const getTabbableAt = useCallback((child) => { return child[$getLocallyTabbable](); }, []);
    const setTabbableAt = useCallback((child, t) => { child[$setLocallyTabbable](t); }, []);
    const isTabbableValid = useStableCallback((child) => { return !child[$untabbable]; });
    const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
        initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
        onIndexChange: useStableCallback((n, p, r) => {
            // Ensure that changes to `untabbable` don't affect the user-provided onTabbableIndexChange
            if ((!(n == null && untabbable)) && n != getLastNonNullIndex())
                onTabbableIndexChange?.(n, p, r);
        }),
        getChildren,
        closestFit: true,
        getAt: getTabbableAt,
        isValid: isTabbableValid,
        setAt: setTabbableAt,
        onClosestFit: (index) => {
            const document = getDocument();
            // Whenever we change due to a closest-fit switch, make sure we don't lose focus to the body
            // TODO: This is slightly janky -- we want to only mess with the user's focus when this list (or whatever) is the current focus,
            // but by the time we know something like "all the children have unmounted",
            // we've lot the ability to know if any of them were focused, at least easily.
            // So we just check to see if focus was lost to the body and, if so, send it somewhere useful.
            // This is liable to break, probably with blockingElements or something.
            if (document && (document.activeElement == null || document.activeElement == document.body)) {
                let childElement = index == null ? null : getChildren().getAt(index)?.[$getElement]();
                if (index == null || childElement == null)
                    findBackupFocus(getElement()).focus();
                else
                    getChildren().getAt(index)?.[$focusSelfChild](childElement);
            }
        }
    });
    const focusSelf = useCallback((force, reason) => {
        const document = getDocument();
        const children = getChildren();
        let index = getTabbableIndex();
        const untabbable = getUntabbable();
        if (!untabbable) {
            // If we change from untabbable to tabbable, it's possible `index` might still be null.
            index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
        }
        if (untabbable) {
            if (document && document.activeElement != getElement() && (force || untabbableBehavior != 'leave-child-focused')) {
                focusSelfParent(getElement());
            }
        }
        else if (!untabbable && index != null) {
            const element = children.getAt(index)?.[$getElement]();
            children.getAt(index)?.[$focusSelfChild]?.(element);
        }
        else
            setTabbableIndex(null, reason, true);
    }, []);
    const rovingTabIndexContext = useMemoObject({
        [$setTabbableIndex]: setTabbableIndex,
        [$parentFocusSelf]: focusSelf,
        [$getInitiallyTabbedIndex]: useCallback(() => { return initiallyTabbedIndex ?? (untabbable ? null : 0); }, []),
        [$reevaluateClosestFit]: reevaluateClosestFit,
        [$getUntabbable]: useStableGetter(untabbable),
        [$getUntabbableBehavior]: useStableGetter(untabbableBehavior),
        [$giveParentFocusedElement]: useCallback((e) => { lastFocused.current = e; }, [])
    });
    return {
        [$managedChildrenParameters]: { [$onChildrenMountChange]: useCallback(() => { reevaluateClosestFit(undefined); }, [reevaluateClosestFit]), },
        [$rovingTabIndexReturn]: { [$setTabbableIndex]: setTabbableIndex, [$getTabbableIndex]: getTabbableIndex, [$focusSelfParent2]: focusSelf },
        context: useMemoObject({ [$rovingTabIndexContext]: rovingTabIndexContext }),
        props: useTagProps({
            // Note: Making this -1 instead of null is partially intentional --
            // it gives us time during useEffect to move focus back to the last focused element
            // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
            // focus the child because focus wasn't within the list). 
            // It's also just consistent. 
            tabIndex: untabbable ? 0 : -1,
            // When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
            onFocus: useStableCallback((e) => {
                const parentElement = getElement();
                console.assert(!!parentElement);
                if (e.target == getElement()) {
                    if (!untabbable) {
                        focusSelf(false, e);
                    }
                }
            })
        }, "data-roving-tab-index")
    };
});
/**
 * @compositeParams
 *
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 */
export const useRovingTabIndexChild = monitored(function useRovingTabIndexChild({ info: { [$index]: index, [$untabbable]: iAmUntabbable, ...void2 }, context: { [$rovingTabIndexContext]: { [$giveParentFocusedElement]: giveParentFocusedElement, [$getUntabbable]: getParentIsUntabbable, [$getUntabbableBehavior]: getUntabbableBehavior, [$reevaluateClosestFit]: reevaluateClosestFit, [$setTabbableIndex]: setTabbableIndex, [$getInitiallyTabbedIndex]: getInitiallyTabbedIndex, [$parentFocusSelf]: parentFocusSelf } }, [$refElementReturn]: { [$getElement]: getElement }, ...void3 }) {
    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);
    useEffect(() => {
        reevaluateClosestFit(undefined);
    }, [!!iAmUntabbable]);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    useEffect(() => {
        if (tabbable) {
            giveParentFocusedElement(getElement());
        }
    }, [tabbable]);
    return {
        [$hasCurrentFocusParameters]: {
            [$onCurrentFocusedInnerChanged]: useStableCallback((focused, _prevFocused, e) => {
                if (focused) {
                    const parentIsUntabbable = getParentIsUntabbable();
                    const untabbableBehavior = getUntabbableBehavior();
                    if ((!parentIsUntabbable && !iAmUntabbable) || untabbableBehavior != "focus-parent")
                        setTabbableIndex(index, e, false);
                    else
                        parentFocusSelf(false);
                }
            })
        },
        [$rovingTabIndexChildReturn]: {
            [$tabbable]: tabbable,
            [$getTabbable]: getTabbable,
        },
        info: { [$setLocallyTabbable]: setTabbable, [$getLocallyTabbable]: getTabbable },
        props: useTagProps({
            tabIndex: (tabbable ? 0 : -1),
            ...{ inert: iAmUntabbable } // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
        }, "data-roving-tab-index-child"),
    };
});
//# sourceMappingURL=use-roving-tabindex.js.map