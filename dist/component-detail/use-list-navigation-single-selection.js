import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { useSingleSelection, useSingleSelectionChild } from "./use-single-selection.js";
export function useListNavigationSingleSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, ..._void3 }) {
    const { context: { rovingTabIndexContext, typeaheadNavigationContext }, propsStable, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, linearNavigationReturn, ...void1 } = useListNavigation({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, managedChildrenReturn });
    const { context: { singleSelectionContext }, childrenHaveFocusParameters, singleSelectionReturn, ...void2 } = useSingleSelection({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });
    assertEmptyObject(_void3);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    return {
        childrenHaveFocusParameters,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        linearNavigationReturn,
        managedChildrenParameters,
        context: useStableObject({
            rovingTabIndexContext,
            singleSelectionContext,
            typeaheadNavigationContext
        }),
        propsStable
    };
}
export function useListNavigationSingleSelectionChild({ managedChildParameters: { index, ..._void5 }, rovingTabIndexChildParameters: { hidden, ...void7 }, singleSelectionChildParameters, context, refElementReturn, textContentParameters, ..._void1 }) {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 }, managedChildParameters, singleSelectionChildReturn, props: propsSS, ...void9 } = useSingleSelectionChild({
        managedChildParameters: { index },
        singleSelectionChildParameters,
        context
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void6 }, pressParameters, rovingTabIndexChildReturn, textContentReturn, props: propsLN, ...void8 } = useListNavigationChild({
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden },
        context,
        refElementReturn,
        textContentParameters
    });
    assertEmptyObject(_void1);
    assertEmptyObject(_void3);
    assertEmptyObject(_void5);
    assertEmptyObject(_void6);
    assertEmptyObject(void7);
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
        managedChildParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        props: useMergedProps(propsLN, propsSS),
    };
}
//# sourceMappingURL=use-list-navigation-single-selection.js.map