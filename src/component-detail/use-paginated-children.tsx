import { h } from "preact";
import { useStableObject } from "../preact-extensions/use-stable-getter";
import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";
import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { UseLinearNavigationParameters } from "./use-linear-navigation";
import { UseRovingTabIndexChildInfo } from "./use-roving-tabindex";

export interface UsePaginatedChildrenInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    setParentIsPaginated(parentIsPaginated: boolean): void;
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}

export interface UsePaginatedChildrenParameters<E extends Element, M extends UsePaginatedChildrenInfo<E>> {
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    linearNavigationParameters: Pick<UseLinearNavigationParameters<any, E>["linearNavigationParameters"], "indexDemangler" | "indexMangler">;
    paginatedChildrenParameters: { paginationMin: number | null; paginationMax: number | null; }
}

export interface UsePaginatedChildContext {
    paginatedChildContext: { getDefaultPaginationVisible(i: number): boolean; }
}

export interface UsePaginatedChildrenReturnType {
    managedChildrenParameters: {
        onChildCountChange: (count: number) => void;
    };
    paginatedChildrenReturn: {
        refreshPagination: () => void;
        /**
         * **IMPORTANT**: This is only tracked when pagination is enabled.
         * 
         * If pagination is not enabled, this is either `null` or some undefined previous number.
         */
        childCount: number | null;
    };
    context: UsePaginatedChildContext;
}

export function usePaginatedChildren<E extends Element, M extends UsePaginatedChildrenInfo<E>>({
    managedChildrenReturn,
    linearNavigationParameters: { indexDemangler, indexMangler },
    paginatedChildrenParameters: { paginationMax, paginationMin } }: UsePaginatedChildrenParameters<E, M>): UsePaginatedChildrenReturnType {

    const [childCount, setChildCount] = useState(null as number | null);
    const parentIsPaginated = (paginationMin != null || paginationMax != null);

    const lastPagination = useRef({ paginationMax: null as null | number, paginationMin: null as null | number });
    const refreshPagination = useStableCallback(() => {
        const childMax = (managedChildrenReturn.getChildren().getHighestIndex() + 1);
        for (let i = 0; i <= childMax; ++i) {
            const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
            managedChildrenReturn.getChildren().getAt(indexDemangler(i))?.setParentIsPaginated(parentIsPaginated);
            managedChildrenReturn.getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
            managedChildrenReturn.getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(managedChildrenReturn.getChildren().getHighestIndex() + 1);
        }

    })
    useLayoutEffect(() => {
        refreshPagination();
        lastPagination.current.paginationMax = paginationMax;
        lastPagination.current.paginationMin = paginationMin;
    }, [paginationMax, paginationMin]);

    return {
        context: useStableObject({
            paginatedChildContext: useStableObject({
                getDefaultPaginationVisible: useCallback((i) => { return parentIsPaginated ? (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity)) : true; }, [])
            })
        }),
        managedChildrenParameters: {
            onChildCountChange: useStableCallback((count: number) => {
                if (paginationMax != null || paginationMin != null) {
                    setChildCount(count);
                    const min = (paginationMin ?? 0);
                    const max = (paginationMax ?? count);
                    for (let i = min; i < max; ++i) {
                        managedChildrenReturn.getChildren().getAt(i)?.setParentIsPaginated(parentIsPaginated);
                        managedChildrenReturn.getChildren().getAt(i)?.setChildCountIfPaginated(count);
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
    managedChildParameters: { index: number; }
    context: UsePaginatedChildContext;
}

export interface UsePaginatedChildReturn<ChildElement extends Element> {
    props: h.JSX.HTMLAttributes<ChildElement>;
    paginatedChildReturn: {
        paginatedVisible: boolean;
        isPaginated: boolean;
    };
    managedChildParameters: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated" | "setParentIsPaginated">
}


export function usePaginatedChild<ChildElement extends Element>({ managedChildParameters: { index }, context: { paginatedChildContext: { getDefaultPaginationVisible } } }: UsePaginatedChildParameters): UsePaginatedChildReturn<ChildElement> {
    const [parentIsPaginated, setParentIsPaginated] = useState(false);
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null as number | null);
    const [paginatedVisible, setPaginatedVisible] = useState(getDefaultPaginationVisible(index));

    return {
        props: !parentIsPaginated ? {} : (({ "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) } as h.JSX.HTMLAttributes<ChildElement>)),
        paginatedChildReturn: { paginatedVisible, isPaginated: parentIsPaginated },
        managedChildParameters: {
            setPaginationVisible: setPaginatedVisible,
            setChildCountIfPaginated,
            setParentIsPaginated
        }
    }
}