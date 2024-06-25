import { createContext } from "preact";
import { CompleteListNavigationContext, EventDetail, Nullable, UseCompleteListNavigationChildInfo, UseProcessedChildContext, UseSingleSelectionParameters, focus, useCompleteListNavigationChild, useCompleteListNavigationChildren, useCompleteListNavigationDeclarative, useImperativeProps, useMergedProps, usePress, useProcessedChild, useRefElement, useStableCallback, useStableGetter } from "preact-prop-helpers";
import { useCallback, useContext, useEffect, useState } from "preact/hooks";
import { LoremIpsum } from "../lorem.js";
import { fromStringArray, fromStringBoolean, fromStringNumber, fromStringString, useTestSyncState } from "../util.js";
import { DefaultChildCount, DisabledIndex, HiddenIndex, MissingIndex } from "./list-nav.constants.js";



export interface ListNavConstants {
    setMounted(mounted: boolean): void;
    setSelectedIndex(index: number | null): void;
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

const Context1 = createContext<CompleteListNavigationContext<HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>>(null!);
//const Context2 = createContext<UseProcessedChildrenContext>(null!);
const Context3 = createContext<UseProcessedChildContext<any, any>>(null!);

export function TestBasesListNav() {
    const [mounted] = useTestSyncState("ListNav", "setMounted", true, fromStringBoolean);
    const [childCount, setChildCount] = useTestSyncState("ListNav", "setChildCount", DefaultChildCount, fromStringNumber);
    const [arrowKeyDirection] = useTestSyncState("ListNav", "setArrowKeyDirection", "vertical", fromStringString);
    const [pagination, setPagination] = useTestSyncState("ListNav", "setPagination", null, fromStringArray(fromStringNumber));
    const [disableHomeEndKeys] = useTestSyncState("ListNav", "setDisableHomeEndKeys", false, fromStringBoolean);
    const [pageNavigationSize] = useTestSyncState("ListNav", "setPageNavigationSize", 0.1, fromStringNumber);
    const [navigatePastStartEnd] = useTestSyncState("ListNav", "setNavigatePastStartEnd", "wrap", fromStringString);
    const [singleSelectionAriaPropName] = useTestSyncState("ListNav", "setSingleSelectionAriaPropName", "aria-selected", fromStringString);
    const [untabbable, setUntabbable] = useTestSyncState("ListNav", "setUntabbable", false, fromStringBoolean);
    const [staggered] = useTestSyncState("ListNav", "setStaggered", false, fromStringBoolean);
    const [collatorId] = useTestSyncState("ListNav", "setCollator", "", fromStringString);
    const [noTypeahead] = useTestSyncState("ListNav", "setNoTypeahead", false, fromStringBoolean);
    const [typeaheadTimeout] = useTestSyncState("ListNav", "setTypeaheadTimeout", 1000, fromStringNumber);
    const [singleSelectionMode] = useTestSyncState("ListNav", "setSingleSelectionMode", "activation", fromStringString);
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

    const a = { untabbable, staggered, collatorId, noTypeahead, typeaheadTimeout, singleSelectionMode }

    installTestingHandler("ListNav", "setSelectedIndex", setSelectedIndex);
    if (!mounted)
        return <ol />;

    return (
        <TestBasesListNavImpl singleSelectedIndex={selectedIndex} childCount={childCount} collatorId={collatorId} disableHomeEndKeys={disableHomeEndKeys} navigatePastStartEnd={navigatePastStartEnd} noTypeahead={noTypeahead} pageNavigationSize={pageNavigationSize} pagination={pagination} singleSelectionMode={singleSelectionMode} staggered={staggered} typeaheadTimeout={typeaheadTimeout} untabbable={untabbable} arrowKeyDirection={arrowKeyDirection} singleSelectionAriaPropName={singleSelectionAriaPropName} />
    );
}

interface TestBasesListNavImplProps {
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

const globalLogEnabled = false;

function useOnRender(id: string) {
    if (!globalLogEnabled)
        return { props: {} };
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

function TestBasesListNavImpl({ singleSelectionAriaPropName, singleSelectedIndex, arrowKeyDirection, childCount, collatorId, disableHomeEndKeys, navigatePastStartEnd, noTypeahead, pageNavigationSize, pagination, singleSelectionMode, staggered, typeaheadTimeout, untabbable }: TestBasesListNavImplProps) {

    console.log(pagination);

    const { props: p1 } = useOnRender("parent");

    const {
        context: contextFromList,
        linearNavigationReturn: { },
        managedChildrenReturn: { getChildren },
        //paginatedChildrenReturn: { refreshPagination },
        props,
        refElementReturn,
        rearrangeableChildrenReturn: { rearrange, reverse, shuffle },
        rovingTabIndexReturn,
        singleSelectionReturn: { getSingleSelectedIndex },
        //sortableChildrenReturn: { sort },
        //staggeredChildrenReturn: { stillStaggering },
        typeaheadNavigationReturn: { getCurrentTypeahead, typeaheadStatus },
    } = useCompleteListNavigationDeclarative<HTMLOListElement, HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>({
        linearNavigationParameters: { arrowKeyDirection, disableHomeEndKeys, navigatePastEnd: navigatePastStartEnd, navigatePastStart: navigatePastStartEnd, pageNavigationSize, onNavigateLinear: null },
        rovingTabIndexParameters: { untabbable, onTabbableIndexChange: null, focusSelfParent: focus },
        singleSelectionParameters: { singleSelectionAriaPropName, singleSelectionMode },
        singleSelectionDeclarativeParameters: {
            singleSelectedIndex,
            onSingleSelectedIndexChange: useStableCallback((e) => {
                const f = getTestingHandler("ListNav", "onSelectedIndexChange");
                f?.(e[EventDetail].selectedIndex);
            }, [])
        },
        multiSelectionParameters: { multiSelectionAriaPropName: "aria-pressed", multiSelectionMode: "disabled", onSelectionChange: null, },
        //sortableChildrenParameters: { compare: useCallback<Compare<UseCompleteListNavigationChildInfo<HTMLLIElement>>>((lhs, rhs) => { return (lhs.getSortValue() as number) - (rhs.getSortValue() as number) }, []) },
        //staggeredChildrenParameters: { staggered },
        //paginatedChildrenParameters: { paginationMin: pagination?.[0], paginationMax: pagination?.[1] },
        typeaheadNavigationParameters: { collator: null, noTypeahead, typeaheadTimeout, onNavigateTypeahead: null },
        refElementParameters: {},
        paginatedChildrenParameters: { paginationMin: pagination?.[0], paginationMax: pagination?.[1] },
    });

    const { context: contextFromProcessing, paginatedChildrenReturn, rearrangeableChildrenReturn, staggeredChildrenReturn: { stillStaggering } } = useCompleteListNavigationChildren({
        context: contextFromList,
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
        <Context1.Provider value={contextFromList}>
            <Context3.Provider value={contextFromProcessing}>
                <ol {...useMergedProps(props, p1, {
                    role: "toolbar",
                    "data-still-staggering": stillStaggering,
                    "data-typeahead-status": typeaheadStatus
                } as {})}>
                    {rearrangeableChildrenReturn.children}
                </ol>
            </Context3.Provider>
        </Context1.Provider>
    )
}

/*
function TestBasesListNavChildren({ count }: { count: number }) {

    return (
        <>
            {Array.from(function* () {
                for (let i = 0; i < count; ++i) {
                    yield (
                        <TestBasesListNavChild index={i} />
                    );
                }
            }())}
        </>
    )
}*/

function Outer({ index }: { index: number }) {
    const { managedChildReturn, paginatedChildReturn: { hideBecausePaginated, parentIsPaginated }, props, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered } } = useProcessedChild({
        context: useContext(Context3),
        info: { index, getSortValue: null },
    });

    const children = (hideBecausePaginated || hideBecauseStaggered) ? null : <TestBasesListNavChild index={index} />

    return (<>{
        children ??
        <li
            data-hide-because-paginated={hideBecausePaginated}
            data-parent-is-paginated={parentIsPaginated}
            data-hide-because-staggered={hideBecauseStaggered}
            data-parent-is-staggered={parentIsStaggered}
            {...(props)}>(staggered)</li>}</>)
}


function TestBasesListNavChild({ index }: { index: number }) {
    const { props: p1 } = useOnRender("children");
    const { props: p2 } = useOnRender("child-" + index);

    const textContent = LoremIpsum[index % LoremIpsum.length];
    const getTextContent = useStableGetter(textContent);
    const disabled = (index === DisabledIndex);
    const missing = (index === MissingIndex);
    const hidden = (index === HiddenIndex);
    if (missing)
        return <li {...useMergedProps(p1, p2)}>(The #{index}-th item is missing)</li>;

    const focusSelf = (e: HTMLLIElement) => { e.focus() };
    const {
        hasCurrentFocusReturn: { getCurrentFocused, getCurrentFocusedInner },
        managedChildReturn: { getChildren },
        //paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        propsChild,
        propsTabbable,
        refElementReturn,
        rovingTabIndexChildReturn: { getTabbable, tabbable },
        singleSelectionChildReturn: { getSingleSelected, getSingleSelectedOffset, singleSelected, singleSelectedOffset },
        //staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
        textContentReturn: { },
        pressParameters: { onPressSync, excludeSpace }
    } = useCompleteListNavigationChild<HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>({
        context: useContext(Context1),
        info: {
            focusSelf,
            untabbable: hidden,
            index,
            //getSortValue: getTextContent,
        },
        textContentParameters: { getText: getTextContent, onTextContentChange: null },
        hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
        refElementParameters: {},
        multiSelectionChildParameters: { multiSelectionDisabled: disabled, initiallyMultiSelected: false, onMultiSelectChange: null },
        singleSelectionChildParameters: { singleSelectionDisabled: disabled }
    });

    const { pressReturn: { getIsPressing, longPress, pressing }, props: propsPressStable } = usePress({
        pressParameters: {
            focusSelf,
            onPressSync,
            excludeSpace,
            allowRepeatPresses: null,
            excludeEnter: null,
            excludePointer: null,
            longPressThreshold: null,
            onPressingChange: null,
        },
        refElementReturn
    });
    return (
        <>
            <li
                data-index={index}
                data-pressing={pressing}
                data-long-pressing={longPress}
                data-tabbable={tabbable}
                data-selected={singleSelected}
                data-selected-offset={singleSelectedOffset}
                data-hide-because-paginated="false"
                data-hide-because-staggered="false"
                {...useMergedProps(propsChild, propsTabbable, propsPressStable, p1, p2)}>{textContent}{hidden && " (hidden)"}{disabled && " (disabled)"}</li>
        </>
    )
}


