import { returnNull, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { useCallback, useEffect, useMemo, useRef } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
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
export const useStaggeredChildren = monitored(function useStaggeredChildren({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered, childCount } }) {
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    // This is the highest index that we want to show, inclusive.
    const getTargetStaggerIndex = useStableGetter((childCount || 0) - 1);
    // By default, when a child mounts, we tell the next child to mount and simply repeat.
    // If a child is missing, however, it will break that chain.
    // To guard against that, we also wait for 50ms, and if it hasn't loaded by then, we just continue as if it did.
    const timeoutHandle = useRef(-1);
    const resetEmergencyTimeout = useCallback(() => {
        if (timeoutHandle.current != -1)
            clearTimeout(timeoutHandle.current);
        // We've gone this long without hearing the next child mount itself...
        // We need to continue.
        timeoutHandle.current = setTimeout(() => {
            // This is split up into two setTimeouts for timing reasons:
            // If it's taking a long time to render a child, it's possible that we'll
            // trip this emergency timeout even though the child renders itself perfectly fine.
            // Due to the way timeouts are ordered, we want to ensure this timeout runs AFTER
            // the component's effect timeout. So we just wait again for a short tick.
            timeoutHandle.current = setTimeout(() => {
                timeoutHandle.current = -1;
                let target = getTargetStaggerIndex();
                setDisplayedStaggerIndex(prev => Math.min(target || 0, (prev || 0) + 1));
            }, 10);
        }, 100);
    }, [ /* Must be empty */]);
    // The target index is the index that we're "animating" to.
    // Each child simply sets this to the highest value ever seen.
    // TODO: When unmounting children, we should reset this, but that requires us to track total # of children
    useEffect(() => {
        // Any time our target changes,
        // ensure our timeout is running, and start a new one if not
        if (timeoutHandle.current == -1) {
            resetEmergencyTimeout();
            // If there's no timeout running, then that also means we're not waiting for a child to mount.
            // So ask a child to mount and then wait for that child to mount.
            setDisplayedStaggerIndex(c => Math.min(childCount ?? 0, (c ?? 0) + 1));
        }
    }, [childCount]);
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(useCallback((newIndex, prevIndex) => {
        if (newIndex == null || !s.current) {
            return;
        }
        setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
        // It's time to show the next child,
        // either because the current one finished mounting,
        // or because our emergency backup timeout fired.
        //
        // Either way, tell the next child to show itself.
        // Also make sure that anyone we skipped somehow show themselves as well.
        // (queueMicrotask prevents warnings if debounceRendering is immediate)
        queueMicrotask(() => {
            for (let i = (prevIndex ?? 0) - 1; i <= newIndex; ++i) {
                getChildren().getAt(i)?.setStaggeredVisible(true);
            }
        });
        // Set a new emergency timeout
        resetEmergencyTimeout();
    }, [ /* Must be empty */]), returnNull);
    const parentIsStaggered = (!!staggered);
    const childCallsThisToTellTheParentToMountTheNextOne = useCallback((justMountedChildIndex) => {
        setDisplayedStaggerIndex(prevIndex => {
            return Math.min((getTargetStaggerIndex() ?? 0), // Don't go higher than the highest child
            1 + (Math.max(prevIndex ?? 0, justMountedChildIndex)) // Go one higher than the child that just mounted itself or any previously mounted child (TODO: Is that last bit working as intended?)
            );
        });
    }, []);
    // TODO: Modification during render (but it's really, really hard to avoid here,
    // but also probably fine because parents render before children? Does that include suspense?)
    const s = useRef(parentIsStaggered);
    s.current = parentIsStaggered;
    const getDefaultStaggeredVisible = useCallback((i) => {
        if (s.current) {
            const staggerIndex = getDisplayedStaggerIndex();
            if (staggerIndex == null)
                return false;
            return i < staggerIndex;
        }
        else {
            return true;
        }
    }, []);
    const staggeredChildContext = useMemo(() => ({
        parentIsStaggered,
        childCallsThisToTellTheParentToMountTheNextOne,
        getDefaultStaggeredVisible
    }), [parentIsStaggered]);
    return {
        staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
        context: useMemo(() => ({
            staggeredChildContext
        }), [staggeredChildContext]),
    };
});
/**
 * Child hook for {@link useStaggeredChildren}.
 *
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
export const useStaggeredChild = monitored(function useStaggeredChild({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne } } }) {
    const [staggeredVisible, setStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
    useEffect(() => {
        if ((parentIsStaggered && staggeredVisible)) {
            //setTimeout(() => {childCallsThisToTellTheParentToMountTheNextOne(index);}, 30)
            childCallsThisToTellTheParentToMountTheNextOne(index);
        }
        else if (!parentIsStaggered) {
            // Ensure that if we mount unstaggered and change to staggered, we start at the end
            childCallsThisToTellTheParentToMountTheNextOne(index);
        }
    }, [index, (parentIsStaggered && staggeredVisible)]);
    return {
        props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() }, "data-staggered-children-child"),
        staggeredChildReturn: { parentIsStaggered, hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false },
        info: { setStaggeredVisible: setStaggeredVisible, }
    };
});
//# sourceMappingURL=use-staggered-children.js.map