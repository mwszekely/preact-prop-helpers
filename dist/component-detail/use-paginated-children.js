import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { useState } from "../preact-extensions/use-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function usePaginatedChildren({ managedChildrenReturn: { getChildren }, linearNavigationParameters: { indexDemangler }, paginatedChildrenParameters: { paginationMax, paginationMin }, rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex }, refElementReturn: { getElement } }) {
    monitorCallCount(usePaginatedChildren);
    const [childCount, setChildCount] = useState(null);
    const parentIsPaginated = (paginationMin != null || paginationMax != null);
    const lastPagination = useRef({ paginationMax: null, paginationMin: null });
    const refreshPagination = useCallback((paginationMin, paginationMax) => {
        const childMax = (getChildren().getHighestIndex() + 1);
        for (let i = 0; i <= childMax; ++i) {
            const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
            getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
            if (visible)
                getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
        }
    }, [ /* Must be empty */]);
    useLayoutEffect(() => {
        let tabbableIndex = getTabbableIndex();
        if (tabbableIndex != null) {
            let shouldFocus = getElement()?.contains(document.activeElement) || document.activeElement == null || (document.activeElement === document.body);
            if (paginationMin != null && tabbableIndex < paginationMin) {
                setTabbableIndex(paginationMin, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
            }
            else if (paginationMax != null && tabbableIndex >= paginationMax) {
                let next = paginationMax - 1;
                if (next == -1)
                    next = null;
                setTabbableIndex(next, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
            }
        }
        refreshPagination(paginationMin, paginationMax);
        lastPagination.current.paginationMax = paginationMax ?? null;
        lastPagination.current.paginationMin = paginationMin ?? null;
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
export function usePaginatedChild({ info: { index }, paginatedChildrenParameters: { paginated: parentIsPaginated }, context: { paginatedChildContext: { getDefaultPaginationVisible } } }) {
    monitorCallCount(usePaginatedChild);
    //const parentIsPaginated = (paginationMin != null || paginationMax != null);
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
    const [paginatedVisible, setPaginatedVisible] = useState(getDefaultPaginationVisible(index));
    return {
        props: !parentIsPaginated ? {} : { "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) },
        paginatedChildReturn: { paginatedVisible, isPaginated: parentIsPaginated, hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false },
        info: {
            setPaginationVisible: setPaginatedVisible,
            setChildCountIfPaginated
        }
    };
}
//# sourceMappingURL=use-paginated-children.js.map