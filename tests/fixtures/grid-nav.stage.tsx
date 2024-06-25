import { createContext } from "preact";
import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, EventDetail, Nullable, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationRowInfo, UseProcessedChildContext, UseSingleSelectionParameters, focus, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useCompleteGridNavigationRows, useImperativeProps, useMergedProps, useProcessedChild, useRefElement, useStableCallback, useStableGetter } from "preact-prop-helpers";
import { useCallback, useContext, useEffect, useState } from "preact/hooks";
import { LoremIpsum } from "../lorem.js";
import { fromStringArray, fromStringBoolean, fromStringNumber, fromStringString, useTestSyncState } from "../util.js";
import { DefaultChildCount, DisabledIndex, HiddenIndex, MissingIndex, WithColSpanIndex } from "./grid-nav.constants.js";



export interface GridNavConstants {
    setMounted(mounted: boolean): void;
    setSingleSelectedIndex(index: number | null): void;
    setChildCount(count: number): Promise<void>;
    setUntabbable(untabbable: boolean): Promise<void>;
    setDisableHomeEndKeys(disabled: boolean): Promise<void>;
    setPageNavigationSize(size: number): Promise<void>;
    setPagination(size: [number, number] | null): Promise<void>;
    setArrowKeyDirection(direction: "horizontal" | "vertical"): Promise<void>;
    setNavigatePastStartEnd(op: "wrap" | "passthrough"): Promise<void>;
    setSingleSelectionAriaPropName(ariaPropName: UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"]["singleSelectionAriaPropName"]): Promise<void>;
    setSingleSelectionMode(ariaPropName: UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"]["singleSelectionMode"]): Promise<void>;
    setStaggered(staggered: boolean): Promise<void>;
    setCollator(id: string): Promise<void>;
    setNoTypeahead(noTypeahead: boolean): Promise<void>;
    setTypeaheadTimeout(timeout: number): Promise<void>;
    onSelectedIndexChange(index: number): (void | Promise<void>);
}

//const ProcessingChildrenContext = createContext<UseProcessedChildrenContext>(null!);
const ProcessingChildContext = createContext<UseProcessedChildContext<any, any>>(null!);
const RowContext = createContext<CompleteGridNavigationRowContext<HTMLTableRowElement, UseCompleteGridNavigationRowInfo<HTMLTableRowElement>>>(null!);
const CellContext = createContext<CompleteGridNavigationCellContext<HTMLTableCellElement, UseCompleteGridNavigationCellInfo<HTMLTableCellElement>>>(null!);

export function TestBasesGridNav() {
    const [mounted] = useTestSyncState("GridNav", "setMounted", true, fromStringBoolean);
    const [childCount] = useTestSyncState("GridNav", "setChildCount", DefaultChildCount, fromStringNumber);
    const [arrowKeyDirection] = useTestSyncState("GridNav", "setArrowKeyDirection", "vertical", fromStringString);
    const [pagination, setPagination] = useTestSyncState("GridNav", "setPagination", null, fromStringArray(fromStringNumber));
    const [disableHomeEndKeys] = useTestSyncState("GridNav", "setDisableHomeEndKeys", false, fromStringBoolean);
    const [pageNavigationSize] = useTestSyncState("GridNav", "setPageNavigationSize", 0.1, fromStringNumber);
    const [navigatePastStartEnd] = useTestSyncState("GridNav", "setNavigatePastStartEnd", "wrap", fromStringString);
    const [singleSelectionAriaPropName] = useTestSyncState("GridNav", "setSingleSelectionAriaPropName", "aria-selected", fromStringString);
    const [untabbable, setUntabbable] = useTestSyncState("GridNav", "setUntabbable", false, fromStringBoolean);
    const [staggered] = useTestSyncState("GridNav", "setStaggered", false, fromStringBoolean);
    const [collatorId] = useTestSyncState("GridNav", "setCollator", "", fromStringString);
    const [noTypeahead] = useTestSyncState("GridNav", "setNoTypeahead", false, fromStringBoolean);
    const [typeaheadTimeout] = useTestSyncState("GridNav", "setTypeaheadTimeout", 1000, fromStringNumber);
    const [singleSelectionMode] = useTestSyncState("GridNav", "setSingleSelectionMode", "activation", fromStringString);
    const [singleSelectedIndex, setSingleSelectedIndex] = useState<number | null>(null);
    console.log(pagination);

    const a = { untabbable, staggered, collatorId, noTypeahead, typeaheadTimeout, singleSelectionMode }

    installTestingHandler("GridNav", "setSingleSelectedIndex", setSingleSelectedIndex);
    if (!mounted)
        return <div />;

    return (
        <TestBasesGridNavImpl singleSelectedIndex={singleSelectedIndex} childCount={childCount} collatorId={collatorId} disableHomeEndKeys={disableHomeEndKeys} navigatePastStartEnd={navigatePastStartEnd} noTypeahead={noTypeahead} pageNavigationSize={pageNavigationSize} pagination={pagination} singleSelectionMode={singleSelectionMode} staggered={staggered} typeaheadTimeout={typeaheadTimeout} untabbable={untabbable} arrowKeyDirection={arrowKeyDirection} singleSelectionAriaPropName={singleSelectionAriaPropName} />
    );
}

interface TestBasesGridNavImplProps {
    childCount: number;
    arrowKeyDirection: "horizontal" | "vertical";
    pagination: [number, number] | null;
    disableHomeEndKeys: boolean;
    pageNavigationSize: number;
    navigatePastStartEnd: "wrap" | "passthrough";
    singleSelectionAriaPropName: Nullable<"aria-pressed" | "aria-selected" | "aria-checked" | "aria-current-page" | "aria-current-step" | "aria-current-date" | "aria-current-time" | "aria-current-location" | "aria-current-true">;
    untabbable: boolean;
    staggered: boolean;
    collatorId: string;
    noTypeahead: boolean;
    typeaheadTimeout: number;
    singleSelectionMode: "focus" | "activation" | "disabled";
    singleSelectedIndex: number | null;
}

function useOnRender(id: string) {
    window.onRender ??= async (id) => { console.log("RENDER:" + id); }
    let promise = window.onRender?.(id);
    const { propsStable, refElementReturn } = useRefElement<any>({ refElementParameters: {} })
    const { imperativePropsReturn: imperativeHandle, props } = useImperativeProps<any>({ refElementReturn });
    imperativeHandle.setAttribute(("data-render-pending-" + id) as never, "true" as never);
    useEffect(() => {
        imperativeHandle.setAttribute(("data-render-pending-" + id) as never, "true" as never);
        promise?.finally(() => { imperativeHandle.setAttribute(("data-render-pending-" + id) as never, "false" as never); });
    }, [promise])

    return { props: useMergedProps(props, propsStable) }
}

function TestBasesGridNavImpl({ singleSelectionAriaPropName, singleSelectedIndex, arrowKeyDirection, childCount, collatorId, disableHomeEndKeys, navigatePastStartEnd, noTypeahead, pageNavigationSize, pagination, singleSelectionMode, staggered, typeaheadTimeout, untabbable }: TestBasesGridNavImplProps) {

    console.log(pagination);

    const { props: p1 } = useOnRender("parent");

    const {
        childrenHaveFocusReturn: { getAnyFocused },
        context: contextFromGrid,
        linearNavigationReturn: { },
        managedChildrenReturn: { getChildren },
        //paginatedChildrenReturn: { refreshPagination },
        props,
        //rearrangeableChildrenReturn: { indexDemangler, indexMangler, rearrange, reverse, shuffle, toJsonArray, useRearrangedChildren },
        rovingTabIndexReturn,
        singleSelectionReturn: { getSingleSelectedIndex },
        //sortableChildrenReturn: { sort },
        //staggeredChildrenReturn: { stillStaggering },
        refElementReturn,
        typeaheadNavigationReturn: { getCurrentTypeahead, typeaheadStatus }
    } = useCompleteGridNavigationDeclarative<HTMLTableElement, HTMLTableRowElement, UseCompleteGridNavigationRowInfo<HTMLTableRowElement>>({
        linearNavigationParameters: { disableHomeEndKeys, navigatePastEnd: navigatePastStartEnd, navigatePastStart: navigatePastStartEnd, pageNavigationSize, onNavigateLinear: null },
        gridNavigationParameters: { onTabbableColumnChange: null, initiallyTabbableColumn: 0 },
        //rearrangeableChildrenParameters: { getIndex: useCallback(info => info.props.index, []) },
        rovingTabIndexParameters: { untabbable, onTabbableIndexChange: null, focusSelfParent: focus },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode },
        refElementParameters: {},
        singleSelectionDeclarativeParameters: {
            singleSelectedIndex,
            onSingleSelectedIndexChange: useStableCallback((e) => {
                const f = getTestingHandler("GridNav", "onSelectedIndexChange");
                f?.(e[EventDetail].selectedIndex);
            }, [])
        },
        multiSelectionParameters: { multiSelectionAriaPropName: "aria-checked", multiSelectionMode: "disabled", onSelectionChange: null },
        //sortableChildrenParameters: { compare: useCallback<Compare<UseCompleteGridNavigationRowInfo<HTMLDivElement>>>((lhs, rhs) => { return (lhs.getSortValue() as number) - (rhs.getSortValue() as number) }, []) },
        //staggeredChildrenParameters: { staggered },
        paginatedChildrenParameters: { paginationMin: pagination?.[0], paginationMax: pagination?.[1] },
        typeaheadNavigationParameters: { collator: null, noTypeahead, typeaheadTimeout, onNavigateTypeahead: null }
    });

    const { context: contextFromProcessing, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn: { stillStaggering } } = useCompleteGridNavigationRows({
        context: contextFromGrid,
        paginatedChildrenParameters: { paginationMin: pagination?.[0], paginationMax: pagination?.[1] },
        rearrangeableChildrenParameters: {
            getIndex: useCallback(info => info.props.index, []),
            adjust: null,
            children: Array.from(function* () {
                for (let i = 0; i < childCount; ++i) {
                    yield (
                        <Outer index={i} />
                    );
                }
            }()),
            compare: null,
            onRearranged: null
        },
        managedChildrenParameters: {},
        staggeredChildrenParameters: { staggered },
    });

    return (
        <ProcessingChildContext.Provider value={contextFromProcessing}>
            <RowContext.Provider value={contextFromGrid}>
                <table {...useMergedProps(props, p1, {
                    "data-grid-nav": true,
                    border: 1,
                    role: "grid",
                    "data-still-staggering": (stillStaggering || false).toString(),
                    "data-typeahead-status": (typeaheadStatus || false).toString()
                } as {})}>
                    {rearrangeableChildrenReturn.children}
                </table>
            </RowContext.Provider>
        </ProcessingChildContext.Provider>
    )
}



function Outer({ index }: { index: number }) {
    const {
        managedChildReturn,
        props,
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered }
    } = useProcessedChild({
        context: useContext(ProcessingChildContext),
        info: { index, getSortValue: null }
    });

    let children = hideBecausePaginated || hideBecauseStaggered ? null : <TestBaseGridNavRow index={index} />;

    return <>{
        children ??
        <tr
            data-hide-because-paginated={hideBecausePaginated}
            data-parent-is-paginated={parentIsPaginated}
            data-hide-because-staggered={hideBecauseStaggered}
            data-parent-is-staggered={parentIsStaggered}
            {...(props)
            }>{"(staggered)"}</tr>
    }</>
}

function TestBaseGridNavRow({ index }: { index: number }) {
    const { props: p1 } = useOnRender("children");
    const { props: p2 } = useOnRender("child-" + index);

    const textContent = LoremIpsum[index % LoremIpsum.length];
    const getTextContent = useStableGetter(textContent);
    const disabled = (index === DisabledIndex);
    const missing = (index === MissingIndex);
    const hidden = (index === HiddenIndex);
    if (missing)
        return <tr data-grid-nav-row  {...useMergedProps(p1, p2)}><td colSpan={1000 - 1}>(The #{index}-th item is missing)</td></tr>;

    const {
        hasCurrentFocusReturn: { getCurrentFocused, getCurrentFocusedInner },
        managedChildReturn: { getChildren },
        //paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        props,
        context,
        linearNavigationReturn: { },
        rovingTabIndexReturn: { getTabbableIndex, setTabbableIndex },
        typeaheadNavigationReturn: { getCurrentTypeahead, typeaheadStatus },
        rovingTabIndexChildReturn: { getTabbable, tabbable },
        singleSelectionChildReturn: { getSingleSelected, getSingleSelectedOffset, singleSelected, singleSelectedOffset },
        //staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
        textContentReturn: { },
    } = useCompleteGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, UseCompleteGridNavigationRowInfo<HTMLTableRowElement>, UseCompleteGridNavigationCellInfo<HTMLTableCellElement>>({
        context: useContext(RowContext),
        info: {
            untabbable: hidden,
            index,
        },
        //gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex: returnZero },
        multiSelectionChildParameters: { initiallyMultiSelected: false, multiSelectionDisabled: true, onMultiSelectChange: null },
        singleSelectionChildParameters: { singleSelectionDisabled: disabled },
        linearNavigationParameters: { navigatePastEnd: "wrap", navigatePastStart: "wrap" },
        rovingTabIndexParameters: { initiallyTabbedIndex: 0, untabbable: false, onTabbableIndexChange: null },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000, onNavigateTypeahead: null },
        textContentParameters: { getText: getTextContent, onTextContentChange: null },
        hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null }
    });

    const [rowFocused, setRowFocused] = useState(false);
    if (rowFocused)
        throw new Error("A grid row has been focused")

    return (
        <CellContext.Provider value={context}>
            <tr

                {...useMergedProps(props, p1, p2,
                    {
                        role: "row",
                        "data-grid-nav-row": true,
                        "data-index": index,
                        "data-tabbable": tabbable,
                        "data-selected": singleSelected,
                        "data-selected-offset": singleSelectedOffset,
                    } as {},
                    {
                        onFocus: e => { console.error("A grid row has received focus"); setRowFocused(true); throw new Error("A grid row has received focus"); }
                    })}>
                {...Array.from(function* () {
                    for (let i = 0; i < 10; ++i) {
                        const colSpan = (i === WithColSpanIndex ? (index % 10) : 0) + 1;
                        yield (<TestBaseGridNavCell index={i} row={index} colSpan={colSpan} />);
                        i += (colSpan - 1);
                    }
                }())}</tr>
        </CellContext.Provider>
    )
}




function TestBaseGridNavCell({ index, row, colSpan }: { row: number, index: number, colSpan: number }) {
    const { props: p1 } = useOnRender("children");
    const { props: p2 } = useOnRender("child-" + index);

    let textContent = LoremIpsum[(index + row) % LoremIpsum.length];
    let t = textContent.indexOf(" ")
    textContent = textContent.substring(0, t == -1 ? textContent.length : t);
    // const getTextContent = useStableGetter(textContent);
    const disabled = (index === DisabledIndex);
    const missing = (index === MissingIndex);
    const hidden = (index === HiddenIndex);
    if (missing)
        return <td data-grid-nav-cell colSpan={colSpan} {...useMergedProps(p1, p2)}>(The #{index}-th item is missing)</td>;

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
        gridNavigationCellParameters: { colSpan },
        info: { index, untabbable: false, focusSelf: e => e.focus() },
        textContentParameters: { getText: useStableCallback(() => textContent), onTextContentChange: null }
    })
    return (
        <>
            <td

                {...useMergedProps(props, p1, p2, {
                    "data-grid-nav-cell": true,
                    colSpan,
                    role: "cell",
                    "data-index": index,
                    "data-tabbable": tabbable,
                } as {})}>{textContent}{hidden && " (hidden)"}{disabled && " (disabled)"}</td>
        </>
    )
}
