import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps, StandardHook } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { GridChildCellInfo, GridChildRowInfo, UseGridNavigation, UseGridNavigationCell, UseGridNavigationCellContext, UseGridNavigationCellInfoKeysReturnType, UseGridNavigationRow, UseGridNavigationRowContext, UseGridNavigationRowInfoKeysReturnType, useGridNavigation, useGridNavigationCell, useGridNavigationRow } from "./keyboard-navigation/use-grid-navigation-partial.js";
import { UseListNavigationChildInfoKeysParameters } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseSelection, UseSelectionChild, UseSelectionChildContext, UseSelectionChildInfo, UseSelectionChildInfoKeysReturnType, useSelection, useSelectionChild } from "./selection/use-selection.js";
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

export interface UseGridNavigationRowSelectionContext extends UseGridNavigationRowContext, UseSelectionChildContext { }
export interface UseGridNavigationCellSelectionContext extends UseGridNavigationCellContext { }



export type UseGridNavigationSelection<ParentElement extends Element, ChildElement extends Element> = StandardHook<
    "gridNavigationSelection", 
    never, [
        StandardDepsPick<"params", UseGridNavigation<ParentElement, ChildElement>>,
        StandardDepsOmit<"params", UseSelection<ParentElement, ChildElement>, "rovingTabIndexReturn">
    ],
    never, [
        StandardDepsPick<"return", UseGridNavigation<ParentElement, ChildElement>>,
        StandardDepsPick<"return", UseSelection<ParentElement, ChildElement>>,
        StandardDepsContext<UseGridNavigationRowSelectionContext>,
        StandardDepsProps<ParentElement>
    ]
>;

export type UseGridNavigationSelectionRow<RowElement extends Element, CellElement extends Element> = StandardHook<
    "gridNavigationSelectionRow", 
    never, [
        StandardDepsInfo<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysParameters>,
        StandardDepsContext<UseGridNavigationRowSelectionContext>,
        StandardDepsPick<"params", UseGridNavigationRow<RowElement, CellElement>>,
        StandardDepsPick<"params", UseSelectionChild<RowElement>>
    ],
    never, [
        StandardDepsPick<"return", UseGridNavigationRow<RowElement, CellElement>, never>,
        StandardDepsPick<"return", UseSelectionChild<RowElement>>,
        StandardDepsProps<RowElement>,
        StandardDepsContext<UseGridNavigationCellSelectionContext>,
        StandardDepsInfo<GridSelectChildRowInfo<RowElement>, UseGridNavigationSelectionRowInfoKeysReturnType>,
    ]
>;

export type UseGridNavigationSelectionCell<CellElement extends Element> = UseGridNavigationCell<CellElement>; /*StandardHook<
    "gridNavigationSelectionCell", CellElement,
    never, [StandardDepsParameters2<UseGridNavigationCell<CellElement>>],
    never, [StandardDepsReturnType2<UseGridNavigationCell<CellElement>>]
>;*/

/**
 * Combines {@link useGridNavigation} and {@link useSelection}.
 * 
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 * 
 * @hasChild {@link useGridNavigationSelectionRow}
 * @hasChild {@link useGridNavigationSelectionCell}
 * 
 * @compositeParams
 */
export const useGridNavigationSelection = monitored(function useGridNavigationSelection<ParentOrRowElement extends Element, RowElement extends Element>({
    gridNavigationParameters,
    linearNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    refElementReturn,
    paginatedChildrenParameters,
    rearrangeableChildrenReturn,
    childrenHaveFocusReturn,
    ...void2
}: Parameter<UseGridNavigationSelection<ParentOrRowElement, RowElement>>): ReturnType<UseGridNavigationSelection<ParentOrRowElement, RowElement>> {

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
        rearrangeableChildrenReturn,
        refElementReturn
    });

    const {
        childrenHaveFocusParameters,
        context: { singleSelectionContext, multiSelectionContext },
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
        typeaheadNavigationReturn
    }
})

/**
 * @compositeParams
 */
export const useGridNavigationSelectionRow = monitored(function useGridNavigationSelectionRow<RowElement extends Element, CellElement extends Element>({
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
}: Parameter<UseGridNavigationSelectionRow<RowElement, CellElement>>): ReturnType<UseGridNavigationSelectionRow<RowElement, CellElement>> {
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
})

/**
 * @compositeParams
 */
export const useGridNavigationSelectionCell = monitored(function useGridNavigationSelectionCell<CellElement extends Element>(p: Parameter<UseGridNavigationSelectionCell<CellElement>>): ReturnType<UseGridNavigationSelectionCell<CellElement>> {
    return useGridNavigationCell<CellElement>(p);
})