import { useCallback, useRef } from "preact/hooks";
import { ManagedChildInfo } from "../../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { ElementProps, OmitStrong } from "../../util/types.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";

export interface LinearNavigationResult {
    valueUnmangled: number | null;
    status: "normal" | "past-start" | "past-end"
}


export interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> {
    linearNavigationReturn: {}
    propsStable: ElementProps<ParentOrChildElement>;
}

export interface UseLinearNavigationChildInfo<ChildElement extends Element> extends ManagedChildInfo<number> {}

/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, _M extends UseLinearNavigationChildInfo<ChildElement>> {

    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement, UseRovingTabIndexChildInfo<ChildElement>>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">;

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
        arrowKeyDirection: "horizontal" | "vertical" | "either" | "none";

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
export function useLinearNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseLinearNavigationChildInfo<ChildElement>>({
    rovingTabIndexReturn,
    linearNavigationParameters
}: UseLinearNavigationParameters<ParentOrChildElement, ChildElement, M>): UseLinearNavigationReturnType<ParentOrChildElement> {
    monitorCallCount(useLinearNavigation);

    type R = Event;
    const { getHighestIndex, indexDemangler, indexMangler, isValid, navigatePastEnd, navigatePastStart } = linearNavigationParameters;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;

    const navigateAbsolute = useCallback((requestedIndexMangled: number, searchDirection: -1 | 1, e: R, fromUserInteraction: boolean, mode: "page" | "single") => {
        //const targetUnmangled = indexDemangler(requestedIndexMangled);
        //const { valueUnmangled } = tryNavigateToIndex({ isValid, highestChildIndex: getHighestIndex(), indexDemangler, indexMangler, searchDirection: -1, targetUnmangled });
        //setTabbableIndex(valueUnmangled, e, fromUserInteraction);
        const highestChildIndex = getHighestIndex();
        const original = (getTabbableIndex() ?? 0);

        const targetUnmangled = indexDemangler(requestedIndexMangled);
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
    }, []);
    const navigateToFirst = useStableCallback((e: R, fromUserInteraction: boolean) => { return navigateAbsolute(0, -1, e, fromUserInteraction, "single"); });
    const navigateToLast = useStableCallback((e: R, fromUserInteraction: boolean) => { return navigateAbsolute(getHighestIndex(), 1, e, fromUserInteraction, "single"); });
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
        const targetMangled = indexMangler(original) + offset;
        return navigateAbsolute(targetMangled, searchDirection, e, fromUserInteraction, mode);
    })
    const navigateToNext = useStableCallback((e: R, fromUserInteraction: boolean) => {
        return navigateRelative2(e, 1, fromUserInteraction, "single");
    });
    const navigateToPrev = useStableCallback((e: R, fromUserInteraction: boolean) => {
        return navigateRelative2(e, -1, fromUserInteraction, "single");
    });
    const getDisableHomeEndKeys = useStableGetter(linearNavigationParameters.disableHomeEndKeys);
    const getArrowKeyDirection = useStableGetter(linearNavigationParameters.arrowKeyDirection);
    const getPageNavigationSize = useStableGetter(linearNavigationParameters.pageNavigationSize);


    const stableProps = useRef<ElementProps<ParentOrChildElement>>({
        onKeyDown: (e) => {
            // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
            if (e.ctrlKey || e.metaKey)
                return;

            //const info = getLogicalDirectionInfo();
            const arrowKeyDirection = getArrowKeyDirection();
            const disableHomeEndKeys = getDisableHomeEndKeys();
            const pageNavigationSize = getPageNavigationSize();

            const allowsVerticalNavigation = (arrowKeyDirection == "vertical" || arrowKeyDirection == "either");
            const allowsHorizontalNavigation = (arrowKeyDirection == "horizontal" || arrowKeyDirection == "either");

            let truePageNavigationSize = pageNavigationSize;
            if (truePageNavigationSize < 1) {
                truePageNavigationSize = Math.round(pageNavigationSize * Math.max(100, getHighestIndex() + 1));
            }

            let result: "passthrough" | "stop" = "passthrough";

            // Arrow keys only take effect for components oriented in that direction,
            // so we want to make sure we only listen for left/right or up/down when appropriate.
            let keyPressIsValidForOrientation = true;
            switch (e.key) {
                case "ArrowUp":
                case "ArrowDown":
                    keyPressIsValidForOrientation = (allowsVerticalNavigation);
                    break;
                case "ArrowLeft":
                case "ArrowRight":
                    keyPressIsValidForOrientation = (allowsHorizontalNavigation);
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
                            result = navigateRelative2(e, truePageNavigationSize * (e.key.endsWith('n') ? -1 : 1), true, "page");
                        }
                        break;

                    case "Home":
                    case "End":
                        if (!disableHomeEndKeys) {
                            if (e.key.endsWith('e'))
                                navigateToFirst(e, true);
                            else
                                navigateToLast(e, true);
                            result = 'stop';
                        }
                        break;
                }
            }

            if (result && result != 'passthrough') {
                e.preventDefault();
                e.stopPropagation();
            }
        }
    })


    return {
        linearNavigationReturn: {},
        propsStable: stableProps.current
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



