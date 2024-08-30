import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitored } from "../util/use-call-count.js";
import { useListNavigation, useListNavigationChild } from "./keyboard-navigation/use-list-navigation-partial.js";
import { useSelection, useSelectionChild } from "./selection/use-selection.js";
/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 *
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSelectionChild}
 *
 * @compositeParams
 */
export const useListNavigationSelection = /*@__PURE__*/ monitored(function useListNavigationSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, multiSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, processedIndexManglerReturn, childrenHaveFocusReturn, ...void3 }) {
    const { context: contextSS, propsStable, ...retSS } = useSelection({
        childrenHaveFocusReturn,
        rovingTabIndexReturn: { setTabbableIndex: useStableCallback((...a) => { rovingTabIndexReturn.setTabbableIndex(...a); }) },
        managedChildrenReturn,
        singleSelectionParameters,
        multiSelectionParameters
    });
    const { context: contextLN, props, rovingTabIndexReturn, ...retLN } = useListNavigation({
        rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
        linearNavigationParameters,
        paginatedChildrenParameters,
        typeaheadNavigationParameters,
        managedChildrenReturn,
        refElementReturn,
        processedIndexManglerReturn
    });
    assertEmptyObject(void3);
    return {
        rovingTabIndexReturn,
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
export const useListNavigationSelectionChild = /*@__PURE__*/ monitored(function useListNavigationSelectionChild({ info: { index, untabbable, ...void2 }, context, refElementReturn, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: infoSS, multiSelectionChildReturn, singleSelectionChildReturn, props: propsSS, pressParameters: { onPressSync }, ...void9 } = useSelectionChild({
        info: { index, untabbable },
        context,
        multiSelectionChildParameters,
        singleSelectionChildParameters
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters: { excludeSpace }, rovingTabIndexChildReturn, textContentParameters, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
        info: { index, untabbable },
        context,
        refElementReturn,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void6);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
        pressParameters: { onPressSync, excludeSpace },
        info: { ...infoSS, ...infoLN },
        rovingTabIndexChildReturn,
        multiSelectionChildReturn,
        singleSelectionChildReturn,
        textContentParameters,
        propsChild: propsSS,
        propsTabbable: propsLN
    };
});
//# sourceMappingURL=use-list-navigation-selection.js.map