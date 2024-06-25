import { createContext } from "preact";
import { memo } from "preact/compat";
import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, EventDetail, GetIndex, StateUpdater, TabbableColumnInfo, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowReturnType, UseProcessedChildContext, UseProcessedChildrenContext, VNode, focus, monitored, useCallback, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useCompleteGridNavigationRows, useContext, useEffect, useMemo, useMergedProps, useProcessedChild, useStableCallback, useState } from "../../dist/preact/index.js";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

//const GridRowContext = createContext<UseGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, {}, {}, string, string>>(null!);
//const GridCellContext = createContext<UseGridNavigationCell<HTMLTableCellElement, {}, string>>(null!);
const SortableColumnContext = createContext(null as number | null);
const SetSortableColumnContext = createContext<StateUpdater<number | null>>(null!);
const GetSortableColumnContext = createContext<() => number | null>(null!);
const ListChildrenContext = createContext<UseProcessedChildrenContext>(null!);
const ListChildContext = createContext<UseProcessedChildContext<any, any>>(null!);

export const DemoUseGrid = memo(() => {

    const [tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState<TabbableColumnInfo | null>(null);
    const [selectedRow, setSelectedRow, _getSelectedRow] = useState<number | null>(null);
    const [tabbableRow, setTabbableRow] = useState<number | null>(null);
    const [sortableColumn, setSortableColumn, getSortableColumn] = useState(null as number | null);

    // Entirely complete, fully spelt-out version:
    const allReturnInfo = useCompleteGridNavigationDeclarative<HTMLTableSectionElement, HTMLTableRowElement, CustomGridInfo>({
        // `useRovingTabIndex` is a separate hook that you could call with these same parameters:
        rovingTabIndexParameters: {
            // If true, the entire grid is removed from the tab order
            untabbable: false,
            // A function provided by you that is only called when no children are tabbable
            focusSelfParent: focus,
            // This can be used to track when the user navigates between rows for any reason
            onTabbableIndexChange: setTabbableRow,
        },
        // `useSingleSelection` is a separate hook that you could call with these parameters:
        typeaheadNavigationParameters: {
            // Determines how children are searched for (`Intl.Collator`)
            collator: null,
            // Whether typeahead behavior is disabled
            noTypeahead: false,
            // How long a period of no input is required before typeahead clears itself
            typeaheadTimeout: 1000,
            // This can be used to track when the user navigates between rows via typeahead
            onNavigateTypeahead: null
        },
        // (etc. etc.)
        linearNavigationParameters: {
            // Is navigating to the first/last row with Home/End disabled?
            disableHomeEndKeys: false,
            // What happens when you press Up on the first row?
            navigatePastStart: "wrap",
            // What happens when you press Down on the last row?
            navigatePastEnd: "wrap",
            // How far do Page Up/Down jump?
            pageNavigationSize: 0.1,
            // This can be used to track when the user navigates between rows with the arrow keys
            onNavigateLinear: null
        },
        singleSelectionParameters: {
            // When a child is selected, it is indicated with this ARIA attribute:
            singleSelectionAriaPropName: "aria-checked",
            // Are children selected when they are activated (e.g. clicked), or focused (e.g. tabbed to)?
            singleSelectionMode: "focus"
        },
        multiSelectionParameters: {
            // Single- and multi- selection are not exclusive, and when so should be indicated via different attributes.
            multiSelectionAriaPropName: "aria-selected",
            // singleSelectionMode but for multi-selection
            multiSelectionMode: "activation",
            // Callback when any child changes with information about % of children checked, etc.
            onSelectionChange: null
        },
        singleSelectionDeclarativeParameters: {
            // Which child is currently selected?
            singleSelectedIndex: selectedRow,
            // What happens when the user selects a child?
            onSingleSelectedIndexChange: (e) => setSelectedRow(e[EventDetail].selectedIndex)
        },
        gridNavigationParameters: {
            // This can be used by you to track which 0-indexed column is currently the one with focus.
            onTabbableColumnChange: setTabbableColumn,

            // Which column is tabbable (initially upon mount before the user interacts with it)
            initiallyTabbableColumn: 0
        },
        // paginatedChildrenParameters: {
        // This must return a VNode's 0-based index from its props
        //     getIndex: useCallback<GetIndex>((a: VNode) => a.props.index, [])
        //    },
        //sortableChildrenParameters: {
        // Controls how rows compare against each other
        //    compare: useCallback((rhs: CustomGridInfo, lhs: CustomGridInfo) => { return lhs.index - rhs.index }, [])
        //},
        paginatedChildrenParameters: {
            // Controls the current pagination range
            paginationMin: null,
            paginationMax: null
        },
        // staggeredChildrenParameters: {
        // Controls whether children appear staggered as CPU time permits
        //      staggered: false
        //  },
        refElementParameters: {}
    });

    // Those were the parameters, these are the return types:
    const {
        // Spread these props to the HTMLElement that will implement this grid behavior
        props,
        // The child row will useContext this, so provide it to them.
        contextChildren,
        // Optionally, if you paginate or stagger your children, each child can `useContext` this as well.
        contextProcessing,
        // This is what `useRovingTabIndex` returned; use it for whatever you need:
        rovingTabIndexReturn: {
            // Call to focus the grid, which focuses the current row, which focuses its current cell.
            focusSelf,
            // Returns the index of the row that is tabbable to
            getTabbableIndex,
            // Changes which row is currently tabbable
            setTabbableIndex
        },
        // This is what `useTypeaheadNavigation` returned; use it for whatever you need:
        typeaheadNavigationReturn: {
            // Returns the current value the user has typed for typeahead (cannot be used during render)
            getCurrentTypeahead,
            // Whether the user's typeahead is invalid/valid/nonexistent.
            typeaheadStatus
        },
        // (etc. etc.)
        singleSelectionReturn: {
            // Largely convenience only (since the caller likely already knows the selected index, but just in case)
            getSingleSelectedIndex,
        },
        multiSelectionReturn: {
            // Nothing, actually
        },
        refElementReturn: { },
        rearrangeableChildrenReturn: {
            // You must call this hook on your array of children to implement the sorting behavior
            //     useRearrangedChildren,
            // Largely internal use only
            //    indexDemangler,
            // Largely internal use only
            //    indexMangler,
            // Largely internal use only, but if you implement a custom sorting algorithm, call this to finalize the rearrangement. 
            rearrange,
            // Reverses all children 
            reverse,
            // Shuffles all children
            shuffle,
            // A table header button would probably call this function to sort all the table rows.
            sort
        },
        linearNavigationReturn: { },
        managedChildrenReturn: {
            // Returns metadata about each row
            getChildren
        },
        //paginatedChildrenReturn: {
        // Largely internal use only
        //    refreshPagination
        //},
        //staggeredChildrenReturn: {
        // When the staggering behavior is currently hiding one or more children, this is true.
        //     stillStaggering
        // },
        childrenHaveFocusReturn: {
            // Returns true if any row in this grid is focused
            getAnyFocused
        },

    } = allReturnInfo;


    return (
        <div class="demo">
            <h2>useGridNavigationComplete</h2>
            <p>Like <code>useCompleteListNavigation</code> but for 2D navigation. Cells can span multiple columns. Rows can be filtered, sorted, and arbitrarily re-arranged.</p>
            {<div>Current row: {tabbableRow}</div>}
            {<div>Current column: {tabbableColumn?.actual}{tabbableColumn?.ideal != tabbableColumn?.actual ? ` (wanted: ${tabbableColumn?.ideal})` : ""}</div>}
            <table {...{ border: "2" } as {}} style={{ whiteSpace: "nowrap" }}>

                <thead>
                    <tr>
                        <th>Row is tabbable?</th>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </tr>
                </thead>
                <SortableColumnContext.Provider value={sortableColumn}>
                    <GetSortableColumnContext.Provider value={getSortableColumn}>
                        <SetSortableColumnContext.Provider value={setSortableColumn}>
                            <GridRowContext.Provider value={contextChildren}>
                                <ListChildrenContext.Provider value={contextProcessing}>
                                    <tbody {...props}>
                                        <DemoUseRovingTabIndexChildren count={100} min={null} max={null} staggered={true} />
                                    </tbody>
                                </ListChildrenContext.Provider>
                            </GridRowContext.Provider>
                        </SetSortableColumnContext.Provider>
                    </GetSortableColumnContext.Provider>
                </SortableColumnContext.Provider>
            </table>
        </div>
    );
});


const DemoUseRovingTabIndexChildren = memo(monitored(function DemoUseRovingTabIndexChildren({ count, max, min, staggered }: { count: number, min: number | null, max: number | null, staggered: boolean }) {
    const {
        context,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
    } = useCompleteGridNavigationRows({
        paginatedChildrenParameters: { paginationMax: max, paginationMin: min },
        rearrangeableChildrenParameters: {
            getIndex: useCallback<GetIndex>((a: VNode) => a.props.index, []),
            onRearranged: null,
            compare: null,
            adjust: null,
            children: useMemo(() => Array.from((function* () {
                for (let i = 0; i < (count); ++i) {
                    yield <DemoUseGridRowOuter index={i} key={i} />
                }
            })()), [count]),
        },
        managedChildrenParameters: {},
        staggeredChildrenParameters: { staggered },
        context: useContext(ListChildrenContext)
    })

    return (
        <ListChildContext.Provider value={context}>{rearrangeableChildrenReturn.children}</ListChildContext.Provider>
    )
}));

interface CustomGridInfo extends UseCompleteGridNavigationRowInfo<HTMLTableRowElement> { foo: "bar" }
interface CustomGridRowInfo extends UseCompleteGridNavigationCellInfo<HTMLTableCellElement> { bar: "baz" }

//type GridRowContext<ParentElement extends Element, RowElement extends Element> = CompleteGridNavigationContext<ParentElement, RowElement>;
//type GridCellContext<RowElement extends Element, CellElement extends Element> = CompleteGridNavigationRowContext<RowElement, CellElement>;
const GridRowContext = createContext<CompleteGridNavigationRowContext<HTMLTableRowElement, CustomGridInfo>>(null!);
const GridCellContext = createContext<CompleteGridNavigationCellContext<HTMLTableCellElement, CustomGridRowInfo>>(null!);


const DemoUseGridRowOuter = memo(monitored(function DemoUseRovingTabIndexChildOuter({ index }: { index: number }) {
    const { managedChildContext, paginatedChildContext, staggeredChildContext } = useContext(ListChildContext) as UseProcessedChildContext<HTMLTableRowElement, any>;
    const { props, managedChildReturn, refElementParameters, paginatedChildReturn, staggeredChildReturn } = useProcessedChild<HTMLTableRowElement>({
        context: { managedChildContext, paginatedChildContext, staggeredChildContext },
        info: { index, getSortValue: null },

    })
    const { childUseEffect } = staggeredChildReturn;
    if (paginatedChildReturn.hideBecausePaginated || staggeredChildReturn.hideBecauseStaggered) {
        return <tr {...props}><td colSpan={99}>&nbsp;</td></tr>
    }
    else {
        return (
            <DemoUseGridRow index={index} childUseEffect={childUseEffect} {...props} />
        )
    }
}));

const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseGridRow = memo((({ index, childUseEffect, ...props2 }: { index: number, childUseEffect: () => void }) => {
    const [_randomWord] = useState(() => RandomWords[index/*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
    useEffect(childUseEffect, [childUseEffect]);
    const [_tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState<number | null>(null);
    //const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    //const getChildren = useCallback(() => { return getChildren2() }, []);
    const hidden = (index === 3);
    const disabled = hidden;

    const getSortableColumnIndex = useContext(GetSortableColumnContext);


    const contextFromParent = useContext(GridRowContext) as CompleteGridNavigationRowContext<HTMLTableRowElement, CustomGridInfo>;
    const ret: UseCompleteGridNavigationRowReturnType<HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo> = useCompleteGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>({

        context: contextFromParent,
        info: { index, foo: "bar", untabbable: hidden },
        textContentParameters: { getText: useCallback((e: Element | null) => { return e?.textContent ?? "" }, []), onTextContentChange: null },

        linearNavigationParameters: { navigatePastEnd: "wrap", navigatePastStart: "wrap" },
        rovingTabIndexParameters: { onTabbableIndexChange: useStableCallback((i: number | null) => { setTabbableColumn(i) }), untabbable: false, initiallyTabbedIndex: 0 },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000, onNavigateTypeahead: null },
        hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
        //gridNavigationSelectionSortableRowParameters: { getSortableColumnIndex },
        singleSelectionChildParameters: { singleSelectionDisabled: false },
        multiSelectionChildParameters: { initiallyMultiSelected: false, onMultiSelectChange: null, multiSelectionDisabled: false }
    });

    const {
        props,
        context: contextToChild,
        rovingTabIndexChildReturn: { tabbable }

    } = ret;

    return (
        <tr {...useMergedProps(props, props2)} data-tabbable={ret.rovingTabIndexChildReturn.tabbable}>
            <GridCellContext.Provider value={contextToChild}>
                <td>{_tabbableColumn}, {tabbable.toString()}</td>
                {Array.from((function* () {
                    for (let i = 0; i < 3; ++i) {
                        yield <DemoUseGridCell index={i} key={i} row={index} rowIsTabbable={tabbable} />
                    }
                })())}
            </GridCellContext.Provider>
        </tr>
    )
}));

const DemoUseGridCell = (({ index, row, rowIsTabbable }: { index: number, row: number, rowIsTabbable: boolean }) => {

    if (row >= 6 && row % 2 == 0 && index > 1)
        return null;

    let hiddenText = (row === 3) ? " (row hidden)" : ""


    const context = useContext(GridCellContext) as CompleteGridNavigationCellContext<HTMLTableCellElement, CustomGridRowInfo>;

    const {
        props,
        rovingTabIndexChildReturn: { tabbable },

    } = useCompleteGridNavigationCell<HTMLTableCellElement, CustomGridRowInfo>({
        gridNavigationCellParameters: { colSpan: 1 },
        info: { index, bar: "baz", focusSelf: useStableCallback((e: HTMLElement) => e.focus()), untabbable: false },
        context,
        textContentParameters: { getText: useCallback((e: Element | null) => { return e?.textContent ?? "" }, []), onTextContentChange: null },
    });

    const t = (tabbable ? "(Tabbable)" : "(Not tabbable)")

    if (index === 0)
        return <td {...props}>{rowIsTabbable.toString()}</td>
    else {
        if (row < 6 || row % 2 != 0) {
            if (index === 1)
                return <td {...props}>Grid cell #{index + 1} {t}{hiddenText}</td>
            else
                return <td><label><button  {...(props as any)} type="button">Select row</button> {t}{hiddenText}</label></td>
        }
        else {
            if (index === 1)
                return <td {...props} colSpan={2}>Grid cell #{index + 1}, span 2 {t}{hiddenText}</td>
            else
                return null;

        }
    }
});