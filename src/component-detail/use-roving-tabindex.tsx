import { h } from "preact";
import { StateUpdater, useCallback, useEffect, useRef } from "preact/hooks";
import { assertEmptyObject, ManagedChildInfo, useChildrenFlag, UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnType, UseManagedChildReturnType } from "../preact-extensions/use-child-manager";
import { UseHasCurrentFocusParameters } from "../observers/use-has-current-focus";
import { OnPassiveStateChange } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { useState } from "../preact-extensions/use-state";



export type OnTabbableIndexChange = (tabbableIndex: number | null) => void;

export interface UseRovingTabIndexChildInfo<TabbableChildElement extends Element> extends ManagedChildInfo<number> {
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

    setTabbable: StateUpdater<boolean>;
    getTabbable: () => boolean;
    tabbable: boolean;

}

export interface UseRovingTabIndexParameters<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> {
    /** When children mount/unmount, RTI needs access to all known children in case we unmounted the currently tabbable child */
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<M>["managedChildrenReturn"], "getChildren">;

    /** The only parameters RTI needs directly is the initial index to be tabbable */
    rovingTabIndexParameters: {
        initiallyTabbedIndex: number | null;

        /**
         * When true, this is the same as calling `setTabbableIndex(null)`.
         */
        untabbable: boolean;

        /** 
         * If you would like to have an event run whenever a new index becomes tabbable
         * (e.g. to call `setState` to render that tabbable index...for some reason...)
         * you can do that here.
         * 
         * **MUST** be stable!
         */
        onTabbableIndexChange: null | OnPassiveStateChange<number | null>;
    };
}

export interface UseRovingTabIndexReturnType<TabbableChildElement extends Element> {
    /** RTI runs logic when its children mount/unmount themselves */
    managedChildrenParameters: Pick<UseManagedChildrenParameters<UseRovingTabIndexChildInfo<TabbableChildElement>>["managedChildrenParameters"], "onChildrenMountChange">;

    /**
     * STABLE
     */
    rovingTabIndexChildContext: UseRovingTabIndexChildParameters<TabbableChildElement>["rovingTabIndexChildContext"];

    /** 
     * Return information that lets the user update/query/focus the currently tabbable child
     *
     *  
     */
    rovingTabIndexReturn: {
        /** **STABLE** */
        setTabbableIndex: (updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => void;
        /** **STABLE** */
        getTabbableIndex: () => number | null;
        /** **STABLE** */
        focusSelf: () => void;
    }
}

//export interface UseRovingTabIndexReturnTypeWithHooks<TabbableChildElement extends Element> extends UseRovingTabIndexReturnTypeInfo<TabbableChildElement> { }


export interface UseRovingTabIndexChildParameters<TabbableChildElement extends Element> {
    managedChildParameters: Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index">;

    /** 
     * The information specific to RTI for this child that you provide
     */
    rovingTabIndexChildParameters: Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "hidden">;

    /**
     * The information provided by the parent hook
     */
    rovingTabIndexChildContext: RovingTabIndexChildContext<TabbableChildElement>;
}

export interface RovingTabIndexChildContext<TabbableChildElement extends Element> {
    _e?: TabbableChildElement;

    setTabbableIndex: UseRovingTabIndexReturnType<TabbableChildElement>["rovingTabIndexReturn"]["setTabbableIndex"];

    /**
     * (This is technically the same as what's passed to onChildrenMountChange,
     * but it serves a slightly different purpose and is separate for clarity)
     */
    reevaluateClosestFit: () => void;
}

export type UseRovingTabIndexChild<ChildElement extends Element> = (a: UseRovingTabIndexChildParameters<ChildElement>) => UseRovingTabIndexChildReturnType<ChildElement>;

export interface UseRovingTabIndexChildReturnType<ChildElement extends Element> {

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
        setTabbable: StateUpdater<boolean>;

        /** 
         * *Unstable*
         * 
         * The props that must be applied to this child in order for this hook to work.
         * 
         * The object itself, as well as the properties within it, are unstable and should be rendered by the same component that uses this hook.
         */
        propsUnstable: h.JSX.HTMLAttributes<ChildElement>;
    }
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
    ..._void1
}: UseRovingTabIndexParameters<ChildElement, M>): UseRovingTabIndexReturnType<ChildElement> {
    assertEmptyObject(_void1);

    //initiallyTabbedIndex ??= 0;

    // Keep track of three things related to the currently tabbable element's index:
    // What it is, and whether, when we render this component and it's changed, to also focus the element that was made tabbable.
    //const [getTabbableIndex, setTabbableIndex2] = usePassiveState<number | null>(onTabbableIndexChange, useCallback(() => { return initiallyTabbedIndex }, []));
    const setTabbableIndex = useCallback((updater: Parameters<StateUpdater<number | null>>[0], fromUserInteraction: boolean) => {
        const children = getChildren();

        // Notify the relevant children that they should become tabbable/untabbable,
        // but also handle focus management when we changed due to user interaction
        return setTabbableIndex2(prevIndex => {
            let nextIndex = (typeof updater === "function") ? updater(prevIndex ?? null) : updater;

            if (prevIndex != nextIndex) {
                const nextChild = nextIndex == null ? null : children.getAt(nextIndex);
                if (nextChild?.hidden) {
                    return prevIndex;
                }

                if (nextChild != null && fromUserInteraction) {
                    const element = nextChild.getElement();
                    if (element) {
                        if (document.activeElement == null || !element.contains(document.activeElement))
                            nextChild.focusSelf(element);
                    }
                }

            }

            return nextIndex;
        })
    }, []);

    const lastNonNullIndex = useRef<number | null>(initiallyTabbedIndex);

    useEffect(() => {
        const t =  getTabbableIndex();
        if (t != null)
        lastNonNullIndex.current = t;
    });
    useEffect(() => {
        if (untabbable)
            setTabbableIndex2(null);
        else
            setTabbableIndex2(lastNonNullIndex.current);
    }, [untabbable])

    // Boilerplate related to notifying individual children when they become tabbable/untabbable
    const getTabbableAt = useCallback((m: UseRovingTabIndexChildInfo<ChildElement>) => { return m.getTabbable() }, []);
    const setTabbableAt = useCallback((m: UseRovingTabIndexChildInfo<ChildElement>, t: boolean) => { m.setTabbable(t); }, []);
    const isTabbableValid = useCallback((m: UseRovingTabIndexChildInfo<ChildElement>) => { return !m.hidden }, []);
    const { changeIndex: setTabbableIndex2, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag<UseRovingTabIndexChildInfo<ChildElement>>({
        initialIndex: initiallyTabbedIndex,
        onIndexChange: onTabbableIndexChange,
        getChildren,
        closestFit: true,
        getAt: getTabbableAt,
        isValid: isTabbableValid,
        setAt: setTabbableAt
    });

    const focusSelf = useCallback(() => {
        const children = getChildren();
        const index = getTabbableIndex();
        if (index != null) {
            const element = children.getAt(index)?.getElement();
            children.getAt(index)?.focusSelf?.(element!);
        }
        else
            setTabbableIndex(null, true);
    }, []);

    const rovingTabIndexChildContext = useStableObject({
        setTabbableIndex,
        reevaluateClosestFit
    });

    return {
        managedChildrenParameters: { onChildrenMountChange: reevaluateClosestFit, },
        rovingTabIndexReturn: { setTabbableIndex, getTabbableIndex, focusSelf },
        rovingTabIndexChildContext
    };
}



export function useRovingTabIndexChild<ChildElement extends Element>({
    managedChildParameters: { index, ..._void2 },
    rovingTabIndexChildContext: { reevaluateClosestFit, setTabbableIndex },
    rovingTabIndexChildParameters,
}: UseRovingTabIndexChildParameters<ChildElement>): UseRovingTabIndexChildReturnType<ChildElement> {
    const { hidden, ..._void1 } = rovingTabIndexChildParameters;
    const [tabbable, setTabbable, getTabbable] = useState(false);

    useEffect(() => {
        reevaluateClosestFit();
    }, [!!hidden]);

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);

    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused: boolean, _prevFocused: boolean | undefined) => {
                if (focused) {
                    setTabbableIndex(index, false);
                }
            })
        },
        rovingTabIndexChildReturn: {
            propsUnstable: { tabIndex: (tabbable ? 0 : -1) },
            tabbable,
            getTabbable,
            setTabbable
        }
    }
}