import { useMergedProps } from "../../dom-helpers/use-merged-props.js";
import { usePassiveState } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { focus } from "../../util/focus.js";
import { monitorCallCount } from "../../util/use-call-count.js";
import { useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
export function useGridNavigation({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, rovingTabIndexParameters: { onTabbableIndexChange, untabbable, ...rovingTabIndexParameters }, managedChildrenReturn, typeaheadNavigationParameters, refElementReturn, ...void2 }) {
    monitorCallCount(useGridNavigation);
    const { getChildren } = managedChildrenReturn;
    const { initiallyTabbedIndex } = rovingTabIndexParameters;
    const [getCurrentTabbableColumn, setCurrentTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => { return (initiallyTabbedIndex ?? 0); }));
    const onTabbableIndexChangeOverride = useStableCallback((nextRow, previousRow, reason) => {
        const children = getChildren();
        onTabbableIndexChange?.(nextRow, previousRow, reason);
        const nextColumn = getCurrentTabbableColumn();
        if (previousRow != null)
            children.getAt(previousRow)?.setTabbableColumnIndex(nextColumn, reason, false);
        if (nextRow != null)
            children.getAt(nextRow)?.setTabbableColumnIndex(nextColumn, reason, false);
    });
    const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, propsParent, propsStableParentOrChild, ...void1 } = useListNavigation({
        linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChangeOverride, untabbable, ...rovingTabIndexParameters },
        refElementReturn,
        managedChildrenReturn,
        typeaheadNavigationParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    const gridNavigationRowContext = useMemoObject({
        //rowIsUntabbableBecauseOfGrid: !!untabbable,
        setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
        getCurrentTabbableColumn,
        setCurrentTabbableColumn
    });
    return {
        propsParent,
        propsStableParentOrChild,
        managedChildrenParameters,
        context: useMemoObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            typeaheadNavigationContext
        }),
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    };
}
export function useGridNavigationRow({ context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN, gridNavigationRowContext: { setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn } }, linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, info: managedChildParameters, managedChildrenReturn, refElementReturn, textContentParameters, typeaheadNavigationParameters, ...void1 }) {
    monitorCallCount(useGridNavigationRow);
    const { getChildren } = managedChildrenReturn;
    const getIndex = useStableCallback(() => { return managedChildParameters.index; });
    const whenThisRowIsFocused = useStableCallback((e) => {
        let index = (getCurrentTabbableColumn() ?? 0);
        let child = getChildren().getAt(index);
        let highestIndex = getChildren().getHighestIndex();
        while ((!child || child.untabbable) && index > 0) {
            --index;
            child = getChildren().getAt(index);
        }
        while ((!child || child.untabbable) && index <= highestIndex) {
            ++index;
            child = getChildren().getAt(index);
        }
        if (child) {
            const e = child.getElement();
            child.focusSelf(e);
        }
        else {
            focus(e);
        }
    }, []);
    const focusSelf = whenThisRowIsFocused;
    const { hasCurrentFocusParameters, pressParameters, props: propsLNC, rovingTabIndexChildReturn, textContentReturn, info, ...void2 } = useListNavigationChild({ info: managedChildParameters, refElementReturn, textContentParameters, context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN } });
    const allChildCellsAreUntabbable = !rovingTabIndexChildReturn.tabbable;
    const { linearNavigationReturn, managedChildrenParameters, propsStableParentOrChild: propsLN, propsParent: propsLN2, rovingTabIndexReturn, typeaheadNavigationReturn, context: { rovingTabIndexContext: rtiContext, typeaheadNavigationContext: tnContext } } = useListNavigation({
        managedChildrenReturn,
        refElementReturn,
        typeaheadNavigationParameters,
        rovingTabIndexParameters: { untabbableBehavior: "leave-child-focused", focusSelfParent: whenThisRowIsFocused, untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange },
        linearNavigationParameters: { arrowKeyDirection: "horizontal", ...linearNavigationParameters }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);
    const { setTabbableIndex } = rovingTabIndexReturn;
    const gridNavigationCellContext = useMemoObject({
        allChildCellsAreUntabbable,
        setTabbableRow,
        getRowIndex: getIndex,
        getCurrentTabbableColumn,
        setCurrentTabbableColumn,
        setTabbableCell: setTabbableIndex
    });
    // TODO: propsLN2 (awful name) is just the tabIndex=0 or -1 from rovingTabIndex, which flips around when `untabbable` flips.
    // We can ignore it here, because our tabIndex is entirely controlled by our own list navigation,
    // but it shouldn't just be ignored wholesale like this.
    const props = useMergedProps(propsLN, /*propsLN2,*/ propsLNC, {
        // Ensure that if the browser focuses the row for whatever reason, we transfer the focus to a child cell.
        onFocus: useStableCallback(e => whenThisRowIsFocused(e.currentTarget))
    });
    props.tabIndex = -1;
    return {
        context: useMemoObject({
            rovingTabIndexContext: rtiContext,
            gridNavigationCellContext,
            typeaheadNavigationContext: tnContext
        }),
        info,
        hasCurrentFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        props,
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        gridNavigationRowParameters: { focusSelf, setTabbableColumnIndex: setTabbableIndex },
    };
}
export function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getCurrentTabbableColumn: _getCurrentColumn, setCurrentTabbableColumn, setTabbableCell }, rovingTabIndexContext, typeaheadNavigationContext }, info, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan }, ...void1 }) {
    monitorCallCount(useGridNavigationCell);
    const { index } = info;
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 }, rovingTabIndexChildReturn, textContentReturn, pressParameters, props, info: infoLs, ...void2 } = useListNavigationChild({
        info,
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        textContentParameters,
        refElementReturn,
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return {
        info: infoLs,
        props,
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                ocfic1?.(focused, prev, e);
                if (focused) {
                    setTabbableRow(getRowIndex(), e, false);
                    setCurrentTabbableColumn(index, e);
                    setTabbableCell((prev) => {
                        if (prev != null && (prev < index || prev > index + colSpan)) {
                            return prev;
                        }
                        return index;
                    }, e, false);
                }
            })
        },
    };
}
//# sourceMappingURL=use-grid-navigation-partial.js.map