import { identity } from "lodash-es";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { EventType, useCallback, useRef } from "../../util/lib.js";
import { ElementProps, KeyboardEventType, Nullable, OmitStrong } from "../../util/types.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { PropNames_PaginatedParameters_paginationMax, PropNames_PaginatedParameters_paginationMin, UsePaginatedChildrenParametersSelf } from "../processed-children/use-paginated-children.js";
import { PropNames_RearrangeableReturn_indexDemangler, PropNames_RearrangeableReturn_indexMangler, UseRearrangeableChildrenReturnTypeSelf } from "../processed-children/use-rearrangeable-children.js";
import { PropNames_RovingTabIndexReturn_getTabbableIndex, PropNames_RovingTabIndexReturn_setTabbableIndex, UseRovingTabIndexReturnType } from "./use-roving-tabindex.js";
export { identity };

const P1 = `PropNames.LinearNavigationParameters`;
const P2 = `PropNames.LinearNavigationChildParameters`;
const R1 = `PropNames.LinearNavigationReturn`;
const R2 = `PropNames.LinearNavigationChildReturn`;

export const PropNames_LinearNavigationParameters_onNavigateLinear = `${P1}.onNavigateLinear`;
export const PropNames_LinearNavigationParameters_isValidForLinearNavigation = `${P1}.isValidForLinearNavigation`;
export const PropNames_LinearNavigationParameters_pageNavigationSize = `${P1}.pageNavigationSize`;
export const PropNames_LinearNavigationParameters_navigatePastStart = `${P1}.navigatePastStart`;
export const PropNames_LinearNavigationParameters_navigatePastEnd = `${P1}.navigatePastEnd`;
export const PropNames_LinearNavigationParameters_arrowKeyDirection = `${P1}.arrowKeyDirection`;
export const PropNames_LinearNavigationParameters_disableHomeEndKeys = `${P1}.disableHomeEndKeys`;
export const PropNames_LinearNavigationParameters_getHighestIndex = `${P1}.getHighestIndex`;
export const PropNames_LinearNavigationParameters_getLowestIndex = `${P1}.getLowestIndex`;
export const PropNames_LinearNavigationReturn_setTabbableIndex = `${P1}.setTabbableIndex`;
export const PropNames_LinearNavigationChildReturn_tabbable = `${P1}.tabbable`;


export interface LinearNavigationResult {
    valueDemangled: number | null;
    status: "normal" | "past-start" | "past-end"
}

export interface UseLinearNavigationReturnTypeSelf { }

export interface UseLinearNavigationReturnType<ParentOrChildElement extends Element> extends UseLinearNavigationReturnTypeSelf {
    props: ElementProps<ParentOrChildElement>;
}

//export interface UseLinearNavigationChildInfo { }

/** Arguments passed to the parent `useLinearNavigation` */
export interface UseLinearNavigationParameters<ParentOrChildElement extends Element, ChildElement extends Element> extends
    UseLinearNavigationParametersSelf<ChildElement>,
    Pick<UseRovingTabIndexReturnType<ParentOrChildElement, ChildElement>, typeof PropNames_RovingTabIndexReturn_getTabbableIndex | typeof PropNames_RovingTabIndexReturn_setTabbableIndex>,
    Pick<UseRearrangeableChildrenReturnTypeSelf<any>, typeof PropNames_RearrangeableReturn_indexMangler | typeof PropNames_RearrangeableReturn_indexDemangler>,
    Pick<UsePaginatedChildrenParametersSelf, typeof PropNames_PaginatedParameters_paginationMin | typeof PropNames_PaginatedParameters_paginationMax> {
}

export interface UseLinearNavigationParametersSelf<ChildElement extends Element> {

    /**
     * Called when a navigation change as a result of an arrow/home/end/page up/page down key being pressed.
     * 
     * @stable
     */
    [PropNames_LinearNavigationParameters_onNavigateLinear]: Nullable<(newIndex: number, event: KeyboardEventType<ChildElement>) => void>;

    /**
     * Must return true if the child at this index can be navigated to, e.g. `(i) => !getChildren(i)?.hidden`.
     * 
     * @stable
     */
    [PropNames_LinearNavigationParameters_isValidForLinearNavigation](i: number): boolean;

    /**
     * Controls how many elements are skipped over when page up/down are pressed.
     * 
     * ```md-literal
     * * When 0 or null: Page Up/Down are disabled
     * * When &gt;= 1: Page Up/Down moves that number of elements up or down
     * * When 0 &lt; x &lt; 1, Page Up/Down moves by that percentage of all elements, or of 100 elements, whichever is higher. In other words, 0.1 jumps by 10 elements when there are fewer then 100 elements, and 20 elements when there are 200 elements.
     * ```
     */
    [PropNames_LinearNavigationParameters_pageNavigationSize]: Nullable<number>;

    /**
     * What happens when `up` is pressed on the first valid child?
     * 
     * @remarks If it's `"wrap"`, the focus is sent down to the last child, and the event does not propagate. 
     * If it's a function, it's is called, and the event does not propagate.
     * If it's `"passthrough"`, nothing happens, **and the event is allowed to propagate**.
     */
    [PropNames_LinearNavigationParameters_navigatePastStart]: "passthrough" | "wrap" | (() => void);

    /**
     * What happens when `down` is pressed on the last valid child?
     * 
     * @see {@link UseLinearNavigationParametersSelf.navigatePastStart}
     */
    [PropNames_LinearNavigationParameters_navigatePastEnd]: "passthrough" | "wrap" | (() => void);

    /**
     * Controls which arrow keys are used to navigate through the component.
     * 
     * @remarks Not relative to the writing mode -- these are the literal keys that need to be pressed.
     * 
     * Use `"either"` to allow navigation in either direction.
     * 
     * Use `"none"` to disallow navigation with the arrow keys in any direction.
     */
    [PropNames_LinearNavigationParameters_arrowKeyDirection]: "horizontal" | "vertical" | "either" | "none";

    /**
     * If set to true, navigation with the home & end keys will
     * be disabled, but navigation with the arrow keys will be
     * unaffected.
     */
    [PropNames_LinearNavigationParameters_disableHomeEndKeys]: boolean;

    /**
     * When children are sorted, reversed, or otherwise out of order, `indexMangler` is given the `index` of a child and must return its "visual" index -- what its `index` would be at that position.
     * 
     * @remarks This is provided by {@link useRearrangeableChildren}.
     * If you use this hook as part of {@link useCompleteListNavigation} or {@link useCompleteGridNavigation}, then everything's already wired up and you don't need to worry about this. 
     * Otherwise, it's recommended to simply use {@link lodash-es#identity} here.
     * 
     * @stable
     */
    //indexMangler: (n: number) => number;

    /**
     * @see {@link UseLinearNavigationParametersSelf.indexMangler}, which does the opposite of this.
     * 
     * @stable
     */
    //indexDemangler: (n: number) => number;

    /**
     * From `useManagedChildren`. This can be higher than the *actual* highest index if you need it to be.
     * 
     * @returns [0, n], not [0, n)
     * 
     * @stable
     */
    [PropNames_LinearNavigationParameters_getHighestIndex](): number;
    /**
     * From `useManagedChildren`. This can be lower than the *actual* lowest index if you need it to be.
     * 
     * @see {@link UseLinearNavigationParametersSelf.getLowestIndex}
     * 
     * @stable
     */
    [PropNames_LinearNavigationParameters_getLowestIndex](): number;
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
export const useLinearNavigation = (function useLinearNavigation<ParentOrChildElement extends Element, ChildElement extends Element>({
    /*linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation, navigatePastEnd, navigatePastStart, onNavigateLinear, arrowKeyDirection, disableHomeEndKeys, pageNavigationSize, ...void4 },
    rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex, ...void5 },
    paginatedChildrenParameters: { paginationMax, paginationMin, ...void2 },
    rearrangeableChildrenReturn: { indexDemangler, indexMangler, ...void3 },*/
    [PropNames_LinearNavigationParameters_getLowestIndex]: getLowestIndex,
    [PropNames_LinearNavigationParameters_getHighestIndex]: getHighestIndex,
    [PropNames_LinearNavigationParameters_isValidForLinearNavigation]: isValidForLinearNavigation,
    [PropNames_LinearNavigationParameters_navigatePastEnd]: navigatePastEnd,
    [PropNames_LinearNavigationParameters_navigatePastStart]: navigatePastStart,
    [PropNames_LinearNavigationParameters_onNavigateLinear]: onNavigateLinear,
    [PropNames_LinearNavigationParameters_arrowKeyDirection]: arrowKeyDirection,
    [PropNames_LinearNavigationParameters_disableHomeEndKeys]: disableHomeEndKeys,
    [PropNames_LinearNavigationParameters_pageNavigationSize]: pageNavigationSize,
    [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex,
    [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
    [PropNames_PaginatedParameters_paginationMin]: paginationMin,
    [PropNames_PaginatedParameters_paginationMax]: paginationMax,
    [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
    [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
    ...void1
}: UseLinearNavigationParameters<ParentOrChildElement, ChildElement>): UseLinearNavigationReturnType<ParentOrChildElement> {
    type R = EventType<any, any>;

    let getPaginatedRange = useStableGetter(paginationMax == null || paginationMin == null ? null : paginationMax - paginationMin);

    assertEmptyObject(void1);


    useEnsureStability("useLinearNavigation", onNavigateLinear, isValidForLinearNavigation, indexDemangler, indexMangler);

    const navigateAbsolute = useCallback((requestedIndexMangled: number, searchDirection: -1 | 1, e: R, fromUserInteraction: boolean, mode: "page" | "single") => {
        const highestChildIndex = getHighestIndex();
        const lowestChildIndex = getLowestIndex();
        const original = (getTabbableIndex() ?? 0);

        const targetDemangled = indexDemangler(requestedIndexMangled);
        const { status, valueDemangled } = tryNavigateToIndex({ isValid: isValidForLinearNavigation, lowestChildIndex, highestChildIndex, indexDemangler, indexMangler, searchDirection, targetDemangled });
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
            onNavigateLinear?.(valueDemangled!, e as KeyboardEventType<ChildElement>);
            return "stop";
        }
    }, []);
    const navigateToFirst = useStableCallback((e: R, fromUserInteraction: boolean) => { return navigateAbsolute(getLowestIndex(), -1, e, fromUserInteraction, "single"); });
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
    //const getDisableHomeEndKeys = useStableGetter(disableHomeEndKeys);
    //const getArrowKeyDirection = useStableGetter(arrowKeyDirection);
    //const getPageNavigationSize = useStableGetter(pageNavigationSize);


    const stableProps = useRef<ElementProps<ParentOrChildElement>>(useTagProps({
        onKeyDown: useStableCallback((e) => {
            // Not handled by typeahead (i.e. assume this is a keyboard shortcut)
            // TODO: ctrlKey was here too, but multi-selection uses that when in focus-selection mode.
            if (e.metaKey)
                return;

            const allowsVerticalNavigation = (arrowKeyDirection == "vertical" || arrowKeyDirection == "either");
            const allowsHorizontalNavigation = (arrowKeyDirection == "horizontal" || arrowKeyDirection == "either");


            let childRange = (getHighestIndex() - getLowestIndex());
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
        props: stableProps.current
    }


})



export interface TryNavigateToIndexParameters {
    //children: ManagedChildren<number, unknown, K>;
    lowestChildIndex: number;
    highestChildIndex: number; // [0, n], not [0, n)
    isValid(index: number): boolean;

    //default: number;
    targetDemangled: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;

}

export function tryNavigateToIndex({ isValid, highestChildIndex, lowestChildIndex, searchDirection, indexDemangler, indexMangler, targetDemangled }: TryNavigateToIndexParameters): LinearNavigationResult {

    if (searchDirection === -1) {
        let bestUpResult: LinearNavigationResult | undefined = undefined;
        bestUpResult = tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
        bestUpResult ??= tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
        return bestUpResult || { valueDemangled: targetDemangled, status: "normal" };
    }
    else {
        let bestDownResult: LinearNavigationResult | undefined = undefined;
        bestDownResult = tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex });
        bestDownResult ??= tryNavigateUp({ isValid, indexDemangler, indexMangler, targetDemangled, lowestChildIndex });
        return bestDownResult || { valueDemangled: targetDemangled, status: "normal" };
    }
}

function tryNavigateUp({ isValid, indexDemangler, indexMangler, lowestChildIndex: lower, targetDemangled }: OmitStrong<TryNavigateToIndexParameters, "highestChildIndex" | "searchDirection">): LinearNavigationResult | undefined {

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

function tryNavigateDown({ isValid, indexDemangler, indexMangler, targetDemangled, highestChildIndex: upper }: OmitStrong<TryNavigateToIndexParameters, "lowestChildIndex" | "searchDirection">): LinearNavigationResult | undefined {

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



