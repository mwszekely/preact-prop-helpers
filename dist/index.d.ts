/**
 * # Preact Prop Helpers
 *
 * A small set of hooks related to modifying HTML attributes to do useful things, but also a number of other tricks and tools that I have found to be extremely useful when building UIs with Preact
 *
 * Everything from keyboard navigation to modal traps to `localStorage` state management is here and heavily dog-fooded.
 *
 * The name (Preact Prop Helpers) came because most of these hooks require modifying the props that were going to be passed to an element (generally just the `ref` on those props, but often other attributes too, like `tabIndex` and such).  It's since grown in scope to include a bunch of general helper hooks as well (like `useAsync` and `useStableCallback`).
 *
 * ## List of hooks (in rough order of priority)
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
 * {@include } {@link useManagedChildren}
 * {@tableOfContents header Less common but still useful}
 * {@tableOfContents subheader These hooks are useful, but in more specific circumstances}
 * {@include } {@link useRandomId}
 * {@include } {@link useRandomDualIds}
 * {@include } {@link useHasCurrentFocus}
 * {@include } {@link useHasLastFocus}
 * {@include } {@link useChildrenHaveFocus}
 * {@include } {@link useHideScroll}
 * {@include } {@link useGlobalHandler}
 * {@include } {@link useDocumentClass}
 * {@include } {@link useElementSize}
 * {@tableOfContents header Niche}
 * {@include } {@link useMediaQuery}
 * {@include } {@link useAsyncEffect}
 * {@include } {@link useMutationObserver}
 * {@include } {@link useImperativeProps}
 * {@include } {@link useTextContent}
 * {@include } {@link usePortalChildren}
 * {@include } {@link useActiveElement}
 * {@include } {@link useDraggable}
 * {@include } {@link useDroppable}
 * {@include } {@link useLogicalDirection}
 * {@tableOfContents header Extensions}
 * {@tableOfContents subheader These hooks don't do anything with HTML elements but are useful extensions to Preact's built-in hooks}
 * {@include } {@link useForceUpdate}
 * {@include } {@link useState}
 * {@include } {@link usePassiveState}
 * {@include } {@link usePersistentState}
 * {@include } {@link useSearchParamState}
 * {@include } {@link useStableGetter}
 * {@include } {@link useStableCallback}
 * {@include } {@link useMemoObject}
 * {@include } {@link useAnimationFrame}
 * {@include } {@link useInterval}
 * {@include } {@link useTimeout}
 * {@include } {@link useEffectDebug}
 * {@include } {@link useLayoutEffectDebug}
 * {@include } {@link useTimeout}
 * {@tableOfContents header Helpers for list navigation (and others)}
 * {@tableOfContents subheader These hooks are primarily used to build larger hooks, but can be used alone}
 * {@include } {@link useListNavigation}
 * {@include } {@link useGridNavigation}
 * {@include } {@link useRovingTabIndex}
 * {@include } {@link useLinearNavigation}
 * {@include } {@link useTypeaheadNavigation}
 * {@include } {@link useSingleSelection}
 * {@include } {@link useRearrangeableChildren}
 * {@include } {@link usePaginatedChildren}
 * {@include } {@link useStaggeredChildren}
 * {@include } {@link useAsync}
 * {@include } {@link useUrl}
 * {@include } {@link useMergedRefs}
 * {@include } {@link useMergedClasses}
 * {@include } {@link useMergedChildren}
 * {@include } {@link useMergedStyles}
 * {@tableOfContents end}
 *
 * @packageDocumentation
 */
export { GridChildCellInfo, GridChildRowInfo, TabbableColumnInfo, UseGridNavigationCellContext, UseGridNavigationCellContextSelf, UseGridNavigationCellParameters, UseGridNavigationCellParametersSelf, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationParametersSelf, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowContextSelf, UseGridNavigationRowParameters, UseGridNavigationRowReturnType, useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./component-detail/keyboard-navigation/use-grid-navigation-partial.js";
export { GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, UseGridNavigationSingleSelectionSortableCellParameters, UseGridNavigationSingleSelectionSortableCellReturnType, UseGridNavigationSingleSelectionSortableParameters, UseGridNavigationSingleSelectionSortableReturnType, UseGridNavigationSingleSelectionSortableRowParameters, UseGridNavigationSingleSelectionSortableRowReturnType, useGridNavigationSingleSelectionSortable, useGridNavigationSingleSelectionSortableCell, useGridNavigationSingleSelectionSortableRow } from "./component-detail/keyboard-navigation/use-grid-navigation-single-selection-sortable.js";
export { GridSingleSelectChildCellInfo, GridSingleSelectChildRowInfo, UseGridNavigationCellSingleSelectionContext, UseGridNavigationRowSingleSelectionContext, UseGridNavigationSingleSelectionCellParameters, UseGridNavigationSingleSelectionCellReturnType, UseGridNavigationSingleSelectionParameters, UseGridNavigationSingleSelectionReturnType, UseGridNavigationSingleSelectionRowParameters, UseGridNavigationSingleSelectionRowReturnType, useGridNavigationSingleSelection, useGridNavigationSingleSelectionCell, useGridNavigationSingleSelectionRow } from "./component-detail/keyboard-navigation/use-grid-navigation-single-selection.js";
export { LinearNavigationResult, TryNavigateToIndexParameters, UseLinearNavigationChildInfo, UseLinearNavigationParameters, UseLinearNavigationParametersSelf, UseLinearNavigationReturnType, UseLinearNavigationReturnTypeSelf, tryNavigateToIndex, useLinearNavigation } from "./component-detail/keyboard-navigation/use-linear-navigation.js";
export { UseListNavigationChildInfo, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./component-detail/keyboard-navigation/use-list-navigation-partial.js";
export { UseListNavigationSingleSelectionSortableChildInfo, UseListNavigationSingleSelectionSortableChildParameters, UseListNavigationSingleSelectionSortableChildReturnType, UseListNavigationSingleSelectionSortableParameters, UseListNavigationSingleSelectionSortableReturnType, useListNavigationSingleSelectionSortable, useListNavigationSingleSelectionSortableChild } from "./component-detail/keyboard-navigation/use-list-navigation-single-selection-sortable.js";
export { UseListNavigationSingleSelectionChildContext, UseListNavigationSingleSelectionChildInfo, UseListNavigationSingleSelectionChildParameters, UseListNavigationSingleSelectionChildReturnType, UseListNavigationSingleSelectionParameters, UseListNavigationSingleSelectionReturnType, useListNavigationSingleSelection, useListNavigationSingleSelectionChild } from "./component-detail/keyboard-navigation/use-list-navigation-single-selection.js";
export { OnTabbableIndexChange, RovingTabIndexChildContext, RovingTabIndexChildContextSelf, SetTabbableIndex, UseRovingTabIndexChildInfo, UseRovingTabIndexChildInfoKeysParameters, UseRovingTabIndexChildInfoKeysReturnType, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnType, UseRovingTabIndexChildReturnTypeSelf, UseRovingTabIndexParameters, UseRovingTabIndexParametersSelf, UseRovingTabIndexReturnType, UseRovingTabIndexReturnTypeSelf, useRovingTabIndex, useRovingTabIndexChild } from "./component-detail/keyboard-navigation/use-roving-tabindex.js";
export { MakeSingleSelectionDeclarativeParameters, MakeSingleSelectionDeclarativeReturnType, SelectedIndexChangeEvent, SelectedIndexChangeHandler, SingleSelectionContextSelf, UseSingleSelectionChildInfo, UseSingleSelectionChildInfoParameterKeys, UseSingleSelectionChildInfoReturnKeys, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnType, UseSingleSelectionChildReturnTypeSelf, UseSingleSelectionContext, UseSingleSelectionDeclarativeParameters, UseSingleSelectionParameters, UseSingleSelectionParametersSelf, UseSingleSelectionReturnType, UseSingleSelectionReturnTypeSelf, useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative } from "./component-detail/keyboard-navigation/use-single-selection.js";
export { Compare, GetHighestChildIndex, GetIndex, GetValid, UseRearrangeableChildInfo, UseRearrangeableChildrenParameters, UseRearrangeableChildrenParametersSelf, UseRearrangeableChildrenReturnType, UseRearrangeableChildrenReturnTypeSelf, UseSortableChildInfo, UseSortableChildrenParameters, UseSortableChildrenParametersSelf, UseSortableChildrenReturnType, UseSortableChildrenReturnTypeSelf, defaultCompare, useRearrangeableChildren, useSortableChildren } from "./component-detail/keyboard-navigation/use-sortable-children.js";
export { UseTypeaheadNavigationChildInfo, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationChildReturnType, UseTypeaheadNavigationContext, UseTypeaheadNavigationContextSelf, UseTypeaheadNavigationParameters, UseTypeaheadNavigationParametersSelf, UseTypeaheadNavigationReturnType, UseTypeaheadNavigationReturnTypeSelf, binarySearch, useTypeaheadNavigation, useTypeaheadNavigationChild } from "./component-detail/keyboard-navigation/use-typeahead-navigation.js";
export { DismissListenerTypes, UseBackdropDismissParameters, UseDismissParameters, UseDismissReturnType, UseEscapeDismissParameters, UseLostFocusDismissParameters, UseLostFocusDismissReturnType, useBackdropDismiss, useDismiss, useEscapeDismiss, useLostFocusDismiss } from "./component-detail/use-dismiss.js";
export { UseFocusTrapParameters, UseFocusTrapReturnType, findFirstFocusable, findFirstTabbable, useFocusTrap } from "./component-detail/use-focus-trap.js";
export { UsePaginatedChildContext, UsePaginatedChildContextSelf, UsePaginatedChildParameters, UsePaginatedChildReturnType, UsePaginatedChildReturnTypeSelf, UsePaginatedChildrenInfo, UsePaginatedChildrenParameters, UsePaginatedChildrenParametersSelf, UsePaginatedChildrenReturnType, UsePaginatedChildrenReturnTypeSelf, usePaginatedChild, usePaginatedChildren } from "./component-detail/use-paginated-children.js";
export { UseStaggeredChildContext, UseStaggeredChildContextSelf, UseStaggeredChildParameters, UseStaggeredChildReturnType, UseStaggeredChildReturnTypeSelf, UseStaggeredChildrenInfo, UseStaggeredChildrenParameters, UseStaggeredChildrenParametersSelf, UseStaggeredChildrenReturnType, UseStaggeredChildrenReturnTypeSelf, useStaggeredChild, useStaggeredChildren } from "./component-detail/use-staggered-children.js";
export { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationCellParameters, UseCompleteGridNavigationCellReturnType, UseCompleteGridNavigationDeclarativeParameters, UseCompleteGridNavigationDeclarativeReturnType, UseCompleteGridNavigationParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowParameters, UseCompleteGridNavigationRowReturnType, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow } from "./component-use/use-grid-navigation-complete.js";
export { CompleteListNavigationContext, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildParameters, UseCompleteListNavigationChildReturnType, UseCompleteListNavigationDeclarativeParameters, UseCompleteListNavigationDeclarativeReturnType, UseCompleteListNavigationParameters, UseCompleteListNavigationReturnType, useCompleteListNavigation, useCompleteListNavigationChild, useCompleteListNavigationDeclarative } from "./component-use/use-list-navigation-complete.js";
export { UseModalParameters, UseModalReturnType, useModal } from "./component-use/use-modal.js";
export { PressChangeEventReason, PressEventReason, UsePressParameters, UsePressReturnType, setPressVibrate, usePress } from "./component-use/use-press.js";
export { UseRandomDualIdsParameters, UseRandomDualIdsReturnType, useRandomDualIds } from "./component-use/use-random-dual-ids.js";
export { UseRandomIdParameters, UseRandomIdReturnType, useRandomId } from "./component-use/use-random-id.js";
export { AsyncHandler, UseAsyncHandlerParameters, UseAsyncHandlerReturnType, useAsyncHandler } from "./dom-helpers/use-async-handler.js";
export { getDocument, useDocumentClass } from "./dom-helpers/use-document-class.js";
export { UseDraggableParameters, UseDraggableReturnType, useDraggable } from "./dom-helpers/use-draggable.js";
export { DropFile, DropFileMetadata, DroppableFileError, UseDroppableParameters, UseDroppableReturnType, useDroppable } from "./dom-helpers/use-droppable.js";
export { useGlobalHandler } from "./dom-helpers/use-event-handler.js";
export { useHideScroll } from "./dom-helpers/use-hide-scroll.js";
export { DangerouslyAppendHTML, DangerouslySetInnerHTML, GetAttribute, GetClass, ImperativeElement, ImperativeElementProps, ImperativeHandle, SetAttribute, SetChildren, SetClass, SetEventHandler, SetStyle, UseImperativePropsParameters, useImperativeProps } from "./dom-helpers/use-imperative-props.js";
export { useMergedClasses } from "./dom-helpers/use-merged-classes.js";
export { enableLoggingPropConflicts, mergeFunctions, useMergedProps } from "./dom-helpers/use-merged-props.js";
export { useMergedRefs } from "./dom-helpers/use-merged-refs.js";
export { useMergedStyles } from "./dom-helpers/use-merged-styles.js";
export { PortalChildUpdater, PushPortalChild, RemovePortalChild, UpdatePortalChild, UsePortalChildrenParameters, UsePortalChildrenReturnType, usePortalChildren } from "./dom-helpers/use-portal-children.js";
export { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "./dom-helpers/use-ref-element.js";
export { UseTextContentParameters, UseTextContentReturnType, useTextContent } from "./dom-helpers/use-text-content.js";
export { UseActiveElementParameters, UseActiveElementReturnType, useActiveElement } from "./observers/use-active-element.js";
export { UseChildrenHaveFocusChildParameters, UseChildrenHaveFocusChildReturnType, UseChildrenHaveFocusContext, UseChildrenHaveFocusParameters, UseChildrenHaveFocusReturnType, useChildrenHaveFocus, useChildrenHaveFocusChild } from "./observers/use-children-have-focus.js";
export { ElementSize, UseElementSizeParameters, UseElementSizeReturnType, useElementSize } from "./observers/use-element-size.js";
export { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "./observers/use-has-current-focus.js";
export { UseHasLastFocusParameters, UseHasLastFocusReturnType, useHasLastFocus } from "./observers/use-has-last-focus.js";
export { LogicalDirectionInfo, LogicalElementSize, LogicalOrientation, PhysicalDirection, PhysicalOrientation, PhysicalSize, UseLogicalDirectionParameters, UseLogicalDirectionReturnType, useLogicalDirection } from "./observers/use-logical-direction.js";
export { UseMediaQueryReturnType, useMediaQuery } from "./observers/use-media-query.js";
export { UseMutationObserverParameters, useMutationObserver } from "./observers/use-mutation-observer.js";
export { useUrl } from "./observers/use-url.js";
export { useAsyncEffect } from "./preact-extensions/use-async-effect.js";
export { UseAsyncParameters, UseAsyncReturnType, useAsync } from "./preact-extensions/use-async.js";
export { useEffectDebug } from "./preact-extensions/use-effect-debug.js";
export { useForceUpdate } from "./preact-extensions/use-force-update.js";
export { useLayoutEffectDebug } from "./preact-extensions/use-layout-effect-debug.js";
export { ManagedChildInfo, ManagedChildren, OnAfterChildLayoutEffect, OnChildrenMountChange, UseChildrenFlagParameters, UseChildrenFlagReturnType, UseManagedChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenParameters, UseManagedChildrenReturnType, useChildrenFlag, useManagedChild, useManagedChildren } from "./preact-extensions/use-managed-children.js";
export { OnPassiveStateChange, PassiveStateUpdater, returnFalse, returnNull, returnTrue, returnUndefined, returnZero, runImmediately, useEnsureStability, usePassiveState } from "./preact-extensions/use-passive-state.js";
export { PersistentStates, getFromLocalStorage, storeToLocalStorage, usePersistentState } from "./preact-extensions/use-persistent-state.js";
export { OnParamValueChanged, SearchParamStates, SetParamWithHistory, UseSearchParamStateParameters, useSearchParamState, useSearchParamStateDeclarative } from "./preact-extensions/use-search-param-state.js";
export { useStableCallback } from "./preact-extensions/use-stable-callback.js";
export { useMemoObject, useStableGetter } from "./preact-extensions/use-stable-getter.js";
export { useState } from "./preact-extensions/use-state.js";
export { useWhatCausedRender } from "./preact-extensions/use-what-caused-render.js";
export { ProvideBatchedAnimationFrames, UseAnimationFrameParameters, useAnimationFrame } from "./timing/use-animation-frame.js";
export { UseIntervalParameters, useInterval } from "./timing/use-interval.js";
export { UseTimeoutParameters, useTimeout } from "./timing/use-timeout.js";
export { assertEmptyObject } from "./util/assert.js";
export { EnhancedEventHandler, EventDetail, TargetedEnhancedEvent, enhanceEvent } from "./util/event.js";
export { findBackupFocus, focus } from "./util/focus.js";
export { debounceRendering } from "./util/lib.js";
export { getBuildMode } from "./util/mode.js";
export { generateRandomId } from "./util/random-id.js";
export { generateStack, useStack } from "./util/stack.js";
export type { CSSProperties, CompositionEventType, ElementProps, EventType, ExtendMerge, FocusEventType, KeyboardEventType, MouseEventType, Nullable, OmitStrong, PointerEventType, Ref, RefCallback, RefObject, TouchEventType, VNode } from "./util/types.js";
export { hideCallCount, monitorCallCount } from "./util/use-call-count.js";
export * from "./util/temp.js";
//# sourceMappingURL=index.d.ts.map