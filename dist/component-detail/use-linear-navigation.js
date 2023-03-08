import { useCallback, useRef } from "preact/hooks";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../preact-extensions/use-stable-getter.js";
/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys.
 *
 * @see useListNavigation, which packages everything up together.
 */
export function useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters }) {
    const { getHighestIndex, indexDemangler, indexMangler, isValid, navigatePastEnd, navigatePastStart } = linearNavigationParameters;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    const navigateAbsolute = useCallback((i, e, fromUserInteraction) => {
        const targetUnmangled = indexDemangler(i);
        const { valueUnmangled } = tryNavigateToIndex({ isValid, highestChildIndex: getHighestIndex(), indexDemangler, indexMangler, searchDirection: -1, targetUnmangled });
        setTabbableIndex(valueUnmangled, e, fromUserInteraction);
    }, []);
    const navigateToFirst = useStableCallback((e, fromUserInteraction) => { navigateAbsolute(0, e, fromUserInteraction); });
    const navigateToLast = useStableCallback((e, fromUserInteraction) => { navigateAbsolute(getHighestIndex(), e, fromUserInteraction); });
    const navigateRelative2 = useStableCallback((e, offset, fromUserInteraction, mode) => {
        const highestChildIndex = getHighestIndex();
        const searchDirection = (Math.sign(offset) || 1);
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
    });
    const navigateToNext = useStableCallback((e, fromUserInteraction) => {
        return navigateRelative2(e, 1, fromUserInteraction, "single");
    });
    const navigateToPrev = useStableCallback((e, fromUserInteraction) => {
        return navigateRelative2(e, -1, fromUserInteraction, "single");
    });
    const getDisableArrowKeys = useStableGetter(linearNavigationParameters.disableArrowKeys);
    const getDisableHomeEndKeys = useStableGetter(linearNavigationParameters.disableHomeEndKeys);
    const getNavigationDirection = useStableGetter(linearNavigationParameters.navigationDirection);
    const getPageNavigationSize = useStableGetter(linearNavigationParameters.pageNavigationSize);
    const stableProps = useRef({
        onKeyDown: (e) => {
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
            let result = null;
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
            if (result && result != 'passthrough') {
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
    });
    return {
        linearNavigationReturn: {
            propsStable: stableProps.current
        }
    };
}
export function tryNavigateToIndex({ isValid, highestChildIndex, searchDirection, indexDemangler, indexMangler, targetUnmangled }) {
    if (searchDirection === -1) {
        let bestUpResult = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, targetUnmangled });
        bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, targetUnmangled, highestChildIndex });
        return bestUpResult || { valueUnmangled: targetUnmangled, status: "normal" };
    }
    else {
        let bestDownResult = undefined;
        bestDownResult = tryNavigateDown({ isValid, indexDemangler, indexMangler, targetUnmangled, highestChildIndex });
        bestDownResult ??= tryNavigateUp({ isValid, indexDemangler, indexMangler, targetUnmangled });
        return bestDownResult || { valueUnmangled: targetUnmangled, status: "normal" };
    }
}
function tryNavigateUp({ isValid, indexDemangler, indexMangler, targetUnmangled }) {
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
function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetUnmangled, highestChildIndex: upper }) {
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
//# sourceMappingURL=use-linear-navigation.js.map