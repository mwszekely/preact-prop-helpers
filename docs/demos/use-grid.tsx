import { createContext } from "preact";
import { memo } from "preact/compat";
import { useCallback, useContext } from "preact/hooks";
import { CompleteGridNavigationContext, CompleteGridNavigationRowContext, GetIndex, UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowInfo, UseCompleteGridNavigationRowReturnType, VNode, returnNull, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow, useStableCallback, useState } from "../../dist/index.js";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

//const GridRowContext = createContext<UseGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, {}, {}, string, string>>(null!);
//const GridCellContext = createContext<UseGridNavigationCell<HTMLTableCellElement, {}, string>>(null!);
export const DemoUseGrid = memo(() => {

    const [tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState<number | null>(null);
    const [selectedRow, setSelectedRow, _getSelectedRow] = useState<number | null>(null);
    const [tabbableRow, setTabbableRow] = useState<number | null>(null);

    const ret: UseCompleteGridNavigationReturnType<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo> = useCompleteGridNavigation<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>({
        singleSelectionParameters: { initiallySelectedIndex: selectedRow, onSelectedIndexChange: setSelectedRow, ariaPropName: "aria-checked", selectionMode: "focus" },
        gridNavigationParameters: { onTabbableColumnChange: setTabbableColumn },
        linearNavigationParameters: { disableHomeEndKeys: false, navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1 },
        //managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { onTabbableIndexChange: setTabbableRow, untabbable: false },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 },
        rearrangeableChildrenParameters: {
            getIndex: useCallback<GetIndex>((a: VNode) => a.props.index, [])
        },
        sortableChildrenParameters: { compare: useCallback((rhs: CustomGridInfo, lhs: CustomGridInfo) => { return lhs.index - rhs.index }, []) },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        staggeredChildrenParameters: { staggered: false }
    });

    const {
        context,
        props,
        rearrangeableChildrenReturn: { useRearrangedChildren }
    } = ret;



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

interface CustomGridInfo extends UseCompleteGridNavigationRowInfo<HTMLTableRowElement, HTMLTableCellElement> { foo: "bar" }
interface CustomGridRowInfo extends UseCompleteGridNavigationCellInfo<HTMLTableCellElement> { bar: "baz" }

//type GridRowContext<ParentElement extends Element, RowElement extends Element> = CompleteGridNavigationContext<ParentElement, RowElement>;
//type GridCellContext<RowElement extends Element, CellElement extends Element> = CompleteGridNavigationRowContext<RowElement, CellElement>;
const GridRowContext = createContext<CompleteGridNavigationContext<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>>(null!);
const GridCellContext = createContext<CompleteGridNavigationRowContext<HTMLTableRowElement, HTMLTableCellElement, CustomGridRowInfo>>(null!);

const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseGridRow = memo((({ index }: { index: number }) => {
    const [_randomWord] = useState(() => RandomWords[index/*Math.floor(Math.random() * (RandomWords.length - 1))*/]);

    const [_tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState<number | null>(null);
    //const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    //const getChildren = useCallback(() => { return getChildren2() }, []);
    const hidden = (index === 3);
    const disabled = hidden;



    const contextFromParent = useContext(GridRowContext) as CompleteGridNavigationContext<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>;
    const ret: UseCompleteGridNavigationRowReturnType<HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo> = useCompleteGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>({

        sortableChildParameters: { getSortValue: returnNull },
        context: contextFromParent,
        info: { index, foo: "bar", disabled, hidden },
        textContentParameters: { getText: useCallback((e: Element | null) => { return e?.textContent ?? "" }, []) },

        linearNavigationParameters: { disableHomeEndKeys: false, navigatePastEnd: "wrap", navigatePastStart: "wrap" },
        rovingTabIndexParametersG2R: { untabbable: false },
        rovingTabIndexParametersR2C: { onTabbableIndexChange: useStableCallback((i: number | null) => { setTabbableColumn(i) }), untabbable: false, initiallyTabbedIndex: 0 },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 },
        singleSelectionParameters: { ariaPropName: "aria-selected", selectionMode: "focus" }

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


    const context = useContext(GridCellContext) as CompleteGridNavigationRowContext<HTMLTableRowElement, HTMLTableCellElement, CustomGridRowInfo>;


    const {
        props,
        rovingTabIndexChildReturn: { tabbable },

    } = useCompleteGridNavigationCell<HTMLTableCellElement, CustomGridRowInfo>({
        gridNavigationCellParameters: { colSpan: 1 },
        info: { index, bar: "baz", focusSelf: useStableCallback((e: HTMLElement) => e.focus()), hidden: false },
        context,
        textContentParameters: { getText: useCallback((e: Element | null) => { return e?.textContent ?? "" }, []) },
        rovingTabIndexParameters: { untabbable: false }
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