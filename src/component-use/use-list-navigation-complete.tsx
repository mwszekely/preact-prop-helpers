import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenParameters, UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildParameters, UseProcessedChildReturnType, UseProcessedChildrenContext, UseProcessedChildrenContextSelf, UseProcessedChildrenParameters, UseProcessedChildrenReturnType, useProcessedChild, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { UseProcessedIndexManglerContext, UseProcessedIndexManglerParameters, useProcessedIndexMangler } from "../component-detail/processed-children/use-processed-index-mangler.js";
import { UseRearrangeableChildrenReturnType } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenReturnType } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelectionChildParameters, UseSelectionContext, UseSelectionParameters, useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, UseListNavigationSelectionChildParameters, UseListNavigationSelectionChildReturnType, UseListNavigationSelectionParameters, UseListNavigationSelectionReturnType, useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseTextContentParameters, UseTextContentReturnType, useTextContent } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { JSX, TargetedOmit, TargetedPick, useCallback, useLayoutEffect, useRef } from "../util/lib.js";
import { ElementProps, OmitStrong } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";
import { UsePressParameters } from "./use-press.js";

export interface UseCompleteListNavigationChildInfo<ChildElementTag extends keyof JSX.IntrinsicElements> extends
    UseListNavigationSelectionChildInfo<ChildElementTag>,
    ManagedChildInfo<number> { }

export interface UseCompleteListNavigationChildrenInfo<ChildElementTag extends keyof JSX.IntrinsicElements> extends
    UseProcessedChildInfo<ChildElementTag>,
    ManagedChildInfo<number> { }

export interface UseCompleteListNavigationParameters<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends
    Pick<UseListNavigationSelectionParameters<ParentElementTag, ChildElementTag, M>, "singleSelectionParameters" | "multiSelectionParameters">,
    TargetedOmit<Pick<UsePaginatedChildrenParameters<ChildElementTag>, "paginatedChildrenParameters">, "paginatedChildrenParameters", "childCount">,
    Pick<UseRefElementParameters<ParentElementTag>, "refElementParameters">,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElementTag, ChildElementTag, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElementTag, ChildElementTag, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    TargetedOmit<UseListNavigationSelectionParameters<ParentElementTag, ChildElementTag, M>, "rovingTabIndexParameters", "untabbableBehavior">,
    TargetedOmit<UseProcessedIndexManglerParameters, "processedIndexManglerParameters", never> {

    //listNavigationCompleteParameters: UseCompleteListNavigationParametersSelf;
}
type Get<T, K extends keyof T> = T[K];
export interface UseCompleteListNavigationParametersSelf extends Get<UseProcessedIndexManglerParameters, "processedIndexManglerParameters"> { }


export interface UseCompleteListNavigationReturnType<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends
    OmitStrong<UseRefElementReturnType<ParentElementTag>, "propsStable">,
    //TargetedOmit<UseProcessedChildrenReturnType<any, any>, "rearrangeableChildrenReturn", "children">,
    //Pick<UseProcessedChildrenReturnType<any, any>, never>,
    Pick<UseManagedChildrenReturnType<M>, "managedChildrenReturn">,
    Pick<UseChildrenHaveFocusReturnType<ChildElementTag>, "childrenHaveFocusReturn">,
    TargetedOmit<UseProcessedChildrenReturnType<ChildElementTag, any>, "rearrangeableChildrenReturn", "children">,
    OmitStrong<UseListNavigationSelectionReturnType<ParentElementTag, ChildElementTag>, "context" | "childrenHaveFocusParameters" | "managedChildrenParameters"> {
    props: ElementProps<ParentElementTag>;
    context: CompleteListNavigationContext<ChildElementTag, M>;
    //listNavigationCompleteReturn: UseCompleteListNavigationReturnTypeSelf;
}


export interface UseCompleteListNavigationReturnTypeSelf {

    /**
     * Call this any time the values for the sortable children change to re-sort and re-render them.
     */
    refreshRows(): void;
}

/* Contains information the parent list passes to a) each child, and b) the child processor, if used. */
export interface CompleteListNavigationContext<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends
    UseChildrenHaveFocusContext<ChildElementTag>,
    UseTypeaheadNavigationContext,
    UseSelectionContext,
    UseManagedChildrenContext<M>,
    RovingTabIndexChildContext,
    UseProcessedChildrenContext,
    UseProcessedIndexManglerContext {
    listNavigationCompleteContext: UseCompleteListNavigationContextSelf;
}
export interface UseCompleteListNavigationContextSelf extends UseCompleteListNavigationParametersSelf {
    provideParentWithRefreshRows(refreshRows: () => void): void;
}


export interface UseCompleteListNavigationChildrenParameters<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<TabbableChildElementTag>, SM extends UseCompleteListNavigationChildrenInfo<TabbableChildElementTag>> extends
    OmitStrong<UseProcessedChildrenParameters<TabbableChildElementTag, SM>, "processedIndexManglerParameters"> {
    context: CompleteListNavigationContext<TabbableChildElementTag, M>;
}



export interface UseCompleteListNavigationChildrenReturnType<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElementTag>> extends
    OmitStrong<UseRearrangeableChildrenReturnType, never>,
    OmitStrong<UsePaginatedChildrenReturnType, "context">,
    OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseCompleteListNavigationChildrenContext<TabbableChildElementTag, M>;
}




export type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> =
    // All types in the user-supplied info type that aren't in the base type (since we handle it) 
    Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> |
    // except for these extra types! Because the user supplies them.
    // TODO: Where exactly does focusSelf come from? (should be typed)
    // I feel like this always happens with focusSelf, why.
    UseListNavigationSelectionChildInfoKeysParameters | "focusSelf";



export interface UseCompleteListNavigationChildParameters<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends
    UseGenericChildParameters<CompleteListNavigationContext<ChildElementTag, M>, Pick<M, UseCompleteListNavigationChildInfoKeysParameters<M>>>,
    OmitStrong<UseListNavigationSelectionChildParameters<ChildElementTag, M>, "context" | "info" | "refElementReturn">,
    Pick<UseRefElementParameters<ChildElementTag>, "refElementParameters">,
    Pick<UseTextContentParameters<ChildElementTag>, "textContentParameters">,
    Pick<UseHasCurrentFocusParameters<ChildElementTag>, "hasCurrentFocusParameters"> {
}

export interface UseCompleteListNavigationChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends
    OmitStrong<UseListNavigationSelectionChildReturnType<ChildElementTag, M>, "info" | "propsChild" | "propsTabbable" | "hasCurrentFocusParameters" | "pressParameters" | "textContentParameters">,
    OmitStrong<UseRefElementReturnType<ChildElementTag>, "propsStable">,
    Pick<UseTextContentReturnType, "textContentReturn">,
    UseHasCurrentFocusReturnType<ChildElementTag>,
    UseManagedChildReturnType<M>,
    TargetedPick<UsePressParameters<any>, "pressParameters", "excludeSpace"> {

    /**
     * These props should be passed to whichever element is tabbable. 
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended.
     * 
     * @see propsChild
     */
    propsTabbable: ElementProps<any>;

    /**
     * These props should be passed to whichever element is considered the child element of the list (e.g. the `li` in an `ol`). 
     * This may be the same element as `propsChild`, in which case `useMergedProps` is recommended. 
     * But it may also be different, e.g. if that `li` contains an `input`.
     * 
     * @see propsTabbable
     */
    propsChild: ElementProps<any>;
}

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
export function useCompleteListNavigation<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>>({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    //staggeredChildrenParameters,
    refElementParameters,
    processedIndexManglerParameters,
    ...void1
}: UseCompleteListNavigationParameters<ParentElementTag, ChildElementTag, M>): UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M> {
    return useMonitoring(function useCompleteListNavigation(): UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M> {
        const getChildren: () => ManagedChildren<M> = useCallback(() => managedChildrenReturn.getChildren(), []);
        const getLowestIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
        const getHighestIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
        const isValidForNavigation = useCallback((i: number) => {
            const child = getChildren().getAt(i);
            if (!child)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);

        const { propsStable: propsRef, refElementReturn } = useRefElement<ParentElementTag>({ refElementParameters });

        const { context: { processedIndexManglerContext }, processedIndexManglerReturn: { indexDemangler, indexMangler, mangler } } = useProcessedIndexMangler({ processedIndexManglerParameters })

        const {
            childrenHaveFocusParameters,
            managedChildrenParameters: { onChildrenMountChange, ...mcp1 },
            context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
            linearNavigationReturn,
            rovingTabIndexReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn,
            props,

            ...void2
        } = useListNavigationSelection<ParentElementTag, ChildElementTag>({
            managedChildrenReturn: { getChildren },
            linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
            typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
            rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
            singleSelectionParameters,
            multiSelectionParameters,
            paginatedChildrenParameters,
            refElementReturn,
            childrenHaveFocusReturn: { getAnyFocused: useStableCallback((): boolean => childrenHaveFocusReturn.getAnyFocused()) },
            processedIndexManglerReturn: { indexDemangler, indexMangler }
        });

        const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });

        const mcr: UseManagedChildrenReturnType<M> = useManagedChildren<M>({
            managedChildrenParameters: {
                onChildrenMountChange,
                ...mcp1
            }
        });
        const { context: { managedChildContext: managedChildRTIContext }, managedChildrenReturn } = mcr;
        const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
        const { getAnyFocused } = childrenHaveFocusReturn;
        // => <= <=>
        const processedChildrenContext = useMemoObject<UseProcessedChildrenContextSelf>({ getTabbableIndex, setTabbableIndex, getAnyFocused });

        const refreshRows = useRef(() => { });
        const { getSortValueAt, compare, getIndex } = processedIndexManglerParameters;
        const context = useMemoObject<CompleteListNavigationContext<ChildElementTag, M>>({
            childrenHaveFocusChildContext,
            rovingTabIndexContext,
            singleSelectionContext,
            multiSelectionContext,
            typeaheadNavigationContext,
            managedChildContext: managedChildRTIContext,
            processedChildrenContext,
            listNavigationCompleteContext: useMemoObject<UseCompleteListNavigationContextSelf>({ getSortValueAt, compare, getIndex, provideParentWithRefreshRows: useCallback((e) => { refreshRows.current = e; }, []) }),
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
        }
    });
};

/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 * 
 * @compositeParams
 */
export function useCompleteListNavigationChildren<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<TabbableChildElementTag>, RM extends UseCompleteListNavigationChildrenInfo<TabbableChildElementTag>>({
    context,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    managedChildrenParameters,
    rearrangeableChildrenParameters,
    ...void1
}: UseCompleteListNavigationChildrenParameters<TabbableChildElementTag, M, RM>): UseCompleteListNavigationChildrenReturnType<TabbableChildElementTag, RM> {
    return useMonitoring(function useCompleteListNavigationChildren(): UseCompleteListNavigationChildrenReturnType<TabbableChildElementTag, RM> {
        assertEmptyObject(void1);

        const { listNavigationCompleteContext: { getSortValueAt, compare, getIndex, provideParentWithRefreshRows } } = context;

        const {
            context: contextRPS,
            paginatedChildrenReturn,
            rearrangeableChildrenReturn,
            staggeredChildrenReturn,
        } = useProcessedChildren<TabbableChildElementTag, RM>({
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
            })
        }, [])

        return {
            context: contextRPS,
            paginatedChildrenReturn,
            rearrangeableChildrenReturn,
            staggeredChildrenReturn
        }
    });
}

/* This is the context passed from the child processor to the outer processed child component. Only used for processed children. */
export interface UseCompleteListNavigationChildrenContext<RowElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildrenInfo<RowElementTag>> extends UseProcessedChildContext<RowElementTag, M> { }

export interface UseCompleteListNavigationChildOuterParameters<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteListNavigationChildrenInfo<RowElementTag>> extends
    OmitStrong<UseProcessedChildParameters<RowElementTag, RsM>, "info">,
    UseRefElementParameters<RowElementTag> {
    info: OmitStrong<UseProcessedChildParameters<RowElementTag, RsM>["info"], "getElement">
    context: UseCompleteListNavigationChildrenContext<RowElementTag, RsM>;
}

export interface UseCompleteListNavigationChildOuterReturnType<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteListNavigationChildrenInfo<RowElementTag>> extends
    OmitStrong<UseProcessedChildReturnType<RowElementTag, RsM>, "refElementParameters">,
    OmitStrong<UseRefElementReturnType<RowElementTag>, "propsStable"> {
    hide: boolean;
}

/**
 * @compositeParams
 */
export function useCompleteListNavigationChildOuter<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteListNavigationChildrenInfo<RowElementTag>>({
    context,
    info: { index, ...uinfo },
    refElementParameters: { onElementChange: oec1, onMount, onUnmount },
    rearrangeableChildParameters
}: UseCompleteListNavigationChildOuterParameters<RowElementTag, RsM>): UseCompleteListNavigationChildOuterReturnType<RowElementTag, RsM> {
    return useMonitoring(function useCompleteListNavigationChildOuter(): UseCompleteListNavigationChildOuterReturnType<RowElementTag, RsM> {

        const {
            propsStable,
            refElementReturn
        } = useRefElement<RowElementTag>({
            refElementParameters: {
                onElementChange: useStableCallback((...a) => { oec1?.(...a); oec2?.(...a); }),
                onMount,
                onUnmount
            }
        });

        const { getElement } = refElementReturn;

        const {
            props,
            ...processedChildReturn
        } = useProcessedChild<RowElementTag, RsM>({
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
        }
    });
}

/**
 * 
 * @compositeParams
 */
export function useCompleteListNavigationChild<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>>({
    info: { index, focusSelf, untabbable, ...customUserInfo },  // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters: { getText, onTextContentChange: otcc1, ...void10 },
    refElementParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, processedChildrenContext, processedIndexManglerContext, listNavigationCompleteContext, ...void5 },
    ...void1
}: UseCompleteListNavigationChildParameters<ChildElementTag, M>): UseCompleteListNavigationChildReturnType<ChildElementTag, M> {
    return useMonitoring(function useCompleteListNavigationChild(): UseCompleteListNavigationChildReturnType<ChildElementTag, M> {
        const { refElementReturn, propsStable, ...void6 } = useRefElement<ChildElementTag>({ refElementParameters });
        const {
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 },
            pressParameters: { excludeSpace, ...void2 },
            selectionChildReturn,
            textContentParameters: { onTextContentChange: otcc2, ...void8 },
            singleSelectionChildReturn,
            multiSelectionChildReturn,
            info: infoFromListNav,
            rovingTabIndexChildReturn,
            propsChild,
            propsTabbable,
            ...void4
        } = useListNavigationSelectionChild<ChildElementTag>({
            info: { index, untabbable },
            context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
            singleSelectionChildParameters,
            multiSelectionChildParameters,
            refElementReturn
        });
        const { textContentReturn, ...void9 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } })

        const allStandardInfo: UseCompleteListNavigationChildInfo<ChildElementTag> = {
            index,
            focusSelf,
            getElement: refElementReturn.getElement,
            untabbable,
            ...infoFromListNav,
        }

        const { managedChildReturn } = useManagedChild<M>({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } as M });

        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
        const onCurrentFocusedInnerChanged = useStableMergedCallback(ocfic1, ocfic2, ocfic3);
        const { hasCurrentFocusReturn } = useHasCurrentFocus<ChildElementTag>({
            hasCurrentFocusParameters: {
                onCurrentFocusedInnerChanged,
                onCurrentFocusedChanged
            },
            refElementReturn
        });


        const props = useMergedProps(
            propsStable,
            hasCurrentFocusReturn.propsStable,
            propsChild
        );

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
        }
    });
}

export interface UseCompleteListNavigationDeclarativeParameters<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteListNavigationParameters<ParentElementTag, ChildElementTag, M>>, "singleSelectionParameters" | "singleSelectionReturn">,
    TargetedOmit<UseSelectionParameters<ParentElementTag, ChildElementTag, M>, "singleSelectionParameters", "initiallySingleSelectedIndex" | "onSingleSelectedIndexChange"> { }

export interface UseCompleteListNavigationDeclarativeReturnType<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends
    TargetedOmit<UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M>, "singleSelectionReturn", "changeSingleSelectedIndex">,
    TargetedOmit<UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M>, "multiSelectionReturn", never>,
    OmitStrong<UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M>, "singleSelectionReturn" | "multiSelectionReturn"> { }


export interface UseCompleteListNavigationChildDeclarativeParameters<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends
    OmitStrong<MakeSelectionDeclarativeChildParameters<UseCompleteListNavigationChildParameters<ChildElementTag, M>>, "multiSelectionChildParameters" | "multiSelectionChildReturn">,
    TargetedOmit<UseSelectionChildParameters<ChildElementTag, M>, "multiSelectionChildParameters", "initiallyMultiSelected" | "onMultiSelectChange"> { }

export interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>> extends
    TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElementTag, M>, "singleSelectionChildReturn", never>,
    TargetedOmit<UseCompleteListNavigationChildReturnType<ChildElementTag, M>, "multiSelectionChildReturn", "changeMultiSelected">,
    OmitStrong<UseCompleteListNavigationChildReturnType<ChildElementTag, M>, "singleSelectionChildReturn" | "multiSelectionChildReturn"> { }

/**
 * @compositeParams
 */
export function useCompleteListNavigationDeclarative<ParentElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>>({
    singleSelectionParameters,
    singleSelectionDeclarativeParameters,
    ...rest
}: UseCompleteListNavigationDeclarativeParameters<ParentElementTag, ChildElementTag, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElementTag, ChildElementTag, M> {
    const ret: UseCompleteListNavigationReturnType<ParentElementTag, ChildElementTag, M> = useCompleteListNavigation({
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
export function useCompleteListNavigationChildDeclarative<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteListNavigationChildInfo<ChildElementTag>>({
    multiSelectionChildParameters,
    multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange },
    info: i1,
    ...rest
}: UseCompleteListNavigationChildDeclarativeParameters<ChildElementTag, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElementTag, M> {

    const { multiSelectionChildParameters: { onMultiSelectChange }, info: i2, ...void2 } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected },
        multiSelectionChildReturn: {
            changeMultiSelected: useStableCallback((...args) => { ret.multiSelectionChildReturn.changeMultiSelected(...args); })
        }
    });

    const ret: UseCompleteListNavigationChildReturnType<ChildElementTag, M> = useCompleteListNavigationChild({
        multiSelectionChildParameters: {
            initiallyMultiSelected: multiSelected,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange!(e); }),
            ...multiSelectionChildParameters
        },
        info: { ...i1, ...i2 },
        ...rest
    });

    const { multiSelectionChildReturn, ...ret2 } = ret;
    assertEmptyObject(void2);
    return { ...ret2, multiSelectionChildReturn };
}