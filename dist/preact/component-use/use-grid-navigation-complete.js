import { useProcessedChild, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { useProcessedIndexMangler } from "../component-detail/processed-children/use-processed-index-mangler.js";
import { useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "../component-detail/use-grid-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useTextContent } from "../dom-helpers/use-text-content.js";
import { useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback, useLayoutEffect, useRef } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 *
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 *
 * @compositeParams
 */
export function useCompleteGridNavigation({ gridNavigationParameters, linearNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, typeaheadNavigationParameters, paginatedChildrenParameters, refElementParameters, gridNavigationCompleteParameters: { getSortColumn, getSortValueAt: gsva }, processedIndexManglerParameters: { compare, getIndex }, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigation() {
        useEnsureStability("useCompleteGridNavigation", getSortColumn, gsva);
        const getSortValueAt = useCallback((index) => {
            const row = index;
            const column = getSortColumn == undefined ? undefined : getSortColumn();
            return gsva(row, column);
        }, [gsva, getSortColumn]);
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
        const { context: { processedIndexManglerContext }, processedIndexManglerReturn } = useProcessedIndexMangler({
            processedIndexManglerParameters: {
                compare,
                getIndex,
                getSortValueAt
            }
        });
        const { indexDemangler, indexMangler } = processedIndexManglerReturn;
        // Grab the information from the array of children we may or may not render.
        // (see useProcessedChildren -- it send this information to us if it's used.)
        // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
        //const { context: { rearrangeableChildrenContext, ...void4 }, indexDemangler, indexMangler, rearrange, reverse, shuffle, sort } = useCreateProcessedChildrenContext();
        const getAnyFocused = useStableCallback(() => childrenHaveFocusReturn.getAnyFocused());
        const { childrenHaveFocusParameters, managedChildrenParameters, context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, props, rovingTabIndexReturn, linearNavigationReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, ...void3 } = useGridNavigationSelection({
            gridNavigationParameters,
            singleSelectionParameters,
            multiSelectionParameters,
            paginatedChildrenParameters,
            refElementReturn,
            linearNavigationParameters: { getLowestIndex: getLowestChildIndex, getHighestIndex: getHighestChildIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
            rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
            typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
            childrenHaveFocusReturn: { getAnyFocused },
            processedIndexManglerReturn: { indexDemangler, indexMangler }
        });
        const refreshRows = useRef(() => { });
        const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
        const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
        const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
        const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
        /*const c2 = useMemoObject<UseProcessedChildrenContext>({
            processedChildrenContext,
            rearrangeableChildrenContext,
        });*/
        const context = useMemoObject({
            singleSelectionContext,
            multiSelectionContext,
            managedChildContext,
            rovingTabIndexContext,
            typeaheadNavigationContext,
            childrenHaveFocusChildContext,
            gridNavigationRowContext,
            processedChildrenContext,
            processedIndexManglerContext,
            completeGridNavigationContext: useMemoObject({ compare, getIndex, getSortValueAt, provideParentWithRefreshRows: useCallback((e) => { refreshRows.current = e; }, []) })
        });
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        return {
            context,
            props: useMergedProps(props, propsStable),
            refElementReturn,
            managedChildrenReturn,
            rovingTabIndexReturn,
            childrenHaveFocusReturn,
            linearNavigationReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn,
            rearrangeableChildrenReturn: { refresh: useCallback(() => refreshRows.current(), []) },
            //completeGridNavigationReturn: { refreshRows }
        };
    });
}
/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
export function useCompleteGridNavigationRows({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigationRows() {
        assertEmptyObject(void1);
        const { completeGridNavigationContext: { compare, getIndex, getSortValueAt, provideParentWithRefreshRows } } = context;
        const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn, } = useProcessedChildren({
            paginatedChildrenParameters,
            processedIndexManglerParameters: { compare, getIndex, getSortValueAt },
            staggeredChildrenParameters,
            managedChildrenParameters,
            rearrangeableChildrenParameters,
            context,
        });
        useLayoutEffect(() => {
            provideParentWithRefreshRows(() => {
                rearrangeableChildrenReturn.refresh();
            });
        }, []);
        return {
            context: contextRPS,
            paginatedChildrenReturn,
            rearrangeableChildrenReturn,
            staggeredChildrenReturn
        };
    });
}
/**
 * @compositeParams
 */
export function useCompleteGridNavigationRowOuter({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }) {
    return useMonitoring(function useCompleteGridNavigationRowOuter() {
        const { propsStable, refElementReturn } = useRefElement({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });
        const { props, ...processedChildReturn } = useProcessedChild({
            context,
            info: { ...uinfo, index, getElement: refElementReturn.getElement },
            rearrangeableChildParameters,
        });
        const { refElementParameters: { onElementChange: oec2 } } = processedChildReturn;
        return {
            ...processedChildReturn,
            props: useMergedProps(props, propsStable),
            refElementReturn,
            hide: processedChildReturn.paginatedChildReturn.hideBecausePaginated || processedChildReturn.staggeredChildReturn.hideBecauseStaggered
        };
    });
}
/**
 * @compositeParams
 */
export function useCompleteGridNavigationRow({ info: { index, untabbable, ...customUserInfo }, context: contextIncomingForRowAsChildOfTable, textContentParameters: { getText, onTextContentChange: otcc1 }, linearNavigationParameters, rovingTabIndexParameters, typeaheadNavigationParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 }, singleSelectionChildParameters, multiSelectionChildParameters, refElementParameters, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigationRow() {
        // TODO: customUserInfo may contain setSelectedFromParent from the declarative version of this hook.
        // This is a bit of an edge case and should probably be handled more concretely.
        // Create some helper functions
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
        // Someone somewhere needs useRefElement, no shock there
        const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
        // Enormous bag of parameters for useGridNavigationRow
        const parameters = {
            rovingTabIndexParameters,
            typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
            linearNavigationParameters: { isValidForLinearNavigation: isValidForNavigation, getHighestIndex: getHighestChildIndex, getLowestIndex: getLowestChildIndex, ...linearNavigationParameters },
            managedChildrenReturn: { getChildren },
            refElementReturn,
            context: contextIncomingForRowAsChildOfTable,
            info: { index, untabbable },
            //textContentReturn: { getTextContent: useStableCallback(() => textContentReturn.getTextContent()) },
            singleSelectionChildParameters,
            multiSelectionChildParameters
        };
        // Actually call useGridNavigationRow,
        // and get an enormous bag of return values
        const { linearNavigationReturn, managedChildrenParameters, pressParameters, rovingTabIndexChildReturn, rovingTabIndexReturn, singleSelectionChildReturn, multiSelectionChildReturn, selectionChildReturn, textContentParameters: { onTextContentChange: otcc2 }, typeaheadNavigationReturn, context: contextGNR, info: infoRowReturn, props: p3, hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, ...void2 } = useGridNavigationSelectionRow(parameters);
        const { textContentReturn, ...void7 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
        // This is all the info the parent needs about us, the row
        // (NOT the info the cells provide to us, the row)
        const completeInfo = {
            getElement: refElementReturn.getElement,
            index,
            untabbable,
            ...infoRowReturn,
        };
        // Call both `useManagedChildren` and `useManagedChild` with their appropriate parameters.
        const { context: contextMC, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters });
        const { managedChildReturn, ...void4 } = useManagedChild({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } });
        const context = useMemoObject({
            ...contextGNR,
            ...contextMC,
        });
        const { hasCurrentFocusReturn } = useHasCurrentFocus({
            refElementReturn,
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: ocfc1,
                onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic3),
            }
        });
        const props = useMergedProps(propsStable, p3, hasCurrentFocusReturn.propsStable);
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
        assertEmptyObject(void7);
        return {
            pressParameters,
            hasCurrentFocusReturn,
            managedChildrenReturn,
            context,
            textContentReturn,
            managedChildReturn,
            linearNavigationReturn,
            rovingTabIndexChildReturn,
            rovingTabIndexReturn,
            selectionChildReturn,
            singleSelectionChildReturn,
            multiSelectionChildReturn,
            typeaheadNavigationReturn,
            refElementReturn,
            props,
        };
    });
}
/**
 * @compositeParams
 */
export function useCompleteGridNavigationCell({ gridNavigationCellParameters, context, textContentParameters: { getText, onTextContentChange: otcc1, ...void4 }, info: { focusSelf, index, untabbable, ...customUserInfo }, ...void1 }) {
    return useMonitoring(function useCompleteGridNavigationCell() {
        const { refElementReturn, propsStable } = useRefElement({ refElementParameters: {} });
        const { hasCurrentFocusParameters, rovingTabIndexChildReturn, textContentParameters: { onTextContentChange: otcc2 }, pressParameters: { excludeSpace: es1 }, props: propsRti, info: info2, ...void2 } = useGridNavigationSelectionCell({
            gridNavigationCellParameters,
            info: { index, untabbable },
            context,
            refElementReturn,
            //textContentReturn: { getTextContent: useStableCallback((): string | null => textContentReturn.getTextContent()) },
        });
        const { textContentReturn, ...void3 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
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
}
/**
 * @compositeParams
 */
export function useCompleteGridNavigationDeclarative({ singleSelectionDeclarativeParameters, singleSelectionParameters, ...normalGridNavParameters }) {
    const ret2 = useCompleteGridNavigation({
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
            onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...normalGridNavParameters
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange } } = useSelectionDeclarative({
        singleSelectionDeclarativeParameters,
        singleSelectionReturn: ret2.singleSelectionReturn
    });
    return ret2;
}
/**
 * @compositeParams
 */
export function useCompleteGridNavigationRowDeclarative({ multiSelectionChildParameters: { multiSelectionDisabled, ...multiSelectionChildParameters }, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters }, info, ...p }) {
    const { info: { setSelectedFromParent }, multiSelectionChildParameters: { onMultiSelectChange } } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters },
        multiSelectionChildReturn: { changeMultiSelected: useStableCallback((...e) => { changeMultiSelected(...e); }) }
    });
    const r1 = useCompleteGridNavigationRow({
        info: { ...info, setSelectedFromParent },
        multiSelectionChildParameters: {
            ...multiSelectionChildParameters,
            initiallyMultiSelected: multiSelected,
            multiSelectionDisabled,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange?.(e); })
        },
        ...p
    });
    const { multiSelectionChildReturn: { changeMultiSelected } } = r1;
    return r1;
}
//# sourceMappingURL=use-grid-navigation-complete.js.map