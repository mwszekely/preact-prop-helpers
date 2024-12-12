import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseGenericChildParameters } from "../preact-extensions/use-managed-children.js";
import { useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { ExtendMerge, OmitStrong, TargetedOmit } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";
import { GridChildCellInfo, GridChildRowInfo, UseGridNavigationCellContext, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationParameters, UseGridNavigationReturnType, UseGridNavigationRowContext, UseGridNavigationRowInfoKeysReturnType, UseGridNavigationRowParameters, UseGridNavigationRowReturnType, useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./keyboard-navigation/use-grid-navigation-partial.js";
import { UseListNavigationChildInfoKeysParameters } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType, useSelection, useSelectionChild } from "./selection/use-selection.js";
import { UseListNavigationSelectionChildInfoKeysParameters } from "./use-list-navigation-selection.js";

/**
 * List navigation gets  selection, so grid navigation does too.
 * 
 * Any given row of the grid can be selected, akin to it being a  select list but with options that can be left/right arrowed to.
 * 
 * Highly recommended to make the `selectionMode` *not* be `"focus"`, but it's up to you, ultimately.
 */
const _dummy = 0;

export type UseGridNavigationSelectionRowInfoKeysParameters = UseListNavigationSelectionChildInfoKeysParameters;
export type UseGridNavigationSelectionRowInfoKeysReturnType = UseGridNavigationRowInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;
export type UseGridNavigationSelectionCellInfoKeysParameters = UseListNavigationChildInfoKeysParameters;
export type UseGridNavigationSelectionCellInfoKeysReturnType = UseGridNavigationCellInfoKeysReturnType;

export interface GridSelectChildRowInfo<RowElement extends Element> extends GridChildRowInfo<RowElement>, UseSelectionChildInfo<RowElement> { }
export interface GridSelectChildCellInfo<CellElement extends Element> extends GridChildCellInfo<CellElement> { }
export interface UseGridNavigationSelectionParameters<ParentOrRowElement extends Element, RowElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends
    OmitStrong<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexParameters">,
    TargetedOmit<UseGridNavigationParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexParameters", "initiallyTabbedIndex">,
    OmitStrong<UseSelectionParameters<ParentOrRowElement, RowElement, RM>, "rovingTabIndexReturn"> { }
export interface UseGridNavigationSelectionReturnType<ParentOrRowElement extends Element, RowElement extends Element> extends
    UseGridNavigationReturnType<ParentOrRowElement, RowElement>,
    OmitStrong<UseSelectionReturnType<ParentOrRowElement, RowElement>, "propsStable"> {
    context: UseGridNavigationRowSelectionContext;
}
export interface UseGridNavigationRowSelectionContext extends UseGridNavigationRowContext, UseSelectionContext { }
export interface UseGridNavigationCellSelectionContext extends UseGridNavigationCellContext { }
export interface UseGridNavigationSelectionRowParameters<RowElement extends Element, CellElement extends Element, RM extends GridSelectChildRowInfo<RowElement>, CM extends GridSelectChildCellInfo<CellElement>> extends
    UseGenericChildParameters<UseGridNavigationRowSelectionContext, Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>>,
    OmitStrong<UseGridNavigationRowParameters<RowElement, CellElement, CM>, "info" | "context">,
    OmitStrong<UseSelectionChildParameters<RowElement, RM>, "info" | "context"> {
    info: Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>;
}

export interface UseGridNavigationSelectionRowReturnType<RowElement extends Element, CellElement extends Element, RM extends GridSelectChildRowInfo<RowElement>> extends
    ExtendMerge<OmitStrong<UseGridNavigationRowReturnType<RowElement, CellElement>, "context" | "info">, OmitStrong<UseSelectionChildReturnType<RowElement, RM>, "info">> {
    context: UseGridNavigationCellSelectionContext;
    info: Pick<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysReturnType>;
}
export interface UseGridNavigationSelectionCellParameters<CellElement extends Element> extends
    UseGenericChildParameters<UseGridNavigationCellSelectionContext, Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysParameters>>,
    OmitStrong<UseGridNavigationCellParameters<CellElement>, "context" | "info"> {
    info: Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysParameters>;
}

export interface UseGridNavigationSelectionCellReturnType<CellElement extends Element> extends UseGridNavigationCellReturnType<CellElement> {
    info: Pick<GridSelectChildCellInfo<CellElement>, UseGridNavigationSelectionCellInfoKeysReturnType>;
}

/**
 * Combines {@link useGridNavigation} and {@link useSelection}.
 * 
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 * 
 * @hasChild {@link useGridNavigationSelectionRow}
 * @hasChild {@link useGridNavigationSelectionCell}
 * 
 * @compositeParams
 * 
 * #__NO_SIDE_EFFECTS__
 */
export function useGridNavigationSelection<ParentOrRowElement extends Element, RowElement extends Element>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    refElementReturn,
    paginatedChildrenParameters,
    processedIndexManglerReturn,
    childrenHaveFocusReturn,
    ...void2
}: UseGridNavigationSelectionParameters<ParentOrRowElement, RowElement, GridSelectChildRowInfo<RowElement>>): UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement> {
    return useMonitoring(function useGridNavigationSelection(): UseGridNavigationSelectionReturnType<ParentOrRowElement, RowElement> {
        const {
            context: { gridNavigationRowContext, rovingTabIndexContext, typeaheadNavigationContext },
            linearNavigationReturn,
            managedChildrenParameters,
            props,
            rovingTabIndexReturn,
            typeaheadNavigationReturn,
        } = useGridNavigation<ParentOrRowElement, RowElement>({
            gridNavigationParameters,
            linearNavigationParameters,
            managedChildrenReturn,
            rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
            typeaheadNavigationParameters,
            paginatedChildrenParameters,
            processedIndexManglerReturn,
            refElementReturn
        });

        const {
            childrenHaveFocusParameters,
            context: { singleSelectionContext, multiSelectionContext },
            multiSelectionReturn,
            propsStable,
            singleSelectionReturn,
            ...void1
        } = useSelection<ParentOrRowElement, RowElement>({
            managedChildrenReturn,
            rovingTabIndexReturn,
            singleSelectionParameters,
            multiSelectionParameters,
            childrenHaveFocusReturn
        });

        assertEmptyObject(void1);
        assertEmptyObject(void2);

        return {
            context: useMemoObject({
                gridNavigationRowContext,
                rovingTabIndexContext,
                singleSelectionContext,
                multiSelectionContext,
                typeaheadNavigationContext
            }),
            childrenHaveFocusParameters,
            linearNavigationReturn,
            managedChildrenParameters,
            props: useMergedProps(props, propsStable),
            rovingTabIndexReturn,
            singleSelectionReturn,
            multiSelectionReturn,
            typeaheadNavigationReturn
        }
    });
}

/**
 * @compositeParams
 * 
 * #__NO_SIDE_EFFECTS__
 */
export function useGridNavigationSelectionRow<RowElement extends Element, CellElement extends Element>({
    info: mcp1,
    linearNavigationParameters,
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    context,
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1
}: UseGridNavigationSelectionRowParameters<RowElement, CellElement, GridSelectChildRowInfo<RowElement>, GridSelectChildCellInfo<CellElement>>): UseGridNavigationSelectionRowReturnType<RowElement, CellElement, GridSelectChildRowInfo<RowElement>> {
    return useMonitoring(function useGridNavigationSelectionRow() {
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 }, info: { getSingleSelected, setLocalSingleSelected, singleSelected, getMultiSelected, setSelectedFromParent, getMultiSelectionDisabled, ...void8 }, props: propsSelection, singleSelectionChildReturn, multiSelectionChildReturn, pressParameters: { onPressSync, ...void4 }, ...void2 } = useSelectionChild<RowElement>({ info: mcp1, context, singleSelectionChildParameters, multiSelectionChildParameters });
        const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void7 }, info: { focusSelf, getLocallyTabbable, setLocallyTabbable, ...void9 }, props: propsGridNavigation, linearNavigationReturn, managedChildrenParameters, pressParameters: { excludeSpace, ...void5 }, rovingTabIndexChildReturn, rovingTabIndexReturn, textContentParameters, typeaheadNavigationReturn, context: contextGridNavigation, ...void3 } = useGridNavigationRow<RowElement, CellElement>({ context, linearNavigationParameters, info: mcp1, managedChildrenReturn, refElementReturn, rovingTabIndexParameters, typeaheadNavigationParameters });

        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
        assertEmptyObject(void7);
        assertEmptyObject(void8);
        assertEmptyObject(void9);

        return {
            context: contextGridNavigation,
            linearNavigationReturn,
            info: {
                getLocallyTabbable,
                getSingleSelected,
                singleSelected,
                setLocallyTabbable,
                setLocalSingleSelected,
                focusSelf,
                getMultiSelected,
                setSelectedFromParent,
                getMultiSelectionDisabled
            },
            managedChildrenParameters,
            pressParameters: { onPressSync, excludeSpace },
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
            props: useMergedProps(propsGridNavigation, propsSelection),
            rovingTabIndexChildReturn,
            rovingTabIndexReturn,
            singleSelectionChildReturn,
            multiSelectionChildReturn,
            textContentParameters,
            typeaheadNavigationReturn
        }
    });
}

/**
 * @compositeParams
 * 
 * #__NO_SIDE_EFFECTS__
 */
export function useGridNavigationSelectionCell<CellElement extends Element>(p: UseGridNavigationSelectionCellParameters<CellElement>): UseGridNavigationSelectionCellReturnType<CellElement> {
    return useMonitoring(function useGridNavigationSelectionCell(): UseGridNavigationSelectionCellReturnType<CellElement> {
        return useGridNavigationCell<CellElement>(p);
    });
}