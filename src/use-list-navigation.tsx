import { useCallback } from "preact/hooks";
import { useRefElement, UseRefElementReturnType } from "./use-ref-element";
import { SelectableChildInfo, useSingleSelection, useSingleSelectionChild, UseSingleSelectionChildParameters, UseSingleSelectionChildReturnTypeInfo, UseSingleSelectionParameters, UseSingleSelectionReturnTypeInfo } from "./use-single-selection";
import { useStableCallback } from "./use-stable-callback";
import { assertEmptyObject, ManagedChildInfo, ManagedChildOmits, OnChildrenMountChange, useManagedChild, UseManagedChildParameters, useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useHasCurrentFocus, UseHasCurrentFocusParameters, UseHasCurrentFocusReturnType } from "./use-has-current-focus";
import { useLinearNavigation, UseLinearNavigationParameters, UseLinearNavigationReturnTypeInfo, useTypeaheadNavigation, useTypeaheadNavigationChild, UseTypeaheadNavigationChildParameters, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnTypeInfo } from "./use-keyboard-navigation";
import { useRovingTabIndex, useRovingTabIndexChild, UseRovingTabIndexChildInfo, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnTypeInfo, UseRovingTabIndexParameters, UseRovingTabIndexReturnTypeInfo } from "./use-roving-tabindex";


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


//function identity<T>(t: T) { return t; }
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



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
export interface UseListNavigationParameters<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexParameters<ChildElement, M> {
    typeaheadNavigationParameters: UseTypeaheadNavigationParameters<ChildElement>["typeaheadNavigationParameters"];
    linearNavigationParameters: UseLinearNavigationParameters["linearNavigationParameters"];
}


type Get<T, K extends keyof T> = T[K]

export interface UseListNavigationChildParameters<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>> extends UseRovingTabIndexChildParameters<ChildElement> {
    managedChildrenReturn: UseManagedChildParameters<M>["managedChildrenReturn"];
    //hasCurrentFocusParameters: UseHasCurrentFocusParameters<ChildElement>["hasCurrentFocusParameters"];
    refElementReturn: Pick<UseRefElementReturnType<ChildElement>["refElementReturn"], "getElement">;
    typeaheadNavigationChildParameters: UseTypeaheadNavigationChildParameters<ChildElement>["typeaheadNavigationChildParameters"];
}


export interface UseListNavigationReturnTypeInfo<ParentOrChildElement extends Element, ChildElement extends Element> extends UseRovingTabIndexReturnTypeInfo<ChildElement> {
    linearNavigationReturn: UseLinearNavigationReturnTypeInfo<ParentOrChildElement>["linearNavigationReturn"];
    typeaheadNavigationChildParameters: UseTypeaheadNavigationReturnTypeInfo<ParentOrChildElement>["typeaheadNavigationChildParameters"];
    typeaheadNavigationReturn: UseTypeaheadNavigationReturnTypeInfo<ParentOrChildElement>["typeaheadNavigationReturn"];
}

// *** Return types (list, list-single, list-child, list-single-child)
export interface UseListNavigationReturnTypeWithHooks<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationReturnTypeInfo<ParentOrChildElement, ChildElement> {
}

export interface UseListNavigationChildReturnTypeInfo<ChildElement extends Element> extends UseRovingTabIndexChildReturnTypeInfo<ChildElement> {
    //hasCurrentFocusReturn: UseHasCurrentFocusReturnType<ChildElement>["hasCurrentFocusReturn"];
}

export interface UseListNavigationChildReturnTypeWithHooks<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement> {

    //props: h.JSX.HTMLAttributes<ChildElement>;
    //listNavigationChildProps: h.JSX.HTMLAttributes<ChildElement>;
}


export type UseListNavigationChild<ChildElement extends Element> = (a: UseListNavigationChildParameters<ChildElement, UseListNavigationChildInfo<ChildElement>>) => UseListNavigationChildReturnTypeWithHooks<ChildElement>;





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
        linearNavigationParameters
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

export function useListNavigationChild<ChildElement extends Element, M extends UseListNavigationChildInfo<ChildElement>>({
    refElementReturn,
    managedChildParameters: { hidden, index, ..._void5 },
    rovingTabIndexReturn,
    managedChildrenReturn,
    rovingTabIndexChildParameters,
    typeaheadNavigationChildParameters,
    ..._void2
}: UseListNavigationChildParameters<ChildElement, M>): UseListNavigationChildReturnTypeWithHooks<ChildElement> {

    const {
        hasCurrentFocusParameters,
        managedChildParameters: { getTabbable, setTabbable, tabbable, ...mcp2 },
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
    assertEmptyObject(mcp2);

    return {
        rovingTabIndexChildReturn,
        hasCurrentFocusParameters,
        managedChildParameters: {
            setTabbable,
            getTabbable,
            tabbable,
        }
    }
}


export interface UseListNavigationSingleSelectionParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends UseListNavigationParameters<ChildElement, M> {
    singleSelectionParameters: UseSingleSelectionParameters<ChildElement>["singleSelectionParameters"];
}

export interface UseListNavigationSingleSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends UseListNavigationReturnTypeInfo<ParentOrChildElement, ChildElement> {
    singleSelectionReturn: UseSingleSelectionReturnTypeInfo["singleSelectionReturn"];
}

export function useListNavigationSingleSelection<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    managedChildrenReturn: { getChildren },
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

    return {
        rovingTabIndexChildParameters,
        typeaheadNavigationChildParameters,
        managedChildrenParameters,
        rovingTabIndexReturn,
        singleSelectionReturn,
        linearNavigationReturn,
        typeaheadNavigationReturn,
    }
}

export interface UseListNavigationSingleSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>> extends UseListNavigationChildParameters<ChildElement, M> {
    singleSelectionChildParameters: UseSingleSelectionChildParameters<ChildElement>["singleSelectionChildParameters"];
    singleSelectionReturn: UseSingleSelectionChildParameters<ChildElement>["singleSelectionReturn"];
}

export interface UseListNavigationSingleSelectionChildReturnType<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement> {
    singleSelectionChildReturn: UseSingleSelectionChildReturnTypeInfo<ChildElement>["singleSelectionChildReturn"];
    pressParameters: UseSingleSelectionChildReturnTypeInfo<ChildElement>["pressParameters"];
}

export function useListNavigationSingleSelectionChild<ChildElement extends Element, M extends UseListNavigationSingleSelectionChildInfo<ChildElement>>({
    managedChildParameters: { hidden, index, ..._void5 },
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexChildParameters,
    rovingTabIndexReturn,
    singleSelectionChildParameters,
    singleSelectionReturn,
    typeaheadNavigationChildParameters,
    ..._void1
}: UseListNavigationSingleSelectionChildParameters<ChildElement, M>): UseListNavigationSingleSelectionChildReturnType<ChildElement> {

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ..._void3 },
        managedChildParameters: mcp1,
        pressParameters,
        singleSelectionChildReturn,
        ..._void2
    } = useSingleSelectionChild<ChildElement>({
        managedChildParameters: { index },
        singleSelectionChildParameters,
        singleSelectionReturn
    });

    const {
        managedChildParameters: mcp2,
        rovingTabIndexChildReturn,
        hasCurrentFocusParameters,
        ..._void4
    } = useListNavigationChild<ChildElement, M>({
        typeaheadNavigationChildParameters,
        managedChildParameters: { hidden, index },
        managedChildrenReturn,
        refElementReturn,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn
    });

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);
    assertEmptyObject(_void4);
    assertEmptyObject(_void5);

    return {
        hasCurrentFocusParameters,
        singleSelectionChildReturn,
        managedChildParameters: {
            ...mcp1,
            ...mcp2,
        },
        pressParameters,
        rovingTabIndexChildReturn
    }
}

/*

function ListNavTest() {
    type M = UseListNavigationSingleSelectionChildInfo<HTMLLIElement>;
    const disableArrowKeys = false;
    const disableHomeEndKeys = false;
    const getHighestIndex = useCallback(() => { return getChildren().getHighestIndex() }, []);
    const navigateAbsolute = useCallback((index: number, fromUserInteraction: boolean) => { rovingTabIndexReturn.setTabbableIndex(index, fromUserInteraction); }, []);
    const navigateRelative = useCallback((from: number, offset: number, fromUserInteraction: boolean) => { rovingTabIndexReturn.setTabbableIndex(from + offset, fromUserInteraction); }, []);
    const navigationDirection = "either" as const;
    const managedChildrenParameters: UseManagedChildrenParameters<M>["managedChildrenParameters"] = { onAfterChildLayoutEffect: undefined, onChildrenMountChange: useStableCallback<OnChildrenMountChange<number>>((m, u) => mcmc?.(m, u)) };
    const { managedChildrenReturn } = useManagedChildren<M>({ managedChildrenParameters });
    const { getChildren } = managedChildrenReturn;
    const {
        managedChildrenParameters: { onChildrenMountChange: mcmc },
        rovingTabIndexChildParameters,
        typeaheadNavigationChildParameters,
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn
    } = useListNavigationSingleSelection<HTMLOListElement, HTMLLIElement, M>({
        linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys, getHighestIndex, navigateAbsolute, navigateRelative, navigationDirection },
        managedChildrenReturn,
        rovingTabIndexParameters: { initiallyTabbedIndex: 0, onTabbableIndexChange: null },
        singleSelectionParameters: { initiallySelectedIndex: 0, onSelectedIndexChange: null },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 }
    });

    const {
        hasCurrentFocusParameters,
       // managedChildParameters,
        pressParameters,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn
    } = useListNavigationSingleSelectionChild({
        managedChildParameters: { hidden, index },
        managedChildrenReturn,
        refElementReturn,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        singleSelectionChildParameters: { ariaPropName: "aria-checked", selectionMode: "focus" },
        singleSelectionReturn,
        typeaheadNavigationChildParameters: { ...typeaheadNavigationChildParameters, text: "" }
    })
}*/


export interface GridChildRowInfo<RowElement extends Element> extends UseListNavigationChildInfo<RowElement> {

}

export interface GridChildCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> {

}

export interface UseGridNavigationParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement>> extends UseListNavigationParameters<RowElement, M> {


}

export interface UseGridNavigationReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element> extends UseListNavigationReturnTypeInfo<ParentOrRowElement, RowElement> {

}



export interface UseGridNavigationRowParameters<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement>, CM extends GridChildCellInfo<CellElement>> {
    asChildRowOfTable: UseListNavigationChildParameters<RowElement, RM>;
    asParentRowOfCells: UseListNavigationParameters<CellElement, CM>;

}

export interface UseGridNavigationRowReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element> {
    asChildRowOfTable: UseListNavigationChildReturnTypeInfo<RowElement>;
    asParentRowOfCells: UseListNavigationReturnTypeInfo<RowElement, CellElement>;
}

export interface UseGridNavigationRowInfo<RowElement extends Element> extends UseListNavigationChildInfo<RowElement> { }







export interface UseGridNavigationCellParameters<CellElement extends Element, CM extends GridChildCellInfo<CellElement>> extends UseListNavigationChildParameters<CellElement, CM> {
}

export interface UseGridNavigationCellReturnType<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element>  extends UseListNavigationChildReturnTypeInfo<CellElement> { }

export interface UseGridNavigationCellInfo<CellElement extends Element> extends UseListNavigationChildInfo<CellElement> { }


function useGridNavigation<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, M extends GridChildRowInfo<RowElement>>({
    linearNavigationParameters,
    managedChildrenReturn,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    ..._void2
}: UseGridNavigationParameters<ParentOrRowElement, RowElement, CellElement, M>): UseGridNavigationReturnType<ParentOrRowElement, RowElement, CellElement> {
    const {
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        managedChildrenParameters,
        typeaheadNavigationChildParameters,
        rovingTabIndexChildParameters,
        ...void1
    } = useListNavigation<ParentOrRowElement, RowElement, M>({
        linearNavigationParameters,
        managedChildrenReturn,
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });

    assertEmptyObject(void1);
    assertEmptyObject(_void2);

    return {
        managedChildrenParameters,
        typeaheadNavigationChildParameters,
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        rovingTabIndexChildParameters
    }
}

function useGridNavigationRow<ParentOrRowElement extends Element, RowElement extends Element, CellElement extends Element, RM extends GridChildRowInfo<RowElement>, CM extends GridChildRowInfo<CellElement>>({

    asChildRowOfTable,
    asParentRowOfCells,
    ..._void1
}: UseGridNavigationRowParameters<ParentOrRowElement, RowElement, CellElement, RM, CM>): UseGridNavigationRowReturnType<ParentOrRowElement, RowElement, CellElement> {


    const {
        managedChildParameters,
        rovingTabIndexChildReturn,
        hasCurrentFocusParameters,
        ..._void2
    } = useListNavigationChild<RowElement, RM>(asChildRowOfTable);

    const {
        linearNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        ..._void3
    } = useListNavigation<RowElement, CellElement, CM>(asParentRowOfCells)

    assertEmptyObject(_void1);
    assertEmptyObject(_void2);
    assertEmptyObject(_void3);


    return {
        asChildRowOfTable: {
            hasCurrentFocusParameters,
            managedChildParameters,
            rovingTabIndexChildReturn
        },
        asParentRowOfCells: {
            linearNavigationReturn,
            managedChildrenParameters,
            rovingTabIndexChildParameters,
            rovingTabIndexReturn,
            typeaheadNavigationChildParameters,
            typeaheadNavigationReturn
        },
    }
}


function useGridNavigationCell<RowElement extends Element, CellElement extends Element, CM extends GridChildRowInfo<CellElement>>({
    managedChildParameters,
    managedChildrenReturn,
    refElementReturn,
    rovingTabIndexChildParameters,
    rovingTabIndexReturn,
    typeaheadNavigationChildParameters,
    ..._void1
}: UseGridNavigationCellParameters<CellElement, CM>): UseGridNavigationCellReturnType<ParentOrRowElement, RowElement, CellElement> {
    const {
        hasCurrentFocusParameters,
        managedChildParameters,
        rovingTabIndexChildReturn,
        ...void2
    } = useListNavigationChild<CellElement, CM>({ 
        managedChildParameters, 
        managedChildrenReturn, 
        refElementReturn, 
        rovingTabIndexChildParameters, 
        rovingTabIndexReturn, 
        typeaheadNavigationChildParameters
     });

     assertEmptyObject(_void1);
     assertEmptyObject(void2;)
}

function foo() {
    type TableElement = HTMLTableElement;
    type RowElement = HTMLTableRowElement;
    type CellElement = HTMLTableCellElement;
    const { managedChildrenReturn } = useManagedChildren<UseGridNavigationRowInfo<RowElement>>({ managedChildrenParameters: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
    const getHighestIndex = useCallback(() => managedChildrenReturn.getChildren().getHighestIndex(), []);
    const navigateAbsolute = useCallback((index: number, fromUserInteraction: boolean) => { rovingTabIndexReturn.setTabbableIndex(index, fromUserInteraction); }, []);
    const navigateRelative = useCallback((from: number, offset: number, fromUserInteraction: boolean) => { rovingTabIndexReturn.setTabbableIndex(from + offset, fromUserInteraction); }, []);
    const {
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    } = useGridNavigation<TableElement, RowElement, CellElement>({
        linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false, getHighestIndex, navigationDirection: "either", navigateAbsolute, navigateRelative },
        managedChildrenReturn,
        rovingTabIndexParameters: { initiallyTabbedIndex: 0, onTabbableIndexChange: null },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 }
    });
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





