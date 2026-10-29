import { UseGridNavigationRowContext } from "../component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UsePaginatedChildrenReturnType } from "../component-detail/processed-children/use-paginated-children.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildParameters, UseProcessedChildReturnType, UseProcessedChildrenContext, UseProcessedChildrenParameters, UseProcessedChildrenReturnType, useProcessedChild, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { UseProcessedIndexManglerParameters, UseProcessedIndexManglerParametersSelf, useProcessedIndexMangler } from "../component-detail/processed-children/use-processed-index-mangler.js";
import { UseRearrangeableChildrenReturnType } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { UseStaggeredChildrenReturnType } from "../component-detail/processed-children/use-staggered-children.js";
import { MakeMultiSelectionChildDeclarativeParameters, MultiSelectChildChangeEvent } from "../component-detail/selection/use-multi-selection.js";
import { MakeSelectionDeclarativeParameters, UseSelectionContext, useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { GridSelectChildCellInfo, GridSelectChildRowInfo, UseGridNavigationCellSelectionContext, UseGridNavigationSelectionCellInfoKeysParameters, UseGridNavigationSelectionCellParameters, UseGridNavigationSelectionCellReturnType, UseGridNavigationSelectionParameters, UseGridNavigationSelectionReturnType, UseGridNavigationSelectionRowInfoKeysParameters, UseGridNavigationSelectionRowParameters, UseGridNavigationSelectionRowReturnType, useGridNavigationSelection, useGridNavigationSelectionCell, useGridNavigationSelectionRow } from "../component-detail/use-grid-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElementParameters, UseRefElementReturnType, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseTextContentParameters, UseTextContentReturnType, useTextContent } from "../dom-helpers/use-text-content.js";

import { UseChildrenHaveFocusContext, UseChildrenHaveFocusReturnType, useChildrenHaveFocus } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildInfo, ManagedChildren, UseGenericChildParameters, UseManagedChildReturnType, UseManagedChildrenContext, UseManagedChildrenReturnType, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { JSX, TargetedOmit, useCallback, useLayoutEffect, useRef } from "../util/lib.js";
import { ElementProps, Nullable, OmitStrong } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";


export type UseCompleteGridNavigationRowInfoKeysParameters<M extends UseCompleteGridNavigationRowInfo<any>> =
    // All types in the user-supplied info type that aren't in the base type (since we handle it) 
    Exclude<keyof M, keyof UseCompleteGridNavigationRowInfo<any>> |
    // except for these extra types! Because the user supplies them.
    UseGridNavigationSelectionRowInfoKeysParameters;

export type UseCompleteGridNavigationCellInfoKeysParameters<M extends UseCompleteGridNavigationCellInfo<any>> =
    Exclude<keyof M, keyof UseCompleteGridNavigationCellInfo<any>> |
    UseGridNavigationSelectionCellInfoKeysParameters | "focusSelf";

export interface UseCompleteGridNavigationRowInfo<RowElementTag extends keyof JSX.IntrinsicElements> extends GridSelectChildRowInfo<RowElementTag>, ManagedChildInfo<number> { }
export interface UseCompleteGridNavigationCellInfo<CellElementTag extends keyof JSX.IntrinsicElements> extends GridSelectChildCellInfo<CellElementTag>, ManagedChildInfo<number> { }

export interface UseCompleteGridNavigationRowsInfo<ChildElementTag extends keyof JSX.IntrinsicElements> extends
    UseProcessedChildInfo<ChildElementTag>,
    ManagedChildInfo<number> { }

export interface UseCompleteGridNavigationParameters<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends
    OmitStrong<UseGridNavigationSelectionParameters<ParentOrRowElementTag, RowElementTag, M>, "processedIndexManglerReturn" | "refElementReturn" | "managedChildrenReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters" | "rovingTabIndexParameters" | "childrenHaveFocusReturn">,
    TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElementTag, RowElementTag, M>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElementTag, RowElementTag, M>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    TargetedOmit<UseGridNavigationSelectionParameters<ParentOrRowElementTag, RowElementTag, M>, "rovingTabIndexParameters", "untabbableBehavior">,
    TargetedOmit<UseProcessedIndexManglerParameters, "processedIndexManglerParameters", "getSortValueAt">,
    Pick<UseRefElementParameters<ParentOrRowElementTag>, "refElementParameters"> {
    gridNavigationCompleteParameters: UseCompleteGridNavigationParametersSelf;
}

type Get<T, K extends keyof T> = T[K];

// TODO: I don't love the column stuff here, since it's not *strictly* necessary to function,
// and certain grids might not even care about the concept of a "sortable column".
// But...otherwise the wheel just gets re-invented for each grid user, and, like,
// there's no cost to it or anything...idk. I'm like 60% on this, but it's helped
// by the fact that we need to pass this as **context** (not child info) from grid to gridrows, 
// which is yet another unusual edge case conveniently handled here.
export interface UseCompleteGridNavigationParametersSelf {
    /**
     * If this grid is sorted by column, then this should return the index of the column that is currently being sorted by.
     * 
     * The value returned will be passed to `getSortValueAt`. 
     * If the grid you're using this for doesn't have a concept of a "sortable column", this can be entirely ignored.
     */
    getSortColumn: Nullable<() => (number | undefined)>;

    /**
     * Should return a value that works with `rearrangeableChildrenParameters.compare` (or, by default, that works with the minus operator).
     * 
     * The `column` parameter will be whatever `getSortColumn` returns, or `undefined` if none was provided.
     * 
     * @param row: The index of the row to check
     * @param column: The index of the column to check (as returned by `getSortColumn`) 
     */
    getSortValueAt(row: number, column: number | undefined): unknown;
}



export interface UseCompleteGridNavigationContextSelf extends UseProcessedIndexManglerParametersSelf {
    provideParentWithRefreshRows(refreshRows: () => void): void;
}



export interface UseCompleteGridNavigationRowsParameters<RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, RsM extends UseCompleteGridNavigationRowsInfo<RowElementTag>> extends
    OmitStrong<UseProcessedChildrenParameters<RowElementTag, RsM>, "context" | "processedIndexManglerParameters"> {
    context: CompleteGridNavigationRowContext<RowElementTag, RM>;
}

/* The context that's returned by (e.g.) the <tbody> to be consumed by the <tr>'s outer child processor */
export interface UseCompleteGridNavigationRowsContext<RowElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteGridNavigationRowsInfo<RowElementTag>> extends UseProcessedChildContext<RowElementTag, M> { }

export interface UseCompleteGridNavigationRowsReturnType<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteGridNavigationRowsInfo<TabbableChildElementTag>> extends
    OmitStrong<UseRearrangeableChildrenReturnType, never>,
    OmitStrong<UsePaginatedChildrenReturnType, "context">,
    OmitStrong<UseStaggeredChildrenReturnType, "context"> {
    context: UseCompleteGridNavigationRowsContext<TabbableChildElementTag, M>;
}




export interface UseCompleteGridNavigationRowParameters<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> extends
    UseGenericChildParameters<CompleteGridNavigationRowContext<RowElementTag, RM>, Pick<RM, UseCompleteGridNavigationRowInfoKeysParameters<RM>>>,
    OmitStrong<UseGridNavigationSelectionRowParameters<RowElementTag, CellElementTag, RM, CM>, "info" | "context" | "managedChildrenReturn" | "refElementReturn" | "linearNavigationParameters" | "typeaheadNavigationParameters">,
    Pick<UseTextContentParameters<RowElementTag>, "textContentParameters">,
    UseRefElementParameters<RowElementTag>,
    TargetedOmit<UseGridNavigationSelectionRowParameters<RowElementTag, CellElementTag, RM, CM>, "linearNavigationParameters", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
    TargetedOmit<UseGridNavigationSelectionRowParameters<RowElementTag, CellElementTag, RM, CM>, "typeaheadNavigationParameters", "isValidForTypeaheadNavigation">,
    OmitStrong<UseHasCurrentFocusParameters<RowElementTag>, "refElementReturn"> {
}

export interface UseCompleteGridNavigationCellParameters<CellElementTag extends keyof JSX.IntrinsicElements, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> extends
    UseGenericChildParameters<CompleteGridNavigationCellContext<CellElementTag, CM>, Pick<CM, UseCompleteGridNavigationCellInfoKeysParameters<CM>>>,
    Pick<UseTextContentParameters<CellElementTag>, "textContentParameters">,
    OmitStrong<UseGridNavigationSelectionCellParameters<CellElementTag>, "info" | "context" | "refElementReturn"> {
}

/* The context that is provided by the (e.g.) <table> to each <tr>, including the outer useProcessedChild. */
export interface CompleteGridNavigationRowContext<RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends
    UseManagedChildrenContext<RM>,

    UseChildrenHaveFocusContext<RowElementTag>,
    UseTypeaheadNavigationContext,
    UseSelectionContext,
    RovingTabIndexChildContext,
    UseGridNavigationRowContext,
    UseProcessedChildrenContext {
    completeGridNavigationContext: UseCompleteGridNavigationContextSelf;
}


export interface CompleteGridNavigationCellContext<ChildElementTag extends keyof JSX.IntrinsicElements, CM extends UseCompleteGridNavigationCellInfo<ChildElementTag>> extends
    UseManagedChildrenContext<CM>,
    UseTypeaheadNavigationContext,
    RovingTabIndexChildContext,
    UseGridNavigationCellSelectionContext {
}


export interface UseCompleteGridNavigationReturnType<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends
    OmitStrong<UseGridNavigationSelectionReturnType<ParentOrRowElementTag, RowElementTag>, "props" | "context" | "childrenHaveFocusParameters" | "managedChildrenParameters">,
    Pick<UseManagedChildrenReturnType<RM>, "managedChildrenReturn">,
    Pick<UseRefElementReturnType<ParentOrRowElementTag>, "refElementReturn">,
    TargetedOmit<UseProcessedChildrenReturnType<RowElementTag, any>, "rearrangeableChildrenReturn", "children">,
    Pick<UseChildrenHaveFocusReturnType<RowElementTag>, "childrenHaveFocusReturn"> {
    context: CompleteGridNavigationRowContext<RowElementTag, RM>;
    props: ElementProps<ParentOrRowElementTag>;
    //    completeGridNavigationReturn: UseCompleteGridNavigationReturnTypeSelf;
}

export interface UseCompleteGridNavigationReturnTypeSelf {

    /**
     * Call this any time the values for the sortable children change to re-sort and re-render them.
     */
    refreshRows(): void;
}

export interface UseCompleteGridNavigationRowReturnType<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> extends
    OmitStrong<UseGridNavigationSelectionRowReturnType<RowElementTag, CellElementTag, RM>, "hasCurrentFocusParameters" | "managedChildrenParameters" | "info" | "textContentParameters">,
    Pick<UseManagedChildrenReturnType<CM>, "managedChildrenReturn">,
    Pick<UseHasCurrentFocusReturnType<RowElementTag>, "hasCurrentFocusReturn">,
    Pick<UseRefElementReturnType<RowElementTag>, "refElementReturn">,
    Pick<UseTextContentReturnType, "textContentReturn">,
    Pick<UseManagedChildReturnType<RM>, "managedChildReturn"> {
    context: CompleteGridNavigationCellContext<CellElementTag, CM>;
}

export interface UseCompleteGridNavigationCellReturnType<CellElementTag extends keyof JSX.IntrinsicElements, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> extends
    OmitStrong<UseGridNavigationSelectionCellReturnType<CellElementTag>, "hasCurrentFocusParameters" | "info" | "textContentParameters">,
    OmitStrong<UseRefElementReturnType<CellElementTag>, "propsStable">,
    Pick<UseTextContentReturnType, "textContentReturn">,
    UseHasCurrentFocusReturnType<CellElementTag>,
    UseManagedChildReturnType<CM> {
    props: ElementProps<CellElementTag>;
}

/**
 * Combines all the grid- (&amp; list-) related hooks into one giant hook that accomplishes everything.
 * 
 * @hasChild {@link useCompleteGridNavigationRow}
 * @hasChild {@link useCompleteGridNavigationCell}
 * 
 * @compositeParams
 */
export function useCompleteGridNavigation<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    typeaheadNavigationParameters,
    paginatedChildrenParameters,
    refElementParameters,
    gridNavigationCompleteParameters: { getSortColumn, getSortValueAt: gsva },
    processedIndexManglerParameters: { compare, getIndex },
    ...void1
}: UseCompleteGridNavigationParameters<ParentOrRowElementTag, RowElementTag, RM>): UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM> {
    return useMonitoring(function useCompleteGridNavigation(): UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM> {
        useEnsureStability("useCompleteGridNavigation", getSortColumn, gsva);

        const getSortValueAt = useCallback((index: number) => {
            const row = index;
            const column = getSortColumn == undefined ? undefined : getSortColumn();
            return gsva(row, column)
        }, [gsva, getSortColumn]);

        assertEmptyObject(void1);
        const getChildren: () => ManagedChildren<RM> = useCallback<() => ManagedChildren<RM>>(() => managedChildrenReturn.getChildren(), []);
        const getLowestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
        const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);


        const isValidForNavigation = useCallback((i: number) => {
            const child = getChildren().getAt(i);
            if (child == null)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);

        const { refElementReturn, propsStable, ...void2 } = useRefElement<ParentOrRowElementTag>({ refElementParameters });

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
        const getAnyFocused = useStableCallback((): boolean => childrenHaveFocusReturn.getAnyFocused());
        const {
            childrenHaveFocusParameters,
            managedChildrenParameters,
            context: { gridNavigationRowContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
            props,
            rovingTabIndexReturn,
            linearNavigationReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn,
            ...void3
        }: UseGridNavigationSelectionReturnType<ParentOrRowElementTag, RowElementTag> = useGridNavigationSelection<ParentOrRowElementTag, RowElementTag>({
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
        const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus<RowElementTag>({ childrenHaveFocusParameters });
        const { context: { managedChildContext }, managedChildrenReturn }: UseManagedChildrenReturnType<RM> = useManagedChildren<RM>({ managedChildrenParameters });
        const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
        const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });
        /*const c2 = useMemoObject<UseProcessedChildrenContext>({
            processedChildrenContext,
            rearrangeableChildrenContext,
        });*/
        const context = useMemoObject<CompleteGridNavigationRowContext<RowElementTag, RM>>({
            singleSelectionContext,
            multiSelectionContext,
            managedChildContext,
            rovingTabIndexContext,
            typeaheadNavigationContext,
            childrenHaveFocusChildContext,
            gridNavigationRowContext,
            processedChildrenContext,
            processedIndexManglerContext,
            completeGridNavigationContext: useMemoObject<UseCompleteGridNavigationContextSelf>({ compare, getIndex, getSortValueAt, provideParentWithRefreshRows: useCallback((e) => { refreshRows.current = e; }, []) })
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
        }
    });
}



/**
 * Helper for `useCompleteGridNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 * 
 * @compositeParams
 */
export function useCompleteGridNavigationRows<TabbableChildElementTag extends keyof JSX.IntrinsicElements, M extends UseCompleteGridNavigationRowInfo<TabbableChildElementTag>, RsM extends UseCompleteGridNavigationRowsInfo<TabbableChildElementTag>>({
    context,
    paginatedChildrenParameters,
    staggeredChildrenParameters,
    managedChildrenParameters,
    rearrangeableChildrenParameters,
    ...void1
}: UseCompleteGridNavigationRowsParameters<TabbableChildElementTag, M, RsM>): UseCompleteGridNavigationRowsReturnType<TabbableChildElementTag, RsM> {
    return useMonitoring(function useCompleteGridNavigationRows(): UseCompleteGridNavigationRowsReturnType<TabbableChildElementTag, RsM> {
        assertEmptyObject(void1);
        const { completeGridNavigationContext: { compare, getIndex, getSortValueAt, provideParentWithRefreshRows } } = context;
        const {
            context: contextRPS,
            paginatedChildrenReturn,
            rearrangeableChildrenReturn,
            staggeredChildrenReturn,
        } = useProcessedChildren<TabbableChildElementTag, RsM>({
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

export interface UseCompleteGridNavigationRowOuterParameters<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElementTag>> extends
    OmitStrong<UseProcessedChildParameters<RowElementTag, RsM>, "info">,
    UseRefElementParameters<RowElementTag> {
    info: OmitStrong<UseProcessedChildParameters<RowElementTag, RsM>["info"], "getElement">;
    context: UseCompleteGridNavigationRowsContext<RowElementTag, RsM>;
}

export interface UseCompleteGridNavigationRowOuterReturnType<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElementTag>> extends
    OmitStrong<UseProcessedChildReturnType<RowElementTag, RsM>, "refElementParameters">,
    OmitStrong<UseRefElementReturnType<RowElementTag>, "propsStable"> {
    hide: boolean;
}

/**
 * @compositeParams
 */
export function useCompleteGridNavigationRowOuter<RowElementTag extends keyof JSX.IntrinsicElements, RsM extends UseCompleteGridNavigationRowsInfo<RowElementTag>>({
    context,
    info: { index, ...uinfo },
    refElementParameters: { onElementChange: oec1, onMount, onUnmount },
    rearrangeableChildParameters
}: UseCompleteGridNavigationRowOuterParameters<RowElementTag, RsM>): UseCompleteGridNavigationRowOuterReturnType<RowElementTag, RsM> {
    return useMonitoring(function useCompleteGridNavigationRowOuter(): UseCompleteGridNavigationRowOuterReturnType<RowElementTag, RsM> {
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

        const {
            props,
            ...processedChildReturn
        } = useProcessedChild<RowElementTag, RsM>({
            context,
            info: { ...uinfo, index, getElement: refElementReturn.getElement } as RsM,
            rearrangeableChildParameters,
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
 * @compositeParams
 */
export function useCompleteGridNavigationRow<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>>({

    info: { index, untabbable, ...customUserInfo },
    context: contextIncomingForRowAsChildOfTable,
    textContentParameters: { getText, onTextContentChange: otcc1 },

    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged: ocfc1, onCurrentFocusedInnerChanged: ocfic3, ...void5 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    refElementParameters,
    ...void1

}: UseCompleteGridNavigationRowParameters<RowElementTag, CellElementTag, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElementTag, CellElementTag, RM, CM> {
    return useMonitoring(function useCompleteGridNavigationRow(): UseCompleteGridNavigationRowReturnType<RowElementTag, CellElementTag, RM, CM> {
        // TODO: customUserInfo may contain setSelectedFromParent from the declarative version of this hook.
        // This is a bit of an edge case and should probably be handled more concretely.

        // Create some helper functions
        const getChildren = useCallback(() => managedChildrenReturn.getChildren(), []);
        const getHighestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
        const getLowestChildIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
        const isValidForNavigation = useCallback((i: number) => {
            const child = getChildren().getAt(i);
            if (child == null)
                return false;
            if (child.untabbable)
                return false;
            return true;
        }, []);

        // Someone somewhere needs useRefElement, no shock there
        const { refElementReturn, propsStable, ...void6 } = useRefElement<RowElementTag>({ refElementParameters });

        // Enormous bag of parameters for useGridNavigationRow
        const parameters: UseGridNavigationSelectionRowParameters<RowElementTag, CellElementTag, RM, CM> = {
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
        }

        // Actually call useGridNavigationRow,
        // and get an enormous bag of return values
        const {
            linearNavigationReturn,
            managedChildrenParameters,
            pressParameters,
            rovingTabIndexChildReturn,
            rovingTabIndexReturn,
            singleSelectionChildReturn,
            multiSelectionChildReturn,
            selectionChildReturn,
            textContentParameters: { onTextContentChange: otcc2 },
            typeaheadNavigationReturn,
            context: contextGNR,
            info: infoRowReturn,
            props: p3,
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 },
            ...void2
        }: UseGridNavigationSelectionRowReturnType<RowElementTag, CellElementTag, RM> = useGridNavigationSelectionRow<RowElementTag, CellElementTag>(parameters);

        const { textContentReturn, ...void7 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } })

        // This is all the info the parent needs about us, the row
        // (NOT the info the cells provide to us, the row)
        const completeInfo: UseCompleteGridNavigationRowInfo<RowElementTag> = {
            getElement: refElementReturn.getElement,
            index,
            untabbable,
            ...infoRowReturn,
        }

        // Call both `useManagedChildren` and `useManagedChild` with their appropriate parameters.
        const { context: contextMC, managedChildrenReturn } = useManagedChildren<CM>({ managedChildrenParameters });
        const { managedChildReturn, ...void4 } = useManagedChild<RM>({ context: contextIncomingForRowAsChildOfTable, info: { ...completeInfo, ...customUserInfo } as RM })

        const context = useMemoObject<CompleteGridNavigationCellContext<CellElementTag, CM>>({
            ...contextGNR,
            ...contextMC,
        });

        const { hasCurrentFocusReturn } = useHasCurrentFocus<RowElementTag>({
            refElementReturn,
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: ocfc1,
                onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic3),
            }
        });

        const props = useMergedProps(
            propsStable,
            p3,
            hasCurrentFocusReturn.propsStable,
        );

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
        }
    });
}

/**
 * @compositeParams
 */
export function useCompleteGridNavigationCell<CellElementTag extends keyof JSX.IntrinsicElements, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>>({
    gridNavigationCellParameters,
    context,
    textContentParameters: { getText, onTextContentChange: otcc1, ...void4 },
    info: { focusSelf, index, untabbable, ...customUserInfo },
    ...void1
}: UseCompleteGridNavigationCellParameters<CellElementTag, CM>): UseCompleteGridNavigationCellReturnType<CellElementTag, CM> {
    return useMonitoring(function useCompleteGridNavigationCell(): UseCompleteGridNavigationCellReturnType<CellElementTag, CM> {
        const { refElementReturn, propsStable } = useRefElement<CellElementTag>({ refElementParameters: {} });
        const {
            hasCurrentFocusParameters,
            rovingTabIndexChildReturn,
            textContentParameters: { onTextContentChange: otcc2 },
            pressParameters: { excludeSpace: es1 },
            props: propsRti,
            info: info2,
            ...void2
        } = useGridNavigationSelectionCell<CellElementTag>({
            gridNavigationCellParameters,
            info: { index, untabbable },
            context,
            refElementReturn,
            //textContentReturn: { getTextContent: useStableCallback((): string | null => textContentReturn.getTextContent()) },
        });
        const { textContentReturn, ...void3 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } })

        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);

        const { hasCurrentFocusReturn } = useHasCurrentFocus<CellElementTag>({
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: null,
                ...hasCurrentFocusParameters
            },
            refElementReturn
        });

        const baseInfo: UseCompleteGridNavigationCellInfo<CellElementTag> = {
            getElement: refElementReturn.getElement,
            getLocallyTabbable: rovingTabIndexChildReturn.getTabbable,
            setLocallyTabbable: info2.setLocallyTabbable,
            focusSelf,
            index,
            untabbable
        }

        const { managedChildReturn } = useManagedChild<CM>({ context, info: { ...baseInfo, ...customUserInfo } as CM })

        const props = useMergedProps(
            propsStable,
            propsRti,
            hasCurrentFocusReturn.propsStable
        ) as ElementProps<CellElementTag>;

        return {
            props,
            refElementReturn,
            rovingTabIndexChildReturn,
            pressParameters: { excludeSpace: useStableCallback(() => (es1?.() || false)) },
            hasCurrentFocusReturn,
            managedChildReturn,
            textContentReturn
        }
    });
}

export interface UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<UseCompleteGridNavigationParameters<ParentOrRowElementTag, RowElementTag, RM>>, "singleSelectionReturn"> { }

export interface UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>> extends
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM>, "singleSelectionReturn", "changeSingleSelectedIndex">,
    TargetedOmit<UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM>, "multiSelectionReturn", never>,
    OmitStrong<UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM>, "singleSelectionReturn" | "multiSelectionReturn"> { }


/**
 * @compositeParams
 */
export function useCompleteGridNavigationDeclarative<ParentOrRowElementTag extends keyof JSX.IntrinsicElements, RowElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>>({
    singleSelectionDeclarativeParameters,
    singleSelectionParameters,
    ...normalGridNavParameters
}: UseCompleteGridNavigationDeclarativeParameters<ParentOrRowElementTag, RowElementTag, RM>): UseCompleteGridNavigationDeclarativeReturnType<ParentOrRowElementTag, RowElementTag, RM> {
    const ret2: UseCompleteGridNavigationReturnType<ParentOrRowElementTag, RowElementTag, RM> = useCompleteGridNavigation<ParentOrRowElementTag, RowElementTag, RM>({
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

export type UseCompleteGridNavigationRowDeclarativeParameters<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>> = OmitStrong<MakeMultiSelectionChildDeclarativeParameters<UseCompleteGridNavigationRowParameters<RowElementTag, CellElementTag, RM, CM>>, "multiSelectionChildReturn">;

/**
 * @compositeParams
 */
export function useCompleteGridNavigationRowDeclarative<RowElementTag extends keyof JSX.IntrinsicElements, CellElementTag extends keyof JSX.IntrinsicElements, RM extends UseCompleteGridNavigationRowInfo<RowElementTag>, CM extends UseCompleteGridNavigationCellInfo<CellElementTag>>({
    multiSelectionChildParameters: { multiSelectionDisabled, ...multiSelectionChildParameters },
    multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters },
    info,
    ...p
}: UseCompleteGridNavigationRowDeclarativeParameters<RowElementTag, CellElementTag, RM, CM>): UseCompleteGridNavigationRowReturnType<RowElementTag, CellElementTag, RM, CM> {


    const {
        info: { setSelectedFromParent },
        multiSelectionChildParameters: { onMultiSelectChange }
    } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange, ...multiSelectionChildDeclarativeParameters },
        multiSelectionChildReturn: { changeMultiSelected: useStableCallback((...e) => { changeMultiSelected(...e) }) }
    });


    const r1: UseCompleteGridNavigationRowReturnType<RowElementTag, CellElementTag, RM, CM> = useCompleteGridNavigationRow({
        info: { ...info, setSelectedFromParent },
        multiSelectionChildParameters: {
            ...multiSelectionChildParameters,
            initiallyMultiSelected: multiSelected,
            multiSelectionDisabled,
            onMultiSelectChange: useStableCallback((e: MultiSelectChildChangeEvent<RowElementTag>) => { onMultiSelectChange?.(e); })
        },
        ...p
    });

    const {
        multiSelectionChildReturn: { changeMultiSelected }
    } = r1;


    return r1;
}
