import { createContext } from "preact";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { TabbableColumnInfo } from "../../dist/component-detail/keyboard-navigation/use-grid-navigation-partial.js";
import { CompleteGridNavigationCellContext, CompleteGridNavigationRowContext, EventDetail, GetIndex, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowReturnType, VNode, focus, useCompleteGridNavigationCell, useCompleteGridNavigationDeclarative, useCompleteGridNavigationRow, useStableCallback, useStableGetter, useState } from "../../dist/index.js";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

//const GridRowContext = createContext<UseGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, {}, {}, string, string>>(null!);
//const GridCellContext = createContext<UseGridNavigationCell<HTMLTableCellElement, {}, string>>(null!);
export const DemoUseGrid = memo(() => {

    const [tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState<TabbableColumnInfo | null>(null);
    const [selectedRow, setSelectedRow, _getSelectedRow] = useState<number | null>(null);
    const [tabbableRow, setTabbableRow] = useState<number | null>(null);

    const allReturnInfo = useCompleteGridNavigationDeclarative<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>({
        rovingTabIndexParameters: {
            // If true, the entire grid is removed from the tab order
            untabbable: false,
            // A function provided by you that is only called when no children are tabbable
            focusSelfParent: focus,
            // This can be used to track when the user navigates between rows for any reason
            onTabbableIndexChange: setTabbableRow,
        },
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
            ariaPropName: "aria-checked",
            // Are children selected when they are activated (e.g. clicked), or focused (e.g. tabbed to)?
            selectionMode: "focus"
        },
        singleSelectionDeclarativeParameters: {
            // Which child is currently selected?
            selectedIndex: selectedRow,
            // What happens when the user selects a child?
            onSelectedIndexChange: (e) => setSelectedRow(e[EventDetail].selectedIndex)
        },
        gridNavigationParameters: {
            // This can be used by you to track which 0-indexed column is currently the one with focus.
            onTabbableColumnChange: setTabbableColumn
        },
        rearrangeableChildrenParameters: {
            // This must return a VNode's 0-based index from its props
            getIndex: useCallback<GetIndex>((a: VNode) => a.props.index, [])
        },
        sortableChildrenParameters: {
            // Controls how rows compare against each other
            compare: useCallback((rhs: CustomGridInfo, lhs: CustomGridInfo) => { return lhs.index - rhs.index }, [])
        },
        paginatedChildrenParameters: {
            // Controls the current pagination range
            paginationMin: null,
            paginationMax: null
        },
        staggeredChildrenParameters: {
            // Controls whether children appear staggered as CPU time permits
            staggered: false
        },
        refElementParameters: {}
    });

    const {
        // Spread these props to the HTMLElement that will implement this grid behavior
        props,
        // The child row will useContext this, so provide it to them.
        context,
        rovingTabIndexReturn: {
            // Call to focus the grid, which focuses the current row, which focuses its current cell.
            focusSelf,
            // Returns the index of the row that is tabbable to
            getTabbableIndex,
            // Changes which row is currently tabbable
            setTabbableIndex
        },
        typeaheadNavigationReturn: {
            // Returns the current value the user has typed for typeahead (cannot be used during render)
            getCurrentTypeahead,
            // Whether the user's typeahead is invalid/valid/nonexistent.
            typeaheadStatus
        },
        singleSelectionReturn: {
            // Largely internal use only (since `selectedIndex` is a prop you pass in for the declarative version)
            getSelectedIndex,
        },
        rearrangeableChildrenReturn: {
            // You must call this hook on your array of children to implement the sorting behavior
            useRearrangedChildren,
            // Largely internal use only
            indexDemangler,
            // Largely internal use only
            indexMangler,
            // Largely internal use only, but if you implement a custom sorting algorithm, call this to finalize the rearrangement. 
            rearrange,
            // Reverses all children 
            reverse,
            // Shuffles all children
            shuffle
        },
        sortableChildrenReturn: {
            // A table header button would probably call this function to sort all the table rows.
            sort
        },
        linearNavigationReturn: { },
        managedChildrenReturn: {
            // Returns metadata about each row
            getChildren
        },
        paginatedChildrenReturn: {
            // Largely internal use only
            refreshPagination
        },
        staggeredChildrenReturn: {
            // When the staggering behavior is currently hiding one or more children, this is true.
            stillStaggering
        },
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
            {<div>Current column: {tabbableColumn}</div>}
            <table {...{ border: "2" } as {}} style={{ whiteSpace: "nowrap" }}>

                <thead>
                    <tr>
                        <th>Row is tabbable?</th>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        <th>Column 3</th>
                    </tr>
                </thead>
                <GridRowContext.Provider value={context}>
                    <tbody {...props}>{useRearrangedChildren(Array.from((function* () {
                        for (let i = 0; i < 10; ++i) {
                            yield <DemoUseGridRow index={i} key={i} />
                        }
                    })())
                    )}</tbody>
                </GridRowContext.Provider>
            </table>
        </div>
    );
});

interface CustomGridInfo extends UseCompleteGridNavigationRowInfo<HTMLTableRowElement> { foo: "bar" }
interface CustomGridRowInfo extends UseCompleteGridNavigationCellInfo<HTMLTableCellElement> { bar: "baz" }

//type GridRowContext<ParentElement extends Element, RowElement extends Element> = CompleteGridNavigationContext<ParentElement, RowElement>;
//type GridCellContext<RowElement extends Element, CellElement extends Element> = CompleteGridNavigationRowContext<RowElement, CellElement>;
const GridRowContext = createContext<CompleteGridNavigationRowContext<HTMLTableRowElement, CustomGridInfo>>(null!);
const GridCellContext = createContext<CompleteGridNavigationCellContext<HTMLTableCellElement, CustomGridRowInfo>>(null!);

const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseGridRow = memo((({ index }: { index: number }) => {
    const [_randomWord] = useState(() => RandomWords[index/*Math.floor(Math.random() * (RandomWords.length - 1))*/]);

    const [_tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState<number | null>(null);
    //const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    //const getChildren = useCallback(() => { return getChildren2() }, []);
    const hidden = (index === 3);
    const disabled = hidden;



    const contextFromParent = useContext(GridRowContext) as CompleteGridNavigationRowContext<HTMLTableRowElement, CustomGridInfo>;
    const ret: UseCompleteGridNavigationRowReturnType<HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo> = useCompleteGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>({

        context: contextFromParent,
        info: { index, foo: "bar", unselectable: disabled, untabbable: hidden },
        textContentParameters: { getText: useCallback((e: Element | null) => { return e?.textContent ?? "" }, []) },

        linearNavigationParameters: { navigatePastEnd: "wrap", navigatePastStart: "wrap" },
        rovingTabIndexParameters: { onTabbableIndexChange: useStableCallback((i: number | null) => { setTabbableColumn(i) }), untabbable: false, initiallyTabbedIndex: 0 },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000, onNavigateTypeahead: null },
        hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null }
    });

    const {
        props,
        context: contextToChild,
        rovingTabIndexChildReturn: { tabbable }

    } = ret;

    return (
        <tr {...props} data-tabbable={ret.rovingTabIndexChildReturn.tabbable}>
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
        info: { index, bar: "baz", focusSelf: useStableCallback((e: HTMLElement) => e.focus()), untabbable: false, getSortValue: useStableGetter(index) },
        context,
        textContentParameters: { getText: useCallback((e: Element | null) => { return e?.textContent ?? "" }, []) },
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