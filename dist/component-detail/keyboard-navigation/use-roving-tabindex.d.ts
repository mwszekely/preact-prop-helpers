import { StateUpdater } from "preact/hooks";
import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseHasCurrentFocusParameters } from "../../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseManagedChildParameters, UseManagedChildrenParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { ElementProps, Nullable, OmitStrong } from "../../util/types.js";
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
     * If a child **exists** but **can't be tabbed to**, then set this to `true`.
     *
     * This cannot be calculated automatically. It's *possible* to catch something like `display: none` with some reflow-forcing `getComputedStyles` or something,
     * but if the child is untabbable because it's disabled or staggered or paginated or something we just have no way of knowing.
     * It could be untabbable for any arbitrary reason the user decides.
     *
     * If the child is **missing** instead (i.e. it does not exist), then there's no issue. You couldn't even supply this property because the child who would supply it is, by definition, missing. This is, to be clear, about **existing** children whomst are untabbable for any reason at all.
     *
     */
    untabbable: boolean;
    setLocallyTabbable: StateUpdater<boolean>;
    getLocallyTabbable: () => boolean;
}
export interface UseRovingTabIndexParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> {
    /** When children mount/unmount, RTI needs access to all known children in case we unmounted the currently tabbable child */
    managedChildrenReturn: Pick<UseManagedChildrenReturnType<M>["managedChildrenReturn"], "getChildren">;
    refElementReturn: Pick<UseRefElementReturnType<ParentElement>["refElementReturn"], "getElement">;
    /** The only parameters RTI needs directly is the initial index to be tabbable */
    rovingTabIndexParameters: {
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
         * When the parent is untabbable and a child gains focus via some means, we need to decide what to do.
         *
         * Sometimes, it's better to just send focus back to the parent.
         * Sometimes, it's better to just let the child be focused this one time.
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
    };
}
export interface UseRovingTabIndexReturnType<ParentElement extends Element, TabbableChildElement extends Element, _M extends UseRovingTabIndexChildInfo<TabbableChildElement>> {
    /** RTI runs logic when its children mount/unmount themselves */
    managedChildrenParameters: Pick<UseManagedChildrenParameters<UseRovingTabIndexChildInfo<TabbableChildElement>>["managedChildrenParameters"], "onChildrenMountChange">;
    props: ElementProps<ParentElement>;
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
    };
}
export type UseRovingTabIndexChildInfoKeys = "index" | "untabbable";
export interface UseRovingTabIndexChildParameters<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends OmitStrong<UseManagedChildParameters<M>, "info" | "context"> {
    info: Pick<UseManagedChildParameters<M>["info"], UseRovingTabIndexChildInfoKeys>;
    /**
     * The information provided by the parent hook
     */
    context: RovingTabIndexChildContext;
}
export interface RovingTabIndexChildContext {
    rovingTabIndexContext: {
        untabbable: boolean;
        untabbableBehavior: "focus-parent" | "leave-child-focused";
        parentFocusSelf: () => void;
        setTabbableIndex: SetTabbableIndex;
        getInitiallyTabbedIndex(): number | null;
        /**
         * (This is technically the same as what's passed to onChildrenMountChange,
         * but it serves a slightly different purpose and is separate for clarity)
         */
        reevaluateClosestFit: (requestedIndex?: number) => void;
    };
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
    };
    info: Pick<UseRovingTabIndexChildInfo<ChildElement>, "getLocallyTabbable" | "setLocallyTabbable">;
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
export declare function useRovingTabIndex<ParentElement extends Element, ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, ...void1 }: UseRovingTabIndexParameters<ParentElement, ChildElement, M>): UseRovingTabIndexReturnType<ParentElement, ChildElement, M>;
export declare function useRovingTabIndexChild<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { untabbable: parentIsUntabbable, untabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, ...void3 }: UseRovingTabIndexChildParameters<ChildElement, M>): UseRovingTabIndexChildReturnType<ChildElement, M>;
//# sourceMappingURL=use-roving-tabindex.d.ts.map