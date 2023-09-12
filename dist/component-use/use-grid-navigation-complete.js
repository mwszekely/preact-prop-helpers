import { identity } from "../component-detail/keyboard-navigation/use-linear-navigation.js";
import { useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "../component-detail/use-grid-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback, useRef } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @compositeParams
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 */
export const useCompleteGridNavigation = monitored(function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, ...void1 }) {
    assertEmptyObject(void1);
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { refElementReturn, propsStable, ...void2 } = useRefElement({ refElementParameters });
    // TODO: Put these in their own hook? Extremely specific, though
    const indexManglerRef = useRef(null);
    const indexDemanglerRef = useRef(null);
    const indexMangler = useStableCallback((i) => { return (indexManglerRef.current ?? identity)(i); }, []);
    const indexDemangler = useStableCallback((i) => { return (indexDemanglerRef.current ?? identity)(i); }, []);
    const completeListNavigationContext = useMemoObject({ provideManglers: (m, d) => { indexManglerRef.current = m; indexDemanglerRef.current = d; } });
    const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, rovingTabIndexReturn, linearNavigationReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSelection({
        gridNavigationParameters,
        linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        multiSelectionParameters,
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        paginatedChildrenParameters,
        refElementReturn,
        childrenHaveFocusReturn: { getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused()) },
        rearrangeableChildrenReturn: { indexDemangler, indexMangler }
    });
    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
    const mcr = useManagedChildren({ managedChildrenParameters });
    const { context: { managedChildContext }, managedChildrenReturn } = mcr; // TODO: This is split into two lines for TypeScript reasons? Can this be fixed? E.G. like vvvvvvvvvvvvvvvvvvvvvvvvvvvvvv  why doesn't that work?
    //const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, managedChildrenParameters: { onChildrenCountChange }, context: { paginatedChildContext } }: UsePaginatedChildrenReturnType = usePaginatedChildren<ParentOrRowElement, RowElement, RM>({ refElementReturn, managedChildrenReturn, paginatedChildrenParameters, rovingTabIndexReturn, rearrangeableChildrenReturn: { indexDemangler } });
    // const { context: { staggeredChildContext }, staggeredChildrenReturn }: UseStaggeredChildrenReturnType = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters })
    const context = useMemoObject({
        singleSelectionContext,
        multiSelectionContext,
        managedChildContext,
        rovingTabIndexContext,
        typeaheadNavigationContext,
        childrenHaveFocusChildContext,
        gridNavigationRowContext
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        context,
        props: useMergedProps(props, propsStable),
        managedChildrenReturn,
        rovingTabIndexReturn,
        childrenHaveFocusReturn,
        linearNavigationReturn,
        singleSelectionReturn,
        multiSelectionReturn,
        typeaheadNavigationReturn
    };
});
/**
 * @compositeParams
 */
export const useCompleteGridNavigationRow = monitored(function useCompleteGridNavigationRow({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, ...void1 }) {
    /*const {
        info: infoPaginatedChild,
        paginatedChildReturn,
        props: paginationProps,
        ...void7
    } = usePaginatedChild<RowElement>({ info: { index }, context: contextIncomingForRowAsChildOfTable });

    const {
        info: infoStaggeredChild,
        staggeredChildReturn,
        props: staggeredProps,
        ...void8
    } = useStaggeredChild<RowElement>({ info: { index }, context: contextIncomingForRowAsChildOfTable })

    untabbable ||= (paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered);*/
    const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getHighestChildIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const getLowestChildIndex = useCallback(() => getChildren().getLowestIndex(), []);
    const isValidForNavigation = useCallback((i) => {
        const child = getChildren().getAt(i);
        if (child == null)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);
    const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters: {} });
    const r = useGridNavigationSelectionRow({
        rovingTabIndexParameters,
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        linearNavigationParameters: { isValidForLinearNavigation: isValidForNavigation, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        refElementReturn,
        context: contextIncomingForRowAsChildOfTable,
        info: { index, untabbable },
        textContentParameters,
        singleSelectionChildParameters,
        multiSelectionChildParameters
    });
    const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, textContentReturn, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p3, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = r;
    const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
    const completeInfo = {
        getElement: refElementReturn.getElement,
        index,
        untabbable,
        ...infoRowReturn,
    };
    const { managedChildReturn, ...void4 } = useManagedChild({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } });
    const context = useMemoObject({
        ...contextGNR,
        ...contextMC,
    });
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
        refElementReturn,
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: ocfc1,
            onCurrentFocusedInnerChanged: useStableCallback((focused, prevFocused, reason) => {
                // Call grid navigation's focus change
                ocfic1?.(focused, prevFocused, reason);
                ocfic3?.(focused, prevFocused, reason);
            }),
        }
    });
    const props = useMergedProps(propsStable, p3, hasCurrentFocusReturn.propsStable);
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    return {
        pressParameters,
        hasCurrentFocusReturn,
        managedChildrenReturn,
        context,
        managedChildReturn,
        linearNavigationReturn,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        props,
    };
});
/**
 * @compositeParams
 */
export const useCompleteGridNavigationCell = monitored(function useCompleteGridNavigationCell({ gridNavigationCellParameters, context, textContentParameters, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }) {
    const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
    const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentReturn, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSelectionCell({
        gridNavigationCellParameters,
        info: { index, untabbable },
        context,
        refElementReturn,
        textContentParameters,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    const { hasCurrentFocusReturn } = useHasCurrentFocus({
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: null,
            ...hasCurrentFocusParameters
        },
        refElementReturn
    });
    const baseInfo = {
        getElement: refElementReturn.getElement,
        getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
        setLocallyTabbable: info2.setLocallyTabbable,
        focusSelf,
        index,
        untabbable
    };
    const { managedChildReturn } = useManagedChild({ context, info: { ...baseInfo, ...customUserInfo } });
    const props = useMergedProps(propsStable, propsRti, hasCurrentFocusReturn.propsStable);
    return {
        props,
        refElementReturn,
        rovingTabIndexChildReturn,
        pressParameters: { excludeSpace: useStableCallback(() => (es1?.() || false)) },
        hasCurrentFocusReturn,
        managedChildReturn,
        textContentReturn
    };
});
export function useCompleteGridNavigationDeclarative({ gridNavigationParameters, linearNavigationParameters, paginatedChildrenParameters, rovingTabIndexParameters, singleSelectionDeclarativeParameters, multiSelectionParameters, typeaheadNavigationParameters, singleSelectionParameters, refElementParameters, ...void1 }) {
    const ret = useCompleteGridNavigation({
        linearNavigationParameters,
        paginatedChildrenParameters,
        rovingTabIndexParameters,
        singleSelectionParameters: { initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex, onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)), ...singleSelectionParameters },
        multiSelectionParameters,
        refElementParameters,
        typeaheadNavigationParameters,
        gridNavigationParameters,
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange } } = useSelectionDeclarative({
        singleSelectionDeclarativeParameters,
        singleSelectionReturn: ret.singleSelectionReturn
    });
    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void1);
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
}
//# sourceMappingURL=use-grid-navigation-complete.js.map