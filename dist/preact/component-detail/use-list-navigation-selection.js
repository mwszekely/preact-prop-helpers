import { $excludeSpace, $onPressSync, $pressParameters } from "../component-use/use-press.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { $refElementReturn } from "../dom-helpers/use-ref-element.js";
import { $textContentParameters } from "../dom-helpers/use-text-content.js";
import { $childrenHaveFocusReturn } from "../observers/use-children-have-focus.js";
import { $hasCurrentFocusParameters, $onCurrentFocusedInnerChanged } from "../observers/use-has-current-focus.js";
import { $index, $managedChildrenReturn } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
import { $linearNavigationParameters } from "./keyboard-navigation/use-linear-navigation.js";
import { useListNavigation, useListNavigationChild } from "./keyboard-navigation/use-list-navigation-partial.js";
import { $untabbable, $initiallyTabbedIndex, $setTabbableIndex, $rovingTabIndexChildReturn, $rovingTabIndexParameters, $rovingTabIndexReturn } from "./keyboard-navigation/use-roving-tabindex.js";
import { $typeaheadNavigationParameters } from "./keyboard-navigation/use-typeahead-navigation.js";
import { $paginatedChildrenParameters } from "./processed-children/use-paginated-children.js";
import { $rearrangeableChildrenReturn } from "./processed-children/use-rearrangeable-children.js";
import { $multiSelectionChildParameters, $multiSelectionChildReturn, $multiSelectionParameters } from "./selection/use-multi-selection.js";
import { useSelection, useSelectionChild } from "./selection/use-selection.js";
import { $initiallySingleSelectedIndex, $singleSelectionChildParameters, $singleSelectionChildReturn, $singleSelectionParameters } from "./selection/use-single-selection.js";
/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
export const useListNavigationSelection = monitored(function useListNavigationSelection({ [$linearNavigationParameters]: linearNavigationParameters, [$rovingTabIndexParameters]: rovingTabIndexParameters, [$typeaheadNavigationParameters]: typeaheadNavigationParameters, [$singleSelectionParameters]: singleSelectionParameters, [$multiSelectionParameters]: multiSelectionParameters, [$managedChildrenReturn]: managedChildrenReturn, [$refElementReturn]: refElementReturn, [$paginatedChildrenParameters]: paginatedChildrenParameters, [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn, [$childrenHaveFocusReturn]: childrenHaveFocusReturn, ...void3 }) {
    const { context: contextSS, propsStable, ...retSS } = useSelection({
        [$childrenHaveFocusReturn]: childrenHaveFocusReturn,
        [$rovingTabIndexReturn]: { [$setTabbableIndex]: useStableCallback((...a) => { rovingTabIndexReturn[$setTabbableIndex](...a); }) },
        [$managedChildrenReturn]: managedChildrenReturn,
        [$singleSelectionParameters]: singleSelectionParameters,
        [$multiSelectionParameters]: multiSelectionParameters
    });
    const { context: contextLN, props, [$rovingTabIndexReturn]: rovingTabIndexReturn, ...retLN } = useListNavigation({
        [$rovingTabIndexParameters]: { ...rovingTabIndexParameters, [$initiallyTabbedIndex]: singleSelectionParameters[$initiallySingleSelectedIndex] || 0 },
        [$linearNavigationParameters]: linearNavigationParameters,
        [$typeaheadNavigationParameters]: typeaheadNavigationParameters,
        [$managedChildrenReturn]: managedChildrenReturn,
        [$refElementReturn]: refElementReturn,
        [$paginatedChildrenParameters]: paginatedChildrenParameters,
        [$rearrangeableChildrenReturn]: rearrangeableChildrenReturn
    });
    assertEmptyObject(void3);
    return {
        [$rovingTabIndexReturn]: rovingTabIndexReturn,
        ...retSS,
        ...retLN,
        context: useMemoObject({
            ...contextLN,
            ...contextSS
        }),
        props: useMergedProps(props, propsStable)
    };
});
/**
 * @compositeParams
 */
export const useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild({ info: { [$index]: index, [$untabbable]: untabbable, ...void2 }, context, [$refElementReturn]: refElementReturn, [$singleSelectionChildParameters]: singleSelectionChildParameters, [$multiSelectionChildParameters]: multiSelectionChildParameters, ...void1 }) {
    const { [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic2, ...void3 }, info: infoSS, [$multiSelectionChildReturn]: multiSelectionChildReturn, [$singleSelectionChildReturn]: singleSelectionChildReturn, props: propsSS, [$pressParameters]: { [$onPressSync]: onPressSync }, ...void9 } = useSelectionChild({
        info: { [$index]: index, [$untabbable]: untabbable },
        context,
        [$multiSelectionChildParameters]: multiSelectionChildParameters,
        [$singleSelectionChildParameters]: singleSelectionChildParameters
    });
    const { [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: ocfic1, ...void6 }, [$pressParameters]: { [$excludeSpace]: excludeSpace }, [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn, [$textContentParameters]: textContentParameters, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
        info: { [$index]: index, [$untabbable]: untabbable },
        context,
        [$refElementReturn]: refElementReturn,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void6);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
        [$hasCurrentFocusParameters]: { [$onCurrentFocusedInnerChanged]: useStableMergedCallback(ocfic1, ocfic2) },
        [$pressParameters]: { [$onPressSync]: onPressSync, [$excludeSpace]: excludeSpace },
        info: { ...infoSS, ...infoLN },
        [$rovingTabIndexChildReturn]: rovingTabIndexChildReturn,
        [$multiSelectionChildReturn]: multiSelectionChildReturn,
        [$singleSelectionChildReturn]: singleSelectionChildReturn,
        [$textContentParameters]: textContentParameters,
        propsChild: propsSS,
        propsTabbable: propsLN
    };
});
//# sourceMappingURL=use-list-navigation-selection.js.map