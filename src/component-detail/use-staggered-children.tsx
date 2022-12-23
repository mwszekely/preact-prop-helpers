import { h } from "preact";
import { returnNull, returnZero, usePassiveState } from "../preact-extensions/use-passive-state";
import { useStableGetter, useStableObject } from "../preact-extensions/use-stable-getter";
import { useCallback, useEffect, useLayoutEffect, useRef } from "preact/hooks";
import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children";
import { UseLinearNavigationParameters } from "./use-linear-navigation";
import { UseRovingTabIndexChildInfo } from "./use-roving-tabindex";
import { useState } from "../preact-extensions/use-state";

export interface UseStaggeredChildrenInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    setParentIsStaggered(parentIsStaggered: boolean): void;
    setStaggeredVisible(visible: boolean): void;
    //setChildCountIfStaggered(count: number): void;
}

export interface UseStaggeredChildrenParameters<E extends Element, M extends UseStaggeredChildrenInfo<E>> {
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    //linearNavigationParameters: Pick<UseLinearNavigationParameters<any, E>["linearNavigationParameters"], "indexDemangler" | "indexMangler">;
    staggeredChildrenParameters: {
        staggered: boolean;
    }
}

export interface UseStaggeredChildContext {
    staggeredChildContext: {
        childCallsThisToTellTheParentToMountTheNextOne(index: number): void;
        childCallsThisToTellTheParentTheHighestIndex(index: number): void;
        getDefaultStaggeredVisible(i: number): boolean;
        getDefaultIsStaggered(i: number): boolean;
    }
}

export interface UseStaggeredChildrenReturnType {
    /*managedChildrenParameters: {
        onChildCountChange: (count: number) => void;
    };*/
    staggeredChildrenReturn: { stillStaggering: boolean }
    context: UseStaggeredChildContext;
}

export function useStaggeredChildren<E extends Element, M extends UseStaggeredChildrenInfo<E>>({
    managedChildrenReturn: { getChildren },
    staggeredChildrenParameters: { staggered }
}: UseStaggeredChildrenParameters<E, M>): UseStaggeredChildrenReturnType {

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
            setDisplayedStaggerIndex(c => Math.min(getTargetStaggerIndex() ?? 0, (c ?? 0) + 1));
        }, 50)
    }, [/* Must be empty */])

    // The target index is the index that we're "animating" to.
    // Each child simply sets this to the highest value ever seen.
    // TODO: When unmounting children, we should reset this, but that requires us to track total # of children
    const [getTargetStaggerIndex, setTargetStaggerIndex] = usePassiveState<number | null, never>(useCallback((newIndex: number | null, prevIndex: number | null | undefined) => {
        // Any time our target changes,
        // ensure our timeout is running, and start a new one if not


        // For any newly mounted children, make sure they're aware of if they should consider themselves staggered or not
        for (let i = (prevIndex ?? 0); i < (newIndex ?? 0); ++i) {
            getChildren().getAt(i)?.setParentIsStaggered(parentIsStaggered);
        }

        if (timeoutHandle.current == -1) {
            resetEmergencyTimeout();

            // If there's no timeout running, then that also means we're not waiting for a child to mount.
            // So ask a child to mount and then wait for that child to mount.
            setDisplayedStaggerIndex(c => Math.min(newIndex ?? 0, (c ?? 0) + 1));
        }
    }, [/* Must be empty */]), returnNull);

    //const [getTimeoutHandle, setTimeoutHandle] = usePassiveState<number | null, Event>(null, returnNull);

    const [getDisplayedStaggerIndex, setDisplayedStaggerIndex] = usePassiveState<number | null, never>(useCallback((newIndex: number | null, prevIndex: number | null | undefined) => {
        if (newIndex == null) {
            return;
        }

        setCurrentlyStaggering(newIndex >= (getTargetStaggerIndex() ?? 0));

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

        /*if (newIndex < targetIndex) {
            const handle = setTimeout(() => { setDisplayedStaggerIndex(c => (c ?? 0) + 1); }, staggerDelay ?? 50);
            return clearTimeout(handle);
        }*/

    }, [/* Must be empty */]), returnNull)

    const parentIsStaggered = (!!staggered);

    const childCallsThisToTellTheParentToMountTheNextOne = useCallback((index: number) => {
        setDisplayedStaggerIndex(s => Math.min((getTargetStaggerIndex() ?? 0), 1 + (Math.max(s ?? 0, index + 1))));
    }, []);

    useLayoutEffect(() => {
        getChildren().forEach(child => child.setParentIsStaggered(parentIsStaggered));
        //if (parentIsStaggered)
        //    childCallsThisToTellTheParentToMountTheNextOne(-1);

    }, [parentIsStaggered]);

    const childCallsThisToTellTheParentTheHighestIndex = useCallback((mountedIndex: number) => {
        setTargetStaggerIndex(i => Math.max((i ?? 0), 1 + mountedIndex))
    }, []);

    return {
        staggeredChildrenReturn: { stillStaggering: currentlyStaggering },
        context: useStableObject({
            staggeredChildContext: useStableObject({
                childCallsThisToTellTheParentToMountTheNextOne,
                childCallsThisToTellTheParentTheHighestIndex,
                // These are used durong setState, so just once during mount.
                // It's okay that the dependencies aren't included.
                // It's more important that these can be called during render.
                getDefaultIsStaggered: useCallback(() => {
                    return parentIsStaggered;
                }, []),
                getDefaultStaggeredVisible: useCallback((i) => {
                    if (parentIsStaggered) {
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
    }
}



export interface UseStaggeredChildParameters {
    managedChildParameters: { index: number; }
    context: UseStaggeredChildContext;
}

export interface UseStaggeredChildReturn<ChildElement extends Element> {
    props: h.JSX.HTMLAttributes<ChildElement>;
    staggeredChildReturn: {
        staggeredVisible: boolean;
        isStaggered: boolean;
    };
    managedChildParameters: Pick<UseStaggeredChildrenInfo<ChildElement>, "setParentIsStaggered" | "setStaggeredVisible">
}


export function useStaggeredChild<ChildElement extends Element>({ managedChildParameters: { index }, context: { staggeredChildContext: { childCallsThisToTellTheParentTheHighestIndex, getDefaultIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne } } }: UseStaggeredChildParameters): UseStaggeredChildReturn<ChildElement> {
    const [parentIsStaggered, setParentIsStaggered] = useState(getDefaultIsStaggered(index));
    const [staggeredVisible, setStaggeredVisible] = useState(getDefaultStaggeredVisible(index));

    useLayoutEffect(() => {
        childCallsThisToTellTheParentTheHighestIndex(index);
    }, [index]);

    useEffect(() => {
        if ((parentIsStaggered && staggeredVisible))
            childCallsThisToTellTheParentToMountTheNextOne(index);
    }, [index, (parentIsStaggered && staggeredVisible)])

    return {
        props: !parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() } as {},
        staggeredChildReturn: { staggeredVisible, isStaggered: parentIsStaggered },
        managedChildParameters: {
            setStaggeredVisible: setStaggeredVisible,
            setParentIsStaggered,
        }
    }
}