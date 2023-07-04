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
    const [getTabbableColumn, setTabbableColumn] = usePassiveState(onTabbableColumnChange, useStableCallback(() => {
        let t = (initiallyTabbedIndex ?? 0);
        return { literal: t, ideal: t };
    }));
    const onTabbableRowChange = useStableCallback((nextRow, previousRow, reason) => {
        return;
        /*const children = getChildren();
        onTabbableIndexChange?.(nextRow, previousRow, reason);
        const { literal, ideal } = getCurrentTabbableColumn();
        if (previousRow != null)
            children.getAt(previousRow)?.setTabbableColumnIndex(ideal, reason, false);
        if (nextRow != null)
            children.getAt(nextRow)?.setTabbableColumnIndex(ideal, reason, false);
*/
    });
    const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, propsParent, propsStableParentOrChild, ...void1 } = useListNavigation({
        linearNavigationParameters: { arrowKeyDirection: "vertical", ...linearNavigationParameters },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableRowChange, untabbable, ...rovingTabIndexParameters },
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
        getTabbableColumn,
        setTabbableColumn
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
export function useGridNavigationRow({ context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN, gridNavigationRowContext: { setTabbableRow, getTabbableColumn, setTabbableColumn } }, linearNavigationParameters, rovingTabIndexParameters: { untabbable: rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange, ...void4 }, info: managedChildParameters, managedChildrenReturn, refElementReturn, textContentParameters, typeaheadNavigationParameters, ...void1 }) {
    monitorCallCount(useGridNavigationRow);
    const { getChildren } = managedChildrenReturn;
    const getIndex = useStableCallback(() => { return managedChildParameters.index; });
    const whenThisRowIsFocused = useStableCallback((e) => {
        let { ideal, literal } = (getTabbableColumn());
        console.log(`${managedChildParameters.index}.whenThisRowIsFocused(${ideal}, ${literal})`);
        let index = (ideal ?? 0);
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
    const { linearNavigationReturn, managedChildrenParameters, propsStableParentOrChild: propsLN, 
    // This is just tabIndex = 0 or -1, see the TODO below
    propsParent: propsLN2, rovingTabIndexReturn, typeaheadNavigationReturn, context: { rovingTabIndexContext: rtiContext, typeaheadNavigationContext: tnContext } } = useListNavigation({
        managedChildrenReturn,
        refElementReturn,
        typeaheadNavigationParameters,
        rovingTabIndexParameters: {
            untabbableBehavior: "leave-child-focused", focusSelfParent: whenThisRowIsFocused, untabbable: allChildCellsAreUntabbable || rowIsUntabbableAndSoAreCells, initiallyTabbedIndex, onTabbableIndexChange: useStableCallback((v, p, r) => {
                debugger;
                setTabbableColumn({ ideal: v, literal: v });
                onTabbableIndexChange?.(v, p, r);
            })
        },
        linearNavigationParameters: {
            onNavigateLinear: useStableCallback((next, event) => {
                setTabbableColumn(prev => ({ ideal: next, literal: prev?.literal ?? next }), event);
            }), arrowKeyDirection: "horizontal", ...linearNavigationParameters
        }
    });
    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void4);
    const { setTabbableIndex } = rovingTabIndexReturn;
    const gridNavigationCellContext = useMemoObject({
        allChildCellsAreUntabbable,
        setTabbableRow,
        getRowIndex: getIndex,
        getTabbableColumn,
        setTabbableColumn,
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
        gridNavigationRowParameters: { focusSelf },
    };
}
export function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getTabbableColumn: _getCurrentColumn, setTabbableColumn, setTabbableCell }, rovingTabIndexContext, typeaheadNavigationContext }, info, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan }, ...void1 }) {
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
        props: useMergedProps(props, { onClick: () => setTabbableColumn(prev => ({ ideal: index, literal: (prev?.literal ?? index) })) }),
        rovingTabIndexChildReturn,
        textContentReturn,
        pressParameters,
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: useStableCallback((focused, prev, e) => {
                ocfic1?.(focused, prev, e);
                if (focused) {
                    setTabbableRow(getRowIndex(), e, false);
                    setTabbableColumn(prev => { debugger; return { literal: index, ideal: prev?.ideal ?? index }; }, e);
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