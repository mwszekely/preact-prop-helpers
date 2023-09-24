import { PropNames_ChildrenHaveFocusReturn_getAnyFocused } from "../../observers/use-children-have-focus.js";
import { PropNames_ManagedChildrenReturn_getChildren } from "../../preact-extensions/use-managed-children.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useState } from "../../preact-extensions/use-state.js";
import { useCallback, useEffect, useLayoutEffect, useMemo, useRef } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
import { useTagProps } from "../../util/use-tag-props.js";
import { PropNames_RovingTabIndexReturn_getTabbableIndex, PropNames_RovingTabIndexReturn_setTabbableIndex } from "../keyboard-navigation/use-roving-tabindex.js";
import { PropNames_RearrangeableReturn_indexDemangler } from "./use-rearrangeable-children.js";
const P1 = `PropNames.PaginatedParameters`;
const P2 = `PropNames.PaginatedChildParameters`;
const R1 = `PropNames.PaginatedReturn`;
const R2 = `PropNames.PaginatedChildReturn`;
export const PropNames_PaginatedParameters_paginationMin = `${P1}.paginationMin`;
export const PropNames_PaginatedParameters_paginationMax = `${P1}.paginationMax`;
export const PropNames_PaginatedParameters_childCount = `${P1}.childCount`;
export const PropNames_PaginatedReturn_refreshPagination = `${P1}.refreshPagination`;
export const PropNames_PaginatedChildReturn_parentIsPaginated = `${P1}.parentIsPaginated`;
export const PropNames_PaginatedChildReturn_hideBecausePaginated = `${P1}.hideBecausePaginated`;
/**
 * Allows children to stop themselves from rendering outside of a narrow range.
 *
 * @remarks Each child will still render itself, but it is aware of if it is within/outside of the pagination range, and simply return empty.
 *
 * @compositeParams
 *
 * @hasChild {@link usePaginatedChild}
 */
export const usePaginatedChildren = monitored(function usePaginatedChildren({ [PropNames_ManagedChildrenReturn_getChildren]: getChildren, [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler, [PropNames_PaginatedParameters_paginationMax]: paginationMax, [PropNames_PaginatedParameters_paginationMin]: paginationMin, [PropNames_PaginatedParameters_childCount]: childCount, [PropNames_RovingTabIndexReturn_getTabbableIndex]: getTabbableIndex, [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex, [PropNames_ChildrenHaveFocusReturn_getAnyFocused]: getAnyFocused,
// paginatedChildrenParameters: { paginationMax, paginationMin, childCount },
// rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex },
// childrenHaveFocusReturn: { getAnyFocused }
 }) {
    const parentIsPaginated = (paginationMin != null || paginationMax != null);
    const lastPagination = useRef({ paginationMax: null, paginationMin: null });
    const refreshPagination = useCallback((paginationMin, paginationMax) => {
        const childMax = (getChildren().getHighestIndex() + 1);
        const childMin = (getChildren().getLowestIndex());
        for (let i = childMin; i <= childMax; ++i) {
            const visible = (i >= (paginationMin ?? -Infinity) && i < (paginationMax ?? Infinity));
            getChildren().getAt(indexDemangler(i))?.setPaginationVisible(visible);
            if (visible && (paginationMax != null || paginationMin != null))
                getChildren().getAt(indexDemangler(i))?.setChildCountIfPaginated(getChildren().getHighestIndex() + 1);
        }
    }, [ /* Must be empty */]);
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
                if (paginationMin != null && tabbableIndex < paginationMin) {
                    setTabbableIndex(paginationMin, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                }
                else if (paginationMax != null && tabbableIndex >= paginationMax) {
                    let next = paginationMax - 1;
                    if (next == -1)
                        next = null;
                    setTabbableIndex(next, undefined, shouldFocus); // TODO: This isn't a user interaction, but we need to ensure the old element doesn't remain focused, yeesh.
                }
            }, 1);
        }
        refreshPagination(paginationMin, paginationMax);
        lastPagination.current.paginationMax = paginationMax ?? null;
        lastPagination.current.paginationMin = paginationMin ?? null;
    }, [paginationMax, paginationMin]);
    const pmin = useRef(paginationMin);
    const pmax = useRef(paginationMax);
    pmin.current = paginationMin;
    pmax.current = paginationMax;
    const getDefaultPaginationVisible = useCallback((i) => { return (i >= (pmin.current ?? -Infinity) && i < (pmax.current ?? Infinity)); }, []);
    const paginatedChildContext = useMemo(() => ({
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
        [PropNames_PaginatedReturn_refreshPagination]: refreshPagination
    };
});
/**
 * Child hook for {@link usePaginatedChildren}.
 *
 * @remarks When a child is paginated, it still renders itself (i.e. it calls this hook, so it's rendering),
 * so check `hideBecausePaginated` and, if it's true, avoid doing any heavy logic and render with `display: none`.
 *
 * @compositeParams
 */
export const usePaginatedChild = monitored(function usePaginatedChild({ info: { index }, context: { paginatedChildContext: { parentIsPaginated, getDefaultPaginationVisible } } }) {
    const [childCountIfPaginated, setChildCountIfPaginated] = useState(null);
    const [paginatedVisible, setPaginatedVisible] = useState(parentIsPaginated ? getDefaultPaginationVisible(index) : true);
    return {
        props: useTagProps(!parentIsPaginated ? {} : { "aria-setsize": childCountIfPaginated ?? undefined, "aria-posinset": (index + 1) }, "data-paginated-children-child"),
        [PropNames_PaginatedChildReturn_parentIsPaginated]: parentIsPaginated,
        [PropNames_PaginatedChildReturn_hideBecausePaginated]: parentIsPaginated ? !paginatedVisible : false,
        info: {
            setPaginationVisible: setPaginatedVisible,
            setChildCountIfPaginated
        }
    };
});
//# sourceMappingURL=use-paginated-children.js.map