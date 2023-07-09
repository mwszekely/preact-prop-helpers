import { createContext } from "preact";
import { useCallback, useContext, useEffect, useState } from "preact/hooks";
import { Compare, CompleteListNavigationContext, EventDetail, UseCompleteListNavigationChildInfo, UseSingleSelectionParameters, focus, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useImperativeProps, useMergedProps, usePress, useRefElement, useStableCallback, useStableGetter } from "../../dist/index.js";
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
    const [childCount, setChildCount] = useTestSyncState("ListNav", "setChildCount", DefaultChildCount, fromStringNumber);
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

    const a = { untabbable, staggered, collatorId, noTypeahead, typeaheadTimeout, selectionMode }

    installTestingHandler("ListNav", "setSelectedIndex", setSelectedIndex);
    if (!mounted)
        return <ol />;

    return (
        <TestBasesListNavImpl selectedIndex={selectedIndex} childCount={childCount} collatorId={collatorId} disableHomeEndKeys={disableHomeEndKeys} navigatePastStartEnd={navigatePastStartEnd} noTypeahead={noTypeahead} pageNavigationSize={pageNavigationSize} pagination={pagination} selectionMode={selectionMode} staggered={staggered} typeaheadTimeout={typeaheadTimeout} untabbable={untabbable} arrowKeyDirection={arrowKeyDirection} ariaPropName={ariaPropName} />
    );
}

interface TestBasesListNavImplProps {
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

function TestBasesListNavImpl({ ariaPropName, selectedIndex, arrowKeyDirection, childCount, collatorId, disableHomeEndKeys, navigatePastStartEnd, noTypeahead, pageNavigationSize, pagination, selectionMode, staggered, typeaheadTimeout, untabbable }: TestBasesListNavImplProps) {

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
    } = useCompleteListNavigationDeclarative<HTMLOListElement, HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>({
        linearNavigationParameters: { arrowKeyDirection, disableHomeEndKeys, navigatePastEnd: navigatePastStartEnd, navigatePastStart: navigatePastStartEnd, pageNavigationSize, onNavigateLinear: null },
        rearrangeableChildrenParameters: { getIndex: useCallback(info => info.props.index, []) },
        rovingTabIndexParameters: { untabbable, onTabbableIndexChange: null, focusSelfParent: focus },
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
        typeaheadNavigationParameters: { collator: null, noTypeahead, typeaheadTimeout, onNavigateTypeahead: null }
    });

    return (
        <Context.Provider value={context}>
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



function TestBasesListNavChild({ index }: { index: number }) {
    useOnRender("children");
    useOnRender("child-" + index);

    const textContent = LoremIpsum[index % LoremIpsum.length];
    const getTextContent = useStableGetter(textContent);
    const disabled = (index === DisabledIndex);
    const missing = (index === MissingIndex);
    const hidden = (index === HiddenIndex);
    if (missing)
        return <li>(The #{index}-th item is missing)</li>;

    const focusSelf = (e: HTMLLIElement) => { e.focus() };
    const {
        hasCurrentFocusReturn: { getCurrentFocused, getCurrentFocusedInner },
        managedChildReturn: { getChildren },
        paginatedChildReturn: { hideBecausePaginated, isPaginated, paginatedVisible },
        propsChild,
        propsTabbable,
        refElementReturn,
        rovingTabIndexChildReturn: { getTabbable, tabbable },
        singleSelectionChildReturn: { getSelected, getSelectedOffset, selected, selectedOffset, setThisOneSelected },
        staggeredChildReturn: { hideBecauseStaggered, isStaggered },
        textContentReturn: { },
        pressParameters: { onPressSync, excludeSpace }
    } = useCompleteListNavigationChild<HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>({
        context: useContext(Context),
        info: {
            unselectable: disabled,
            focusSelf,
            untabbable: hidden,
            index
        },
        sortableChildParameters: { getSortValue: getTextContent },
        textContentParameters: { getText: getTextContent }
    });
    const { pressReturn: { getIsPressing, longPress, pressing }, props: propsPressStable } = usePress({ pressParameters: { focusSelf, onPressSync, excludeSpace }, refElementReturn });
    return (
        <>
            <li
                data-index={index}
                data-pressing={pressing}
                data-long-pressing={longPress}
                data-hide-because-paginated={hideBecausePaginated}
                data-is-paginated={isPaginated}
                data-paginated-visible={paginatedVisible}
                data-tabbable={tabbable}
                data-hide-because-staggered={hideBecauseStaggered}
                data-selected={selected}
                data-selected-offset={selectedOffset}
                data-is-staggered={isStaggered}
                {...useMergedProps(propsChild, propsTabbable, propsPressStable)}>{(hideBecausePaginated || hideBecauseStaggered) ? "" : textContent}{hidden && " (hidden)"}{disabled && " (disabled)"}</li>
        </>
    )
}


