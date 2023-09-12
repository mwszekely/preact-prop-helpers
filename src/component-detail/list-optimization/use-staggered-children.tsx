
import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { returnNull, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useState } from "../../preact-extensions/use-state.js";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "../../util/lib.js";
import { ElementProps } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { UseRovingTabIndexChildInfo } from "../keyboard-navigation/use-roving-tabindex.js";

export interface UseStaggeredChildrenInfo extends Pick<UseRovingTabIndexChildInfo<any>, "index"> {
    //setParentIsStaggered(parentIsStaggered: boolean): void;
    setStaggeredVisible(visible: boolean): void;
}

export interface UseStaggeredChildrenParametersSelf {
    /**
     * If true, each child will delay rendering itself until the one before it has.
     */
    staggered: boolean;
}

export interface UseStaggeredChildrenParameters extends Pick<UseManagedChildrenReturnType<UseStaggeredChildrenInfo>, "managedChildrenReturn"> {
    staggeredChildrenParameters: UseStaggeredChildrenParametersSelf;
}

export interface UseStaggeredChildContextSelf {
    parentIsStaggered: boolean;
    childCallsThisToTellTheParentToMountTheNextOne(index: number): void;
    childCallsThisToTellTheParentTheHighestIndex(index: number): void;
    getDefaultStaggeredVisible(i: number): boolean;

}

export interface UseStaggeredChildContext {
    staggeredChildContext: UseStaggeredChildContextSelf;
}

export interface UseStaggeredChildrenReturnType {
    staggeredChildrenReturn: UseStaggeredChildrenReturnTypeSelf;
    context: UseStaggeredChildContext;
}

export interface UseStaggeredChildrenReturnTypeSelf {
    /**
     * Whether any children are still waiting to show themselves because of the staggering behavior
     */
    stillStaggering: boolean;
}


export interface UseStaggeredChildParameters extends UseGenericChildParameters<UseStaggeredChildContext, Pick<UseStaggeredChildrenInfo, "index">> {
}

export interface UseStaggeredChildReturnTypeSelf {

    /** 
     * Whether the parent has indicated that all of its children, including this one, are staggered. 
     */
    parentIsStaggered: boolean;

    /** 
     * If this is true, you should delay showing *your* children or running other heavy logic until this becomes false.
     * Can be as simple as `<div>{hideBecauseStaggered? null : children}</div>`
     */
    hideBecauseStaggered: boolean;
}

export interface UseStaggeredChildReturnType<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    staggeredChildReturn: UseStaggeredChildReturnTypeSelf;
    info: Pick<UseStaggeredChildrenInfo, "setStaggeredVisible">;
}


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
export const useStaggeredChildren = monitored(function useStaggeredChildren({
    managedChildrenReturn: { getChildren },
    staggeredChildrenParameters: { staggered }
}: UseStaggeredChildrenParameters): UseStaggeredChildrenReturnType {

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
                setDisplayedStaggerIndex(c => Math.min(target!, (c ?? 0) + 1));
        }, 50)
    }, [/* Must be empty */])

    // The target index is the index that we're "animating" to.
    // Each child simply sets this to the highest value ever seen.
    // TODO: When unmounting children, we should reset this, but that requires us to track total # of children
    const [getTargetStaggerIndex, setTargetStaggerIndex] = usePassiveState<number | null, never>(useCallback((newIndex: number | null, _prevIndex: number | null | undefined) => {
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
    }, [/* Must be empty */]), returnNull);

    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState<number | null, never>(useCallback((newIndex: number | null, prevIndex: number | null | undefined) => {
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

        for (let i = (prevIndex ?? 0); i < newIndex; ++i) {
            getChildren().getAt(i)?.setStaggeredVisible(true);
        }

        // Set a new emergency timeout
        resetEmergencyTimeout();

    }, [/* Must be empty */]), returnNull)

    const parentIsStaggered = (!!staggered);

    const childCallsThisToTellTheParentToMountTheNextOne = useCallback((index: number) => {
        setDisplayedStaggerIndex(s => Math.min((getTargetStaggerIndex() ?? 0), 1 + (Math.max(s ?? 0, index + 1))));
    }, []);

    const childCallsThisToTellTheParentTheHighestIndex = useCallback((mountedIndex: number) => {
        setTargetStaggerIndex(i => Math.max((i ?? 0), 1 + mountedIndex))
    }, []);

    // TODO: Modification during render (but it's really, really hard to avoid here,
    // but also probably fine because parents render before children? Does that include suspense?)
    const s = useRef(parentIsStaggered);
    s.current = parentIsStaggered;

    const getDefaultStaggeredVisible = useCallback((i: number) => {
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

    const staggeredChildContext = useMemo<UseStaggeredChildContext["staggeredChildContext"]>(() => ({
        parentIsStaggered,
        childCallsThisToTellTheParentToMountTheNextOne,
        childCallsThisToTellTheParentTheHighestIndex,
        getDefaultStaggeredVisible
    }), [parentIsStaggered]);

    return {
        staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
        context: useMemo(() => ({
            staggeredChildContext
        }), [staggeredChildContext]),
    }
})


/**
 * Child hook for {@link useStaggeredChildren}.
 * 
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 * 
 * @compositeParams
 */
export const useStaggeredChild = monitored(function useStaggeredChild<ChildElement extends Element>({ info: { index }, context: { staggeredChildContext: { parentIsStaggered, childCallsThisToTellTheParentTheHighestIndex, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne } } }: UseStaggeredChildParameters): UseStaggeredChildReturnType<ChildElement> {
    const [staggeredVisible, setStaggeredVisible] = useState(getDefaultStaggeredVisible(index));

    useLayoutEffect(() => {
        childCallsThisToTellTheParentTheHighestIndex(index);
    }, [index]);

    useEffect(() => {
        if ((parentIsStaggered && staggeredVisible))
            childCallsThisToTellTheParentToMountTheNextOne(index);
    }, [index, (parentIsStaggered && staggeredVisible)])

    return {
        props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() } as {}, "data-staggered-children-child"),
        staggeredChildReturn: { parentIsStaggered, hideBecauseStaggered: parentIsStaggered ? !staggeredVisible : false },
        info: { setStaggeredVisible: setStaggeredVisible, }
    }
})
