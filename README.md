# Preact Prop Helpers

A small set of hooks related to modifying Preact props, but also a number of other useful things. These are all hooks that I have found to be extremely useful when building UIs with Preact--everything from keyboard navigation to `localStorage` state management.

The name (Preact Prop Helpers) comes from the fact that most of these hooks require modifying the props that were going to be passed to an element in order to function (generally just the `ref` on those props, but still).  It's since grown in scope to include a bunch of general helper hooks as well (like `useAsync`), but `useMergedProps` truly was the core at one point.

```tsx 
const [size, setSize] = useState<ElementSize | null>(null);
const { useElementSizeProps } = useElementSize<HTMLDivElement>({ onSizeChange: setSize });
const { offsetHeight, ...otherSizes } = (size ?? {});

// Do something fun with offsetHeight here

return <div {...useElementSizeProps(props)}>I'm {offsetHeight} pixels tall!</div>
```


## Summary of available hooks

* [`useMergedProps`](#useMergedProps): Merges two or more sets of props together. Can handle `class` & `className`, `style`, `ref`, `children`, and all event handlers.
* `useRefElement`: Access the `Element` that rendered these props.
* `useManagedChildren`: Low-level hook that is effectively the concept of `Context` but reversed for child to parent communication. Query the status of managed children and be notified when they change.
* `useListNavigationComplete`: Create a composite component that only has a single tab stop among its many children. Combines the following hooks, and wraps them all up with `useManagedChildren` at the end:
    * `useListNavigation`: Combines the following hooks: (does not call `useManagedChildren`)
        * `useRovingTabIndex`: Only one child among all children is tabbable at any given moment
        * `useLinearNavigation`: Which child is the tabbable child is controlled by pressing Up, Page Down, Home, etc.
        * `useTypeaheadNavigation`: Which child is the tabbable child is controlled by typing the child's name/content
    * `useSingleSelection`: Only one child among all children is selected (can be disabled for multi-select)
    * `useSortableChildren`: Children can be sorted (or arbitrarily rearranged)
    * `usePaginatedChildren`: Tell children to show/hide themselves if they are within a narrow window
    * `useStaggeredChildren`: Only render a child when the one above it has called its first `useEffect`.
    * (It is perfectly possible to build this hook yourself from its component pieces &mdash; it's provided for convenience)
* `useGridNavigationComplete`: 2-dimensional `useListNavigationComplete`
* `useImperativeProps`: Control the attributes, text content, classes, event handlers etc. of a children remotely without props. Even if the child re-renders with props of its own the imperative changes will be remembered and re-merged.
* `usePortalChildren`: Allows adding/removing children to an arbitrary part of the DOM (e.g. pushing a Toast notification).
* `useTextContent`: Access the text of the `Element` that rendered these props.
* `useElementSize`: React to changes in the size of the `Element` that rendered these props
* `useMediaQuery`: Watch a CSS media query and get notified when its condition is or is not satisfied.
* `useMutationObserver`: Allows you to use a low-level `MutationObserver` on the `Element` that rendered these props.
* `useActiveElement`: React to changes in `document.activeElement`
* `useHasCurrentFocus`: Is the `Element` focused or not?
* `useHasLastFocus`: Is the `Element` focused, or, if nothing's focused, was it the most recently focused `Element`?
* `useStableCallback`: Makes a function stable so that it can be excluded from dependency arguments.
    * `useStableGetter`: Like the above, but for any arbitrary object.
* `useState`: Same as the built-in, but returns `[state, setState, getState]` with that third return value there.
* `usePassiveState`: Want to keep state around, but don't **need** to re-render when it changes? Passive state lets you run a `useEffect`-like callback and cleanup, so if you want to re-render, you can, and if you don't need to re-render, you don't have to.
* `usePersistentState`: State hooked up to `localStorage` (or `sessionStorage`)
* `useForceUpdate`: Force your component to re-render itself even if no other state has changed.
* `useAnimationFrame`: Run code just before the browser paints each frame while the element is mounted.
* `useInterval`: Run code periodially while the element is mounted.
* `useTimeout`: For all intents and purposes, this is `useEffect` but with a delay.
* `useAsyncHandler`: Pass an `async` DOM handler, get a sync one back (and a lot of metadata about its current status). Only one handler ever runs at a time.
    * `useAsync`: Generalized version of the above that can transform *any* `async` function, not just DOM handlers
    * `useAsyncEffect`: The logic of `useAsync` hooked up to `useEffect`.

## `useMergedProps`

Merges two or more sets of props together. Can handle `class` & `className`, `style`, `ref`, `children`, and all event handlers.

```tsx
const a = { className: "foo" };
const b = { className: "bar" };
// [etc ...]
return <div {...useMergedProps(a,b,c,d)} />
```

## `useRefElement`

Access the `Element` that rendered these props.

```tsx
// Example 1: Basic usage ("I don't need access to the element while rendering, only during effects and event handlers")
const { refElementReturn: { getElement }, propsStable } = useRefElement<HTMLDivElement>({});
useEffect(() => { console.log(getElement()); }, [/* Empty! */])
return <div {...propsStable} />
```

```tsx
// Example 2: ("I need the element during rendering specifically, even at the cost of re-rendering")
// (This is uncommon, consider useElementSize, useMutationObserver, etc.)
const [element, setElement] = useState<HTMLDivElement | null>(null);
const { propsStable } = useRefElement<HTMLDivElement>({ onElementChange: setElement });
return <div {...propsStable} data-x={element?.offsetLeft} />
```

|Parameter|Requirements|Description|
|-|-|-|
|`onElementChange`|Optional, **Stable**|Called when the element has rendered with that `Element`, or `null` when unmounting. This happens during the `ref` phase (after commit, before effects)|
|`onMount`|Optional, **Stable**|Called when the element has rendered.|
|`onUnmount`|Optional, **Stable**|Called when the has element unmounted.|

|Return|Guarantees|Description|
|-|-|-|
|`getElement`|**Stable**|Returns the element that has been rendered, or `null` if it hasn't been rendered yet.|
|`propsStable`|**Stable**|Recommended to use with `useMergedProps`|

## `useManagedChildren`
Low-level hook that is effectively the concept of `Context` but reversed for child to parent communication. Query the status of managed children and be notified when they change.

Any hook that uses `useMergedChildren` must define an Info type that extends `ManagedChildInfo<string | number>`. Any additional properties you define will be available from the parent, so if you need to do something like `child[71].areYouHidden()? foo() : bar()` be sure to add `areYouHidden` as a property in your derived type.

Additionally, each child of `useManagedChildren` must have either:
* A numeric, 0-based integer index that represents this child's position in an imaginary array (sparse arrays are fine and handled gracefully, so you can leave as many gaps as you need)
* A unique string index (sequentiality does not apply)

This concept is separate from the `key` prop.

### `useManagedChildren`

|Parameter|Requirements|Description|
|-|-|-|
|`onAfterChildLayoutEffect`|Optional, **Stable**|Once all children have rendered and run `useLayoutEffect`, a microtick later, `onAfterChildLayoutEffect` is called once. If more children render, this will again only be called once per microtick.|
|`onChildrenMountChange`|Optional, **Stable**|When one or more child elements mount/unmount, a microtick later this will fire with which children mounted as the first argument and which unmounted as the second.|
|`onChildrenCountChange`|Optional, **Stable**|Identical to the above, but simply counts the highest-indexed child.|

|Return|Guarantees|Description|
|-|-|-|
|`getChildren`|**Stable**|Returns a `ManagedChildren` object that abstracts over all mounted children|
|`context`|**Stable**|Must be passed into a `Context` so the child can access it.|

`ManagedChildren` interface:
* `getAt(index)`: Returns the child that mounted with that index, or `undefined`.
* `getHighestIndex()`: Returns the index of the child that's mounted with the highest numeric index. The range of all children is [0, `getHighestIndex()`] or [0, `getHighestIndex()` + 1)
* `forEach(fn)`: Runs the given function on every child. If you return `"break"`, the loop will end early.
* `arraySlice()`: Internal use only for implementing `useSortableChildren`, but will return an array copy of all children with a numeric index.

### `useManagedChild`

`useManagedChild` is called with the `context` from its parent as the first argument, then its actual parent-shared data as the second argument.

|Return|Guarantees|Description|
|-|-|-|
|`getChildren`|**Stable**|The same as what the parent returns, in case children need to communicate with each other.|

## `useCompleteListNavigation`

Create a composite component that only has a single tab stop among its many children. Functionally combines many hooks together that can be used individually (but generally aren't):

### `useRovingTabIndex`
Only one child among all children is tabbable at any given moment.

Any attempt to change focus to a child that does not exist or cannot accept focus at the moment (because it's disabled, hidden, etc.) will instead send focus to the closest matching child to ensure that, no matter what, at least one child can be focused at all times.

#### `useRovingTabIndex`
|Parameter|Requirements|Description|
|-|-|-|
|`initiallyTabbedIndex`|Optional|When first mounted, which child will receive focus? (After that, which child is tabbable can be controlled imperatively but not declaratively for performance reasons)|
|`untabbable`|Optional|When true, none of the children will be tabbable, as if the entire component is hidden. This does not actually change the currently tabbable index; if this is set to `false`, the last tabbable child is remembered.|
|`onTabbableIndexChange`|Optional, **Stable**|Called any time a new child is made focusable. If you want the parent to render differently based on which child is focusable, use this.|

|Return|Guarantees|Description|
|-|-|-|
|`getTabbableIndex`|**Stable**|Returns a number from 0 to `getHighestIndex` representing which child is currently tabbable. `null` if none are tabbable. If `untabbable` is `true`, this will still return the last tabbable index.|
|`setTabbableIndex`|**Stable**|Changes which child is tabbable to the newly requested index. If `null`, the component is effectively hidden from keyboard users.|
|`focusSelf`|**Stable**|Sends focus to whichever child is currently focusable.|
|`context`|**Stable**|Must be passed into a `Context` so the child can access it.|

#### `useRovingTabIndexChild`
|Parameter|Requirements|Description|
|-|-|-|
|`hidden`| |If a child exists at this index but cannot be focused (because it's `display: none`, for example), then `hidden` **must** be `true` to indicate this.|
|`untabbable`|Optional|When true, none of the children will be tabbable, as if the entire component is hidden. This does not actually change the currently tabbable index; if this is set to `false`, the last tabbable child is remembered.|
|`onTabbableIndexChange`|Optional, **Stable**|Called any time a new child is made focusable. If you want the parent to render differently based on which child is focusable, use this.|

|Return|Guarantees|Description|
|-|-|-|
|`tabbable`||Is this the currently tabbable child?|
|`getTabbable`|**Stable**|Stable function of the above|
|`propsStable`| |Recommended to use with `useMergedProps`|


## Conventions and goals

* Re-render as few times as possible. In general this means instead of a hook returning a value, it will accept an `onChange`-ish handler that will let you explicitly do that.
    * `useElementSize`, for example, has no way of returning the size the first time its component renders. It needs to fully render *and then* run an effect that measures it. Once the element's been measured, *you* are responsible for choosing if the component is re-rendered with this new information or not.
    ```tsx
    // ✔✔✔
    // We're explicitly saying "I need `size` during render, so I'm opting into a re-render"
    const [size, setSize] = useState(null);
    const { props } = useElementSize({ onSizeChange: setSize });
    return <div data-x={size?.x} {...props} />

    // ✔✔✔
    // We're explicitly saying "I don't need `size` during render, just for events and such"
    const { elementSizeReturn: { getSize }, props } = useElementSize({ onSizeChange: null });
    return <div onClick={() => console.log(getSize())} {...props} />

    // ✖✖✖ Does not compile!!!
    // The hook is not designed like this because what if `size` is only used 
    // in an event handler, or an effect? We'd render twice for no reason
    const { elementSizeReturn: { size }, props } = useElementState();
    useEffect(() => { console.log(size.x); }, [size.x]);
    return <div {...props} />  // Nothing ever changes but the entire diffing algorithm still always runs!

    // ✖✖✖ Throws a runtime error!!!
    // The fact that these values cannot be used until rendering has completed is strictly enforced:
    const { elementSizeReturn: { getSize }, props } = useElementState();
    useEffect(() => { console.log(size.x); }, [size.x]);
    return <div data-x={getSize()?.x} {...props} />  // `getSize` can't return a meaningful value until rendering is over and measurement can happen!
    ```
    * That last example can be rewritten with `usePassiveState`, which mimics `useEffect` for non-render state:
    ```tsx
    const onSizeChange = useCallback((size) => { console.log(size); }, [])
    const [getSize, setSize] = usePassiveState(onSizeChange);   // instead of `useState` or `useEffect`
    const { elementSizeReturn: { getSize }, props } = useElementSize({ onSizeChange: setSize });
    return <div {...props} />
    ```
* As much as possible, no specific DOM restrictions are imposed and, for hooks with children (lists, grids, etc.), those children can be anywhere descendent in the tree (except for `useSortableChildren`, which can be anywhere descendant but must all be contiguous). Nesting hooks, even of the same type, is also fine.
    *  E.G. `useRovingTabIndex` returns information that you can toss into a `Context` so that each child can call `useRovingTabIndexChild` with that information, and this can happen pretty much anywhere decendent in the DOM that you'd like. A child can use `useRovingTabIndex` and `useRovingTabIndexChild` to both be a child that can be tabbed to and have children that can be tabbed to (which is what `useGridNavigation` does).
* A parent hook never needs to be directly passed child data because the children will provide it themselves. E.G. `useListNavigation` can filter children, but it doesn't take an array of which children to filter out; each child reports its own status as filtered/unfiltered with, say, a `hidden` prop, and the parent responds to that.
    * This means that the child data is *always* the single source of truth, and maps nicely to how components are built and diffed.
* Organizationally, some hooks exist primarily to be used as a part of a larger hook.  Hooks within the `component-use` folder are generally "ready-to-use" and don't require much passing of parameters back and forth, but are not fully extensible.  Hooks within `component-detail` are the lower-level building blocks that make up those "ready-to-use" complete hooks, but they're much more time-consuming to use.
    * You can also just copy and paste one of the complete hooks somewhere else and use it as a new building block...
* Hooks composable in predictable and obvious ways, because there are a lot of intertwined dependencies. If we have `useFoo`, it:
    * ...will always take paramaters like `{ fooParameters: {...} }`.
        * E.G. `useElementRef({ elementRefParameters: { onMount: ... } })`
    * ...will always return objects like `{ fooReturn: { ... } }`
        * E.G. `const { refElementReturn: { getElement } } = useElementRef(...)`
    * ...may also return `{ props: {...} }` or, rarely, `{ propsStable: {...} }`. These must be spread onto the element you're rendering, or the hook will not function (see `useMergedProps` if you need to use other props in addition to the returned props). 
        * E.G. `const { propsStable } = useElementRef(...)`, then `<div {...propsStable} />`
        * `propsStable` indicates that nothing about the object ever changes including the identity of the object itself and all its fields.
    * ...may also return `{ context: { ... } }` that children rely on.
        1. E.G. Parent calls `const { context } = useFoo(...);`
        1. Parent renders `<MyContext.Provider value={context}>{children}</MyContext.Provider>`
        1. Then child calls `useFooChild({ context: useContext(MyContext), fooChildParameters: {...} })`
    * When hooks themselves use other hooks:
        * If `useFoo` calls `useBar` directly, then it will take parameters like `{ fooParameters: {...}, barParameters: {...} }` and return objects like `{ fooReturn: {...}, barReturn: {...} }`.
        * If `useFoo` relies on `useBar` (but doesn't call it itself!), then will do one of the following:
            * Take parameters like `{ fooParameters: { ... }, barReturn: { ... } }`, if it needs the return value of `useBar`.
            * Return values like `{ fooReturn: { ... }, barParameters: { ... } }`, if it needs `useBar` to be called with specific parameters in order to function (usually callbacks).
        * (The difference between those two is usually based on performance -- many, many hooks rely on `elementRefReturn.getElement`, for example, so the latter pattern allows us to just call `useRefElement` once and pass the result around to whoever needs it)
        * If `useFoo` and `useBar` both return a top-level `props`, they will be merged into one.
        * If `useFoo` and `useBar` both return a top-level `context`, they will be merged into one.
        * Occasionally, `props` or `context` may be suffixed with the specific role they refer to:
            * `useRandomId` returns `propsSource` and `propsReferencer` (and no `props`).
        

These rules should ideally make swizzling all these different parameters back and forth as foolproof as possible.

## Summary of available hooks

(In *rough* order of usefulness and relevance)

**`useEvent` when it finally lands is going to make some of these, like `useStableCallback` and _especially_ `useBeforeLayoutEffect` obsolete, or at least make the problems they solve obsolete.**

<table>
    <thead><tr><th>Hook</th><th>Description</tthd><th>Uses/Used by</th></tr></thead>
    <tbody>
    <tr><th colspan="3">"Minimal Assembly Required" hooks for your complex components</th></tr>
    <tr><td>useCompleteListNavigation/useCompleteGridNavigation</td><td colspan="2">Navigate through multiple children as <strong>one</strong> component with the keyboard (arrow keys, etc.). A combination of the following hooks (all can be disabled): <ul><li>useRovingTabIndex (only one child among all can be tabbed to)</li><li>useLinearNavigation (navigate among children with the arrow keys, page up/down, home/end)</li><li>useTypeaheadNavigation (type to select the child with that name)</li><li>useSortableChildren (sort or arbitrarily rearrange a component's children)</li><li>usePaginatedChildren (Hide/show children except those in a narrow window)</li><li>useStaggeredChildren (Delay mounting a child's children until the one above it has finished)</li></ul></td></tr>
    <tr><td>useModal</td><td>Create an element that (optionally) traps focus and (optionally) can only be closed in response to certain events, such as the Escape key or clicking on a backdrop.</td><td></td></tr>
    <tr><td>usePress</td><td>A higher-level event than onClick for things like buttons that need standardized "press me" interactions.</td><td></td></tr>
    <tr><td>useRandomId/useRandomDualIds</td><td>Give a DOM element a randomly generated ID, and make sure that the other DOM element that references that ID does so properly.</td><td></td></tr>
    <tr><th colspan="3">"Some Assembly Required"; these are the building blocks of the above hooks</th></tr>
    <tr><td>useDismiss</td><td>Listen for user gestures that signal the component using this hook should hide itself, including Escape key presses and clicking away</td><td>useModal</td></tr>
    <tr><td>useRovingTabIndex</td><td>For composite components where only one child should be focusable/tabbable at any given point.</td><td>useCompleteListNavigation, useCompleteGridNavigation</td></tr>
    <tr><td>useFocusTrap</td><td>Forces all user interaction to be within one specific DOM node, and restores focus to whatever was focused beforehand when done.</td><td>useModal</td></tr>
    <tr><td>useListNavigation(Partial/SingleSelection/SingleSelectionSortable)</td><td>Fully-extensible (and <strong>extremely</strong> verbose) alternative to useCompleteListNavigation</td><td>useCompleteListNavigation</td></tr>
    <tr><td>useGridNavigation(Partial/SingleSelection/SingleSelectionSortable)</td><td>Fully-extensible (and <strong>extremely</strong> verbose) alternative to useCompleteGridNavigation</td><td>useCompleteGridNavigation</td></tr>
    <tr><td>useLinearNavigation</td><td>For when the user can navigate throuch children using the arrow keys/Page Up &amp; Down/Home &amp; End. Can react to the kinds of arbitrary reordering that useSortableChildren returns. </td><td>useCompleteListNavigation, useCompleteGridNavigation</td></tr>
    <tr><td>useTypeaheadNavigation</td><td>For when the user can navigate through children by typing the text the child displays.</td><td>useCompleteListNavigation, useCompleteGridNavigation</td></tr>
    <tr><td>useSortableChildren</td><td>Allows the children of this component to be re-ordered while preserving keys and providing the information that other hooks need to react to this out-of-order information. </td><td>useCompleteListNavigation, useCompleteGridNavigation</td></tr>
    <tr><td>useSingleSelection</td><td>Anywhere a single child can be selected (lists, tabs, etc.), you can use this. The parent will be given a numeric index (or null) that corresponds to the child that's selected, and it will handle re-rendering the (maximum two) children that need this new information.</td><td>useCompleteListNavigation, useCompleteGridNavigation</td></tr>
    <tr><th colspan="3">DOM-related hooks</th></tr>
    <tr><td>useAsyncHandler</td><td>Turn an async function into a normal, sync DOM event handler, plus some extra information like status and run count that you can display to the user.</td><td></td></tr>
    <tr><td>useBlockingElement</td><td>Forces interaction to be contained within one specific DOM node.</td><td>useFocusTrap</td></tr>
    <tr><td>useDocumentClass</td><td>Add/remove CSS classes from document-global nodes, like window, document, or body.</td><td></td></tr>
    <tr><td>useGlobalHandler</td><td>Add/remove event handlers from document-global nodes, like window, document, or body</td><td>useDismiss, usePress, usePersistentState</td></tr>
    <tr><td>useDraggable &amp; useDroppable</td><td>Add simple drag&amp;drop handlers to your elements.</td></tr>
    <tr><td>useElementSize</td><td>Query and react to changes in the size of the rendered component</td></tr>
    <tr><td>useHideScroll</td><td>Hide the body's visible scrollbar and lock the body at the current position with no shifting of layout or viewport</td></tr>
    <tr><td>useMergedProps(/Styles/Refs/Classes/Children)</td><td>Combined two props-objects from two separate sources into one props-object. Refs, styles, CSS classes, and event handlers are all handled properly. Other properties will optionally warn if conflicts are found.</td><td>Too many to list</td></tr>
    <tr><td>useRefElement</td><td>Query and react to the DOM element that's rendered by this component.</td><td>Too many to list</td></tr>
    <tr><td>useTextContent</td><td>Query and react to the text content of the DOM element that's rendered by this component.</td><td>useTypeaheadNavigation</td></tr>
    <tr><th colspan="3">Hooks that monitor and react to things</th></tr>
    <tr><td>useActiveElement</td><td>Allows you to track document.activeElement as it moves across the entire page</td><td>useHasLastFocus, useBlockingElement</td></tr>
    <tr><td>useHasCurrentFocus</td><td>Track if this component is the element that's currently focused (if the body or other interactive element is clicked, then this component would no longer be considred "currently" focused and null would be returned)</td><td>useChildrenHaveFocus, useCompleteListNavigation, useCompleteGridNavigation</td></tr>
    <tr><td>useHasLastFocus</td><td>Track if this component is the element that was most recently given focus (if the body or other interactive element is clicked, then this component would still be considered as the "last" focused element until a new one is focused)</td></tr>
    <tr><td>useMediaQuery</td><td>Query and react to anything that can be measured in a CSS Media Query</td></tr>
    <tr><td>useMutationObserver</td><td>Query and react to anything that can be measured in a <a href="https://developer.mozilla.org/en-US/docs/Web/API/MutationRecord">Mutation Observer</a> (nodes added/removed, text changed, etc)</td></tr>
    <tr><th colspan="3">Hooks that expand on build-in Preact functionality</th></tr>
    <tr><td>useAsync</td><td>Turn an async function into a sync one for use with APIs that only handle sync functions, along with additional metainfo about the current state that you can react to.</td><td>useAsyncEffect, useAsyncHandler</td></tr>
    <tr><td>useAsyncEffect</td><td>Like useEffect, but if the previous async effect is still running, this one is delayed until that one finishes (and all the other useAsync rules).</td></tr>
    <tr><td>useManagedChildren</td><td>Allows a parent component to react to changes in what its children are doing, when they've mounted/unmounted, etc. Also allows more fine communication between parents and children, or children and other children.</td><td>Explicitly: useCompleteListNavigation, useCompleteGridNavigation<br /><br />Implicitly: useRovingTabIndex, useSingleSelection, useListNavigationPartial, useGridNavigationPartial, usePaginatedChildren, useStaggeredChildren</td></tr>
    <tr><td>useChildrenFlag</td><td>When you need to have exactly <strong>one or zero</strong> children as "the selected child" or "the focusable child" or "the currently-processing child" or whatever, this hook helps set that up so that at maximum a change in the selected(/whatever) index only results in two children re-rendering themselves.</td><td>useRovingTabIndex, useSingleSelection</td></tr>
    <tr><td>useForceUpdate</td><td>Returns a stable function that forces <strong>just this</strong> component to re-render itself (children onwards use the normal rendering/diffing rules)</td><td>useRearrangeableChildren</td></tr>
    <tr><td>usePassiveState</td><td>For when you need to run useState, and even need to run useEffect on changes to your state, but that state might not even be used during rendering and so you don't necessarily want to re-render when that state changes. Like useEffect, you can specify a function that runs when the value changes and returns a cleanup function that is run beforehand the next time.</td><td>Too many to list</td></tr>
    <tr><td>usePersistentState</td><td>State that is saved to localStorage</td></tr>
    <tr><td>useStableCallback &amp; useStableGetter</td><td>Allows a function (or any arbitrary value) to be used in any callback/effect without specifiying them as dependencies. The returned functions are perfectly stable, but cannot be called during render, as their values are indeterminate until the commit phase.</td><td>Too many to list</td></tr>
    <tr><td>useState</td><td>Exactly like the native useState, but with a third element in the returned tuple corresponding to the missing getState function. This function is perfectly stable and can even be called during render (well, you shouldn't call setState and getState both during render, but I argue calling setState during render is a bigger smell).</td><td>Too many to list</td></tr>
    <tr><th colspan="3">Hooks based around timing</th></tr>
    <tr><td>useTimeout</td><td>Run some code after after waiting the specified amount of time from the component first rendering, or from any time the component renders if you want. This can be used like useEffect but with a delay very easily.</td><td>useTypeaheadNavigation</td></tr>
    <tr><td>useInterval</td><td>Like useTimeout, but with a repeating interval instead.</td><td></td></tr>
    <tr><td>useAnimationFrame</td><td>Run some code on every frame this component is mounted. Can be batched with the `ProvideBatchedAnimationFrames` component to improve performance if you have many dozens of components calling `requestAnimationFrame`</td><td></td></tr>
    </tbody>
</table>

# Preact Extensions
These are hooks that extend native built-in Preact behavior, or add onto it in natural ways.

## `useAsync`

Turns an async function into a sync function (and a lot of metadata about the invocations of that sync function).  This hook is used as a base for more useful hooks like `useAsyncHandler` (useful for DOM events) and `useAsyncEffect` (which is `useEffect`, but async).

|Argument|Description|
|-|-|-|
|`capture`|-|
|`throttle`|-|
|`debounce`|-|

## `useAsyncEffect`


# General Purpose Prop Hooks
(TODO: reorder these under their proper headings)

These hooks can all be used to modify the props that were going to be passed to an element to "enhance" them with special behavior.  `useElementSize`, for example, "enhances" an element with the ability to report its size during render by using its `ref` in a `ResizeObserver`.  `useDraggable` "enhances" an element with the ability to be dragged and report its dragging state during render, etc.

Note that a number of the `onWhateverChange` arguments (e.g. `onElementSizeChange`) require that function to be stable across each render. This means either wrapping it in `useCallback(()=>{}, [/*empty*/])`, or wrapping it in `useStableCallback(()=>{})`.  Keep in mind that `setState` and `getState` do not ever need to be listed as dependencies for `useCallback`.

## `useMergedProps`
```tsx 
function useMergedProps<E extends EventTarget>()<T, U>(lhs2: T, rhs2: U): MergedProps<T, U>;
```
(Also `useMergedClasses`, `useMergedStyles`, `useMergedChildren`, and `useMergedRefs`, implicitly)

Virtually all hooks in this library make use of `useMergedProps`, and generally useful for making any sort of prop-modifying hook.  Given two sets of props, it merges them and returns the result.

The hook is aware of and can intelligently merge `className`, `class`, `style`, `children`, `ref`, and all event handlers.

Note the signature, as the first call is empty due to typing reasons, while the actual props to merge are in the second call.

```tsx
return <div {...useMergedProps<HTMLDivElement>()(props1, props2)} />
```

|Prop|Hook|Merge behavior|
|----|----|----|
|`className`, `class`|`useMergedClasses`|Combined and duplicates removed.|
|`style`|`useMergedStyles`|If objects, righthand properties overwrite lefthand ones. If strings, concatenates them. If mixed, attempts to construct an object from the string and then merges.|
|`ref`|`useMergedRefs`|Creates a ref that references both, and uses that.|
|`children`|`useMergedChildren`|Returns a `Fragment` containing the first prop's children, then the second prop's children.|
|Event handlers (or any function)| |Calls the first event handler, then the second.|
|Anything `null` or `undefined`| |Whichever side isn't null or undefined is kept. If both are, `null` is preferred over `undefined`.|
|All other differences| |Since both are non-null, forcibly uses the righthand value. You can optionally set a function to run at that point that will receive a string as an error message. By default, a function that invokes the debugger is called.|

## `useRefElement`

```tsx

function Example() {
    const [element, setElement] = useState<HTMLInputElement | null>(null);
    const { useRefElementProps } = useRefElement<HTMLInputElement>({ onMount: setElement });
    return (<input {...useRefElementProps({ type: "number" })} />)
}


export function useRefElement<T extends EventTarget>(params?: UseRefElementParameters<T>): UseRefElementReturnType<T>;

export interface UseRefElementParameters<T extends EventTarget> {
    onMount?: (element: T) => void;
    onUnmount?: (element: T) => void;
    // The two combined like useEffect -- return a cleanup function on unmount
    onElementChange?: OnPassiveStateChange<T | null>;
}

export interface UseRefElementReturnType<T extends EventTarget> {
    // Stable
    getElement: () => T | null;
    // Required prop-modifying function
    useRefElementProps: UseRefElementProps<T>;
}
```

Lets your component be notified when the rendered `Element` has mounted/unmounted.

The easiest way to use is by just hooking up a `useState`'s `setState` to the `onMount` argument, though if performance is a concern you may not need to re-render the entire component just because the element rendering it mounted. Use `onElementChange` for these cases, which allows for a `useEffect`-like callback and won't inherently cause a re-render. 

Returns the element referenced by a ref as soon as the element mounts, before the first paint.  Don't forget to always include the element as a dependency argument whereever you use it, not just because it's required, but also so that you can use the `element` as soon as it's ready, which is almost always the whole point.

That being said, if you do need the element and explicitly need to leave it *out* of a dependency array, `getElement` can do that, as it is stable across all renders.

You can either store the element via `setState` and re-render to do something in `useEffect`, or you can use `getElement` to just use the element during, e.g., and event handler, which won't cause a re-render.

## `useDraggable`, `useDroppable`
```tsx
export function useDraggable<E extends Element>(args: UseDraggableParameters): UseDraggableReturnType<E>;
function useDraggableProps<P extends UseDraggablePropsParameters<E>>(props: P): MergedProps<..., P>;

export function useDroppable<E extends Element>(args: UseDroppableParameters): UseDroppableReturnType<E>;
function useDroppableProps<P extends UseDroppablePropsParameters<E>>(props: P): MergedProps<..., P>;
```
`useDraggable` lets an element provide data that can be dropped somewhere else.  Returns both whether the element is currently being dragged, and the `dropEffect` of whatever it was dropped onto when that happens.  If, for example, the `dropEffect` changes to "move", it means the component should `useEffect` and delete itself however appropriate.

`useDroppable` lets an element accept things that are being dragged.  While a draggable object is hovering over the element, this hook will return the MIME types of the data and/or the files that are being dragged. After it's been dropped, the hook will return the actual string/file data (possibly after asynchronously waiting for it to load).

## `useChildManager` (&amp; `useChildFlag`)
```tsx
export function useChildManager<I extends ManagedChildInfo>(): UseChildManagerReturnType<I>;
function useManagedChild<ChildType extends EventTarget>(info: I): void;
```
Sometimes it's useful for child components to report information to their parents, especially in lists of data. This hook lets you do that.

`useChildManager` accepts a template argument that represents the information the child will pass to the parent.  At minimum, it must be `{ index: number | string }`, but you can extend it to include, for example, state setting functions or other similar things.  `useRovingTabIndex` has children provide their parents with a function to set their `tabIndex` property remotely, for example.

Unlike a lot of other hooks, the hook returned by this component, `useManagedChild`, is meant to be passed to child elements via a Context object.  The child component then calls `useContext(MyContext)` to get that hook.  When you call the `useManagedChild` hook it gives you, pass it all the information the parent has requested (which, again, will be at least `{ index: number }`).

You can use this hook in multiple different ways as long as a different Context object is used to differentiate them.

`useChildManager` comes with a companion hook `useChildFlag`, which is *extremely* useful for scenarios where, among a set of children, only a single one is selected/tabbable/active/whatever.  It manages
sending the "flag on"/"flag off" signals to the (max 2) correct children whenever the index changes, the number of children changes, etc.

## `useListNavigation` (&amp; `useRovingTabIndex`, `useLinearNavigation`, `useTypeaheadNavigation`)

(FYI: This component uses `useChildManager`, so be aware of how that works and be sure to have a Context ready.)

Allows for keyboard navigation of lists and other similar structures:

* Arrow up or left navigate to the previous item
* Arrow down or right to navigate to the next item
* Home or end navigate to the first or last item, respectively
* Optionally, if a string is typed, the next element that starts with that string will be navigated to (after a short delay, the string resets)

At each point during this, the `tabIndex` attribute of these elements is modified so that pressing the `Tab` key navigates in/out of the component as a whole, as opposed to trudging through every single item.  This is the recommended accessability practice for elements that function like a Listbox or similar.

It is perfectly fine for each tabbable element to also have "sub-tabbable" elements, like a list item that contains a checkbox or whatnot.  In that case, the child should use `useListNavigationSiblingProps` (with the primary element just using `useListNavigationChildProps` as usual)

## `useGridNavigation`

Works similarly to `useListNavigation`, but for 2-dimensional grid layouts.  `useGridNavigation` supports sorting its contents via the `indexMangler` and `indexDemangler` functions in its props &ndash; `indexMangler` should be a function that turns an unsorted (row) index into a sorted one, and the reverse for `indexDemangler`.  Filtering is also supported via the `hidden` prop.

## `useElementSize`

```tsx
export function useElementSize<E extends Element>({ observeBox, setSize }: UseElementSizeParameters): UseElementSizeReturnType<E>;
function useElementSizeProps<P extends UseElementSizePropsParameters<T>>(props: P): MergedProps<..., P>;
```

Any time the element size changes, your `setSize` function will be called with the following information.  You can choose to *actually* store all or none of it.

```tsx
interface ElementSize {
    clientWidth: number;
    clientHeight: number;
    clientLeft: number;
    clientTop: number;

    scrollWidth: number;
    scrollHeight: number;
    scrollLeft: number;
    scrollTop: number;

    offsetWidth: number;
    offsetHeight: number;
    offsetLeft: number;
    offsetTop: number;
}
```

Note that this structure can be converted from physical dimensions to logical dimensions (i.e. language-direction-relative dimensions) by using `useLogicalDirection`.

## `useRandomId`

```tsx
export function useElementSize<E extends Element>({ observeBox }?: UseElementSizeParameters): UseElementSizeReturnType<E>;
function useElementSizeProps<P extends UseElementSizePropsParameters<T>>(props: P): MergedProps<..., P>;
```

Provides a set of props with a backup ID in case it doesn't have one.  The ID will be randomly generated with 64 bits of randomness in pseudo-base64.  You can also provide a prefix if you'd like.

This hook returns three values:

* `useRandomIdProps`, which modifies a set of properties to use `randomId` (below) if no `id` is provided (i.e. it's `null` or `undefined`)
* `useReferencedIdProps`, which modifies a set of properties to use `randomId` for whatever property you specifiy (if it's not provided).  Use this to, e.g., set one element's `id` and another's `for` to be the same. `aria-labelledby` and such are also good candidates.
* `randomId`, which is the randomly-generated ID that will be used if none is provided. Not useful unless you need to handle the ID logic yourself or just need to know what it is for some other purpose.

## `useSortableChildren`

This hook allows a component to easily re-order its children while keeping their identities consistent. Useful primarily for e.g. having sortable lists of things.

Note that while `useChildManager` is generally a great choice for manipulating descendant children, it cannot be used here because children cannot manipulate their own `key`s, which is how `useSortableChildren` works.  Because of this, a component that uses this hook is only able to sort its **immediate descendants**, as it directly modifies those children's props.

## `useFocusTrap`

Allows an element to become modal, stopping any attempt to interact with anything not contained by the element.  Internally utilizes the `inert` attribute, for which a polyfill is provided.  Multiple focus traps can be active at once, managed with a stack based off the `blockingElements` proposal implemented as `useBlockingElement`.

## `useHasCurrentFocus`, `useHasLastFocus`

Allows you to inspect if the given element is focused.  "Current focus" refers to just attaching `focusIn` and `focusOut` events and literally looking at where the user's focus has moved within the element. "Last focus" refers to whatever was most recently focused, disregarding times where the element loses focus but a new element hasn't been given focus yet (e.g. when clicking on the body, "current focus" is lost, but "last focus" remains until a new non-body element is focused).

In either case, you can differentiate between whether or not just the element itself is focused, or the element and/or any element inside of it is focused.

## `useLogicalDirection`

Allows you to inspect the current direction text flows and glyphs are oriented, both in terms of LTR vs. RTL, but also vertical writing modes set with `writing-mode`.  When used with `useElementSize`, can also transform the size given from that hook from physical dimensions to logical ones.

For more information, see the documentation of the `LogicalDirectionInfo` interface.


### Other Hooks

These hooks do not need to modify props in order to do their job, so they do not return sub-hooks that modify props. They're just generally useful to have around.

## `useAsyncHandler`

Given an asynchronous event handler, returns a syncronous one that works on the DOM, along with some other information related to the current state.

Note that because the handler you provide may be called with a delay, and because the value of, e.g., an `<input>` element will likely be stale by the time the delay is over, a `capture` function is necessary in order to capture the relevant information from the DOM. Any other simple event data, like `mouseX` or `shiftKey` can stay on the event itself and don't need to be captured &ndash; it's never stale.


```tsx
const syncOnInput = async (value: number, e: Event) => { 
    [...] // Ex. send to a server and setState when done
};
const {
    // The synchronous event handler
    useSyncHandler,
    // True while the handler is running
    pending,
    // The error thrown, if any
    error,
    // And others
    ...rest
} = useAsyncHandler<HTMLInputElement>()({ 
    capture: e => { 
        e.preventDefault(); 

        // Save this value so that it's never stale
        return e.currentTarget.valueAsNumber;
    }, 
});

const onInput = useSyncHandler(someAsyncFunction);
// OR the following, if you want the input entirely disabled while pending:
// (because this is a hook and needs to be called every invocation)
const onInput = useSyncHandler(pending? null : someAsyncFunction);
```

The handler is automatically throttled to only run one at a time.  If the handler is called, and then before it finishes, is called again, it will be put on hold until the current one finishes, at which point the second one will run.  If the handler is called a third time before the first has finished, it will *replace* the second, so only the most recently called iteration of the handler will run.

You may optionally *also* specify a debounce parameter that waits until the syncronous handler has not been called for the specified number of milliseconds, at which point we *actually* run the asyncronous handler according to the logic in the previous paragraph. This is in *addition* to throttling the handler, and does not replace that behavior.

Note that the parameters to the async handler are slightly different than the sync handler &ndash; the first argument, as decided by you with the `capture` parameter for this hook, is the "saved" information from the event.  For example, the event's currentTarget's `value`, which may have changed by the time the handler is *actually* called.  The second argument is the original event, which might still have some useful fields on it like `mouseX` or something, but is stale at least in regards to the
element it references.

`useAsync` works identically to `useAsyncHandler`, but with different use semantics; `useAsyncHandler` returns functions like `(event: Event) => void`, while `useAsync`'s returns functions like `() => T`.

## `useActiveElement`

Allows you to inspect which element in the `document` currently has focus, which was most recently focused if none are currently, and whether or not the window has focus by returning the following functions:
* `getActiveElement()`
* `getLastActiveElement()`
* `getWindowFocused()`
* `useActiveElementProps()`

(The document's body receiving focus, like it does when you click on an empty area, is counted as no element having focus for all intents and purposes)

This is a passive hook, so by default it returns getter functions that report this information but the component will not re-render by default when the active element changes. If you need the component to re-render when the active element changes, use the `on*Change` arguments to set some state on your end.

## `useGlobalHandler`, `useLocalHandler`

`useGlobalHandler` lets you add an event handler to `window`, `document`, etc. with the cleanup handled for you.

`useLocalHandler` does the same but for the rendered element.  Mostly useful for 3rd party libraries that expect you to add a given event listener.

## `useForceUpdate`

When called, returns `forceUpdate`, a function that can cause the current component to re-render itself.  Like with any other render, how deeply things are affected is decided by the usual diffing rules, meaning
that this cannot be used to update the entire tree, just the current component and however many relevant children.

Prefer alternatives if you can find them, but as an escape hatch this is occasionally useful.

## `useMediaQuery`

Returns whether the current media query matches.

## `useTimeout`, `useInterval`, `useAnimationFrame`

Bog-standard hooks for `setTimeout`, `setInterval`, and `requestAnimationFrame`. The callback does not need to be stable. For `useInterval`, any changes in timeout will take effect the next time the callback fires. For `useTimeout`, you can create a new timeout (besides the one on mount) by changing `triggerIndex`.  In either case, setting the timeout/interval to `null` will immediately cancel it.

Notably `useTimeout` is a very effective way to do "`useEffect`, but on a delay", by using `triggerIndex` as an analog for the dependency array.

`useAnimationFrame` comes with an optional component that simply provides a `Context` capable of batching all child uses of `useAnimationFrame` into a single callback; using this component, named `ProvideBatchedAnimationFrames`, can improve performance in some cases with a lot of children.

## `useStableGetter`

Given a value every render, returns a callback that returns that value and, importantly, is stable across renders. This means you can use it inside of hooks like `useEffect`, `useCallback`, etc. without declaring it as a dependency, but note that __the getter must not be called during `render`__ (its value is effectively indeterminate from the start of a render until it's been committed).

## `useStableCallback`

Very similar to `useStableGetter`; returns a callback that is stable between renders, but always calls your callback.  Basically just syntactic sugar to save a parantheses pair.

## `usePassiveState`

Like a mashup of `useEffect` and `useState`, `usePassiveEffect` lets you use state that won't (necessarily) cause a re-render when you update the state, but updating the state will cause a specified cleanup function to run.

`usePassiveState` accepts a `useEffect`-esque callback that will run any time the state value changes.  If you hook that up to a normal `setState` call from a normal `useState` hook, it'll act just like regular state again.  `usePassiveState` also, like `useEffect`, waits a tick and only runs the handler if there has actually been a change after all the dust settles. 

Effectively, `usePassiveState` lets you choose whether you'd like the state to be "active" (and re-render the component each time it changes), or "passive" (and just make the state available to anyone who asks during an event handler or whatever). 

**NOTE**: Just like the real `useState`, calling `setState` multiple times is debounced until the next tick, and only the latest invocation is considered.

## `useState`

Exactly the same as the normal `useState`, but returns a third `getState` function that remains stable across renders. Like `useStableGetter` and `useStableCallback`, the `getState` function doesn't need to be listed as a dependency anywhere, but unlike them, this one's fine to call at any point, even during the render phase.

## `usePersistentState`

The above, but persists across browser sessions and syncs between browser tabs. Usage is a bit different &ndash; provide a mapping of all known types as a type argument to the first function, then call the returned sub-function like normal. If it's feasible to just have one large mapping, you could just make your own hook that skips the outer function.

Because `Storage` stores everything as a string, some conversion functions will need to be used. By default, these are `JSON.parse` and `JSON.stringify`.  Feel free to override these (you'll at least need to override the former if you're storing a date!).

```tsx
interface StorageTypes {
    darkMode: boolean;
    lastLogin: Date;
}

// Optional! But if you only have one StorageTypes, might as well, right?
const useMyPersistentState = usePersistentState<StorageTypes>();

const [darkMode, setDarkMode, getDarkMode] = useMyPersistentState("darkMode", false);

const [lastLogin, setLastLogin, getLastLogin] = useMyPersistentState("lastLogin", new Date(), str => new Date(str), JSON.stringify);
```

Please note that `setState` and `getState` are stable **as long as key (and your custom `toString`/`fromString` functions) are!**.  
In other words, if you don't change the key or the `toString`/`fromString` functions, you can treat the returned functions the exact same as a regular `setState` call.

## `useEffect`, `useLayoutEffect`

Another entirely optional drop-in replacement for the native Preact hooks.  These provide two arguments: the previous input values, and a list of which ones caused the effect to fire.  The latter is very useful for debugging.

Aside from this, there is no difference between them.  Feel free to use the native ones if you don't need that information.

(Technically, `useStableGetter` and `useStableCallback` have a dependency on a third effect hook, but it is not exported publicly and in general should probably not be used.)

