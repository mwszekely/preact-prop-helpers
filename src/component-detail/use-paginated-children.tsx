import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useLayoutEffect, useRef, useState } from "preact/hooks";
import { UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation";
import { UseRovingTabIndexChildInfo } from "./use-roving-tabindex";
import { UseCompleteListNavigationChildInfo } from "component-use/use-list-navigation-complete";
import { h } from "preact";

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
    paginatedChild: { getDefaultPaginationVisible(i: number): boolean; }
}

export function usePaginatedChildren<E extends Element, M extends UsePaginatedChildrenInfo<E>>({
    managedChildrenReturn,
    linearNavigationParameters: { indexDemangler, indexMangler },
    paginatedChildrenParameters: { paginationMax, paginationMin } }: UsePaginatedChildrenParameters<E, M>) {

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
        managedChildrenParameters: {
            onChildCountChange: useStableCallback((count: number) => {
                if (paginationMax != null || paginationMin != null) {
                    const min = (paginationMin ?? 0);
                    const max = (paginationMax ?? count);
                    for (let i = min; i < max; ++i) {
                        managedChildrenReturn.getChildren().getAt(i)?.setParentIsPaginated(parentIsPaginated);
                        managedChildrenReturn.getChildren().getAt(i)?.setChildCountIfPaginated(count);
                    }
                }
            }),
        },
        paginatedChildrenReturn: { refreshPagination }
    }
}



export interface UsePaginatedChildParameters extends UsePaginatedChildContext {
    managedChildParameters: { index: number; }
}

export function usePaginatedChild<ChildElement extends Element>({ managedChildParameters: { index }, paginatedChild: { getDefaultPaginationVisible } }: UsePaginatedChildParameters) {
    const [parentIsPaginated, setParentIsPaginated] = useState(false);
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null as number | null);
    const [paginatedVisible, setPaginatedVisible] = useState(false);

    useLayoutEffect(() => {

        setPaginatedVisible(getDefaultPaginationVisible(index));
    }, [index])

    return {
        props: !parentIsPaginated ? {} : (({ "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) } as h.JSX.HTMLAttributes<ChildElement>)),
        paginatedChildReturn: { paginatedVisible },
        managedChildParameters: {
            setPaginationVisible: setPaginatedVisible,
            setChildCountIfPaginated,
            setParentIsPaginated
        }
    }
}