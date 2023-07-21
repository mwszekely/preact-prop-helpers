import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
import { useSingleSelection, useSingleSelectionChild } from "./use-single-selection.js";
export function useListNavigationSingleSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, ...void3 }) {
    monitorCallCount(useListNavigationSingleSelection);
    const { context: contextLN, propsParent, propsStableParentOrChild, rovingTabIndexReturn, ...retLN } = useListNavigation({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, managedChildrenReturn, refElementReturn });
    const { context: contextSS, ...retSS } = useSingleSelection({ rovingTabIndexReturn, managedChildrenReturn, singleSelectionParameters });
    assertEmptyObject(void3);
    return {
        rovingTabIndexReturn,
        ...retSS,
        ...retLN,
        context: useMemoObject({
            ...contextLN,
            ...contextSS
        }),
        propsParent,
        propsStableParentOrChild
    };
}
export function useListNavigationSingleSelectionChild({ info, context, refElementReturn, textContentParameters, ...void1 }) {
    monitorCallCount(useListNavigationSingleSelectionChild);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: infoSS, singleSelectionChildReturn, props: propsSS, pressParameters: { onPressSync }, ...void9 } = useSingleSelectionChild({
        info,
        context,
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters: { excludeSpace }, rovingTabIndexChildReturn, textContentReturn, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
        info,
        context,
        refElementReturn,
        textContentParameters,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void3);
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
        pressParameters: { onPressSync, excludeSpace },
        info: { ...infoSS, ...infoLN },
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        propsChild: propsSS,
        propsTabbable: propsLN
    };
}
//# sourceMappingURL=use-list-navigation-single-selection.js.map