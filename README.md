# Preact Prop Helpers

A small set of hooks related to modifying Preact props and a few other useful things.

```tsx 
const [size, setSize] = useState<ElementSize | null>(null);
const { useElementSizeProps } = useElementSize<HTMLDivElement>({ setSize });
const { offsetHeight, ...otherSizes } = (size ?? {});

// Do something fun with offsetHeight here

return <div {...useElementSizeProps(props)} />
```
Note that many of these props return an object containing both the hook's "result", if any, but also another "sub-hook" (e.g. `useElementSizeProps`) that needs to be used to modify the props you were going to pass to the `Element`. If you don't use a sub-hook returned by some of these hooks, chances are __nothing will happen, as if you never used the hook at all.__

There are a few reasons:

1. Keeping hook arguments and component props separate.  Any arguments you pass to the initial hook don't get mixed in with the props, making discovery easier, type-checking less complex, and in general just avoiding ambiguities with what any given prop will affect.

2. Allowing for deeper hook composition &ndash; it's not just prop-modifying hooks that can be returned.  See, for example, `useListNavigation`, which returns both a prop-modifying hook, but also a hook that's intented to be called once per child.

3. Type-checking.  Avoiding JSX errors with refs and event handlers in all scenarios relating to keeping the correct `Element` type around is extremely error-prone with enough edge cases to make a circle. By having an outer function that *just* looks for an `Element` type, 95% of all obscure "ref isn't compatible with ref" errors can be prevented.

## Summary of available hooks

(In *rough* order of usefulness and relevance)

|Hook|Description|
|------|------|
|`useMergedProps` (& `useMergedClasses`, `useMergedRefs`, `useMergedStyles`, `useMergedChildren`)	|Allows a component to use props from two (or more) separate unrelated sources.|
|`useChildManager` (& `useChildFlag`)				|Allows for child → parent communication, and more efficient parent → child communication (e.g. telling a single child to change itself instead of rerendering all children).|
|`useListNavigation` (& `useRovingTabIndex`, `useLinearNavigation`, `useTypeaheadNavigation`)	|Allows a component with children (like a select menu or radio group) to be treated as *one element to be tabbed into/out of*, with arrow keys and typeahead handling the navigation *within* the component.|
|`useGridNavigation`								|Complement to `useListNavigation` that is 2-dimensional and supports sorting &amp; filtering. |
|`useAsyncHandler` (& `useAsync`)					|Creates a synchronous event handler from an asynchronous one, and provides the component with the information it needs to display the current async state effectively. `useAsync` is a version that operates on any async function, instead of just event handlers.|
|`useRefElement`									|Allows a component to use the `Element` that it actually renders.|
|`useElementSize`									|Allows a component to use its size as part of the rendering process.|
|`useLogicalDirection`								|Lets a component measure its own "text flow" direction (is the inline direction ltr or rtl? is the block direction vertical or horizontal? etc.), and convert between physical and logical dimensions (e.g. knowing that "inline-start" is equivalent to "left" in this writing mode).|
|`useHasFocus` (& `useActiveElement`)				|Allows a component to detect if it or its children have focus, and if nothing's focused, additionally detect if it is still the *most recently* focused element.|
|`useFocusTrap` (& `useBlockingElement`)			|Allows a component to make itself modal so that no interactions outside of it are considered, primarily for dialogs and such, restoring focus when done.|
|`useDraggable` & `useDroppable`					|Allows a component to quickly implement the Drag & drop API, returning information about the current operation.|
|`useDocumentClass`                                 |Allows you to add a class to, e.g., the root `<html>` element, and then remove it on unmount automatically.|
|`useGlobalEventHandler`							|Ensures an event handler is attached to `window`, `document`, etc. as long as the component is mounted.|
|`useLocalEventHandler`								|Alternate way of attaching/detaching an event handler to the component, primarily for 3rd party APIs.|
|`useRandomId`										|Allows a component to use a randomly-generated ID. Also lets another component reference whatever ID was used, e.g. in a `for` or `aria-labelledby` prop.|
|`useSortableChildren`|                             |A component using this hook can re-order its immediate children arbitrarily in response to something.|
|`useTimeout`, `useInterval`, `useAnimationFrame`	|Runs the specified function (which doesn't need to be stable) with the given delay/interval/on every frame. In particular `useTimeout` is very effective as "`useEffect` but on a delay".|
|`useStableCallback`								|`useCallback`, but doesn't require dependencies and is always stable. __Cannot be used during render__, only during event handlers, `useLayoutEffect`, etc.|
|`useStableGetter`									|Allows you to use some variable within `useEffect` or `useCallback` without including it in a dependency array. __Cannot be used during render__, only during event handlers, `useLayoutEffect`, etc.|
|`useState`											|Identical to the built-in, but returns a third value, `getState`, that is stable everywhere, and __can be used during render__. In general, this is the *only* getter that can be used there.|
|`usePersistentState`								|Identical to `useState`, but persists across browsing sessions, separate tabs, etc.|
|`usePassiveState`                                  |Offshoot of `useState` that, instead of re-rendering, runs a `useEffect`-esque effect & cleanup function when the state changes.|
|`useEffect`, `useLayoutEffect`						|Identical to the built-ins, but provides previous dependency values as well as a list of what exactly changed (mainly useful for debugging). In most cases, the built-ins are just fine.|
|`useForceUpdate`|Returns a function that forces the component that uses it to re-render itself when called (any children just follow normal diffing rules past that point). The returned function is completely stable.|
|`useMutationObserver`								|`MutationObserver`, but In a Hook™!|
|`useMediaQuery`									|Measures if a given media query matches the device or not.|


# General Purpose Prop Hooks

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
export function useRefElement<T extends EventTarget>(): UseRefElementReturnType<T>;
function useRefElementProps<P extends UseRefElementPropsParameters<T>>(props: P): MergedProps<..., P>;

export interface UseRefElementReturnType<T extends EventTarget> {
    element: T | null;
    getElement(): T | null; // Stable (w.r.t. dependency arrays)
    useRefElementProps: UseRefElementProps<T>;
}
```

Returns the element referenced by a ref as soon as the element mounts, before the first paint.  Don't forget to always include the element as a dependency argument whereever you use it, not just because it's required, but also so that you can use the `element` as soon as it's ready, which is almost always the whole point.

That being said, if you do need the element and explicitly need to leave it *out* of a dependency array, `getElement` can do that, as it is stable across all renders.

You can either store the element via `setState` and re-render to do something in `useEffect`, or you can use `getElement` to just use the element during, e.g., and event handler, which won't cause a re-render.

Example #1:
```tsx
const [element, setElement] = useState<HTMLDivElement>(null);

const { getElement, useRefElementProps } = useRefElement<HTMLDivElement>({ 
    onElementChange: setElement
});

useLayoutEffect(() => {
    if (element) {
        // Do something fun with the HTMLDivElement.

        return () => { /* Fun time's over, we're unmounting */ }
    }
}, [element]);

return <div {...useRefElementProps(props)} />
```

Example #2:
```tsx
const { getElement, useRefElementProps } = useRefElement<HTMLDivElement>({ 

    // Optional, but if onElementChange exists,
    // the function must be stable across all renders,
    // which the setElement from useState is.
    onElementChange: setElement
});

return <div {...useRefElementProps({ onClick: e => {
    const element = getElement();
    if (element) {
        // Do something fun with the HTMLDivElement.
    }
} })} />
```

## `useDraggable`, `useDroppable`
```tsx
export function useDraggable<E extends HTMLElement>(args: UseDraggableParameters): UseDraggableReturnType<E>;
function useDraggableProps<P extends UseDraggablePropsParameters<E>>(props: P): MergedProps<..., P>;

export function useDroppable<E extends HTMLElement>(args: UseDroppableParameters): UseDroppableReturnType<E>;
function useDroppableProps<P extends UseDroppablePropsParameters<E>>(props: P): MergedProps<..., P>;
```
`useDraggable` lets an element provide data that can be dropped somewhere else.  Returns both whether the element is currently being dragged, and the `dropEffect` of whatever it was dropped onto when that happens.  If, for example, the `dropEffect` changes to "move", it means the component should `useEffect` and delete itself however appropriate.

`useDroppable` lets an element accept things that are being dragged.  While a draggable object is hovering over the element, this hook will return the MIME types of the data and/or the files that are being dragged. After it's been dropped, the hook will return the actual string/file data (possibly after asynchronously waiting for it to load).

## `useChildManager`
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
export function useElementSize<E extends HTMLElement>({ observeBox, setSize }: UseElementSizeParameters): UseElementSizeReturnType<E>;
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
export function useElementSize<E extends HTMLElement>({ observeBox }?: UseElementSizeParameters): UseElementSizeReturnType<E>;
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

## `useHasFocus`

Allows you to inspect if the given element is focused.  Also tracks focus across the page and lets you determine if an inner element instead has focus (uses `contains`, so both may be true at once).

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

`usePassiveState` accepts a `useEffect`-esque callback that will run any time the state value changes.  If you hook that up to a normal `setState` call from a normal `useState` hook, it'll act just like regular state again.

Effectively, `usePassiveState` lets you choose whether you'd like the state to be "active" (and re-render the component each time it changes), or "passive" (and just make the state available to anyone who asks during an event handler or whatever). 

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

