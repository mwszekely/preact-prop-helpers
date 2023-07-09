import { UseRefElementReturnType } from "../index.js";
import { UseManagedChildrenParameters, UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useState } from "../preact-extensions/use-state.js";
import { TargetedPick, useCallback, useEffect, useMemo, useRef } from "../util/lib.js";
import { ElementProps, Nullable } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { UseLinearNavigationParameters } from "./keyboard-navigation/use-linear-navigation.js";
import { UseRovingTabIndexChildInfo, UseRovingTabIndexReturnType } from "./keyboard-navigation/use-roving-tabindex.js";

export interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends UseRovingTabIndexChildInfo<TabbableChildElement> {
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}

export interface UsePaginatedChildrenParameters<ParentElement extends Element, TabbableChildElement extends Element, M extends UsePaginatedChildrenInfo<TabbableChildElement>> {
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    linearNavigationParameters: Pick<UseLinearNavigationParameters<any, TabbableChildElement, M>["linearNavigationParameters"], "indexDemangler">;
    paginatedChildrenParameters: { paginationMin: Nullable<number>; paginationMax: Nullable<number>; }
    rovingTabIndexReturn: Pick<UseRovingTabIndexReturnType<any, TabbableChildElement, M>["rovingTabIndexReturn"], "getTabbableIndex" | "setTabbableIndex">;
    refElementReturn: Pick<UseRefElementReturnType<ParentElement>["refElementReturn"], "getElement">;
}

export interface UsePaginatedChildContext {
    paginatedChildContext: {
        // UNSTABLE, changes in this will cause the context to re-create itself.
        parentIsPaginated: boolean;
        getDefaultPaginationVisible(i: number): boolean;
    }
}

export interface UsePaginatedChildrenReturnType extends TargetedPick<UseManagedChildrenParameters<any>, "managedChildrenParameters","onChildrenCountChange"> {
    paginatedChildrenReturn: {
        refreshPagination: (min: Nullable<number>, max: Nullable<number>) => void;
        /**
         * **IMPORTANT**: This is only tracked when pagination is enabled.
         * 
         * If pagination is not enabled, this is either `null` or some undefined previous number.
         */
        childCount: Nullable<number>;
    };
    context: UsePaginatedChildContext;
}

export function usePaginatedChildren<ParentElement extends Element, TabbableChildElement extends Element, M extends UsePaginatedChildrenInfo<TabbableChildElement>>({
    managedChildrenReturn: { getChildren },
    linearNavigationParameters: { indexDemangler },
    paginatedChildrenParameters: { paginationMax, paginationMin },
    rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex },
    refElementReturn: { getElement }
}: UsePaginatedChildrenParameters<ParentElement, TabbableChildElement, M>): UsePaginatedChildrenReturnType {
    monitorCallCount(usePaginatedChildren);

    const [childCount, setChildCount] = useState(null as number | null);
    const parentIsPaginated = (paginationMin != null || paginationMax != null);

    const lastPagination = useRef({ paginationMax: null as null | number, paginationMin: null as number | null});
    const refreshPagination = useCallback((paginationMin: Nullable<number>, paginationMax: Nullable<number>) => {
        const childMax = (getChildren().getHighestIndex() + 1);
        for (let i = 0; i <= childMax; ++i) {
            const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
            getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
            if (visible && (paginationMax != null || paginationMin != null))
                getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
        }

    }, [/* Must be empty */])
    useEffect(() => {
        // At this point, the children have not yet updated themselves to match the pagination.
        // We need to tell them to update, but also handle where the focus is.
        // If a current list item is focused, then we need to move focus to a paginated one
        // but we can't do it until they all re-render...
        // TODO: Something better than setTimeout for this, please...
        let tabbableIndex = getTabbableIndex();
        if (tabbableIndex != null) {
            let shouldFocus = getElement()?.contains(document.activeElement) || false;

            setTimeout(() => {

                if (paginationMin != null && tabbableIndex! < paginationMin) {
                    setTabbableIndex(paginationMin, undefined, shouldFocus);   // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                }
                else if (paginationMax != null && tabbableIndex! >= paginationMax) {
                    let next: number | null = paginationMax - 1;
                    if (next == -1)
                        next = null;
                    setTabbableIndex(next, undefined, shouldFocus);   // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                }
            }, 1)

        }

        refreshPagination(paginationMin, paginationMax);
        lastPagination.current.paginationMax = paginationMax ?? null;
        lastPagination.current.paginationMin = paginationMin ?? null;
    }, [paginationMax, paginationMin]);

    const getDefaultPaginationVisible = useCallback((i: number) => { return (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity)) }, []);
    const paginatedChildContext = useMemo<UsePaginatedChildContext["paginatedChildContext"]>(() => ({
        parentIsPaginated,
        getDefaultPaginationVisible
    }), [parentIsPaginated]);

    return {
        context: useMemo(() => ({ paginatedChildContext }), [paginatedChildContext]),
        managedChildrenParameters: {
            onChildrenCountChange: useStableCallback((count: number) => {
                if (paginationMax != null || paginationMin != null) {
                    setChildCount(count);
                    const min = (paginationMin ?? 0);
                    const max = (paginationMax ?? count);
                    for (let i = min; i < max; ++i) {
                        getChildren().getAt(i)?.setChildCountIfPaginated(count);
                    }
                }
                else {
                    // TODO: Make this debug only.
                    setChildCount(null);
                }
            }),
        },
        paginatedChildrenReturn: { refreshPagination, childCount }
    }
}



export interface UsePaginatedChildParameters {
    //paginatedChildrenParameters: { paginated: boolean };
    info: { index: number; }
    context: UsePaginatedChildContext;
}

export interface UsePaginatedChildReturn<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    paginatedChildReturn: {
        paginatedVisible: boolean;
        parentIsPaginated: boolean;
        hideBecausePaginated: boolean;
    };
    info: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">
}


export function usePaginatedChild<ChildElement extends Element>({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }: UsePaginatedChildParameters): UsePaginatedChildReturn<ChildElement> {
    monitorCallCount(usePaginatedChild);
    //const parentIsPaginated = (paginationMin != null || paginationMax != null);

    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null as number | null);
    const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);

    return {
        props: !parentIsPaginated ? {} : (({ "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) } as ElementProps<ChildElement>)),
        paginatedChildReturn: { paginatedVisible, parentIsPaginated, hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false },
        info: {
            setPaginationVisible: setPaginatedVisible,
            setChildCountIfPaginated
        }
    }
}