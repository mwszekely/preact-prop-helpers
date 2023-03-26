import { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { UseHasCurrentFocusParameters } from "../../observers/use-has-current-focus.js";
import { ManagedChildInfo, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { OnPassiveStateChange, PassiveStateUpdater } from "../../preact-extensions/use-passive-state.js";
import { ElementProps, OmitStrong } from "../../util/types.js";
export type SetTabbableIndex = (updater: Parameters<PassiveStateUpdater<number | null, SyntheticEvent<any>>>[0], reason: SyntheticEvent<any> | undefined, fromUserInteraction: boolean) => void;
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
    setLocallyTabbable: Dispatch<SetStateAction<boolean>>;
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
        onTabbableIndexChange?: undefined | null | OnPassiveStateChange<number | null, SyntheticEvent<any>>;
    };
}
export interface UseRovingTabIndexReturnType<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> {
    /** RTI runs logic when its children mount/unmount themselves */
    managedChildrenParameters: Pick<UseManagedChildrenParameters<UseRovingTabIndexChildInfo<TabbableChildElement>>["managedChildrenParameters"], "onChildrenMountChange">;
    /**
     * STABLE
     */
    context: Pick<RovingTabIndexChildContext<TabbableChildElement, M>, "rovingTabIndexContext">;
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
export interface UseRovingTabIndexChildParameters<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends OmitStrong<UseManagedChildParameters<M>, "info" | "context"> {
    info: Pick<UseManagedChildParameters<M>["info"], "index">;
    /**
     * The information specific to RTI for this child that you provide
     */
    rovingTabIndexChildParameters: Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "hidden">;
    /**
     * The information provided by the parent hook
     */
    context: OmitStrong<RovingTabIndexChildContext<TabbableChildElement, M>, "managedChildContext">;
}
export interface RovingTabIndexChildContext<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends UseManagedChildrenContext<M> {
    rovingTabIndexContext: {
        _tce?: TabbableChildElement;
        setTabbableIndex: SetTabbableIndex;
        getInitiallyTabbedIndex(): number | null;
        /**
         * (This is technically the same as what's passed to onChildrenMountChange,
         * but it serves a slightly different purpose and is separate for clarity)
         */
        reevaluateClosestFit: () => void;
    };
}
export interface UseRovingTabIndexChildReturnType<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>> {
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
export declare function useRovingTabIndex<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { untabbable, initiallyTabbedIndex, onTabbableIndexChange }, ..._void1 }: UseRovingTabIndexParameters<ChildElement, M>): UseRovingTabIndexReturnType<ChildElement, M>;
export declare function useRovingTabIndexChild<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({ info: { index, ..._void2 }, context: { rovingTabIndexContext: { reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex } }, rovingTabIndexChildParameters, ..._void3 }: UseRovingTabIndexChildParameters<ChildElement, M>): UseRovingTabIndexChildReturnType<ChildElement, M>;
//# sourceMappingURL=use-roving-tabindex.d.ts.map