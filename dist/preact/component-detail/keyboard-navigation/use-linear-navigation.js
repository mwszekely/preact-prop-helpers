import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { useCallback, useRef } from "../../util/lib.js";
import { useMonitoring } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
/**
 * When used in tandem with `useRovingTabIndex`, allows control of
 * the tabbable index with the arrow keys, Page Up/Page Down, or Home/End.
 *
 * @remarks There is no child version of this hook. That being said, the props returned are stable and work equally well on the child as the parent. If you don't have a parent `HTMLElement`, you can still pass the returned props to each child individually.
 *
 * @see {@link useCompleteListNavigation}, which packages everything up together.
 *
 * @compositeParams
 */
export function useLinearNavigation({ linearNavigationParameters: { isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 }, managedChildrenReturn: { getHighestChildIndex, getLowestChildIndex, ...void6 }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 }, paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 }, processedIndexManglerReturn: { indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, ...void3 }, ...void1 }) {
    return useMonitoring(function useLinearNavigation() {
        let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
        useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal);
        const navigateAbsolute = useCallback((requestedIndex, searchDirection, e, fromUserInteraction, mode) => {
            const highestChildIndex = getHighestChildIndex();
            const lowestChildIndex = getLowestChildIndex();
            const _original = (getTabbableIndex() ?? 0);
            const { status, valueRepositioned } = tryNavigateToIndex({ isValid: isValidForLinearNavigation, lowestChildIndex, highestChildIndex, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, searchDirection, targetDemangled: requestedIndex });
            const valueOriginal = valueRepositioned == null ? null : indexFromRepositionedToOriginal(valueRepositioned);
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
                        if (false && (valueOriginal == getTabbableIndex()))
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
                        if (false && valueOriginal == getTabbableIndex())
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
                setTabbableIndex(valueOriginal, e, fromUserInteraction);
                onNavigateLinear?.(valueOriginal, e);
                return "stop";
            }
        }, []);
        const navigateToFirst = useStableCallback((event, fromUserInteraction) => { return navigateAbsolute(indexFromRepositionedToOriginal(getLowestChildIndex()), -1, event, fromUserInteraction, "single"); });
        const navigateToLast = useStableCallback((event, fromUserInteraction) => { return navigateAbsolute(indexFromRepositionedToOriginal(getHighestChildIndex()), 1, event, fromUserInteraction, "single"); });
        const navigateRelative2 = useStableCallback((event, offset, fromUserInteraction, mode) => {
            const _highestChildIndex = getHighestChildIndex();
            const searchDirection = (Math.sign(offset) || 1);
            const original = (getTabbableIndex() ?? 0);
            /**
             * To get the target, we need to add (or subtract) 1 to our current value,
             * but it need to be relative to any sorting/rearranging that's happened.
             *
             * We mangle the index to get its "visual" position, add our offset,
             * and then demangle it to get the child that corresponds to the next child "visually".
             */
            const targetMangled = indexFromRepositionedToOriginal(indexFromOriginalToRepositioned(original) + offset);
            return navigateAbsolute(targetMangled, searchDirection, event, fromUserInteraction, mode);
        });
        const navigateToNext = useStableCallback((e, fromUserInteraction) => {
            return navigateRelative2(e, 1, fromUserInteraction, "single");
        });
        const navigateToPrev = useStableCallback((e, fromUserInteraction) => {
            return navigateRelative2(e, -1, fromUserInteraction, "single");
        });
        const stableProps = useRef(useTagProps({
            onKeyDown: useStableCallback((e) => {
                // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
                // TODO: ctrlKey was here too, but multi-selection uses that when in focus-selection mode.
                if (e.metaKey)
                    return;
                const allowsVerticalNavigation = (arrowKeyDirection == "vertical" || arrowKeyDirection == "either");
                const allowsHorizontalNavigation = (arrowKeyDirection == "horizontal" || arrowKeyDirection == "either");
                let childRange = (getHighestChildIndex() - getLowestChildIndex());
                let paginatedRange = getPaginatedRange() ?? childRange;
                let truePageNavigationSize = pageNavigationSize;
                if (truePageNavigationSize != null && truePageNavigationSize < 1) {
                    truePageNavigationSize = Math.round(truePageNavigationSize * Math.max(10, paginatedRange + 1));
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
                            if (truePageNavigationSize == null)
                                break;
                            else if (truePageNavigationSize > 0)
                                result = navigateRelative2(e, truePageNavigationSize * (e.key.endsWith('n') ? 1 : -1), true, "page");
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
            })
        }, "data-linear-navigation"));
        return {
            linearNavigationReturn: {},
            propsStable: stableProps.current
        };
    });
}
/**
 * #__NO_SIDE_EFFECTS__
 */
export function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled }) {
    if (searchDirection === -1) {
        let bestUpResult = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, lowestChildIndex });
        bestUpResult ??= tryNavigateDown({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, highestChildIndex });
        return bestUpResult || { valueRepositioned: indexFromOriginalToRepositioned(targetDemangled), status: "normal" };
    }
    else {
        let bestDownResult = undefined;
        bestDownResult = tryNavigateDown({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, highestChildIndex });
        bestDownResult ??= tryNavigateUp({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, lowestChildIndex });
        return bestDownResult || { valueRepositioned: indexFromOriginalToRepositioned(targetDemangled), status: "normal" };
    }
}
function tryNavigateUp({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, lowestChildIndex: lower, targetDemangled }) {
    while (targetDemangled >= lower && !isValid(targetDemangled)) {
        targetDemangled = indexFromRepositionedToOriginal(indexFromOriginalToRepositioned(targetDemangled) - 1);
    }
    if (targetDemangled < lower) {
        return { valueRepositioned: indexFromOriginalToRepositioned(lower), status: "past-start" };
    }
    else if (!isValid(targetDemangled)) {
        return undefined;
    }
    else {
        return { valueRepositioned: indexFromOriginalToRepositioned(targetDemangled), status: "normal" };
    }
}
function tryNavigateDown({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, highestChildIndex: upper }) {
    while (targetDemangled <= upper && !isValid(targetDemangled)) {
        targetDemangled = indexFromRepositionedToOriginal(indexFromOriginalToRepositioned(targetDemangled) + 1);
    }
    if (targetDemangled > upper) {
        return { valueRepositioned: indexFromOriginalToRepositioned(upper), status: "past-end" };
    }
    else if (!isValid(targetDemangled)) {
        return undefined;
    }
    else {
        return { valueRepositioned: indexFromOriginalToRepositioned(targetDemangled), status: "normal" };
    }
}
//# sourceMappingURL=use-linear-navigation.js.map