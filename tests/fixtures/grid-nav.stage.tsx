import { useCallback, useContext, useEffect, useRef, useState } from "preact/hooks";
import { Compare, CompleteGridNavigationContext, CompleteGridNavigationRowContext, EventDetail, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationRowInfo, UseSingleSelectionParameters, focus, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useHasCurrentFocus, useImperativeProps, useMergedProps, useRefElement, useStableCallback, useStableGetter, useStaggeredChildren, useTimeout } from "../../dist/index.js";
import { TestItem, fromStringArray, fromStringBoolean, fromStringNumber, fromStringString, useTestSyncState } from "../util.js";
import { createContext } from "preact";
import { LoremIpsum } from "../lorem.js";
import { DefaultChildCount, DisabledIndex, HiddenIndex, MissingIndex } from "./grid-nav.constants.js";



export interface GridNavConstants {
    setMounted(mounted: boolean): void;
    setSelectedIndex(index: number | null): void;
    setChildCount(count: number): Promise<void>;
    setUntabbable(untabbable: boolean): Promise<void>;
    setDisableHomeEndKeys(disabled: boolean): Promise<void>;
    setPageNavigationSize(size: number): Promise<void>;
    setPagination(size: [number, number] | null): Promise<void>;
    setArrowKeyDirection(direction: "horizontal" | "vertical"): Promise<void>;
    setNavigatePastStartEnd(op: "wrap" | "passthrough"): Promise<void>;
    setAriaPropName(ariaPropName: UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"]["ariaPropName"]): Promise<void>;
    setSelectionMode(ariaPropName: UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]): Promise<void>;
    setStaggered(staggered: boolean): Promise<void>;
    setCollator(id: string): Promise<void>;
    setNoTypeahead(noTypeahead: boolean): Promise<void>;
    setTypeaheadTimeout(timeout: number): Promise<void>;
    onSelectedIndexChange(index: number): (void | Promise<void>);
}

const RowContext = createContext<CompleteGridNavigationContext<HTMLTableElement, HTMLTableRowElement, HTMLTableCellElement, UseCompleteGridNavigationRowInfo<HTMLTableRowElement, HTMLTableCellElement>, UseCompleteGridNavigationCellInfo<HTMLTableCellElement>>>(null!);
const CellContext = createContext<CompleteGridNavigationRowContext<HTMLTableRowElement, HTMLTableCellElement, UseCompleteGridNavigationCellInfo<HTMLTableCellElement>>>(null!);

export function TestBasesGridNav() {
    const [mounted] = useTestSyncState("GridNav", "setMounted", true, fromStringBoolean);
    const [childCount] = useTestSyncState("GridNav", "setChildCount", DefaultChildCount, fromStringNumber);
    const [arrowKeyDirection] = useTestSyncState("GridNav", "setArrowKeyDirection", "vertical", fromStringString);
    const [pagination, setPagination] = useTestSyncState("GridNav", "setPagination", null, fromStringArray(fromStringNumber));
    const [disableHomeEndKeys] = useTestSyncState("GridNav", "setDisableHomeEndKeys", false, fromStringBoolean);
    const [pageNavigationSize] = useTestSyncState("GridNav", "setPageNavigationSize", 0.1, fromStringNumber);
    const [navigatePastStartEnd] = useTestSyncState("GridNav", "setNavigatePastStartEnd", "wrap", fromStringString);
    const [ariaPropName] = useTestSyncState("GridNav", "setAriaPropName", "aria-selected", fromStringString);
    const [untabbable] = useTestSyncState("GridNav", "setUntabbable", false, fromStringBoolean);
    const [staggered] = useTestSyncState("GridNav", "setStaggered", false, fromStringBoolean);
    const [collatorId] = useTestSyncState("GridNav", "setCollator", "", fromStringString);
    const [noTypeahead] = useTestSyncState("GridNav", "setNoTypeahead", false, fromStringBoolean);
    const [typeaheadTimeout] = useTestSyncState("GridNav", "setTypeaheadTimeout", 1000, fromStringNumber);
    const [selectionMode] = useTestSyncState("GridNav", "setSelectionMode", "activation", fromStringString);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    console.log(pagination);

    const a = { untabbable, staggered, collatorId, noTypeahead, typeaheadTimeout, selectionMode }

    installTestingHandler("GridNav", "setSelectedIndex", setSelectedIndex);
    if (!mounted)
        return <div />;

    return (
        <TestBasesGridNavImpl selectedIndex={selectedIndex} childCount={childCount} collatorId={collatorId} disableHomeEndKeys={disableHomeEndKeys} navigatePastStartEnd={navigatePastStartEnd} noTypeahead={noTypeahead} pageNavigationSize={pageNavigationSize} pagination={pagination} selectionMode={selectionMode} staggered={staggered} typeaheadTimeout={typeaheadTimeout} untabbable={untabbable} arrowKeyDirection={arrowKeyDirection} ariaPropName={ariaPropName} />
    );
}

interface TestBasesGridNavImplProps {
    childCount: number;
    arrowKeyDirection: "horizontal" | "vertical";
    pagination: [number, number] | null;
    disableHomeEndKeys: boolean;
    pageNavigationSize: number;
    navigatePastStartEnd: "wrap" | "passthrough";
    ariaPropName: "aria-pressed" | "aria-selected" | "aria-checked" | "aria-current-page" | "aria-current-step" | "aria-current-date" | "aria-current-time" | "aria-current-location" | "aria-current-true" | null;
    untabbable: boolean;
    staggered: boolean;
    collatorId: string;
    noTypeahead: boolean;
    typeaheadTimeout: number;
    selectionMode: "focus" | "activation" | "disabled";
    selectedIndex: number | null;
}

function useOnRender(id: string) {
    window.onRender ??= async (id) => { console.log("RENDER:" + id); }
    let promise = window.onRender?.(id);
    const { propsStable, refElementReturn } = useRefElement<any>({})
    const { imperativeHandle, props } = useImperativeProps<any>({ refElementReturn });
    imperativeHandle.setAttribute(("data-render-pending-" + id) as never, "true" as never);
    useEffect(() => {
        imperativeHandle.setAttribute(("data-render-pending-" + id) as never, "true" as never);
        promise?.finally(() => { imperativeHandle.setAttribute(("data-render-pending-" + id) as never, "false" as never); });
    }, [promise])

    return { props: useMergedProps(props, propsStable) }
}

function TestBasesGridNavImpl({ ariaPropName, selectedIndex, arrowKeyDirection, childCount, collatorId, disableHomeEndKeys, navigatePastStartEnd, noTypeahead, pageNavigationSize, pagination, selectionMode, staggered, typeaheadTimeout, untabbable }: TestBasesGridNavImplProps) {

    console.log(pagination);

    useOnRender("parent");

    const {
        childrenHaveFocusReturn: { getAnyFocused },
        context,
        linearNavigationReturn: { },
        managedChildrenReturn: { getChildren },
        paginatedChildrenReturn: { refreshPagination },
        props,
        rearrangeableChildrenReturn: { indexDemangler, indexMangler, rearrange, reverse, shuffle, toJsonArray, useRearrangedChildren },
        rovingTabIndexReturn: { focusSelf, getTabbableIndex, setTabbableIndex },
        singleSelectionReturn: { getSelectedIndex },
        sortableChildrenReturn: { sort },
        staggeredChildrenReturn: { stillStaggering },
        typeaheadNavigationReturn: { getCurrentTypeahead, typeaheadStatus }
    } = useCompleteGridNavigationDeclarative<HTMLTableElement, HTMLTableRowElement, HTMLTableCellElement, UseCompleteGridNavigationRowInfo<HTMLTableRowElement, HTMLTableCellElement>, UseCompleteGridNavigationCellInfo<HTMLTableCellElement>>({
        linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd: navigatePastStartEnd, navigatePastStart: navigatePastStartEnd, pageNavigationSize },
        gridNavigationParameters: { onTabbableColumnChange: null },
        rearrangeableChildrenParameters: { getIndex: useCallback(info => info.props.index, []) },
        rovingTabIndexParameters: { untabbable, onTabbableIndexChange: null, focusSelfParent: focus },
        singleSelectionParameters: { ariaPropName, selectionMode },
        singleSelectionDeclarativeParameters: {
            selectedIndex,
            onSelectedIndexChange: useStableCallback((e) => {
                const f = getTestingHandler("GridNav", "onSelectedIndexChange");
                f?.(e[EventDetail].selectedIndex);
            }, [])
        },
        sortableChildrenParameters: { compare: useCallback<Compare<UseCompleteGridNavigationRowInfo<HTMLDivElement, HTMLDivElement>>>((lhs, rhs) => { return (lhs.getSortValue() as number) - (rhs.getSortValue() as number) }, []) },
        staggeredChildrenParameters: { staggered },
        paginatedChildrenParameters: { paginationMin: pagination?.[0], paginationMax: pagination?.[1] },
        typeaheadNavigationParameters: { collator: null, noTypeahead, typeaheadTimeout }
    });

    return (
        <RowContext.Provider value={context}>
            <table {...{border: 1} as {}} role="grid" data-still-staggering={stillStaggering} data-typeahead-status={typeaheadStatus} {...props}>
                <TestBaseGridNavRowren count={childCount} />
            </table>
        </RowContext.Provider>
    )
}

function TestBaseGridNavRowren({ count }: { count: number }) {

    return (
        <>
            {Array.from(function* () {
                for (let i = 0; i < count; ++i) {
                    yield (
                        <TestBaseGridNavRow index={i} />
                    );
                }
            }())}
        </>
    )
}



function TestBaseGridNavRow({ index }: { index: number }) {
    useOnRender("children");
    useOnRender("child-" + index);

    const textContent = LoremIpsum[index % LoremIpsum.length];
    const getTextContent = useStableGetter(textContent);
    const disabled = (index === DisabledIndex);
    const missing = (index === MissingIndex);
    const hidden = (index === HiddenIndex);
    if (missing)
        return <tr>(The #{index}-th item is missing)</tr>;

    const {
        hasCurrentFocusReturn: { getCurrentFocused, getCurrentFocusedInner },
        managedChildReturn: { getChildren },
        paginatedChildReturn: { hideBecausePaginated, isPaginated, paginatedVisible },
        props,
        context,
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
        linearNavigationReturn: { },
        rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex },
        typeaheadNavigationReturn: { getCurrentTypeahead, typeaheadStatus },
        rovingTabIndexChildReturn: { getTabbable, tabbable },
        singleSelectionChildReturn: { getSelected, getSelectedOffset, selected, selectedOffset, setThisOneSelected },
        staggeredChildReturn: { hideBecauseStaggered, isStaggered },
        textContentReturn: { },
    } = useCompleteGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, UseCompleteGridNavigationRowInfo<HTMLTableRowElement, HTMLTableCellElement>, UseCompleteGridNavigationCellInfo<HTMLTableCellElement>>({
        context: useContext(RowContext),
        info: {
            unselectable: disabled,
            untabbable: hidden,
            index
        },
        linearNavigationParameters: { disableHomeEndKeys: false, navigatePastEnd: "wrap", navigatePastStart: "wrap" },
        rovingTabIndexParameters: { initiallyTabbedIndex: 0, untabbable: false, onTabbableIndexChange: null, focusSelfParent: focus },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 },
        sortableChildParameters: { getSortValue: getTextContent },
        textContentParameters: { getText: getTextContent }
    });

    const [rowFocused, setRowFocused] = useState(false);
    if (rowFocused)
        throw new Error("A grid row has been focused")

    return (
        <CellContext.Provider value={context}>
            <tr
                role="row"
                data-index={index}
                data-hide-because-paginated={hideBecausePaginated}
                data-is-paginated={isPaginated}
                data-paginated-visible={paginatedVisible}
                data-tabbable={tabbable}
                data-hide-because-staggered={hideBecauseStaggered}
                data-selected={selected}
                data-selected-offset={selectedOffset}
                data-is-staggered={isStaggered}
                {...useMergedProps(props, { onFocus: e => { console.error("A grid row has received focus"); setRowFocused(true); throw new Error("A grid row has received focus");  } })}>
                {...Array.from(function* () {
                    for (let i = 0; i < 10; ++i) {
                        yield (<TestBaseGridNavCell index={i} row={index} />)
                    }
                }())}</tr>
        </CellContext.Provider>
    )
}




function TestBaseGridNavCell({ index, row }: { row: number, index: number }) {
    useOnRender("children");
    useOnRender("child-" + index);

    let textContent = LoremIpsum[(index + row) % LoremIpsum.length];
    let t = textContent.indexOf(" ")
    textContent = textContent.substring(0, t == -1? textContent.length : t);
    // const getTextContent = useStableGetter(textContent);
    const disabled = (index === DisabledIndex);
    const missing = (index === MissingIndex);
    const hidden = (index === HiddenIndex);
    if (missing)
        return <td>(The #{index}-th item is missing)</td>;

    const {
        hasCurrentFocusReturn: { getCurrentFocused, getCurrentFocusedInner },
        managedChildReturn: { getChildren },
        pressParameters: { excludeSpace },
        props,
        refElementReturn: { getElement },
        rovingTabIndexChildReturn: { getTabbable, tabbable },
        textContentReturn: { getTextContent }
    } = useCompleteGridNavigationCell<HTMLTableCellElement, UseCompleteGridNavigationCellInfo<HTMLTableCellElement>>({
        context: useContext(CellContext),
        gridNavigationCellParameters: { colSpan: 1 },
        info: { index, untabbable: false, focusSelf: e => e.focus() },
        textContentParameters: { getText: useStableCallback(() => textContent) }
    })
    return (
        <>
            <td
                role="cell"
                data-index={index}
                /*data-hide-because-paginated={hideBecausePaginated}
                data-is-paginated={isPaginated}
                data-paginated-visible={paginatedVisible}*/
                data-tabbable={tabbable}
                /*data-hide-because-staggered={hideBecauseStaggered}
                data-selected={selected}
                data-selected-offset={selectedOffset}
                data-is-staggered={isStaggered}*/
                {...props}>{/*(hideBecausePaginated || hideBecauseStaggered) ? "" : */textContent}{hidden && " (hidden)"}{disabled && " (disabled)"}</td>
        </>
    )
}
