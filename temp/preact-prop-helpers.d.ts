/**
 * # Preact Prop Helpers
 *
 * A set of small, compartmentalized hooks for Preact. The theme is modifying HTML attributes to do useful things, along with a few other boilerplate-y hooks that are just good to have around.
 *
 * Everything from keyboard navigation (arrow keys, typeahead) to modal focus traps (dialogs and menus) to simple things like `useState` *but with localStorage!* are here.
 *
 * [See below a more complete list of goals](#conventions-and-goals), but in general this library aims to be both performant (no unnecessary re-renders, no repeat calls to [`useRefElement`](#userefelement) or other super-common hooks) and impose few to no restrictions on what your rendered HTML must look like in order to achieve any given result.
 *
 * Many of these hooks get really complicated, especially around grid navigation, but everything has been extremely carefully [typed](https://www.typescriptlang.org/) and named so that you can generally just use Intellisense to guide you through the whole process.
 * Hook dependencies are managed by just swizzling their parameters and return types back and forth &mdash; [see the conventions section below for the naming rules that make it work](#conventions-and-goals).
 *
 * As a full example:
 *
 * ```typescript
 * // Short, abbreviated version:
 * const { ...returnType } = useCompleteGridNavigationDeclarative({ ...params });
 *
 * // Entirely complete, fully spelt-out version:
 * const allReturnInfo = useCompleteGridNavigationDeclarative<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>({
 *     // `useRovingTabIndex` is a separate hook that you could call with these same parameters:
 *     rovingTabIndexParameters: {
 *         // If true, the entire grid is removed from the tab order
 *         untabbable: false,
 *         // A function provided by you that is only called when no children are tabbable
 *         focusSelfParent: focus,
 *         // This can be used to track when the user navigates between rows for any reason
 *         onTabbableIndexChange: setTabbableRow,
 *     },
 *     // `useSingleSelection` is a separate hook that you could call with these parameters:
 *     typeaheadNavigationParameters: {
 *         // Determines how children are searched for (`Intl.Collator`)
 *         collator: null,
 *         // Whether typeahead behavior is disabled
 *         noTypeahead: false,
 *         // How long a period of no input is required before typeahead clears itself
 *         typeaheadTimeout: 1000,
 *         // This can be used to track when the user navigates between rows via typeahead
 *         onNavigateTypeahead: null
 *     },
 *     // (etc. etc.)
 *     linearNavigationParameters: {
 *         // Is navigating to the first/last row with Home/End disabled?
 *         disableHomeEndKeys: false,
 *         // What happens when you press Up on the first row?
 *         navigatePastStart: "wrap",
 *         // What happens when you press Down on the last row?
 *         navigatePastEnd: "wrap",
 *         // How far do Page Up/Down jump?
 *         pageNavigationSize: 0.1,
 *         // This can be used to track when the user navigates between rows with the arrow keys
 *         onNavigateLinear: null
 *     },
 *     singleSelectionParameters: {
 *         // When a child is selected, it is indicated with this ARIA attribute:
 *         singleSelectionAriaPropName: "aria-checked",
 *         // Are children selected when they are activated (e.g. clicked), or focused (e.g. tabbed to)?
 *         singleSelectionMode: "focus"
 *     },
 *     multiSelectionParameters: {
 *         // Single- and multi- selection are not exclusive, and when so should be indicated via different attributes.
 *         multiSelectionAriaPropName: "aria-selected",
 *         // singleSelectionMode but for multi-selection
 *         multiSelectionMode: "activation",
 *         // Callback when any child changes with information about % of children checked, etc.
 *         onSelectionChange: null
 *     },
 *     singleSelectionDeclarativeParameters: {
 *         // Which child is currently selected?
 *         singleSelectedIndex: selectedRow,
 *         // What happens when the user selects a child?
 *         onSingleSelectedIndexChange: (e) => setSelectedRow(e[EventDetail].selectedIndex)
 *     },
 *     gridNavigationParameters: {
 *         // This can be used by you to track which 0-indexed column is currently the one with focus.
 *         onTabbableColumnChange: setTabbableColumn
 *     },
 *     rearrangeableChildrenParameters: {
 *         // This must return a VNode's 0-based index from its props
 *         getIndex: useCallback<GetIndex>((a: VNode) => a.props.index, [])
 *     },
 *     sortableChildrenParameters: {
 *         // Controls how rows compare against each other
 *         compare: useCallback((rhs: CustomGridInfo, lhs: CustomGridInfo) => { return lhs.index - rhs.index }, [])
 *     },
 *     paginatedChildrenParameters: {
 *         // Controls the current pagination range
 *         paginationMin: null,
 *         paginationMax: null
 *     },
 *     staggeredChildrenParameters: {
 *         // Controls whether children appear staggered as CPU time permits
 *         staggered: false
 *     },
 *     refElementParameters: {}
 * });
 *
 * // Those were the parameters, these are the return types:
 * const {
 *     // Spread these props to the HTMLElement that will implement this grid behavior
 *     props,
 *     // The child row will useContext this, so provide it to them.
 *     context,
 *     // This is what `useRovingTabIndex` returned; use it for whatever you need:
 *     rovingTabIndexReturn: {
 *         // Call to focus the grid, which focuses the current row, which focuses its current cell.
 *         focusSelf,
 *         // Returns the index of the row that is tabbable to
 *         getTabbableIndex,
 *         // Changes which row is currently tabbable
 *         setTabbableIndex
 *     },
 *     // This is what `useTypeaheadNavigation` returned; use it for whatever you need:
 *     typeaheadNavigationReturn: {
 *         // Returns the current value the user has typed for typeahead (cannot be used during render)
 *         getCurrentTypeahead,
 *         // Whether the user's typeahead is invalid/valid/nonexistent.
 *         typeaheadStatus
 *     },
 *     // (etc. etc.)
 *     singleSelectionReturn: {
 *         // Largely convenience only (since the caller likely already knows the selected index, but just in case)
 *         getSingleSelectedIndex,
 *     },
 *     multiSelectionReturn: {
 *         // Nothing, actually
 *     },
 *     rearrangeableChildrenReturn: {
 *         // You must call this hook on your array of children to implement the sorting behavior
 *         useRearrangedChildren,
 *         // Largely internal use only
 *         indexDemangler,
 *         // Largely internal use only
 *         indexMangler,
 *         // Largely internal use only, but if you implement a custom sorting algorithm, call this to finalize the rearrangement.
 *         rearrange,
 *         // Reverses all children
 *         reverse,
 *         // Shuffles all children
 *         shuffle
 *     },
 *     sortableChildrenReturn: {
 *         // A table header button would probably call this function to sort all the table rows.
 *         sort
 *     },
 *     linearNavigationReturn: { },
 *     managedChildrenReturn: {
 *         // Returns metadata about each row
 *         getChildren
 *     },
 *     paginatedChildrenReturn: {
 *         // Largely internal use only
 *         refreshPagination
 *     },
 *     staggeredChildrenReturn: {
 *         // When the staggering behavior is currently hiding one or more children, this is true.
 *         stillStaggering
 *     },
 *     childrenHaveFocusReturn: {
 *         // Returns true if any row in this grid is focused
 *         getAnyFocused
 *     },
 *
 * } = allReturnInfo;
 * ```
 *
 * ## A note on stability
 *
 * Effects, like in `useEffect`, are great because they let a component say "let's also make some non-HTML changes". So we're all on the same page, an *effect* is *triggered* when one of its *dependencies* changes, as we all know.
 *
 * Preact inherits the same issue of "effect *triggers* (the changes that cause the effect to run) and effect *dependencies* (the data and functions the effect needs to work) are interchangeable" [that React has](https://github.com/facebook/react/issues/14099) and [is working on](https://github.com/facebook/react/pull/25881), and a few of the hooks here are low-level enough that it sometimes starts to become important to distinguish whether a function/object is "stable" or not across renders.
 *
 * An object/function that's "stable" doesn't change values when the component renders itself a second (or third, etc.) time:
 *
 * ```tsx
 * function ExampleComponent() {
 *   // Every time <ExampleComponent /> renders, `stableObject` is the same object as last time (e.g. with ===)
 *   let stableObject = useRef({}).current;
 *   // Every time <ExampleComponent /> renders, `unstableObject` is a new, unique object (e.g. !== the one from the last render)
 *   let unstableObject = ({ evenWith: "a stable value inside" });
 * }
 * ```
 *
 * All stability **requirements** (for parameters) and **guarantees** (for returned values) are documented.
 * Just use `useCallback`, [`useStableCallback`](#usestablecallback), or [`useStableGetter`](#usestablegetter) as appropriate.
 *
 * As another aside, for the same reasons as React, a stable callback from [`useStableCallback`](#usestablecallback) (or [`useStableGetter`](#usestablegetter)) [**cannot be called during render**](https://github.com/reactjs/rfcs/pull/220#issuecomment-1118055107).
 * This is because a component may theoretically be called multiple times for a single render, so it's unknown *which* invocation of `useStableCallback` was the one that resulted in a render until that render finally settles. This prevents the problem of a component somewhere else being given the "wrong" value that it got mid-render.
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
 * {@include } {@link useSelection}
 * {@include } {@link useSingleSelection}
 * {@include } {@link useMultiSelection}
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
 * ## Each hook, individually
 * {@tableOfContents end}
 *
 * ## Miscellanea
 * {@include } {@link Nullable}
 * {@include } {@link OmitStrong}
 * {@include } {@link TargetedPick}
 * {@include } {@link TargetedOmit}
 * {@include } {@link ElementProps}
 *
 * ```md-literal
 * ## Conventions and goals
 *
 * * As much as possible, no specific DOM restrictions are imposed and, for hooks with children (lists, grids, etc.), those children can be anywhere descendent in the tree (except for `useSortableChildren`, which can be anywhere descendant but must all be in an array due to how the `key` prop works). Nesting hooks, even of the same type, is also fine.
 *     *  E.G. `useRovingTabIndexChild` can call its own `useRovingTabIndex`, which is how `useGridNavigation` works.
 * * A parent hook never needs to be directly passed child data because the children will provide it themselves.
 *     * E.G. `useListNavigation` can filter children, but it doesn't take an array of which children to filter out; each child reports its own status as filtered/unfiltered with, say, a `hidden` prop, and the parent responds to that. If a child that is focused becomes filtered, for example, the parent has enough information to be able to move focus to an adjacent child.
 *     * This means that the child data is *always* the single source of truth (even if the parent creates those children and the data they use), and maps nicely to how components are built and diffed.
 * * Re-render as few times as possible. In general this means instead of a hook returning a value to use during render, it will accept an `onChange`-ish handler that will let you explicitly do that if you want (and is no-cost otherwise).
 *     * `useElementSize`, for example, has no way of returning the size the first time its component renders. It needs to fully render *and then* run an effect that measures it. Once the element's been measured, *you* are responsible for choosing if the component is re-rendered with this new information or not.
 * * Some of these hooks, like `useGridNavigationRow`, have **extremely** complicated dependencies. To manage this, most hooks take a single parameter and return a single object with everything labelled consistently and designed to be discoverable via auto-complete. <br /><br />**Example**: E.G. If `useFoo` is one of those complex hooks, then it:
 *     * ...**will always** take a single parameter that's at least like `{ fooParameters: {...} }`.
 *         * E.G. `useRefElement({ refElementParameters: { onMount: ... } })`
 *         * `UseFooParameters` is the type of the hook's 1 argument.
 *         * `UseFooParametersSelf` is the type of the `fooParameters` member.
 *     * ...**will always** return a single object that's at least like `{ fooReturn: { ... } }`.
 *         * E.G. `const { refElementReturn: { getElement } } = useRefElement(...)`
 *         * `UseFooReturnType` is the type of the hook's return type.
 *         * `UseFooReturnTypeSelf` is the type of the `fooReturn` member.
 *     * ...*may also* return `{ props: {...} }`. These must be spread onto the element you're rendering, or the hook will not function (see `useMergedProps` if you need to use other props in addition to the returned props). It may occasionally be called something else starting with `props`, e.g. `propsStable`, `propsSource` and `propsTarget`, etc.
 *         * E.G. `const { propsStable } = useRefElement(...)`, then `<div {...propsStable} />`
 *         * `propsStable` indicates that nothing about the object ever changes including the identity of the object itself and all its fields.
 *     * ...*may also*, as the parent of child components, return `{ context: { ... } }` that those children rely on.
 *         1. E.G. Parent does `const { context, ...etc } = useFoo({...});`
 *         1. Parent renders `<MyContext.Provider value={context}>{children}</MyContext.Provider>`
 *         1. Then child calls `useFooChild({ context: useContext(MyContext), fooChildParameters: {...} })`
 *     * ...*may also*, as a child of a parent component, require or return pieces of `{ info: { ... } }` if it has something to contribute to `useManagedChild`'s special `info` parameter.
 *         * E.G. `useSingleSelectionChild` requires `info.index` to function, and returns some other pieces of the `info` object, like `info.getSelected`. Just keep swizzling back and forth to create the complete `info` object.
 *         * The `info` type can be customized with a generic type parameter generally named `M` (grid navigation has `RM` for rows' info and `CM` for cells' info).
 *             * If you have a custom hook that calls this child, you can customize the `info` it expects via that type parameter.
 *     * When hooks themselves use other hooks:
 *         * If `useFoo` calls `useBar` directly, then it will take parameters like `{ fooParameters: {...}, barParameters: {...} }` and return objects like `{ fooReturn: {...}, barReturn: {...} }`.
 *         * If `useFoo` relies on `useBar` (but doesn't call it itself, to avoid redundant calls to the same common hook, like [`useRefElement`](#userefelement)), then will do one of the following:
 *             * Take parameters like `{ fooParameters: { ... }, barReturn: { ... } }`, if it needs the return value of `useBar`.
 *             * Return values like `{ fooReturn: { ... }, barParameters: { ... } }`, if it needs `useBar` to be called with specific parameters in order to function (usually callbacks).
 *             * (Ultimately the point of this is to allow us to just call `useRefElement` once and pass the result around to whoever needs it)
 *         * If `useFoo` and `useBar` both return a top-level `props`, they will be merged into one.
 *         * If `useFoo` and `useBar` both return a top-level `context`, they will be merged into one.
 *         * If `useFoo` and `useBar` both return a top-level `info`, they will be merged into one.
 *         * Occasionally, `props` or `context` may be suffixed with the specific role they refer to:
 *             * `useRandomId` returns `propsSource` and `propsReferencer` (and no `props`).
 * ```
 *
 * @packageDocumentation
 */

import { CaptureFunctionType } from 'async-to-sync';
import { ClassAttributes } from 'preact';
import { cloneElement } from 'preact';
import { clsx } from 'clsx';
import { ComponentChildren } from 'preact';
import { ComponentType } from 'preact';
import { Context } from 'preact';
import { createContext } from 'preact';
import { createElement } from 'preact';
import { createPortal } from 'preact/compat';
import { Dispatch } from 'preact/hooks';
import { EffectCallback } from 'preact/hooks';
import { forwardRef } from 'preact/compat';
import { Fragment } from 'preact';
import { identity } from 'lodash-es';
import { Inputs } from 'preact/hooks';
import { JSX } from 'preact';
import { memo } from 'preact/compat';
import { MutableRef } from 'preact/hooks';
import { Reducer } from 'preact/hooks';
import { Ref } from 'preact';
import { RefCallback } from 'preact';
import { RefObject } from 'preact';
import { RenderableProps } from 'preact';
import { SelectedIndexChangeHandler as SelectedIndexChangeHandler_2 } from './use-single-selection.js';
import { StateUpdater as StateUpdater_2 } from 'preact/hooks';
import { useContext } from 'preact/hooks';
import { useDebugValue } from 'preact/hooks';
import { useEffect } from 'preact/hooks';
import { useId } from 'preact/hooks';
import { useImperativeHandle } from 'preact/hooks';
import { useLayoutEffect } from 'preact/hooks';
import { useMemo } from 'preact/hooks';
import { UseMultiSelectionChildDeclarativeReturnType as UseMultiSelectionChildDeclarativeReturnType_2 } from './use-multi-selection.js';
import { useReducer } from 'preact/hooks';
import { useRef } from 'preact/hooks';
import { useState as useStateBasic } from 'preact/hooks';
import { VNode as VNode_2 } from 'preact';

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

declare type AsyncFunctionType<AP extends unknown[], R> = ((...args: AP) => (R | Promise<R>));

export declare type AsyncHandler<EventType, CaptureType> = ((c: CaptureType, e: EventType) => (Promise<void> | void));

declare type AvailableStyles = (keyof CSSStyleDeclaration & keyof CSSProperties) & string;

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

export { cloneElement }

export declare type Compare<T extends unknown> = (lhs: T, rhs: T) => number;

export declare interface CompleteGridNavigationCellContext<ChildElement extends Element, CM extends UseCompleteGridNavigationCellInfo<ChildElement>> extends UseManagedChildrenContext<CM>, UseTypeaheadNavigationContext, RovingTabIndexChildContext, UseGridNavigationCellSelectionContext {
}

export declare interface CompleteGridNavigationRowContext<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends UseManagedChildrenContext<RM>, UseChildrenHaveFocusContext<RowElement>, UseTypeaheadNavigationContext, UseSelectionContext, RovingTabIndexChildContext, UseGridNavigationRowContext, UseProcessedChildrenContext {
    completeGridNavigationContext: UseCompleteGridNavigationContextSelf;
}

export declare interface CompleteListNavigationContext<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseChildrenHaveFocusContext<ChildElement>, UseTypeaheadNavigationContext, UseSelectionContext, UseManagedChildrenContext<M>, RovingTabIndexChildContext, UseProcessedChildrenContext, UseProcessedIndexManglerContext {
    listNavigationCompleteContext: UseCompleteListNavigationContextSelf;
}

export { ComponentChildren }

export { ComponentType }

export declare type CompositionEventType<E extends EventTarget> = JSX.TargetedCompositionEvent<E>;

export { Context }

declare interface ContextType {
    addCallback: (callback: RafCallbackType, tag?: any) => void;
    removeCallback: (callback: RafCallbackType) => void;
}

export { createContext }

export { createElement }

export { createPortal }

export declare type CSSProperties = JSX.CSSProperties;

export declare type DangerouslyAppendHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslyAppendHTML"];

export declare type DangerouslySetInnerHTML = UseImperativePropsReturnTypeSelf<any>["dangerouslySetInnerHTML"];

export declare function debounceRendering(f: () => void): void;

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function defaultCompare(lhs: unknown | undefined, rhs: unknown | undefined): 0 | 1 | -1;

export declare type DismissListenerTypes = "backdrop" | "lost-focus" | "escape";

/**
 * #__NO_SIDE_EFFECTS__
 */
declare function dontUseMonitoringImpl<T extends (...args: any[]) => any>(t: T): ReturnType<T>;

export declare type DragEventType<E extends EventTarget> = JSX.TargetedDragEvent<E>;

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

export { EffectCallback }

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

export declare function enhanceEvent<E extends Event | EventType<any, any> | TargetedEnhancedEvent<any, any>, Detail extends object>(e: Nullable<E>, detail: Detail): TargetedEnhancedEvent<E & Event, Detail>;

export declare const EventDetail: unique symbol;

export declare type EventDetail = typeof EventDetail;

export declare const EventMapping: {
    [K in keyof HTMLElementEventMap]: (keyof JSX.IntrinsicElements["div"] & `on${string}`);
};

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
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
declare function focus_2(e: Element | null): void;
export { focus_2 as focus }

export declare type FocusEventType<E extends EventTarget> = JSX.TargetedFocusEvent<E>;

export { forwardRef }

export { Fragment }

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

declare type Get<T, K extends keyof T> = T[K];

export declare type GetAttribute<T extends Element> = UseImperativePropsReturnTypeSelf<T>["getAttribute"];

export declare function getDocument(element?: Node | null | undefined): Document | undefined;

export declare function getEventDetail<Detail>(e: TargetedEnhancedEvent<any, Detail>): Detail;

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function getFromLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, converter?: ((input: string) => PersistentStates[Key]), storage?: Storage): PersistentStates[Key] | null;

export declare type GetHighestChildIndex = () => number;

export declare type GetIndex = (row: VNode) => (number | undefined);

export declare function getTopElement(): HTMLElement | null;

export declare type GetValid = (index: number) => boolean;

export declare function getWindow(element?: Node | null | undefined): Window | undefined;

export declare interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {
}

export declare interface GridChildRowInfo<RowElement extends Element> extends UseListNavigationChildInfo<RowElement> {
}

export declare interface GridSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> {
}

export declare interface GridSelectChildRowInfo<RowElement extends Element> extends GridChildRowInfo<RowElement>, UseSelectionChildInfo<RowElement> {
}

export declare type HasClass = UseImperativePropsReturnTypeSelf<any>["hasClass"];

export declare interface HasLastFocusReturnTypeSelf {
    /** @stable */
    getLastFocused(): boolean;
    /** @stable */
    getLastFocusedInner(): boolean;
}

/**
 * #__NO_SIDE_EFFECTS__
 */
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

declare function ImperativeElementU<T extends keyof HTMLElementTagNameMap>({ tag: Tag, handle, ...props }: RenderableProps<ImperativeElementProps<T>>, ref: Ref<HTMLElementTagNameMap[T]>): VNode_2<ClassAttributes<HTMLElementTagNameMap[T]> & ElementProps<HTMLElementTagNameMap[T]>>;

export { Inputs }

declare interface InternalChildInfo<M extends ManagedChildInfo<string | number>> {
    arr: Array<M>;
    rec: Partial<Record<M["index"], M>>;
    highestIndex: number;
    lowestIndex: number;
}

export { JSX }

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

export declare type MakeMultiSelectionChildDeclarativeParameters<P extends UseMultiSelectionChildParameters<any, any>> = OmitStrong<P, "multiSelectionChildParameters"> & UseMultiSelectionChildDeclarativeParameters<any, any> & TargetedPick<UseMultiSelectionChildParameters<any, any>, "multiSelectionChildParameters", "multiSelectionDisabled">;

export declare type MakeMultiSelectionChildDeclarativeReturnType<R extends UseMultiSelectionChildReturnType<any, any>> = OmitStrong<R, "multiSelectionChildReturn"> & TargetedOmit<UseMultiSelectionChildReturnType<any, any>, "multiSelectionChildReturn", "changeMultiSelected">;

export declare type MakeSelectionDeclarativeChildParameters<P extends UseMultiSelectionChildParameters<any, any>> = MakeMultiSelectionChildDeclarativeParameters<P>;

export declare type MakeSelectionDeclarativeChildReturnType<R extends UseMultiSelectionChildReturnType<any, any>> = MakeMultiSelectionChildDeclarativeReturnType<R>;

export declare type MakeSelectionDeclarativeParameters<P> = MakeSingleSelectionDeclarativeParameters<P>;

export declare type MakeSelectionDeclarativeReturnType<R> = MakeSingleSelectionDeclarativeReturnType<R>;

export declare type MakeSingleSelectionDeclarativeParameters<P> = Omit<P, "singleSelectionParameters"> & UseSingleSelectionDeclarativeParameters<any> & TargetedPick<UseSingleSelectionParameters<any, any, any>, "singleSelectionParameters", "singleSelectionAriaPropName" | "singleSelectionMode">;

export declare type MakeSingleSelectionDeclarativeReturnType<R> = Omit<R, "singleSelectionReturn"> & TargetedOmit<UseSingleSelectionReturnType<any>, "singleSelectionReturn", "changeSingleSelectedIndex">;

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

export { memo }

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function mergeFunctions<T extends (...args: any[]) => (void | Promise<void>), U extends (...args: any[]) => (void | Promise<void>)>(lhs: T | null | undefined, rhs: U | null | undefined): T | U | ((...args: Parameters<T>) => Promise<[void, void]> | undefined) | null | undefined;

export declare type MouseEventType<E extends EventTarget> = JSX.TargetedMouseEvent<E>;

export declare type MultiSelectChildChangeEvent<E extends Element> = TargetedEnhancedEvent<EventType<E, Event>, {
    multiSelected: boolean;
}>;

export declare type MultiSelectChildChangeHandler<E extends Element> = EnhancedEventHandler<EventType<E, Event>, {
    multiSelected: boolean;
}>;

export declare type MultiSelectionChangeEvent = TargetedEnhancedEvent<EventType<any, any>, {
    selectedPercent: number;
    selectedIndices: Set<number>;
}>;

export { MutableRef }

/** Opposite of NonNullable */
export declare type Nullable<T = null> = null | undefined | T;

/** Like Omit, but with type completion */
export declare type OmitStrong<T, K extends keyof T> = Omit<T, K>;

export declare type OnAfterChildLayoutEffect<T extends string | number> = ((causers: Iterable<T>) => void);

export declare type OnChildrenMountChange<T extends string | number> = ((mounted: Set<T>, unmounted: Set<T>) => void);

export declare const onfocusin = "onfocusin";

export declare const onfocusout = "onfocusout";

export declare type OnParamValueChanged<T> = OnPassiveStateChange<T, never>;

/** Responds to a change in a value, unlike `PassiveStateUpdater` which causes the updates */
export declare type OnPassiveStateChange<S, R> = ((value: S, prevValue: S | undefined, reason?: R | undefined) => (void | (() => void)));

export declare type OnTabbableIndexChange = (tabbableIndex: number | null) => void;

declare type P = Parameters<typeof clsx>;

/** Takes a new value or a function that updates a value, unlike `OnPassiveStateChange` which reacts to those updates */
export declare type PassiveStateUpdater<S, R> = ((value: S | ((prevState: S | undefined) => S), reason?: R | undefined) => void);

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

export declare const PersistentStates: PersistentStates;

export declare type PhysicalDirection = "ltr" | "rtl" | "ttb" | "btt";

export declare type PhysicalOrientation = "horizontal" | "vertical";

export declare type PhysicalSize = "width" | "height";

export declare type PointerEventType<E extends EventTarget> = JSX.TargetedPointerEvent<E>;

export declare type PortalChildUpdater<S> = (value: ((prevState: S) => S)) => void;

export declare type PressChangeEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E> | FocusEventType<E>;

export declare type PressEventReason<E extends EventTarget> = MouseEventType<E> | KeyboardEventType<E> | TouchEventType<E> | PointerEventType<E>;

export declare class ProcessedIndexMangler {
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
 * When a bunch of unrelated components all use `requestAnimationFrame`,
 * yes, this actually is faster. I wish it wasn't. It's lame.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function ProvideBatchedAnimationFrames({ children }: {
    children: ElementProps<EventTarget>["children"];
}): VNode_2<    {
value: ContextType | null;
children?: ComponentChildren;
}>;

export declare type PushPortalChild = UsePortalChildrenReturnType["pushChild"];

declare type RafCallbackType = (msSinceLast: number, tag?: any) => void;

declare type RCMT = 'mangled' | 'demangled';

/**
 * A parent can call this to provide useRearrangeableChildren with the `context` it expects.
 *
 * @returns
 */
declare type RearrangeableChildPositionInfo = Pick<DOMRectReadOnly, "left" | "top" | "width" | "height">;

export { Reducer }

export { Ref }

export { RefCallback }

export declare type RemovePortalChild = UsePortalChildrenReturnType["removeChild"];

export { RenderableProps }

/** Like `Required`, but also makes types `NonNullable` besides just required. */
declare type RequiredN<T> = {
    [P in keyof T]-?: NonNullable<T[P]>;
};

export declare function returnFalse(): boolean;

export declare function returnNull(): null;

export declare function returnTrue(): boolean;

export declare function returnUndefined(): undefined;

export declare function returnZero(): number;

export declare interface RovingTabIndexChildContext {
    rovingTabIndexContext: RovingTabIndexChildContextSelf;
}

export declare interface RovingTabIndexChildContextSelf {
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
    reevaluateClosestFit: (reason: EventType<any, any> | undefined) => void;
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

export declare const SearchParamStates: SearchParamStates;

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

export declare type SetTabbableIndex = (updater: Parameters<PassiveStateUpdater<number | null, EventType<any, any>>>[0], reason: EventType<any, any> | undefined, fromUserInteraction: boolean) => void;

export declare interface SingleSelectionContextSelf extends RequiredN<Pick<UseSingleSelectionParametersSelf, "singleSelectionMode" | "onSingleSelectedIndexChange">>, Pick<UseSingleSelectionParametersSelf, "singleSelectionAriaPropName"> {
    getSingleSelectedIndex(): number | null;
}

declare type Stable<T> = T;

export declare type StateUpdater<T> = Dispatch<StateUpdater_2<T>>;

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function storeToLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, value: PersistentStates[Key], converter?: ((input: PersistentStates[Key]) => string), storage?: Storage): void;

declare type SyncFunctionType<SP extends unknown[], R> = (...args: SP) => (R | undefined);

export declare interface TabbableColumnInfo {
    /** Which cell in this row is actually tabbable? */
    actual: number | null;
    /** Which column was the last column the user navigated to? */
    ideal: number | null;
}

export declare type TargetedEnhancedEvent<E extends Event | TargetedEnhancedEvent<any, any>, Detail> = E & {
    [EventDetail]: Detail & (E extends TargetedEnhancedEvent<any, infer D> ? D : {});
};

/** "**Pick**, then **omit**". Given an object, omits everything but the given props in the given sub-object, including other sub-objects. */
export declare type TargetedOmit<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: OmitStrong<T[K], L>;
};

/**
 * "**Pick**, then **pick** again". Given an object, omits everything but the given props in the given sub-object, including other sub-objects.
 *
 * @remarks This is particularly useful for the kind of off-brand parameter inheritence that things like grid navigation have going.
 */
export declare type TargetedPick<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: Pick<T[K], L>;
};

export declare type TouchEventType<E extends EventTarget> = JSX.TargetedTouchEvent<E>;

/**
 * #__NO_SIDE_EFFECTS__
 */
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
declare type TypedAddEventListener<T extends EventTarget> = T["addEventListener"];

declare type TypedEventHandlerEvent<E extends EventTarget, _T extends TypedEventListenerTypes<E>> = Event;

declare type TypedEventListenerTypes<T extends EventTarget> = (TypedAddEventListener<T> extends ((type: infer K2, ...args: any[]) => any) ? K2 : string) & string;

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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument } }: UseActiveElementParameters): UseActiveElementReturnType;

export declare interface UseActiveElementParameters {
    activeElementParameters: UseActiveElementParametersSelf;
}

export declare interface UseActiveElementParametersSelf {
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

export declare interface UseActiveElementReturnType {
    activeElementReturn: UseActiveElementReturnTypeSelf;
}

export declare interface UseActiveElementReturnTypeSelf {
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

/**
 * The callback you provide will start running every frame after the component mounts.
 *
 * @remarks Passing `null` is fine and simply stops the effect until you restart it by providing a non-null callback; it doesn't need to be stable.
 *
 * {@include } {@link UseAnimationFrameParameters}
 *
 * {@include } {@link ProvideBatchedAnimationFrames}
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useAnimationFrame({ callback }: UseAnimationFrameParameters): void;

export declare interface UseAnimationFrameParameters {
    /**
     * Callback with effectively the same rules as `requestAnimationFrame`
     *
     * Doesn't need to be stable.
     */
    callback: Nullable<((msSinceLast: number) => void)>;
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
 * #__NO_SIDE_EFFECTS__
 */
export declare function useAsync<AP extends unknown[], R, SP extends unknown[] = AP>(asyncHandler: Nullable<AsyncFunctionType<AP, R>>, options?: UseAsyncParameters<AP, SP>): UseAsyncReturnType<SP, R>;

/**
 * Combines the semantics of `useAsync` and `useEffect`.
 *
 * @remarks More specifically, if an event would run again, but the previous async event is still running,
 * then we'll wait until it finishes to run the new effect.
 * And while waiting, further new effect runs will bump old ones off,
 * only remembering the most recent request.
 *
 * @returns All values from `useAsync`, except for `syncHandler`.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useAsyncEffect<I extends Inputs>(effect: () => Promise<(void | (() => void))>, inputs?: I, options?: OmitStrong<UseAsyncParameters<[void], [void]>, "capture">): void;

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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useAsyncHandler<EventType, CaptureType>({ asyncHandler, capture: originalCapture, ...restAsyncOptions }: UseAsyncHandlerParameters<EventType, CaptureType>): UseAsyncHandlerReturnType<EventType, CaptureType>;

export declare interface UseAsyncHandlerParameters<EventType, CaptureType> extends OmitStrong<UseAsyncParameters<[CaptureType, EventType], [EventType]>, "capture"> {
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
     * @stable
     */
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useBackdropDismiss<PopupElement extends Element, B extends boolean>({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }: UseBackdropDismissParameters<PopupElement, B>): void;

export declare interface UseBackdropDismissParameters<PopupElement extends Element, B extends boolean> {
    backdropDismissParameters: UseBackdropDismissParametersSelf<B>;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

export declare interface UseBackdropDismissParametersSelf<B extends boolean> {
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    dismissBackdropActive: B | false;
    /**
     * Called when the component is dismissed by clicking outside of the element.
     *
     * @nonstable
     */
    onDismissBackdrop: Nullable<(e: MouseEventType<any>) => void>;
}

/**
 * Semi-private function to allow stable callbacks even within `useLayoutEffect` and ref assignment.
 *
 * @remarks Every render, we send the arguments to be evaluated after diffing has completed,
 * which happens before.
 *
 * @param effect
 * @param inputs
 */
export declare const useBeforeLayoutEffect: (effect: EffectCallback | null, inputs?: Inputs) => void;

/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 *
 * @remarks Automatically handles consecutive calls with a loosely applied stack operation
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 *
 * @param target
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useBlockingElement<E extends Element>({ activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }: UseBlockingElementParameters<E>): UseBlockingElementReturnType;

export declare interface UseBlockingElementParameters<E extends Element> extends UseActiveElementParameters {
    blockingElementParameters: UseBlockingElementParametersSelf<E>;
}

export declare interface UseBlockingElementParametersSelf<E extends Element> {
    enabled: boolean;
    getTarget(): (E | null);
}

export declare interface UseBlockingElementReturnType {
    getTop: () => HTMLElement | null;
    getLastActiveWhenClosed: () => HTMLElement | null;
    getLastActiveWhenOpen: () => HTMLElement | null;
}

export declare const useCallback: <T extends Function | null | undefined>(callback: NonNullable<T>, inputs: Inputs) => NonNullable<T>;

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
 * #__NO_SIDE_EFFECTS__
 */
export declare function useChildrenFlag<M extends ManagedChildInfo<number | string>, R>({ getChildren, indexDemangler, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }: UseChildrenFlagParameters<M, R>): UseChildrenFlagReturnType<M, R>;

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

export declare interface UseChildrenFlagReturnType<M extends ManagedChildInfo<any>, R> {
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
 * Allows a composite component (such as a radio group or listbox) to listen
 * for an "overall focusin/out" event; this hook lets you know when focus has
 * moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.
 *
 * @remarks I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.
 *
 * @hasChild {@link useChildrenHaveFocusChild}
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useChildrenHaveFocus<ChildElement extends Element>(args: UseChildrenHaveFocusParameters<ChildElement>): UseChildrenHaveFocusReturnType<ChildElement>;

/**
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useChildrenHaveFocusChild<E extends Element>({ context: { childrenHaveFocusChildContext: { setFocusCount } } }: UseChildrenHaveFocusChildParameters<E>): UseChildrenHaveFocusChildReturnType<E>;

export declare interface UseChildrenHaveFocusChildParameters<T extends Element> {
    context: UseChildrenHaveFocusContext<T>;
}

export declare interface UseChildrenHaveFocusChildReturnType<E extends Element> extends TargetedPick<UseHasCurrentFocusParameters<E>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
}

export declare interface UseChildrenHaveFocusContext<T extends Element> {
    childrenHaveFocusChildContext: {
        /** @stable */
        setFocusCount: PassiveStateUpdater<number, FocusEventType<T> | undefined>;
    };
}

export declare interface UseChildrenHaveFocusParameters<T extends Element> {
    childrenHaveFocusParameters: UseChildrenHaveFocusParametersSelf<T>;
}

export declare interface UseChildrenHaveFocusParametersSelf<T extends Element> {
    /**
     * Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.
     *
     * @stable
     */
    onCompositeFocusChange: null | OnPassiveStateChange<boolean, FocusEventType<T> | undefined>;
}

export declare interface UseChildrenHaveFocusReturnType<T extends Element> {
    childrenHaveFocusReturn: UseChildrenHaveFocusReturnTypeSelf;
    context: UseChildrenHaveFocusContext<T>;
}

export declare interface UseChildrenHaveFocusReturnTypeSelf {
    /** @stable */
    getAnyFocused(): boolean;
}

/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, gridNavigationCompleteParameters: { getSortColumn, getSortValueAt: gsva }, processedIndexManglerParameters: { compare, getIndex }, ...void1 }: UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>;

/**
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteGridNavigationCell<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ gridNavigationCellParameters, context, textContentParameters: { getText, onTextContentChange: otcc1, ...void4 }, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }: UseCompleteGridNavigationCellParameters<CellElement, CM>): UseCompleteGridNavigationCellReturnType<CellElement, CM>;

export declare interface UseCompleteGridNavigationCellInfo<CellElement extends Element> extends GridSelectChildCellInfo<CellElement>, ManagedChildInfo<number> {
}

export declare type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> | UseGridNavigationSelectionCellInfoKeysParameters | "focusSelf";

export declare interface UseCompleteGridNavigationCellParameters<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseGenericChildParameters<CompleteGridNavigationCellContext<CellElement, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>, Pick<UseTextContentParameters<CellElement>, "textContentParameters">, OmitStrong<UseGridNavigationSelectionCellParameters<CellElement>, "info" | "context" | "refElementReturn"> {
}

export declare interface UseCompleteGridNavigationCellReturnType<CellElement extends Element, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSelectionCellReturnType<CellElement>, "hasCurrentFocusParameters" | "info" | "textContentParameters">, OmitStrong<UseRefElementReturnType<CellElement>, "propsStable">, Pick<UseTextContentReturnType, "textContentReturn">, UseHasCurrentFocusReturnType<CellElement>, UseManagedChildReturnType<CM> {
    props: ElementProps<CellElement>;
}

export declare interface UseCompleteGridNavigationContextSelf extends UseProcessedIndexManglerParametersSelf {
    provideParentWithRefreshRows(refreshRows: () => void): void;
}

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteGridNavigationDeclarative<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>>({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement, RowElement, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement, RowElement, RM>;

export declare interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElement, RowElement, RM>>, "singleSelectionReturn"> {
}

export declare interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn", "changeSingleSelectedIndex">, TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "multiSelectionReturn", never>, OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElement, RowElement, RM>, "singleSelectionReturn" | "multiSelectionReturn"> {
}

export declare interface UseCompleteGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, M extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "processedIndexManglerReturn" | "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rovingTabIndexParameters" | "childrenHaveFocusReturn">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, M>, "rovingTabIndexParameters", "untabbableBehavior">, TargetedOmit<UseProcessedIndexManglerParameters, "processedIndexManglerParameters", "getSortValueAt">, Pick<UseRefElementParameters<ParentOrRowElement>, "refElementParameters"> {
    gridNavigationCompleteParameters: UseCompleteGridNavigationParametersSelf;
}

export declare interface UseCompleteGridNavigationParametersSelf {
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

export declare interface UseCompleteGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>> extends OmitStrong<UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>, "props" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters">, Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">, Pick<UseRefElementReturnType<ParentOrRowElement>, "refElementReturn">, TargetedOmit<UseProcessedChildrenReturnType<RowElement, any>, "rearrangeableChildrenReturn", "children">, Pick<UseChildrenHaveFocusReturnType<RowElement>, "childrenHaveFocusReturn"> {
    context: CompleteGridNavigationRowContext<RowElement, RM>;
    props: ElementProps<ParentOrRowElement>;
}

export declare interface UseCompleteGridNavigationReturnTypeSelf {
    /**
     * Call this any time the values for the sortable children change to re-sort and re-render them.
     */
    refreshRows(): void;
}

/**
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteGridNavigationRow<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters: { getText, onTextContentChange: otcc1 }, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }: UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteGridNavigationRowDeclarative<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>>({ multiSelectionChildParameters: { multiSelectionDisabled, ...multiSelectionChildParameters }, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters }, info, ...p }: UseCompleteGridNavigationRowDeclarativeParameters<RowElement, CellElement, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElement, CellElement, RM, CM>;

export declare type UseCompleteGridNavigationRowDeclarativeParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> = OmitStrong<MakeMultiSelectionChildDeclarativeParameters<UseCompleteGridNavigationRowParameters<RowElement, CellElement, RM, CM>>, "multiSelectionChildReturn">;

export declare interface UseCompleteGridNavigationRowInfo<RowElement extends Element> extends GridSelectChildRowInfo<RowElement>, ManagedChildInfo<number> {
}

export declare type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> = Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> | UseGridNavigationSelectionRowInfoKeysParameters;

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteGridNavigationRowOuter<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>>({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }: UseCompleteGridNavigationRowOuterParameters<RowElement, RsM>): UseCompleteGridNavigationRowOuterReturnType<RowElement, RsM>;

export declare interface UseCompleteGridNavigationRowOuterParameters<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends OmitStrong<UseProcessedChildParameters<RowElement, RsM>, "info">, UseRefElementParameters<RowElement> {
    info: OmitStrong<UseProcessedChildParameters<RowElement, RsM>["info"], "getElement">;
    context: UseCompleteGridNavigationRowsContext<RowElement, RsM>;
}

export declare interface UseCompleteGridNavigationRowOuterReturnType<RowElement extends Element, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends OmitStrong<UseProcessedChildReturnType<RowElement, RsM>, "refElementParameters">, OmitStrong<UseRefElementReturnType<RowElement>, "propsStable"> {
    hide: boolean;
}

export declare interface UseCompleteGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends UseGenericChildParameters<CompleteGridNavigationRowContext<RowElement, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>, OmitStrong<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "info" | "context" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">, Pick<UseTextContentParameters<RowElement>, "textContentParameters">, UseRefElementParameters<RowElement>, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseGridNavigationSelectionRowParameters<RowElement, CellElement, RM, CM>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, OmitStrong<UseHasCurrentFocusParameters<RowElement>, "refElementReturn"> {
}

export declare interface UseCompleteGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, CM extends UseCompleteGridNavigationCellInfo<CellElement>> extends OmitStrong<UseGridNavigationSelectionRowReturnType<RowElement, CellElement, RM>, "hasCurrentFocusParameters" | "managedChildrenParameters" | "info" | "textContentParameters">, Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">, Pick<UseHasCurrentFocusReturnType<RowElement>, "hasCurrentFocusReturn">, Pick<UseRefElementReturnType<RowElement>, "refElementReturn">, Pick<UseTextContentReturnType, "textContentReturn">, Pick<UseManagedChildReturnType<RM>, "managedChildReturn"> {
    context: CompleteGridNavigationCellContext<CellElement, CM>;
}

/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteGridNavigationRows<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowInfo<TabbableChildElement>, RsM extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>>({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }: UseCompleteGridNavigationRowsParameters<TabbableChildElement, M, RsM>): UseCompleteGridNavigationRowsReturnType<TabbableChildElement, RsM>;

export declare interface UseCompleteGridNavigationRowsContext<RowElement extends Element, M extends UseCompleteGridNavigationRowsInfo<RowElement>> extends UseProcessedChildContext<RowElement, M> {
}

export declare interface UseCompleteGridNavigationRowsInfo<ChildElement extends Element> extends UseProcessedChildInfo<ChildElement>, ManagedChildInfo<number> {
}

export declare interface UseCompleteGridNavigationRowsParameters<RowElement extends Element, RM extends UseCompleteGridNavigationRowInfo<RowElement>, RsM extends UseCompleteGridNavigationRowsInfo<RowElement>> extends OmitStrong<UseProcessedChildrenParameters<RowElement, RsM>, "context" | "processedIndexManglerParameters"> {
    context: CompleteGridNavigationRowContext<RowElement, RM>;
}

export declare interface UseCompleteGridNavigationRowsReturnType<TabbableChildElement extends Element, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElement>> extends OmitStrong<UseRearrangeableChildrenReturnType, never>, OmitStrong<UsePaginatedChildrenReturnType, "context">, OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseCompleteGridNavigationRowsContext<TabbableChildElement, M>;
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, processedIndexManglerParameters, ...void1 }: UseCompleteListNavigationParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>;

/**
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ info: { index, focusSelf, untabbable, ...customUserInfo }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters: { getText, onTextContentChange: otcc1, ...void10 }, refElementParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 }, singleSelectionChildParameters, multiSelectionChildParameters, context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, processedChildrenContext, processedIndexManglerContext, listNavigationCompleteContext, ...void5 }, ...void1 }: UseCompleteListNavigationChildParameters<ChildElement, M>): UseCompleteListNavigationChildReturnType<ChildElement, M>;

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteListNavigationChildDeclarative<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, info: i1, ...rest }: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M>;

export declare interface UseCompleteListNavigationChildDeclarativeParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeChildParameters<UseCompleteListNavigationChildParameters<ChildElement, M>>, "multiSelectionChildParameters" | "multiSelectionChildReturn">, TargetedOmit<UseSelectionChildParameters<ChildElement, M>, "multiSelectionChildParameters", "initiallyMultiSelected" | "onMultiSelectChange"> {
}

export declare interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, "singleSelectionChildReturn", never>, TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElement, M>, "multiSelectionChildReturn", "changeMultiSelected">, OmitStrong<UseCompleteListNavigationChildReturnType<ChildElement, M>, "singleSelectionChildReturn" | "multiSelectionChildReturn"> {
}

export declare interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends UseListNavigationSelectionChildInfo<ChildElement>, ManagedChildInfo<number> {
}

export declare type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> = Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> | UseListNavigationSelectionChildInfoKeysParameters | "focusSelf";

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteListNavigationChildOuter<RowElement extends Element, RsM extends UseCompleteListNavigationChildrenInfo<RowElement>>({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }: UseCompleteListNavigationChildOuterParameters<RowElement, RsM>): UseCompleteListNavigationChildOuterReturnType<RowElement, RsM>;

export declare interface UseCompleteListNavigationChildOuterParameters<RowElement extends Element, RsM extends UseCompleteListNavigationChildrenInfo<RowElement>> extends OmitStrong<UseProcessedChildParameters<RowElement, RsM>, "info">, UseRefElementParameters<RowElement> {
    info: OmitStrong<UseProcessedChildParameters<RowElement, RsM>["info"], "getElement">;
    context: UseCompleteListNavigationChildrenContext<RowElement, RsM>;
}

export declare interface UseCompleteListNavigationChildOuterReturnType<RowElement extends Element, RsM extends UseCompleteListNavigationChildrenInfo<RowElement>> extends OmitStrong<UseProcessedChildReturnType<RowElement, RsM>, "refElementParameters">, OmitStrong<UseRefElementReturnType<RowElement>, "propsStable"> {
    hide: boolean;
}

export declare interface UseCompleteListNavigationChildParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseGenericChildParameters<CompleteListNavigationContext<ChildElement, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>, OmitStrong<UseListNavigationSelectionChildParameters<ChildElement, M>, "context" | "info" | "refElementReturn">, Pick<UseRefElementParameters<ChildElement>, "refElementParameters">, Pick<UseTextContentParameters<ChildElement>, "textContentParameters">, Pick<UseHasCurrentFocusParameters<ChildElement>, "hasCurrentFocusParameters"> {
}

/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteListNavigationChildren<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildInfo<TabbableChildElement>, RM extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>>({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }: UseCompleteListNavigationChildrenParameters<TabbableChildElement, M, RM>): UseCompleteListNavigationChildrenReturnType<TabbableChildElement, RM>;

export declare interface UseCompleteListNavigationChildrenContext<RowElement extends Element, M extends UseCompleteListNavigationChildrenInfo<RowElement>> extends UseProcessedChildContext<RowElement, M> {
}

export declare interface UseCompleteListNavigationChildrenInfo<ChildElement extends Element> extends UseProcessedChildInfo<ChildElement>, ManagedChildInfo<number> {
}

export declare interface UseCompleteListNavigationChildrenParameters<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildInfo<TabbableChildElement>, SM extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends OmitStrong<UseProcessedChildrenParameters<TabbableChildElement, SM>, "processedIndexManglerParameters"> {
    context: CompleteListNavigationContext<TabbableChildElement, M>;
}

export declare interface UseCompleteListNavigationChildrenReturnType<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>> extends OmitStrong<UseRearrangeableChildrenReturnType, never>, OmitStrong<UsePaginatedChildrenReturnType, "context">, OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseCompleteListNavigationChildrenContext<TabbableChildElement, M>;
}

export declare interface UseCompleteListNavigationChildReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseListNavigationSelectionChildReturnType<ChildElement, M>, "info" | "propsChild" | "propsTabbable" | "hasCurrentFocusParameters" | "pressParameters" | "textContentParameters">, OmitStrong<UseRefElementReturnType<ChildElement>, "propsStable">, Pick<UseTextContentReturnType, "textContentReturn">, UseHasCurrentFocusReturnType<ChildElement>, UseManagedChildReturnType<M>, TargetedPick<UsePressParameters<any>, "pressParameters", "onPressSync" | "excludeSpace"> {
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

export declare interface UseCompleteListNavigationContextSelf extends UseCompleteListNavigationParametersSelf {
    provideParentWithRefreshRows(refreshRows: () => void): void;
}

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M>;

export declare interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElement, ChildElement, M>>, "singleSelectionParameters" | "singleSelectionReturn">, TargetedOmit<UseSelectionParameters<ParentElement, ChildElement, M>, "singleSelectionParameters", "initiallySingleSelectedIndex" | "onSingleSelectedIndexChange"> {
}

export declare interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn", "changeSingleSelectedIndex">, TargetedOmit<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "multiSelectionReturn", never>, OmitStrong<UseCompleteListNavigationReturnType<ParentElement, ChildElement, M>, "singleSelectionReturn" | "multiSelectionReturn"> {
}

export declare interface UseCompleteListNavigationParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends Pick<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "singleSelectionParameters" | "multiSelectionParameters">, TargetedOmit<Pick<UsePaginatedChildrenParameters<ChildElement>, "paginatedChildrenParameters">, "paginatedChildrenParameters", "childCount">, Pick<UseRefElementParameters<ParentElement>, "refElementParameters">, TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">, TargetedOmit<UseListNavigationSelectionParameters<ParentElement, ChildElement, M>, "rovingTabIndexParameters", "untabbableBehavior">, TargetedOmit<UseProcessedIndexManglerParameters, "processedIndexManglerParameters", never> {
}

export declare interface UseCompleteListNavigationParametersSelf extends Get<UseProcessedIndexManglerParameters, "processedIndexManglerParameters"> {
}

export declare interface UseCompleteListNavigationReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<UseRefElementReturnType<ParentElement>, "propsStable">, Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">, Pick<UseChildrenHaveFocusReturnType<ChildElement>, "childrenHaveFocusReturn">, TargetedOmit<UseProcessedChildrenReturnType<ChildElement, any>, "rearrangeableChildrenReturn", "children">, OmitStrong<UseListNavigationSelectionReturnType<ParentElement, ChildElement>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElement>;
    context: CompleteListNavigationContext<ChildElement, M>;
}

export declare interface UseCompleteListNavigationReturnTypeSelf {
    /**
     * Call this any time the values for the sortable children change to re-sort and re-render them.
     */
    refreshRows(): void;
}

export { useContext }

export { useDebugValue }

/**
 * Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useDismiss<Listeners extends DismissListenerTypes, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }: UseDismissParameters<Listeners>): UseDismissReturnType<SourceElement, PopupElement>;

export declare interface UseDismissParameters<Listeners extends DismissListenerTypes> extends TargetedOmit<UseEscapeDismissParameters<any, Listeners extends "escape" ? true : false>, "escapeDismissParameters", "getDocument">, TargetedOmit<UseBackdropDismissParameters<any, Listeners extends "backdrop" ? true : false>, "backdropDismissParameters", never>, TargetedOmit<UseLostFocusDismissParameters<any, any, Listeners extends "lost-focus" ? true : false>, "lostFocusDismissParameters", never>, UseActiveElementParameters {
    dismissParameters: UseDismissParametersSelf<Listeners>;
}

export declare interface UseDismissParametersSelf<Listeners extends DismissListenerTypes> {
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
    onDismiss: (e: EventType<any, any>, reason: Listeners) => void;
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
 * Allows adding/removing a CSS class to the `window`, `document`, or other global `HTMLElement`.
 *
 * @param className - The class (as a string) to be adding/removing
 * @param active - If `true`, the default, then the class is added to the element. If `false`, it's removed.
 * @param element - The element to affect. By default, it's the root `<html>` element
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useDocumentClass(className: P[0], active?: boolean, element?: HTMLElement): void;

/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDraggableParameters}
 * {@include } {@link UseDraggableReturnType}
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useDraggable<E extends Element>({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }: UseDraggableParameters): UseDraggableReturnType<E>;

export declare interface UseDraggableParameters {
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

export declare interface UseDraggableReturnType<E extends EventTarget> {
    /** *Unstable* */
    propsUnstable: ElementProps<E>;
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

/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDroppableParameters}
 * {@include } {@link UseDroppableReturnType}
 *
 * #__NO_SIDE_EFFECTS__
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

export { useEffect }

/**
 * Wrap the native `useEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect - Same as the default
 * @param inputs - Same as the default
 * @param impl - You can choose whether to use `useEffect` or `useLayoutEffect` by
 * passing one of them as this argument. By default, it's `useEffect`.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useEffectDebug<I extends Inputs>(effect: (prev: I | undefined, changes: EffectChange<I, number>[]) => (void | (() => void)), inputs?: I, impl?: typeof useEffect): void;

/**
 * Measures an element, allowing you to react to its changes in size.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useElementSize<E extends Element>({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }: UseElementSizeParameters<E>): UseElementSizeReturnType<E>;

export declare interface UseElementSizeParameters<T extends Element> extends UseRefElementParameters<T> {
    elementSizeParameters: UseElementSizeParametersSelf;
}

export declare interface UseElementSizeParametersSelf {
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

export declare interface UseElementSizeReturnType<E extends Element> extends UseRefElementReturnType<E> {
    elementSizeReturn: UseElementSizeReturnTypeSelf;
}

export declare interface UseElementSizeReturnTypeSelf {
    /** @stable */
    getSize(): ElementSize | null;
}

/**
 * Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
 *
 * @remarks Eventually, when useEvent lands, we hopefully won't need this.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useEnsureStability<T extends any[]>(parentHookName: string, ...values: T): void;

/**
 * Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)
 *
 * @remarks One press of the `Escape` key is guaranteed to only call `onDismiss` for *only one* component, and it is called on the component deepest in the DOM tree.
 *
 * TODO: Instead of being deepest in the DOM tree (which is usually fine), it should probably be related to what order something was made `active`.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useEscapeDismiss<PopupElement extends Element, B extends boolean>({ escapeDismissParameters: { onDismissEscape: onClose, dismissEscapeActive: open, getDocument: unstableGetDocument, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }: UseEscapeDismissParameters<PopupElement, B>): void;

export declare interface UseEscapeDismissParameters<PopupElement extends Element, B extends boolean> {
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
    escapeDismissParameters: UseEscapeDismissParametersSelf<B>;
}

export declare interface UseEscapeDismissParametersSelf<B extends boolean> {
    /**
     * Called when the component is dismissed by pressing the `Escape` key.
     *
     * @nonstable
     */
    onDismissEscape: Nullable<(e: KeyboardEventType<any>) => void>;
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

/**
 * Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
 *
 * @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)?
 * Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useFocusTrap<SourceElement extends Element | null, PopupElement extends Element>({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, activeElementParameters, refElementReturn }: UseFocusTrapParameters<SourceElement, PopupElement>): UseFocusTrapReturnType<PopupElement>;

export declare interface UseFocusTrapParameters<SourceElement extends Element | null, PopupElement extends Element> extends TargetedPick<UseRefElementReturnType<NonNullable<PopupElement>>, "refElementReturn", "getElement">, OmitStrong<UseBlockingElementParameters<NonNullable<SourceElement>>, "blockingElementParameters"> {
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
    focusPopup(e: PopupElement, findFirstFocusable: () => HTMLOrSVGElement | null): void;
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useForceUpdate(): () => void;

/**
 * Basically all `use*Child` functions contain the same two parameters, plus the extras:
 *
 * `context` and `info`
 *
 * This provides them both, then you provide all the other `use*Parameters` members.
 */
export declare interface UseGenericChildParameters<C extends {} | null, M extends {}> {
    context: C;
    info: M;
}

/**
 * Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
 *
 * @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).
 *
 * The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
 *
 * @param target - A *non-Preact* node to attach the event to.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useGlobalHandler<T extends EventTarget, EventType extends TypedEventListenerTypes<T>, H extends TypedEventHandlerEvent<T, EventType>>(target: T | null | undefined, type: EventType, handler: null | ((e: H) => void), options?: Parameters<TypedAddEventListener<T>>[2], mode?: "grouped" | "single"): void;

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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element>({ gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 }, linearNavigationParameters, ...listNavigationParameters }: UseGridNavigationParameters<ParentOrRowElement, RowElement, GridChildRowInfo<RowElement>>): UseGridNavigationReturnType<ParentOrRowElement, RowElement>;

/**
 * Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useGridNavigationCell<CellElement extends Element>({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }: UseGridNavigationCellParameters<CellElement>): UseGridNavigationCellReturnType<CellElement>;

export declare interface UseGridNavigationCellContext extends UseListNavigationContext {
    gridNavigationCellContext: UseGridNavigationCellContextSelf;
}

export declare interface UseGridNavigationCellContextSelf {
    getRowIndex: () => number;
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
    setTabbableCell: SetTabbableIndex;
}

export declare type UseGridNavigationCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;

export declare type UseGridNavigationCellInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType;

export declare interface UseGridNavigationCellParameters<CellElement extends Element> extends UseGenericChildParameters<UseGridNavigationCellContext, Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<CellElement>, "context" | "info"> {
    gridNavigationCellParameters: UseGridNavigationCellParametersSelf;
}

export declare interface UseGridNavigationCellParametersSelf {
    /**
     * How many columns this cell spans (all cells default to 1).
     *
     * Any following cells should skip over the `index`es this one covered with its `colSpan`. E.G. if this cell is `index=5` and `colSpan=3`, the next cell would be `index=8`, **not** `index=6`
     */
    colSpan: Nullable<number>;
}

export declare interface UseGridNavigationCellReturnType<CellElement extends Element> extends UseListNavigationChildReturnType<CellElement> {
    info: Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysReturnType>;
}

export declare interface UseGridNavigationCellSelectionContext extends UseGridNavigationCellContext {
}

export declare interface UseGridNavigationParameters<ParentOrChildElement extends Element, RowElement extends Element, RM extends GridChildRowInfo<RowElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, RowElement, RM>, "linearNavigationParameters">, TargetedOmit<UseListNavigationParameters<ParentOrChildElement, RowElement, RM>, "linearNavigationParameters", "arrowKeyDirection"> {
    gridNavigationParameters: UseGridNavigationParametersSelf;
}

export declare interface UseGridNavigationParametersSelf {
    /**
     * TODO: This may be called even when there is no actual change in the numeric values
     *
     * @stable
     */
    onTabbableColumnChange: Nullable<OnPassiveStateChange<TabbableColumnInfo, EventType<any, any> | undefined>>;
    /**
     * Which column of cells is initially tabbable the first time the user interacts with the control.
     */
    initiallyTabbableColumn: number;
}

export declare interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends OmitStrong<UseListNavigationReturnType<ParentOrRowElement, RowElement>, "context"> {
    context: UseGridNavigationRowContext;
}

/**
 * Child hook for {@link useGridNavigation}
 *
 * As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
 * As such, this is one of the most complicated hooks here in terms of dependencies.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useGridNavigationRow<RowElement extends Element, CellElement extends Element>({ info: { index, untabbable, ...void3 }, context: contextFromParent, linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, refElementReturn, ...void1 }: UseGridNavigationRowParameters<RowElement, CellElement, GridChildCellInfo<CellElement>>): UseGridNavigationRowReturnType<RowElement, CellElement>;

export declare interface UseGridNavigationRowContext extends UseListNavigationContext {
    gridNavigationRowContext: UseGridNavigationRowContextSelf;
}

export declare interface UseGridNavigationRowContextSelf {
    setTabbableRow: SetTabbableIndex;
    getTabbableColumn: () => TabbableColumnInfo;
    setTabbableColumn: PassiveStateUpdater<TabbableColumnInfo, EventType<any, any> | undefined>;
}

export declare type UseGridNavigationRowInfoKeysParameters = UseListNavigationChildInfoKeysParameters;

export declare type UseGridNavigationRowInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | "focusSelf";

export declare interface UseGridNavigationRowParameters<RowElement extends Element, CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowContext, Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<RowElement>, "info" | "context">, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "linearNavigationParameters", "disableHomeEndKeys" | "onNavigateLinear" | "arrowKeyDirection" | "pageNavigationSize">, TargetedOmit<UseListNavigationParameters<RowElement, CellElement, CM>, "rovingTabIndexParameters", "focusSelfParent" | "untabbableBehavior">, OmitStrong<UseListNavigationParameters<RowElement, CellElement, CM>, "processedIndexManglerReturn" | "paginatedChildrenParameters" | "refElementReturn" | "rovingTabIndexParameters" | "linearNavigationParameters">, TargetedPick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn", "getChildren"> {
}

export declare interface UseGridNavigationRowReturnType<RowElement extends Element, CellElement extends Element> extends UseListNavigationChildReturnType<RowElement>, OmitStrong<UseListNavigationReturnType<RowElement, CellElement>, "rovingTabIndexReturn" | "context">, TargetedOmit<UseListNavigationReturnType<RowElement, CellElement>, "rovingTabIndexReturn", "focusSelf"> {
    context: UseGridNavigationCellContext;
    info: Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysReturnType>;
}

export declare interface UseGridNavigationRowSelectionContext extends UseGridNavigationRowContext, UseSelectionContext {
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useGridNavigationSelection<ParentOrRowElement extends Element, RowElement extends Element>({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void2 }: UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, GridSelectChildRowInfo<RowElement>>): UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement>;

/**
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useGridNavigationSelectionCell<CellElement extends Element>(p: UseGridNavigationSelectionCellParameters<CellElement>): UseGridNavigationSelectionCellReturnType<CellElement>;

export declare type UseGridNavigationSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;

export declare type UseGridNavigationSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;

export declare interface UseGridNavigationSelectionCellParameters<CellElement extends Element> extends UseGenericChildParameters<UseGridNavigationCellSelectionContext, Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysParameters>>, OmitStrong<UseGridNavigationCellParameters<CellElement>, "context" | "info"> {
    info: Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysParameters>;
}

export declare interface UseGridNavigationSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
    info: Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysReturnType>;
}

export declare interface UseGridNavigationSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends OmitStrong<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexParameters">, TargetedOmit<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexParameters", "initiallyTabbedIndex">, OmitStrong<UseSelectionParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexReturn"> {
}

export declare interface UseGridNavigationSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends UseGridNavigationReturnType<ParentOrRowElement, RowElement>, OmitStrong<UseSelectionReturnType<ParentOrRowElement, RowElement>, "propsStable"> {
    context: UseGridNavigationRowSelectionContext;
}

/**
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useGridNavigationSelectionRow<RowElement extends Element, CellElement extends Element>({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseGridNavigationSelectionRowParameters<RowElement, CellElement, GridSelectChildRowInfo<RowElement>, GridSelectChildCellInfo<CellElement>>): UseGridNavigationSelectionRowReturnType<RowElement, CellElement, GridSelectChildRowInfo<RowElement>>;

export declare type UseGridNavigationSelectionRowInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;

export declare type UseGridNavigationSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;

export declare interface UseGridNavigationSelectionRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSelectChildRowInfo<RowElement>, CM extends GridSelectChildCellInfo<CellElement>> extends UseGenericChildParameters<UseGridNavigationRowSelectionContext, Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>>, OmitStrong<UseGridNavigationRowParameters<RowElement, CellElement, CM>, "info" | "context">, OmitStrong<UseSelectionChildParameters<RowElement, RM>, "info" | "context"> {
    info: Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>;
}

export declare interface UseGridNavigationSelectionRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends ExtendMerge<OmitStrong<UseGridNavigationRowReturnType<RowElement, CellElement>, "context" | "info">, OmitStrong<UseSelectionChildReturnType<RowElement, RM>, "info">> {
    context: UseGridNavigationCellSelectionContext;
    info: Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysReturnType>;
}

/**
 * Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
 *
 * @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
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
     *
     * @stable
     */
    onCurrentFocusedChanged: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
    /**
     * Like `onFocusedChanged`, but also *additionally* if any child elements are focused.
     *
     * @see this.onFocusedChanged
     *
     * @stable
     */
    onCurrentFocusedInnerChanged: Nullable<OnPassiveStateChange<boolean, FocusEventType<T> | undefined>>;
}

export declare interface UseHasCurrentFocusReturnType<E extends Element> {
    hasCurrentFocusReturn: UseHasCurrentFocusReturnTypeSelf<E>;
}

export declare interface UseHasCurrentFocusReturnTypeSelf<E extends Element> {
    propsStable: ElementProps<E>;
    /**
     * Modifies the element to be able to track its own focus state
     */
    /** @stable */
    getCurrentFocused(): boolean;
    /** @stable */
    getCurrentFocusedInner(): boolean;
}

/**
 * Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
 *
 * @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useHasLastFocus<T extends Node>(args: UseHasLastFocusParameters<T>): UseHasLastFocusReturnType;

export declare interface UseHasLastFocusParameters<T extends Node> extends UseActiveElementParameters, TargetedPick<UseRefElementReturnType<T>, "refElementReturn", "getElement"> {
    hasLastFocusParameters: UseHasLastFocusParametersSelf;
}

export declare interface UseHasLastFocusParametersSelf {
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

export declare interface UseHasLastFocusReturnType extends UseActiveElementReturnType {
    hasLastFocusReturn: HasLastFocusReturnTypeSelf;
}

/**
 * Allows for hiding the scroll bar of the root HTML element
 * without shifting the layout of the page by adding a few pixels
 * of padding to the root element if necessary.
 *
 * @param hideScroll - Whether the scroll bar is hidden or not (i.e. `true` to hide the scroll bar, `false` to allow it to be visible)
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useHideScroll(hideScroll: boolean): UseHideScrollReturnType;

export declare interface UseHideScrollReturnType {
    getScrollbarWidth: () => number | null;
    getScrollbarHeight: () => number | null;
}

export { useId }

export { useImperativeHandle }

/**
 * Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
 *
 * @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.
 *
 * This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useImperativeProps<E extends Element>({ refElementReturn: { getElement } }: UseImperativePropsParameters<E>): UseImperativePropsReturnType<E>;

export declare interface UseImperativePropsParameters<E extends Element> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
}

export declare interface UseImperativePropsReturnType<T extends Element> {
    /**
     * @stable
     *
     *  (The object itself and everything within it are all stable and can be passed around freely)
     */
    imperativePropsReturn: UseImperativePropsReturnTypeSelf<T>;
    props: ElementProps<T>;
}

export declare interface UseImperativePropsReturnTypeSelf<T extends Element> {
    /** @stable Returns whether the element currently has the current CSS class */
    hasClass(cls: string): boolean;
    /** @stable Applies or removes the given CSS class to the element and its props */
    setClass(cls: string, enabled: boolean): void;
    /** @stable Applies the given CSS style to the element and its props */
    setStyle<K extends AvailableStyles>(prop: K, value: CSSProperties[K] | null): void;
    /** @stable Returns the current value of the attribute on the element */
    getAttribute<K extends keyof ElementProps<T>>(prop: K): ElementProps<T>[K];
    /** @stable Applies the given attribute to the element and its props */
    setAttribute<K extends keyof ElementProps<T>>(prop: K, value: ElementProps<T>[K] | null): void;
    /** @stable Sets the element's `textContent` and `props.children` */
    setChildren(children: string | null): void;
    /** @stable Sets the element's `innerHTML` and `props.dangerouslySetInnerHTML.__html` */
    dangerouslySetInnerHTML(html: string): void;
    /** @stable Evaluates the given HTML and appends it to the current children and the current props. */
    dangerouslyAppendHTML(html: string): Element;
    /** @stable Applies the given event handler to the element and its props */
    setEventHandler<K extends keyof HTMLElementEventMap>(type: K, listener: null | ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options: AddEventListenerOptions): void;
}

/**
 * Runs a function every time the specified number of milliseconds elapses while the component is mounted.
 *
 * @remarks
 * {@include } {@link UseIntervalParameters}
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useInterval({ interval, callback, noRisingEdge }: UseIntervalParameters): void;

export declare interface UseIntervalParameters {
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

export { useLayoutEffect }

/**
 * Wrap the native `useLayoutEffect` to add arguments
 * that allow accessing the previous value as the first argument,
 * as well as the changes that caused the hook to be called as the second argument.
 *
 * @param effect - Same as the built-in's
 * @param inputs - Same as the built-in's
 *
 * #__NO_SIDE_EFFECTS__
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useLinearNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({ linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, processedIndexManglerReturn: { indexDemangler, indexMangler, ...void3 }, ...void1 }: UseLinearNavigationParameters<ParentOrChildElement, ChildElement>): UseLinearNavigationReturnType<ParentOrChildElement>;

/** Arguments passed to the parent `useLinearNavigation` */
export declare interface UseLinearNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element> extends TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexMangler" | "indexDemangler">, TargetedPick<UsePaginatedChildrenParameters<ChildElement>, "paginatedChildrenParameters", "paginationMin" | "paginationMax"> {
    linearNavigationParameters: UseLinearNavigationParametersSelf<ChildElement>;
}

export declare interface UseLinearNavigationParametersSelf<ChildElement extends Element> {
    /**
     * Called when a navigation change as a result of an arrow/home/end/page up/page down key being pressed.
     *
     * @stable
     */
    onNavigateLinear: Nullable<(newIndex: number, event: KeyboardEventType<ChildElement>) => void>;
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
 * @hasChild {@link useListNavigationChild}
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useListNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, ...void1 }: UseListNavigationParameters<ParentOrChildElement, ChildElement, UseListNavigationChildInfo<ChildElement>>): UseListNavigationReturnType<ParentOrChildElement, ChildElement>;

/**
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useListNavigationChild<ChildElement extends Element>({ info: { index, untabbable, ...void1 }, context, refElementReturn, ...void2 }: UseListNavigationChildParameters<ChildElement>): UseListNavigationChildReturnType<ChildElement>;

export declare interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement>, UseTypeaheadNavigationChildInfo<TabbableChildElement> {
}

/** {@link useListNavigationChild} requires the same `info` that {@link useRovingTabIndexChild} and {@link useTypeaheadNavigationChild} do (there is no `useLinearNavigationChild`) */
export declare type UseListNavigationChildInfoKeysParameters = UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters;

export declare type UseListNavigationChildInfoKeysReturnType = UseRovingTabIndexChildInfoKeysReturnType | UseTypeaheadNavigationChildInfoKeysReturnType;

export declare interface UseListNavigationChildParameters<ChildElement extends Element> extends UseGenericChildParameters<UseListNavigationContext, Pick<UseListNavigationChildInfo<ChildElement>, UseRovingTabIndexChildInfoKeysParameters | UseTypeaheadNavigationChildInfoKeysParameters>>, OmitStrong<UseRovingTabIndexChildParameters<ChildElement>, "info" | "context">, OmitStrong<UseTypeaheadNavigationChildParameters<ChildElement>, "info" | "context"> {
}

export declare interface UseListNavigationChildReturnType<ChildElement extends Element> extends UseRovingTabIndexChildReturnType<ChildElement>, UseTypeaheadNavigationChildReturnType {
    info: Pick<UseListNavigationChildInfo<ChildElement>, UseListNavigationChildInfoKeysReturnType>;
}

export declare interface UseListNavigationContext extends RovingTabIndexChildContext, UseTypeaheadNavigationContext {
}

export declare interface UseListNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends OmitStrong<UseRovingTabIndexParameters<ParentOrChildElement, ChildElement, M>, "processedIndexManglerReturn">, OmitStrong<UseTypeaheadNavigationParameters<ChildElement>, "rovingTabIndexReturn">, OmitStrong<UseLinearNavigationParameters<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexDemangler" | "indexMangler"> {
}

export declare interface UseListNavigationReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends OmitStrong<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "props">, OmitStrong<UseTypeaheadNavigationReturnType<ParentOrChildElement>, "propsStable">, OmitStrong<UseLinearNavigationReturnType<ParentOrChildElement>, "propsStable"> {
    props: ElementProps<ParentOrChildElement>;
    context: UseListNavigationContext;
}

/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useListNavigationSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void3 }: UseListNavigationSelectionParameters<ParentOrChildElement, ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>): UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement>;

/**
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useListNavigationSelectionChild<ChildElement extends Element>({ info: { index, untabbable, ...void2 }, context, refElementReturn, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }: UseListNavigationSelectionChildParameters<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>): UseListNavigationSelectionChildReturnType<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>;

export declare interface UseListNavigationSelectionChildContext extends UseListNavigationContext, UseSelectionContext {
}

export declare interface UseListNavigationSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSelectionChildInfo<TabbableChildElement> {
}

export declare type UseListNavigationSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSelectionChildInfoKeysParameters;

export declare type UseListNavigationSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;

export declare interface UseListNavigationSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends UseGenericChildParameters<UseListNavigationSelectionChildContext, Pick<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysParameters>>, OmitStrong<UseListNavigationChildParameters<ChildElement>, "context" | "info">, OmitStrong<UseSelectionChildParameters<ChildElement, M>, "context" | "info"> {
}

export declare interface UseListNavigationSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement>, UseSelectionChildReturnType<ChildElement, M>>, "props"> {
    propsTabbable: ElementProps<any>;
    propsChild: ElementProps<any>;
}

export declare interface UseListNavigationSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends OmitStrong<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexParameters">, TargetedOmit<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex">, OmitStrong<UseSelectionParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn"> {
}

export declare interface UseListNavigationSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends OmitStrong<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, "props">, OmitStrong<UseSelectionReturnType<ParentOrChildElement, ChildElement>, "propsStable"> {
    context: UseListNavigationSelectionChildContext;
    props: ElementProps<ParentOrChildElement>;
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useLogicalDirection({ ...void1 }: UseLogicalDirectionParameters): UseLogicalDirectionReturnType;

export declare interface UseLogicalDirectionParameters {
}

export declare interface UseLogicalDirectionReturnType {
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

/**
 * Invokes a callback when focus travels outside of the component's element.
 *
 * @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useLostFocusDismiss<SourceElement extends Element | null, PopupElement extends Element, B extends boolean>({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }: UseLostFocusDismissParameters<SourceElement, PopupElement, B>): UseLostFocusDismissReturnType<SourceElement, PopupElement>;

export declare interface UseLostFocusDismissParameters<SourceElement extends Element | null, PopupElement extends Element, B extends boolean> {
    lostFocusDismissParameters: UseLostFocusDismissParametersSelf<B>;
    refElementSourceReturn: Nullable<Pick<UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"], "getElement">>;
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
}

export declare interface UseLostFocusDismissParametersSelf<B extends boolean> {
    /**
     * Called when the component is dismissed by losing focus
     *
     * @nonstable
     */
    onDismissLostFocus: Nullable<(e: FocusEventType<any>) => void>;
    /**
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    dismissLostFocusActive: B | false;
}

export declare interface UseLostFocusDismissReturnType<_SourceElement extends Element | null, _PopupElement extends Element> extends TargetedPick<UseActiveElementParameters, "activeElementParameters", "onLastActiveElementChange"> {
}

/**
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useManagedChild<M extends ManagedChildInfo<number | string>>({ context, info }: UseManagedChildParameters<M>): UseManagedChildReturnType<M>;

/**
 * Note: Child parameter types should not inherit from this unless they actually call `useManagedChild`.
 *
 * E.G. `UseRovingTabIndexChildParameters` won't extend this, even though it has `info` and `context` parameters.
 * They look similar, should there be a GenericChildParameters type that provides those?
 */
export declare interface UseManagedChildParameters<M extends ManagedChildInfo<any>> extends UseGenericChildParameters<UseManagedChildrenContext<M> | null, M> {
    /**
     * In general, this shouldn't be null, but for convenience's sake you are allowed to, which disables all behavior, and also means `getChildren` will be `undefined`!
     */
    context: UseManagedChildrenContext<M> | null;
    /**
     * The exact data that's available from the parent/each sibling element via `getAt` or the other methods on `ManagedChildren`.
     */
    info: M;
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useManagedChildren<M extends ManagedChildInfo<string | number>>(parentParameters: UseManagedChildrenParameters<M>): UseManagedChildrenReturnType<M>;

export declare interface UseManagedChildrenContext<M extends ManagedChildInfo<any>> {
    managedChildContext: UseManagedChildrenContextSelf<M>;
}

export declare interface UseManagedChildrenContextSelf<M extends ManagedChildInfo<any>> {
    getChildren(): ManagedChildren<M>;
    managedChildrenArray: InternalChildInfo<M>;
    remoteULEChildMounted: (index: M["index"], mounted: boolean) => void;
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

export declare interface UseManagedChildrenReturnType<M extends ManagedChildInfo<any>> {
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

export declare interface UseManagedChildrenReturnTypeSelf<M extends ManagedChildInfo<any>> {
    /**
     * @stable
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
    /**
     * Returns a proxy to all the information each child rendered with. The function, returned object, and every function within it are all stable.
     *
     * @stable
     */
    getChildren(): ManagedChildren<M>;
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMediaQuery(query: string | null | undefined, defaultGuess?: boolean): UseMediaQueryReturnType;

export declare interface UseMediaQueryReturnType {
    matches: boolean | null;
    getMatches(): boolean | null;
}

export { useMemo }

/**
 * Like useMemo, but checks objects (shallowly)
 *
 * @param t
 * @returns
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMemoObject<T extends {}>(t: T): T;

/**
 * Combines two `children`.
 *
 * @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
 *
 * TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMergedChildren(lhs: ElementProps<EventTarget>["children"], rhs: ElementProps<EventTarget>["children"]): ElementProps<EventTarget>["children"];

/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 *
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 *
 * #__NO_SIDE_EFFECTS__
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMergedProps<E extends EventTarget>(...allProps: ElementProps<E>[]): ElementProps<E>;

/**
 * Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
 *
 * @remarks Or just use {@link useMergedProps}
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMergedRefs<E extends EventTarget>(rhs: ElementProps<E>["ref"], lhs: ElementProps<E>["ref"]): RefObject<E> | RefCallback<E>;

/**
 * Merges two style objects, returning the result.
 *
 * @param style - The user-given style prop for this component
 * @param obj - The CSS properties you want added to the user-given style
 * @returns A CSS object containing the properties of both objects.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMergedStyles(lhs: ElementProps<EventTarget>["style"], rhs: ElementProps<EventTarget>["style"]): ElementProps<EventTarget>["style"];

/**
 * Combines dismissal hooks and focus trap hooks into one.
 * Use for dialogs, menus, etc.  Anything that can be dismissed and might trap focus, basically.
 *
 * @remarks Another in the "complete" series, alongside list/grid navigation and dismissal itself.
 *
 * TODO: The HTML &lt;dialog&gt; element is a thing now, and it can be modal or nonmodal, just like this hook. Hmm...
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useModal<Listeners extends DismissListenerTypes, FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element>({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }: UseModalParameters<Listeners>): UseModalReturnType<FocusContainerElement, SourceElement, PopupElement>;

export declare interface UseModalParameters<Listeners extends DismissListenerTypes> extends UseDismissParameters<Listeners>, UseRefElementParameters<any>, OmitStrong<UseFocusTrapParameters<any, any>, "refElementReturn"> {
    modalParameters: UseModalParametersSelf;
}

export declare interface UseModalParametersSelf {
    /**
     * When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.
     */
    active: boolean;
}

export declare interface UseModalReturnType<FocusContainerElement extends Element | null, SourceElement extends Element | null, PopupElement extends Element> extends UseDismissReturnType<SourceElement, PopupElement> {
    propsFocusContainer: ElementProps<NonNullable<FocusContainerElement>>;
}

/**
 * Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling (only if process.env.NODE_ENV is "development").
 *
 * @remarks Some of the more basic hooks, like `setState`, do not call `useMonitoring` at all.
 * They are so small that their duration generally rounds down to 0 (or epsilon), so using
 * this function usually makes no sense on them. The performance monitoring takes more time
 * than the function itself.
 */
export declare const useMonitoring: typeof dontUseMonitoringImpl;

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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMultiSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 }, managedChildrenReturn: { getChildren, ...void1 }, childrenHaveFocusReturn: { getAnyFocused, ...void4 }, ...void2 }: UseMultiSelectionParameters<UseMultiSelectionChildInfo<any>>): UseMultiSelectionReturnType<ParentOrChildElement, ChildElement>;

/**
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMultiSelectionChild<E extends Element>({ info: { index, ...void4 }, multiSelectionChildParameters: { initiallyMultiSelected, onMultiSelectChange, multiSelectionDisabled, ...void1 }, context: { multiSelectionContext: { notifyParentOfChildSelectChange, multiSelectionAriaPropName, multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }: UseMultiSelectionChildParameters<E, UseMultiSelectionChildInfo<E>>): UseMultiSelectionChildReturnType<E, UseMultiSelectionChildInfo<E>>;

/**
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useMultiSelectionChildDeclarative<E extends Element>({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 }, multiSelectionChildReturn: { changeMultiSelected, ...void2 }, ...void1 }: UseMultiSelectionChildDeclarativeParameters<E, UseMultiSelectionChildInfo<E>>): UseMultiSelectionChildDeclarativeReturnType<E, UseMultiSelectionChildInfo<E>>;

export declare interface UseMultiSelectionChildDeclarativeParameters<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends TargetedPick<UseMultiSelectionChildReturnType<E, M>, "multiSelectionChildReturn", "changeMultiSelected"> {
    multiSelectionChildDeclarativeParameters: {
        multiSelected: boolean | null;
        onMultiSelectedChange: Nullable<(e: MultiSelectChildChangeEvent<E>) => void>;
    };
}

export declare interface UseMultiSelectionChildDeclarativeReturnType<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends TargetedPick<UseMultiSelectionChildParameters<E, M>, "multiSelectionChildParameters", "onMultiSelectChange"> {
    info: Pick<M, "setSelectedFromParent">;
}

export declare interface UseMultiSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
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
    setSelectedFromParent(event: EventType<any, any>, selected: boolean): void;
    getMultiSelected(): boolean;
    getMultiSelectionDisabled(): boolean;
}

export declare type UseMultiSelectionChildInfoKeysParameters = "index";

export declare type UseMultiSelectionChildInfoKeysReturnType = "setSelectedFromParent" | "getMultiSelected" | "getMultiSelectionDisabled";

export declare interface UseMultiSelectionChildParameters<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends UseGenericChildParameters<UseMultiSelectionContext, Pick<M, UseMultiSelectionChildInfoKeysParameters>> {
    multiSelectionChildParameters: UseMultiSelectionChildParametersSelf<E>;
    context: UseMultiSelectionContext;
}

export declare interface UseMultiSelectionChildParametersSelf<E extends Element> {
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
    onMultiSelectChange: Nullable<(e: MultiSelectChildChangeEvent<E>) => void>;
    initiallyMultiSelected: boolean | null;
    /** When true, this child cannot be selected via multi-select, either by focusing it or by clicking it. */
    multiSelectionDisabled: boolean;
}

export declare interface UseMultiSelectionChildReturnType<E extends Element, M extends UseMultiSelectionChildInfo<E>> extends TargetedPick<UsePressParameters<any>, "pressParameters", "onPressSync">, TargetedPick<UseHasCurrentFocusParameters<any>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
    multiSelectionChildReturn: UseMultiSelectionChildReturnTypeSelf;
    props: ElementProps<E>;
    info: Pick<M, UseMultiSelectionChildInfoKeysReturnType>;
}

export declare interface UseMultiSelectionChildReturnTypeSelf extends Pick<Required<UseMultiSelectionContextSelf>, "multiSelectionMode"> {
    /**
     * @stable
     */
    changeMultiSelected(event: EventType<any, any>, selected: boolean): void;
    /**
     * Indicates that this child is selected, according to itself.
     */
    multiSelected: boolean;
    /**
     * @stable
     */
    getMultiSelected(): boolean;
}

export declare interface UseMultiSelectionContext {
    multiSelectionContext: UseMultiSelectionContextSelf;
}

export declare interface UseMultiSelectionContextSelf extends Pick<UseMultiSelectionParametersSelf, "multiSelectionAriaPropName" | "multiSelectionMode"> {
    notifyParentOfChildSelectChange(event: EventType<any, any>, childIndex: number, selected: boolean | undefined, previous: boolean | undefined): void;
    /**
     * When the user presses Shift+Space or Ctrl+Space (depending on selectionMode),
     * all the items since the last selected item are toggled,
     * so the child in question needs to be able to track that.
     */
    doContiguousSelection(event: EventType<any, any>, endIndex: number): void;
    /**
     * Mostly used for when focus-mode selects something (because by default it deselects everything else)
     */
    changeAllChildren: (event: EventType<any, any>, shouldBeSelected: (index: number) => boolean) => void;
    getCtrlKeyDown(): boolean;
    getShiftKeyDown(): boolean;
    getAnyFocused(): boolean;
}

export declare interface UseMultiSelectionParameters<M extends UseMultiSelectionChildInfo<any>> extends TargetedPick<UseChildrenHaveFocusReturnType<any>, "childrenHaveFocusReturn", "getAnyFocused">, TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    multiSelectionParameters: UseMultiSelectionParametersSelf;
}

export declare interface UseMultiSelectionParametersSelf {
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

export declare interface UseMultiSelectionReturnType<ParentElement extends Element, ChildElement extends Element> extends TargetedPick<UseChildrenHaveFocusParameters<ChildElement>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
    context: UseMultiSelectionContext;
    multiSelectionReturn: UseMultiSelectionReturnTypeSelf;
    propsStable: ElementProps<ParentElement>;
}

export declare interface UseMultiSelectionReturnTypeSelf {
}

/**
 * Effectively just a wrapper around a `MutationObserver`.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
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
 *
 * #__NO_SIDE_EFFECTS__
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
 * @hasChild {@link usePaginatedChild}
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function usePaginatedChildren<TabbableChildElement extends Element>({ managedChildrenReturn: { getChildren }, paginatedChildrenParameters: { paginationMax, paginationMin, childCount }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, childrenHaveFocusReturn: { getAnyFocused }, processedIndexManglerReturn: { indexDemangler, indexMangler } }: UsePaginatedChildrenParameters<TabbableChildElement>): UsePaginatedChildrenReturnType;

export declare interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}

export declare interface UsePaginatedChildrenParameters<TabbableChildElement extends Element> extends Pick<UseManagedChildrenReturnType<UsePaginatedChildrenInfo<TabbableChildElement>>, "managedChildrenReturn">, TargetedPick<UseChildrenHaveFocusReturnType<TabbableChildElement>, "childrenHaveFocusReturn", "getAnyFocused">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexDemangler" | "indexMangler">, TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElement>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex"> {
    paginatedChildrenParameters: UsePaginatedChildrenParametersSelf;
}

export declare interface UsePaginatedChildrenParametersSelf {
    paginationMin: Nullable<number>;
    paginationMax: Nullable<number>;
    childCount: Nullable<number>;
}

export declare interface UsePaginatedChildrenReturnType {
    paginatedChildrenReturn: UsePaginatedChildrenReturnTypeSelf;
    context: UsePaginatedChildContext;
}

export declare interface UsePaginatedChildrenReturnTypeSelf {
    /**
     * If the values returned by `indexDemangler` change (e.g. when sorting), then this must be called to re-sync everything.
     *
     * @stable
     */
    refreshPagination: (min: Nullable<number>, max: Nullable<number>) => void;
}

export declare interface UsePaginatedChildReturnType<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    paginatedChildReturn: UsePaginatedChildReturnTypeSelf;
    info: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">;
}

export declare interface UsePaginatedChildReturnTypeSelf {
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function usePassiveState<T, R>(onChange: Nullable<OnPassiveStateChange<T, R>>, getInitialValue?: () => T, { debounceRendering: customDebounceRendering, skipMountInitialization }?: Partial<UsePassiveStateOptions>): readonly [getStateStable: () => T, setStateStable: PassiveStateUpdater<T, R>];

declare interface UsePassiveStateOptions {
    /** **Must be stable** (i.e. the value must not change as long as the component is rendered) */
    skipMountInitialization: boolean;
    debounceRendering: typeof debounceRendering;
}

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
 *
 * #__NO_SIDE_EFFECTS__
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function usePortalChildren({ target }: UsePortalChildrenParameters): UsePortalChildrenReturnType;

export declare interface UsePortalChildrenParameters {
    /**
     * The element that will contain the portal's children, or the string of its `id`.
     *
     * @nonstable
     */
    target: string | Element | null;
}

export declare interface UsePortalChildrenReturnType {
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
 * #__NO_SIDE_EFFECTS__
 */
export declare function usePress<E extends Element>(args: UsePressParameters<E>): UsePressReturnType<E>;

export declare function usePressAsync<E extends Element>({ asyncHandlerParameters: { debounce, throttle, asyncHandler }, pressParameters, refElementReturn }: UsePressAsyncParameters<E>): UsePressAsyncReturnType<E>;

export declare interface UsePressAsyncParameters<E extends Element> extends OmitStrong<UsePressParameters<E>, "pressParameters">, TargetedOmit<UsePressParameters<E>, "pressParameters", "onPressSync"> {
    asyncHandlerParameters: OmitStrong<UseAsyncHandlerParameters<PressEventReason<E>, void>, "capture">;
}

export declare interface UsePressAsyncReturnType<E extends Element> extends UsePressReturnType<E> {
    asyncHandlerReturn: UseAsyncHandlerReturnType<PressEventReason<E>, void>;
}

export declare interface UsePressParameters<E extends EventTarget> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
    pressParameters: UsePressParametersSelf<E>;
}

export declare interface UsePressParametersSelf<E extends EventTarget> {
    /**  */
    onPressingChange: Nullable<OnPassiveStateChange<boolean, PressChangeEventReason<E>>>;
    /**
     * What should happen when this widget has been "pressed".
     *
     * This must be a sync event handler; async handlers must be taken care of externally.
     *
     * Setting to `null` or `undefined` effectively disables the press event handler.
     *
     * @nonstable
     */
    onPressSync: Nullable<((e: PressEventReason<E>) => void)>;
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
    focusSelf(element: E): void;
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
    /**
     * @stable
     */
    getIsPressing(): boolean;
    /**
     * Similar to pseudoActive, but for if the button as been pressed down for a determined length of time.
     */
    longPress: boolean | null;
}

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useProcessedChild<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement> = UseProcessedChildInfo<TabbableChildElement>>({ context, info: { index, getElement, ...uinfo }, rearrangeableChildParameters, ...void1 }: UseProcessedChildParameters<TabbableChildElement, M>): UseProcessedChildReturnType<TabbableChildElement, M>;

export declare interface UseProcessedChildContext<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends UsePaginatedChildContext, UseStaggeredChildContext, UseRearrangeableChildrenContext, UseManagedChildrenContext<M> {
}

export declare interface UseProcessedChildInfo<TabbableChildElement extends Element> extends UsePaginatedChildrenInfo<TabbableChildElement>, UseStaggeredChildrenInfo, UseRearrangeableChildInfo<TabbableChildElement> {
}

export declare type UseProcessedChildInfoKeysParameters = "index" | "getElement";

export declare type UseProcessedChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";

export declare interface UseProcessedChildParameters<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends UseGenericChildParameters<UseProcessedChildContext<TabbableChildElement, M>, Pick<M, UseProcessedChildInfoKeysParameters>>, OmitStrong<UsePaginatedChildParameters, "info">, OmitStrong<UseStaggeredChildParameters<M>, "info">, OmitStrong<UseRearrangeableChildParameters<TabbableChildElement>, "info">, Pick<UseManagedChildParameters<M>, never> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
    info: Pick<M, UseProcessedChildInfoKeysParameters>;
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useProcessedChildren<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>>({ rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, context, managedChildrenParameters, processedIndexManglerParameters }: UseProcessedChildrenParameters<TabbableChildElement, M>): UseProcessedChildrenReturnType<TabbableChildElement, M>;

export declare interface UseProcessedChildrenContext extends UseRearrangedChildrenContext {
    processedChildrenContext: UseProcessedChildrenContextSelf;
}

export declare interface UseProcessedChildrenContextSelf extends Pick<UseRovingTabIndexReturnTypeSelf, "getTabbableIndex" | "setTabbableIndex">, Pick<UseChildrenHaveFocusReturnTypeSelf, "getAnyFocused"> {
}

/**
 * All of these functions **MUST** be stable across renders.
 */
export declare interface UseProcessedChildrenParameters<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends OmitStrong<UseRearrangeableChildrenParameters<TabbableChildElement, M>, "managedChildrenReturn">, OmitStrong<UseStaggeredChildrenParameters, "managedChildrenReturn" | "staggeredChildrenParameters">, TargetedOmit<UseStaggeredChildrenParameters, "staggeredChildrenParameters", "childCount">, Pick<UseManagedChildrenParameters<M>, "managedChildrenParameters">, TargetedOmit<UsePaginatedChildrenParameters<TabbableChildElement>, "paginatedChildrenParameters", "childCount"> {
    context: UseProcessedChildrenContext;
}

export declare interface UseProcessedChildrenReturnType<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends OmitStrong<UseRearrangeableChildrenReturnType, never>, OmitStrong<UseStaggeredChildrenReturnType, never>, OmitStrong<UsePaginatedChildrenReturnType, never> {
    context: UseProcessedChildContext<TabbableChildElement, M>;
}

export declare interface UseProcessedChildReturnType<TabbableChildElement extends Element, M extends UseProcessedChildInfo<TabbableChildElement>> extends OmitStrong<UsePaginatedChildReturnType<TabbableChildElement>, "info">, OmitStrong<UseStaggeredChildReturnType<TabbableChildElement>, "info" | "props">, Pick<UseManagedChildReturnType<M>, "managedChildReturn"> {
}

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }: UseProcessedIndexManglerParameters): UseProcessedIndexManglerReturnType;

export declare interface UseProcessedIndexManglerContext {
    processedIndexManglerContext: UseProcessedIndexManglerContextSelf;
}

export declare interface UseProcessedIndexManglerContextSelf {
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

export declare interface UseProcessedIndexManglerParameters {
    processedIndexManglerParameters: UseProcessedIndexManglerParametersSelf;
}

export declare interface UseProcessedIndexManglerParametersSelf {
    /**
     * The sorted children to render.
     */
    getIndex: GetIndex;
    getSortValueAt: (index: number) => unknown;
    compare: Nullable<Compare<unknown>>;
}

export declare interface UseProcessedIndexManglerReturnType {
    context: UseProcessedIndexManglerContext;
    processedIndexManglerReturn: UseProcessedIndexManglerReturnTypeSelf;
}

export declare interface UseProcessedIndexManglerReturnTypeSelf extends UseProcessedIndexManglerContextSelf {
}

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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function usePropsOnChildren(children: ElementProps<any>["children"] | undefined | null, props: ElementProps<any>, ref: Ref<any> | null | undefined, Tag?: keyof JSX.IntrinsicElements): VNode_2<JSX.DOMAttributes<HTMLInputElement> & ClassAttributes<HTMLInputElement>>;

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
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
 *
 * #__NO_SIDE_EFFECTS__
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
     *
     * @stable
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

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useRearrangeableChild<ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>>({ context, info: { getElement, index }, rearrangeableChildParameters: { cssProperty, duration } }: UseRearrangeableChildParameters<ChildElement>): UseRearrangeableChildReturnType<ChildElement>;

export declare interface UseRearrangeableChildInfo<ChildElement extends Element> extends ManagedChildInfo<number> {
    getElement(): ChildElement | null;
    /**
     * This notifies the child of the position that it is currently in,
     * so that the next time it renders itself, it can use that for a FLIP animation
     */
    updateFLIPAnimation(originalPosition: RearrangeableChildPositionInfo): void;
}

export declare interface UseRearrangeableChildParameters<ChildElement extends Element> {
    info: Pick<UseRearrangeableChildInfo<ChildElement>, "getElement" | "index">;
    rearrangeableChildParameters: UseRearrangeableChildParametersSelf;
    context: UseRearrangeableChildrenContext;
}

export declare interface UseRearrangeableChildParametersSelf {
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useRearrangeableChildren<ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>>({ rearrangeableChildrenParameters: { children: childrenIn }, processedIndexManglerParameters: { getIndex, getSortValueAt }, managedChildrenReturn: { getChildren: getManagedChildren }, context: { processedIndexManglerContext: { mangler } } }: UseRearrangeableChildrenParameters<ChildElement, M>): UseRearrangeableChildrenReturnType;

export declare interface UseRearrangeableChildrenContext {
    rearrangeableChildrenContext: UseRearrangeableChildrenContextSelf;
}

export declare interface UseRearrangeableChildrenContextSelf {
    getFLIPStart(index: number): RearrangeableChildPositionInfo | undefined;
}

/**
 * All of these functions **MUST** be stable across renders.
 */
export declare interface UseRearrangeableChildrenParameters<ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>> extends UseProcessedIndexManglerParameters, TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    rearrangeableChildrenParameters: UseRearrangeableChildrenParametersSelf;
    context: UseRearrangedChildrenContext;
}

export declare interface UseRearrangeableChildrenParametersSelf {
    /**
     * The children to rearrange.
     */
    children: (VNode | null)[];
}

export declare interface UseRearrangeableChildrenReturnType {
    rearrangeableChildrenReturn: UseRearrangeableChildrenReturnTypeSelf;
    context: UseRearrangeableChildrenContext;
}

export declare interface UseRearrangeableChildrenReturnTypeSelf {
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

export declare interface UseRearrangeableChildReturnType<ChildElement extends Element> {
    info: Pick<UseRearrangeableChildInfo<ChildElement>, "updateFLIPAnimation">;
}

/**
 * Unusually, this context is not passed from parent to child,
 * but from parent to a different parent.
 */
export declare interface UseRearrangedChildrenContext extends UseProcessedIndexManglerContext {
}

export declare interface UseRearrangedChildrenContextSelf {
    _unused: undefined;
}

export { useReducer }

export { useRef }

/**
 * Access `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).
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
 * Easiest way to use (but setElement causes an extra re-render when it's called...)
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useRefElement<T extends EventTarget>(args: UseRefElementParameters<T>): UseRefElementReturnType<T>;

export declare interface UseRefElementParameters<T> {
    refElementParameters: UseRefElementParametersSelf<T>;
}

export declare interface UseRefElementParametersSelf<T> {
    /**
     * Called with the `Element` when it mounts, called with `null` when it unmounts.
     *
     * @stable
     */
    onElementChange?: Nullable<OnPassiveStateChange<T | null, never>>;
    /**
     * Called when the element mounts
     *
     * @stable
     */
    onMount?: Nullable<(element: T) => void>;
    /**
     * Called when the element unmounts
     *
     * @stable
     */
    onUnmount?: Nullable<(element: T) => void>;
}

export declare interface UseRefElementReturnType<T extends EventTarget> {
    /** @stable */
    propsStable: ElementProps<T>;
    refElementReturn: UseRefElementReturnTypeSelf<T>;
}

export declare interface UseRefElementReturnTypeSelf<T extends EventTarget> {
    /**
     *
     * Returns the element that the props were rendered to, or `null` if they were not rendered to an element.
     *
     * @stable
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useRovingTabIndex<ParentElement extends Element, ChildElement extends Element>({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, processedIndexManglerReturn: { indexDemangler }, ...void1 }: UseRovingTabIndexParameters<ParentElement, ChildElement, UseRovingTabIndexChildInfo<ChildElement>>): UseRovingTabIndexReturnType<ParentElement, ChildElement>;

/**
 * @compositeParams
 *
 * @see {@link useRovingTabIndex}
 * @param args - {@link UseRovingTabIndexChildParameters}
 * @returns - {@link UseRovingTabIndexChildReturnType}
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useRovingTabIndexChild<ChildElement extends Element>({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, untabbable: parentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }: UseRovingTabIndexChildParameters<ChildElement>): UseRovingTabIndexChildReturnType<ChildElement>;

export declare interface UseRovingTabIndexChildInfo<TabbableChildElement extends Element> extends ManagedChildInfo<number> {
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

export declare type UseRovingTabIndexChildInfoKeysParameters = "index" | "untabbable";

export declare type UseRovingTabIndexChildInfoKeysReturnType = "setLocallyTabbable" | "getLocallyTabbable";

export declare interface UseRovingTabIndexChildParameters<TabbableChildElement extends Element> extends UseGenericChildParameters<RovingTabIndexChildContext, Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, UseRovingTabIndexChildInfoKeysParameters>>, Pick<UseRefElementReturnType<TabbableChildElement>, "refElementReturn"> {
}

export declare interface UseRovingTabIndexChildReturnType<ChildElement extends Element> extends TargetedPick<UseHasCurrentFocusParameters<ChildElement>, "hasCurrentFocusParameters", "onCurrentFocusedInnerChanged"> {
    /** Return information about the tabbable state of this child */
    rovingTabIndexChildReturn: UseRovingTabIndexChildReturnTypeSelf;
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

export declare interface UseRovingTabIndexChildReturnTypeSelf {
    /**
     * Whether this child, individually, is *the* currently tabbable child.
     */
    tabbable: boolean;
    /**
     * @stable
     */
    getTabbable(): boolean;
}

export declare interface UseRovingTabIndexParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UseRovingTabIndexChildInfo<TabbableChildElement>> extends TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren">, TargetedPick<UseRefElementReturnType<ParentElement>, "refElementReturn", "getElement">, TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexDemangler"> {
    /** When children mount/unmount, RTI needs access to all known children in case we unmounted the currently tabbable child */
    /** The only parameters RTI needs directly is the initial index to be tabbable */
    rovingTabIndexParameters: UseRovingTabIndexParametersSelf<ParentElement>;
}

export declare interface UseRovingTabIndexParametersSelf<ParentElement extends Element> {
    /** When `untabbable` is true, instead of a child focusing itself, the parent will via this `focusSelf` argument. */
    focusSelfParent(e: ParentElement | null): void;
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
    onTabbableIndexChange: Nullable<OnPassiveStateChange<number | null, EventType<any, any>>>;
}

export declare interface UseRovingTabIndexReturnType<ParentElement extends Element, TabbableChildElement extends Element> extends TargetedPick<UseManagedChildrenParameters<UseRovingTabIndexChildInfo<TabbableChildElement>>, "managedChildrenParameters", "onChildrenMountChange"> {
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useSearchParamState<Key extends keyof SearchParamStates>({ key: paramKey, defaultReason, stringToValue, initialValue, onValueChange, valueToString }: UseSearchParamStateParameters<Key, SearchParamStates[Key]>): readonly [() => SearchParamStates[Key], SetParamWithHistory<SearchParamStates[Key]>];

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useSearchParamStateDeclarative<Key extends keyof SearchParamStates>({ key, defaultReason, stringToValue, initialValue, valueToString }: OmitStrong<UseSearchParamStateParameters<Key, SearchParamStates[Key]>, "onValueChange">): readonly [SearchParamStates[Key], SetParamWithHistory<SearchParamStates[Key]>, () => SearchParamStates[Key]];

export declare interface UseSearchParamStateParameters<Key extends keyof SearchParamStates, T = SearchParamStates[Key]> {
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }: UseSelectionParameters<ParentOrChildElement, ChildElement, UseSelectionChildInfo<ChildElement>>): UseSelectionReturnType<ParentOrChildElement, ChildElement>;

/**
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useSelectionChild<ChildElement extends Element>({ context, info: { index, untabbable, ...void2 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void3 }: UseSelectionChildParameters<ChildElement, UseSelectionChildInfo<ChildElement>>): UseSelectionChildReturnType<ChildElement, UseSelectionChildInfo<ChildElement>>;

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useSelectionChildDeclarative<ChildElement extends Element>(args: UseSelectionChildDeclarativeParameters<ChildElement, UseSelectionChildInfo<ChildElement>>): UseMultiSelectionChildDeclarativeReturnType_2<ChildElement, UseMultiSelectionChildInfo<ChildElement>>;

export declare interface UseSelectionChildDeclarativeParameters<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends UseMultiSelectionChildDeclarativeParameters<ChildElement, M> {
}

export declare interface UseSelectionChildInfo<E extends Element> extends UseSingleSelectionChildInfo<E>, UseMultiSelectionChildInfo<E> {
}

export declare type UseSelectionChildInfoKeysParameters = UseSingleSelectionChildInfoKeysParameters | UseMultiSelectionChildInfoKeysParameters;

export declare type UseSelectionChildInfoKeysReturnType = UseSingleSelectionChildInfoKeysReturnType | UseMultiSelectionChildInfoKeysReturnType;

export declare interface UseSelectionChildParameters<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends UseGenericChildParameters<UseSelectionContext, Pick<M, UseSelectionChildInfoKeysParameters>>, OmitStrong<UseSingleSelectionChildParameters<ChildElement, M>, "info" | "context">, OmitStrong<UseMultiSelectionChildParameters<ChildElement, M>, "info" | "context"> {
}

export declare interface UseSelectionChildReturnType<ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends ExtendMerge<UseSingleSelectionChildReturnType<ChildElement, M>, UseMultiSelectionChildReturnType<ChildElement, M>> {
}

export declare interface UseSelectionContext extends UseSingleSelectionContext, UseMultiSelectionContext {
}

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useSelectionDeclarative<ChildElement extends Element>(args: UseSelectionDeclarativeParameters<ChildElement>): {
    singleSelectionParameters: {
        onSingleSelectedIndexChange: SelectedIndexChangeHandler_2;
    };
};

export declare interface UseSelectionDeclarativeParameters<ChildElement extends Element> extends UseSingleSelectionDeclarativeParameters<ChildElement> {
}

export declare interface UseSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSelectionChildInfo<ChildElement>> extends UseSingleSelectionParameters<ParentOrChildElement, ChildElement, M>, UseMultiSelectionParameters<M> {
}

export declare interface UseSelectionReturnType<ParentElement extends Element, ChildElement extends Element> extends UseSingleSelectionReturnType<ChildElement>, UseMultiSelectionReturnType<ParentElement, ChildElement> {
    context: UseSelectionContext;
}

/**
 * Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
 *
 * @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
 *
 * @hasChild {@link useSingleSelectionChild}
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element>({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 }, ...void4 }: UseSingleSelectionParameters<ParentOrChildElement, ChildElement, UseSingleSelectionChildInfo<ChildElement>>): UseSingleSelectionReturnType<ChildElement>;

/**
 *
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useSingleSelectionChild<ChildElement extends Element>({ singleSelectionChildParameters: { singleSelectionDisabled, ...void5 }, context: { singleSelectionContext: { getSingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName: ariaPropName, singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }: UseSingleSelectionChildParameters<ChildElement, UseSingleSelectionChildInfo<ChildElement>>): UseSingleSelectionChildReturnType<ChildElement, UseSingleSelectionChildInfo<ChildElement>>;

/** Anything that's selectable must be tabbable, so we DO use rovingTabIndex instead of just managedChildren */
export declare interface UseSingleSelectionChildInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
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

export declare type UseSingleSelectionChildInfoKeysParameters = "index" | "untabbable";

export declare type UseSingleSelectionChildInfoKeysReturnType = "getSingleSelected" | "setLocalSingleSelected" | "singleSelected";

export declare interface UseSingleSelectionChildParameters<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends UseGenericChildParameters<UseSingleSelectionContext, Pick<M, UseSingleSelectionChildInfoKeysParameters>> {
    singleSelectionChildParameters: UseSingleSelectionChildParametersSelf;
}

export declare interface UseSingleSelectionChildParametersSelf {
    /** When true, this child cannot be selected via single-select, either by focusing it or by clicking it. */
    singleSelectionDisabled: boolean;
}

export declare interface UseSingleSelectionChildReturnType<E extends Element, M extends UseSingleSelectionChildInfo<E>> extends UseChildrenHaveFocusChildReturnType<E>, TargetedPick<UsePressParameters<any>, "pressParameters", "onPressSync"> {
    props: ElementProps<E>;
    info: Pick<M, UseSingleSelectionChildInfoKeysReturnType>;
    singleSelectionChildReturn: UseSingleSelectionChildReturnTypeSelf;
}

export declare interface UseSingleSelectionChildReturnTypeSelf extends Pick<Required<SingleSelectionContextSelf>, "singleSelectionMode"> {
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

export declare interface UseSingleSelectionContext {
    singleSelectionContext: SingleSelectionContextSelf;
}

/**
 * Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
 */
export declare function useSingleSelectionDeclarative<ParentOrChildElement extends Element, ChildElement extends Element>({ singleSelectionReturn: { changeSingleSelectedIndex }, singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange } }: UseSingleSelectionDeclarativeParameters<ChildElement>): {
    singleSelectionParameters: {
        onSingleSelectedIndexChange: SelectedIndexChangeHandler;
    };
};

export declare interface UseSingleSelectionDeclarativeParameters<ChildElement extends Element> extends TargetedPick<UseSingleSelectionReturnType<ChildElement>, "singleSelectionReturn", "changeSingleSelectedIndex"> {
    singleSelectionDeclarativeParameters: UseSingleSelectionDeclarativeParametersSelf;
}

export declare interface UseSingleSelectionDeclarativeParametersSelf extends Pick<UseSingleSelectionParametersSelf, "onSingleSelectedIndexChange"> {
    singleSelectedIndex: Nullable<number>;
}

export declare interface UseSingleSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseSingleSelectionChildInfo<ChildElement>> extends TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren">, TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "setTabbableIndex"> {
    singleSelectionParameters: UseSingleSelectionParametersSelf;
}

export declare interface UseSingleSelectionParametersSelf {
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
    onSingleSelectedIndexChange: Nullable<SelectedIndexChangeHandler>;
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

export declare interface UseSingleSelectionReturnType<ChildElement extends Element> extends TargetedPick<UseChildrenHaveFocusParameters<ChildElement>, "childrenHaveFocusParameters", "onCompositeFocusChange"> {
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
     *
     * @stable
     */
    changeSingleSelectedIndex: PassiveStateUpdater<number | null, SelectedIndexChangeEvent>;
    /**
     * @stable
     */
    getSingleSelectedIndex(): number | null;
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useStableCallback<T extends Function | null | undefined>(fn: NonNullable<T>, noDeps?: [] | null | undefined): Stable<NonNullable<T>>;

/**
 * Given an input value, returns a constant getter function that can be used
 * inside of `useEffect` and friends without including it in the dependency array.
 *
 * @remarks This uses `options.diffed` in order to run before everything, even
 * ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useStableGetter<T>(value: T): () => T;

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useStableMergedCallback<T extends (Function | null | undefined)[]>(...fns: T): NonNullable<T[number]>;

/**
 * Returns a function that retrieves the stack at the time this hook was called (in development mode only).
 *
 * @remarks The global variable `_generate_setState_stacks` must be true, or no stack will be generated.
 */
export declare function useStack(): () => string | undefined;

/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
 * logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useStaggeredChild<ChildElement extends Element, M extends UseStaggeredChildrenInfo>({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } } }: UseStaggeredChildParameters<M>): UseStaggeredChildReturnType<ChildElement>;

export declare interface UseStaggeredChildContext {
    staggeredChildContext: UseStaggeredChildContextSelf;
}

export declare interface UseStaggeredChildContextSelf {
    parentIsStaggered: boolean;
    childCallsThisToTellTheParentToMountTheNextOne(index: number): void;
    getDefaultStaggeredVisible(i: number): boolean;
    getIntersectionObserver(): IntersectionObserver | null;
    setElementToIndexMap(index: number, element: any): void;
}

export declare interface UseStaggeredChildParameters<M extends UseStaggeredChildrenInfo> extends UseGenericChildParameters<UseStaggeredChildContext, Pick<M, "index">> {
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useStaggeredChildren({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered, childCount }, }: UseStaggeredChildrenParameters): UseStaggeredChildrenReturnType;

export declare interface UseStaggeredChildrenInfo extends Pick<UseRovingTabIndexChildInfo<any>, "index"> {
    setStaggeredVisible(visible: boolean): void;
    getStaggeredVisible(): boolean;
}

export declare interface UseStaggeredChildrenParameters extends Pick<UseManagedChildrenReturnType<UseStaggeredChildrenInfo>, "managedChildrenReturn"> {
    staggeredChildrenParameters: UseStaggeredChildrenParametersSelf;
}

export declare interface UseStaggeredChildrenParametersSelf {
    /**
     * If true, each child will delay rendering itself until the one before it has.
     */
    staggered: boolean;
    childCount: number | null;
}

export declare interface UseStaggeredChildrenReturnType {
    staggeredChildrenReturn: UseStaggeredChildrenReturnTypeSelf;
    context: UseStaggeredChildContext;
}

export declare interface UseStaggeredChildrenReturnTypeSelf {
    /**
     * Whether any children are still waiting to show themselves because of the staggering behavior
     */
    stillStaggering: boolean;
}

export declare interface UseStaggeredChildReturnType<ChildElement extends Element> extends TargetedPick<UseRefElementParameters<ChildElement>, "refElementParameters", "onElementChange"> {
    props: ElementProps<ChildElement>;
    staggeredChildReturn: UseStaggeredChildReturnTypeSelf;
    info: OmitStrong<UseStaggeredChildrenInfo, "index">;
}

export declare interface UseStaggeredChildReturnTypeSelf {
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

/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 *
 * @remarks If `getBuildMode()` returns `"development"`, then any calls to `setState` will also
 * take the stack at the time the hook was called and save it to `window._setState_stack`.
 * Useful if you want to trace whose state is being updated.
 *
 * @param initialState - Same as the built-in `setState`'s
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useState<T>(initialState: T | (() => T)): readonly [value: T, setValue: StateUpdater<T>, getValue: () => T];

export { useStateBasic }

/**
 * Allows examining the rendered component's text content whenever it renders and reacting to changes.
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useTextContent<E extends Element>({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }: UseTextContentParameters<E>): UseTextContentReturnType;

export declare interface UseTextContentParameters<E extends Element> extends TargetedPick<UseRefElementReturnType<E>, "refElementReturn", "getElement"> {
    textContentParameters: UseTextContentParametersSelf<E>;
}

export declare interface UseTextContentParametersSelf<E extends Element> {
    /**
     * Return the text content of this component. By default, `e => e.textContent` is probably what you want.
     *
     * @remarks Reminder that `element.innerText` is heavy and causes layout calculations, but respects `display:none` and such.
     * `element.textContent` is usually what you want if this is used many times across a page (like as part of a list item).
     */
    getText(e: E | null): string | null;
    /**
     * During `useEffect`, this is called if the text content of the rendered element has changed.
     *
     * @see {@link useMutationObserver} for a more robust implementation of this idea
     */
    onTextContentChange: Nullable<OnPassiveStateChange<string | null, never>>;
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
 *
 * #__NO_SIDE_EFFECTS__
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useTypeaheadNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }: UseTypeaheadNavigationParameters<ChildElement>): UseTypeaheadNavigationReturnType<ParentOrChildElement>;

/**
 *
 * @compositeParams
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useTypeaheadNavigationChild<ChildElement extends Element>({ info: { index, ...void1 }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, ...void4 }: UseTypeaheadNavigationChildParameters<ChildElement>): UseTypeaheadNavigationChildReturnType;

export declare interface UseTypeaheadNavigationChildInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
}

export declare type UseTypeaheadNavigationChildInfoKeysParameters = "index";

export declare type UseTypeaheadNavigationChildInfoKeysReturnType = never;

/** Arguments passed to the child `useTypeaheadNavigationChild` */
export declare interface UseTypeaheadNavigationChildParameters<ChildElement extends Element> extends UseGenericChildParameters<UseTypeaheadNavigationContext, Pick<UseTypeaheadNavigationChildInfo<ChildElement>, UseTypeaheadNavigationChildInfoKeysParameters>> {
}

export declare interface UseTypeaheadNavigationChildReturnType extends TargetedPick<UseTextContentParameters<any>, "textContentParameters", "onTextContentChange">, TargetedPick<UsePressParameters<any>, "pressParameters", "excludeSpace"> {
}

export declare interface UseTypeaheadNavigationContext {
    typeaheadNavigationContext: UseTypeaheadNavigationContextSelf;
}

export declare interface UseTypeaheadNavigationContextSelf {
    /**
     * Stable, but don't call during render.
     *
     * @stable
     */
    excludeSpace: () => boolean;
    sortedTypeaheadInfo: Array<TypeaheadInfo>;
    insertingComparator: (lhs: string | null, rhs: TypeaheadInfo) => number;
}

export declare interface UseTypeaheadNavigationParameters<TabbableChildElement extends Element> extends TargetedPick<UseRovingTabIndexReturnType<any, TabbableChildElement>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex"> {
    typeaheadNavigationParameters: UseTypeaheadNavigationParametersSelf<TabbableChildElement>;
}

export declare interface UseTypeaheadNavigationParametersSelf<TabbableChildElement extends Element> {
    /**
     * **Optional**
     *
     * Called any time the currently tabbable index changes as a result of a typeahead-related keypress
     *
     * @nonstable
     */
    onNavigateTypeahead: Nullable<(newIndex: number | null, event: KeyboardEventType<TabbableChildElement>) => void>;
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function useUrl(onUrlChange: (url: string) => void): readonly [() => string, (newUrlOrSetter: (string | ((prev: string | undefined) => string)), action: "push" | "replace") => void];

/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function useWhatCausedRender(who: string, { props, state }: {
    props: any;
    state: any;
}): void;

export declare type VNode = JSX.Element;

export { }
