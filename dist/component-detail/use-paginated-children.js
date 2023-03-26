import { useCallback, useLayoutEffect, useRef } from "react";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { useState } from "../preact-extensions/use-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function usePaginatedChildren({ managedChildrenReturn: { getChildren }, linearNavigationParameters: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin } }) {
    monitorCallCount(usePaginatedChildren);
    const [childCount, setChildCount] = useState(null);
    const parentIsPaginated = (paginationMin != null || paginationMax != null);
    const lastPagination = useRef({ paginationMax: null, paginationMin: null });
    const refreshPagination = useCallback((paginationMin, paginationMax) => {
        const childMax = (getChildren().getHighestIndex() + 1);
        for (let i = 0; i <= childMax; ++i) {
            const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
            getChildren().getAt(indexDemangler(i))?.setParentIsPaginated(parentIsPaginated);
            getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
            if (visible)
                getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
        }
    }, [ /* Must be empty */]);
    useLayoutEffect(() => {
        refreshPagination(paginationMin, paginationMax);
        lastPagination.current.paginationMax = paginationMax;
        lastPagination.current.paginationMin = paginationMin;
    }, [paginationMax, paginationMin]);
    // TODO: Modification during render
    const p = useRef(parentIsPaginated);
    p.current = parentIsPaginated;
    return {
        context: useStableObject({
            paginatedChildContext: useStableObject({
                getDefaultIsPaginated: useCallback(() => { return p.current; }, []),
                // This is only used during setState on mount, so this is fine.
                // (If we change from paginated to not paginated, this is caught during useLayoutEffect)
                getDefaultPaginationVisible: useCallback((i) => { return p.current ? (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity)) : true; }, [])
            })
        }),
        managedChildrenParameters: {
            onChildrenCountChange: useStableCallback((count) => {
                if (paginationMax != null || paginationMin != null) {
                    setChildCount(count);
                    const min = (paginationMin ?? 0);
                    const max = (paginationMax ?? count);
                    for (let i = min; i < max; ++i) {
                        getChildren().getAt(i)?.setParentIsPaginated(parentIsPaginated);
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
    };
}
export function usePaginatedChild({ info: { index }, context: { paginatedChildContext: { getDefaultPaginationVisible, getDefaultIsPaginated } } }) {
    monitorCallCount(usePaginatedChild);
    const [parentIsPaginated, setParentIsPaginated] = useState(getDefaultIsPaginated());
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
    const [paginatedVisible, setPaginatedVisible] = useState(getDefaultPaginationVisible(index));
    return {
        props: !parentIsPaginated ? {} : { "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) },
        paginatedChildReturn: { paginatedVisible, isPaginated: parentIsPaginated, hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false },
        info: {
            setPaginationVisible: setPaginatedVisible,
            setChildCountIfPaginated,
            setParentIsPaginated
        }
    };
}
//# sourceMappingURL=use-paginated-children.js.map