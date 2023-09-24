import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
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
export const useListNavigationSelection = monitored(function useListNavigationSelection({ "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex, ...args }) {
    const { "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex } = args;
    const { context: contextSS, props: propsStable, ...retSS } = useSelection({
        "PropNames.RovingTabIndexReturn.setTabbableIndex": useStableCallback((...args) => { sti1(...args); }),
        ...args
    });
    const { context: contextLN, props, ...retLN } = useListNavigation({
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallySingleSelectedIndex ?? initiallyTabbedIndex,
        ...args
    });
    const { "PropNames.RovingTabIndexReturn.setTabbableIndex": sti1 } = retLN;
    return {
        ...retSS,
        ...retLN,
        context: useMemoObject({
            ...contextLN,
            ...contextSS
        }),
        props: [...props, propsStable]
    };
});
/**
 * @compositeParams
 */
export const useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild({ info: { index, untabbable, ...void2 }, context, ...args }) {
    const { info: infoSS, props: propsSS, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2, ...retSS } = useSelectionChild({
        info: { index, untabbable },
        context,
        ...args
    });
    const { props: propsLN, info: infoLN, "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1, ...retLN } = useListNavigationChild({
        info: { index, untabbable },
        context,
        ...args
    });
    assertEmptyObject(void2);
    return {
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": useStableCallback((focused, previouslyFocused, e) => {
            ocfic1?.(focused, previouslyFocused, e);
            ocfic2?.(focused, previouslyFocused, e);
        }),
        info: { ...infoSS, ...infoLN },
        ...retSS,
        ...retLN,
        propsChild: propsSS,
        propsTabbable: [propsLN],
    };
});
//# sourceMappingURL=use-list-navigation-selection.js.map