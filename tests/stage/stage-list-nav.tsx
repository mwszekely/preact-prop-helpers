import { useCallback, useContext, useEffect, useRef, useState } from "preact/hooks";
import { Compare, CompleteListNavigationContext, EventDetail, UseCompleteListNavigationChildInfo, UseSingleSelectionParameters, useCompleteListNavigation, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useMergedProps, useStableCallback, useStableGetter, useStaggeredChildren, useTimeout } from "../../dist/index.js";
import { TestItem, fromStringArray, fromStringBoolean, fromStringNumber, fromStringString, useTestSyncState } from "./util.js";
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
    onSelectedIndexChange(index: number): (void | Promise<void>);
}

const Context = createContext<CompleteListNavigationContext<HTMLOListElement, HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>>(null!);

export function TestBasesListNav() {
    const [mounted] = useTestSyncState("ListNav", "setMounted", true, fromStringBoolean);
    const [childCount] = useTestSyncState("ListNav", "setChildCount", 20, fromStringNumber);
    const [arrowKeyDirection] = useTestSyncState("ListNav", "setArrowKeyDirection", "vertical", fromStringString);
    const [pagination, setPagination] = useTestSyncState("ListNav", "setPagination", null, fromStringArray(fromStringNumber));
    const [disableHomeEndKeys] = useTestSyncState("ListNav", "setDisableHomeEndKeys", false, fromStringBoolean);
    const [pageNavigationSize] = useTestSyncState("ListNav", "setPageNavigationSize", 0.1, fromStringNumber);
    const [navigatePastStartEnd] = useTestSyncState("ListNav", "setNavigatePastStartEnd", "wrap", fromStringString);
    const [ariaPropName] = useTestSyncState("ListNav", "setAriaPropName", "aria-selected", fromStringString);
    const [untabbable] = useTestSyncState("ListNav", "setUntabbable", false, fromStringBoolean);
    const [staggered] = useTestSyncState("ListNav", "setStaggered", false, fromStringBoolean);
    const [collatorId] = useTestSyncState("ListNav", "setCollator", "", fromStringString);
    const [noTypeahead] = useTestSyncState("ListNav", "setNoTypeahead", false, fromStringBoolean);
    const [typeaheadTimeout] = useTestSyncState("ListNav", "setTypeaheadTimeout", 1000, fromStringNumber);
    const [selectionMode] = useTestSyncState("ListNav", "setSelectionMode", "activation", fromStringString);
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
        rearrangeableChildrenParameters: { getIndex: useCallback(info => info.props.index, []) },
        rovingTabIndexParameters: { untabbable, onTabbableIndexChange: setT },
        singleSelectionParameters: { ariaPropName, selectionMode },
        singleSelectionDeclarativeParameters: {
            selectedIndex,
            onSelectedIndexChange: useStableCallback((e) => {
                const f = getTestingHandler("ListNav", "onSelectedIndexChange");
                f?.(e[EventDetail].selectedIndex);
            }, [])
        },
        sortableChildrenParameters: { compare: useCallback<Compare<UseCompleteListNavigationChildInfo<HTMLLIElement>>>((lhs, rhs) => { return (lhs.getSortValue() as number) - (rhs.getSortValue() as number) }, []) },
        staggeredChildrenParameters: { staggered },
        paginatedChildrenParameters: { paginationMin: pagination?.[0], paginationMax: pagination?.[1] },
        typeaheadNavigationParameters: { collator: null, noTypeahead, typeaheadTimeout }
    });

    return (
                    <Context.Provider value={context}>
                        {untabbable.toString()}, {t}
                        <ol role="toolbar" data-still-staggering={stillStaggering} data-typeahead-status={typeaheadStatus} {...props}>
                            <TestBasesListNavChildren count={childCount} />
                        </ol>
                    </Context.Provider>
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
        pressParameters: {
            focusSelf: e => e.focus(),
            onPressSync: null
        },
        info: {
            unselectable: disabled,
            focusSelf: e => { e.focus() },
            untabbable: hidden,
            index
        },
        sortableChildParameters: { getSortValue: getTextContent },
        textContentParameters: { getText: getTextContent }
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


