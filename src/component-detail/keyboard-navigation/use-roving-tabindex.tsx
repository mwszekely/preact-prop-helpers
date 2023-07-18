import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseHasCurrentFocusParameters } from "../../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnType, useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { findBackupFocus } from "../../util/focus.js";
import { StateUpdater, TargetedPick, useCallback, useEffect, useRef } from "../../util/lib.js";
import { ElementProps, Nullable, OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";

export type SetTabbableIndex = (updater: Parameters<PassiveStateUpdater<number | null, Event>>[0], reason: Event | undefined, fromUserInteraction: boolean) => void;
export type OnTabbableIndexChange = (tabbableIndex: number | null) => void;


export interface UseRovingTabIndexParametersSelf<ParentElement extends Element, TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> {

    /** When `untabbable` is true, instead of a child focusing itself, the parent will via this `focusSelf` argument. */
    focusSelfParent(e: ParentElement | null): void;

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
     * When the parent is `untabbable` and a child gains focus via some means, we need to decide what to do.
     * 
     * Sometimes, it's better to just send focus back to the parent.
     * Sometimes, it's better to just let the child be focused this one time (especially if focusing means that `untabbable` is going to change to `true`).
     * 
     * If `untabbable` is false, then this has no effect. 
     */
    untabbableBehavior: "focus-parent" | "leave-child-focused";

    /** 
     * If you would like to have an event run whenever a new index becomes tabbable
     * (e.g. to call `setState` to render that tabbable index...for some reason...)
     * you can do that here.
     * 
     * **MUST** be stable!
     */
    onTabbableIndexChange?: Nullable<OnPassiveStateChange<number | null, Event>>;
}

export interface UseRovingTabIndexReturnTypeSelf {

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


export interface UseRovingTabIndexChildInfo<TabbableChildElement extends Element> extends ManagedChildInfo<number> {


    /**
     * A **unique integer** (among siblings) representing this child like the index to an array. 
     * There can be holes/gaps, and even negative numbers, though iterating over a gap is still O(n) on the size of the gap (kinda low priority TODO cause computers can count fast).
     */
    index: number;


    /**
     * When we navigate to a child and focus it, we need to know how that child wants to be focused.
     * Generally, this is just getElement().focus(), but you're allowed to supply anything you want here.
     * Grid rows, for example, don't directly focus themselves but instead call one of their cell's `focusSelf`.
     * 
     * This is used when the tabbable index changes (we auto-focus the newly tabbable element if applicable),
     * and also by the `focusSelf` value returned by the parent (i.e. `parent.focusSelf` calls one child's `focusSelf`)
     */
    focusSelf(e: TabbableChildElement): void;

    /**
     * Get from `useRefElement`
     */
    getElement(): TabbableChildElement | null;

    /**
     * If a child **exists** (i.e. calls `useRovingTabIndexChild` or its derivatives in some way) but **can't be tabbed to** (because it's e.g. `display: none`), then set this to `true`.
     * 
     * This cannot be calculated automatically. It's *possible* to catch something like `display: none` with some reflow-forcing `getComputedStyles` or something,
     * but if the child is untabbable because it's disabled or staggered or paginated or something we just have no way of knowing. 
     * It could be untabbable for any arbitrary reason the user decides.
     * 
     * If the child is **missing** instead (i.e. it does not exist), then there's no issue. 
     * You couldn't even supply this property because the child who would supply it is, by definition, missing. 
     * This is, to be clear, about **existing** children whomst are untabbable for any reason at all.
     * 
     */
    untabbable: boolean;

    /** 
     * Provided by `useRovingTabIndexChild`. 
     * 
     * Used by the parent to control a child's internal tabbable state. */
    setLocallyTabbable: StateUpdater<boolean>;

    /** 
     * @see {@link setLocallyTabbable} 
     */
    getLocallyTabbable: () => boolean;

}

export interface UseRovingTabIndexParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends
    TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren">,
    TargetedPick<UseRefElementReturnType<ParentElement>, "refElementReturn", "getElement"> {
    /** When children mount/unmount, RTI needs access to all known children in case we unmounted the currently tabbable child */

    /** The only parameters RTI needs directly is the initial index to be tabbable */
    rovingTabIndexParameters: UseRovingTabIndexParametersSelf<ParentElement, TabbableChildElement, M>;
}


export interface UseRovingTabIndexReturnType<ParentElement extends Element, TabbableChildElement extends Element, _M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends
    TargetedPick<UseManagedChildrenParameters<UseRovingTabIndexChildInfo<TabbableChildElement>>, "managedChildrenParameters", "onChildrenMountChange"> {
    /** RTI runs logic when its children mount/unmount themselves */

    props: ElementProps<ParentElement>;

    /**
     * STABLE
     */
    context: RovingTabIndexChildContext;

    /** 
     * Return information that lets the user update/query/focus the currently tabbable child
     */
    rovingTabIndexReturn: UseRovingTabIndexReturnTypeSelf;
}

export type UseRovingTabIndexChildInfoKeysParameters = "index" | "untabbable";
export type UseRovingTabIndexChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";

export interface UseRovingTabIndexChildParameters<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends
    Pick<UseRefElementReturnType<TabbableChildElement>, "refElementReturn">,
    OmitStrong<UseManagedChildParameters<M, UseRovingTabIndexChildInfoKeysParameters>, "context"> {
    /**
     * The information provided by the parent hook
     */
    context: RovingTabIndexChildContext;
}

export interface RovingTabIndexChildContextSelf {
    untabbable: boolean;
    untabbableBehavior: "focus-parent" | "leave-child-focused";
    parentFocusSelf: () => void;
    giveParentFocusedElement(element: Element): void;
    setTabbableIndex: SetTabbableIndex;
    getInitiallyTabbedIndex(): number | null;
    /**
     * (This is technically the same as what's passed to onChildrenMountChange,
     * but it serves a slightly different purpose and is separate for clarity)
     */
    reevaluateClosestFit: (requestedIndex?: number) => void;
};

//export interface ManagedRovingTabIndexChildContext<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends RovingTabIndexChildContext, UseManagedChildrenContext<M> {}

export interface RovingTabIndexChildContext {
    rovingTabIndexContext: RovingTabIndexChildContextSelf;
}

export interface UseRovingTabIndexChildReturnTypeSelf {
    /**
     * *Unstable*
     * 
     * Whether this child, individually, is *the* currently tabbable child.
     */
    tabbable: boolean;

    /** **STABLE** */
    getTabbable(): boolean;

}

export interface UseRovingTabIndexChildReturnType<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>> extends
    Required<TargetedPick<UseHasCurrentFocusParameters<ChildElement>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged">> {

    /** Return information about the tabbable state of this child */
    rovingTabIndexChildReturn: UseRovingTabIndexChildReturnTypeSelf;

    /**
     * Pass this to `useManagedChild`.
     */
    info: Pick<M, UseRovingTabIndexChildInfoKeysReturnType>;

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
 * `useListNavigation(Complete)` if you just want everything bundled together.
 * 
 * 
 * @hasChild {@link useRovingTabIndexChild}
 * 
 * @compositeParams
 * 
 * @param args - {@link UseRovingTabIndexParameters}
 * @returns - {@link UseRovingTabIndexReturnType}
 */
export function useRovingTabIndex<ParentElement extends Element, ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({
    managedChildrenReturn: { getChildren },
    rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange },
    refElementReturn: { getElement },
    ...void1
}: UseRovingTabIndexParameters<ParentElement, ChildElement, M>): UseRovingTabIndexReturnType<ParentElement, ChildElement, M> {
    monitorCallCount(useRovingTabIndex);
    const focusSelfParent = useStableCallback(focusSelfParentUnstable);
    untabbableBehavior ||= "focus-parent";

    const lastFocused = useRef<Element | null>(null);

    assertEmptyObject(void1);

    const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
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
            let parentElement = getElement();
            console.assert(!!parentElement);

            // Whether or not we're currently tabbable, make sure that when we switch from untabbable to tabbable,
            // that we know which index to switch back to.
            if (nextIndex != null)
                setLastNonNullIndex(nextIndex);

            // If we're untabbable, then any attempt to set a new index simply fails and sets it to `null`.
            if (untabbable) {
                // Focus the parent, since it's what's in the tab order right now

                // TODO: Replace this and the other focus(getElement())
                // with a user-replaceable focusParent, like item.focusSelf?
                //
                // Also TODO: Should these take fromUserInteraction into consideration?
                // Do we always move focus when we become untabbable?
                if (!parentElement!.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                    focusSelfParent(parentElement);
                return null;
            }

            // If the requested index is hidden, then there's no need to focus any elements or run any extra logic.
            if (nextIndex == null) {
                // Focus the parent (more to be polite)
                // TODO: Find the next/prev element and focus that instead,
                // doable with the `tabbable` library, but it doesn't have a next() function or anything,
                // so that needs to be manually done with a TreeWalker or something?
                if (!parentElement!.contains(document.activeElement) && untabbableBehavior != 'leave-child-focused')
                    focusSelfParent(parentElement);
                return null;
            }

            // If we've made a change, and it was because the user clicked on it or something,
            // then focus that element too
            if (prevIndex != nextIndex) {
                const nextChild = children.getAt(nextIndex);

                if (nextChild != null && fromUserInteraction) {
                    const element = nextChild.getElement();
                    if (element) {
                        if (document.activeElement == document.body || document.activeElement == null || !element.contains(document.activeElement)) {
                            nextChild.focusSelf(element);
                        }
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
        let shouldFocusParentAfterwards = (getElement()?.contains(document.activeElement));
        if (untabbable)
            changeTabbableIndex(null, undefined!);
        else
            changeTabbableIndex(getLastNonNullIndex(), undefined!);

        if (shouldFocusParentAfterwards)
            focusSelf();
    }, [untabbable]);

    // Boilerplate related to notifying individual children when they become tabbable/untabbable
    const getTabbableAt = useCallback((child: M) => { return child.getLocallyTabbable() }, []);
    const setTabbableAt = useCallback((child: M, t: boolean) => { child.setLocallyTabbable(t); }, []);
    const isTabbableValid = useStableCallback((child: M) => { return !child.untabbable; });
    const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag<M, Event>({
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
            // Whenever we change due to a closest-fit switch, make sure we don't lose focus to the body
            // TODO: This is slightly janky -- we want to only mess with the user's focus when this list (or whatever) is the current focus,
            // but by the time we know something like "all the children have unmounted",
            // we've lot the ability to know if any of them were focused, at least easily.
            // So we just check to see if focus was lost to the body and, if so, send it somewhere useful.
            // This is liable to break, probably with blockingElements or something.
            if (document.activeElement == null || document.activeElement == document.body) {
                let childElement = index == null ? null : getChildren().getAt(index)?.getElement();
                if (index == null || childElement == null)
                    findBackupFocus(getElement()!).focus();
                else
                    getChildren().getAt(index)?.focusSelf(childElement);
            }
        }
    });

    const focusSelf = useCallback((reason?: unknown) => {
        const children = getChildren();
        let index = getTabbableIndex();
        const untabbable = getUntabbable();
        if (!untabbable) {
            // If we change from untabbable to tabbable, it's possible `index` might still be null.
            index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
        }

        if (untabbable) {
            if (document.activeElement != getElement() && untabbableBehavior != 'leave-child-focused') {
                focusSelfParent(getElement());
            }
        }
        else if (!untabbable && index != null) {
            const element = children.getAt(index)?.getElement();
            children.getAt(index)?.focusSelf?.(element!);
        }
        else
            setTabbableIndex(null, reason as any, true);
    }, []);

    const rovingTabIndexContext = useMemoObject<RovingTabIndexChildContextSelf>({
        setTabbableIndex,
        parentFocusSelf: focusSelf,
        getInitiallyTabbedIndex: useCallback(() => { return initiallyTabbedIndex ?? (untabbable ? null : 0) }, []),
        reevaluateClosestFit,
        untabbable,
        untabbableBehavior,
        giveParentFocusedElement: useCallback((e) => { lastFocused.current = e }, [])
    });

    return {
        managedChildrenParameters: { onChildrenMountChange: reevaluateClosestFit, },
        rovingTabIndexReturn: { setTabbableIndex, getTabbableIndex, focusSelf },
        context: useMemoObject({ rovingTabIndexContext }),
        props: {
            // Note: Making this -1 instead of null is partially intentional --
            // it gives us time during useEffect to move focus back to the last focused element
            // (otherwise focus gets lost to the body, and useEffect thinks that it shouldn't
            // focus the child because focus wasn't within the list). 
            // It's also just consistent. 
            tabIndex: untabbable ? 0 : -1,
            // TODO: When a hidden child is clicked, some browsers focus the parent, just because it's got a role and a tabindex.
            // But this won't work to avoid that, because it messes with grid navigation
            /*onFocus: useStableCallback((e: FocusEvent) => {
                const parentElement = getElement();
                console.assert(!!parentElement);
                if (e.target == getElement()) {
                    debugger;
                    if (!untabbable) {
                        focusSelf(e);
                    }
                }
            })*/
        }
    };
}

/**
 * @compositeParams
 * 
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 */
export function useRovingTabIndexChild<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({
    info: { index, untabbable: iAmUntabbable, ...void2 },
    context: { rovingTabIndexContext: { giveParentFocusedElement, untabbable: parentIsUntabbable, untabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } },
    refElementReturn: { getElement },
    ...void3
}: UseRovingTabIndexChildParameters<ChildElement, M>): UseRovingTabIndexChildReturnType<ChildElement, M> {
    monitorCallCount(useRovingTabIndexChild);

    const [tabbable, setTabbable, getTabbable] = useState(getInitiallyTabbedIndex() === index);

    useEffect(() => {
        reevaluateClosestFit();
    }, [!!iAmUntabbable]);

    assertEmptyObject(void2);
    assertEmptyObject(void3);

    useEffect(() => {
        if (tabbable) {
            giveParentFocusedElement(getElement()!);
        }
    }, [tabbable])

    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused: boolean, _prevFocused: boolean | undefined, e) => {
                if (focused) {

                    if ((!parentIsUntabbable && !iAmUntabbable) || untabbableBehavior != "focus-parent")
                        setTabbableIndex(index, e, false);
                    else
                        parentFocusSelf();
                }
            })
        },
        rovingTabIndexChildReturn: {
            tabbable,
            getTabbable,
        },
        info: { setLocallyTabbable: setTabbable, getLocallyTabbable: getTabbable },
        props: {
            tabIndex: (tabbable ? 0 : -1),
            ...{ inert: iAmUntabbable } // This inert is to prevent the edge case of clicking a hidden item and it focusing itself
        },
    }
}
