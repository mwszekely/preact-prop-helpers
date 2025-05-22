import { useProcessedChild, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { useProcessedIndexMangler } from "../component-detail/processed-children/use-processed-index-mangler.js";
import { useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useRefElement } from "../dom-helpers/use-ref-element.js";
import { useTextContent } from "../dom-helpers/use-text-content.js";
import { useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useCallback, useLayoutEffect, useRef } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 *
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 *
 * @hasChild {@link useCompleteListNavigationChild}
 *
 * @compositeParams
 */
export function useCompleteListNavigation({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, 
//staggeredChildrenParameters,
refElementParameters, processedIndexManglerParameters, ...void1 }) {
    return useMonitoring(function useCompleteListNavigation() {
        const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
        const getLowestIndex = useCallback(() => getChildren().getLowestIndex(), []);
        const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
        const isValidForNavigation = useCallback((i) => {
            const child = getChildren().getAt(i);
            if (!child)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);
        const { propsStable: propsRef, refElementReturn } = useRefElement({ refElementParameters });
        const { context: { processedIndexManglerContext }, processedIndexManglerReturn: { indexDemangler, indexMangler, mangler } } = useProcessedIndexMangler({ processedIndexManglerParameters });
        const { childrenHaveFocusParameters, managedChildrenParameters: { onChildrenMountChange, ...mcp1 }, context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext }, linearNavigationReturn, rovingTabIndexReturn, singleSelectionReturn, multiSelectionReturn, typeaheadNavigationReturn, props, ...void2 } = useListNavigationSelection({
            managedChildrenReturn: { getChildren },
            linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
            typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
            rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
            singleSelectionParameters,
            multiSelectionParameters,
            paginatedChildrenParameters,
            refElementReturn,
            childrenHaveFocusReturn: { getAnyFocused: useStableCallback(() => childrenHaveFocusReturn.getAnyFocused()) },
            processedIndexManglerReturn: { indexDemangler, indexMangler }
        });
        const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });
        const mcr = useManagedChildren({
            managedChildrenParameters: {
                onChildrenMountChange,
                ...mcp1
            }
        });
        const { context: { managedChildContext: managedChildRTIContext }, managedChildrenReturn } = mcr;
        const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
        const { getAnyFocused } = childrenHaveFocusReturn;
        // => <= <=>
        const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused });
        const refreshRows = useRef(() => { });
        const { getSortValueAt, compare, getIndex } = processedIndexManglerParameters;
        const context = useMemoObject({
            childrenHaveFocusChildContext,
            rovingTabIndexContext,
            singleSelectionContext,
            multiSelectionContext,
            typeaheadNavigationContext,
            managedChildContext: managedChildRTIContext,
            processedChildrenContext,
            listNavigationCompleteContext: useMemoObject({ getSortValueAt, compare, getIndex, provideParentWithRefreshRows: useCallback((e) => { refreshRows.current = e; }, []) }),
            processedIndexManglerContext,
        });
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        return {
            context,
            props: useMergedProps(props, propsRef),
            managedChildrenReturn,
            linearNavigationReturn,
            rovingTabIndexReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn,
            childrenHaveFocusReturn,
            refElementReturn,
            rearrangeableChildrenReturn: { refresh: useCallback(() => refreshRows.current(), []) }
        };
    });
}
;
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 *
 * @compositeParams
 */
export function useCompleteListNavigationChildren({ context, paginatedChildrenParameters, staggeredChildrenParameters, managedChildrenParameters, rearrangeableChildrenParameters, ...void1 }) {
    return useMonitoring(function useCompleteListNavigationChildren() {
        assertEmptyObject(void1);
        const { listNavigationCompleteContext: { getSortValueAt, compare, getIndex, provideParentWithRefreshRows } } = context;
        const { context: contextRPS, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn, } = useProcessedChildren({
            paginatedChildrenParameters,
            processedIndexManglerParameters: { getSortValueAt, compare, getIndex },
            rearrangeableChildrenParameters,
            staggeredChildrenParameters,
            managedChildrenParameters,
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
export function useCompleteListNavigationChildOuter({ context, info: { index, ...uinfo }, refElementParameters: { onElementChange: oec1, onMount, onUnmount }, rearrangeableChildParameters }) {
    return useMonitoring(function useCompleteListNavigationChildOuter() {
        const { propsStable, refElementReturn } = useRefElement({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });
        const { getElement } = refElementReturn;
        const { props, ...processedChildReturn } = useProcessedChild({
            context,
            info: { index, getElement, ...uinfo },
            rearrangeableChildParameters
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
 *
 * @compositeParams
 */
export function useCompleteListNavigationChild({ info: { index, focusSelf, untabbable, ...customUserInfo }, // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
textContentParameters: { getText, onTextContentChange: otcc1, ...void10 }, refElementParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 }, singleSelectionChildParameters, multiSelectionChildParameters, context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, processedChildrenContext, processedIndexManglerContext, listNavigationCompleteContext, ...void5 }, ...void1 }) {
    return useMonitoring(function useCompleteListNavigationChild() {
        const { refElementReturn, propsStable, ...void6 } = useRefElement({ refElementParameters });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, pressParameters: { excludeSpace, ...void2 }, selectionChildReturn, textContentParameters: { onTextContentChange: otcc2, ...void8 }, singleSelectionChildReturn, multiSelectionChildReturn, info: infoFromListNav, rovingTabIndexChildReturn, propsChild, propsTabbable, ...void4 } = useListNavigationSelectionChild({
            info: { index, untabbable },
            context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
            singleSelectionChildParameters,
            multiSelectionChildParameters,
            refElementReturn
        });
        const { textContentReturn, ...void9 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } });
        const allStandardInfo = {
            index,
            focusSelf,
            getElement: refElementReturn.getElement,
            untabbable,
            ...infoFromListNav,
        };
        const { managedChildReturn } = useManagedChild({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
        const onCurrentFocusedInnerChanged = useStableMergedCallback(ocfic1, ocfic2, ocfic3);
        const { hasCurrentFocusReturn } = useHasCurrentFocus({
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged,
                onCurrentFocusedChanged
            },
            refElementReturn
        });
        const props = useMergedProps(propsStable, hasCurrentFocusReturn.propsStable, propsChild);
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
        assertEmptyObject(void7);
        assertEmptyObject(void8);
        assertEmptyObject(void9);
        assertEmptyObject(void10);
        return {
            propsChild: props,
            propsTabbable,
            pressParameters: {
                excludeSpace
            },
            selectionChildReturn,
            textContentReturn,
            refElementReturn,
            singleSelectionChildReturn,
            multiSelectionChildReturn,
            hasCurrentFocusReturn,
            managedChildReturn,
            rovingTabIndexChildReturn
        };
    });
}
/**
 * @compositeParams
 */
export function useCompleteListNavigationDeclarative({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }) {
    const ret = useCompleteListNavigation({
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
            // Needs to be a (stable) callback because of declaration order
            onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...rest
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });
    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
}
/**
 * #__NO_SIDE_EFFECTS__
 */
export function useCompleteListNavigationChildDeclarative({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, info: i1, ...rest }) {
    const { multiSelectionChildParameters: { onMultiSelectChange }, info: i2, ...void2 } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected },
        multiSelectionChildReturn: {
            changeMultiSelected: useStableCallback((...args) => { ret.multiSelectionChildReturn.changeMultiSelected(...args); })
        }
    });
    const ret = useCompleteListNavigationChild({
        multiSelectionChildParameters: {
            initiallyMultiSelected: multiSelected,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange(e); }),
            ...multiSelectionChildParameters
        },
        info: { ...i1, ...i2 },
        ...rest
    });
    const { multiSelectionChildReturn, ...ret2 } = ret;
    assertEmptyObject(void2);
    return { ...ret2, multiSelectionChildReturn };
}
//# sourceMappingURL=use-list-navigation-complete.js.map