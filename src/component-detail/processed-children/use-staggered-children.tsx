import { UseRefElementParameters, UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { UseGenericChildParameters, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { returnFalse, returnNull, usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { useCallback, useEffect, useMemo, useRef } from "../../util/lib.js";
import { ElementProps, OmitStrong, PropNames } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { UseRovingTabIndexChildInfo } from "../keyboard-navigation/use-roving-tabindex.js";



declare module "../../util/types.js" { interface PropNames { StaggeredParameters: typeof P1Names } }
declare module "../../util/types.js" { interface PropNames { StaggeredReturn: typeof R1Names } }
declare module "../../util/types.js" { interface PropNames { StaggeredChildParameters: typeof P2Names } }
declare module "../../util/types.js" { interface PropNames { StaggeredChildReturn: typeof R2Names } }

const P1 = `PropNames.StaggeredParameters`;
const P2 = `PropNames.StaggeredChildParameters`;
const R1 = `PropNames.StaggeredReturn`;
const R2 = `PropNames.StaggeredChildReturn`;

export const P1Names = {
    staggered: `${P1}.staggered`,
    childCount: `${P1}.childCount`,
    untabbable: `${P1}.untabbable`,
    untabbableBehavior: `${P1}.untabbableBehavior`,
    onTabbableIndexChange: `${P1}.onTabbableIndexChange`,
} as const;

export const R1Names = {
    stillStaggering: `${R1}.stillStaggering`
} as const;

export const P2Names = {
} as const;

export const R2Names = {
    parentIsStaggered: `${R2}.parentIsStaggered`,
    hideBecauseStaggered: `${R2}.hideBecauseStaggered`,
    childUseEffect: `${R2}.childUseEffect`
} as const;

PropNames.StaggeredParameters ??= P1Names;
PropNames.StaggeredReturn ??= R1Names;
PropNames.StaggeredChildParameters ??= P2Names;
PropNames.StaggeredChildReturn ??= R2Names;

export interface UseStaggeredChildrenInfo extends Pick<UseRovingTabIndexChildInfo<any>, "index"> {
    //setParentIsStaggered(parentIsStaggered: boolean): void;
    setStaggeredVisible(visible: boolean): void;
    getStaggeredVisible(): boolean;
}

export interface UseStaggeredChildrenParametersSelf {
    /**
     * If true, each child will delay rendering itself until the one before it has.
     */
    [PropNames.StaggeredParameters.staggered]: boolean;

    [PropNames.StaggeredParameters.childCount]: number | null;
}

export interface UseStaggeredChildrenParameters extends
    UseStaggeredChildrenParametersSelf,
    Pick<UseManagedChildrenReturnType<UseStaggeredChildrenInfo>, typeof PropNames.ManagedChildrenReturn.getChildren>,
    Pick<UseRefElementReturnType<any>, typeof PropNames.RefElementReturn.getElement> {

}

export interface UseStaggeredChildContextSelf {
    parentIsStaggered: boolean;
    childCallsThisToTellTheParentToMountTheNextOne(index: number): void;
    //childCallsThisToTellTheParentTheHighestIndex(index: number): void;
    getDefaultStaggeredVisible(i: number): boolean;
    getIntersectionObserver(): IntersectionObserver | null;
    setElementToIndexMap(index: number, element: any): void;

}

export interface UseStaggeredChildContext {
    staggeredChildContext: UseStaggeredChildContextSelf;
}

export interface UseStaggeredChildrenReturnType extends UseStaggeredChildrenReturnTypeSelf {
    context: UseStaggeredChildContext;
}

export interface UseStaggeredChildrenReturnTypeSelf {
    /**
     * Whether any children are still waiting to show themselves because of the staggering behavior
     */
    [PropNames.StaggeredReturn.stillStaggering]: boolean;
}


export interface UseStaggeredChildParameters extends UseGenericChildParameters<UseStaggeredChildContext, Pick<UseStaggeredChildrenInfo, "index">> {
}

export interface UseStaggeredChildReturnTypeSelf {

    /** 
     * Whether the parent has indicated that all of its children, including this one, are staggered. 
     */
    [PropNames.StaggeredChildReturn.parentIsStaggered]: boolean;

    /** 
     * If this is true, you should delay showing *your* children or running other heavy logic until this becomes false.
     * Can be as simple as `<div>{hideBecauseStaggered? null : children}</div>`
     */
    [PropNames.StaggeredChildReturn.hideBecauseStaggered]: boolean;

    /**
     * Call this when the child mounts during useEffect (i.e. something like `useEffect(childUseEffect, [childUseEffect])`).
     * 
     * This is generally passed to an inner child, if this is the outer child.
     */
    [PropNames.StaggeredChildReturn.childUseEffect](): void;
}

export interface UseStaggeredChildReturnType<ChildElement extends Element> extends
    UseStaggeredChildReturnTypeSelf,
    Pick<UseRefElementParameters<ChildElement>, typeof PropNames.RefElementParameters.onElementChange> {
    props: ElementProps<ChildElement>;
    info: OmitStrong<UseStaggeredChildrenInfo, "index">;
}


/**
 * Allows children to each wait until the previous has finished rendering before itself rendering. 
 * E.G. Child #3 waits until #2 renders. #2 waits until #1 renders, etc.
 * 
 * @remarks If a child appears on-screen for 100ms then it will be forcibly displayed.
 * 
 * When using the child hook, it's highly recommended to separate out any heavy logic into
 * a separate component that won't be rendered until it's de-staggered into visibility.
 * 
 * @compositeParams
 * 
 * @hasChild {@link useStaggeredChild}
 */
export const useStaggeredChildren = monitored(function useStaggeredChildren({
    //managedChildrenReturn: { getChildren },
    //staggeredChildrenParameters: { staggered, childCount },
    //refElementReturn: { getElement }
    [PropNames.ManagedChildrenReturn.getChildren]: getChildren,
    [PropNames.StaggeredParameters.childCount]: childCount,
    [PropNames.StaggeredParameters.staggered]: staggered,
    [PropNames.RefElementReturn.getElement]: getElement,
}: UseStaggeredChildrenParameters): UseStaggeredChildrenReturnType {



    // TODO: Right now, staggering doesn't take into consideration reordering via indexMangler and indexDemangler.
    // This isn't a huge deal because the IntersectionObserver takes care of any holes, but it can look a bit odd
    // until they fill in.

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
                setDisplayedStaggerIndex(prev => {
                    let next = Math.min(target || 0, (prev || 0) + 1);
                    while (next <= (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible() == true)
                        ++next;
                    return next;
                });
            }, 10)
        }, 100)
    }, [/* Must be empty */])

    // The target index is the index that we're "animating" to.
    // Each child simply sets this to the highest value ever seen.
    useEffect(() => {
        // Any time our target changes,
        // ensure our timeout is running, and start a new one if not
        if (timeoutHandle.current == -1) {
            resetEmergencyTimeout();

            // If there's no timeout running, then that also means we're not waiting for a child to mount.
            // So ask a child to mount and then wait for that child to mount.
            let current = getDisplayedStaggerIndex();
            let next = Math.min(childCount ?? 0, (current ?? 0) + 1);

            setDisplayedStaggerIndex(next);
        }
    }, [childCount]);

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

        // (queueMicrotask prevents warnings if debounceRendering is immediate)
        queueMicrotask(() => {
            for (let i = (prevIndex ?? 0) - 1; i <= newIndex; ++i) {
                getChildren().getAt(i)?.setStaggeredVisible(true);
            }
        });

        // Set a new emergency timeout
        resetEmergencyTimeout();

    }, [/* Must be empty */]), returnNull)

    const parentIsStaggered = (!!staggered);
    const getChildCount = useStableGetter(childCount);
    const childCallsThisToTellTheParentToMountTheNextOne = useCallback((justMountedChildIndex: number) => {
        setDisplayedStaggerIndex(prevIndex => {
            let next = Math.min(
                (getTargetStaggerIndex() ?? 0), // Don't go higher than the highest child
                1 + (Math.max(prevIndex ?? 0, justMountedChildIndex))   // Go one higher than the child that just mounted itself or any previously mounted child (TODO: Is that last bit working as intended?)
            );
            // Skip over any children that have already been made visible ahead
            // (through IntersectionObserver)
            let s = 0;
            while (next < (getChildCount() || 0) && getChildren().getAt(next)?.getStaggeredVisible()) {
                ++next;
                ++s;
            }

            return next;
        });
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

    const intersectionObserver = useRef<IntersectionObserver | null>(null);
    const elementToIndex = useRef(new Map<Element, number>());
    const setElementToIndexMap = useCallback((index: number, element: any) => {
        elementToIndex.current.set(element, index);
    }, [])

    const getIntersectionObserver = useCallback(() => intersectionObserver.current, []);
    const staggeredChildContext = useMemo<UseStaggeredChildContext["staggeredChildContext"]>(() => ({
        parentIsStaggered,
        childCallsThisToTellTheParentToMountTheNextOne,
        getDefaultStaggeredVisible,
        getIntersectionObserver,
        setElementToIndexMap
    }), [parentIsStaggered]);

    useEffect(() => {
        const element = getElement();
        const io = intersectionObserver.current = new IntersectionObserver((entries) => {
            for (let entry of entries) {
                if (entry.isIntersecting) {
                    const index = elementToIndex.current.get(entry.target)
                    if (index != null) {
                        getChildren().getAt(index)?.setStaggeredVisible(true);
                    }
                }
            }
        });
        return () => io.disconnect();
    }, [])

    return {
        [PropNames.StaggeredReturn.stillStaggering]: currentlyStaggering,
        context: useMemo(() => ({
            staggeredChildContext
        }), [staggeredChildContext]),
    }
})


/**
 * Child hook for {@link useStaggeredChildren}.
 * 
 * @remarks When a child is staggered, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecauseStaggered` and, if it's true, avoid doing any heavy logic. Ideally that kind of heavy
 * logic/CSS will be in a sub-child that can be either rendered or not depending on `hideBecauseStaggered`.
 * 
 * @compositeParams
 */
export const useStaggeredChild = monitored(function useStaggeredChild<ChildElement extends Element>({
    info: { index },
    //refElementReturn: { getElement },
    context: { staggeredChildContext: { parentIsStaggered, getDefaultStaggeredVisible, childCallsThisToTellTheParentToMountTheNextOne, getIntersectionObserver, setElementToIndexMap } }
}: UseStaggeredChildParameters): UseStaggeredChildReturnType<ChildElement> {
    const [staggeredVisible, setStaggeredVisible, getStaggeredVisible] = useState(getDefaultStaggeredVisible(index));

    // Controls whether we ask the parent to start mounting children after us.
    // (We don't ask when the child becomes visible due to screen-scrolling,
    // only when it becomes visible because we were next in line to do so)
    const becauseScreen = useRef(false);

    const [getOnScreen, setOnScreen] = usePassiveState<boolean, any>(useStableCallback((next, prev, reason) => {

        if (staggeredVisible)
            return;

        if (next) {
            const io = getIntersectionObserver();
            io?.unobserve(e.current!);

            setStaggeredVisible(true);
            becauseScreen.current = true;
        }
    }), returnFalse);

    // This isn't called during useEffect here, because we want to wait for the
    // "heavier processing" child to render, instead of us (the "ligher pre-processing" child).
    // So we return the effect we want to run and let the caller run it as appropriate.
    // (In theory this could be returned as, like, useStaggeredChildChild instead but I really don't wanna do that)
    const childUseEffect = useCallback(() => {
        if (!becauseScreen.current && (parentIsStaggered && staggeredVisible)) {
            if ((parentIsStaggered && staggeredVisible)) {
                childCallsThisToTellTheParentToMountTheNextOne(index);
            }
            else if (!parentIsStaggered) {
                // Ensure that if we mount unstaggered and change to staggered, we start at the end
                childCallsThisToTellTheParentToMountTheNextOne(index);
            }
        }
    }, [index, (parentIsStaggered && staggeredVisible)])

    // This is the element that the IntersectionObserver will watch.
    const e = useRef<Element | null>(null);

    return {
        props: useTagProps(!parentIsStaggered ? {} : { "aria-busy": (!staggeredVisible).toString() } as {}, "data-staggered-children-child"),

        [PropNames.StaggeredChildReturn.hideBecauseStaggered]: parentIsStaggered ? !staggeredVisible : false,
        [PropNames.StaggeredChildReturn.childUseEffect]: childUseEffect,
        [PropNames.StaggeredChildReturn.parentIsStaggered]: parentIsStaggered,
        info: { setStaggeredVisible, getStaggeredVisible },

        [PropNames.RefElementParameters.onElementChange]: useStableCallback((element) => {
            setElementToIndexMap(index, element);
            e.current = (element || e.current);
            const io = getIntersectionObserver();
            if (e.current) {
                io?.observe(e.current);
            }
            else {
                io?.unobserve(e.current!);
            }
        })
    }
})
