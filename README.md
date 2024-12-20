<!-- 
These docs are auto-generated.
Changes made to this file will be overwritten.
Instead, edit the files in src/ and change the TSDoc comments.
-->

# Preact Prop Helpers

A set of small, compartmentalized hooks for Preact. The theme is modifying HTML attributes to do useful things, along with a few other boilerplate-y hooks that are just good to have around.

Everything from keyboard navigation (arrow keys, typeahead) to modal focus traps (dialogs and menus) to simple things like `useState` *but with localStorage!* are here.

[See below a more complete list of goals](#conventions-and-goals), but in general this library aims to be both performant (no unnecessary re-renders, no repeat calls to [`useRefElement`](#userefelement) or other super-common hooks) and impose few to no restrictions on what your rendered HTML must look like in order to achieve any given result.

Many of these hooks get really complicated, especially around grid navigation, but everything has been extremely carefully [typed](https://www.typescriptlang.org/) and named so that you can generally just use Intellisense to guide you through the whole process. Hook dependencies are managed by just swizzling their parameters and return types back and forth &mdash; [see the conventions section below for the naming rules that make it work](#conventions-and-goals).

As a full example:


```typescript
// Short, abbreviated version:
const { ...returnType } = useCompleteGridNavigationDeclarative({ ...params });

// Entirely complete, fully spelt-out version:
const allReturnInfo = useCompleteGridNavigationDeclarative<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>({
    // `useRovingTabIndex` is a separate hook that you could call with these same parameters:
    rovingTabIndexParameters: {
        // If true, the entire grid is removed from the tab order
        untabbable: false,
        // A function provided by you that is only called when no children are tabbable
        focusSelfParent: focus,
        // This can be used to track when the user navigates between rows for any reason
        onTabbableIndexChange: setTabbableRow,
    },
    // `useSingleSelection` is a separate hook that you could call with these parameters:
    typeaheadNavigationParameters: {
        // Determines how children are searched for (`Intl.Collator`)
        collator: null,
        // Whether typeahead behavior is disabled
        noTypeahead: false,
        // How long a period of no input is required before typeahead clears itself
        typeaheadTimeout: 1000,
        // This can be used to track when the user navigates between rows via typeahead
        onNavigateTypeahead: null
    },
    // (etc. etc.)
    linearNavigationParameters: {
        // Is navigating to the first/last row with Home/End disabled?
        disableHomeEndKeys: false,
        // What happens when you press Up on the first row?
        navigatePastStart: "wrap",
        // What happens when you press Down on the last row?
        navigatePastEnd: "wrap",
        // How far do Page Up/Down jump?
        pageNavigationSize: 0.1,
        // This can be used to track when the user navigates between rows with the arrow keys
        onNavigateLinear: null
    },
    singleSelectionParameters: {
        // When a child is selected, it is indicated with this ARIA attribute:
        singleSelectionAriaPropName: "aria-checked",
        // Are children selected when they are activated (e.g. clicked), or focused (e.g. tabbed to)?
        singleSelectionMode: "focus"
    },
    multiSelectionParameters: {
        // Single- and multi- selection are not exclusive, and when so should be indicated via different attributes.
        multiSelectionAriaPropName: "aria-selected",
        // singleSelectionMode but for multi-selection
        multiSelectionMode: "activation",
        // Callback when any child changes with information about % of children checked, etc.
        onSelectionChange: null
    },
    singleSelectionDeclarativeParameters: {
        // Which child is currently selected?
        singleSelectedIndex: selectedRow,
        // What happens when the user selects a child?
        onSingleSelectedIndexChange: (e) => setSelectedRow(e[EventDetail].selectedIndex)
    },
    gridNavigationParameters: {
        // This can be used by you to track which 0-indexed column is currently the one with focus.
        onTabbableColumnChange: setTabbableColumn
    },
    rearrangeableChildrenParameters: {
        // This must return a VNode's 0-based index from its props
        getIndex: useCallback<GetIndex>((a: VNode) => a.props.index, [])
    },
    sortableChildrenParameters: {
        // Controls how rows compare against each other
        compare: useCallback((rhs: CustomGridInfo, lhs: CustomGridInfo) => { return lhs.index - rhs.index }, [])
    },
    paginatedChildrenParameters: {
        // Controls the current pagination range
        paginationMin: null,
        paginationMax: null
    },
    staggeredChildrenParameters: {
        // Controls whether children appear staggered as CPU time permits
        staggered: false
    },
    refElementParameters: {}
});

// Those were the parameters, these are the return types:
const {
    // Spread these props to the HTMLElement that will implement this grid behavior
    props,
    // The child row will useContext this, so provide it to them.
    context,
    // This is what `useRovingTabIndex` returned; use it for whatever you need:
    rovingTabIndexReturn: {
        // Call to focus the grid, which focuses the current row, which focuses its current cell.
        focusSelf,
        // Returns the index of the row that is tabbable to
        getTabbableIndex,
        // Changes which row is currently tabbable
        setTabbableIndex
    },
    // This is what `useTypeaheadNavigation` returned; use it for whatever you need:
    typeaheadNavigationReturn: {
        // Returns the current value the user has typed for typeahead (cannot be used during render)
        getCurrentTypeahead,
        // Whether the user's typeahead is invalid/valid/nonexistent.
        typeaheadStatus
    },
    // (etc. etc.)
    singleSelectionReturn: {
        // Largely convenience only (since the caller likely already knows the selected index, but just in case)
        getSingleSelectedIndex,
    },
    multiSelectionReturn: {
        // Nothing, actually
    },
    rearrangeableChildrenReturn: {
        // You must call this hook on your array of children to implement the sorting behavior
        useRearrangedChildren,
        // Largely internal use only
        indexDemangler,
        // Largely internal use only
        indexMangler,
        // Largely internal use only, but if you implement a custom sorting algorithm, call this to finalize the rearrangement.
        rearrange,
        // Reverses all children
        reverse,
        // Shuffles all children
        shuffle
    },
    sortableChildrenReturn: {
        // A table header button would probably call this function to sort all the table rows.
        sort
    },
    linearNavigationReturn: { },
    managedChildrenReturn: {
        // Returns metadata about each row
        getChildren
    },
    paginatedChildrenReturn: {
        // Largely internal use only
        refreshPagination
    },
    staggeredChildrenReturn: {
        // When the staggering behavior is currently hiding one or more children, this is true.
        stillStaggering
    },
    childrenHaveFocusReturn: {
        // Returns true if any row in this grid is focused
        getAnyFocused
    },

} = allReturnInfo;

```


## A note on stability

Effects, like in `useEffect`, are great because they let a component say "let's also make some non-HTML changes". So we're all on the same page, an *effect* is *triggered* when one of its *dependencies* changes, as we all know.

Preact inherits the same issue of "effect *triggers* (the changes that cause the effect to run) and effect *dependencies* (the data and functions the effect needs to work) are interchangeable" [that React has](https://github.com/facebook/react/issues/14099) and [is working on](https://github.com/facebook/react/pull/25881), and a few of the hooks here are low-level enough that it sometimes starts to become important to distinguish whether a function/object is "stable" or not across renders.

An object/function that's "stable" doesn't change values when the component renders itself a second (or third, etc.) time:


```tsx
function ExampleComponent() {
  // Every time <ExampleComponent /> renders, `stableObject` is the same object as last time (e.g. with ===)
  let stableObject = useRef({}).current;
  // Every time <ExampleComponent /> renders, `unstableObject` is a new, unique object (e.g. !== the one from the last render)
  let unstableObject = ({ evenWith: "a stable value inside" });
}

```


All stability **requirements** (for parameters) and **guarantees** (for returned values) are documented. Just use `useCallback`, [`useStableCallback`](#usestablecallback), or [`useStableGetter`](#usestablegetter) as appropriate.

As another aside, for the same reasons as React, a stable callback from [`useStableCallback`](#usestablecallback) (or [`useStableGetter`](#usestablegetter)) [**cannot be called during render**](https://github.com/reactjs/rfcs/pull/220#issuecomment-1118055107). This is because a component may theoretically be called multiple times for a single render, so it's unknown *which* invocation of `useStableCallback` was the one that resulted in a render until that render finally settles. This prevents the problem of a component somewhere else being given the "wrong" value that it got mid-render.

## List of hooks (in rough order of usefulness)

### Common

These hooks are used extremely commonly or provide uncommonly useful behavior



* [`useMergedProps`](#usemergedprops): Given two sets of props, merges them and returns the result.

* [`useRefElement`](#userefelement): Access `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).

* [`usePress`](#usepress): Adds the necessary event handlers to create a "press"-like event for any element, whether it's a native &lt;button&gt; or regular &lt;div&gt;, and allows for a "long press" that can be used to, e.g., show a tooltip *instead* of activating a press.

* [`useCompleteListNavigation`](#usecompletelistnavigation): All the list-related hooks combined into one large hook that encapsulates everything.

* [`useCompleteGridNavigation`](#usecompletegridnavigation): Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.

* [`useModal`](#usemodal): Combines dismissal hooks and focus trap hooks into one. Use for dialogs, menus, etc. Anything that can be dismissed and might trap focus, basically.

* [`useAsyncHandler`](#useasynchandler): Given an asynchronous event handler, returns a synchronous one that works on the DOM, along with some other information related to the current state. Does not modify any props.
### Specific

Very useful in very specific cases



* [`useElementSize`](#useelementsize): Measures an element, allowing you to react to its changes in size.

* [`useHideScroll`](#usehidescroll): Allows for hiding the scroll bar of the root HTML element without shifting the layout of the page by adding a few pixels of padding to the root element if necessary.

* [`useMediaQuery`](#usemediaquery): Allows a component to use the boolean result of a media query as part of its render.

* [`useHasCurrentFocus`](#usehascurrentfocus): Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).

* [`useHasLastFocus`](#usehaslastfocus): Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.

* [`useChildrenHaveFocus`](#usechildrenhavefocus): Allows a composite component (such as a radio group or listbox) to listen for an "overall focusin/out" event; this hook lets you know when focus has moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.

* [`useRandomId`](#userandomid): Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).

* [`useRandomDualIds`](#userandomdualids): While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).

* [`useGlobalHandler`](#useglobalhandler): Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.

* [`useDocumentClass`](#usedocumentclass): Allows adding/removing a CSS class to the `window`, `document`, or other global `HTMLElement`.
### Niche

* [`useAsyncEffect`](#useasynceffect): Combines the semantics of `useAsync` and `useEffect`.

* [`useMutationObserver`](#usemutationobserver): Effectively just a wrapper around a `MutationObserver`.

* [`useTextContent`](#usetextcontent): Allows examining the rendered component's text content whenever it renders and reacting to changes.

* [`useImperativeProps`](#useimperativeprops): Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.

* [`usePortalChildren`](#useportalchildren): Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.

* [`useActiveElement`](#useactiveelement): Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus

* [`useDraggable`](#usedraggable): Allows an element to start a drag operation.

* [`useDroppable`](#usedroppable): Allows an element to start a drag operation.

* [`useLogicalDirection`](#uselogicaldirection): Inspects the element's style and determines the logical direction that text flows.
### Extensions

These hooks don't do anything with HTML elements but are useful extensions to Preact's built-in hooks



* [`useStableGetter`](#usestablegetter): Given an input value, returns a constant getter function that can be used inside of `useEffect` and friends without including it in the dependency array.

* [`useStableCallback`](#usestablecallback): Alternate useCallback() which always returns the same (wrapped) function reference so that it can be excluded from the dependency arrays of `useEffect` and friends.

* [`useMemoObject`](#usememoobject): Like useMemo, but checks objects (shallowly)

* [`useForceUpdate`](#useforceupdate): Returns a function that will, when called, force the component that uses this hook to re-render itself.

* [`useState`](#usestate): Slightly enhanced version of `useState` that includes a getter that remains constant (i.e. you can use it in `useEffect` and friends without it being a dependency).

* [`usePassiveState`](#usepassivestate): Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).

* [`usePersistentState`](#usepersistentstate): 

* [`useSearchParamState`](#usesearchparamstate): Provides access to the requested Search Param's value

* [`useTimeout`](#usetimeout): Runs a function the specified number of milliseconds after the component renders.

* [`useInterval`](#useinterval): Runs a function every time the specified number of milliseconds elapses while the component is mounted.

* [`useAnimationFrame`](#useanimationframe): The callback you provide will start running every frame after the component mounts.

* [`useEffectDebug`](#useeffectdebug): Wrap the native `useEffect` to add arguments that allow accessing the previous value as the first argument, as well as the changes that caused the hook to be called as the second argument.

* [`useLayoutEffectDebug`](#uselayouteffectdebug): Wrap the native `useLayoutEffect` to add arguments that allow accessing the previous value as the first argument, as well as the changes that caused the hook to be called as the second argument.
### Building blocks and other helpers

These hooks are primarily used to build larger hooks, but can be used alone



* [`useManagedChildren`](#usemanagedchildren): Allows a parent component to access information about certain child components once they have rendered.

* [`useListNavigation`](#uselistnavigation): Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.

* [`useGridNavigation`](#usegridnavigation): Implements 2-dimensional grid-based keyboard navigation, similarly to [useListNavigation](#uselistnavigation).

* [`useRovingTabIndex`](#userovingtabindex): Implements a roving tabindex system where only one "focusable" component in a set is able to receive a tab focus.

* [`useLinearNavigation`](#uselinearnavigation): When used in tandem with `useRovingTabIndex`, allows control of the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.

* [`useTypeaheadNavigation`](#usetypeaheadnavigation): Allows for the selection of a managed child by typing the given text associated with it.

* [`useSelection`](#useselection): Allows the children of this component to be selected, either with a `singleSelectedIndex` prop on the parent, or via each child's individual `multiSelected` prop.

* [`useSingleSelection`](#usesingleselection): Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).

* [`useMultiSelection`](#usemultiselection): Allows a parent to track the changes made to multi-selection children.

* [`useRearrangeableChildren`](#userearrangeablechildren): Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.

`The member reference "useSortableChildren" was not found`

* [`usePaginatedChildren`](#usepaginatedchildren): Allows children to stop themselves from rendering outside of a narrow range.

* [`useStaggeredChildren`](#usestaggeredchildren): Allows children to each wait until the previous has finished rendering before itself rendering. E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.

* [`useDismiss`](#usedismiss): Combines all the methods a user can implicitly dismiss a popup component. See [useModal](#usemodal) for a hook that's ready-to-use for dialogs and menus.

* [`useBackdropDismiss`](#usebackdropdismiss): Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.

* [`useEscapeDismiss`](#useescapedismiss): Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)

* [`useLostFocusDismiss`](#uselostfocusdismiss): Invokes a callback when focus travels outside of the component's element.

* [`useFocusTrap`](#usefocustrap): Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.

* [`useAsync`](#useasync): Given an async function, returns a function that's suitable for non-async APIs, along with other information about the current run's status.

* [`useUrl`](#useurl): Allows you to inspect when the entire URL changes, either because the hash changed or because the Back/Forward browser buttons were pressed.

* [`useMergedRefs`](#usemergedrefs): Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.

* [`useMergedClasses`](#usemergedclasses): Merged the `class` and `className` properties of two sets of props into a single string.

* [`useMergedChildren`](#usemergedchildren): Combines two `children`.

* [`useMergedStyles`](#usemergedstyles): Merges two style objects, returning the result.
 ## Each hook, individually




### useMergedProps

Given two sets of props, merges them and returns the result.

**See also** [useMergedRefs](#usemergedrefs)
[useMergedStyles](#usemergedstyles)
[useMergedClasses](#usemergedclasses)
[useMergedChildren](#usemergedchildren)


|Parameter|Type|Description|
|---------|----|-----------|
|allProps|[`ElementProps`](#elementprops)`<E>[]`|A variadic number of props to merge into one|


**Returns** A single object with all the provided props merged into one.

The hook is aware of and can intelligently merge `className`, `class`, `style`, `ref`, `children`, and all event handlers.

If two sets of props both specify the same attribute, e.g. both specify two different `id`s, then an error will be printed to the console (customize this with [enableLoggingPropConflicts](#enableloggingpropconflicts)), as this conflict needs to be arbitrated on by you.

#### enableLoggingPropConflicts

When `useMergedProps` encounters a conflict, the function passed here will be called.


|Parameter|Type|Description|
|---------|----|-----------|
|log2|`typeof console["log"]`||


*Default*: `console.warn`


<hr />
<hr />



### useRefElement

Access `HTMLElement` rendered by this hook/these props, either as soon as it's available (as a callback), or whenever you need it (as a getter function).



#### UseRefElementParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.onElementChange?|`OnPassiveStateChange<T \| null, never>`|Called with the `Element` when it mounts, called with `null` when it unmounts.|Yes|
|.onMount?|`(element: T) => void`|Called when the element mounts|Yes|
|.onUnmount?|`(element: T) => void`|Called when the element unmounts|Yes|



#### UseRefElementReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getElement|`() => T \| null`|Returns the element that the props were rendered to, or `null` if they were not rendered to an element.|Yes|
|propsStable|HTML props|Spread these props onto the HTML element that will use this logic.|-|

This hook, like many others, works with either `useState` or [usePassiveState](#usepassivestate). Why use one over the other?

* `useState` is familiar and easy to use, but calling `setState` causes a re-render, which you might not need/want
* `usePassiveState` is faster and more scalable, but its state can't be accessed during render and it's more complex.


Suppose we want to call the `HTMLElement`'s `doSomethingFunny` method as soon as the element has been created:

**Easiest way to use (but setElement causes an extra re-render when it's called...)**


```typescript
const [element, setElement] = useState<HTMLButtonElement | null>(null);
const { propsStable } = useRefElement({ onElementChange: setElement });
useEffect(() => {
    element.doSomethingFunny();
}, [element])

```

**Fastest (but slightly more verbose)**


```typescript
// The code in useEffect is moved into this callback, but runs at the same time
const onElementChange = useCallback(element => element.doSomethingFunny(), []);
const [getElement, setElement] = usePassiveState<HTMLButtonElement | null>(onElementChange, returnNull);
const { propsStable } = useRefElement({ onElementChange: setElement });

```



<hr />
<hr />



### usePress

Adds the necessary event handlers to create a "press"-like event for any element, whether it's a native &lt;button&gt; or regular &lt;div&gt;, and allows for a "long press" that can be used to, e.g., show a tooltip *instead* of activating a press.



#### UsePressParameters

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.allowRepeatPresses?|`boolean`|If `true`, holding down the `Enter` key will repeatedly fire press events as each sequential repeated keyboard event happens.|-|
|.excludeEnter?|`() => boolean`|Pass a function that returns `true` to prevent the enter key from contributing to press events|No|
|.excludePointer?|`() => boolean`|Pass a function that returns `true` to prevent the pointer (mouse, touch, etc.) from contributing to press events|No|
|.excludeSpace?|`() => boolean`|Pass a function that returns `true` to prevent the spacebar from contributing to press events|No|
|.focusSelf|`(element?: E) => void`|Ensures that when a button is pressed it properly receives focus (even on iOS Safari).<br />Generally, this should just be `e => e.focus()`|No|
|.longPressThreshold?|`number`|After this number of milliseconds have passed pressing down but not up, the returned `longPress` value will be set to `true` and the user's actions will not fire an actual press event.|-|
|.onPressingChange?|`OnPassiveStateChange<boolean, PressChangeEventReason<E>>`||-|
|.onPressSync?|`((e: PressEventReason<E>) => void)`|What should happen when this widget has been "pressed".<br />This must be a sync event handler; async handlers must be taken care of externally.<br />Setting to `null` or `undefined` effectively disables the press event handler.|No|



#### UsePressReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getIsPressing|`() => boolean`||Yes|
|.longPress|`boolean \| null`|Similar to pseudoActive, but for if the button as been pressed down for a determined length of time.|-|
|.pressing|`boolean`|Sort of like when the CSS `:active` pseudo-element would apply, but specifically for presses only, so it's a more accurate reflection of what will happen for the user. Useful for styling mostly.|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

Notably, the following cases are covered:

* The target element is properly focused, even on iOS Safari (*especially* on iOS Safari)
* Double-clicks won't select text, it just presses the button twice.
* Text selection that happens to end/start with this element won't invoke a press.
* The `enter` key immediately invokes a press (by default just once until pressed again), while the `space` key invokes it when released, if focus hasn't moved away from the button.
* Haptic feedback (on, like, the one browser combination that supports it &mdash; this can be disabled app-wide with `setButtonVibrate`)


In addition, returns a "more accurate" CSS `active` and `hover`; more accurate in that `hover` won't mess up mobile devices that see `hover` and mess up your click events, and in that `active` accurately displays when a press would occur or not.

#### setPressVibrate

This function can be used to enable/disable button vibration pulses on an app-wide scale.


|Parameter|Type|Description|
|---------|----|-----------|
|func|`() => void`|The function to run when a button is tapped. (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)|


<hr />
<hr />



### useCompleteListNavigation

All the list-related hooks combined into one large hook that encapsulates everything.



#### UseCompleteListNavigationParameters

<small>`extends` [`UseRovingTabIndexParameters`](#userovingtabindexparameters), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseTypeaheadNavigationParameters`](#usetypeaheadnavigationparameters), [`UsePaginatedChildrenParameters`](#usepaginatedchildrenparameters), [`UseLinearNavigationParameters`](#uselinearnavigationparameters), [`UseSingleSelectionParameters`](#usesingleselectionparameters), [`UseMultiSelectionParameters`](#usemultiselectionparameters), [`UseRefElementParameters`](#userefelementparameters), [`UseProcessedIndexManglerParameters`](#useprocessedindexmanglerparameters), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseRefElementReturnType`](#userefelementreturntype), [`UseProcessedIndexManglerReturnType`](#useprocessedindexmanglerreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype)</small>

Every member of `UseCompleteListNavigationParameters` is inherited (see the interfaces it `extends` from).



#### UseCompleteListNavigationReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype), [`UseRearrangeableChildrenReturnType`](#userearrangeablechildrenreturntype), [`UseStaggeredChildrenReturnType`](#usestaggeredchildrenreturntype), [`UsePaginatedChildrenReturnType`](#usepaginatedchildrenreturntype), [`UseProcessedChildrenReturnType`](#useprocessedchildrenreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseTypeaheadNavigationReturnType`](#usetypeaheadnavigationreturntype), [`UseLinearNavigationReturnType`](#uselinearnavigationreturntype), [`UseListNavigationReturnType`](#uselistnavigationreturntype), [`UseSingleSelectionReturnType`](#usesingleselectionreturntype), [`UseMultiSelectionReturnType`](#usemultiselectionreturntype), [`UseSelectionReturnType`](#useselectionreturntype), [`UseListNavigationSelectionReturnType`](#uselistnavigationselectionreturntype), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseChildrenHaveFocusParameters`](#usechildrenhavefocusparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`CompleteListNavigationContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely, combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.



#### useCompleteListNavigationChild



##### UseCompleteListNavigationChildParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseCompleteListNavigationChildInfoKeysParameters`](#usecompletelistnavigationchildinfokeysparameters), [`UseListNavigationSelectionChildInfoKeysParameters`](#uselistnavigationselectionchildinfokeysparameters), [`UseRovingTabIndexChildInfoKeysParameters`](#userovingtabindexchildinfokeysparameters), [`UseTypeaheadNavigationChildInfoKeysParameters`](#usetypeaheadnavigationchildinfokeysparameters), [`UseSelectionChildInfoKeysParameters`](#useselectionchildinfokeysparameters), [`UseSingleSelectionChildInfoKeysParameters`](#usesingleselectionchildinfokeysparameters), [`UseSingleSelectionChildParameters`](#usesingleselectionchildparameters), [`UseMultiSelectionChildInfoKeysParameters`](#usemultiselectionchildinfokeysparameters), [`UseMultiSelectionChildParameters`](#usemultiselectionchildparameters), [`UseRefElementParameters`](#userefelementparameters), [`UseTextContentParameters`](#usetextcontentparameters), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UseRefElementReturnType`](#userefelementreturntype)</small>

Every member of `UseCompleteListNavigationChildParameters` is inherited (see the interfaces it `extends` from).



##### UseCompleteListNavigationChildReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseRovingTabIndexChildReturnType`](#userovingtabindexchildreturntype), [`UseListNavigationChildReturnType`](#uselistnavigationchildreturntype), [`UseSingleSelectionChildReturnType`](#usesingleselectionchildreturntype), [`UseMultiSelectionChildReturnType`](#usemultiselectionchildreturntype), [`UseListNavigationSelectionChildReturnType`](#uselistnavigationselectionchildreturntype), [`UseTextContentReturnType`](#usetextcontentreturntype), [`UseHasCurrentFocusReturnType`](#usehascurrentfocusreturntype), [`UseManagedChildReturnType`](#usemanagedchildreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UseTextContentParameters`](#usetextcontentparameters), [`UsePressParameters`](#usepressparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|propsChild|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsTabbable|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useCompleteGridNavigation

Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.



#### UseCompleteGridNavigationParameters

<small>`extends` [`UseRovingTabIndexParameters`](#userovingtabindexparameters), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseTypeaheadNavigationParameters`](#usetypeaheadnavigationparameters), [`UsePaginatedChildrenParameters`](#usepaginatedchildrenparameters), [`UseLinearNavigationParameters`](#uselinearnavigationparameters), [`UseGridNavigationParameters`](#usegridnavigationparameters), [`UseSingleSelectionParameters`](#usesingleselectionparameters), [`UseMultiSelectionParameters`](#usemultiselectionparameters), [`UseProcessedIndexManglerParameters`](#useprocessedindexmanglerparameters), [`UseRefElementParameters`](#userefelementparameters), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseRefElementReturnType`](#userefelementreturntype), [`UseProcessedIndexManglerReturnType`](#useprocessedindexmanglerreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.getSortColumn?|`() => (number \| undefined)`|If this grid is sorted by column, then this should return the index of the column that is currently being sorted by.<br />The value returned will be passed to `getSortValueAt`. If the grid you're using this for doesn't have a concept of a "sortable column", this can be entirely ignored.|-|
|.getSortValueAt|`(row?: number, column?: number \| undefined) => unknown`|Should return a value that works with `rearrangeableChildrenParameters.compare` (or, by default, that works with the minus operator).<br />The `column` parameter will be whatever `getSortColumn` returns, or `undefined` if none was provided.|-|



#### UseCompleteGridNavigationReturnType

<small>`extends` [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseTypeaheadNavigationReturnType`](#usetypeaheadnavigationreturntype), [`UseLinearNavigationReturnType`](#uselinearnavigationreturntype), [`UseListNavigationReturnType`](#uselistnavigationreturntype), [`UseGridNavigationReturnType`](#usegridnavigationreturntype), [`UseSingleSelectionReturnType`](#usesingleselectionreturntype), [`UseMultiSelectionReturnType`](#usemultiselectionreturntype), [`UseSelectionReturnType`](#useselectionreturntype), [`UseGridNavigationSelectionReturnType`](#usegridnavigationselectionreturntype), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseRefElementReturnType`](#userefelementreturntype), [`UseRearrangeableChildrenReturnType`](#userearrangeablechildrenreturntype), [`UseStaggeredChildrenReturnType`](#usestaggeredchildrenreturntype), [`UsePaginatedChildrenReturnType`](#usepaginatedchildrenreturntype), [`UseProcessedChildrenReturnType`](#useprocessedchildrenreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseChildrenHaveFocusParameters`](#usechildrenhavefocusparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`CompleteGridNavigationRowContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|



#### useCompleteGridNavigationRow



##### UseCompleteGridNavigationRowParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseCompleteGridNavigationRowInfoKeysParameters`](#usecompletegridnavigationrowinfokeysparameters), [`UseGridNavigationSelectionRowInfoKeysParameters`](#usegridnavigationselectionrowinfokeysparameters), [`UseGridNavigationRowInfoKeysParameters`](#usegridnavigationrowinfokeysparameters), [`UseRovingTabIndexChildInfoKeysParameters`](#userovingtabindexchildinfokeysparameters), [`UseTypeaheadNavigationChildInfoKeysParameters`](#usetypeaheadnavigationchildinfokeysparameters), [`UseRovingTabIndexParameters`](#userovingtabindexparameters), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseTypeaheadNavigationParameters`](#usetypeaheadnavigationparameters), [`UsePaginatedChildrenParameters`](#usepaginatedchildrenparameters), [`UseLinearNavigationParameters`](#uselinearnavigationparameters), [`UseSelectionChildInfoKeysParameters`](#useselectionchildinfokeysparameters), [`UseSingleSelectionChildInfoKeysParameters`](#usesingleselectionchildinfokeysparameters), [`UseSingleSelectionChildParameters`](#usesingleselectionchildparameters), [`UseMultiSelectionChildInfoKeysParameters`](#usemultiselectionchildinfokeysparameters), [`UseMultiSelectionChildParameters`](#usemultiselectionchildparameters), [`UseGridNavigationSelectionRowParameters`](#usegridnavigationselectionrowparameters), [`UseTextContentParameters`](#usetextcontentparameters), [`UseRefElementParameters`](#userefelementparameters), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UseRefElementReturnType`](#userefelementreturntype), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseProcessedIndexManglerReturnType`](#useprocessedindexmanglerreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype)</small>

Every member of `UseCompleteGridNavigationRowParameters` is inherited (see the interfaces it `extends` from).



##### UseCompleteGridNavigationRowReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseRovingTabIndexChildReturnType`](#userovingtabindexchildreturntype), [`UseListNavigationChildReturnType`](#uselistnavigationchildreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseTypeaheadNavigationReturnType`](#usetypeaheadnavigationreturntype), [`UseLinearNavigationReturnType`](#uselinearnavigationreturntype), [`UseListNavigationReturnType`](#uselistnavigationreturntype), [`UseGridNavigationRowReturnType`](#usegridnavigationrowreturntype), [`UseSingleSelectionChildReturnType`](#usesingleselectionchildreturntype), [`UseMultiSelectionChildReturnType`](#usemultiselectionchildreturntype), [`UseGridNavigationSelectionRowReturnType`](#usegridnavigationselectionrowreturntype), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseHasCurrentFocusReturnType`](#usehascurrentfocusreturntype), [`UseTextContentReturnType`](#usetextcontentreturntype), [`UseManagedChildReturnType`](#usemanagedchildreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UseTextContentParameters`](#usetextcontentparameters), [`UsePressParameters`](#usepressparameters), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`CompleteGridNavigationCellContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|



#### useCompleteGridNavigationCell



##### UseCompleteGridNavigationCellParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseCompleteGridNavigationCellInfoKeysParameters`](#usecompletegridnavigationcellinfokeysparameters), [`UseTextContentParameters`](#usetextcontentparameters), [`UseGridNavigationSelectionCellInfoKeysParameters`](#usegridnavigationselectioncellinfokeysparameters), [`UseGridNavigationCellInfoKeysParameters`](#usegridnavigationcellinfokeysparameters), [`UseRovingTabIndexChildInfoKeysParameters`](#userovingtabindexchildinfokeysparameters), [`UseTypeaheadNavigationChildInfoKeysParameters`](#usetypeaheadnavigationchildinfokeysparameters), [`UseGridNavigationCellParameters`](#usegridnavigationcellparameters), [`UseGridNavigationSelectionCellParameters`](#usegridnavigationselectioncellparameters), [`UseRefElementReturnType`](#userefelementreturntype)</small>

Every member of `UseCompleteGridNavigationCellParameters` is inherited (see the interfaces it `extends` from).



##### UseCompleteGridNavigationCellReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseRovingTabIndexChildReturnType`](#userovingtabindexchildreturntype), [`UseListNavigationChildReturnType`](#uselistnavigationchildreturntype), [`UseGridNavigationCellReturnType`](#usegridnavigationcellreturntype), [`UseGridNavigationSelectionCellReturnType`](#usegridnavigationselectioncellreturntype), [`UseTextContentReturnType`](#usetextcontentreturntype), [`UseHasCurrentFocusReturnType`](#usehascurrentfocusreturntype), [`UseManagedChildReturnType`](#usemanagedchildreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UseTextContentParameters`](#usetextcontentparameters), [`UsePressParameters`](#usepressparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useModal

Combines dismissal hooks and focus trap hooks into one. Use for dialogs, menus, etc. Anything that can be dismissed and might trap focus, basically.



#### UseModalParameters

<small>`extends` [`UseEscapeDismissParameters`](#useescapedismissparameters), [`UseBackdropDismissParameters`](#usebackdropdismissparameters), [`UseLostFocusDismissParameters`](#uselostfocusdismissparameters), [`UseActiveElementParameters`](#useactiveelementparameters), [`UseDismissParameters`](#usedismissparameters), [`UseRefElementParameters`](#userefelementparameters), [`UseBlockingElementParameters`](#useblockingelementparameters), [`UseFocusTrapParameters`](#usefocustrapparameters), [`UseRefElementReturnType`](#userefelementreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.active|`boolean`|When `false`, all dismissal/focus trapping behavior is disabled. When `true`, they're allowed via their individual parameters.|-|



#### UseModalReturnType

<small>`extends` [`UseDismissReturnType`](#usedismissreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|propsFocusContainer|HTML props|Spread these props onto the HTML element that will use this logic.|-|

Another in the "complete" series, alongside list/grid navigation and dismissal itself.

TODO: The HTML &lt;dialog&gt; element is a thing now, and it can be modal or nonmodal, just like this hook. Hmm...


<hr />
<hr />



### useAsyncHandler

Given an asynchronous event handler, returns a synchronous one that works on the DOM, along with some other information related to the current state. Does not modify any props.

**See also** useAsync A more general version of this hook that can work with any type of handler, not just DOM event handlers.


|Parameter|Type|Description|
|---------|----|-----------|
|{ asyncHandler, capture: originalCapture, ...restAsyncOptions }|[`UseAsyncHandlerParameters`](#useasynchandlerparameters)`<EventType, CaptureType>`||


Note that because the handler you provide may be called with a delay, and because the `value` of, e.g., an `<input>` element will likely have changed by the time the delay is over, a `capture` function is necessary in order to save the relevant information from the DOM at call-time. Any other simple event data, like `mouseX` or `shiftKey` can stay on the event itself and don't need to be captured &ndash; it's never stale.

The handler is automatically throttled to only run one at a time. If the handler is called, and then before it finishes, is called again, it will be put on hold until the current one finishes, at which point the second one will run. If the handler is called a third time before the first has finished, it will *replace* the second, so only the most recently called iteration of the handler will run.

You may optionally *also* specify debounce and throttle parameters that wait until the synchronous handler has not been called for the specified number of milliseconds, at which point we *actually* run the asynchronous handler according to the logic in the previous paragraph. This is in *addition* to throttling the handler, and does not replace that behavior.

**General use**


```tsx
const asyncHandler = async (value: number, e: Event) => {
    [...] // Ex. send to a server and setState when done
};
const {
    // A sync version of asyncHandler
    syncHandler,
    // True while the handler is running
    pending,
    // The error thrown, if any
    error,
    // Show this value while the operation's pending
    currentCapture,
    // And others, see `UseAsyncHandlerReturnType`
    ...rest
} = useAsyncHandler<HTMLInputElement>()({
    asyncHandler,
    // Pass in the capture function that saves event data
    // from being stale.
    capture: e => {
        // `capture` can have side-effects because
        // it's called exactly once per invocation
        e.preventDefault();

        // Save this value so that it's never stale
        return e.currentTarget.valueAsNumber;
    }
});

const onInput = pending? null : syncHandler;

```

### UseAsyncHandlerParameters

<small>`extends` [`UseAsyncParameters`](#useasyncparameters)</small>

|Member|Type|Description|
|---------|----|-----------|
|asyncHandler?|`AsyncHandler<EventType, CaptureType>`|The function (either async or sync) that you want to convert to a regular, sync event handler.|
|capture|`(event: EventType) => CaptureType`|What transient information is captured by this event and presented as the first argument of the event handler?<br />The "capture" parameter answers this question. To implement a checkbox, for example, return `target.checked`.|


<hr />
<hr />



### useElementSize

Measures an element, allowing you to react to its changes in size.



#### UseElementSizeParameters

<small>`extends` [`UseRefElementParameters`](#userefelementparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.getObserveBox|`null \| (() => ResizeObserverOptions["box"])`|Passed as an argument to the created ResizeObserver.<br />**See also**: https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver/observe#parameters|Yes|
|.onSizeChange|`(sizeInfo?: ElementSize, prevSize?: ElementSize \| undefined, entries?: ResizeObserverEntry[] \| UIEvent) => void`|Called any time the browser detects a size change on the element. Does not need to be stable, so you can pass an anonymous function that only sets the values you use if you'd like.|Yes|



#### UseElementSizeReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getSize|`() => ElementSize \| null`||Yes|


<hr />
<hr />



### useHideScroll

Allows for hiding the scroll bar of the root HTML element without shifting the layout of the page by adding a few pixels of padding to the root element if necessary.


|Parameter|Type|Description|
|---------|----|-----------|
|hideScroll|`boolean`|Whether the scroll bar is hidden or not (i.e. `true` to hide the scroll bar, `false` to allow it to be visible)|



<hr />
<hr />



### useMediaQuery

Allows a component to use the boolean result of a media query as part of its render.


|Parameter|Type|Description|
|---------|----|-----------|
|query|`string \| null \| undefined`|Must be in parens, e.g. `(max-width: 600px)`|
|defaultGuess|`boolean`|Optional. If you pass the same value that's measured after rendering, no re-render will occur.|


**Returns** `UseMediaQueryReturnType`.

**Note the return type** is ***not*** a boolean; it is an object that contains a boolean and a stable getter.

Please note that there is a re-render penalty incurred by using this hook -- it will always cause any component that uses it to re-render one extra time on mount as it stores the result of the media query. This can be mitigated with the `defaultGuess` parameter -- if you guess correctly (`true`/`false`), then there's no penalty. Hooray.


<hr />
<hr />



### useHasCurrentFocus

Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).

**See also** [useHasLastFocus](#usehaslastfocus), in which even if the `body` is clicked it's not considered a loss in focus.



#### UseHasCurrentFocusParameters

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.onCurrentFocusedChanged?|`OnPassiveStateChange<boolean, FocusEventType<T> \| undefined>`|Whether the element itself currently has focus.<br />`prevFocused` is generally the opposite of `focused`, but on mount it's `undefined` while `focused` is probably false (both falsy)|Yes|
|.onCurrentFocusedInnerChanged?|`OnPassiveStateChange<boolean, FocusEventType<T> \| undefined>`|Like `onFocusedChanged`, but also *additionally* if any child elements are focused.<br />**See also**: this.onFocusedChanged|Yes|



#### UseHasCurrentFocusReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getCurrentFocused|`() => boolean`||Yes|
|.getCurrentFocusedInner|`() => boolean`||Yes|
|.propsStable|`ElementProps<E>`||-|


<hr />
<hr />



### useHasLastFocus

Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.

**See also** [useHasCurrentFocus](#usehascurrentfocus), where clicking the `body` is considered losing focus.



#### UseHasLastFocusParameters

<small>`extends` [`UseActiveElementParameters`](#useactiveelementparameters), [`UseRefElementReturnType`](#userefelementreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.onLastFocusedChanged?|`OnPassiveStateChange<boolean, UIEvent \| undefined>`|Similar to `onFocusedChanged`, but if there is no currently focused element, is `true` if this element that *did* have focus last.<br />This is always `true` while `focused` is `true`. If `focused` is `false`, this may be `true` or `false`.|Yes|
|.onLastFocusedInnerChanged?|`OnPassiveStateChange<boolean, UIEvent \| undefined>`|Combines the implications of `onFocusedChanged` and `onFocusedChanged`.|Yes|



#### UseHasLastFocusReturnType

<small>`extends` [`UseActiveElementReturnType`](#useactiveelementreturntype)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getLastFocused|`() => boolean`||Yes|
|.getLastFocusedInner|`() => boolean`||Yes|


<hr />
<hr />



### useChildrenHaveFocus

Allows a composite component (such as a radio group or listbox) to listen for an "overall focusin/out" event; this hook lets you know when focus has moved in/out of this grouping of children EVEN IF there is no actual parent DOM element.



#### UseChildrenHaveFocusParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.onCompositeFocusChange|`null \| OnPassiveStateChange<boolean, FocusEventType<T> \| undefined>`|Fires `true` once any of the children have become focused, and `false` once all of the children have become unfocused.|Yes|



#### UseChildrenHaveFocusReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getAnyFocused|`() => boolean`||Yes|
|context|`UseChildrenHaveFocusContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

I.E. you can use this without needing a parent `<div>` to listen for a `focusout` event.



#### useChildrenHaveFocusChild



##### UseChildrenHaveFocusChildParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|context|`UseChildrenHaveFocusContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseChildrenHaveFocusChildReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters)</small>

Every member of `UseChildrenHaveFocusChildReturnType` is inherited (see the interfaces it `extends` from).



<hr />
<hr />



### useRandomId

Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).



#### UseRandomIdParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.otherReferencerProp|`keyof ElementProps<any> \| null`|This is the prop on the **OTHER** element that will use our ID. E.G. The `input` calls `useRandomId` and passes `for` as `referencerProp`.|-|
|.prefix|`string`|While all IDs are unique, this can be used to more easily differentiate them.<br />If this is stable, then your props are stable. Simple as that.|Yes|



#### UseRandomIdReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.id|`string`||-|
|propsReferencer|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsSource|HTML props|Spread these props onto the HTML element that will use this logic.|-|


<hr />
<hr />



### useRandomDualIds

While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).



#### UseRandomDualIdsParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|randomIdInputParameters|`UseRandomIdParameters["randomIdParameters"];`| |-|
|randomIdLabelParameters|`UseRandomIdParameters["randomIdParameters"];`| |-|



#### UseRandomDualIdsReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|randomIdInputReturn|`UseRandomIdReturnType<InputElement, LabelElement>["randomIdReturn"];`| |-|
|randomIdLabelReturn|`UseRandomIdReturnType<LabelElement, InputElement>["randomIdReturn"];`| |-|
|propsInput|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsLabel|HTML props|Spread these props onto the HTML element that will use this logic.|-|


<hr />
<hr />



### useGlobalHandler

Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.


|Parameter|Type|Description|
|---------|----|-----------|
|target|`T \| null \| undefined`|A *non-Preact* node to attach the event to.|
|type|`EventType`||
|handler|`null \| ((e: H) => void)`||
|options|`Parameters<TypedAddEventListener<T>>[2]`||
|mode|`"grouped" \| "single"`||


`"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`).

The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.


<hr />
<hr />



### useDocumentClass

Allows adding/removing a CSS class to the `window`, `document`, or other global `HTMLElement`.


|Parameter|Type|Description|
|---------|----|-----------|
|className|`P[0]`|The class (as a string) to be adding/removing|
|active|`boolean`|If `true`, the default, then the class is added to the element. If `false`, it's removed.|
|element|`HTMLElement`|The element to affect. By default, it's the root `<html>` element|



<hr />
<hr />



### useAsyncEffect

Combines the semantics of `useAsync` and `useEffect`.


|Parameter|Type|Description|
|---------|----|-----------|
|effect|`() => Promise<(void \| (() => void))>`||
|inputs|`I`||
|options|[`OmitStrong`](#omitstrong)`<`[`UseAsyncParameters`](#useasyncparameters)`<[void], [void]>, "capture">`||


**Returns** All values from `useAsync`, except for `syncHandler`.

More specifically, if an event would run again, but the previous async event is still running, then we'll wait until it finishes to run the new effect. And while waiting, further new effect runs will bump old ones off, only remembering the most recent request.


<hr />
<hr />



### useMutationObserver

Effectively just a wrapper around a `MutationObserver`.



#### UseMutationObserverParameters

<small>`extends` [`UseRefElementParameters`](#userefelementparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.attributeFilter|`string \| string[]`||-|
|.attributeOldValue|`boolean`||-|
|.characterDataOldValue|`boolean`||-|
|.onAttributes|`null \| ((info: {<br />        attributeName: string \| null;<br />        attributeNamespace: string \| null;<br />        oldValue?: string \| null;<br />    }) => void)`||-|
|.onCharacterData|`null \| ((info: MutationRecord) => void)`||-|
|.onChildList|`null \| ((info: {<br />        addedNodes: NodeList;<br />        removedNodes: NodeList;<br />    }) => void)`||-|
|.subtree|`boolean`||-|



#### UseMutationObserverReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype)</small>

Every member of `UseMutationObserverReturnType` is inherited (see the interface it `extends` from).


<hr />
<hr />



### useTextContent

Allows examining the rendered component's text content whenever it renders and reacting to changes.



#### UseTextContentParameters

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.getText|`(e?: E \| null) => string \| null`|Return the text content of this component. By default, `e => e.textContent` is probably what you want.<br />Reminder that `element.innerText` is heavy and causes layout calculations, but respects `display:none` and such. `element.textContent` is usually what you want if this is used many times across a page (like as part of a list item).|-|
|.onTextContentChange?|`OnPassiveStateChange<string \| null, never>`|During `useEffect`, this is called if the text content of the rendered element has changed.<br />**See also**: [useMutationObserver](#usemutationobserver) for a more robust implementation of this idea|-|



#### UseTextContentReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getTextContent|`() => string \| null`|Returns the last known value of the element's text content|-|


<hr />
<hr />



### useImperativeProps

Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.



#### UseImperativePropsParameters

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype)</small>

Every member of `UseImperativePropsParameters` is inherited (see the interface it `extends` from).



#### UseImperativePropsReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.dangerouslyAppendHTML|`(html?: string) => Element`|Evaluates the given HTML and appends it to the current children and the current props.|Yes|
|.dangerouslySetInnerHTML|`(html?: string) => void`|Sets the element's `innerHTML` and `props.dangerouslySetInnerHTML.__html`|Yes|
|.getAttribute|`(prop?: K) => ElementProps<T>[K]`|Returns the current value of the attribute on the element|Yes|
|.hasClass|`(cls?: string) => boolean`|Returns whether the element currently has the current CSS class|Yes|
|.setAttribute|`(prop?: K, value?: ElementProps<T>[K] \| null) => void`|Applies the given attribute to the element and its props|Yes|
|.setChildren|`(children?: string \| null) => void`|Sets the element's `textContent` and `props.children`|Yes|
|.setClass|`(cls?: string, enabled?: boolean) => void`|Applies or removes the given CSS class to the element and its props|Yes|
|.setEventHandler|`(type?: K, listener?: null \| ((this: HTMLElement, ev: HTMLElementEventMap[K]) => void), options?: AddEventListenerOptions) => void`|Applies the given event handler to the element and its props|Yes|
|.setStyle|`(prop?: K, value?: CSSProperties[K] \| null) => void`|Applies the given CSS style to the element and its props|Yes|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question.

This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.


<hr />
<hr />



### usePortalChildren

Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.


|Parameter|Type|Description|
|---------|----|-----------|
|{ target }|[`UsePortalChildrenParameters`](#useportalchildrenparameters)||


Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)

TODO: Can't push a child until after the very first `useLayoutEffect`

#### UsePortalChildrenParameters



|Member|Type|Description|
|---------|----|-----------|
|target|`string \| Element \| null`|The element that will contain the portal's children, or the string of its `id`.|


<hr />
<hr />



### useActiveElement

Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus



#### UseActiveElementParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.getDocument|`() => Document`|This must be a function that returns the document associated with whatever elements we're listening to.<br />E.G. someDivElement.ownerDocument|Yes|
|.onActiveElementChange?|`OnPassiveStateChange<Element \| null, FocusEvent>`|Called any time the active element changes.|Yes|
|.onLastActiveElementChange?|`OnPassiveStateChange<Element, FocusEvent>`|Called any time the active element changes and is not null.|Yes|
|.onWindowFocusedChange?|`OnPassiveStateChange<boolean, FocusEvent>`|Called any time the window gains/loses focus.|Yes|



#### UseActiveElementReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getActiveElement|`() => Element \| null`|Returns whatever element is currently focused, or `null` if there's no focused element|Yes|
|.getLastActiveElement|`() => Element`|Returns whatever element is currently focused, or whatever element was most recently focused if there's no focused element|Yes|
|.getWindowFocused|`() => boolean`|Returns if the window itself has focus or not|Yes|

The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes

This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes.

If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.


<hr />
<hr />



### useDraggable

Allows an element to start a drag operation.


|Parameter|Type|Description|
|---------|----|-----------|
|{ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }|[`UseDraggableParameters`](#usedraggableparameters)||


#### UseDraggableParameters



|Member|Type|Description|
|---------|----|-----------|
|data|`{<br />        [mimeType: string]: string;<br />    }`|Represents a dictionary mapping of MIME types to data|
|dragImage?|`HTMLCanvasElement \| HTMLImageElement \| HTMLVideoElement`|Can be used to specify a custom drag image instead of the browser default (a transparent render of the original element, generally)|
|dragImageXOffset?|`number`||
|dragImageYOffset?|`number`||
|effectAllowed?|`DataTransfer["effectAllowed"]`|Maps to the Drag and Drop API -- allows limiting the areas this element can be dropped. For example, setting this to "copyLink" will allow this this to be dropped onto a droppable with an effect of "copy" or "link", but not "move".| 

 

#### UseDraggableReturnType



|Member|Type|Description|
|---------|----|-----------|
|dragging|`boolean`|Returns true if the element in question is currently being dragged|
|getDragging|`() => boolean`||
|getLastDropEffect|`() => (DataTransfer["dropEffect"] \| null)`||
|lastDropEffect|`DataTransfer["dropEffect"] \| null`|Once the drag ends, if it was over a valid droppable, this will be set to the `dropEffect` value it had.<br />This can be used to detect when the element has dropped, and then what should be done with it (generally deleted if the effect was "move")|
|propsUnstable|`ElementProps<E>`|*Unstable*|


<hr />
<hr />



### useDroppable

Allows an element to start a drag operation.


|Parameter|Type|Description|
|---------|----|-----------|
|{ effect }|[`UseDroppableParameters`](#usedroppableparameters)||


#### UseDroppableParameters



|Member|Type|Description|
|---------|----|-----------|
|effect|`DataTransfer["dropEffect"] \| undefined`|Maps to the Drag and Drop API -- effectively means "as close as possible, what's happening to the data when I drop it here? Am I copying it and leaving the original, am I moving it and deleting the original, or am I linking it to the original?"<br />Whatever is being dragged over this will have its own permission that's checked against this.| 

 

#### UseDroppableReturnType



|Member|Type|Description|
|---------|----|-----------|
|dropError|`unknown`||
|droppedFiles|`DropFile[] \| null`|When files are dropped over the element, their data will be given here. This will update as new drops happen.|
|droppedStrings|`{<br />        [MimeType: string]: string;<br />    } \| null`|When non-file data is dropped over the element, their data will be given here. This will update as new drops happen.|
|filesForConsideration|`DropFileMetadata[] \| null`|While something is being dragged over this element, this will contain any information about any files included in that drop. Otherwise, it'll be null, meaning nothing is being dragged over this element.|
|propsStable|`ElementProps<E>`|Hook for modifying the props you were going to pass to your drop target Element.<br />*Unstable*|
|stringsForConsideration|`Set<string> \| null`|While something is being dragged over this element, a list of available MIME types for the non-file data will be listed here. Otherwise, it'll be null, meaning nothing is being dragged over this element.|


<hr />
<hr />



### useLogicalDirection

Inspects the element's style and determines the logical direction that text flows.


|Parameter|Type|Description|
|---------|----|-----------|
|{ ...void1 }|[`UseLogicalDirectionParameters`](#uselogicaldirectionparameters)||


**Returns** An object containing the following functions: * `getLogicalDirection`: retrieves a `LogicalDirectionInfo` representing the current state of the element. (Function is constant between renders) * `convertElementSize`: When used in conjunction with `useElementSize`, allows you to retrieve the logical size of an element instead of the physical size. * `convertToLogicalOrientation`: Based on the current direction, converts "horizontal" or "vertical" to "inline" or "block". * `convertToPhysicalOrientation`: Based on the current direction, converts "inline" or "block" to "horizontal" or "vertical".

Certain CSS properties, like `block-size`, respect the current writing mode and text direction. But `transform`, `clip`, etc. don't.

This is provided so that CSS properties can consistently use those logical properties.

See https://drafts.csswg.org/css-writing-modes/#logical-to-physical

#### UseLogicalDirectionParameters



This interface is empty.


<hr />
<hr />



### useStableGetter

Given an input value, returns a constant getter function that can be used inside of `useEffect` and friends without including it in the dependency array.


|Parameter|Type|Description|
|---------|----|-----------|
|value|`T`||


This uses `options.diffed` in order to run before everything, even ref assignment. This means this getter is safe to use anywhere ***except the render phase***.


<hr />
<hr />



### useStableCallback

Alternate useCallback() which always returns the same (wrapped) function reference so that it can be excluded from the dependency arrays of `useEffect` and friends.


|Parameter|Type|Description|
|---------|----|-----------|
|fn|`NonNullable<T>`||
|noDeps|`[] \| null \| undefined`||


In general, just pass the function you want to be stable (but you can't use it during render, so be careful!). Alternatively, if you need a stable callback that **can** be used during render, pass an empty dependency array and it'll act like `useCallback` with an empty dependency array, but with the associated stable typing. In this case, you ***must*** ensure that it truly has no dependencies/only stable dependencies!!


<hr />
<hr />



### useMemoObject

Like useMemo, but checks objects (shallowly)


|Parameter|Type|Description|
|---------|----|-----------|
|t|`T`||


**Returns** 


<hr />
<hr />



### useForceUpdate

Returns a function that will, when called, force the component that uses this hook to re-render itself.


|Parameter|Type|Description|
|---------|----|-----------|



It's a bit smelly, so best to use sparingly.


<hr />
<hr />



### useState

Slightly enhanced version of `useState` that includes a getter that remains constant (i.e. you can use it in `useEffect` and friends without it being a dependency).


|Parameter|Type|Description|
|---------|----|-----------|
|initialState|`T \| (() => T)`|Same as the built-in `setState`'s|


If `getBuildMode()` returns `"development"`, then any calls to `setState` will also take the stack at the time the hook was called and save it to `window._setState_stack`. Useful if you want to trace whose state is being updated.


<hr />
<hr />



### usePassiveState

Similar to `useState`, but for values that aren't "render-important" &ndash; updates don't cause a re-render and so the value shouldn't be used during render (though it certainly can, at least by re-rendering again).


|Parameter|Type|Description|
|---------|----|-----------|
|onChange|[`Nullable`](#nullable)`<`[`OnPassiveStateChange`](#onpassivestatechange)`<T, R>>`|The "effect" function to run when the value changes. Effectively the same as `useEffect`'s "effect" function. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.|
|getInitialValue|`() => T`|If provided, the effect will be invoked once with this value on mount. MUST BE STABLE, either because it has no dependencies, or because it's from useStableCallback, but this will mean you cannot use getState or setState during render.|
|{ debounceRendering: customDebounceRendering, skipMountInitialization }|`Partial<UsePassiveStateOptions>`||


**Returns** 

To compensate for this, you should pass a `useEffect`-esque callback that is run whenever the value changes. Just like `useEffect`, this callback can return a cleanup function that's run before the value changes. If you would like to re-render when the value changes (or, say, when the value meets some criteria), this is where you'll want to put in a call to a `setState` function.

To summarize, it's like a `useState`-`useEffect` mashup:

1. It's like `useState`, except this version of `setState` doesn't re-render the whole component 2. It's like `useState`, except you can run a function when the value changes that optionally returns a cleanup function 3. It's like `useEffect`, except you trigger the effect function "remotely" instead of it running after rendering 4. It's like `useEffect`, except the single "dependency" is based on your calls to `setState`

Note that while calling `setState` doesn't cause any re-renders, you can do that within your `onChange` function, called whenever the value changes via that `setState`.

#### OnPassiveStateChange

```typescript
export type OnPassiveStateChange<S, R> = ((value: S, prevValue: S | undefined, reason?: R | undefined) => (void | (() => void)));
```


<hr />
<hr />



### usePersistentState


|Parameter|Type|Description|
|---------|----|-----------|
|key|`Key \| null`||
|initialValue|`T`||
|fromString|`((value: string) => T)`||
|toString|`((value: T) => string)`||
|storage|`Storage`||


**Returns** 

Use module augmentation to get the correct types for this function.


```typescript
declare module 'preact-prop-helpers' {
    interface PersistentStates {
        numberState: number;
        stringState: string;
    }
}

```



<hr />
<hr />



### useSearchParamState

Provides access to the requested Search Param's value


|Parameter|Type|Description|
|---------|----|-----------|
|{ key: paramKey, defaultReason, stringToValue, initialValue, onValueChange, valueToString }|[`UseSearchParamStateParameters`](#usesearchparamstateparameters)`<Key, `[`SearchParamStates`](#searchparamstates)`[Key]>`||


Note that while this function is like usePassiveState (itself like useState and useEffect combined), the `setState` return function is, due to browser limitations, not synchronous, but that's like most calls to `setState` anyway I guess?

#### UseSearchParamStateParameters



|Member|Type|Description|
|---------|----|-----------|
|defaultReason?|`"push" \| "replace"`|How is the user's history modified when the state changes if not otherwise specified? "`replace`" is recommended unless you *really* have a good reason to clog up the back button.|
|initialValue|`T`|If there is no value in the URL for this state, then `initialValue` will be used instead.|
|key|`Key`||
|onValueChange?|`OnParamValueChanged<T> \| null \| undefined`||
|stringToValue|`((value: string \| null) => T \| null)`||
|valueToString?|`((value: T \| null) => (string \| null)) \| undefined`||

`The member reference "SearchParamStates" was ambiguous`


<hr />
<hr />



### useTimeout

Runs a function the specified number of milliseconds after the component renders.


|Parameter|Type|Description|
|---------|----|-----------|
|{ timeout, callback, triggerIndex }|[`UseTimeoutParameters`](#usetimeoutparameters)||


#### UseTimeoutParameters



|Member|Type|Description|
|---------|----|-----------|
|callback|`() => void`|Called `timeout` ms after mount, or the last change to `triggerIndex`.<br />Does *not* need to be stable. Go ahead and pass an anonymous function.|
|timeout?|`number`|The number of ms to wait before invoking `callback`. If `null`, cancels the timeout immediately.|
|triggerIndex?|`unknown`|Changes to this prop between renders can be used to clear the current timeout and create a new one.|


<hr />
<hr />



### useInterval

Runs a function every time the specified number of milliseconds elapses while the component is mounted.


|Parameter|Type|Description|
|---------|----|-----------|
|{ interval, callback, noRisingEdge }|[`UseIntervalParameters`](#useintervalparameters)||


#### UseIntervalParameters



|Member|Type|Description|
|---------|----|-----------|
|callback|`() => void`|Called `timeout` ms after mount, or the last change to `triggerIndex`.|
|interval?|`number`|The number of ms to wait before invoking `callback`.|
|noRisingEdge?|`boolean`|By default, the callback will be called as soon as interval is non-null, and then on every interval afterwards.<br />Set this to true to only call the callback after the first interval has passed.|


<hr />
<hr />



### useAnimationFrame

The callback you provide will start running every frame after the component mounts.


|Parameter|Type|Description|
|---------|----|-----------|
|{ callback }|[`UseAnimationFrameParameters`](#useanimationframeparameters)||


Passing `null` is fine and simply stops the effect until you restart it by providing a non-null callback; it doesn't need to be stable.

#### UseAnimationFrameParameters



|Member|Type|Description|
|---------|----|-----------|
|callback?|`((msSinceLast: number) => void)`|Callback with effectively the same rules as `requestAnimationFrame`<br />Doesn't need to be stable.|

#### ProvideBatchedAnimationFrames

When a bunch of unrelated components all use `requestAnimationFrame`, yes, this actually is faster. I wish it wasn't. It's lame.


|Parameter|Type|Description|
|---------|----|-----------|
|{ children }|`{<br />    children: `[`ElementProps`](#elementprops)`<EventTarget>["children"];<br />}`||


<hr />
<hr />



### useEffectDebug

Wrap the native `useEffect` to add arguments that allow accessing the previous value as the first argument, as well as the changes that caused the hook to be called as the second argument.


|Parameter|Type|Description|
|---------|----|-----------|
|effect|`(prev: I \| undefined, changes: EffectChange<I, number>[]) => (void \| (() => void))`|Same as the default|
|inputs|`I`|Same as the default|
|impl|`typeof useEffectNative`|You can choose whether to use `useEffect` or `useLayoutEffect` by passing one of them as this argument. By default, it's `useEffect`.|



<hr />
<hr />



### useLayoutEffectDebug

Wrap the native `useLayoutEffect` to add arguments that allow accessing the previous value as the first argument, as well as the changes that caused the hook to be called as the second argument.


|Parameter|Type|Description|
|---------|----|-----------|
|effect|`(prev: I \| undefined, changes: EffectChange<I, number>[]) => (void \| (() => void))`|Same as the built-in's|
|inputs|`I`|Same as the built-in's|



<hr />
<hr />



### useManagedChildren

Allows a parent component to access information about certain child components once they have rendered.



#### UseManagedChildrenParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.onAfterChildLayoutEffect?|`OnAfterChildLayoutEffect<M["index"]>`|Runs after one or more children have updated their information (index, etc.).<br />Only one will run per tick, just like layoutEffect, but it isn't *guaranteed* to have actually been a change.<br />TODO: This ended up not being needed by anything. Is it necessary? Does it cost anything?|Yes|
|.onChildrenCountChange?|`((count: number) => void)`||Yes|
|.onChildrenMountChange?|`OnChildrenMountChange<M["index"]>`|Same as the above, but only for mount/unmount (or when a child changes its index)|Yes|



#### UseManagedChildrenReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getChildren|`() => ManagedChildren<M>`|Note that **both** `getChildren` and the `ManagedChildren` object it returns are stable!<br />This is a getter instead of an object because when function calls happen out of order it's easier to just have always been passing and return getters everywhere|Yes|
|context|`UseManagedChildrenContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

This hook is designed to be lightweight, in that the parent keeps no state and runs no effects. Each child *does* run an effect, but with no state changes unless you explicitly request them.

#### ManagedChildren



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|forEach|`(f: (child: M) => void) => void \| "break"`|Executes a callback on every existing child.|Yes|
|getAt|`(index?: M["index"]) => M \| undefined`|Returns the `info` of the child at the specified index.<br />This is the same as what's passed to `useManagedChild`.|Yes|
|getHighestIndex|`() => number`|Returns the highest number corresponding to a child. Inclusive. It's `while (i <= highest)`.|Yes|
|getLowestIndex|`() => number`|Returns the lowest number corresponding to a child, often 0. Inclusive, but hopefully that wasn't in question.|Yes|



#### useManagedChild



##### UseManagedChildParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|context|`UseManagedChildrenContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|
|info|`M`|Data the child makes available to the parent. Passed to `useManagedChild`|-|



##### UseManagedChildReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getChildren|`() => ManagedChildren<M>`|Returns a proxy to all the information each child rendered with. The function, returned object, and every function within it are all stable.|Yes|



<hr />
<hr />



### useListNavigation

Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.



#### UseListNavigationParameters

<small>`extends` [`UseRovingTabIndexParameters`](#userovingtabindexparameters), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseTypeaheadNavigationParameters`](#usetypeaheadnavigationparameters), [`UsePaginatedChildrenParameters`](#usepaginatedchildrenparameters), [`UseLinearNavigationParameters`](#uselinearnavigationparameters), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseRefElementReturnType`](#userefelementreturntype), [`UseProcessedIndexManglerReturnType`](#useprocessedindexmanglerreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype)</small>

Every member of `UseListNavigationParameters` is inherited (see the interfaces it `extends` from).



#### UseListNavigationReturnType

<small>`extends` [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseTypeaheadNavigationReturnType`](#usetypeaheadnavigationreturntype), [`UseLinearNavigationReturnType`](#uselinearnavigationreturntype), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseListNavigationContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it. Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.



#### useListNavigationChild



##### UseListNavigationChildParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseRovingTabIndexChildInfoKeysParameters`](#userovingtabindexchildinfokeysparameters), [`UseTypeaheadNavigationChildInfoKeysParameters`](#usetypeaheadnavigationchildinfokeysparameters), [`UseRefElementReturnType`](#userefelementreturntype)</small>

Every member of `UseListNavigationChildParameters` is inherited (see the interfaces it `extends` from).



##### UseListNavigationChildReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseRovingTabIndexChildReturnType`](#userovingtabindexchildreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UseTextContentParameters`](#usetextcontentparameters), [`UsePressParameters`](#usepressparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|info|`Pick<UseListNavigationChildInfo<ChildElement>, UseListNavigationChildInfoKeysReturnType>`|Data the child makes available to the parent. Passed to `useManagedChild`|-|



<hr />
<hr />



### useGridNavigation

Implements 2-dimensional grid-based keyboard navigation, similarly to [useListNavigation](#uselistnavigation).



#### UseGridNavigationParameters

<small>`extends` [`UseRovingTabIndexParameters`](#userovingtabindexparameters), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseTypeaheadNavigationParameters`](#usetypeaheadnavigationparameters), [`UsePaginatedChildrenParameters`](#usepaginatedchildrenparameters), [`UseLinearNavigationParameters`](#uselinearnavigationparameters), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseRefElementReturnType`](#userefelementreturntype), [`UseProcessedIndexManglerReturnType`](#useprocessedindexmanglerreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.initiallyTabbableColumn|`number`|Which column of cells is initially tabbable the first time the user interacts with the control.|-|
|.onTabbableColumnChange?|`OnPassiveStateChange<TabbableColumnInfo, EventType<any, any> \| undefined>`|TODO: This may be called even when there is no actual change in the numeric values|Yes|



#### UseGridNavigationReturnType

<small>`extends` [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseTypeaheadNavigationReturnType`](#usetypeaheadnavigationreturntype), [`UseLinearNavigationReturnType`](#uselinearnavigationreturntype), [`UseListNavigationReturnType`](#uselistnavigationreturntype), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseGridNavigationRowContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

Due to the complexity of this hook, it is *highly* recommended to use [useCompleteGridNavigation](#usecompletegridnavigation) instead. But if you do need to it's designed to work well with intellisense -- just keep plugging the holes until the errors stop and that's 95% of it right there.

Some features and/or limitations of this hook:

* Like all other hooks (except sorting), the only DOM restriction is that the rows and cells are descendants of the grid as a whole **somewhere**.
* Rows are given priority over columns. Sorting/filtering happens by row, Page Up/Down, the Home/End keys, and typeahead affect the current row, etc.
* Cells can have a `colSpan` or be missing, and moving with the arrow keys will "remember" the correct column to be in as focus jumps around.




#### useGridNavigationRow

Child hook for [useGridNavigation](#usegridnavigation)

As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation. As such, this is one of the most complicated hooks here in terms of dependencies.



##### UseGridNavigationRowParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseGridNavigationRowInfoKeysParameters`](#usegridnavigationrowinfokeysparameters), [`UseRovingTabIndexChildInfoKeysParameters`](#userovingtabindexchildinfokeysparameters), [`UseTypeaheadNavigationChildInfoKeysParameters`](#usetypeaheadnavigationchildinfokeysparameters), [`UseRovingTabIndexParameters`](#userovingtabindexparameters), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseTypeaheadNavigationParameters`](#usetypeaheadnavigationparameters), [`UsePaginatedChildrenParameters`](#usepaginatedchildrenparameters), [`UseLinearNavigationParameters`](#uselinearnavigationparameters), [`UseRefElementReturnType`](#userefelementreturntype), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseProcessedIndexManglerReturnType`](#useprocessedindexmanglerreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype)</small>

Every member of `UseGridNavigationRowParameters` is inherited (see the interfaces it `extends` from).



##### UseGridNavigationRowReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseRovingTabIndexChildReturnType`](#userovingtabindexchildreturntype), [`UseListNavigationChildReturnType`](#uselistnavigationchildreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseTypeaheadNavigationReturnType`](#usetypeaheadnavigationreturntype), [`UseLinearNavigationReturnType`](#uselinearnavigationreturntype), [`UseListNavigationReturnType`](#uselistnavigationreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UseTextContentParameters`](#usetextcontentparameters), [`UsePressParameters`](#usepressparameters), [`UseManagedChildrenParameters`](#usemanagedchildrenparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseGridNavigationCellContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|info|`Pick<GridChildRowInfo<RowElement>, UseGridNavigationRowInfoKeysReturnType>`|Data the child makes available to the parent. Passed to `useManagedChild`|-|



#### useGridNavigationCell

Child hook for [useGridNavigationRow](#usegridnavigationrow) (and [useGridNavigation](#usegridnavigation)).



##### UseGridNavigationCellParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseGridNavigationCellInfoKeysParameters`](#usegridnavigationcellinfokeysparameters), [`UseRovingTabIndexChildInfoKeysParameters`](#userovingtabindexchildinfokeysparameters), [`UseTypeaheadNavigationChildInfoKeysParameters`](#usetypeaheadnavigationchildinfokeysparameters), [`UseRefElementReturnType`](#userefelementreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.colSpan?|`number`|How many columns this cell spans (all cells default to 1).<br />Any following cells should skip over the `index`es this one covered with its `colSpan`. E.G. if this cell is `index=5` and `colSpan=3`, the next cell would be `index=8`, **not** `index=6`|-|



##### UseGridNavigationCellReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseRovingTabIndexChildReturnType`](#userovingtabindexchildreturntype), [`UseListNavigationChildReturnType`](#uselistnavigationchildreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UseTextContentParameters`](#usetextcontentparameters), [`UsePressParameters`](#usepressparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|info|`Pick<GridChildCellInfo<CellElement>, UseGridNavigationCellInfoKeysReturnType>`|Data the child makes available to the parent. Passed to `useManagedChild`|-|



<hr />
<hr />



### useRovingTabIndex

Implements a roving tabindex system where only one "focusable" component in a set is able to receive a tab focus.



#### UseRovingTabIndexParameters

<small>`extends` [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseRefElementReturnType`](#userefelementreturntype), [`UseProcessedIndexManglerReturnType`](#useprocessedindexmanglerreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.focusSelfParent|`(e?: ParentElement \| null) => void`|When `untabbable` is true, instead of a child focusing itself, the parent will via this `focusSelf` argument.|-|
|.initiallyTabbedIndex?|`number`|This is imperative, not declarative; it is better if we can keep re-renders on the parent to a minimum anyway.<br />You can manually control this with `onTabbableIndexChange` and `setTabbableIndex` if you need.|-|
|.onTabbableIndexChange?|`OnPassiveStateChange<number \| null, EventType<any, any>>`|If you would like to have an event run whenever a new index becomes tabbable (e.g. to call `setState` to render that tabbable index...for some reason...) you can do that here.<br />**MUST** be stable!|-|
|.untabbable|`boolean`|When true, none of the children will be tabbable, as if the entire component is hidden.<br />This does not actually change the currently tabbable index; if this is set to `false`, the last tabbable child is remembered.|-|
|.untabbableBehavior|`"focus-parent" \| "leave-child-focused"`|When the parent is `untabbable` and a child gains focus via some means, we need to decide what to do.<br />Sometimes, it's better to just send focus back to the parent. Sometimes, it's better to just let the child be focused this one time (especially if focusing means that `untabbable` is going to change to `true`).<br />If `untabbable` is false, then this has no effect.|-|



#### UseRovingTabIndexReturnType

<small>`extends` [`UseManagedChildrenParameters`](#usemanagedchildrenparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.focusSelf|`(reason?: any) => void`|Call to focus the currently tabbable child, or, if we're `untabbable`, the component itself.|Yes|
|.getTabbableIndex|`() => number \| null`|Returns the index of the child that is currently tabbable.|Yes|
|.setTabbableIndex|`SetTabbableIndex`|Can be used to programmatically change which child is the currently tabbable one.<br />`fromUserInteraction` determines if this was a user-generated event that should focus the newly tabbable child, or a programmatic event that should leave the user's focus where the user currently is, because they didn't do that.|Yes|
|context|`RovingTabIndexChildContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

*Which* of those elements receives focus is determined by you, but it's recommended to offload that logic then to another hook, like `useLinearNavigation`, which lets you change the tabbable element with the arrow keys, `useTypeaheadNavigation`, which lets you change the tabbable index with typeahead, or `useListNavigation(Complete)` if you just want everything bundled together.



#### useRovingTabIndexChild

**See also** [useRovingTabIndex](#userovingtabindex)



##### UseRovingTabIndexChildParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseRovingTabIndexChildInfoKeysParameters`](#userovingtabindexchildinfokeysparameters), [`UseRefElementReturnType`](#userefelementreturntype)</small>

Every member of `UseRovingTabIndexChildParameters` is inherited (see the interfaces it `extends` from).



##### UseRovingTabIndexChildReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getTabbable|`() => boolean`||Yes|
|.tabbable|`boolean`|Whether this child, individually, is *the* currently tabbable child.|-|
|info|`Pick<UseRovingTabIndexChildInfo<ChildElement>, UseRovingTabIndexChildInfoKeysReturnType>`|Data the child makes available to the parent. Passed to `useManagedChild`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useLinearNavigation

When used in tandem with `useRovingTabIndex`, allows control of the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.

**See also** [useCompleteListNavigation](#usecompletelistnavigation), which packages everything up together.



#### UseLinearNavigationParameters

<small>`extends` [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UsePaginatedChildrenParameters`](#usepaginatedchildrenparameters), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseProcessedIndexManglerReturnType`](#useprocessedindexmanglerreturntype), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.arrowKeyDirection|`"horizontal" \| "vertical" \| "either" \| "none"`|Controls which arrow keys are used to navigate through the component.<br />Not relative to the writing mode -- these are the literal keys that need to be pressed.<br />Use `"either"` to allow navigation in either direction.<br />Use `"none"` to disallow navigation with the arrow keys in any direction.|-|
|.disableHomeEndKeys|`boolean`|If set to true, navigation with the home & end keys will be disabled, but navigation with the arrow keys will be unaffected.|-|
|.getHighestIndex|`() => number`|From `useManagedChildren`. This can be higher than the *actual* highest index if you need it to be.|Yes|
|.getLowestIndex|`() => number`|From `useManagedChildren`. This can be lower than the *actual* lowest index if you need it to be.<br />**See also**: [getLowestIndex](#getlowestindex)|Yes|
|.isValidForLinearNavigation|`(i?: number) => boolean`|Must return true if the child at this index can be navigated to, e.g. `(i) => !getChildren(i)?.hidden`.|Yes|
|.navigatePastEnd|`"passthrough" \| "wrap" \| (() => void)`|What happens when `down` is pressed on the last valid child?<br />**See also**: [navigatePastStart](#navigatepaststart)|-|
|.navigatePastStart|`"passthrough" \| "wrap" \| (() => void)`|What happens when `up` is pressed on the first valid child?<br />If it's `"wrap"`, the focus is sent down to the last child, and the event does not propagate. If it's a function, it's is called, and the event does not propagate. If it's `"passthrough"`, nothing happens, **and the event is allowed to propagate**.|-|
|.onNavigateLinear?|`(newIndex: number, event: KeyboardEventType<ChildElement>) => void`|Called when a navigation change as a result of an arrow/home/end/page up/page down key being pressed.|Yes|
|.pageNavigationSize?|`number`|Controls how many elements are skipped over when page up/down are pressed.<br />* When 0 or null: Page Up/Down are disabled
* When &gt;= 1: Page Up/Down moves that number of elements up or down
* When 0 &lt; x &lt; 1, Page Up/Down moves by that percentage of all elements, or of 100 elements, whichever is higher. In other words, 0.1 jumps by 10 elements when there are fewer then 100 elements, and 20 elements when there are 200 elements.
|-|



#### UseLinearNavigationReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|propsStable|HTML props|Spread these props onto the HTML element that will use this logic.|-|

There is no child version of this hook. That being said, the props returned are stable and work equally well on the child as the parent. If you don't have a parent `HTMLElement`, you can still pass the returned props to each child individually.


<hr />
<hr />



### useTypeaheadNavigation

Allows for the selection of a managed child by typing the given text associated with it.

**See also** useListNavigation, which packages everything up together.



#### UseTypeaheadNavigationParameters

<small>`extends` [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.collator?|`Intl.Collator`|A collator to use when comparing. If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.|No|
|.isValidForTypeaheadNavigation|`(index?: number) => boolean`|Must return true if the given child can be navigated to.<br />Generally corresponds to a `hidden` or `disabled` prop.|No|
|.noTypeahead|`boolean`|If true, no typeahead-related processing will occur, effectively disabling this invocation of `useTypeaheadNavigation` altogether.|-|
|.onNavigateTypeahead?|`(newIndex: number \| null, event: KeyboardEventType<TabbableChildElement>) => void`|**Optional**<br />Called any time the currently tabbable index changes as a result of a typeahead-related keypress|No|
|.typeaheadTimeout|`number`|How long after the user's last typeahead-related keypress does it take for the system to reset?|-|



#### UseTypeaheadNavigationReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getCurrentTypeahead|`() => string \| null`|Returns the string currently typed by the user. Stable, but cannot be called during render.|-|
|.typeaheadStatus|`"invalid" \| "valid" \| "none"`|What the current status of the user's input is:<br />* `"none"`: Typeahead is not in progress; the user has not typed anything (or has not for the given timeout period). * `"valid"`: The string the user has typed so far corresponds to at least one child * `"invalid"`: The string the user has typed so does not correspond to any child|-|
|context|`UseTypeaheadNavigationContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsStable|HTML props|Spread these props onto the HTML element that will use this logic.|-|



#### useTypeaheadNavigationChild



##### UseTypeaheadNavigationChildParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseTypeaheadNavigationChildInfoKeysParameters`](#usetypeaheadnavigationchildinfokeysparameters)</small>

Every member of `UseTypeaheadNavigationChildParameters` is inherited (see the interfaces it `extends` from).



##### UseTypeaheadNavigationChildReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseTextContentParameters`](#usetextcontentparameters), [`UsePressParameters`](#usepressparameters)</small>

Every member of `UseTypeaheadNavigationChildReturnType` is inherited (see the interfaces it `extends` from).



<hr />
<hr />



### useSelection

Allows the children of this component to be selected, either with a `singleSelectedIndex` prop on the parent, or via each child's individual `multiSelected` prop.

**See also** [useSingleSelection](#usesingleselection)
[useMultiSelection](#usemultiselection)



#### UseSelectionParameters

<small>`extends` [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseSingleSelectionParameters`](#usesingleselectionparameters), [`UseMultiSelectionParameters`](#usemultiselectionparameters), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype)</small>

Every member of `UseSelectionParameters` is inherited (see the interfaces it `extends` from).



#### UseSelectionReturnType

<small>`extends` [`UseSingleSelectionReturnType`](#usesingleselectionreturntype), [`UseMultiSelectionReturnType`](#usemultiselectionreturntype), [`UseChildrenHaveFocusParameters`](#usechildrenhavefocusparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseSelectionContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

Single-selection and multi-selection are not mutually exclusive, though the cases where you would want both are uncommon.

Most of the time, you'll want to pick and choose one mode to work with:

* Single-selection is controlled by the parent -- it receives a `singleSelectedIndex` parameter that represents the currently selected child and handles all the logic related to coordinating the deselection of the old child.
* Multi-selection is controlled by each individual child -- they have a `multiSelected` parameter that can be optionally reported back to the parent (so it can show the % of all children selected, or similar)




#### useSelectionChild



##### UseSelectionChildParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseSelectionChildInfoKeysParameters`](#useselectionchildinfokeysparameters), [`UseSingleSelectionChildInfoKeysParameters`](#usesingleselectionchildinfokeysparameters), [`UseSingleSelectionChildParameters`](#usesingleselectionchildparameters), [`UseMultiSelectionChildInfoKeysParameters`](#usemultiselectionchildinfokeysparameters), [`UseMultiSelectionChildParameters`](#usemultiselectionchildparameters)</small>

Every member of `UseSelectionChildParameters` is inherited (see the interfaces it `extends` from).



##### UseSelectionChildReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseSingleSelectionChildReturnType`](#usesingleselectionchildreturntype), [`UseMultiSelectionChildReturnType`](#usemultiselectionchildreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UsePressParameters`](#usepressparameters)</small>

Every member of `UseSelectionChildReturnType` is inherited (see the interfaces it `extends` from).



<hr />
<hr />



### useSingleSelection

Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).



#### UseSingleSelectionParameters

<small>`extends` [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.initiallySingleSelectedIndex?|`number`|This is imperative, as opposed to declarative, to save on re-rendering the parent whenever the selected index changes.|-|
|.onSingleSelectedIndexChange?|`SelectedIndexChangeHandler`|Called when a child is selected (via a press or other method).<br />If this component is declaratively controlled (with e.g. `useSingleSelectionDeclarative`), then you should use this to `setState` somewhere that'll change your `selectedIndex`.<br />If this component is imperatively controlled, then you should hook this up to the returned `changeSelectedIndex` function to have the desired change occur.<br />In general, this should only be `null` when single selection is entirely disabled.|No|
|.singleSelectionAriaPropName?|`` `aria-${"pressed" \| "selected" \| "checked" \| `current-${"page" \| "step" \| "date" \| "time" \| "location" \| "true"}`}` ``|What property will be used to mark this item as selected.<br />**IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.<br />This is ignored if `selectionMode` is set to `"disabled"`.|-|
|.singleSelectionMode|`"focus" \| "activation" \| "disabled"`|What causes a child to become selected?<br />In general, `"focus"` is preferred (and also implies `"activation"` for iOS devices that may or may not focus anything ever), especially when the change can be seen immediately and there is no consequence for doing so, like with tabs and sometimes radio buttons too.<br />When this is `"disabled"`, all single-selection behavior is turned off, allowing for multi-selection, or no selection.|-|



#### UseSingleSelectionReturnType

<small>`extends` [`UseChildrenHaveFocusParameters`](#usechildrenhavefocusparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.changeSingleSelectedIndex|`PassiveStateUpdater<number \| null, SelectedIndexChangeEvent>`|A function that, when called, internally updates the selected index to the one you provide, and tells the relevant children that they are/are not selected.<br />If you are creating an imperative component, this is what how you can force the value to change in response to something.<br />If you are creating a declarative component, this is what you call in `useEffect` when your `selectedIndex` changes.|Yes|
|.getSingleSelectedIndex|`() => number \| null`||Yes|
|context|`UseSingleSelectionContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

If you need multi-select instead of single-select and you're using this hook (e.g. as part of [useCompleteListNavigation](#usecompletelistnavigation)), you can disable the single-selection behavior either by setting the selected index to `null` or.



#### useSingleSelectionChild



##### UseSingleSelectionChildParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseSingleSelectionChildInfoKeysParameters`](#usesingleselectionchildinfokeysparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.singleSelectionDisabled|`boolean`|When true, this child cannot be selected via single-select, either by focusing it or by clicking it.|-|



##### UseSingleSelectionChildReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters), [`UsePressParameters`](#usepressparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.getSingleSelected|`() => boolean`||Yes|
|.getSingleSelectedOffset|`() => (number \| null)`||Yes|
|.singleSelected|`boolean`|Is this child currently the selected child among all its siblings?|-|
|.singleSelectedOffset?|`number`|Any time `selected` changes to or from being visible, this will represent the direction and magnitude of the change.<br />It will never be zero; when `selected` is `true`, then this will be the most recently-used offset.<br />This useful for things like animations or transitions.|-|
|info|`Pick<M, UseSingleSelectionChildInfoKeysReturnType>`|Data the child makes available to the parent. Passed to `useManagedChild`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useMultiSelection

Allows a parent to track the changes made to multi-selection children.



#### UseMultiSelectionParameters

<small>`extends` [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.multiSelectionAriaPropName?|`` `aria-${"pressed" \| "selected" \| "checked"}` ``|What property will be used to mark this item as selected.<br />TODO: No compelling use-case for aria-current in multi-select? Just in case: \| `current-${"page" | "step" | "date" | "time" | "location" | "true"}`|-|
|.multiSelectionMode|`"focus" \| "activation" \| "disabled"`|What causes a child to become selected?<br />**`"focus"`** is **strongly** discouraged, even though it behaves like a native HTML element (e.g. like `<select size=10>`).<br />Notably, in `"focus"` mode, it can be difficult to tell the difference between multi-select and single-select unless you already know that this is a multi-select control.<br />Keyboard controls in `"activation"` mode don't differ strongly from the usual conventions of "navigate to a thing, press Space to activate it". However, because the `"focus"` mode controls are extremely unintuitive, all controls are documented here:<br />
* In either mode, navigation/selection has the usual keyboard controls (arrow keys, space/enter, page up/down, home/end, mouse clicks, pointer events, etc.)
* In either mode, <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all items.
* In either mode, holding <kbd>Shift</kbd> while changing selection will extend the current selection to include the new item and any items in between.
* Exclusive to `"focus"` mode:
    * Navigating to a new item will automatically select it.
        * To navigate **without** selecting a new item, hold <kbd>Ctrl</kbd>.
            * Any item navigated to in this way can be selected by pressing <kbd>Space</kbd>/<kbd>Enter</kbd> as usual, but...
    * Selecting a new item (whether via navigation or pressing <kbd>Space</kbd> or <kbd>Enter</kbd>) will **deselect all other items** unless <kbd>Ctrl</kbd> is held.
|-|
|.onSelectionChange?|`(e: MultiSelectionChangeEvent) => void`||-|



#### UseMultiSelectionReturnType

<small>`extends` [`UseChildrenHaveFocusParameters`](#usechildrenhavefocusparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|context|`UseMultiSelectionContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|
|propsStable|HTML props|Spread these props onto the HTML element that will use this logic.|-|

Beyond just giving each child the ability to track its own selected state, the parent can change all children at once. Pressing <kbd>Ctrl</kbd>+<kbd>A</kbd> will select all children, for example.

This is not exclusive with [useSingleSelection](#usesingleselection), you can use both at once if you have a use case for it.



#### useMultiSelectionChild



##### UseMultiSelectionChildParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters), [`UseMultiSelectionChildInfoKeysParameters`](#usemultiselectionchildinfokeysparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.initiallyMultiSelected|`boolean \| null`||-|
|.multiSelectionDisabled|`boolean`|When true, this child cannot be selected via multi-select, either by focusing it or by clicking it.|-|
|.onMultiSelectChange?|`(e: MultiSelectChildChangeEvent<E>) => void`|Called when the child is requesting to change whether it's selected or not (generally because the user clicked it)<br />To comply with the child's request, you should either:<br />* Change the `selected` parameter to true (probably by calling `setState` somewhere) if this is declaratively controlled (most cases).
* Call `changeSelected`, if this is imperatively controlled.
|-|
|context|`UseMultiSelectionContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



##### UseMultiSelectionChildReturnType

<small>`extends` [`UseRefElementReturnType`](#userefelementreturntype), [`UsePressParameters`](#usepressparameters), [`UseHasCurrentFocusParameters`](#usehascurrentfocusparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.changeMultiSelected|`(event?: EventType<any, any>, selected?: boolean) => void`||Yes|
|.getMultiSelected|`() => boolean`||Yes|
|.multiSelected|`boolean`|Indicates that this child is selected, according to itself.|-|
|info|`Pick<M, UseMultiSelectionChildInfoKeysReturnType>`|Data the child makes available to the parent. Passed to `useManagedChild`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|



<hr />
<hr />



### useRearrangeableChildren

Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.



#### UseRearrangeableChildrenParameters

<small>`extends` [`UseProcessedIndexManglerParameters`](#useprocessedindexmanglerparameters), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.children|`(VNode \| null)[]`|The children to rearrange.|-|
|context|`UseRearrangedChildrenContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|



#### UseRearrangeableChildrenReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.children|`(VNode \| null)[]`|The transformed (i.e. rearranged) children to render.|-|
|.refresh|`() => void`||-|
|context|`UseRearrangeableChildrenContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

*This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*

It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler` functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned, this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.

Besides the prop-modifying hook that's returned, the `sort` function that's returned will sort all children according to their value from the `getValue` argument you pass in.

If you want to perform some re-ordering operation that's *not* a sort, you can manually re-map each child's position using `mangleMap` and `demangleMap`, which convert between sorted and unsorted index positions.

Again, unlike some other hooks, **these children must be direct descendants**. This is because the prop-modifying hook inspects the given children, then re-creates them with new `key`s. Because keys are given special treatment and a child has no way of modifying its own key there's no other time or place this can happen other than exactly within the parent component's render function.


<hr />
<hr />



### usePaginatedChildren

Allows children to stop themselves from rendering outside of a narrow range.



#### UsePaginatedChildrenParameters

<small>`extends` [`UseManagedChildrenParameters`](#usemanagedchildrenparameters), [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype), [`UseChildrenHaveFocusReturnType`](#usechildrenhavefocusreturntype), [`UseProcessedIndexManglerReturnType`](#useprocessedindexmanglerreturntype), [`UseRovingTabIndexReturnType`](#userovingtabindexreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.childCount?|`number`||-|
|.paginationMax?|`number`||-|
|.paginationMin?|`number`||-|



#### UsePaginatedChildrenReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.refreshPagination|`(min: Nullable<number>, max: Nullable<number>) => void`|If the values returned by `indexDemangler` change (e.g. when sorting), then this must be called to re-sync everything.|Yes|
|context|`UsePaginatedChildContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.



#### usePaginatedChild

Child hook for [usePaginatedChildren](#usepaginatedchildren).



##### UsePaginatedChildParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|context|`UsePaginatedChildContext`|Functions and data that the parent has made available to each child. Retrieve it with `useContext`|-|
|info|`{<br />        index: number;<br />    }`|Data the child makes available to the parent. Passed to `useManagedChild`|-|



##### UsePaginatedChildReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.hideBecausePaginated|`boolean`|Whether this child should hide itself because the parent is paginated and this child is outside of the current range.|-|
|.parentIsPaginated|`boolean`|Whether this child is part of a paginated parent component.|-|
|info|`Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" \| "setChildCountIfPaginated">`|Data the child makes available to the parent. Passed to `useManagedChild`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering), so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.



<hr />
<hr />



### useStaggeredChildren

Allows children to each wait until the previous has finished rendering before itself rendering. E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.



#### UseStaggeredChildrenParameters

<small>`extends` [`UseManagedChildrenReturnType`](#usemanagedchildrenreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.childCount|`number \| null`||-|
|.staggered|`boolean`|If true, each child will delay rendering itself until the one before it has.|-|



#### UseStaggeredChildrenReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.stillStaggering|`boolean`|Whether any children are still waiting to show themselves because of the staggering behavior|-|
|context|`UseStaggeredChildContext`|Functions and data that the parent is making available to each child. Put it in your own `Context` from `createContext`|-|

If a child appears on-screen for 100ms then it will be forcibly displayed.

When using the child hook, it's highly recommended to separate out any heavy logic into a separate component that won't be rendered until it's de-staggered into visibility.



#### useStaggeredChild

Child hook for [useStaggeredChildren](#usestaggeredchildren).



##### UseStaggeredChildParameters

<small>`extends` [`UseGenericChildParameters`](#usegenericchildparameters)</small>

Every member of `UseStaggeredChildParameters` is inherited (see the interface it `extends` from).



##### UseStaggeredChildReturnType

<small>`extends` [`UseRefElementParameters`](#userefelementparameters)</small>

|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|.childUseEffect|`() => void`|Call this when the child mounts during useEffect (i.e. something like `useEffect(childUseEffect, [childUseEffect])`).<br />This is generally passed to an inner child, if this is the outer child.|-|
|.hideBecauseStaggered|`boolean`|If this is true, you should delay showing *your* children or running other heavy logic until this becomes false. Can be as simple as `<div>{hideBecauseStaggered? null : children}</div>`|-|
|.parentIsStaggered|`boolean`|Whether the parent has indicated that all of its children, including this one, are staggered.|-|
|info|`OmitStrong<UseStaggeredChildrenInfo, "index">`|Data the child makes available to the parent. Passed to `useManagedChild`|-|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering), so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.



<hr />
<hr />



### useDismiss

Combines all the methods a user can implicitly dismiss a popup component. See [useModal](#usemodal) for a hook that's ready-to-use for dialogs and menus.



#### UseDismissParameters

<small>`extends` [`UseEscapeDismissParameters`](#useescapedismissparameters), [`UseBackdropDismissParameters`](#usebackdropdismissparameters), [`UseLostFocusDismissParameters`](#uselostfocusdismissparameters), [`UseActiveElementParameters`](#useactiveelementparameters)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.dismissActive|`boolean`|Controls all dismiss behaviors at once.<br />When this is `true`, any of the dismiss behaviors are able to be triggered. When this is `false`, no dismiss behaviors are able to be triggered.|-|
|.onDismiss|`(e: EventType<any, any>, reason: Listeners) => void`|Called any time the user has requested the component be dismissed for the given reason.<br />You can choose to ignore a reason if you want, but it's better to set `closeOn${reason}` to `false` instead.|No|



#### UseDismissReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|refElementPopupReturn|`UseRefElementReturnType<PopupElement>["refElementReturn"];`| |-|
|refElementSourceReturn|`UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"];`| |-|
|propsStablePopup|HTML props|Spread these props onto the HTML element that will use this logic.|-|
|propsStableSource|HTML props|Spread these props onto the HTML element that will use this logic.|-|


<hr />
<hr />



### useBackdropDismiss

Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.



#### UseBackdropDismissParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.dismissBackdropActive|`B \| false`|When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.|-|
|.onDismissBackdrop?|`(e: MouseEventType<any>) => void`|Called when the component is dismissed by clicking outside of the element.|No|
|refElementPopupReturn|`Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;`| |-|

**Returns**: void


<hr />
<hr />



### useEscapeDismiss

Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)



#### UseEscapeDismissParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.dismissEscapeActive|`B \| false`|When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.|-|
|.getDocument|`() => Document`|The escape key event handler is attached onto the window, so we need to know which window.<br />The returned `Document` should not change throughout the lifetime of the component (i.e. the element in question must not switch to another window via some means, which might not even be possible).|No|
|.onDismissEscape?|`(e: KeyboardEventType<any>) => void`|Called when the component is dismissed by pressing the `Escape` key.|No|
|.parentDepth|`number`|Get this from context somewhere, and increment it in that context.<br />If multiple instances of Preact are on the page, tree depth is used as a tiebreaker|-|
|refElementPopupReturn|`Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;`| |-|

**Returns**: void

One press of the `Escape` key is guaranteed to only call `onDismiss` for *only one* component, and it is called on the component deepest in the DOM tree.

TODO: Instead of being deepest in the DOM tree (which is usually fine), it should probably be related to what order something was made `active`.


<hr />
<hr />



### useLostFocusDismiss

Invokes a callback when focus travels outside of the component's element.



#### UseLostFocusDismissParameters



|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.dismissLostFocusActive|`B \| false`|When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.|-|
|.onDismissLostFocus?|`(e: FocusEventType<any>) => void`|Called when the component is dismissed by losing focus|No|
|refElementPopupReturn|`Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;`| |-|
|refElementSourceReturn|`Nullable<Pick<UseRefElementReturnType<NonNullable<SourceElement>>["refElementReturn"], "getElement">>;`| |-|



#### UseLostFocusDismissReturnType

<small>`extends` [`UseActiveElementParameters`](#useactiveelementparameters)</small>

Every member of `UseLostFocusDismissReturnType` is inherited (see the interface it `extends` from).

TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.


<hr />
<hr />



### useFocusTrap

Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.



#### UseFocusTrapParameters

<small>`extends` [`UseActiveElementParameters`](#useactiveelementparameters), [`UseBlockingElementParameters`](#useblockingelementparameters), [`UseRefElementReturnType`](#userefelementreturntype)</small>

|Member|Type|Description|Must be stable?|
|---------|----|-----------|----------|
|.focusOpener|`(lastFocused?: SourceElement \| null) => void`|When the focus trap has deactivated, focus must be sent back to the element that opened it.<br />This is tracked for you; by default, just call `lastFocused?.focus()`, but you can also override this behavior and just do whatever you want with any element.|No|
|.focusPopup|`(e?: PopupElement, findFirstFocusable?: () => HTMLOrSVGElement \| null) => void`|This function is called to find where focus should be sent when the dialog (or menu, popup, etc.) opens.<br />This **cannot be done deterministically** across all possible scenarios because this is about what makes the most sense as a human.<br />For example, if it's a confirmation dialog about deleting something, *it's best to send focus to the "cancel" button*, but there's no way to programmatically know both a) that should be done and b) how to do it.<br />Ideally this function is specified *manually* for every dialog you create.<br />If you really, really, ***genuinely*** cannot determine what should be done in your use case, as a very very last resort, use `findFirstFocusable`, and then if nothing's found focus the body.<br />Just please, please make sure that whatever that first focusable is **isn't** a destructive action, at the very least.|No|
|.onlyMoveFocus|`boolean`|If true, focus is not trapped but only moved to the new element.|-|
|.trapActive|`boolean`|Whether or not the focus trap is currently active (or, when used as part of a larger component, whether it is activatable)|-|



#### UseFocusTrapReturnType



|Member|Type|Description|Is stable?|
|---------|----|-----------|----------|
|props|HTML props|Spread these props onto the HTML element that will use this logic.|-|

By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)? Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.


<hr />
<hr />



### useAsync

Given an async function, returns a function that's suitable for non-async APIs, along with other information about the current run's status.

**See also** [useAsyncHandler](#useasynchandler) for a version that's specialized for DOM event handlers.
[UseAsyncParameters](#useasyncparameters)


|Parameter|Type|Description|
|---------|----|-----------|
|asyncHandler|[`Nullable`](#nullable)`<AsyncFunctionType<AP, R>>`|The async function to make sync|
|options|[`UseAsyncParameters`](#useasyncparameters)`<AP, SP>`||


When called multiple times in quick succession, (i.e. before the handler has finished), this works like Lodash's `throttle` function with the `wait` option always set to however long the handler takes to complete. A second call to the sync function will be throttled until the first call has finished. The return value of the function is the result of the previous invocation, or `undefined` on the first call.

The handler is only ever delayed if one is currently running, so, e.g. for iOS touch events the first call happens in the same event handler (which means things like calls to `element.focus()` will work as intended, since that fails when the event is "split up")

Finally, because the sync handler may be invoked on a delay, any property references on the arguments provided might be stale by the time it's actually invoked (e.g. accessing `event.currentTarget.checked` is not stable across time because it's a "live" value -- you almost always want the value that it had at the original time the handler was called). The `capture` option allows you to save that kind of dynamic data at the time it runs; the `AP` and `SP` type parameters likewise control the parameters the async handler and sync handler expect respectively.

#### UseAsyncParameters



|Member|Type|Description|
|---------|----|-----------|
|capture?|`CaptureFunctionType<AP, SP>`|When an async function is debounced due to one already running, it will run on a delay and, as a result, the original arguments that were passed to it may need to be adjusted to account for that.<br />For example, during `onInput`, the `value` of that event isn't stored in the event itself, it's stored in the `HTMLInputElement` that raised it. So when our handler actually runs a few seconds later, it'll read the **next** `event.currentTarget.value`, instead of the one from a few seconds ago that actually raised the event!<br />If the arguments to your handler require referencing data in the arguments that may become "stale" by the time the function actually runs (generally event handlers and other things that reference the properties of existing objects), the `capture` parameter allows you to transform the parameters you were given when the request to run was initially made into parameters that you have guaranteed will still be good by the time the handler actually runs.|
|debounce?|`number`|If provided, adds a debounce behavior *in addition* to the default "wait until resolved" throttling behavior.|
|throttle?|`number`|By default, `useAsync` will auto-throttle based on how long it takes for the operation to complete. If you would like there to be a minimum amount of time to wait before allowing a second operation, the `throttle` parameter can be used in addition to that behavior.<br />`throttle` *includes* the time it takes for the async operation to finish. If `throttle` is 500ms, and the async function finishes in 700ms, then another one will be run immediately. If it took 100ms, then we'd wait for the remaining 400ms until allowing a second run.|


<hr />
<hr />



### useUrl

Allows you to inspect when the entire URL changes, either because the hash changed or because the Back/Forward browser buttons were pressed.


|Parameter|Type|Description|
|---------|----|-----------|
|onUrlChange|`(url: string) => void`||


If the URL is set programmatically in a way that doesn't trigger either of those, like `history.replaceState`, well, 🤷 there's no way to track that. So beware of other libraries that modify page history out from under you.

In general, you'll want to inspect a specific directory of a path, or a specific query parameter value, not the entire URL.


<hr />
<hr />



### useMergedRefs

Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.


|Parameter|Type|Description|
|---------|----|-----------|
|rhs|[`ElementProps`](#elementprops)`<E>["ref"]`||
|lhs|[`ElementProps`](#elementprops)`<E>["ref"]`||


Or just use [useMergedProps](#usemergedprops)


<hr />
<hr />



### useMergedClasses

Merged the `class` and `className` properties of two sets of props into a single string.


|Parameter|Type|Description|
|---------|----|-----------|
|classes|[`ElementProps`](#elementprops)`<EventTarget>["className"][]`||


Duplicate classes are removed (order doesn't matter anyway).


<hr />
<hr />



### useMergedChildren

Combines two `children`.


|Parameter|Type|Description|
|---------|----|-----------|
|lhs|[`ElementProps`](#elementprops)`<EventTarget>["children"]`||
|rhs|[`ElementProps`](#elementprops)`<EventTarget>["children"]`||


This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.

TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.


<hr />
<hr />



### useMergedStyles

Merges two style objects, returning the result.


|Parameter|Type|Description|
|---------|----|-----------|
|lhs|[`ElementProps`](#elementprops)`<EventTarget>["style"]`||
|rhs|[`ElementProps`](#elementprops)`<EventTarget>["style"]`||


**Returns** A CSS object containing the properties of both objects.


## Miscellanea 

 
### Nullable

```typescript
export type Nullable<T = null> = null | undefined | T;
``` 

 
### OmitStrong

```typescript
export type OmitStrong<T, K extends keyof T> = Omit<T, K>;
``` 

 
### TargetedPick

```typescript
export type TargetedPick<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: Pick<T[K], L>;
};
``` 

 
### TargetedOmit

```typescript
export type TargetedOmit<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: OmitStrong<T[K], L>;
};
``` 

 
### ElementProps

```typescript
export type ElementProps<E extends EventTarget> = JSX.HTMLAttributes<E>;
```

## Conventions and goals

* As much as possible, no specific DOM restrictions are imposed and, for hooks with children (lists, grids, etc.), those children can be anywhere descendent in the tree (except for `useSortableChildren`, which can be anywhere descendant but must all be in an array due to how the `key` prop works). Nesting hooks, even of the same type, is also fine.
    *  E.G. `useRovingTabIndexChild` can call its own `useRovingTabIndex`, which is how `useGridNavigation` works.
* A parent hook never needs to be directly passed child data because the children will provide it themselves.
    * E.G. `useListNavigation` can filter children, but it doesn't take an array of which children to filter out; each child reports its own status as filtered/unfiltered with, say, a `hidden` prop, and the parent responds to that. If a child that is focused becomes filtered, for example, the parent has enough information to be able to move focus to an adjacent child.
    * This means that the child data is *always* the single source of truth (even if the parent creates those children and the data they use), and maps nicely to how components are built and diffed.
* Re-render as few times as possible. In general this means instead of a hook returning a value to use during render, it will accept an `onChange`-ish handler that will let you explicitly do that if you want (and is no-cost otherwise).
    * `useElementSize`, for example, has no way of returning the size the first time its component renders. It needs to fully render *and then* run an effect that measures it. Once the element's been measured, *you* are responsible for choosing if the component is re-rendered with this new information or not.
* Some of these hooks, like `useGridNavigationRow`, have **extremely** complicated dependencies. To manage this, most hooks take a single parameter and return a single object with everything labelled consistently and designed to be discoverable via auto-complete. <br /><br />**Example**: E.G. If `useFoo` is one of those complex hooks, then it:
    * ...**will always** take a single parameter that's at least like `{ fooParameters: {...} }`.
        * E.G. `useRefElement({ refElementParameters: { onMount: ... } })`
        * `UseFooParameters` is the type of the hook's 1 argument.
        * `UseFooParametersSelf` is the type of the `fooParameters` member.
    * ...**will always** return a single object that's at least like `{ fooReturn: { ... } }`.
        * E.G. `const { refElementReturn: { getElement } } = useRefElement(...)`
        * `UseFooReturnType` is the type of the hook's return type.
        * `UseFooReturnTypeSelf` is the type of the `fooReturn` member.
    * ...*may also* return `{ props: {...} }`. These must be spread onto the element you're rendering, or the hook will not function (see `useMergedProps` if you need to use other props in addition to the returned props). It may occasionally be called something else starting with `props`, e.g. `propsStable`, `propsSource` and `propsTarget`, etc.
        * E.G. `const { propsStable } = useRefElement(...)`, then `<div {...propsStable} />`
        * `propsStable` indicates that nothing about the object ever changes including the identity of the object itself and all its fields.
    * ...*may also*, as the parent of child components, return `{ context: { ... } }` that those children rely on.
        1. E.G. Parent does `const { context, ...etc } = useFoo({...});`
        1. Parent renders `<MyContext.Provider value={context}>{children}</MyContext.Provider>`
        1. Then child calls `useFooChild({ context: useContext(MyContext), fooChildParameters: {...} })`
    * ...*may also*, as a child of a parent component, require or return pieces of `{ info: { ... } }` if it has something to contribute to `useManagedChild`'s special `info` parameter.
        * E.G. `useSingleSelectionChild` requires `info.index` to function, and returns some other pieces of the `info` object, like `info.getSelected`. Just keep swizzling back and forth to create the complete `info` object.
        * The `info` type can be customized with a generic type parameter generally named `M` (grid navigation has `RM` for rows' info and `CM` for cells' info).
            * If you have a custom hook that calls this child, you can customize the `info` it expects via that type parameter.
    * When hooks themselves use other hooks:
        * If `useFoo` calls `useBar` directly, then it will take parameters like `{ fooParameters: {...}, barParameters: {...} }` and return objects like `{ fooReturn: {...}, barReturn: {...} }`.
        * If `useFoo` relies on `useBar` (but doesn't call it itself, to avoid redundant calls to the same common hook, like [`useRefElement`](#userefelement)), then will do one of the following:
            * Take parameters like `{ fooParameters: { ... }, barReturn: { ... } }`, if it needs the return value of `useBar`.
            * Return values like `{ fooReturn: { ... }, barParameters: { ... } }`, if it needs `useBar` to be called with specific parameters in order to function (usually callbacks).
            * (Ultimately the point of this is to allow us to just call `useRefElement` once and pass the result around to whoever needs it)
        * If `useFoo` and `useBar` both return a top-level `props`, they will be merged into one.
        * If `useFoo` and `useBar` both return a top-level `context`, they will be merged into one.
        * If `useFoo` and `useBar` both return a top-level `info`, they will be merged into one.
        * Occasionally, `props` or `context` may be suffixed with the specific role they refer to:
            * `useRandomId` returns `propsSource` and `propsReferencer` (and no `props`).


## The following items are missing their documentation (or should not have been linked to):


##### UseProcessedIndexManglerParameters
##### UseProcessedIndexManglerReturnType
##### UseProcessedChildrenReturnType
##### UseListNavigationSelectionReturnType
##### UseGenericChildParameters
##### UseCompleteListNavigationChildInfoKeysParameters
##### UseListNavigationSelectionChildInfoKeysParameters
##### UseRovingTabIndexChildInfoKeysParameters
##### UseTypeaheadNavigationChildInfoKeysParameters
##### UseSelectionChildInfoKeysParameters
##### UseSingleSelectionChildInfoKeysParameters
##### UseMultiSelectionChildInfoKeysParameters
##### UseListNavigationSelectionChildReturnType
##### UseGridNavigationSelectionReturnType
##### UseCompleteGridNavigationRowInfoKeysParameters
##### UseGridNavigationSelectionRowInfoKeysParameters
##### UseGridNavigationRowInfoKeysParameters
##### UseGridNavigationSelectionRowParameters
##### UseGridNavigationSelectionRowReturnType
##### UseCompleteGridNavigationCellInfoKeysParameters
##### UseGridNavigationSelectionCellInfoKeysParameters
##### UseGridNavigationCellInfoKeysParameters
##### UseGridNavigationSelectionCellParameters
##### UseGridNavigationSelectionCellReturnType
##### UseBlockingElementParameters
##### SearchParamStates
##### getLowestIndex
##### navigatePastStart
