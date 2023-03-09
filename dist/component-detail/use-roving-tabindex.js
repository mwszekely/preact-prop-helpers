import { useCallback, useEffect } from "preact/hooks";
import { useChildrenFlag } from "../preact-extensions/use-managed-children.js";
import { usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableGetter, useStableObject } from "../preact-extensions/use-stable-getter.js";
import { useState } from "../preact-extensions/use-state.js";
import { assertEmptyObject } from "../util/assert.js";
/**
 * Implements a roving tabindex system where only one "focusable"
 * component in a set is able to receive a tab focus. *Which*
 * of those elements receives focus is determined by you, but it's
 * recommended to offload that logic then to another hook, like
 * `useLinearNavigation`, which lets you change the tabbable
 * element with the arrow keys, `useTypeaheadNavigation`, which
 * lets you change the tabbable index with typeahead, or
 * `useListNavigation` if you just want everything bundled together.
 *
 * Note that the child hook returned by this function must be used
 * by every child that uses this roving tabindex logic.  The
 * prop-modifying hook *that* hook returns should then be used
 * on the child's element, as well as any other elements you'd like
 * to be explicitly made untabbable too.
 *
 * `shouldFocusOnChange` should return true if focus is
 * contained within whatever element contains the roving tab index.
 * Generally as simple as the following:
 * ```
 * const [focusedInner, setFocusedInner] = useState(false);
 * const { useHasFocusProps } = useHasFocus<ParentElement>({ setFocusedInner });
 * const focusOnChange = (focusedInner != false);
 * ```
 * It's not included here because `useRovingTabIndex` doesn't know
 * anything about the container element, only children elements.
 * And just as well! Children should be allowed at the root,
 * regardless of if it's the whole app or just a given component.
 */
export function useRovingTabIndex({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { untabbable, initiallyTabbedIndex, onTabbableIndexChange }, ..._void1 }) {
    assertEmptyObject(_void1);
    const getUntabbable = useStableGetter(untabbable);
    // Override the actual setter to include some extra logic related to avoiding hidden children, 
    // what to do when we're untabbable, what to do when we're tabbable but given `null`, etc.
    const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
        const children = getChildren();
        // Notify the relevant children that they should become tabbable/untabbable,
        // but also handle focus management when we changed due to user interaction
        return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
            let nextIndex = ((typeof updater === "function") ? updater(prevIndex ?? null) : updater);
            const untabbable = getUntabbable();
            // Whether or not we're currently tabbable, make sure that when we switch from untabbable to tabbable,
            // that we know which index to switch back to.
            if (nextIndex != null)
                setLastNonNullIndex(nextIndex);
            // If we're untabbable, then any attempt to set a new index simply fails and sets it to `null`.
            if (untabbable)
                return null;
            // If the requested index is hidden, then there's no need to focus any elements or run any extra logic.
            if (nextIndex == null)
                return null;
            // If we've made a change, and it was because the user clicked on it or something,
            // then focus that element too
            if (prevIndex != nextIndex) {
                const nextChild = children.getAt(nextIndex);
                console.assert(!nextChild?.hidden);
                if (nextChild != null && fromUserInteraction) {
                    const element = nextChild.getElement();
                    if (element) {
                        if (document.activeElement == null || !element.contains(document.activeElement))
                            nextChild.focusSelf(element);
                    }
                }
            }
            // TODO: Redundant?
            if (nextIndex != null)
                setLastNonNullIndex(nextIndex);
            // Finally, return the value the user requested the index be set to.
            return nextIndex ?? 0;
        }, reason);
    }, []);
    // When we switch from tabbable to non/tabbable, we really want to remember the last tabbable child.
    // So every time we change the index for any reason, record that change as a back up here that can be restored.
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, useCallback(() => (initiallyTabbedIndex ?? 0), []));
    // Any time we switch to being untabbable, set the current tabbable index accordingly.
    useEffect(() => {
        if (untabbable)
            changeTabbableIndex(null, undefined);
        else {
            changeTabbableIndex(getLastNonNullIndex(), undefined);
        }
    }, [untabbable]);
    // Boilerplate related to notifying individual children when they become tabbable/untabbable
    const getTabbableAt = useCallback((m) => { return m.getTabbable(); }, []);
    const setTabbableAt = useCallback((m, t) => { m.setTabbable(t); }, []);
    const isTabbableValid = useCallback((m) => { return !m.hidden; }, []);
    const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
        initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
        onIndexChange: onTabbableIndexChange,
        getChildren,
        closestFit: true,
        getAt: getTabbableAt,
        isValid: isTabbableValid,
        setAt: setTabbableAt,
    });
    const focusSelf = useCallback((reason) => {
        const children = getChildren();
        const index = getTabbableIndex();
        if (index != null) {
            const element = children.getAt(index)?.getElement();
            children.getAt(index)?.focusSelf?.(element);
        }
        else
            setTabbableIndex(null, reason, true);
    }, []);
    const rovingTabIndexChildContext = useStableObject({
        setTabbableIndex,
        getInitiallyTabbedIndex: useCallback(() => { return initiallyTabbedIndex ?? (untabbable ? null : 0); }, []),
        reevaluateClosestFit
    });
    return {
        managedChildrenParameters: { onChildrenMountChange: reevaluateClosestFit, },
        rovingTabIndexReturn: { setTabbableIndex, getTabbableIndex, focusSelf },
        rovingTabIndexChildContext
    };
}
export function useRovingTabIndexChild({ managedChildParameters: { index, ..._void2 }, rovingTabIndexChildContext: { reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex }, rovingTabIndexChildParameters, ..._void3 }) {
    const { hidden, ..._void1 } = rovingTabIndexChildParameters;
    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);
    useEffect(() => {
        reevaluateClosestFit();
    }, [!!hidden]);
    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);
    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e) => {
                if (focused) {
                    setTabbableIndex(index, e, false);
                }
            })
        },
        rovingTabIndexChildReturn: {
            tabbable,
            getTabbable,
            setTabbable
        },
        props: { tabIndex: (tabbable ? 0 : -1) },
    };
}
//# sourceMappingURL=use-roving-tabindex.js.map