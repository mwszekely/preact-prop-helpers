import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useStableObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { useListNavigation, useListNavigationChild } from "./use-list-navigation-partial.js";
export function useGridNavigation({ gridNavigationParameters: { onTabbableColumnChange, ...void3 }, linearNavigationParameters, rovingTabIndexParameters: { onTabbableIndexChange, ...rovingTabIndexParameters }, managedChildrenReturn, typeaheadNavigationParameters, ..._void2 }) {
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
    const { linearNavigationReturn, rovingTabIndexReturn, typeaheadNavigationReturn, managedChildrenParameters, context: { rovingTabIndexContext, typeaheadNavigationContext }, propsStable, ...void1 } = useListNavigation({
        linearNavigationParameters: { navigationDirection: "vertical", ...linearNavigationParameters },
        rovingTabIndexParameters: { onTabbableIndexChange: onTabbableIndexChangeOverride, ...rovingTabIndexParameters },
        managedChildrenReturn,
        typeaheadNavigationParameters
    });
    assertEmptyObject(void1);
    assertEmptyObject(_void2);
    assertEmptyObject(void3);
    const gridNavigationRowContext = useStableObject({
        setTabbableRow: rovingTabIndexReturn.setTabbableIndex,
        getCurrentTabbableColumn,
        setCurrentTabbableColumn
    });
    return {
        propsStable,
        managedChildrenParameters,
        context: useStableObject({
            gridNavigationRowContext,
            rovingTabIndexContext,
            typeaheadNavigationContext
        }),
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationReturn
    };
}
export function useGridNavigationRow({ context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN, gridNavigationRowContext: { setTabbableRow, getCurrentTabbableColumn, setCurrentTabbableColumn } }, linearNavigationParameters, rovingTabIndexParameters: { ...rovingTabIndexParameters }, managedChildParameters, managedChildrenReturn, refElementReturn, rovingTabIndexChildParameters, textContentParameters, typeaheadNavigationParameters, ..._void1 }) {
    const { getChildren } = managedChildrenReturn;
    const getIndex = useStableCallback(() => { return managedChildParameters.index; });
    const focusSelf = useStableCallback((e) => {
        let index = (getCurrentTabbableColumn() ?? 0);
        let child = getChildren().getAt(index);
        let highestIndex = getChildren().getHighestIndex();
        while ((!child || child.hidden) && index > 0) {
            --index;
            child = getChildren().getAt(index);
        }
        while ((!child || child.hidden) && index <= highestIndex) {
            ++index;
            child = getChildren().getAt(index);
        }
        if (child) {
            const e = child.getElement();
            child.focusSelf(e);
        }
        else {
            e?.focus?.();
        }
    }, []);
    const { hasCurrentFocusParameters, pressParameters, props: propsLNC, rovingTabIndexChildReturn, textContentReturn } = useListNavigationChild({ managedChildParameters, refElementReturn, rovingTabIndexChildParameters, textContentParameters, context: { rovingTabIndexContext: contextRTI, typeaheadNavigationContext: contextTN } });
    const untabbable = !rovingTabIndexChildReturn.tabbable;
    const { linearNavigationReturn, managedChildrenParameters, propsStable: propsLN, rovingTabIndexReturn, typeaheadNavigationReturn, context: { rovingTabIndexContext: rtiContext, typeaheadNavigationContext: tnContext } } = useListNavigation({ managedChildrenReturn, typeaheadNavigationParameters, rovingTabIndexParameters: { untabbable, ...rovingTabIndexParameters }, linearNavigationParameters: { navigationDirection: "horizontal", ...linearNavigationParameters } });
    assertEmptyObject(_void1);
    const { setTabbableIndex } = rovingTabIndexReturn;
    const gridNavigationCellContext = useStableObject({
        setTabbableRow,
        getRowIndex: getIndex,
        getCurrentTabbableColumn,
        setCurrentTabbableColumn,
        setTabbableCell: setTabbableIndex
    });
    return {
        context: useStableObject({
            rovingTabIndexContext: rtiContext,
            gridNavigationCellContext,
            typeaheadNavigationContext: tnContext
        }),
        hasCurrentFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        pressParameters,
        props: useMergedProps(propsLN, propsLNC),
        rovingTabIndexChildReturn,
        rovingTabIndexReturn,
        textContentReturn,
        typeaheadNavigationReturn,
        gridNavigationRowParameters: { focusSelf, setTabbableColumnIndex: setTabbableIndex },
    };
}
export function useGridNavigationCell({ context: { gridNavigationCellContext: { getRowIndex, setTabbableRow, getCurrentTabbableColumn: _getCurrentColumn, setCurrentTabbableColumn, setTabbableCell }, rovingTabIndexContext, typeaheadNavigationContext }, rovingTabIndexChildParameters, managedChildParameters, refElementReturn, textContentParameters, gridNavigationCellParameters: { colSpan }, ..._void1 }) {
    const { index } = managedChildParameters;
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1 }, rovingTabIndexChildReturn, textContentReturn, pressParameters, props, ...void2 } = useListNavigationChild({
        rovingTabIndexChildParameters,
        managedChildParameters,
        context: { rovingTabIndexContext, typeaheadNavigationContext },
        textContentParameters,
        refElementReturn
    });
    assertEmptyObject(_void1);
    assertEmptyObject(void2);
    return {
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