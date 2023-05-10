import { useCallback, useLayoutEffect, useRef } from "preact/hooks";
import { UseManagedChildrenReturnType } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { useState } from "../preact-extensions/use-state.js";
import { ElementProps } from "../util/types.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { UseLinearNavigationParameters } from "./keyboard-navigation/use-linear-navigation.js";
import { UseRovingTabIndexChildInfo } from "./keyboard-navigation/use-roving-tabindex.js";

export interface UsePaginatedChildrenInfo<E extends Element> extends UseRovingTabIndexChildInfo<E> {
    setParentIsPaginated(parentIsPaginated: boolean): void;
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}

export interface UsePaginatedChildrenParameters<E extends Element, M extends UsePaginatedChildrenInfo<E>> {
    managedChildrenReturn: UseManagedChildrenReturnType<M>["managedChildrenReturn"];
    linearNavigationParameters: Pick<UseLinearNavigationParameters<any, E, M>["linearNavigationParameters"], "indexDemangler">;
    paginatedChildrenParameters: { paginationMin: number | null | undefined; paginationMax: number | null | undefined; }
}

export interface UsePaginatedChildContext {
    paginatedChildContext: {
        getDefaultIsPaginated(): boolean;
        getDefaultPaginationVisible(i: number): boolean;
    }
}

export interface UsePaginatedChildrenReturnType {
    managedChildrenParameters: {
        onChildrenCountChange: (count: number) => void;
    };
    paginatedChildrenReturn: {
        refreshPagination: (min: number | null | undefined, max: number | null | undefined) => void;
        /**
         * **importANT**: This is only tracked when pagination is enabled.
         * 
         * If pagination is not enabled, this is either `null` or some undefined previous number.
         */
        childCount: number | null;
    };
    context: UsePaginatedChildContext;
}

export function usePaginatedChildren<E extends Element, M extends UsePaginatedChildrenInfo<E>>({
    managedChildrenReturn: { getChildren },
    linearNavigationParameters: { indexDemangler },
    paginatedChildrenParameters: { paginationMax, paginationMin } }: UsePaginatedChildrenParameters<E, M>): UsePaginatedChildrenReturnType {
    monitorCallCount(usePaginatedChildren);

    const [childCount, setChildCount] = useState(null as number | null);
    const parentIsPaginated = (paginationMin != null || paginationMax != null);

    const lastPagination = useRef({ paginationMax: null as null | number, paginationMin: null as null | number });
    const refreshPagination = useCallback((paginationMin: number | null | undefined, paginationMax: number | null | undefined) => {
        const childMax = (getChildren().getHighestIndex() + 1);
        for (let i = 0; i <= childMax; ++i) {
            const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
            getChildren().getAt(indexDemangler(i))?.setParentIsPaginated(parentIsPaginated);
            getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
            if (visible)
                getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
        }

    }, [/* Must be empty */])
    useLayoutEffect(() => {
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
            onChildrenCountChange: useStableCallback((count: number) => {
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
    }
}



export interface UsePaginatedChildParameters {
    info: { index: number; }
    context: UsePaginatedChildContext;
}

export interface UsePaginatedChildReturn<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    paginatedChildReturn: {
        paginatedVisible: boolean;
        isPaginated: boolean;
        hideBecausePaginated: boolean;
    };
    info: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated" | "setParentIsPaginated">
}


export function usePaginatedChild<ChildElement extends Element>({ info: { index }, context: { paginatedChildContext: { getDefaultPaginationVisible, getDefaultIsPaginated } } }: UsePaginatedChildParameters): UsePaginatedChildReturn<ChildElement> {
    monitorCallCount(usePaginatedChild);

    const [parentIsPaginated, setParentIsPaginated] = useState(getDefaultIsPaginated());
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null as number | null);
    const [paginatedVisible, setPaginatedVisible] = useState(getDefaultPaginationVisible(index));



    return {
        props: !parentIsPaginated ? {} : (({ "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) } as ElementProps<ChildElement>)),
        paginatedChildReturn: { paginatedVisible, isPaginated: parentIsPaginated, hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false },
        info: {
            setPaginationVisible: setPaginatedVisible,
            setChildCountIfPaginated,
            setParentIsPaginated
        }
    }
}