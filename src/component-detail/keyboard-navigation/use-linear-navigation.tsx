import { ManagedChildInfo, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { EventType, TargetedPick, useCallback, useRef } from "../../util/lib.js";
import { ElementProps, KeyboardEventType, Nullable, OmitStrong } from "../../util/types.js";
import { useMonitoring } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { UsePaginatedChildrenParameters } from "../processed-children/use-paginated-children.js";
import { OriginalIndex, RepositionedIndex, UseProcessedIndexManglerReturnType } from "../processed-children/use-processed-index-mangler.js";
import { UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";

export interface LinearNavigationResult {
    valueRepositioned: RepositionedIndex | null;
    status: "normal" | "past-start" | "past-end"
}

/* eslint-disable @typescript-eslint/no-empty-interface */
export interface UseLinearNavigationReturnTypeSelf { }

export interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> {
    linearNavigationReturn: UseLinearNavigationReturnTypeSelf;
    propsStable: ElementProps<ParentOrChildElement>;
}

//export interface UseLinearNavigationChildInfo { }

/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends ManagedChildInfo> extends
    TargetedPick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, "rovingTabIndexReturn", "getTabbableIndex" | "setTabbableIndex">,
    TargetedPick<UseProcessedIndexManglerReturnType, "processedIndexManglerReturn", "indexFromRepositionedToOriginal" | "indexFromOriginalToRepositioned">,
    TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getHighestChildIndex" | "getLowestChildIndex">,
    TargetedPick<UsePaginatedChildrenParameters<ChildElement>, "paginatedChildrenParameters", "paginationMin" | "paginationMax"> {
    linearNavigationParameters: UseLinearNavigationParametersSelf<ChildElement>;
}

export interface UseLinearNavigationParametersSelf<ChildElement extends Element> {

    /**
     * Called when a navigation change as a result of an arrow/home/end/page up/page down key being pressed.
     * 
     * @stable
     */
    onNavigateLinear: Nullable<(newIndex: OriginalIndex, event: KeyboardEventType<ChildElement>) => void>;

    /**
     * Must return true if the child at this index can be navigated to, e.g. `(i) => !getChildren(i)?.hidden`.
     * 
     * @stable
     */
    isValidForLinearNavigation(i: OriginalIndex): boolean;

    /**
     * Controls how many elements are skipped over when page up/down are pressed.
     * 
     * ```md-literal
     * * When 0 or null: Page Up/Down are disabled
     * * When &gt;= 1: Page Up/Down moves that number of elements up or down
     * * When 0 &lt; x &lt; 1, Page Up/Down moves by that percentage of all elements, or of 100 elements, whichever is higher. In other words, 0.1 jumps by 10 elements when there are fewer then 100 elements, and 20 elements when there are 200 elements.
     * ```
     */
    pageNavigationSize: Nullable<number>;

    /**
     * What happens when `up` is pressed on the first valid child?
     * 
     * @remarks If it's `"wrap"`, the focus is sent down to the last child, and the event does not propagate. 
     * If it's a function, it's is called, and the event does not propagate.
     * If it's `"passthrough"`, nothing happens, **and the event is allowed to propagate**.
     */
    navigatePastStart: "passthrough" | "wrap" | (() => void);

    /**
     * What happens when `down` is pressed on the last valid child?
     * 
     * @see {@link UseLinearNavigationParametersSelf.navigatePastStart}
     */
    navigatePastEnd: "passthrough" | "wrap" | (() => void);

    /**
     * Controls which arrow keys are used to navigate through the component.
     * 
     * @remarks Not relative to the writing mode -- these are the literal keys that need to be pressed.
     * 
     * Use `"either"` to allow navigation in either direction.
     * 
     * Use `"none"` to disallow navigation with the arrow keys in any direction.
     */
    arrowKeyDirection: "horizontal" | "vertical" | "either" | "none";

    /**
     * If set to true, navigation with the home & end keys will
     * be disabled, but navigation with the arrow keys will be
     * unaffected.
     */
    disableHomeEndKeys: boolean;

}


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
export function useLinearNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends ManagedChildInfo>({
    linearNavigationParameters: { isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 },
    managedChildrenReturn: { getHighestChildIndex, getLowestChildIndex, ...void6 },
    rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 },
    paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 },
    processedIndexManglerReturn: { indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, ...void3 },
    ...void1
}: UseLinearNavigationParameters<ParentOrChildElement, ChildElement, M>): UseLinearNavigationReturnType<ParentOrChildElement> {
    return useMonitoring(function useLinearNavigation(): UseLinearNavigationReturnType<ParentOrChildElement> {
        type R = EventType<any, any>;

        let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);

        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);


        useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal);

        const navigateAbsolute = useCallback((requestedIndex: OriginalIndex, searchDirection: -1 | 1, e: R, fromUserInteraction: boolean, mode: "page" | "single") => {

            
            const highestChildIndex = getHighestChildIndex();
            const lowestChildIndex = getLowestChildIndex();
            const _original = (getTabbableIndex() ?? 0);

            const { status, valueRepositioned } = tryNavigateToIndex({ isValid: isValidForLinearNavigation, lowestChildIndex, highestChildIndex, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, searchDirection, targetDemangled: requestedIndex });
            const valueOriginal = valueRepositioned == null? null : indexFromRepositionedToOriginal(valueRepositioned);
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
                onNavigateLinear?.(valueOriginal!, e as KeyboardEventType<ChildElement>);
                return "stop";
            }
        }, []);
        const navigateToFirst = useStableCallback((event: R, fromUserInteraction: boolean) => { return navigateAbsolute(indexFromRepositionedToOriginal(getLowestChildIndex() as number as RepositionedIndex), -1, event, fromUserInteraction, "single"); });
        const navigateToLast = useStableCallback((event: R, fromUserInteraction: boolean) => { return navigateAbsolute(indexFromRepositionedToOriginal(getHighestChildIndex() as number as RepositionedIndex), 1, event, fromUserInteraction, "single"); });
        const navigateRelative2 = useStableCallback((event: R, offset: number, fromUserInteraction: boolean, mode: "page" | "single"): "passthrough" | "stop" => {
            const _highestChildIndex = getHighestChildIndex();
            const searchDirection = (Math.sign(offset) || 1) as 1 | -1;
            const original = (getTabbableIndex() ?? (0 as never));
            /**
             * To get the target, we need to add (or subtract) 1 to our current value,
             * but it need to be relative to any sorting/rearranging that's happened.
             * 
             * We mangle the index to get its "visual" position, add our offset,
             * and then demangle it to get the child that corresponds to the next child "visually".
             */
            const targetMangled = indexFromRepositionedToOriginal(indexFromOriginalToRepositioned(original) + offset as RepositionedIndex);
            return navigateAbsolute(targetMangled, searchDirection, event, fromUserInteraction, mode);
        })
        const navigateToNext = useStableCallback((e: R, fromUserInteraction: boolean) => {
            return navigateRelative2(e, 1, fromUserInteraction, "single");
        });
        const navigateToPrev = useStableCallback((e: R, fromUserInteraction: boolean) => {
            return navigateRelative2(e, -1, fromUserInteraction, "single");
        });


        const stableProps = useRef<ElementProps<ParentOrChildElement>>(useTagProps({
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
        }, "data-linear-navigation"))


        return {
            linearNavigationReturn: {},
            propsStable: stableProps.current
        }
    });
}



export interface TryNavigateToIndexParameters {
    //children: ManagedChildren<number, unknown, K>;
    lowestChildIndex: number;
    highestChildIndex: number; // [0, n], not [0, n)
    isValid(index: number): boolean;

    //default: number;
    targetDemangled: OriginalIndex;
    searchDirection: 1 | -1;
    indexFromRepositionedToOriginal: (n: RepositionedIndex) => OriginalIndex;
    indexFromOriginalToRepositioned: (n: OriginalIndex) => RepositionedIndex;

}
/**
 * #__NO_SIDE_EFFECTS__
 */
export function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled }: TryNavigateToIndexParameters): LinearNavigationResult {

    if (searchDirection === -1) {
        let bestUpResult: LinearNavigationResult | undefined = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, lowestChildIndex });
        bestUpResult ??= tryNavigateDown({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, highestChildIndex });
        return bestUpResult || { valueRepositioned: indexFromOriginalToRepositioned(targetDemangled), status: "normal" };
    }
    else {
        let bestDownResult: LinearNavigationResult | undefined = undefined;
        bestDownResult = tryNavigateDown({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, highestChildIndex });
        bestDownResult ??= tryNavigateUp({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, lowestChildIndex });
        return bestDownResult || { valueRepositioned: indexFromOriginalToRepositioned(targetDemangled), status: "normal" };
    }
}

function tryNavigateUp({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, lowestChildIndex: lower, targetDemangled }: OmitStrong<TryNavigateToIndexParameters, "highestChildIndex" | "searchDirection">): LinearNavigationResult | undefined {

    while (targetDemangled >= lower && !isValid(targetDemangled)) {
        targetDemangled = indexFromRepositionedToOriginal(indexFromOriginalToRepositioned(targetDemangled) - 1 as RepositionedIndex);
    }

    if (targetDemangled < lower) {
        return { valueRepositioned: indexFromOriginalToRepositioned(lower as OriginalIndex), status: "past-start" };
    }
    else if (!isValid(targetDemangled)) {
        return undefined;
    }
    else {
        return { valueRepositioned: indexFromOriginalToRepositioned(targetDemangled), status: "normal" };
    }
}

function tryNavigateDown({ isValid, indexFromOriginalToRepositioned, indexFromRepositionedToOriginal, targetDemangled, highestChildIndex: upper }: OmitStrong<TryNavigateToIndexParameters, "lowestChildIndex" | "searchDirection">): LinearNavigationResult | undefined {

    while (targetDemangled <= upper && !isValid(targetDemangled)) {
        targetDemangled = indexFromRepositionedToOriginal(indexFromOriginalToRepositioned(targetDemangled) + 1 as RepositionedIndex);
    }

    if (targetDemangled > upper) {
        return { valueRepositioned: indexFromOriginalToRepositioned(upper as OriginalIndex), status: "past-end" };
    }
    else if (!isValid(targetDemangled)) {
        return undefined;
    }
    else {
        return { valueRepositioned: indexFromOriginalToRepositioned(targetDemangled), status: "normal" };
    }
}



