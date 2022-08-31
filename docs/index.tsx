import { createContext, h, render } from "preact";
import { memo } from "preact/compat";
import { useContext, useRef } from "preact/hooks";
import { useAnimationFrame, useAsyncHandler, useDraggable, useDroppable, useElementSize, useFocusTrap, useMergedProps, useState } from "..";
import { ElementSize } from "../use-element-size";
import { useGridNavigation, UseGridNavigationCell, UseGridNavigationRow } from "../use-grid-navigation";
import { useHasFocus } from "../use-has-focus";
import { DemoUseInterval } from "./demos/use-interval";
import { DemoUseRovingTabIndex } from "./demos/use-roving-tab-index";
import { DemoUseTimeout } from "./demos/use-timeout";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");



const DemoUseDroppable = () => {
    const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, useDroppableProps, dropError } = useDroppable<HTMLDivElement>({ effect: "copy" });

    const { ref: _ref } = useMergedProps<HTMLInputElement>({}, { ref: useRef<HTMLInputElement>(null!) })

    const p = useDroppableProps({ className: "demo droppable" });

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
    const { useDraggableProps } = useDraggable<HTMLDivElement>({ data: { "text/plain": "This is custom draggable content of type text/plain." } });


    return (
        <div {...useDraggableProps({ className: "demo" })}>
            Draggable content
        </div>)
}

const DemoUseElementSizeAnimation = () => {
    const [height, setHeight] = useState(0);
    const [angle, setAngle] = useState(0);
    useAnimationFrame({
        callback: (_ms) => {
            setAngle(a => a + 0.01)
            setHeight((Math.sin(angle) + 1) / 0.5);
        }
    });

    const [elementSize, setElementSize] = useState<ElementSize | null>(null);

    const { useElementSizeProps } = useElementSize<HTMLDivElement>({ onSizeChange: setElementSize });

    return (
        <div {...useElementSizeProps({ ref: undefined, className: "demo", style: { height: `${(height * 100) + 100}px` } })}>
            <pre>{JSON.stringify(elementSize, null, 2)}</pre>
        </div>
    );
}


const DemoUseFocusTrap = memo(({ depth }: { depth?: number }) => {

    const [active, setActive] = useState(false);

    const { useFocusTrapProps } = useFocusTrap<HTMLDivElement>({ trapActive: active });
    //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });

    const divProps = useFocusTrapProps({ ref: undefined, className: "focus-trap-demo" });
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
    } = useAsyncHandler<h.JSX.TargetedMouseEvent<HTMLButtonElement>, void>(asyncOnClick, { capture: () => { }, debounce: debounce == 0 ? undefined : debounce });

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
        resolveCount
    } = useAsyncHandler<h.JSX.TargetedEvent<HTMLInputElement>, string>(onInputAsync, { capture: (e: h.JSX.TargetedEvent<HTMLInputElement>) => { e.preventDefault(); return e.currentTarget.value }, debounce: debounce == 0 ? undefined : debounce });


    return (
        <div className="demo">
            <label>Demo text: <input value={hasCapture ? currentCapture : text} disabled={pending && disableConsecutive} onInput={syncHandler} /></label>
            <hr />
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
                    <tr><td>currentCapture</td><td>{currentCapture}</td></tr>
                    <tr><td>"Saved" input</td><td>{text}</td></tr>
                </tbody>
            </table>
        </div>
    );
});


const DemoFocus = memo(() => {
    const [lastActiveElement, setLastActiveElement] = useState<(Element & HTMLOrSVGElement) | null>(null);
    const [activeElement, setActiveElement] = useState<(Element & HTMLOrSVGElement) | null>(null);
    const [windowFocused, setWindowFocused] = useState(false);
    const [focused, setFocused] = useState(false);
    const [focusedInner, setFocusedInner] = useState(false);
    const [lastFocused, setLastFocused] = useState(false);
    const [lastFocusedInner, setLastFocusedInner] = useState(false);
    const { useHasFocusProps } = useHasFocus<HTMLDivElement>({
        onFocusedChanged: setFocused,
        onFocusedInnerChanged: setFocusedInner,
        onLastFocusedChanged: setLastFocused,
        onLastFocusedInnerChanged: setLastFocusedInner,
        onActiveElementChange: setActiveElement,
        onLastActiveElementChange: setLastActiveElement,
        onWindowFocusedChange: setWindowFocused
    });
    return (
        <div class="demo">
            <h2>useHasFocus</h2>
            <div {...useHasFocusProps({ style: { border: "1px solid black" }, tabIndex: 0 })} >Outer <div tabIndex={0} style={{ border: "1px solid black" }}>Inner element</div></div>
            <div>
                <ul>
                    <li>Strictly focused: {focused.toString()}, {lastFocused.toString()}</li>
                    <li>Inner focused: {focusedInner.toString()}, {lastFocusedInner.toString()}</li>
                    <li>Window focused: {windowFocused.toString()}</li>
                    <li>activeElement: {activeElement?.textContent}</li>
                    <li>lastActiveElement: {lastActiveElement?.textContent}</li>
                </ul>
            </div>
        </div>
    )
})


const GridRowContext = createContext<UseGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, {}, {}, string, string>>(null!);
const GridCellContext = createContext<UseGridNavigationCell<HTMLTableCellElement, {}, string>>(null!);
export const DemoUseGrid = memo(() => {

    const [, setLastFocusedInner, _getLastFocusedInner] = useState(false);
    const { useHasFocusProps } = useHasFocus<HTMLTableSectionElement>({ onLastFocusedInnerChanged: setLastFocusedInner });
    const { useGridNavigationRow, useGridNavigationProps, children, gridNavigation: { currentColumn }, linearNavigation, listNavigation, rovingTabIndex, typeaheadNavigation } = useGridNavigation<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement, {}, {}, string, string>({
        rovingTabIndex: {},
        linearNavigation: {},
        listNavigation: {},
        typeaheadNavigation: {},
        managedChildren: {}
    });

    return (
        <>
            {<div>Current column: {currentColumn}</div>}
            <table {...{ border: "2" } as {}} style={{ whiteSpace: "nowrap" }}>

                <thead>
                    <tr>
                        <th>Row is tabbable?</th>
                        <th>Column 1</th>
                        <th>Column 2</th>
                    </tr>
                </thead>
                <tbody {...useHasFocusProps(useGridNavigationProps({}))}>
                    <GridRowContext.Provider value={useGridNavigationRow}>
                        {Array.from((function* () {
                            for (let i = 0; i < 10; ++i) {
                                yield <DemoUseGridRow index={i} key={i} />
                            }
                        })())}
                    </GridRowContext.Provider>
                </tbody>
            </table>
        </>
    );
})

const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseGridRow = memo((({ index }: { index: number }) => {
    const [_randomWord] = useState(() => RandomWords[index/*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
    const useGridRow = useContext(GridRowContext);
    const { useGridNavigationRowProps, useGridNavigationCell, children, gn: { getCurrentColumn }, rovingTabIndex: { getElement, getTabbable, tabbable } } = useGridRow({
        asChild: { managedChild: { index }, listNavigation: { subInfo: {}, text: "" }, rovingTabIndex: { hidden: false } },
        asParent: { linearNavigation: {}, listNavigation: {}, rovingTabIndex: {}, typeaheadNavigation: {}, managedChildren: {} }
    });

    const props = useGridNavigationRowProps({});
    return (
        <tr {...props}>
            <GridCellContext.Provider value={useGridNavigationCell}>
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

    const useGridCell = useContext(GridCellContext);
    const { useGridNavigationCellProps, gn: { getCurrentColumn }, rovingTabIndex: { getElement, getTabbable, tabbable: cellIsTabbable } } = useGridCell({
        listNavigation: { subInfo: {}, text: "" },
        managedChild: { index },
        rovingTabIndex: { hidden: true }
    });

    const props = useGridNavigationCellProps({}) as any;

    const t = (cellIsTabbable ? "(Tabbable)" : "(Not tabbable)")

    if (index === 0)
        return <td {...props}>{rowIsTabbable.toString()}</td>
    else {
        if (row < 6 || row % 2 != 0) {
            if (index === 1)
                return <td {...props}>Grid cell #{index + 1} {t}</td>
            else
                return <td><label><input  {...props} type="checkbox" /> Test input {t}</label></td>
        }
        else {
            if (index === 1)
                return <td {...props} colSpan={2}>Grid cell #{index + 1}, span 2</td>
            else
                return null;

        }
    }
})

const Component = () => {
    return <div class="flex" style={{ flexWrap: "wrap" }}>
        <DemoFocus />
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
