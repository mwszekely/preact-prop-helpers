/**
 * # Preact Prop Helpers
 *
 * A set of small, compartmentalized hooks for Preact. The theme is modifying HTML attributes to do useful things, along with a bunch of other useful boilerplate-y hooks.
 *
 * Everything from keyboard navigation (arrow keys, typeahead) to modal focus traps (dialogs and menus) to simple things like state management *but with localStorage!* are here.
 *
 * ## List of hooks (in rough order of usefulness)
 *
 * {@tableOfContents start}
 * {@tableOfContents header Common}
 * {@tableOfContents subheader These hooks are used extremely commonly or provide uncommonly useful behavior}
 * {@include } {@link useMergedProps}
 * {@include } {@link useRefElement}
 * {@include } {@link usePress}
 * {@include } {@link useCompleteListNavigation}
 * {@include } {@link useCompleteGridNavigation}
 * {@include } {@link useModal}
 * {@include } {@link useAsyncHandler}
 * {@tableOfContents header Specific}
 * {@tableOfContents subheader Very useful in very specific cases}
 * {@include } {@link useElementSize}
 * {@include } {@link useHideScroll}
 * {@include } {@link useMediaQuery}
 * {@include } {@link useHasCurrentFocus}
 * {@include } {@link useHasLastFocus}
 * {@include } {@link useChildrenHaveFocus}
 * {@include } {@link useRandomId}
 * {@include } {@link useRandomDualIds}
 * {@include } {@link useGlobalHandler}
 * {@include } {@link useDocumentClass}
 * {@tableOfContents header Niche}
 * {@include } {@link useAsyncEffect}
 * {@include } {@link useMutationObserver}
 * {@include } {@link useTextContent}
 * {@include } {@link useImperativeProps}
 * {@include } {@link usePortalChildren}
 * {@include } {@link useActiveElement}
 * {@include } {@link useDraggable}
 * {@include } {@link useDroppable}
 * {@include } {@link useLogicalDirection}
 * {@tableOfContents header Extensions}
 * {@tableOfContents subheader These hooks don't do anything with HTML elements but are useful extensions to Preact's built-in hooks}
 * {@include } {@link useStableGetter}
 * {@include } {@link useStableCallback}
 * {@include } {@link useMemoObject}
 * {@include } {@link useForceUpdate}
 * {@include } {@link useState}
 * {@include } {@link usePassiveState}
 * {@include } {@link usePersistentState}
 * {@include } {@link useSearchParamState}
 * {@include } {@link useTimeout}
 * {@include } {@link useInterval}
 * {@include } {@link useAnimationFrame}
 * {@include } {@link useEffectDebug}
 * {@include } {@link useLayoutEffectDebug}
 * {@tableOfContents header Building blocks and other helpers}
 * {@tableOfContents subheader These hooks are primarily used to build larger hooks, but can be used alone}
 * {@include } {@link useManagedChildren}
 * {@include } {@link useListNavigation}
 * {@include } {@link useGridNavigation}
 * {@include } {@link useRovingTabIndex}
 * {@include } {@link useLinearNavigation}
 * {@include } {@link useTypeaheadNavigation}
 * {@include } {@link useSingleSelection}
 * {@include } {@link useRearrangeableChildren}
 * {@include } {@link useSortableChildren}
 * {@include } {@link usePaginatedChildren}
 * {@include } {@link useStaggeredChildren}
 * {@include } {@link useDismiss}
 * {@include } {@link useBackdropDismiss}
 * {@include } {@link useEscapeDismiss}
 * {@include } {@link useLostFocusDismiss}
 * {@include } {@link useFocusTrap}
 * {@include } {@link useAsync}
 * {@include } {@link useUrl}
 * {@include } {@link useMergedRefs}
 * {@include } {@link useMergedClasses}
 * {@include } {@link useMergedChildren}
 * {@include } {@link useMergedStyles}
 * {@tableOfContents end}
 *
 * {@include } {@link ElementProps}
 * {@include } {@link OmitStrong}
 * {@include } {@link Nullable}
 *
 * ```md-literal
 * ## Conventions and goals
 *
 * * As much as possible, no specific DOM restrictions are imposed and, for hooks with children (lists, grids, etc.), those children can be anywhere descendent in the tree (except for `useSortableChildren`, which can be anywhere descendant but must all be in an array). Nesting hooks, even of the same type, is also fine.
 *     *  E.G. `useRovingTabIndexChild` can call its own `useRovingTabIndex`, which is how `useGridNavigation` works.
 * * A parent hook never needs to be directly passed child data because the children will provide it themselves. E.G. `useListNavigation` can filter children, but it doesn't take an array of which children to filter out; each child reports its own status as filtered/unfiltered with, say, a `hidden` prop, and the parent responds to that.
 * * Re-render as few times as possible. In general this means instead of a hook returning a value, it will accept an `onChange`-ish handler that will let you explicitly do that.
 *     * `useElementSize`, for example, has no way of returning the size the first time its component renders. It needs to fully render *and then* run an effect that measures it. Once the element's been measured, *you* are responsible for choosing if the component is re-rendered with this new information or not.
 *     * This means that the child data is *always* the single source of truth, and maps nicely to how components are built and diffed.
 * * Some of these hooks, like `useGridNavigationRow`, have **extremely** complicated dependencies. To manage this, most hooks take a single parameter and return a single object with everything labelled consistently and designed to be discoverable via auto-complete. If we have `useFoo`, it:
 *     * ...will always take parameters like `{ fooParameters: {...} }`.
 *         * E.G. `useElementRef({ elementRefParameters: { onMount: ... } })`
 *     * ...will always return objects like `{ fooReturn: { ... } }`
 *         * E.G. `const { refElementReturn: { getElement } } = useElementRef(...)`
 *     * ...may also return `{ props: {...} }`. These must be spread onto the element you're rendering, or the hook will not function (see `useMergedProps` if you need to use other props in addition to the returned props). It may occasionally be called something else starting with `props`, e.g. `propsStable`, `propsTarget`, etc.
 *         * E.G. `const { propsStable } = useElementRef(...)`, then `<div {...propsStable} />`
 *         * `propsStable` indicates that nothing about the object ever changes including the identity of the object itself and all its fields.
 *     * ...may also return `{ context: { ... } }` that children rely on.
 *         1. E.G. Parent calls `const { context } = useFoo(...);`
 *         1. Parent renders `<MyContext.Provider value={context}>{children}</MyContext.Provider>`
 *         1. Then child calls `useFooChild({ context: useContext(MyContext), fooChildParameters: {...} })`
 *     * ...may also require or return `{ info: { ... } }` if it has something to contribute to `useManagedChild`'s special `info` parameter.
 *     * When hooks themselves use other hooks:
 *         * If `useFoo` calls `useBar` directly, then it will take parameters like `{ fooParameters: {...}, barParameters: {...} }` and return objects like `{ fooReturn: {...}, barReturn: {...} }`.
 *         * If `useFoo` relies on `useBar` (but doesn't call it itself!), then will do one of the following:
 *             * Take parameters like `{ fooParameters: { ... }, barReturn: { ... } }`, if it needs the return value of `useBar`.
 *             * Return values like `{ fooReturn: { ... }, barParameters: { ... } }`, if it needs `useBar` to be called with specific parameters in order to function (usually callbacks).
 *         * (The difference between those two is usually based on performance -- many, many hooks rely on `elementRefReturn.getElement`, for example, so the latter pattern allows us to just call `useRefElement` once and pass the result around to whoever needs it)
 *         * If `useFoo` and `useBar` both return a top-level `props`, they will be merged into one.
 *         * If `useFoo` and `useBar` both return a top-level `context`, they will be merged into one.
 *         * If `useFoo` and `useBar` both return a top-level `info`, they will be merged into one.
 *         * Occasionally, `props` or `context` may be suffixed with the specific role they refer to:
 *             * `useRandomId` returns `propsSource` and `propsReferencer` (and no `props`).
 * * Organizationally, some hooks exist primarily to be used as a part of a larger hook.  Hooks within the `component-use` folder are generally "ready-to-use" and don't require much passing of parameters back and forth, but are not fully extensible.  Hooks within `component-detail` are the lower-level building blocks that make up those "ready-to-use" complete hooks, but they're much more time-consuming to use.
 *     * You can also just copy and paste one of the complete hooks somewhere else and use it as a new building block...
 * ```
 *
 * @packageDocumentation
 */

import { CaptureFunctionType } from 'async-to-sync';
import { clsx } from 'clsx';
import { identity } from 'lodash-es';
import { Inputs } from 'preact/hooks';
import type { JSX } from 'preact';
import { JSX as JSX_2 } from '../util/lib.js';
import { Ref } from 'preact';
import { RefCallback } from 'preact';
import { RefObject } from 'preact';
import { RenderableProps } from 'preact';
import { StateUpdater } from 'preact/hooks';
import { useEffect } from 'preact/hooks';
import { VNode as VNode_2 } from 'preact';

/**
 * Does nothing at runtime -- type checking only.
 *
 * Throws a (Typescript compiler) error if the passed object is anything but the empty object `{\}`.
 *
 * Use this to ensure that your spread operators work correctly and cover all cases.
 *
 * @param _a - The remaining spread parameters of a given object that you expect to be empty (because you properly accounted for all the properties that exist in it, and want to ensure it stays that way)
 */
export declare function assertEmptyObject<T extends {}>(_a: [keyof T] extends [never] ? T : `Unhandled keys in this rest spread object!`): void;

declare type AsyncFunctionType<AP extends unknown[], R> = ((...args: AP) => (R | Promise<R>));

export declare type AsyncHandler<EventType, CaptureType> = ((c: CaptureType, e: EventType) => (Promise<void> | void));

/**
 * Your usual binary search implementation.
 *
 * It's used here to quickly find a good spot to start searching for our next typeahead candidate.
 * @param array - The array to search through
 * @param wanted - The value you'd like to find
 * @param comparator - Compares `wanted` with the current value in `array`
 * @returns A non-negative value if `wanted` was found, and a negative number if not.
 * The absolute value of this number, minus one, is where `wanted` *would* be found if it *was* in `array`
 */
export declare function binarySearch<T, U, F extends (lhs: U, rhs: T) => number>(array: T[], wanted: U, comparator: F): number;

declare function callCountU(hook: Function): void;

export declare type Compare<M extends UseRearrangeableChildInfo> = (lhs: M, rhs: M) => number;

export declare interface CompleteGridNavigationCellContext<ParentElement extends Element, ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildrenContext<CM>, UseTypeaheadNavigationContext, RovingTabIndexChildContext, UseGridNavigationCellContext {
    completeGridNavigationCellContext: {
        excludeSpace: undefined | (() => boolean);
    };
}

export declare interface CompleteGridNavigationRowContext<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, _CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseManagedChildrenContext<RM>, UsePaginatedChildContext, UseStaggeredChildContext, UseChildrenHaveFocusContext<RowElement>, UseTypeaheadNavigationContext, UseSingleSelectionContext, RovingTabIndexChildContext, UseGridNavigationRowContext {
}

export declare interface CompleteListNavigationContext<_ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseManagedChildrenContext<M>, UsePaginatedChildContext, UseStaggeredChildContext, UseChildrenHaveFocusContext<ChildElement>, UseTypeaheadNavigationContext, UseSingleSelectionContext, RovingTabIndexChildContext {
}

export declare type CompositionEventType<E extends EventTarget> = JSX.TargetedCompositionEvent<E>;

export declare type CSSProperties = JSX.CSSProperties;

export declare type DangerouslyAppendHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslyAppendHTML"];

export declare type DangerouslySetInnerHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslySetInnerHTML"];

export declare function debounceRendering(f: () => void): void;

export declare function defaultCompare(lhs: UseSortableChildInfo | undefined, rhs: UseSortableChildInfo | undefined): number;

export declare type DismissListenerTypes = "backdrop" | "lost-focus" | "escape";

export declare interface DropFile extends DropFileMetadata {
    name: string;
    data: ArrayBuffer;
    size: number | undefined;
    lastModified: number | undefined;
}

export declare interface DropFileMetadata {
    type: string | undefined;
}

export declare class DroppableFileError extends Error {
    fileName: string;
    errorType: DroppableFileErrorType;
    constructor(fileName: string, base: DOMException | null);
}

declare type DroppableFileErrorType = "IndexSizeError" | "HierarchyRequestError" | "WrongDocumentError" | "InvalidCharacterError" | "NoModificationAllowedError" | "NotFoundError" | "NotSupportedError" | "InvalidStateError" | "InUseAttributeError" | "SyntaxError" | "InvalidModificationError" | "NamespaceError" | "InvalidAccessError" | "TypeMismatchError" | "SecurityError" | "NetworkError" | "AbortError" | "URLMismatchError" | "QuotaExceededError" | "TimeoutError" | "InvalidNodeTypeError" | "DataCloneError" | "EncodingError" | "NotReadableError" | "UnknownError" | "ConstraintError" | "DataError" | "TransactionInactiveError" | "ReadOnlyError" | "VersionError" | "OperationError" | "NotAllowedError";

declare interface EffectChange<I extends Inputs, N extends number> {
    from: I[N];
    to: I[N];
}

export declare type ElementProps<E extends EventTarget> = JSX.HTMLAttributes<E>;

export declare interface ElementSize {
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

/**
 * When `useMergedProps` encounters a conflict, the function passed here will be called.
 *
 * @defaultValue `console.warn`
 */
export declare function enableLoggingPropConflicts(log2: typeof console["log"]): void;

export declare type EnhancedEventHandler<E extends Event, Detail> = (e: TargetedEnhancedEvent<E, Detail>) => void;

export declare function enhanceEvent<E extends Event, Detail extends object>(e: E, detail: Detail): TargetedEnhancedEvent<E, Detail>;

/**
 * Quick and easy way to add extra information to an event that was fired.
 *
 * For example, "this was a click event, but it has information about what list item was pressed too."
 *
 * Get that extra information from the [EventDetail] symbol.
 */
export declare const EventDetail: unique symbol;

export declare type EventDetail = typeof EventDetail;

export declare type EventType<T extends EventTarget, E extends Event> = JSX.TargetedEvent<T, E>;

/** Combines two interfaces in a way that leaves them still able to be extended (via class, another interface, etc.) */
export declare type ExtendMerge<A, B> = {
    [K in (keyof A) | (keyof B)]: K extends keyof A ? (K extends keyof B ? (A[K] & B[K]) : A[K]) : K extends keyof B ? B[K] : unknown;
};

/**
 * When an element unmounts, default HTML behavior is to just send focus to the body, which is wildly unhelpful. It means you lose your place in the keyboard tab order.
 *
 * If you still have access to the element that's unmounting, or perhaps its parent from beforehand, this will find the next suitable element to send focus to instead of the body.
 *
 * **Important**: This function is linear on the number of DOM nodes in your document, so it's not particularly fast. Only call it once when you need its value, not every time tab focus changed or something.
 */
export declare function findBackupFocus(unmountingElement: Element | null | undefined): HTMLElement;

/**
 * Returns the first focusable element contained within the given node, or null if none are found.
 */
export declare function findFirstFocusable<T extends Node>(element: T): T | null;

/**
 * Returns the first tabbable element contained within the given node, or null if none are found.
 */
export declare function findFirstTabbable<T extends Node>(element: T): T | null;

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
declare type FirstOverloadParameters<T> = T extends {
    (...args: infer R): any;
    (...args: any[]): any;
    (...args: any[]): any;
    (...args: any[]): infer R;
} ? R : T extends {
    (...args: infer R): any;
    (...args: any[]): any;
    (...args: any[]): any;
} ? R : T extends {
    (...args: infer R): any;
    (...args: any[]): any;
} ? R : T extends (...args: infer R) => any ? R : [];

/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
declare function focus_2(e: Element | null): void;
export { focus_2 as focus }

export declare type FocusEventType<E extends EventTarget> = JSX.TargetedFocusEvent<E>;

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

export declare type GetAttribute<T extends Element> = UseImperativePropsReturnTypeSelf<T>["getAttribute"];

export declare function getBuildMode(): "production" | "development";

export declare function getDocument(element?: Node): Document;

export declare function getFromLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, converter?: ((input: string) => PersistentStates[Key]), storage?: Storage): PersistentStates[Key] | null;

export declare type GetHighestChildIndex = () => number;

export declare type GetIndex = (row: VNode) => (number | null | undefined);

export declare type GetValid = (index: number) => boolean;

export declare interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}

export declare interface GridChildRowInfo<RowElement extends Element, _CellElement extends Element> extends UseListNavigationChildInfo<RowElement> {
}

export declare interface GridSingleSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> {
}

export declare interface GridSingleSelectChildRowInfo<RowElement extends Element, CellElement extends Element> extends GridChildRowInfo<RowElement, CellElement>, UseSingleSelectionChildInfo<RowElement> {
}

export declare interface GridSingleSelectSortableChildCellInfo<CellElement extends Element> extends GridSingleSelectChildCellInfo<CellElement> {
}

export declare interface GridSingleSelectSortableChildRowInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectChildRowInfo<RowElement, CellElement>, UseSortableChildInfo {
}

export declare type HasClass = UseImperativePropsReturnTypeSelf<any>["hasClass"];

export declare interface HasLastFocusReturnTypeSelf {
    /** STABLE */
    getLastFocused(): boolean;
    /** STABLE */
    getLastFocusedInner(): boolean;
}

export declare function hideCallCount(hook: Function | "all"): void;

export { identity }

/**
 * Easy access to an HTMLElement that can be controlled imperatively.
 *
 * The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
 *
 * The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
 */
export declare const ImperativeElement: typeof ImperativeElementU;

declare interface ImperativeElementProps<T extends keyof HTMLElementTagNameMap> extends ElementProps<HTMLElementTagNameMap[T]> {
    tag: T;
    handle: Ref<UseImperativePropsReturnTypeSelf<HTMLElementTagNameMap[T]>>;
}

declare function ImperativeElementU<T extends keyof HTMLElementTagNameMap>({ tag: Tag, handle, ...props }: RenderableProps<ImperativeElementProps<T>>, ref: Ref<HTMLElementTagNameMap[T]>): VNode_2<any>;

declare interface InternalChildInfo<M extends ManagedChildInfo<string | number>> {
    arr: Array<M>;
    rec: Partial<Record<M["index"], M>>;
    highestIndex: number;
    lowestIndex: number;
}

export declare type KeyboardEventType<E extends EventTarget> = JSX.TargetedKeyboardEvent<E>;

export declare interface LinearNavigationResult {
    valueDemangled: number | null;
    status: "normal" | "past-start" | "past-end";
}

export declare interface LogicalDirectionInfo {
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

export declare interface LogicalElementSize {
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

export declare type LogicalOrientation = "inline" | "block";

export declare type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters & {
    singleSelectionParameters: Pick<UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"], "ariaPropName" | "selectionMode">;
};

export declare type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn">;

/**
 * Information that children and parents use to communicate with each other.
 *
 * Other hooks will inherit from this to provide more complicated behavior.
 */
export declare interface ManagedChildInfo<T extends string | number> {
    /**
     * A unique value representing this child.
     *
     * If a `number`, then it's like the index to an array. There can be holes/gaps, even negative numbers, but children are contiguous to a degree. There can be a child "before" or "after" this one.
     *
     * If a `string`, then it's like a key into an object. There's no well-relationship between children. You can access a known child or all children, but nothing in between.
     */
    index: T;
}

/**
 * Abstraction over the managed children
 */
export declare interface ManagedChildren<M extends ManagedChildInfo<any>> {
    /** STABLE */
    getAt(index: M["index"]): M | undefined;
    /**
     * STABLE
     *
     * @returns The highest number corresponding to a child. Inclusive. Use `<=`.
     */
    getHighestIndex(): number;
    /** STABLE */
    getLowestIndex(): number;
    /** STABLE */
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
     * */
    arraySlice: () => M[];
}

export declare function mergeFunctions<T extends (...args: any[]) => (void | Promise<void>), U extends (...args: any[]) => (void | Promise<void>)>(lhs: T | null | undefined, rhs: U | null | undefined): T | U | ((...args: Parameters<T>) => Promise<[void, void]> | undefined) | null | undefined;

export declare const monitorCallCount: typeof callCountU;

export declare type MouseEventType<E extends EventTarget> = JSX.TargetedMouseEvent<E>;

/** Opposite of NonNullable */
export declare type Nullable<T = null> = null | undefined | T;

/** Like Omit, but with type completion */
export declare type OmitStrong<T, K extends keyof T> = Omit<T, K>;

export declare type OnAfterChildLayoutEffect<T extends string | number> = ((causers: Iterable<T>) => void);

export declare type OnChildrenMountChange<T extends string | number> = ((mounted: Set<T>, unmounted: Set<T>) => void);

export declare type OnParamValueChanged<T> = OnPassiveStateChange<T, never>;

/** Responds to a change in a value, unlike `PassiveStateUpdater` which causes the updates */
export declare type OnPassiveStateChange<S, R> = ((value: S, prevValue: S | undefined, reason?: R) => (void | (() => void)));

export declare type OnTabbableIndexChange = (tabbableIndex: number | null) => void;

declare type P = Parameters<typeof clsx>;

declare type Parameters2<T extends (EventListenerObject | ((...args: any) => any))> = T extends EventListenerObject ? Parameters<T["handleEvent"]> : T extends (...args: infer P) => any ? P : never;

/** Takes a new value or a function that updates a value, unlike `OnPassiveStateChange` which reacts to those updates */
export declare type PassiveStateUpdater<S, R> = ((value: S | ((prevState: S | undefined) => S), reason?: R) => void);

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
export declare interface PersistentStates {
}

export declare type PhysicalDirection = "ltr" | "rtl" | "ttb" | "btt";

export declare type PhysicalOrientation = "horizontal" | "vertical";

export declare type PhysicalSize = "width" | "height";

export declare type PointerEventType<E extends EventTarget> = JSX.TargetedPointerEvent<E>;

export declare type PortalChildUpdater<S> = (value: ((prevState: S) => S)) => void;

export declare type PressChangeEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E> | FocusEventType<E>;

export declare type PressEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E>;

/**
 * When a bunch of unrelated components all use `requestAnimationFrame`,
 * yes, this actually is faster. I wish it wasn't. It's lame.
 */
export declare function ProvideBatchedAnimationFrames({ children }: {
    children: ElementProps<EventTarget>["children"];
}): JSX_2.Element;

export declare type PushPortalChild = UsePortalChildrenReturnType["pushChild"];

export { Ref }

export { RefCallback }

export { RefObject }

export declare type RemovePortalChild = UsePortalChildrenReturnType["removeChild"];

export declare function returnFalse(): boolean;

export declare function returnNull(): null;

/** Summary of returnsFunction */
export declare function returnsFunction(): () => number;

export declare function returnTrue(): boolean;

export declare function returnUndefined(): undefined;

export declare function returnZero(): number;

export declare interface RovingTabIndexChildContext {
    rovingTabIndexContext: RovingTabIndexChildContextSelf;
}

export declare interface RovingTabIndexChildContextSelf {
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
}

/**
 * An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
 */
export declare function runImmediately(f: () => void): void;

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
export declare interface SearchParamStates {
}

export declare type SelectedIndexChangeEvent = TargetedEnhancedEvent<Event, {
    selectedIndex: number;
}>;

export declare type SelectedIndexChangeHandler = EnhancedEventHandler<Event, {
    selectedIndex: number;
}>;

export declare type SetAttribute<T extends Element> = UseImperativePropsReturnTypeSelf<T>["setAttribute"];

export declare type SetChildren = UseImperativePropsReturnTypeSelf<any>["setChildren"];

export declare type SetClass = UseImperativePropsReturnTypeSelf<any>["setClass"];

export declare type SetEventHandler = UseImperativePropsReturnTypeSelf<any>["setEventHandler"];

export declare type SetParamWithHistory<T> = (value: T | ((prevValue: T) => T), reason?: "push" | "replace") => void;

/**
 * This function can be used to enable/disable button vibration pulses on an app-wide scale.
 *
 *
 * @param func - The function to run when a button is tapped. (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
 */
export declare function setPressVibrate(func: () => void): void;

export declare type SetStyle = UseImperativePropsReturnTypeSelf<any>["setStyle"];

export declare type SetTabbableIndex = (updater: Parameters<PassiveStateUpdater<number | null, Event>>[0], reason: Event | undefined, fromUserInteraction: boolean) => void;

export declare interface SingleSelectionContextSelf extends Pick<UseSingleSelectionParametersSelf, "ariaPropName" | "selectionMode" | "onSelectedIndexChange"> {
    getSelectedIndex(): number | null;
}

declare type Stable<T> = T;

export declare function storeToLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, value: PersistentStates[Key], converter?: ((input: PersistentStates[Key]) => string), storage?: Storage): void;

declare type SyncFunctionType<SP extends unknown[], R> = (...args: SP) => (R | undefined);

export declare interface TabbableColumnInfo {
    /** Which cell in this row is actually tabbable? */
    actual: number | null;
    /** Which column was the last column the user navigated to? */
    ideal: number | null;
}

export declare type TargetedEnhancedEvent<E extends Event, Detail> = E & {
    [EventDetail]: Detail;
};

/** "**Pick**, then **omit**". Given an object, omits everything but the given props in the given sub-object, including other sub-objects. */
declare type TargetedOmit<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: OmitStrong<T[K], L>;
};

/**
 * "**Pick**, then **pick** again". Given an object, omits everything but the given props in the given sub-object, including other sub-objects.
 *
 * @remarks This is particularly useful for the kind of off-brand parameter inheritence that things like grid navigation have going.
 */
declare type TargetedPick<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: Pick<T[K], L>;
};

/**
 * Summary of TestClass
 *
 * @remarks Extra remarks
 *
 * @typeParam T - A type parameter
 */
export declare class TestClass<T> extends TestClassBase {
    constructor();
    /** Summary of frob (overridden) */
    frob(): number;
    /** Summary of frob (implemented) */
    abstractFrob(): number;
    /** Summary of foo */
    foo<T>(): NonNullable<T>;
}

/**
 * Summary of TestClassBase
 */
declare abstract class TestClassBase {
    constructor();
    constructor(arg: number);
    /** Summary of frob */
    frob(): number;
    /** Summary of abstractFrob */
    abstract abstractFrob(): number;
}

/** Summary of TestEnum */
export declare const enum TestEnum {
    A = 0,
    B = 1,
    C = 2,
    D = 3,
    E = 4,
    F = 5
}

export declare type TouchEventType<E extends EventTarget> = JSX.TargetedTouchEvent<E>;

export declare function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }: TryNavigateToIndexParameters): LinearNavigationResult;

export declare interface TryNavigateToIndexParameters {
    lowestChildIndex: number;
    highestChildIndex: number;
    isValid(index: number): boolean;
    targetDemangled: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;
}

declare interface TypeaheadInfo {
    text: string | null;
    unsortedIndex: number;
}

export declare type TypeAliasBase = 'foo';

export declare type TypeAliasDerived = TypeAliasBase | 'bar';

declare type TypedAddEventListener<T extends EventTarget> = (...args: FirstOverloadParameters<(T["addEventListener"])>) => void;

declare type TypedEventHandler<E extends EventTarget, T extends TypedEventListenerTypes<E>> = TypedAddEventListener<E> extends ((type: T, handler: infer H, ...args: any[]) => any) ? NonNullable<H> : never;

declare type TypedEventHandlerEvent<E extends EventTarget, T extends TypedEventListenerTypes<E>> = Parameters2<TypedEventHandler<E, T>>[0];

declare type TypedEventListenerTypes<T extends EventTarget> = TypedAddEventListener<T> extends ((type: infer K2, ...args: any[]) => any) ? K2 : string;

export declare type UpdatePortalChild = UsePortalChildrenReturnType["updateChild"];

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
export declare function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument, getWindow } }: UseActiveElementParameters): UseActiveElementReturnType;

export declare interface UseActiveElementParameters {
    activeElementParameters: UseActiveElementParametersSelf;
}

export declare interface UseActiveElementParametersSelf {
    /**
     * Called any time the active element changes. Must be stable.
     */
    onActiveElementChange?: OnPassiveStateChange<Element | null, FocusEvent> | null | undefined;
    /**
     * Called any time the active element changes and is not null.
     * Must be stable.
     */
    onLastActiveElementChange?: OnPassiveStateChange<Element, FocusEvent> | null | undefined;
    /**
     * Called any time the window gains/loses focus. Must be stable.
     */
    onWindowFocusedChange?: OnPassiveStateChange<boolean, FocusEvent> | null | undefined;
    /**
     * This must be a function that returns the document associated with whatever elements we're listening to.
     *
     * E.G. someDivElement.ownerDocument
     *
     * **MUST** be stable
     */
    getDocument(): Document;
    /**
     * By default, event handlers are attached to the document's defaultView Window.
     * If you need something different, override it here.
     *
     * **MUST** be stable
     */
    getWindow?: ((document: Document) => Window) | null | undefined;
}

export declare interface UseActiveElementReturnType {
    activeElementReturn: UseActiveElementReturnTypeSelf;
}

export declare interface UseActiveElementReturnTypeSelf {
    /**
     * Returns whatever element is currently focused, or `null` if there's no focused element
     * **STABLE**
     */
    getActiveElement: () => Element | null;
    /**
     * Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element
     * **STABLE**
     */
    getLastActiveElement: () => Element;
    /**
     * Returns if the window itself has focus or not
     * **STABLE**
     */
    getWindowFocused: () => boolean;
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

export declare interface UseAnimationFrameParameters {
    /**
     * Callback with effectively the same rules as `requestAnimationFrame`
     *
     * Doesn't need to be stable.
     */
    callback: null | ((msSinceLast: number) => void);
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
 *
 */
export declare function useAsync<AP extends unknown[], R, SP extends unknown[] = AP>(asyncHandler: AsyncFunctionType<AP, R> | null, options?: UseAsyncParameters<AP, SP>): UseAsyncReturnType<SP, R>;

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

export declare interface UseAsyncHandlerParameters<EventType, CaptureType> extends OmitStrong<UseAsyncParameters<[CaptureType, EventType], [EventType]>, "capture"> {
    /**
     * What transient information is captured by this event
     * and presented as the first argument of the event handler?
     *
     * The "capture" parameter answers this question. To implement a checkbox, for example, return `target.checked`.
     */
    capture: (event: EventType) => CaptureType;
    /**
     * The function (either async or sync) that you want to convert to a regular, sync event handler.
     */
    asyncHandler: AsyncHandler<EventType, CaptureType> | null;
}

export declare interface UseAsyncHandlerReturnType<EventType, CaptureType> extends UseAsyncReturnType<[EventType], void> {
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
     * **STABLE**
     *  */
    getCurrentCapture(): (CaptureType | undefined);
    /**
     * Because you're allowed to have `CaptureType` extend `undefined`,
     * you might need this.
     */
    hasCapture: boolean;
}

export declare interface UseAsyncParameters<AP extends unknown[], SP extends unknown[] = AP> {
    /**
     * If provided, adds a debounce behavior *in addition* to
     * the default "wait until resolved" throttling behavior.
     */
    debounce?: number;
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
    throttle?: number;
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
     */
    capture?: CaptureFunctionType<AP, SP>;
}

export declare interface UseAsyncReturnType<SP extends unknown[], R> {
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
 * Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
 *
 * @compositeParams
 */
export declare function useBackdropDismiss<PopupElement extends Element>({ backdropDismissParameters: { open, onClose: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElement>): void;

export declare interface UseBackdropDismissParameters<PopupElement extends Element> {
    backdropDismissParameters: UseBackdropDismissParametersSelf;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

export declare interface UseBackdropDismissParametersSelf {
    open: boolean;
    onClose: EnhancedEventHandler<MouseEvent, {
        reason: "escape" | "lost-focus";
    }>;
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
 *
 */
export declare function useChildrenFlag<M extends ManagedChildInfo<number | string>, R>({ getChildren, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }: UseChildrenFlagParameters<M, R>): UseChildrenFlagReturnType<M, R>;

export declare interface UseChildrenFlagParameters<M extends ManagedChildInfo<any>, R> {
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
     */
    onIndexChange: null | OnPassiveStateChange<M["index"] | null, R>;
    setAt(index: M, value: boolean, newSelectedIndex: M["index"] | null, prevSelectedIndex: M["index"] | null): void;
    getAt(index: M): boolean;
    /** Must be at least quasi-stable (always stable, doesn't need to be called during render) */
    isValid(index: M): boolean;
}

export declare interface UseChildrenFlagReturnType<M extends ManagedChildInfo<any>, R> {
    /**
     * **STABLE**
     *
     * Manually changes the current index that is (focused/selected/tabbable/whatever).
     *
     * The parent can use this to notify each relevant child of what it must do in order to make this change happen.
     *
     * The returned value will be the new index that will be used. If `closestFit` is false, it will always be the same as what you passed in.
     */
    changeIndex: PassiveStateUpdater<M["index"] | null, R>;
    /**
     * **STABLE**
     *
     * Call this whenever a child mounts/unmounts, or whenever calling a child's isValid() would change
     *  */
    reevaluateClosestFit: () => void;
    /** **STABLE** */
    getCurrentIndex: () => M["index"] | null;
}

/**
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 *
 * @compositeParams
 *
 * @hasChild {@link useChildrenHaveFocusChild}
 */
export declare function useChildrenHaveFocus<ChildElement extends Element>(args: UseChildrenHaveFocusParameters<ChildElement>): UseChildrenHaveFocusReturnType<ChildElement>;

/**
 * @compositeParams
 */
export declare function useChildrenHaveFocusChild<E extends Element>({ context: { childrenHaveFocusChildContext: { setFocusCount } } }: UseChildrenHaveFocusChildParameters<E>): UseChildrenHaveFocusChildReturnType<E>;

export declare interface UseChildrenHaveFocusChildParameters<T extends Element> {
    context: UseChildrenHaveFocusContext<T>;
}

export declare interface UseChildrenHaveFocusChildReturnType<E extends Element> extends TargetedPick<UseHasCurrentFocusParameters<E>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
}

export declare interface UseChildrenHaveFocusContext<T extends Element> {
    childrenHaveFocusChildContext: {
        /** **STABLE** */
        setFocusCount: PassiveStateUpdater<number, FocusEventType<T>>;
    };
}

export declare interface UseChildrenHaveFocusParameters<T extends Element> {
    childrenHaveFocusParameters: UseChildrenHaveFocusParametersSelf<T>;
}

export declare interface UseChildrenHaveFocusParametersSelf<T extends Element> {
    /**
     * Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.
     */
    onCompositeFocusChange: null | OnPassiveStateChange<boolean, FocusEventType<T>>;
}

export declare interface UseChildrenHaveFocusReturnType<T extends Element> {
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeSelf;
    context: UseChildrenHaveFocusContext<T>;
}

export declare interface UseChildrenHaveFocusReturnTypeSelf {
    getAnyFocused(): boolean;
}

/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @compositeParams
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 */
export declare function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, typeaheadNavigationParameters, sortableChildrenParameters, rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, ...void1 }: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;

/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationCellParameters, context: { gridNavigationCellContext, managedChildContext, rovingTabIndexContext, typeaheadNavigationContext, completeGridNavigationCellContext: { excludeSpace: es2 } }, textContentParameters, info, ...void1 }: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM>;

export declare interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSingleSelectSortableChildCellInfo<CellElement> {
}

export declare interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionCellParameters<any, CellElement, CM>, "info" | "context" | "refElementReturn"> {
    info: Omit<CM, Exclude<keyof UseCompleteGridNavigationCellInfo<CellElement>, "index" | "untabbable" | "focusSelf">>;
    context: CompleteGridNavigationCellContext<any, CellElement, CM>;
}

export declare interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableCellReturnType<CellElement, CM>, "hasCurrentFocusParameters" | "info">, OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: ElementProps<CellElement>;
}

export declare function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters, }: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, CellElement, RM, CM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;

export declare interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>>, "singleSelectionReturn"> {
}

export declare interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionReturn", "changeSelectedIndex">, OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "singleSelectionReturn"> {
}

export declare interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rearrangeableChildrenParameters" | "rovingTabIndexParameters">, TargetedOmit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "indexMangler" | "indexDemangler" | "isValid">, TargetedOmit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "typeaheadNavigationParameters", "isValid">, TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "rearrangeableChildrenParameters", "onRearranged">, TargetedOmit<UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex" | "untabbableBehavior">, Pick<UsePaginatedChildrenParameters<ParentOrRowElement, RowElement, M>, "paginatedChildrenParameters">, Pick<UseStaggeredChildrenParameters<RowElement, M>, "staggeredChildrenParameters"> {
}

export declare interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">, Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">, Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">, Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusReturn">, OmitStrong<UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, "propsStableParentOrChild" | "propsParent" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    context: CompleteGridNavigationRowContext<ParentOrRowElement, RowElement, CellElement, RM, CM>;
    props: ElementProps<ParentOrRowElement>;
}

/**
 * @compositeParams
 */
export declare function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ info, context: contextIncomingForRowAsChildOfTable, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, ...void1 }: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;

export declare interface UseCompleteGridNavigationRowInfo<RowElement extends Element, CellElement extends Element> extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, UsePaginatedChildrenInfo<RowElement>, UseStaggeredChildrenInfo<RowElement> {
}

export declare interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "context" | "textContentParameters" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">, TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "textContentParameters", never>, TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "pageNavigationSize" | "isValid" | "indexMangler" | "indexDemangler">, TargetedOmit<UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters", "isValid"> {
    context: CompleteGridNavigationRowContext<any, RowElement, CellElement, RM, CM>;
    info: OmitStrong<RM, Exclude<keyof UseCompleteGridNavigationRowInfo<RowElement, CellElement>, "getSortValue" | "index" | "untabbable" | "unselectable">>;
}

export declare interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement, CellElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "hasCurrentFocusParameters" | "context" | "managedChildrenParameters" | "info" | "pressParameters" | "textContentReturn">, Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">, Pick<UseHasCurrentFocusReturnType<RowElement>, "hasCurrentFocusReturn">, Pick<UseManagedChildReturnType<RM>, "managedChildReturn">, Pick<UsePaginatedChildReturnType<RowElement>, "paginatedChildReturn">, Pick<UseStaggeredChildReturnType<RowElement>, "staggeredChildReturn">, Pick<UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>, "textContentReturn"> {
    context: CompleteGridNavigationCellContext<RowElement, CellElement, CM>;
}

/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 *
 *
 * @compositeParams
 */
export declare function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, rearrangeableChildrenParameters, sortableChildrenParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, paginatedChildrenParameters, staggeredChildrenParameters, ...completeListNavigationParameters }: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>;

export declare function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ info: { index, focusSelf, unselectable, untabbable, getSortValue, ...info }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters, context: { childrenHaveFocusChildContext, managedChildContext, rovingTabIndexContext, paginatedChildContext, staggeredChildContext, singleSelectionContext, typeaheadNavigationContext }, ...void1 }: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M>;

export declare interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends ExtendMerge<UseListNavigationSingleSelectionSortableChildInfo<ChildElement>, ExtendMerge<UsePaginatedChildrenInfo<ChildElement>, UseStaggeredChildrenInfo<ChildElement>>> {
}

export declare interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableChildParameters<ChildElement, M>, "textContentParameters"> {
    context: CompleteListNavigationContext<any, ChildElement, M>;
    info: Omit<M, Exclude<keyof UseCompleteListNavigationChildInfo<ChildElement>, "getSortValue" | "index" | "focusSelf" | "untabbable" | "unselectable">>;
}

export declare interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableChildReturnType<ChildElement, M>, "textContentReturn" | "rovingTabIndexChildReturn" | "singleSelectionChildReturn">, OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable"> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
    managedChildReturn: UseManagedChildReturnType<M>["managedChildReturn"];
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
    /**
     * This hook does not include `usePress`, so when you call it for whatever element is responsible for selecting this child, pass it these parameters.
     */
    pressParameters: Pick<UsePressParameters<any>["pressParameters"], "onPressSync" | "excludeSpace">;
    paginatedChildReturn: UsePaginatedChildReturnType<ChildElement>["paginatedChildReturn"];
    staggeredChildReturn: UseStaggeredChildReturnType<ChildElement>["staggeredChildReturn"];
}

export declare function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, paginatedChildrenParameters, rearrangeableChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, sortableChildrenParameters, staggeredChildrenParameters, typeaheadNavigationParameters, singleSelectionParameters }: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M>;

export declare interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSingleSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, "singleSelectionParameters" | "singleSelectionReturn">, TargetedOmit<UseSingleSelectionParameters<ParentElement, ChildElement, M>, "singleSelectionParameters", "initiallySelectedIndex" | "onSelectedIndexChange"> {
}

export declare interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn", "changeSelectedIndex">, OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn"> {
}

export declare interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "singleSelectionParameters" | "sortableChildrenParameters">, Pick<UsePaginatedChildrenParameters<ParentElement, ChildElement, M>, "paginatedChildrenParameters">, Pick<UseStaggeredChildrenParameters<ChildElement, M>, "staggeredChildrenParameters">, TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValid">, TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "typeaheadNavigationParameters", "isValid">, TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "rearrangeableChildrenParameters", "onRearranged">, TargetedOmit<UseListNavigationSingleSelectionSortableParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex" | "untabbableBehavior"> {
}

export declare interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UsePaginatedChildrenReturnType, "paginatedChildrenReturn">, Pick<UseStaggeredChildrenReturnType, "staggeredChildrenReturn">, Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">, Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusReturn">, OmitStrong<UseListNavigationSingleSelectionSortableReturnType<ParentElement, ChildElement, M>, "propsStableParentOrChild" | "propsParent" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    context: CompleteListNavigationContext<ParentElement, ChildElement, M>;
}

/**
 * Combines all the methods of dismissing a modal-ish or popup-ish component into one combined hook. This is similar to the "complete" series of list/grid navigation, in that it's the "outermost" hook of its type.
 *
 * @compositeParams
 */
export declare function useDismiss<Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { open: globalOpen, onClose: globalOnClose, closeOnBackdrop, closeOnEscape, closeOnLostFocus }, escapeDismissParameters: { getWindow, parentDepth } }: UseDismissParameters<Listeners>): UseDismissReturnType<SourceElement, PopupElement>;

export declare interface UseDismissParameters<Listeners extends DismissListenerTypes> extends TargetedPick<UseEscapeDismissParameters<any>, "escapeDismissParameters", "getWindow" | "parentDepth"> {
    dismissParameters: UseDismissParametersSelf<Listeners>;
}

export declare interface UseDismissParametersSelf<Listeners extends DismissListenerTypes> {
    /**
     * Whether or not this component is currently open/showing itself, as opposed to hidden/closed.
     * Event handlers are only attached when this is `true`.
     */
    open: boolean;
    /**
     * Called any time the user has requested the component be dismissed for the given reason.
     *
     * You can choose to ignore a reason if you want, but it's better to set `closeOn${reason}` to `false` instead.
     */
    onClose: (reason: Listeners) => void;
    /**
     * If `true`, then this component closes when a click is detected anywhere not within the component
     * (determined by being in a different branch of the DOM)
     */
    closeOnBackdrop: Listeners extends "backdrop" ? true : false;
    /**
     * If `true`, then this component closes when the Escape key is pressed, and no deeper component
     * is listening for that same Escape press (i.e. only one Escape dismiss happens per key press)
     */
    closeOnEscape: Listeners extends "escape" ? true : false;
    /**
     * If `true`, then this component closes whenever focus is sent to an element not contained by this one
     * (using the same rules as `closeOnBackdrop`)
     */
    closeOnLostFocus: Listeners extends "lost-focus" ? true : false;
}

export declare interface UseDismissReturnType<SourceElement extends Element | null, PopupElement extends Element> {
    /**
     * If this dismissible component has a specific element that caused it to appear (a button, for example),
     * provide it with these props.
     *
     * * REQUIRED for things like menus that pop up from a button and for whom losing focus counts as requesting closure.
     * * OPTIONAL for things like dialogs that can appear out of nowhere and for whom losing focus is actively impossible (due to focus traps).
     */
    refElementSourceReturn: UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"];
    /**
     * This one's always required though
     */
    refElementPopupReturn: UseRefElementReturnType<PopupElement>["refElementReturn"];
    propsStableSource: ElementProps<NonNullable<SourceElement>>;
    propsStablePopup: ElementProps<NonNullable<PopupElement>>;
}

/**
 *
 * @param className - The class (as a string) to be adding/removing
 * @param active - If `true`, the default, then the class is added to the element. If `false`, it's removed.
 * @param element - The element to affect. By default, it's the root `<html>` element
 */
export declare function useDocumentClass(className: P[0], active?: boolean, element?: HTMLElement): void;

/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDraggableParameters}
 * {@include } {@link UseDraggableReturnType}
 */
export declare function useDraggable<E extends Element>({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }: UseDraggableParameters): UseDraggableReturnType<E>;

export declare interface UseDraggableParameters {
    /**
     * Maps to the Drag and Drop API -- allows limiting the areas this element can be dropped.
     * For example, setting this to "copyLink" will allow this this to be dropped onto
     * a droppable with an effect of "copy" or "link", but not "move".
     *
     */
    effectAllowed?: DataTransfer["effectAllowed"] | undefined;
    /**
     * Can be used to specify a custom drag image instead of the browser default (a transparent render of the original element, generally)
     */
    dragImage?: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    dragImageXOffset?: number;
    dragImageYOffset?: number;
    /**
     * Represents a dictionary mapping of MIME types to data
     */
    data: {
        [mimeType: string]: string;
    };
}

export declare interface UseDraggableReturnType<E extends EventTarget> {
    /** *Unstable* */
    propsUnstable: ElementProps<E>;
    /**
     * Returns true if the element in question is currently being dragged
     */
    dragging: boolean;
    /** **STABLE** */
    getDragging: () => boolean;
    /**
     * Once the drag ends, if it was over a valid droppable, this will be
     * set to the `dropEffect` value it had.
     *
     * This can be used to detect when the element has dropped,
     * and then what should be done with it (generally deleted if the effect was "move")
     */
    lastDropEffect: DataTransfer["dropEffect"] | null;
    /** **STABLE** */
    getLastDropEffect: () => (DataTransfer["dropEffect"] | null);
}

/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDroppableParameters}
 * {@include } {@link UseDroppableReturnType}
 */
export declare function useDroppable<E extends Element>({ effect }: UseDroppableParameters): UseDroppableReturnType<E>;

export declare interface UseDroppableParameters {
    /**
     * Maps to the Drag and Drop API -- effectively means "as close as possible, what's happening to the data when I drop it here?
     * Am I copying it and leaving the original, am I moving it and deleting the original, or am I linking it to the original?"
     *
     * Whatever is being dragged over this will have its own permission that's checked against this.
     */
    effect: DataTransfer["dropEffect"] | undefined;
}

export declare interface UseDroppableReturnType<E extends Element> {
    /**
     * Hook for modifying the props you were going to pass to your drop target Element.
     *
     * *Unstable*
     */
    propsStable: ElementProps<E>;
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

/**
 * Measures an element, allowing you to react to its changes in size.
 *
 * @compositeParams
 */
export declare function useElementSize<E extends Element>({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }: UseElementSizeParameters<E>): UseElementSizeReturnType<E>;

export declare interface UseElementSizeParameters<T extends Element> extends UseRefElementParameters<T> {
    elementSizeParameters: UseElementSizeParametersSelf<T>;
}

export declare interface UseElementSizeParametersSelf<T extends Element> extends UseRefElementParameters<T> {
    /**
     * Called any time the browser detects a size change
     * on the element. Does not need to be stable, so you
     * can pass an anonymous function that only sets the
     * values you use if you'd like.
     */
    onSizeChange(sizeInfo: ElementSize, prevSize: ElementSize | undefined, entries: ResizeObserverEntry[] | UIEvent): void;
    /**
     * Passed as an argument to the created ResizeObserver.
     *
     * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters
     */
    getObserveBox: null | (() => ResizeObserverOptions["box"]);
}

export declare interface UseElementSizeReturnType<E extends Element> extends UseRefElementReturnType<E> {
    elementSizeReturn: UseElementSizeReturnTypeSelf<E>;
}

export declare interface UseElementSizeReturnTypeSelf<E extends Element> {
    /** **STABLE** */
    getSize(): ElementSize | null;
}

/**
 * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
 *
 * @remarks Eventually, when useEvent lands, we hopefully won't need this.
 */
export declare function useEnsureStability<T extends any[]>(parentHookName: string, ...values: T): void;

/**
 * Adds event handlers for a modal-like soft-dismiss interaction.
 *
 * That is, any clicks or taps outside of the given component,
 * or any time the Escape key is pressed within the component,
 * (with various browser oddities regarding clicks on blank or inert areas handled)
 * the component will request to close itself.
 *
 * Of course, if you don't do anything in the `onClose` function,
 * it won't be a soft dismiss anymore.
 *
 * Handles events for pressing the `Escape` key to close the any currently open dialogs, tooltips, menus, popups, etc.
 *
 * One press of the `Escape` key is guaranteed to only call `onClose` for *only one* component, and it is called on the component deepest in the DOM tree, differentiated by passing context information between parent and child.
 *
 * @compositeParams
 */
export declare function useEscapeDismiss<PopupElement extends Element>({ escapeDismissParameters: { onClose, open, getWindow: unstableGetWindow, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }: UseEscapeDismissParameters<PopupElement>): void;

export declare interface UseEscapeDismissParameters<PopupElement extends Element> {
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
    escapeDismissParameters: UseEscapeDismissParametersSelf;
}

export declare interface UseEscapeDismissParametersSelf {
    /**
     * Called when the component is dismissed.
     *
     * Presumably you'll set some state that changes `open` to false during this, otherwise it's not a soft dismiss, but you can do whatever you want I guess.
     */
    onClose: EnhancedEventHandler<KeyboardEvent, {
        reason: "escape" | "lost-focus";
    }>;
    /**
     * Whether the surface controlled by the `Escape` key is currently open.
     * Can also be `false` to force the `Escape` key to do nothing.
     */
    open: boolean;
    /**
     * The escape key event handler is attached onto the window, so we need to know which window.
     */
    getWindow(): Window;
    /**
     * Get this from context somewhere, and increment it in that context.
     *
     * If multiple instances of Preact are on the page, tree depth is used as a tiebreaker
     */
    parentDepth: number;
}

/**
 * @compositeParams
 */
export declare function useFocusTrap<SourceElement extends Element | null, PopupElement extends Element>({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, refElementReturn }: UseFocusTrapParameters<SourceElement, PopupElement>): UseFocusTrapReturnType<PopupElement>;

export declare interface UseFocusTrapParameters<SourceElement extends Element | null, PopupElement extends Element> extends TargetedPick<UseRefElementReturnType<NonNullable<PopupElement>>, "refElementReturn", "getElement"> {
    focusTrapParameters: UseFocusTrapParametersSelf<SourceElement, PopupElement>;
}

export declare interface UseFocusTrapParametersSelf<SourceElement extends Element | null, PopupElement extends Element> {
    /**
     * Whether or not the focus trap is currently active (or, when used as part of a larger component, whether it is activatable)
     */
    trapActive: boolean;
    /**
     * If true, focus is not trapped but only moved to the new element.
     */
    onlyMoveFocus: boolean;
    /**
     * When a modal popup opens, focus must be sent to the first element that makes sense.
     *
     * For example, if it's a confirmation dialog about deleting something, it's best to send focus to the "cancel" button.
     *
     * In other cases, it makes more sense to focus the dialog's title, first interactive element, etc.
     *
     * This is highly subjective and *almost ALWAYS* more complicated than just "focus the whole dialog element itself",
     * because that only works if the dialog ***only contains text***, which is uncommon.
     *
     * If you really, really, ***genuinely*** cannot determine what should be done in your use case,
     * first of all, keep trying, really,
     * then as a very last resort, use `findFirstFocusable`, and then if nothing's found focus the body.
     * Just please, please make sure that whatever that first focusable is **isn't** a destructive action, at the very least.
     */
    focusPopup(e: PopupElement, findFirstFocusable: () => HTMLOrSVGElement | null): void;
    /**
     * When the focus trap has deactivated, focus must be sent back to the element that opened it.
     *
     * This is tracked for you; by default, just call `lastFocused?.focus()`, but you can also override this behavior
     * and just do whatever you want with any element.
     * @param lastFocused - The element that was focused before the modal was opened
     */
    focusOpener(lastFocused: SourceElement | null): void;
}

export declare interface UseFocusTrapReturnType<E extends Element> {
    props: ElementProps<E>;
}

/**
 * Returns a function that will, when called, force the component
 * that uses this hook to re-render itself.
 *
 * @remarks It's a bit smelly, so best to use sparingly.
 */
export declare function useForceUpdate(): () => void;

/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target - A *non-Preact* node to attach the event to.
 * *
 */
export declare function useGlobalHandler<T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends TypedEventHandlerEvent<T, EventType>>(target: T, type: EventType, handler: null | ((e: H) => void), options?: Parameters<TypedAddEventListener<T>>[2], mode?: "grouped" | "single"): void;

/**
 * Implements 2-dimensional grid-based keyboard navigation, similarly to {@link useListNavigation}.
 *
 * @remarks Due to the complexity of this hook, it is *highly* recommended to use {@link useCompleteGridNavigation} instead.
 * But if you do need to it's designed to work well with intellisense -- just keep plugging the holes until the errors stop and that's 95% of it right there.
 *
 * Some features and/or limitations of this hook:
 *
 * ```md-literal
 * * Like all other hooks (except sorting), the only DOM restriction is that the rows and cells are decendents of the grid as a whole **somewhere**.
 * * Rows are given priority over columns. Sorting/filtering happens by row, Page Up/Down, the Home/End keys, and typeahead affect the current row, etc.
 * * Cells can have a `colSpan` or be missing, and moving with the arrow keys will "remember" the correct column to be in as focus jumps around.
 * ```
 *
 * @compositeParams
 *
 * @hasChild {@link useGridNavigationRow}
 * @hasChild {@link useGridNavigationCell}
 */
export declare function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, ...listNavigationParameters }: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;

/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 */
export declare function useGridNavigationCell<CellElement extends Element, CM extends GridChildCellInfo<CellElement>>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }: UseGridNavigationCellParameters<any, CellElement, CM>): UseGridNavigationCellReturnType<CellElement, CM>;

export declare interface UseGridNavigationCellContext extends UseListNavigationContext {
    gridNavigationCellContext: UseGridNavigationCellContextSelf;
}

export declare interface UseGridNavigationCellContextSelf {
    getRowIndex: () => number;
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
    setTabbableCell: SetTabbableIndex;
}

export declare interface UseGridNavigationCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildParameters<CellElement, CM> {
    gridNavigationCellParameters: UseGridNavigationCellParametersSelf;
    context: UseGridNavigationCellContext;
}

export declare interface UseGridNavigationCellParametersSelf {
    /**
     * How many columns this cell spans (all cells default to 1).
     *
     * Any following cells should skip over the `index`es this one covered with its `colSpan`. E.G. if this cell is `index=5` and `colSpan=3`, the next cell would be `index=8`, **not** `index=6`
     */
    colSpan: number;
}

export declare interface UseGridNavigationCellReturnType<CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<CellElement, CM> {
}

export declare interface UseGridNavigationCellSingleSelectionContext extends UseGridNavigationCellContext, UseSingleSelectionContext {
}

export declare interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement, CellElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters">, TargetedOmit<UseListNavigationParameters<ParentOrChildElement, RowElement, M>, "linearNavigationParameters", "arrowKeyDirection"> {
    gridNavigationParameters: UseGridNavigationParametersSelf;
}

export declare interface UseGridNavigationParametersSelf {
    /**
     * TODO: This may be called even when there is no actual change in the numeric values
     */
    onTabbableColumnChange: OnPassiveStateChange<TabbableColumnInfo, Event> | null;
}

export declare interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement, RM>, "context"> {
    context: UseGridNavigationRowContext;
}

/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 */
export declare function useGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>>({ info: managedChildParameters, textContentParameters, context: contextFromParent, linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, refElementReturn, ...void1 }: UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;

export declare interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}

export declare interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, Event>;
}

export declare interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends OmitStrong<UseListNavigationChildParameters<RowElement, RM>, "context">, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters", "disableHomeEndKeys" | "onNavigateLinear" | "arrowKeyDirection">, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "rovingTabIndexParameters", "focusSelfParent" | "untabbableBehavior">, OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters">, TargetedPick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn", "getChildren"> {
    context: UseGridNavigationRowContext;
}

export declare interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement, CellElement>, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildReturnType<RowElement, RM>, OmitStrong<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn" | "propsStableParentOrChild" | "propsParent" | "context">, TargetedOmit<UseListNavigationReturnType<RowElement, CellElement, CM>, "rovingTabIndexReturn", "focusSelf"> {
    context: UseGridNavigationCellContext;
    info: Pick<RM, UseRovingTabIndexChildInfoKeysReturnType | "focusSelf">;
}

export declare interface UseGridNavigationRowSingleSelectionContext extends UseGridNavigationRowContext, UseSingleSelectionContext {
}

export declare function useGridNavigationSingleSelection<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, refElementReturn, ...void2 }: UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;

export declare function useGridNavigationSingleSelectionCell<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>>(p: UseGridNavigationSingleSelectionCellParameters<any, CellElement, CM>): UseGridNavigationSingleSelectionCellReturnType<CellElement, CM>;

export declare interface UseGridNavigationSingleSelectionCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationCellParameters<RowElement, CellElement, CM> {
}

export declare interface UseGridNavigationSingleSelectionCellReturnType<CellElement extends Element, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationCellReturnType<CellElement, CM> {
}

export declare interface UseGridNavigationSingleSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends ExtendMerge<UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, RM>, OmitStrong<UseSingleSelectionParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexReturn">> {
}

export declare interface UseGridNavigationSingleSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, UseSingleSelectionReturnType<RowElement, RM>> {
}

export declare function useGridNavigationSingleSelectionRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>>({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, textContentParameters, typeaheadNavigationParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, typeaheadNavigationContext }, ...void1 }: UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement, RM, CM>;

export declare interface UseGridNavigationSingleSelectionRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationRowParameters<RowElement, CellElement, RM, CM>, UseSingleSelectionChildParameters<RowElement, RM>> {
}

export declare interface UseGridNavigationSingleSelectionRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends ExtendMerge<UseGridNavigationRowReturnType<RowElement, CellElement, RM, CM>, UseSingleSelectionChildReturnType<RowElement>> {
}

export declare function useGridNavigationSingleSelectionSortable<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>({ rearrangeableChildrenParameters, sortableChildrenParameters, linearNavigationParameters, managedChildrenReturn, ...gridNavigationSingleSelectionParameters }: UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement, RowElement, CellElement, RM>): UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>;

export declare function useGridNavigationSingleSelectionSortableCell<CellElement extends Element, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>(p: UseGridNavigationSingleSelectionSortableCellParameters<any, CellElement, CM>): UseGridNavigationSingleSelectionSortableCellReturnType<CellElement, CM>;

export declare interface UseGridNavigationSingleSelectionSortableCellParameters<RowElement extends Element, CellElement extends Element, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseGridNavigationCellParameters<RowElement, CellElement, CM> {
}

export declare interface UseGridNavigationSingleSelectionSortableCellReturnType<CellElement extends Element, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseGridNavigationCellReturnType<CellElement, CM> {
}

export declare interface UseGridNavigationSingleSelectionSortableParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridSingleSelectChildRowInfo<RowElement, CellElement>> extends OmitStrong<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "linearNavigationParameters" | "managedChildrenReturn">, TargetedOmit<UseGridNavigationSingleSelectionParameters<ParentOrRowElement, RowElement, CellElement, M>, "linearNavigationParameters", "indexDemangler" | "indexMangler">, UseSortableChildrenParameters<M> {
}

export declare interface UseGridNavigationSingleSelectionSortableReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>> extends UseGridNavigationSingleSelectionReturnType<ParentOrRowElement, RowElement, CellElement, RM, CM>, UseSortableChildrenReturnType<RM> {
}

export declare function useGridNavigationSingleSelectionSortableRow<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectSortableChildCellInfo<CellElement>>(p: UseGridNavigationSingleSelectionSortableRowParameters<RowElement, CellElement, RM, CM>): UseGridNavigationSingleSelectionSortableRowReturnType<RowElement, CellElement, RM, CM>;

export declare interface UseGridNavigationSingleSelectionSortableRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationSingleSelectionRowParameters<RowElement, CellElement, RM, CM> {
}

export declare interface UseGridNavigationSingleSelectionSortableRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSingleSelectSortableChildRowInfo<RowElement, CellElement>, CM extends GridSingleSelectChildCellInfo<CellElement>> extends UseGridNavigationSingleSelectionRowReturnType<RowElement, CellElement, RM, CM> {
}

/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 */
export declare function useHasCurrentFocus<T extends Element>(args: UseHasCurrentFocusParameters<T>): UseHasCurrentFocusReturnType<T>;

export declare interface UseHasCurrentFocusParameters<T extends Node> extends TargetedPick<UseRefElementReturnType<T>, "refElementReturn", "getElement"> {
    hasCurrentFocusParameters: UseHasCurrentFocusParametersSelf<T>;
}

export declare interface UseHasCurrentFocusParametersSelf<T extends Node> {
    /**
     * Whether the element itself currently has focus.
     *
     * `prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)
     */
    onCurrentFocusedChanged?: Nullable<OnPassiveStateChange<boolean, FocusEventType<T>>>;
    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     *
     * @see this.onFocusedChanged
     */
    onCurrentFocusedInnerChanged?: Nullable<OnPassiveStateChange<boolean, FocusEventType<T>>>;
}

export declare interface UseHasCurrentFocusReturnType<E extends Element> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnTypeSelf<E>;
}

export declare interface UseHasCurrentFocusReturnTypeSelf<E extends Element> {
    propsStable: ElementProps<E>;
    /**
     * Modifies the element to be able to track its own focus state
     */
    /** STABLE */
    getCurrentFocused(): boolean;
    /** STABLE */
    getCurrentFocusedInner(): boolean;
}

/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 */
export declare function useHasLastFocus<T extends Node>(args: UseHasLastFocusParameters<T>): UseHasLastFocusReturnType;

export declare interface UseHasLastFocusParameters<T extends Node> extends UseActiveElementParameters, TargetedPick<UseRefElementReturnType<T>, "refElementReturn", "getElement"> {
    hasLastFocusParameters: UseHasLastFocusParametersSelf;
}

export declare interface UseHasLastFocusParametersSelf {
    /**
     * Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.
     *
     * This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.
     */
    onLastFocusedChanged?: Nullable<((focused: boolean, prevFocused: boolean | undefined) => void)>;
    /**
     * Combines the implications of `onFocusedChanged` and `onFocusedChanged`.
     */
    onLastFocusedInnerChanged?: Nullable<((focused: boolean, prevFocused: boolean | undefined) => void)>;
}

export declare interface UseHasLastFocusReturnType extends UseActiveElementReturnType {
    hasLastFocusReturn: HasLastFocusReturnTypeSelf;
}

/**
 * Allows for hiding the scroll bar of the root HTML element
 * without shifting the layout of the page by adding a few pixels
 * of padding to the root element if necessary.
 *
 * @param hideScroll - Whether the scroll bar is hidden or not (i.e. `true` to hide the scroll bar, `false` to allow it to be visible)
 */
export declare function useHideScroll(hideScroll: boolean): {
    getScrollbarWidth: () => number | null;
    getScrollbarHeight: () => number | null;
};

/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 *
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
 *
 * @compositeParams
 */
export declare function useImperativeProps<E extends Element>({ refElementReturn: { getElement } }: UseImperativePropsParameters<E>): UseImperativePropsReturnType<E>;

export declare interface UseImperativePropsParameters<E extends Element> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
}

export declare interface UseImperativePropsReturnType<T extends Element> {
    imperativePropsReturn: UseImperativePropsReturnTypeSelf<T>;
    props: ElementProps<T>;
}

export declare interface UseImperativePropsReturnTypeSelf<T extends Element> {
    /** Returns whether the element currently has the current CSS class */
    hasClass(cls: string): boolean;
    /** Applies or removes the given CSS class to the element */
    setClass(cls: string, enabled: boolean): void;
    /** Applies the given CSS style to the element */
    setStyle<K extends (keyof CSSStyleDeclaration) & string>(prop: K, value: CSSProperties[K] | null): void;
    /** Returns the current value of the attribute on the element */
    getAttribute<K extends keyof ElementProps<T>>(prop: K): ElementProps<T>[K];
    /** Applies the given attribute to the element */
    setAttribute<K extends keyof ElementProps<T>>(prop: K, value: ElementProps<T>[K] | null): void;
    /** Sets the element's `textContent` */
    setChildren(children: string | null): void;
    /** Sets the element's `innerHTML` */
    dangerouslySetInnerHTML(html: string): void;
    /** Evaluates the given HTML and appends it to the current children. */
    dangerouslyAppendHTML(html: string): Element;
    setEventHandler<K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions): void;
}

/**
 * Runs a function every time the specified number of milliseconds elapses while the component is mounted.
 *
 * @remarks
 * {@include } {@link UseIntervalParameters}
 */
export declare function useInterval({ interval, callback }: UseIntervalParameters): void;

export declare interface UseIntervalParameters {
    /**
     * The number of ms to wait before invoking `callback`.
     */
    interval: Nullable<number>;
    /**
     * Called `timeout` ms after mount, or the last change to `triggerIndex`.
     */
    callback: () => void;
}

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
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.
 *
 * @remarks There is no child version of this hook. That being said, the props returned are stable and work equally well on the child as the parent. If you don't have a parent `HTMLElement`, you can still pass the returned props to each child individually.
 *
 * @see {@link useCompleteListNavigation}, which packages everything up together.
 *
 * @compositeParams
 */
export declare function useLinearNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseLinearNavigationChildInfo>({ rovingTabIndexReturn, linearNavigationParameters }: UseLinearNavigationParameters<ParentOrChildElement, ChildElement, M>): UseLinearNavigationReturnType<ParentOrChildElement>;

export declare interface UseLinearNavigationChildInfo extends ManagedChildInfo<number> {
}

/** Arguments passed to the parent `useLinearNavigation` */
export declare interface UseLinearNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, _M extends UseLinearNavigationChildInfo> extends TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement, UseRovingTabIndexChildInfo<ChildElement>>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex"> {
    linearNavigationParameters: UseLinearNavigationParametersSelf<ChildElement>;
}

export declare interface UseLinearNavigationParametersSelf<ChildElement extends Element> {
    /**
     * Called when a navigation change as a result of an arrow/home/end/page up/page down key being pressed.
     */
    onNavigateLinear: Nullable<(newIndex: number | null, event: KeyboardEventType<ChildElement>) => void>;
    /**
     * Must return true if the child at this index can be navigated to, e.g. `(i) => !getChildren(i)?.hidden`.
     */
    isValid(i: number): boolean;
    /**
     * Controls how many elements are skipped over when page up/down are pressed.
     *
     * ```md-literal
     * * When 0: Page Up/Down are disabled
     * * When &gt;= 1: Page Up/Down moves that number of elements up or down
     * * When 0 &lt; x &lt; 1, Page Up/Down moves by that percentage of all elements, or of 100 elements, whichever is higher. In other words, 0.1 jumps by 10 elements when there are fewer then 100 elements, and 20 elements when there are 200 elements.
     * ```
     */
    pageNavigationSize: number;
    /**
     * What happens when `up` is pressed on the first valid child?
     *
     * ```md-literal
     * * "wrap": The focus is sent down to the last child
     * * "passthrough": Nothing happens, **and the event is allowed to propagate**.
     * * A function:
     * ```
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
     * Not relative to the writing mode -- these are the literal keys that need to be pressed.
     *
     * Use "either" to allow navigation in either direction.
     *
     * Use "none" to disallow navigation with the arrow keys in any direction.
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
     */
    indexMangler: (n: number) => number;
    /**
     * @see {@link UseLinearNavigationParametersSelf.indexMangler}, which does the opposite of this.
     */
    indexDemangler: (n: number) => number;
    /**
     * From `useManagedChildren`. This can be higher than the *actual* highest index if you need it to be.
     *
     * @returns [0, n], not [0, n)
     */
    getHighestIndex(): number;
    /**
     * From `useManagedChildren`. This can be lower than the *actual* lowest index if you need it to be.
     *
     * @see {@link UseLinearNavigationParametersSelf.getLowestIndex}
     */
    getLowestIndex(): number;
}

export declare interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> {
    linearNavigationReturn: UseLinearNavigationReturnTypeSelf;
    propsStable: ElementProps<ParentOrChildElement>;
}

export declare interface UseLinearNavigationReturnTypeSelf {
}

/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 *
 * @remarks In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 *
 * @compositeParams
 *
 * @hasChild {@link useListNavigationChild}
 */
export declare function useListNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, ...void1 }: UseListNavigationParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationReturnType<ParentOrChildElement, ChildElement, M>;

/**
 * @compositeParams
 */
export declare function useListNavigationChild<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({ info, context, refElementReturn, textContentParameters, ...void2 }: UseListNavigationChildParameters<ChildElement, M>): UseListNavigationChildReturnType<ChildElement, M>;

export declare interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement> {
}

export declare interface UseListNavigationChildParameters<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends ExtendMerge<UseRovingTabIndexChildParameters<ChildElement, M>, UseTypeaheadNavigationChildParameters<ChildElement, M>> {
    context: UseListNavigationContext;
}

export declare interface UseListNavigationChildReturnType<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexChildReturnType<ChildElement, M>, UseTypeaheadNavigationChildReturnType {
}

export declare interface UseListNavigationContext extends RovingTabIndexChildContext, UseTypeaheadNavigationContext {
}

export declare interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseTypeaheadNavigationParameters<ChildElement, M>, "rovingTabIndexReturn">, OmitStrong<UseLinearNavigationParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn"> {
}

export declare interface UseListNavigationReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends OmitStrong<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement, M>, "props">, OmitStrong<UseTypeaheadNavigationReturnType<ParentOrChildElement>, "propsStable">, OmitStrong<UseLinearNavigationReturnType<ParentOrChildElement>, "propsStable"> {
    propsStableParentOrChild: ElementProps<ParentOrChildElement>;
    propsParent: ElementProps<ParentOrChildElement>;
    context: UseListNavigationContext;
}

export declare function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, ...void3 }: UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, M>;

export declare function useListNavigationSingleSelectionChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({ info, context, refElementReturn, textContentParameters, ...void1 }: UseListNavigationSingleSelectionChildParameters<ChildElement, M>): UseListNavigationSingleSelectionChildReturnType<ChildElement, M>;

export declare interface UseListNavigationSingleSelectionChildContext extends UseListNavigationContext, UseSingleSelectionContext {
}

export declare interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends ExtendMerge<UseListNavigationChildInfo<TabbableChildElement>, UseSingleSelectionChildInfo<TabbableChildElement>> {
}

export declare interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationChildParameters<ChildElement, M>, UseSingleSelectionChildParameters<ChildElement, M>> {
}

export declare interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement, M>, UseSingleSelectionChildReturnType<ChildElement>>, "props"> {
    propsTabbable: ElementProps<any>;
    propsChild: ElementProps<any>;
}

export declare interface UseListNavigationSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, OmitStrong<UseSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn">> {
}

export declare interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends ExtendMerge<UseListNavigationReturnType<ParentOrChildElement, ChildElement, M>, UseSingleSelectionReturnType<ChildElement, M>> {
}

export declare function useListNavigationSingleSelectionSortable<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, rearrangeableChildrenParameters, sortableChildrenParameters, refElementReturn, ...void3 }: UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement, ChildElement, M>): UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement, ChildElement, M>;

export declare function useListNavigationSingleSelectionSortableChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>>({ info, context, refElementReturn, textContentParameters, ...void1 }: UseListNavigationSingleSelectionSortableChildParameters<ChildElement, M>): UseListNavigationSingleSelectionSortableChildReturnType<ChildElement, M>;

export declare interface UseListNavigationSingleSelectionSortableChildInfo<TabbableChildElement extends Element> extends UseListNavigationSingleSelectionChildInfo<TabbableChildElement>, UseSortableChildInfo {
}

export declare interface UseListNavigationSingleSelectionSortableChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends UseListNavigationSingleSelectionChildParameters<ChildElement, M> {
}

export declare interface UseListNavigationSingleSelectionSortableChildReturnType<ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends UseListNavigationSingleSelectionChildReturnType<ChildElement, M> {
}

export declare interface UseListNavigationSingleSelectionSortableParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends OmitStrong<UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "linearNavigationParameters" | "managedChildrenReturn">, TargetedOmit<UseListNavigationSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, "linearNavigationParameters", "indexDemangler" | "indexMangler">, UseSortableChildrenParameters<M> {
}

export declare interface UseListNavigationSingleSelectionSortableReturnType<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionSortableChildInfo<ChildElement>> extends UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement, M>, UseSortableChildrenReturnType<M> {
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
export declare function useLogicalDirection({}: UseLogicalDirectionParameters): UseLogicalDirectionReturnType;

export declare interface UseLogicalDirectionParameters {
}

export declare interface UseLogicalDirectionReturnType {
    /** **STABLE** */
    /** **STABLE** */
    /** **STABLE** */
    logicalDirectionReturn: {
        getLogicalDirectionInfo: (computedStyles: CSSStyleDeclaration) => LogicalDirectionInfo | null;
        /**
         * Given the ElementSize info from useElementSize, converts all those physical properties to their logical counterparts.
         *
         * **STABLE**
         */
        convertToLogicalSize: (computedStyles: CSSStyleDeclaration, elementSize: ElementSize, direction?: LogicalDirectionInfo | null | undefined) => LogicalElementSize | null;
        /**
         * Turns `"horizontal" | "vertical"` into `"inline" | "block"`
         *
         * **STABLE**
         */
        convertToLogicalOrientation: (computedStyles: CSSStyleDeclaration, elementOrientation: PhysicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => "inline" | "block";
        /**
         * Turns `"inline" | "block"` into `"horizontal" | "vertical"`
         *
         * **STABLE**
         */
        convertToPhysicalOrientation: (computedStyles: CSSStyleDeclaration, elementOrientation: LogicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => "horizontal" | "vertical";
        /**
         * Turns `"top" | "bottom" | "left" | "right"` into `"block-start" | "block-end" | "inline-start" | "inline-end"`
         *
         * **STABLE**
         */
        convertToLogicalSide: (computedStyles: CSSStyleDeclaration, side: "top" | "bottom" | "left" | "right", direction?: LogicalDirectionInfo | null | undefined) => "inline-start" | "inline-end" | "block-start" | "block-end";
        /**
         * Turns `"block-start" | "block-end" | "inline-start" | "inline-end"` into `"top" | "bottom" | "left" | "right"`
         *
         * **STABLE**
         */
        convertToPhysicalSide: (computedStyles: CSSStyleDeclaration, side: "inline-start" | "inline-end" | "block-start" | "block-end", direction?: LogicalDirectionInfo | null | undefined) => "top" | "bottom" | "left" | "right";
    };
}

/**
 * Handles events for dismiss events for things like popup menus or transient dialogs -- things where moving focus to a new area of the page means this component should close itself.
 *
 * @compositeParams
 */
export declare function useLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { open, onClose, ...void4 }, ...void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement>): UseLostFocusDismissReturnType<SourceElement, PopupElement>;

export declare interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element> {
    lostFocusDismissParameters: UseLostFocusDismissParametersSelf;
    refElementSourceReturn: Nullable<Pick<UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"], "getElement">>;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

export declare interface UseLostFocusDismissParametersSelf {
    open: boolean;
    onClose(): void;
}

export declare interface UseLostFocusDismissReturnType<_SourceElement extends Element | null, _PopupElement extends Element> extends TargetedPick<UseActiveElementParameters, "activeElementParameters", "onLastActiveElementChange"> {
}

/**
 * @compositeParams
 */
export declare function useManagedChild<M extends ManagedChildInfo<number | string>>({ context, info }: UseManagedChildParameters<M, keyof M>): UseManagedChildReturnType<M>;

export declare interface UseManagedChildParameters<M extends ManagedChildInfo<any>, InfoParameterKeys extends keyof M> {
    /**
     * In general, this shouldn't be null, but for convenience's sake you are allowed to, which disables all behavior, and also means `getChildren` will be `undefined`!
     */
    context: UseManagedChildrenContext<M> | null;
    /**
     * The exact data that's available from the parent/each sibling element via `getAt` or the other methods on `ManagedChildren`.
     */
    info: Pick<M, InfoParameterKeys>;
}

/**
 * Allows a parent component to access information about certain
 * child components once they have rendered.
 *
 * @remarks This hook is designed to be lightweight, in that the parent keeps no state
 * and runs no effects.  Each child *does* run an effect, but with no state
 * changes unless you explicitly request them.
 *
 * @hasChild {@link useManagedChild}
 *
 * @compositeParams
 */
export declare function useManagedChildren<M extends ManagedChildInfo<string | number>>(parentParameters: UseManagedChildrenParameters<M>): UseManagedChildrenReturnType<M>;

export declare interface UseManagedChildrenContext<M extends ManagedChildInfo<any>> {
    managedChildContext: UseManagedChildrenContextSelf<M>;
}

export declare interface UseManagedChildrenContextSelf<M extends ManagedChildInfo<any>> {
    getChildren(): ManagedChildren<M>;
    managedChildrenArray: InternalChildInfo<M>;
    remoteULEChildMounted: (index: M["index"], mounted: boolean) => void;
    remoteULEChildChanged: (index: M["index"]) => (() => void);
}

export declare interface UseManagedChildrenParameters<M extends ManagedChildInfo<any>> {
    managedChildrenParameters: UseManagedChildrenParametersSelf<M>;
}

export declare interface UseManagedChildrenParametersSelf<M extends ManagedChildInfo<any>> {
    /**
     * Runs after one or more children have updated their information (index, etc.).
     *
     * Only one will run per tick, just like layoutEffect, but it isn't
     * *guaranteed* to have actually been a change.
     *
     * TODO: This ended up not being needed by anything. Is it necessary? Does it cost anything?
     */
    onAfterChildLayoutEffect?: Nullable<OnAfterChildLayoutEffect<M["index"]>>;
    /**
     * Same as the above, but only for mount/unmount (or when a child changes its index)
     */
    onChildrenMountChange?: Nullable<OnChildrenMountChange<M["index"]>>;
    onChildrenCountChange?: Nullable<((count: number) => void)>;
}

export declare interface UseManagedChildrenReturnType<M extends ManagedChildInfo<any>> {
    /**
     * Returns information about the child that rendered itself with the requested key.
     *
     * **STABLE** (even though it's not a function, the identity of this object never changes)
     */
    managedChildrenReturn: UseManagedChildrenReturnTypeSelf<M>;
    context: UseManagedChildrenContext<M>;
}

export declare interface UseManagedChildrenReturnTypeSelf<M extends ManagedChildInfo<any>> {
    /**
     * ***STABLE***
     *
     * Note that **both** `getChildren` and the `ManagedChildren` object it returns are stable!
     *
     * This is a getter instead of an object because when function calls happen out of order it's easier to just have always been passing and return getters everywhere
     */
    getChildren(): ManagedChildren<M>;
}

export declare interface UseManagedChildReturnType<M extends ManagedChildInfo<any>> {
    managedChildReturn: UseManagedChildReturnTypeSelf<M>;
}

export declare interface UseManagedChildReturnTypeSelf<M extends ManagedChildInfo<any>> {
    getChildren(): ManagedChildren<M>;
}

/**
 *
 * Allows a component to use the boolean result of a media query as part of its render.
 *
 * @remarks Please note that there is a re-render penalty incurred by using this hook -- it will
 * always cause any component that uses it to re-render one extra time on mount as it
 * stores the result of the media query. This can be mitigated with the `defaultGuess`
 * parameter -- if you guess correctly (`true`/`false`), then there's no penalty. Hooray.
 *
 * @param query - Must be in parens, e.g. `(max-width: 600px)`
 * @param defaultGuess - Optional. If you pass the same value that's measured after rendering, no re-render will occur.
 * @returns `UseMediaQueryReturnType`
 */
export declare function useMediaQuery(query: string | null | undefined, defaultGuess?: boolean): UseMediaQueryReturnType;

export declare interface UseMediaQueryReturnType {
    matches: boolean | null;
    getMatches(): boolean | null;
}

export declare function useMemoObject<T extends {}>(t: T): T;

/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 */
export declare function useMergedChildren(lhs: ElementProps<EventTarget>["children"], rhs: ElementProps<EventTarget>["children"]): ElementProps<EventTarget>["children"];

/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 *
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 */
export declare function useMergedClasses(...classes: ElementProps<EventTarget>["className"][]): string | undefined;

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
export declare function useMergedProps<E extends EventTarget>(...allProps: ElementProps<E>[]): ElementProps<E>;

/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 *
 * @remarks Or just use {@link useMergedProps}
 */
export declare function useMergedRefs<E extends EventTarget>(rhs: ElementProps<E>["ref"], lhs: ElementProps<E>["ref"]): RefObject<E> | RefCallback<E>;

/**
 * Merges two style objects, returning the result.
 *
 * @param style - The user-given style prop for this component
 * @param obj - The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 */
export declare function useMergedStyles(lhs: ElementProps<EventTarget>["style"], rhs: ElementProps<EventTarget>["style"]): ElementProps<EventTarget>["style"];

/**
 * Combines dismissal hooks and focus trap hooks into one.
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * @compositeParams
 */
export declare function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters, escapeDismissParameters, focusTrapParameters: { trapActive, ...focusTrapParameters } }: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>;

export declare interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners>, Pick<UseFocusTrapParameters<any, any>, "focusTrapParameters"> {
}

export declare interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
}

/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 */
export declare function useMutationObserver<E extends Element>({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }: UseMutationObserverParameters<E>): UseMutationObserverReturnType<E>;

export declare interface UseMutationObserverParameters<E extends Element> extends UseRefElementParameters<E> {
    mutationObserverParameters: UseMutationObserverParametersSelf<E>;
}

export declare interface UseMutationObserverParametersSelf<E extends Element> extends UseRefElementParameters<E> {
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

export declare interface UseMutationObserverReturnType<E extends Element> extends UseRefElementReturnType<E> {
}

/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
export declare function usePaginatedChild<ChildElement extends Element>({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }: UsePaginatedChildParameters): UsePaginatedChildReturnType<ChildElement>;

export declare interface UsePaginatedChildContext {
    paginatedChildContext: UsePaginatedChildContextSelf;
}

export declare interface UsePaginatedChildContextSelf {
    parentIsPaginated: boolean;
    getDefaultPaginationVisible(i: number): boolean;
}

export declare interface UsePaginatedChildParameters {
    info: {
        index: number;
    };
    context: UsePaginatedChildContext;
}

/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 *
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 *
 * @compositeParams
 *
 * @hasChild {@link usePaginatedChild}
 */
export declare function usePaginatedChildren<ParentElement extends Element, TabbableChildElement extends Element, M extends UsePaginatedChildrenInfo<TabbableChildElement>>({ managedChildrenReturn: { getChildren }, linearNavigationParameters: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, refElementReturn: { getElement } }: UsePaginatedChildrenParameters<ParentElement, TabbableChildElement, M>): UsePaginatedChildrenReturnType;

export declare interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement> {
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}

export declare interface UsePaginatedChildrenParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UsePaginatedChildrenInfo<TabbableChildElement>> extends Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">, TargetedPick<UseLinearNavigationParameters<any, TabbableChildElement, M>, "linearNavigationParameters", "indexDemangler">, TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElement, M>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex">, TargetedPick<UseRefElementReturnType<ParentElement>, "refElementReturn", "getElement"> {
    paginatedChildrenParameters: UsePaginatedChildrenParametersSelf;
}

export declare interface UsePaginatedChildrenParametersSelf {
    paginationMin: Nullable<number>;
    paginationMax: Nullable<number>;
}

export declare interface UsePaginatedChildrenReturnType extends TargetedPick<UseManagedChildrenParameters<any>, "managedChildrenParameters", "onChildrenCountChange"> {
    paginatedChildrenReturn: UsePaginatedChildrenReturnTypeSelf;
    context: UsePaginatedChildContext;
}

export declare interface UsePaginatedChildrenReturnTypeSelf {
    refreshPagination: (min: Nullable<number>, max: Nullable<number>) => void;
    /**
     * **IMPORTANT**: This is only tracked when pagination is enabled.
     *
     * If pagination is not enabled, this is either `null` or some undefined previous number.
     */
    childCount: Nullable<number>;
}

export declare interface UsePaginatedChildReturnType<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    paginatedChildReturn: UsePaginatedChildReturnTypeSelf;
    info: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">;
}

export declare interface UsePaginatedChildReturnTypeSelf {
    paginatedVisible: boolean;
    parentIsPaginated: boolean;
    hideBecausePaginated: boolean;
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
export declare function usePassiveState<T, R>(onChange: Nullable<OnPassiveStateChange<T, R>>, getInitialValue?: () => T, customDebounceRendering?: typeof debounceRendering): readonly [getStateStable: () => T, setStateStable: PassiveStateUpdater<T, R>];

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
 * Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
 *
 * @remarks Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
 *
 * TODO: Can't push a child until after the very first `useLayoutEffect`
 *
 * {@include } {@link UsePortalChildrenParameters}
 */
export declare function usePortalChildren({ target }: UsePortalChildrenParameters): UsePortalChildrenReturnType;

export declare interface UsePortalChildrenParameters {
    /**
     * The element that will contain the portal's children, or the string of its `id`.
     */
    target: string | Element | null;
}

export declare interface UsePortalChildrenReturnType {
    /** The return value of `createPortal` */
    children: VNode | null;
    /** The element that the portal was rendered to (even if an `id` was provided) */
    portalElement: Element | null;
    /** Appends the given child to the portal's existing children, and returns a number that can be used to request updates to it/remove it later if necessary */
    pushChild(child: VNode): number;
    /** Allows a child to be updated with new props. `index` is the value returned from `pushChild`. */
    updateChild(index: number, child: VNode): void;
    /** Removes the child at the given `index` (the value returned from `pushChild`) */
    removeChild(index: number): void;
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
 *
 */
export declare function usePress<E extends Element>(args: UsePressParameters<E>): UsePressReturnType<E>;

export declare interface UsePressParameters<E extends EventTarget> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
    pressParameters: UsePressParametersSelf<E>;
}

export declare interface UsePressParametersSelf<E extends EventTarget> {
    onPressingChange?: Nullable<OnPassiveStateChange<boolean, PressChangeEventReason<E>>>;
    /**
     * What should happen when this widget has been "pressed".
     *
     * This must be a sync event handler; async handlers must be taken care of externally.
     *
     * Setting to `null` or `undefined` effectively disables the press event handler.
     */
    onPressSync: Nullable<((e: PressEventReason<E>) => void)>;
    /** Pass a function that returns `true` to prevent the spacebar from contributing to press events */
    excludeSpace?(): boolean;
    /** Pass a function that returns `true` to prevent the enter key from contributing to press events */
    excludeEnter?(): boolean;
    /** Pass a function that returns `true` to prevent the pointer (mouse, touch, etc.) from contributing to press events */
    excludePointer?(): boolean;
    /**
     * Ensures that when a button is pressed it properly receives focus (even on iOS Safari).
     *
     * Generally, this should just be `e => e.focus()`
     * @param element - The element that is (presumably) about to receive focus
     */
    focusSelf(element: E): void;
    /**
     * If `true`, holding down the `Enter` key will repeatedly fire press events as each sequential repeated keyboard event happens.
     */
    allowRepeatPresses?: Nullable<boolean>;
    /**
     * After this number of milliseconds have passed pressing down but not up, the returned `longPress` value will be set to `true`
     * and the user's actions will not fire an actual press event.
     */
    longPressThreshold?: Nullable<number>;
}

export declare interface UsePressReturnType<E extends Element> {
    pressReturn: UsePressReturnTypeSelf;
    props: ElementProps<E>;
}

export declare interface UsePressReturnTypeSelf {
    /**
     * Sort of like when the CSS `:active` pseudo-element would apply,
     * but specifically for presses only, so it's a more accurate reflection
     * of what will happen for the user. Useful for styling mostly.
     */
    pressing: boolean;
    getIsPressing(): boolean;
    /**
     * Similar to pseudoActive, but for if the button as been pressed down for a determined length of time.
     */
    longPress: boolean | null;
}

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 *
 * @compositeParams
 */
export declare function useRandomDualIds<InputElement extends Element, LabelElement extends Element>({ randomIdInputParameters, randomIdLabelParameters, }: UseRandomDualIdsParameters): UseRandomDualIdsReturnType<InputElement, LabelElement>;

export declare interface UseRandomDualIdsParameters {
    randomIdInputParameters: UseRandomIdParameters["randomIdParameters"];
    randomIdLabelParameters: UseRandomIdParameters["randomIdParameters"];
}

export declare interface UseRandomDualIdsReturnType<InputElement extends Element, LabelElement extends Element> {
    propsInput: ElementProps<InputElement>;
    propsLabel: ElementProps<LabelElement>;
    randomIdInputReturn: UseRandomIdReturnType<InputElement, LabelElement>["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnType<LabelElement, InputElement>["randomIdReturn"];
}

/**
 * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
 *
 * @compositeParams
 */
export declare function useRandomId<S extends Element, T extends Element>({ randomIdParameters: { prefix, otherReferencerProp } }: UseRandomIdParameters): UseRandomIdReturnType<S, T>;

export declare interface UseRandomIdParameters {
    randomIdParameters: UseRandomIdParametersSelf;
}

export declare interface UseRandomIdParametersSelf {
    /**
     * While all IDs are unique, this can be used to more easily differentiate them.
     *
     * If this is stable, then your props are stable. Simple as that.
     */
    prefix: string;
    /** This is the prop on the **OTHER** element that will use our ID.  E.G. The `input` calls `useRandomId` and passes `for` as `referencerProp`. */
    otherReferencerProp: keyof ElementProps<any> | null;
}

export declare interface UseRandomIdReturnType<S extends Element, T extends Element> {
    propsSource: ElementProps<S>;
    propsReferencer: ElementProps<T>;
    randomIdReturn: UseRandomIdReturnTypeSelf;
}

export declare interface UseRandomIdReturnTypeSelf {
    id: string;
}

export declare interface UseRearrangeableChildInfo extends ManagedChildInfo<number> {
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
export declare function useRearrangeableChildren<M extends UseSortableChildInfo>({ rearrangeableChildrenParameters: { getIndex, onRearranged }, managedChildrenReturn: { getChildren } }: UseRearrangeableChildrenParameters<M>): UseRearrangeableChildrenReturnType<M>;

/**
 * All of these functions **MUST** be stable across renders.
 */
export declare interface UseRearrangeableChildrenParameters<M extends UseRearrangeableChildInfo> extends TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    rearrangeableChildrenParameters: UseRearrangeableChildrenParametersSelf;
}

export declare interface UseRearrangeableChildrenParametersSelf {
    /**
     * This must return the index of this child relative to all its sortable siblings from its `VNode`.
     *
     * In general, this corresponds to the `index` prop, so something like `vnode => vnode.props.index` is what you're usually looking for.
     */
    getIndex: GetIndex;
    /**
     * Called after the children have been rearranged.
     */
    onRearranged: null | (() => void);
}

export declare interface UseRearrangeableChildrenReturnType<M extends UseRearrangeableChildInfo> {
    rearrangeableChildrenReturn: UseRearrangeableChildrenReturnTypeSelf<M>;
}

export declare interface UseRearrangeableChildrenReturnTypeSelf<M extends UseRearrangeableChildInfo> {
    /**
     * Pass an array of not-sorted child information to this function
     * and the children will re-arrange themselves to match.
     *
     * **STABLE**
     *
     *
     */
    rearrange: (originalRows: M[], rowsInOrder: M[]) => void;
    /** **STABLE** */
    shuffle: () => Promise<void> | void;
    /** **STABLE** */
    reverse: () => Promise<void> | void;
    /**
     * **STABLE**
     *
     * This function takes a component's original `index` prop and outputs a new index that represents its re-arranged position.
     * In conjunction with `indexDemangler`, this can be used to perform math on indices (incrementing, decrementing, etc.)
     *
     * E.G. to decrement a component's index "c": indexDemangler(indexMangler(c) - 1)
     */
    indexMangler: (n: number) => number;
    /** **STABLE** */
    indexDemangler: (n: number) => number;
    /** **STABLE** */
    /** **STABLE** */
    /**
     * **STABLE**
     *
     * Call this on your props (that contain the children to sort!!) to allow them to be sortable.
     *
     */
    useRearrangedChildren: (children: VNode[]) => VNode[];
    toJsonArray(transform?: (info: M) => object): object;
}

/**
 * Allows you to access the `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
 *
 * @remarks
 *
 * This hook, like many others, works with either `useState` or {@link usePassiveState}. Why use one over the other?
 *
 * * `useState` is familiar and easy to use, but causes the component to re-render itself, which is slow.
 * * `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.
 *
 * @example
 * Easiest way to use (but causes an extra re-render 🐌)
 * ```typescript
 * const [element, setElement] = useState<HTMLButtonElement | null>(null);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * useEffect(() => {
 *     element.doSomethingFunny();
 * }, [element])
 * ```
 *
 * @example
 * Fastest (but slightly more verbose)
 * ```typescript
 * // The code in useEffect is moved into this callback, but runs at the same time
 * const onElementChange = useCallback(element => element.doSomethingFunny(), []);
 * const [getElement, setElement] = usePassiveState<HTMLButtonElement | null>(onElementChange, returnNull);
 * const { propsStable } = useRefElement({ onElementChange: setElement });
 * ```
 *
 * @compositeParams
 */
export declare function useRefElement<T extends EventTarget>(args: UseRefElementParameters<T>): UseRefElementReturnType<T>;

export declare interface UseRefElementParameters<T> {
    /**
     * For the sake of convenience,
     * this one is optional, since using this hook is so common,
     * but using its parameter options is so uncommon, and it's
     * absence isn't usually because it was forgotten, it's because
     * it doesn't matter.
     */
    refElementParameters?: UseRefElementParametersSelf<T>;
}

export declare interface UseRefElementParametersSelf<T> {
    /**
     * Called with the `Element` when it mounts, called with `null` when it unmounts.
     */
    onElementChange?: OnPassiveStateChange<T | null, never>;
    /** Called when the element mounts */
    onMount?: (element: T) => void;
    /** Called when the element unmounts */
    onUnmount?: (element: T) => void;
}

export declare interface UseRefElementReturnType<T extends EventTarget> {
    propsStable: ElementProps<T>;
    refElementReturn: UseRefElementReturnTypeSelf<T>;
}

export declare interface UseRefElementReturnTypeSelf<T extends EventTarget> {
    /**
     * **STABLE**
     *
     * Call to return the element that the props were rendered to, or `null` if they were not rendered to an element.
     */
    getElement(): T | null;
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
export declare function useRovingTabIndex<ParentElement extends Element, ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, ...void1 }: UseRovingTabIndexParameters<ParentElement, ChildElement, M>): UseRovingTabIndexReturnType<ParentElement, ChildElement, M>;

/**
 * @compositeParams
 *
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 */
export declare function useRovingTabIndexChild<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>>({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, untabbable: parentIsUntabbable, untabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }: UseRovingTabIndexChildParameters<ChildElement, M>): UseRovingTabIndexChildReturnType<ChildElement, M>;

export declare interface UseRovingTabIndexChildInfo<TabbableChildElement extends Element> extends ManagedChildInfo<number> {
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
     * @see {@link UseRovingTabIndexChildInfo.setLocallyTabbable}
     */
    getLocallyTabbable: () => boolean;
}

export declare type UseRovingTabIndexChildInfoKeysParameters = "index" | "untabbable";

export declare type UseRovingTabIndexChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";

export declare interface UseRovingTabIndexChildParameters<TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends Pick<UseRefElementReturnType<TabbableChildElement>, "refElementReturn">, OmitStrong<UseManagedChildParameters<M, UseRovingTabIndexChildInfoKeysParameters>, "context"> {
    /**
     * The information provided by the parent hook
     */
    context: RovingTabIndexChildContext;
}

export declare interface UseRovingTabIndexChildReturnType<ChildElement extends Element, M extends UseRovingTabIndexChildInfo<ChildElement>> extends Required<TargetedPick<UseHasCurrentFocusParameters<ChildElement>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged">> {
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

export declare interface UseRovingTabIndexChildReturnTypeSelf {
    /**
     * *Unstable*
     *
     * Whether this child, individually, is *the* currently tabbable child.
     */
    tabbable: boolean;
    /** **STABLE** */
    getTabbable(): boolean;
}

export declare interface UseRovingTabIndexParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren">, TargetedPick<UseRefElementReturnType<ParentElement>, "refElementReturn", "getElement"> {
    /** When children mount/unmount, RTI needs access to all known children in case we unmounted the currently tabbable child */
    /** The only parameters RTI needs directly is the initial index to be tabbable */
    rovingTabIndexParameters: UseRovingTabIndexParametersSelf<ParentElement, TabbableChildElement, M>;
}

export declare interface UseRovingTabIndexParametersSelf<ParentElement extends Element, TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> {
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

export declare interface UseRovingTabIndexReturnType<ParentElement extends Element, TabbableChildElement extends Element, _M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends TargetedPick<UseManagedChildrenParameters<UseRovingTabIndexChildInfo<TabbableChildElement>>, "managedChildrenParameters", "onChildrenMountChange"> {
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

export declare interface UseRovingTabIndexReturnTypeSelf {
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

export declare function useSearchParamStateDeclarative<Key extends keyof SearchParamStates>({ key, defaultReason, stringToValue, initialValue, valueToString }: OmitStrong<UseSearchParamStateParameters<Key, SearchParamStates[Key]>, "onValueChange">): readonly [SearchParamStates[Key], SetParamWithHistory<SearchParamStates[Key]>, () => SearchParamStates[Key]];

export declare interface UseSearchParamStateParameters<Key extends keyof SearchParamStates, T = SearchParamStates[Key]> {
    key: Key;
    /** If there is no value in the URL for this state, then `initialValue` will be used instead. */
    initialValue: T;
    /**
     * How is the user's history modified when the state changes if not otherwise specified?
     * "`replace`" is recommended unless you *really* have a good reason to clog up the back button.
     */
    defaultReason?: "push" | "replace";
    onValueChange?: OnParamValueChanged<T> | null | undefined;
    stringToValue: ((value: string | null) => T | null);
    valueToString?: ((value: T | null) => (string | null)) | undefined;
}

/**
 *
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 */
export declare function useSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>>({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSelectedIndexChange: onSelectedIndexChange_U, initiallySelectedIndex, ariaPropName, selectionMode, ...void3 }, ...void4 }: UseSingleSelectionParameters<ParentOrChildElement, ChildElement, M>): UseSingleSelectionReturnType<ChildElement, M>;

/**
 *
 *
 * @compositeParams
 */
export declare function useSingleSelectionChild<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>>({ context: { singleSelectionContext: { getSelectedIndex, onSelectedIndexChange, ariaPropName, selectionMode, ...void1 }, ...void2 }, info: { index, unselectable, ...void3 }, ...void4 }: UseSingleSelectionChildParameters<ChildElement, M>): UseSingleSelectionChildReturnType<ChildElement>;

/** Anything that's selectable must be tabbable, so we DO use rovingTabIndex instead of just managedChildren */
export declare interface UseSingleSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
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

export declare type UseSingleSelectionChildInfoParameterKeys = "index" | "unselectable";

export declare type UseSingleSelectionChildInfoReturnKeys = "getSelected" | "setLocalSelected" | "selected";

export declare interface UseSingleSelectionChildParameters<E extends Element, M extends UseSingleSelectionChildInfo<E>> {
    context: UseSingleSelectionContext;
    info: Pick<UseSingleSelectionChildInfo<E>, UseSingleSelectionChildInfoParameterKeys>;
}

export declare interface UseSingleSelectionChildReturnType<E extends Element> extends UseChildrenHaveFocusChildReturnType<E> {
    props: ElementProps<E>;
    info: Pick<UseSingleSelectionChildInfo<E>, UseSingleSelectionChildInfoReturnKeys>;
    singleSelectionChildReturn: UseSingleSelectionChildReturnTypeSelf;
}

export declare interface UseSingleSelectionChildReturnTypeSelf {
    /**
     * Is this child currently the selected child among all its siblings?
     */
    selected: boolean;
    /** @see selected */
    getSelected(): boolean;
    /**
     * Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.
     *
     * It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.
     *
     * This useful for things like animations or transitions.
     */
    selectedOffset: Nullable<number>;
    /** @see selectedOffset */
    getSelectedOffset: () => (number | null);
}

export declare interface UseSingleSelectionContext {
    singleSelectionContext: SingleSelectionContextSelf;
}

/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export declare function useSingleSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element, _M extends UseSingleSelectionChildInfo<ChildElement>>({ singleSelectionReturn: { changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange } }: UseSingleSelectionDeclarativeParameters): {
    singleSelectionParameters: {
        onSelectedIndexChange: EnhancedEventHandler<Event, {
            selectedIndex: number;
        }> | null;
    };
};

export declare interface UseSingleSelectionDeclarativeParameters {
    singleSelectionDeclarativeParameters: {
        selectedIndex: number | null;
        onSelectedIndexChange: null | EnhancedEventHandler<Event, {
            selectedIndex: number;
        }>;
    };
    singleSelectionReturn: Pick<UseSingleSelectionReturnType<any, any>["singleSelectionReturn"], "changeSelectedIndex">;
}

export declare interface UseSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> extends TargetedPick<UseManagedChildrenReturnType<UseSingleSelectionChildInfo<ChildElement>>, "managedChildrenReturn", "getChildren">, TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn", "setTabbableIndex"> {
    singleSelectionParameters: UseSingleSelectionParametersSelf;
}

export declare interface UseSingleSelectionParametersSelf {
    /**
     * This is imperative, as opposed to declarative,
     * to save on re-rendering the parent whenever the selected index changes.
     */
    initiallySelectedIndex: number | null;
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
     */
    onSelectedIndexChange: null | SelectedIndexChangeHandler;
    selectionMode: "focus" | "activation" | "disabled";
    /**
     * What property will be used to mark this item as selected.
     *
     * **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.
     */
    ariaPropName: `aria-${"pressed" | "selected" | "checked" | `current-${"page" | "step" | "date" | "time" | "location" | "true"}`}` | null;
}

export declare interface UseSingleSelectionReturnType<ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> extends TargetedPick<UseChildrenHaveFocusParameters<ChildElement>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
    singleSelectionReturn: UseSingleSelectionReturnTypeSelf;
    context: UseSingleSelectionContext;
}

export declare interface UseSingleSelectionReturnTypeSelf {
    /**
     * A function that, when called, internally updates the selected index to the one you provide,
     * and tells the relevant children that they are/are not selected.
     *
     * If you are creating an imperative component, this is what how you can force the value to change in response to something.
     *
     * If you are creating a declarative component, this is what you call in `useEffect` when your `selectedIndex` changes.
     */
    changeSelectedIndex: PassiveStateUpdater<number | null, Event>;
    getSelectedIndex(): number | null;
}

export declare interface UseSortableChildInfo extends UseRearrangeableChildInfo {
    getSortValue(): unknown;
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
export declare function useSortableChildren<M extends UseSortableChildInfo>({ rearrangeableChildrenParameters, sortableChildrenParameters: { compare: userCompare }, managedChildrenReturn: { getChildren } }: UseSortableChildrenParameters<M>): UseSortableChildrenReturnType<M>;

/**
 * All of these functions **MUST** be stable across renders.
 */
export declare interface UseSortableChildrenParameters<M extends UseRearrangeableChildInfo> extends UseRearrangeableChildrenParameters<M> {
    sortableChildrenParameters: UseSortableChildrenParametersSelf<M>;
}

export declare interface UseSortableChildrenParametersSelf<M extends UseRearrangeableChildInfo> {
    /**
     * Controls how values compare against each other when `sort` is called.
     *
     * If null, a default sort is used that assumes `getSortValue` returns a value that works well with the `-` operator (so, like, a number, string, `Date`, `null`, etc.)
     *
     * @param lhs - The first value to compare
     * @param rhs - The second value to compare
     */
    compare: null | Compare<M>;
}

export declare interface UseSortableChildrenReturnType<M extends UseRearrangeableChildInfo> extends UseRearrangeableChildrenReturnType<M> {
    sortableChildrenReturn: UseSortableChildrenReturnTypeSelf<M>;
}

export declare interface UseSortableChildrenReturnTypeSelf<M extends UseRearrangeableChildInfo> {
    /**
     * **STABLE**
     *
     * Call to rearrange the children in ascending or descending order.
     *
     */
    sort: (direction: "ascending" | "descending") => Promise<void> | void;
}

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
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * @remarks This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 */
export declare function useStableGetter<T>(value: T): () => T;

/**
 * @returns A function that retrieves the stack at the time this hook was called (in development mode only).
 */
export declare function useStack(): () => string | undefined;

/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
export declare function useStaggeredChild<ChildElement extends Element>({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, childCallsThisToTellTheParentTheHighestIndex, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne } } }: UseStaggeredChildParameters): UseStaggeredChildReturnType<ChildElement>;

export declare interface UseStaggeredChildContext {
    staggeredChildContext: UseStaggeredChildContextSelf;
}

export declare interface UseStaggeredChildContextSelf {
    parentIsStaggered: boolean;
    childCallsThisToTellTheParentToMountTheNextOne(index: number): void;
    childCallsThisToTellTheParentTheHighestIndex(index: number): void;
    getDefaultStaggeredVisible(i: number): boolean;
}

export declare interface UseStaggeredChildParameters {
    info: {
        index: number;
    };
    context: UseStaggeredChildContext;
}

/**
 * Allows children to each wait until the previous has finished rendering before itself rendering. E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * @remarks Note that the child itself will still render, but you can delay rendering *its* children, or
 * delay other complicated or heavy logic, until the child is no longer staggered.
 *
 * @compositeParams
 *
 * @hasChild {@link useStaggeredChild}
 */
export declare function useStaggeredChildren<E extends Element, M extends UseStaggeredChildrenInfo<E>>({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered } }: UseStaggeredChildrenParameters<E, M>): UseStaggeredChildrenReturnType;

export declare interface UseStaggeredChildrenInfo<E extends Element> extends Pick<UseRovingTabIndexChildInfo<E>, "index"> {
    setStaggeredVisible(visible: boolean): void;
}

export declare interface UseStaggeredChildrenParameters<E extends Element, M extends UseStaggeredChildrenInfo<E>> extends Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn"> {
    staggeredChildrenParameters: UseStaggeredChildrenParametersSelf;
}

export declare interface UseStaggeredChildrenParametersSelf {
    staggered: boolean;
}

export declare interface UseStaggeredChildrenReturnType {
    staggeredChildrenReturn: UseStaggeredChildrenReturnTypeSelf;
    context: UseStaggeredChildContext;
}

export declare interface UseStaggeredChildrenReturnTypeSelf {
    stillStaggering: boolean;
}

export declare interface UseStaggeredChildReturnType<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    staggeredChildReturn: UseStaggeredChildReturnTypeSelf;
    info: Pick<UseStaggeredChildrenInfo<ChildElement>, "setStaggeredVisible">;
}

export declare interface UseStaggeredChildReturnTypeSelf {
    /** Whether the parent has indicated that all of its children, including this one, are staggered. */
    parentIsStaggered: boolean;
    /**
     * If this is true, you should delay showing *your* children or running other heavy logic until this becomes false.
     *
     * Can be as simple as `<div>{hideBecauseStaggered? null : children}</div>`
     */
    hideBecauseStaggered: boolean;
}

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
 * @compositeParams
 */
export declare function useTextContent<E extends Element>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }: UseTextContentParameters<E>): UseTextContentReturnType;

export declare interface UseTextContentParameters<E extends Element> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
    textContentParameters: UseTextContentParametersSelf<E>;
}

export declare interface UseTextContentParametersSelf<E extends Element> {
    /**
     * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
     */
    getText(e: E | null): string | null;
    /**
     * During `useEffect`, this is called if the text content of the rendered element has changed.
     *
     * @see {@link useMutationObserver} for a more robust implementation of this idea
     */
    onTextContentChange: OnPassiveStateChange<string | null, never>;
}

export declare interface UseTextContentReturnType {
    textContentReturn: UseTextContentReturnTypeSelf;
}

export declare interface UseTextContentReturnTypeSelf {
    /** Returns the last known value of the element's text content */
    getTextContent: () => string | null;
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

export declare interface UseTimeoutParameters {
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
 * Allows for the selection of a managed child by typing the given text associated with it.
 *
 * @see useListNavigation, which packages everything up together.
 *
 * @hasChild {@link useTypeaheadNavigationChild}
 *
 * @compositeParams
 */
export declare function useTypeaheadNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseTypeaheadNavigationChildInfo<ChildElement>>({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValid, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }: UseTypeaheadNavigationParameters<ChildElement, M>): UseTypeaheadNavigationReturnType<ParentOrChildElement>;

/**
 *
 * @compositeParams
 */
export declare function useTypeaheadNavigationChild<ChildElement extends Element, M extends UseTypeaheadNavigationChildInfo<ChildElement>>({ info: { index, ...void1 }, textContentParameters: { getText, ...void5 }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, refElementReturn: { getElement, ...void3 }, ...void4 }: UseTypeaheadNavigationChildParameters<ChildElement, M>): UseTypeaheadNavigationChildReturnType;

export declare interface UseTypeaheadNavigationChildInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
}

/** Arguments passed to the child `useTypeaheadNavigationChild` */
export declare interface UseTypeaheadNavigationChildParameters<ChildElement extends Element, M extends UseTypeaheadNavigationChildInfo<ChildElement>> extends TargetedPick<UseTextContentParameters<ChildElement>, "textContentParameters", "getText">, TargetedPick<UseRefElementReturnType<ChildElement>, "refElementReturn", "getElement"> {
    info: Pick<M, "index">;
    context: UseTypeaheadNavigationContext;
}

export declare interface UseTypeaheadNavigationChildReturnType extends UseTextContentReturnType, TargetedPick<UsePressParameters<any>, "pressParameters", "excludeSpace"> {
}

export declare interface UseTypeaheadNavigationContext {
    typeaheadNavigationContext: UseTypeaheadNavigationContextSelf;
}

export declare interface UseTypeaheadNavigationContextSelf {
    /** **STABLE** (Don't call during render) */
    excludeSpace: () => boolean;
    sortedTypeaheadInfo: Array<TypeaheadInfo>;
    insertingComparator: (lhs: string | null, rhs: TypeaheadInfo) => number;
}

export declare interface UseTypeaheadNavigationParameters<TabbableChildElement extends Element, _M extends UseTypeaheadNavigationChildInfo<TabbableChildElement>> extends TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElement, any>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex"> {
    typeaheadNavigationParameters: UseTypeaheadNavigationParametersSelf<TabbableChildElement>;
}

export declare interface UseTypeaheadNavigationParametersSelf<TabbableChildElement extends Element> {
    /**
     * **Optional**
     *
     * Called any time the currently tabbable index changes as a result of a typeahead-related keypress
     *
     */
    onNavigateTypeahead: Nullable<(newIndex: number | null, event: KeyboardEventType<TabbableChildElement>) => void>;
    /**
     * Must return true if the given child can be navigated to.
     *
     * Generally corresponds to a `hidden` or `disabled` prop.
     * @param index - Which child to query
     */
    isValid(index: number): boolean;
    /**
     * A collator to use when comparing.
     * If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.
     */
    collator: null | Intl.Collator;
    /**
     * If true, no typeahead-related processing will occur, effectively disabling this invocation of `useTypeaheadNavigation` altogether.
     */
    noTypeahead: boolean;
    /**
     * How long after the user's last typeahead-related keypress does it take for the system to reset?
     */
    typeaheadTimeout: number;
}

export declare interface UseTypeaheadNavigationReturnType<ParentOrChildElement extends Element> {
    typeaheadNavigationReturn: UseTypeaheadNavigationReturnTypeSelf;
    propsStable: ElementProps<ParentOrChildElement>;
    context: UseTypeaheadNavigationContext;
}

export declare interface UseTypeaheadNavigationReturnTypeSelf {
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
export declare function useUrl(onUrlChange: (url: string) => void): readonly [() => string, (newUrlOrSetter: string | ((prev: string | undefined) => string), action: "push" | "replace") => void];

export declare function useWhatCausedRender(who: string, { props, state }: {
    props: any;
    state: any;
}): void;

export declare type VNode = JSX.Element;

export { }
