import { jsx as _jsx, Fragment as _Fragment } from "preact/jsx-runtime";
import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { useManagedChild, useManagedChildren } from "../../preact-extensions/use-managed-children.js";
import { usePropsOnChildren } from "../../preact-extensions/use-props-on-children.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { createContext, memo, useCallback, useContext } from "../../util/lib.js";
import { monitored } from "../../util/use-call-count.js";
import { usePaginatedChild, usePaginatedChildren } from "./use-paginated-children.js";
import { useRearrangeableChildren2 } from "./use-rearrangeable-children.js";
import { useStaggeredChild, useStaggeredChildren } from "./use-staggered-children.js";
/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 *
 * @remarks *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
 *
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler`
 * functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned,
 * this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.
 *
 * Besides the prop-modifying hook that's returned, the `sort` function that's returned will
 * sort all children according to their value from the `getValue` argument you pass in.
 *
 * If you want to perform some re-ordering operation that's *not* a sort, you can manually
 * re-map each child's position using `mangleMap` and `demangleMap`, which convert between
 * sorted and unsorted index positions.
 *
 * Again, unlike some other hooks, **these children must be direct descendants**. This is because
 * the prop-modifying hook inspects the given children, then re-creates them with new `key`s.
 * Because keys are given special treatment and a child has no way of modifying its own key
 * there's no other time or place this can happen other than exactly within the parent component's render function.
 *
 * @compositeParams
 */
export const useListChildren = monitored(function useListChildren({ rearrangeableChildrenParameters, listChildrenParameters: { children, compare: userCompare }, paginatedChildrenParameters, refElementReturn, rovingTabIndexReturn, staggeredChildrenParameters }) {
    const getCompare = useStableGetter(userCompare ?? defaultCompare);
    const { context: { managedChildContext }, managedChildrenReturn } = useManagedChildren({ managedChildrenParameters: {} });
    const { rearrangeableChildrenReturn } = useRearrangeableChildren2({ rearrangeableChildrenParameters, managedChildrenReturn });
    const { rearrange, useRearrangedChildren } = rearrangeableChildrenReturn;
    const { getChildren } = managedChildrenReturn;
    // The actual sort function.
    const sort = useCallback((direction) => {
        const managedRows = getChildren();
        const compare = getCompare();
        const originalRows = managedRows._arraySlice();
        const sortedRows = compare ? originalRows.sort((lhsRow, rhsRow) => {
            const lhsValue = lhsRow;
            const rhsValue = rhsRow;
            const result = compare(lhsValue, rhsValue);
            if (direction[0] == "d")
                return -result;
            return result;
        }) : managedRows._arraySlice();
        return rearrange(originalRows, sortedRows);
    }, [ /* Must remain stable */]);
    const { paginatedChildrenReturn, paginatedChildrenReturn: { refreshPagination }, context: { paginatedChildContext } } = usePaginatedChildren({
        refElementReturn,
        managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
        rovingTabIndexReturn,
        paginatedChildrenParameters,
        rearrangeableChildrenReturn: { indexDemangler: rearrangeableChildrenReturn.indexDemangler }
    });
    const { context: { staggeredChildContext }, staggeredChildrenReturn } = useStaggeredChildren({
        managedChildrenReturn: { getChildren: useStableCallback(() => managedChildContext.getChildren()) },
        staggeredChildrenParameters
    });
    return {
        listChildrenReturn: {
            sort,
            children: _jsx(RC, { useRearrangedChildren: useRearrangedChildren, children: children })
        },
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        paginatedChildrenReturn,
        context: useMemoObject({
            staggeredChildContext,
            paginatedChildContext,
            managedChildContext
        })
    };
});
const RC = memo(({ children, useRearrangedChildren }) => {
    return (_jsx(_Fragment, { children: useRearrangedChildren(children.map((child, index) => {
            return (_jsx(PSC, { children: child, index: index }));
        })) }));
});
const CTX = createContext(null);
const PSC = memo(({ index, children }) => {
    const context = useContext(CTX);
    const { paginatedChildContext, staggeredChildContext } = context;
    const { info: { setChildCountIfPaginated, setPaginationVisible }, paginatedChildReturn, props: propsPaginated } = usePaginatedChild({ context: { paginatedChildContext }, info: { index } });
    const { info: { setStaggeredVisible }, staggeredChildReturn, props: propsStaggered } = useStaggeredChild({ context: { staggeredChildContext }, info: { index } });
    const {} = useManagedChild({
        context,
        info: {
            index,
            setChildCountIfPaginated,
            setPaginationVisible,
            setStaggeredVisible
        }
    });
    const { hideBecausePaginated } = paginatedChildReturn;
    const { hideBecauseStaggered } = staggeredChildReturn;
    if (hideBecausePaginated || hideBecauseStaggered)
        return null;
    return (usePropsOnChildren(children, useMergedProps(propsStaggered, propsPaginated), undefined));
});
function defaultCompare(lhs, rhs) {
    return compare1(lhs?.index, rhs?.index); // TODO: This used to have getSortValue() for a better default, but was also kind of redundant with defaultCompare being overrideable?
    function compare1(lhs, rhs) {
        if (lhs == null || rhs == null) {
            if (lhs == null)
                return -1;
            if (rhs == null)
                return 1;
        }
        return lhs - rhs;
    }
}
//# sourceMappingURL=use-list-children.js.map