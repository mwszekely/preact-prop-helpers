import { useCallback, useEffect } from "preact/hooks";
import { ManagedChildOmits, ManagedChildren, ManagedChildrenOmits, OnChildrenMountChange } from "./use-child-manager";
import { UseHasCurrentFocusParameters } from "./use-has-current-focus";
import { LinearNavigationOmits, TypeaheadNavigationOmits, useLinearNavigation, UseLinearNavigationParameters, UseLinearNavigationReturnTypeInfo, useTypeaheadNavigation, UseTypeaheadNavigationParameters, UseTypeaheadNavigationReturnTypeInfo } from "./use-keyboard-navigation";
import { useEnsureStability } from "./use-passive-state";
import { RovingTabIndexChildOmits, RovingTabIndexParametersOmits, useRovingTabIndex, UseRovingTabIndexChildParameters, UseRovingTabIndexChildReturnTypeInfo, UseRovingTabIndexParameters, UseRovingTabIndexReturnTypeInfo, UseRovingTabIndexSubInfo } from "./use-roving-tabindex";
import { useStableGetter } from "./use-stable-getter";


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


function identity<T>(t: T) { return t; }
type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;



export interface UseListNavigationSubInfo<C> {
    text: string;
    subInfo: C;
}

/**
 * @param fromUserInteraction Whether the user interacted with this child as a means of navigating to it.  In that was the case, the child is also focused. Otherwise, focus moves as the browser determines.
 */
export type NavigateToIndex = (i: number | null, fromUserInteraction: boolean) => void;


interface LSP {

    /**
     * This and indexDemangler are used to allow children to be navigated in an order
     * that doesn't necessarily match their child order, like if a list is sorted.
     * 
     * Used to turn an "absolute" index into a "sorted/filtered/mangled" one.
     * 
     * For example, navigateToFirst mangles 0 and navigates to that resulting row.
     * @param rawIndex 
     */
    indexMangler?(rawIndex: number): number;

    /**
     * Used to turn a "mangled" index into it's "unsorted" or "unmangled" index.
     * 
     * For example, when incrementing or decrementing the currently selected index,
     * it needs to be demangled to do "normal" math on it, and then re-mangled (above)
     * to turn that absolute row index back into a mangled one.
     * @param transformedIndex 
     */
    indexDemangler?(transformedIndex: number): number;
}

export type ListNavigationParametersOmits = keyof LSP;

// *** Parameters (list, list-single, list-child, list-single-child)
export interface UseListNavigationParameters<LsOmits extends ListNavigationParametersOmits, LnOmits extends LinearNavigationOmits, TnOmits extends TypeaheadNavigationOmits, RtiOmits extends RovingTabIndexParametersOmits, McOmits extends ManagedChildrenOmits> extends
    UseRovingTabIndexParameters<RtiOmits, McOmits>,
    UseTypeaheadNavigationParameters<TnOmits | "getIndex" | "setIndex">,
    UseLinearNavigationParameters<LnOmits | "navigateToFirst" | "navigateToLast" | "navigateToNext" | "navigateToPrev"> {
    listNavigationParameters: Omit<LSP, LsOmits>;
}





export type ListNavigationChildOmits = keyof UseListNavigationSubInfo<any>;
export interface UseListNavigationChildParameters<ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string, LsOmits extends ListNavigationChildOmits, RtiOmits extends RovingTabIndexChildOmits, McOmits extends ManagedChildOmits, SubbestInfo> extends
    UseRovingTabIndexChildParameters<ChildElement, UseListNavigationSubInfo<LsSubInfo>, ExtraFlagKeys, RtiOmits, McOmits, SubbestInfo> {
    //rovingTabIndex: Omit<UseRovingTabIndexChildParameters<UseListNavigationSubInfo<LsSubInfo>, ExtraFlagKeys, never>["rovingTabIndex"], "subInfo">;
    listNavigationChildParameters: Omit<UseListNavigationSubInfo<LsSubInfo>, LsOmits | "subInfo">;
}


export interface UseListNavigationReturnTypeInfo<ParentOrChildElement extends Element, ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string> extends
    UseRovingTabIndexReturnTypeInfo<UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<LsSubInfo>>, "tabbable" | ExtraFlagKeys>,
    UseTypeaheadNavigationReturnTypeInfo<ParentOrChildElement>,
    UseLinearNavigationReturnTypeInfo<ParentOrChildElement> {
    listNavigationReturn: {
        navigateToIndex: NavigateToIndex
    };
}

// *** Return types (list, list-single, list-child, list-single-child)
export interface UseListNavigationReturnTypeWithHooks<ParentOrChildElement extends Element, ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string> extends
    UseListNavigationReturnTypeInfo<ParentOrChildElement, ChildElement, LsSubInfo, ExtraFlagKeys> {

    /** **STABLE** */
    useListNavigationChild: UseListNavigationChild<ChildElement, LsSubInfo, ExtraFlagKeys>;
}

export interface UseListNavigationChildReturnTypeInfo<ChildElement extends Element> extends UseRovingTabIndexChildReturnTypeInfo<ChildElement> {
    hasCurrentFocusParameters: Required<Pick<UseHasCurrentFocusParameters<ChildElement>["hasCurrentFocusParameters"], "onCurrentFocusedInnerChanged">>;
    //onFocusedInnerChanged: (focused: boolean, _prevFocused: boolean | undefined) => void;
}

export interface UseListNavigationChildReturnTypeWithHooks<ChildElement extends Element> extends UseListNavigationChildReturnTypeInfo<ChildElement> {
    //props: h.JSX.HTMLAttributes<ChildElement>;
    //listNavigationChildProps: h.JSX.HTMLAttributes<ChildElement>;
}


export type UseListNavigationChild<ChildElement extends Element, LsSubInfo, K extends string> = (a: UseListNavigationChildParameters<ChildElement, LsSubInfo, K, never, never, never, LsSubInfo>) => UseListNavigationChildReturnTypeWithHooks<ChildElement>;

/**
 * Implements proper keyboard navigation for components like listboxes, button groups, menus, etc.
 * 
 * In the document order, there will be only one "focused" or "tabbable" element, making it act more like one complete unit in comparison to everything around it.
 * Navigating forwards/backwards can be done with the arrow keys, Home/End keys, or any text for typeahead to focus the next item that matches.
 */
export function useListNavigation<ParentOrChildElement extends Element, ChildElement extends Element, LsSubInfo, ExtraFlagKeys extends string>({
    managedChildrenParameters: { onChildrenMountChange, ...mc },
    rovingTabIndexParameters,
    listNavigationParameters: { indexDemangler, indexMangler },
    linearNavigationParameters,
    typeaheadNavigationParameters
}: UseListNavigationParameters<never, never, never, never, never>): UseListNavigationReturnTypeWithHooks<ParentOrChildElement, ChildElement, LsSubInfo, ExtraFlagKeys> {
    indexMangler ??= identity;
    indexDemangler ??= identity;

    useEnsureStability("useListNavigation", indexMangler, indexDemangler);


    const { managedChildrenReturn, rovingTabIndexReturn, useRovingTabIndexChild } = useRovingTabIndex<ChildElement, UseListNavigationSubInfo<LsSubInfo>, ExtraFlagKeys>({
        managedChildrenParameters: {
            ...mc, onChildrenMountChange: useCallback<OnChildrenMountChange<number>>((m, u) => {
                onChildrenMountChange?.(m, u);
            }, [])
        },
        rovingTabIndexParameters
    });

    const { children } = managedChildrenReturn;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;

    const navigateToIndex = useCallback((i: number | null, fromUserInteraction: boolean) => {
        if (i != null) {
            const nextIndex = tryNavigateToIndex({
                children: children,
                default: 0,
                target: i,
                searchDirection: 1,
                indexMangler: indexMangler ?? identity,
                indexDemangler: indexDemangler ?? identity
            });
            setTabbableIndex(i == null ? null : nextIndex, fromUserInteraction);
        }
        else {
            setTabbableIndex(null, fromUserInteraction);
        }
    }, []);

    const {
        useTypeaheadNavigationChild,
        typeaheadNavigationReturn
    } = useTypeaheadNavigation<ParentOrChildElement>({
        typeaheadNavigationParameters: {
            getIndex: getTabbableIndex,
            setIndex: useCallback((index: (number | null) | ((prev: number | null) => (number | null))) => {
                setTabbableIndex(index, true);
            }, []),
            ...typeaheadNavigationParameters
        }
    });
    const { linearNavigationReturn } = useLinearNavigation<ParentOrChildElement>({
        linearNavigationParameters: {
            navigateToPrev: useCallback(() => {
                setTabbableIndex(c => {
                    return tryNavigateToIndex({ children, default: c ?? 0, target: indexDemangler!(indexMangler!((c ?? 0)) - 1), searchDirection: -1, indexMangler: indexMangler ?? identity, indexDemangler: indexDemangler ?? identity })
                }, true)
            }, []),
            navigateToNext: useCallback(() => {
                setTabbableIndex(c => {
                    return tryNavigateToIndex({ children, default: c ?? 0, target: indexDemangler!(indexMangler!(c ?? 0) + 1), searchDirection: 1, indexMangler: indexMangler ?? identity, indexDemangler: indexDemangler ?? identity });
                }, true)
            }, []),
            navigateToFirst: useCallback(() => { navigateToIndex(indexDemangler!(0), true); }, []),
            navigateToLast: useCallback(() => { navigateToIndex(indexDemangler!(children.getHighestIndex()), true); }, []),
            ...linearNavigationParameters
        }
    });

    const useListNavigationChild = useCallback<UseListNavigationChild<ChildElement, LsSubInfo, ExtraFlagKeys>>((args: UseListNavigationChildParameters<ChildElement, LsSubInfo, ExtraFlagKeys, never, never, never, LsSubInfo>): UseListNavigationChildReturnTypeWithHooks<ChildElement> => {

        const {
            managedChildParameters: { index, flags },
            rovingTabIndexChildParameters: { focusSelf, hidden, noModifyTabIndex },
            listNavigationChildParameters: { text },
            refElementReturn,
            subInfo
        } = args;
        
        const _v: void = useTypeaheadNavigationChild({ text, index });
        const getIndex = useStableGetter(index);
        useEffect(() => {

            return () => {
                if (getTabbableIndex() == getIndex()) {
                    navigateToIndex(index, false);
                }
            };
        }, []);

        const { rovingTabIndexChildReturn, hasCurrentFocusParameters } = useRovingTabIndexChild({
            managedChildParameters: { index, flags },
            refElementReturn,
            rovingTabIndexChildParameters: { focusSelf, hidden: !!hidden, noModifyTabIndex },
            subInfo: { text, subInfo }
        });

        return {
            hasCurrentFocusParameters,
            rovingTabIndexChildReturn
        }
    }, []);

    return {
        linearNavigationReturn,
        useListNavigationChild,
        listNavigationReturn: { navigateToIndex },
        managedChildrenReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    }
}















export interface TryNavigateToIndexParameters<ChildElement extends Element, C, K extends string> {
    children: ManagedChildren<number, UseRovingTabIndexSubInfo<ChildElement, UseListNavigationSubInfo<C>>, K>;
    default: number;
    target: number;
    searchDirection: 1 | -1;
    indexMangler: (n: number) => number;
    indexDemangler: (n: number) => number;
}

export function tryNavigateToIndex<ChildElement extends Element, C, K extends string>({ children, searchDirection, indexDemangler, indexMangler, target }: TryNavigateToIndexParameters<ChildElement, C, K>) {
    const upper = children.getHighestIndex();
    const lower = 0;

    if (searchDirection === -1) {
        while ((target >= lower && (children.getAt(target) == null) || !!children.getAt(target)?.subInfo.hidden))
            target = indexDemangler(indexMangler(target) - 1);

        return target < lower ? indexDemangler(lower) : target;
    }
    else if (searchDirection === 1) {
        while ((target <= upper && children.getAt(target) == null) || !!children.getAt(target)?.subInfo.hidden)
            target = indexDemangler(indexMangler(target) + 1);

        return target > upper ? indexDemangler(upper) : target;
    }
    else {
        return lower;
    }
}

