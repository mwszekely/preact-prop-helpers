import { createContext, Fragment, h, render } from "preact";
import { memo } from "preact/compat";
import { useCallback, useContext, useRef } from "preact/hooks";
import { useAnimationFrame, useAsyncHandler, useDraggable, useDroppable, useElementSize, useFocusTrap, useListNavigation, UseListNavigationChild, useMergedProps, useState } from "..";
import { DemoUseRovingTabIndex } from "./demos/use-roving-tab-index";
import { useHasFocus } from "../use-has-focus";
import { DemoUseInterval } from "./demos/use-interval";
import { DemoUseTimeout } from "./demos/use-timeout";
import { useActiveElement } from "../use-active-element";
import { useGridNavigation, UseGridNavigationRow, UseGridNavigationCell, UseGridNavigationRowInfo, UseGridNavigationCellInfo } from "../use-grid-navigation";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

type E = (EventTarget & HTMLInputElement);
type E2 = E["className"]


const DemoUseDroppable = () => {
    const { droppedFiles, droppedStrings, filesForConsideration, stringsForConsideration, useDroppableProps, dropError } = useDroppable<HTMLDivElement>({ effect: "copy" });

    const { ref } = useMergedProps<HTMLInputElement>()({}, { ref: useRef<HTMLInputElement>(null!) })

    const p = useDroppableProps({ className: "demo droppable" });

    const r = p.ref;

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
    const { dragging, useDraggableProps, lastDropEffect, getLastDropEffect, getDragging } = useDraggable<HTMLDivElement>({ data: { "text/plain": "This is custom draggable content of type text/plain." } });


    return (
        <div {...useDraggableProps({ className: "demo" })}>
            Draggable content
        </div>)
}

const DemoUseElementSizeAnimation = () => {
    const [height, setHeight] = useState(0);
    const [angle, setAngle] = useState(0);
    useAnimationFrame({
        callback: (ms) => {
            setAngle(a => a + 0.01)
            setHeight((Math.sin(angle) + 1) / 0.5);
        }
    });

    const { element, elementSize, useElementSizeProps } = useElementSize<HTMLDivElement>();

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


const DemoUseFocusTrapChild = memo(({ setActive, active, depth }: { active: boolean, setActive: (active: boolean) => void, depth: number }) => {


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

    const {
        callCount,
        settleCount,
        getCurrentCapture,
        hasCapture,
        getSyncHandler,
        currentCapture,
        pending,
        error,
        hasError,
        rejectCount,
        resolveCount
    } = useAsyncHandler<HTMLButtonElement>()({ capture: () => { }, debounce: debounce == 0 ? undefined : debounce });

    const asyncOnClick = ((v: void, e: Event) => new Promise<void>((resolve, reject) => window.setTimeout(() => getShouldThrow() ? reject() : resolve(), timeout)));
    const onClick = getSyncHandler(pending ? null : asyncOnClick);

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

    const {
        callCount,
        settleCount,
        getCurrentCapture,
        hasCapture,
        getSyncHandler,
        currentCapture,
        pending,
        error,
        hasError,
        rejectCount,
        resolveCount
    } = useAsyncHandler<HTMLInputElement>()({ capture: e => { e.preventDefault(); return e.currentTarget.value }, debounce: debounce == 0 ? undefined : debounce });

    const onInput = getSyncHandler(async (v, e) => new Promise((resolve, reject) => window.setTimeout(() => {
        if (getShouldThrow()) {
            reject();
        }
        else {
            setText(v);
            resolve();
        }
    }, timeout)));

    return (
        <div className="demo">
            <label>Demo text: <input value={hasCapture ? currentCapture : text} disabled={pending && disableConsecutive} onInput={onInput} /></label>
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
    const { activeElement, getLastActiveElement, getActiveElement, lastActiveElement, windowFocused } = useActiveElement();
    const { focused, focusedInner, useHasFocusProps } = useHasFocus<HTMLDivElement>();
    return (
        <div class="demo">
            <h2>useHasFocus</h2>
            <div {...useHasFocusProps({ style: { border: "1px solid black" }, tabIndex: 0 })} >Outer <div tabIndex={0} style={{ border: "1px solid black" }}>Inner element</div></div>
            <div>
                <ul>
                    <li>Strictly focused: {focused.toString()}</li>
                    <li>Inner focused: {focusedInner.toString()}</li>
                    <li>Window focused: {windowFocused.toString()}</li>
                    <li>activeElement: {activeElement?.tagName}</li>
                    <li>lastActiveElement: {lastActiveElement?.tagName}</li>
                </ul>
            </div>
        </div>
    )
})


const GridRowContext = createContext<UseGridNavigationRow<HTMLDivElement, HTMLDivElement, UseGridNavigationRowInfo, UseGridNavigationCellInfo>>(null!);
const GridCellContext = createContext<UseGridNavigationCell<HTMLDivElement, UseGridNavigationCellInfo>>(null!);
export const DemoUseGrid = memo(() => {

    const { lastFocusedInner, useHasFocusProps } = useHasFocus<HTMLDivElement>();
    const { useGridNavigationRow, useGridNavigationColumn, rowCount, cellIndex, rowIndex } = useGridNavigation<HTMLDivElement, HTMLDivElement, UseGridNavigationRowInfo, UseGridNavigationCellInfo>({ focusOnChange: lastFocusedInner });

    return (
        <div className="demo">
            <div>{cellIndex}+{rowIndex}/{rowCount}</div>
            <div {...useHasFocusProps({})}>
                <GridRowContext.Provider value={useGridNavigationRow}>
                    {Array.from((function* () {
                        for (let i = 0; i < 10; ++i) {
                            yield <DemoUseGridRow index={i} key={i} />
                        }
                    })())}
                </GridRowContext.Provider>
            </div>
        </div>
    );
})

const Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseGridRow = memo((({ index }: { index: number }) => {
    const [randomWord] = useState(() => RandomWords[index/*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
    const useGridRow = useContext(GridRowContext);
    const { isTabbableRow, cellCount, useGridNavigationRowProps, useGridNavigationCell, managedCells, currentColumn } = useGridRow({ index });

    const props = useGridNavigationRowProps({});
    return (
        <div {...props}>
            <div>{isTabbableRow.toString()} ({currentColumn}/{cellCount})</div>

            <div style="display: flex">
                <GridCellContext.Provider value={useGridNavigationCell}>
                    {Array.from((function* () {
                        for (let i = 0; i < 3; ++i) {
                            yield <DemoUseGridCell index={i} key={i} />
                        }
                    })())}
                </GridCellContext.Provider>
            </div>
        </div>
    )
}));

const DemoUseGridCell = (({ index }: { index: number }) => {
    const useGridCell = useContext(GridCellContext);
    const { useGridNavigationCellProps } = useGridCell({ index, text: null });

    const props = useGridNavigationCellProps({}) as any;

    if (index === 0)
        return <div {...props}>Grid cell #{index + 1}</div>
    else
        return <label><input  {...props} type="checkbox" /> Test input</label>
})

const Component = () => {
    return <div class="flex" style={{ flexWrap: "wrap" }}>
        <DemoUseGrid />
        <hr />
        <DemoFocus />
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
