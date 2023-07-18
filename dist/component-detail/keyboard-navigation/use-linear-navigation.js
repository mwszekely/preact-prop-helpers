import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useCallback, useRef } from "../../util/lib.js";
import { monitorCallCount } from "../../util/use-call-count.js";
/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys.
 *
 * @see useListNavigation, which packages everything up together.
 *
 * @hasChild {@link useLinearNavigationChild}
 *
 * @compositeParams
 */
export function useLinearNavigation({ rovingTabIndexReturn, linearNavigationParameters }) {
    monitorCallCount(useLinearNavigation);
    const { getLowestIndex, getHighestIndex, indexDemangler, indexMangler, isValid, navigatePastEnd, navigatePastStart, onNavigateLinear } = linearNavigationParameters;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    useEnsureStability("useLinearNavigation", onNavigateLinear);
    const navigateAbsolute = useCallback((requestedIndexMangled, searchDirection, e, fromUserInteraction, mode) => {
        const highestChildIndex = getHighestIndex();
        const lowestChildIndex = getLowestIndex();
        const original = (getTabbableIndex() ?? 0);
        const targetDemangled = indexDemangler(requestedIndexMangled);
        const { status, valueDemangled } = tryNavigateToIndex({ isValid, lowestChildIndex, highestChildIndex, indexDemangler, indexMangler, searchDirection, targetDemangled });
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
                    if (false && (valueDemangled == getTabbableIndex()))
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
                    if (false && valueDemangled == getTabbableIndex())
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
            setTabbableIndex(valueDemangled, e, fromUserInteraction);
            onNavigateLinear?.(valueDemangled, e);
            return "stop";
        }
    }, []);
    const navigateToFirst = useStableCallback((e, fromUserInteraction) => { return navigateAbsolute(getLowestIndex(), -1, e, fromUserInteraction, "single"); });
    const navigateToLast = useStableCallback((e, fromUserInteraction) => { return navigateAbsolute(getHighestIndex(), 1, e, fromUserInteraction, "single"); });
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
        const targetMangled = indexMangler(original) + offset;
        return navigateAbsolute(targetMangled, searchDirection, e, fromUserInteraction, mode);
    });
    const navigateToNext = useStableCallback((e, fromUserInteraction) => {
        return navigateRelative2(e, 1, fromUserInteraction, "single");
    });
    const navigateToPrev = useStableCallback((e, fromUserInteraction) => {
        return navigateRelative2(e, -1, fromUserInteraction, "single");
    });
    const getDisableHomeEndKeys = useStableGetter(linearNavigationParameters.disableHomeEndKeys);
    const getArrowKeyDirection = useStableGetter(linearNavigationParameters.arrowKeyDirection);
    const getPageNavigationSize = useStableGetter(linearNavigationParameters.pageNavigationSize);
    const stableProps = useRef({
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
                truePageNavigationSize = Math.round(pageNavigationSize * Math.max(100, (getHighestIndex() - getLowestIndex()) + 1));
            }
            let result = "passthrough";
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
                            result = navigateRelative2(e, truePageNavigationSize * (e.key.endsWith('n') ? 1 : -1), true, "page");
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
    });
    return {
        linearNavigationReturn: {},
        propsStable: stableProps.current
    };
}
export function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }) {
    if (searchDirection === -1) {
        let bestUpResult = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
        bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
        return bestUpResult || { valueDemangled: targetDemangled, status: "normal" };
    }
    else {
        let bestDownResult = undefined;
        bestDownResult = tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
        bestDownResult ??= tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
        return bestDownResult || { valueDemangled: targetDemangled, status: "normal" };
    }
}
function tryNavigateUp({ isValid, indexDemangler, indexMangler, lowestChildIndex: lower, targetDemangled }) {
    while (targetDemangled >= lower && !isValid(targetDemangled)) {
        targetDemangled = indexDemangler(indexMangler(targetDemangled) - 1);
    }
    if (!isValid(targetDemangled)) {
        return undefined;
    }
    if (targetDemangled < lower) {
        return { valueDemangled: indexDemangler(lower), status: "past-start" };
    }
    else {
        return { valueDemangled: targetDemangled, status: "normal" };
    }
}
function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex: upper }) {
    while (targetDemangled <= upper && !isValid(targetDemangled)) {
        targetDemangled = indexDemangler(indexMangler(targetDemangled) + 1);
    }
    if (!isValid(targetDemangled)) {
        return undefined;
    }
    if (targetDemangled > upper) {
        return { valueDemangled: indexDemangler(upper), status: "past-end" };
    }
    else {
        return { valueDemangled: targetDemangled, status: "normal" };
    }
}
//# sourceMappingURL=use-linear-navigation.js.map