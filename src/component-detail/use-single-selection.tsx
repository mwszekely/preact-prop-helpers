
import { noop } from "lodash-es";
import { PressEventReason, UsePressParameters } from "../component-use/use-press.js";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../observers/use-children-have-focus.js";
import { UseGenericChildParameters, UseManagedChildrenReturnType, useChildrenFlag } from "../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { useState } from "../preact-extensions/use-state.js";
import { assertEmptyObject } from "../util/assert.js";
import { EnhancedEventHandler, TargetedEnhancedEvent, enhanceEvent } from "../util/event.js";
import { RequiredN } from "../util/lib-shared.js";
import { EventType, TargetedPick, useCallback, useEffect, useRef } from "../util/lib.js";
import { ElementProps, Nullable } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useTagProps } from "../util/use-tag-props.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./keyboard-navigation/use-roving-tabindex.js";


/** Anything that's selectable must be tabbable, so we DO use rovingTabIndex instead of just managedChildren */
export interface UseSingleSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    selected: boolean;
    getSelected(): boolean;
    /**
     * The parent calls this to change the child's local state.
     * 
     * When the `selectedIndex` changes, the relevant children's `setLocalSelected` are called (max of 2).
     * 
     * @param selected - This is the selected child (out of all of them)
     * @param direction - How far to the `selectedIndex` this child is
     */
    setLocalSelected(selected: boolean, direction: number | null): void;

    /**
     * This is similar to `untabbable` for `useRovingTabIndex`, but for selection.
     * 
     * Disables selecting this child. Being `untabbable` must imply being `unselectable`, but you can of course have something that's unselectable but not untabbable.
     */
    unselectable: boolean;
}

//export interface UseSingleSelectionChildInfo<ChildElement extends Element> extends UseRovingTabIndexChildInfo<ChildElement> {}

export type SelectedIndexChangeHandler = EnhancedEventHandler<Event, { selectedIndex: number }>;
export type SelectedIndexChangeEvent = TargetedEnhancedEvent<Event, { selectedIndex: number }>;

export interface UseSingleSelectionParametersSelf {
    /**
     * This is imperative, as opposed to declarative, 
     * to save on re-rendering the parent whenever the selected index changes.
     */
    initiallySelectedIndex: Nullable<number>;

    /**
     * Called when a child is selected (via a press or other method).
     * 
     * If this component is declaratively controlled (with e.g. `useSingleSelectionDeclarative`),
     * then you should use this to `setState` somewhere that'll change your `selectedIndex`.
     * 
     * If this component is imperatively controlled, then you should hook this up to the
     * returned `changeSelectedIndex` function to have the desired change occur.
     * 
     * In general, this should only be `null` when single selection is entirely disabled.
     * 
     * @nonstable
     */
    onSelectedIndexChange: Nullable<SelectedIndexChangeHandler>; // ((index: number | null, reason: Event | undefined) => void);


    selectionMode: "focus" | "activation" | "disabled";

    /**
     * What property will be used to mark this item as selected.
     * 
     * **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.
     */
    ariaPropName: Nullable<`aria-${"pressed" | "selected" | "checked" | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`}`>;

}

export interface UseSingleSelectionReturnTypeSelf {
    /**
     * A function that, when called, internally updates the selected index to the one you provide,
     * and tells the relevant children that they are/are not selected.
     * 
     * If you are creating an imperative component, this is what how you can force the value to change in response to something.
     * 
     * If you are creating a declarative component, this is what you call in `useEffect` when your `selectedIndex` changes.
     * 
     * @stable
     */
    changeSelectedIndex: PassiveStateUpdater<number | null, SelectedIndexChangeEvent>;

    /**
     * @stable
     */
    getSelectedIndex(): number | null;
}

export interface UseSingleSelectionChildReturnTypeSelf {
    // These two are already available as managedChild info,
    // but we're keeping them because RTI does the same thing, and it's convenient (info is kinda semi-private).

    /**
     * Is this child currently the selected child among all its siblings?
     */
    selected: boolean;

    /** @stable */
    getSelected(): boolean;

    /**
     * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
     * 
     * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
     * 
     * This useful for things like animations or transitions.
     */
    selectedOffset: Nullable<number>;

    /** @stable */
    getSelectedOffset: () => (number | null);
}

export interface UseSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element> extends
    TargetedPick<UseManagedChildrenReturnType<UseSingleSelectionChildInfo<ChildElement>>, "managedChildrenReturn", "getChildren">,
    TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "setTabbableIndex"> {
    singleSelectionParameters: UseSingleSelectionParametersSelf;
}

export type UseSingleSelectionChildInfoKeysParameters = "index" | "unselectable";
export type UseSingleSelectionChildInfoKeysReturnType = "getSelected" | "setLocalSelected" | "selected";

export interface UseSingleSelectionChildParameters<E extends Element> extends
    UseGenericChildParameters<UseSingleSelectionContext, Pick<UseSingleSelectionChildInfo<E>, UseSingleSelectionChildInfoKeysParameters>> {

}


export interface UseSingleSelectionChildReturnType<E extends Element> extends UseChildrenHaveFocusChildReturnType<E>, TargetedPick<UsePressParameters<any>, "pressParameters", "onPressSync"> {
    props: ElementProps<E>;

    info: Pick<UseSingleSelectionChildInfo<E>, UseSingleSelectionChildInfoKeysReturnType>;

    singleSelectionChildReturn: UseSingleSelectionChildReturnTypeSelf;
}

export interface UseSingleSelectionReturnType<ChildElement extends Element> extends TargetedPick<UseChildrenHaveFocusParameters<ChildElement>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
    singleSelectionReturn: UseSingleSelectionReturnTypeSelf;
    context: UseSingleSelectionContext;
}

export interface SingleSelectionContextSelf extends RequiredN<Pick<UseSingleSelectionParametersSelf, "selectionMode" | "onSelectedIndexChange">>, Pick<UseSingleSelectionParametersSelf, "ariaPropName"> {
    getSelectedIndex(): number | null;
}

export interface UseSingleSelectionContext {
    singleSelectionContext: SingleSelectionContextSelf;
}

/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 * 
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 * 
 * @hasChild {@link useSingleSelectionChild}
 * 
 * @compositeParams
 */
export function useSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element>({
    managedChildrenReturn: { getChildren, ...void1 },
    rovingTabIndexReturn: { setTabbableIndex, ...void2 },
    singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex, ariaPropName, selectionMode, ...void3 },
    ...void4
}: UseSingleSelectionParameters<ParentOrChildElement, ChildElement>): UseSingleSelectionReturnType<ChildElement> {
    monitorCallCount(useSingleSelection);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    type R = Event;
    const onSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);

    const getSelectedAt = useCallback((m: UseSingleSelectionChildInfo<ChildElement>) => { return m.getSelected(); }, []);
    const setSelectedAt = useCallback((m: UseSingleSelectionChildInfo<ChildElement>, t: boolean, newSelectedIndex: number | null, prevSelectedIndex: number | null) => {
        if (m.untabbable) {
            console.assert(false);
        }
        const directionComparison = (newSelectedIndex == m.index ? prevSelectedIndex : newSelectedIndex);
        const direction = (directionComparison == null ? null : (m.index - directionComparison));
        if (newSelectedIndex == null)
            console.assert(t == false);
        if (t)
            console.assert(newSelectedIndex === m.index);

        m.setLocalSelected(t, direction);
    }, []);
    const isSelectedValid = useCallback((m: UseSingleSelectionChildInfo<ChildElement>) => { return !m.unselectable; }, []);

    const {
        changeIndex: changeSelectedIndex,
        getCurrentIndex: getSelectedIndex
    } = useChildrenFlag<UseSingleSelectionChildInfo<ChildElement>, R>({
        getChildren,
        onIndexChange: null,
        initialIndex: initiallySelectedIndex,
        getAt: getSelectedAt,
        setAt: setSelectedAt,
        isValid: isSelectedValid,
        closestFit: false,
        onClosestFit: null
    });
    return {
        singleSelectionReturn: useMemoObject({
            getSelectedIndex,
            changeSelectedIndex
        }),
        context: useMemoObject({
            singleSelectionContext: useMemoObject<SingleSelectionContextSelf>({
                getSelectedIndex,
                onSelectedIndexChange,
                ariaPropName,
                selectionMode
            }),
        }),
        childrenHaveFocusParameters: {
            onCompositeFocusChange: useStableCallback((anyFocused, prev, reason) => {
                if (!anyFocused) {
                    const selectedIndex = getSelectedIndex();
                    if (selectedIndex != null)
                        setTabbableIndex(selectedIndex, reason, false);
                }
            })
        }
    }
}


/**
 * 
 * 
 * @compositeParams
 */
export function useSingleSelectionChild<ChildElement extends Element>({
    context: { singleSelectionContext: { getSelectedIndex, onSelectedIndexChange, ariaPropName, selectionMode, ...void1 }, ...void2 },
    info: { index, unselectable, ...void3 },
    ...void4
}: UseSingleSelectionChildParameters<ChildElement>): UseSingleSelectionChildReturnType<ChildElement> {
    monitorCallCount(useSingleSelectionChild);
    type R = EventType<any, any>;

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    useEnsureStability("useSingleSelectionChild", getSelectedIndex, onSelectedIndexChange);

    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSelectedIndex() == null ? null : (getSelectedIndex()! - index));

    const onCurrentFocusedInnerChanged = useStableCallback<OnPassiveStateChange<boolean, R | undefined>>((focused, _prev, e) => {
        if (selectionMode == 'focus' && focused && !unselectable) {
            onSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
        }
    });

    const onPressSync = useStableCallback((e: PressEventReason<any>) => {
        if (selectionMode == 'activation' && !unselectable)
            onSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
    });

    const propParts = ariaPropName?.split("-") ?? [];

    return {
        info: {
            setLocalSelected: useStableCallback((selected, direction) => {
                setLocalSelected(selected);
                setDirection(direction);
            }),
            getSelected: getLocalSelected,
            selected: localSelected,
        },
        singleSelectionChildReturn: {
            selected: localSelected,
            getSelected: getLocalSelected,
            selectedOffset: direction,
            getSelectedOffset: getDirection,
        },
        props: useTagProps(ariaPropName == null || selectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        }, "data-single-selection-child"),
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
        pressParameters: { onPressSync }
    }
}

export interface UseSingleSelectionDeclarativeParametersSelf extends Pick<UseSingleSelectionParametersSelf, "onSelectedIndexChange"> {
    selectedIndex: Nullable<number>;
}

export interface UseSingleSelectionDeclarativeParameters {
    singleSelectionDeclarativeParameters: UseSingleSelectionDeclarativeParametersSelf;
    singleSelectionReturn: Pick<UseSingleSelectionReturnTypeSelf, "changeSelectedIndex">;
}

export type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters & { singleSelectionParameters: Pick<UseSingleSelectionParameters<any, any>["singleSelectionParameters"], "ariaPropName" | "selectionMode"> };
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn">;

/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element>({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange } }: UseSingleSelectionDeclarativeParameters) {
    let s = (selectedIndex ?? null);
    let reasonRef = useRef<SelectedIndexChangeEvent | undefined>(undefined);
    useEffect(() => { changeSelectedIndex(s, reasonRef.current!); }, [s]);

    const osic = useCallback<NonNullable<UseSingleSelectionParametersSelf["onSelectedIndexChange"]>>((e) => {
        reasonRef.current = e;
        return onSelectedIndexChange?.(e);
    }, [onSelectedIndexChange]);

    return { singleSelectionParameters: { onSelectedIndexChange: osic } satisfies Pick<UseSingleSelectionParameters<ParentOrChildElement, ChildElement>["singleSelectionParameters"], "onSelectedIndexChange"> }
}


