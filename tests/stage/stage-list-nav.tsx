import { useCallback, useContext, useEffect, useRef, useState } from "preact/hooks";
import { Compare, CompleteListNavigationContext, UseCompleteListNavigationChildInfo, UseSingleSelectionParameters, useCompleteListNavigation, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useMergedProps, useStableGetter, useStaggeredChildren } from "../../dist/index.js";
import { TestItem, useTestSyncState } from "./util.js";
import { createContext } from "preact";
import { LoremIpsum } from "../lorem.js";



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
    setAriaPropName(ariaPropName: UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"]["ariaPropName"]): Promise<void>;
    setSelectionMode(ariaPropName: UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]): Promise<void>;
    setStaggered(staggered: boolean): Promise<void>;
    setCollator(id: string): Promise<void>;
    setNoTypeahead(noTypeahead: boolean): Promise<void>;
    setTypeaheadTimeout(timeout: number): Promise<void>;
    onSelectedIndexChange(index: number, e: Event): (void | Promise<void>);
}

const Context = createContext<CompleteListNavigationContext<HTMLOListElement, HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>>(null!);

export function TestBasesListNav() {
    const mounted = useTestSyncState("ListNav", "setMounted", true);
    const childCount = useTestSyncState("ListNav", "setChildCount", 20);
    const arrowKeyDirection = useTestSyncState("ListNav", "setArrowKeyDirection", "vertical");
    const pagination = useTestSyncState("ListNav", "setPagination", null);
    const disableHomeEndKeys = useTestSyncState("ListNav", "setDisableHomeEndKeys", false);
    const pageNavigationSize = useTestSyncState("ListNav", "setPageNavigationSize", 0.1);
    const navigatePastStartEnd = useTestSyncState("ListNav", "setNavigatePastStartEnd", "wrap");
    const ariaPropName = useTestSyncState("ListNav", "setAriaPropName", "aria-selected");
    const untabbable = useTestSyncState("ListNav", "setUntabbable", false);
    const staggered = useTestSyncState("ListNav", "setStaggered", false);
    const collatorId = useTestSyncState("ListNav", "setCollator", "");
    const noTypeahead = useTestSyncState("ListNav", "setNoTypeahead", false);
    const typeaheadTimeout = useTestSyncState("ListNav", "setTypeaheadTimeout", 1000);
    const selectionMode = useTestSyncState("ListNav", "setSelectionMode", "activation");
    const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
    console.log(pagination);

    const a = { untabbable, staggered, collatorId, noTypeahead, typeaheadTimeout, selectionMode }

    installTestingHandler("ListNav", "setSelectedIndex", setSelectedIndex);
    if (!mounted)
        return <ol />;

    return (
            <TestBasesListNavImpl selectedIndex={selectedIndex} childCount={childCount} collatorId={collatorId} disableHomeEndKeys={disableHomeEndKeys} navigatePastStartEnd={navigatePastStartEnd} noTypeahead={noTypeahead} pageNavigationSize={pageNavigationSize} pagination={pagination} selectionMode={selectionMode} staggered={staggered} typeaheadTimeout={typeaheadTimeout} untabbable={untabbable} arrowKeyDirection={arrowKeyDirection} ariaPropName={ariaPropName} />
    );
}

interface A {
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

const UntabbableContext = createContext(false);
const AriaPropNameContext = createContext("aria-selected" as UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"]["ariaPropName"]);
const SelectionModeContext = createContext("activation" as UseSingleSelectionParameters<any, any, any>["singleSelectionParameters"]["selectionMode"]);
function TestBasesListNavImpl({ ariaPropName, selectedIndex, arrowKeyDirection, childCount, collatorId, disableHomeEndKeys, navigatePastStartEnd, noTypeahead, pageNavigationSize, pagination, selectionMode, staggered, typeaheadTimeout, untabbable }: A) {

    console.log(pagination);
    /*let u = useRef(false);
    useEffect(() => {
        window.addEventListener("keydown", e => {
            if (e.code == "Escape") {
                getTestingHandler("ListNav", "setUntabbable")(u.current = !u.current);
            }
        })
    }, [])*/

    const [t, setT] = useState<number | null>(null);
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
    } = useCompleteListNavigationDeclarative<HTMLOListElement, HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>({
        linearNavigationParameters: { arrowKeyDirection, disableHomeEndKeys, navigatePastEnd: navigatePastStartEnd, navigatePastStart: navigatePastStartEnd, pageNavigationSize },
        paginatedChildrenParameters: { paginationMin: pagination?.[0], paginationMax: pagination?.[1] },
        rearrangeableChildrenParameters: { getIndex: useCallback(info => info.props.index, []) },
        rovingTabIndexParameters: { untabbable, onTabbableIndexChange: setT },
        singleSelectionParameters: { ariaPropName, selectionMode },
        singleSelectionDeclarativeParameters: {
            selectedIndex,
            setSelectedIndex: ((i, e) => {
                const f = getTestingHandler("ListNav", "onSelectedIndexChange");
                f?.(i!, e!);
            })
        },
        sortableChildrenParameters: { compare: useCallback<Compare<UseCompleteListNavigationChildInfo<HTMLLIElement>>>((lhs, rhs) => { return (lhs.getSortValue() as number) - (rhs.getSortValue() as number) }, []) },
        staggeredChildrenParameters: { staggered },
        typeaheadNavigationParameters: { collator: null, noTypeahead, typeaheadTimeout }
    });

    return (
        <AriaPropNameContext.Provider value={ariaPropName}>
            <SelectionModeContext.Provider value={selectionMode}>
                <UntabbableContext.Provider value={untabbable}>
                    <PaginatedContext.Provider value={pagination != null}>
                        <StaggeredContext.Provider value={staggered}>
                            <Context.Provider value={context}>
                                {untabbable.toString()}, {t}
                                <ol role="toolbar" data-still-staggering={stillStaggering} data-typeahead-status={typeaheadStatus} {...props}>
                                    <TestBasesListNavChildren count={childCount} />
                                </ol>
                            </Context.Provider>
                        </StaggeredContext.Provider>
                    </PaginatedContext.Provider>
                </UntabbableContext.Provider>
            </SelectionModeContext.Provider>
        </AriaPropNameContext.Provider>
    )
}

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
}

// TODO: Need to copy these back and forth
const DisabledIndex = 4;
const MissingIndex = 6;
const HiddenIndex = 8;

const PaginatedContext = createContext(false);
const StaggeredContext = createContext(false);
function TestBasesListNavChild({ index }: { index: number }) {
    const textContent = LoremIpsum[index % LoremIpsum.length];
    const getTextContent = useStableGetter(textContent);
    const disabled = (index === DisabledIndex);
    const missing = (index === MissingIndex);
    const hidden = (index === HiddenIndex);
    if (missing)
        return <li>(The #{index}-th item is missing)</li>;

    const {
        hasCurrentFocusReturn: { getCurrentFocused, getCurrentFocusedInner },
        managedChildReturn: { getChildren },
        paginatedChildReturn: { hideBecausePaginated, isPaginated, paginatedVisible },
        props,
        propsPressStable,
        refElementReturn: { getElement },
        rovingTabIndexChildReturn: { getTabbable, tabbable },
        singleSelectionChildReturn: { getSelected, getSelectedOffset, selected, selectedOffset, setThisOneSelected },
        staggeredChildReturn: { hideBecauseStaggered, isStaggered },
        textContentReturn: { }
    } = useCompleteListNavigationChild<HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>({
        context: useContext(Context),
        paginatedChildrenParameters: { paginated: useContext(PaginatedContext) },
        staggeredChildrenParameters: { staggered: useContext(StaggeredContext) },
        pressParameters: {
            focusSelf: e => e.focus(),
            onPressSync: null
        },
        info: {
            disabled,
            focusSelf: e => { e.focus() },
            hidden,
            index
        },
        rovingTabIndexParameters: { untabbable: useContext(UntabbableContext) },
        sortableChildParameters: { getSortValue: getTextContent },
        textContentParameters: { getText: getTextContent },
        singleSelectionParameters: { ariaPropName: useContext(AriaPropNameContext), selectionMode: useContext(SelectionModeContext) },
    })
    return (
        <>
            <li
                data-index={index}
                data-hide-because-paginated={hideBecausePaginated}
                data-is-paginated={isPaginated}
                data-paginated-visible={paginatedVisible}
                data-tabbable={tabbable}
                data-hide-because-staggered={hideBecauseStaggered}
                data-selected={selected}
                data-selected-offset={selectedOffset}
                data-is-staggered={isStaggered}
                {...useMergedProps(props, propsPressStable)}>{(hideBecausePaginated || hideBecauseStaggered) ? "" : textContent}{hidden && " (hidden)"}{disabled && " (disabled)"}</li>
        </>
    )
}


