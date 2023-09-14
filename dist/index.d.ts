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
export { useBackdropDismiss } from "./component-detail/dismissal/use-backdrop-dismiss.js";
export { useEscapeDismiss } from "./component-detail/dismissal/use-escape-dismiss.js";
export { useLostFocusDismiss } from "./component-detail/dismissal/use-lost-focus-dismiss.js";
export { useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./component-detail/keyboard-navigation/use-grid-navigation-partial.js";
export { identity, tryNavigateToIndex, useLinearNavigation } from "./component-detail/keyboard-navigation/use-linear-navigation.js";
export { useListNavigation, useListNavigationChild } from "./component-detail/keyboard-navigation/use-list-navigation-partial.js";
export { useRovingTabIndex, useRovingTabIndexChild } from "./component-detail/keyboard-navigation/use-roving-tabindex.js";
export { binarySearch, useTypeaheadNavigation, useTypeaheadNavigationChild } from "./component-detail/keyboard-navigation/use-typeahead-navigation.js";
export { usePaginatedChild, usePaginatedChildren } from "./component-detail/processed-children/use-paginated-children.js";
export { useProcessedChild, useProcessedChildren } from "./component-detail/processed-children/use-processed-children.js";
export { useCreateProcessedChildrenContext, useRearrangeableChildren } from "./component-detail/processed-children/use-rearrangeable-children.js";
export { useStaggeredChild, useStaggeredChildren } from "./component-detail/processed-children/use-staggered-children.js";
export { useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative } from "./component-detail/selection/use-multi-selection.js";
export { useSelection, useSelectionChild, useSelectionChildDeclarative, useSelectionDeclarative } from "./component-detail/selection/use-selection.js";
export { useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative } from "./component-detail/selection/use-single-selection.js";
export { useDismiss } from "./component-detail/use-dismiss.js";
export { findFirstFocusable, findFirstTabbable, useFocusTrap } from "./component-detail/use-focus-trap.js";
export { useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "./component-detail/use-grid-navigation-selection.js";
export { useListNavigationSelection, useListNavigationSelectionChild } from "./component-detail/use-list-navigation-selection.js";
export { useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow } from "./component-use/use-grid-navigation-complete.js";
export { useCompleteListNavigation, useCompleteListNavigationChild, useCompleteListNavigationChildDeclarative, useCompleteListNavigationDeclarative } from "./component-use/use-list-navigation-complete.js";
export { useModal } from "./component-use/use-modal.js";
export { setPressVibrate, usePress, usePressAsync } from "./component-use/use-press.js";
export { useRandomDualIds } from "./component-use/use-random-dual-ids.js";
export { useRandomId } from "./component-use/use-random-id.js";
export { useAsyncHandler } from "./dom-helpers/use-async-handler.js";
export { getTopElement, useBlockingElement } from "./dom-helpers/use-blocking-element.js";
export { getDocument, useDocumentClass } from "./dom-helpers/use-document-class.js";
export { useDraggable } from "./dom-helpers/use-draggable.js";
export { useDroppable } from "./dom-helpers/use-droppable.js";
export { useGlobalHandler } from "./dom-helpers/use-event-handler.js";
export { useHideScroll } from "./dom-helpers/use-hide-scroll.js";
export { ImperativeElement, useImperativeProps } from "./dom-helpers/use-imperative-props.js";
export { useMergedChildren } from "./dom-helpers/use-merged-children.js";
export { useMergedClasses } from "./dom-helpers/use-merged-classes.js";
export { enableLoggingPropConflicts, mergeFunctions, useMergedProps } from "./dom-helpers/use-merged-props.js";
export { useMergedRefs } from "./dom-helpers/use-merged-refs.js";
export { useMergedStyles } from "./dom-helpers/use-merged-styles.js";
export { usePortalChildren } from "./dom-helpers/use-portal-children.js";
export { useRefElement } from "./dom-helpers/use-ref-element.js";
export { useTextContent } from "./dom-helpers/use-text-content.js";
export { useActiveElement } from "./observers/use-active-element.js";
export { useChildrenHaveFocus, useChildrenHaveFocusChild } from "./observers/use-children-have-focus.js";
export { useElementSize } from "./observers/use-element-size.js";
export { useHasCurrentFocus } from "./observers/use-has-current-focus.js";
export { useHasLastFocus } from "./observers/use-has-last-focus.js";
export { useLogicalDirection } from "./observers/use-logical-direction.js";
export { useMediaQuery } from "./observers/use-media-query.js";
export { useMutationObserver } from "./observers/use-mutation-observer.js";
export { useUrl } from "./observers/use-url.js";
export { useAsyncEffect } from "./preact-extensions/use-async-effect.js";
export { useAsync } from "./preact-extensions/use-async.js";
export { useEffectDebug } from "./preact-extensions/use-effect-debug.js";
export { useForceUpdate } from "./preact-extensions/use-force-update.js";
export { useLayoutEffectDebug } from "./preact-extensions/use-layout-effect-debug.js";
export { useChildrenFlag, useManagedChild, useManagedChildren } from "./preact-extensions/use-managed-children.js";
export { returnFalse, returnNull, returnTrue, returnUndefined, returnZero, runImmediately, useEnsureStability, usePassiveState } from "./preact-extensions/use-passive-state.js";
export { getFromLocalStorage, storeToLocalStorage, usePersistentState } from "./preact-extensions/use-persistent-state.js";
export { usePropsOnChildren } from "./preact-extensions/use-props-on-children.js";
export { useSearchParamState, useSearchParamStateDeclarative } from "./preact-extensions/use-search-param-state.js";
export { useStableCallback } from "./preact-extensions/use-stable-callback.js";
export { useMemoObject, useStableGetter } from "./preact-extensions/use-stable-getter.js";
export { useState } from "./preact-extensions/use-state.js";
export { useWhatCausedRender } from "./preact-extensions/use-what-caused-render.js";
export { ProvideBatchedAnimationFrames, useAnimationFrame } from "./timing/use-animation-frame.js";
export { useInterval } from "./timing/use-interval.js";
export { useTimeout } from "./timing/use-timeout.js";
export { assertEmptyObject } from "./util/assert.js";
export { EventDetail, enhanceEvent, getEventDetail } from "./util/event.js";
export { findBackupFocus, focus } from "./util/focus.js";
export { generateRandomId } from "./util/random-id.js";
export { generateStack, useStack } from "./util/stack.js";
export { hideCallCount, monitored } from "./util/use-call-count.js";
export type { UseBackdropDismissParameters, UseBackdropDismissParametersSelf } from "./component-detail/dismissal/use-backdrop-dismiss.js";
export type { UseEscapeDismissParameters, UseEscapeDismissParametersSelf } from "./component-detail/dismissal/use-escape-dismiss.js";
export type { UseLostFocusDismissParameters, UseLostFocusDismissParametersSelf, UseLostFocusDismissReturnType } from "./component-detail/dismissal/use-lost-focus-dismiss.js";
export type { GridChildCellInfo, GridChildRowInfo, TabbableColumnInfo, UseGridNavigationCellContext, UseGridNavigationCellContextSelf, UseGridNavigationCellInfoKeysParameters, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationCellParameters, UseGridNavigationCellParametersSelf, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationParametersSelf, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowContextSelf, UseGridNavigationRowInfoKeysParameters, UseGridNavigationRowInfoKeysReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "./component-detail/keyboard-navigation/use-grid-navigation-partial.js";
export type { LinearNavigationResult, TryNavigateToIndexParameters, UseLinearNavigationParameters, UseLinearNavigationParametersSelf, UseLinearNavigationReturnType, UseLinearNavigationReturnTypeSelf } from "./component-detail/keyboard-navigation/use-linear-navigation.js";
export type { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType } from "./component-detail/keyboard-navigation/use-list-navigation-partial.js";
export type { OnTabbableIndexChange, RovingTabIndexChildContext, RovingTabIndexChildContextSelf, SetTabbableIndex, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexChildReturnTypeSelf, UseRovingTabIndexParameters, UseRovingTabIndexParametersSelf, UseRovingTabIndexReturnType, UseRovingTabIndexReturnTypeSelf } from "./component-detail/keyboard-navigation/use-roving-tabindex.js";
export type { UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildInfoKeysParameters, UseTypeaheadNavigationChildInfoKeysReturnType, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationContextSelf, UseTypeaheadNavigationParameters, UseTypeaheadNavigationParametersSelf, UseTypeaheadNavigationReturnType, UseTypeaheadNavigationReturnTypeSelf } from "./component-detail/keyboard-navigation/use-typeahead-navigation.js";
export type { UsePaginatedChildContext, UsePaginatedChildContextSelf, UsePaginatedChildParameters, UsePaginatedChildReturnType, UsePaginatedChildReturnTypeSelf, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenParametersSelf, UsePaginatedChildrenReturnType, UsePaginatedChildrenReturnTypeSelf } from "./component-detail/processed-children/use-paginated-children.js";
export type { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildInfoKeysParameters, UseProcessedChildInfoKeysReturnType, UseProcessedChildParameters, UseProcessedChildParametersSelf, UseProcessedChildReturnType, UseProcessedChildReturnTypeSelf, UseProcessedChildrenParameters, UseProcessedChildrenReturnType } from "./component-detail/processed-children/use-processed-children.js";
export type { Compare, GetHighestChildIndex, GetIndex, GetValid, UseProcessedChildrenContext, UseProcessedChildrenContextSelf, UseRearrangeableChildInfo, UseRearrangeableChildrenParameters, UseRearrangeableChildrenParametersSelf, UseRearrangeableChildrenReturnType, UseRearrangeableChildrenReturnTypeSelf } from "./component-detail/processed-children/use-rearrangeable-children.js";
export type { UseStaggeredChildContext, UseStaggeredChildContextSelf, UseStaggeredChildParameters, UseStaggeredChildReturnType, UseStaggeredChildReturnTypeSelf, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenParametersSelf, UseStaggeredChildrenReturnType, UseStaggeredChildrenReturnTypeSelf } from "./component-detail/processed-children/use-staggered-children.js";
export type { MakeMultiSelectionChildDeclarativeParameters, MakeMultiSelectionChildDeclarativeReturnType, MultiSelectChildChangeEvent, MultiSelectChildChangeHandler, MultiSelectionChangeEvent, UseMultiSelectionChildDeclarativeParameters, UseMultiSelectionChildDeclarativeReturnType, UseMultiSelectionChildInfo, UseMultiSelectionChildInfoKeysParameters, UseMultiSelectionChildInfoKeysReturnType, UseMultiSelectionChildParameters, UseMultiSelectionChildParametersSelf, UseMultiSelectionChildReturnType, UseMultiSelectionChildReturnTypeSelf, UseMultiSelectionContext, UseMultiSelectionContextSelf, UseMultiSelectionParameters, UseMultiSelectionParametersSelf, UseMultiSelectionReturnType, UseMultiSelectionReturnTypeSelf } from "./component-detail/selection/use-multi-selection.js";
export type { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeChildReturnType, MakeSelectionDeclarativeParameters, MakeSelectionDeclarativeReturnType, UseSelectionChildDeclarativeParameters, UseSelectionChildInfo, UseSelectionChildInfoKeysParameters, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionDeclarativeParameters, UseSelectionParameters, UseSelectionReturnType } from "./component-detail/selection/use-selection.js";
export type { MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, SelectedIndexChangeEvent, SelectedIndexChangeHandler, SingleSelectionContextSelf, UseSingleSelectionChildInfo, UseSingleSelectionChildInfoKeysParameters, UseSingleSelectionChildInfoKeysReturnType, UseSingleSelectionChildParameters, UseSingleSelectionChildParametersSelf, UseSingleSelectionChildReturnType, UseSingleSelectionChildReturnTypeSelf, UseSingleSelectionContext, UseSingleSelectionDeclarativeParameters, UseSingleSelectionDeclarativeParametersSelf, UseSingleSelectionParameters, UseSingleSelectionParametersSelf, UseSingleSelectionReturnType, UseSingleSelectionReturnTypeSelf } from "./component-detail/selection/use-single-selection.js";
export type { DismissListenerTypes, UseDismissParameters, UseDismissParametersSelf, UseDismissReturnType } from "./component-detail/use-dismiss.js";
export type { UseFocusTrapParameters, UseFocusTrapParametersSelf, UseFocusTrapReturnType } from "./component-detail/use-focus-trap.js";
export type { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationRowSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellInfoKeysReturnType, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowInfoKeysReturnType, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType } from "./component-detail/use-grid-navigation-selection.js";
export type { UseListNavigationSelectionChildContext, UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildInfoKeysReturnType, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType } from "./component-detail/use-list-navigation-selection.js";
export type { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellInfoKeysParameters, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationDeclarativeParameters, UseCompleteGridNavigationDeclarativeReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowInfoKeysParameters, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType } from "./component-use/use-grid-navigation-complete.js";
export type { CompleteListNavigationContext, UseCompleteListNavigationChildDeclarativeParameters, UseCompleteListNavigationChildDeclarativeReturnType, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildInfoKeysParameters, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationDeclarativeParameters, UseCompleteListNavigationDeclarativeReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType } from "./component-use/use-list-navigation-complete.js";
export type { UseModalParameters, UseModalParametersSelf, UseModalReturnType } from "./component-use/use-modal.js";
export type { PressChangeEventReason, PressEventReason, UsePressAsyncParameters, UsePressAsyncReturnType, UsePressParameters, UsePressParametersSelf, UsePressReturnType, UsePressReturnTypeSelf } from "./component-use/use-press.js";
export type { UseRandomDualIdsParameters, UseRandomDualIdsReturnType } from "./component-use/use-random-dual-ids.js";
export type { UseRandomIdParameters, UseRandomIdParametersSelf, UseRandomIdReturnType, UseRandomIdReturnTypeSelf } from "./component-use/use-random-id.js";
export type { AsyncHandler, UseAsyncHandlerParameters, UseAsyncHandlerReturnType } from "./dom-helpers/use-async-handler.js";
export type { UseBlockingElementParameters, UseBlockingElementParametersSelf } from "./dom-helpers/use-blocking-element.js";
export type {} from "./dom-helpers/use-document-class.js";
export type { UseDraggableParameters, UseDraggableReturnType } from "./dom-helpers/use-draggable.js";
export type { DropFile, DropFileMetadata, DroppableFileError, UseDroppableParameters, UseDroppableReturnType } from "./dom-helpers/use-droppable.js";
export type {} from "./dom-helpers/use-event-handler.js";
export type {} from "./dom-helpers/use-hide-scroll.js";
export type { DangerouslyAppendHTML, DangerouslySetInnerHTML, GetAttribute, HasClass, SetAttribute, SetChildren, SetClass, SetEventHandler, SetStyle, UseImperativePropsParameters, UseImperativePropsReturnType, UseImperativePropsReturnTypeSelf } from "./dom-helpers/use-imperative-props.js";
export type {} from "./dom-helpers/use-merged-children.js";
export type {} from "./dom-helpers/use-merged-classes.js";
export type {} from "./dom-helpers/use-merged-props.js";
export type {} from "./dom-helpers/use-merged-refs.js";
export type {} from "./dom-helpers/use-merged-styles.js";
export type { PortalChildUpdater, PushPortalChild, RemovePortalChild, UpdatePortalChild, UsePortalChildrenParameters, UsePortalChildrenReturnType } from "./dom-helpers/use-portal-children.js";
export type { UseRefElementParameters, UseRefElementParametersSelf, UseRefElementReturnType, UseRefElementReturnTypeSelf } from "./dom-helpers/use-ref-element.js";
export type { UseTextContentParameters, UseTextContentParametersSelf, UseTextContentReturnType, UseTextContentReturnTypeSelf } from "./dom-helpers/use-text-content.js";
export type { UseActiveElementParameters, UseActiveElementParametersSelf, UseActiveElementReturnType, UseActiveElementReturnTypeSelf } from "./observers/use-active-element.js";
export type { UseChildrenHaveFocusChildParameters, UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusContext, UseChildrenHaveFocusParameters, UseChildrenHaveFocusParametersSelf, UseChildrenHaveFocusReturnType, UseChildrenHaveFocusReturnTypeSelf } from "./observers/use-children-have-focus.js";
export type { ElementSize, UseElementSizeParameters, UseElementSizeParametersSelf, UseElementSizeReturnType, UseElementSizeReturnTypeSelf } from "./observers/use-element-size.js";
export type { UseHasCurrentFocusParameters, UseHasCurrentFocusParametersSelf, UseHasCurrentFocusReturnType, UseHasCurrentFocusReturnTypeSelf } from "./observers/use-has-current-focus.js";
export type { HasLastFocusReturnTypeSelf, UseHasLastFocusParameters, UseHasLastFocusParametersSelf, UseHasLastFocusReturnType } from "./observers/use-has-last-focus.js";
export type { LogicalDirectionInfo, LogicalElementSize, LogicalOrientation, PhysicalDirection, PhysicalOrientation, PhysicalSize, UseLogicalDirectionParameters, UseLogicalDirectionReturnType } from "./observers/use-logical-direction.js";
export type { UseMediaQueryReturnType } from "./observers/use-media-query.js";
export type { UseMutationObserverParameters, UseMutationObserverParametersSelf, UseMutationObserverReturnType } from "./observers/use-mutation-observer.js";
export type {} from "./observers/use-url.js";
export type {} from "./preact-extensions/use-async-effect.js";
export type { UseAsyncReturnType } from "./preact-extensions/use-async.js";
export type {} from "./preact-extensions/use-effect-debug.js";
export type {} from "./preact-extensions/use-force-update.js";
export type {} from "./preact-extensions/use-layout-effect-debug.js";
export type { ManagedChildInfo, ManagedChildren, OnAfterChildLayoutEffect, OnChildrenMountChange, UseChildrenFlagParameters, UseChildrenFlagReturnType, UseGenericChildParameters, UseManagedChildParameters, UseManagedChildReturnType, UseManagedChildReturnTypeSelf, UseManagedChildrenContext, UseManagedChildrenContextSelf, UseManagedChildrenParameters, UseManagedChildrenParametersSelf, UseManagedChildrenReturnType, UseManagedChildrenReturnTypeSelf } from "./preact-extensions/use-managed-children.js";
export type { OnPassiveStateChange, PassiveStateUpdater } from "./preact-extensions/use-passive-state.js";
export type { PersistentStates } from "./preact-extensions/use-persistent-state.js";
export type {} from "./preact-extensions/use-props-on-children.js";
export type { OnParamValueChanged, SearchParamStates, SetParamWithHistory, UseSearchParamStateParameters } from "./preact-extensions/use-search-param-state.js";
export type {} from "./preact-extensions/use-stable-callback.js";
export type {} from "./preact-extensions/use-stable-getter.js";
export type {} from "./preact-extensions/use-state.js";
export type {} from "./preact-extensions/use-what-caused-render.js";
export type { UseAnimationFrameParameters } from "./timing/use-animation-frame.js";
export type { UseIntervalParameters } from "./timing/use-interval.js";
export type { UseTimeoutParameters } from "./timing/use-timeout.js";
export type {} from "./util/assert.js";
export type { EnhancedEventHandler, TargetedEnhancedEvent } from "./util/event.js";
export type {} from "./util/focus.js";
export type {} from "./util/random-id.js";
export type {} from "./util/stack.js";
export type {} from "./util/use-call-count.js";
export { EventMapping, Fragment, cloneElement, createContext, createElement, createPortal, debounceRendering, forwardRef, memo, onfocusin, onfocusout, useBeforeLayoutEffect, useCallback, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useState as useStateBasic } from "./util/lib.js";
export type { CSSProperties, CompositionEventType, DragEventType, EffectCallback, ElementProps, EventType, ExtendMerge, FocusEventType, Inputs, JSX, KeyboardEventType, MouseEventType, MutableRef, Nullable, OmitStrong, PointerEventType, Reducer, Ref, RefCallback, RenderableProps, StateUpdater, TargetedOmit, TargetedPick, TouchEventType, VNode } from "./util/lib.js";
//# sourceMappingURL=index.d.ts.map