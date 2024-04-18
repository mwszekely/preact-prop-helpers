
import { noop } from "lodash-es";
import { PressEventReason, UsePressParameters } from "../../component-use/use-press.js";
import { UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../../observers/use-children-have-focus.js";
import { UseGenericChildParameters, UseManagedChildrenReturnType, useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { EnhancedEventHandler, TargetedEnhancedEvent, enhanceEvent } from "../../util/event.js";
import { focus } from "../../util/focus.js";
import { RequiredN, TargetedOmit } from "../../util/lib-shared.js";
import { EventType, TargetedPick, useCallback, useEffect, useRef } from "../../util/lib.js";
import { ElementProps, Nullable } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "../keyboard-navigation/use-roving-tabindex.js";

/** Anything that's selectable must be tabbable, so we DO use rovingTabIndex instead of just managedChildren */
export interface UseSingleSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    singleSelected: boolean;
    getSingleSelected(): boolean;
    /**
     * The parent calls this to change the child's local state.
     * 
     * When the `selectedIndex` changes, the relevant children's `setLocalSelected` are called (max of 2).
     * 
     * @param selected - This is the selected child (out of all of them)
     * @param direction - How far to the `selectedIndex` this child is
     */
    setLocalSingleSelected(selected: boolean, direction: number | null): void;

    /**
     * This is similar to `untabbable` for `useRovingTabIndex`, but for selection.
     * 
     * Disables selecting this child. Being `untabbable` must imply being `unselectable`, but you can of course have something that's unselectable but not untabbable.
     */
    //unselectable: boolean;
}

export type SelectedIndexChangeHandler = EnhancedEventHandler<Event, { selectedIndex: number }>;
export type SelectedIndexChangeEvent = TargetedEnhancedEvent<Event, { selectedIndex: number }>;

export interface UseSingleSelectionParametersSelf {
    /**
     * This is imperative, as opposed to declarative, 
     * to save on re-rendering the parent whenever the selected index changes.
     */
    initiallySingleSelectedIndex: Nullable<number>;

    /**
     * Called when a child is selected (via a press or other method).
     * 
     * If this component is declaratively controlled (with e.g. `useSingleSelectionDeclarative`),
     * then you should use this to `setState` somewhere that'll change your `selectedIndex` 
     * (it's called whenever the parent is notified of a child being focused or activated).
     * 
     * If this component is imperatively controlled, then you should hook this up to the
     * returned `changeSelectedIndex` function to have the desired change occur.
     * 
     * In general, this should only be `null` when single selection is entirely disabled.
     * 
     * @nonstable
     */
    onSingleSelectedIndexChange: Nullable<SelectedIndexChangeHandler>; // ((index: number | null, reason: Event | undefined) => void);


    /**
     * What causes a child to become selected?
     * 
     * In general, `"focus"` is preferred (and also implies `"activation"` for iOS devices that may or may not focus anything ever),
     * especially when the change can be seen immediately and there is no consequence for doing so, like with tabs and sometimes radio buttons too.
     * 
     * When this is `"disabled"`, all single-selection behavior is turned off, allowing for multi-selection, or no selection.
     */
    singleSelectionMode: "focus" | "activation" | "disabled";

    /**
     * What property will be used to mark this item as selected.
     * 
     * **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.
     * 
     * This is ignored if `selectionMode` is set to `"disabled"`.
     */
    singleSelectionAriaPropName: Nullable<`aria-${"pressed" | "selected" | "checked" | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`}`>;

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
    changeSingleSelectedIndex: PassiveStateUpdater<number | null, SelectedIndexChangeEvent>;

    /**
     * @stable
     */
    getSingleSelectedIndex(): number | null;
}

export interface UseSingleSelectionChildReturnTypeSelf extends Pick<Required<SingleSelectionContextSelf>, "singleSelectionMode"> {
    // These two are already available as managedChild info,
    // but we're keeping them because RTI does the same thing, and it's convenient (info is kinda semi-private).

    /**
     * Is this child currently the selected child among all its siblings?
     */
    singleSelected: boolean;

    /** @stable */
    getSingleSelected(): boolean;

    /**
     * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
     * 
     * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
     * 
     * This useful for things like animations or transitions.
     */
    singleSelectedOffset: Nullable<number>;

    /** @stable */
    getSingleSelectedOffset: () => (number | null);
}

export interface UseSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> extends
    TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren">,
    TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "setTabbableIndex"> {
    singleSelectionParameters: UseSingleSelectionParametersSelf;
}

export type UseSingleSelectionChildInfoKeysParameters = "index" | "untabbable";
export type UseSingleSelectionChildInfoKeysReturnType = "getSingleSelected" | "setLocalSingleSelected" | "singleSelected";

export interface UseSingleSelectionChildParametersSelf {
    /** When true, this child cannot be selected via single-select, either by focusing it or by clicking it. */
    singleSelectionDisabled: boolean;
}

export interface UseSingleSelectionChildParameters<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends
    UseGenericChildParameters<UseSingleSelectionContext, Pick<M, UseSingleSelectionChildInfoKeysParameters>> {
    singleSelectionChildParameters: UseSingleSelectionChildParametersSelf;
}


export interface UseSingleSelectionChildReturnType<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends UseChildrenHaveFocusChildReturnType<E>, TargetedPick<UsePressParameters<any>, "pressParameters", "onPressSync"> {
    props: ElementProps<E>;

    info: Pick<M, UseSingleSelectionChildInfoKeysReturnType>;

    singleSelectionChildReturn: UseSingleSelectionChildReturnTypeSelf;
}

export interface UseSingleSelectionReturnType<ChildElement extends Element> extends TargetedPick<UseChildrenHaveFocusParameters<ChildElement>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
    singleSelectionReturn: UseSingleSelectionReturnTypeSelf;
    context: UseSingleSelectionContext;
}

export interface SingleSelectionContextSelf extends RequiredN<Pick<UseSingleSelectionParametersSelf, "singleSelectionMode" | "onSingleSelectedIndexChange">>, Pick<UseSingleSelectionParametersSelf, "singleSelectionAriaPropName"> {
    getSingleSelectedIndex(): number | null;
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
export const useSingleSelection = monitored(function useSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element>({
    managedChildrenReturn: { getChildren, ...void1 },
    rovingTabIndexReturn: { setTabbableIndex, ...void2 },
    singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 },
    ...void4
}: UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>): UseSingleSelectionReturnType<ChildElement> {
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

    type R = Event;
    const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);

    const getSelectedAt = useCallback((m: UseSingleSelectionChildInfo<ChildElement>) => { return m.getSingleSelected(); }, []);
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

        m.setLocalSingleSelected(t, direction);
    }, []);
    const isSelectedValid = useCallback((m: UseSingleSelectionChildInfo<ChildElement>) => { return !m.untabbable; }, []);

    const {
        changeIndex: changeSingleSelectedIndex,
        getCurrentIndex: getSingleSelectedIndex
    } = useChildrenFlag<UseSingleSelectionChildInfo<ChildElement>, R>({
        getChildren,
        onIndexChange: null,
        initialIndex: initiallySingleSelectedIndex,
        getAt: getSelectedAt,
        setAt: setSelectedAt,
        isValid: isSelectedValid,
        closestFit: false,
        onClosestFit: null
    });
    return {
        singleSelectionReturn: useMemoObject({
            getSingleSelectedIndex,
            changeSingleSelectedIndex: useCallback<typeof changeSingleSelectedIndex>((e, r) => {
                // Whenever the caller asks us to change the selected index,
                // also make sure we change uRTI's currently tabbable index to match it.
                if (e != null)
                    setTabbableIndex(e, r, false);
                changeSingleSelectedIndex(e, r);
            }, [])
        }),
        context: useMemoObject({
            singleSelectionContext: useMemoObject<SingleSelectionContextSelf>({
                getSingleSelectedIndex,
                onSingleSelectedIndexChange,
                singleSelectionAriaPropName,
                singleSelectionMode
            }),
        }),
        childrenHaveFocusParameters: {
            onCompositeFocusChange: useStableCallback((anyFocused, prev, reason) => {
                if (!anyFocused) {
                    // TODO: Is this redundant with what we do in `changeSingleSelectedIndex`?
                    // I'm 95% sure it is.
                    const selectedIndex = getSingleSelectedIndex();
                    if (selectedIndex != null)
                        setTabbableIndex(selectedIndex, reason, false);
                }
            })
        }
    }
})


/**
 * 
 * 
 * @compositeParams
 */
export const useSingleSelectionChild = monitored(function useSingleSelectionChild<ChildElement extends Element>({
    singleSelectionChildParameters: { singleSelectionDisabled, ...void5 },
    context: { singleSelectionContext: { getSingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName: ariaPropName, singleSelectionMode, ...void1 }, ...void2 },
    info: { index, untabbable, ...void3 },
    ...void4
}: UseSingleSelectionChildParameters<ChildElement, UseSingleSelectionChildInfo<ChildElement>>): UseSingleSelectionChildReturnType<ChildElement, UseSingleSelectionChildInfo<ChildElement>> {
    type R = EventType<any, any>;

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);

    useEnsureStability("useSingleSelectionChild", getSingleSelectedIndex, onSingleSelectedIndexChange);

    const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
    const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : (getSingleSelectedIndex()! - index));

    const onCurrentFocusedInnerChanged = useStableCallback<OnPassiveStateChange<boolean, R | undefined>>((focused, _prev, e) => {
        if (!singleSelectionDisabled && singleSelectionMode == 'focus' && focused && !untabbable) {
            onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
        }
    });

    const onPressSync = useStableCallback((e: PressEventReason<any>) => {
        // We allow press events for selectionMode == 'focus' because
        // press generally causes a focus anyway (except when it doesn't, iOS Safari...)
        if (!singleSelectionDisabled && !untabbable) {
            if (singleSelectionMode == 'activation')
                onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
        }
        else {
            focus(e.currentTarget);
        }
    });

    const propParts = ariaPropName?.split("-") ?? [];

    return {
        info: {
            setLocalSingleSelected: useStableCallback((selected, direction) => {
                setLocalSelected(selected);
                setDirection(direction);
            }),
            getSingleSelected: getLocalSelected,
            singleSelected: localSelected,
        },
        singleSelectionChildReturn: {
            singleSelected: localSelected,
            getSingleSelected: getLocalSelected,
            singleSelectedOffset: direction,
            singleSelectionMode,
            getSingleSelectedOffset: getDirection
        },
        props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        }, "data-single-selection-child"),
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
        pressParameters: { onPressSync }
    }
})

export interface UseSingleSelectionDeclarativeParametersSelf extends Pick<UseSingleSelectionParametersSelf, "onSingleSelectedIndexChange"> {
    singleSelectedIndex: Nullable<number>;
}

export interface UseSingleSelectionDeclarativeParameters<ChildElement extends Element> extends TargetedPick<UseSingleSelectionReturnType<ChildElement>, "singleSelectionReturn", "changeSingleSelectedIndex"> {
    singleSelectionDeclarativeParameters: UseSingleSelectionDeclarativeParametersSelf;
}

export interface UseSingleSelectionDeclarativeReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends TargetedPick<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>, "singleSelectionParameters", "onSingleSelectedIndexChange"> {

}



export type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters<any> & TargetedPick<UseSingleSelectionParameters<any, any, any>, "singleSelectionParameters", "singleSelectionAriaPropName" | "singleSelectionMode">;
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn"> & TargetedOmit<UseSingleSelectionReturnType<any>, "singleSelectionReturn", "changeSingleSelectedIndex">;

/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element>({
    singleSelectionReturn: { changeSingleSelectedIndex },
    singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange }
}: UseSingleSelectionDeclarativeParameters<ChildElement>): UseSingleSelectionDeclarativeReturnType<ParentOrChildElement, ChildElement> {
    let s = (singleSelectedIndex ?? null);
    let reasonRef = useRef<SelectedIndexChangeEvent | undefined>(undefined);
    useEffect(() => { changeSingleSelectedIndex(s, reasonRef.current!); }, [s]);

    const osic = useCallback<NonNullable<UseSingleSelectionParametersSelf["onSingleSelectedIndexChange"]>>((e) => {
        reasonRef.current = e;
        return onSingleSelectedIndexChange?.(e);
    }, [onSingleSelectedIndexChange]);

    return { singleSelectionParameters: { onSingleSelectedIndexChange: osic } satisfies Pick<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>["singleSelectionParameters"], "onSingleSelectedIndexChange"> }
}



