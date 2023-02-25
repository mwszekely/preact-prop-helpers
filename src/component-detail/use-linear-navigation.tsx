import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableGetter } from "../preact-extensions/use-stable-getter";
import { UseRovingTabIndexReturnType } from "./use-roving-tabindex";

type OmitStrong<T, K extends keyof T> = Omit<T, K>

/*
export function useLinearNavigationProps<E extends Element>(r: UseLinearNavigationReturnTypeInfo<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]): h.JSX.HTMLAttributes<E>[] {
    return [r.linearNavigationReturn.propsStable, ...otherProps];
}
export function useTypeaheadNavigationProps<E extends Element>(r: UseTypeaheadNavigationReturnTypeInfo<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]): h.JSX.HTMLAttributes<E>[] {
    return [r.typeaheadNavigationReturn.propsStable, ...otherProps];
}*/

/*export interface UseTypeaheadNavigationContext<ChildElement extends Element> {
    typeaheadNavigationChildParameters: UseTypeaheadNavigationReturnTypeInfo<ChildElement>["typeaheadNavigationChildParameters"];
}*/

export interface LinearNavigationResult {
    valueUnmangled: number | null;
    status: "normal" | "past-start" | "past-end"
}


export interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> {
    linearNavigationReturn: {
        propsStable: h.JSX.HTMLAttributes<ParentOrChildElement>;
    }
}

/** Default implementation with no sorting */
//export function navigateRelative(original: number, offset: number): number | null { return original + offset; }

/** Default implementation with no sorting */
//export function navigateAbsolute(index: number): number | null { return index; }

/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters<_ParentOrChildElement extends Element, ChildElement extends Element> {

    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ChildElement>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">
    linearNavigationParameters: {

        /**
         * Must return true if the given child can be navigated to.
         * 
         * Generally corresponds to a `hidden` or `disabled` prop.
         * @param i 
         */
        isValid(i: number): boolean;

        /**
         * Controls how many elements are skipped over when page up/down are pressed.
         * 
         * * When 0: Page Up/Down are disabled
         * * When >= 1: Page Up/Down moves that number of elements up or down
         * * When 0 < x < 1, Page Up/Down moves by that percentage of all elements, or of 100 elements, whichever is higher. In other words, 0.1 jumps by 10 elements when there are fewer then 100 elements, and 20 elements when there are 200 elements.
         */
        pageNavigationSize: number;

        /**
         * What happens when `up` is pressed on the first valid child?
         * 
         * * "wrap": The focus is sent down to the last child
         * * "passthrough": Nothing happens, **and the event is allowed to propagate**.
         * * A function: 
         */
        navigatePastStart: "passthrough" | "wrap" | (() => void);
        /**
         * What happens when `down` is pressed on the last valid child?
         */
        navigatePastEnd: "passthrough" | "wrap" | (() => void);

        /**
         * Turn a sorted `index` into its original, unsorted `index`. Use `identity` if you don't care.
         * 
         * This is what allows our linear keyboard navigation to still work if the children are re-ordered
         * (i.e. how when reverse-sorted, pressing `down` moves from item #9 to item #8).
         */
        indexMangler: (n: number) => number;
        /**
         * Turn an unsorted `index` into its visual display `index`. Use `identity` if you don't care.
         */
        indexDemangler: (n: number) => number;

        getHighestIndex(): number;  // [0, n], not [0, n)

        /**
         * Controls which arrow keys are used to navigate through the component.
         * Not relative to the writing mode -- these are the literal keys that need to be pressed.
         * 
         * Use "either" to allow navigation in either direction.
         * 
         * Use "none" to disallow navigation with the arrow keys in any direction.
         */
        navigationDirection: "horizontal" | "vertical" | "either" | "none";

        /**
         * If set to true, navigation with the arrow keys will be 
         * disabled, but navigation with the home & end keys will
         * be unaffected.
         */
        disableArrowKeys: boolean;

        /**
         * If set to true, navigation with the home & end keys will
         * be disabled, but navigation with the arrow keys will be
         * unaffected.
         */
        disableHomeEndKeys: boolean;
    }
}


/** Arguments passed to the child 'useLinearNavigationChild` */
//export interface UseLinearNavigationChildInfo { }

/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys.
 * 
 * @see useListNavigation, which packages everything up together.
 */
export function useLinearNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({
    rovingTabIndexReturn,
    linearNavigationParameters
}: UseLinearNavigationParameters<ParentOrChildElement, ChildElement>): UseLinearNavigationReturnType<ParentOrChildElement> {
    type R = Event;//h.JSX.TargetedEvent<ParentOrChildElement>;
    const { getHighestIndex, indexDemangler, indexMangler, isValid, navigatePastEnd, navigatePastStart } = linearNavigationParameters;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;

    const navigateAbsolute = useCallback((i: number, e: R, fromUserInteraction: boolean) => {
        const targetUnmangled = indexDemangler(i);
        const { valueUnmangled } = tryNavigateToIndex({ isValid, highestChildIndex: getHighestIndex(), indexDemangler, indexMangler, searchDirection: -1, targetUnmangled });
        setTabbableIndex(valueUnmangled, e, fromUserInteraction);
    }, []);
    const navigateToFirst = useStableCallback((e: R, fromUserInteraction: boolean) => { navigateAbsolute(0, e, fromUserInteraction); });
    const navigateToLast = useStableCallback((e: R, fromUserInteraction: boolean) => { navigateAbsolute(getHighestIndex(), e, fromUserInteraction); });
    const navigateRelative2 = useStableCallback((e: R, offset: number, fromUserInteraction: boolean, mode: "page" | "single"): "passthrough" | "stop" => {
        const highestChildIndex = getHighestIndex();
        const searchDirection = (Math.sign(offset) || 1) as 1 | -1;
        const original = (getTabbableIndex() ?? 0);
        /**
         * To get the target, we need to add (or subtract) 1 to our current value,
         * but it need to be relative to any sorting/rearranging that's happened.
         * 
         * We mangle the index to get its "visual" position, add our offset,
         * and then demangle it to get the child that corresponds to the next child "visually".
         */
        const targetUnmangled = indexDemangler(indexMangler(original) + offset);
        const { status, valueUnmangled } = tryNavigateToIndex({ isValid, highestChildIndex, indexDemangler, indexMangler, searchDirection, targetUnmangled });
        if (status == "past-end") {
            if (navigatePastEnd == "wrap") {
                if (mode == "single")
                    navigateToFirst(e, fromUserInteraction);
                else {

                    /* eslint-disable no-constant-condition */
                    // Uncomment to allow page up/down to wrap after hitting the top/bottom once.
                    // It works fine, the problem isn't that -- the problem is it just feels wrong. 
                    // Page Up/Down don't feel like they should wrap, even if normally requested. 
                    // That's the arrow keys' domain.
                    if (false && (valueUnmangled == getTabbableIndex()))
                        navigateToFirst(e, fromUserInteraction);
                    else
                        navigateToLast(e, fromUserInteraction);
                }
                return "stop";
            }
            else if (navigatePastEnd == "passthrough") {
                return "passthrough";
            }
            else {
                navigatePastEnd();
                return "stop";
            }
        }
        else if (status == "past-start") {
            if (navigatePastStart == "wrap") {
                if (mode == "single") {
                    navigateToLast(e, fromUserInteraction);
                }
                else {
                    /* eslint-disable no-constant-condition */
                    // See above. It works fine but just feels wrong to wrap on Page Up/Down.
                    if (false && valueUnmangled == getTabbableIndex())
                        navigateToLast(e, fromUserInteraction);
                    else
                        navigateToFirst(e, fromUserInteraction);
                }
                return "stop";
            }
            else if (navigatePastStart == "passthrough") {
                return "passthrough";
            }
            else {
                navigatePastStart();
                return "stop";
            }
        }
        else {
            setTabbableIndex(valueUnmangled, e, fromUserInteraction);
            return "stop";
        }
    })
    const navigateToNext = useStableCallback((e: R, fromUserInteraction: boolean) => {
        return navigateRelative2(e, 1, fromUserInteraction, "single");
    });
    const navigateToPrev = useStableCallback((e: R, fromUserInteraction: boolean) => {
        return navigateRelative2(e, -1, fromUserInteraction, "single");
    });
    const getDisableArrowKeys = useStableGetter(linearNavigationParameters.disableArrowKeys);
    const getDisableHomeEndKeys = useStableGetter(linearNavigationParameters.disableHomeEndKeys);
    const getNavigationDirection = useStableGetter(linearNavigationParameters.navigationDirection);
    const getPageNavigationSize = useStableGetter(linearNavigationParameters.pageNavigationSize);


    const stableProps = useRef<h.JSX.HTMLAttributes<ParentOrChildElement>>({
        onKeyDown: (e: h.JSX.TargetedKeyboardEvent<ParentOrChildElement>) => {
            // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
            if (e.ctrlKey || e.metaKey)
                return;

            //const info = getLogicalDirectionInfo();
            const navigationDirection = getNavigationDirection();
            const disableArrowKeys = getDisableArrowKeys();
            const disableHomeEndKeys = getDisableHomeEndKeys();
            const pageNavigationSize = getPageNavigationSize();

            const allowsVerticalNavigation = (navigationDirection == "vertical" || navigationDirection == "either");
            const allowsHorizontalNavigation = (navigationDirection == "horizontal" || navigationDirection == "either");

            let truePageNavigationSize = pageNavigationSize;
            if (truePageNavigationSize < 1) {
                truePageNavigationSize = Math.round(pageNavigationSize * Math.max(100, getHighestIndex() + 1));
            }

            switch (e.key) {
                case "ArrowUp": {
                    //const propName = (info?.blockOrientation === "vertical" ? "blockDirection" : "inlineDirection");
                    const directionAllowed = (!disableArrowKeys && allowsVerticalNavigation);
                    if (directionAllowed) {
                        const result = navigateToPrev(e, true);
                        if (result != "passthrough") {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                    break;
                }
                case "ArrowDown": {
                    const directionAllowed = (!disableArrowKeys && allowsVerticalNavigation);
                    if (directionAllowed) {
                        const result = navigateToNext(e, true);
                        if (result != "passthrough") {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                    break;
                }

                case "ArrowLeft": {
                    const directionAllowed = (!disableArrowKeys && allowsHorizontalNavigation);
                    if (directionAllowed) {
                        const result = navigateToPrev(e, true);
                        if (result != "passthrough") {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                    break;
                }
                case "ArrowRight": {
                    const directionAllowed = (!disableArrowKeys && allowsHorizontalNavigation);
                    if (directionAllowed) {
                        const result = navigateToNext(e, true);
                        if (result != "passthrough") {
                            e.preventDefault();
                            e.stopPropagation();
                        }
                    }
                    break;
                }
                case "PageUp": {
                    if (truePageNavigationSize > 0) {
                        navigateRelative2(e, -truePageNavigationSize, true, "page");
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "PageDown": {
                    if (truePageNavigationSize > 0) {
                        navigateRelative2(e, truePageNavigationSize, true, "page");
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
                }
                case "Home":
                    if (!disableHomeEndKeys) {
                        navigateToFirst(e, true);
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;

                case "End":
                    if (!disableHomeEndKeys) {
                        navigateToLast(e, true);
                        e.preventDefault();
                        e.stopPropagation();
                    }
                    break;
            }
        }
    })


    return {
        linearNavigationReturn: {
            propsStable: stableProps.current
        }
    }


}



export interface TryNavigateToIndexParameters {
    //children: ManagedChildren<number, unknown, K>;
    highestChildIndex: number; // [0, n], not [0, n)
    isValid(index: number): boolean;

    //default: number;
    targetUnmangled: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;

}

export function tryNavigateToIndex({ isValid, highestChildIndex, searchDirection, indexDemangler, indexMangler, targetUnmangled }: TryNavigateToIndexParameters): LinearNavigationResult {

    if (searchDirection === -1) {
        let bestUpResult: LinearNavigationResult | undefined = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, targetUnmangled });
        bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, targetUnmangled, highestChildIndex });
        return bestUpResult || { valueUnmangled: targetUnmangled, status: "normal" };
    }
    else {
        let bestDownResult: LinearNavigationResult | undefined = undefined;
        bestDownResult = tryNavigateDown({ isValid, indexDemangler, indexMangler, targetUnmangled, highestChildIndex });
        bestDownResult ??= tryNavigateUp({ isValid, indexDemangler, indexMangler, targetUnmangled });
        return bestDownResult || { valueUnmangled: targetUnmangled, status: "normal" };
    }
}

function tryNavigateUp({ isValid, indexDemangler, indexMangler, targetUnmangled }: OmitStrong<TryNavigateToIndexParameters, "highestChildIndex" | "searchDirection">): LinearNavigationResult | undefined {
    const lower = 0;
    while (targetUnmangled >= lower && !isValid(targetUnmangled)) {
        targetUnmangled = indexDemangler(indexMangler(targetUnmangled) - 1);
    }

    if (!isValid(targetUnmangled)) {
        return undefined;
    }
    if (targetUnmangled < lower) {
        return { valueUnmangled: indexDemangler(lower), status: "past-start" };
    }
    else {
        return { valueUnmangled: targetUnmangled, status: "normal" };
    }
}

function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetUnmangled, highestChildIndex: upper }: OmitStrong<TryNavigateToIndexParameters, "searchDirection">): LinearNavigationResult | undefined {

    while (targetUnmangled <= upper && !isValid(targetUnmangled)) {
        targetUnmangled = indexDemangler(indexMangler(targetUnmangled) + 1);
    }

    if (!isValid(targetUnmangled)) {
        return undefined;
    }
    if (targetUnmangled > upper) {
        return { valueUnmangled: indexDemangler(upper), status: "past-end" };
    }
    else {
        return { valueUnmangled: targetUnmangled, status: "normal" };
    }
}



