
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
import { OmitStrong, RequiredN } from "../../util/lib-shared.js";
import { EventType, useCallback, useEffect, useRef } from "../../util/lib.js";
import { ElementProps, Nullable, PropNames } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "../keyboard-navigation/use-roving-tabindex.js";


declare module "../../util/types.js" { interface PropNames { SingleSelectionParameters: typeof P1Names } }
declare module "../../util/types.js" { interface PropNames { SingleSelectionReturn: typeof R1Names } }
declare module "../../util/types.js" { interface PropNames { SingleSelectionChildParameters: typeof P2Names } }
declare module "../../util/types.js" { interface PropNames { SingleSelectionChildReturn: typeof R2Names } }

const P1 = `PropNames.SingleSelectionParameters`;
const P2 = `PropNames.SingleSelectionChildParameters`;
const R1 = `PropNames.SingleSelectionReturn`;
const R2 = `PropNames.SingleSelectionChildReturn`;

export const P1Names = {
    initiallySingleSelectedIndex: `${P1}.initiallySingleSelectedIndex`,
    onSingleSelectedIndexChange: `${P1}.onSingleSelectedIndexChange`,
    singleSelectionMode: `${P1}.singleSelectionMode`,
    singleSelectionAriaPropName: `${P1}.singleSelectionAriaPropName`,
    singleSelectedIndex: `${P1}.singleSelectedIndex`,
} as const;

export const R1Names = {
    changeSingleSelectedIndex: `${R1}.changeSingleSelectedIndex`,
    getSingleSelectedIndex: `${R1}.getSingleSelectedIndex`
} as const;

export const P2Names = {
    singleSelectionDisabled: `${P2}.singleSelectionDisabled`
} as const;

export const R2Names = {
    singleSelected: `${R2}.singleSelected`,
    getSingleSelected: `${R2}.getSingleSelected`,
    singleSelectedOffset: `${R2}.singleSelectedOffset`,
    singleSelectionMode: `${R2}.singleSelectionMode`,
    getSingleSelectedOffset: `${R2}.getSingleSelectedOffset`
} as const;



PropNames.SingleSelectionParameters ??=  P1Names;
PropNames.SingleSelectionReturn ??=  R1Names;
PropNames.SingleSelectionChildParameters ??=  P2Names;
PropNames.SingleSelectionChildReturn ??=  R2Names;



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
    [PropNames.SingleSelectionParameters.initiallySingleSelectedIndex]: Nullable<number>;

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
    [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: Nullable<SelectedIndexChangeHandler>; // ((index: number | null, reason: Event | undefined) => void);


    /**
     * What causes a child to become selected?
     * 
     * In general, `"focus"` is preferred (and also implies `"activation"` for iOS devices that may or may not focus anything ever),
     * especially when the change can be seen immediately and there is no consequence for doing so, like with tabs and sometimes radio buttons too.
     * 
     * When this is `"disabled"`, all single-selection behavior is turned off, allowing for multi-selection, or no selection.
     */
    [PropNames.SingleSelectionParameters.singleSelectionMode]: "focus" | "activation" | "disabled";

    /**
     * What property will be used to mark this item as selected.
     * 
     * **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.
     * 
     * This is ignored if `selectionMode` is set to `"disabled"`.
     */
    [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: Nullable<`aria-${"pressed" | "selected" | "checked" | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`}`>;

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
    [PropNames.SingleSelectionReturn.changeSingleSelectedIndex]: PassiveStateUpdater<number | null, SelectedIndexChangeEvent>;

    /**
     * @stable
     */
    [PropNames.SingleSelectionReturn.getSingleSelectedIndex](): number | null;
}

export interface UseSingleSelectionChildReturnTypeSelf {
    // These two are already available as managedChild info,
    // but we're keeping them because RTI does the same thing, and it's convenient (info is kinda semi-private).

    /**
     * Is this child currently the selected child among all its siblings?
     */
    [PropNames.SingleSelectionChildReturn.singleSelected]: boolean;

    /** @stable */
    [PropNames.SingleSelectionChildReturn.getSingleSelected](): boolean;

    /**
     * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
     * 
     * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
     * 
     * This useful for things like animations or transitions.
     */
    [PropNames.SingleSelectionChildReturn.singleSelectedOffset]: Nullable<number>;

    /** @stable */
    [PropNames.SingleSelectionChildReturn.getSingleSelectedOffset]: () => (number | null);

    [PropNames.SingleSelectionChildReturn.singleSelectionMode]: SingleSelectionContextSelf[typeof PropNames.SingleSelectionParameters.singleSelectionMode]
}

export interface UseSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> extends
    UseSingleSelectionParametersSelf,
    Pick<UseManagedChildrenReturnType<M>, typeof PropNames.ManagedChildrenReturn.getChildren>,
    Pick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, typeof PropNames.RovingTabIndexReturn.setTabbableIndex> {
}

export type UseSingleSelectionChildInfoKeysParameters = "index" | "untabbable";
export type UseSingleSelectionChildInfoKeysReturnType = "getSingleSelected" | "setLocalSingleSelected" | "singleSelected";

export interface UseSingleSelectionChildParametersSelf {
    /** When true, this child cannot be selected via single-select, either by focusing it or by clicking it. */
    [PropNames.SingleSelectionChildParameters.singleSelectionDisabled]: boolean;
}

export interface UseSingleSelectionChildParameters<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends
    UseSingleSelectionChildParametersSelf,
    UseGenericChildParameters<UseSingleSelectionContext, Pick<M, UseSingleSelectionChildInfoKeysParameters>> {
}


export interface UseSingleSelectionChildReturnType<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends
    UseSingleSelectionChildReturnTypeSelf,
    UseChildrenHaveFocusChildReturnType<E>,
    Pick<UsePressParameters<any>, typeof PropNames.PressParameters.onPressSync> {
    props: ElementProps<E>;
    info: Pick<M, UseSingleSelectionChildInfoKeysReturnType>;
}

export interface UseSingleSelectionReturnType<ChildElement extends Element> extends
    UseSingleSelectionReturnTypeSelf,
    Pick<UseChildrenHaveFocusParameters<ChildElement>, typeof PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange> {
    context: UseSingleSelectionContext;
}

export interface SingleSelectionContextSelf extends
    RequiredN<Pick<UseSingleSelectionParametersSelf, typeof PropNames.SingleSelectionParameters.singleSelectionMode | typeof PropNames.SingleSelectionParameters.onSingleSelectedIndexChange>>,
    Pick<UseSingleSelectionParametersSelf, typeof PropNames.SingleSelectionParameters.singleSelectionAriaPropName> {
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
    [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
    [PropNames.RovingTabIndexReturn.setTabbableIndex]: setTabbableIndex,
    [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSelectedIndexChange_U,
    [PropNames.SingleSelectionParameters.initiallySingleSelectedIndex]: initiallySingleSelectedIndex,
    [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: singleSelectionAriaPropName,
    [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode,
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
        [PropNames.SingleSelectionReturn.getSingleSelectedIndex]: getSingleSelectedIndex,
        [PropNames.SingleSelectionReturn.changeSingleSelectedIndex]: changeSingleSelectedIndex,
        context: useMemoObject({
            singleSelectionContext: useMemoObject<SingleSelectionContextSelf>({
                getSingleSelectedIndex,
                [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
                [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: singleSelectionAriaPropName,
                [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode
            }),
        }),
        [PropNames.ChildrenHaveFocusParameters.onCompositeFocusChange]: useStableCallback((anyFocused, prev, reason) => {
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
    [PropNames.SingleSelectionChildParameters.singleSelectionDisabled]: singleSelectionDisabled,
    context: {
        singleSelectionContext: {
            getSingleSelectedIndex,
            [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange,
            [PropNames.SingleSelectionParameters.singleSelectionAriaPropName]: ariaPropName,
            [PropNames.SingleSelectionParameters.singleSelectionMode]: singleSelectionMode,
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
        [PropNames.SingleSelectionChildReturn.singleSelected]: localSelected,
        [PropNames.SingleSelectionChildReturn.getSingleSelected]: getLocalSelected,
        [PropNames.SingleSelectionChildReturn.singleSelectedOffset]: direction,
        [PropNames.SingleSelectionChildReturn.singleSelectionMode]: singleSelectionMode,
        [PropNames.SingleSelectionChildReturn.getSingleSelectedOffset]: getDirection,
        //},
        props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : {
            [`${propParts[0]}-${propParts[1]}`]: (localSelected ? (propParts[1] == "current" ? `${propParts[2]}` : `true`) : "false")
        }, "data-single-selection-child"),
        [PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        [PropNames.PressParameters.onPressSync]: onPressSync
    }
})

export interface UseSingleSelectionDeclarativeParametersSelf extends Pick<UseSingleSelectionParametersSelf, typeof PropNames.SingleSelectionParameters.onSingleSelectedIndexChange> {
    [PropNames.SingleSelectionParameters.singleSelectedIndex]: Nullable<number>;
}

export interface UseSingleSelectionDeclarativeParameters<ChildElement extends Element> extends
    UseSingleSelectionDeclarativeParametersSelf,
    Pick<UseSingleSelectionReturnType<ChildElement>, typeof PropNames.SingleSelectionReturn.changeSingleSelectedIndex> { }

export type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, keyof UseSingleSelectionParametersSelf> & UseSingleSelectionDeclarativeParameters<any> & Pick<UseSingleSelectionParameters<any, any, any>, typeof PropNames.SingleSelectionParameters.singleSelectionAriaPropName | typeof PropNames.SingleSelectionParameters.singleSelectionMode>;
export type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, keyof UseSingleSelectionReturnTypeSelf> & OmitStrong<UseSingleSelectionReturnType<any>, typeof PropNames.SingleSelectionReturn.changeSingleSelectedIndex>;

/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export function useSingleSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element>({
    [PropNames.SingleSelectionReturn.changeSingleSelectedIndex]: changeSingleSelectedIndex,
    [PropNames.SingleSelectionParameters.singleSelectedIndex]: singleSelectedIndex,
    [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: onSingleSelectedIndexChange
}: UseSingleSelectionDeclarativeParameters<ChildElement>) {
    let s = (singleSelectedIndex ?? null);
    let reasonRef = useRef<SelectedIndexChangeEvent | undefined>(undefined);
    useEffect(() => { changeSingleSelectedIndex(s, reasonRef.current!); }, [s]);

    const osic = useCallback<NonNullable<UseSingleSelectionParametersSelf[typeof PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]>>((e) => {
        reasonRef.current = e;
        return onSingleSelectedIndexChange?.(e);
    }, [onSingleSelectedIndexChange]);

    return {
        [PropNames.SingleSelectionParameters.onSingleSelectedIndexChange]: osic
    } //satisfies Pick<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>[typeof PropNames.SingleSelectionParameters.onSingleSelectedIndexChange], typeof PropNames.SingleSelectionParameters.onSingleSelectedIndexChange> }
}

