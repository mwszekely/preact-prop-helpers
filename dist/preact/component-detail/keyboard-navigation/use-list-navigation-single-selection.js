import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useSingleSelection, useSingleSelectionChild } from "../use-single-selection.js";
import { useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
/**
 * Combines {@link useListNavigation} and {@link useSingleSelection}.
 *
 * @remarks The single-selection behavior is optional, if you decide you need multi-selection instead within the same component.
 *
 * @hasChild {@link useListNavigationSingleSelectionChild}
 *
 * @compositeParams
 */
export function useListNavigationSingleSelection({ linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, singleSelectionParameters, managedChildrenReturn, refElementReturn, paginatedChildrenParameters, rearrangeableChildrenReturn, ...void3 }) {
    monitorCallCount(useListNavigationSingleSelection);
    const { context: contextLN, propsParent, propsStableParentOrChild, rovingTabIndexReturn, ...retLN } = useListNavigation({ linearNavigationParameters, rovingTabIndexParameters, paginatedChildrenParameters, typeaheadNavigationParameters, managedChildrenReturn, refElementReturn, rearrangeableChildrenReturn });
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
        propsStableParentOrChild: propsStableParentOrChild,
        propsParent: propsParent,
    };
}
/**
 * @compositeParams
 */
export function useListNavigationSingleSelectionChild({ info: { index, untabbable, ...void2 }, context, refElementReturn, textContentParameters, ...void1 }) {
    monitorCallCount(useListNavigationSingleSelectionChild);
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 }, info: infoSS, singleSelectionChildReturn, props: propsSS, pressParameters: { onPressSync }, ...void9 } = useSingleSelectionChild({
        info: { index, untabbable },
        context,
    });
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, pressParameters: { excludeSpace }, rovingTabIndexChildReturn, textContentReturn, props: propsLN, info: infoLN, ...void8 } = useListNavigationChild({
        info: { index, untabbable },
        context,
        refElementReturn,
        textContentParameters,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
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