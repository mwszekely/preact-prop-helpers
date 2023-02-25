import { assertEmptyObject } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { useSingleSelection, useSingleSelectionChild } from "./use-single-selection.js";
/**
 * We're just gluing together the list navigation and single selection hooks,
 * since they're so commonly paired together. Also see the one that includes sorting.
 */
const _dummy = 0;
export function useListNavigationSingleSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, ..._void3 }) {
    const lnr = useListNavigation({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, managedChildrenReturn });
    const { rovingTabIndexReturn } = lnr;
    const ssr = useSingleSelection({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });
    assertEmptyObject(_void3);
    return {
        ...ssr,
        ...lnr,
    };
}
export function useListNavigationSingleSelectionChild({ managedChildParameters: { index, ..._void5 }, rovingTabIndexChildParameters: { hidden, ...void7 }, singleSelectionChildParameters, singleSelectionContext, rovingTabIndexChildContext, typeaheadNavigationChildContext, refElementReturn, textContentParameters, ..._void1 }) {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 }, pressParameters: { onPressSync }, ...sscr } = useSingleSelectionChild({
        managedChildParameters: { index },
        singleSelectionChildParameters,
        singleSelectionContext
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void6 }, pressParameters: { excludeSpace }, ...lncr } = useListNavigationChild({
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden },
        rovingTabIndexChildContext,
        typeaheadNavigationChildContext,
        refElementReturn,
        textContentParameters
    });
    assertEmptyObject(_void1);
    assertEmptyObject(_void3);
    assertEmptyObject(_void5);
    assertEmptyObject(_void6);
    assertEmptyObject(void7);
    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, previouslyFocused, e) => {
                ocfic1?.(focused, previouslyFocused, e);
                ocfic2?.(focused, previouslyFocused, e);
            })
        },
        pressParameters: { onPressSync, excludeSpace },
        ...sscr,
        ...lncr
    };
}
//# sourceMappingURL=use-list-navigation-single-selection.js.map