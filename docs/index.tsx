import { createContext, h, render, VNode } from "preact";
import { memo } from "preact/compat";
import { useCallback, useContext, useRef } from "preact/hooks";
import { GetIndex, GridSingleSelectSortableChildCellInfo, GridSingleSelectSortableChildRowInfo, returnNull, useAnimationFrame, useAsyncHandler, useChildrenHaveFocus, useChildrenHaveFocusChild, UseChildrenHaveFocusChildParameters, UseCompleteGridNavigationReturnType, UseCompleteGridNavigationRowReturnType, useDraggable, useDroppable, useElementSize, useFocusTrap, useHasCurrentFocus, useHasLastFocus, useInterval, useMergedProps, usePress, useRandomDualIds, useRefElement, useStableCallback, useState } from "..";
import { ElementSize } from "../dom-helpers/use-element-size";
//import { useGridNavigation, UseGridNavigationCell, UseGridNavigationRow } from "../use-grid-navigation";
import { CompleteGridNavigationContext, CompleteGridNavigationRowContext, useCompleteGridNavigation, useCompleteGridNavigationCell, useCompleteGridNavigationRow } from "..";
import { DemoUseInterval } from "./demos/use-interval";
import { DemoUseModal } from "./demos/use-modal";
import { DemoUseRovingTabIndex } from "./demos/use-roving-tab-index";
import { DemoUseTimeout } from "./demos/use-timeout";
import { UseCompleteGridNavigationCellInfo, UseCompleteGridNavigationRowInfo } from "../component-use/use-grid-navigation-complete";
const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");



const DemoUseDroppable = () => {
    const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, propsStable: props, dropError } = useDroppable<HTMLDivElement>({ effect: "copy" });

    const { ref: _ref } = useMergedProps<HTMLInputElement>({}, { ref: useRef<HTMLInputElement>(null!) })

    const p = useMergedProps(props, { className: "demo droppable" });

    return (
        <div {...p}>

            {droppedStrings != null && <div>Data dropped: <ul>{(Object.entries(droppedStrings) as [keyof typeof stringsForConsideration, string][]).map(([type, value]) => <li>{type}: {value}</li>)}</ul></div>}
            {droppedFiles != null && <div>Files dropped: <table>
                <thead><tr><th>Name</th><th>Size</th><th>Type</th><th>Last modified</th></tr></thead>
                <tbody>{droppedFiles.map(f => <tr><td>{f.name}</td>{f.data.byteLength}<td>{f.type}</td><td>{new Date(f.lastModified ?? 0)}</td></tr>)}</tbody>
            </table></div>}
            <hr />

            {stringsForConsideration != null && <div>Data being considered: <ul>{Array.from(stringsForConsideration).map(type => <li>{type}</li>)}</ul></div>}
            {filesForConsideration != null && <div>Files being considered: <ul>{filesForConsideration.map(f => <li>{JSON.stringify(f)}</li>)}</ul></div>}

            <hr />
            {dropError && <div>{dropError instanceof Error ? dropError.message : JSON.stringify(dropError)}</div>}
        </div>
    )
}

const DemoUseDraggable = () => {
    const { propsUnstable: props } = useDraggable<HTMLDivElement>({ data: { "text/plain": "This is custom draggable content of type text/plain." } });


    return (
        <div {...useMergedProps(props, { className: "demo" })}>
            Draggable content
        </div>)
}

const ChildrenHaveFocusContext = createContext<UseChildrenHaveFocusChildParameters<HTMLDivElement>["childrenHaveFocusChildContext"]>(null!);
const DemoUseChildrenHaveFocus = () => {
    const [maxChildCount, setMaxChildCount] = useState(10);
    const [minChildCount, setMinChildCount] = useState(5);
    const [currentChildCount, setCurrentChildCount] = useState(minChildCount);
    useInterval({
        callback: () => {
            if (currentChildCount == minChildCount)
                setCurrentChildCount(maxChildCount);
            else
                setCurrentChildCount(currentChildCount - 1);
            //let newChildCount = Math.round(Math.random() * (maxChildCount - minChildCount)) + minChildCount
            //setCurrentChildCount(newChildCount);
        },
        interval: 1000
    });
    const [anyFocused, setAnyFocused] = useState(false);
    const { childrenHaveFocusChildContext } = useChildrenHaveFocus<HTMLDivElement>({ childrenHaveFocusParameters: { onCompositeFocusChange: setAnyFocused } });


    return (
        <div {...useMergedProps({}, { className: "demo" })}>
            <h2>useChildrenHaveFocus</h2>
            <p>If you want to see if any of your children have focus, the easiest way is to just attach a <code>focusIn</code> handler to the parent DOM node. But what if you don't have just one single parent DOM node? This hook lets you coordinate all the children to give you that information as if you were able to take that easy parent node route.</p>
            <div><label><input type="number" min={0} value={minChildCount} onInput={e => { e.preventDefault(); setMinChildCount(e.currentTarget.valueAsNumber) }} /> Min # of children</label></div>
            <div><label><input type="number" min={minChildCount} value={maxChildCount} onInput={e => { e.preventDefault(); setMaxChildCount(e.currentTarget.valueAsNumber) }} /> Max # of children</label></div>
            <div>Current # of children: {currentChildCount}</div>
            <ChildrenHaveFocusContext.Provider value={childrenHaveFocusChildContext}>
                <div>Any children focused: {anyFocused.toString()}</div>
                <div>{Array.from((function* () {
                    for (let i = 0; i < currentChildCount; ++i) {
                        yield <DemoUseChildrenHaveFocusChild index={i} key={i} />
                    }
                })())}</div>
            </ChildrenHaveFocusContext.Provider>
        </div>)
}

const DemoUseChildrenHaveFocusChild = ({ index }: { index: number }) => {
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged } } = useChildrenHaveFocusChild<HTMLDivElement>({ childrenHaveFocusChildContext: useContext(ChildrenHaveFocusContext) });
    const { refElementReturn } = useRefElement<HTMLDivElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged }, refElementReturn });
    return (
        <div tabIndex={0} {...useMergedProps(refElementReturn.propsStable, hasCurrentFocusReturn.propsStable)}>
            Focusable child #{index}
            <input />
            <input />
        </div>
    )
}

const DemoUseElementSizeAnimation = () => {
    return <div />;
    const [height, setHeight] = useState(0);
    const [angle, setAngle] = useState(0);
    useAnimationFrame({
        callback: (_ms) => {
            setAngle(a => a + 0.01)
            setHeight((Math.sin(angle) + 1) / 0.5);
        }
    });

    const [elementSize, setElementSize] = useState<ElementSize | null>(null);

    const { refElementReturn: { propsStable } } = useElementSize<HTMLDivElement>({
        elementSizeParameters: { onSizeChange: setElementSize, getObserveBox: null },
        refElementParameters: { onElementChange: undefined }
    });

    return (
        <div style="height: 300px; width: 300px; contain: strict;">
            <div {...useMergedProps(propsStable, { ref: undefined, className: "demo", style: { height: `${(height * 100) + 100}px` } })}>
                <pre>{JSON.stringify(elementSize, null, 2)}</pre>
            </div>
        </div>
    );
}


const DemoUseFocusTrap = memo(({ depth }: { depth?: number }) => {

    const [active, setActive] = useState(false);


    const { focusTrapReturn: { propsUnstable }, refElementReturn: { propsStable } } = useFocusTrap<HTMLDivElement, HTMLDivElement>({
        focusTrapParameters: {
            trapActive: active,
            onlyMoveFocus: false,
            focusOpener: e => e?.focus(),
            focusPopup: (e, f) => f()?.focus(),
        },
        refElementParameters: { onElementChange: undefined }
    });
    //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });

    const divProps = useMergedProps(propsUnstable, propsStable, { ref: undefined, className: "focus-trap-demo" });
    if (depth == 2)
        return <div />;

    return (
        <div className="demo">
            <label>Active: <input type="checkbox" checked={active} onInput={e => { e.preventDefault(); setActive(e.currentTarget.checked); }} /></label>
            <div {...divProps} >
                <DemoUseFocusTrapChild active={active} setActive={setActive} depth={depth ?? 0} />
            </div>
        </div>
    );
});


const DemoUseFocusTrapChild = memo(({ setActive, active }: { active: boolean, setActive: (active: boolean) => void, depth: number }) => {


    return (
        <>
            <button>Button 1</button>
            <button>Button 2</button>
            <button>Button 3</button>
            <label>Active: <input type="checkbox" checked={active} onInput={e => { e.preventDefault(); setActive(e.currentTarget.checked); }} /></label>

        </>
    );
});

const DemoUseAsyncHandler1 = memo(() => {

    const [timeout, setTimeout] = useState(1000);
    const [debounce, setDebounce] = useState(0);
    const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
    const [disableConsecutive, setDisableConsecutive] = useState(false);

    const asyncOnClick = ((_v: void, _e: h.JSX.TargetedMouseEvent<HTMLButtonElement>) => new Promise<void>((resolve, reject) => window.setTimeout(() => getShouldThrow() ? reject() : resolve(), timeout)));
    const {
        callCount,
        settleCount,
        hasCapture,
        syncHandler,
        pending,
        hasError,
        rejectCount,
        resolveCount
    } = useAsyncHandler<h.JSX.TargetedMouseEvent<HTMLButtonElement>, void>({ asyncHandler: asyncOnClick, capture: () => { }, debounce: debounce == 0 ? undefined : debounce });

    const onClick = pending ? undefined : syncHandler;

    return (
        <div className="demo">
            <button disabled={pending && disableConsecutive} onClick={onClick}>Click me!</button>
            <label>Sleep for: <input type="number" value={timeout} onInput={e => setTimeout(e.currentTarget.valueAsNumber)} /></label>
            <label>Throw an error <input type="checkbox" checked={shouldThrow} onInput={e => setShouldThrow(e.currentTarget.checked)} /></label>
            <label>Disabled while pending <input type="checkbox" checked={disableConsecutive} onInput={e => setDisableConsecutive(e.currentTarget.checked)} /></label>
            <label>Debounce: <input type="number" value={debounce} onInput={e => setDebounce(e.currentTarget.valueAsNumber)} /></label>
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>callCount</td><td>{callCount}</td></tr>
                    <tr><td>settleCount</td><td>{settleCount}</td></tr>
                    <tr><td>resolveCount</td><td>{resolveCount}</td></tr>
                    <tr><td>rejectCount</td><td>{rejectCount}</td></tr>
                    <tr><td>hasError</td><td>{hasError.toString()}</td></tr>
                    <tr><td>hasCapture</td><td>{hasCapture.toString()}</td></tr>
                </tbody>
            </table>
        </div>
    );
});

const DemoUseAsyncHandler2 = memo(() => {

    const [timeout, setTimeout] = useState(1000);
    const [debounce, setDebounce] = useState(0);
    const [throttle, setThrottle] = useState(0);
    const [shouldThrow, setShouldThrow, getShouldThrow] = useState(false);
    const [disableConsecutive, setDisableConsecutive] = useState(false);

    const [text, setText] = useState("");

    const onInputAsync = async (v: string, _e: any) => new Promise<void>((resolve, reject) => window.setTimeout(() => {
        if (getShouldThrow()) {
            reject();
        }
        else {
            setText(v);
            resolve();
        }
    }, timeout));

    const {
        callCount,
        settleCount,
        hasCapture,
        syncHandler,
        currentCapture,
        pending,
        hasError,
        rejectCount,
        resolveCount,
        debouncingAsync,
        debouncingSync
    } = useAsyncHandler<h.JSX.TargetedEvent<HTMLInputElement>, string>({ 
        asyncHandler: onInputAsync, 
        capture: (e: h.JSX.TargetedEvent<HTMLInputElement>) => { e.preventDefault(); return e.currentTarget.value }, 
        debounce: debounce == 0 ? undefined : debounce,
        throttle: throttle == 0 ? undefined : throttle
    });

    let anyWaiting = (pending || debouncingAsync || debouncingSync);


    return (
        <div className="demo">
            <label>Demo text: <input value={hasCapture ? currentCapture : text} disabled={pending && disableConsecutive} onInput={syncHandler} /></label>
            <hr />
            <label># of milliseconds the async handler takes to run: <input type="number" value={timeout} onInput={e => setTimeout(e.currentTarget.valueAsNumber)} /></label>
            <label>Throw an error <input type="checkbox" checked={shouldThrow} onInput={e => setShouldThrow(e.currentTarget.checked)} /></label>
            <label>Disabled while pending <input type="checkbox" checked={disableConsecutive} onInput={e => setDisableConsecutive(e.currentTarget.checked)} /></label>
            <label>Debounce: <input type="number" value={debounce} onInput={e => setDebounce(e.currentTarget.valueAsNumber)} /></label>
            <label>Throttle: <input type="number" value={throttle} onInput={e => setThrottle(e.currentTarget.valueAsNumber)} /></label>
            <table>
                <thead>
                    <tr>
                        <th>Field</th>
                        <th>Value</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><td>showSpinner</td><td>{`${anyWaiting}`}</td></tr>
                    <tr><td>pending</td><td>{`${pending}`}</td></tr>
                    <tr><td>debouncingSync</td><td>{`${debouncingSync}`}</td></tr>
                    <tr><td>debouncingAsync</td><td>{`${debouncingAsync}`}</td></tr>
                    <tr><td>callCount</td><td>{callCount}</td></tr>
                    <tr><td>settleCount</td><td>{settleCount}</td></tr>
                    <tr><td>resolveCount</td><td>{resolveCount}</td></tr>
                    <tr><td>rejectCount</td><td>{rejectCount}</td></tr>
                    <tr><td>hasError</td><td>{hasError.toString()}</td></tr>
                    <tr><td>currentCapture</td><td>{currentCapture}</td></tr>
                    <tr><td>"Saved" input</td><td>{text}</td></tr>
                </tbody>
            </table>
        </div>
    );
});

function getDocument() {
    return window.document;
}

const DemoFocus = memo(() => {
    const [focusCount, setFocusCount] = useState<number>(0);
    const [innerFocusCount, setInnerFocusCount] = useState(0);
    const [lastActiveElement, setLastActiveElement] = useState<(Element) | null>(null);
    const [activeElement, setActiveElement] = useState<(Element) | null>(null);
    const [windowFocused, setWindowFocused] = useState(false);
    const [focused, setFocused] = useState(false);
    const [focusedInner, setFocusedInner] = useState(false);
    const [lastFocused, setLastFocused] = useState(false);
    const [lastFocusedInner, setLastFocusedInner] = useState(false);
    const { refElementReturn } = useRefElement<HTMLDivElement>({ refElementParameters: { onElementChange: undefined } });
    const { propsStable: p2 } = refElementReturn;
    const {
        hasCurrentFocusReturn: { propsStable: p1 }
    } = useHasCurrentFocus<HTMLDivElement>({
        refElementReturn,
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: useStableCallback((focused: boolean) => {
                setFocused(focused);
                if (focused)
                    setFocusCount((c: number) => ++c);
            }),
            onCurrentFocusedInnerChanged: useStableCallback((focused: boolean) => {
                setFocusedInner(focused);
                if (focused)
                    setInnerFocusCount((c: number) => ++c);
            }),
        }
    });
    useHasLastFocus<HTMLDivElement>({
        refElementReturn,
        activeElementParameters: {
            getDocument,
            onActiveElementChange: setActiveElement,
            onLastActiveElementChange: setLastActiveElement,
            onWindowFocusedChange: setWindowFocused
        },
        hasLastFocusParameters: {
            onLastFocusedChanged: setLastFocused,
            onLastFocusedInnerChanged: setLastFocusedInner,
        }
    });
    return (
        <div class="demo">
            <h2>useHasFocus</h2>
            <p>Tracks focus related to the component:</p>
            <ul>
                <li>Is this element (or, optionally, any element within it) focused?</li>
                <li>Regardless of if focus was lost because the <code>body</code> was clicked, was this element (or, optionally, any element within it), the last to be actually focused?</li>
                <li>Does the window have focus?</li>
            </ul>
            <div {...(useMergedProps(p2, p1, { style: { border: "1px solid black" }, tabIndex: 0 }))}><span>Outer element</span><input /><input />
                <div tabIndex={0} style={{ border: "1px solid black" }}><span>Inner element</span><input /><input /></div>
            </div>
            <div>
                <ul>
                    <li>Focus count: {focusCount}</li>
                    <li>Inner focus count: {innerFocusCount}</li>
                    <li>Strictly focused: {focused.toString()}, {lastFocused.toString()} (focused, lastFocused)</li>
                    <li>Inner focused: {focusedInner.toString()}, {lastFocusedInner.toString()} (focusedInner, lastFocusedInner)</li>
                    <li>Window focused: {windowFocused.toString()}</li>
                    <li>activeElement: {activeElement?.textContent}</li>
                    <li>lastActiveElement: {lastActiveElement?.textContent}</li>
                </ul>
            </div>
        </div>
    )
})

//const GridRowContext = createContext<UseGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, {}, {}, string, string>>(null!);
//const GridCellContext = createContext<UseGridNavigationCell<HTMLTableCellElement, {}, string>>(null!);
export const DemoUseGrid = memo(() => {
    //return <div />;

    //const [, setLastFocusedInner, _getLastFocusedInner] = useState(false);
    //const { props } = useHasFocus<HTMLTableSectionElement>({ onLastFocusedInnerChanged: setLastFocusedInner, getDocument });

    const [tabbableColumn, setTabbableColumn, _getTabbableColumn] = useState<number | null>(null);
    const [selectedRow, setSelectedRow, _getSelectedRow] = useState<number | null>(null);
    const [tabbableRow, setTabbableRow] = useState<number | null>(null);
    //const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    //const getChildren = useCallback<typeof getChildren2>(() => { return getChildren2() }, []);



    //const getHighestChildIndex = useStableCallback(() => ghci());
    /*const getValid = useStableCallback<GetValid>((i) => {
        const child = getChildren().getAt(i);
        return !(child?.hidden || child?.disabled);
    });*/


    const ret: UseCompleteGridNavigationReturnType<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo> = useCompleteGridNavigation<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>({
        singleSelectionParameters: { initiallySelectedIndex: selectedRow, onSelectedIndexChange: setSelectedRow },
        gridNavigationParameters: { onTabbableColumnChange: setTabbableColumn },
        linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false, navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1 },
        //managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { onTabbableIndexChange: setTabbableRow, untabbable: false },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 },
        rearrangeableChildrenParameters: {
            getIndex: useCallback<GetIndex<{ index: number }>>((a: VNode<{ index: number }>) => a.props.index, [])
        },
        sortableChildrenParameters: { compare: useCallback((rhs: CustomGridInfo, lhs: CustomGridInfo) => { return lhs.index - rhs.index }, []) },
        paginatedChildrenParameters: { paginationMin: null, paginationMax: null },
        staggeredChildrenParameters: { staggered: true }
    });

    const {
        context,
        props,
        //rearrangeableChildrenParameters: { getHighestChildIndex: ghci, getValid: gv },
        rearrangeableChildrenReturn: { useRearrangedChildren }
    } = ret;
    //const { getChildren: getChildren2 } = managedChildrenReturn;



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


    //    const getValid = useStableCallback<GetValid>((i) => !!(ret.managedChildReturn.getChildren().getAt(i)?.hidden));

    const contextFromParent = useContext(GridRowContext) as CompleteGridNavigationContext<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>;
    const ret: UseCompleteGridNavigationRowReturnType<HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo> = useCompleteGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, CustomGridInfo, CustomGridRowInfo>({
        rowAsChildOfGridParameters: {
            completeGridNavigationRowParameters: { foo: "bar" },
            sortableChildParameters: { getSortValue: returnNull },
            context: contextFromParent,
            rovingTabIndexChildParameters: { hidden },
            managedChildParameters: { index },
            singleSelectionChildParameters: { disabled, ariaPropName: "aria-checked", selectionMode: "focus" },
            textContentParameters: { getText: useCallback((e: Element | null) => { return e?.textContent ?? "" }, []) }
        },
        rowAsParentOfCellsParameters: {
            linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false, navigatePastEnd: "wrap", navigatePastStart: "wrap" },
            rovingTabIndexParameters: { onTabbableIndexChange: useStableCallback((i: number | null) => { setTabbableColumn(i) }) },
            typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 }
        }
    });

    const {
        rowAsChildOfGridReturn: { rovingTabIndexChildReturn: { tabbable } },
        context: contextToChild,
        props
    } = ret;

    return (
        <tr {...props} data-tabbable={ret.rowAsChildOfGridReturn.rovingTabIndexChildReturn.tabbable}>
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
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden: false },
        context,
        completeGridNavigationCellParameters: { bar: "baz", focusSelf: useStableCallback((e: HTMLElement) => e.focus()) },
        textContentParameters: { getText: useCallback((e: Element | null) => { return e?.textContent ?? "" }, []) },
        //pressParameters: { exclude: index <= 1, focusSelf: useStableCallback(e => e.focus()), onPressSync: null }
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

function DemoLabel() {
    const { propsInput, propsLabel } = useRandomDualIds<HTMLInputElement, HTMLLabelElement>({ randomIdInputParameters: { prefix: "input-", otherReferencerProp: "for" }, randomIdLabelParameters: { prefix: "label-", otherReferencerProp: "aria-labelledby" as never } })
    return (
        <div className="demo">
            <input {...propsInput} />
            <label {...propsLabel}>Label</label>
        </div>
    )
}

function DemoPress({ remaining }: { remaining: number }) {

    const [count, setCount] = useState<number>(0);
    const { refElementReturn, refElementReturn: { propsStable: p1 } } = useRefElement<HTMLDivElement>({ refElementParameters: {} })
    const { pressReturn: { propsUnstable: p2, pseudoActive, longPress } } = usePress<HTMLDivElement>({
        pressParameters: { exclude: undefined, focusSelf: e => { e.focus() }, longPressThreshold: 1000, onPressSync: () => { setCount((c: number) => ++c) } },
        refElementReturn
    })
    return (
        <div className="demo">
            <div>Press count: {count}</div>
            <div>Active: {pseudoActive.toString()}</div>
            <div>Long press: {(longPress ?? "null").toString()}</div>
            <div style={{ border: "1px solid black", touchAction: "none" }} tabIndex={0} {...useMergedProps(p1, p2)}>
                <div>This DIV's parent is pressable. Click here to press, cancel by leaving or hovering over a pressable child.</div>
                <div>
                    {remaining > 0 && <DemoPress remaining={remaining - 1} />}
                </div>
            </div>
        </div>
    )
}
/*
function DemoThrottleDebounce() {
    const [count, setCount] = useState(0);
    const onClick = useCallback(() => {
        debugger;
        setCount(i => i + 1);
    }, []);
    const onClickThrottled = useThrottled(onClick, 1000);
    const onClickDebounced = useDebounced(onClick, 1000);
    const onClickBoth = useDebounced(onClickThrottled, 1000);

    return (
        <div className="demo">
            <div>Press count: {count}</div>

            <div><button onClick={() => {debugger; onClick();}}>Normal</button></div>
            <div><button onClick={() => {debugger; onClickThrottled();}}>Throttled</button></div>
            <div><button onClick={() => {debugger; onClickDebounced();}}>Debounced</button></div>
            <div><button onClick={() => {debugger; onClickBoth();}}>Combined</button></div>
        </div>)
}*/

const Component = () => {
        return <DemoUseRovingTabIndex />;

    return <div class="flex" style={{ flexWrap: "wrap" }}>
        <DemoPress remaining={2} />
        <input />
        <div style="display:grid;grid-template-columns:1fr 1fr">
            <DemoUseModal />
            <DemoUseModal />
        </div>
        <hr />
        <DemoLabel />
        <hr />
        <DemoFocus />
        <hr />
        <DemoUseChildrenHaveFocus />
        <hr />
        <DemoUseGrid />
        <hr />
        <DemoUseTimeout />
        <hr />
        <DemoUseInterval />
        <hr />
        <DemoUseRovingTabIndex />
        <hr />


        <DemoUseFocusTrap />
        <hr />
        <DemoUseAsyncHandler1 />
        <hr />
        <DemoUseAsyncHandler2 />
        <hr />
        <DemoUseDroppable />
        <hr />
        <DemoUseDraggable />
        <hr />
        <DemoUseElementSizeAnimation />
        <hr />
        <input />
    </div>
}

requestAnimationFrame(() => {
    render(<Component />, document.getElementById("root")!);
})
