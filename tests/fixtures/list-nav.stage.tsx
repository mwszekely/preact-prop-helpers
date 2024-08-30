import { createContext } from "preact";
import { CompleteListNavigationContext, EventDetail, Nullable, UseCompleteListNavigationChildInfo, UseCompleteListNavigationChildrenInfo, UseProcessedChildContext, UseSingleSelectionParameters, focus, useCompleteListNavigationChildDeclarative, useCompleteListNavigationChildOuter, useCompleteListNavigationChildren, useCompleteListNavigationDeclarative, useImperativeProps, useMergedProps, usePress, useRefElement, useStableCallback, useStableGetter } from "preact-prop-helpers";
import { useCallback, useContext, useEffect, useRef, useState } from "preact/hooks";
import { LoremIpsum } from "../lorem.js";
import { fromStringArray, fromStringBoolean, fromStringNumber, fromStringString, useTestSyncState } from "../util.js";
import { DefaultChildCount, DefaultDisabledIndex, DefaultHiddenIndex, DefaultMissingIndex } from "./list-nav.constants.js";




// TODO: Need to copy these back and forth
export const DisabledIndexContext = createContext(DefaultDisabledIndex);
export const MissingIndexContext = createContext(DefaultMissingIndex);
export const HiddenIndexContext = createContext(DefaultHiddenIndex);
export const DefaultChildCountContext = createContext(DefaultChildCount);


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
    setStaticIndex(count: number): Promise<void>;
    setDisabledIndex(index: number): Promise<void>;
    setMissingIndex(index: number): Promise<void>;
    setHiddenIndex(index: number): Promise<void>;
}

const Context1 = createContext<CompleteListNavigationContext<HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>>(null!);
//const Context2 = createContext<UseProcessedChildrenContext>(null!);
const Context3 = createContext<UseProcessedChildContext<any, any>>(null!);
export function TestBasesListNav() {
    let sortValues = useRef(new Array<number>());
    const refresh = useRef<() => void>(null!);
    const [staticIndex, setStaticIndex] = useTestSyncState("ListNav", "setStaticIndex", 0, fromStringNumber);
    const [mounted] = useTestSyncState("ListNav", "setMounted", true, fromStringBoolean);
    const [childCount, setChildCount] = useTestSyncState("ListNav", "setChildCount", DefaultChildCount, fromStringNumber);
    const [disabledIndex, setDisabledIndex] = useTestSyncState("ListNav", "setDisabledIndex", DefaultDisabledIndex, fromStringNumber);
    const [missingIndex, setMissingIndex] = useTestSyncState("ListNav", "setMissingIndex", DefaultMissingIndex, fromStringNumber);
    const [hiddenIndex, setHiddenIndex] = useTestSyncState("ListNav", "setHiddenIndex", DefaultHiddenIndex, fromStringNumber);
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

    useEffect(() => { installTestingHandler("ListNav", "setSelectedIndex", setSelectedIndex); }, []);



    const b = <button id="reduce-child-count" tabindex={-1} onClick={() => setTimeout(() => { setChildCount(count => count - 1) }, 500)}>Reduce children in 500ms</button>;
    const c = <button id="shuffle-child-order" tabindex={-1} onClick={() => {
        setTimeout(() => {
            let shuffled = sortValues.current.slice();

            //shuffled[staticIndex] = 0;
            //shuffled[0] = staticIndex;

            for (let i = 0; i < shuffled.length; ++i) {
                sortValues.current[i] = Math.random();
            }
            sortValues.current[staticIndex] = -1;

            refresh.current();
        }, 500)

    }}>Shuffle children in 500ms</button>;
    const e = <button id="reset-child-order" tabindex={-1} onClick={() => {
        setTimeout(() => {
            let shuffled = sortValues.current.slice();
            for (let i = 0; i < shuffled.length; ++i)
                sortValues.current[i] = i;

            refresh.current();
        }, 500);
    }}>Reset child order in 500ms</button>
    const d = <label>When shuffling, force this child to where index 0 would show: <input id="change-static-index" tabindex={-1} type="number" value={staticIndex} onInput={e => setStaticIndex(e.currentTarget.valueAsNumber)} /></label>

    const setRefresh = useCallback((f: () => void) => { refresh.current = f; }, []);

    if (!mounted)
        return <ol />;
    return (
        <>
            <DisabledIndexContext.Provider value={disabledIndex}>
                <TestBasesListNavImpl setRefresh={setRefresh} sortValues={sortValues.current} singleSelectedIndex={selectedIndex} childCount={childCount} collatorId={collatorId} disableHomeEndKeys={disableHomeEndKeys} navigatePastStartEnd={navigatePastStartEnd} noTypeahead={noTypeahead} pageNavigationSize={pageNavigationSize} pagination={pagination} singleSelectionMode={singleSelectionMode} staggered={staggered} typeaheadTimeout={typeaheadTimeout} untabbable={untabbable} arrowKeyDirection={arrowKeyDirection} singleSelectionAriaPropName={singleSelectionAriaPropName} />
                {b}
                {d}
                {c}
                {e}
            </DisabledIndexContext.Provider>
        </>
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
    sortValues: Array<number>;
    setRefresh: (r: () => void) => void;
}

const globalLogEnabled = false;

function useOnRender(id: string) {
    if (!globalLogEnabled)
        return { props: {} };
    //window.onRender ??= async (id) => { console.log("RENDER:" + id); }
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

function TestBasesListNavImpl({ sortValues, setRefresh, singleSelectionAriaPropName, singleSelectedIndex, arrowKeyDirection, childCount, collatorId, disableHomeEndKeys, navigatePastStartEnd, noTypeahead, pageNavigationSize, pagination, singleSelectionMode, staggered, typeaheadTimeout, untabbable }: TestBasesListNavImplProps) {

    console.log(pagination);

    const { props: p1 } = useOnRender("parent");


    const {
        context: contextFromList,
        linearNavigationReturn: { },
        managedChildrenReturn: { getChildren },
        //paginatedChildrenReturn: { refreshPagination },
        props,
        refElementReturn,
        childrenHaveFocusReturn,
        multiSelectionReturn,
        rovingTabIndexReturn: { setTabbableIndex },
        singleSelectionReturn: { getSingleSelectedIndex },
        //sortableChildrenReturn: { sort },
        //staggeredChildrenReturn: { stillStaggering },
        typeaheadNavigationReturn: { getCurrentTypeahead, typeaheadStatus }
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
        processedIndexManglerParameters: {
            compare: null,
            getSortValueAt: useStableCallback((index) => {
                return (sortValues[index] ??= index);
            }, []),
            getIndex: useCallback(info => info.props.index, []),
        },
    });

    const MissingIndex = useContext(MissingIndexContext);

    const {
        context: contextFromProcessing,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn: { children, refresh },
        staggeredChildrenReturn: { stillStaggering },
    } = useCompleteListNavigationChildren({
        context: contextFromList,
        paginatedChildrenParameters: { paginationMin: pagination?.[0], paginationMax: pagination?.[1] },
        rearrangeableChildrenParameters: {
            children: Array.from(function* () {
                for (let i = 0; i < childCount; ++i) {
                    if (i == MissingIndex)
                        yield <li><span>(Item {i} is a <strong>hole in the array</strong> and does not exist)</span></li>;
                    else
                        yield (
                            <Outer index={i} />
                        );
                }
            }()),
        },
        managedChildrenParameters: {},
        staggeredChildrenParameters: { staggered },
    });

    useEffect(() => {
        setRefresh(refresh);
    }, [refresh])

    return (
        <Context1.Provider value={contextFromList}>
            <Context3.Provider value={contextFromProcessing}>
                <ol {...useMergedProps(props, p1, {
                    role: "toolbar",
                    "data-still-staggering": stillStaggering,
                    "data-typeahead-status": typeaheadStatus
                } as {})}>
                    {children}
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
    const context = useContext(Context3);

    const {
        managedChildReturn,
        paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        props,
        hide,
        refElementReturn,
        staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered }
    } = useCompleteListNavigationChildOuter<HTMLLIElement, UseCompleteListNavigationChildrenInfo<HTMLLIElement>>({
        context,
        info: { index },
        refElementParameters: {},
        rearrangeableChildParameters: { cssProperty: 'translate', duration: '666ms' }
    });

    const children = (hideBecausePaginated || hideBecauseStaggered) ? null : <TestBasesListNavChild index={index} />

    //const missing = (index === MissingIndex);
    //if (missing)
    //    return <li {...props}>(The #{index}-th item is missing)</li>;
    // else
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
    const DisabledIndex = useContext(DisabledIndexContext);
    const HiddenIndex = useContext(HiddenIndexContext);
    const { props: p1 } = useOnRender("children");
    const { props: p2 } = useOnRender("child-" + index);

    const textContent = LoremIpsum[index % LoremIpsum.length];
    const getTextContent = useStableGetter(textContent);
    const disabled = (index === DisabledIndex);
    const hidden = (index === HiddenIndex);

    const focusSelf = (e: HTMLLIElement) => { focus(e) };
    const {
        hasCurrentFocusReturn: { getCurrentFocused, getCurrentFocusedInner },
        managedChildReturn: { getChildren },
        //paginatedChildReturn: { hideBecausePaginated, parentIsPaginated },
        propsChild,
        propsTabbable,
        refElementReturn,
        multiSelectionChildReturn,
        rovingTabIndexChildReturn: { getTabbable, tabbable },
        singleSelectionChildReturn: { getSingleSelected, getSingleSelectedOffset, singleSelected, singleSelectedOffset },
        //staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered },
        textContentReturn: { },
        pressParameters: { onPressSync, excludeSpace },
    } = useCompleteListNavigationChildDeclarative<HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>({
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
        multiSelectionChildParameters: { multiSelectionDisabled: disabled },
        multiSelectionChildDeclarativeParameters: { multiSelected: null, onMultiSelectedChange: null },
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


