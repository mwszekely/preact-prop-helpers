
import { noop } from "lodash-es";
import { PressEventReason, PropNames_PressParameters_onPressSync, UsePressParameters } from "../../component-use/use-press.js";
import { PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange, UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusParameters } from "../../observers/use-children-have-focus.js";
import { PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged } from "../../observers/use-has-current-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren, UseGenericChildParameters, UseManagedChildrenReturnType, useChildrenFlag } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater, useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { assertEmptyObject } from "../../util/assert.js";
import { EnhancedEventHandler, TargetedEnhancedEvent, enhanceEvent } from "../../util/event.js";
import { focus } from "../../util/focus.js";
import { OmitStrong, RequiredN } from "../../util/lib-shared.js";
import { EventType, useCallback, useEffect, useRef } from "../../util/lib.js";
import { ElementProps, Nullable } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { PropNames_RovingTabIndexReturn_setTabbableIndex, UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "../keyboard-navigation/use-roving-tabindex.js";

const P1 = `PropNames.SingleSelectionParameters`;
const P2 = `PropNames.SingleSelectionChildParameters`;
const R1 = `PropNames.SingleSelectionReturn`;
const R2 = `PropNames.SingleSelectionChildReturn`;

export const PropNames_SingleSelectionParameters_initiallySingleSelectedIndex = `${P1}.initiallySingleSelectedIndex`;
export const PropNames_SingleSelectionParameters_onSingleSelectedIndexChange = `${P1}.onSingleSelectedIndexChange`;
export const PropNames_SingleSelectionParameters_singleSelectionMode = `${P1}.singleSelectionMode`;
export const PropNames_SingleSelectionParameters_singleSelectionAriaPropName = `${P1}.singleSelectionAriaPropName`;
export const PropNames_SingleSelectionParameters_singleSelectedIndex = `${P1}.singleSelectedIndex`;

export const PropNames_SingleSelectionReturn_changeSingleSelectedIndex = `${R1}.changeSingleSelectedIndex`;
export const PropNames_SingleSelectionReturn_getSingleSelectedIndex = `${R1}.getSingleSelectedIndex`;

export const PropNames_SingleSelectionChildParameters_singleSelectionDisabled = `${P1}.singleSelectionDisabled`;

export const PropNames_SingleSelectionChildReturn_singleSelected = `${R1}.singleSelected`;
export const PropNames_SingleSelectionChildReturn_getSingleSelected = `${R1}.getSingleSelected`;
export const PropNames_SingleSelectionChildReturn_singleSelectedOffset = `${R1}.singleSelectedOffset`;
export const PropNames_SingleSelectionChildReturn_singleSelectionMode = `${R1}.singleSelectionMode`;
export const PropNames_SingleSelectionChildReturn_getSingleSelectedOffset = `${R1}.getSingleSelectedOffset`;


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
    [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: Nullable<number>;

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
    [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: Nullable<SelectedIndexChangeHandler>; // ((index: number | null, reason: Event | undefined) => void);


    /**
     * What causes a child to become selected?
     * 
     * In general, `"focus"` is preferred (and also implies `"activation"` for iOS devices that may or may not focus anything ever),
     * especially when the change can be seen immediately and there is no consequence for doing so, like with tabs and sometimes radio buttons too.
     * 
     * When this is `"disabled"`, all single-selection behavior is turned off, allowing for multi-selection, or no selection.
     */
    [PropNames_SingleSelectionParameters_singleSelectionMode]: "focus" | "activation" | "disabled";

    /**
     * What property will be used to mark this item as selected.
     * 
     * **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.
     * 
     * This is ignored if `selectionMode` is set to `"disabled"`.
     */
    [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: Nullable<`aria-${"pressed" | "selected" | "checked" | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`}`>;

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
    [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: PassiveStateUpdater<number | null, SelectedIndexChangeEvent>;

    /**
     * @stable
     */
    [PropNames_SingleSelectionReturn_getSingleSelectedIndex](): number | null;
}

export interface UseSingleSelectionChildReturnTypeSelf {
    // These two are already available as managedChild info,
    // but we're keeping them because RTI does the same thing, and it's convenient (info is kinda semi-private).

    /**
     * Is this child currently the selected child among all its siblings?
     */
    [PropNames_SingleSelectionChildReturn_singleSelected]: boolean;

    /** @stable */
    [PropNames_SingleSelectionChildReturn_getSingleSelected](): boolean;

    /**
     * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
     * 
     * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
     * 
     * This useful for things like animations or transitions.
     */
    [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: Nullable<number>;

    /** @stable */
    [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: () => (number | null);

    [PropNames_SingleSelectionChildReturn_singleSelectionMode]: SingleSelectionContextSelf[typeof PropNames_SingleSelectionParameters_singleSelectionMode]
}

export interface UseSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> extends
    UseSingleSelectionParametersSelf,
    Pick<UseManagedChildrenReturnType<M>, typeof PropNames_ManagedChildrenReturn_getChildren>,
    Pick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, typeof PropNames_RovingTabIndexReturn_setTabbableIndex> {
}

export type UseSingleSelectionChildInfoKeysParameters = "index" | "untabbable";
export type UseSingleSelectionChildInfoKeysReturnType = "getSingleSelected" | "setLocalSingleSelected" | "singleSelected";

export interface UseSingleSelectionChildParametersSelf {
    /** When true, this child cannot be selected via single-select, either by focusing it or by clicking it. */
    [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: boolean;
}

export interface UseSingleSelectionChildParameters<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends
    UseSingleSelectionChildParametersSelf,
    UseGenericChildParameters<UseSingleSelectionContext, Pick<M, UseSingleSelectionChildInfoKeysParameters>> {
}


export interface UseSingleSelectionChildReturnType<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends
    UseSingleSelectionChildReturnTypeSelf,
    UseChildrenHaveFocusChildReturnType<E>,
    Pick<UsePressParameters<any>, typeof PropNames_PressParameters_onPressSync> {
    props: ElementProps<E>;
    info: Pick<M, UseSingleSelectionChildInfoKeysReturnType>;
}

export interface UseSingleSelectionReturnType<ChildElement extends Element> extends
    UseSingleSelectionReturnTypeSelf,
    Pick<UseChildrenHaveFocusParameters<ChildElement>, typeof PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange> {
    context: UseSingleSelectionContext;
}

export interface SingleSelectionContextSelf extends
    RequiredN<Pick<UseSingleSelectionParametersSelf, typeof PropNames_SingleSelectionParameters_singleSelectionMode | typeof PropNames_SingleSelectionParameters_onSingleSelectedIndexChange>>,
    Pick<UseSingleSelectionParametersSelf, typeof PropNames_SingleSelectionParameters_singleSelectionAriaPropName> {
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
    //   managedChildrenReturn: { getChildren, ...void1 },
    //   rovingTabIndexReturn: { setTabbableIndex, ...void2 },
    //   singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 },
    [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
    [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
    [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSelectedIndexChange_U,
    [PropNames_SingleSelectionParameters_initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
    [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
    [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
    ...void4
}: UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>): UseSingleSelectionReturnType<ChildElement> {
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
        [PropNames_SingleSelectionReturn_getSingleSelectedIndex]: getSingleSelectedIndex,
        [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
        context: useMemoObject({
            singleSelectionContext: useMemoObject<SingleSelectionContextSelf>({
                getSingleSelectedIndex,
                [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
                [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: singleSelectionAriaPropName,
                [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode
            }),
        }),
        [PropNames_ChildrenHaveFocusParameters_onCompositeFocusChange]: useStableCallback((anyFocused, prev, reason) => {
            if (!anyFocused) {
                const selectedIndex = getSingleSelectedIndex();
                if (selectedIndex != null)
                    setTabbableIndex(selectedIndex, reason, false);
            }
        })
    }
})


/**
 * 
 * 
 * @compositeParams
 */
export const useSingleSelectionChild = monitored(function useSingleSelectionChild<ChildElement extends Element>({
    //singleSelectionChildParameters: { singleSelectionDisabled, ...void5 },
    [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: singleSelectionDisabled,
    context: {
        singleSelectionContext: {
            getSingleSelectedIndex,
            [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
            [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: ariaPropName,
            [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
            ...void1
        },
        ...void2
    },
    info: { index, untabbable, ...void3 },
    ...void4
}: UseSingleSelectionChildParameters<ChildElement, UseSingleSelectionChildInfo<ChildElement>>): UseSingleSelectionChildReturnType<ChildElement, UseSingleSelectionChildInfo<ChildElement>> {
    type R = EventType<any, any>;

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);

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
        // singleSelectionChildReturn: {
        [PropNames_SingleSelectionChildReturn_singleSelected]: localSelected,
        [PropNames_SingleSelectionChildReturn_getSingleSelected]: getLocalSelected,
        [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: direction,
        [PropNames_SingleSelectionChildReturn_singleSelectionMode]: singleSelectionMode,
        [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: getDirection,
        //},
        props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        }, "data-single-selection-child"),
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        [PropNames_PressParameters_onPressSync]: onPressSync
    }
})

export interface UseSingleSelectionDeclarativeParametersSelf extends Pick<UseSingleSelectionParametersSelf, typeof PropNames_SingleSelectionParameters_onSingleSelectedIndexChange> {
    [PropNames_SingleSelectionParameters_singleSelectedIndex]: Nullable<number>;
}

export interface UseSingleSelectionDeclarativeParameters<ChildElement extends Element> extends
    UseSingleSelectionDeclarativeParametersSelf,
    Pick<UseSingleSelectionReturnType<ChildElement>, typeof PropNames_SingleSelectionReturn_changeSingleSelectedIndex> { }

export type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, keyof UseSingleSelectionParametersSelf> & UseSingleSelectionDeclarativeParameters<any> & Pick<UseSingleSelectionParameters<any, any, any>, typeof PropNames_SingleSelectionParameters_singleSelectionAriaPropName | typeof PropNames_SingleSelectionParameters_singleSelectionMode>;
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, keyof UseSingleSelectionReturnTypeSelf> & OmitStrong<UseSingleSelectionReturnType<any>, typeof PropNames_SingleSelectionReturn_changeSingleSelectedIndex>;

/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element>({
    [PropNames_SingleSelectionReturn_changeSingleSelectedIndex]: changeSingleSelectedIndex,
    [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex,
    [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: onSingleSelectedIndexChange
}: UseSingleSelectionDeclarativeParameters<ChildElement>) {
    let s = (singleSelectedIndex ?? null);
    let reasonRef = useRef<SelectedIndexChangeEvent | undefined>(undefined);
    useEffect(() => { changeSingleSelectedIndex(s, reasonRef.current!); }, [s]);

    const osic = useCallback<NonNullable<UseSingleSelectionParametersSelf[typeof PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]>>((e) => {
        reasonRef.current = e;
        return onSingleSelectedIndexChange?.(e);
    }, [onSingleSelectedIndexChange]);

    return {
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: osic
    } //satisfies Pick<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>[typeof PropNames_SingleSelectionParameters_onSingleSelectedIndexChange], typeof PropNames_SingleSelectionParameters_onSingleSelectedIndexChange> }
}

