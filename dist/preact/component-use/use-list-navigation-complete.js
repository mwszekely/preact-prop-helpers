import { $getHighestIndex, $getLowestIndex, $isValidForLinearNavigation, $linearNavigationParameters, $linearNavigationReturn } from "../component-detail/keyboard-navigation/use-linear-navigation.js";
import { $focusSelfChild, $untabbable, $untabbableBehavior, $getTabbableIndex, $setTabbableIndex, $rovingTabIndexChildReturn, $rovingTabIndexContext, $rovingTabIndexParameters, $rovingTabIndexReturn } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { $isValidForTypeaheadNavigation, $typeaheadNavigationContext, $typeaheadNavigationParameters, $typeaheadNavigationReturn } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { $paginatedChildrenParameters, $paginatedChildrenReturn } from "../component-detail/processed-children/use-paginated-children.js";
import { $processedChildrenContext, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { $indexDemangler, $indexMangler, $rearrange, $reverse, $shuffle, $sort, $rearrangeableChildrenParameters, $rearrangeableChildrenReturn, useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { $staggeredChildrenParameters, $staggeredChildrenReturn } from "../component-detail/processed-children/use-staggered-children.js";
import { $initiallyMultiSelected, $multiSelected, $onMultiSelectChange, $onMultiSelectedChange, $changeMultiSelected, $multiSelectionChildDeclarativeParameters, $multiSelectionChildParameters, $multiSelectionChildReturn, $multiSelectionContext, $multiSelectionParameters, $multiSelectionReturn } from "../component-detail/selection/use-multi-selection.js";
import { useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { $initiallySingleSelectedIndex, $onSingleSelectedIndexChange, $singleSelectedIndex, $getSingleSelectedIndex, $singleSelectionChildParameters, $singleSelectionChildReturn, $singleSelectionContext, $singleSelectionDeclarativeParameters, $singleSelectionParameters, $singleSelectionReturn } from "../component-detail/selection/use-single-selection.js";
import { useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { $getElement, $refElementParameters, $refElementReturn, useRefElement } from "../dom-helpers/use-ref-element.js";
import { $getText, $onTextContentChange, $textContentParameters, $textContentReturn, useTextContent } from "../dom-helpers/use-text-content.js";
import { $getAnyFocused, $childrenHaveFocusChildContext, $childrenHaveFocusParameters, $childrenHaveFocusReturn, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { $hasCurrentFocusParameters, $hasCurrentFocusReturn, $onCurrentFocusedChanged, $onCurrentFocusedInnerChanged, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { $index, $onChildrenMountChange, $getChildren, $managedChildContext, $managedChildReturn, $managedChildrenParameters, $managedChildrenReturn, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
import { $excludeSpace, $onPressSync, $pressParameters } from "./use-press.js";
/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 * @hasChild {@link useCompleteListNavigationChild}
 *
 * @compositeParams
 */
export const useCompleteListNavigation = monitored(function useCompleteListNavigation({ [$linearNavigationParameters]: linearNavigationParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$singleSelectionParameters]: singleSelectionParameters, [$multiSelectionParameters]: multiSelectionParameters, [$refElementParameters]: refElementParameters, [$paginatedChildrenParameters]: paginatedChildrenParameters, 
//staggeredChildrenParameters,
...void1 }) {
    const getChildren = useCallback(() => managedChildrenReturn[$getChildren](), []);
    const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child[$untabbable])
            return false;
        return true;
    }, []);
    const { propsStable: propsRef, [$refElementReturn]: refElementReturn } = useRefElement({ [$refElementParameters]: refElementParameters });
    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, [$indexDemangler]: indexDemangler, [$indexMangler]: indexMangler, [$rearrange]: rearrange, [$reverse]: reverse, [$shuffle]: shuffle, [$sort]: sort } = useCreateProcessedChildrenContext();
    const { [$childrenHaveFocusParameters]: childrenHaveFocusParameters, [$managedChildrenParameters]: { [$onChildrenMountChange]: onChildrenMountChange, ...mcp1 }, context: { [$rovingTabIndexContext]: rovingTabIndexContext, [$singleSelectionContext]: singleSelectionContext, [$multiSelectionContext]: multiSelectionContext, [$typeaheadNavigationContext]: typeaheadNavigationContext }, [$linearNavigationReturn]: linearNavigationReturn, [$rovingTabIndexReturn]: rovingTabIndexReturn, [$singleSelectionReturn]: singleSelectionReturn, [$multiSelectionReturn]: multiSelectionReturn, [$typeaheadNavigationReturn]: typeaheadNavigationReturn, props, ...void2 } = useListNavigationSelection({
        [$managedChildrenReturn]: { [$getChildren]: getChildren },
        [$linearNavigationParameters]: { [$getLowestIndex]: getLowestIndex, [$getHighestIndex]: getHighestIndex, [$isValidForLinearNavigation]: isValidForNavigation, ...linearNavigationParameters },
        [$typeaheadNavigationParameters]: { [$isValidForTypeaheadNavigation]: isValidForNavigation, ...typeaheadNavigationParameters },
        [$rovingTabIndexParameters]: { [$untabbableBehavior]: "focus-parent", ...rovingTabIndexParameters },
        [$singleSelectionParameters]: singleSelectionParameters,
        [$multiSelectionParameters]: multiSelectionParameters,
        [$refElementReturn]: refElementReturn,
        [$paginatedChildrenParameters]: paginatedChildrenParameters,
        [$childrenHaveFocusReturn]: { [$getAnyFocused]: useStableCallback(() => childrenHaveFocusReturn[$getAnyFocused]()) },
        [$rearrangeableChildrenReturn]: { [$indexDemangler]: indexDemangler, [$indexMangler]: indexMangler }
    });
    const { context: { [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext }, [$childrenHaveFocusReturn]: childrenHaveFocusReturn } = useChildrenHaveFocus({ [$childrenHaveFocusParameters]: childrenHaveFocusParameters });
    const mcr = useManagedChildren({
        [$managedChildrenParameters]: {
            [$onChildrenMountChange]: onChildrenMountChange,
            ...mcp1
        }
    });
    const { context: { [$managedChildContext]: managedChildRTIContext }, [$managedChildrenReturn]: managedChildrenReturn } = mcr;
    const { [$getTabbableIndex]: getTabbableIndex, [$setTabbableIndex]: setTabbableIndex } = rovingTabIndexReturn;
    const { [$getAnyFocused]: getAnyFocused } = childrenHaveFocusReturn;
    const contextChildren = useMemoObject({
        [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext,
        [$rovingTabIndexContext]: rovingTabIndexContext,
        [$singleSelectionContext]: singleSelectionContext,
        [$multiSelectionContext]: multiSelectionContext,
        [$typeaheadNavigationContext]: typeaheadNavigationContext,
        [$managedChildContext]: managedChildRTIContext,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const processedChildrenContext = useMemoObject({ [$getTabbableIndex]: getTabbableIndex, [$setTabbableIndex]: setTabbableIndex, [$getAnyFocused]: getAnyFocused /*, [RgetElement]: refElementReturn[RgetElement]*/ });
    return {
        contextChildren,
        contextProcessing: useMemoObject({
            [$processedChildrenContext]: processedChildrenContext,
            ...contextProcessing
        }),
        props: useMergedProps(props, propsRef),
        [$managedChildrenReturn]: managedChildrenReturn,
        [$linearNavigationReturn]: linearNavigationReturn,
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        [$singleSelectionReturn]: singleSelectionReturn,
        [$multiSelectionReturn]: multiSelectionReturn,
        [$typeaheadNavigationReturn]: typeaheadNavigationReturn,
        [$refElementReturn]: refElementReturn,
        [$childrenHaveFocusReturn]: childrenHaveFocusReturn,
        [$rearrangeableChildrenReturn]: { [$reverse]: reverse, [$shuffle]: shuffle, [$rearrange]: rearrange, [$sort]: sort },
    };
});
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export const useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren({ context, [$rearrangeableChildrenParameters]: rearrangeableChildrenParameters, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$staggeredChildrenParameters]: staggeredChildrenParameters, [$managedChildrenParameters]: managedChildrenParameters }) {
    const { context: contextRPS, [$paginatedChildrenReturn]: paginatedChildrenReturn, [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn, [$staggeredChildrenReturn]: staggeredChildrenReturn, } = useProcessedChildren({
        [$managedChildrenParameters]: managedChildrenParameters,
        [$paginatedChildrenParameters]: paginatedChildrenParameters,
        [$staggeredChildrenParameters]: staggeredChildrenParameters,
        [$rearrangeableChildrenParameters]: rearrangeableChildrenParameters,
        context,
    });
    return {
        context: contextRPS,
        [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn,
        [$paginatedChildrenReturn]: paginatedChildrenReturn,
        [$staggeredChildrenReturn]: staggeredChildrenReturn,
    };
});
/**
 *
 * @compositeParams
 */
export const useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild({ info: { [$index]: index, [$focusSelfChild]: focusSelf, [$untabbable]: untabbable, ...customUserInfo }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
[$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: otcc1, ...void10 }, [$refElementParameters]: refElementParameters, [$hasCurrentFocusParameters]: { [$onCurrentFocusedChanged]: onCurrentFocusedChanged, [$onCurrentFocusedInnerChanged]: ocfic3, ...void7 }, [$singleSelectionChildParameters]: singleSelectionChildParameters, [$multiSelectionChildParameters]: multiSelectionChildParameters, context: { [$managedChildContext]: managedChildContext, [$rovingTabIndexContext]: rovingTabIndexContext, [$singleSelectionContext]: singleSelectionContext, [$multiSelectionContext]: multiSelectionContext, [$typeaheadNavigationContext]: typeaheadNavigationContext, [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext, ...void5 }, ...void1 }) {
    const { [$refElementReturn]: refElementReturn, propsStable, ...void6 } = useRefElement({ [$refElementParameters]: refElementParameters });
    const { [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic1, ...void3 }, [$pressParameters]: { [$excludeSpace]: excludeSpace, [$onPressSync]: onPressSync, ...void2 }, [$textContentParameters]: { [$onTextContentChange]: otcc2, ...void8 }, info: infoFromListNav, [$singleSelectionChildReturn]: singleSelectionChildReturn, [$multiSelectionChildReturn]: multiSelectionChildReturn, [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn, propsChild, propsTabbable, ...void4 } = useListNavigationSelectionChild({
        info: { [$index]: index, [$untabbable]: untabbable },
        context: { [$rovingTabIndexContext]: rovingTabIndexContext, [$singleSelectionContext]: singleSelectionContext, [$multiSelectionContext]: multiSelectionContext, [$typeaheadNavigationContext]: typeaheadNavigationContext },
        [$singleSelectionChildParameters]: singleSelectionChildParameters,
        [$multiSelectionChildParameters]: multiSelectionChildParameters,
        [$refElementReturn]: refElementReturn
    });
    const { [$textContentReturn]: textContentReturn, ...void9 } = useTextContent({ [$refElementReturn]: refElementReturn, [$textContentParameters]: { [$getText]: getText, [$onTextContentChange]: useStableMergedCallback(otcc1, otcc2) } });
    const allStandardInfo = {
        [$index]: index,
        [$focusSelfChild]: focusSelf,
        [$getElement]: refElementReturn[$getElement],
        [$untabbable]: untabbable,
        ...infoFromListNav,
    };
    const { [$managedChildReturn]: managedChildReturn } = useManagedChild({ context: { [$managedChildContext]: managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
    const { [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic2 } } = useChildrenHaveFocusChild({ context: { [$childrenHaveFocusChildContext]: childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableMergedCallback(ocfic1, ocfic2, ocfic3);
    const { [$hasCurrentFocusReturn]: hasCurrentFocusReturn } = useHasCurrentFocus({
        [$hasCurrentFocusParameters]: {
            [$onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
            [$onCurrentFocusedChanged]: onCurrentFocusedChanged
        },
        [$refElementReturn]: refElementReturn
    });
    const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    assertEmptyObject(void10);
    return {
        propsChild: props,
        propsTabbable,
        [$pressParameters]: {
            [$onPressSync]: onPressSync,
            [$excludeSpace]: excludeSpace
        },
        [$textContentReturn]: textContentReturn,
        [$hasCurrentFocusReturn]: hasCurrentFocusReturn,
        [$refElementReturn]: refElementReturn,
        [$singleSelectionChildReturn]: singleSelectionChildReturn,
        [$multiSelectionChildReturn]: multiSelectionChildReturn,
        [$managedChildReturn]: managedChildReturn,
        [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn
    };
});
export function useCompleteListNavigationDeclarative({ [$singleSelectionParameters]: singleSelectionParameters, [$singleSelectionDeclarativeParameters]: singleSelectionDeclarativeParameters, ...rest }) {
    const ret = useCompleteListNavigation({
        [$singleSelectionParameters]: {
            [$initiallySingleSelectedIndex]: singleSelectionDeclarativeParameters[$singleSelectedIndex],
            // Needs to be a (stable) callback because of declaration order
            [$onSingleSelectedIndexChange]: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...rest
    });
    const { [$singleSelectionParameters]: { [$onSingleSelectedIndexChange]: onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({ [$singleSelectionDeclarativeParameters]: singleSelectionDeclarativeParameters, [$singleSelectionReturn]: ret[$singleSelectionReturn] });
    const { [$singleSelectionReturn]: { [$getSingleSelectedIndex]: getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return { ...ret2, [$singleSelectionReturn]: { [$getSingleSelectedIndex]: getSingleSelectedIndex } };
}
export function useCompleteListNavigationChildDeclarative({ [$multiSelectionChildParameters]: multiSelectionChildParameters, [$multiSelectionChildDeclarativeParameters]: { [$multiSelected]: multiSelected, [$onMultiSelectedChange]: onMultiSelectedChange }, info: i1, ...rest }) {
    const { [$multiSelectionChildParameters]: { [$onMultiSelectChange]: onMultiSelectChange }, info: i2, ...void2 } = useSelectionChildDeclarative({
        [$multiSelectionChildDeclarativeParameters]: { [$onMultiSelectedChange]: onMultiSelectedChange, [$multiSelected]: multiSelected },
        [$multiSelectionChildReturn]: {
            [$changeMultiSelected]: useStableCallback((...args) => { ret[$multiSelectionChildReturn][$changeMultiSelected](...args); })
        }
    });
    const ret = useCompleteListNavigationChild({
        [$multiSelectionChildParameters]: {
            [$initiallyMultiSelected]: multiSelected,
            [$onMultiSelectChange]: useStableCallback((e) => { onMultiSelectChange(e); }),
            ...multiSelectionChildParameters
        },
        info: { ...i1, ...i2 },
        ...rest
    });
    const { [$multiSelectionChildReturn]: multiSelectionChildReturn, ...ret2 } = ret;
    assertEmptyObject(void2);
    return { ...ret2, [$multiSelectionChildReturn]: multiSelectionChildReturn };
}
//# sourceMappingURL=use-list-navigation-complete.js.map