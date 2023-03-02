import { h } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../preact-extensions/use-stable-getter.js";
import { OmitStrong } from "../util/types.js";
import { UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";

export interface LinearNavigationResult {
    value: number | null;
    status: "normal" | "past-start" | "past-end"
}


export interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> {
    linearNavigationReturn: {
        propsStable: h.JSX.HTMLAttributes<ParentOrChildElement>;
    }
}

/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters<_ParentOrChildElement extends Element, ChildElement extends Element> {

    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ChildElement>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">;

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
    type R = Event;
    const { getHighestIndex, indexDemangler, indexMangler, isValid, navigatePastEnd, navigatePastStart } = linearNavigationParameters;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;

    const navigateAbsolute = useCallback((i: number, e: R, fromUserInteraction: boolean) => {
        const target = indexDemangler(i);
        const { value } = tryNavigateToIndex({ isValid, highestChildIndex: getHighestIndex(), indexDemangler, indexMangler, searchDirection: -1, target });
        setTabbableIndex(value, e, fromUserInteraction);
    }, []);
    const navigateToFirst = useStableCallback((e: R, fromUserInteraction: boolean) => { navigateAbsolute(0, e, fromUserInteraction); });
    const navigateToLast = useStableCallback((e: R, fromUserInteraction: boolean) => { navigateAbsolute(getHighestIndex(), e, fromUserInteraction); });
    const navigateRelative2 = useStableCallback((e: R, offset: number, fromUserInteraction: boolean, mode: "page" | "single"): "passthrough" | "stop" => {
        const original = (getTabbableIndex() ?? 0);
        const { status, value } = tryNavigateToIndex({ isValid, highestChildIndex: getHighestIndex(), indexDemangler, indexMangler, searchDirection: (Math.sign(offset) || 1) as 1 | -1, target: indexDemangler(indexMangler(original) + offset) });
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
                    if (false && (value == getTabbableIndex()))
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
                    if (false && value == getTabbableIndex())
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
            setTabbableIndex(value, e, fromUserInteraction);
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

            let result: "passthrough" | "stop" | null = null;

            // Arrow keys only take effect for components oriented in that direction,
            // so we want to make sure we only listen for left/right or up/down when appropriate.
            let keyPressIsValidForOrientation = true;
            switch (e.key) {
                case "ArrowUp":
                case "ArrowDown":
                    keyPressIsValidForOrientation = (!disableArrowKeys && allowsVerticalNavigation);
                    break;
                case "ArrowLeft":
                case "ArrowRight":
                    keyPressIsValidForOrientation = (!disableArrowKeys && allowsHorizontalNavigation);
                    break;
            }

            if (keyPressIsValidForOrientation) {
                switch (e.key) {
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
                        if (truePageNavigationSize > 0) {
                            navigateRelative2(e, truePageNavigationSize * (e.key.endsWith('n') ? -1 : 1), true, "page");
                            result = 'passthrough';
                        }
                        break;

                    case "Home":
                    case "End":
                        if (!disableHomeEndKeys) {
                            if (e.key.endsWith('e'))
                                navigateToFirst(e, true);
                            else
                                navigateToLast(e, true);
                            result = 'passthrough';
                        }
                        break;
                }
            }

            if (result != 'passthrough') {
                e.preventDefault();
                e.stopPropagation();
            }

            /*switch (e.key) {
                case "ArrowUp": {
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
            }*/
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
    target: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;

}

export function tryNavigateToIndex({ isValid, highestChildIndex, searchDirection, indexDemangler, indexMangler, target }: TryNavigateToIndexParameters): LinearNavigationResult {

    if (searchDirection === -1) {
        let bestUpResult: LinearNavigationResult | undefined = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, target });
        bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, target, highestChildIndex });
        return bestUpResult || { value: target, status: "normal" };
    }
    else {
        let bestDownResult: LinearNavigationResult | undefined = undefined;
        bestDownResult = tryNavigateDown({ isValid, indexDemangler, indexMangler, target, highestChildIndex });
        bestDownResult ??= tryNavigateUp({ isValid, indexDemangler, indexMangler, target });
        return bestDownResult || { value: target, status: "normal" };
    }
}

function tryNavigateUp({ isValid, indexDemangler, indexMangler, target }: OmitStrong<TryNavigateToIndexParameters, "highestChildIndex" | "searchDirection">): LinearNavigationResult | undefined {
    const lower = 0;
    while (target >= lower && !isValid(target))
        target = indexDemangler(indexMangler(target) - 1);

    if (!isValid(target)) {
        return undefined;
    }
    if (target < lower) {
        return { value: indexDemangler(lower), status: "past-start" };
    }
    else {
        return { value: target, status: "normal" };
    }
}

function tryNavigateDown({ isValid, indexDemangler, indexMangler, target, highestChildIndex: upper }: OmitStrong<TryNavigateToIndexParameters, "searchDirection">): LinearNavigationResult | undefined {

    while (target <= upper && !isValid(target))
        target = indexDemangler(indexMangler(target) + 1);

    if (!isValid(target)) {
        return undefined;
    }
    if (target > upper) {
        return { value: indexDemangler(upper), status: "past-end" };
    }
    else {
        return { value: target, status: "normal" };
    }
}



