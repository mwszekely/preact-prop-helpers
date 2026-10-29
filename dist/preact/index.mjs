import { Fragment, cloneElement, createContext, createElement, options } from "preact";
import { useCallback as useCallback$1, useContext, useDebugValue, useEffect, useId, useImperativeHandle, useLayoutEffect, useMemo, useReducer, useRef, useRef as useRef$1, useState as useState$1 } from "preact/hooks";
import { createPortal, forwardRef, memo, useEffectEvent } from "preact/compat";
import { identity, identity as identity$1, noop } from "lodash-es";
import { isFocusable, isTabbable } from "tabbable";
import { MapOfSets } from "map-and-set-extensions";
import { asyncToSync } from "async-to-sync";
import { clsx } from "clsx";
// src/util/lib-shared.tsx
/** These are all the event mappings that are shared between Preact/React */
function getEventMapping$1() {
	return {
		command: "onCommand",
		abort: "onAbort",
		animationend: "onAnimationEnd",
		animationstart: "onAnimationStart",
		animationiteration: "onAnimationIteration",
		beforeinput: "onBeforeInput",
		blur: "onBlur",
		canplay: "onCanPlay",
		canplaythrough: "onCanPlayThrough",
		change: "onChange",
		click: "onClick",
		compositionend: "onCompositionEnd",
		compositionstart: "onCompositionStart",
		compositionupdate: "onCompositionUpdate",
		contextmenu: "onContextMenu",
		cut: "onCut",
		drag: "onDrag",
		dragend: "onDragEnd",
		dragenter: "onDragEnter",
		dragleave: "onDragLeave",
		dragover: "onDragOver",
		dragstart: "onDragStart",
		drop: "onDrop",
		durationchange: "onDurationChange",
		emptied: "onEmptied",
		ended: "onEnded",
		error: "onError",
		focus: "onFocus",
		gotpointercapture: "onGotPointerCapture",
		input: "onInput",
		invalid: "onInvalid",
		keydown: "onKeyDown",
		keypress: "onKeyPress",
		keyup: "onKeyUp",
		load: "onLoad",
		loadeddata: "onLoadedData",
		loadedmetadata: "onLoadedMetadata",
		loadstart: "onLoadStart",
		lostpointercapture: "onLostPointerCapture",
		mousedown: "onMouseDown",
		mouseenter: "onMouseEnter",
		mouseleave: "onMouseLeave",
		mousemove: "onMouseMove",
		mouseout: "onMouseOut",
		mouseover: "onMouseOver",
		mouseup: "onMouseUp",
		paste: "onPaste",
		pause: "onPause",
		play: "onPlay",
		playing: "onPlaying",
		pointercancel: "onPointerCancel",
		pointerdown: "onPointerDown",
		pointerenter: "onPointerEnter",
		pointerleave: "onPointerLeave",
		pointermove: "onPointerMove",
		pointerout: "onPointerOut",
		pointerover: "onPointerOver",
		pointerup: "onPointerUp",
		progress: "onProgress",
		reset: "onReset",
		scroll: "onScroll",
		seeked: "onSeeked",
		seeking: "onSeeking",
		select: "onSelect",
		stalled: "onStalled",
		submit: "onSubmit",
		suspend: "onSuspend",
		timeupdate: "onTimeUpdate",
		touchcancel: "onTouchCancel",
		touchend: "onTouchEnd",
		touchmove: "onTouchMove",
		touchstart: "onTouchStart",
		transitionend: "onTransitionEnd",
		volumechange: "onVolumeChange",
		waiting: "onWaiting",
		wheel: "onWheel",
		fullscreenchange: null,
		animationcancel: null,
		auxclick: null,
		cancel: null,
		close: null,
		copy: null,
		cuechange: null,
		fullscreenerror: null,
		ratechange: null,
		resize: null,
		scrollend: null,
		securitypolicyviolation: null,
		selectionchange: null,
		selectstart: null,
		slotchange: null,
		transitioncancel: null,
		transitionrun: null,
		transitionstart: null,
		webkitanimationend: null,
		webkitanimationiteration: null,
		webkitanimationstart: null,
		webkittransitionend: null
	};
}
// src/util/use-before-layout-effect.tsx
const toRun = /* @__PURE__ */ new Map();
const commitName = "diffed";
const newCommit = (vnode, ...args) => {
	for (const [_id, effectInfo] of toRun) {
		const oldInputs = effectInfo.prevInputs;
		if (argsChanged(oldInputs, effectInfo.inputs)) {
			effectInfo.cleanup?.();
			effectInfo.cleanup = effectInfo.effect();
			effectInfo.prevInputs = effectInfo.inputs;
		}
	}
	toRun.clear();
	originalCommit?.(vnode, ...args);
};
const originalCommit = options[commitName];
options[commitName] = newCommit;
let incrementingId = 0;
function nextId() {
	let next = ++incrementingId;
	if (incrementingId >= Number.MAX_SAFE_INTEGER) incrementingId = -Number.MAX_SAFE_INTEGER;
	return next;
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
const useBeforeLayoutEffect = (function useBeforeLayoutEffect(effect, inputs) {
	const ref = useRef$1(null);
	ref.current ??= nextId();
	const id = ref.current;
	if (effect) toRun.set(id, {
		effect,
		inputs,
		cleanup: null
	});
	else toRun.delete(id);
});
function argsChanged(oldArgs, newArgs) {
	return !!(!oldArgs || oldArgs.length !== newArgs?.length || newArgs?.some((arg, index) => arg !== oldArgs[index]));
}
// src/util/lib-preact.tsx
const useCallback = useCallback$1;
function debounceRendering(f) {
	(options.debounceRendering ?? queueMicrotask)(f);
}
const onfocusin = "onfocusin";
const onfocusout = "onfocusout";
function getEventMapping() {
	return {
		beforetoggle: null,
		beforematch: null,
		pointerrawupdate: null,
		dblclick: "onDblClick",
		focusin: "onFocusIn",
		focusout: "onFocusOut",
		formdata: "onFormData",
		toggle: "onToggle",
		contextlost: null,
		contextrestored: null,
		...getEventMapping$1()
	};
}
// src/preact-extensions/use-passive-state.tsx
/**
* Debug hook. Given a value or set of values, emits a console error if any of them change from one render to the next.
* 
* @remarks Eventually, when useEvent lands, we hopefully won't need this.
*/
function useEnsureStability(parentHookName, ...values2) {
	if (process.env.NODE_ENV !== "development") return;
	const helperToEnsureStability = useRef([]);
	const shownError = useRef([]);
	useHelper(values2.length, -1);
	values2.forEach(useHelper);
	return;
	function useHelper(value, i) {
		const index = i + 1;
		if (helperToEnsureStability.current[index] === void 0) helperToEnsureStability.current[index] = value;
		if (helperToEnsureStability.current[index] != value) {
			if (!shownError.current[index]) {
				debugger;
				console.error(`The hook ${parentHookName} requires some or all of its arguments remain stable across each render; please check the ${i}-indexed argument (${i >= 0 ? JSON.stringify(values2[i]) : "the number of supposedly stable elements"}).`);
				shownError.current[index] = true;
			}
		}
	}
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
function usePassiveState(onChange, getInitialValue, { debounceRendering: customDebounceRendering, skipMountInitialization } = {
	debounceRendering,
	skipMountInitialization: false
}) {
	skipMountInitialization ??= false;
	useEnsureStability("usePassiveState", skipMountInitialization);
	const valueRef = useRef(Unset);
	const reasonRef = useRef(Unset);
	const warningRef = useRef(false);
	const dependencyToCompareAgainst = useRef(Unset);
	const cleanupCallbackRef = useRef(void 0);
	useEnsureStability("usePassiveState", onChange, getInitialValue, customDebounceRendering);
	const onShouldCleanUp = useCallback(() => {
		const cleanupCallback = cleanupCallbackRef.current;
		if (cleanupCallback) cleanupCallback();
	}, []);
	const tryEnsureValue = useCallback(() => {
		if (valueRef.current === Unset && getInitialValue != void 0) try {
			const initialValue = getInitialValue();
			valueRef.current = initialValue;
			cleanupCallbackRef.current = onChange?.(initialValue, void 0, void 0) ?? void 0;
		} catch (ex) {}
	}, []);
	const getValue = useCallback(() => {
		if (warningRef.current) console.warn("During onChange, prefer using the (value, prevValue) arguments instead of getValue -- it's ambiguous as to if you're asking for the old or new value at this point in time for this component.");
		if (valueRef.current === Unset) tryEnsureValue();
		return valueRef.current === Unset ? void 0 : valueRef.current;
	}, []);
	if (!skipMountInitialization) useLayoutEffect(() => {
		tryEnsureValue();
	}, []);
	return [getValue, useCallback((arg, reason) => {
		const nextValue = arg instanceof Function ? arg(valueRef.current === Unset ? void 0 : valueRef.current) : arg;
		if (nextValue !== valueRef.current) {
			dependencyToCompareAgainst.current = valueRef.current;
			valueRef.current = nextValue;
			reasonRef.current = reason;
			(customDebounceRendering ?? debounceRendering)(() => {
				const nextReason = reasonRef.current;
				const nextDep = valueRef.current;
				const prevDep = dependencyToCompareAgainst.current;
				if (dependencyToCompareAgainst.current != valueRef.current) {
					valueRef.current = dependencyToCompareAgainst.current = Unset;
					warningRef.current = true;
					try {
						onShouldCleanUp();
						valueRef.current = nextDep;
						cleanupCallbackRef.current = onChange?.(nextDep, prevDep === Unset ? void 0 : prevDep, nextReason) ?? void 0;
					} finally {
						warningRef.current = false;
					}
				}
				dependencyToCompareAgainst.current = Unset;
			});
		}
	}, [])];
}
const Unset = Symbol();
function returnTrue() {
	return true;
}
function returnFalse() {
	return false;
}
function returnNull() {
	return null;
}
function returnUndefined() {}
function returnZero() {
	return 0;
}
/** 
* An alternative to use for `customDebounceRendering` that causes `usePassiveState` to run changes without waiting a tick.
*/
function runImmediately(f) {
	f();
}
// src/preact-extensions/use-stable-getter.tsx
/**
* Given an input value, returns a constant getter function that can be used 
* inside of `useEffect` and friends without including it in the dependency array.
* 
* @remarks This uses `options.diffed` in order to run before everything, even
* ref assignment. This means this getter is safe to use anywhere ***except the render phase***.
*/
function useStableGetter(value) {
	return useEffectEvent(() => value);
}
/**
* Like useMemo, but checks objects (shallowly)
* 
* @param t 
* @returns 
*/
function useMemoObject(t) {
	return useMemo(() => {
		return t;
	}, Object["values"](t));
}
// src/preact-extensions/use-stable-callback.tsx
function isStableGetter(obj) {
	return false;
}
function setIsStableGetter(obj) {
	return obj;
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
function useStableCallback(fn, noDeps) {
	useEnsureStability("useStableCallback", noDeps == null, noDeps?.length, isStableGetter(fn));
	if (isStableGetter(fn)) return fn;
	if (noDeps == null) {
		const currentCallbackGetter = useStableGetter(fn);
		return setIsStableGetter(useCallback(((...args) => {
			return currentCallbackGetter()(...args);
		}), []));
	} else {
		console.assert(noDeps.length === 0);
		return setIsStableGetter(useCallback(fn, []));
	}
}
/**
* #__NO_SIDE_EFFECTS__
*/
function useStableMergedCallback(...fns) {
	return useStableCallback((...args) => {
		for (let i = 0; i < fns.length; ++i) fns[i]?.(...args);
	});
}
// src/dom-helpers/use-event-handler.tsx
/**
* Allows attaching an event handler to any *non-Preact* element, and removing it when the component using the hook unmounts. The callback does not need to be stable across renders.
* 
* @remarks `"mode"` controls if there's one handler that calls all your functions (default), or one handler added per function (`"single"`). 
* 
* The default, `"grouped"`, is faster when you have, say, a button component, used hundreds of times on a page, that each installs a global event handler.
* 
* @param target - A *non-Preact* node to attach the event to.
*/
function useGlobalHandler(target, type, handler, options, mode) {
	mode ||= "grouped";
	useEnsureStability("useGlobalHandler", target, mode);
	if (!target) return;
	if (mode === "grouped") useGlobalHandlerGrouped(target, type, handler, options);
	else useGlobalHandlerSingle(target, type, handler, options);
}
let mapThing = /* @__PURE__ */ new Map();
function doMapThing(op, target, type, handler, options) {
	if (handler) {
		const optionsKey = JSON.stringify(options);
		const byType = mapThing.get(target) || /* @__PURE__ */ new Map();
		const byOptions = byType.get(type) || /* @__PURE__ */ new Map();
		const info = byOptions.get(optionsKey) || {
			listener: null,
			listeners: /* @__PURE__ */ new Set()
		};
		op(info, handler);
		byOptions.set(optionsKey, info);
		byType.set(type, byOptions);
		mapThing.set(target, byType);
	}
}
function addToMapThing(target, type, handler, options) {
	doMapThing((info, h) => {
		info.listeners.add(h);
		if (info.listener == null) target.addEventListener(type, info.listener = (e) => info.listeners.forEach((fn) => fn(e)), options);
	}, target, type, handler, options);
}
function removeFromMapThing(target, type, handler, options) {
	doMapThing((info, h) => {
		info.listeners.delete(h);
		if (info.listener == null) target.removeEventListener(type, info.listener = (e) => info.listeners.forEach((fn) => fn(e)), options);
	}, target, type, handler, options);
}
/**
* This is way faster for large numbers of event handlers.
* 
* For example, if every button listens for a global click, or something,
* it would be nice if it was efficient at least. 
*/
function useGlobalHandlerGrouped(target, type, handler, options) {
	let stableHandler = useStableCallback(handler ?? (() => {}));
	if (handler == null) stableHandler = null;
	useEffect(() => {
		if (stableHandler) {
			addToMapThing(target, type, stableHandler, options);
			return () => removeFromMapThing(target, type, stableHandler, options);
		}
	}, [
		target,
		type,
		stableHandler
	]);
}
function useGlobalHandlerSingle(target, type, handler, options) {
	let stableHandler = useStableCallback(handler ?? (() => {}));
	if (handler == null) stableHandler = null;
	useEffect(() => {
		if (stableHandler) {
			target.addEventListener(type, stableHandler, options);
			return () => target.removeEventListener(type, stableHandler, options);
		}
	}, [
		target,
		type,
		stableHandler
	]);
}
// src/util/assert.tsx
/**
* Throws a (Typescript compiler) error if the passed object is anything but the empty object `{\}` or `void`.
* 
* **Does nothing at runtime -- type checking only.**
*
* Use this to ensure that your spread operators work correctly and cover all cases.
*
* @param _a - The remaining spread parameters of a given object that you expect to be empty (because you properly accounted for all the properties that exist in it, and want to ensure it stays that way)
*/
function assertEmptyObject(_a) {}
// src/util/get-window.tsx
function getWindow(element) {
	return typeof window == "undefined" ? void 0 : element?.ownerDocument?.defaultView ?? globalThis ?? {};
}
function getDocument(element) {
	return typeof window == "undefined" ? void 0 : element?.ownerDocument ?? getWindow()?.document ?? void 0;
}
// src/util/use-call-count.tsx
globalThis.requestIdleCallback ??= (callback) => {
	return setTimeout(() => {
		callback({
			didTimeout: false,
			timeRemaining: () => {
				return 0;
			}
		});
	}, 5);
};
let timeoutHandle = null;
let i = 0;
/**
* Adds a function to your browser's Performance tab, under "markers", so you can watch the call stack more clearly than random interval sampling (only if process.env.NODE_ENV is "development").
* 
* @remarks Some of the more basic hooks, like `setState`, do not call `useMonitoring` at all. 
* They are so small that their duration generally rounds down to 0 (or epsilon), so using
* this function usually makes no sense on them. The performance monitoring takes more time
* than the function itself.
*/
function useMonitoring(originalHook) {
	return (process.env.NODE_ENV === "development" && globalThis._monitor_call_duration ? useMonitoringImpl : dontUseMonitoringImpl)(originalHook);
}
/**
* 
*/
function dontUseMonitoringImpl(t) {
	return t();
}
/**
* 
*/
function useMonitoringImpl(originalHook) {
	let wrappedHook = originalHook;
	if (process.env.NODE_ENV === "development" && globalThis._monitor_call_duration) wrappedHook = (function(...args) {
		const r = useRef(++i);
		monitorCallCount(originalHook);
		const start = performance.mark(`${originalHook.name}-start-${r.current}`);
		const ret = originalHook(...args);
		const end = performance.mark(`${originalHook.name}-end-${r.current}`);
		performance.measure(originalHook.name, start.name, end.name);
		return ret;
	});
	return wrappedHook();
}
/**
* When called inside a hook, monitors each call of that hook and prints the results to a table once things settle.
* 
* @remarks Re-renders and such are all collected together when the table is printed to the console with `requestIdleCallback`.
*/
function monitorCallCount(hook) {
	if (process.env.NODE_ENV !== "development") return;
	const name = hook.name;
	if (filterAll || filters.has(name)) return;
	console.assert(name.length > 0);
	globalThis._hookCallCount ??= { callCounts: {} };
	globalThis._hookCallCount.callCounts[name] ??= {
		moment: 0,
		total: 0
	};
	globalThis._hookCallCount.callCounts[name].moment += 1;
	globalThis._hookCallCount.callCounts[name].total += 1;
	if (timeoutHandle == null) timeoutHandle = requestIdleCallback(() => {
		const o = Object.entries(globalThis._hookCallCount.callCounts).map(([hook, counts]) => {
			return {
				Hook: hook || "?",
				Now: counts?.moment || 0,
				Total: counts?.total || 0
			};
		}).filter(({ Now }) => {
			return !!Now;
		}).sort(({ Now: lhsM }, { Now: rhsM }) => {
			if (!lhsM && !rhsM) return 0;
			lhsM ||= Infinity;
			rhsM ||= Infinity;
			return lhsM - rhsM;
		});
		console.table(o, [
			"Hook",
			"Now",
			"Total"
		]);
		Object.entries(globalThis._hookCallCount.callCounts).forEach(([, counts]) => {
			counts.moment = 0;
		});
		timeoutHandle = null;
	});
}
let filterAll = false;
const filters = /* @__PURE__ */ new Set();
/**
* 
*/
function hideCallCount(hook) {
	filterAll = hook === "all";
	if (hook != "all") filters.add(hook.name);
}
// src/component-detail/dismissal/use-backdrop-dismiss.tsx
/**
* Handles events for a backdrop on a modal dialog -- the kind where the user expects the modal to close when they click/tap outside of it.
* 
* @compositeParams
*/
function useBackdropDismiss({ backdropDismissParameters: { dismissBackdropActive: open, onDismissBackdrop: onCloseUnstable, ...void1 }, refElementPopupReturn: { getElement, ...void3 }, ...void2 }) {
	return useMonitoring(function useBackdropDismiss() {
		const getOpen = useStableGetter(open);
		const onClose = useStableGetter(onCloseUnstable);
		const onBackdropClick = useCallback(function onBackdropClick(e) {
			if (!getOpen()) return;
			let element = getElement();
			let foundInsideClick = false;
			if (e.target && element && element.contains(e.target)) foundInsideClick = true;
			if (!foundInsideClick) onClose()?.(e);
		}, []);
		useGlobalHandler(getWindow(), "mousedown", open ? onBackdropClick : null, { capture: true });
		useGlobalHandler(getWindow(), "touchstart", open ? onBackdropClick : null, { capture: true });
	});
}
// src/util/event.tsx
const EventDetail = Symbol("event-detail");
function getEventDetail(e) {
	return e[EventDetail];
}
function enhanceEvent(e, detail) {
	const event = e ?? {};
	event[EventDetail] ??= {};
	Object.assign(event[EventDetail], detail);
	return event;
}
// src/component-detail/dismissal/use-escape-dismiss.tsx
const MagicWindowKey = "__preact-prop-helpers-escape-key-dismiss__";
function getElementDepth(element) {
	let depth = 0;
	let parent = element.parentElement;
	while (parent) {
		depth += 1;
		parent = parent.parentElement;
	}
	return depth;
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
function useEscapeDismiss({ escapeDismissParameters: { onDismissEscape: onClose, dismissEscapeActive: open, getDocument: unstableGetDocument, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }) {
	return useMonitoring(function useEscapeDismiss() {
		const stableOnClose = useStableGetter(onClose);
		const getDocument = useStableCallback(unstableGetDocument);
		const getDepth = useStableGetter(parentDepth + 1);
		useEffect(() => {
			const window = getDocument().defaultView;
			window[MagicWindowKey] ??= {
				microtaskQueued: false,
				elementQueue: /* @__PURE__ */ new Map()
			};
			const info = window[MagicWindowKey];
			if (open) {
				window.addEventListener("keydown", handler, { capture: true });
				return () => {
					const element = getElement();
					if (element && info.elementQueue) info.elementQueue.delete(element);
					window.removeEventListener("keydown", handler, { capture: true });
				};
			}
			function handler(e) {
				if (e.key == "Escape") {
					e.preventDefault();
					e.stopPropagation();
					const onClose2 = () => {
						stableOnClose()?.(enhanceEvent(e, { reason: "escape" }));
					};
					const element = getElement();
					if (element) {
						const treeDepth = getElementDepth(element);
						const depth = getDepth();
						info.elementQueue.set(element, {
							depth,
							onClose: onClose2,
							treeDepth
						});
					}
					if (!info.microtaskQueued) {
						info.microtaskQueued = true;
						setTimeout(() => {
							const { elementQueue } = info;
							info.microtaskQueued = false;
							info.elementQueue = /* @__PURE__ */ new Map();
							let deepestDepth = -Infinity;
							let deepestTreeDepth = -Infinity;
							let deepestOnClose = null;
							for (const [element, { depth, onClose, treeDepth }] of elementQueue) {
								let tieBroken = false;
								if (depth == deepestDepth) {
									if (treeDepth > deepestTreeDepth) tieBroken = true;
								}
								if (depth > deepestDepth || depth == deepestDepth && tieBroken) {
									deepestDepth = depth;
									deepestTreeDepth = treeDepth;
									deepestOnClose = onClose;
								}
							}
							deepestOnClose?.();
						}, 0);
					}
				}
			}
		}, [open]);
	});
}
// src/component-detail/dismissal/use-lost-focus-dismiss.tsx
/**
* Invokes a callback when focus travels outside of the component's element.
* 
* @remarks TODO: This is not intended for recursive structures, like dialogs that open dialogs, or menus that open menus, but does properly handle, e.g., the fact that a menu's menubutton having focus still counts as the menu having focus.
* 
* @compositeParams 
*/
function useLostFocusDismiss({ refElementPopupReturn: { getElement: getPopupElement, ...void3 }, refElementSourceReturn, lostFocusDismissParameters: { dismissLostFocusActive: open, onDismissLostFocus: onClose, ...void4 }, ...void1 }) {
	return useMonitoring(function useLostFocusDismiss() {
		const { getElement: getSourceElement, ...void2 } = refElementSourceReturn ?? {};
		const stableOnClose = useStableGetter(onClose);
		const getOpen = useStableGetter(open);
		return { activeElementParameters: { onLastActiveElementChange: useCallback((newElement, _prevElement, e) => {
			const open = getOpen();
			const sourceElement = getSourceElement?.();
			const popupElement = getPopupElement();
			if (!(sourceElement?.contains(newElement) || popupElement?.contains(newElement))) {
				if (open) {
					console.assert(e != null);
					stableOnClose()?.(e);
				}
			}
		}, [getSourceElement]) } };
	});
}
// src/dom-helpers/use-merged-children.tsx
/**
* Combines two `children`.
* 
* @remarks This is fairly trivial and not even technically a hook, as it doesn't use any other hooks, but is this way for consistency.
* 
* TODO: This could accept a variable number of arguments to be consistent with useMergedProps, but I feel like it might be a performance hit.
*/
function useMergedChildren(lhs, rhs) {
	if (lhs == null && rhs == null) return;
	else if (lhs == null) return rhs;
	else if (rhs == null) return lhs;
	else return createElement(Fragment, {}, lhs, rhs);
}
// src/dom-helpers/use-merged-classes.tsx
/**
* Merged the `class` and `className` properties of two sets of props into a single string.
* 
* @remarks Duplicate classes are removed (order doesn't matter anyway).
*/
function useMergedClasses(...classes) {
	let classesSet = /* @__PURE__ */ new Set();
	for (let c of classes) if (typeof c == "string" && c.trim()) classesSet.add(c);
	if (classesSet.size) return Array.from(classesSet).join(" ");
	else return;
}
// src/dom-helpers/use-merged-refs.tsx
function processRef(instance, ref) {
	if (typeof ref === "function") ref(instance);
	else if (ref != null) ref.current = instance;
	else {
		debugger;
		console.assert(false, "Unknown ref type found that was neither a RefCallback nor a RefObject");
	}
}
/**
* Combines two refs into one. This allows a component to both use its own ref *and* forward a ref that was given to it.
* 
* @remarks Or just use {@link useMergedProps}
*/
function useMergedRefs(rhs, lhs) {
	const combined = useStableCallback(function combined(current) {
		processRef(current, lhs);
		processRef(current, rhs);
	});
	if (lhs == null && rhs == null) return;
	else if (lhs == null) {
		if (process.env.NODE_ENV === "development") console.assert(typeof rhs == "function" || "current" in rhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
		return rhs;
	} else if (rhs == null) {
		if (process.env.NODE_ENV === "development") console.assert(typeof lhs == "function" || "current" in lhs, "Unknown ref type found that was neither a RefCallback nor a RefObject");
		return lhs;
	} else return combined;
}
// src/dom-helpers/use-merged-styles.tsx
function styleStringToObject(style) {
	return Object.fromEntries(style.split(";").map((statement) => statement.split(":")));
}
/**
* Merges two style objects, returning the result.
* 
* @param style - The user-given style prop for this component
* @param obj - The CSS properties you want added to the user-given style
* @returns A CSS object containing the properties of both objects.
*/
function useMergedStyles(lhs, rhs) {
	if (!lhs && !rhs) return void 0;
	if (typeof lhs != typeof rhs) {
		if (lhs && !rhs) return lhs;
		if (!lhs && rhs) return rhs;
		if (lhs && rhs) {
			if (typeof lhs == "string") return useMergedStyles(styleStringToObject(lhs), rhs);
			if (typeof rhs == "string") return useMergedStyles(lhs, styleStringToObject(rhs));
		}
		return;
	}
	if (typeof lhs == "string") return `${lhs};${rhs ?? ""}`;
	return {
		...lhs ?? {},
		...rhs ?? {}
	};
}
// src/dom-helpers/use-merged-props.tsx
let log = console.warn;
/**
* When `useMergedProps` encounters a conflict, the function passed here will be called.
* 
* @defaultValue `console.warn`
*/
function enableLoggingPropConflicts(log2) {
	log = log2;
}
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
function useMergedProps(...allProps) {
	useEnsureStability("useMergedProps", allProps.length);
	let ret = {};
	for (let nextProps of allProps) useMergedPropsHelper(ret, nextProps);
	return ret;
}
const knowns = /* @__PURE__ */ new Set([
	"children",
	"ref",
	"className",
	"class",
	"style"
]);
function mergeUnknown(key, lhsValue, rhsValue) {
	if (typeof lhsValue === "function" || typeof rhsValue === "function") return mergeFunctions(lhsValue, rhsValue);
	else {
		if (lhsValue == null && rhsValue == null) {
			if (rhsValue === null && lhsValue === void 0) return rhsValue;
			else return lhsValue;
		}
		if (lhsValue == null) return rhsValue;
		else if (rhsValue == null) return lhsValue;
		else if (rhsValue == lhsValue) return rhsValue;
		else {
			log?.(`The prop "${key}" cannot simultaneously be the values ${lhsValue} and ${rhsValue}. One must be chosen outside of useMergedProps.`);
			return rhsValue;
		}
	}
}
/**
* Helper function.
* 
* This is one of the most commonly called functions in this and consumer libraries,
* so it trades a bit of readability for speed (i.e. we don't decompose objects and just do regular property access, iterate with `for...in`, instead of `Object.entries`, etc.)
*/
function useMergedPropsHelper(target, mods) {
	target.ref = useMergedRefs(target.ref, mods.ref);
	target.style = useMergedStyles(target.style, mods.style);
	target.className = useMergedClasses(target["class"], target.className, mods["class"], mods.className);
	target.children = useMergedChildren(target.children, mods.children);
	if (target.ref === void 0) delete target.ref;
	if (target.style === void 0) delete target.style;
	if (target.className === void 0) delete target.className;
	if (target["class"] === void 0) delete target["class"];
	if (target.children === void 0) delete target.children;
	for (const rhsKeyU in mods) {
		const rhsKey = rhsKeyU;
		if (knowns.has(rhsKey)) continue;
		target[rhsKey] = mergeUnknown(rhsKey, target[rhsKey], mods[rhsKey]);
	}
}
/**
* #__NO_SIDE_EFFECTS__
*/
function mergeFunctions(lhs, rhs) {
	if (!lhs) return rhs;
	if (!rhs) return lhs;
	return (...args) => {
		const lv = lhs(...args);
		const rv = rhs(...args);
		if (lv instanceof Promise || rv instanceof Promise) return Promise.all([lv, rv]);
	};
}
// src/util/stack.tsx
function generateStack() {
	if (process.env.NODE_ENV === "development" && globalThis._generate_setState_stacks) try {
		throw new Error();
	} catch (e) {
		return e.stack;
	}
}
/**
* Returns a function that retrieves the stack at the time this hook was called (in development mode only).
* 
* @remarks The global variable `_generate_setState_stacks` must be true, or no stack will be generated.
*/
function useStack() {
	if (process.env.NODE_ENV === "development") {
		const stack = useMemo(generateStack, []);
		return useCallback(() => stack, []);
	} else return returnEmptyString;
}
function returnEmptyString() {
	return "";
}
// src/util/focus.tsx
/**
* If you want a single place to put a debugger for tracking focus,
* here:
*/
function focus(e) {
	if (process.env.NODE_ENV === "development" && globalThis.LOG_FOCUS_CHANGES === true) {
		console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e);
		console.log(generateStack());
	}
	e?.focus?.();
}
/**
* When an element unmounts, default HTML behavior is to just send focus to the body, which is wildly unhelpful. It means you lose your place in the keyboard tab order.
* 
* If you still have access to the element that's unmounting, or perhaps its parent from beforehand, this will find the next suitable element to send focus to instead of the body.
* 
* **Important**: This function is linear on the number of DOM nodes in your document, so it's not particularly fast. Only call it once when you need its value, not every time tab focus changed or something.
*/
function findBackupFocus(unmountingElement) {
	if (unmountingElement == null) return globalThis.document.body;
	let document = unmountingElement.ownerDocument;
	const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_ELEMENT);
	let node = walker.firstChild();
	let bestCandidateBefore = null;
	let bestCandidateAfter = null;
	let w = false;
	while (node) {
		let pos = node.compareDocumentPosition(unmountingElement);
		if (pos & Node.DOCUMENT_POSITION_DISCONNECTED) {
			if (!w) console.warn("Can't focus anything near a disconnected element");
			w = true;
		}
		if (pos & Node.DOCUMENT_POSITION_PRECEDING) {
			if (node instanceof Element) {
				if (isTabbable(node)) {
					bestCandidateAfter = node;
					break;
				}
			}
		} else if (pos & Node.DOCUMENT_POSITION_FOLLOWING) {
			if (node instanceof Element) {
				if (isTabbable(node)) bestCandidateBefore = node;
			}
		}
		node = walker.nextNode();
	}
	return bestCandidateAfter ?? bestCandidateBefore ?? document.body;
}
// src/timing/use-timeout.tsx
/**
* Runs a function the specified number of milliseconds after the component renders.
* 
* @remarks This is particularly useful to function as "useEffect on a delay".
* 
* @remarks
* {@include } {@link UseTimeoutParameters}
*/
function useTimeout({ timeout, callback, triggerIndex }) {
	const stableCallback = useStableCallback(() => {
		startTimeRef.current = null;
		callback();
	});
	const getTimeout = useStableGetter(timeout);
	const startTimeRef = useRef(null);
	const disabled = timeout == null;
	useEffect(() => {
		if (!disabled) {
			const timeout = getTimeout();
			console.assert(disabled == (timeout == null));
			if (timeout != null) {
				startTimeRef.current = +/* @__PURE__ */ new Date();
				const handle = setTimeout(stableCallback, timeout);
				return () => clearTimeout(handle);
			}
		}
	}, [triggerIndex, disabled]);
	const getElapsedTime = useCallback(() => {
		return +/* @__PURE__ */ new Date() - +(startTimeRef.current ?? /* @__PURE__ */ new Date());
	}, []);
	return {
		getElapsedTime,
		getRemainingTime: useCallback(() => {
			const timeout = getTimeout();
			return timeout == null ? null : Math.max(0, timeout - getElapsedTime());
		}, [])
	};
}
// src/util/use-tag-props.tsx
let idIndex = 0;
/**
* Debug function that yells at you if your forgot to use the props a hook returns.
* 
* @remarks Like other debug hooks, only has any effect IFF there is a global variable called `process.env.NODE_ENV` and it contains the value `"development"`, AND there is a global variable called `_generate_useTagProps_tags` set to true, and stacks are only generated if `_generate_setState_stacks` is true..
* 
* @param props - The props to return a modified copy of
* @param tag - Should be unique
* @returns A modified copy of the given props
*/
function useTagProps(props, tag) {
	if (process.env.NODE_ENV === "development" && globalThis._generate_useTagProps_tags) {
		const [id] = useState$1(() => ++idIndex);
		const propsIdTag = `data-props-${tag}-${id}`;
		const getStack = useStack();
		console.assert(!(props && typeof props == "object" && tag in props));
		useTimeout({
			callback: () => {
				const document = getDocument();
				if (document) {
					if (document.querySelectorAll(`[${propsIdTag}]`).length != 1) {
						console.error("A hook returned props that were not properly spread to any HTMLElement:");
						console.log(getStack());
						debugger;
					}
				}
			},
			timeout: 250,
			triggerIndex: tag
		});
		return useMemo(() => {
			return {
				...props,
				[propsIdTag]: true
			};
		}, [props, tag]);
	} else return props;
}
// src/component-detail/keyboard-navigation/use-linear-navigation.tsx
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
function useLinearNavigation({ linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, processedIndexManglerReturn: { indexDemangler, indexMangler, ...void3 }, ...void1 }) {
	return useMonitoring(function useLinearNavigation() {
		let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
		useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexDemangler, indexMangler);
		const navigateAbsolute = useCallback((requestedIndexMangled, searchDirection, e, fromUserInteraction, mode) => {
			const highestChildIndex = getHighestIndex();
			const lowestChildIndex = getLowestIndex();
			getTabbableIndex();
			const { status, valueDemangled } = tryNavigateToIndex({
				isValid: isValidForLinearNavigation,
				lowestChildIndex,
				highestChildIndex,
				indexDemangler,
				indexMangler,
				searchDirection,
				targetDemangled: indexDemangler(requestedIndexMangled)
			});
			if (status == "past-end") {
				if (navigatePastEnd == "wrap") {
					if (mode == "single") navigateToFirst(e, fromUserInteraction);
					else navigateToLast(e, fromUserInteraction);
					return "stop";
				} else if (navigatePastEnd == "passthrough") return "passthrough";
				else {
					navigatePastEnd();
					return "stop";
				}
			} else if (status == "past-start") {
				if (navigatePastStart == "wrap") {
					if (mode == "single") navigateToLast(e, fromUserInteraction);
					else navigateToFirst(e, fromUserInteraction);
					return "stop";
				} else if (navigatePastStart == "passthrough") return "passthrough";
				else {
					navigatePastStart();
					return "stop";
				}
			} else {
				setTabbableIndex(valueDemangled, e, fromUserInteraction);
				onNavigateLinear?.(valueDemangled, e);
				return "stop";
			}
		}, []);
		const navigateToFirst = useStableCallback((e, fromUserInteraction) => {
			return navigateAbsolute(getLowestIndex(), -1, e, fromUserInteraction, "single");
		});
		const navigateToLast = useStableCallback((e, fromUserInteraction) => {
			return navigateAbsolute(getHighestIndex(), 1, e, fromUserInteraction, "single");
		});
		const navigateRelative2 = useStableCallback((e, offset, fromUserInteraction, mode) => {
			getHighestIndex();
			const searchDirection = Math.sign(offset) || 1;
			/**
			* To get the target, we need to add (or subtract) 1 to our current value,
			* but it need to be relative to any sorting/rearranging that's happened.
			* 
			* We mangle the index to get its "visual" position, add our offset,
			* and then demangle it to get the child that corresponds to the next child "visually".
			*/
			const targetMangled = indexMangler(getTabbableIndex() ?? 0) + offset;
			return navigateAbsolute(targetMangled, searchDirection, e, fromUserInteraction, mode);
		});
		const navigateToNext = useStableCallback((e, fromUserInteraction) => {
			return navigateRelative2(e, 1, fromUserInteraction, "single");
		});
		const navigateToPrev = useStableCallback((e, fromUserInteraction) => {
			return navigateRelative2(e, -1, fromUserInteraction, "single");
		});
		return {
			linearNavigationReturn: {},
			propsStable: useRef(useTagProps({ onKeyDown: useStableCallback((e) => {
				if (e.metaKey) return;
				const allowsVerticalNavigation = arrowKeyDirection == "vertical" || arrowKeyDirection == "either";
				const allowsHorizontalNavigation = arrowKeyDirection == "horizontal" || arrowKeyDirection == "either";
				let childRange = getHighestIndex() - getLowestIndex();
				let paginatedRange = getPaginatedRange() ?? childRange;
				let truePageNavigationSize = pageNavigationSize;
				if (truePageNavigationSize != null && truePageNavigationSize < 1) truePageNavigationSize = Math.round(truePageNavigationSize * Math.max(10, paginatedRange + 1));
				let result = "passthrough";
				let keyPressIsValidForOrientation = true;
				switch (e.key) {
					case "ArrowUp":
					case "ArrowDown":
						keyPressIsValidForOrientation = allowsVerticalNavigation;
						break;
					case "ArrowLeft":
					case "ArrowRight": keyPressIsValidForOrientation = allowsHorizontalNavigation;
				}
				if (keyPressIsValidForOrientation) switch (e.key) {
					case "ArrowUp":
					case "ArrowLeft":
						result = navigateToPrev(e, true);
						break;
					case "ArrowDown":
					case "ArrowRight":
						result = navigateToNext(e, true);
						break;
					case "PageUp":
					case "PageDown":
						if (truePageNavigationSize == null) break;
						else if (truePageNavigationSize > 0) result = navigateRelative2(e, truePageNavigationSize * (e.key.endsWith("n") ? 1 : -1), true, "page");
						break;
					case "Home":
					case "End": if (!disableHomeEndKeys) {
						if (e.key.endsWith("e")) navigateToFirst(e, true);
						else navigateToLast(e, true);
						result = "stop";
					}
				}
				if (result && result != "passthrough") {
					e.preventDefault();
					e.stopPropagation();
				}
			}) }, "data-linear-navigation")).current
		};
	});
}
/**
* #__NO_SIDE_EFFECTS__
*/
function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }) {
	if (searchDirection === -1) {
		let bestUpResult = void 0;
		bestUpResult = tryNavigateUp({
			isValid,
			indexDemangler,
			indexMangler,
			targetDemangled,
			lowestChildIndex
		});
		bestUpResult ??= tryNavigateDown({
			isValid,
			indexDemangler,
			indexMangler,
			targetDemangled,
			highestChildIndex
		});
		return bestUpResult || {
			valueDemangled: targetDemangled,
			status: "normal"
		};
	} else {
		let bestDownResult = void 0;
		bestDownResult = tryNavigateDown({
			isValid,
			indexDemangler,
			indexMangler,
			targetDemangled,
			highestChildIndex
		});
		bestDownResult ??= tryNavigateUp({
			isValid,
			indexDemangler,
			indexMangler,
			targetDemangled,
			lowestChildIndex
		});
		return bestDownResult || {
			valueDemangled: targetDemangled,
			status: "normal"
		};
	}
}
function tryNavigateUp({ isValid, indexDemangler, indexMangler, lowestChildIndex: lower, targetDemangled }) {
	while (targetDemangled >= lower && !isValid(targetDemangled)) targetDemangled = indexDemangler(indexMangler(targetDemangled) - 1);
	if (!isValid(targetDemangled)) return;
	if (targetDemangled < lower) return {
		valueDemangled: indexDemangler(lower),
		status: "past-start"
	};
	else return {
		valueDemangled: targetDemangled,
		status: "normal"
	};
}
function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex: upper }) {
	while (targetDemangled <= upper && !isValid(targetDemangled)) targetDemangled = indexDemangler(indexMangler(targetDemangled) + 1);
	if (!isValid(targetDemangled)) return;
	if (targetDemangled > upper) return {
		valueDemangled: indexDemangler(upper),
		status: "past-end"
	};
	else return {
		valueDemangled: targetDemangled,
		status: "normal"
	};
}
// src/preact-extensions/use-managed-children.tsx
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
function useManagedChildren(parentParameters) {
	return useMonitoring(function useManagedChildren() {
		const { managedChildrenParameters: { onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange }, ...rest } = parentParameters;
		useEnsureStability("useManagedChildren", onAfterChildLayoutEffect, onChildrenMountChange, onChildrenCountChange);
		const getHighestIndex = useCallback(() => {
			return managedChildrenArray.current.highestIndex;
		}, []);
		const getLowestIndex = useCallback(() => {
			return managedChildrenArray.current.lowestIndex;
		}, []);
		const updateMinMax = useCallback((index) => {
			managedChildrenArray.current.highestIndex = Math.max(index, managedChildrenArray.current.highestIndex);
			managedChildrenArray.current.lowestIndex = Math.min(index, managedChildrenArray.current.lowestIndex);
		}, []);
		const managedChildrenArray = useRef({
			arr: [],
			rec: {},
			highestIndex: 0,
			lowestIndex: 0
		});
		const forEachChild = useCallback((f) => {
			for (const child of managedChildrenArray.current.arr) if (child) {
				if (f(child) == "break") return;
			}
			for (const field in managedChildrenArray.current.rec) {
				const child = managedChildrenArray.current.rec[field];
				if (child) {
					if (f(child) == "break") return;
				}
			}
		}, []);
		const getManagedChildInfo = useCallback((index) => {
			if (typeof index == "number") return managedChildrenArray.current.arr[index];
			else return managedChildrenArray.current.rec[index];
		}, []);
		const shrinkwrapHandle = useRef(null);
		const scheduleShrinkwrap = useCallback(() => {
			if (shrinkwrapHandle.current != null) clearTimeout(shrinkwrapHandle.current);
			shrinkwrapHandle.current = setTimeout(() => {
				let shave = 0;
				while (shave <= managedChildrenArray.current.arr.length && managedChildrenArray.current.arr[managedChildrenArray.current.arr.length - 1 - shave] == void 0) ++shave;
				managedChildrenArray.current.arr.splice(managedChildrenArray.current.arr.length - shave, shave);
				managedChildrenArray.current.highestIndex = managedChildrenArray.current.arr.length - 1;
				shrinkwrapHandle.current = null;
			}, 1);
		}, []);
		const hasRemoteULEChildMounted = useRef(null);
		const remoteULEChildMounted = useCallback((index, mounted) => {
			if (!hasRemoteULEChildMounted.current) {
				hasRemoteULEChildMounted.current = {
					mounts: /* @__PURE__ */ new Set(),
					unmounts: /* @__PURE__ */ new Set(),
					mountInfos: /* @__PURE__ */ new Map()
				};
				debounceRendering(() => {
					const { mounts, unmounts } = hasRemoteULEChildMounted.current;
					const unmountsThatDidntMount = unmounts.difference(mounts);
					for (const index of mounts) if (typeof index == "number") {
						managedChildrenArray.current.highestIndex = Math.max(managedChildrenArray.current.highestIndex, index);
						managedChildrenArray.current.lowestIndex = Math.min(managedChildrenArray.current.lowestIndex, index);
					}
					for (const index of unmountsThatDidntMount) if (typeof index == "number") delete managedChildrenArray.current.arr[index];
					else delete managedChildrenArray.current.rec[index];
					if (onChildrenCountChange || onChildrenMountChange) {
						onChildrenMountChange?.(hasRemoteULEChildMounted.current.mounts, hasRemoteULEChildMounted.current.unmounts);
						onChildrenCountChange?.(getChildren().getHighestIndex() + 1);
						hasRemoteULEChildMounted.current = null;
					}
				});
			}
			hasRemoteULEChildMounted?.current?.[mounted ? "mounts" : "unmounts"]?.add?.(index);
		}, []);
		useEffect(() => {
			scheduleShrinkwrap();
		}, []);
		const managedChildren = useMemoObject({
			_: managedChildrenArray.current,
			forEach: forEachChild,
			getAt: getManagedChildInfo,
			getHighestIndex,
			getLowestIndex,
			_arraySlice: useCallback(() => {
				let ret = managedChildrenArray.current.arr.slice();
				const max = getHighestIndex();
				for (let i = 0; i <= max; ++i) if (ret[i] == null) ret[i] = { index: i };
				return ret;
			}, [])
		});
		const getChildren = useCallback(() => managedChildren, []);
		return {
			context: useMemoObject({ managedChildContext: useMemoObject({
				managedChildrenArray: managedChildrenArray.current,
				remoteULEChildMounted,
				getChildren,
				updateMinMax
			}) }),
			managedChildrenReturn: { getChildren }
		};
	});
}
/**
* @compositeParams
*/
function useManagedChild({ context, info }) {
	return useMonitoring(function useManagedChild() {
		const { managedChildContext: { getChildren, managedChildrenArray, remoteULEChildMounted, updateMinMax } } = context ?? { managedChildContext: {} };
		const index = info.index;
		useLayoutEffect(() => {
			if (managedChildrenArray == null) return;
			if (typeof index == "number") {
				managedChildrenArray.arr[index] = { ...info };
				updateMinMax?.(index);
			} else managedChildrenArray.rec[index] = { ...info };
		});
		useLayoutEffect(() => {
			remoteULEChildMounted?.(index, true);
			return () => remoteULEChildMounted?.(index, false);
		}, [index]);
		return { managedChildReturn: { getChildren } };
	});
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
function useChildrenFlag({ getChildren, indexDemangler, initialIndex, closestFit, onClosestFit, onIndexChange, getAt, setAt, isValid }) {
	useEnsureStability("useChildrenFlag", onIndexChange, getAt, setAt, isValid, indexDemangler);
	indexDemangler ??= identity;
	const [getCurrentIndex, setCurrentIndex] = usePassiveState(onIndexChange, void 0);
	const [getRequestedIndex, setRequestedIndex] = usePassiveState(null, void 0, { skipMountInitialization: true });
	const getClosestFit = useCallback((requestedIndex) => {
		const children = getChildren();
		let closestDistance = Infinity;
		let closestIndex = null;
		children.forEach((child) => {
			if (child != null && isValid(child)) {
				console.assert(typeof child.index == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
				const newDistance = Math.abs(child.index - requestedIndex);
				if (newDistance < closestDistance || newDistance == closestDistance && child.index < requestedIndex) {
					closestDistance = newDistance;
					closestIndex = child.index;
				}
			}
		});
		return closestIndex;
	}, []);
	if (closestFit) console.assert(onClosestFit != null, "When closestFit is used, onClosestFit must be provided");
	const reevaluateClosestFit = useStableCallback((reason) => {
		const children = getChildren();
		const requestedIndex = indexDemangler(getRequestedIndex());
		const currentIndex = indexDemangler(getCurrentIndex());
		const currentChild = currentIndex == null ? null : children.getAt(currentIndex);
		if (requestedIndex != null && closestFit && (requestedIndex != currentIndex || currentChild == null || !isValid(currentChild))) {
			console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
			const closestFitIndex = getClosestFit(requestedIndex);
			setCurrentIndex(closestFitIndex, reason);
			if (currentChild) setAt(currentChild, false, closestFitIndex, currentIndex);
			if (closestFitIndex != null) {
				const closestFitChild = children.getAt(closestFitIndex);
				console.assert(closestFitChild != null, "Internal logic???");
				setAt(closestFitChild, true, closestFitIndex, currentIndex);
				onClosestFit(closestFitIndex);
			} else onClosestFit(null);
		}
	});
	const reasonRef = useRef(void 0);
	const changeIndex = useCallback((arg, reason) => {
		const children = getChildren();
		const requestedIndex = arg instanceof Function ? arg(getRequestedIndex()) : arg;
		reasonRef.current = reason;
		setRequestedIndex(requestedIndex, reason);
		const currentIndex = getCurrentIndex();
		if (currentIndex == requestedIndex) return requestedIndex;
		let newMatchingChild = requestedIndex == null ? null : children.getAt(requestedIndex);
		const oldMatchingChild = currentIndex == null ? null : children.getAt(currentIndex);
		if (requestedIndex == null) {
			setCurrentIndex(null, reason);
			if (oldMatchingChild) setAt(oldMatchingChild, false, requestedIndex, currentIndex);
			return null;
		} else if (newMatchingChild && isValid(newMatchingChild) || !closestFit) {
			setCurrentIndex(requestedIndex, reason);
			if (oldMatchingChild) setAt(oldMatchingChild, false, requestedIndex, currentIndex);
			if (newMatchingChild) setAt(newMatchingChild, true, requestedIndex, currentIndex);
			return requestedIndex;
		} else {
			console.assert(closestFit);
			console.assert(typeof requestedIndex == "number", "closestFit can only be used when each child has a numeric index, and cannot be used when children use string indices instead.");
			const closestFitIndex = getClosestFit(requestedIndex);
			setCurrentIndex(closestFitIndex, reason);
			if (closestFitIndex != null) {
				newMatchingChild = children.getAt(closestFitIndex);
				console.assert(newMatchingChild != null, "Internal logic???");
				if (oldMatchingChild) setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
				setAt(newMatchingChild, true, closestFitIndex, currentIndex);
				return closestFitIndex;
			} else {
				if (oldMatchingChild) setAt(oldMatchingChild, false, closestFitIndex, currentIndex);
				return null;
			}
		}
	}, []);
	useLayoutEffect(() => {
		changeIndex(initialIndex ?? null, reasonRef.current);
	}, []);
	return {
		changeIndex,
		reevaluateClosestFit,
		getCurrentIndex
	};
}
// src/preact-extensions/use-state.tsx
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
function useState(initialState) {
	const getStack = useStack();
	const [state, setStateP] = useState$1(initialState);
	const ref = useRef(state);
	const setState = useRef((value) => {
		if (process.env.NODE_ENV === "development") globalThis._setState_stack = getStack();
		if (typeof value === "function") {
			const callback = value;
			setStateP((prevValue) => {
				const nextValue = callback(prevValue);
				if (ref.current !== nextValue) ref.current = nextValue;
				ref.current = nextValue;
				return nextValue;
			});
		} else {
			if (ref.current !== value) ref.current = value;
			ref.current = value;
			setStateP(value);
		}
	});
	const getState = useCallback(() => {
		return ref.current;
	}, []);
	return [
		state,
		setState.current,
		getState
	];
}
// src/component-detail/keyboard-navigation/use-roving-tabindex.tsx
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
function useRovingTabIndex({ managedChildrenReturn: { getChildren }, rovingTabIndexParameters: { focusSelfParent: focusSelfParentUnstable, untabbable, untabbableBehavior, initiallyTabbedIndex, onTabbableIndexChange }, refElementReturn: { getElement }, processedIndexManglerReturn: { indexDemangler }, ...void1 }) {
	return useMonitoring(function useRovingTabIndex() {
		const focusSelfParent = useStableCallback(focusSelfParentUnstable);
		untabbableBehavior ||= "focus-parent";
		const lastFocused = useRef(null);
		const getInitiallyTabbedIndex = useStableGetter(initiallyTabbedIndex);
		const getUntabbable = useStableGetter(untabbable);
		const setTabbableIndex = useStableCallback((updater, reason, fromUserInteraction) => {
			const children = getChildren();
			return changeTabbableIndex(function returnModifiedTabbableIndex(prevIndex) {
				const document = getDocument();
				let nextIndex = typeof updater === "function" ? updater(prevIndex ?? null) : updater;
				const untabbable = getUntabbable();
				let parentElement = getElement();
				console.assert(!!parentElement);
				if (nextIndex != null) setLastNonNullIndex(nextIndex, reason);
				if (untabbable) {
					if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != "leave-child-focused") focusSelfParent(parentElement);
					return null;
				}
				if (nextIndex == null) {
					if (document && !parentElement.contains(document.activeElement) && untabbableBehavior != "leave-child-focused") focusSelfParent(parentElement);
					return null;
				}
				if (document && prevIndex != nextIndex) {
					const nextChild = children.getAt(nextIndex);
					if (nextChild != null && fromUserInteraction) {
						const element = nextChild.getElement();
						if (element) {
							if (document.activeElement == document.body || document.activeElement == null || !element.contains(document.activeElement)) nextChild.focusSelf(element);
						}
					}
				}
				if (nextIndex != null) setLastNonNullIndex(nextIndex, reason);
				return nextIndex ?? 0;
			}, reason);
		});
		const [getLastNonNullIndex, setLastNonNullIndex] = usePassiveState(null, useCallback(() => initiallyTabbedIndex ?? 0, []));
		useEffect(() => {
			const document = getDocument();
			let shouldFocusParentAfterwards = !!document && getElement()?.contains(document.activeElement);
			if (untabbable) changeTabbableIndex(null, void 0);
			else changeTabbableIndex(getLastNonNullIndex(), void 0);
			if (shouldFocusParentAfterwards) focusSelf(true);
		}, [untabbable]);
		let avoidFocusingSelfOnMount = useRef(false);
		useEffect(() => {
			let handle = setTimeout(() => {
				handle = setTimeout(() => {
					avoidFocusingSelfOnMount.current = true;
				}, 50);
			}, 50);
			return () => clearTimeout(handle);
		}, []);
		const getTabbableAt = useCallback((child) => {
			return child.getLocallyTabbable();
		}, []);
		const setTabbableAt = useCallback((child, t) => {
			if (child.index == 8) debugger;
			child.setLocallyTabbable(t);
		}, []);
		const isTabbableValid = useStableCallback((child) => {
			return !child.untabbable;
		});
		const { changeIndex: changeTabbableIndex, getCurrentIndex: getTabbableIndex, reevaluateClosestFit } = useChildrenFlag({
			initialIndex: initiallyTabbedIndex ?? (untabbable ? null : 0),
			onIndexChange: useStableCallback((n, p, r) => {
				if (!(n == null && untabbable)) onTabbableIndexChange?.(n, p, r);
			}),
			getChildren,
			closestFit: true,
			getAt: getTabbableAt,
			isValid: isTabbableValid,
			setAt: setTabbableAt,
			indexDemangler,
			onClosestFit: (index) => {
				const document = getDocument();
				if (avoidFocusingSelfOnMount.current && document && (document.activeElement == null || document.activeElement == document.body)) {
					let childElement = index == null ? null : getChildren().getAt(index)?.getElement();
					if (index == null || childElement == null) focus(findBackupFocus(getElement()));
					else getChildren().getAt(index)?.focusSelf(childElement);
				}
				avoidFocusingSelfOnMount.current = true;
			}
		});
		const focusSelf = useCallback((force, reason) => {
			const document = getDocument();
			const children = getChildren();
			let index = getTabbableIndex();
			const untabbable = getUntabbable();
			if (!untabbable) index ??= getInitiallyTabbedIndex() ?? children.getLowestIndex();
			if (untabbable) {
				if (document && document.activeElement != getElement() && (force || untabbableBehavior != "leave-child-focused")) focusSelfParent(getElement());
			} else if (!untabbable && index != null) {
				const element = children.getAt(index)?.getElement();
				children.getAt(index)?.focusSelf?.(element);
			} else setTabbableIndex(null, reason, true);
		}, []);
		const rovingTabIndexContext = useMemoObject({
			setTabbableIndex,
			parentFocusSelf: focusSelf,
			getInitiallyTabbedIndex: useCallback(() => {
				return initiallyTabbedIndex ?? (untabbable ? null : 0);
			}, []),
			reevaluateClosestFit,
			untabbable,
			getUntabbableBehavior: useStableGetter(untabbableBehavior),
			giveParentFocusedElement: useCallback((e) => {
				lastFocused.current = e;
			}, [])
		});
		return {
			managedChildrenParameters: { onChildrenMountChange: useCallback(() => {
				reevaluateClosestFit(void 0);
			}, [reevaluateClosestFit]) },
			rovingTabIndexReturn: {
				setTabbableIndex,
				getTabbableIndex,
				focusSelf
			},
			context: useMemoObject({ rovingTabIndexContext }),
			props: useTagProps({
				tabIndex: untabbable ? 0 : -1,
				onFocus: useStableCallback((e) => {
					const parentElement = getElement();
					console.assert(!!parentElement);
					if (e.target == getElement()) {
						if (!untabbable) focusSelf(false, e);
					}
				})
			}, "data-roving-tab-index")
		};
	});
}
/**
* @compositeParams
* 
* @see {@link useRovingTabIndex}
* @param args - {@link UseRovingTabIndexChildParameters}
* @returns - {@link UseRovingTabIndexChildReturnType}
*/
function useRovingTabIndexChild({ info: { index, untabbable: iAmUntabbable, ...void2 }, context: { rovingTabIndexContext: { giveParentFocusedElement, untabbable: parentIsUntabbable, getUntabbableBehavior, reevaluateClosestFit, setTabbableIndex, getInitiallyTabbedIndex, parentFocusSelf } }, refElementReturn: { getElement }, ...void3 }) {
	return useMonitoring(function useRovingTabIndexChild() {
		const [tabbable, st, getTabbable] = useState(() => {
			return getInitiallyTabbedIndex() === index;
		});
		const HACK = useRef(iAmUntabbable);
		const HACK2 = useRef(index);
		HACK.current = iAmUntabbable;
		HACK2.current = index;
		const setTabbable = useCallback((t) => {
			if (typeof t === "function") return st((prev) => {
				const ret = t(prev);
				if (ret && HACK.current) {
					debugger;
					console.error("setTabbable(true) called on a hidden child?");
				}
				return ret;
			});
			else {
				if (t && HACK.current) {
					debugger;
					console.error("setTabbable(true) called on a hidden child?");
				}
				return st(t);
			}
		}, []);
		useEffect(() => {
			if (tabbable) giveParentFocusedElement(getElement());
		}, [tabbable]);
		return {
			hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((focused, _prevFocused, e) => {
				if (focused) {
					const untabbableBehavior = getUntabbableBehavior();
					if (!parentIsUntabbable && !iAmUntabbable || untabbableBehavior != "focus-parent") setTabbableIndex(index, e, false);
					else parentFocusSelf(false);
				}
			}) },
			rovingTabIndexChildReturn: {
				tabbable,
				getTabbable
			},
			info: {
				setLocallyTabbable: setTabbable,
				getLocallyTabbable: getTabbable
			},
			props: useTagProps({
				tabIndex: tabbable && !parentIsUntabbable ? 0 : -1,
				inert: iAmUntabbable
			}, "data-roving-tab-index-child")
		};
	});
}
// src/component-detail/keyboard-navigation/use-typeahead-navigation.tsx
/**
* Allows for the selection of a managed child by typing the given text associated with it.
*  
* @see useListNavigation, which packages everything up together.
* 
* @hasChild {@link useTypeaheadNavigationChild}
* 
* @compositeParams
*/
function useTypeaheadNavigation({ typeaheadNavigationParameters: { collator, typeaheadTimeout, noTypeahead, isValidForTypeaheadNavigation, onNavigateTypeahead, ...void3 }, rovingTabIndexReturn: { getTabbableIndex: getIndex, setTabbableIndex: setIndex, ...void1 }, ...void2 }) {
	return useMonitoring(function useTypeaheadNavigation() {
		const [getCurrentTypeahead, setCurrentTypeahead] = usePassiveState(useStableCallback((currentTypeahead, prev, reason) => {
			const handle = setTimeout(() => {
				setCurrentTypeahead(null, void 0);
				setTypeaheadStatus("none");
			}, typeaheadTimeout ?? 1e3);
			updateBasedOnTypeaheadChange(currentTypeahead, reason);
			return () => clearTimeout(handle);
		}));
		const sortedTypeaheadInfo = useRef([]);
		const [typeaheadStatus, setTypeaheadStatus] = useState("none");
		const [, setImeActive, getImeActive] = useState(false);
		const [nextTypeaheadChar, setNextTypeaheadChar] = useState(null);
		useLayoutEffect(() => {
			if (nextTypeaheadChar !== null) {
				setCurrentTypeahead((typeahead) => (typeahead ?? "") + nextTypeaheadChar, void 0);
				setNextTypeaheadChar(null);
			}
		}, [nextTypeaheadChar]);
		const comparatorShared = useStableCallback((safeLhs, safeRhs) => {
			let compare;
			safeLhs = safeLhs.normalize("NFD");
			safeRhs = safeRhs.normalize("NFD");
			if (collator) compare = collator.compare(safeLhs, safeRhs);
			else compare = safeLhs.toLowerCase().localeCompare(safeRhs.toLowerCase() ?? "");
			return compare;
		});
		const insertingComparator = useStableCallback((lhs, rhs) => {
			if (typeof lhs === "string" && typeof rhs.text === "string") return comparatorShared(lhs, rhs.text);
			return lhs - rhs;
		});
		const typeaheadComparator = useStableCallback((lhs, rhs) => {
			if (typeof lhs === "string" && typeof rhs.text === "string") return comparatorShared(lhs, rhs.text.substring(0, lhs.length));
			return lhs - rhs;
		});
		const isDisabled = useStableGetter(noTypeahead);
		const propsStable = useRef(useTagProps({
			onKeyDown: useStableCallback((e) => {
				if (isDisabled()) return;
				const imeActive = getImeActive();
				const key = e.key;
				if (e.ctrlKey || e.metaKey) return;
				if (!imeActive && e.key === "Backspace") {
					setCurrentTypeahead((t) => t == null ? null : [...t].reverse().slice(1).reverse().join(""), e);
					e.preventDefault();
					e.stopPropagation();
					return;
				}
				if (key.length === 1 || !/^[A-Za-z]/.test(key)) {
					if (key == " " && (getCurrentTypeahead() ?? "").trim().length == 0) {} else {
						e.preventDefault();
						e.stopPropagation();
						if (!imeActive) setNextTypeaheadChar(key);
					}
				}
			}),
			onCompositionStart: useStableCallback((e) => {
				setNextTypeaheadChar(e.data);
				setImeActive(false);
			}),
			onCompositionEnd: useStableCallback((_e) => {
				setImeActive(true);
			})
		}, "data-typeahead-navigation"));
		const excludeSpace = useStableCallback(() => {
			return typeaheadStatus != "none";
		});
		return {
			context: useMemoObject({ typeaheadNavigationContext: useMemoObject({
				insertingComparator,
				sortedTypeaheadInfo: sortedTypeaheadInfo.current,
				excludeSpace
			}) }),
			typeaheadNavigationReturn: {
				getCurrentTypeahead,
				typeaheadStatus
			},
			propsStable: propsStable.current
		};
		function updateBasedOnTypeaheadChange(currentTypeahead, reason) {
			if (currentTypeahead && sortedTypeaheadInfo.current.length) {
				const sortedTypeaheadIndex = binarySearch(sortedTypeaheadInfo.current, currentTypeahead, typeaheadComparator);
				if (sortedTypeaheadIndex < 0) setTypeaheadStatus("invalid");
				else {
					setTypeaheadStatus("valid");
					let lowestUnsortedIndexAll = null;
					let lowestSortedIndexAll = sortedTypeaheadIndex;
					let lowestUnsortedIndexNext = null;
					let lowestSortedIndexNext = sortedTypeaheadIndex;
					const updateBestFit = (unsortedIndex) => {
						if (!isValidForTypeaheadNavigation(unsortedIndex)) return;
						if (lowestUnsortedIndexAll == null || unsortedIndex < lowestUnsortedIndexAll) {
							lowestUnsortedIndexAll = unsortedIndex;
							lowestSortedIndexAll = i;
						}
						if ((lowestUnsortedIndexNext == null || unsortedIndex < lowestUnsortedIndexNext) && unsortedIndex > (getIndex() ?? -Infinity)) {
							lowestUnsortedIndexNext = unsortedIndex;
							lowestSortedIndexNext = i;
						}
					};
					let i = sortedTypeaheadIndex;
					while (i >= 0 && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
						updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
						--i;
					}
					i = sortedTypeaheadIndex;
					while (i < sortedTypeaheadInfo.current.length && typeaheadComparator(currentTypeahead, sortedTypeaheadInfo.current[i]) == 0) {
						updateBestFit(sortedTypeaheadInfo.current[i].unsortedIndex);
						++i;
					}
					let toSet = null;
					if (lowestUnsortedIndexNext !== null) toSet = sortedTypeaheadInfo.current[lowestSortedIndexNext].unsortedIndex;
					else if (lowestUnsortedIndexAll !== null) toSet = sortedTypeaheadInfo.current[lowestSortedIndexAll].unsortedIndex;
					if (toSet != null) {
						setIndex(toSet, reason, true);
						onNavigateTypeahead?.(toSet, reason);
					} else setTypeaheadStatus("invalid");
				}
			}
		}
	});
}
/**
* 
* @compositeParams
*/
function useTypeaheadNavigationChild({ info: { index, ...void1 }, context: { typeaheadNavigationContext: { sortedTypeaheadInfo, insertingComparator, excludeSpace, ...void2 } }, ...void4 }) {
	return useMonitoring(function useTypeaheadNavigationChild() {
		return {
			textContentParameters: { onTextContentChange: useCallback((text) => {
				if (text) {
					const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
					console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, {
						unsortedIndex: index,
						text
					}) == 0);
					if (sortedIndex < 0) sortedTypeaheadInfo.splice(-sortedIndex - 1, 0, {
						text,
						unsortedIndex: index
					});
					else sortedTypeaheadInfo.splice(sortedIndex, 1, {
						text,
						unsortedIndex: index
					});
					return () => {
						const sortedIndex = binarySearch(sortedTypeaheadInfo, text, insertingComparator);
						console.assert(sortedIndex < 0 || insertingComparator(sortedTypeaheadInfo[sortedIndex].text, {
							unsortedIndex: index,
							text
						}) == 0);
						if (sortedIndex >= 0) sortedTypeaheadInfo.splice(sortedIndex, 1);
					};
				}
			}, []) },
			pressParameters: { excludeSpace }
		};
	});
}
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
function binarySearch(array, wanted, comparator) {
	let firstIndex = 0;
	let lastIndex = array.length - 1;
	while (firstIndex <= lastIndex) {
		const testIndex = lastIndex + firstIndex >> 1;
		const comparisonResult = comparator(wanted, array[testIndex]);
		if (comparisonResult > 0) firstIndex = testIndex + 1;
		else if (comparisonResult < 0) lastIndex = testIndex - 1;
		else return testIndex;
	}
	return -firstIndex - 1;
}
// src/component-detail/keyboard-navigation/use-list-navigation-partial.tsx
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
function useListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, ...void1 }) {
	return useMonitoring(function useListNavigation() {
		const { props: propsRTI, rovingTabIndexReturn, managedChildrenParameters, context: contextRovingTabIndex, ...void2 } = useRovingTabIndex({
			managedChildrenReturn,
			rovingTabIndexParameters,
			refElementReturn,
			processedIndexManglerReturn
		});
		const { propsStable: propsStableTN, typeaheadNavigationReturn, context: contextTypeahead, ...void3 } = useTypeaheadNavigation({
			rovingTabIndexReturn,
			typeaheadNavigationParameters
		});
		const { propsStable: propsStableLN, linearNavigationReturn, ...void4 } = useLinearNavigation({
			rovingTabIndexReturn,
			linearNavigationParameters,
			paginatedChildrenParameters,
			processedIndexManglerReturn
		});
		return {
			managedChildrenParameters,
			rovingTabIndexReturn,
			typeaheadNavigationReturn,
			context: useMemoObject({
				...contextRovingTabIndex,
				...contextTypeahead
			}),
			linearNavigationReturn,
			props: useMergedProps(propsStableLN, propsStableTN, propsRTI)
		};
	});
}
/**
* @compositeParams
*/
function useListNavigationChild({ info: { index, untabbable, ...void1 }, context, refElementReturn, ...void2 }) {
	return useMonitoring(function useListNavigationChild() {
		const { props, ...rticr } = useRovingTabIndexChild({
			context,
			info: {
				index,
				untabbable
			},
			refElementReturn
		});
		const { ...tncr } = useTypeaheadNavigationChild({
			context,
			info: { index }
		});
		return {
			props,
			...tncr,
			...rticr
		};
	});
}
// src/component-detail/keyboard-navigation/use-grid-navigation-partial.tsx
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
function useGridNavigation({ gridNavigationParameters: { onTabbableColumnChange, initiallyTabbableColumn, ...void3 }, linearNavigationParameters, ...listNavigationParameters }) {
	return useMonitoring(function useGridNavigation() {
		const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
			let t = initiallyTabbableColumn ?? 0;
			return {
				actual: t,
				ideal: t
			};
		}));
		const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, props, ...void1 } = useListNavigation({
			linearNavigationParameters: {
				arrowKeyDirection: "vertical",
				...linearNavigationParameters
			},
			...listNavigationParameters
		});
		return {
			props,
			managedChildrenParameters,
			context: useMemoObject({
				gridNavigationRowContext: useMemoObject({
					setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
					getTabbableColumn,
					setTabbableColumn
				}),
				rovingTabIndexContext,
				typeaheadNavigationContext
			}),
			linearNavigationReturn,
			rovingTabIndexReturn,
			typeaheadNavigationReturn
		};
	});
}
/**
* Child hook for {@link useGridNavigation}
* 
* As a row, this hook is responsible for both being a **child** of list navigation, but also a **parent** of list navigation.
* As such, this is one of the most complicated hooks here in terms of dependencies.
* 
* @compositeParams
*/
function useGridNavigationRow({ info: { index, untabbable, ...void3 }, context: contextFromParent, linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, managedChildrenReturn, typeaheadNavigationParameters, refElementReturn, ...void1 }) {
	return useMonitoring(function useGridNavigationRow() {
		const { getTabbableColumn, setTabbableColumn, setTabbableRow } = contextFromParent.gridNavigationRowContext;
		const getIndex = useStableCallback(() => {
			return index;
		});
		const whenThisRowIsFocused = useStableCallback((e) => {
			const { getChildren } = managedChildrenReturn;
			if (contextFromParent.rovingTabIndexContext.untabbable) contextFromParent.rovingTabIndexContext.parentFocusSelf(true);
			else {
				let { ideal, actual: _actual } = getTabbableColumn();
				let index = ideal ?? 0;
				let child = getChildren().getAt(index);
				let lowestIndex = getChildren().getLowestIndex();
				let highestIndex = getChildren().getHighestIndex();
				while ((!child || child.untabbable) && index > lowestIndex) {
					--index;
					child = getChildren().getAt(index);
				}
				while ((!child || child.untabbable) && index <= highestIndex) {
					++index;
					child = getChildren().getAt(index);
				}
				if (child) {
					const e = child.getElement();
					child.focusSelf(e);
				} else focus(e);
			}
		}, []);
		const focusSelf = whenThisRowIsFocused;
		const { props: propsLNC, info: { getLocallyTabbable, setLocallyTabbable, ...void2 }, hasCurrentFocusParameters, pressParameters, rovingTabIndexChildReturn, textContentParameters, ...void6 } = useListNavigationChild({
			info: {
				index,
				untabbable
			},
			refElementReturn,
			context: contextFromParent
		});
		const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
		const { props: propsLN, context: contextULN, linearNavigationReturn, managedChildrenParameters, rovingTabIndexReturn, typeaheadNavigationReturn, ...void5 } = useListNavigation({
			managedChildrenReturn,
			refElementReturn,
			typeaheadNavigationParameters,
			processedIndexManglerReturn: {
				indexDemangler: identity$1,
				indexMangler: identity$1
			},
			rovingTabIndexParameters: {
				untabbableBehavior: "leave-child-focused",
				focusSelfParent: whenThisRowIsFocused,
				untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells,
				initiallyTabbedIndex,
				onTabbableIndexChange: useStableCallback((v, p, r) => {
					setTabbableColumn((p) => ({
						ideal: p?.ideal ?? null,
						actual: p?.actual ?? null
					}), r);
					onTabbableIndexChange?.(v, p, r);
				})
			},
			linearNavigationParameters: {
				onNavigateLinear: useStableCallback((next, event) => {
					setTabbableColumn((prev) => ({
						ideal: next,
						actual: next
					}), event);
				}),
				disableHomeEndKeys: true,
				pageNavigationSize: 0,
				arrowKeyDirection: "horizontal",
				...linearNavigationParameters
			},
			paginatedChildrenParameters: {
				paginationMin: null,
				paginationMax: null
			}
		});
		const { setTabbableIndex } = rovingTabIndexReturn;
		const gridNavigationCellContext = useMemoObject({
			setTabbableRow,
			getRowIndex: getIndex,
			getTabbableColumn,
			setTabbableColumn,
			setTabbableCell: setTabbableIndex
		});
		propsLN.tabIndex = propsLNC.tabIndex = -1;
		const props = useMergedProps(propsLN, propsLNC, { onFocus: useStableCallback((e) => whenThisRowIsFocused(e.currentTarget)) });
		return {
			context: useMemoObject({
				gridNavigationCellContext,
				...contextULN
			}),
			props: useTagProps(props, "data-use-grid-navigation-partial-row"),
			info: {
				focusSelf,
				getLocallyTabbable,
				setLocallyTabbable
			},
			hasCurrentFocusParameters,
			pressParameters,
			rovingTabIndexChildReturn,
			textContentParameters,
			linearNavigationReturn,
			managedChildrenParameters,
			rovingTabIndexReturn,
			typeaheadNavigationReturn
		};
	});
}
/**
* Child hook for {@link useGridNavigationRow} (and {@link useGridNavigation}).
* 
* @compositeParams
*/
function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell, ...void4 }, rovingTabIndexContext, typeaheadNavigationContext, ...void5 }, info: { index, untabbable, ...void7 }, refElementReturn, gridNavigationCellParameters: { colSpan, ...void6 }, ...void1 }) {
	return useMonitoring(function useGridNavigationCell() {
		colSpan ??= 1;
		const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, rovingTabIndexChildReturn, textContentParameters, pressParameters, props, info: infoLs, ...void2 } = useListNavigationChild({
			info: {
				index,
				untabbable
			},
			context: {
				rovingTabIndexContext,
				typeaheadNavigationContext
			},
			refElementReturn
		});
		return {
			info: infoLs,
			props: useMergedProps(props, { onClick: (e) => {
				setTabbableColumn((prev) => {
					return {
						ideal: index,
						actual: index
					};
				}, e);
			} }),
			rovingTabIndexChildReturn,
			textContentParameters,
			pressParameters,
			hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
				ocfic1?.(focused, prev, e);
				if (focused) {
					setTabbableRow(getRowIndex(), e, false);
					setTabbableColumn((prev) => {
						return {
							actual: index ?? null,
							ideal: prev?.ideal ?? null
						};
					}, e);
					setTabbableCell((prev) => {
						if (prev != null && (prev < index || prev > index + colSpan)) return prev;
						return index;
					}, e, false);
				}
			}) }
		};
	});
}
// src/component-detail/processed-children/use-paginated-children.tsx
/**
* Allows children to stop themselves from rendering outside of a narrow range.
* 
* @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
* 
* @hasChild {@link usePaginatedChild}
* 
* @compositeParams
*/
function usePaginatedChildren({ managedChildrenReturn: { getChildren }, paginatedChildrenParameters: { paginationMax, paginationMin, childCount }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, childrenHaveFocusReturn: { getAnyFocused }, processedIndexManglerReturn: { indexDemangler, indexMangler } }) {
	return useMonitoring(function usePaginatedChildren() {
		const parentIsPaginated = paginationMin != null || paginationMax != null;
		const lastPagination = useRef({
			paginationMax: null,
			paginationMin: null
		});
		const refreshPagination = useCallback((paginationMin, paginationMax) => {
			const childMax = getChildren().getHighestIndex() + 1;
			const childMin = getChildren().getLowestIndex();
			for (let i = childMin; i <= childMax; ++i) {
				const visible = i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity);
				getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
				if (visible && (paginationMax != null || paginationMin != null)) getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
			}
		}, []);
		useEffect(() => {
			let tabbableIndex = getTabbableIndex();
			if (tabbableIndex != null) {
				let shouldFocus = getAnyFocused() || false;
				setTimeout(() => {
					if (paginationMin != null && tabbableIndex < paginationMin) setTabbableIndex(paginationMin, void 0, shouldFocus);
					else if (paginationMax != null && tabbableIndex >= paginationMax) {
						let next = paginationMax - 1;
						if (next == -1) next = null;
						setTabbableIndex(next, void 0, shouldFocus);
					}
				}, 1);
			}
			refreshPagination(paginationMin, paginationMax);
			lastPagination.current.paginationMax = paginationMax ?? null;
			lastPagination.current.paginationMin = paginationMin ?? null;
		}, [paginationMax, paginationMin]);
		const pmin = useRef(paginationMin);
		const pmax = useRef(paginationMax);
		pmin.current = paginationMin;
		pmax.current = paginationMax;
		const getDefaultPaginationVisible = useCallback((i) => {
			return i >= (pmin.current ?? -Infinity) && i < (pmax.current ?? Infinity);
		}, []);
		const paginatedChildContext = useMemo(() => ({
			parentIsPaginated,
			getDefaultPaginationVisible
		}), [parentIsPaginated]);
		const getPaginationMin = useStableGetter(paginationMin);
		const getPaginationMax = useStableGetter(paginationMax);
		useLayoutEffect(() => {
			const paginationMin = getPaginationMin();
			const paginationMax = getPaginationMax();
			const count = childCount ?? 0;
			if (paginationMax != null || paginationMin != null) {
				const min = paginationMin ?? 0;
				const max = paginationMax ?? count;
				for (let i = min; i < max; ++i) getChildren().getAt(i)?.setChildCountIfPaginated(count);
			}
		}, [childCount]);
		return {
			context: useMemo(() => ({ paginatedChildContext }), [paginatedChildContext]),
			paginatedChildrenReturn: { refreshPagination }
		};
	});
}
/**
* Child hook for {@link usePaginatedChildren}.
* 
* @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
* so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
* 
* @compositeParams
*/
function usePaginatedChild({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }) {
	return useMonitoring(function usePaginatedChild() {
		const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
		const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);
		return {
			props: useTagProps(!parentIsPaginated ? {} : {
				"aria-setsize": childCountIfPaginated ?? void 0,
				"aria-posinset": index + 1
			}, "data-paginated-children-child"),
			paginatedChildReturn: {
				parentIsPaginated,
				hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false
			},
			info: {
				setPaginationVisible: setPaginatedVisible,
				setChildCountIfPaginated
			}
		};
	});
}
// src/component-detail/processed-children/use-rearrangeable-children.tsx
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
function useRearrangeableChildren({ rearrangeableChildrenParameters: { children: childrenIn, animate }, processedIndexManglerParameters: { getIndex, getSortValueAt }, managedChildrenReturn: { getChildren: getManagedChildren }, context: { processedIndexManglerContext: { mangler } } }) {
	return useMonitoring(function useRearrangeableChildren() {
		useEnsureStability("useRearrangeableChildren", getIndex, getSortValueAt);
		const allChildPositions = useRef([]);
		const [refreshIndex, setRefreshIndex] = useState$1(0);
		const childrenOut = useMemo(() => {
			const rearrangedChildren = mangler.setChildren(childrenIn);
			for (const ch of rearrangedChildren) {
				const index = ch == null ? null : getIndex(ch);
				const mangledIndex = index == null ? null : mangler.map(index, "demangled", "mangled");
				index == null || mangler.map(index, "mangled", "demangled");
				if (index != null && mangledIndex != null) {
					const info = getManagedChildren().getAt(index);
					const info2 = getManagedChildren().getAt(mangledIndex);
					if (info && info2 && animate) {
						const rect = info2.getElement()?.getBoundingClientRect();
						if (rect) info2.updateFLIPAnimation(allChildPositions.current[mangledIndex] = {
							left: rect.left,
							top: rect.top,
							width: rect.width,
							height: rect.height
						});
					}
				}
			}
			return rearrangedChildren;
		}, [
			childrenIn,
			refreshIndex,
			animate
		]);
		const getFLIPStart = useCallback((index) => {
			return allChildPositions.current[index];
		}, []);
		return {
			rearrangeableChildrenReturn: {
				children: childrenOut,
				refresh: useStableCallback(() => {
					setRefreshIndex((p) => ++p);
				}, [])
			},
			context: useMemoObject({ rearrangeableChildrenContext: useMemoObject({
				getFLIPStart,
				animate
			}) })
		};
	});
}
/**
* @compositeParams
*/
function useRearrangeableChild({ context, info: { getElement, index }, rearrangeableChildParameters: { cssProperty, duration } }) {
	return useMonitoring(function useRearrangeableChild() {
		const { rearrangeableChildrenContext: { getFLIPStart, animate } } = context;
		const getCssProperty = useStableGetter(cssProperty);
		const getDuration = useStableGetter(duration);
		const flipStartPosition = useRef(void 0);
		const [animationIndex, setAnimationIndex] = useState$1(0);
		useLayoutEffect(() => {
			if (animate) {
				const duration = getDuration();
				const cssProperty = getCssProperty();
				if (cssProperty && animationIndex > 0) {
					const element = getElement();
					const first = getFLIPStart(index);
					if (cssProperty === "translate") element.style.scale = element.style.translate = "";
					else if (cssProperty === "transform") element.style.transform = "";
					element.style.transition = "none";
					const last = element.getBoundingClientRect();
					if (first && last) {
						const dx = first.left - last.left;
						const dy = first.top - last.top;
						const dsx = first.width / last.width;
						const dsy = first.height / last.height;
						if (cssProperty === "translate") {
							element.style.translate = `${dx}px ${dy}px`;
							element.style.scale = `${dsx} ${dsy}`;
						} else if (cssProperty === "transform") element.style.transform = `translate(${dx}px, ${dy}px) scale(${dsx}, ${dsy})`;
						element.style.transition = cssProperty === "translate" ? "translate 0s, scale 0s" : `transform 0s`;
						requestAnimationFrame(() => {
							if (cssProperty === "translate") element.style.scale = element.style.translate = "";
							else if (cssProperty === "transform") element.style.transform = "";
							element.style.transition = cssProperty === "translate" ? `translate ${duration}, scale ${duration}` : `transform ${duration}`;
						});
					}
				}
			}
		}, [
			index,
			animationIndex,
			animate
		]);
		return { info: { updateFLIPAnimation: useCallback((position) => {
			flipStartPosition.current = position;
			setAnimationIndex((p) => ++p);
		}, []) } };
	});
}
// src/component-detail/processed-children/use-staggered-children.tsx
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
function useStaggeredChildren({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered, childCount, disableIntersectionObserver } }) {
	return useMonitoring(function useStaggeredChildren() {
		const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
		const getTargetStaggerIndex = useStableGetter((childCount || 0) - 1);
		const timeoutHandle = useRef(-1);
		const resetEmergencyTimeout = useCallback(() => {
			if (timeoutHandle.current != -1) clearTimeout(timeoutHandle.current);
			timeoutHandle.current = setTimeout(() => {
				timeoutHandle.current = setTimeout(() => {
					timeoutHandle.current = -1;
					let target = getTargetStaggerIndex();
					setDisplayedStaggerIndex((prev) => {
						let next = Math.min(target || 0, (prev || 0) + 1);
						while (next <= (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible() == true) ++next;
						return next;
					});
				}, 10);
			}, 100);
		}, []);
		useEffect(() => {
			if (timeoutHandle.current == -1) {
				resetEmergencyTimeout();
				let current = getDisplayedStaggerIndex();
				let next = Math.min(childCount ?? 0, (current ?? 0) + 1);
				setDisplayedStaggerIndex(next);
			}
		}, [childCount]);
		const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(useCallback((newIndex, prevIndex) => {
			if (newIndex == null || !s.current) return;
			setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
			queueMicrotask(() => {
				for (let i = (prevIndex ?? 0) - 1; i <= newIndex; ++i) getChildren().getAt(i)?.setStaggeredVisible(true);
			});
			resetEmergencyTimeout();
		}, []), returnNull);
		const parentIsStaggered = !!staggered;
		const getChildCount = useStableGetter(childCount);
		const childCallsThisToTellTheParentToMountTheNextOne = useCallback((justMountedChildIndex) => {
			setDisplayedStaggerIndex((prevIndex) => {
				let next = Math.min(getTargetStaggerIndex() ?? 0, 1 + Math.max(prevIndex ?? 0, justMountedChildIndex));
				while (next < (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible()) ++next;
				return next;
			});
		}, []);
		const s = useRef(parentIsStaggered);
		s.current = parentIsStaggered;
		const getDefaultStaggeredVisible = useCallback((i) => {
			if (s.current) {
				const staggerIndex = getDisplayedStaggerIndex();
				if (staggerIndex == null) return false;
				return i < staggerIndex;
			} else return true;
		}, []);
		const intersectionObserver = useRef(null);
		const elementToIndex = useRef(/* @__PURE__ */ new Map());
		const setElementToIndexMap = useCallback((index, element) => {
			elementToIndex.current.set(element, index);
		}, []);
		const getIntersectionObserver = useCallback(() => intersectionObserver.current, []);
		const staggeredChildContext = useMemo(() => ({
			parentIsStaggered,
			childCallsThisToTellTheParentToMountTheNextOne,
			getDefaultStaggeredVisible,
			getIntersectionObserver,
			setElementToIndexMap
		}), [parentIsStaggered]);
		useEffect(() => {
			if (!disableIntersectionObserver) {
				const io = intersectionObserver.current = new IntersectionObserver((entries) => {
					for (let entry of entries) if (entry.isIntersecting) {
						const index = elementToIndex.current.get(entry.target);
						if (index != null) getChildren().getAt(index)?.setStaggeredVisible(true);
					}
				});
				return () => io.disconnect();
			}
		}, [disableIntersectionObserver]);
		return {
			staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
			context: useMemo(() => ({ staggeredChildContext }), [staggeredChildContext])
		};
	});
}
/**
* Child hook for {@link useStaggeredChildren}.
* 
* @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
* so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
* logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
* 
* @compositeParams
*/
function useStaggeredChild({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } } }) {
	return useMonitoring(function useStaggeredChild() {
		const [staggeredVisible, setStaggeredVisible, getStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
		const becauseScreen = useRef(false);
		const childUseEffect = useCallback(() => {
			if (!becauseScreen.current && parentIsStaggered && staggeredVisible) {
				if (parentIsStaggered && staggeredVisible) childCallsThisToTellTheParentToMountTheNextOne(index);
				else if (!parentIsStaggered) childCallsThisToTellTheParentToMountTheNextOne(index);
			}
		}, [index, parentIsStaggered && staggeredVisible]);
		const e = useRef(null);
		return {
			props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() }, "data-staggered-children-child"),
			staggeredChildReturn: {
				parentIsStaggered,
				hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false,
				childUseEffect
			},
			info: {
				setStaggeredVisible,
				getStaggeredVisible
			},
			refElementParameters: { onElementChange: useStableCallback((element) => {
				setElementToIndexMap(index, element);
				const io = getIntersectionObserver();
				if (element) {
					e.current = element;
					io?.observe(element);
				} else if (e.current) io?.unobserve(e.current);
			}) }
		};
	});
}
// src/component-detail/processed-children/use-processed-children.tsx
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
function useProcessedChildren({ rearrangeableChildrenParameters, paginatedChildrenParameters, staggeredChildrenParameters, context, managedChildrenParameters, processedIndexManglerParameters }) {
	return useMonitoring(function useProcessedChildren() {
		const childCount = rearrangeableChildrenParameters.children.length;
		const { paginationMax, paginationMin } = paginatedChildrenParameters;
		const { staggered, disableIntersectionObserver } = staggeredChildrenParameters;
		const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
		useStableCallback(() => {
			refreshPagination(paginationMin, paginationMax);
		});
		const { processedIndexManglerContext: { indexDemangler, indexMangler } } = context;
		const { rearrangeableChildrenReturn, context: { rearrangeableChildrenContext } } = useRearrangeableChildren({
			context,
			processedIndexManglerParameters,
			rearrangeableChildrenParameters,
			managedChildrenReturn
		});
		const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, context: { paginatedChildContext } } = usePaginatedChildren({
			managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
			rovingTabIndexReturn: context.processedChildrenContext,
			childrenHaveFocusReturn: context.processedChildrenContext,
			paginatedChildrenParameters: {
				paginationMax,
				paginationMin,
				childCount
			},
			processedIndexManglerReturn: {
				indexDemangler,
				indexMangler
			}
		});
		const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({
			managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
			staggeredChildrenParameters: {
				staggered,
				childCount,
				disableIntersectionObserver
			}
		});
		return {
			rearrangeableChildrenReturn,
			staggeredChildrenReturn,
			paginatedChildrenReturn,
			context: useMemoObject({
				staggeredChildContext,
				paginatedChildContext,
				managedChildContext,
				rearrangeableChildrenContext
			})
		};
	});
}
/**
* @compositeParams
*/
function useProcessedChild({ context, info: { index, getElement, ...uinfo }, rearrangeableChildParameters, ...void1 }) {
	return useMonitoring(function useProcessedChild() {
		const { paginatedChildContext, staggeredChildContext } = context;
		const { info: { updateFLIPAnimation } } = useRearrangeableChild({
			context,
			info: {
				getElement,
				index
			},
			rearrangeableChildParameters
		});
		const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild({
			context: { paginatedChildContext },
			info: { index }
		});
		const { info: { setStaggeredVisible, getStaggeredVisible }, staggeredChildReturn, props: propsStaggered, refElementParameters } = useStaggeredChild({
			context: { staggeredChildContext },
			info: { index }
		});
		const { managedChildReturn } = useManagedChild({
			context,
			info: {
				index,
				setChildCountIfPaginated,
				setPaginationVisible,
				setStaggeredVisible,
				getStaggeredVisible,
				updateFLIPAnimation,
				getElement,
				...uinfo
			}
		});
		return {
			props: useMergedProps(propsStaggered, propsPaginated),
			managedChildReturn,
			paginatedChildReturn,
			staggeredChildReturn,
			refElementParameters
		};
	});
}
// src/component-detail/processed-children/use-processed-index-mangler.tsx
/**
* @compositeParams
*/
function useProcessedIndexMangler({ processedIndexManglerParameters: { getIndex, getSortValueAt: getSortValue, compare } }) {
	return useMonitoring(function useProcessedIndexMangler() {
		useEnsureStability("useProcessedIndexMangler", getIndex, getSortValue);
		const mangler = useMemo(() => new ProcessedIndexMangler(getIndex, getSortValue, compare ?? defaultCompare), [getIndex, getSortValue]);
		const indexDemangler = useCallback((n) => mangler.map(n, "mangled", "demangled") ?? n, []);
		const indexMangler = useCallback((n) => mangler.map(n, "demangled", "mangled") ?? n, []);
		const context = useMemoObject({ processedIndexManglerContext: useMemoObject({
			mangler,
			indexDemangler,
			indexMangler
		}) });
		return {
			processedIndexManglerReturn: {
				mangler,
				indexMangler,
				indexDemangler
			},
			context
		};
	});
}
var ProcessedIndexMangler = class {
	getIndex;
	getSortValue;
	compare;
	constructor(getIndex, getSortValue, compare) {
		this.getIndex = getIndex;
		this.getSortValue = getSortValue;
		this.compare = compare;
	}
	map(index, from, to) {
		if (index == void 0) return void 0;
		switch (from) {
			case "demangled": switch (to) {
				case "demangled": return index;
				case "mangled": return this._demangledToMangled.get(index);
			}
			case "mangled": switch (to) {
				case "mangled": return index;
				case "demangled": return this._mangledToDemangled.get(index);
			}
		}
	}
	_originalChildren = [];
	sortedChildren = [];
	_mangledToDemangled = /* @__PURE__ */ new Map();
	_demangledToMangled = /* @__PURE__ */ new Map();
	setChildren(children) {
		this._mangledToDemangled.clear();
		this._demangledToMangled.clear();
		this._originalChildren = children.slice();
		this.sortedChildren = [];
		let sortedChildrenWithoutNulls = this._originalChildren.slice().map((vnode, processedIndex) => {
			const unmangledIndex = vnode == null ? void 0 : this.getIndex(vnode);
			return {
				vnode,
				unmangledIndex,
				sortValue: unmangledIndex == null ? null : this.getSortValue(unmangledIndex),
				processedIndex
			};
		}).toSorted((lhs, rhs) => this.compare(lhs.sortValue, rhs.sortValue));
		let i = 0;
		let j = 0;
		while (true) {
			if (i >= children.length) break;
			if (j >= sortedChildrenWithoutNulls.length) break;
			const originalChild = children[i];
			const originalIndex = originalChild == null ? void 0 : this.getIndex(originalChild);
			if (originalIndex == null) {
				this.sortedChildren[i] = originalChild;
				++i;
			} else {
				while (j < sortedChildrenWithoutNulls.length && sortedChildrenWithoutNulls[j].unmangledIndex == null) ++j;
				if (sortedChildrenWithoutNulls[j].unmangledIndex == null) {
					debugger;
					break;
				}
				const sortedChild = sortedChildrenWithoutNulls[j];
				const sortedIndex = sortedChild.unmangledIndex;
				this._mangledToDemangled.set(originalIndex, sortedIndex);
				this._demangledToMangled.set(sortedIndex, originalIndex);
				this.sortedChildren[i] = createElement(sortedChild.vnode.type, {
					...sortedChild.vnode.props,
					mangledIndex: sortedIndex,
					demangledIndex: originalIndex,
					key: originalIndex
				});
				++i;
				++j;
			}
		}
		return this.sortedChildren;
	}
};
/**
* #__NO_SIDE_EFFECTS__
*/
function defaultCompare(lhs, rhs) {
	if (lhs == null || rhs == null) {
		if (lhs == null) return -1;
		if (rhs == null) return 1;
	}
	return lhs > rhs ? 1 : lhs < rhs ? -1 : 0;
}
// src/component-detail/selection/use-multi-selection.tsx
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
function useMultiSelection({ multiSelectionParameters: { onSelectionChange, multiSelectionAriaPropName, multiSelectionMode, ...void3 }, managedChildrenReturn: { getChildren, ...void1 }, childrenHaveFocusReturn: { getAnyFocused, ...void4 }, ...void2 }) {
	return useMonitoring(function useMultiSelection() {
		const selectedIndices = useRef(/* @__PURE__ */ new Set());
		const unselectedIndices = useRef(/* @__PURE__ */ new Set());
		const startOfShiftSelect = useRef(null);
		let shiftKeyHeld = useRef(false);
		let ctrlKeyHeld = useRef(false);
		const notifyParentOfChildSelectChange = useStableCallback((event, index, selected, previous) => {
			console.assert(selected != previous);
			if (selected == void 0) {
				if (previous === true) selectedIndices.current.delete(index);
				else if (previous === false) unselectedIndices.current.delete(index);
			} else if (selected) {
				if (previous != void 0) unselectedIndices.current.delete(index);
				selectedIndices.current.add(index);
				startOfShiftSelect.current = index;
			} else {
				if (previous != void 0) selectedIndices.current.delete(index);
				unselectedIndices.current.add(index);
			}
			const childCount = selectedIndices.current.size + unselectedIndices.current.size;
			const selectedPercent = childCount == 0 ? 0 : selectedIndices.current.size / childCount;
			console.assert(selectedPercent >= 0 && selectedPercent <= 1);
			onSelectionChange?.(enhanceEvent(event, {
				selectedPercent,
				selectedIndices: selectedIndices.current
			}));
		});
		const changeAllChildren = useStableCallback((event, shouldBeSelected) => {
			getChildren().forEach((child) => {
				if (!child.getMultiSelectionDisabled()) child.setSelectedFromParent(event, shouldBeSelected(child.index));
			});
		});
		const doContiguousSelection = useStableCallback((event, endIndex) => {
			let originalEnd = endIndex;
			let temp = 0;
			let startIndex = startOfShiftSelect.current || 0;
			if (startIndex <= endIndex) ++startIndex;
			else {
				--startIndex;
				temp = endIndex;
				endIndex = startIndex;
				startIndex = temp;
			}
			console.assert(startIndex <= endIndex);
			if (startIndex <= endIndex) changeAllChildren(event, (childIndex) => {
				if (childIndex >= startIndex && childIndex <= endIndex) return !getChildren().getAt(childIndex)?.getMultiSelected();
				else return !!getChildren().getAt(childIndex)?.getMultiSelected();
			});
			startOfShiftSelect.current = originalEnd;
		});
		const onCompositeFocusChange = useStableCallback((anyFocused, _prevAnyFocused, _event) => {
			if (!anyFocused) ctrlKeyHeld.current = shiftKeyHeld.current = false;
		});
		let nextCtrlAIsUndo = useRef(false);
		useGlobalHandler(getDocument(), "keydown", useStableCallback((e) => {
			shiftKeyHeld.current = e.shiftKey || e.key == "Shift";
			ctrlKeyHeld.current = e.ctrlKey || e.key == "Control";
			if (getAnyFocused()) {
				if (e.code == "KeyA" && e.ctrlKey && !e.repeat) {
					if (multiSelectionMode != "disabled") {
						changeAllChildren(e, !nextCtrlAIsUndo.current ? returnTrue : returnFalse);
						e.preventDefault();
						e.stopPropagation();
						nextCtrlAIsUndo.current = !nextCtrlAIsUndo.current;
					}
				}
			}
		}), { capture: true });
		useGlobalHandler(getDocument(), "keyup", (e) => {
			if (e.key == "Shift") shiftKeyHeld.current = false;
			if (e.key == "Control") ctrlKeyHeld.current = false;
		}, {
			passive: true,
			capture: true
		});
		return {
			context: useMemoObject({ multiSelectionContext: useMemoObject({
				doContiguousSelection,
				notifyParentOfChildSelectChange,
				multiSelectionAriaPropName,
				multiSelectionMode,
				changeAllChildren,
				getCtrlKeyDown: useCallback(() => ctrlKeyHeld.current, []),
				getShiftKeyDown: useCallback(() => shiftKeyHeld.current, []),
				getAnyFocused
			}) }),
			childrenHaveFocusParameters: { onCompositeFocusChange },
			multiSelectionReturn: {},
			propsStable: useMemoObject({})
		};
	});
}
/**
* 
* @compositeParams
*/
function useMultiSelectionChild({ info: { index, ...void4 }, multiSelectionChildParameters: { initiallyMultiSelected, onMultiSelectChange, multiSelectionDisabled, ...void1 }, context: { multiSelectionContext: { notifyParentOfChildSelectChange, multiSelectionAriaPropName, multiSelectionMode, doContiguousSelection, changeAllChildren, getCtrlKeyDown, getShiftKeyDown, getAnyFocused, ...void5 }, ...void3 }, ...void2 }) {
	return useMonitoring(function useMultiSelectionChild() {
		const pressFreebie = useRef(false);
		const firePressSelectionEvent = (e) => {
			if (!multiSelectionDisabled) {
				if (multiSelectionMode == "activation") {
					if (e.shiftKey) doContiguousSelection(e, index);
					else onMultiSelectChange?.(enhanceEvent(e, { multiSelected: !getLocalSelected() }));
				} else if (e.ctrlKey) onMultiSelectChange?.(enhanceEvent(e, { multiSelected: !getLocalSelected() }));
				else {
					pressFreebie.current = true;
					focus(e.currentTarget);
					onCurrentFocusedInnerChanged(true, false, e);
				}
			}
		};
		const [localSelected, setLocalSelected, getLocalSelected] = useState(initiallyMultiSelected ?? false);
		const changeMultiSelected = useStableCallback((e, selected) => {
			console.assert(selected != null);
			if (selected) console.assert(!multiSelectionDisabled);
			else console.assert(multiSelectIsEnabled);
			let prevSelected = getLocalSelected();
			if (prevSelected != selected) {
				setLocalSelected(selected);
				notifyParentOfChildSelectChange(e, index, selected, prevSelected);
			}
		});
		const multiSelectIsEnabled = multiSelectionMode != "disabled";
		useLayoutEffect(() => {
			if (multiSelectIsEnabled) {
				notifyParentOfChildSelectChange(null, index, getLocalSelected(), void 0);
				return () => notifyParentOfChildSelectChange(null, index, void 0, getLocalSelected());
			}
		}, [index, multiSelectIsEnabled]);
		const onCurrentFocusedInnerChanged = useStableCallback((focused, prev, event) => {
			if (focused) {
				if (multiSelectionMode == "focus") {
					let any = getAnyFocused();
					const subSelectionMode = getShiftKeyDown() ? "toggle" : getCtrlKeyDown() ? "skip" : "set";
					let newIndex = index;
					switch (subSelectionMode) {
						case "set":
							if (any || pressFreebie.current) changeAllChildren(event, (index) => index == newIndex);
							break;
						case "toggle":
							doContiguousSelection(event, index);
							break;
						case "skip": debugger;
					}
				}
			}
			pressFreebie.current = false;
		});
		const setSelectedFromParent = useStableCallback((event, multiSelected) => {
			console.assert(onMultiSelectChange != null);
			onMultiSelectChange?.(enhanceEvent(event, { multiSelected }));
		});
		return {
			multiSelectionChildReturn: {
				changeMultiSelected,
				multiSelected: localSelected,
				getMultiSelected: getLocalSelected,
				multiSelectionMode,
				firePressSelectionEvent
			},
			hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
			props: { [multiSelectionAriaPropName || "aria-selected"]: multiSelectionMode == "disabled" ? void 0 : localSelected ? "true" : "false" },
			info: {
				getMultiSelected: getLocalSelected,
				setSelectedFromParent,
				getMultiSelectionDisabled: useStableGetter(multiSelectionDisabled)
			}
		};
	});
}
/**
* 
* @compositeParams
* 
* #__NO_SIDE_EFFECTS__
*/
function useMultiSelectionChildDeclarative({ multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected, ...void3 }, multiSelectionChildReturn: { changeMultiSelected, ...void2 }, ...void1 }) {
	let reasonRef = useRef(void 0);
	useLayoutEffect(() => {
		if (multiSelected != null) changeMultiSelected(reasonRef.current, multiSelected);
	}, [multiSelected]);
	return {
		multiSelectionChildParameters: { onMultiSelectChange: useStableCallback((e) => {
			reasonRef.current = e;
			return onMultiSelectedChange?.(e);
		}) },
		info: { setSelectedFromParent: useStableCallback((event, multiSelected) => {
			onMultiSelectedChange?.(enhanceEvent(event, { multiSelected }));
		}) }
	};
}
// src/component-detail/selection/use-single-selection.tsx
/**
* Allows a single child among all children to be the "selected" child (which can be different from the "focused" child).
* 
* @remarks If you need multi-select instead of single-select and you're using this hook (e.g. as part of {@link useCompleteListNavigation}), you can disable the single-selection behavior either by setting the selected index to `null` or.
* 
* @hasChild {@link useSingleSelectionChild}
* 
* @compositeParams
*/
function useSingleSelection({ managedChildrenReturn: { getChildren, ...void1 }, rovingTabIndexReturn: { setTabbableIndex, ...void2 }, singleSelectionParameters: { onSingleSelectedIndexChange: onSelectedIndexChange_U, initiallySingleSelectedIndex, singleSelectionAriaPropName, singleSelectionMode, ...void3 }, ...void4 }) {
	return useMonitoring(function useSingleSelection() {
		const onSingleSelectedIndexChange = useStableCallback(onSelectedIndexChange_U ?? noop);
		const { changeIndex: changeSingleSelectedIndex, getCurrentIndex: getSingleSelectedIndex } = useChildrenFlag({
			getChildren,
			onIndexChange: null,
			initialIndex: initiallySingleSelectedIndex,
			getAt: useCallback((m) => {
				return m.getSingleSelected();
			}, []),
			setAt: useCallback((m, t, newSelectedIndex, prevSelectedIndex) => {
				if (m.untabbable) console.assert(false);
				const directionComparison = newSelectedIndex == m.index ? prevSelectedIndex : newSelectedIndex;
				const direction = directionComparison == null ? null : m.index - directionComparison;
				if (newSelectedIndex == null) console.assert(t == false);
				if (t) console.assert(newSelectedIndex === m.index);
				m.setLocalSingleSelected(t, direction);
			}, []),
			isValid: useCallback((m) => {
				return !m.untabbable;
			}, []),
			closestFit: false,
			onClosestFit: null,
			indexDemangler: null
		});
		return {
			singleSelectionReturn: useMemoObject({
				getSingleSelectedIndex,
				changeSingleSelectedIndex
			}),
			context: useMemoObject({ singleSelectionContext: useMemoObject({
				getSingleSelectedIndex,
				onSingleSelectedIndexChange,
				singleSelectionAriaPropName,
				singleSelectionMode
			}) }),
			childrenHaveFocusParameters: { onCompositeFocusChange: useStableCallback((anyFocused, prev, reason) => {
				if (!anyFocused) {
					const selectedIndex = getSingleSelectedIndex();
					if (selectedIndex != null) setTabbableIndex(selectedIndex, reason, false);
				}
			}) }
		};
	});
}
/**
* 
* 
* @compositeParams
*/
function useSingleSelectionChild({ singleSelectionChildParameters: { singleSelectionDisabled, ...void5 }, context: { singleSelectionContext: { getSingleSelectedIndex, onSingleSelectedIndexChange, singleSelectionAriaPropName: ariaPropName, singleSelectionMode, ...void1 }, ...void2 }, info: { index, untabbable, ...void3 }, ...void4 }) {
	return useMonitoring(function useSingleSelectionChild() {
		useEnsureStability("useSingleSelectionChild", getSingleSelectedIndex, onSingleSelectedIndexChange);
		const [localSelected, setLocalSelected, getLocalSelected] = useState(getSingleSelectedIndex() == index);
		const [direction, setDirection, getDirection] = useState(getSingleSelectedIndex() == null ? null : getSingleSelectedIndex() - index);
		const onCurrentFocusedInnerChanged = useStableCallback((focused, _prev, e) => {
			if (!singleSelectionDisabled && singleSelectionMode == "focus" && focused && !untabbable) onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
		});
		const firePressSelectionEvent = useStableCallback((e) => {
			if (!singleSelectionDisabled && !untabbable) {
				if (singleSelectionMode == "activation") onSingleSelectedIndexChange(enhanceEvent(e, { selectedIndex: index }));
			} else focus(e.currentTarget);
		});
		const propParts = ariaPropName?.split("-") ?? [];
		return {
			info: {
				setLocalSingleSelected: useStableCallback((selected, direction) => {
					setLocalSelected(selected);
					setDirection(direction);
				}),
				getSingleSelected: getLocalSelected,
				singleSelected: localSelected
			},
			singleSelectionChildReturn: {
				singleSelected: localSelected,
				getSingleSelected: getLocalSelected,
				singleSelectedOffset: direction,
				singleSelectionMode,
				getSingleSelectedOffset: getDirection,
				firePressSelectionEvent
			},
			props: useTagProps(ariaPropName == null || singleSelectionMode == "disabled" ? {} : { [`${propParts[0]}-${propParts[1]}`]: localSelected ? propParts[1] == "current" ? `${propParts[2]}` : `true` : "false" }, "data-single-selection-child"),
			hasCurrentFocusParameters: { onCurrentFocusedInnerChanged }
		};
	});
}
/**
* Let's face it, declarative is nicer to use than imperative, so this is a shortcut.
*/
function useSingleSelectionDeclarative({ singleSelectionReturn: { changeSingleSelectedIndex }, singleSelectionDeclarativeParameters: { singleSelectedIndex, onSingleSelectedIndexChange } }) {
	let s = singleSelectedIndex ?? null;
	let reasonRef = useRef(void 0);
	useLayoutEffect(() => {
		changeSingleSelectedIndex(s, reasonRef.current);
	}, [s]);
	return { singleSelectionParameters: { onSingleSelectedIndexChange: useCallback((e) => {
		reasonRef.current = e;
		return onSingleSelectedIndexChange?.(e);
	}, [onSingleSelectedIndexChange]) } };
}
// src/component-detail/selection/use-selection.tsx
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
function useSelection({ managedChildrenReturn, multiSelectionParameters, childrenHaveFocusReturn, rovingTabIndexReturn, singleSelectionParameters }) {
	const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc1, ...void3 }, context: contextSS, singleSelectionReturn, ...void1 } = useSingleSelection({
		managedChildrenReturn,
		rovingTabIndexReturn,
		singleSelectionParameters
	});
	const { childrenHaveFocusParameters: { onCompositeFocusChange: ocfc2, ...void4 }, context: contextMS, multiSelectionReturn, propsStable, ...void2 } = useMultiSelection({
		managedChildrenReturn,
		multiSelectionParameters,
		childrenHaveFocusReturn
	});
	return {
		propsStable,
		childrenHaveFocusParameters: { onCompositeFocusChange: useStableMergedCallback(ocfc1, ocfc2) },
		context: useMemoObject({
			...contextSS,
			...contextMS
		}),
		multiSelectionReturn,
		singleSelectionReturn
	};
}
/**
* 
* @compositeParams
*/
function useSelectionChild({ context, info: { index, untabbable, ...void2 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void3 }) {
	const { props: p1, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, ...void1 }, singleSelectionChildReturn } = useSingleSelectionChild({
		context,
		info: {
			index,
			untabbable
		},
		singleSelectionChildParameters
	});
	const { props: p2, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 }, multiSelectionChildReturn, info: { getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void5 }, ...void4 } = useMultiSelectionChild({
		context,
		info: { index },
		multiSelectionChildParameters
	});
	return {
		hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
		info: {
			getMultiSelected,
			setSelectedFromParent,
			getSingleSelected,
			setLocalSingleSelected,
			singleSelected,
			getMultiSelectionDisabled
		},
		singleSelectionChildReturn,
		multiSelectionChildReturn,
		selectionChildReturn: { firePressSelectionEvent: useStableMergedCallback(singleSelectionChildReturn.firePressSelectionEvent, multiSelectionChildReturn.firePressSelectionEvent) },
		props: useMergedProps(p1, p2)
	};
}
/**
* @compositeParams
*/
function useSelectionDeclarative(args) {
	return useSingleSelectionDeclarative(args);
}
/**
* @compositeParams
*/
function useSelectionChildDeclarative(args) {
	return useMultiSelectionChildDeclarative(args);
}
// src/dom-helpers/use-ref-element.tsx
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
function useRefElement(args) {
	const nonElementWarn = useRef(false);
	if (nonElementWarn.current) {
		nonElementWarn.current = false;
		console.assert(false, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
	}
	const { onElementChange, onMount, onUnmount } = args.refElementParameters || {};
	useEnsureStability("useRefElement", onElementChange, onMount, onUnmount);
	const [getElement, setElement] = usePassiveState(useCallback((e, prevValue) => {
		if (!(e == null || e instanceof Element)) {
			console.assert(e == null || e instanceof Element, `useRefElement was used on a component that didn't forward its ref onto a DOM element, so it's attached to that component's VNode instead.`);
			nonElementWarn.current = true;
		}
		const cleanup = onElementChange?.(e, prevValue);
		if (prevValue) onUnmount?.(prevValue);
		if (e) onMount?.(e);
		return cleanup;
	}, []), returnNull, {
		debounceRendering: runImmediately,
		skipMountInitialization: true
	});
	return {
		propsStable: useRef({ ref: setElement }).current,
		refElementReturn: { getElement }
	};
}
// src/observers/use-active-element.tsx
const activeElementUpdaters = /* @__PURE__ */ new Map();
const lastActiveElementUpdaters = /* @__PURE__ */ new Map();
const windowFocusedUpdaters = /* @__PURE__ */ new Map();
const windowsFocusedUpdaters = /* @__PURE__ */ new Map();
function forEachUpdater(window, map, value, reason) {
	const updaters = map.get(window);
	if (updaters) for (const updater of updaters) {
		const { lastSent, send } = updater;
		if (value !== lastSent) {
			send(value, reason);
			updater.lastSent = value;
		}
	}
}
function focusout(e) {
	const window = e.target.ownerDocument.defaultView;
	if (e.relatedTarget == null) forEachUpdater(window, activeElementUpdaters, null, e);
}
function focusin(e) {
	const window = e.target.ownerDocument.defaultView;
	const currentlyFocusedElement = e.target;
	forEachUpdater(window, activeElementUpdaters, currentlyFocusedElement, e);
	forEachUpdater(window, lastActiveElementUpdaters, currentlyFocusedElement, e);
}
function windowFocus(e) {
	const window = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
	windowsFocusedUpdaters.set(window, true);
	forEachUpdater(window, windowFocusedUpdaters, true, e);
}
function windowBlur(e) {
	const window = e.target instanceof Window ? e.target : e.currentTarget instanceof Window ? e.currentTarget : e.target.ownerDocument.defaultView;
	windowsFocusedUpdaters.set(window, false);
	forEachUpdater(window, windowFocusedUpdaters, false, e);
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
function useActiveElement({ activeElementParameters: { onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument } }) {
	return useMonitoring(function useActiveElement() {
		useEnsureStability("useActiveElement", onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, getDocument);
		useEffect(() => {
			const document = getDocument();
			const window = document?.defaultView;
			if ((activeElementUpdaters.get(window)?.size ?? 0) === 0) {
				document?.addEventListener("focusin", focusin, { passive: true });
				document?.addEventListener("focusout", focusout, { passive: true });
				window?.addEventListener("focus", windowFocus, { passive: true });
				window?.addEventListener("blur", windowBlur, { passive: true });
			}
			const laeu = {
				send: setActiveElement,
				lastSent: void 0
			};
			const llaeu = {
				send: setLastActiveElement,
				lastSent: void 0
			};
			const lwfu = {
				send: setWindowFocused,
				lastSent: void 0
			};
			MapOfSets.add(activeElementUpdaters, window, laeu);
			MapOfSets.add(lastActiveElementUpdaters, window, llaeu);
			MapOfSets.add(windowFocusedUpdaters, window, lwfu);
			return () => {
				MapOfSets.delete(activeElementUpdaters, window, laeu);
				MapOfSets.delete(lastActiveElementUpdaters, window, llaeu);
				MapOfSets.delete(windowFocusedUpdaters, window, lwfu);
				if (activeElementUpdaters.size === 0) {
					document?.removeEventListener("focusin", focusin);
					document?.removeEventListener("focusout", focusout);
					window?.removeEventListener("focus", windowFocus);
					window?.removeEventListener("blur", windowBlur);
				}
			};
		}, []);
		const [getActiveElement, setActiveElement] = usePassiveState(onActiveElementChange, returnNull, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		const [getLastActiveElement, setLastActiveElement] = usePassiveState(onLastActiveElementChange, returnNull, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		const [getWindowFocused, setWindowFocused] = usePassiveState(onWindowFocusedChange, returnTrue, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		return { activeElementReturn: {
			getActiveElement,
			getLastActiveElement,
			getWindowFocused
		} };
	});
}
// src/component-detail/use-dismiss.tsx
/**
* Combines all the methods a user can implicitly dismiss a popup component. See {@link useModal} for a hook that's ready-to-use for dialogs and menus.
* 
* @compositeParams
*/
function useDismiss({ dismissParameters: { dismissActive, onDismiss, ...void3 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void6 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void7 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void2 }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange: olaec1, onWindowFocusedChange, ...void5 }, ...void4 }) {
	return useMonitoring(function useDismiss() {
		const { refElementReturn: refElementSourceReturn, propsStable: propsStableSource } = useRefElement({ refElementParameters: {} });
		const { refElementReturn: refElementPopupReturn, propsStable: propsStablePopup } = useRefElement({ refElementParameters: {} });
		useBackdropDismiss({
			refElementPopupReturn,
			backdropDismissParameters: {
				dismissBackdropActive: dismissBackdropActive && dismissActive,
				onDismissBackdrop: useStableCallback((e) => {
					onDismissBackdrop?.(e);
					onDismiss(e, "backdrop");
				})
			}
		});
		useEscapeDismiss({
			refElementPopupReturn,
			escapeDismissParameters: {
				dismissEscapeActive: dismissEscapeActive && dismissActive,
				getDocument,
				onDismissEscape: useStableCallback((e) => {
					onDismissEscape?.(e);
					onDismiss(e, "escape");
				}),
				parentDepth
			}
		});
		const { activeElementParameters: { onLastActiveElementChange: olaec2, ...void1 } } = useLostFocusDismiss({
			lostFocusDismissParameters: {
				dismissLostFocusActive: dismissLostFocusActive && dismissActive,
				onDismissLostFocus: useStableCallback((e) => {
					onDismissLostFocus?.(e);
					onDismiss(e, "lost-focus");
				})
			},
			refElementPopupReturn,
			refElementSourceReturn
		});
		const { activeElementReturn: { getActiveElement: _getActiveElement, getLastActiveElement: _getLastActiveElement, getWindowFocused: _getWindowFocused } } = useActiveElement({ activeElementParameters: {
			onLastActiveElementChange: useStableMergedCallback(olaec2, olaec1),
			onActiveElementChange,
			onWindowFocusedChange,
			getDocument
		} });
		return {
			refElementSourceReturn,
			refElementPopupReturn,
			propsStableSource,
			propsStablePopup
		};
	});
}
// src/util/blocking-elements.ts
let be;
(async () => {
	if (typeof window !== "undefined") {
		let d = !!globalThis.document;
		globalThis.document ??= {};
		await import("blocking-elements/dist/blocking-elements.min.js");
		be = document.$blockingElements;
		if (!d) delete globalThis.document;
	}
})();
function blockingElements() {
	return be;
}
// src/dom-helpers/use-blocking-element.tsx
/**
* Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
* 
* @remarks Automatically handles consecutive calls with a loosely applied stack operation 
* (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
* it'll take to find its way into the spec, if ever)
* 
* @param target 
*/
function useBlockingElement({ activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void3 }, blockingElementParameters: { enabled, getTarget, ...void1 }, ...void2 }) {
	const stableGetTarget = useStableCallback(getTarget);
	useActiveElement({ activeElementParameters: {
		getDocument,
		onActiveElementChange,
		onWindowFocusedChange,
		onLastActiveElementChange: useStableCallback((e, prev, reason) => {
			onLastActiveElementChange?.(e, prev, reason);
			if (e) {
				if (enabled) setLastActiveWhenOpen(e, reason);
				else setLastActiveWhenClosed(e, reason);
			}
		})
	} });
	const [getTop, setTop] = usePassiveState(null, returnNull);
	const [getLastActiveWhenClosed, setLastActiveWhenClosed] = usePassiveState(null, returnNull);
	const [getLastActiveWhenOpen, setLastActiveWhenOpen] = usePassiveState(null, returnNull);
	/**
	* Push/pop the element from the blockingElements stack.
	*/
	useLayoutEffect(() => {
		const target = stableGetTarget();
		if (enabled) try {
			blockingElements().push(target);
			setTop(target);
			return () => {
				blockingElements().remove(target);
			};
		} catch (ex) {
			console.error(ex);
		}
	}, [enabled]);
	return {
		getTop,
		getLastActiveWhenClosed,
		getLastActiveWhenOpen
	};
}
function getTopElement() {
	return blockingElements().top;
}
// src/component-detail/use-focus-trap.tsx
/**
* Allows you to move focus to an isolated area of the page, restore it when finished, and **optionally trap it there** so that you can't tab out of it.
* 
* @remarks By default, this implements a focus trap using the Blocking Elements...uh...[proposal](https://github.com/whatwg/html/issues/897)? 
* Not that it really looks like it's going anywhere, but until something better comes along, [the polyfill](#https://github.com/PolymerLabs/blocking-elements) has been working pretty great.
* 
* @compositeParams
*/
function useFocusTrap({ focusTrapParameters: { onlyMoveFocus, trapActive, focusPopup: focusSelfUnstable, focusOpener: focusOpenerUnstable }, activeElementParameters, refElementReturn }) {
	return useMonitoring(function useFocusTrap() {
		const focusSelf = useStableCallback(focusSelfUnstable);
		const focusOpener = useStableCallback(focusOpenerUnstable);
		useEffect(() => {
			const document = getDocument();
			if (trapActive) {
				let top = getTop();
				getLastActiveWhenOpen();
				top ??= refElementReturn.getElement();
				console.assert(!!top);
				if (top) focusSelf(top, () => findFirstFocusable(top));
			} else {
				const lastActive = getLastActiveWhenClosed();
				let currentFocus = document?.activeElement;
				let top = refElementReturn.getElement();
				if (document && (currentFocus == document.body || currentFocus == null || top == currentFocus || top?.contains(currentFocus))) {
					if (lastActive) focusOpener(lastActive);
				}
			}
		}, [trapActive]);
		const { getElement } = refElementReturn;
		const { getTop, getLastActiveWhenClosed, getLastActiveWhenOpen } = useBlockingElement({
			activeElementParameters,
			blockingElementParameters: {
				enabled: trapActive && !onlyMoveFocus,
				getTarget: getElement
			}
		});
		return { props: useTagProps({ "aria-modal": trapActive ? "true" : void 0 }, "data-focus-trap") };
	});
}
/**
* Returns the first focusable element contained within the given node, or null if none are found.
*/
function findFirstFocusable(element) {
	return findFirstCondition(element, (node) => node instanceof Element && isFocusable(node));
}
/**
* Returns the first tabbable element contained within the given node, or null if none are found.
*/
function findFirstTabbable(element) {
	return findFirstCondition(element, (node) => node instanceof Element && isTabbable(node));
}
function findFirstCondition(element, filter) {
	const document = getDocument(element);
	if (!document) return null;
	if (element && filter(element)) return element;
	console.assert(!!element);
	element ??= document?.body;
	return (document?.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => filter(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP })).firstChild();
}
// src/component-detail/use-grid-navigation-selection.tsx
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
function useGridNavigationSelection({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, managedChildrenReturn, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void2 }) {
	return useMonitoring(function useGridNavigationSelection() {
		const { context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext }, linearNavigationReturn, managedChildrenParameters, props, rovingTabIndexReturn, typeaheadNavigationReturn } = useGridNavigation({
			gridNavigationParameters,
			linearNavigationParameters,
			managedChildrenReturn,
			rovingTabIndexParameters: {
				...rovingTabIndexParameters,
				initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0
			},
			typeaheadNavigationParameters,
			paginatedChildrenParameters,
			processedIndexManglerReturn,
			refElementReturn
		});
		const { childrenHaveFocusParameters, context: { singleSelectionContext, multiSelectionContext }, multiSelectionReturn, propsStable, singleSelectionReturn, ...void1 } = useSelection({
			managedChildrenReturn,
			rovingTabIndexReturn,
			singleSelectionParameters,
			multiSelectionParameters,
			childrenHaveFocusReturn
		});
		return {
			context: useMemoObject({
				gridNavigationRowContext,
				rovingTabIndexContext,
				singleSelectionContext,
				multiSelectionContext,
				typeaheadNavigationContext
			}),
			childrenHaveFocusParameters,
			linearNavigationReturn,
			managedChildrenParameters,
			props: useMergedProps(props, propsStable),
			rovingTabIndexReturn,
			singleSelectionReturn,
			multiSelectionReturn,
			typeaheadNavigationReturn
		};
	});
}
/**
* @compositeParams
*/
function useGridNavigationSelectionRow({ info: mcp1, linearNavigationParameters, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters, context, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
	return useMonitoring(function useGridNavigationSelectionRow() {
		const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 }, props: propsSelection, selectionChildReturn, singleSelectionChildReturn, multiSelectionChildReturn, ...void2 } = useSelectionChild({
			info: mcp1,
			context,
			singleSelectionChildParameters,
			multiSelectionChildParameters
		});
		const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentParameters, typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow({
			context,
			linearNavigationParameters,
			info: mcp1,
			managedChildrenReturn,
			refElementReturn,
			rovingTabIndexParameters,
			typeaheadNavigationParameters
		});
		return {
			context: contextGridNavigation,
			linearNavigationReturn,
			info: {
				getLocallyTabbable,
				getSingleSelected,
				singleSelected,
				setLocallyTabbable,
				setLocalSingleSelected,
				focusSelf,
				getMultiSelected,
				setSelectedFromParent,
				getMultiSelectionDisabled
			},
			managedChildrenParameters,
			pressParameters: { excludeSpace },
			selectionChildReturn,
			hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
			props: useMergedProps(propsGridNavigation, propsSelection),
			rovingTabIndexChildReturn,
			rovingTabIndexReturn,
			singleSelectionChildReturn,
			multiSelectionChildReturn,
			textContentParameters,
			typeaheadNavigationReturn
		};
	});
}
/**
* @compositeParams
*/
function useGridNavigationSelectionCell(p) {
	return useMonitoring(function useGridNavigationSelectionCell() {
		return useGridNavigationCell(p);
	});
}
// src/component-detail/use-list-navigation-selection.tsx
/**
* Combines {@link useListNavigation} and {@link useSelection}.
* 
* @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
* 
* @hasChild {@link useListNavigationSelectionChild}
* 
* @compositeParams
*/
function useListNavigationSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void3 }) {
	return useMonitoring(function useListNavigationSelection() {
		const { context: contextSS, propsStable, ...retSS } = useSelection({
			childrenHaveFocusReturn,
			rovingTabIndexReturn: { setTabbableIndex: useStableCallback((...a) => {
				rovingTabIndexReturn.setTabbableIndex(...a);
			}) },
			managedChildrenReturn,
			singleSelectionParameters,
			multiSelectionParameters
		});
		const { context: contextLN, props, rovingTabIndexReturn, ...retLN } = useListNavigation({
			rovingTabIndexParameters: {
				...rovingTabIndexParameters,
				initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0
			},
			linearNavigationParameters,
			paginatedChildrenParameters,
			typeaheadNavigationParameters,
			managedChildrenReturn,
			refElementReturn,
			processedIndexManglerReturn
		});
		return {
			rovingTabIndexReturn,
			...retSS,
			...retLN,
			context: useMemoObject({
				...contextLN,
				...contextSS
			}),
			props: useMergedProps(props, propsStable)
		};
	});
}
/**
* @compositeParams
*/
function useListNavigationSelectionChild({ info: { index, untabbable, ...void2 }, context, refElementReturn, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
	return useMonitoring(function useListNavigationSelectionChild() {
		const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: infoSS, multiSelectionChildReturn, singleSelectionChildReturn, props: propsSS, selectionChildReturn, ...void9 } = useSelectionChild({
			info: {
				index,
				untabbable
			},
			context,
			multiSelectionChildParameters,
			singleSelectionChildParameters
		});
		const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters: { excludeSpace }, rovingTabIndexChildReturn, textContentParameters, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
			info: {
				index,
				untabbable
			},
			context,
			refElementReturn
		});
		return {
			hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
			pressParameters: { excludeSpace },
			selectionChildReturn,
			info: {
				...infoSS,
				...infoLN
			},
			rovingTabIndexChildReturn,
			multiSelectionChildReturn,
			singleSelectionChildReturn,
			textContentParameters,
			propsChild: propsSS,
			propsTabbable: propsLN
		};
	});
}
// src/dom-helpers/use-text-content.tsx
/**
* Allows examining the rendered component's text content whenever it renders and reacting to changes.
* 
* @compositeParams
*/
function useTextContent({ refElementReturn: { getElement }, textContentParameters: { getText, onTextContentChange } }) {
	return useMonitoring(function useTextContent() {
		const [getTextContent, setTextContent] = usePassiveState(onTextContentChange, returnNull, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		useEffect(() => {
			const element = getElement();
			if (element) {
				const textContent = getText(element);
				if (textContent) setTextContent(textContent);
			}
		});
		return { textContentReturn: { getTextContent } };
	});
}
// src/observers/use-children-have-focus.tsx
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
function useChildrenHaveFocus(args) {
	return useMonitoring(function useChildrenHaveFocus() {
		const { childrenHaveFocusParameters: { onCompositeFocusChange } } = args;
		const [getAnyFocused, setAnyFocused] = usePassiveState(onCompositeFocusChange, returnFalse, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		const [_getFocusCount, setFocusCount] = usePassiveState(useStableCallback((anyFocused, anyPreviouslyFocused, e) => {
			console.assert(anyFocused >= 0 && anyFocused <= 1);
			setAnyFocused(!!(anyFocused && !anyPreviouslyFocused), e);
		}), returnZero, {
			debounceRendering: setTimeout,
			skipMountInitialization: true
		});
		return {
			childrenHaveFocusReturn: { getAnyFocused },
			context: useMemoObject({ childrenHaveFocusChildContext: useMemoObject({ setFocusCount }) })
		};
	});
}
/**
* @compositeParams
*/
function useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext: { setFocusCount } } }) {
	return useMonitoring(function useChildrenHaveFocusChild() {
		return { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
			if (focused) setFocusCount((p) => (p ?? 0) + 1, e);
			else if (!focused && prev) setFocusCount((p) => (p ?? 0) - 1, e);
		}) } };
	});
}
// src/observers/use-has-current-focus.tsx
/**
* Allows monitoring whether the rendered element is or is not focused directly (i.e. would satisfy `:focus`).
* 
* @see {@link useHasLastFocus}, in which even if the `body` is clicked it's not considered a loss in focus.
* 
* @compositeParams
*/
function useHasCurrentFocus(args) {
	return useMonitoring(function useHasCurrentFocus() {
		const { hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged }, refElementReturn: { getElement } } = args;
		useEnsureStability("useHasCurrentFocus", onCurrentFocusedChanged, onCurrentFocusedInnerChanged, getElement);
		const [getFocused, setFocused] = usePassiveState(onCurrentFocusedChanged, returnFalse, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		const [getFocusedInner, setFocusedInner] = usePassiveState(onCurrentFocusedInnerChanged, returnFalse, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		const onFocusIn = useCallback((e) => {
			setFocusedInner(true, e);
			setFocused(e.target == getElement(), e);
		}, []);
		const onFocusOut = useCallback((e) => {
			setFocusedInner(false, e);
			setFocused(false, e);
		}, []);
		useEffect(() => {
			return () => {
				setFocused(false, void 0);
				setFocusedInner(false, void 0);
			};
		}, []);
		return { hasCurrentFocusReturn: {
			propsStable: useRef({
				[onfocusin]: onFocusIn,
				[onfocusout]: onFocusOut
			}).current,
			getCurrentFocused: getFocused,
			getCurrentFocusedInner: getFocusedInner
		} };
	});
}
// src/component-use/use-grid-navigation-complete.tsx
/**
* Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
* 
* @hasChild {@link useCompleteGridNavigationRow}
* @hasChild {@link useCompleteGridNavigationCell}
* 
* @compositeParams
*/
function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, gridNavigationCompleteParameters: { getSortColumn, getSortValueAt: gsva }, processedIndexManglerParameters: { compare, getIndex }, ...void1 }) {
	return useMonitoring(function useCompleteGridNavigation() {
		useEnsureStability("useCompleteGridNavigation", getSortColumn, gsva);
		const getSortValueAt = useCallback((index) => {
			return gsva(index, getSortColumn == void 0 ? void 0 : getSortColumn());
		}, [gsva, getSortColumn]);
		const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
		const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
		const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
		const isValidForNavigation = useCallback((i) => {
			const child = getChildren().getAt(i);
			if (child == null) return false;
			if (child.untabbable) return false;
			return true;
		}, []);
		const { refElementReturn, propsStable, ...void2 } = useRefElement({ refElementParameters });
		const { context: { processedIndexManglerContext }, processedIndexManglerReturn } = useProcessedIndexMangler({ processedIndexManglerParameters: {
			compare,
			getIndex,
			getSortValueAt
		} });
		const { indexDemangler, indexMangler } = processedIndexManglerReturn;
		const getAnyFocused = useStableCallback(() => childrenHaveFocusReturn.getAnyFocused());
		const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, rovingTabIndexReturn, linearNavigationReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSelection({
			gridNavigationParameters,
			singleSelectionParameters,
			multiSelectionParameters,
			paginatedChildrenParameters,
			refElementReturn,
			linearNavigationParameters: {
				getLowestIndex: getLowestChildIndex,
				getHighestIndex: getHighestChildIndex,
				isValidForLinearNavigation: isValidForNavigation,
				...linearNavigationParameters
			},
			managedChildrenReturn: { getChildren },
			rovingTabIndexParameters: {
				untabbableBehavior: "focus-parent",
				...rovingTabIndexParameters
			},
			typeaheadNavigationParameters: {
				isValidForTypeaheadNavigation: isValidForNavigation,
				...typeaheadNavigationParameters
			},
			childrenHaveFocusReturn: { getAnyFocused },
			processedIndexManglerReturn: {
				indexDemangler,
				indexMangler
			}
		});
		const refreshRows = useRef(() => {});
		const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
		const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
		const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
		return {
			context: useMemoObject({
				singleSelectionContext,
				multiSelectionContext,
				managedChildContext,
				rovingTabIndexContext,
				typeaheadNavigationContext,
				childrenHaveFocusChildContext,
				gridNavigationRowContext,
				processedChildrenContext: useMemoObject({
					getTabbableIndex,
					setTabbableIndex,
					getAnyFocused,
					getElement: refElementReturn.getElement
				}),
				processedIndexManglerContext,
				completeGridNavigationContext: useMemoObject({
					compare,
					getIndex,
					getSortValueAt,
					provideParentWithRefreshRows: useCallback((e) => {
						refreshRows.current = e;
					}, [])
				})
			}),
			props: useMergedProps(props, propsStable),
			refElementReturn,
			managedChildrenReturn,
			rovingTabIndexReturn,
			childrenHaveFocusReturn,
			linearNavigationReturn,
			singleSelectionReturn,
			multiSelectionReturn,
			typeaheadNavigationReturn,
			rearrangeableChildrenReturn: { refresh: useCallback(() => refreshRows.current(), []) }
		};
	});
}
/**
* Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
* 
* @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
* 
* @compositeParams
*/
function useCompleteGridNavigationRows({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }) {
	return useMonitoring(function useCompleteGridNavigationRows() {
		const { completeGridNavigationContext: { compare, getIndex, getSortValueAt, provideParentWithRefreshRows } } = context;
		const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn } = useProcessedChildren({
			paginatedChildrenParameters,
			processedIndexManglerParameters: {
				compare,
				getIndex,
				getSortValueAt
			},
			staggeredChildrenParameters,
			managedChildrenParameters,
			rearrangeableChildrenParameters,
			context
		});
		useLayoutEffect(() => {
			provideParentWithRefreshRows(() => {
				rearrangeableChildrenReturn.refresh();
			});
		}, []);
		return {
			context: contextRPS,
			paginatedChildrenReturn,
			rearrangeableChildrenReturn,
			staggeredChildrenReturn
		};
	});
}
/**
* @compositeParams
*/
function useCompleteGridNavigationRowOuter({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }) {
	return useMonitoring(function useCompleteGridNavigationRowOuter() {
		const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {
			onElementChange: useStableCallback((...a) => {
				oec1?.(...a);
				oec2?.(...a);
			}),
			onMount,
			onUnmount
		} });
		const { props, ...processedChildReturn } = useProcessedChild({
			context,
			info: {
				...uinfo,
				index,
				getElement: refElementReturn.getElement
			},
			rearrangeableChildParameters
		});
		const { refElementParameters: { onElementChange: oec2 } } = processedChildReturn;
		return {
			...processedChildReturn,
			props: useMergedProps(props, propsStable),
			refElementReturn,
			hide: processedChildReturn.paginatedChildReturn.hideBecausePaginated || processedChildReturn.staggeredChildReturn.hideBecauseStaggered
		};
	});
}
/**
* @compositeParams
*/
function useCompleteGridNavigationRow({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters: { getText, onTextContentChange: otcc1 }, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }) {
	return useMonitoring(function useCompleteGridNavigationRow() {
		const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
		const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
		const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
		const isValidForNavigation = useCallback((i) => {
			const child = getChildren().getAt(i);
			if (child == null) return false;
			if (child.untabbable) return false;
			return true;
		}, []);
		const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
		const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, selectionChildReturn, textContentParameters: { onTextContentChange: otcc2 }, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p3, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = useGridNavigationSelectionRow({
			rovingTabIndexParameters,
			typeaheadNavigationParameters: {
				isValidForTypeaheadNavigation: isValidForNavigation,
				...typeaheadNavigationParameters
			},
			linearNavigationParameters: {
				isValidForLinearNavigation: isValidForNavigation,
				getHighestIndex: getHighestChildIndex,
				getLowestIndex: getLowestChildIndex,
				...linearNavigationParameters
			},
			managedChildrenReturn: { getChildren },
			refElementReturn,
			context: contextIncomingForRowAsChildOfTable,
			info: {
				index,
				untabbable
			},
			singleSelectionChildParameters,
			multiSelectionChildParameters
		});
		const { textContentReturn, ...void7 } = useTextContent({
			refElementReturn,
			textContentParameters: {
				getText,
				onTextContentChange: useStableMergedCallback(otcc1, otcc2)
			}
		});
		const completeInfo = {
			getElement: refElementReturn.getElement,
			index,
			untabbable,
			...infoRowReturn
		};
		const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
		const { managedChildReturn, ...void4 } = useManagedChild({
			context: contextIncomingForRowAsChildOfTable,
			info: {
				...completeInfo,
				...customUserInfo
			}
		});
		const context = useMemoObject({
			...contextGNR,
			...contextMC
		});
		const { hasCurrentFocusReturn } = useHasCurrentFocus({
			refElementReturn,
			hasCurrentFocusParameters: {
				onCurrentFocusedChanged: ocfc1,
				onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic3)
			}
		});
		return {
			pressParameters,
			hasCurrentFocusReturn,
			managedChildrenReturn,
			context,
			textContentReturn,
			managedChildReturn,
			linearNavigationReturn,
			rovingTabIndexChildReturn,
			rovingTabIndexReturn,
			selectionChildReturn,
			singleSelectionChildReturn,
			multiSelectionChildReturn,
			typeaheadNavigationReturn,
			refElementReturn,
			props: useMergedProps(propsStable, p3, hasCurrentFocusReturn.propsStable)
		};
	});
}
/**
* @compositeParams
*/
function useCompleteGridNavigationCell({ gridNavigationCellParameters, context, textContentParameters: { getText, onTextContentChange: otcc1, ...void4 }, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }) {
	return useMonitoring(function useCompleteGridNavigationCell() {
		const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
		const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentParameters: { onTextContentChange: otcc2 }, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSelectionCell({
			gridNavigationCellParameters,
			info: {
				index,
				untabbable
			},
			context,
			refElementReturn
		});
		const { textContentReturn, ...void3 } = useTextContent({
			refElementReturn,
			textContentParameters: {
				getText,
				onTextContentChange: useStableMergedCallback(otcc1, otcc2)
			}
		});
		const { hasCurrentFocusReturn } = useHasCurrentFocus({
			hasCurrentFocusParameters: {
				onCurrentFocusedChanged: null,
				...hasCurrentFocusParameters
			},
			refElementReturn
		});
		const { managedChildReturn } = useManagedChild({
			context,
			info: {
				getElement: refElementReturn.getElement,
				getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
				setLocallyTabbable: info2.setLocallyTabbable,
				focusSelf,
				index,
				untabbable,
				...customUserInfo
			}
		});
		return {
			props: useMergedProps(propsStable, propsRti, hasCurrentFocusReturn.propsStable),
			refElementReturn,
			rovingTabIndexChildReturn,
			pressParameters: { excludeSpace: useStableCallback(() => es1?.() || false) },
			hasCurrentFocusReturn,
			managedChildReturn,
			textContentReturn
		};
	});
}
/**
* @compositeParams
*/
function useCompleteGridNavigationDeclarative({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }) {
	const ret2 = useCompleteGridNavigation({
		singleSelectionParameters: {
			initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
			onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
			...singleSelectionParameters
		},
		...normalGridNavParameters
	});
	const { singleSelectionParameters: { onSingleSelectedIndexChange } } = useSelectionDeclarative({
		singleSelectionDeclarativeParameters,
		singleSelectionReturn: ret2.singleSelectionReturn
	});
	return ret2;
}
/**
* @compositeParams
*/
function useCompleteGridNavigationRowDeclarative({ multiSelectionChildParameters: { multiSelectionDisabled, ...multiSelectionChildParameters }, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters }, info, ...p }) {
	const { info: { setSelectedFromParent }, multiSelectionChildParameters: { onMultiSelectChange } } = useSelectionChildDeclarative({
		multiSelectionChildDeclarativeParameters: {
			multiSelected,
			onMultiSelectedChange,
			...multiSelectionChildDeclarativeParameters
		},
		multiSelectionChildReturn: { changeMultiSelected: useStableCallback((...e) => {
			changeMultiSelected(...e);
		}) }
	});
	const r1 = useCompleteGridNavigationRow({
		info: {
			...info,
			setSelectedFromParent
		},
		multiSelectionChildParameters: {
			...multiSelectionChildParameters,
			initiallyMultiSelected: multiSelected,
			multiSelectionDisabled,
			onMultiSelectChange: useStableCallback((e) => {
				onMultiSelectChange?.(e);
			})
		},
		...p
	});
	const { multiSelectionChildReturn: { changeMultiSelected } } = r1;
	return r1;
}
// src/component-use/use-list-navigation-complete.tsx
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
function useCompleteListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, processedIndexManglerParameters, ...void1 }) {
	return useMonitoring(function useCompleteListNavigation() {
		const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
		const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
		const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
		const isValidForNavigation = useCallback((i) => {
			const child = getChildren().getAt(i);
			if (!child) return false;
			if (child.untabbable) return false;
			return true;
		}, []);
		const { propsStable: propsRef, refElementReturn } = useRefElement({ refElementParameters });
		const { context: { processedIndexManglerContext }, processedIndexManglerReturn: { indexDemangler, indexMangler, mangler } } = useProcessedIndexMangler({ processedIndexManglerParameters });
		const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...mcp1 }, context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, props, ...void2 } = useListNavigationSelection({
			managedChildrenReturn: { getChildren },
			linearNavigationParameters: {
				getLowestIndex,
				getHighestIndex,
				isValidForLinearNavigation: isValidForNavigation,
				...linearNavigationParameters
			},
			typeaheadNavigationParameters: {
				isValidForTypeaheadNavigation: isValidForNavigation,
				...typeaheadNavigationParameters
			},
			rovingTabIndexParameters: {
				untabbableBehavior: "focus-parent",
				...rovingTabIndexParameters
			},
			singleSelectionParameters,
			multiSelectionParameters,
			paginatedChildrenParameters,
			refElementReturn,
			childrenHaveFocusReturn: { getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused()) },
			processedIndexManglerReturn: {
				indexDemangler,
				indexMangler
			}
		});
		const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
		const { context: { managedChildContext: managedChildRTIContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters: {
			onChildrenMountChange,
			...mcp1
		} });
		const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
		const { getAnyFocused } = childrenHaveFocusReturn;
		const processedChildrenContext = useMemoObject({
			getTabbableIndex,
			setTabbableIndex,
			getAnyFocused
		});
		const refreshRows = useRef(() => {});
		const { getSortValueAt, compare, getIndex } = processedIndexManglerParameters;
		return {
			context: useMemoObject({
				childrenHaveFocusChildContext,
				rovingTabIndexContext,
				singleSelectionContext,
				multiSelectionContext,
				typeaheadNavigationContext,
				managedChildContext: managedChildRTIContext,
				processedChildrenContext,
				listNavigationCompleteContext: useMemoObject({
					getSortValueAt,
					compare,
					getIndex,
					provideParentWithRefreshRows: useCallback((e) => {
						refreshRows.current = e;
					}, [])
				}),
				processedIndexManglerContext
			}),
			props: useMergedProps(props, propsRef),
			managedChildrenReturn,
			linearNavigationReturn,
			rovingTabIndexReturn,
			singleSelectionReturn,
			multiSelectionReturn,
			typeaheadNavigationReturn,
			childrenHaveFocusReturn,
			refElementReturn,
			rearrangeableChildrenReturn: { refresh: useCallback(() => refreshRows.current(), []) }
		};
	});
}
/**
* Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
* 
* @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
* 
* @compositeParams
*/
function useCompleteListNavigationChildren({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }) {
	return useMonitoring(function useCompleteListNavigationChildren() {
		const { listNavigationCompleteContext: { getSortValueAt, compare, getIndex, provideParentWithRefreshRows } } = context;
		const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn } = useProcessedChildren({
			paginatedChildrenParameters,
			processedIndexManglerParameters: {
				getSortValueAt,
				compare,
				getIndex
			},
			rearrangeableChildrenParameters,
			staggeredChildrenParameters,
			managedChildrenParameters,
			context
		});
		useLayoutEffect(() => {
			provideParentWithRefreshRows(() => {
				rearrangeableChildrenReturn.refresh();
			});
		}, []);
		return {
			context: contextRPS,
			paginatedChildrenReturn,
			rearrangeableChildrenReturn,
			staggeredChildrenReturn
		};
	});
}
/**
* @compositeParams
*/
function useCompleteListNavigationChildOuter({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }) {
	return useMonitoring(function useCompleteListNavigationChildOuter() {
		const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {
			onElementChange: useStableCallback((...a) => {
				oec1?.(...a);
				oec2?.(...a);
			}),
			onMount,
			onUnmount
		} });
		const { getElement } = refElementReturn;
		const { props, ...processedChildReturn } = useProcessedChild({
			context,
			info: {
				index,
				getElement,
				...uinfo
			},
			rearrangeableChildParameters
		});
		const { refElementParameters: { onElementChange: oec2 } } = processedChildReturn;
		return {
			...processedChildReturn,
			props: useMergedProps(props, propsStable),
			refElementReturn,
			hide: processedChildReturn.paginatedChildReturn.hideBecausePaginated || processedChildReturn.staggeredChildReturn.hideBecauseStaggered
		};
	});
}
/**
* 
* @compositeParams
*/
function useCompleteListNavigationChild({ info: { index, focusSelf, untabbable, ...customUserInfo }, textContentParameters: { getText, onTextContentChange: otcc1, ...void10 }, refElementParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 }, singleSelectionChildParameters, multiSelectionChildParameters, context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, processedChildrenContext, processedIndexManglerContext, listNavigationCompleteContext, ...void5 }, ...void1 }) {
	return useMonitoring(function useCompleteListNavigationChild() {
		const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
		const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, pressParameters: { excludeSpace, ...void2 }, selectionChildReturn, textContentParameters: { onTextContentChange: otcc2, ...void8 }, singleSelectionChildReturn, multiSelectionChildReturn, info: infoFromListNav, rovingTabIndexChildReturn, propsChild, propsTabbable, ...void4 } = useListNavigationSelectionChild({
			info: {
				index,
				untabbable
			},
			context: {
				rovingTabIndexContext,
				singleSelectionContext,
				multiSelectionContext,
				typeaheadNavigationContext
			},
			singleSelectionChildParameters,
			multiSelectionChildParameters,
			refElementReturn
		});
		const { textContentReturn, ...void9 } = useTextContent({
			refElementReturn,
			textContentParameters: {
				getText,
				onTextContentChange: useStableMergedCallback(otcc1, otcc2)
			}
		});
		const allStandardInfo = {
			index,
			focusSelf,
			getElement: refElementReturn.getElement,
			untabbable,
			...infoFromListNav
		};
		const { managedChildReturn } = useManagedChild({
			context: { managedChildContext },
			info: {
				...allStandardInfo,
				...customUserInfo
			}
		});
		const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
		const { hasCurrentFocusReturn } = useHasCurrentFocus({
			hasCurrentFocusParameters: {
				onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2, ocfic3),
				onCurrentFocusedChanged
			},
			refElementReturn
		});
		return {
			propsChild: useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild),
			propsTabbable,
			pressParameters: { excludeSpace },
			selectionChildReturn,
			textContentReturn,
			refElementReturn,
			singleSelectionChildReturn,
			multiSelectionChildReturn,
			hasCurrentFocusReturn,
			managedChildReturn,
			rovingTabIndexChildReturn
		};
	});
}
/**
* @compositeParams
*/
function useCompleteListNavigationDeclarative({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }) {
	const ret = useCompleteListNavigation({
		singleSelectionParameters: {
			initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
			onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
			...singleSelectionParameters
		},
		...rest
	});
	const { singleSelectionParameters: { onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({
		singleSelectionDeclarativeParameters,
		singleSelectionReturn: ret.singleSelectionReturn
	});
	const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
	return {
		...ret2,
		singleSelectionReturn: { getSingleSelectedIndex }
	};
}
/**
* #__NO_SIDE_EFFECTS__
*/
function useCompleteListNavigationChildDeclarative({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, info: i1, ...rest }) {
	const { multiSelectionChildParameters: { onMultiSelectChange }, info: i2, ...void2 } = useSelectionChildDeclarative({
		multiSelectionChildDeclarativeParameters: {
			onMultiSelectedChange,
			multiSelected
		},
		multiSelectionChildReturn: { changeMultiSelected: useStableCallback((...args) => {
			ret.multiSelectionChildReturn.changeMultiSelected(...args);
		}) }
	});
	const ret = useCompleteListNavigationChild({
		multiSelectionChildParameters: {
			initiallyMultiSelected: multiSelected,
			onMultiSelectChange: useStableCallback((e) => {
				onMultiSelectChange(e);
			}),
			...multiSelectionChildParameters
		},
		info: {
			...i1,
			...i2
		},
		...rest
	});
	const { multiSelectionChildReturn, ...ret2 } = ret;
	return {
		...ret2,
		multiSelectionChildReturn
	};
}
// src/component-use/use-modal.tsx
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
function useModal({ dismissParameters: { dismissActive, onDismiss, ...void2 }, escapeDismissParameters: { dismissEscapeActive, onDismissEscape, parentDepth, ...void3 }, focusTrapParameters: { trapActive, ...focusTrapParameters }, activeElementParameters: { getDocument, onActiveElementChange, onLastActiveElementChange, onWindowFocusedChange, ...void4 }, backdropDismissParameters: { dismissBackdropActive, onDismissBackdrop, ...void5 }, lostFocusDismissParameters: { dismissLostFocusActive, onDismissLostFocus, ...void6 }, refElementParameters: { onElementChange, onMount, onUnmount, ...void7 }, modalParameters: { active: modalActive, ...void8 }, ...void1 }) {
	return useMonitoring(function useModal() {
		const { refElementPopupReturn, refElementSourceReturn, propsStablePopup, propsStableSource } = useDismiss({
			dismissParameters: {
				dismissActive: dismissActive && modalActive,
				onDismiss
			},
			escapeDismissParameters: {
				dismissEscapeActive,
				onDismissEscape,
				parentDepth
			},
			activeElementParameters: {
				getDocument,
				onActiveElementChange,
				onLastActiveElementChange,
				onWindowFocusedChange
			},
			backdropDismissParameters: {
				dismissBackdropActive,
				onDismissBackdrop
			},
			lostFocusDismissParameters: {
				dismissLostFocusActive,
				onDismissLostFocus
			}
		});
		const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {
			onElementChange,
			onMount,
			onUnmount
		} });
		const { props } = useFocusTrap({
			focusTrapParameters: {
				trapActive: trapActive && modalActive,
				...focusTrapParameters
			},
			activeElementParameters: {
				getDocument,
				onActiveElementChange,
				onLastActiveElementChange,
				onWindowFocusedChange
			},
			refElementReturn
		});
		return {
			propsFocusContainer: useMergedProps(propsStable, props),
			refElementPopupReturn,
			refElementSourceReturn,
			propsStablePopup,
			propsStableSource
		};
	});
}
// src/preact-extensions/use-async.tsx
function identityCapture(...t) {
	return t;
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
function useAsync(asyncHandler, options) {
	const AsyncFunction = (async function() {}).constructor;
	const [pending, setPending, _getPending] = useState(false);
	const [result, setResult, _getResult] = useState(void 0);
	const [error, setError, _getError] = useState(void 0);
	const [hasError, setHasError, _getHasError] = useState(false);
	const [hasResult, setHasResult, _getHasResult] = useState(false);
	const [asyncDebouncing, setAsyncDebouncing] = useState(false);
	const [syncDebouncing, setSyncDebouncing] = useState(false);
	const [invocationResult, setInvocationResult] = useState(asyncHandler instanceof AsyncFunction ? "async" : null);
	const [runCount, setRunCount] = useState(0);
	const [settleCount, setSettleCount] = useState(0);
	const [resolveCount, setResolveCount] = useState(0);
	const [rejectCount, setRejectCount] = useState(0);
	const incrementCallCount = useCallback(() => {
		setRunCount((c) => c + 1);
	}, []);
	const incrementResolveCount = useCallback(() => {
		setResolveCount((c) => c + 1);
	}, []);
	const incrementRejectCount = useCallback(() => {
		setRejectCount((c) => c + 1);
	}, []);
	const incrementFinallyCount = useCallback(() => {
		setSettleCount((c) => c + 1);
	}, []);
	let { throttle, debounce, capture: captureUnstable } = options ?? {};
	const captureStable = useStableCallback(captureUnstable ?? identityCapture);
	const asyncHandlerStable = useStableCallback(asyncHandler ?? identity$1);
	const { flushSyncDebounce, syncOutput, cancelSyncDebounce } = useMemo(() => {
		return asyncToSync({
			asyncInput: asyncHandlerStable,
			capture: captureStable,
			onAsyncDebounce: setAsyncDebouncing,
			onError: setError,
			onPending: setPending,
			onReturnValue: setResult,
			onSyncDebounce: setSyncDebouncing,
			onHasError: setHasError,
			onHasResult: setHasResult,
			onInvoked: setInvocationResult,
			onInvoke: incrementCallCount,
			onFinally: incrementFinallyCount,
			onReject: incrementRejectCount,
			onResolve: incrementResolveCount,
			throttle: options?.throttle ?? void 0,
			debounce: options?.debounce ?? void 0
		});
	}, [throttle, debounce]);
	useEffect(() => {
		return () => cancelSyncDebounce();
	}, [cancelSyncDebounce]);
	return {
		syncHandler: syncOutput,
		pending,
		result,
		error,
		hasError: hasError || false,
		hasResult: hasResult || false,
		resolveCount,
		rejectCount,
		settleCount,
		debouncingAsync: asyncDebouncing,
		debouncingSync: syncDebouncing,
		invocationResult,
		callCount: runCount,
		flushDebouncedPromise: flushSyncDebounce
	};
}
// src/dom-helpers/use-async-handler.tsx
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
function useAsyncHandler({ asyncHandler, capture: originalCapture, ...restAsyncOptions }) {
	const [currentCapture, setCurrentCapture, getCurrentCapture] = useState(void 0);
	const [hasCapture, setHasCapture] = useState(false);
	const useAsyncRet = useAsync(asyncHandler, {
		capture: useStableCallback((e) => {
			const captured = originalCapture(e);
			setCurrentCapture(captured);
			setHasCapture(true);
			return [captured, e];
		}),
		...restAsyncOptions
	});
	return {
		getCurrentCapture,
		currentCapture,
		hasCapture,
		shouldShowCapture: hasCapture && (useAsyncRet.pending || useAsyncRet.debouncingAsync || useAsyncRet.debouncingSync),
		...useAsyncRet
	};
}
// src/component-use/use-press.tsx
function pressLog(...args) {
	if (globalThis.__log_press_events) console.log(...args);
}
function supportsPointerEvents() {
	return "onpointerup" in globalThis;
}
let justHandledManualClickEvent = false;
let onHandledManualClickEvent;
function ensureManualClickHandlersInstalled() {
	let manualClickTimeout1 = null;
	let manualClickTimeout2 = null;
	onHandledManualClickEvent = function onHandledManualClickEvent() {
		pressLog("manual-click");
		justHandledManualClickEvent = true;
		if (manualClickTimeout1 != null) clearTimeout(manualClickTimeout1);
		if (manualClickTimeout2 != null) clearTimeout(manualClickTimeout2);
		manualClickTimeout1 = setTimeout(() => {
			pressLog("manual-click halfway");
			manualClickTimeout2 = setTimeout(() => {
				pressLog("manual-click clear");
				justHandledManualClickEvent = false;
			}, 50);
		}, 200);
	};
	getDocument()?.addEventListener?.("click", (e) => {
		if (justHandledManualClickEvent) {
			justHandledManualClickEvent = false;
			manualClickTimeout1 != null && clearTimeout(manualClickTimeout1);
			manualClickTimeout2 != null && clearTimeout(manualClickTimeout2);
			e.preventDefault();
			e.stopPropagation();
		}
	}, { capture: true });
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
function usePress(args) {
	return useMonitoring(function usePress() {
		ensureManualClickHandlersInstalled();
		const { refElementReturn: { getElement }, pressParameters: { focusSelf, onPressSync, allowRepeatPresses, longPressThreshold, excludeEnter: ee, excludePointer: ep, excludeSpace: es, onPressingChange: opc } } = args;
		const excludeEnter = useStableCallback(ee ?? returnFalse);
		const excludeSpace = useStableCallback(es ?? returnFalse);
		const excludePointer = useStableCallback(ep ?? returnFalse);
		const [getIsPressing, setIsPressing] = usePassiveState(useStableCallback(opc ?? noop), returnFalse);
		const hasPressEvent = onPressSync != null;
		/**
		* Explanations:
		* 
		* It would be nice to just use pointer events for everything,
		* but 2019 iOS devices can't run those, amazingly enough, and
		* that's still pretty recent. So we need to have backup touch
		* events.
		* 
		* Why not just use click? Because at the very, very least,
		* we also need to be able to handle space and enter key presses,
		* and that needs to work regardless of if it's a <button> or not.
		* 
		* Also, we do still use click, because programmatic clicks can come
		* from anything from ATs to automation scripts, and we don't want
		* to break those. But since we are listening for pointer/touch events,
		* and we can't prevent the subsequent click event from happening,
		* and we **don't want to duplicate press events**, we need to
		* ignore click events that happen in the same tick as a handled press event.
		* 
		* When we do a pointermove/touchmove, we check to see if we're still hovering over the element
		* for more accurate "active"/hover detection.
		* 
		* "But you have a pointerleave event, why check for hovering during pointermove?"
		* 
		* Because for some reason, pointerleave (etc.) aren't fired until *after* pointerup, no matter what.
		* 
		*/
		const [longPress, setLongPress] = useState(null);
		const [waitingForSpaceUp, setWaitingForSpaceUp, getWaitingForSpaceUp] = useState(false);
		const [pointerDownStartedHere, setPointerDownStartedHere, getPointerDownStartedHere] = useState(false);
		const [hovering, setHovering, getHovering] = useState(false);
		const onTouchStart = useStableCallback((e) => {
			e.preventDefault();
			e.stopPropagation();
			setIsPressing(true, e);
			setPointerDownStartedHere(true);
			setHovering(true);
			setLongPress(false);
			const element = getElement();
			if (element) focusSelf(element);
		});
		const onTouchMove = useCallback((e) => {
			pressLog("touchmove", e);
			e.preventDefault();
			e.stopPropagation();
			const element = getElement();
			const touch = e.touches[0];
			const offsets = [
				[0, 0],
				[-touch.radiusX || 0, -touch.radiusY || 0],
				[+touch.radiusX || 0, -touch.radiusY || 0],
				[-touch.radiusX || 0, +touch.radiusY || 0],
				[+touch.radiusX || 0, +touch.radiusY || 0]
			];
			let hoveringAtAnyPoint = false;
			for (const [x, y] of offsets) {
				const elementAtTouch = getDocument()?.elementFromPoint((touch?.clientX ?? 0) + x, (touch?.clientY ?? 0) + y);
				hoveringAtAnyPoint ||= !!elementAtTouch && (element?.contains(elementAtTouch) ?? false);
			}
			setIsPressing(hoveringAtAnyPoint && getPointerDownStartedHere(), e);
			setHovering(hoveringAtAnyPoint);
		}, []);
		const preventClickEventsOnIosSafari = useCallback((e) => {
			e.preventDefault();
			e.stopPropagation();
		}, []);
		const onTouchEnd = useCallback((e) => {
			pressLog("touchend", e);
			e.preventDefault();
			e.stopPropagation();
			const hovering = getHovering();
			if (getPointerDownStartedHere() && hovering) {
				onHandledManualClickEvent();
				handlePress(e);
			}
			setWaitingForSpaceUp(false);
			setHovering(false);
			setPointerDownStartedHere(false);
			setIsPressing(false, e);
		}, []);
		const onPointerDown = useStableCallback((e) => {
			pressLog("pointerdown", e);
			if (!excludePointer()) {
				if (e.buttons & 1) {
					e.preventDefault();
					e.stopPropagation();
					setIsPressing(true, e);
					setPointerDownStartedHere(true);
					setHovering(true);
					setLongPress(false);
					const element = getElement();
					if (element) focusSelf(element);
				}
			}
		});
		const onPointerMove = useStableCallback((e) => {
			pressLog("pointermove", e);
			let listeningForPress = getPointerDownStartedHere();
			if (!(e.buttons & 1)) setPointerDownStartedHere(listeningForPress = false);
			if (listeningForPress) {
				const element = getElement();
				const elementAtPointer = getDocument()?.elementFromPoint(e.clientX, e.clientY);
				const hovering = element == elementAtPointer || !!elementAtPointer && element?.contains(elementAtPointer) || false;
				setHovering(hovering);
				setIsPressing(hovering && getPointerDownStartedHere(), e);
			}
		});
		const onPointerUp = useCallback((e) => {
			pressLog("pointerup", e);
			const hovering = getHovering();
			const pointerDownStartedHere = getPointerDownStartedHere();
			if (!excludePointer()) {
				if (pointerDownStartedHere && hovering) {
					onHandledManualClickEvent();
					handlePress(e);
					e.preventDefault();
					e.stopPropagation();
				}
			}
			setWaitingForSpaceUp(false);
			setHovering(false);
			setPointerDownStartedHere(false);
			setLongPress(false);
			setIsPressing(false, e);
		}, []);
		const onPointerEnter = useCallback((_e) => {
			pressLog("pointerenter", _e);
			setHovering(true);
		}, []);
		const onPointerLeave = useCallback((_e) => {
			pressLog("pointerleave", _e);
			setHovering(false);
			setLongPress(false);
		}, []);
		useTimeout({
			callback: () => {
				const element = getElement();
				setLongPress(pointerDownStartedHere && getHovering());
				if (element && pointerDownStartedHere && getHovering()) {
					focusSelf(element);
					if (longPressThreshold) {
						setWaitingForSpaceUp(false);
						setHovering(false);
						setPointerDownStartedHere(false);
					}
				}
			},
			timeout: longPressThreshold ?? null,
			triggerIndex: longPress ? true : pointerDownStartedHere && getHovering()
		});
		const handlePress = useStableCallback((e) => {
			pressLog("handlepress", e);
			setWaitingForSpaceUp(false);
			setHovering(false);
			setPointerDownStartedHere(false);
			setLongPress(null);
			if (onPressSync) {
				const element = getElement();
				if (element) focusSelf(element);
				e.preventDefault();
				e.stopPropagation();
				try {
					pulse();
				} finally {
					onPressSync(e);
				}
			}
		});
		const onKeyDown = useStableCallback((e) => {
			pressLog("keydown", e);
			if (onPressSync) {
				if (e.key == " " && !excludeSpace()) {
					setWaitingForSpaceUp(true);
					setIsPressing(true, e);
					e.preventDefault();
				}
				if (e.key == "Enter" && !excludeEnter() && (!e.repeat || (allowRepeatPresses ?? false))) {
					setIsPressing(true, e);
					handlePress(e);
					requestAnimationFrame(() => {
						setIsPressing(false, e);
					});
				}
			}
		});
		const onKeyUp = useStableCallback((e) => {
			pressLog("keyup", e);
			if (getWaitingForSpaceUp() && e.key == " " && !excludeSpace()) {
				handlePress(e);
				setIsPressing(false, e);
			}
		});
		const onClick = useStableCallback((e) => {
			pressLog("click", e);
			const element = getElement();
			if (onPressSync) {
				if (e.detail > 1) {
					if ("stopImmediatePropagation" in e) e.stopImmediatePropagation();
					e.stopPropagation();
				} else if (justHandledManualClickEvent) justHandledManualClickEvent = false;
				else {
					console.assert(justHandledManualClickEvent == false, "Logic???");
					if (e.target && element?.contains(e.target)) {
						if (getHovering()) {} else {
							debugger;
							console.log("onclick was fired and will be handled as it doesn't look like it came from a pointer event", e);
							console.assert(justHandledManualClickEvent == false, "Logic???");
						}
						setIsPressing(true, e);
						requestAnimationFrame(() => {
							setIsPressing(false, e);
						});
						handlePress(e);
					}
				}
			}
		});
		const onFocusOut = useStableCallback((e) => {
			pressLog("focusout", e);
			setWaitingForSpaceUp(false);
			setIsPressing(false, e);
		});
		const p = supportsPointerEvents();
		return {
			pressReturn: {
				pressing: pointerDownStartedHere && hovering || waitingForSpaceUp || false,
				getIsPressing,
				longPress
			},
			props: {
				onKeyDown,
				onKeyUp,
				onTouchStart: !hasPressEvent ? void 0 : !p ? onTouchStart : void 0,
				onTouchCancel: !hasPressEvent ? void 0 : !p ? onTouchEnd : void 0,
				onTouchMove: !hasPressEvent ? void 0 : !p ? onTouchMove : void 0,
				onTouchEnd: !hasPressEvent ? void 0 : !p ? onTouchEnd : preventClickEventsOnIosSafari,
				onPointerDown: !hasPressEvent ? void 0 : p ? onPointerDown : void 0,
				onPointerCancel: !hasPressEvent ? void 0 : p ? onPointerDown : void 0,
				onPointerMove: !pointerDownStartedHere || !hasPressEvent ? void 0 : p ? onPointerMove : void 0,
				onPointerUp: !hasPressEvent ? void 0 : p ? onPointerUp : void 0,
				onPointerEnter: !hasPressEvent ? void 0 : p ? onPointerEnter : void 0,
				onPointerLeave: !hasPressEvent ? void 0 : p ? onPointerLeave : void 0,
				[onfocusout]: onFocusOut,
				onClick
			}
		};
	});
}
function usePressAsync({ asyncHandlerParameters: { debounce, throttle, asyncHandler }, pressParameters, refElementReturn }) {
	const asyncHandlerReturn = useAsyncHandler({
		asyncHandler,
		capture: noop,
		debounce,
		throttle
	});
	const { pressReturn, props } = usePress({
		pressParameters: {
			onPressSync: asyncHandlerReturn.syncHandler,
			...pressParameters
		},
		refElementReturn
	});
	return {
		asyncHandlerReturn,
		pressReturn,
		props
	};
}
let pulseOverride = null;
function pulse() {
	if (pulseOverride != null) pulseOverride();
	else if ("navigator" in globalThis && "vibrate" in navigator && navigator.vibrate instanceof Function) navigator.vibrate(10);
}
/**
* This function can be used to enable/disable button vibration pulses on an app-wide scale. `null` enables the default browser behavior; pass a noop (e.g. `() => {}`) to disable.
* 
* 
* @param func - The function to run when a button is tapped. (Default is `() => navigator.vibrate(10)` in browsers that support it, a noop otherwise)
*/
function setPressVibrate(func) {
	pulseOverride = func;
}
// src/component-use/use-random-id.tsx
/**
* Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
* 
* @compositeParams
*/
function useRandomId({ randomIdParameters: { prefix, otherReferencerProp } }) {
	return useMonitoring(function useRandomId() {
		const id = prefix + useId();
		useEnsureStability("useRandomId", prefix, id);
		const referencerElementProps = useRef(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
		const sourceElementProps = useRef({ id });
		useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
		return {
			propsReferencer: referencerElementProps.current,
			propsSource: sourceElementProps.current,
			randomIdReturn: { id }
		};
	});
}
// src/component-use/use-random-dual-ids.tsx
/**
* While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
* 
* @compositeParams
*/
function useRandomDualIds({ randomIdInputParameters, randomIdLabelParameters }) {
	return useMonitoring(function useRandomDualIds() {
		const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId({ randomIdParameters: randomIdInputParameters });
		const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId({ randomIdParameters: randomIdLabelParameters });
		return {
			propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
			propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
			randomIdInputReturn,
			randomIdLabelReturn
		};
	});
}
// src/dom-helpers/use-document-class.tsx
/**
* Allows adding/removing a CSS class to the `window`, `document`, or other global `HTMLElement`.
* 
* @param className - The class (as a string) to be adding/removing
* @param active - If `true`, the default, then the class is added to the element. If `false`, it's removed.
* @param element - The element to affect. By default, it's the root `<html>` element
*/
function useDocumentClass(className, active, element) {
	element ??= getDocument()?.documentElement;
	className = clsx(className);
	useEffect(() => {
		if (element) {
			if (active !== false) {
				element.classList.add(className);
				return () => element.classList.remove(className);
			}
		}
	}, [
		className,
		active,
		element
	]);
}
// src/dom-helpers/use-draggable.tsx
/**
* Allows an element to start a drag operation.
* 
* @remarks
* {@include } {@link UseDraggableParameters}
* {@include } {@link UseDraggableReturnType}
*/
function useDraggable({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }) {
	return useMonitoring(function useDraggable() {
		const [dragging, setDragging, getDragging] = useState(false);
		const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
		const onDragStart = (e) => {
			setDragging(true);
			if (e.dataTransfer) {
				e.dataTransfer.effectAllowed = effectAllowed ?? "all";
				if (dragImage) e.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0);
				const entries = Object.entries(data);
				for (const [mimeType, data] of entries) e.dataTransfer.setData(mimeType, data);
			}
		};
		const onDragEnd = (e) => {
			e.preventDefault();
			setDragging(false);
			if (e.dataTransfer) {
				if (e.dataTransfer.dropEffect != "none") setLastDropEffect(e.dataTransfer.dropEffect);
				else setLastDropEffect(null);
			}
		};
		return {
			propsUnstable: {
				draggable: true,
				onDragStart,
				onDragEnd
			},
			dragging,
			getDragging,
			lastDropEffect,
			getLastDropEffect
		};
	});
}
// src/dom-helpers/use-droppable.tsx
var DroppableFileError = class extends Error {
	fileName;
	errorType;
	constructor(fileName, base) {
		super(base?.message ?? "An unspecified error occurred reading the file.");
		this.fileName = fileName;
		this.errorType = base?.name;
	}
};
/**
* Allows an element to start a drag operation.
* 
* @remarks
* {@include } {@link UseDroppableParameters}
* {@include } {@link UseDroppableReturnType}
*/
function useDroppable({ effect }) {
	return useMonitoring(function useDroppable() {
		const [filesForConsideration, setFilesForConsideration] = useState(null);
		const [stringsForConsideration, setStringsForConsideration] = useState(null);
		const [droppedFiles, setDroppedFiles] = useState(null);
		const [droppedStrings, setDroppedStrings] = useState(null);
		const [dropError, setDropError] = useState(void 0);
		const dropPromisesRef = useRef([]);
		const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
		const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
		useEffect(() => {
			const currentPromiseIndex = getCurrentPromiseIndex();
			const promiseCount = getPromiseCount();
			if (promiseCount > 0) {
				if (currentPromiseIndex + 1 < promiseCount) setCurrentPromiseIndex((i) => ++i);
			}
		}, [promiseCount]);
		useEffect(() => {
			if (currentPromiseIndex >= 0) dropPromisesRef.current[currentPromiseIndex].then((info) => {
				if (info !== null) {
					const { files, strings } = info;
					setDroppedFiles(files);
					setDroppedStrings(strings);
				}
				const currentPromiseIndex = getCurrentPromiseIndex();
				const promiseCount = getPromiseCount();
				if (currentPromiseIndex + 1 < promiseCount) setCurrentPromiseIndex((i) => ++i);
			});
		}, [currentPromiseIndex]);
		const onDragEnter = useStableCallback((e) => {
			e.preventDefault();
			if (e.dataTransfer) {
				e.dataTransfer.dropEffect = effect ?? "move";
				const newMimeTypes = /* @__PURE__ */ new Set();
				const newFiles = new Array();
				for (const item of e.dataTransfer?.items ?? []) {
					const { kind, type } = item;
					if (kind === "string") newMimeTypes.add(type);
					else if (kind === "file") newFiles.push({ type: item.type });
				}
				setFilesForConsideration(newFiles);
				setStringsForConsideration(newMimeTypes);
			}
		});
		const onDragLeave = useStableCallback((e) => {
			e.preventDefault();
			setFilesForConsideration(null);
			setStringsForConsideration(null);
		});
		const onDragOver = useStableCallback((e) => {
			e.preventDefault();
		});
		const onDrop = useStableCallback((e) => {
			e.preventDefault();
			setFilesForConsideration(null);
			setStringsForConsideration(null);
			const allPromises = new Array();
			const dropData = {};
			const dropFile = [];
			for (const item of e.dataTransfer?.items ?? []) {
				const { kind, type } = item;
				if (kind === "string") allPromises.push(new Promise((resolve, _reject) => item.getAsString(resolve)).then((str) => dropData[type] = str));
				else if (kind === "file") {
					const file = item.getAsFile();
					if (file) {
						allPromises.push(new Promise((resolve, reject) => {
							const reader = new FileReader();
							reader.onload = (_) => {
								resolve();
								const data = reader.result;
								dropFile.push({
									data,
									name: file.name,
									type: file.type,
									size: data.byteLength,
									lastModified: file.lastModified
								});
							};
							reader.onerror = (_) => {
								reject(new DroppableFileError(file.name, reader.error));
							};
							reader.onabort = (_) => {
								reject(new DroppableFileError(file.name, reader.error));
							};
							reader.readAsArrayBuffer(file);
						}));
						dropFile.push();
					}
				}
			}
			dropPromisesRef.current.push(Promise.all(allPromises).then(() => {
				setPromiseCount((i) => ++i);
				setDropError(null);
				return {
					strings: dropData,
					files: dropFile
				};
			}).catch((ex) => {
				debugger;
				setPromiseCount((i) => ++i);
				setDropError(ex);
				return null;
			}));
		});
		return {
			propsStable: useRef({
				onDragEnter,
				onDragLeave,
				onDragOver,
				onDrop
			}).current,
			filesForConsideration,
			stringsForConsideration,
			droppedFiles,
			droppedStrings,
			dropError
		};
	});
}
// src/dom-helpers/use-hide-scroll.tsx
/**
* Allows for hiding the scroll bar of the root HTML element
* without shifting the layout of the page by adding a few pixels
* of padding to the root element if necessary.
* 
* @param hideScroll - Whether the scroll bar is hidden or not (i.e. `true` to hide the scroll bar, `false` to allow it to be visible)
*/
function useHideScroll(hideScroll) {
	const [getScrollbarWidth, setScrollbarWidth] = usePassiveState(null);
	const [getScrollbarHeight, setScrollbarHeight] = usePassiveState(null);
	useEffect(() => {
		const document = getDocument();
		if (hideScroll && document) {
			const originalScrollTop = document.documentElement.scrollTop;
			const originalScrollLeft = document.documentElement.scrollLeft;
			const widthWithScrollBar = document.documentElement.scrollWidth;
			const heightWithScrollBar = document.documentElement.scrollHeight;
			document.documentElement.classList.add("document-scroll-hidden");
			document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") + 1).toString();
			const widthWithoutScrollBar = document.documentElement.scrollWidth;
			const heightWithoutScrollBar = document.documentElement.scrollHeight;
			let scrollbarWidth = widthWithoutScrollBar - widthWithScrollBar;
			let scrollbarHeight = heightWithoutScrollBar - heightWithScrollBar;
			if (scrollbarWidth > 80) scrollbarWidth = 0;
			if (scrollbarHeight > 80) scrollbarHeight = 0;
			document.documentElement.style.setProperty("--root-scrollbar-width", `${scrollbarWidth}px`);
			document.documentElement.style.setProperty("--root-scrollbar-height", `${scrollbarHeight}px`);
			document.documentElement.style.setProperty("--root-scrollstop-top", `${originalScrollTop}px`);
			document.documentElement.style.setProperty("--root-scrollstop-left", `${originalScrollLeft}px`);
			setScrollbarWidth(scrollbarWidth);
			setScrollbarHeight(scrollbarHeight);
			return () => {
				document.documentElement.dataset["scrollHiders"] = (+(document.documentElement.dataset["scrollHiders"] || "0") - 1).toString();
				if (document.documentElement.dataset["scrollHiders"] == "0") {
					document.documentElement.removeAttribute("data-scroll-hiders");
					document.documentElement.classList.remove("document-scroll-hidden");
					const originalScrollBehavior = document.documentElement.style.scrollBehavior;
					document.documentElement.style.scrollBehavior = "auto";
					document.documentElement.scrollTo({
						top: originalScrollTop,
						left: originalScrollLeft,
						behavior: "auto"
					});
					document.documentElement.style.scrollBehavior = originalScrollBehavior;
				}
			};
		}
	}, [hideScroll]);
	return {
		getScrollbarWidth,
		getScrollbarHeight
	};
}
// src/dom-helpers/use-imperative-props.tsx
let templateElement = null;
function htmlToElement(parent, html) {
	const document = parent.ownerDocument;
	templateElement ??= document.createElement("template");
	templateElement.innerHTML = html.trim();
	return templateElement.content.firstChild;
}
let updatesToRunOnNextTick = /* @__PURE__ */ new Set();
let hasScheduledUpdate = false;
function scheduleUpdate(f) {
	updatesToRunOnNextTick.add(f);
	if (!hasScheduledUpdate) {
		hasScheduledUpdate = true;
		queueMicrotask(() => {
			updatesToRunOnNextTick.forEach((f) => f());
			updatesToRunOnNextTick.clear();
			hasScheduledUpdate = false;
		});
	}
}
function scheduleOrRun(immediate, func) {
	if (immediate) func();
	else scheduleUpdate(func);
}
/**
* Easy access to an HTMLElement that can be controlled imperatively.
* 
* The HTMLElement rendered is controlled by the `tag` prop (e.g. "span", "div").
* 
* The `handle` prop should be e.g. `useRef<ImperativeHandle<HTMLDivElement>>(null)`
*/
const ImperativeElement = /* @__PURE__ */ memo(/* @__PURE__ */ forwardRef(ImperativeElementU));
/**
* Allows controlling an element's `class`, `style`, etc. with functions like `setStyle` in addition to being reactive to incoming props.
* 
* @remarks If the component is re-rendered after the element is modified in some way, those changes are remembered and included in the returned `props` that are meant to be spread to the element in question. 
* 
* This is extremely useful for integrating with 3rd party libraries that expect to be able to directly manipulate the DOM because it keeps everything syncced together.
* 
* @compositeParams
*/
function useImperativeProps({ refElementReturn: { getElement } }) {
	const currentImperativeProps = useRef({
		className: /* @__PURE__ */ new Set(),
		style: {},
		children: null,
		html: null,
		others: {}
	});
	const hasClass = useCallback((cls) => {
		return currentImperativeProps.current.className.has(cls);
	}, []);
	const setClass = useCallback((cls, enabled, immediate) => {
		scheduleOrRun(immediate, () => {
			if (hasClass(cls) == !enabled) {
				getElement()?.classList[enabled ? "add" : "remove"](cls);
				currentImperativeProps.current.className[enabled ? "add" : "delete"](cls);
			}
		});
	}, []);
	const setStyle = useCallback((prop, value, immediate) => {
		scheduleOrRun(immediate, () => {
			const element = getElement();
			if (element) {
				if (currentImperativeProps.current.style[prop] != value) {
					currentImperativeProps.current.style[prop] = value;
					if (prop.startsWith("--")) {
						if (value != null) element.style.setProperty(prop, `${value}`);
						else element.style.removeProperty(prop);
					} else element.style[prop] = value ?? "";
				}
			}
		});
	}, []);
	const setChildren = useCallback((children) => {
		let e = getElement();
		if (e && currentImperativeProps.current.children != children) {
			currentImperativeProps.current.children = children;
			currentImperativeProps.current.html = null;
			e.textContent = children;
		}
	}, []);
	const dangerouslySetInnerHTML = useCallback((children) => {
		let e = getElement();
		if (e && currentImperativeProps.current.html != children) {
			currentImperativeProps.current.children = null;
			currentImperativeProps.current.html = children;
			e.innerHTML = children;
		}
	}, []);
	const dangerouslyAppendHTML = useCallback((children) => {
		let e = getElement();
		if (e && children) {
			const newChild = htmlToElement(e, children);
			console.assert(newChild && newChild instanceof Node);
			if (newChild && newChild instanceof Node) {
				currentImperativeProps.current.children = null;
				currentImperativeProps.current.html ||= "";
				currentImperativeProps.current.html += children;
				e.appendChild(newChild);
				return newChild;
			}
		}
		return null;
	}, []);
	const getAttribute = useCallback((prop) => {
		return currentImperativeProps.current.others[prop];
	}, []);
	const setAttribute = useCallback((prop, value, immediate) => {
		scheduleOrRun(immediate, () => {
			if (value != null) {
				if (getAttribute(prop) != value) {
					currentImperativeProps.current.others[prop] = value;
					getElement()?.setAttribute(prop, value);
				}
			} else if (getAttribute(prop) != void 0) {
				delete currentImperativeProps.current.others[prop];
				getElement()?.removeAttribute(prop);
			}
		});
	}, []);
	const setEventHandler = useCallback((type, handler, options) => {
		const element = getElement();
		const mappedKey = getEventMapping()[type];
		if (element) {
			if (handler) {
				element.addEventListener(type, handler, options);
				currentImperativeProps.current.others[mappedKey] = handler;
			} else if (currentImperativeProps.current.others[mappedKey]) {
				element.removeEventListener(type, currentImperativeProps.current.others[mappedKey], options);
				currentImperativeProps.current.others[mappedKey] = void 0;
			}
		}
	}, []);
	return {
		imperativePropsReturn: useRef({
			hasClass,
			setClass,
			setStyle,
			getAttribute,
			setAttribute,
			setEventHandler,
			setChildren,
			dangerouslySetInnerHTML,
			dangerouslyAppendHTML
		}).current,
		props: useMergedProps({
			className: [...currentImperativeProps.current.className].join(" "),
			style: { ...currentImperativeProps.current.style },
			children: currentImperativeProps.current.children
		}, currentImperativeProps.current.html ? { dangerouslySetInnerHTML: { __html: currentImperativeProps.current.html } } : {}, currentImperativeProps.current.others)
	};
}
function ImperativeElementU({ tag: Tag, handle, ...props }, ref) {
	const { propsStable, refElementReturn } = useRefElement({ refElementParameters: {} });
	const { props: imperativeProps, imperativePropsReturn: imperativeHandle } = useImperativeProps({ refElementReturn });
	useImperativeHandle(handle, () => imperativeHandle);
	return createElement(Tag, useMergedProps(propsStable, imperativeProps, props, { ref }));
}
// src/util/random-id.tsx
const Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";
function base64(value) {
	return Table[value];
}
function random6Bits() {
	return Math.floor(Math.random() * 64);
}
function random64Bits() {
	return [
		random6Bits(),
		random6Bits(),
		random6Bits(),
		random6Bits(),
		random6Bits(),
		random6Bits(),
		random6Bits(),
		random6Bits(),
		random6Bits(),
		random6Bits(),
		random6Bits()
	];
}
/**
* Returns a randomly-generated ID with an optional prefix.
* Note that if the prefix is *explicitly* set to "", then
* IDs that are not valid under HTML4 may be generated. Oh no.
* 
* 
* (This is here, in this particular file, to avoid circular dependencies
* because useBeforeLayoutEffect also needs random IDs for its own reasons)
*/
function generateRandomId(prefix) {
	return `${prefix ?? "id-"}${random64Bits().map((n) => base64(n)).join("")}`;
}
// src/dom-helpers/use-portal-children.tsx
/**
* Very basic hook for a root-level component to use to allow any children within the whole app to push children to a portal somewhere.
* 
* @remarks Returns the portal (as `children`, and functions to add, remove, or update a child to the portaled area)
* 
* TODO: Can't push a child until after the very first `useLayoutEffect`
* 
* {@include } {@link UsePortalChildrenParameters}
*/
function usePortalChildren({ target }) {
	const [pushChild, setPushChild] = useState(null);
	const [updateChild, setUpdateChild] = useState(null);
	const [removeChild, setRemoveChild] = useState(null);
	const pushChildStable = useStableCallback((child) => {
		return pushChild?.(child) ?? -1;
	});
	const updateChildStable = useStableCallback((index, child) => {
		return updateChild?.(index, child);
	});
	const removeChildStable = useStableCallback((index) => {
		return removeChild?.(index);
	});
	const element = useMemo(() => {
		return target == null ? null : typeof target == "string" ? getDocument()?.getElementById(target) : target;
	}, [target]);
	return {
		children: !element ? null : createPortal(createElement(PortalChildren, {
			setPushChild,
			setUpdateChild,
			setRemoveChild
		}), element),
		pushChild: pushChildStable,
		updateChild: updateChildStable,
		removeChild: removeChildStable,
		portalElement: element ?? null
	};
}
/**
* Implementation
*/
function PortalChildren({ setPushChild, setUpdateChild, setRemoveChild }) {
	const [children, setChildren, getChildren] = useState([]);
	const pushChild = useCallback((child) => {
		const randomKey = generateRandomId();
		let index = getChildren().length;
		setChildren((prev) => [...prev, cloneElement(child, {
			key: randomKey,
			index
		})]);
		return index;
	}, []);
	const updateChild = useCallback((index, child) => {
		const key = getChildren()[index]?.key;
		console.assert(!!key);
		if (key) {
			setChildren((prev) => {
				let newChildren = prev.slice();
				newChildren.splice(index, 1, cloneElement(child, {
					key,
					index
				}));
				return newChildren;
			});
			return index;
		}
	}, []);
	const removeChild = useCallback((index) => {
		const key = getChildren()[index]?.key;
		console.assert(!!key);
		if (key) {
			setChildren((prev) => {
				let newChildren = prev.slice();
				newChildren.splice(index, 1);
				return newChildren;
			});
			return index;
		}
	}, []);
	useLayoutEffect(() => {
		setPushChild((_) => pushChild);
	}, [pushChild]);
	useLayoutEffect(() => {
		setUpdateChild((_) => updateChild);
	}, [updateChild]);
	useLayoutEffect(() => {
		setRemoveChild((_) => removeChild);
	}, [removeChild]);
	return createElement(Fragment, {}, children);
}
// src/observers/use-element-size.tsx
/**
* Measures an element, allowing you to react to its changes in size.
* 
* @compositeParams
*/
function useElementSize({ elementSizeParameters: { getObserveBox, onSizeChange }, refElementParameters }) {
	return useMonitoring(function useElementSize() {
		const { onElementChange, onMount, onUnmount } = refElementParameters || {};
		useEnsureStability("useElementSize", getObserveBox, onSizeChange, onElementChange, onMount, onUnmount);
		const [getSize, setSize] = usePassiveState(onSizeChange, returnNull, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		const currentObserveBox = useRef(void 0);
		const needANewObserver = useCallback((element, observeBox) => {
			if (element) {
				const document = getDocument(element);
				const window = getWindow(element);
				const handleUpdate = (entries) => {
					if (element.isConnected) {
						const { clientWidth, scrollWidth, offsetWidth, clientHeight, scrollHeight, offsetHeight, clientLeft, scrollLeft, offsetLeft, clientTop, scrollTop, offsetTop } = element;
						setSize({
							clientWidth,
							scrollWidth,
							offsetWidth,
							clientHeight,
							scrollHeight,
							offsetHeight,
							clientLeft,
							scrollLeft,
							offsetLeft,
							clientTop,
							scrollTop,
							offsetTop
						}, entries);
					}
				};
				if (window && "ResizeObserver" in window) {
					const observer = new ResizeObserver((entries) => {
						handleUpdate(entries);
					});
					observer.observe(element, { box: observeBox });
					return () => observer.disconnect();
				} else {
					document?.addEventListener("resize", handleUpdate, { passive: true });
					return () => document?.removeEventListener("resize", handleUpdate);
				}
			}
		}, []);
		const { refElementReturn, ...rest } = useRefElement({ refElementParameters: {
			onElementChange: useCallback((e, p, r) => {
				needANewObserver(e, getObserveBox?.());
				onElementChange?.(e, p, r);
			}, []),
			onMount,
			onUnmount
		} });
		const { getElement } = refElementReturn;
		useEffect(() => {
			if (getObserveBox) {
				if (currentObserveBox.current !== getObserveBox()) needANewObserver(getElement(), getObserveBox());
			}
		});
		return {
			elementSizeReturn: { getSize },
			refElementReturn,
			...rest
		};
	});
}
// src/observers/use-has-last-focus.tsx
/**
* Allows monitoring whichever element is/was focused most recently, regardless of if it's *currently* focused.
* 
* @see {@link useHasCurrentFocus}, where clicking the `body` is considered losing focus.
* 
* @compositeParams
*/
function useHasLastFocus(args) {
	return useMonitoring(function useHasLastFocus() {
		const { refElementReturn: { getElement }, activeElementParameters: { onLastActiveElementChange, ...activeElementParameters }, hasLastFocusParameters: { onLastFocusedChanged, onLastFocusedInnerChanged, ...void1 } } = args;
		useEnsureStability("useHasFocus", onLastFocusedChanged, onLastFocusedInnerChanged);
		const [getLastFocused, setLastFocused] = usePassiveState(onLastFocusedChanged, returnFalse, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		const [getLastFocusedInner, setLastFocusedInner] = usePassiveState(onLastFocusedInnerChanged, returnFalse, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		const { activeElementReturn } = useActiveElement({ activeElementParameters: {
			onLastActiveElementChange: useCallback((lastActiveElement, prevLastActiveElement, e) => {
				const selfElement = getElement();
				const focused = selfElement != null && selfElement == lastActiveElement;
				const focusedInner = !!selfElement?.contains(lastActiveElement);
				setLastFocused(focused, e);
				setLastFocusedInner(focusedInner, e);
				onLastActiveElementChange?.(lastActiveElement, prevLastActiveElement, e);
			}, []),
			...activeElementParameters
		} });
		useEffect(() => {
			return () => {
				setLastFocused(false, void 0);
				setLastFocusedInner(false, void 0);
			};
		}, []);
		return {
			activeElementReturn,
			hasLastFocusReturn: {
				getLastFocused,
				getLastFocusedInner
			}
		};
	});
}
// src/observers/use-logical-direction.tsx
function capitalize(str) {
	return str[0].toUpperCase() + str.substring(1);
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
function useLogicalDirection({ ...void1 }) {
	return useMonitoring(function useLogicalDirection() {
		const M = {
			t: "top",
			b: "bottom",
			l: "left",
			r: "right"
		};
		const getLogicalDirectionInfo = useCallback((computedStyles) => {
			if (computedStyles) {
				const w = computedStyles.writingMode;
				let d = computedStyles.direction;
				if (computedStyles.textOrientation == "upright") d = "ltr";
				return { ...getWritingModes()[w || "horizontal-tb"][d || "ltr"] };
			}
			return null;
		}, []);
		const convertToLogicalOrientation = useCallback((computedStyles, elementOrientation, direction) => {
			direction ??= getLogicalDirectionInfo(computedStyles);
			if (direction?.inlineOrientation === elementOrientation) return "inline";
			return "block";
		}, []);
		const convertToPhysicalSide = useCallback((computedStyles, side, direction) => {
			direction ??= getLogicalDirectionInfo(computedStyles);
			switch (side) {
				case "block-start": return M[(direction?.blockDirection ?? "ttb")[0]];
				case "block-end": return M[(direction?.blockDirection ?? "ttb")[2]];
				case "inline-start": return M[(direction?.inlineDirection ?? "ltr")[0]];
				case "inline-end": return M[(direction?.inlineDirection ?? "ltr")[2]];
			}
		}, []);
		const convertToLogicalSide = useCallback((computedStyles, side, direction) => {
			direction ??= getLogicalDirectionInfo(computedStyles);
			if (direction?.inlineOrientation === "vertical") switch (side) {
				case "top": return direction.inlineDirection === "ttb" ? "inline-start" : "inline-end";
				case "bottom": return direction.inlineDirection === "btt" ? "inline-start" : "inline-end";
				case "left": return direction.blockDirection === "ltr" ? "block-start" : "block-end";
				case "right": return direction.blockDirection === "rtl" ? "block-start" : "block-end";
			}
			else if (direction?.inlineOrientation === "horizontal") switch (side) {
				case "top": return direction.blockDirection === "ttb" ? "block-start" : "block-end";
				case "bottom": return direction.blockDirection === "btt" ? "block-start" : "block-end";
				case "left": return direction.inlineDirection === "ltr" ? "inline-start" : "inline-end";
				case "right": return direction.inlineDirection === "rtl" ? "inline-start" : "inline-end";
			}
			debugger;
			console.assert(false);
			return "inline-start";
		}, []);
		const convertToPhysicalOrientation = useCallback((computedStyles, elementOrientation, direction) => {
			direction ??= getLogicalDirectionInfo(computedStyles);
			if (elementOrientation == "inline") {
				if (direction?.inlineOrientation == "horizontal") return "horizontal";
				return "vertical";
			} else {
				if (direction?.blockOrientation == "vertical") return "vertical";
				return "horizontal";
			}
		}, []);
		return { logicalDirectionReturn: {
			getLogicalDirectionInfo,
			convertToLogicalSize: useCallback((computedStyles, elementSize, direction) => {
				direction ??= getLogicalDirectionInfo(computedStyles);
				if (direction) {
					const { inlineSize, blockSize, inlineDirection, blockDirection } = direction;
					const clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
					const clientBlockSize = elementSize[`client${capitalize(blockSize)}`];
					const offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
					const offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];
					const scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
					const scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`];
					const f1 = getPhysicalLeftTop(inlineDirection);
					const f2 = getPhysicalRightBottom(inlineDirection);
					const f3 = getPhysicalLeftTop(blockDirection);
					const f4 = getPhysicalRightBottom(blockDirection);
					return {
						clientInlineSize,
						scrollInlineSize,
						offsetInlineSize,
						clientBlockSize,
						scrollBlockSize,
						offsetBlockSize,
						clientInlineInset: elementSize[`client${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`client${capitalize(f2)}`]),
						scrollInlineInset: elementSize[`scroll${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`scroll${capitalize(f2)}`]),
						offsetInlineInset: elementSize[`offset${capitalize(f1)}`] == void 0 ? void 0 : elementSize[`offset${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]),
						clientBlockInset: elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]),
						scrollBlockInset: elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]),
						offsetBlockInset: elementSize[`offset${capitalize(f3)}`] == void 0 ? void 0 : elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`])
					};
				}
				return null;
			}, []),
			convertToLogicalOrientation,
			convertToPhysicalOrientation,
			convertToLogicalSide,
			convertToPhysicalSide
		} };
	});
}
function getPhysicalLeftTop(dir) {
	if (dir === "ltr" || dir == "rtl") return "left";
	return "top";
}
function getPhysicalRightBottom(dir) {
	if (dir === "rtl") return "width";
	if (dir === "btt") return "height";
	return null;
}
function getWritingModes() {
	const HorizontalTbLtr = {
		inlineDirection: "ltr",
		blockDirection: "ttb",
		inlineOrientation: "horizontal",
		blockOrientation: "vertical",
		inlineSize: "width",
		blockSize: "height",
		leftRightDirection: "ltr",
		overUnderDirection: "ttb"
	};
	const HorizontalTbRtl = {
		...HorizontalTbLtr,
		inlineDirection: "rtl"
	};
	const VerticalRlLtr = {
		inlineDirection: "ttb",
		blockDirection: "rtl",
		inlineOrientation: "vertical",
		blockOrientation: "horizontal",
		inlineSize: "height",
		blockSize: "width",
		leftRightDirection: "ttb",
		overUnderDirection: "rtl"
	};
	const VerticalRlRtl = {
		...VerticalRlLtr,
		inlineDirection: "btt"
	};
	const SidewaysRlLtr = { ...VerticalRlLtr };
	const SidewaysRlRtl = { ...VerticalRlRtl };
	const VerticalLrLtr = {
		...VerticalRlLtr,
		blockDirection: "ltr"
	};
	const VerticalLrRtl = {
		...VerticalRlRtl,
		blockDirection: "ltr"
	};
	const SidewaysLtLtr = {
		...VerticalLrLtr,
		inlineDirection: "btt",
		leftRightDirection: "btt",
		overUnderDirection: "ltr"
	};
	const SidewaysLtRtl = {
		...SidewaysLtLtr,
		inlineDirection: "ttb"
	};
	return {
		"horizontal-tb": {
			ltr: HorizontalTbLtr,
			rtl: HorizontalTbRtl
		},
		"vertical-lr": {
			ltr: VerticalLrLtr,
			rtl: VerticalLrRtl
		},
		"vertical-rl": {
			ltr: VerticalRlLtr,
			rtl: VerticalRlRtl
		},
		"sideways-lr": {
			ltr: SidewaysLtLtr,
			rtl: SidewaysLtRtl
		},
		"sideways-rl": {
			ltr: SidewaysRlLtr,
			rtl: SidewaysRlRtl
		}
	};
}
// src/observers/use-media-query.tsx
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
function useMediaQuery(query, defaultGuess) {
	if (typeof window === "undefined") {
		const matches = defaultGuess || false;
		return {
			matches,
			getMatches: useCallback(() => matches, [matches])
		};
	} else {
		const queryList = useRef(null);
		const [matches, setMatches, getMatches] = useState(defaultGuess ?? null);
		console.assert(!query || query.startsWith("("));
		useLayoutEffect(() => {
			if (!query) return;
			queryList.current = matchMedia(query);
			setMatches(queryList.current.matches || false);
			const handler = (e) => {
				setMatches(e.matches);
			};
			queryList.current.addEventListener("change", handler, { passive: true });
			return () => queryList.current?.removeEventListener("change", handler);
		}, [query]);
		return {
			matches,
			getMatches
		};
	}
}
// src/observers/use-mutation-observer.tsx
/**
* Effectively just a wrapper around a `MutationObserver`.
* 
* @compositeParams
*/
function useMutationObserver({ refElementParameters, mutationObserverParameters: { attributeFilter, subtree, onChildList, characterDataOldValue, onCharacterData, onAttributes, attributeOldValue } }) {
	return useMonitoring(function useMutationObserver() {
		const { onElementChange, ...rest } = refElementParameters || {};
		if (typeof attributeFilter === "string") attributeFilter = [attributeFilter];
		const attributeKey = attributeFilter?.join(";");
		const attributes = !!onAttributes;
		const characterData = !!onCharacterData;
		const childList = !!onChildList;
		const stableOnChildList = useStableCallback(onChildList ?? (() => {}));
		const stableOnCharacterData = useStableCallback(onCharacterData ?? (() => {}));
		const stableOnAttributes = useStableCallback(onAttributes ?? (() => {}));
		const [_getMo, setMo] = usePassiveState(useStableCallback((observer) => {
			const element = getElement();
			if (element && observer && (!!attributeKey || !!characterData || !!childList)) {
				observer.observe(element, {
					attributeFilter,
					attributeOldValue,
					attributes,
					characterData,
					characterDataOldValue,
					childList,
					subtree
				});
				return () => observer.disconnect();
			}
		}), returnNull, {
			debounceRendering: runImmediately,
			skipMountInitialization: true
		});
		const onNeedMutationObserverReset = useCallback((element) => {
			if (element) queueMicrotask(() => {
				setMo(new MutationObserver((a) => {
					for (const mutation of a) switch (mutation.type) {
						case "childList":
							stableOnChildList(mutation);
							break;
						case "attributes":
							stableOnAttributes(mutation);
							break;
						case "characterData": stableOnCharacterData(mutation);
					}
				}));
			});
		}, []);
		useEffect(() => {
			onNeedMutationObserverReset(getElement());
		}, [
			attributeKey,
			attributeOldValue,
			characterDataOldValue,
			subtree
		]);
		const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {
			onElementChange: useStableCallback((e, p, r) => {
				onElementChange?.(e, p, r);
				onNeedMutationObserverReset(e);
			}),
			...rest
		} });
		const { getElement } = refElementReturn;
		return {
			refElementReturn,
			propsStable
		};
	});
}
// src/observers/use-url.tsx
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
function useUrl(onUrlChange) {
	const [getUrl, setUrl] = usePassiveState(useStableCallback(onUrlChange), useCallback(() => getWindow()?.location?.toString() || "", []));
	useGlobalHandler(getWindow(), "hashchange", (e) => {
		setUrl(globalThis.location.toString(), e);
	});
	useGlobalHandler(getWindow(), "popstate", (e) => {
		console.assert(getWindow()?.location?.toString() === getDocument()?.location?.toString());
		setUrl(globalThis.location.toString(), e);
	});
	return [getUrl, useCallback((newUrlOrSetter, action) => {
		const document = getDocument();
		if (document) {
			if (typeof newUrlOrSetter == "function") setUrl((prev) => {
				let newUrl = newUrlOrSetter(prev);
				history[`${action ?? "replace"}State`]({}, document.title, newUrl);
				return newUrl;
			}, void 0);
			else {
				history[`${action ?? "replace"}State`]({}, document.title, newUrlOrSetter);
				setUrl(newUrlOrSetter, void 0);
			}
		}
	}, [])];
}
// src/preact-extensions/use-async-effect.tsx
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
function useAsyncEffect(effect, inputs, options) {
	const { syncHandler, ...rest } = useAsync(effect, {
		...options,
		capture: null,
		debounce: null,
		throttle: null
	});
	useEffect(syncHandler, inputs);
	return rest;
}
// src/preact-extensions/use-effect-debug.tsx
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
function useEffectDebug(effect, inputs, impl = useEffect) {
	const prevInputs = useRef(void 0);
	const effect2 = () => {
		const changes = [];
		if (inputs && prevInputs.current) {
			for (let i = 0; i < Math.max(prevInputs.current.length, inputs.length); ++i) if (prevInputs.current[i] != inputs[i]) changes[i] = {
				from: prevInputs.current[i],
				to: inputs[i]
			};
		}
		const ret = effect(prevInputs.current, changes);
		prevInputs.current = inputs;
		return ret;
	};
	impl(effect2, inputs);
}
// src/preact-extensions/use-force-update.tsx
/**
* Returns a function that will, when called, force the component
* that uses this hook to re-render itself.
* 
* @remarks It's a bit smelly, so best to use sparingly.
*/
function useForceUpdate() {
	const [, set] = useState$1(0);
	return useRef(() => set((i) => ++i)).current;
}
// src/preact-extensions/use-layout-effect-debug.tsx
/**
* Wrap the native `useLayoutEffect` to add arguments 
* that allow accessing the previous value as the first argument,
* as well as the changes that caused the hook to be called as the second argument.
* 
* @param effect - Same as the built-in's
* @param inputs - Same as the built-in's
*/
function useLayoutEffectDebug(effect, inputs) {
	return useEffectDebug(effect, inputs, useLayoutEffect);
}
// src/preact-extensions/use-persistent-state.tsx
const PersistentStates = void 0;
function getDefaultStorage() {
	return typeof window === "undefined" ? void 0 : window.localStorage;
}
/**
* #__NO_SIDE_EFFECTS__
*/
function getFromLocalStorage(key, converter = JSON.parse, storage) {
	storage ??= getDefaultStorage();
	if (storage != null) try {
		const item = storage.getItem(key);
		if (item == null) return null;
		return converter(item);
	} catch (e) {
		debugger;
		return null;
	}
	return null;
}
function storeToLocalStorage(key, value, converter = JSON.stringify, storage) {
	storage ??= getDefaultStorage();
	if (storage != null) try {
		if (value == null) storage.removeItem(key);
		else storage.setItem(key, converter(value));
	} catch (e) {
		debugger;
	}
}
const AllListeners = /* @__PURE__ */ new Set();
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
function usePersistentState(key, initialValue, fromString = JSON.parse, toString = JSON.stringify, storage) {
	storage ??= getDefaultStorage();
	const [localCopy, setLocalCopy, getLocalCopy] = useState(() => (key ? getFromLocalStorage(key, fromString, storage) : null) ?? initialValue);
	const getInitialValue = useStableGetter(initialValue);
	const getKey = useStableGetter(key);
	const updateFromOtherSource = useCallback((key) => {
		key ??= getKey();
		const newCopy = getFromLocalStorage(key, fromString, storage);
		setLocalCopy(newCopy ?? getInitialValue());
	}, [setLocalCopy]);
	useLayoutEffect(() => {
		if (key) updateFromOtherSource(key);
	}, [key, storage]);
	useEffect(() => {
		AllListeners.add(updateFromOtherSource);
		return () => AllListeners.delete(updateFromOtherSource);
	}, [updateFromOtherSource]);
	useGlobalHandler(getWindow(), "storage", useStableCallback((e) => {
		if (key && e.key === key && e.storageArea == storage) {
			const newValue = e.newValue;
			if (newValue != null) setLocalCopy(fromString(newValue));
			else setLocalCopy(initialValue);
		}
	}));
	return [
		localCopy,
		useStableCallback((valueOrSetter) => {
			const value = typeof valueOrSetter === "function" ? valueOrSetter(getLocalCopy()) : valueOrSetter;
			setLocalCopy(valueOrSetter);
			if (key) {
				storeToLocalStorage(key, value, toString, storage);
				if (typeof value == "object" && value instanceof Date) console.assert(fromString != JSON.parse, "Dates (and other non-JSON types) must be given custom fromString and toString functions.");
				AllListeners.forEach((f) => {
					if (f != updateFromOtherSource) f();
				});
			}
		}),
		useStableCallback(() => {
			return (!key ? void 0 : getFromLocalStorage(key, fromString, storage)) ?? localCopy;
		})
	];
}
// src/preact-extensions/use-props-on-children.tsx
function childrenIsVnode(children) {
	if (children && children.type && children.props) return true;
	return false;
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
*/
function usePropsOnChildren(children, props, ref, Tag = "span") {
	const c = childrenIsVnode(children) ? children : createElement(Tag, {}, children);
	return createElement(c.type, useMergedProps(c.props, { ref: c.ref }, props, { ref }));
}
// src/preact-extensions/use-search-param-state.tsx
const SearchParamStates = void 0;
function parseParam(url, paramKey, fromString) {
	const window = getWindow();
	if (paramKey == void 0) return paramKey ?? void 0;
	url ??= new URL(window?.location?.toString() ?? "");
	return fromString(url.searchParams.get(paramKey)) ?? void 0;
}
function unparseParam(params, paramKey, value, ts2) {
	if (paramKey == null) return;
	const type = typeof value;
	if (value == null) params.delete(paramKey);
	else if (type === "boolean") {
		if (value === true) params.set(paramKey, "");
		else params.set(paramKey, "false");
	} else params.set(paramKey, `${ts2(value ?? null)}`);
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
function useSearchParamState({ key: paramKey, defaultReason, stringToValue, initialValue, onValueChange, valueToString }) {
	valueToString ??= (value) => `${value}`;
	defaultReason ??= "replace";
	const getInitialValue = useStableCallback(() => parseParam(new URL(getWindow()?.location?.toString() || ""), paramKey, stringToValue) ?? initialValue);
	useEffect(() => {
		setParamWithHistory(getInitialValue(), "replace");
	}, []);
	const savedParamValue = useRef(parseParam(null, paramKey, stringToValue) ?? initialValue);
	const [_getSavedParamValue, setSavedParamValue] = usePassiveState(onValueChange, useStableCallback(() => {
		return savedParamValue.current = parseParam(null, paramKey, stringToValue) ?? getInitialValue();
	}), {
		debounceRendering: runImmediately,
		skipMountInitialization: true
	});
	const setParamWithHistory = useStableCallback((newValueOrUpdater, reason) => {
		const document = getDocument();
		const window = getWindow();
		if (document && window) {
			let prevValue = parseParam(null, paramKey, stringToValue) ?? getInitialValue();
			let nextValue = typeof newValueOrUpdater == "function" ? newValueOrUpdater(prevValue) : newValueOrUpdater;
			let newParams = new URLSearchParams(new URL(window.location.toString()).searchParams);
			unparseParam(newParams, paramKey, nextValue, valueToString);
			let nextUrl = new URL(window.location.toString());
			nextUrl.search = prettyPrintParams(newParams);
			reason ??= defaultReason ?? "replace";
			history[`${reason}State`]({}, document.title, nextUrl);
			setUrl(nextUrl.toString(), reason);
			setSavedParamValue(nextValue);
		}
	});
	const [, setUrl] = useUrl(useStableCallback((_url) => {
		const newParam = parseParam(null, paramKey, stringToValue) ?? getInitialValue();
		setSavedParamValue(newParam);
	}));
	return [useCallback(() => {
		return savedParamValue.current;
	}, []), setParamWithHistory];
}
/**
* 
*/
function useSearchParamStateDeclarative({ key, defaultReason, stringToValue, initialValue, valueToString }) {
	const [value, setLocalCopy] = useState(parseParam(null, key, stringToValue) ?? initialValue);
	const [getValue, setValue] = useSearchParamState({
		key,
		stringToValue,
		initialValue,
		defaultReason,
		onValueChange: setLocalCopy,
		valueToString
	});
	return [
		value,
		setValue,
		getValue
	];
}
function prettyPrintParams(params) {
	const paramArray = [...params.entries()].filter((key, value) => value != null);
	if (paramArray.length == 0) return "";
	return `?${paramArray.map(([key, value]) => {
		if (value === "" || value === true) return `${encodeURIComponent(key)}`;
		else return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
	}).join("&")}`;
}
// src/preact-extensions/use-what-caused-render.tsx
/**
* 
*/
function useWhatCausedRender(who, { props, state }) {
	const prevProps = useRef(void 0);
	const prevState = useRef(void 0);
	useEffect(() => {
		if (prevProps.current != void 0) {
			const propDifferences = describeDifferences(1, who + ".props", props, prevProps.current, 0);
			if (propDifferences.length) console.log(propDifferences);
		}
		if (prevState.current != void 0) {
			const stateDifferences = describeDifferences(10, who + ".state", state, prevState.current, 0);
			if (stateDifferences.length) console.log(stateDifferences);
		}
		prevProps.current = props;
		prevState.current = state;
	});
}
function describeDifferences(maxDepth, path, lhs, rhs, depth) {
	if (depth > maxDepth) return [];
	if (lhs === rhs) return [];
	if (typeof lhs != typeof rhs) return [{
		path,
		newValue: lhs,
		oldValue: rhs
	}];
	if (typeof lhs == "number" || typeof lhs == "string" || typeof rhs == "boolean" || lhs == null || rhs == null) {
		if (lhs != rhs) return [{
			path,
			newValue: lhs,
			oldValue: rhs
		}];
		else return [];
	}
	if (lhs != rhs && depth == maxDepth) return [{
		path,
		newValue: lhs,
		oldValue: rhs
	}];
	const allKeys = /* @__PURE__ */ new Set([...Object.keys(lhs ?? {}), ...Object.keys(rhs ?? {})]);
	return Array.from(allKeys).map((key) => describeDifferences(maxDepth, path + "." + key, lhs[key], rhs[key], depth + 1)).flat();
}
// src/timing/use-animation-frame.tsx
const SharedAnimationFrameContext = /* @__PURE__ */ createContext(null);
/**
* When a bunch of unrelated components all use `requestAnimationFrame`,
* yes, this actually is faster. I wish it wasn't. It's lame.
*/
function ProvideBatchedAnimationFrames({ children }) {
	const addCallback = useCallback((callbackToBeBatched, tag) => {
		allCallbacks.current.set(callbackToBeBatched, tag);
	}, []);
	const removeCallback = useCallback((callback) => {
		allCallbacks.current.delete(callback);
	}, []);
	const contextInfo = useRef(null);
	if (contextInfo.current == null) contextInfo.current = {
		addCallback,
		removeCallback
	};
	const allCallbacks = useRef(null);
	if (allCallbacks.current == null) allCallbacks.current = /* @__PURE__ */ new Map();
	useEffect(() => {
		let handle = -1;
		function rafWithBatchedCallbacks(msSinceLast) {
			for (const [batchedRafCallback, tag] of allCallbacks.current) batchedRafCallback(msSinceLast, tag);
			handle = requestAnimationFrame(rafWithBatchedCallbacks);
		}
		handle = requestAnimationFrame(rafWithBatchedCallbacks);
		return () => cancelAnimationFrame(handle);
	}, []);
	return createElement(SharedAnimationFrameContext.Provider, {
		value: contextInfo.current,
		children
	});
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
function useAnimationFrame({ callback }) {
	const stableCallback = useStableCallback(callback ?? noop);
	const hasCallback = callback != null;
	const sharedAnimationFrameContext = useContext(SharedAnimationFrameContext);
	useEffect(() => {
		if (sharedAnimationFrameContext) {
			if (hasCallback) sharedAnimationFrameContext.addCallback(stableCallback);
			else sharedAnimationFrameContext.removeCallback(stableCallback);
		} else if (hasCallback) {
			const rafCallback = (ms) => {
				handle = requestAnimationFrame(rafCallback);
				stableCallback(ms);
			};
			let handle = requestAnimationFrame(rafCallback);
			return () => cancelAnimationFrame(handle);
		}
	}, [sharedAnimationFrameContext, hasCallback]);
}
// src/timing/use-interval.tsx
/**
* Runs a function every time the specified number of milliseconds elapses while the component is mounted.
* 
* @remarks
* {@include } {@link UseIntervalParameters}
*/
function useInterval({ interval, callback, noRisingEdge }) {
	const enabled = interval != null;
	const stableCallback = useStableCallback(callback);
	const getInterval = useStableGetter(interval);
	useEffect(() => {
		const interval = getInterval();
		let lastDelayUsed = interval;
		if (!enabled) return;
		const adjustableCallback = () => {
			stableCallback();
			const currentInterval = getInterval();
			if (currentInterval != lastDelayUsed) {
				clearInterval(handle);
				if (currentInterval != null) handle = setInterval(adjustableCallback, lastDelayUsed = currentInterval);
			}
		};
		if (!noRisingEdge) adjustableCallback();
		let handle = setInterval(adjustableCallback, interval);
		return () => clearInterval(handle);
	}, [enabled]);
}
export { EventDetail, Fragment, ImperativeElement, PersistentStates, ProvideBatchedAnimationFrames, SearchParamStates, assertEmptyObject, binarySearch, cloneElement, createContext, createElement, createPortal, debounceRendering, defaultCompare, enableLoggingPropConflicts, enhanceEvent, findBackupFocus, findFirstFocusable, findFirstTabbable, focus, forwardRef, generateRandomId, generateStack, getDocument, getEventDetail, getEventMapping, getFromLocalStorage, getTopElement, getWindow, hideCallCount, identity, memo, mergeFunctions, onfocusin, onfocusout, returnFalse, returnNull, returnTrue, returnUndefined, returnZero, runImmediately, setPressVibrate, storeToLocalStorage, tryNavigateToIndex, useActiveElement, useAnimationFrame, useAsync, useAsyncEffect, useAsyncHandler, useBackdropDismiss, useBeforeLayoutEffect, useBlockingElement, useCallback, useChildrenFlag, useChildrenHaveFocus, useChildrenHaveFocusChild, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useCompleteGridNavigationRowDeclarative, useCompleteGridNavigationRowOuter, useCompleteGridNavigationRows, useCompleteListNavigation, useCompleteListNavigationChild, useCompleteListNavigationChildDeclarative, useCompleteListNavigationChildOuter, useCompleteListNavigationChildren, useCompleteListNavigationDeclarative, useContext, useDebugValue, useDismiss, useDocumentClass, useDraggable, useDroppable, useEffect, useEffectDebug, useEffectEvent, useElementSize, useEnsureStability, useEscapeDismiss, useFocusTrap, useForceUpdate, useGlobalHandler, useGridNavigation, useGridNavigationCell, useGridNavigationRow, useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow, useHasCurrentFocus, useHasLastFocus, useHideScroll, useId, useImperativeHandle, useImperativeProps, useInterval, useLayoutEffect, useLayoutEffectDebug, useLinearNavigation, useListNavigation, useListNavigationChild, useListNavigationSelection, useListNavigationSelectionChild, useLogicalDirection, useLostFocusDismiss, useManagedChild, useManagedChildren, useMediaQuery, useMemo, useMemoObject, useMergedChildren, useMergedClasses, useMergedProps, useMergedRefs, useMergedStyles, useModal, useMonitoring, useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative, useMutationObserver, usePaginatedChild, usePaginatedChildren, usePassiveState, usePersistentState, usePortalChildren, usePress, usePressAsync, useProcessedChild, useProcessedChildren, useProcessedIndexMangler, usePropsOnChildren, useRandomDualIds, useRandomId, useRearrangeableChild, useRearrangeableChildren, useReducer, useRef, useRefElement, useRovingTabIndex, useRovingTabIndexChild, useSearchParamState, useSearchParamStateDeclarative, useSelection, useSelectionChild, useSelectionChildDeclarative, useSelectionDeclarative, useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative, useStableCallback, useStableGetter, useStableMergedCallback, useStack, useStaggeredChild, useStaggeredChildren, useState, useState$1 as useStateBasic, useTextContent, useTimeout, useTypeaheadNavigation, useTypeaheadNavigationChild, useUrl, useWhatCausedRender };

//# sourceMappingURL=index.mjs.map