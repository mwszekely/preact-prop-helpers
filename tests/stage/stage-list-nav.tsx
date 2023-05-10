import { useCallback, useContext, useState } from "preact/hooks";
import { Compare, CompleteListNavigationContext, UseCompleteListNavigationChildInfo, UseSingleSelectionParameters, useCompleteListNavigation, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useStableGetter } from "../../dist/index.js";
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
    setAriaPropName(ariaPropName: UseSingleSelectionParameters<any, any>["singleSelectionParameters"]["ariaPropName"]): Promise<void>;
    setSelectionMode(ariaPropName: UseSingleSelectionParameters<any, any>["singleSelectionParameters"]["selectionMode"]): Promise<void>;
    setStaggered(staggered: boolean): Promise<void>;
    setCollator(id: string): Promise<void>;
    setNoTypeahead(noTypeahead: boolean): Promise<void>;
    setTypeaheadTimeout(timeout: number): Promise<void>;
}

const Context = createContext<CompleteListNavigationContext<HTMLOListElement, HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>>(null!);

export function TestBasesListNav() {
    const mounted = useTestSyncState("ListNav", "setMounted", true);
    if (!mounted)
        return <ol />;

    return (<TestBasesListNavImpl />);
}

function TestBasesListNavImpl() {
    const childCount = useTestSyncState("ListNav", "setChildCount", 10);
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
    const [selectedIndex, setSelectedIndex] = useState<number | null>(0);

    installTestingHandler("ListNav", "setSelectedIndex", setSelectedIndex);

    const {
        childrenHaveFocusReturn: { getAnyFocused },
        context,
        linearNavigationReturn: { },
        managedChildrenReturn: { getChildren },
        paginatedChildrenReturn: { refreshPagination },
        propsStable,
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
        rovingTabIndexParameters: { untabbable },
        singleSelectionParameters: { ariaPropName, selectionMode },
        singleSelectionDeclarativeParameters: { selectedIndex, setSelectedIndex },
        sortableChildrenParameters: { compare: useCallback<Compare<UseCompleteListNavigationChildInfo<HTMLLIElement>>>((lhs, rhs) => { return (lhs.getSortValue() as number) - (rhs.getSortValue() as number) }, []) },
        staggeredChildrenParameters: { staggered },
        typeaheadNavigationParameters: { collator: null, noTypeahead, typeaheadTimeout }
    });

    return (
        <Context.Provider value={context}>
            <ol role="toolbar" data-still-staggering={stillStaggering} data-typeahead-status={typeaheadStatus} {...propsStable}>
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
    const missing =  (index === MissingIndex);
    const hidden =   (index === HiddenIndex);
    if (missing)
        return <li>(The #{index}-th item is missing)</li>;
        
    const {
        hasCurrentFocusReturn: { getCurrentFocused, getCurrentFocusedInner },
        managedChildReturn: { getChildren },
        paginatedChildReturn: { hideBecausePaginated, isPaginated, paginatedVisible },
        pressParameters: { excludeSpace },
        props,
        refElementReturn: { getElement },
        rovingTabIndexChildReturn: { getTabbable, tabbable },
        singleSelectionChildReturn: { getSelected, getSelectedOffset, selected, selectedOffset, setThisOneSelected },
        staggeredChildReturn: { hideBecauseStaggered, isStaggered },
        textContentReturn: { }
    } = useCompleteListNavigationChild<HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>({
        context: useContext(Context),
        info: {
            disabled,
            focusSelf: e => { debugger; e.focus()},
            hidden,
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
                {...props}>{textContent}{hidden && " (hidden)"}{disabled && " (disabled)"}</li>
        </>
    )
}
