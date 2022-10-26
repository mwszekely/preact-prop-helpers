import { assertEmptyObject, OnChildrenMountChange } from "./use-child-manager";
import { useLinearNavigation, UseLinearNavigationParameters, UseLinearNavigationReturnTypeInfo, useTypeaheadNavigation, useTypeaheadNavigationChild, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationContext, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnTypeInfo } from "./use-keyboard-navigation";
import { useRovingTabIndex, useRovingTabIndexChild, UseRovingTabIndexChildInfo, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnTypeInfo, UseRovingTabIndexContext, UseRovingTabIndexParameters, UseRovingTabIndexReturnTypeInfo } from "./use-roving-tabindex";
import { SelectableChildInfo, useSingleSelection, useSingleSelectionChild, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnTypeInfo, UseSingleSelectionParameters, UseSingleSelectionReturnTypeInfo } from "./use-single-selection";
import { useStableCallback } from "./use-stable-callback";


/**
 * 
 * TODO: This table was scrapped when this was changed to just accept a collator directly,
 * but it's not bad for a collation crash course and I might use it again.
 * Even just as a "this is why it's important and good to use these things" thing.
 * 
 * |Lang.|Target|User input|`base`|`accent`|`case`|`variant`|
 * |----|----|----|----|----|----|----|
 * |EN|Hi|Bye|❌|❌|❌|❌|
 * |EN|Hi|Hi|✅|✅|✅|✅|
 * |EN|Hi|Ｈｉ|✅|✅|✅|❌|
 * |EN|Hi|hi|✅|✅|❌|❌|
 * |EN|Hi|Hï|✅|❌|❌|❌|
 * |EN|å|aa|❌|❌|❌|❌|
 * |DA|å|aa|✅|✅|✅|❌|
 * |DA|å|AA|✅|✅|❌|❌|
 * |DA|å|Aa|✅|✅|❌|❌|
 * |DA|å|aA|❌|❌|❌|❌|
 * |EN|å|a|✅|✅|❌|❌|
 * |DA|å|a|✅|✅|❌|❌|
 * |JP|着|着|✅|✅|✅|✅|
 * |JP|カ|ｶ|✅|✅|✅|✅|
 * |JP|カ|か|✅|✅|✅|❌|
 * |JP|カ|ヵ|✅|✅|✅|❌|
 * |JP|カ|㋕|✅|✅|❌|❌|
 * |JP|カ|ガ|✅|❌|❌|❌|
 * |JP|カ|力|❌|❌|❌|❌|
 * |ZH|紅|红|❌|❌|❌|❌|
 * 
 * 
 * (Note to self: At some point, this file will probably be normalized
 * by somebody and 着 will turn back into 着.)
 * 
 */
const _dummy: any = null;


/*
export function useListNavigationProps<E extends Element, CE extends Element>(r: ExtractedProps<UseListNavigationReturnTypeInfo<E, CE>>, ...otherProps: h.JSX.HTMLAttributes<E>[]) {
    return [r.linearNavigationReturn.propsStable, r.typeaheadNavigationReturn.propsStable, ...otherProps];
}
export function useListNavigationChildProps<E extends Element>(r: UseListNavigationChildReturnTypeInfo<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]) {
    return [r.rovingTabIndexChildReturn.propsUnstable, ...otherProps];
}


export function useListNavigationSingleSelectionProps<E extends Element, CE extends Element>(r: UseListNavigationSingleSelectionReturnType<E, CE>, ...otherProps: h.JSX.HTMLAttributes<E>[]) {
    return useListNavigationProps<E, CE>(r, ...otherProps);
}
export function useListNavigationChildSingleSelectionProps<E extends Element>(r: UseListNavigationSingleSelectionChildReturnType<E>, ...otherProps: h.JSX.HTMLAttributes<E>[]) {
    return useListNavigationChildProps<E>(r, ...useSingleSelectionChildProps<E>(r, ...otherProps));
}*/



export interface UseListNavigationChildInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement> {
    text: string;
}

export interface UseListNavigationSingleSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, SelectableChildInfo<TabbableChildElement> { }

/**
 * @param fromUserInteraction Whether the user interacted with this child as a means of navigating to it.  In that was the case, the child is also focused. Otherwise, focus moves as the browser determines.
 */
export type NavigateToIndex = (i: number | null, fromUserInteraction: boolean) => void;




//export type ListNavigationParametersOmits = keyof LSP;

// *** Parameters (list, list-single, list-child, list-single-child)
export interface UseListNavigationParameters<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexParameters<ChildElement, M>, Omit<UseTypeaheadNavigationParameters<ChildElement>, "rovingTabIndexReturn">, Omit<UseLinearNavigationParameters, "rovingTabIndexReturn" | "linearNavigationParameters"> {
    linearNavigationParameters: Omit<UseLinearNavigationParameters["linearNavigationParameters"],
        //"navigateRelative" | "navigateAbsolute"
        never
    >;
}

export interface UseListNavigationChildParameters<ChildElement extends Element> extends UseRovingTabIndexChildParameters<ChildElement>, UseTypeaheadNavigationChildParameters<ChildElement> {
    managedChildParameters: UseRovingTabIndexChildParameters<ChildElement>["managedChildParameters"] & UseTypeaheadNavigationChildParameters<ChildElement>["managedChildParameters"];
}


export interface UseListNavigationReturnTypeInfo<ParentOrChildElement extends Element, ChildElement extends Element> extends UseRovingTabIndexReturnTypeInfo<ChildElement>, UseLinearNavigationReturnTypeInfo<ParentOrChildElement>, UseTypeaheadNavigationReturnTypeInfo<ParentOrChildElement> { }


export interface UseListNavigationReturnTypeWithHooks<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationReturnTypeInfo<ParentOrChildElement, ChildElement> { }

export interface UseListNavigationChildReturnTypeInfo<ChildElement extends Element> extends UseRovingTabIndexChildReturnTypeInfo<ChildElement> { }

export interface UseListNavigationChildReturnTypeWithHooks<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement> { }


export type UseListNavigationChild<ChildElement extends Element> = (a: UseListNavigationChildParameters<ChildElement>) => UseListNavigationChildReturnTypeWithHooks<ChildElement>;

export interface UseListNavigationContext<ChildElement extends Element> extends UseRovingTabIndexContext<ChildElement>, UseTypeaheadNavigationContext<ChildElement> {

}


/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    managedChildrenReturn,
    ..._void1
}: UseListNavigationParameters<ChildElement, M>): UseListNavigationReturnTypeWithHooks<ParentOrChildElement, ChildElement> {

    const {
        managedChildrenParameters,
        rovingTabIndexReturn,
        rovingTabIndexChildParameters,
        ..._void3
    } = useRovingTabIndex<ChildElement, M>({
        managedChildrenReturn,
        rovingTabIndexParameters
    });

    const { setTabbableIndex } = rovingTabIndexReturn;
    const { onChildrenMountChange } = managedChildrenParameters;

    const {
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        ..._void4
    } = useTypeaheadNavigation<ParentOrChildElement, ChildElement>({
        typeaheadNavigationParameters,
        rovingTabIndexReturn
    });

    const {
        linearNavigationReturn,
        ..._void5
    } = useLinearNavigation<ParentOrChildElement>({
        rovingTabIndexReturn,
        linearNavigationParameters,
    });

    assertEmptyObject(_void1);
    assertEmptyObject(_void3);
    assertEmptyObject(_void4);
    assertEmptyObject(_void5);

    return {
        typeaheadNavigationChildParameters,
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        rovingTabIndexChildParameters,
        managedChildrenParameters: {
            onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => onChildrenMountChange?.(m, u))
        }
    }
}

export function useListNavigationChild<ChildElement extends Element>({
    managedChildParameters: { hidden, index, ..._void5 },
    rovingTabIndexReturn,
    rovingTabIndexChildParameters,
    typeaheadNavigationChildParameters,
    ..._void2
}: UseListNavigationChildParameters<ChildElement>): UseListNavigationChildReturnTypeWithHooks<ChildElement> {

    const {
        hasCurrentFocusParameters,
        //managedChildParameters: { getTabbable, setTabbable, tabbable, ...mcp2 },
        rovingTabIndexChildReturn,
        ..._void3
    } = useRovingTabIndexChild<ChildElement>({
        rovingTabIndexChildParameters,
        managedChildParameters: { hidden, index },
        rovingTabIndexReturn
    });

    const _void: void = useTypeaheadNavigationChild<ChildElement>({
        managedChildParameters: { index },
        typeaheadNavigationChildParameters
    });

    assertEmptyObject(_void2);
    assertEmptyObject(_void3);
    assertEmptyObject(_void5);
    //assertEmptyObject(mcp2);

    return {
        rovingTabIndexChildReturn,
        hasCurrentFocusParameters,
        /*managedChildParameters: {
            setTabbable,
            getTabbable,
            tabbable,
        }*/
    }
}


export interface UseListNavigationSingleSelectionParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends UseListNavigationParameters<ChildElement, M> {
    singleSelectionParameters: UseSingleSelectionParameters<ChildElement>["singleSelectionParameters"];
}

export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationReturnTypeInfo<ParentOrChildElement, ChildElement>, UseSingleSelectionReturnTypeInfo { }

export function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn: { getChildren, ...void4 },
    ..._void3
}: UseListNavigationSingleSelectionParameters<ChildElement, M>): UseListNavigationSingleSelectionReturnType<ParentOrChildElement, ChildElement> {
    const {
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        managedChildrenParameters,
        typeaheadNavigationChildParameters,
        rovingTabIndexChildParameters,
        ..._void1
    } = useListNavigation<ParentOrChildElement, ChildElement, M>({
        linearNavigationParameters,
        rovingTabIndexParameters,
        typeaheadNavigationParameters,
        managedChildrenReturn: { getChildren }
    });

    const {
        childrenHaveFocusParameters,
        singleSelectionReturn,
        ..._void2
    } = useSingleSelection<ChildElement>({
        rovingTabIndexReturn,
        managedChildrenReturn: { getChildren },
        singleSelectionParameters
    });

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);
    assertEmptyObject(void4);

    return {
        childrenHaveFocusParameters,
        rovingTabIndexChildParameters,
        typeaheadNavigationChildParameters,
        managedChildrenParameters,
        rovingTabIndexReturn,
        singleSelectionReturn,
        linearNavigationReturn,
        typeaheadNavigationReturn,
    }
}

export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element> extends UseListNavigationChildParameters<ChildElement> {
    singleSelectionChildParameters: UseSingleSelectionChildParameters<ChildElement>["singleSelectionChildParameters"];
    singleSelectionReturn: UseSingleSelectionChildParameters<ChildElement>["singleSelectionReturn"];
}

export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement>, UseSingleSelectionChildReturnTypeInfo<ChildElement> {
    // singleSelectionChildReturn: UseSingleSelectionChildReturnTypeInfo<ChildElement>["singleSelectionChildReturn"];
    //pressParameters: UseSingleSelectionChildReturnTypeInfo<ChildElement>["pressParameters"];
}

export function useListNavigationSingleSelectionChild<ChildElement extends Element>({
    managedChildParameters: { hidden, index, ..._void5 },
    rovingTabIndexChildParameters,
    rovingTabIndexReturn,
    singleSelectionChildParameters,
    singleSelectionReturn,
    typeaheadNavigationChildParameters,
    ..._void1
}: UseListNavigationSingleSelectionChildParameters<ChildElement>): UseListNavigationSingleSelectionChildReturnType<ChildElement> {

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 },
        managedChildParameters,
        pressParameters,
        singleSelectionChildReturn,
        ..._void2
    } = useSingleSelectionChild<ChildElement>({
        managedChildParameters: { index },
        singleSelectionChildParameters,
        singleSelectionReturn
    });

    const {
        //managedChildParameters: mcp2,
        rovingTabIndexChildReturn,
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ..._void6 },
        ..._void4
    } = useListNavigationChild<ChildElement>({
        typeaheadNavigationChildParameters,
        managedChildParameters: { hidden, index },
        rovingTabIndexChildParameters,
        rovingTabIndexReturn
    });

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);
    assertEmptyObject(_void4);
    assertEmptyObject(_void5);
    assertEmptyObject(_void6);

    return {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback<NonNullable<typeof ocfic1>>((focused, previouslyFocused) => { ocfic1?.(focused, previouslyFocused); ocfic2?.(focused, previouslyFocused); })
        },
        singleSelectionChildReturn,
        managedChildParameters,
        pressParameters,
        rovingTabIndexChildReturn
    }
}


/*
function foo() {
    type TableElement = HTMLTableElement;
    type RowElement = HTMLTableRowElement;
    type CellElement = HTMLTableCellElement;
    type RM = UseGridNavigationRowInfo<RowElement>;
    type CM = UseGridNavigationCellInfo<RowElement>;
    const { managedChildrenReturn } = useManagedChildren<UseGridNavigationRowInfo<RowElement>>({ managedChildrenParameters: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
    const getHighestIndex = useCallback(() => managedChildrenReturn.getChildren().getHighestIndex(), []);
    const navigateAbsolute = useCallback((index: number, fromUserInteraction: boolean) => { setTabbableIndex(index, fromUserInteraction); }, []);
    const navigateRelative = useCallback((from: number, offset: number, fromUserInteraction: boolean) => { setTabbableIndex(from + offset, fromUserInteraction); }, []);
    const {
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildParameters,
        typeaheadNavigationChildParameters
    } = useGridNavigation<TableElement, RowElement, RM>({
        linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false, getHighestIndex, navigationDirection: "either", navigateAbsolute, navigateRelative },
        managedChildrenReturn,
        rovingTabIndexParameters: { initiallyTabbedIndex: 0, onTabbableIndexChange: null },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 }
    });
    const { setTabbableIndex } = rovingTabIndexReturn;




    const { } = useGridNavigationRow<RowElement, CellElement, RM, CM>({
        asChildRowOfTable: { managedChildParameters: { hidden, index }, managedChildrenReturn, refElementReturn, rovingTabIndexChildParameters, rovingTabIndexReturn, typeaheadNavigationChildParameters },
        asParentRowOfCells: { linearNavigationParameters, managedChildrenReturn, rovingTabIndexParameters, typeaheadNavigationParameters }
    })
}


function foo2(managedChildrenReturn: UseManagedChildrenReturnTypeInfo<UseGridNavigationRowInfo<HTMLTableRowElement>>["managedChildrenReturn"]) {
    type TableElement = HTMLTableElement;
    type RowElement = HTMLTableRowElement;
    type CellElement = HTMLTableCellElement;

    const hidden = false;
    const index = 0;
    const text = "";
    const { refElementReturn } = useRefElement<RowElement>({ refElementParameters: { onElementChange: undefined, onMount: undefined, onUnmount: undefined } })

    const {
        hasCurrentFocusReturn,
        managedChildParameters: { setTabbable },
        rovingTabIndexChildReturn: { getTabbable, propsUnstable, tabbable }
    } = useGridNavigationRow<TableElement, RowElement, CellElement>({
        hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
        managedChildParameters: { hidden, index },
        managedChildrenReturn,
        typeaheadNavigationChildParameters: {},
        refElementReturn,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn: { setTabbableIndex }
    });



    useManagedChild<UseGridNavigationRowInfo<RowElement>>({
        managedChildParameters: { focusSelf, getElement, getTabbable, hidden, index, setTabbable, tabbable, text },
        managedChildrenReturn
    })
}

*/



