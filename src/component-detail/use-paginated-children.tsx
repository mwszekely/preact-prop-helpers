import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children";
import { useStableCallback } from "../preact-extensions/use-stable-callback";
import { useLayoutEffect, useRef } from "preact/hooks";
import { UseLinearNavigationParameters, UseLinearNavigationReturnType } from "./use-linear-navigation";
import { UseRovingTabIndexChildInfo } from "./use-roving-tabindex";

export interface UsePaginatedChildrenInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    setPaginationVisible(visible: boolean): void;
}

export interface UsePaginatedChildParameters<E extends Element, M extends UsePaginatedChildrenInfo<E>> {
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    linearNavigationParameters: Pick<UseLinearNavigationParameters<any, E>["linearNavigationParameters"], "indexDemangler" | "indexMangler">;
    paginatedChildrenParameters: { paginationMin: number | null; paginationMax: number | null; }
}

export function usePaginatedChildren<E extends Element, M extends UsePaginatedChildrenInfo<E>>({
    managedChildrenReturn,
    linearNavigationParameters: { indexDemangler, indexMangler },
    paginatedChildrenParameters: { paginationMax, paginationMin } }: UsePaginatedChildParameters<E, M>) {


    const lastPagination = useRef({ paginationMax: null as null | number, paginationMin: null as null | number });
    const refreshPagination = useStableCallback(() => {
        const childMax = (managedChildrenReturn.getChildren().getHighestIndex() + 1);
        for (let i = 0; i <= childMax; ++i) {
            const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
            managedChildrenReturn.getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
        }

    })
    useLayoutEffect(() => {
        refreshPagination();
        lastPagination.current.paginationMax = paginationMax;
        lastPagination.current.paginationMin = paginationMin;
    }, [paginationMax, paginationMin]);

    return { paginatedChildrenReturn: { refreshPagination } }
}

/*export function usePaginatedChild() {

}*/
