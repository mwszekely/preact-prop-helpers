import { StateUpdater, useCallback, useEffect } from "preact/hooks";
import { UseHasCurrentFocusParameters } from "../../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnType, useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter, useStableObject } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { ElementProps, OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";

export type SetTabbableIndex = (updater: Parameters<PassiveStateUpdater<number | null, Event>>[0], reason: Event | undefined, fromUserInteraction: boolean) => void;
export type OnTabbableIndexChange = (tabbableIndex: number | null) => void;

export interface UseRovingTabIndexChildInfo<TabbableChildElement extends Element> extends Pick<ManagedChildInfo<number>, "index"> {
    /**
     * When we navigate to a child and focus it, we need to know how that child wants to be focused.
     * Generally, this is just getElement().focus(), but you're allowed to supply anything you want here.
     * Grid rows, for example, don't directly focus themselves but instead call one of their cell's `focusSelf`.
     * 
     * This is used when the tabbable index changes (we auto-focus the newly tabbable element if applicable),
     * and also by the `focusSelf` value returned by the parent (i.e. `parent.focusSelf` calls one child's `focusSelf`)
     */
    focusSelf(e: TabbableChildElement): void;

    getElement(): TabbableChildElement | null;

    /**
     * If true, this child cannot be given focus because it does not exist, is not visible, is disabled, etc. Any attempt to focus this element will focus its closest neighbor instead.
     * 
     * This ***MUST*** be true if the child is `display: none`, `visibility: hidden`, and other cases where the element's focusability is removed in a way that's not detectible.
     */
    hidden: boolean;

    setLocallyTabbable: StateUpdater<boolean>;
    getLocallyTabbable: () => boolean;
    tabbable: boolean;

}

export interface UseRovingTabIndexParameters<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> {
    /** When children mount/unmount, RTI needs access to all known children in case we unmounted the currently tabbable child */
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<M>["managedChildrenReturn"], "getChildren">;

    /** The only parameters RTI needs directly is the initial index to be tabbable */
    rovingTabIndexParameters: {
        /**
         * This is imperative, not declarative; 
         * it is better if we can keep re-renders on the parent to a minimum anyway.
         * 
         * You can manually control this with `onTabbableIndexChange` and `setTabbableIndex` if you need.
         */
        initiallyTabbedIndex: number | null;

        /**
         * When true, none of the children will be tabbable, as if the entire component is hidden.
         * 
         * This does not actually change the currently tabbable index; if this is set to `false`, the last tabbable child is remembered.
         */
        untabbable: boolean;

        /** 
         * If you would like to have an event run whenever a new index becomes tabbable
         * (e.g. to call `setState` to render that tabbable index...for some reason...)
         * you can do that here.
         * 
         * **MUST** be stable!
         */
        onTabbableIndexChange?: undefined | null | OnPassiveStateChange<number | null, Event>;
    };
}

export interface UseRovingTabIndexReturnType<TabbableChildElement extends Element, _M extends UseRovingTabIndexChildInfo<TabbableChildElement>> {
    /** RTI runs logic when its children mount/unmount themselves */
    managedChildrenParameters: Pick<UseManagedChildrenParameters<UseRovingTabIndexChildInfo<TabbableChildElement>>["managedChildrenParameters"], "onChildrenMountChange">;

    /**
     * STABLE
     */
    context: RovingTabIndexChildContext;

    /** 
     * Return information that lets the user update/query/focus the currently tabbable child
     */
    rovingTabIndexReturn: {
        /** 
         * **STABLE**
         * 
         * Can be used to programmatically change which child is the currently tabbable one.
         * 
         * `fromUserInteraction` determines if this was a user-generated event that should focus the newly tabbable child,
         * or a programmatic event that should leave the user's focus where the user currently is, because they didn't do that.
         * 
         */
        setTabbableIndex: SetTabbableIndex;
        /** **STABLE** */
        getTabbableIndex: () => number | null;
        /** 
         * **STABLE**
         * 
         * Call to focus the currently tabbable child.
         */
        focusSelf: (reason?: any) => void;
    }
}


export interface UseRovingTabIndexChildParameters<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends OmitStrong<UseManagedChildParameters<M>, "info" | "context"> {
    info: Pick<UseManagedChildParameters<M>["info"], "index" | "hidden">;

    /**
     * The information provided by the parent hook
     */
    context: RovingTabIndexChildContext;
}

//export interface ManagedRovingTabIndexChildContext<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends RovingTabIndexChildContext, UseManagedChildrenContext<M> {}

export interface RovingTabIndexChildContext {
    rovingTabIndexContext: {

        setTabbableIndex: SetTabbableIndex;

        getInitiallyTabbedIndex(): number | null;

        /**
         * (This is technically the same as what's passed to onChildrenMountChange,
         * but it serves a slightly different purpose and is separate for clarity)
         */
        reevaluateClosestFit: () => void;
    }
}

export interface UseRovingTabIndexChildReturnType<ChildElement extends Element, _M extends UseRovingTabIndexChildInfo<ChildElement>> {

    /** 
     * This is used to handle the case where a user clicks on an element or manually focuses it in some other way.
     * 
     * We need to know if we're currently focused so that we can tell the parent to mark this child as the currently tabbable child.
     */
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<ChildElement>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>;

    /** Return information about the tabbable state of this child */
    rovingTabIndexChildReturn: {
        /**
         * *Unstable*
         * 
         * Whether this child, individually, is *the* currently tabbable child.
         */
        tabbable: boolean;
        /** **STABLE** */
        getTabbable(): boolean;
        /** **STABLE**
         * 
         * Internal use only, pass to `useManagedChild`
         */
        //setTabbable: StateUpdater<boolean>;
    }

    info: Pick<UseRovingTabIndexChildInfo<ChildElement>, "tabbable" | "getLocallyTabbable" | "setLocallyTabbable">;

    /** 
     * *Unstable*
     * 
     * The props that must be applied to this child in order for this hook to work.
     * 
     * The object itself, as well as the properties within it, are unstable and should be rendered by the same component that uses this hook.
     */
    props: ElementProps<ChildElement>;
}



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
export function useRovingTabIndex<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({
    managedChildrenReturn: { getChildren },
    rovingTabIndexParameters: { untabbable, initiallyTabbedIndex, onTabbableIndexChange },
    ...void1
}: UseRovingTabIndexParameters<ChildElement, M>): UseRovingTabIndexReturnType<ChildElement, M> {
    monitorCallCount(useRovingTabIndex);

    assertEmptyObject(void1);

    const getUntabbable = useStableGetter(untabbable);

    // Override the actual setter to include some extra logic related to avoiding hidden children, 
    // what to do when we're untabbable, what to do when we're tabbable but given `null`, etc.
    const setTabbableIndex = useStableCallback<SetTabbableIndex>((updater, reason, fromUserInteraction) => {
        const children = getChildren();

        // Notify the relevant children that they should become tabbable/untabbable,
        // but also handle focus management when we changed due to user interaction
        return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex: number | null | undefined): number | null {
            let nextIndex = ((typeof updater === "function") ? updater(prevIndex ?? null) : updater) as M["index"];
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
    const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState<number, Event>(null, useCallback(() => (initiallyTabbedIndex ?? 0), []));

    // Any time we switch to being untabbable, set the current tabbable index accordingly.
    useEffect(() => {
        if (untabbable)
            changeTabbableIndex(null, undefined!);
        else {
            changeTabbableIndex(getLastNonNullIndex(), undefined!);
        }
    }, [untabbable]);

    // Boilerplate related to notifying individual children when they become tabbable/untabbable
    const getTabbableAt = useCallback((m: UseRovingTabIndexChildInfo<ChildElement>) => { return m.getLocallyTabbable() }, []);
    const setTabbableAt = useCallback((m: UseRovingTabIndexChildInfo<ChildElement>, t: boolean) => { m.setLocallyTabbable(t); }, []);
    const isTabbableValid = useCallback((m: UseRovingTabIndexChildInfo<ChildElement>) => { return !m.hidden }, []);
    const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag<UseRovingTabIndexChildInfo<ChildElement>, Event>({
        initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
        onIndexChange: onTabbableIndexChange || null,
        getChildren,
        closestFit: true,
        getAt: getTabbableAt,
        isValid: isTabbableValid,
        setAt: setTabbableAt,
    });

    const focusSelf = useCallback((reason?: unknown) => {
        const children = getChildren();
        const index = getTabbableIndex();
        if (index != null) {
            const element = children.getAt(index)?.getElement();
            children.getAt(index)?.focusSelf?.(element!);
        }
        else
            setTabbableIndex(null, reason as any, true);
    }, []);

    const rovingTabIndexContext = useStableObject({
        setTabbableIndex,
        getInitiallyTabbedIndex: useCallback(() => { return initiallyTabbedIndex ?? (untabbable ? null : 0) }, []),
        reevaluateClosestFit
    });

    return {
        managedChildrenParameters: { onChildrenMountChange: reevaluateClosestFit, },
        rovingTabIndexReturn: { setTabbableIndex, getTabbableIndex, focusSelf },
        context: useStableObject({ rovingTabIndexContext })
    };
}


export function useRovingTabIndexChild<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({
    info: { index, hidden, ...void2 },
    context: { rovingTabIndexContext: { reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex } },
    ...void3
}: UseRovingTabIndexChildParameters<ChildElement, M>): UseRovingTabIndexChildReturnType<ChildElement, M> {
    monitorCallCount(useRovingTabIndexChild);

    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);

    useEffect(() => {
        reevaluateClosestFit();
    }, [!!hidden]);

    assertEmptyObject(void2);
    assertEmptyObject(void3);

    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused: boolean, _prevFocused: boolean | undefined, e) => {
                if (focused) {
                    setTabbableIndex(index, e, false);
                }
            })
        },
        rovingTabIndexChildReturn: {
            tabbable,
            getTabbable,
           // setTabbable
        },
        info: { setLocallyTabbable: setTabbable, getLocallyTabbable: getTabbable, tabbable },
        props: { tabIndex: (tabbable ? 0 : -1) },
    }
}
