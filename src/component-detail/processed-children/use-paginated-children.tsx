import { UseChildrenHaveFocus } from "../../observers/use-children-have-focus.js";
import { UseManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { ElementProps, useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "../../util/lib.js";
import { Nullable, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsPick, StandardDepsProps, StandardHook } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { UseRovingTabIndex, UseRovingTabIndexChildInfo } from "../keyboard-navigation/use-roving-tabindex.js";
import { UseRearrangeableChildren } from "./use-rearrangeable-children.js";

export interface UsePaginatedChildrenInfo<TabbableChildElement extends Element> extends Pick<UseRovingTabIndexChildInfo<TabbableChildElement>, "index"> {
    setPaginationVisible(visible: boolean): void;
    setChildCountIfPaginated(count: number): void;
}

export interface UsePaginatedChildrenParametersSelf {
    paginationMin: Nullable<number>;
    paginationMax: Nullable<number>;
    childCount: Nullable<number>;
}

export interface UsePaginatedChildrenReturnTypeSelf {

    /**
     * If the values returned by `indexDemangler` change (e.g. when sorting), then this must be called to re-sync everything.
     * 
     * @stable
     */
    refreshPagination: (min: Nullable<number>, max: Nullable<number>) => void;
}

export type UsePaginatedChildren<TabbableChildElement extends Element> = StandardHook<
    "paginatedChildren", 
    UsePaginatedChildrenParametersSelf, [
        StandardDepsPick<"return", UseRearrangeableChildren<any>, "rearrangeableChildrenReturn", "pick", "indexDemangler">,
        StandardDepsPick<"return", UseManagedChildren<UsePaginatedChildrenInfo<TabbableChildElement>>, "managedChildrenReturn", "pick", "getChildren">,
        StandardDepsPick<"return", UseChildrenHaveFocus<TabbableChildElement>, "childrenHaveFocusReturn", "pick", "getAnyFocused">,
        StandardDepsPick<"return", UseRovingTabIndex<any, TabbableChildElement>, "rovingTabIndexReturn", "pick", "getTabbableIndex" | "setTabbableIndex">
    ],
    UsePaginatedChildrenReturnTypeSelf, [StandardDepsContext<UsePaginatedChildContext, "paginatedChildContext">]
>;

export type UsePaginatedChild<TabbableChildElement extends Element> = StandardHook<
    "paginatedChild", 
    never, [
        StandardDepsContext<UsePaginatedChildContext, "paginatedChildContext">,
        StandardDepsInfo<UsePaginatedChildrenInfo<TabbableChildElement>, "index">
    ],
    UsePaginatedChildReturnTypeSelf, [
        StandardDepsProps<TabbableChildElement>,
        StandardDepsInfo<UsePaginatedChildrenInfo<TabbableChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">
    ]
>;

export interface UsePaginatedChildContextSelf {
    // UNSTABLE, changes in this will cause the context to re-create itself.
    parentIsPaginated: boolean;
    getDefaultPaginationVisible(i: number): boolean;
}

export interface UsePaginatedChildContext {
    paginatedChildContext: UsePaginatedChildContextSelf;
}


/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 * 
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 * 
 * @compositeParams
 * 
 * @hasChild {@link usePaginatedChild}
 */
export const usePaginatedChildren = monitored(function usePaginatedChildren<TabbableChildElement extends Element>({
    managedChildrenReturn: { getChildren },
    rearrangeableChildrenReturn: { indexDemangler },
    paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
    rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex },
    childrenHaveFocusReturn: { getAnyFocused }
}: Parameter<UsePaginatedChildren<TabbableChildElement>>): ReturnType<UsePaginatedChildren<TabbableChildElement>> {

    const parentIsPaginated = (paginationMin != null || paginationMax != null);

    const lastPagination = useRef({ paginationMax: null as null | number, paginationMin: null as number | null });
    const refreshPagination = useCallback((paginationMin: Nullable<number>, paginationMax: Nullable<number>) => {
        const childMax = (getChildren().getHighestIndex() + 1);
        const childMin = (getChildren().getLowestIndex());
        for (let i = childMin; i <= childMax; ++i) {
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
            let shouldFocus = getAnyFocused() || false;

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

    const pmin = useRef(paginationMin);
    const pmax = useRef(paginationMax);
    pmin.current = paginationMin;
    pmax.current = paginationMax;
    const getDefaultPaginationVisible = useCallback((i: number) => { return (i >= (pmin.current ?? -Infinity) && i < (pmax.current ?? Infinity)) }, []);
    const paginatedChildContext = useMemo<UsePaginatedChildContext["paginatedChildContext"]>(() => ({
        parentIsPaginated,
        getDefaultPaginationVisible
    }), [parentIsPaginated]);

    const getPaginationMin = useStableGetter(paginationMin);
    const getPaginationMax = useStableGetter(paginationMax);

    useLayoutEffect(() => {
        const paginationMin = getPaginationMin();
        const paginationMax = getPaginationMax();
        const count = childCount ?? 0;
        if (paginationMax != null || paginationMin != null) {
            const min = (paginationMin ?? 0);
            const max = (paginationMax ?? count);
            for (let i = min; i < max; ++i) {
                getChildren().getAt(i)?.setChildCountIfPaginated(count);
            }
        }
    }, [childCount]);

    return {
        context: useMemo(() => ({ paginatedChildContext }), [paginatedChildContext]),
        paginatedChildrenReturn: { refreshPagination }
    }
})



export interface UsePaginatedChildParameters {
    info: { index: number; }
    context: UsePaginatedChildContext;
}

export interface UsePaginatedChildReturnType<ChildElement extends Element> {
    props: ElementProps<ChildElement>;
    paginatedChildReturn: UsePaginatedChildReturnTypeSelf;
    info: Pick<UsePaginatedChildrenInfo<ChildElement>, "setPaginationVisible" | "setChildCountIfPaginated">
}

export interface UsePaginatedChildReturnTypeSelf {
    //paginatedVisible: boolean;
    /**
     * Whether this child is part of a paginated parent component.
     */
    parentIsPaginated: boolean;

    /**
     * Whether this child should hide itself because the parent is paginated and this child is outside of the current range.
     */
    hideBecausePaginated: boolean;
}

/**
 * Child hook for {@link usePaginatedChildren}.
 * 
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 * 
 * @compositeParams
 */
export const usePaginatedChild = monitored(function usePaginatedChild<ChildElement extends Element>({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }: Parameter<UsePaginatedChild<ChildElement>>): ReturnType<UsePaginatedChild<ChildElement>> {
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null as number | null);
    const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);

    return {
        props: useTagProps(!parentIsPaginated ? {} : (({ "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) } as ElementProps<ChildElement>)), "data-paginated-children-child"),
        paginatedChildReturn: { parentIsPaginated, hideBecausePaginated: parentIsPaginated ? !paginatedVisible : false },
        info: {
            setPaginationVisible: setPaginatedVisible,
            setChildCountIfPaginated
        }
    }
})