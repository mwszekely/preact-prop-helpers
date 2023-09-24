import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseHasCurrentFocusParameters } from "../../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseGenericChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { EventType, StateUpdater } from "../../util/lib.js";
import { ElementProps, Nullable } from "../../util/types.js";
export type SetTabbableIndex = (updater: Parameters<PassiveStateUpdater<number | null, EventType<any, any>>>[0], reason: EventType<any, any> | undefined, fromUserInteraction: boolean) => void;
export type OnTabbableIndexChange = (tabbableIndex: number | null) => void;
export declare const PropNames_RovingTabIndexParameters_focusSelfParent = "PropNames.RovingTabIndexParameters.focusSelfParent";
export declare const PropNames_RovingTabIndexParameters_initiallyTabbedIndex = "PropNames.RovingTabIndexParameters.initiallyTabbedIndex";
export declare const PropNames_RovingTabIndexParameters_untabbable = "PropNames.RovingTabIndexParameters.untabbable";
export declare const PropNames_RovingTabIndexParameters_untabbableBehavior = "PropNames.RovingTabIndexParameters.untabbableBehavior";
export declare const PropNames_RovingTabIndexParameters_onTabbableIndexChange = "PropNames.RovingTabIndexParameters.onTabbableIndexChange";
export declare const PropNames_RovingTabIndexReturn_setTabbableIndex = "PropNames.RovingTabIndexReturn.setTabbableIndex";
export declare const PropNames_RovingTabIndexReturn_getTabbableIndex = "PropNames.RovingTabIndexReturn.getTabbableIndex";
export declare const PropNames_RovingTabIndexReturn_focusSelf = "PropNames.RovingTabIndexReturn.focusSelf";
export declare const PropNames_RovingTabIndexChildReturn_tabbable = "PropNames.RovingTabIndexChildReturn.tabbable";
export declare const PropNames_RovingTabIndexChildReturn_getTabbable = "PropNames.RovingTabIndexChildReturn.getTabbable";
export interface UseRovingTabIndexParametersSelf<ParentElement extends Element> {
    /** When `untabbable` is true, instead of a child focusing itself, the parent will via this `focusSelf` argument. */
    "PropNames.RovingTabIndexParameters.focusSelfParent"(e: ParentElement | null): void;
    /**
     * This is imperative, not declarative;
     * it is better if we can keep re-renders on the parent to a minimum anyway.
     *
     * You can manually control this with `onTabbableIndexChange` and `setTabbableIndex` if you need.
     */
    "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": Nullable<number>;
    /**
     * When true, none of the children will be tabbable, as if the entire component is hidden.
     *
     * This does not actually change the currently tabbable index; if this is set to `false`, the last tabbable child is remembered.
     */
    "PropNames.RovingTabIndexParameters.untabbable": boolean;
    /**
     * When the parent is `untabbable` and a child gains focus via some means, we need to decide what to do.
     *
     * Sometimes, it's better to just send focus back to the parent.
     * Sometimes, it's better to just let the child be focused this one time (especially if focusing means that `untabbable` is going to change to `true`).
     *
     * If `untabbable` is false, then this has no effect.
     */
    "PropNames.RovingTabIndexParameters.untabbableBehavior": "focus-parent" | "leave-child-focused";
    /**
     * If you would like to have an event run whenever a new index becomes tabbable
     * (e.g. to call `setState` to render that tabbable index...for some reason...)
     * you can do that here.
     *
     * **MUST** be stable!
     */
    "PropNames.RovingTabIndexParameters.onTabbableIndexChange": Nullable<OnPassiveStateChange<number | null, EventType<any, any>>>;
}
export interface UseRovingTabIndexReturnTypeSelf {
    /**
     * Can be used to programmatically change which child is the currently tabbable one.
     *
     * `fromUserInteraction` determines if this was a user-generated event that should focus the newly tabbable child,
     * or a programmatic event that should leave the user's focus where the user currently is, because they didn't do that.
     *
     * @stable
     */
    "PropNames.RovingTabIndexReturn.setTabbableIndex": SetTabbableIndex;
    /**
     * Returns the index of the child that is currently tabbable.
     *
     * @stable
     */
    "PropNames.RovingTabIndexReturn.getTabbableIndex": () => number | null;
    /**
     * Call to focus the currently tabbable child, or, if we're `untabbable`, the component itself.
     *
     * @stable
     */
    "PropNames.RovingTabIndexReturn.focusSelf": (reason?: any) => void;
}
export interface UseRovingTabIndexChildInfo<TabbableChildElement extends Element> extends ManagedChildInfo<number> {
    /**
     * A **unique integer** (among siblings) representing this child like the index to an array.
     *
     * @remarks There can be holes/gaps, and even negative numbers, though iterating over a gap is still O(n) on the size of the gap (kinda low priority TODO cause computers can count fast).
     */
    index: number;
    /**
     * How is this child focused? (Generally just `e => e.focus()`)
     *
     * @remarks In certain cases you may want to focus a different element.
     * When a grid row has its `focusSelf` called, for example, it doesn't focus the row,
     * but instead sends focus further down to a cell.
     *
     * This is used when the tabbable index changes (we auto-focus the newly tabbable element if applicable),
     * and also by the `focusSelf` value returned by the parent (i.e. `parent.focusSelf` calls one child's `focusSelf`)
     */
    focusSelf(e: TabbableChildElement): void;
    /**
     * Get this from `useRefElement`
     */
    getElement(): TabbableChildElement | null;
    /**
     * If a child **exists** (i.e. calls `useRovingTabIndexChild` or its derivatives in some way) but **can't be tabbed to** (because it's e.g. `display: none`), then set this to `true`.
     *
     * @remarks This cannot be calculated automatically. It's *possible* to catch something like `display: none` with some reflow-forcing `getComputedStyles` or something,
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
     * @remarks Used by the parent to control a child's internal tabbable state.
     */
    setLocallyTabbable: StateUpdater<boolean>;
    /**
     * Provided by `useRovingTabIndexChild`.
     *
     * @see {@link UseRovingTabIndexChildInfo.setLocallyTabbable}
     */
    getLocallyTabbable: () => boolean;
}
export interface UseRovingTabIndexParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends Pick<UseManagedChildrenReturnType<M>, "PropNames.ManagedChildrenReturn.getChildren">, Pick<UseRefElementReturnType<ParentElement>, "PropNames.RefElementReturn.getElement">, UseRovingTabIndexParametersSelf<ParentElement> {
}
export interface UseRovingTabIndexReturnType<ParentElement extends Element, TabbableChildElement extends Element> extends UseRovingTabIndexReturnTypeSelf, Pick<UseManagedChildrenParameters<UseRovingTabIndexChildInfo<TabbableChildElement>>, "PropNames.ManagedChildrenParameters.onChildrenMountChange"> {
    props: ElementProps<ParentElement>[];
    context: RovingTabIndexChildContext;
}
export type UseRovingTabIndexChildInfoKeysParameters = "index" | "untabbable";
export type UseRovingTabIndexChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";
export interface UseRovingTabIndexChildParameters<TabbableChildElement extends Element> extends UseGenericChildParameters<RovingTabIndexChildContext, Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, UseRovingTabIndexChildInfoKeysParameters>>, Pick<UseRefElementReturnType<TabbableChildElement>, "PropNames.RefElementReturn.getElement"> {
}
export interface RovingTabIndexChildContextSelf {
    getUntabbable(): boolean;
    getUntabbableBehavior(): "focus-parent" | "leave-child-focused";
    /** `force` refers to if the untabbableBehavior is ignored. E.G. `force` temporarily disables `leave-child-focused` and allows the parent to focus itself. */
    parentFocusSelf: (force: boolean) => void;
    giveParentFocusedElement(element: Element): void;
    setTabbableIndex: SetTabbableIndex;
    getInitiallyTabbedIndex(): number | null;
    /**
     * (This is technically the same as what's passed to onChildrenMountChange,
     * but it serves a slightly different purpose and is separate for clarity)
     */
    reevaluateClosestFit: (reason: EventType<any, any> | undefined) => void;
}
export interface RovingTabIndexChildContext {
    rovingTabIndexContext: RovingTabIndexChildContextSelf;
}
export interface UseRovingTabIndexChildReturnTypeSelf {
    /**
     * Whether this child, individually, is *the* currently tabbable child.
     */
    "PropNames.RovingTabIndexChildReturn.tabbable": boolean;
    /**
     * @stable
     */
    "PropNames.RovingTabIndexChildReturn.getTabbable"(): boolean;
}
export interface UseRovingTabIndexChildReturnType<ChildElement extends Element> extends UseRovingTabIndexChildReturnTypeSelf, Pick<UseHasCurrentFocusParameters<ChildElement>, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged"> {
    /**
     * Pass this to `useManagedChild`.
     */
    info: Pick<UseRovingTabIndexChildInfo<ChildElement>, UseRovingTabIndexChildInfoKeysReturnType>;
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
export declare const useRovingTabIndex: <ParentElement extends Element, ChildElement extends Element>({ "PropNames.RovingTabIndexParameters.focusSelfParent": focusSelfParentUnstable, "PropNames.RovingTabIndexParameters.untabbable": untabbable, "PropNames.RovingTabIndexParameters.untabbableBehavior": untabbableBehavior, "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, "PropNames.RovingTabIndexParameters.onTabbableIndexChange": onTabbableIndexChange, "PropNames.ManagedChildrenReturn.getChildren": getChildren, "PropNames.RefElementReturn.getElement": getElement, ...void1 }: UseRovingTabIndexParameters<ParentElement, ChildElement, UseRovingTabIndexChildInfo<ChildElement>>) => UseRovingTabIndexReturnType<ParentElement, ChildElement>;
/**
 * @compositeParams
 *
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 */
export declare const useRovingTabIndexChild: <ChildElement extends Element>({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, getUntabbable: getParentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, "PropNames.RefElementReturn.getElement": getElement, ...void3 }: UseRovingTabIndexChildParameters<ChildElement>) => UseRovingTabIndexChildReturnType<ChildElement>;
//# sourceMappingURL=use-roving-tabindex.d.ts.map