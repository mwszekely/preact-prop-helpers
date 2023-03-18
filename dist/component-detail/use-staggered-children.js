import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { returnNull, usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { useState } from "../preact-extensions/use-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Allows children to each wait until the previous has finished rendering before itself rendering.
 *
 * E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 *
 * Note that the child itself will still render, but you can delay rendering *its* children, or
 * delay other complicated or heavy logic, until the child is no longer staggered.
 */
export function useStaggeredChildren({ managedChildrenReturn: { getChildren }, staggeredChildrenParameters: { staggered } }) {
    monitorCallCount(useStaggeredChildren);
    // By default, when a child mounts, we tell the next child to mount and simply repeat.
    // If a child is missing, however, it will break that chain.
    // To guard against that, we also wait for 50ms, and if it hasn't loaded by then, we just continue as if it did.
    const [currentlyStaggering, setCurrentlyStaggering] = useState(staggered);
    const timeoutHandle = useRef(-1);
    const resetEmergencyTimeout = useCallback(() => {
        if (timeoutHandle.current != -1)
            clearTimeout(timeoutHandle.current);
        timeoutHandle.current = setTimeout(() => {
            // We've gone this long without hearing the next child mount itself...
            // We need to continue.
            timeoutHandle.current = -1;
            let target = getTargetStaggerIndex();
            if (target != null)
                setDisplayedStaggerIndex(c => Math.min(target, (c ?? 0) + 1));
        }, 50);
    }, [ /* Must be empty */]);
    // The target index is the index that we're "animating" to.
    // Each child simply sets this to the highest value ever seen.
    // TODO: When unmounting children, we should reset this, but that requires us to track total # of children
    const [getTargetStaggerIndex, setTargetStaggerIndex] = usePassiveState(useCallback((newIndex, _prevIndex) => {
        // Any time our target changes,
        // ensure our timeout is running, and start a new one if not
        // For any newly mounted children, make sure they're aware of if they should consider themselves staggered or not
        //for (let i = (prevIndex ?? 0); i < (newIndex ?? 0); ++i) {
        //    getChildren().getAt(i)?.setParentIsStaggered(s.current);
        //}
        if (timeoutHandle.current == -1) {
            resetEmergencyTimeout();
            // If there's no timeout running, then that also means we're not waiting for a child to mount.
            // So ask a child to mount and then wait for that child to mount.
            setDisplayedStaggerIndex(c => Math.min(newIndex ?? 0, (c ?? 0) + 1));
        }
    }, [ /* Must be empty */]), returnNull);
    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState(useCallback((newIndex, prevIndex) => {
        if (newIndex == null) {
            return;
        }
        setCurrentlyStaggering(newIndex < (getTargetStaggerIndex() ?? 0));
        // It's time to show the next child,
        // either because the current one finished mounting,
        // or because our emergency backup timeout fired.
        //
        // Either way, tell the next child to show itself.
        // Also make sure that anyone we skipped somehow show themselves as well.
        for (let i = (prevIndex ?? 0); i < newIndex; ++i) {
            getChildren().getAt(i)?.setStaggeredVisible(true);
        }
        // Set a new emergency timeout
        resetEmergencyTimeout();
    }, [ /* Must be empty */]), returnNull);
    const parentIsStaggered = (!!staggered);
    const childCallsThisToTellTheParentToMountTheNextOne = useCallback((index) => {
        setDisplayedStaggerIndex(s => Math.min((getTargetStaggerIndex() ?? 0), 1 + (Math.max(s ?? 0, index + 1))));
    }, []);
    useLayoutEffect(() => {
        getChildren().forEach(child => child.setParentIsStaggered(parentIsStaggered));
    }, [parentIsStaggered]);
    const childCallsThisToTellTheParentTheHighestIndex = useCallback((mountedIndex) => {
        setTargetStaggerIndex(i => Math.max((i ?? 0), 1 + mountedIndex));
    }, []);
    // TODO: Modification during render (but it's really, really hard to avoid here,
    // but also probably fine because parents render before children? Does that include suspense?)
    const s = useRef(parentIsStaggered);
    s.current = parentIsStaggered;
    return {
        staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
        context: useStableObject({
            staggeredChildContext: useStableObject({
                childCallsThisToTellTheParentToMountTheNextOne,
                childCallsThisToTellTheParentTheHighestIndex,
                // These are used during setState, so just once during mount.
                // It's okay that the dependencies aren't included.
                // It's more important that these can be called during render.
                //
                // (If we switch, this is caught during useLayoutEffect anyway,
                // but only if we switch *after* the children mount! The ref
                // is to take care of the case where we switch *before* they mount)
                getDefaultIsStaggered: useCallback(() => {
                    return s.current;
                }, []),
                getDefaultStaggeredVisible: useCallback((i) => {
                    if (s.current) {
                        const staggerIndex = getDisplayedStaggerIndex();
                        if (staggerIndex == null)
                            return false;
                        return i < staggerIndex;
                    }
                    else {
                        return true;
                    }
                }, [])
            })
        }),
    };
}
export function useStaggeredChild({ info: { index }, context: { staggeredChildContext: { childCallsThisToTellTheParentTheHighestIndex, getDefaultIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne } } }) {
    monitorCallCount(useStaggeredChild);
    const [parentIsStaggered, setParentIsStaggered] = useState(getDefaultIsStaggered);
    const [staggeredVisible, setStaggeredVisible] = useState(getDefaultStaggeredVisible(index));
    useLayoutEffect(() => {
        childCallsThisToTellTheParentTheHighestIndex(index);
    }, [index]);
    useEffect(() => {
        if ((parentIsStaggered && staggeredVisible))
            childCallsThisToTellTheParentToMountTheNextOne(index);
    }, [index, (parentIsStaggered && staggeredVisible)]);
    return {
        props: !parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() },
        staggeredChildReturn: { isStaggered: parentIsStaggered, hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false },
        info: {
            setStaggeredVisible: setStaggeredVisible,
            setParentIsStaggered,
        }
    };
}
//# sourceMappingURL=use-staggered-children.js.map