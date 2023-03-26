import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { useSingleSelection, useSingleSelectionChild } from "./use-single-selection.js";
export function useListNavigationSingleSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, ..._void3 }) {
    monitorCallCount(useListNavigationSingleSelection);
    const { context: contextLN, propsStable, rovingTabIndexReturn, ...retLN } = useListNavigation({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, managedChildrenReturn });
    const { context: contextSS, ...retSS } = useSingleSelection({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });
    assertEmptyObject(_void3);
    return {
        rovingTabIndexReturn,
        ...retSS,
        ...retLN,
        context: useStableObject({
            ...contextLN,
            ...contextSS
        }),
        propsStable
    };
}
export function useListNavigationSingleSelectionChild({ info: { index, ...void5 }, rovingTabIndexChildParameters, singleSelectionChildParameters, context, refElementReturn, textContentParameters, info, ...void1 }) {
    monitorCallCount(useListNavigationSingleSelectionChild);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: { setLocalSelected, ...void4 }, singleSelectionChildReturn, props: propsSS, ...void9 } = useSingleSelectionChild({
        info: { index },
        singleSelectionChildParameters,
        context
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters, rovingTabIndexChildReturn, textContentReturn, props: propsLN, ...void8 } = useListNavigationChild({
        info: { index },
        rovingTabIndexChildParameters,
        context,
        refElementReturn,
        textContentParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, previouslyFocused, e) => {
                ocfic1?.(focused, previouslyFocused, e);
                ocfic2?.(focused, previouslyFocused, e);
            })
        },
        pressParameters,
        info: { setLocalSelected },
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        props: useMergedProps(propsLN, propsSS),
    };
}
//# sourceMappingURL=use-list-navigation-single-selection.js.map