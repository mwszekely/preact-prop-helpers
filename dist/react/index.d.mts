import { CSSProperties as CSSProperties$1, ComponentType, CompositionEvent, Context, DependencyList as Inputs, Dispatch, DragEvent, EffectCallback, FocusEvent as FocusEvent$1, Fragment, JSX, KeyboardEvent, MouseEvent, MutableRefObject as RefObject, PointerEvent, PropsWithChildren, PropsWithRef, ReactNode as ComponentChildren, Reducer, Ref, Ref as Ref$1, RefCallback, SetStateAction, SyntheticEvent, TouchEvent, cloneElement, createContext, createElement, forwardRef, memo, useCallback, useContext, useDebugValue, useEffect, useEffectEvent, useId, useImperativeHandle, useInsertionEffect as useBeforeLayoutEffect, useLayoutEffect, useMemo, useReducer, useRef, useState as useState$1 } from "react";
import { createPortal } from "react-dom";
import { identity } from "lodash-es";
import { CaptureFunctionType } from "async-to-sync";
import { clsx } from "clsx";
import { JSX as JSX$1 } from "react/jsx-runtime";
/** Opposite of NonNullable */
type Nullable<T = null> = null | undefined | T;
/** Like `Required`, but also makes types `NonNullable` besides just required. */
type RequiredN<T> = { [P in keyof T]-?: NonNullable<T[P]>; };
/** Like Omit, but with type completion */
type OmitStrong<T, K extends keyof T> = Omit<T, K>;
/** "**Pick**, then **omit**". Given an object, omits everything but the given props in the given sub-object, including other sub-objects. */
type TargetedOmit<T, K extends keyof T, L extends keyof T[K]> = { [M in K]: OmitStrong<T[K], L>; };
/**
 * "**Pick**, then **pick** again". Given an object, omits everything but the given props in the given sub-object, including other sub-objects.
 *
 * @remarks This is particularly useful for the kind of off-brand parameter inheritence that things like grid navigation have going.
 */
type TargetedPick<T, K extends keyof T, L extends keyof T[K]> = { [M in K]: Pick<T[K], L>; };
/** Combines two interfaces in a way that leaves them still able to be extended (via class, another interface, etc.) */
type ExtendMerge<A, B> = { [K in (keyof A) | (keyof B)]: K extends keyof A ? (K extends keyof B ? (A[K] & B[K]) : A[K]) : K extends keyof B ? B[K] : unknown; };
type RenderableProps<P> = PropsWithChildren<PropsWithRef<P>>;
type StateUpdater<T> = Dispatch<SetStateAction<T>>;
export declare function debounceRendering(f: () => void): void;
export declare const onfocusin = "onFocus";
export declare const onfocusout = "onBlur";
type ElementProps<Tag extends keyof JSX$1.IntrinsicElements> = Pick<JSX$1.IntrinsicElements, Tag>[Tag];
type TagToElement<Tag extends keyof JSX$1.IntrinsicElements> = Exclude<ElementProps<Tag>["ref"], null | undefined> extends Ref$1<infer K> ? K : never;
type EventTypeByTag<Tag extends keyof JSX$1.IntrinsicElements, E extends Event> = SyntheticEvent<TagToElement<Tag>, E>;
type FocusEventTypeByTag<Tag extends keyof JSX$1.IntrinsicElements> = FocusEvent$1<TagToElement<Tag>>;
type KeyboardEventTypeByTag<Tag extends keyof JSX$1.IntrinsicElements> = KeyboardEvent<TagToElement<Tag>>;
type MouseEventTypeByTag<Tag extends keyof JSX$1.IntrinsicElements> = MouseEvent<TagToElement<Tag>>;
type TouchEventTypeByTag<Tag extends keyof JSX$1.IntrinsicElements> = TouchEvent<TagToElement<Tag>>;
type PointerEventTypeByTag<Tag extends keyof JSX$1.IntrinsicElements> = PointerEvent<TagToElement<Tag>>;
type CompositionEventTypeByTag<Tag extends keyof JSX$1.IntrinsicElements> = CompositionEvent<TagToElement<Tag>>;
type DragEventTypeByTag<Tag extends keyof JSX$1.IntrinsicElements> = DragEvent<TagToElement<Tag>>;
type CSSProperties = CSSProperties$1;
type VNode = JSX$1.Element;
export declare function getEventMapping(): { [K in keyof HTMLElementEventMap]: (keyof JSX$1.IntrinsicElements["div"] & `on${string}`); };
/** Takes a new value or a function that updates a value, unlike `OnPassiveStateChange` which reacts to those updates */
type PassiveStateUpdater<S, R> = ((value: S | ((prevState: S | undefined) => S), reason?: R | undefined) => void);
/** Responds to a change in a value, unlike `PassiveStateUpdater` which causes the updates */
type OnPassiveStateChange<S, R> = ((value: S, prevValue: S | undefined, reason?: R | undefined) => (void | (() => void)));
/**
 * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
 *
 * @remarks Eventually, when useEvent lands, we hopefully won't need this.
 */
export declare function useEnsureStability<T extends any[]>(parentHookName: string, ...values2: T): void;
interface UsePassiveStateOptions {
  /** **Must be stable** (i.e. the value must not change as long as the component is rendered) */
  skipMountInitialization: boolean;
  debounceRendering: typeof debounceRendering;
}
/**
 * Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).
 *
 * @remarks To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes.  Just like `useEffect`, this callback can return a cleanup function that's run before the value changes.  If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.
 *
 * To summarize, it's like a `useState`-`useEffect` mashup:
 *
 * 1. It's like `useState`, except this version of `setState` doesn't re-render the whole component
 * 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function
 * 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering
 * 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`
 *
 * Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.
 *
 * {@include } {@link OnPassiveStateChange}
 *
 * @param onChange - The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function.  MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param getInitialValue - If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.
 * @param customDebounceRendering - By default, changes to passive state are delayed by one tick so that we only check for changes in a similar way to Preact. You can override this to, for example, always run immediately instead.
 * @returns
 */
export declare function usePassiveState<T, R>(onChange: Nullable<OnPassiveStateChange<T, R>>, getInitialValue?: () => T, { debounceRendering: customDebounceRendering, skipMountInitialization }?: Partial<UsePassiveStateOptions>): readonly [getStateStable: () => T, setStateStable: PassiveStateUpdater<T, R>];
export declare function returnTrue(): boolean;
export declare function returnFalse(): boolean;
export declare function returnNull(): null;
export declare function returnUndefined(): undefined;
export declare function returnZero(): number;
/**
 * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
 */
export declare function runImmediately(f: () => void): void;
interface UseRefElementReturnTypeSelf<Tag extends keyof JSX.IntrinsicElements> {
  /**
   *
   * Returns the element that the props were rendered to, or `null` if they were not rendered to an element.
   *
   * @stable
   */
  getElement(): TagToElement<Tag> | null;
}
interface UseRefElementReturnType<Tag extends keyof JSX.IntrinsicElements> {
  /** @stable */
  propsStable: ElementProps<Tag>;
  refElementReturn: UseRefElementReturnTypeSelf<Tag>;
}
interface UseRefElementParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
  /**
   * Called with the `Element` when it mounts, called with `null` when it unmounts.
   *
   * @stable
   */
  onElementChange?: Nullable<OnPassiveStateChange<TagToElement<Tag> | null, never>>;
  /**
   * Called when the element mounts
   *
   * @stable
   */
  onMount?: Nullable<(element: TagToElement<Tag>) => void>;
  /**
   * Called when the element unmounts
   *
   * @stable
   */
  onUnmount?: Nullable<(element: TagToElement<Tag>) => void>;
}
interface UseRefElementParameters<Tag extends keyof JSX.IntrinsicElements> {
  refElementParameters: UseRefElementParametersSelf<Tag>;
}
/**
 * Access the `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
 *
 * @remarks
 *
 * This hook, like many others, works with either `useState` or {@link usePassiveState}. Why use one over the other?
 *
 * ```md-literal
 * * `useState` is familiar and easy to use, but calling `setState` causes a re-render, which you might not need/want
 * * `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.
 * ```
 *
 * Suppose we want to call the `HTMLElement`'s `doSomethingFunny` method as soon as the element has been created:
 *
 * @example
 * // Easiest way to use (but setElement causes an extra re-render when it's called...)
 * const [element, setElement] = useState<HTMLButtonElement | null>(null);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * useEffect(() => {
 *     element.doSomethingFunny();
 * }, [element])
 *
 * @example
 * // Fastest (but slightly more verbose)
 * // The code in useEffect is moved into this callback, but runs at the same time
 * const onElementChange = useCallback(element => element.doSomethingFunny(), []);
 * const [getElement, setElement] = usePassiveState<HTMLButtonElement | null>(onElementChange, returnNull);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 *
 * @compositeParams
 */
export declare function useRefElement<Tag extends keyof JSX.IntrinsicElements>(args: UseRefElementParameters<Tag>): UseRefElementReturnType<Tag>;
interface UseBackdropDismissParametersSelf<B extends boolean> {
  /**
   * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
   */
  dismissBackdropActive: B | false;
  /**
   * Called when the component is dismissed by clicking outside of the element.
   *
   * @nonstable
   */
  onDismissBackdrop: Nullable<(e: MouseEventTypeByTag<any>) => void>;
}
interface UseBackdropDismissParameters<PopupElementTag extends keyof JSX.IntrinsicElements, B extends boolean> {
  backdropDismissParameters: UseBackdropDismissParametersSelf<B>;
  refElementPopupReturn: Pick<UseRefElementReturnType<PopupElementTag>["refElementReturn"], "getElement">;
}
/**
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
export declare function useBackdropDismiss<PopupElementTag extends keyof JSX.IntrinsicElements, B extends boolean>({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElementTag, B>): void;
interface UseEscapeDismissParametersSelf<B extends boolean> {
  /**
   * Called when the component is dismissed by pressing the `Escape` key.
   *
   * @nonstable
   */
  onDismissEscape: Nullable<(e: KeyboardEventTypeByTag<any>) => void>;
  /**
   * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
   */
  dismissEscapeActive: B | false;
  /**
   * The escape key event handler is attached onto the window, so we need to know which window.
   *
   * @remarks The returned `Document` should not change throughout the lifetime of the component (i.e. the element in question must not switch to another window via some means, which might not even be possible).
   *
   * @nonstable
   */
  getDocument(): Document;
  /**
   * Get this from context somewhere, and increment it in that context.
   *
   * If multiple instances of Preact are on the page, tree depth is used as a tiebreaker
   */
  parentDepth: number;
}
interface UseEscapeDismissParameters<PopupElementTag extends keyof JSX.IntrinsicElements, B extends boolean> {
  escapeDismissParameters: UseEscapeDismissParametersSelf<B>;
  refElementPopupReturn: Pick<UseRefElementReturnType<PopupElementTag>["refElementReturn"], "getElement">;
}
/**
 * Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)
 *
 * @remarks One press of the `Escape` key is guaranteed to only call `onDismiss` for *only one* component, and it is called on the component deepest in the DOM tree.
 *
 * TODO: Instead of being deepest in the DOM tree (which is usually fine), it should probably be related to what order something was made `active`.
 *
 * @compositeParams
 */
export declare function useEscapeDismiss<PopupElementTag extends keyof JSX.IntrinsicElements, B extends boolean>({ escapeDismissParameters: { onDismissEscape: onClose, dismissEscapeActive: open, getDocument: unstableGetDocument, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }: UseEscapeDismissParameters<PopupElementTag, B>): void;
interface UseActiveElementParametersSelf {
  /**
   * Called any time the active element changes.
   *
   * @stable
   */
  onActiveElementChange: Nullable<OnPassiveStateChange<Element | null, FocusEvent>>;
  /**
   * Called any time the active element changes and is not null.
   *
   * @stable
   */
  onLastActiveElementChange: Nullable<OnPassiveStateChange<Element, FocusEvent>>;
  /**
   * Called any time the window gains/loses focus.
   *
   * @stable
   */
  onWindowFocusedChange: Nullable<OnPassiveStateChange<boolean, FocusEvent>>;
  /**
   * This must be a function that returns the document associated with whatever elements we're listening to.
   *
   * E.G. someDivElement.ownerDocument
   *
   * @stable
   */
  getDocument(): Document;
}
interface UseActiveElementParameters {
  activeElementParameters: UseActiveElementParametersSelf;
}
interface UseActiveElementReturnTypeSelf {
  /**
   * Returns whatever element is currently focused, or `null` if there's no focused element
   * @stable
   */
  getActiveElement: () => Element | null;
  /**
   * Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element
   * @stable
   */
  getLastActiveElement: () => Element;
  /**
   * Returns if the window itself has focus or not
   * @stable
   */
  getWindowFocused: () => boolean;
}
interface UseActiveElementReturnType {
  activeElementReturn: UseActiveElementReturnTypeSelf;
}
/**
 * Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus
 *
 * @remarks The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes
 *
 * This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.
 *
 * If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.
 *
 * @compositeParams
 */
export declare function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument } }: UseActiveElementParameters): UseActiveElementReturnType;
interface UseLostFocusDismissParametersSelf<B extends boolean> {
  /**
   * Called when the component is dismissed by losing focus
   *
   * @nonstable
   */
  onDismissLostFocus: Nullable<(e: FocusEventTypeByTag<any>) => void>;
  /**
   * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
   */
  dismissLostFocusActive: B | false;
}
interface UseLostFocusDismissParameters<SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements, B extends boolean> {
  lostFocusDismissParameters: UseLostFocusDismissParametersSelf<B>;
  refElementSourceReturn: Nullable<Pick<UseRefElementReturnType<NonNullable<SourceElementTag>>["refElementReturn"], "getElement">>;
  refElementPopupReturn: Pick<UseRefElementReturnType<PopupElementTag>["refElementReturn"], "getElement">;
}
interface UseLostFocusDismissReturnType<_SourceElementTag extends keyof JSX.IntrinsicElements | null, _PopupElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseActiveElementParameters, "activeElementParameters", "onLastActiveElementChange"> {}
/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 */
export declare function useLostFocusDismiss<SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements, B extends boolean>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }: UseLostFocusDismissParameters<SourceElementTag, PopupElementTag, B>): UseLostFocusDismissReturnType<SourceElementTag, PopupElementTag>;
interface UseManagedChildrenContextSelf<M extends ManagedChildInfo<any>> {
  getChildren(): ManagedChildren<M>;
  managedChildrenArray: InternalChildInfo<M>;
  remoteULEChildMounted: (index: M["index"], mounted: boolean) => void;
  updateMinMax(index: number): void;
}
interface UseManagedChildrenContext<M extends ManagedChildInfo<any>> {
  managedChildContext: UseManagedChildrenContextSelf<M>;
}
/**
 * Information that children and parents use to communicate with each other.
 *
 * Other hooks will inherit from this to provide more complicated behavior.
 */
interface ManagedChildInfo<T extends string | number> {
  /**
   * A unique value representing this child.
   *
   * If a `number`, then it's like the index to an array. There can be holes/gaps, even negative numbers, but children are contiguous to a degree. There can be a child "before" or "after" this one.
   *
   * If a `string`, then it's like a key into an object. There's no well-relationship between children. You can access a known child or all children, but nothing in between.
   */
  index: T;
}
type OnChildrenMountChange<T extends string | number> = ((mounted: Set<T>, unmounted: Set<T>) => void);
type OnAfterChildLayoutEffect<T extends string | number> = ((causers: Iterable<T>) => void);
interface UseManagedChildrenParametersSelf<M extends ManagedChildInfo<any>> {
  /**
   * Runs after one or more children have updated their information (index, etc.).
   *
   * Only one will run per tick, just like layoutEffect, but it isn't
   * *guaranteed* to have actually been a change.
   *
   * TODO: This ended up not being needed by anything. Is it necessary? Does it cost anything?
   *
   * @stable
   */
  onAfterChildLayoutEffect?: Nullable<OnAfterChildLayoutEffect<M["index"]>>;
  /**
   * Same as the above, but only for mount/unmount (or when a child changes its index)
   *
   * @stable
   */
  onChildrenMountChange?: Nullable<OnChildrenMountChange<M["index"]>>;
  /**
   *
   * @stable
   */
  onChildrenCountChange?: Nullable<((count: number) => void)>;
}
interface UseManagedChildrenParameters<M extends ManagedChildInfo<any>> {
  managedChildrenParameters: UseManagedChildrenParametersSelf<M>;
}
/**
 * Basically all `use*Child` functions contain the same two parameters, plus the extras:
 *
 * `context` and `info`
 *
 * This provides them both, then you provide all the other `use*Parameters` members.
 */
interface UseGenericChildParameters<C extends {} | null, M extends {}> {
  context: C;
  info: M;
}
/**
 * Note: Child parameter types should not inherit from this unless they actually call `useManagedChild`.
 *
 * E.G. `UseRovingTabIndexChildParameters` won't extend this, even though it has `info` and `context` parameters.
 * They look similar, should there be a GenericChildParameters type that provides those?
 */
interface UseManagedChildParameters<M extends ManagedChildInfo<any>> extends UseGenericChildParameters<UseManagedChildrenContext<M> | null, M> {
  /**
   * In general, this shouldn't be null, but for convenience's sake you are allowed to, which disables all behavior, and also means `getChildren` will be `undefined`!
   */
  context: UseManagedChildrenContext<M> | null;
  /**
   * The exact data that's available from the parent/each sibling element via `getAt` or the other methods on `ManagedChildren`.
   */
  info: M;
}
interface UseManagedChildrenReturnTypeSelf<M extends ManagedChildInfo<any>> {
  /**
   * @stable
   *
   * Note that **both** `getChildren` and the `ManagedChildren` object it returns are stable!
   *
   * This is a getter instead of an object because when function calls happen out of order it's easier to just have always been passing and return getters everywhere
   */
  getChildren(): ManagedChildren<M>;
}
interface UseManagedChildrenReturnType<M extends ManagedChildInfo<any>> {
  /**
   * Returns information about the child that rendered itself with the requested key.
   *
   * **Everything about this object is stable**. E.G. `managedChildrenReturn` itself, `managedChildrenReturn.getChildren`,
   * `managedChildrenReturn.getChildren()`, and `managedChildrenReturn.getChildren().getAt`, are all stable.
   *
   * @stable
   */
  managedChildrenReturn: UseManagedChildrenReturnTypeSelf<M>;
  context: UseManagedChildrenContext<M>;
}
interface UseManagedChildReturnTypeSelf<M extends ManagedChildInfo<any>> {
  /**
   * Returns a proxy to all the information each child rendered with. The function, returned object, and every function within it are all stable.
   *
   * @stable
   */
  getChildren(): ManagedChildren<M>;
}
interface UseManagedChildReturnType<M extends ManagedChildInfo<any>> {
  managedChildReturn: UseManagedChildReturnTypeSelf<M>;
}
/**
 * Abstraction over the managed children
 */
interface ManagedChildren<M extends ManagedChildInfo<any>> {
  /**
   * Returns the `info` of the child at the specified index.
   *
   * @remarks This is the same as what's passed to `useManagedChild`.
   *
   * @stable
   */
  getAt(index: M["index"]): M | undefined;
  /**
   * Returns the highest number corresponding to a child. Inclusive. It's `while (i <= highest)`.
   *
   * @stable
   */
  getHighestIndex(): number;
  /**
   * Returns the lowest number corresponding to a child, often 0. Inclusive, but hopefully that wasn't in question.
   *
   * @stable
   */
  getLowestIndex(): number;
  /**
   * Executes a callback on every existing child.
   *
   * @stable
   */
  forEach: (f: (child: M) => void) => void | "break";
  /**
   * **UNSTABLE**,
   * also internal-use only,
   * also TODO need a workaround for this for sortable children,
   * or at least properly name it.
   *
   * WHAT THIS DOES:
   *
   * This function takes the children, slices the array containing them,
   * and, *crucially*, fills in any holes in the array with a pseudo-child that just contains an index.
   *
   * This behavior, to be clear, is only necessary for sorting and rearranging because
   * sorting and rearranging require knowing perfectly which index maps to which.
   * We don't need any other missing information in the array besides the missing index.
   *
   * @internal
   */
  _arraySlice: () => M[];
}
interface InternalChildInfo<M extends ManagedChildInfo<string | number>> {
  arr: Array<M>;
  rec: Partial<Record<M["index"], M>>;
  highestIndex: number;
  lowestIndex: number;
}
/**
 * Allows a parent component to access information about certain
 * child components once they have rendered.
 *
 * @remarks This hook is designed to be lightweight, in that the parent keeps no state
 * and runs no effects.  Each child *does* run an effect, but with no state
 * changes unless you explicitly request them.
 *
 * {@include } {@link ManagedChildren}
 *
 * @hasChild {@link useManagedChild}
 *
 * @compositeParams
 */
export declare function useManagedChildren<M extends ManagedChildInfo<string | number>>(parentParameters: UseManagedChildrenParameters<M>): UseManagedChildrenReturnType<M>;
/**
 * @compositeParams
 */
export declare function useManagedChild<M extends ManagedChildInfo<number | string>>({ context, info }: UseManagedChildParameters<M>): UseManagedChildReturnType<M>;
interface UseChildrenFlagParameters<M extends ManagedChildInfo<any>, R> {
  /**
   * Which child is considered active on mount.
   *
   * After mount, change the current active child with `changeIndex`.
   */
  initialIndex: M["index"] | null | undefined;
  /**
   * When provided, if the given activatedIndex doesn't map onto any
   * provided child (either because it's too large or that child
   * doesn't exist), the closest child to the given activatedIndex
   * will have its flag set instead.
   *
   * Use with caution, and consider how a child having its flag set
   * while the parent thinks it shouldn't be could cause issues.
   */
  closestFit: boolean;
  onClosestFit: ((newFit: number | null) => void) | null;
  getChildren(): ManagedChildren<M>;
  /**
   * Called whenever a new index is selected.
   *
   * Notably, the value can be different than what was called with changeIndex()
   * if the requested index didn't exist or was hidden.
   *
   * @stable
   */
  onIndexChange: null | OnPassiveStateChange<M["index"] | null, R>;
  /** @stable */
  setAt(index: M, value: boolean, newSelectedIndex: M["index"] | null, prevSelectedIndex: M["index"] | null): void;
  /** @stable */
  getAt(index: M): boolean;
  /** Only needed when `closestFit` is true */
  indexDemangler: Nullable<(index: M["index"]) => M["index"]>;
  /** Must be at least quasi-stable (always stable, doesn't need to be called during render) @stable */
  isValid(index: M): boolean;
}
interface UseChildrenFlagReturnType<M extends ManagedChildInfo<any>, R> {
  /**
   * @stable
   *
   * Manually changes the current index that is (focused/selected/tabbable/whatever).
   *
   * The parent can use this to notify each relevant child of what it must do in order to make this change happen.
   *
   * The returned value will be the new index that will be used. If `closestFit` is false, it will always be the same as what you passed in.
   */
  changeIndex: PassiveStateUpdater<M["index"] | null, R>;
  /**
   * @stable
   *
   * Call this whenever a child mounts/unmounts, or whenever calling a child's isValid() would change
   */
  reevaluateClosestFit: (reason: R) => void;
  /** @stable */
  getCurrentIndex: () => M["index"] | null;
}
/**
 * An extension to useManagedChildren that handles the following common case:
 * 1. You have a bunch of children
 * 2. At any given time, only 1 of them is "selected", "activated", "focusable", whatever (or 0 of them, that's cool too, just 0 or 1 though).
 * 3. The parent has control over who is "selected" via a numerical index.
 *
 * This hook allows for much easier control over selection management.
 *
 * Note that because you may want to use multiple flags with the same children, this hook *does not* use `useManagedChildren`!
 * You need to pass it the existing children, and you must pass your invocation of `useManagedChildren` the returned `onChildrenMountChange` handler!
 *
 * Also because of that, the types of this function are rather odd.  It's better to start off using a hook that already uses a flag, such as `useRovingTabIndex`, as an example.
 */
export declare function useChildrenFlag<M extends ManagedChildInfo<number | string>, R>({ getChildren, indexDemangler, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }: UseChildrenFlagParameters<M, R>): UseChildrenFlagReturnType<M, R>;
type RCMT = 'mangled' | 'demangled';
type Compare<T extends unknown> = (lhs: T, rhs: T) => number;
type GetIndex = (row: VNode) => (number | undefined);
interface UseProcessedIndexManglerParametersSelf {
  /**
   * The sorted children to render.
   */
  getIndex: GetIndex;
  getSortValueAt: (index: number) => unknown;
  compare: Nullable<Compare<unknown>>;
}
interface UseProcessedIndexManglerParameters {
  processedIndexManglerParameters: UseProcessedIndexManglerParametersSelf;
}
interface UseProcessedIndexManglerReturnType {
  context: UseProcessedIndexManglerContext;
  processedIndexManglerReturn: UseProcessedIndexManglerReturnTypeSelf;
}
interface UseProcessedIndexManglerContext {
  processedIndexManglerContext: UseProcessedIndexManglerContextSelf;
}
interface UseProcessedIndexManglerContextSelf {
  /**
   * Returns the interface for transforming indices and children.
   */
  mangler: ProcessedIndexMangler;
  /**
   * A common shortcut function that transforms a sorted index to an unsorted index.
   */
  indexDemangler: (index: number) => number;
  /**
   * A common shortcut function that transforms an unsorted index to a sorted index.
   */
  indexMangler: (index: number) => number;
}
interface UseProcessedIndexManglerReturnTypeSelf extends UseProcessedIndexManglerContextSelf {}
/**
 * @compositeParams
 */
export declare function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }: UseProcessedIndexManglerParameters): UseProcessedIndexManglerReturnType;
declare class ProcessedIndexMangler {
  private getIndex;
  private getSortValue;
  private compare;
  constructor(getIndex: (vnode: VNode) => (number | undefined), getSortValue: (index: number) => unknown, compare: Compare<unknown>);
  map(index: number | undefined, from: RCMT, to: RCMT): number | undefined;
  private _originalChildren;
  sortedChildren: (VNode | null)[];
  private _mangledToDemangled;
  private _demangledToMangled;
  setChildren(children: (VNode | null)[]): (createElement.JSX.Element | null)[];
}
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function defaultCompare(lhs: unknown | undefined, rhs: unknown | undefined): -1 | 0 | 1;
interface UseHasCurrentFocusParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
  /**
   * Whether the element itself currently has focus.
   *
   * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
   *
   * @stable
   */
  onCurrentFocusedChanged: Nullable<OnPassiveStateChange<boolean, FocusEventTypeByTag<Tag> | undefined>>;
  /**
   * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
   *
   * @see this.onFocusedChanged
   *
   * @stable
   */
  onCurrentFocusedInnerChanged: Nullable<OnPassiveStateChange<boolean, FocusEventTypeByTag<Tag> | undefined>>;
}
interface UseHasCurrentFocusParameters<Tag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRefElementReturnType<Tag>, "refElementReturn", "getElement"> {
  hasCurrentFocusParameters: UseHasCurrentFocusParametersSelf<Tag>;
}
interface UseHasCurrentFocusReturnTypeSelf<Tag extends keyof JSX.IntrinsicElements> {
  propsStable: ElementProps<Tag>;
  /**
   * Modifies the element to be able to track its own focus state
   */
  /** @stable */
  getCurrentFocused(): boolean;
  /** @stable */
  getCurrentFocusedInner(): boolean;
}
interface UseHasCurrentFocusReturnType<Tag extends keyof JSX.IntrinsicElements> {
  hasCurrentFocusReturn: UseHasCurrentFocusReturnTypeSelf<Tag>;
}
/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
export declare function useHasCurrentFocus<Tag extends keyof JSX.IntrinsicElements>(args: UseHasCurrentFocusParameters<Tag>): UseHasCurrentFocusReturnType<Tag>;
interface UseChildrenHaveFocusParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
  /**
   * Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.
   *
   * @stable
   */
  onCompositeFocusChange: null | OnPassiveStateChange<boolean, FocusEventTypeByTag<Tag> | undefined>;
}
interface UseChildrenHaveFocusParameters<Tag extends keyof JSX.IntrinsicElements> {
  childrenHaveFocusParameters: UseChildrenHaveFocusParametersSelf<Tag>;
}
interface UseChildrenHaveFocusChildReturnType<Tag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseHasCurrentFocusParameters<Tag>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {}
interface UseChildrenHaveFocusReturnTypeSelf {
  /** @stable */
  getAnyFocused(): boolean;
}
interface UseChildrenHaveFocusReturnType<Tag extends keyof JSX.IntrinsicElements> {
  childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeSelf;
  context: UseChildrenHaveFocusContext<Tag>;
}
interface UseChildrenHaveFocusContext<Tag extends keyof JSX.IntrinsicElements> {
  childrenHaveFocusChildContext: {
    /** @stable */
    setFocusCount: PassiveStateUpdater<number, FocusEventTypeByTag<Tag> | undefined>;
  };
}
interface UseChildrenHaveFocusChildParameters<Tag extends keyof JSX.IntrinsicElements> {
  context: UseChildrenHaveFocusContext<Tag>;
}
/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 *
 * @hasChild {@link useChildrenHaveFocusChild}
 *
 * @compositeParams
 */
export declare function useChildrenHaveFocus<ChildElementTag extends keyof JSX.IntrinsicElements>(args: UseChildrenHaveFocusParameters<ChildElementTag>): UseChildrenHaveFocusReturnType<ChildElementTag>;
/**
 * @compositeParams
 */
export declare function useChildrenHaveFocusChild<Tag extends keyof JSX.IntrinsicElements>({ context: { childrenHaveFocusChildContext: { setFocusCount } } }: UseChildrenHaveFocusChildParameters<Tag>): UseChildrenHaveFocusChildReturnType<Tag>;
type SetTabbableIndex = (updater: Parameters<PassiveStateUpdater<number | null, EventTypeByTag<any, any>>>[0], reason: EventTypeByTag<any, any> | undefined, fromUserInteraction: boolean) => void;
type OnTabbableIndexChange = (tabbableIndex: number | null) => void;
interface UseRovingTabIndexParametersSelf<ParentElementTag extends keyof JSX.IntrinsicElements> {
  /** When `untabbable` is true, instead of a child focusing itself, the parent will via this `focusSelf` argument. */
  focusSelfParent(e: TagToElement<ParentElementTag> | null): void;
  /**
   * This is imperative, not declarative;
   * it is better if we can keep re-renders on the parent to a minimum anyway.
   *
   * You can manually control this with `onTabbableIndexChange` and `setTabbableIndex` if you need.
   */
  initiallyTabbedIndex: Nullable<number>;
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
  onTabbableIndexChange: Nullable<OnPassiveStateChange<number | null, EventTypeByTag<any, any>>>;
}
interface UseRovingTabIndexReturnTypeSelf {
  /**
   * Can be used to programmatically change which child is the currently tabbable one.
   *
   * `fromUserInteraction` determines if this was a user-generated event that should focus the newly tabbable child,
   * or a programmatic event that should leave the user's focus where the user currently is, because they didn't do that.
   *
   * @stable
   */
  setTabbableIndex: SetTabbableIndex;
  /**
   * Returns the index of the child that is currently tabbable.
   *
   * @stable
   */
  getTabbableIndex: () => number | null;
  /**
   * Call to focus the currently tabbable child, or, if we're `untabbable`, the component itself.
   *
   * @stable
   */
  focusSelf: (reason?: any) => void;
}
interface UseRovingTabIndexChildInfo<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends ManagedChildInfo<number> {
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
  focusSelf(e: TagToElement<TabbableChildElementTag>): void;
  /**
   * Get this from `useRefElement`
   */
  getElement(): TagToElement<TabbableChildElementTag> | null;
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
interface UseRovingTabIndexParameters<ParentElementTag extends keyof JSX.IntrinsicElements, TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseRovingTabIndexChildInfo<TabbableChildElementTag>> extends TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren">, TargetedPick<UseRefElementReturnType<ParentElementTag>, "refElementReturn", "getElement">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexDemangler"> {
  /** When children mount/unmount, RTI needs access to all known children in case we unmounted the currently tabbable child */
  /** The only parameters RTI needs directly is the initial index to be tabbable */
  rovingTabIndexParameters: UseRovingTabIndexParametersSelf<ParentElementTag>;
}
interface UseRovingTabIndexReturnType<ParentElementTag extends keyof JSX.IntrinsicElements, TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseManagedChildrenParameters<UseRovingTabIndexChildInfo<TabbableChildElementTag>>, "managedChildrenParameters", "onChildrenMountChange"> {
  /** RTI runs logic when its children mount/unmount themselves */
  props: ElementProps<ParentElementTag>;
  /**
   * STABLE
   */
  context: RovingTabIndexChildContext;
  /**
   * Return information that lets the user update/query/focus the currently tabbable child
   */
  rovingTabIndexReturn: UseRovingTabIndexReturnTypeSelf;
}
type UseRovingTabIndexChildInfoKeysParameters = "index" | "untabbable";
type UseRovingTabIndexChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";
interface UseRovingTabIndexChildParameters<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends UseGenericChildParameters<RovingTabIndexChildContext, Pick<UseRovingTabIndexChildInfo<TabbableChildElementTag>, UseRovingTabIndexChildInfoKeysParameters>>, Pick<UseRefElementReturnType<TabbableChildElementTag>, "refElementReturn"> {}
interface RovingTabIndexChildContextSelf {
  untabbable: boolean;
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
  reevaluateClosestFit: (reason: EventTypeByTag<any, any> | undefined) => void;
}
interface RovingTabIndexChildContext {
  rovingTabIndexContext: RovingTabIndexChildContextSelf;
}
interface UseRovingTabIndexChildReturnTypeSelf {
  /**
   * Whether this child, individually, is *the* currently tabbable child.
   */
  tabbable: boolean;
  /**
   * @stable
   */
  getTabbable(): boolean;
}
interface UseRovingTabIndexChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseHasCurrentFocusParameters<ChildElementTag>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
  /** Return information about the tabbable state of this child */
  rovingTabIndexChildReturn: UseRovingTabIndexChildReturnTypeSelf;
  /**
   * Pass this to `useManagedChild`.
   */
  info: Pick<UseRovingTabIndexChildInfo<ChildElementTag>, UseRovingTabIndexChildInfoKeysReturnType>;
  /**
   * *Unstable*
   *
   * The props that must be applied to this child in order for this hook to work.
   *
   * The object itself, as well as the properties within it, are unstable and should be rendered by the same component that uses this hook.
   */
  props: ElementProps<ChildElementTag>;
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
export declare function useRovingTabIndex<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, processedIndexManglerReturn: { indexDemangler }, ...void1 }: UseRovingTabIndexParameters<ParentElementTag, ChildElementTag, UseRovingTabIndexChildInfo<ChildElementTag>>): UseRovingTabIndexReturnType<ParentElementTag, ChildElementTag>;
/**
 * @compositeParams
 *
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 */
export declare function useRovingTabIndexChild<ChildElementTag extends keyof JSX.IntrinsicElements>({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, untabbable: parentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }: UseRovingTabIndexChildParameters<ChildElementTag>): UseRovingTabIndexChildReturnType<ChildElementTag>;
interface UsePaginatedChildrenInfo<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElementTag>, "index"> {
  setPaginationVisible(visible: boolean): void;
  setChildCountIfPaginated(count: number): void;
}
interface UsePaginatedChildrenParametersSelf {
  paginationMin: Nullable<number>;
  paginationMax: Nullable<number>;
  childCount: Nullable<number>;
}
interface UsePaginatedChildrenParameters<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends Pick<UseManagedChildrenReturnType<UsePaginatedChildrenInfo<TabbableChildElementTag>>, "managedChildrenReturn">, TargetedPick<UseChildrenHaveFocusReturnType<TabbableChildElementTag>, "childrenHaveFocusReturn", "getAnyFocused">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexDemangler" | "indexMangler">, TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElementTag>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex"> {
  paginatedChildrenParameters: UsePaginatedChildrenParametersSelf;
}
interface UsePaginatedChildContextSelf {
  parentIsPaginated: boolean;
  getDefaultPaginationVisible(i: number): boolean;
}
interface UsePaginatedChildContext {
  paginatedChildContext: UsePaginatedChildContextSelf;
}
interface UsePaginatedChildrenReturnTypeSelf {
  /**
   * If the values returned by `indexDemangler` change (e.g. when sorting), then this must be called to re-sync everything.
   *
   * @stable
   */
  refreshPagination: (min: Nullable<number>, max: Nullable<number>) => void;
}
interface UsePaginatedChildrenReturnType {
  paginatedChildrenReturn: UsePaginatedChildrenReturnTypeSelf;
  context: UsePaginatedChildContext;
}
/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 *
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 *
 * @hasChild {@link usePaginatedChild}
 *
 * @compositeParams
 */
export declare function usePaginatedChildren<TabbableChildElementTag extends keyof JSX.IntrinsicElements>({ managedChildrenReturn: { getChildren }, paginatedChildrenParameters: { paginationMax, paginationMin, childCount }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, childrenHaveFocusReturn: { getAnyFocused }, processedIndexManglerReturn: { indexDemangler, indexMangler } }: UsePaginatedChildrenParameters<TabbableChildElementTag>): UsePaginatedChildrenReturnType;
interface UsePaginatedChildParameters {
  info: {
    index: number;
  };
  context: UsePaginatedChildContext;
}
interface UsePaginatedChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements> {
  props: ElementProps<ChildElementTag>;
  paginatedChildReturn: UsePaginatedChildReturnTypeSelf;
  info: Pick<UsePaginatedChildrenInfo<ChildElementTag>, "setPaginationVisible" | "setChildCountIfPaginated">;
}
interface UsePaginatedChildReturnTypeSelf {
  /**
   * Whether this child is part of a paginated parent component.
   */
  parentIsPaginated: boolean;
  /**
   * Whether this child should hide itself because the parent is paginated and this child is outside of the current range.
   */
  hideBecausePaginated: boolean;
}
/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
export declare function usePaginatedChild<ChildElementTag extends keyof JSX.IntrinsicElements>({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }: UsePaginatedChildParameters): UsePaginatedChildReturnType<ChildElementTag>;
interface LinearNavigationResult {
  valueDemangled: number | null;
  status: "normal" | "past-start" | "past-end";
}
interface UseLinearNavigationReturnTypeSelf {}
interface UseLinearNavigationReturnType<ParentOrChildElementTag extends keyof JSX.IntrinsicElements> {
  linearNavigationReturn: UseLinearNavigationReturnTypeSelf;
  propsStable: ElementProps<ParentOrChildElementTag>;
}
/** Arguments passed to the parent `useLinearNavigation` */
interface UseLinearNavigationParameters<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElementTag, ChildElementTag>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexMangler" | "indexDemangler">, TargetedPick<UsePaginatedChildrenParameters<ChildElementTag>, "paginatedChildrenParameters", "paginationMin" | "paginationMax"> {
  linearNavigationParameters: UseLinearNavigationParametersSelf<ChildElementTag>;
}
interface UseLinearNavigationParametersSelf<ChildElementTag extends keyof JSX.IntrinsicElements> {
  /**
   * Called when a navigation change as a result of an arrow/home/end/page up/page down key being pressed.
   *
   * @stable
   */
  onNavigateLinear: Nullable<(newIndex: number, event: KeyboardEventTypeByTag<ChildElementTag>) => void>;
  /**
   * Must return true if the child at this index can be navigated to, e.g. `(i) => !getChildren(i)?.hidden`.
   *
   * @stable
   */
  isValidForLinearNavigation(i: number): boolean;
  /**
   * Controls how many elements are skipped over when page up/down are pressed.
   *
   * ```md-literal
   * * When 0 or null: Page Up/Down are disabled
   * * When &gt;= 1: Page Up/Down moves that number of elements up or down
   * * When 0 &lt; x &lt; 1, Page Up/Down moves by that percentage of all elements, or of 100 elements, whichever is higher. In other words, 0.1 jumps by 10 elements when there are fewer then 100 elements, and 20 elements when there are 200 elements.
   * ```
   */
  pageNavigationSize: Nullable<number>;
  /**
   * What happens when `up` is pressed on the first valid child?
   *
   * @remarks If it's `"wrap"`, the focus is sent down to the last child, and the event does not propagate.
   * If it's a function, it's is called, and the event does not propagate.
   * If it's `"passthrough"`, nothing happens, **and the event is allowed to propagate**.
   */
  navigatePastStart: "passthrough" | "wrap" | (() => void);
  /**
   * What happens when `down` is pressed on the last valid child?
   *
   * @see {@link UseLinearNavigationParametersSelf.navigatePastStart}
   */
  navigatePastEnd: "passthrough" | "wrap" | (() => void);
  /**
   * Controls which arrow keys are used to navigate through the component.
   *
   * @remarks Not relative to the writing mode -- these are the literal keys that need to be pressed.
   *
   * Use `"either"` to allow navigation in either direction.
   *
   * Use `"none"` to disallow navigation with the arrow keys in any direction.
   */
  arrowKeyDirection: "horizontal" | "vertical" | "either" | "none";
  /**
   * If set to true, navigation with the home & end keys will
   * be disabled, but navigation with the arrow keys will be
   * unaffected.
   */
  disableHomeEndKeys: boolean;
  /**
   * When children are sorted, reversed, or otherwise out of order, `indexMangler` is given the `index` of a child and must return its "visual" index -- what its `index` would be at that position.
   *
   * @remarks This is provided by {@link useRearrangeableChildren}.
   * If you use this hook as part of {@link useCompleteListNavigation} or {@link useCompleteGridNavigation}, then everything's already wired up and you don't need to worry about this.
   * Otherwise, it's recommended to simply use {@link lodash-es#identity} here.
   *
   * @stable
   */
  /**
   * @see {@link UseLinearNavigationParametersSelf.indexMangler}, which does the opposite of this.
   *
   * @stable
   */
  /**
   * From `useManagedChildren`. This can be higher than the *actual* highest index if you need it to be.
   *
   * @returns [0, n], not [0, n)
   *
   * @stable
   */
  getHighestIndex(): number;
  /**
   * From `useManagedChildren`. This can be lower than the *actual* lowest index if you need it to be.
   *
   * @see {@link UseLinearNavigationParametersSelf.getLowestIndex}
   *
   * @stable
   */
  getLowestIndex(): number;
}
/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.
 *
 * @remarks There is no child version of this hook. That being said, the props returned are stable and work equally well on the child as the parent. If you don't have a parent `HTMLElement`, you can still pass the returned props to each child individually.
 *
 * @see {@link useCompleteListNavigation}, which packages everything up together.
 *
 * @compositeParams
 */
export declare function useLinearNavigation<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({ linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, processedIndexManglerReturn: { indexDemangler, indexMangler, ...void3 }, ...void1 }: UseLinearNavigationParameters<ParentOrChildElementTag, ChildElementTag>): UseLinearNavigationReturnType<ParentOrChildElementTag>;
interface TryNavigateToIndexParameters {
  lowestChildIndex: number;
  highestChildIndex: number;
  isValid(index: number): boolean;
  targetDemangled: number;
  searchDirection: 1 | -1;
  indexMangler: (n: number) => number;
  indexDemangler: (n: number) => number;
}
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }: TryNavigateToIndexParameters): LinearNavigationResult;
type SyncFunctionType<SP extends unknown[], R> = (...args: SP) => (R | undefined);
type AsyncFunctionType<AP extends unknown[], R> = ((...args: AP) => (R | Promise<R>));
interface UseAsyncParameters<AP extends unknown[], SP extends unknown[] = AP> {
  /**
   * If provided, adds a debounce behavior *in addition* to
   * the default "wait until resolved" throttling behavior.
   */
  debounce: Nullable<number>;
  /**
   * By default, `useAsync` will auto-throttle based on how long it takes
   * for the operation to complete.  If you would like there to be a
   * minimum amount of time to wait before allowing a second operation,
   * the `throttle` parameter can be used in addition to that behavior.
   *
   * `throttle` *includes* the time it takes for the async operation to finish.
   * If `throttle` is 500ms, and the async function finishes in 700ms, then
   * another one will be run immediately. If it took 100ms, then we'd wait
   * for the remaining 400ms until allowing a second run.
   */
  throttle: Nullable<number>;
  /**
   * When an async function is debounced due to one already running,
   * it will run on a delay and, as a result, the original arguments
   * that were passed to it may need to be adjusted to account for that.
   *
   * For example, during `onInput`, the `value` of that event isn't stored
   * in the event itself, it's stored in the `HTMLInputElement` that raised it.
   * So when our handler actually runs a few seconds later, it'll read the **next**
   * `event.currentTarget.value`, instead of the one from a few seconds ago
   * that actually raised the event!
   *
   * If the arguments to your handler require referencing data in the arguments
   * that may become "stale" by the time the function actually runs (generally event
   * handlers and other things that reference the properties of existing objects),
   * the `capture` parameter allows you to transform the parameters you were given
   * when the request to run was initially made into parameters that you have
   * guaranteed will still be good by the time the handler actually runs.
   *
   * @nonstable
   */
  capture: Nullable<CaptureFunctionType<AP, SP>>;
}
interface UseAsyncReturnType<SP extends unknown[], R> {
  /**
   * When the async handler is currently executing, this is true.
   * When it finishes, this becomes false.
   */
  pending: boolean;
  /**
   * True when we're waiting for a debounce or throttle to end (that's not due waiting for the async function to complete)
   */
  debouncingSync: boolean;
  /**
   * True when a second invocation of the handler has been called, and it's waiting until the first before it runs.
   */
  debouncingAsync: boolean;
  /**
   * The number of times the handler has run.
   * Does not include times where it was throttled or debounced away.
   *
   * Useful for knowing if the handler has been called yet, or for
   * setting a new timeout to show a spinner.
   */
  callCount: number;
  /**
   * The number of times the handler has settled
   * (resolved or rejected), similarly to `callCount`.
   *
   * Useful for knowing if the handler has completed even once yet,
   * or just for when the handler has finished
   */
  settleCount: number;
  /**
   * The number of times the handler has completed successfully,
   * similarly to `settleCount`.
   */
  resolveCount: number;
  /**
   * The number of times the handler has failed to complete,
   * similarly to `resolveCount`.
   */
  rejectCount: number;
  /**
   * Represents the value most recently returned from a successful handler invocation,
   * or undefined if no handler has successfully returned yet.
   *
   * If the handler rejects after having succeeded previously, then
   * `result` will still keep its value; it won't be "erased" due to the error.
   * This means that `result` and `error` can both be populated at the same time.
   *
   * @see hasResult for if `result` being `undefined` means it's unfinished or the function itself returned `undefined`.
   */
  result: R | undefined;
  /**
   * True when the most recently-run handler completed successfully,
   * also meaning that that it's returned a value that we currently have.
   *
   * While `pending` is true, **`hasResult` and `hasError` may be simultaneously true**,
   * but in all other cases they're mutually exclusive.
   */
  hasResult: boolean;
  /**
   * The error the handler threw. `undefined` otherwise, though note
   * that `undefined` is a valid thing to throw, so check `hasError` too.
   *
   * @see hasError
   */
  error: unknown;
  /**
   * Whether or not the most recent handler finished with an error.
   *
   * This is necessary because, technically, `error` can be `undefined`.
   */
  hasError: boolean;
  /**
   * What happened the last time the handler was called?
   * * `"async"`: A `Promise` was returned, and we're about to `await` it.
   * * `"sync"`: `undefined` was returned, so it finished immediately.
   * * `"throw"`: An error was thrown, so it could have been either (more likely `"sync"`, though).
   * * `null`: Nothing's happened yet.
   */
  invocationResult: "async" | "sync" | "throw" | null;
  /**
   * If you would like any currently debounced-but-eventually-pending promises to immediately be considered by cancelling their debounce timeout,
   * you can call this function.  Normal procedure applies as if the debounced ended normally -- if there's no promise waiting in the queue,
   * the debounced promise runs normally, otherwise, it waits its turn until the current one ends, potentially being overwritten later on
   * if a new promise runs out *its* debounce timer before this one got a chance to run.
   *
   * **Quasi-stable** (don't use during render)
   */
  flushDebouncedPromise: () => void;
  /**
   * The transformed version of the async handler provided,
   * now synchronous and/or throttled and/or debounced
   *
   * **Quasi-stable** (don't use during render)
   */
  syncHandler: SyncFunctionType<SP, void>;
}
/**
 * Given an async function, returns a function that's suitable for non-async APIs,
 * along with other information about the current run's status.
 *
 * @see {@link useAsyncHandler} for a version that's specialized for DOM event handlers.
 *
 * @remarks When called multiple times in quick succession, (i.e. before the handler has finished),
 * this works like Lodash's `throttle` function with the `wait` option always
 * set to however long the handler takes to complete. A second call to the sync function will be
 * throttled until the first call has finished. The return value of the function is the result
 * of the previous invocation, or `undefined` on the first call.
 *
 * The handler is only ever delayed if one is currently running, so, e.g. for iOS touch events the
 * first call happens in the same event handler (which means things like calls to `element.focus()`
 * will work as intended, since that fails when the event is "split up")
 *
 * Finally, because the sync handler may be invoked on a delay, any property references on the arguments
 * provided might be stale by the time it's actually invoked (e.g. accessing `event.currentTarget.checked`
 * is not stable across time because it's a "live" value -- you almost always want the value that it
 * had at the original time the handler was called). The `capture` option allows you to save that kind of
 * dynamic data at the time it runs; the `AP` and `SP` type parameters likewise control
 * the parameters the async handler and sync handler expect respectively.
 *
 * {@include } {@link UseAsyncParameters}
 *
 * @param asyncHandler - The async function to make sync
 * @param options - @see {@link UseAsyncParameters}
 */
export declare function useAsync<AP extends unknown[], R, SP extends unknown[] = AP>(asyncHandler: Nullable<AsyncFunctionType<AP, R>>, options?: UseAsyncParameters<AP, SP>): UseAsyncReturnType<SP, R>;
type AsyncHandler<EventType, CaptureType> = ((c: CaptureType, e: EventType) => (Promise<void> | void));
interface UseAsyncHandlerParameters<EventType, CaptureType> extends OmitStrong<UseAsyncParameters<[CaptureType, EventType], [EventType]>, "capture"> {
  /**
   * What transient information is captured by this event
   * and presented as the first argument of the event handler?
   *
   * The "capture" parameter answers this question. To implement a checkbox, for example, return `target.checked`.
   *
   * @nonstable
   */
  capture: (event: EventType) => CaptureType;
  /**
   * The function (either async or sync) that you want to convert to a regular, sync event handler.
   */
  asyncHandler: Nullable<AsyncHandler<EventType, CaptureType>>;
}
interface UseAsyncHandlerReturnType<EventType, CaptureType> extends UseAsyncReturnType<[EventType], void> {
  /**
   * The most recently captured value. In other words, represents what
   * the current value would be if this operation were synchronous and
   * and couldn't fail. It's useful to pretend this is the actual value
   * for an input field, for example, so that the value doesn't "snap
   * back" while you're waiting for the handler to finish.
   *
   * Something like `value={pending? currentCapture : value}` is good for checkboxes,
   * something like `value={(pending || hasFocus)? currentCapture : value\}` for text fields.
   *
   * @see hasCapture
   */
  currentCapture: CaptureType | undefined;
  /**
   * The above, but stable, if you need the current capture without it being an explicit dependency.
   * @stable
   */
  getCurrentCapture(): (CaptureType | undefined);
  /**
   * Because you're allowed to have `CaptureType` extend `undefined`,
   * you might need this.
   */
  hasCapture: boolean;
  /**
   * A derived property of pending, the various debounce states, and hasCapture.
   *
   * When this is true, the capture should be shown for the state of the current
   * control this async handler is used in.
   */
  shouldShowCapture: boolean;
}
/**
 * Given an asynchronous event handler, returns a synchronous one that works on the DOM,
 * along with some other information related to the current state.
 * Does not modify any props.
 *
 * @remarks Note that because the handler you provide may be called with a delay, and
 * because the `value` of, e.g., an `<input>` element will likely have changed by the
 * time the delay is over, a `capture` function is necessary in order to
 * save the relevant information from the DOM at call-time. Any other simple event data,
 * like `mouseX` or `shiftKey` can stay on the event itself and don't
 * need to be captured &ndash; it's never stale.
 *
 * The handler is automatically throttled to only run one at a time.
 * If the handler is called, and then before it finishes, is called again,
 * it will be put on hold until the current one finishes, at which point
 * the second one will run.  If the handler is called a third time before
 * the first has finished, it will *replace* the second, so only the most
 * recently called iteration of the handler will run.
 *
 *
 * You may optionally *also* specify debounce and throttle parameters that wait until the
 * synchronous handler has not been called for the specified number of
 * milliseconds, at which point we *actually* run the asynchronous handler
 * according to the logic in the previous paragraph. This is in
 * *addition* to throttling the handler, and does not replace that behavior.
 *
 *
 * @example
 * General use
 * ```tsx
 * const asyncHandler = async (value: number, e: Event) => {
 *     [...] // Ex. send to a server and setState when done
 * };
 * const {
 *     // A sync version of asyncHandler
 *     syncHandler,
 *     // True while the handler is running
 *     pending,
 *     // The error thrown, if any
 *     error,
 *     // Show this value while the operation's pending
 *     currentCapture,
 *     // And others, see `UseAsyncHandlerReturnType`
 *     ...rest
 * } = useAsyncHandler<HTMLInputElement>()({
 *     asyncHandler,
 *     // Pass in the capture function that saves event data
 *     // from being stale.
 *     capture: e => {
 *         // `capture` can have side-effects because
 *         // it's called exactly once per invocation
 *         e.preventDefault();
 *
 *         // Save this value so that it's never stale
 *         return e.currentTarget.valueAsNumber;
 *     }
 * });
 *
 * const onInput = pending? null : syncHandler;
 * ```
 *
 * {@include } {@link UseAsyncHandlerParameters}
 *
 * @see useAsync A more general version of this hook that can work with any type of handler, not just DOM event handlers.
 */
export declare function useAsyncHandler<EventType, CaptureType>({ asyncHandler, capture: originalCapture, ...restAsyncOptions }: UseAsyncHandlerParameters<EventType, CaptureType>): UseAsyncHandlerReturnType<EventType, CaptureType>;
type PressEventReason<Tag extends keyof JSX.IntrinsicElements> = MouseEventTypeByTag<Tag> | KeyboardEventTypeByTag<Tag> | TouchEventTypeByTag<Tag> | PointerEventTypeByTag<Tag>;
type PressChangeEventReason<Tag extends keyof JSX.IntrinsicElements> = MouseEventTypeByTag<Tag> | KeyboardEventTypeByTag<Tag> | TouchEventTypeByTag<Tag> | PointerEventTypeByTag<Tag> | FocusEventTypeByTag<Tag>;
interface UsePressParameters<Tag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRefElementReturnType<Tag>, "refElementReturn", "getElement"> {
  pressParameters: UsePressParametersSelf<Tag>;
}
interface UsePressParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
  /**  */
  onPressingChange: Nullable<OnPassiveStateChange<boolean, PressChangeEventReason<Tag>>>;
  /**
   * What should happen when this widget has been "pressed".
   *
   * This must be a sync event handler; async handlers must be taken care of externally.
   *
   * Setting to `null` or `undefined` effectively disables the press event handler.
   *
   * @nonstable
   */
  onPressSync: Nullable<((e: PressEventReason<Tag>) => void)>;
  /** Pass a function that returns `true` to prevent the spacebar from contributing to press events @nonstable */
  excludeSpace: Nullable<() => boolean>;
  /** Pass a function that returns `true` to prevent the enter key from contributing to press events @nonstable */
  excludeEnter: Nullable<() => boolean>;
  /** Pass a function that returns `true` to prevent the pointer (mouse, touch, etc.) from contributing to press events @nonstable */
  excludePointer: Nullable<() => boolean>;
  /**
   * Ensures that when a button is pressed it properly receives focus (even on iOS Safari).
   *
   * Generally, this should just be `e => e.focus()`
   * @param element - The element that is (presumably) about to receive focus
   *
   * @nonstable
   */
  focusSelf(element: TagToElement<Tag>): void;
  /**
   * If `true`, holding down the `Enter` key will repeatedly fire press events as each sequential repeated keyboard event happens.
   */
  allowRepeatPresses: Nullable<boolean>;
  /**
   * After this number of milliseconds have passed pressing down but not up, the returned `longPress` value will be set to `true`
   * and the user's actions will not fire an actual press event.
   */
  longPressThreshold: Nullable<number>;
}
interface UsePressReturnTypeSelf {
  /**
   * Sort of like when the CSS `:active` pseudo-element would apply,
   * but specifically for presses only, so it's a more accurate reflection
   * of what will happen for the user. Useful for styling mostly.
   */
  pressing: boolean;
  /**
   * @stable
   */
  getIsPressing(): boolean;
  /**
   * Similar to pseudoActive, but for if the button as been pressed down for a determined length of time.
   */
  longPress: boolean | null;
}
interface UsePressReturnType<Tag extends keyof JSX.IntrinsicElements> {
  pressReturn: UsePressReturnTypeSelf;
  props: ElementProps<Tag>;
}
/**
 * Adds the necessary event handlers to create a "press"-like event for
 * any element, whether it's a native &lt;button&gt; or regular &lt;div&gt;,
 * and allows for a "long press" that can be used to,
 * e.g., show a tooltip *instead* of activating a press.
 *
 * @remarks
 * Notably, the following cases are covered:
 * ```md-literal
 * * The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
 * * Double-clicks won't select text, it just presses the button twice.
 * * Text selection that happens to end/start with this element won't invoke a press.
 * * The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
 * * Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)
 * ```
 *
 * In addition, returns a "more accurate" CSS `active` and `hover`; more accurate
 * in that `hover` won't mess up mobile devices that see `hover` and mess up your click events,
 * and in that `active` accurately displays when a press would occur or not.
 *
 * {@include } {@link setPressVibrate}
 *
 * @compositeParams
 */
export declare function usePress<Tag extends keyof JSX.IntrinsicElements>(args: UsePressParameters<Tag>): UsePressReturnType<Tag>;
interface UsePressAsyncParameters<Tag extends keyof JSX.IntrinsicElements> extends OmitStrong<UsePressParameters<Tag>, "pressParameters">, TargetedOmit<UsePressParameters<Tag>, "pressParameters", "onPressSync"> {
  asyncHandlerParameters: OmitStrong<UseAsyncHandlerParameters<PressEventReason<Tag>, void>, "capture">;
}
interface UsePressAsyncReturnType<Tag extends keyof JSX.IntrinsicElements> extends UsePressReturnType<Tag> {
  asyncHandlerReturn: UseAsyncHandlerReturnType<PressEventReason<Tag>, void>;
}
export declare function usePressAsync<Tag extends keyof JSX.IntrinsicElements>({ asyncHandlerParameters: { debounce, throttle, asyncHandler }, pressParameters, refElementReturn }: UsePressAsyncParameters<Tag>): UsePressAsyncReturnType<Tag>;
/**
 * This function can be used to enable/disable button vibration pulses on an app-wide scale. `null` enables the default browser behavior; pass a noop (e.g. `() => {}`) to disable.
 *
 *
 * @param func - The function to run when a button is tapped. (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
 */
export declare function setPressVibrate(func: (() => void) | null): void;
interface UseTextContentParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
  /**
   * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
   *
   * @remarks Reminder that `element.innerText` is heavy and causes layout calculations, but respects `display:none` and such.
   * `element.textContent` is usually what you want if this is used many times across a page (like as part of a list item).
   */
  getText(e: TagToElement<Tag> | null): string | null;
  /**
   * During `useEffect`, this is called if the text content of the rendered element has changed.
   *
   * @see {@link useMutationObserver} for a more robust implementation of this idea
   */
  onTextContentChange: Nullable<OnPassiveStateChange<string | null, never>>;
}
interface UseTextContentParameters<Tag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRefElementReturnType<Tag>, "refElementReturn", "getElement"> {
  textContentParameters: UseTextContentParametersSelf<Tag>;
}
interface UseTextContentReturnTypeSelf {
  /** Returns the last known value of the element's text content */
  getTextContent: () => string | null;
}
interface UseTextContentReturnType {
  textContentReturn: UseTextContentReturnTypeSelf;
}
/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 */
export declare function useTextContent<Tag extends keyof JSX.IntrinsicElements>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }: UseTextContentParameters<Tag>): UseTextContentReturnType;
interface UseTypeaheadNavigationReturnTypeSelf {
  /** Returns the string currently typed by the user. Stable, but cannot be called during render. */
  getCurrentTypeahead(): string | null;
  /**
   * What the current status of the user's input is:
   *
   * * `"none"`: Typeahead is not in progress; the user has not typed anything (or has not for the given timeout period).
   * * `"valid"`: The string the user has typed so far corresponds to at least one child
   * * `"invalid"`: The string the user has typed so does not correspond to any child
   */
  typeaheadStatus: "invalid" | "valid" | "none";
}
interface UseTypeaheadNavigationContextSelf {
  /**
   * Stable, but don't call during render.
   *
   * @stable
   */
  excludeSpace: () => boolean;
  sortedTypeaheadInfo: Array<TypeaheadInfo>;
  insertingComparator: (lhs: string | null, rhs: TypeaheadInfo) => number;
}
interface UseTypeaheadNavigationParametersSelf<TabbableChildElementTag extends keyof JSX.IntrinsicElements> {
  /**
   * **Optional**
   *
   * Called any time the currently tabbable index changes as a result of a typeahead-related keypress
   *
   * @nonstable
   */
  onNavigateTypeahead: Nullable<(newIndex: number | null, event: KeyboardEventTypeByTag<TabbableChildElementTag>) => void>;
  /**
   * Must return true if the given child can be navigated to.
   *
   * Generally corresponds to a `hidden` or `disabled` prop.
   * @param index - Which child to query
   *
   * @nonstable
   */
  isValidForTypeaheadNavigation(index: number): boolean;
  /**
   * A collator to use when comparing.
   * If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
   *
   * @nonstable
   */
  collator: Nullable<Intl.Collator>;
  /**
   * If true, no typeahead-related processing will occur, effectively disabling this invocation of `useTypeaheadNavigation` altogether.
   */
  noTypeahead: boolean;
  /**
   * How long after the user's last typeahead-related keypress does it take for the system to reset?
   */
  typeaheadTimeout: number;
}
interface UseTypeaheadNavigationReturnType<ParentOrChildElementTag extends keyof JSX.IntrinsicElements> {
  typeaheadNavigationReturn: UseTypeaheadNavigationReturnTypeSelf;
  propsStable: ElementProps<ParentOrChildElementTag>;
  context: UseTypeaheadNavigationContext;
}
interface UseTypeaheadNavigationContext {
  typeaheadNavigationContext: UseTypeaheadNavigationContextSelf;
}
interface UseTypeaheadNavigationChildInfo<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElementTag>, "index"> {}
interface UseTypeaheadNavigationParameters<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElementTag>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex"> {
  typeaheadNavigationParameters: UseTypeaheadNavigationParametersSelf<TabbableChildElementTag>;
}
type UseTypeaheadNavigationChildInfoKeysParameters = "index";
type UseTypeaheadNavigationChildInfoKeysReturnType = never;
/** Arguments passed to the child `useTypeaheadNavigationChild` */
interface UseTypeaheadNavigationChildParameters<ChildElementTag extends keyof JSX.IntrinsicElements> extends UseGenericChildParameters<UseTypeaheadNavigationContext, Pick<UseTypeaheadNavigationChildInfo<ChildElementTag>, UseTypeaheadNavigationChildInfoKeysParameters>> {}
interface UseTypeaheadNavigationChildReturnType extends TargetedPick<UseTextContentParameters<any>, "textContentParameters", "onTextContentChange">, TargetedPick<UsePressParameters<any>, "pressParameters", "excludeSpace"> {}
interface TypeaheadInfo {
  text: string | null;
  unsortedIndex: number;
}
/**
 * Allows for the selection of a managed child by typing the given text associated with it.
 *
 * @see useListNavigation, which packages everything up together.
 *
 * @hasChild {@link useTypeaheadNavigationChild}
 *
 * @compositeParams
 */
export declare function useTypeaheadNavigation<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }: UseTypeaheadNavigationParameters<ChildElementTag>): UseTypeaheadNavigationReturnType<ParentOrChildElementTag>;
/**
 *
 * @compositeParams
 */
export declare function useTypeaheadNavigationChild<ChildElementTag extends keyof JSX.IntrinsicElements>({ info: { index, ...void1 }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, ...void4 }: UseTypeaheadNavigationChildParameters<ChildElementTag>): UseTypeaheadNavigationChildReturnType;
/**
 * Your usual binary search implementation.
 *
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array - The array to search through
 * @param wanted - The value you'd like to find
 * @param comparator - Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not.
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function binarySearch<T, U, F extends (lhs: U, rhs: T) => number>(array: T[], wanted: U, comparator: F): number;
interface UseListNavigationChildInfo<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends UseRovingTabIndexChildInfo<TabbableChildElementTag>, UseTypeaheadNavigationChildInfo<TabbableChildElementTag> {}
interface UseListNavigationParameters<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseListNavigationChildInfo<ChildElementTag>> extends OmitStrong<UseRovingTabIndexParameters<ParentOrChildElementTag, ChildElementTag, M>, "processedIndexManglerReturn">, OmitStrong<UseTypeaheadNavigationParameters<ChildElementTag>, "rovingTabIndexReturn">, OmitStrong<UseLinearNavigationParameters<ParentOrChildElementTag, ChildElementTag>, "rovingTabIndexReturn">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexDemangler" | "indexMangler"> {}
interface UseListNavigationReturnType<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements> extends OmitStrong<UseRovingTabIndexReturnType<ParentOrChildElementTag, ChildElementTag>, "props">, OmitStrong<UseTypeaheadNavigationReturnType<ParentOrChildElementTag>, "propsStable">, OmitStrong<UseLinearNavigationReturnType<ParentOrChildElementTag>, "propsStable"> {
  props: ElementProps<ParentOrChildElementTag>;
  context: UseListNavigationContext;
}
/** {@link useListNavigationChild} requires the same `info` that {@link useRovingTabIndexChild} and {@link useTypeaheadNavigationChild} do (there is no `useLinearNavigationChild`) */
type UseListNavigationChildInfoKeysParameters = UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters;
type UseListNavigationChildInfoKeysReturnType = UseRovingTabIndexChildInfoKeysReturnType | UseTypeaheadNavigationChildInfoKeysReturnType;
interface UseListNavigationChildParameters<ChildElementTag extends keyof JSX.IntrinsicElements> extends UseGenericChildParameters<UseListNavigationContext, Pick<UseListNavigationChildInfo<ChildElementTag>, UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters>>, OmitStrong<UseRovingTabIndexChildParameters<ChildElementTag>, "info" | "context">, OmitStrong<UseTypeaheadNavigationChildParameters<ChildElementTag>, "info" | "context"> {}
interface UseListNavigationContext extends RovingTabIndexChildContext, UseTypeaheadNavigationContext {}
interface UseListNavigationChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements> extends UseRovingTabIndexChildReturnType<ChildElementTag>, UseTypeaheadNavigationChildReturnType {
  info: Pick<UseListNavigationChildInfo<ChildElementTag>, UseListNavigationChildInfoKeysReturnType>;
}
/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 *
 * @remarks In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 *
 * @hasChild {@link useListNavigationChild}
 *
 * @compositeParams
 */
export declare function useListNavigation<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, ...void1 }: UseListNavigationParameters<ParentOrChildElementTag, ChildElementTag, UseListNavigationChildInfo<ChildElementTag>>): UseListNavigationReturnType<ParentOrChildElementTag, ChildElementTag>;
/**
 * @compositeParams
 */
export declare function useListNavigationChild<ChildElementTag extends keyof JSX.IntrinsicElements>({ info: { index, untabbable, ...void1 }, context, refElementReturn, ...void2 }: UseListNavigationChildParameters<ChildElementTag>): UseListNavigationChildReturnType<ChildElementTag>;
interface GridChildRowInfo<RowElementTag extends keyof JSX.IntrinsicElements> extends UseListNavigationChildInfo<RowElementTag> {}
interface GridChildCellInfo<CellElementTag extends keyof JSX.IntrinsicElements> extends UseListNavigationChildInfo<CellElementTag> {}
interface UseGridNavigationCellParametersSelf {
  /**
   * How many columns this cell spans (all cells default to 1).
   *
   * Any following cells should skip over the `index`es this one covered with its `colSpan`. E.G. if this cell is `index=5` and `colSpan=3`, the next cell would be `index=8`, **not** `index=6`
   */
  colSpan: Nullable<number>;
}
interface UseGridNavigationCellContextSelf {
  getRowIndex: () => number;
  setTabbableRow: SetTabbableIndex;
  getTabbableColumn: () => TabbableColumnInfo;
  setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventTypeByTag<any, any> | undefined>;
  setTabbableCell: SetTabbableIndex;
}
interface UseGridNavigationParametersSelf {
  /**
   * TODO: This may be called even when there is no actual change in the numeric values
   *
   * @stable
   */
  onTabbableColumnChange: Nullable<OnPassiveStateChange<TabbableColumnInfo, EventTypeByTag<any, any> | undefined>>;
  /**
   * Which column of cells is initially tabbable the first time the user interacts with the control.
   */
  initiallyTabbableColumn: number;
}
interface UseGridNavigationRowContextSelf {
  setTabbableRow: SetTabbableIndex;
  getTabbableColumn: () => TabbableColumnInfo;
  setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventTypeByTag<any, any> | undefined>;
}
interface UseGridNavigationParameters<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends GridChildRowInfo<RowElementTag>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElementTag, RowElementTag, RM>, "linearNavigationParameters">, TargetedOmit<UseListNavigationParameters<ParentOrChildElementTag, RowElementTag, RM>, "linearNavigationParameters", "arrowKeyDirection"> {
  gridNavigationParameters: UseGridNavigationParametersSelf;
}
interface UseGridNavigationReturnType<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements> extends OmitStrong<UseListNavigationReturnType<ParentOrRowElementTag, RowElementTag>, "context"> {
  context: UseGridNavigationRowContext;
}
interface UseGridNavigationRowContext extends UseListNavigationContext {
  gridNavigationRowContext: UseGridNavigationRowContextSelf;
}
type UseGridNavigationRowInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
type UseGridNavigationRowInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | "focusSelf";
type UseGridNavigationCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
type UseGridNavigationCellInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType;
interface UseGridNavigationRowParameters<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, CM extends GridChildCellInfo<CellElementTag>> extends UseGenericChildParameters<UseGridNavigationRowContext, Pick<GridChildRowInfo<RowElementTag>, UseGridNavigationRowInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<RowElementTag>, "info" | "context">, TargetedOmit<UseListNavigationParameters<RowElementTag, CellElementTag, CM>, "linearNavigationParameters", "disableHomeEndKeys" | "onNavigateLinear" | "arrowKeyDirection" | "pageNavigationSize">, TargetedOmit<UseListNavigationParameters<RowElementTag, CellElementTag, CM>, "rovingTabIndexParameters", "focusSelfParent" | "untabbableBehavior">, OmitStrong<UseListNavigationParameters<RowElementTag, CellElementTag, CM>, "processedIndexManglerReturn" | "paginatedChildrenParameters" | "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters">, TargetedPick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn", "getChildren"> {}
interface UseGridNavigationRowReturnType<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements> extends UseListNavigationChildReturnType<RowElementTag>, OmitStrong<UseListNavigationReturnType<RowElementTag, CellElementTag>, "rovingTabIndexReturn" | "context">, TargetedOmit<UseListNavigationReturnType<RowElementTag, CellElementTag>, "rovingTabIndexReturn", "focusSelf"> {
  context: UseGridNavigationCellContext;
  info: Pick<GridChildRowInfo<RowElementTag>, UseGridNavigationRowInfoKeysReturnType>;
}
interface UseGridNavigationCellParameters<CellElementTag extends keyof JSX.IntrinsicElements> extends UseGenericChildParameters<UseGridNavigationCellContext, Pick<GridChildCellInfo<CellElementTag>, UseGridNavigationCellInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<CellElementTag>, "context" | "info"> {
  gridNavigationCellParameters: UseGridNavigationCellParametersSelf;
}
interface TabbableColumnInfo {
  /** Which cell in this row is actually tabbable? */
  actual: number | null;
  /** Which column was the last column the user navigated to? */
  ideal: number | null;
}
interface UseGridNavigationCellContext extends UseListNavigationContext {
  gridNavigationCellContext: UseGridNavigationCellContextSelf;
}
interface UseGridNavigationCellReturnType<CellElementTag extends keyof JSX.IntrinsicElements> extends UseListNavigationChildReturnType<CellElementTag> {
  info: Pick<GridChildCellInfo<CellElementTag>, UseGridNavigationCellInfoKeysReturnType>;
}
/**
 * Implements 2-dimensional grid-based keyboard navigation, similarly to {@link useListNavigation}.
 *
 * @remarks Due to the complexity of this hook, it is *highly* recommended to use {@link useCompleteGridNavigation} instead.
 * But if you do need to it's designed to work well with intellisense -- just keep plugging the holes until the errors stop and that's 95% of it right there.
 *
 * Some features and/or limitations of this hook:
 *
 * ```md-literal
 * * Like all other hooks (except sorting), the only DOM restriction is that the rows and cells are descendants of the grid as a whole **somewhere**.
 * * Rows are given priority over columns. Sorting/filtering happens by row, Page Up/Down, the Home/End keys, and typeahead affect the current row, etc.
 * * Cells can have a `colSpan` or be missing, and moving with the arrow keys will "remember" the correct column to be in as focus jumps around.
 * ```
 *
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 *
 * @compositeParams
 */
export declare function useGridNavigation<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements>({ gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 }, linearNavigationParameters, ...listNavigationParameters }: UseGridNavigationParameters<ParentOrRowElementTag, RowElementTag, GridChildRowInfo<RowElementTag>>): UseGridNavigationReturnType<ParentOrRowElementTag, RowElementTag>;
/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
export declare function useGridNavigationRow<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements>({ info: { index, untabbable, ...void3 }, context: contextFromParent, linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, refElementReturn, ...void1 }: UseGridNavigationRowParameters<RowElementTag, CellElementTag, GridChildCellInfo<CellElementTag>>): UseGridNavigationRowReturnType<RowElementTag, CellElementTag>;
/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
export declare function useGridNavigationCell<CellElementTag extends keyof JSX.IntrinsicElements>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }: UseGridNavigationCellParameters<CellElementTag>): UseGridNavigationCellReturnType<CellElementTag>;
interface UseRearrangedChildrenContextSelf {}
/**
 * Unusually, this context is not passed from parent to child,
 * but from parent to a different parent.
 */
interface UseRearrangedChildrenContext extends UseProcessedIndexManglerContext {}
/**
 * A parent can call this to provide useRearrangeableChildren with the `context` it expects.
 *
 * @returns
 */
type RearrangeableChildPositionInfo = Pick<DOMRectReadOnly, "left" | "top" | "width" | "height">;
interface UseRearrangeableChildInfo<ChildElementTag extends keyof JSX.IntrinsicElements> extends ManagedChildInfo<number> {
  getElement(): TagToElement<ChildElementTag> | null;
  /**
   * This notifies the child of the position that it is currently in,
   * so that the next time it renders itself, it can use that for a FLIP animation
   */
  updateFLIPAnimation(originalPosition: RearrangeableChildPositionInfo): void;
}
type GetValid = (index: number) => boolean;
type GetHighestChildIndex = () => number;
interface UseRearrangeableChildrenParametersSelf {
  /**
   * The children to rearrange.
   */
  children: (VNode | null)[];
  /**
   * If true, moving children around will visually translate
   * them to their new position via CSS transforms.
   */
  animate: boolean;
}
/**
 * All of these functions **MUST** be stable across renders.
 */
interface UseRearrangeableChildrenParameters<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseRearrangeableChildInfo<ChildElementTag>> extends UseProcessedIndexManglerParameters, TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
  rearrangeableChildrenParameters: UseRearrangeableChildrenParametersSelf;
  context: UseRearrangedChildrenContext;
}
interface UseRearrangeableChildrenReturnType {
  rearrangeableChildrenReturn: UseRearrangeableChildrenReturnTypeSelf;
  context: UseRearrangeableChildrenContext;
}
interface UseRearrangeableChildrenContext {
  rearrangeableChildrenContext: UseRearrangeableChildrenContextSelf;
}
interface UseRearrangeableChildrenContextSelf {
  getFLIPStart(index: number): RearrangeableChildPositionInfo | undefined;
  animate: boolean;
}
interface UseRearrangeableChildrenReturnTypeSelf {
  refresh(): void;
  /**
   * Pass an array of not-sorted child information to this function
   * and the children will re-arrange themselves to match.
   *
   * @remarks This is only needed if you are implementing your own sort/reordering algorithm, just call this at the end when you're ready.
   *
   * @stable
   */
  /**
   * Arranges the children in a random order.
   *
   * @stable
   */
  /**
   * Reverses the order of the children
   *
   * @stable
   */
  /**
   * @stable
   *
   * This function takes a component's original `index` prop and outputs a new index that represents its re-arranged position.
   * In conjunction with `indexDemangler`, this can be used to perform math on indices (incrementing, decrementing, etc.)
   *
   * E.G. to decrement a component's index "c": indexDemangler(indexMangler(c) - 1)
   */
  /** @stable */
  /**
   * The transformed (i.e. rearranged) children to render.
   */
  children: (VNode | null)[];
}
interface UseRearrangeableChildParameters<ChildElementTag extends keyof JSX.IntrinsicElements> {
  info: Pick<UseRearrangeableChildInfo<ChildElementTag>, "getElement" | "index">;
  rearrangeableChildParameters: UseRearrangeableChildParametersSelf;
  context: UseRearrangeableChildrenContext;
}
interface UseRearrangeableChildParametersSelf {
  cssProperty: Nullable<'translate' | 'transform'>;
  duration: Nullable<string>;
}
/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * @remarks *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
 *
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler`
 * functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned,
 * this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.
 *
 * Besides the prop-modifying hook that's returned, the `sort` function that's returned will
 * sort all children according to their value from the `getValue` argument you pass in.
 *
 * If you want to perform some re-ordering operation that's *not* a sort, you can manually
 * re-map each child's position using `mangleMap` and `demangleMap`, which convert between
 * sorted and unsorted index positions.
 *
 * Again, unlike some other hooks, **these children must be direct descendants**. This is because
 * the prop-modifying hook inspects the given children, then re-creates them with new `key`s.
 * Because keys are given special treatment and a child has no way of modifying its own key
 * there's no other time or place this can happen other than exactly within the parent component's render function.
 *
 * @compositeParams
 */
export declare function useRearrangeableChildren<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseRearrangeableChildInfo<ChildElementTag>>({ rearrangeableChildrenParameters: { children: childrenIn, animate }, processedIndexManglerParameters: { getIndex, getSortValueAt }, managedChildrenReturn: { getChildren: getManagedChildren }, context: { processedIndexManglerContext: { mangler } } }: UseRearrangeableChildrenParameters<ChildElementTag, M>): UseRearrangeableChildrenReturnType;
interface UseRearrangeableChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements> {
  info: Pick<UseRearrangeableChildInfo<ChildElementTag>, "updateFLIPAnimation">;
}
/**
 * @compositeParams
 */
export declare function useRearrangeableChild<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseRearrangeableChildInfo<ChildElementTag>>({ context, info: { getElement, index }, rearrangeableChildParameters: { cssProperty, duration } }: UseRearrangeableChildParameters<ChildElementTag>): UseRearrangeableChildReturnType<ChildElementTag>;
interface UseStaggeredChildrenInfo extends Pick<UseRovingTabIndexChildInfo<any>, "index"> {
  setStaggeredVisible(visible: boolean): void;
  getStaggeredVisible(): boolean;
}
interface UseStaggeredChildrenParametersSelf {
  /**
   * If true, each child will delay rendering itself until the one before it has.
   */
  staggered: boolean;
  childCount: number | null;
  /**
   * @stable
   *
   * If enabled, children will mount strictly one-by-one, in order.
   *
   * If false, an IntersectionObserver tracks each element
   * and ensures it (**and all prior elements**) are loaded when it scrolls on screen.
   * This may cause lag.
   *
   * This must be false if the children are reorderable, as the staggering calculations
   * do not currently account for index mangling/demangling.
   *
   */
  disableIntersectionObserver: boolean;
}
interface UseStaggeredChildrenParameters extends Pick<UseManagedChildrenReturnType<UseStaggeredChildrenInfo>, "managedChildrenReturn"> {
  staggeredChildrenParameters: UseStaggeredChildrenParametersSelf;
}
interface UseStaggeredChildContextSelf {
  parentIsStaggered: boolean;
  childCallsThisToTellTheParentToMountTheNextOne(index: number): void;
  getDefaultStaggeredVisible(i: number): boolean;
  getIntersectionObserver(): IntersectionObserver | null;
  setElementToIndexMap(index: number, element: any): void;
}
interface UseStaggeredChildContext {
  staggeredChildContext: UseStaggeredChildContextSelf;
}
interface UseStaggeredChildrenReturnType {
  staggeredChildrenReturn: UseStaggeredChildrenReturnTypeSelf;
  context: UseStaggeredChildContext;
}
interface UseStaggeredChildrenReturnTypeSelf {
  /**
   * Whether any children are still waiting to show themselves because of the staggering behavior
   */
  stillStaggering: boolean;
}
interface UseStaggeredChildParameters<M extends UseStaggeredChildrenInfo> extends UseGenericChildParameters<UseStaggeredChildContext, Pick<M, "index">> {}
interface UseStaggeredChildReturnTypeSelf {
  /**
   * Whether the parent has indicated that all of its children, including this one, are staggered.
   */
  parentIsStaggered: boolean;
  /**
   * If this is true, you should delay showing *your* children or running other heavy logic until this becomes false.
   * Can be as simple as `<div>{hideBecauseStaggered? null : children}</div>`
   */
  hideBecauseStaggered: boolean;
  /**
   * Call this when the child mounts during useEffect (i.e. something like `useEffect(childUseEffect, [childUseEffect])`).
   *
   * This is generally passed to an inner child, if this is the outer child.
   */
  childUseEffect(): void;
}
interface UseStaggeredChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRefElementParameters<ChildElementTag>, "refElementParameters", "onElementChange"> {
  props: ElementProps<ChildElementTag>;
  staggeredChildReturn: UseStaggeredChildReturnTypeSelf;
  info: OmitStrong<UseStaggeredChildrenInfo, "index">;
}
/**
 * Allows children to each wait until the previous has finished rendering before itself rendering.
 * E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * @remarks If a child appears on-screen for 100ms then it will be forcibly displayed.
 *
 * When using the child hook, it's highly recommended to separate out any heavy logic into
 * a separate component that won't be rendered until it's de-staggered into visibility.
 *
 * @hasChild {@link useStaggeredChild}
 *
 * @compositeParams
 */
export declare function useStaggeredChildren({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered, childCount, disableIntersectionObserver } }: UseStaggeredChildrenParameters): UseStaggeredChildrenReturnType;
/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
 * logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
 *
 * @compositeParams
 */
export declare function useStaggeredChild<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseStaggeredChildrenInfo>({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } } }: UseStaggeredChildParameters<M>): UseStaggeredChildReturnType<ChildElementTag>;
interface UseProcessedChildrenReturnType<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseProcessedChildInfo<TabbableChildElementTag>> extends OmitStrong<UseRearrangeableChildrenReturnType, never>, OmitStrong<UseStaggeredChildrenReturnType, never>, OmitStrong<UsePaginatedChildrenReturnType, never> {
  context: UseProcessedChildContext<TabbableChildElementTag, M>;
}
type UseProcessedChildInfoKeysParameters = "index" | "getElement";
type UseProcessedChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";
interface UseProcessedChildParameters<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseProcessedChildInfo<TabbableChildElementTag>> extends UseGenericChildParameters<UseProcessedChildContext<TabbableChildElementTag, M>, Pick<M, UseProcessedChildInfoKeysParameters>>, OmitStrong<UsePaginatedChildParameters, "info">, OmitStrong<UseStaggeredChildParameters<M>, "info">, OmitStrong<UseRearrangeableChildParameters<TabbableChildElementTag>, "info">, Pick<UseManagedChildParameters<M>, never> {
  context: UseProcessedChildContext<TabbableChildElementTag, M>;
  info: Pick<M, UseProcessedChildInfoKeysParameters>;
}
interface UseProcessedChildContext<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseProcessedChildInfo<TabbableChildElementTag>> extends UsePaginatedChildContext, UseStaggeredChildContext, UseRearrangeableChildrenContext, UseManagedChildrenContext<M> {}
interface UseProcessedChildReturnType<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseProcessedChildInfo<TabbableChildElementTag>> extends OmitStrong<UsePaginatedChildReturnType<TabbableChildElementTag>, "info">, OmitStrong<UseStaggeredChildReturnType<TabbableChildElementTag>, "info" | "props">, Pick<UseManagedChildReturnType<M>, "managedChildReturn"> {}
interface UseProcessedChildInfo<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends UsePaginatedChildrenInfo<TabbableChildElementTag>, UseStaggeredChildrenInfo, UseRearrangeableChildInfo<TabbableChildElementTag> {}
interface UseProcessedChildrenContextSelf extends Pick<UseRovingTabIndexReturnTypeSelf, "getTabbableIndex" | "setTabbableIndex">, Pick<UseChildrenHaveFocusReturnTypeSelf, "getAnyFocused"> {}
interface UseProcessedChildrenContext extends UseRearrangedChildrenContext {
  processedChildrenContext: UseProcessedChildrenContextSelf;
}
/**
 * All of these functions **MUST** be stable across renders.
 */
interface UseProcessedChildrenParameters<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseProcessedChildInfo<TabbableChildElementTag>> extends OmitStrong<UseRearrangeableChildrenParameters<TabbableChildElementTag, M>, "managedChildrenReturn">, OmitStrong<UseStaggeredChildrenParameters, "managedChildrenReturn" | "staggeredChildrenParameters">, TargetedOmit<UseStaggeredChildrenParameters, "staggeredChildrenParameters", "childCount">, Pick<UseManagedChildrenParameters<M>, "managedChildrenParameters">, TargetedOmit<UsePaginatedChildrenParameters<TabbableChildElementTag>, "paginatedChildrenParameters", "childCount"> {
  context: UseProcessedChildrenContext;
}
/**
 * Hook that allows for optimization (staggering, pagination) and rearranging (sorting, shuffling, etc.) of large arrays of children.
 *
 * @remarks This is separate from `useManagedChildren` (and its descendants, like `useListNavigation),
 * but takes advantage of its flexibility (especially with its allowing for "holes" of missing children)
 * to prevent all children from rendering at once on mount.
 *
 * Staggering and pagination exists because no matter how well optimized your CSS and Javascript for each child is,
 * eventually some number of children will cause jank when mounting them all at once. Considering that maybe 1% of them
 * will actually be visible at first within the screen, with the other 99% wasting time doing things off-screen, it makes
 * sense to only show what's necessary at first, and delay as much as possible.
 *
 * If you're loading a dynamic list of data, where you don't know the length in advance
 * (but that it could be more than, say, 30 - 50 at any point),
 * this is all but essential for a good user experience.
 *
 * * 100 children without staggering/pagination is "start to feel jank on mobile"
 * * 1000 children without staggering/pagination is "start to feel jank on desktop"
 * * 10000 children staggered/paginated is "start to feel jank on desktop"
 * * 100000 children is "you're probably out of memory"
 *
 * <br />
 *
 * Additionally, this hook allows for reorganization of its children. A default `sort` and `shuffle` are provided,
 * but you can implement any arbitrary reordering.
 *
 * <br />
 *
 * The main limitation of this hook is that, unlike hooks that use/derive from `useManagedChildren`
 * (in which children can arbitrarily be anywhere descendant in the tree), children here ***must***
 * be in a single, sequential array (gaps are still fine).
 *
 * This is separate from `useListNavigation` and friends for performance reasons -- if a child is
 * hidden because it's paginated out or not staggered in yet, then we want to avoid running the normal
 * child list logic (which is as fast as possible, but still only so fast).
 *
 * Similarly, it can be useful for the children to be in a separate component for performance reasons, which
 * is another reason to separate this logic from `useListNavigation`.
 *
 * Finally, `useListNavigation` imposes no requirements on how your children are laid out in the DOM, but
 * this hook **requires** all children be in one contiguous array.
 *
 * @hasChild {@link useProcessedChild}
 *
 * @compositeParams
 */
export declare function useProcessedChildren<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseProcessedChildInfo<TabbableChildElementTag>>({ rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, context, managedChildrenParameters, processedIndexManglerParameters }: UseProcessedChildrenParameters<TabbableChildElementTag, M>): UseProcessedChildrenReturnType<TabbableChildElementTag, M>;
/**
 * @compositeParams
 */
export declare function useProcessedChild<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseProcessedChildInfo<TabbableChildElementTag> = UseProcessedChildInfo<TabbableChildElementTag>>({ context, info: { index, getElement, ...uinfo }, rearrangeableChildParameters, ...void1 }: UseProcessedChildParameters<TabbableChildElementTag, M>): UseProcessedChildReturnType<TabbableChildElementTag, M>;
export declare const EventDetail: unique symbol;
export type EventDetail = typeof EventDetail;
type EnhancedEventHandler<E extends Event, Detail> = (e: TargetedEnhancedEvent<E, Detail>) => void;
type TargetedEnhancedEvent<E extends Event | TargetedEnhancedEvent<any, any>, Detail> = E & {
  [EventDetail]: Detail & (E extends TargetedEnhancedEvent<any, infer D> ? D : {});
};
export declare function getEventDetail<Detail>(e: TargetedEnhancedEvent<any, Detail>): Detail;
export declare function enhanceEvent<E extends Event | EventTypeByTag<any, any> | TargetedEnhancedEvent<any, any>, Detail extends object>(e: Nullable<E>, detail: Detail): TargetedEnhancedEvent<E & Event, Detail>;
type MultiSelectChildChangeHandler<Tag extends keyof JSX.IntrinsicElements> = EnhancedEventHandler<EventTypeByTag<Tag, Event>, {
  multiSelected: boolean;
}>;
type MultiSelectChildChangeEvent<Tag extends keyof JSX.IntrinsicElements> = TargetedEnhancedEvent<EventTypeByTag<Tag, Event>, {
  multiSelected: boolean;
}>;
type MultiSelectionChangeEvent = TargetedEnhancedEvent<EventTypeByTag<any, any>, {
  selectedPercent: number;
  selectedIndices: Set<number>;
}>;
interface UseMultiSelectionContextSelf extends Pick<UseMultiSelectionParametersSelf, "multiSelectionAriaPropName" | "multiSelectionMode"> {
  notifyParentOfChildSelectChange(event: EventTypeByTag<any, any>, childIndex: number, selected: boolean | undefined, previous: boolean | undefined): void;
  /**
   * When the user presses Shift+Space or Ctrl+Space (depending on selectionMode),
   * all the items since the last selected item are toggled,
   * so the child in question needs to be able to track that.
   */
  doContiguousSelection(event: EventTypeByTag<any, any>, endIndex: number): void;
  /**
   * Mostly used for when focus-mode selects something (because by default it deselects everything else)
   */
  changeAllChildren: (event: EventTypeByTag<any, any>, shouldBeSelected: (index: number) => boolean) => void;
  getCtrlKeyDown(): boolean;
  getShiftKeyDown(): boolean;
  getAnyFocused(): boolean;
}
interface UseMultiSelectionContext {
  multiSelectionContext: UseMultiSelectionContextSelf;
}
interface UseMultiSelectionChildInfo<Tag extends keyof JSX.IntrinsicElements> extends UseRovingTabIndexChildInfo<Tag> {
  /**
   * When the parent changes all children (generally because of CTRL+A, focus-selection mode, etc.)
   * it needs to change all the child checkboxes at once.
   * It calls this function to do so.
   *
   * TODO: This should be a promise because
   * 1) It might take time for a child to change its state
   * 2) It might be impossible for a child to change itself, which is neatly represented as a rejected promise.
   *
   * But that propagates all the way to linear navigation, which is sync...
   * (and for good reasons, cause navigation shouldn't be slowed down by sending data to a server or something)
   */
  setSelectedFromParent(event: EventTypeByTag<any, any>, selected: boolean): void;
  getMultiSelected(): boolean;
  getMultiSelectionDisabled(): boolean;
}
interface UseMultiSelectionParameters<M extends UseMultiSelectionChildInfo<any>> extends TargetedPick<UseChildrenHaveFocusReturnType<any>, "childrenHaveFocusReturn", "getAnyFocused">, TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
  multiSelectionParameters: UseMultiSelectionParametersSelf;
}
interface UseMultiSelectionReturnTypeSelf {}
interface UseMultiSelectionReturnType<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseChildrenHaveFocusParameters<ChildElementTag>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
  context: UseMultiSelectionContext;
  multiSelectionReturn: UseMultiSelectionReturnTypeSelf;
  propsStable: ElementProps<ParentElementTag>;
}
type UseMultiSelectionChildInfoKeysParameters = "index";
type UseMultiSelectionChildInfoKeysReturnType = "setSelectedFromParent" | "getMultiSelected" | "getMultiSelectionDisabled";
interface UseMultiSelectionParametersSelf {
  onSelectionChange: Nullable<(e: MultiSelectionChangeEvent) => void>;
  /**
   * What causes a child to become selected?
   *
   * @remarks **`"focus"`** is **strongly** discouraged, even though it behaves like a native HTML element (e.g. like `<select size=10>`).
   *
   * Notably, in `"focus"` mode, it can be difficult to tell the difference between multi-select and single-select unless you already know that this is a multi-select control.
   *
   * Keyboard controls in `"activation"` mode don't differ strongly from the usual conventions of "navigate to a thing, press Space to activate it".
   * However, because the `"focus"` mode controls are extremely unintuitive, all controls are documented here:
   *
   * ```md-literal
   *
   * * In either mode, navigation/selection has the usual keyboard controls (arrow keys, space/enter, page up/down, home/end, mouse clicks, pointer events, etc.)
   * * In either mode, <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all items.
   * * In either mode, holding <kbd>Shift</kbd> while changing selection will extend the current selection to include the new item and any items in between.
   * * Exclusive to `"focus"` mode:
   *     * Navigating to a new item will automatically select it.
   *         * To navigate **without** selecting a new item, hold <kbd>Ctrl</kbd>.
   *             * Any item navigated to in this way can be selected by pressing <kbd>Space</kbd>/<kbd>Enter</kbd> as usual, but...
   *     * Selecting a new item (whether via navigation or pressing <kbd>Space</kbd> or <kbd>Enter</kbd>) will **deselect all other items** unless <kbd>Ctrl</kbd> is held.
   * ```
   */
  multiSelectionMode: "focus" | "activation" | "disabled";
  /**
   * What property will be used to mark this item as selected.
   *
   * TODO: No compelling use-case for aria-current in multi-select? Just in case: | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`
   */
  multiSelectionAriaPropName: Nullable<`aria-${"pressed" | "selected" | "checked"}`>;
}
interface UseMultiSelectionChildParameters<Tag extends keyof JSX.IntrinsicElements, M extends UseMultiSelectionChildInfo<Tag>> extends UseGenericChildParameters<UseMultiSelectionContext, Pick<M, UseMultiSelectionChildInfoKeysParameters>> {
  multiSelectionChildParameters: UseMultiSelectionChildParametersSelf<Tag>;
  context: UseMultiSelectionContext;
}
interface UseMultiSelectionChildParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
  /**
   * Called when the child is requesting to change whether it's selected or not (generally because the user clicked it)
   *
   * @remarks To comply with the child's request, you should either:
   *
   * ```md-literal
   * * Change the `selected` parameter to true (probably by calling `setState` somewhere) if this is declaratively controlled (most cases).
   * * Call `changeSelected`, if this is imperatively controlled.
   * ```
   */
  onMultiSelectChange: Nullable<(e: MultiSelectChildChangeEvent<Tag>) => void>;
  initiallyMultiSelected: boolean | null;
  /** When true, this child cannot be selected via multi-select, either by focusing it or by clicking it. */
  multiSelectionDisabled: boolean;
}
interface UseMultiSelectionChildReturnType<Tag extends keyof JSX.IntrinsicElements, M extends UseMultiSelectionChildInfo<Tag>> extends TargetedPick<UseHasCurrentFocusParameters<Tag>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
  multiSelectionChildReturn: UseMultiSelectionChildReturnTypeSelf;
  props: ElementProps<Tag>;
  info: Pick<M, UseMultiSelectionChildInfoKeysReturnType>;
}
interface UseMultiSelectionChildReturnTypeSelf extends Pick<Required<UseMultiSelectionContextSelf>, "multiSelectionMode"> {
  /**
   * @stable
   */
  changeMultiSelected(event: EventTypeByTag<any, any>, selected: boolean): void;
  /**
   * Indicates that this child is selected, according to itself.
   */
  multiSelected: boolean;
  /**
   * @stable
   */
  getMultiSelected(): boolean;
  /**
   * When the parent's `multiSelectionMode` is "activation",
   * then the consumer is responsible for calling this function
   * when whatever you define as "activation" occurs. Generally,
   * this is a click or press event (from `usePress`).
   *
   * Calling this function will indirectly call
   * `onMultiSelectChange`, which is generally hooked up to
   * `changeMultiSelected`.
   *
   * This is not necessary in the "focus" selection mode, though
   * it's not recommended to use "focus" mode for multi-selection
   * anyway.
   */
  firePressSelectionEvent: (e: Event) => void;
}
/**
 * Allows a parent to track the changes made to multi-selection children.
 *
 * @remarks Beyond just giving each child the ability to track its own selected state, the parent can change all children at once.
 * Pressing <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all children, for example.
 *
 * This is not exclusive with {@link useSingleSelection}, you can use both at once if you have a use case for it.
 *
 * @hasChild {@link useMultiSelectionChild}
 *
 * @compositeParams
 */
export declare function useMultiSelection<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({ multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 }, managedChildrenReturn: { getChildren, ...void1 }, childrenHaveFocusReturn: { getAnyFocused, ...void4 }, ...void2 }: UseMultiSelectionParameters<UseMultiSelectionChildInfo<any>>): UseMultiSelectionReturnType<ParentOrChildElementTag, ChildElementTag>;
/**
 *
 * @compositeParams
 */
export declare function useMultiSelectionChild<Tag extends keyof JSX.IntrinsicElements>({ info: { index, ...void4 }, multiSelectionChildParameters: { initiallyMultiSelected, onMultiSelectChange, multiSelectionDisabled, ...void1 }, context: { multiSelectionContext: { notifyParentOfChildSelectChange, multiSelectionAriaPropName, multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }: UseMultiSelectionChildParameters<Tag, UseMultiSelectionChildInfo<Tag>>): UseMultiSelectionChildReturnType<Tag, UseMultiSelectionChildInfo<Tag>>;
interface UseMultiSelectionChildDeclarativeReturnType<Tag extends keyof JSX.IntrinsicElements, M extends UseMultiSelectionChildInfo<Tag>> extends TargetedPick<UseMultiSelectionChildParameters<Tag, M>, "multiSelectionChildParameters", "onMultiSelectChange"> {
  info: Pick<M, "setSelectedFromParent">;
}
interface UseMultiSelectionChildDeclarativeParameters<Tag extends keyof JSX.IntrinsicElements, M extends UseMultiSelectionChildInfo<Tag>> extends TargetedPick<UseMultiSelectionChildReturnType<Tag, M>, "multiSelectionChildReturn", "changeMultiSelected"> {
  multiSelectionChildDeclarativeParameters: {
    multiSelected: boolean | null;
    onMultiSelectedChange: Nullable<(e: MultiSelectChildChangeEvent<Tag>) => void>;
  };
}
type MakeMultiSelectionChildDeclarativeParameters<P extends UseMultiSelectionChildParameters<any, any>> = OmitStrong<P, "multiSelectionChildParameters"> & UseMultiSelectionChildDeclarativeParameters<any, any> & TargetedPick<UseMultiSelectionChildParameters<any, any>, "multiSelectionChildParameters", "multiSelectionDisabled">;
type MakeMultiSelectionChildDeclarativeReturnType<R extends UseMultiSelectionChildReturnType<any, any>> = OmitStrong<R, "multiSelectionChildReturn"> & TargetedOmit<UseMultiSelectionChildReturnType<any, any>, "multiSelectionChildReturn", "changeMultiSelected">;
/**
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMultiSelectionChildDeclarative<Tag extends keyof JSX.IntrinsicElements>({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 }, multiSelectionChildReturn: { changeMultiSelected, ...void2 }, ...void1 }: UseMultiSelectionChildDeclarativeParameters<Tag, UseMultiSelectionChildInfo<Tag>>): UseMultiSelectionChildDeclarativeReturnType<Tag, UseMultiSelectionChildInfo<Tag>>;
/** Anything that's selectable must be tabbable, so we DO use rovingTabIndex instead of just managedChildren */
interface UseSingleSelectionChildInfo<Tag extends keyof JSX.IntrinsicElements> extends UseRovingTabIndexChildInfo<Tag> {
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
}
type SingleSelectionChangeHandler = EnhancedEventHandler<Event, {
  selectedIndex: number;
}>;
type SingleSelectionChangeEvent = TargetedEnhancedEvent<Event, {
  selectedIndex: number;
}>;
interface UseSingleSelectionParametersSelf {
  /**
   * This is imperative, as opposed to declarative,
   * to save on re-rendering the parent whenever the selected index changes.
   */
  initiallySingleSelectedIndex: Nullable<number>;
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
  onSingleSelectedIndexChange: Nullable<SingleSelectionChangeHandler>;
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
interface UseSingleSelectionReturnTypeSelf {
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
  changeSingleSelectedIndex: PassiveStateUpdater<number | null, SingleSelectionChangeEvent>;
  /**
   * @stable
   */
  getSingleSelectedIndex(): number | null;
}
interface UseSingleSelectionChildReturnTypeSelf extends Pick<Required<SingleSelectionContextSelf>, "singleSelectionMode"> {
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
  /**
   * When `singleSelectionMode` is "activation", then the consumer
   * is responsible for calling this function when whatever you
   * define as "activation" occurs. Generally, this is a click
   * or press event (from `usePress`).
   *
   * Calling this function will indirectly call
   * `onSingleSelectedIndexChange` on the parent. When you hook
   * that up to a `setState` that updates the `singleSelectedIndex`,
   * then this child's selected status will update.
   *
   * This is not necessary in the "focus" selection mode, as the
   * focus handler is quite capable of firing the event itself.
   */
  firePressSelectionEvent: (e: Event) => void;
}
interface UseSingleSelectionParameters<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseSingleSelectionChildInfo<ChildElementTag>> extends TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren">, TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElementTag, ChildElementTag>, "rovingTabIndexReturn", "setTabbableIndex"> {
  singleSelectionParameters: UseSingleSelectionParametersSelf;
}
type UseSingleSelectionChildInfoKeysParameters = "index" | "untabbable";
type UseSingleSelectionChildInfoKeysReturnType = "getSingleSelected" | "setLocalSingleSelected" | "singleSelected";
interface UseSingleSelectionChildParametersSelf {
  /** When true, this child cannot be selected via single-select, either by focusing it or by clicking it. */
  singleSelectionDisabled: boolean;
}
interface UseSingleSelectionChildParameters<Tag extends keyof JSX.IntrinsicElements, M extends UseSingleSelectionChildInfo<Tag>> extends UseGenericChildParameters<UseSingleSelectionContext, Pick<M, UseSingleSelectionChildInfoKeysParameters>> {
  singleSelectionChildParameters: UseSingleSelectionChildParametersSelf;
}
interface UseSingleSelectionChildReturnType<Tag extends keyof JSX.IntrinsicElements, M extends UseSingleSelectionChildInfo<Tag>> extends UseChildrenHaveFocusChildReturnType<Tag> {
  props: ElementProps<Tag>;
  info: Pick<M, UseSingleSelectionChildInfoKeysReturnType>;
  singleSelectionChildReturn: UseSingleSelectionChildReturnTypeSelf;
}
interface UseSingleSelectionReturnType<ChildElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseChildrenHaveFocusParameters<ChildElementTag>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
  singleSelectionReturn: UseSingleSelectionReturnTypeSelf;
  context: UseSingleSelectionContext;
}
interface SingleSelectionContextSelf extends RequiredN<Pick<UseSingleSelectionParametersSelf, "singleSelectionMode" | "onSingleSelectedIndexChange">>, Pick<UseSingleSelectionParametersSelf, "singleSelectionAriaPropName"> {
  getSingleSelectedIndex(): number | null;
}
interface UseSingleSelectionContext {
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
export declare function useSingleSelection<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 }, ...void4 }: UseSingleSelectionParameters<ParentOrChildElementTag, ChildElementTag, UseSingleSelectionChildInfo<ChildElementTag>>): UseSingleSelectionReturnType<ChildElementTag>;
/**
 *
 *
 * @compositeParams
 */
export declare function useSingleSelectionChild<ChildElementTag extends keyof JSX.IntrinsicElements>({ singleSelectionChildParameters: { singleSelectionDisabled, ...void5 }, context: { singleSelectionContext: { getSingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName: ariaPropName, singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }: UseSingleSelectionChildParameters<ChildElementTag, UseSingleSelectionChildInfo<ChildElementTag>>): UseSingleSelectionChildReturnType<ChildElementTag, UseSingleSelectionChildInfo<ChildElementTag>>;
interface UseSingleSelectionDeclarativeParametersSelf extends Pick<UseSingleSelectionParametersSelf, "onSingleSelectedIndexChange"> {
  singleSelectedIndex: Nullable<number>;
}
interface UseSingleSelectionDeclarativeParameters<ChildElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseSingleSelectionReturnType<ChildElementTag>, "singleSelectionReturn", "changeSingleSelectedIndex"> {
  singleSelectionDeclarativeParameters: UseSingleSelectionDeclarativeParametersSelf;
}
type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters<any> & TargetedPick<UseSingleSelectionParameters<any, any, any>, "singleSelectionParameters", "singleSelectionAriaPropName" | "singleSelectionMode">;
type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn"> & TargetedOmit<UseSingleSelectionReturnType<any>, "singleSelectionReturn", "changeSingleSelectedIndex">;
/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export declare function useSingleSelectionDeclarative<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({ singleSelectionReturn: { changeSingleSelectedIndex }, singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange } }: UseSingleSelectionDeclarativeParameters<ChildElementTag>): {
  singleSelectionParameters: {
    onSingleSelectedIndexChange: (e: TargetedEnhancedEvent<Event, {
      selectedIndex: number;
    }>) => void | undefined;
  };
};
interface UseSelectionChildInfo<Tag extends keyof JSX.IntrinsicElements> extends UseSingleSelectionChildInfo<Tag>, UseMultiSelectionChildInfo<Tag> {}
type UseSelectionChildInfoKeysParameters = UseSingleSelectionChildInfoKeysParameters | UseMultiSelectionChildInfoKeysParameters;
type UseSelectionChildInfoKeysReturnType = UseSingleSelectionChildInfoKeysReturnType | UseMultiSelectionChildInfoKeysReturnType;
interface UseSelectionContext extends UseSingleSelectionContext, UseMultiSelectionContext {}
interface UseSelectionChildReturnTypeSelf {
  /**
   * When the parent's as an "activation" selection mode,
   * (for either single- or multi-select)
   * then the consumer is responsible for calling this function
   * when whatever you define as "activation" occurs. Generally,
   * this is a click or press event (from `usePress`).
   *
   * This is not necessary in the "focus" selection mode, though
   * it's not recommended to use "focus" mode for multi-selection
   * anyway.
   */
  firePressSelectionEvent: (e: Event) => void;
}
interface UseSelectionParameters<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseSelectionChildInfo<ChildElementTag>> extends UseSingleSelectionParameters<ParentOrChildElementTag, ChildElementTag, M>, UseMultiSelectionParameters<M> {}
interface UseSelectionReturnType<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements> extends ExtendMerge<UseSingleSelectionReturnType<ParentElementTag>, UseMultiSelectionReturnType<ParentElementTag, ChildElementTag>> {
  context: UseSelectionContext;
}
interface UseSelectionChildParameters<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseSelectionChildInfo<ChildElementTag>> extends UseGenericChildParameters<UseSelectionContext, Pick<M, UseSelectionChildInfoKeysParameters>>, OmitStrong<UseSingleSelectionChildParameters<ChildElementTag, M>, "info" | "context">, OmitStrong<UseMultiSelectionChildParameters<ChildElementTag, M>, "info" | "context"> {}
interface UseSelectionChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseSelectionChildInfo<ChildElementTag>> extends ExtendMerge<OmitStrong<UseMultiSelectionChildReturnType<ChildElementTag, M>, "multiSelectionChildReturn">, OmitStrong<UseSingleSelectionChildReturnType<ChildElementTag, M>, "singleSelectionChildReturn">>, TargetedOmit<UseMultiSelectionChildReturnType<ChildElementTag, M>, "multiSelectionChildReturn", "firePressSelectionEvent">, TargetedOmit<UseSingleSelectionChildReturnType<ChildElementTag, M>, "singleSelectionChildReturn", "firePressSelectionEvent"> {
  selectionChildReturn: UseSelectionChildReturnTypeSelf;
}
/**
 * Allows the children of this component to be selected, either with a `singleSelectedIndex` prop on the parent, or via each child's individual `multiSelected` prop.
 *
 * @remarks Single-selection and multi-selection are not mutually exclusive, though the cases where you would want both are uncommon.
 *
 * Most of the time, you'll want to pick and choose one mode to work with:
 *
 * ```md-literal
 * * Single-selection is controlled by the parent -- it receives a `singleSelectedIndex` parameter that represents the currently selected child and handles all the logic related to coordinating the deselection of the old child.
 * * Multi-selection is controlled by each individual child -- they have a `multiSelected` parameter that can be optionally reported back to the parent (so it can show the % of all children selected, or similar)
 * ```
 *
 * @see {@link useSingleSelection}
 * @see {@link useMultiSelection}
 *
 * @hasChild {@link useSelectionChild}
 *
 * @compositeParams
 */
export declare function useSelection<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }: UseSelectionParameters<ParentOrChildElementTag, ChildElementTag, UseSelectionChildInfo<ChildElementTag>>): UseSelectionReturnType<ParentOrChildElementTag, ChildElementTag>;
/**
 *
 * @compositeParams
 */
export declare function useSelectionChild<ChildElementTag extends keyof JSX.IntrinsicElements>({ context, info: { index, untabbable, ...void2 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void3 }: UseSelectionChildParameters<ChildElementTag, UseSelectionChildInfo<ChildElementTag>>): UseSelectionChildReturnType<ChildElementTag, UseSelectionChildInfo<ChildElementTag>>;
type MakeSelectionDeclarativeParameters<P> = MakeSingleSelectionDeclarativeParameters<P>;
type MakeSelectionDeclarativeReturnType<R> = MakeSingleSelectionDeclarativeReturnType<R>;
type MakeSelectionDeclarativeChildParameters<P extends UseMultiSelectionChildParameters<any, any>> = MakeMultiSelectionChildDeclarativeParameters<P>;
type MakeSelectionDeclarativeChildReturnType<R extends UseMultiSelectionChildReturnType<any, any>> = MakeMultiSelectionChildDeclarativeReturnType<R>;
interface UseSelectionDeclarativeParameters<ChildElementTag extends keyof JSX.IntrinsicElements> extends UseSingleSelectionDeclarativeParameters<ChildElementTag> {}
interface UseSelectionChildDeclarativeParameters<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseSelectionChildInfo<ChildElementTag>> extends UseMultiSelectionChildDeclarativeParameters<ChildElementTag, M> {}
/**
 * @compositeParams
 */
export declare function useSelectionDeclarative<ChildElementTag extends keyof JSX.IntrinsicElements>(args: UseSelectionDeclarativeParameters<ChildElementTag>): {
  singleSelectionParameters: {
    onSingleSelectedIndexChange: (e: TargetedEnhancedEvent<Event, {
      selectedIndex: number;
    }>) => void | undefined;
  };
};
/**
 * @compositeParams
 */
export declare function useSelectionChildDeclarative<ChildElementTag extends keyof JSX.IntrinsicElements>(args: UseSelectionChildDeclarativeParameters<ChildElementTag, UseSelectionChildInfo<ChildElementTag>>): UseMultiSelectionChildDeclarativeReturnType<ChildElementTag, UseMultiSelectionChildInfo<ChildElementTag>>;
type DismissListenerTypes = "backdrop" | "lost-focus" | "escape";
interface UseDismissParametersSelf<Listeners extends DismissListenerTypes> {
  /**
   * Controls all dismiss behaviors at once.
   *
   * @remarks When this is `true`, any of the dismiss behaviors are able to be triggered.
   * When this is `false`, no dismiss behaviors are able to be triggered.
   */
  dismissActive: boolean;
  /**
   * Called any time the user has requested the component be dismissed for the given reason.
   *
   * @remarks You can choose to ignore a reason if you want, but it's better to set `closeOn${reason}` to `false` instead.
   *
   * @nonstable
   */
  onDismiss: (e: EventTypeByTag<any, any>, reason: Listeners) => void;
}
interface UseDismissParameters<Listeners extends DismissListenerTypes> extends TargetedOmit<UseEscapeDismissParameters<any, Listeners extends "escape" ? true : false>, "escapeDismissParameters", "getDocument">, TargetedOmit<UseBackdropDismissParameters<any, Listeners extends "backdrop" ? true : false>, "backdropDismissParameters", never>, TargetedOmit<UseLostFocusDismissParameters<any, any, Listeners extends "lost-focus" ? true : false>, "lostFocusDismissParameters", never>, UseActiveElementParameters {
  dismissParameters: UseDismissParametersSelf<Listeners>;
}
interface UseDismissReturnType<SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements> {
  /**
   * If this dismissible component has a specific element that caused it to appear (a button, for example),
   * provide it with these props.
   *
   * * REQUIRED for things like menus that pop up from a button and for whom losing focus counts as requesting closure.
   * * OPTIONAL for things like dialogs that can appear out of nowhere and for whom losing focus is actively impossible (due to focus traps).
   */
  refElementSourceReturn: Pick<UseRefElementReturnType<NonNullable<SourceElementTag>>, "refElementReturn">["refElementReturn"];
  /**
   * This one's always required though
   */
  refElementPopupReturn: Pick<UseRefElementReturnType<PopupElementTag>, "refElementReturn">["refElementReturn"];
  propsStableSource: ElementProps<NonNullable<SourceElementTag>>;
  propsStablePopup: ElementProps<NonNullable<PopupElementTag>>;
}
/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 */
export declare function useDismiss<Listeners extends DismissListenerTypes, SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements>({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }: UseDismissParameters<Listeners>): UseDismissReturnType<SourceElementTag, PopupElementTag>;
interface UseBlockingElementParametersSelf<Tag extends keyof JSX.IntrinsicElements> {
  enabled: boolean;
  getTarget(): (TagToElement<Tag> | null);
}
interface UseBlockingElementParameters<Tag extends keyof JSX.IntrinsicElements> extends UseActiveElementParameters {
  blockingElementParameters: UseBlockingElementParametersSelf<Tag>;
}
interface UseBlockingElementReturnType {
  getTop: () => HTMLElement | null;
  getLastActiveWhenClosed: () => HTMLElement | null;
  getLastActiveWhenOpen: () => HTMLElement | null;
}
/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 *
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 *
 * @param target
 */
export declare function useBlockingElement<Tag extends keyof JSX.IntrinsicElements>({ activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }: UseBlockingElementParameters<Tag>): UseBlockingElementReturnType;
export declare function getTopElement(): HTMLElement | null;
interface UseFocusTrapParametersSelf<SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements> {
  /**
   * Whether or not the focus trap is currently active (or, when used as part of a larger component, whether it is activatable)
   */
  trapActive: boolean;
  /**
   * If true, focus is not trapped but only moved to the new element.
   */
  onlyMoveFocus: boolean;
  /**
   * This function is called to find where focus should be sent when the dialog (or menu, popup, etc.) opens.
   *
   * @remarks This **cannot be done deterministically** across all possible scenarios because this is about what makes the most sense as a human.
   *
   * For example, if it's a confirmation dialog about deleting something, *it's best to send focus to the "cancel" button*,
   * but there's no way to programmatically know both a) that should be done and b) how to do it.
   *
   * Ideally this function is specified *manually* for every dialog you create.
   *
   * If you really, really, ***genuinely*** cannot determine what should be done in your use case,
   * as a very very last resort, use `findFirstFocusable`, and then if nothing's found focus the body.
   *
   * Just please, please make sure that whatever that first focusable is **isn't** a destructive action, at the very least.
   *
   * @nonstable
   */
  focusPopup(e: TagToElement<PopupElementTag>, findFirstFocusable: () => HTMLOrSVGElement | null): void;
  /**
   * When the focus trap has deactivated, focus must be sent back to the element that opened it.
   *
   * @remarks This is tracked for you; by default, just call `lastFocused?.focus()`, but you can also override this behavior
   * and just do whatever you want with any element.
   *
   * @param lastFocused - The element that was focused before the modal was opened
   *
   * @nonstable
   */
  focusOpener(lastFocused: TagToElement<NonNullable<SourceElementTag>> | null): void;
}
interface UseFocusTrapParameters<SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRefElementReturnType<NonNullable<PopupElementTag>>, "refElementReturn", "getElement">, OmitStrong<UseBlockingElementParameters<NonNullable<SourceElementTag>>, "blockingElementParameters"> {
  focusTrapParameters: UseFocusTrapParametersSelf<SourceElementTag, PopupElementTag>;
}
interface UseFocusTrapReturnType<Tag extends keyof JSX.IntrinsicElements> {
  props: ElementProps<Tag>;
}
/**
 * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
 *
 * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)?
 * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
 *
 * @compositeParams
 */
export declare function useFocusTrap<SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements>({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, activeElementParameters, refElementReturn }: UseFocusTrapParameters<SourceElementTag, PopupElementTag>): UseFocusTrapReturnType<PopupElementTag>;
/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 */
export declare function findFirstFocusable<T extends Node>(element: T): T | null;
/**
 * Returns the first tabbable element contained within the given node, or null if none are found.
 */
export declare function findFirstTabbable<T extends Node>(element: T): T | null;
interface UseListNavigationSelectionChildInfo<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends UseListNavigationChildInfo<TabbableChildElementTag>, UseSelectionChildInfo<TabbableChildElementTag> {}
interface UseListNavigationSelectionChildContext extends UseListNavigationContext, UseSelectionContext {}
interface UseListNavigationSelectionParameters<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseListNavigationSelectionChildInfo<ChildElementTag>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElementTag, ChildElementTag, M>, "rovingTabIndexParameters">, TargetedOmit<UseListNavigationParameters<ParentOrChildElementTag, ChildElementTag, M>, "rovingTabIndexParameters", "initiallyTabbedIndex">, OmitStrong<UseSelectionParameters<ParentOrChildElementTag, ChildElementTag, M>, "rovingTabIndexReturn"> {}
interface UseListNavigationSelectionReturnType<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements> extends OmitStrong<UseListNavigationReturnType<ParentOrChildElementTag, ChildElementTag>, "props">, OmitStrong<UseSelectionReturnType<ParentOrChildElementTag, ChildElementTag>, "propsStable"> {
  context: UseListNavigationSelectionChildContext;
  props: ElementProps<ParentOrChildElementTag>;
}
type UseListNavigationSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSelectionChildInfoKeysParameters;
type UseListNavigationSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
interface UseListNavigationSelectionChildParameters<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseListNavigationSelectionChildInfo<ChildElementTag>> extends UseGenericChildParameters<UseListNavigationSelectionChildContext, Pick<UseListNavigationSelectionChildInfo<ChildElementTag>, UseListNavigationSelectionChildInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<ChildElementTag>, "context" | "info">, OmitStrong<UseSelectionChildParameters<ChildElementTag, M>, "context" | "info"> {}
interface UseListNavigationSelectionChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseListNavigationSelectionChildInfo<ChildElementTag>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElementTag>, UseSelectionChildReturnType<ChildElementTag, M>>, "props"> {
  propsTabbable: ElementProps<any>;
  propsChild: ElementProps<any>;
}
/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
export declare function useListNavigationSelection<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void3 }: UseListNavigationSelectionParameters<ParentOrChildElementTag, ChildElementTag, UseListNavigationSelectionChildInfo<ChildElementTag>>): UseListNavigationSelectionReturnType<ParentOrChildElementTag, ChildElementTag>;
/**
 * @compositeParams
 */
export declare function useListNavigationSelectionChild<ChildElementTag extends keyof JSX.IntrinsicElements>({ info: { index, untabbable, ...void2 }, context, refElementReturn, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseListNavigationSelectionChildParameters<ChildElementTag, UseListNavigationSelectionChildInfo<ChildElementTag>>): UseListNavigationSelectionChildReturnType<ChildElementTag, UseListNavigationSelectionChildInfo<ChildElementTag>>;
type UseGridNavigationSelectionRowInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;
type UseGridNavigationSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
type UseGridNavigationSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
type UseGridNavigationSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;
interface GridSelectChildRowInfo<RowElementTag extends keyof JSX.IntrinsicElements> extends GridChildRowInfo<RowElementTag>, UseSelectionChildInfo<RowElementTag> {}
interface GridSelectChildCellInfo<CellElementTag extends keyof JSX.IntrinsicElements> extends GridChildCellInfo<CellElementTag> {}
interface UseGridNavigationSelectionParameters<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends GridSelectChildRowInfo<RowElementTag>> extends OmitStrong<UseGridNavigationParameters<ParentOrRowElementTag, RowElementTag, RM>, "rovingTabIndexParameters">, TargetedOmit<UseGridNavigationParameters<ParentOrRowElementTag, RowElementTag, RM>, "rovingTabIndexParameters", "initiallyTabbedIndex">, OmitStrong<UseSelectionParameters<ParentOrRowElementTag, RowElementTag, RM>, "rovingTabIndexReturn"> {}
interface UseGridNavigationSelectionReturnType<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements> extends UseGridNavigationReturnType<ParentOrRowElementTag, RowElementTag>, OmitStrong<UseSelectionReturnType<ParentOrRowElementTag, RowElementTag>, "propsStable"> {
  context: UseGridNavigationRowSelectionContext;
}
interface UseGridNavigationRowSelectionContext extends UseGridNavigationRowContext, UseSelectionContext {}
interface UseGridNavigationCellSelectionContext extends UseGridNavigationCellContext {}
interface UseGridNavigationSelectionRowParameters<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends GridSelectChildRowInfo<RowElementTag>, CM extends GridSelectChildCellInfo<CellElementTag>> extends UseGenericChildParameters<UseGridNavigationRowSelectionContext, Pick<GridSelectChildRowInfo<RowElementTag>, UseGridNavigationSelectionRowInfoKeysParameters>>, OmitStrong<UseGridNavigationRowParameters<RowElementTag, CellElementTag, CM>, "info" | "context">, OmitStrong<UseSelectionChildParameters<RowElementTag, RM>, "info" | "context"> {
  info: Pick<GridSelectChildRowInfo<RowElementTag>, UseGridNavigationSelectionRowInfoKeysParameters>;
}
interface UseGridNavigationSelectionRowReturnType<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends GridSelectChildRowInfo<RowElementTag>> extends ExtendMerge<OmitStrong<UseGridNavigationRowReturnType<RowElementTag, CellElementTag>, "context" | "info">, OmitStrong<UseSelectionChildReturnType<RowElementTag, RM>, "info">> {
  context: UseGridNavigationCellSelectionContext;
  info: Pick<GridSelectChildRowInfo<RowElementTag>, UseGridNavigationSelectionRowInfoKeysReturnType>;
}
interface UseGridNavigationSelectionCellParameters<CellElementTag extends keyof JSX.IntrinsicElements> extends UseGenericChildParameters<UseGridNavigationCellSelectionContext, Pick<GridSelectChildCellInfo<CellElementTag>, UseGridNavigationSelectionCellInfoKeysParameters>>, OmitStrong<UseGridNavigationCellParameters<CellElementTag>, "context" | "info"> {
  info: Pick<GridSelectChildCellInfo<CellElementTag>, UseGridNavigationSelectionCellInfoKeysParameters>;
}
interface UseGridNavigationSelectionCellReturnType<CellElementTag extends keyof JSX.IntrinsicElements> extends UseGridNavigationCellReturnType<CellElementTag> {
  info: Pick<GridSelectChildCellInfo<CellElementTag>, UseGridNavigationSelectionCellInfoKeysReturnType>;
}
/**
 * Combines {@link useGridNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useGridNavigationSelectionRow}
 * @hasChild {@link useGridNavigationSelectionCell}
 *
 * @compositeParams
 */
export declare function useGridNavigationSelection<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void2 }: UseGridNavigationSelectionParameters<ParentOrRowElementTag, RowElementTag, GridSelectChildRowInfo<RowElementTag>>): UseGridNavigationSelectionReturnType<ParentOrRowElementTag, RowElementTag>;
/**
 * @compositeParams
 */
export declare function useGridNavigationSelectionRow<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements>({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseGridNavigationSelectionRowParameters<RowElementTag, CellElementTag, GridSelectChildRowInfo<RowElementTag>, GridSelectChildCellInfo<CellElementTag>>): UseGridNavigationSelectionRowReturnType<RowElementTag, CellElementTag, GridSelectChildRowInfo<RowElementTag>>;
/**
 * @compositeParams
 */
export declare function useGridNavigationSelectionCell<CellElementTag extends keyof JSX.IntrinsicElements>(p: UseGridNavigationSelectionCellParameters<CellElementTag>): UseGridNavigationSelectionCellReturnType<CellElementTag>;
type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> | UseGridNavigationSelectionRowInfoKeysParameters;
type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> | UseGridNavigationSelectionCellInfoKeysParameters | "focusSelf";
interface UseCompleteGridNavigationRowInfo<RowElementTag extends keyof JSX.IntrinsicElements> extends GridSelectChildRowInfo<RowElementTag>, ManagedChildInfo<number> {}
interface UseCompleteGridNavigationCellInfo<CellElementTag extends keyof JSX.IntrinsicElements> extends GridSelectChildCellInfo<CellElementTag>, ManagedChildInfo<number> {}
interface UseCompleteGridNavigationRowsInfo<ChildElementTag extends keyof JSX.IntrinsicElements> extends UseProcessedChildInfo<ChildElementTag>, ManagedChildInfo<number> {}
interface UseCompleteGridNavigationParameters<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElementTag, RowElementTag, M>, "processedIndexManglerReturn" | "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rovingTabIndexParameters" | "childrenHaveFocusReturn">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElementTag, RowElementTag, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElementTag, RowElementTag, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElementTag, RowElementTag, M>, "rovingTabIndexParameters", "untabbableBehavior">, TargetedOmit<UseProcessedIndexManglerParameters, "processedIndexManglerParameters", "getSortValueAt">, Pick<UseRefElementParameters<ParentOrRowElementTag>, "refElementParameters"> {
  gridNavigationCompleteParameters: UseCompleteGridNavigationParametersSelf;
}
interface UseCompleteGridNavigationParametersSelf {
  /**
   * If this grid is sorted by column, then this should return the index of the column that is currently being sorted by.
   *
   * The value returned will be passed to `getSortValueAt`.
   * If the grid you're using this for doesn't have a concept of a "sortable column", this can be entirely ignored.
   */
  getSortColumn: Nullable<() => (number | undefined)>;
  /**
   * Should return a value that works with `rearrangeableChildrenParameters.compare` (or, by default, that works with the minus operator).
   *
   * The `column` parameter will be whatever `getSortColumn` returns, or `undefined` if none was provided.
   *
   * @param row: The index of the row to check
   * @param column: The index of the column to check (as returned by `getSortColumn`)
   */
  getSortValueAt(row: number, column: number | undefined): unknown;
}
interface UseCompleteGridNavigationContextSelf extends UseProcessedIndexManglerParametersSelf {
  provideParentWithRefreshRows(refreshRows: () => void): void;
}
interface UseCompleteGridNavigationRowsParameters<RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, RsM extends UseCompleteGridNavigationRowsInfo<RowElementTag>> extends OmitStrong<UseProcessedChildrenParameters<RowElementTag, RsM>, "context" | "processedIndexManglerParameters"> {
  context: CompleteGridNavigationRowContext<RowElementTag, RM>;
}
interface UseCompleteGridNavigationRowsContext<RowElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteGridNavigationRowsInfo<RowElementTag>> extends UseProcessedChildContext<RowElementTag, M> {}
interface UseCompleteGridNavigationRowsReturnType<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElementTag>> extends OmitStrong<UseRearrangeableChildrenReturnType, never>, OmitStrong<UsePaginatedChildrenReturnType, "context">, OmitStrong<UseStaggeredChildrenReturnType, "context"> {
  context: UseCompleteGridNavigationRowsContext<TabbableChildElementTag, M>;
}
interface UseCompleteGridNavigationRowParameters<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> extends UseGenericChildParameters<CompleteGridNavigationRowContext<RowElementTag, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>, OmitStrong<UseGridNavigationSelectionRowParameters<RowElementTag, CellElementTag, RM, CM>, "info" | "context" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">, Pick<UseTextContentParameters<RowElementTag>, "textContentParameters">, UseRefElementParameters<RowElementTag>, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElementTag, CellElementTag, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElementTag, CellElementTag, RM, CM>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, OmitStrong<UseHasCurrentFocusParameters<RowElementTag>, "refElementReturn"> {}
interface UseCompleteGridNavigationCellParameters<CellElementTag extends keyof JSX.IntrinsicElements, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> extends UseGenericChildParameters<CompleteGridNavigationCellContext<CellElementTag, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>, Pick<UseTextContentParameters<CellElementTag>, "textContentParameters">, OmitStrong<UseGridNavigationSelectionCellParameters<CellElementTag>, "info" | "context" | "refElementReturn"> {}
interface CompleteGridNavigationRowContext<RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends UseManagedChildrenContext<RM>, UseChildrenHaveFocusContext<RowElementTag>, UseTypeaheadNavigationContext, UseSelectionContext, RovingTabIndexChildContext, UseGridNavigationRowContext, UseProcessedChildrenContext {
  completeGridNavigationContext: UseCompleteGridNavigationContextSelf;
}
interface CompleteGridNavigationCellContext<ChildElementTag extends keyof JSX.IntrinsicElements, CM extends UseCompleteGridNavigationCellInfo<ChildElementTag>> extends UseManagedChildrenContext<CM>, UseTypeaheadNavigationContext, RovingTabIndexChildContext, UseGridNavigationCellSelectionContext {}
interface UseCompleteGridNavigationReturnType<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends OmitStrong<UseGridNavigationSelectionReturnType<ParentOrRowElementTag, RowElementTag>, "props" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters">, Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">, Pick<UseRefElementReturnType<ParentOrRowElementTag>, "refElementReturn">, TargetedOmit<UseProcessedChildrenReturnType<RowElementTag, any>, "rearrangeableChildrenReturn", "children">, Pick<UseChildrenHaveFocusReturnType<RowElementTag>, "childrenHaveFocusReturn"> {
  context: CompleteGridNavigationRowContext<RowElementTag, RM>;
  props: ElementProps<ParentOrRowElementTag>;
}
interface UseCompleteGridNavigationReturnTypeSelf {
  /**
   * Call this any time the values for the sortable children change to re-sort and re-render them.
   */
  refreshRows(): void;
}
interface UseCompleteGridNavigationRowReturnType<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> extends OmitStrong<UseGridNavigationSelectionRowReturnType<RowElementTag, CellElementTag, RM>, "hasCurrentFocusParameters" | "managedChildrenParameters" | "info" | "textContentParameters">, Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">, Pick<UseHasCurrentFocusReturnType<RowElementTag>, "hasCurrentFocusReturn">, Pick<UseRefElementReturnType<RowElementTag>, "refElementReturn">, Pick<UseTextContentReturnType, "textContentReturn">, Pick<UseManagedChildReturnType<RM>, "managedChildReturn"> {
  context: CompleteGridNavigationCellContext<CellElementTag, CM>;
}
interface UseCompleteGridNavigationCellReturnType<CellElementTag extends keyof JSX.IntrinsicElements, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> extends OmitStrong<UseGridNavigationSelectionCellReturnType<CellElementTag>, "hasCurrentFocusParameters" | "info" | "textContentParameters">, OmitStrong<UseRefElementReturnType<CellElementTag>, "propsStable">, Pick<UseTextContentReturnType, "textContentReturn">, UseHasCurrentFocusReturnType<CellElementTag>, UseManagedChildReturnType<CM> {
  props: ElementProps<CellElementTag>;
}
/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 *
 * @compositeParams
 */
export declare function useCompleteGridNavigation<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, gridNavigationCompleteParameters: { getSortColumn, getSortValueAt: gsva }, processedIndexManglerParameters: { compare, getIndex }, ...void1 }: UseCompleteGridNavigationParameters<ParentOrRowElementTag, RowElementTag, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM>;
/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
export declare function useCompleteGridNavigationRows<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteGridNavigationRowInfo<TabbableChildElementTag>, RsM extends UseCompleteGridNavigationRowsInfo<TabbableChildElementTag>>({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }: UseCompleteGridNavigationRowsParameters<TabbableChildElementTag, M, RsM>): UseCompleteGridNavigationRowsReturnType<TabbableChildElementTag, RsM>;
interface UseCompleteGridNavigationRowOuterParameters<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElementTag>> extends OmitStrong<UseProcessedChildParameters<RowElementTag, RsM>, "info">, UseRefElementParameters<RowElementTag> {
  info: OmitStrong<UseProcessedChildParameters<RowElementTag, RsM>["info"], "getElement">;
  context: UseCompleteGridNavigationRowsContext<RowElementTag, RsM>;
}
interface UseCompleteGridNavigationRowOuterReturnType<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElementTag>> extends OmitStrong<UseProcessedChildReturnType<RowElementTag, RsM>, "refElementParameters">, OmitStrong<UseRefElementReturnType<RowElementTag>, "propsStable"> {
  hide: boolean;
}
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationRowOuter<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElementTag>>({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }: UseCompleteGridNavigationRowOuterParameters<RowElementTag, RsM>): UseCompleteGridNavigationRowOuterReturnType<RowElementTag, RsM>;
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationRow<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>>({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters: { getText, onTextContentChange: otcc1 }, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }: UseCompleteGridNavigationRowParameters<RowElementTag, CellElementTag, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElementTag, CellElementTag, RM, CM>;
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationCell<CellElementTag extends keyof JSX.IntrinsicElements, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>>({ gridNavigationCellParameters, context, textContentParameters: { getText, onTextContentChange: otcc1, ...void4 }, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }: UseCompleteGridNavigationCellParameters<CellElementTag, CM>): UseCompleteGridNavigationCellReturnType<CellElementTag, CM>;
interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElementTag, RowElementTag, RM>>, "singleSelectionReturn"> {}
interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM>, "singleSelectionReturn", "changeSingleSelectedIndex">, TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM>, "multiSelectionReturn", never>, OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM>, "singleSelectionReturn" | "multiSelectionReturn"> {}
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationDeclarative<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>>({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElementTag, RowElementTag, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElementTag, RowElementTag, RM>;
type UseCompleteGridNavigationRowDeclarativeParameters<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> = OmitStrong<MakeMultiSelectionChildDeclarativeParameters<UseCompleteGridNavigationRowParameters<RowElementTag, CellElementTag, RM, CM>>, "multiSelectionChildReturn">;
/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationRowDeclarative<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>>({ multiSelectionChildParameters: { multiSelectionDisabled, ...multiSelectionChildParameters }, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters }, info, ...p }: UseCompleteGridNavigationRowDeclarativeParameters<RowElementTag, CellElementTag, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElementTag, CellElementTag, RM, CM>;
interface UseCompleteListNavigationChildInfo<ChildElementTag extends keyof JSX.IntrinsicElements> extends UseListNavigationSelectionChildInfo<ChildElementTag>, ManagedChildInfo<number> {}
interface UseCompleteListNavigationChildrenInfo<ChildElementTag extends keyof JSX.IntrinsicElements> extends UseProcessedChildInfo<ChildElementTag>, ManagedChildInfo<number> {}
interface UseCompleteListNavigationParameters<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends Pick<UseListNavigationSelectionParameters<ParentElementTag, ChildElementTag, M>, "singleSelectionParameters" | "multiSelectionParameters">, TargetedOmit<Pick<UsePaginatedChildrenParameters<ChildElementTag>, "paginatedChildrenParameters">, "paginatedChildrenParameters", "childCount">, Pick<UseRefElementParameters<ParentElementTag>, "refElementParameters">, TargetedOmit<UseListNavigationSelectionParameters<ParentElementTag, ChildElementTag, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseListNavigationSelectionParameters<ParentElementTag, ChildElementTag, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, TargetedOmit<UseListNavigationSelectionParameters<ParentElementTag, ChildElementTag, M>, "rovingTabIndexParameters", "untabbableBehavior">, TargetedOmit<UseProcessedIndexManglerParameters, "processedIndexManglerParameters", never> {}
type Get<T, K extends keyof T> = T[K];
interface UseCompleteListNavigationParametersSelf extends Get<UseProcessedIndexManglerParameters, "processedIndexManglerParameters"> {}
interface UseCompleteListNavigationReturnType<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends OmitStrong<UseRefElementReturnType<ParentElementTag>, "propsStable">, Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">, Pick<UseChildrenHaveFocusReturnType<ChildElementTag>, "childrenHaveFocusReturn">, TargetedOmit<UseProcessedChildrenReturnType<ChildElementTag, any>, "rearrangeableChildrenReturn", "children">, OmitStrong<UseListNavigationSelectionReturnType<ParentElementTag, ChildElementTag>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
  props: ElementProps<ParentElementTag>;
  context: CompleteListNavigationContext<ChildElementTag, M>;
}
interface UseCompleteListNavigationReturnTypeSelf {
  /**
   * Call this any time the values for the sortable children change to re-sort and re-render them.
   */
  refreshRows(): void;
}
interface CompleteListNavigationContext<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends UseChildrenHaveFocusContext<ChildElementTag>, UseTypeaheadNavigationContext, UseSelectionContext, UseManagedChildrenContext<M>, RovingTabIndexChildContext, UseProcessedChildrenContext, UseProcessedIndexManglerContext {
  listNavigationCompleteContext: UseCompleteListNavigationContextSelf;
}
interface UseCompleteListNavigationContextSelf extends UseCompleteListNavigationParametersSelf {
  provideParentWithRefreshRows(refreshRows: () => void): void;
}
interface UseCompleteListNavigationChildrenParameters<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<TabbableChildElementTag>, SM extends UseCompleteListNavigationChildrenInfo<TabbableChildElementTag>> extends OmitStrong<UseProcessedChildrenParameters<TabbableChildElementTag, SM>, "processedIndexManglerParameters"> {
  context: CompleteListNavigationContext<TabbableChildElementTag, M>;
}
interface UseCompleteListNavigationChildrenReturnType<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElementTag>> extends OmitStrong<UseRearrangeableChildrenReturnType, never>, OmitStrong<UsePaginatedChildrenReturnType, "context">, OmitStrong<UseStaggeredChildrenReturnType, "context"> {
  context: UseCompleteListNavigationChildrenContext<TabbableChildElementTag, M>;
}
type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> = Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> | UseListNavigationSelectionChildInfoKeysParameters | "focusSelf";
interface UseCompleteListNavigationChildParameters<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends UseGenericChildParameters<CompleteListNavigationContext<ChildElementTag, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>, OmitStrong<UseListNavigationSelectionChildParameters<ChildElementTag, M>, "context" | "info" | "refElementReturn">, Pick<UseRefElementParameters<ChildElementTag>, "refElementParameters">, Pick<UseTextContentParameters<ChildElementTag>, "textContentParameters">, Pick<UseHasCurrentFocusParameters<ChildElementTag>, "hasCurrentFocusParameters"> {}
interface UseCompleteListNavigationChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends OmitStrong<UseListNavigationSelectionChildReturnType<ChildElementTag, M>, "info" | "propsChild" | "propsTabbable" | "hasCurrentFocusParameters" | "pressParameters" | "textContentParameters">, OmitStrong<UseRefElementReturnType<ChildElementTag>, "propsStable">, Pick<UseTextContentReturnType, "textContentReturn">, UseHasCurrentFocusReturnType<ChildElementTag>, UseManagedChildReturnType<M>, TargetedPick<UsePressParameters<any>, "pressParameters", "excludeSpace"> {
  /**
   * These props should be passed to whichever element is tabbable.
   * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended.
   *
   * @see propsChild
   */
  propsTabbable: ElementProps<any>;
  /**
   * These props should be passed to whichever element is considered the child element of the list (e.g. the `li` in an `ol`).
   * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended.
   * But it may also be different, e.g. if that `li` contains an `input`.
   *
   * @see propsTabbable
   */
  propsChild: ElementProps<any>;
}
/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 * @hasChild {@link useCompleteListNavigationChild}
 *
 * @compositeParams
 */
export declare function useCompleteListNavigation<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, processedIndexManglerParameters, ...void1 }: UseCompleteListNavigationParameters<ParentElementTag, ChildElementTag, M>): UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M>;
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
export declare function useCompleteListNavigationChildren<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<TabbableChildElementTag>, RM extends UseCompleteListNavigationChildrenInfo<TabbableChildElementTag>>({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }: UseCompleteListNavigationChildrenParameters<TabbableChildElementTag, M, RM>): UseCompleteListNavigationChildrenReturnType<TabbableChildElementTag, RM>;
interface UseCompleteListNavigationChildrenContext<RowElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildrenInfo<RowElementTag>> extends UseProcessedChildContext<RowElementTag, M> {}
interface UseCompleteListNavigationChildOuterParameters<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteListNavigationChildrenInfo<RowElementTag>> extends OmitStrong<UseProcessedChildParameters<RowElementTag, RsM>, "info">, UseRefElementParameters<RowElementTag> {
  info: OmitStrong<UseProcessedChildParameters<RowElementTag, RsM>["info"], "getElement">;
  context: UseCompleteListNavigationChildrenContext<RowElementTag, RsM>;
}
interface UseCompleteListNavigationChildOuterReturnType<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteListNavigationChildrenInfo<RowElementTag>> extends OmitStrong<UseProcessedChildReturnType<RowElementTag, RsM>, "refElementParameters">, OmitStrong<UseRefElementReturnType<RowElementTag>, "propsStable"> {
  hide: boolean;
}
/**
 * @compositeParams
 */
export declare function useCompleteListNavigationChildOuter<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteListNavigationChildrenInfo<RowElementTag>>({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }: UseCompleteListNavigationChildOuterParameters<RowElementTag, RsM>): UseCompleteListNavigationChildOuterReturnType<RowElementTag, RsM>;
/**
 *
 * @compositeParams
 */
export declare function useCompleteListNavigationChild<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>>({ info: { index, focusSelf, untabbable, ...customUserInfo }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
  textContentParameters: { getText, onTextContentChange: otcc1, ...void10 }, refElementParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 }, singleSelectionChildParameters, multiSelectionChildParameters, context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, processedChildrenContext, processedIndexManglerContext, listNavigationCompleteContext, ...void5 }, ...void1 }: UseCompleteListNavigationChildParameters<ChildElementTag, M>): UseCompleteListNavigationChildReturnType<ChildElementTag, M>;
interface UseCompleteListNavigationDeclarativeParameters<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElementTag, ChildElementTag, M>>, "singleSelectionParameters" | "singleSelectionReturn">, TargetedOmit<UseSelectionParameters<ParentElementTag, ChildElementTag, M>, "singleSelectionParameters", "initiallySingleSelectedIndex" | "onSingleSelectedIndexChange"> {}
interface UseCompleteListNavigationDeclarativeReturnType<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends TargetedOmit<UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M>, "singleSelectionReturn", "changeSingleSelectedIndex">, TargetedOmit<UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M>, "multiSelectionReturn", never>, OmitStrong<UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M>, "singleSelectionReturn" | "multiSelectionReturn"> {}
interface UseCompleteListNavigationChildDeclarativeParameters<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends OmitStrong<MakeSelectionDeclarativeChildParameters<UseCompleteListNavigationChildParameters<ChildElementTag, M>>, "multiSelectionChildParameters" | "multiSelectionChildReturn">, TargetedOmit<UseSelectionChildParameters<ChildElementTag, M>, "multiSelectionChildParameters", "initiallyMultiSelected" | "onMultiSelectChange"> {}
interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElementTag, M>, "singleSelectionChildReturn", never>, TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElementTag, M>, "multiSelectionChildReturn", "changeMultiSelected">, OmitStrong<UseCompleteListNavigationChildReturnType<ChildElementTag, M>, "singleSelectionChildReturn" | "multiSelectionChildReturn"> {}
/**
 * @compositeParams
 */
export declare function useCompleteListNavigationDeclarative<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>>({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }: UseCompleteListNavigationDeclarativeParameters<ParentElementTag, ChildElementTag, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElementTag, ChildElementTag, M>;
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteListNavigationChildDeclarative<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>>({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, info: i1, ...rest }: UseCompleteListNavigationChildDeclarativeParameters<ChildElementTag, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElementTag, M>;
interface UseModalParametersSelf {
  /**
   * When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.
   */
  active: boolean;
}
interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners>, UseRefElementParameters<any>, OmitStrong<UseFocusTrapParameters<any, any>, "refElementReturn"> {
  modalParameters: UseModalParametersSelf;
}
interface UseModalReturnType<FocusContainerElementTag extends keyof JSX.IntrinsicElements | null, SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements> extends UseDismissReturnType<SourceElementTag, PopupElementTag> {
  propsFocusContainer: ElementProps<NonNullable<FocusContainerElementTag>>;
}
/**
 * Combines dismissal hooks and focus trap hooks into one.
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * TODO: The HTML &lt;dialog&gt; element is a thing now, and it can be modal or nonmodal, just like this hook. Hmm...
 *
 * @compositeParams
 */
export declare function useModal<Listeners extends DismissListenerTypes, FocusContainerElementTag extends keyof JSX.IntrinsicElements | null, SourceElementTag extends keyof JSX.IntrinsicElements | null, PopupElementTag extends keyof JSX.IntrinsicElements>({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElementTag, SourceElementTag, PopupElementTag>;
interface UseRandomIdReturnType<SourceTag extends keyof JSX.IntrinsicElements, TargetTag extends keyof JSX.IntrinsicElements> {
  propsSource: ElementProps<SourceTag>;
  propsReferencer: ElementProps<TargetTag>;
  randomIdReturn: UseRandomIdReturnTypeSelf;
}
interface UseRandomIdReturnTypeSelf {
  id: string;
}
interface UseRandomIdParametersSelf {
  /**
   * While all IDs are unique, this can be used to more easily differentiate them.
   *
   * If this is stable, then your props are stable. Simple as that.
   *
   * @stable
   */
  prefix: string;
  /** This is the prop on the **OTHER** element that will use our ID.  E.G. The `input` calls `useRandomId` and passes `for` as `referencerProp`. */
  otherReferencerProp: keyof ElementProps<any> | null;
}
interface UseRandomIdParameters {
  randomIdParameters: UseRandomIdParametersSelf;
}
/**
 * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
 *
 * @compositeParams
 */
export declare function useRandomId<SourceTag extends keyof JSX.IntrinsicElements, TargetTag extends keyof JSX.IntrinsicElements>({ randomIdParameters: { prefix, otherReferencerProp } }: UseRandomIdParameters): UseRandomIdReturnType<SourceTag, TargetTag>;
interface UseRandomDualIdsParameters {
  randomIdInputParameters: UseRandomIdParameters["randomIdParameters"];
  randomIdLabelParameters: UseRandomIdParameters["randomIdParameters"];
}
interface UseRandomDualIdsReturnType<InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements> {
  propsInput: ElementProps<InputElementTag>;
  propsLabel: ElementProps<LabelElementTag>;
  randomIdInputReturn: UseRandomIdReturnType<InputElementTag, LabelElementTag>["randomIdReturn"];
  randomIdLabelReturn: UseRandomIdReturnType<LabelElementTag, InputElementTag>["randomIdReturn"];
}
/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 *
 * @compositeParams
 */
export declare function useRandomDualIds<InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements>({ randomIdInputParameters, randomIdLabelParameters }: UseRandomDualIdsParameters): UseRandomDualIdsReturnType<InputElementTag, LabelElementTag>;
type P$1 = Parameters<typeof clsx>;
/**
 * Allows adding/removing a CSS class to the `window`, `document`, or other global `HTMLElement`.
 *
 * @param className - The class (as a string) to be adding/removing
 * @param active - If `true`, the default, then the class is added to the element. If `false`, it's removed.
 * @param element - The element to affect. By default, it's the root `<html>` element
 */
export declare function useDocumentClass(className: P$1[0], active?: boolean, element?: HTMLElement): void;
interface UseDraggableReturnType<Tag extends keyof JSX.IntrinsicElements> {
  /** *Unstable* */
  propsUnstable: ElementProps<Tag>;
  /**
   * Returns true if the element in question is currently being dragged
   */
  dragging: boolean;
  /** @stable */
  getDragging: () => boolean;
  /**
   * Once the drag ends, if it was over a valid droppable, this will be
   * set to the `dropEffect` value it had.
   *
   * This can be used to detect when the element has dropped,
   * and then what should be done with it (generally deleted if the effect was "move")
   */
  lastDropEffect: DataTransfer["dropEffect"] | null;
  /** @stable */
  getLastDropEffect: () => (DataTransfer["dropEffect"] | null);
}
interface UseDraggableParameters {
  /**
   * Maps to the Drag and Drop API -- allows limiting the areas this element can be dropped.
   * For example, setting this to "copyLink" will allow this this to be dropped onto
   * a droppable with an effect of "copy" or "link", but not "move".
   *
   */
  effectAllowed: Nullable<DataTransfer["effectAllowed"]>;
  /**
   * Can be used to specify a custom drag image instead of the browser default (a transparent render of the original element, generally)
   */
  dragImage: Nullable<HTMLCanvasElement | HTMLImageElement | HTMLVideoElement>;
  dragImageXOffset: Nullable<number>;
  dragImageYOffset: Nullable<number>;
  /**
   * Represents a dictionary mapping of MIME types to data
   */
  data: {
    [mimeType: string]: string;
  };
}
/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDraggableParameters}
 * {@include } {@link UseDraggableReturnType}
 */
export declare function useDraggable<Tag extends keyof JSX.IntrinsicElements>({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }: UseDraggableParameters): UseDraggableReturnType<Tag>;
interface UseDroppableReturnType<Tag extends keyof JSX.IntrinsicElements> {
  /**
   * Hook for modifying the props you were going to pass to your drop target Element.
   *
   * *Unstable*
   */
  propsStable: ElementProps<Tag>;
  /**
   * While something is being dragged over this element, this will contain any information about any files included in that drop.
   * Otherwise, it'll be null, meaning nothing is being dragged over this element.
   */
  filesForConsideration: DropFileMetadata[] | null;
  /**
   * While something is being dragged over this element, a list of available MIME types for the non-file data will be listed here.
   * Otherwise, it'll be null, meaning nothing is being dragged over this element.
   */
  stringsForConsideration: Set<string> | null;
  /**
   * When files are dropped over the element, their data will be given here.
   * This will update as new drops happen.
   */
  droppedFiles: DropFile[] | null;
  /**
   * When non-file data is dropped over the element, their data will be given here.
   * This will update as new drops happen.
   */
  droppedStrings: {
    [MimeType: string]: string;
  } | null;
  dropError: unknown;
}
interface UseDroppableParameters {
  /**
   * Maps to the Drag and Drop API -- effectively means "as close as possible, what's happening to the data when I drop it here?
   * Am I copying it and leaving the original, am I moving it and deleting the original, or am I linking it to the original?"
   *
   * Whatever is being dragged over this will have its own permission that's checked against this.
   */
  effect: DataTransfer["dropEffect"] | undefined;
}
interface DropFile extends DropFileMetadata {
  name: string;
  data: ArrayBuffer;
  size: number | undefined;
  lastModified: number | undefined;
}
interface DropFileMetadata {
  type: string | undefined;
}
type DroppableFileErrorType = "IndexSizeError" | "HierarchyRequestError" | "WrongDocumentError" | "InvalidCharacterError" | "NoModificationAllowedError" | "NotFoundError" | "NotSupportedError" | "InvalidStateError" | "InUseAttributeError" | "SyntaxError" | "InvalidModificationError" | "NamespaceError" | "InvalidAccessError" | "TypeMismatchError" | "SecurityError" | "NetworkError" | "AbortError" | "URLMismatchError" | "QuotaExceededError" | "TimeoutError" | "InvalidNodeTypeError" | "DataCloneError" | "EncodingError" | "NotReadableError" | "UnknownError" | "ConstraintError" | "DataError" | "TransactionInactiveError" | "ReadOnlyError" | "VersionError" | "OperationError" | "NotAllowedError";
declare class DroppableFileError extends Error {
  fileName: string;
  errorType: DroppableFileErrorType;
  constructor(fileName: string, base: DOMException | null);
}
/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDroppableParameters}
 * {@include } {@link UseDroppableReturnType}
 */
export declare function useDroppable<Tag extends keyof JSX.IntrinsicElements>({ effect }: UseDroppableParameters): UseDroppableReturnType<Tag>;
/**
 * This is used to select *just* the typed addEventListener
 * and not the generic "I'll accept any string and any handler" one.
 *
 * TODO: This """works""" but it's not great and implicitly relies on
 * lib.dom.ts always giving the two overloads in the same order, with the
 * typed one first. *That* probably won't change, but if more overloads
 * are ever added this will need adjustment.
 *
 * See https://stackoverflow.com/a/52761156 for how selecting the correct overload works.
 */
type TypedAddEventListener<T extends EventTarget> = T["addEventListener"];
type TypedEventListenerTypes<T extends EventTarget> = (TypedAddEventListener<T> extends ((type: infer K2, ...args: any[]) => any) ? K2 : string) & string;
type TypedEventHandlerEvent<E extends EventTarget, _T extends TypedEventListenerTypes<E>> = Event;
/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target - A *non-Preact* node to attach the event to.
 */
export declare function useGlobalHandler<T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends TypedEventHandlerEvent<T, EventType>>(target: T | null | undefined, type: EventType, handler: null | ((e: H) => void), options?: Parameters<TypedAddEventListener<T>>[2], mode?: "grouped" | "single"): void;
interface UseHideScrollReturnType {
  getScrollbarWidth: () => number | null;
  getScrollbarHeight: () => number | null;
}
/**
 * Allows for hiding the scroll bar of the root HTML element
 * without shifting the layout of the page by adding a few pixels
 * of padding to the root element if necessary.
 *
 * @param hideScroll - Whether the scroll bar is hidden or not (i.e. `true` to hide the scroll bar, `false` to allow it to be visible)
 */
export declare function useHideScroll(hideScroll: boolean): UseHideScrollReturnType;
type HasClass = UseImperativePropsReturnTypeSelf<any>["hasClass"];
type SetClass = UseImperativePropsReturnTypeSelf<any>["setClass"];
type SetStyle = UseImperativePropsReturnTypeSelf<any>["setStyle"];
type GetAttribute<Tag extends keyof JSX.IntrinsicElements> = UseImperativePropsReturnTypeSelf<Tag>["getAttribute"];
type SetAttribute<Tag extends keyof JSX.IntrinsicElements> = UseImperativePropsReturnTypeSelf<Tag>["setAttribute"];
type SetChildren = UseImperativePropsReturnTypeSelf<any>["setChildren"];
type DangerouslySetInnerHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslySetInnerHTML"];
type DangerouslyAppendHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslyAppendHTML"];
type SetEventHandler = UseImperativePropsReturnTypeSelf<any>["setEventHandler"];
type AvailableStyles = (keyof CSSStyleDeclaration & keyof CSSProperties) & string;
interface UseImperativePropsReturnTypeSelf<Tag extends keyof JSX.IntrinsicElements> {
  /** @stable Returns whether the element currently has the current CSS class */
  hasClass(cls: string): boolean;
  /** @stable Applies or removes the given CSS class to the element and its props */
  setClass(cls: string, enabled: boolean, delay?: boolean): void;
  /** @stable Applies the given CSS style to the element and its props */
  setStyle<K extends AvailableStyles>(prop: K, value: CSSProperties[K] | null, delay?: boolean): void;
  /** @stable Returns the current value of the attribute on the element */
  getAttribute<K extends keyof ElementProps<Tag>>(prop: K): ElementProps<Tag>[K];
  /** @stable Applies the given attribute to the element and its props */
  setAttribute<K extends keyof ElementProps<Tag>>(prop: K, value: ElementProps<Tag>[K] | null, delay?: boolean): void;
  /** @stable Sets the element's `textContent` and `props.children` */
  setChildren(children: string | null): void;
  /** @stable Sets the element's `innerHTML` and `props.dangerouslySetInnerHTML.__html` */
  dangerouslySetInnerHTML(html: string): void;
  /** @stable Evaluates the given HTML and appends it to the current children and the current props. */
  dangerouslyAppendHTML(html: string): Element;
  /** @stable Applies the given event handler to the element and its props */
  setEventHandler<K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions): void;
}
interface UseImperativePropsParameters<Tag extends keyof JSX.IntrinsicElements> extends TargetedPick<UseRefElementReturnType<Tag>, "refElementReturn", "getElement"> {}
type ImperativeElementProps<Tag extends keyof JSX.IntrinsicElements> = ElementProps<Tag> & {
  tag: Tag;
  handle: Ref<UseImperativePropsReturnTypeSelf<Tag>>;
};
interface UseImperativePropsReturnType<Tag extends keyof JSX.IntrinsicElements> {
  /**
   * @stable
   *
   *  (The object itself and everything within it are all stable and can be passed around freely)
   */
  imperativePropsReturn: UseImperativePropsReturnTypeSelf<Tag>;
  props: ElementProps<Tag>;
}
/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 *
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 *
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
export declare const ImperativeElement: typeof ImperativeElementU;
/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 *
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
 *
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 *
 * @compositeParams
 */
export declare function useImperativeProps<Tag extends keyof JSX.IntrinsicElements>({ refElementReturn: { getElement } }: UseImperativePropsParameters<Tag>): UseImperativePropsReturnType<Tag>;
declare function ImperativeElementU<Tag extends keyof JSX.IntrinsicElements>({ tag: Tag, handle, ...props }: RenderableProps<ImperativeElementProps<Tag>>, ref: Ref<TagToElement<Tag>>): import("preact").VNode<import("preact").DOMAttributes<HTMLInputElement> & import("preact").ClassAttributes<HTMLInputElement>>;
/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 *
 * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
 */
export declare function useMergedChildren(lhs: ElementProps<'div'>["children"], rhs: ElementProps<'div'>["children"]): ElementProps<'div'>["children"];
/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 *
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 */
export declare function useMergedClasses(...classes: ElementProps<'div'>["className"][]): string | undefined;
/**
 * When `useMergedProps` encounters a conflict, the function passed here will be called.
 *
 * @defaultValue `console.warn`
 */
export declare function enableLoggingPropConflicts(log2: typeof console["log"]): void;
type MergedProps<P extends unknown[]> = P extends [infer P1, ...infer P2] ? P1 & Omit<MergedProps<P2>, keyof P1> : P extends [infer P1] ? P1 : {};
/**
 * Given two sets of props, merges them and returns the result.
 *
 * @remarks The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, `children`, and all event handlers.
 *
 * If two sets of props both specify the same attribute, e.g. both specify two different `id`s, then an error will be printed to the console (customize this with {@link enableLoggingPropConflicts}), as this conflict needs to be arbitrated on by you.
 *
 * {@include } {@link enableLoggingPropConflicts}
 *
 * @see {@link useMergedRefs}
 * @see {@link useMergedStyles}
 * @see {@link useMergedClasses}
 * @see {@link useMergedChildren}
 *
 * @param allProps - A variadic number of props to merge into one
 *
 * @returns A single object with all the provided props merged into one.
 */
export declare function useMergedProps<P extends {}[]>(...allProps: P): MergedProps<P>;
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function mergeFunctions<T extends (...args: any[]) => (void | Promise<void>), U extends (...args: any[]) => (void | Promise<void>)>(lhs: T | null | undefined, rhs: U | null | undefined): T | U | ((...args: Parameters<T>) => Promise<[void, void]> | undefined) | null | undefined;
/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 *
 * @remarks Or just use {@link useMergedProps}
 */
export declare function useMergedRefs<Tag extends keyof JSX.IntrinsicElements>(rhs: Ref<TagToElement<Tag>> | null | undefined, lhs: Ref<TagToElement<Tag>> | null | undefined): import("preact").RefCallback<TagToElement<Tag>> | RefObject<TagToElement<Tag> | null>;
/**
 * Merges two style objects, returning the result.
 *
 * @param style - The user-given style prop for this component
 * @param obj - The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
export declare function useMergedStyles(lhs: ElementProps<'div'>["style"], rhs: ElementProps<'div'>["style"]): ElementProps<'div'>["style"];
interface UsePortalChildrenParameters {
  /**
   * The element that will contain the portal's children, or the string of its `id`.
   *
   * @nonstable
   */
  target: string | Element | null;
}
type PortalChildUpdater<S> = (value: ((prevState: S) => S)) => void;
type PushPortalChild = UsePortalChildrenReturnType["pushChild"];
type UpdatePortalChild = UsePortalChildrenReturnType["updateChild"];
type RemovePortalChild = UsePortalChildrenReturnType["removeChild"];
interface UsePortalChildrenReturnType {
  /** The return value of `createPortal` */
  children: VNode | null;
  /** The element that the portal was rendered to (even if an `id` was provided) */
  portalElement: Element | null;
  /** @stable Appends the given child to the portal's existing children, and returns a number that can be used to request updates to it/remove it later if necessary */
  pushChild(child: VNode): number;
  /** @stable Allows a child to be updated with new props. `index` is the value returned from `pushChild`. */
  updateChild(index: number, child: VNode): void;
  /** @stable Removes the child at the given `index` (the value returned from `pushChild`) */
  removeChild(index: number): void;
}
/**
 * Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
 *
 * @remarks Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
 *
 * TODO: Can't push a child until after the very first `useLayoutEffect`
 *
 * {@include } {@link UsePortalChildrenParameters}
 */
export declare function usePortalChildren({ target }: UsePortalChildrenParameters): UsePortalChildrenReturnType;
interface UseElementSizeParametersSelf {
  /**
   * Called any time the browser detects a size change
   * on the element. Does not need to be stable, so you
   * can pass an anonymous function that only sets the
   * values you use if you'd like.
   *
   * @stable
   */
  onSizeChange(sizeInfo: ElementSize, prevSize: ElementSize | undefined, entries: ResizeObserverEntry[] | UIEvent): void;
  /**
   * Passed as an argument to the created ResizeObserver.
   *
   * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters
   *
   * @stable
   */
  getObserveBox: null | (() => ResizeObserverOptions["box"]);
}
interface UseElementSizeParameters<Tag extends keyof JSX.IntrinsicElements> extends UseRefElementParameters<Tag> {
  elementSizeParameters: UseElementSizeParametersSelf;
}
interface ElementSize {
  clientWidth: number;
  scrollWidth: number;
  offsetWidth: number | undefined;
  clientHeight: number;
  scrollHeight: number;
  offsetHeight: number | undefined;
  clientLeft: number;
  scrollLeft: number;
  offsetLeft: number | undefined;
  clientTop: number;
  scrollTop: number;
  offsetTop: number | undefined;
}
interface UseElementSizeReturnTypeSelf {
  /** @stable */
  getSize(): ElementSize | null;
}
interface UseElementSizeReturnType<Tag extends keyof JSX.IntrinsicElements> extends UseRefElementReturnType<Tag> {
  elementSizeReturn: UseElementSizeReturnTypeSelf;
}
/**
 * Measures an element, allowing you to react to its changes in size.
 *
 * @compositeParams
 */
export declare function useElementSize<Tag extends keyof JSX.IntrinsicElements>({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }: UseElementSizeParameters<Tag>): UseElementSizeReturnType<Tag>;
interface UseHasLastFocusParametersSelf {
  /**
   * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
   *
   * @remarks This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
   *
   * @stable
   */
  onLastFocusedChanged: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
  /**
   * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
   *
   * @stable
   */
  onLastFocusedInnerChanged: Nullable<OnPassiveStateChange<boolean, UIEvent | undefined>>;
}
interface UseHasLastFocusParameters<Tag extends keyof JSX.IntrinsicElements> extends UseActiveElementParameters, TargetedPick<UseRefElementReturnType<Tag>, "refElementReturn", "getElement"> {
  hasLastFocusParameters: UseHasLastFocusParametersSelf;
}
interface HasLastFocusReturnTypeSelf {
  /** @stable */
  getLastFocused(): boolean;
  /** @stable */
  getLastFocusedInner(): boolean;
}
interface UseHasLastFocusReturnType extends UseActiveElementReturnType {
  hasLastFocusReturn: HasLastFocusReturnTypeSelf;
}
/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export declare function useHasLastFocus<Tag extends keyof JSX.IntrinsicElements>(args: UseHasLastFocusParameters<Tag>): UseHasLastFocusReturnType;
type PhysicalDirection = "ltr" | "rtl" | "ttb" | "btt";
type PhysicalOrientation = "horizontal" | "vertical";
type PhysicalSize = "width" | "height";
type LogicalOrientation = "inline" | "block";
interface UseLogicalDirectionParameters {}
interface LogicalElementSize {
  clientInlineSize: number;
  scrollInlineSize: number;
  offsetInlineSize: number | undefined;
  clientBlockSize: number;
  scrollBlockSize: number;
  offsetBlockSize: number | undefined;
  clientInlineInset: number;
  scrollInlineInset: number;
  offsetInlineInset: number | undefined;
  clientBlockInset: number;
  scrollBlockInset: number;
  offsetBlockInset: number | undefined;
}
/**
 * Inspects the element's style and determines the logical direction that text flows.
 *
 * @remarks Certain CSS properties, like `block-size`, respect the current writing mode and text direction.
 * But `transform`, `clip`, etc. don't.
 *
 * This is provided so that CSS properties can consistently use those logical properties.
 *
 * See https://drafts.csswg.org/css-writing-modes/#logical-to-physical
 *
 * {@include } {@link UseLogicalDirectionParameters}
 *
 * @returns An object containing the following functions:
 * * `getLogicalDirection`: retrieves a `LogicalDirectionInfo` representing the current state of the element. (Function is constant between renders)
 * * `convertElementSize`: When used in conjunction with `useElementSize`, allows you to retrieve the logical size of an element instead of the physical size.
 * * `convertToLogicalOrientation`: Based on the current direction, converts "horizontal" or "vertical" to "inline" or "block".
 * * `convertToPhysicalOrientation`:  Based on the current direction, converts "inline" or "block" to "horizontal" or "vertical".
 */
export declare function useLogicalDirection({ ...void1 }: UseLogicalDirectionParameters): UseLogicalDirectionReturnType;
interface UseLogicalDirectionReturnType {
  /** @stable */
  logicalDirectionReturn: {
    getLogicalDirectionInfo: (computedStyles: CSSStyleDeclaration) => LogicalDirectionInfo | null;
    /**
     * Given the ElementSize info from useElementSize, converts all those physical properties to their logical counterparts.
     *
     * @stable
     */
    convertToLogicalSize: (computedStyles: CSSStyleDeclaration, elementSize: ElementSize, direction?: LogicalDirectionInfo | null | undefined) => LogicalElementSize | null;
    /**
     * Turns `"horizontal" | "vertical"` into `"inline" | "block"`
     *
     * @stable
     */
    convertToLogicalOrientation: (computedStyles: CSSStyleDeclaration, elementOrientation: PhysicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => "inline" | "block";
    /**
     * Turns `"inline" | "block"` into `"horizontal" | "vertical"`
     *
     * @stable
     */
    convertToPhysicalOrientation: (computedStyles: CSSStyleDeclaration, elementOrientation: LogicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => "horizontal" | "vertical";
    /**
     * Turns `"top" | "bottom" | "left" | "right"` into `"block-start" | "block-end" | "inline-start" | "inline-end"`
     *
     * @stable
     */
    convertToLogicalSide: (computedStyles: CSSStyleDeclaration, side: "top" | "bottom" | "left" | "right", direction?: LogicalDirectionInfo | null | undefined) => "inline-start" | "inline-end" | "block-start" | "block-end";
    /**
     * Turns `"block-start" | "block-end" | "inline-start" | "inline-end"` into `"top" | "bottom" | "left" | "right"`
     *
     * @stable
     */
    convertToPhysicalSide: (computedStyles: CSSStyleDeclaration, side: "inline-start" | "inline-end" | "block-start" | "block-end", direction?: LogicalDirectionInfo | null | undefined) => "top" | "bottom" | "left" | "right";
  };
}
interface LogicalDirectionInfo {
  /**
   * Represents the direction text flows, glyph by glyph.  By far the most complex property.
   *
   * |`writing-mode`|`direction`|Result|
   * |-----|-----|-----|
   * |`horizontal-tb`|`ltr`|`ltr`|
   * |`horizontal-tb`|`rtl`|`rtl`|
   * |`vertical-rl` & `sideways-rl`|`ltr`|`ttb`|
   * |`vertical-rl` & `sideways-rl`|`rtl`|`btt`|
   * |`vertical-lr`|`ltr`|`ttb`|
   * |`vertical-lr`|`rtl`|`btt`|
   * |`sideways-lr`|`ltr`|`btt`|
   * |`sideways-lr`|`rtl`|`ttb`|
   */
  inlineDirection: PhysicalDirection;
  /**
   * Simplified version of `inlineDirection`:
   *
   * * `horizontal` for `horizontal-tb`
   * * `vertical` for all others
   */
  inlineOrientation: PhysicalOrientation;
  /**
   * Represents the direction text flows, line by line.
   *
   * * `ttb` for `horizontal-tb`, regardless of direction
   * * `rtl` for `vertical-rl` & `sideways-rl`, regardless of direction
   * * `ltr` for `vertical-lr` & `sideways-lr`, regardless of direction
   */
  blockDirection: PhysicalDirection;
  /**
   * Simplified version of `blockDirection`:
   *
   * * `vertical` for `horizontal-tb`
   * * `horizontal` for all others
   */
  blockOrientation: PhysicalOrientation;
  /**
   * Represents how you can *physically* refer to the size of the element in the *inline* size.
   *
   * * `width` for `horizontal-tb`, regardless of direction
   * * `height` for all others
   */
  inlineSize: PhysicalSize;
  /**
   * Represents how you can *physically* refer to the size of the element in the *block* size.
   *
   * * `height` for `horizontal-tb`, regardless of direction
   * * `width` for all others
   */
  blockSize: PhysicalSize;
  /**
   * For each glyph, ascenders to descenders *physically* go:
   *
   * * `ttb` for `horizontal-tb`
   * * `rtl` for `vertical-rl`, `vertical-lr`, & `sideways-rl`
   * * `ltr` for `sideways-lr`
   */
  overUnderDirection: PhysicalDirection;
  /**
   * For each glyph, its "left" side (think of this relative to `writing-mode` but *not* relative to `direction`, or alternatively what `text-align: left` means) to its "right" side *physically* goes from:
   *
   * * `ltr` for `horizontal-tb`
   * * `ttb` for `vertical-rl`, `vertical-lr`, & `sideways-rl`
   * * `btt` for `sideways-lr`
   */
  leftRightDirection: PhysicalDirection;
}
/**
 * Allows a component to use the boolean result of a media query as part of its render.
 *
 * @remarks **Note the return type** is ***not*** a boolean; it is an object that contains
 * a boolean and a stable getter.
 *
 * Please note that there is a re-render penalty incurred by using this hook -- it will
 * always cause any component that uses it to re-render one extra time on mount as it
 * stores the result of the media query. This can be mitigated with the `defaultGuess`
 * parameter -- if you guess correctly (`true`/`false`), then there's no penalty. Hooray.
 *
 * @param query - Must be in parens, e.g. `(max-width: 600px)`
 * @param defaultGuess - Optional. If you pass the same value that's measured after rendering, no re-render will occur.
 * @returns `UseMediaQueryReturnType`.
 */
export declare function useMediaQuery(query: string | null | undefined, defaultGuess?: boolean): UseMediaQueryReturnType;
interface UseMediaQueryReturnType {
  matches: boolean | null;
  getMatches(): boolean | null;
}
interface UseMutationObserverParametersSelf<Tag extends keyof JSX.IntrinsicElements> extends UseRefElementParameters<Tag> {
  onChildList: null | ((info: {
    addedNodes: NodeList;
    removedNodes: NodeList;
  }) => void);
  onAttributes: null | ((info: {
    attributeName: string | null;
    attributeNamespace: string | null;
    oldValue?: string | null;
  }) => void);
  onCharacterData: null | ((info: MutationRecord) => void);
  subtree: boolean;
  characterDataOldValue: boolean;
  attributeOldValue: boolean;
  attributeFilter: string | string[];
}
interface UseMutationObserverParameters<Tag extends keyof JSX.IntrinsicElements> extends UseRefElementParameters<Tag> {
  mutationObserverParameters: UseMutationObserverParametersSelf<Tag>;
}
interface UseMutationObserverReturnType<Tag extends keyof JSX.IntrinsicElements> extends UseRefElementReturnType<Tag> {}
/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export declare function useMutationObserver<Tag extends keyof JSX.IntrinsicElements>({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }: UseMutationObserverParameters<Tag>): UseMutationObserverReturnType<Tag>;
/**
 * Allows you to inspect when the entire URL changes,
 * either because the hash changed or because the Back/Forward
 * browser buttons were pressed.
 *
 * @remarks If the URL is set programmatically
 * in a way that doesn't trigger either of those, like
 * `history.replaceState`, well, 🤷 there's no way to track that.
 * So beware of other libraries that modify page history out from under you.
 *
 * In general, you'll want to inspect a specific directory of
 * a path, or a specific query parameter value, not the
 * entire URL.
 */
export declare function useUrl(onUrlChange: (url: string) => void): readonly [() => string, (newUrlOrSetter: (string | ((prev: string | undefined) => string)), action: "push" | "replace") => void];
/**
 * Combines the semantics of `useAsync` and `useEffect`.
 *
 * @remarks More specifically, if an event would run again, but the previous async event is still running,
 * then we'll wait until it finishes to run the new effect.
 * And while waiting, further new effect runs will bump old ones off,
 * only remembering the most recent request.
 *
 * @returns All values from `useAsync`, except for `syncHandler`.
 */
export declare function useAsyncEffect<I extends Inputs>(effect: () => Promise<(void | (() => void))>, inputs?: I, options?: OmitStrong<UseAsyncParameters<[void], [void]>, "capture">): {
  pending: boolean;
  debouncingSync: boolean;
  debouncingAsync: boolean;
  callCount: number;
  settleCount: number;
  resolveCount: number;
  rejectCount: number;
  result: void | (() => void) | undefined;
  hasResult: boolean;
  error: unknown;
  hasError: boolean;
  invocationResult: "async" | "sync" | "throw" | null;
  flushDebouncedPromise: () => void;
};
/**
 * Wrap the native `useEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect - Same as the default
 * @param inputs - Same as the default
 * @param impl - You can choose whether to use `useEffect` or `useLayoutEffect` by
 * passing one of them as this argument. By default, it's `useEffect`.
 */
export declare function useEffectDebug<I extends Inputs>(effect: (prev: I | undefined, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs?: I, impl?: typeof useEffect): void;
interface EffectChange<I extends Inputs, N extends number> {
  from: I[N];
  to: I[N];
}
/**
 * Returns a function that will, when called, force the component
 * that uses this hook to re-render itself.
 *
 * @remarks It's a bit smelly, so best to use sparingly.
 */
export declare function useForceUpdate(): () => void;
/**
 * Wrap the native `useLayoutEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect - Same as the built-in's
 * @param inputs - Same as the built-in's
 */
export declare function useLayoutEffectDebug<I extends Inputs>(effect: (prev: I | undefined, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs?: I): void;
/**
 * All types allowed by `usePersistentState`.
 *
 * Use module augmentation to add new properties to this object that `usePersistentState` will correctly understand:
 *
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ```
 */
export interface PersistentStates {}
export declare const PersistentStates: PersistentStates;
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function getFromLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, converter?: ((input: string) => PersistentStates[Key]), storage?: Storage): PersistentStates[Key] | null;
export declare function storeToLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, value: PersistentStates[Key], converter?: ((input: PersistentStates[Key]) => string), storage?: Storage): void;
/**
 * @remarks Use module augmentation to get the correct types for this function.
 *
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ```
 * @param key -
 * @param initialValue -
 * @param fromString -
 * @param toString -
 * @returns
 */
export declare function usePersistentState<Key extends keyof PersistentStates, T = PersistentStates[Key]>(key: Key | null, initialValue: T, fromString?: ((value: string) => T), toString?: ((value: T) => string), storage?: Storage): [T, StateUpdater<T>, () => T];
/**
 * Passes props onto another set of props' `children`.
 *
 * @details If `children` is a VNode (e.g. a `<div>` or a `<Component>`), then the props are spread to that.
 * Otherwise, a new element is created with the `Tag` parameter, which defaults to `"span"`
 *
 * @param children
 * @param props
 * @param ref
 * @param Tag
 * @returns
 */
export declare function usePropsOnChildren(children: ElementProps<any>["children"] | undefined | null, props: ElementProps<any>, ref: Ref<any> | null | undefined, Tag?: keyof JSX.IntrinsicElements): import("preact").VNode<import("preact").DOMAttributes<HTMLInputElement> & import("preact").ClassAttributes<HTMLInputElement>>;
type OnParamValueChanged<T> = OnPassiveStateChange<T, never>;
type SetParamWithHistory<T> = (value: T | ((prevValue: T) => T), reason?: "push" | "replace") => void;
/**
 * All types allowed by `useSearchParamState`.
 *
 * Use module augmentation to add new properties to this object that `useSearchParamState` will correctly understand:
 *
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface SearchParamStates {
 *         numberState: number;
 *         stringState: string;
 *     \}
 * \}
 * ```
 */
export interface SearchParamStates {}
export declare const SearchParamStates: SearchParamStates;
interface UseSearchParamStateParameters<Key extends keyof SearchParamStates, T = SearchParamStates[Key]> {
  key: Key;
  /** If there is no value in the URL for this state, then `initialValue` will be used instead. */
  initialValue: T;
  /**
   * How is the user's history modified when the state changes if not otherwise specified?
   * "`replace`" is recommended unless you *really* have a good reason to clog up the back button.
   */
  defaultReason?: Nullable<"push" | "replace">;
  onValueChange?: Nullable<OnParamValueChanged<T> | null | undefined>;
  stringToValue: ((value: string | null) => T | null);
  valueToString?: Nullable<((value: T | null) => (string | null)) | undefined>;
}
/**
 * Provides access to the requested Search Param's value
 *
 * @remarks Note that while this function is like usePassiveState (itself like useState and useEffect combined),
 * the `setState` return function is, due to browser limitations, not synchronous, but that's
 * like most calls to `setState` anyway I guess?
 *
 * {@include } {@link UseSearchParamStateParameters}
 *
 * {@include } {@link SearchParamStates}
 *
 * @param paramKey - The name of the URL search parameter to reference
 * @param type - The type of data encode/decode (`"string"` | `"boolean"` | `"number"` | `"bigint"`)
 * @param onParamValueChanged - Will be called any time the requested Search Parameter's value changes.
 */
export declare function useSearchParamState<Key extends keyof SearchParamStates>({ key: paramKey, defaultReason, stringToValue, initialValue, onValueChange, valueToString }: UseSearchParamStateParameters<Key, SearchParamStates[Key]>): readonly [() => SearchParamStates[Key], SetParamWithHistory<SearchParamStates[Key]>];
/**
 *
 */
export declare function useSearchParamStateDeclarative<Key extends keyof SearchParamStates>({ key, defaultReason, stringToValue, initialValue, valueToString }: OmitStrong<UseSearchParamStateParameters<Key, SearchParamStates[Key]>, "onValueChange">): readonly [SearchParamStates[Key], SetParamWithHistory<SearchParamStates[Key]>, () => SearchParamStates[Key]];
type Stable<T> = T;
/**
 * Alternate useCallback() which always returns the same (wrapped) function reference
 * so that it can be excluded from the dependency arrays of `useEffect` and friends.
 *
 * @remarks In general, just pass the function you want to be stable (but you can't use it during render,
 * so be careful!).  Alternatively, if you need a stable callback that **can** be used
 * during render, pass an empty dependency array and it'll act like `useCallback` with an
 * empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it
 * truly has no dependencies/only stable dependencies!!
 */
export declare function useStableCallback<T extends Function | null | undefined>(fn: NonNullable<T>, noDeps?: [] | null | undefined): Stable<NonNullable<T>>;
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useStableMergedCallback<T extends (Function | null | undefined)[]>(...fns: T): NonNullable<T[number]>;
/**
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * @remarks This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 */
export declare function useStableGetter<T>(value: T): () => T;
/**
 * Like useMemo, but checks objects (shallowly)
 *
 * @param t
 * @returns
 */
export declare function useMemoObject<T extends {}>(t: T): T;
/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 *
 * @remarks If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
 * take the stack at the time the hook was called and save it to `window._setState_stack`.
 * Useful if you want to trace whose state is being updated.
 *
 * @param initialState - Same as the built-in `setState`'s
 */
export declare function useState<T>(initialState: T | (() => T)): readonly [value: T, setValue: StateUpdater<T>, getValue: () => T];
/**
 *
 */
export declare function useWhatCausedRender(who: string, { props, state }: {
  props: any;
  state: any;
}): void;
type RafCallbackType = (msSinceLast: number, tag?: any) => void;
interface ContextType {
  addCallback: (callback: RafCallbackType, tag?: any) => void;
  removeCallback: (callback: RafCallbackType) => void;
}
/**
 * When a bunch of unrelated components all use `requestAnimationFrame`,
 * yes, this actually is faster. I wish it wasn't. It's lame.
 */
export declare function ProvideBatchedAnimationFrames({ children }: {
  children: ComponentChildren;
}): import("preact").VNode<{
  value: ContextType | null;
  children?: ComponentChildren;
}>;
interface UseAnimationFrameParameters {
  /**
   * Callback with effectively the same rules as `requestAnimationFrame`
   *
   * Doesn't need to be stable.
   */
  callback: Nullable<((msSinceLast: number) => void)>;
}
/**
 * The callback you provide will start running every frame after the component mounts.
 *
 * @remarks Passing `null` is fine and simply stops the effect until you restart it by providing a non-null callback; it doesn't need to be stable.
 *
 * {@include } {@link UseAnimationFrameParameters}
 *
 * {@include } {@link ProvideBatchedAnimationFrames}
 */
export declare function useAnimationFrame({ callback }: UseAnimationFrameParameters): void;
interface UseIntervalParameters {
  /**
   * The number of ms to wait before invoking `callback`.
   */
  interval: Nullable<number>;
  /**
   * Called `timeout` ms after mount, or the last change to `triggerIndex`.
   */
  callback: () => void;
  /**
   * By default, the callback will be called as soon as interval is non-null, and then on every interval afterwards.
   *
   * Set this to true to only call the callback after the first interval has passed.
   */
  noRisingEdge?: boolean;
}
/**
 * Runs a function every time the specified number of milliseconds elapses while the component is mounted.
 *
 * @remarks
 * {@include } {@link UseIntervalParameters}
 */
export declare function useInterval({ interval, callback, noRisingEdge }: UseIntervalParameters): void;
interface UseTimeoutParameters {
  /**
   * The number of ms to wait before invoking `callback`.
   * If `null`, cancels the timeout immediately.
   */
  timeout: Nullable<number>;
  /**
   * Changes to this prop between renders can be used to clear the current timeout and create a new one.
   */
  triggerIndex?: unknown;
  /**
   * Called `timeout` ms after mount, or the last change to `triggerIndex`.
   *
   * Does *not* need to be stable. Go ahead and pass an anonymous function.
   */
  callback: () => void;
}
/**
 * Runs a function the specified number of milliseconds after the component renders.
 *
 * @remarks This is particularly useful to function as "useEffect on a delay".
 *
 * @remarks
 * {@include } {@link UseTimeoutParameters}
 */
export declare function useTimeout({ timeout, callback, triggerIndex }: UseTimeoutParameters): {
  getElapsedTime: () => number;
  getRemainingTime: () => number | null;
};
/**
 * Throws a (Typescript compiler) error if the passed object is anything but the empty object `{\}` or `void`.
 *
 * **Does nothing at runtime -- type checking only.**
 *
 * Use this to ensure that your spread operators work correctly and cover all cases.
 *
 * @param _a - The remaining spread parameters of a given object that you expect to be empty (because you properly accounted for all the properties that exist in it, and want to ensure it stays that way)
 */
export declare function assertEmptyObject<T extends {} | void>(_a: [keyof T] extends [never] ? T : [T] extends [void] ? void : `Unhandled keys in this rest spread object!`): void;
declare global {
  const process: {
    env: {
      NODE_ENV: "production" | "development";
    };
  };
}
/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
export declare function focus(e: Element | null): void;
/**
 * When an element unmounts, default HTML behavior is to just send focus to the body, which is wildly unhelpful. It means you lose your place in the keyboard tab order.
 *
 * If you still have access to the element that's unmounting, or perhaps its parent from beforehand, this will find the next suitable element to send focus to instead of the body.
 *
 * **Important**: This function is linear on the number of DOM nodes in your document, so it's not particularly fast. Only call it once when you need its value, not every time tab focus changed or something.
 */
export declare function findBackupFocus(unmountingElement: Element | null | undefined): HTMLElement;
export declare function getWindow(element?: Node | null | undefined): Window | undefined;
declare function getDocument$1(element?: Node | null | undefined): Document | undefined;
/**
 * Returns a randomly-generated ID with an optional prefix.
 * Note that if the prefix is *explicitly* set to "", then
 * IDs that are not valid under HTML4 may be generated. Oh no.
 *
 *
 * (This is here, in this particular file, to avoid circular dependencies
 * because useBeforeLayoutEffect also needs random IDs for its own reasons)
 */
export declare function generateRandomId(prefix?: string): string;
export declare function generateStack(): string | undefined;
/**
 * Returns a function that retrieves the stack at the time this hook was called (in development mode only).
 *
 * @remarks The global variable `_generate_setState_stacks` must be true, or no stack will be generated.
 */
export declare function useStack(): () => string | undefined;
/**
 * Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling (only if process.env.NODE_ENV is "development").
 *
 * @remarks Some of the more basic hooks, like `setState`, do not call `useMonitoring` at all.
 * They are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 */
export declare function useMonitoring<T extends (...args: any[]) => any>(originalHook: T): ReturnType<T>;
/**
 *
 */
export declare function hideCallCount(hook: Function | "all"): void;
export { type AsyncHandler, type CSSProperties, type Compare, type CompleteGridNavigationCellContext, type CompleteGridNavigationRowContext, type CompleteListNavigationContext, type ComponentChildren, type ComponentType, type CompositionEventTypeByTag, type Context, type DangerouslyAppendHTML, type DangerouslySetInnerHTML, type DismissListenerTypes, type DragEventTypeByTag, type DropFile, type DropFileMetadata, type DroppableFileError, type EffectCallback, type ElementProps, type ElementSize, type EnhancedEventHandler, type EventTypeByTag, type ExtendMerge, type FocusEventTypeByTag, Fragment, type GetAttribute, type GetHighestChildIndex, type GetIndex, type GetValid, type GridChildCellInfo, type GridChildRowInfo, type GridSelectChildCellInfo, type GridSelectChildRowInfo, type HasClass, type HasLastFocusReturnTypeSelf, type Inputs, type JSX, type KeyboardEventTypeByTag, type LinearNavigationResult, type LogicalDirectionInfo, type LogicalElementSize, type LogicalOrientation, type MakeMultiSelectionChildDeclarativeParameters, type MakeMultiSelectionChildDeclarativeReturnType, type MakeSelectionDeclarativeChildParameters, type MakeSelectionDeclarativeChildReturnType, type MakeSelectionDeclarativeParameters, type MakeSelectionDeclarativeReturnType, type MakeSingleSelectionDeclarativeParameters, type MakeSingleSelectionDeclarativeReturnType, type ManagedChildInfo, type ManagedChildren, type MouseEventTypeByTag, type MultiSelectChildChangeEvent, type MultiSelectChildChangeHandler, type MultiSelectionChangeEvent, type Nullable, type OmitStrong, type OnAfterChildLayoutEffect, type OnChildrenMountChange, type OnParamValueChanged, type OnPassiveStateChange, type OnTabbableIndexChange, type PassiveStateUpdater, type PhysicalDirection, type PhysicalOrientation, type PhysicalSize, type PointerEventTypeByTag, type PortalChildUpdater, type PressChangeEventReason, type PressEventReason, type ProcessedIndexMangler, type PushPortalChild, type Reducer, type Ref, type RefCallback, type RefObject, type RemovePortalChild, type RenderableProps, type RovingTabIndexChildContext, type RovingTabIndexChildContextSelf, type SetAttribute, type SetChildren, type SetClass, type SetEventHandler, type SetParamWithHistory, type SetStyle, type SetTabbableIndex, type SingleSelectionChangeEvent, type SingleSelectionChangeHandler, type SingleSelectionContextSelf, type StateUpdater, type TabbableColumnInfo, type TagToElement, type TargetedEnhancedEvent, type TargetedOmit, type TargetedPick, type TouchEventTypeByTag, type TryNavigateToIndexParameters, type UpdatePortalChild, type UseActiveElementParameters, type UseActiveElementParametersSelf, type UseActiveElementReturnType, type UseActiveElementReturnTypeSelf, type UseAnimationFrameParameters, type UseAsyncHandlerParameters, type UseAsyncHandlerReturnType, type UseAsyncParameters, type UseAsyncReturnType, type UseBackdropDismissParameters, type UseBackdropDismissParametersSelf, type UseBlockingElementParameters, type UseBlockingElementParametersSelf, type UseBlockingElementReturnType, type UseChildrenFlagParameters, type UseChildrenFlagReturnType, type UseChildrenHaveFocusChildParameters, type UseChildrenHaveFocusChildReturnType, type UseChildrenHaveFocusContext, type UseChildrenHaveFocusParameters, type UseChildrenHaveFocusParametersSelf, type UseChildrenHaveFocusReturnType, type UseChildrenHaveFocusReturnTypeSelf, type UseCompleteGridNavigationCellInfo, type UseCompleteGridNavigationCellInfoKeysParameters, type UseCompleteGridNavigationCellParameters, type UseCompleteGridNavigationCellReturnType, type UseCompleteGridNavigationContextSelf, type UseCompleteGridNavigationDeclarativeParameters, type UseCompleteGridNavigationDeclarativeReturnType, type UseCompleteGridNavigationParameters, type UseCompleteGridNavigationParametersSelf, type UseCompleteGridNavigationReturnType, type UseCompleteGridNavigationReturnTypeSelf, type UseCompleteGridNavigationRowDeclarativeParameters, type UseCompleteGridNavigationRowInfo, type UseCompleteGridNavigationRowInfoKeysParameters, type UseCompleteGridNavigationRowOuterParameters, type UseCompleteGridNavigationRowOuterReturnType, type UseCompleteGridNavigationRowParameters, type UseCompleteGridNavigationRowReturnType, type UseCompleteGridNavigationRowsContext, type UseCompleteGridNavigationRowsInfo, type UseCompleteGridNavigationRowsParameters, type UseCompleteGridNavigationRowsReturnType, type UseCompleteListNavigationChildDeclarativeParameters, type UseCompleteListNavigationChildDeclarativeReturnType, type UseCompleteListNavigationChildInfo, type UseCompleteListNavigationChildInfoKeysParameters, type UseCompleteListNavigationChildOuterParameters, type UseCompleteListNavigationChildOuterReturnType, type UseCompleteListNavigationChildParameters, type UseCompleteListNavigationChildReturnType, type UseCompleteListNavigationChildrenContext, type UseCompleteListNavigationChildrenInfo, type UseCompleteListNavigationChildrenParameters, type UseCompleteListNavigationChildrenReturnType, type UseCompleteListNavigationContextSelf, type UseCompleteListNavigationDeclarativeParameters, type UseCompleteListNavigationDeclarativeReturnType, type UseCompleteListNavigationParameters, type UseCompleteListNavigationParametersSelf, type UseCompleteListNavigationReturnType, type UseCompleteListNavigationReturnTypeSelf, type UseDismissParameters, type UseDismissParametersSelf, type UseDismissReturnType, type UseDraggableParameters, type UseDraggableReturnType, type UseDroppableParameters, type UseDroppableReturnType, type UseElementSizeParameters, type UseElementSizeParametersSelf, type UseElementSizeReturnType, type UseElementSizeReturnTypeSelf, type UseEscapeDismissParameters, type UseEscapeDismissParametersSelf, type UseFocusTrapParameters, type UseFocusTrapParametersSelf, type UseFocusTrapReturnType, type UseGenericChildParameters, type UseGridNavigationCellContext, type UseGridNavigationCellContextSelf, type UseGridNavigationCellInfoKeysParameters, type UseGridNavigationCellInfoKeysReturnType, type UseGridNavigationCellParameters, type UseGridNavigationCellParametersSelf, type UseGridNavigationCellReturnType, type UseGridNavigationCellSelectionContext, type UseGridNavigationParameters, type UseGridNavigationParametersSelf, type UseGridNavigationReturnType, type UseGridNavigationRowContext, type UseGridNavigationRowContextSelf, type UseGridNavigationRowInfoKeysParameters, type UseGridNavigationRowInfoKeysReturnType, type UseGridNavigationRowParameters, type UseGridNavigationRowReturnType, type UseGridNavigationRowSelectionContext, type UseGridNavigationSelectionCellInfoKeysParameters, type UseGridNavigationSelectionCellInfoKeysReturnType, type UseGridNavigationSelectionCellParameters, type UseGridNavigationSelectionCellReturnType, type UseGridNavigationSelectionParameters, type UseGridNavigationSelectionReturnType, type UseGridNavigationSelectionRowInfoKeysParameters, type UseGridNavigationSelectionRowInfoKeysReturnType, type UseGridNavigationSelectionRowParameters, type UseGridNavigationSelectionRowReturnType, type UseHasCurrentFocusParameters, type UseHasCurrentFocusParametersSelf, type UseHasCurrentFocusReturnType, type UseHasCurrentFocusReturnTypeSelf, type UseHasLastFocusParameters, type UseHasLastFocusParametersSelf, type UseHasLastFocusReturnType, type UseHideScrollReturnType, type UseImperativePropsParameters, type UseImperativePropsReturnType, type UseImperativePropsReturnTypeSelf, type UseIntervalParameters, type UseLinearNavigationParameters, type UseLinearNavigationParametersSelf, type UseLinearNavigationReturnType, type UseLinearNavigationReturnTypeSelf, type UseListNavigationChildInfo, type UseListNavigationChildInfoKeysParameters, type UseListNavigationChildInfoKeysReturnType, type UseListNavigationChildParameters, type UseListNavigationChildReturnType, type UseListNavigationContext, type UseListNavigationParameters, type UseListNavigationReturnType, type UseListNavigationSelectionChildContext, type UseListNavigationSelectionChildInfo, type UseListNavigationSelectionChildInfoKeysParameters, type UseListNavigationSelectionChildInfoKeysReturnType, type UseListNavigationSelectionChildParameters, type UseListNavigationSelectionChildReturnType, type UseListNavigationSelectionParameters, type UseListNavigationSelectionReturnType, type UseLogicalDirectionParameters, type UseLogicalDirectionReturnType, type UseLostFocusDismissParameters, type UseLostFocusDismissParametersSelf, type UseLostFocusDismissReturnType, type UseManagedChildParameters, type UseManagedChildReturnType, type UseManagedChildReturnTypeSelf, type UseManagedChildrenContext, type UseManagedChildrenContextSelf, type UseManagedChildrenParameters, type UseManagedChildrenParametersSelf, type UseManagedChildrenReturnType, type UseManagedChildrenReturnTypeSelf, type UseMediaQueryReturnType, type UseModalParameters, type UseModalParametersSelf, type UseModalReturnType, type UseMultiSelectionChildDeclarativeParameters, type UseMultiSelectionChildDeclarativeReturnType, type UseMultiSelectionChildInfo, type UseMultiSelectionChildInfoKeysParameters, type UseMultiSelectionChildInfoKeysReturnType, type UseMultiSelectionChildParameters, type UseMultiSelectionChildParametersSelf, type UseMultiSelectionChildReturnType, type UseMultiSelectionChildReturnTypeSelf, type UseMultiSelectionContext, type UseMultiSelectionContextSelf, type UseMultiSelectionParameters, type UseMultiSelectionParametersSelf, type UseMultiSelectionReturnType, type UseMultiSelectionReturnTypeSelf, type UseMutationObserverParameters, type UseMutationObserverParametersSelf, type UseMutationObserverReturnType, type UsePaginatedChildContext, type UsePaginatedChildContextSelf, type UsePaginatedChildParameters, type UsePaginatedChildReturnType, type UsePaginatedChildReturnTypeSelf, type UsePaginatedChildrenInfo, type UsePaginatedChildrenParameters, type UsePaginatedChildrenParametersSelf, type UsePaginatedChildrenReturnType, type UsePaginatedChildrenReturnTypeSelf, type UsePassiveStateOptions, type UsePortalChildrenParameters, type UsePortalChildrenReturnType, type UsePressAsyncParameters, type UsePressAsyncReturnType, type UsePressParameters, type UsePressParametersSelf, type UsePressReturnType, type UsePressReturnTypeSelf, type UseProcessedChildContext, type UseProcessedChildInfo, type UseProcessedChildInfoKeysParameters, type UseProcessedChildInfoKeysReturnType, type UseProcessedChildParameters, type UseProcessedChildReturnType, type UseProcessedChildrenContext, type UseProcessedChildrenContextSelf, type UseProcessedChildrenParameters, type UseProcessedChildrenReturnType, type UseProcessedIndexManglerContext, type UseProcessedIndexManglerContextSelf, type UseProcessedIndexManglerParameters, type UseProcessedIndexManglerParametersSelf, type UseProcessedIndexManglerReturnType, type UseProcessedIndexManglerReturnTypeSelf, type UseRandomDualIdsParameters, type UseRandomDualIdsReturnType, type UseRandomIdParameters, type UseRandomIdParametersSelf, type UseRandomIdReturnType, type UseRandomIdReturnTypeSelf, type UseRearrangeableChildInfo, type UseRearrangeableChildParameters, type UseRearrangeableChildParametersSelf, type UseRearrangeableChildReturnType, type UseRearrangeableChildrenContext, type UseRearrangeableChildrenContextSelf, type UseRearrangeableChildrenParameters, type UseRearrangeableChildrenParametersSelf, type UseRearrangeableChildrenReturnType, type UseRearrangeableChildrenReturnTypeSelf, type UseRearrangedChildrenContext, type UseRearrangedChildrenContextSelf, type UseRefElementParameters, type UseRefElementParametersSelf, type UseRefElementReturnType, type UseRefElementReturnTypeSelf, type UseRovingTabIndexChildInfo, type UseRovingTabIndexChildInfoKeysParameters, type UseRovingTabIndexChildInfoKeysReturnType, type UseRovingTabIndexChildParameters, type UseRovingTabIndexChildReturnType, type UseRovingTabIndexChildReturnTypeSelf, type UseRovingTabIndexParameters, type UseRovingTabIndexParametersSelf, type UseRovingTabIndexReturnType, type UseRovingTabIndexReturnTypeSelf, type UseSearchParamStateParameters, type UseSelectionChildDeclarativeParameters, type UseSelectionChildInfo, type UseSelectionChildInfoKeysParameters, type UseSelectionChildInfoKeysReturnType, type UseSelectionChildParameters, type UseSelectionChildReturnType, type UseSelectionChildReturnTypeSelf, type UseSelectionContext, type UseSelectionDeclarativeParameters, type UseSelectionParameters, type UseSelectionReturnType, type UseSingleSelectionChildInfo, type UseSingleSelectionChildInfoKeysParameters, type UseSingleSelectionChildInfoKeysReturnType, type UseSingleSelectionChildParameters, type UseSingleSelectionChildParametersSelf, type UseSingleSelectionChildReturnType, type UseSingleSelectionChildReturnTypeSelf, type UseSingleSelectionContext, type UseSingleSelectionDeclarativeParameters, type UseSingleSelectionDeclarativeParametersSelf, type UseSingleSelectionParameters, type UseSingleSelectionParametersSelf, type UseSingleSelectionReturnType, type UseSingleSelectionReturnTypeSelf, type UseStaggeredChildContext, type UseStaggeredChildContextSelf, type UseStaggeredChildParameters, type UseStaggeredChildReturnType, type UseStaggeredChildReturnTypeSelf, type UseStaggeredChildrenInfo, type UseStaggeredChildrenParameters, type UseStaggeredChildrenParametersSelf, type UseStaggeredChildrenReturnType, type UseStaggeredChildrenReturnTypeSelf, type UseTextContentParameters, type UseTextContentParametersSelf, type UseTextContentReturnType, type UseTextContentReturnTypeSelf, type UseTimeoutParameters, type UseTypeaheadNavigationChildInfo, type UseTypeaheadNavigationChildInfoKeysParameters, type UseTypeaheadNavigationChildInfoKeysReturnType, type UseTypeaheadNavigationChildParameters, type UseTypeaheadNavigationChildReturnType, type UseTypeaheadNavigationContext, type UseTypeaheadNavigationContextSelf, type UseTypeaheadNavigationParameters, type UseTypeaheadNavigationParametersSelf, type UseTypeaheadNavigationReturnType, type UseTypeaheadNavigationReturnTypeSelf, type VNode, cloneElement, createContext, createElement, createPortal, forwardRef, getDocument$1 as getDocument, identity, memo, useBeforeLayoutEffect, useCallback, useContext, useDebugValue, useEffect, useEffectEvent, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState$1 as useStateBasic };
//# sourceMappingURL=index.d.mts.map