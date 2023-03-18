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
* `useManagedChildren`: Low-level hook that represents reversed `Context`: child to parent communication. Query the status of managed children and be notified when they change.
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

```tsx
// Define what the parent knows about/can do with each child
interface DemoChildInfo extends ManagedChildInfo<number> { forceChildToUpdate(): void; }

// Parent
const { context, managedChildrenReturn: { getChildren } } = useManagedChildren<DemoChildInfo>({ managedChildrenParameters: {} });
function doSomething() { // this would be called when clicking a button or something
    getChildren().getAt(71).forceChildToUpdate();
 }
return <MyContext.Provider value={context}>{children}</MyContext.Provider>

// Child
index = props.index
const context = useContext(MyContext);
const forceUpdate = useForceUpdate();
const {} = useManagedChild({ context, info: { index, forceChildToUpdate: forceUpdate } });
return <div />;
```

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

|Parameter|Requirements|Description|
|-|-|-|
|`context`|&nbsp;|This comes from `useContext(TheContextTheParentUsed)`|
|`info`|&nbsp;|An object containing what should be returned when `getAt(thisChild)` is called. Doesn't need to be stable or only contain stable properties.|

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
|`initiallyTabbedIndex`|Optional, `number`|When first mounted, which child will receive focus? (After that, which child is tabbable can be controlled imperatively but not declaratively for performance reasons)|
|`untabbable`|Optional, `boolean`|When true, none of the children will be tabbable, as if the entire component is hidden. This does not actually change the currently tabbable index; if this is set to `false`, the last tabbable child is remembered.|
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
|`hidden`|`boolean`|If a child exists at this index but cannot be focused (because it's `display: none`, for example), then `hidden` **must** be `true` to indicate this.|
|`untabbable`|Optional, `boolean`|When true, none of the children will be tabbable, as if the entire component is hidden. This does not actually change the currently tabbable index; if this is set to `false`, the last tabbable child is remembered.|
|`onTabbableIndexChange`|Optional, **Stable**|Called any time a new child is made focusable. If you want the parent to render differently based on which child is focusable, use this.|

|Return|Guarantees|Description|
|-|-|-|
|`tabbable`|`boolean`|Is this the currently tabbable child?|
|`getTabbable`|**Stable**|Stable function of the above|
|`propsStable`|**Stable**|Recommended to use with `useMergedProps`|
|`info`| |Must be passed to `useManagedChild`|

### `useLinearNavigation`
Which child is the tabbable child is controlled by pressing Up, Page Down, Home, etc.

It's assumed you're using this in tandem with `useRovingTabIndex`, but you don't need to if you just need arrow key navigation but not the "one tab stop" behavior.

|Parameter|Requirements|Description|
|-|-|-|
|`isValid`| |Given an index, must return whether the child at that index can be navigated to. This generally corresponds to `!getAt(index)?.hidden` or similar.|
|`pageNavigationSize`| |Controls the behavior of the `Page Up` and `Page Down` keys. For values >= 1, Page Up/Down will move by that many children up/down. If the value is a percentage (> 0 and < 1), then Page Up/Down will move by that number of the total children up/down. If 0, Page Up/Down will do nothing (and the event will bubble through for someone else to potentially handle)|
|`navigatePastStart`| |Controls what happens when `up` is pressed on the first (valid) child. `"wrap"`: The last (valid) element is focused. `"passthrough"`: nothing happens and the event is allowed to propogate. `Function`: The provided function is called to handle the event.|
|`navigatePastEnd`| |Same as `navigatePastStart` but for the last valid child and pressing `down`|
|`indexMangler`, `indexDemangler`|**Stable**|If your children are not displayed in the same order they're rendered (e.g. with `useRearrangeableChildren`), these map original→display and vice/versa|
|`getHighestIndex`|**Stable**|Should generally be `() => managedChildrenReturn.getChildren().getHighestIndex()`|
|`arrowKeyDirection`| |Which arrow keys will move focus? `"horizontal"` for the left/right arrow keys, `"vertical"` for up/down, `"either"` to allow all 4 directions (through up/left and down/right will each do the same thing), and `"none"` to disable the arrow keys.|
|`disableHomeEndKeys`| |Whether the Home/End keys will move to the first/last element or not.|

|Return|Guarantees|Description|
|-|-|-|
|`propsStable`|**Stable**|Recommended to use with `useMergedProps`|

### `useSingleSelection`

Only one child among all children is selected (can be disabled for multi-select).

Imperative by default (like `useRovingTabIndex`), but can be made declarative with `useSingleSelectionDeclarative`.

#### `useSingleSelection`
|Parameter|Requirements|Description|
|-|-|-|
|`initiallySelectedIndex`|Optional, `number`|When first mounted, which child is selected? (After that, which child is selected can be controlled imperatively or 
|`onSelectedIndexChange`|Optional|Called any time a new child is made focusable. If you want the parent to render differently based on which child is focusable, use this.|

|Return|Guarantees|Description|
|-|-|-|
|`getSelectedIndex`|**Stable**|Returns a number from 0 to `getHighestIndex` representing which child is currently selected. `null` if none are selected.|
|`changeSelectedIndex`|**Stable**|Changes which child is selected to the newly requested index. If `null`, none of the children will be selected.|
|`context`|**Stable**|Must be passed into a `Context` so the child can access it.|

#### `useSingleSelectionChild`
|Parameter|Requirements|Description|
|-|-|-|
|`disabled`|`boolean`|If a child exists at this index but cannot be focused (because it's `display: none`, for example), then `hidden` **must** be `true` to indicate this.|
|`ariaPropName`| |How is this selection state represented in the DOM? One of `"aria-pressed"`, `"aria-selected"`, `"aria-checked"`, or `"aria-current"`, **IMPORTANT**: The `aria-current` options should be used with caution as they are semantically very different from the usual selection cases.|
|`selectionMode`| |Is this child selected when it is given focus (`"focus"`), when the child is clicked, pressed, etc. (`"activation"`), or never (`"none"`)|

|Return|Guarantees|Description|
|-|-|-|
|`selected`|`boolean`|Is this the currently selected child?|
|`getSelected`|**Stable**|Stable getter of `selectedOffset`|
|`setThisOneSelected`|**Stable**|Intended to be passed to an event handler to set this child as the selected child.|
|`selectedOffset`||How far this child is from the selected child (only updated for any given child when it becomes selected/unselected and is intended for animation/transitions)|
|`getSelectedOffset`|**Stable**|Stable getter of `selectedOffset`|
|`props`| |Recommended to use with `useMergedProps`|
|`info`| |Must be passed to `useManagedChild`|



### `useTypeaheadNavigation`
Which child is the tabbable child is controlled by typing the child's name/content.

It's assumed you're using this in tandem with `useRovingTabIndex`, but you don't need to if you just need arrow key navigation but not the "one tab stop" behavior.

|Parameter|Requirements|Description|
|-|-|-|
|`isValid`| |Given an index, must return whether the child at that index can be navigated to. This generally corresponds to `!getAt(index)?.hidden` or similar.|
|`collator`| |A collator to use when comparing. If not provided, simply uses `localeCompare` after transforming each to lowercase, which will, at best, work okay in English.|
|`noTypeahead`| |If `true`, then despite using this hook, typeahead behavior will not occur.|
|`typeaheadTimeout`||How many milliseconds does it take before the search string the user's typed clears itself?|

|Return|Guarantees|Description|
|-|-|-|
|`typeaheadStatus`| |Describes the current status &mdash; one of `"none"` (typeahead is not currently underway), `"valid"` (there are 1 or more childreh matching the currently typed text), or `"invalid"` (the user has typed text that will never match a child and must wait for at least `typeaheadTimeout` milliseconds to try again).|
|`getCurrentTypeahead`||Returns the current text the user has typed and is searching for.|
|`propsStable`|**Stable**|Recommended to use with `useMergedProps`|
|`context`|**Stable**|Must be passed into a `Context` so the child can access it.|

### `useSortableChildren`

Children can be sorted (or arbitrarily rearranged).

Note that all children must be provided in a single, contiguous array in order to be properly sorted. This is not a requirement of any other hook, only this one.

If you need to be able to rearrange your children, but don't necessarily need sorting, this hook is based on `useRearrangeableChildren`.

|Parameter|Requirements|Description|
|-|-|-|
|`getIndex`|**Stable**|Given your child as a `VNode`, must return the value it passed as `info.index`. So whatever your component named the value it passes to `info.index`, this function must return that. E.G. `vnode => vnode.props.index`|
|`onRearranged`|Optional|Called any time `rearrange` is called.|

|Return|Guarantees|Description|
|-|-|-|
|`useRearrangedChildren`|**Stable**|This hook must be called with the children to order (as an array, not a `Fragment` or anything else).|
|`sort`|**Stable**|Call to sort the children in the direction of `"ascending"` or `"descending"`|
|`reverse`|**Stable**|Call to reverse the order the children are currently in|
|`shuffle`|**Stable**|Call to shuffle the children in a random order|
|`toJsonArray`|**Stable**|Returns an `Array<object>` of every child, either from `child.getSortValue` or the optional `transform` argument.|
|`indexMangler`|**Stable**|This function takes a component's original `index` prop and outputs a new index that represents its re-arranged position. In conjunction with `indexDemangler`, this can be used to perform math on indices (incrementing, decrementing, etc.). E.G. to decrement a component's index "c": indexDemangler(indexMangler(c) - 1)|
|`indexDemangler`|**Stable**|The inverse of `indexMangler`|



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
    * ...may also require or return `{ info: { ... } }` if it has something to contribute to `useManagedChild`'s special `info` parameter.
    * When hooks themselves use other hooks:
        * If `useFoo` calls `useBar` directly, then it will take parameters like `{ fooParameters: {...}, barParameters: {...} }` and return objects like `{ fooReturn: {...}, barReturn: {...} }`.
        * If `useFoo` relies on `useBar` (but doesn't call it itself!), then will do one of the following:
            * Take parameters like `{ fooParameters: { ... }, barReturn: { ... } }`, if it needs the return value of `useBar`.
            * Return values like `{ fooReturn: { ... }, barParameters: { ... } }`, if it needs `useBar` to be called with specific parameters in order to function (usually callbacks).
        * (The difference between those two is usually based on performance -- many, many hooks rely on `elementRefReturn.getElement`, for example, so the latter pattern allows us to just call `useRefElement` once and pass the result around to whoever needs it)
        * If `useFoo` and `useBar` both return a top-level `props`, they will be merged into one.
        * If `useFoo` and `useBar` both return a top-level `context`, they will be merged into one.
        * If `useFoo` and `useBar` both return a top-level `info`, they will be merged into one.
        * Occasionally, `props` or `context` may be suffixed with the specific role they refer to:
            * `useRandomId` returns `propsSource` and `propsReferencer` (and no `props`).
        

These rules should ideally make swizzling all these different parameters back and forth as foolproof as possible.








# Preact Extensions (TODO: Reformating)
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

Allows you to react to an element gaining or losing focus.

### `useHasCurrentFocus`
Specifically track whether an element is the *currently* focused element; if the element is de-focused (blurred) by, for example, clicking the `body`, then the element is no longer the *currently* focused element, and the change handler will be called.

|Parameter|Requirements|Description|
|-|-|-|
|`onCurrentFocusedChanged`|Optional, **Stable**|Called when the element itself gains or loses focus (`true` when focused, `false` when not focused)|
|`onCurrentFocusedInnerChanged`|Optional, **Stable**|Called when the element or any element within it gains or loses focus (`true` when any are focused, `false` when none are focused)|
|`refElementReturn`|`getElement`|`useRefElement` must be called before calling this hook.|

### `useHasLastFocus`
Specifically track whether an element is the *most recently* focused element. If the element is de-focused (blurred) by, for example, clicking the `body`, then the element is *still* the most recently focused element. The change handler will not be called until a new element gains focus.

|Parameter|Requirements|Description|
|-|-|-|
|`onLastFocusedChanged`|Optional, **Stable**|Called when this element is focused (with `true`), or when another element is focused (`false`). Not called when|
|`onLastFocusedInnerChanged`|Optional, **Stable**|Called when the element or any element within it gains or loses focus (`true` when any are focused, `false` when none are focused)|
|`refElementReturn`|`getElement`|`useRefElement` must be called before calling this hook.|

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

Allows you to react to changes in `document.activeElement` &mdash; basically any change of focus that happens on the page.

This hook does not re-render the component that uses it (unless you do).

|Parameter|Requirements|Description|
|---------|----|-----------|
|`onActiveElementChange`|Optional, **Stable**|Called any time `document.activeElement` changes with the new `Element`, or `null` if the currently focused element was de-focused (e.g. by clicking the `body`).|
|`onLastActiveElementChange`|Optional, **Stable**|Called any time `document.activeElement` changes to a focusable element, meaning this is *not* called when, for example, the the `body` is clicked to de-focus an `input`.|
|`onWindowFocusChange`|Optional, **Stable**|Called when the window loses or regains focus|
|`getDocument`|Required, **Stable**|Must return the current `Document` associated with the component that's being rendered. Generally just something like `() => element.ownerDocument`|
|`getWindow`|Optional, **Stable**|Must return the current `Window` associated with the component that's being rendered. The default is `() => getDocument().defaultView`|

|Return|Guarantees|Description|
|------|----------|-----------|
|`getActiveElement`|**Stable**|Getter that corresponds to the last value sent to `onActiveElementChange`|
|`getLastActiveElement`|**Stable**|Getter that corresponds to the last value sent to `onLastActiveElementChange`|
|`onWindowFocusChange`|**Stable**|Getter that corresponds to the last value sent to `onLastActiveElementChange`|

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

