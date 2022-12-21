import { h } from "preact";
import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { UseRefElementReturnType } from "../dom-helpers/use-ref-element";
import { useTextContent, UseTextContentParameters } from "../dom-helpers/use-text-content";
import { assertEmptyObject } from "../preact-extensions/use-managed-children";
import { OnPassiveStateChange, usePassiveState } from "../preact-extensions/use-passive-state";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useStableGetter, useStableObject } from "../preact-extensions/use-stable-getter";
import { useState } from "../preact-extensions/use-state";
import { UseRovingTabIndexChildParameters, UseRovingTabIndexReturnType } from "./use-roving-tabindex";

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
    value: number | null;
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
        // setTabbableIndex(navigateRelative((getTabbableIndex() ?? 0), +1), fromUserInteraction)
    });
    const navigateToPrev = useStableCallback((e: R, fromUserInteraction: boolean) => {
        return navigateRelative2(e, -1, fromUserInteraction, "single");
        // setTabbableIndex(navigateRelative((getTabbableIndex() ?? 0), +1), fromUserInteraction)
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
    target: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;

}

export function tryNavigateToIndex({ isValid, highestChildIndex: upper, searchDirection, indexDemangler, indexMangler, target }: TryNavigateToIndexParameters): LinearNavigationResult {
    //const upper = children.getHighestIndex();
    const lower = 0;

    if (searchDirection === -1) {
        while (target >= lower && !isValid(target))
            target = indexDemangler(indexMangler(target) - 1);

        return target < lower ? { value: indexDemangler(lower), status: "past-start" } : { value: target, status: "normal" };
    }
    else if (searchDirection === 1) {
        while (target <= upper && !isValid(target))
            target = indexDemangler(indexMangler(target) + 1);

        return target > upper ? { value: indexDemangler(upper), status: "past-end" } : { value: target, status: "normal" };
    }
    else {
        return { value: lower, status: "normal" };
    }
}



