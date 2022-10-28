import { createContext, h, render, VNode } from "preact";
import { memo } from "preact/compat";
import { StateUpdater, useCallback, useContext, useRef } from "preact/hooks";
import { GetIndex, useAnimationFrame, useAsyncHandler, useDraggable, useDroppable, useElementSize, useEnsureStability, useFocusTrap, useGridNavigation, useHasCurrentFocus, useHasLastFocus, useManagedChildren, useMergedProps, useRefElement, useSortableChildren, useStableCallback, useState } from "..";
import { assertEmptyObject, useManagedChild, UseManagedChildParameters, UseManagedChildrenContext, UseManagedChildrenReturnTypeInfo } from "../use-child-manager";
import { ElementSize } from "../use-element-size";
import { GridChildCellInfo, GridChildRowInfo, useGridNavigationCell, UseGridNavigationCellParameters, UseGridNavigationCellReturnType, UseGridNavigationContext, UseGridNavigationParameters, UseGridNavigationReturnType, useGridNavigationRow, UseGridNavigationRowContext, UseGridNavigationRowParameters, UseGridNavigationRowReturnType } from "../use-grid-navigation";
import { GetValid, UseSortableChildrenParameters, UseSortableChildrenReturnTypeInfo, UseSortableChildrenReturnTypeWithHooks } from "../use-sortable-children";
import { useStableObject } from "../use-stable-getter";
//import { useGridNavigation, UseGridNavigationCell, UseGridNavigationRow } from "../use-grid-navigation";
import { DemoUseInterval } from "./demos/use-interval";
import { DemoUseRovingTabIndex } from "./demos/use-roving-tab-index";
import { DemoUseTimeout } from "./demos/use-timeout";

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

    const { elementSizeReturn: { getSize }, refElementReturn: { propsStable } } = useElementSize<HTMLDivElement>({
        elementSizeParameters: { onSizeChange: setElementSize, getObserveBox: null },
        refElementParameters: { onElementChange: undefined }
    });

    return (
        <div {...useMergedProps(propsStable, { ref: undefined, className: "demo", style: { height: `${(height * 100) + 100}px` } })}>
            <pre>{JSON.stringify(elementSize, null, 2)}</pre>
        </div>
    );
}


const DemoUseFocusTrap = memo(({ depth }: { depth?: number }) => {

    const [active, setActive] = useState(false);

    const { activeElementReturn: { }, focusTrap: { propsUnstable }, refElementReturn: { propsStable } } = useFocusTrap<HTMLDivElement>({ focusTrapParameters: { trapActive: active }, activeElementParameters: { getDocument }, refElementParameters: { onElementChange: undefined } });
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
    } = useAsyncHandler<h.JSX.TargetedEvent<HTMLInputElement>, string>({ asyncHandler: onInputAsync, capture: (e: h.JSX.TargetedEvent<HTMLInputElement>) => { e.preventDefault(); return e.currentTarget.value }, debounce: debounce == 0 ? undefined : debounce });


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

function getDocument() {
    return window.document;
}

const DemoFocus = memo(() => {
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
            onCurrentFocusedChanged: setFocused,
            onCurrentFocusedInnerChanged: setFocusedInner,
        }
    });
    const {
        activeElementReturn: { },
        hasLastFocusReturn: { },

    } = useHasLastFocus<HTMLDivElement>({
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
            <div {...(useMergedProps(p2, p1, { style: { border: "1px solid black" }, tabIndex: 0 }))}>Outer <div tabIndex={0} style={{ border: "1px solid black" }}>Inner element</div></div>
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

interface GridDemoParameters<GridParentElement extends Element, GridRowElement extends Element, GridCellElement extends Element> {
    rearrangeableChildrenParameters: Omit<UseSortableChildrenParameters<GridChildRowInfo<GridRowElement>>["rearrangeableChildrenParameters"], "getHighestChildIndex">;
    sortableChildrenParameters: UseSortableChildrenParameters<GridChildRowInfo<GridRowElement>>["sortableChildrenParameters"];
    gridNavigationParameters: UseGridNavigationParameters<GridRowElement, GridChildRowInfo<GridRowElement>>["gridNavigationParameters"];
    rovingTabIndexParameters: UseGridNavigationParameters<GridRowElement, GridChildRowInfo<GridRowElement>>["rovingTabIndexParameters"];
    typeaheadNavigationParameters: UseGridNavigationParameters<GridRowElement, GridChildRowInfo<GridRowElement>>["typeaheadNavigationParameters"];
    linearNavigationParameters: Omit<UseGridNavigationParameters<GridRowElement, GridChildRowInfo<GridRowElement>>["linearNavigationParameters"], "getHighestIndex" | "navigateAbsolute" | "navigateRelative">;
}
interface GridDemoRowParameters<GridRowElement extends Element, GridCellElement extends Element> {
    asChildRowOfTable: {
        gridNavigationRowParameters: UseGridNavigationRowParameters<GridRowElement, GridCellElement, GridChildRowInfo<GridRowElement>, GridChildCellInfo<GridCellElement>>["asChildRowOfTable"]["gridNavigationRowParameters"];
        managedChildParameters: UseGridNavigationRowParameters<GridRowElement, GridCellElement, GridChildRowInfo<GridRowElement>, GridChildCellInfo<GridCellElement>>["asChildRowOfTable"]["managedChildParameters"];
        managedChildrenReturn: UseManagedChildrenReturnTypeInfo<GridChildRowInfo<GridRowElement>>["managedChildrenReturn"];
        rovingTabIndexChildParameters: UseGridNavigationRowParameters<GridRowElement, GridCellElement, GridChildRowInfo<GridRowElement>, GridChildCellInfo<GridCellElement>>["asChildRowOfTable"]["rovingTabIndexChildParameters"];
        typeaheadNavigationChildParameters: UseGridNavigationRowParameters<GridRowElement, GridCellElement, GridChildRowInfo<GridRowElement>, GridChildCellInfo<GridCellElement>>["asChildRowOfTable"]["typeaheadNavigationChildParameters"];
    };
    asParentRowOfCells: {
        linearNavigationParameters: Omit<UseGridNavigationRowParameters<GridRowElement, GridCellElement, GridChildRowInfo<GridRowElement>, GridChildCellInfo<GridCellElement>>["asParentRowOfCells"]["linearNavigationParameters"], "getHighestIndex" | "navigateAbsolute" | "navigateRelative">;
        typeaheadNavigationParameters: UseGridNavigationRowParameters<GridRowElement, GridCellElement, GridChildRowInfo<GridRowElement>, GridChildCellInfo<GridCellElement>>["asParentRowOfCells"]["typeaheadNavigationParameters"];
        rovingTabIndexParameters: UseGridNavigationRowParameters<GridRowElement, GridCellElement, GridChildRowInfo<GridRowElement>, GridChildCellInfo<GridCellElement>>["asParentRowOfCells"]["rovingTabIndexParameters"];
    }
}
interface GridDemoCellParameters<GridCellElement extends Element> extends UseGridNavigationCellParameters<GridCellElement> {
    managedChildrenReturn: UseManagedChildrenReturnTypeInfo<GridChildCellInfo<GridCellElement>>["managedChildrenReturn"];
    managedChildParameters: Pick<UseManagedChildParameters<GridChildCellInfo<GridCellElement>>["managedChildParameters"], "index" | "hidden">;
}

interface GridDemoReturn<GridParentElement extends Element, GridRowElement extends Element, GridCellElement extends Element> extends
    Omit<UseSortableChildrenReturnTypeWithHooks<GridParentElement, GridChildRowInfo<GridRowElement>>, "linearNavigationParameters">,
    Omit<UseGridNavigationReturnType<GridParentElement, GridRowElement>, "gridNavigationRowParameters" | "managedChildrenParameters"> {
    props: h.JSX.HTMLAttributes<GridParentElement>;
    context: UseGridNavigationContext<GridParentElement, GridRowElement> & UseManagedChildrenContext<GridChildRowInfo<GridRowElement>>;
    managedChildrenReturn: UseManagedChildrenReturnTypeInfo<GridChildRowInfo<GridRowElement>>["managedChildrenReturn"];
}
interface GridDemoRowReturn<GridRowElement extends Element, GridCellElement extends Element> {
    context: UseGridNavigationRowContext<GridRowElement, GridCellElement> & UseManagedChildrenContext<GridChildCellInfo<GridCellElement>>;
    props: h.JSX.HTMLAttributes<GridRowElement>;

    asChildRowOfTable: {
        rovingTabIndexChildReturn: UseGridNavigationRowReturnType<GridRowElement, GridCellElement>["asChildRowOfTable"]["rovingTabIndexChildReturn"];
        managedChildrenReturn: UseManagedChildrenReturnTypeInfo<GridChildRowInfo<GridRowElement>>["managedChildrenReturn"];
    };
    asParentRowOfCells: {
        gridNavigationCellParameters: UseGridNavigationRowReturnType<GridRowElement, GridCellElement>["asParentRowOfCells"]["gridNavigationCellParameters"];
        linearNavigationReturn: UseGridNavigationRowReturnType<GridRowElement, GridCellElement>["asParentRowOfCells"]["linearNavigationReturn"];
        rovingTabIndexChildParameters: UseGridNavigationRowReturnType<GridRowElement, GridCellElement>["asParentRowOfCells"]["rovingTabIndexChildParameters"];
        rovingTabIndexReturn: UseGridNavigationRowReturnType<GridRowElement, GridCellElement>["asParentRowOfCells"]["rovingTabIndexReturn"];
        typeaheadNavigationChildParameters: UseGridNavigationRowReturnType<GridRowElement, GridCellElement>["asParentRowOfCells"]["typeaheadNavigationChildParameters"];
        typeaheadNavigationReturn: UseGridNavigationRowReturnType<GridRowElement, GridCellElement>["asParentRowOfCells"]["typeaheadNavigationReturn"];
    }
}
interface GridDemoCellReturn<GridCellElement extends Element> {
    props: h.JSX.HTMLAttributes<GridCellElement>;
    rovingTabIndexChildReturn: UseGridNavigationCellReturnType<GridCellElement>["rovingTabIndexChildReturn"];
    //managedChildrenReturn: UseManagedChildrenReturnTypeInfo<GridChildRowInfo<GridCellElement>>["managedChildrenReturn"];
}

function useGridDemo<GridParentElement extends Element, GridRowElement extends Element, GridCellElement extends Element>({
    rearrangeableChildrenParameters,
    sortableChildrenParameters,
    gridNavigationParameters,
    linearNavigationParameters: { disableArrowKeys, disableHomeEndKeys },
    rovingTabIndexParameters,
    typeaheadNavigationParameters
}: GridDemoParameters<GridParentElement, GridRowElement, GridCellElement>): GridDemoReturn<GridParentElement, GridRowElement, GridCellElement> {

    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const getChildren = useCallback<typeof getChildren2>(() => { return getChildren2() }, []);

    const { linearNavigationParameters: { navigateAbsolute, navigateRelative }, ...sortableChildrenReturn } = useSortableChildren<GridParentElement, GridChildRowInfo<GridRowElement>>({
        rearrangeableChildrenParameters: {
            getHighestChildIndex: getHighestIndex,
            ...rearrangeableChildrenParameters
        },
        sortableChildrenParameters
    });

    const {
        gridNavigationRowParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        ...void1
    } = useGridNavigation<GridParentElement, GridRowElement, GridChildRowInfo<GridRowElement>>({
        gridNavigationParameters,
        linearNavigationParameters: { getHighestIndex, navigateAbsolute, navigateRelative, disableArrowKeys, disableHomeEndKeys },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters,
        typeaheadNavigationParameters
    });

    const {
        managedChildrenReturn
    } = useManagedChildren<GridChildRowInfo<GridRowElement>>({
        managedChildrenParameters: {
            onAfterChildLayoutEffect: null,
            onChildrenMountChange: null
        }
    });

    const { propsStable: p1 } = linearNavigationReturn;
    const { propsStable: p2 } = typeaheadNavigationReturn;

    const { getChildren: getChildren2 } = managedChildrenReturn;

    const props = useMergedProps(p1, p2);
    const context = useStableObject({ gridNavigationRowParameters, rovingTabIndexChildParameters, typeaheadNavigationChildParameters, managedChildrenReturn });

    return {
        context,
        props,
        ...sortableChildrenReturn,
        linearNavigationReturn,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        rovingTabIndexChildParameters,
        managedChildrenReturn
    }

}

function useGridRowDemo<GridRowElement extends Element, GridCellElement extends Element>({
    asChildRowOfTable: asChildRowOfTableP,
    asParentRowOfCells: asParentRowOfCellsP
}: GridDemoRowParameters<GridRowElement, GridCellElement>): GridDemoRowReturn<GridRowElement, GridCellElement> {
    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const getChildren = useCallback(() => { return getChildren2() }, []);


    const navigateAbsolute = useCallback((n: number) => { return n; }, [])
    const navigateRelative = useCallback((n: number, o: number) => { return n + o; }, [])

    const { refElementReturn } = useRefElement<GridRowElement>({ refElementParameters: {} });
    const { getElement, propsStable: p5 } = refElementReturn;
    const { propsStable: p4 } = refElementReturn;
    const setTabbableIndex2 = useStableCallback((a: Parameters<StateUpdater<number | null>>[0], b: boolean) => { setTabbableIndex(a, b) });
    const gridNavRet: UseGridNavigationRowReturnType<GridRowElement, GridCellElement> = useGridNavigationRow<GridRowElement, GridCellElement, GridChildRowInfo<GridRowElement>, GridChildCellInfo<GridCellElement>>({
        asChildRowOfTable: {
            ...asChildRowOfTableP,
            managedChildrenReturn: { getChildren },
            rovingTabIndexReturn: { setTabbableIndex: setTabbableIndex2 },
        },
        asParentRowOfCells: {
            linearNavigationParameters: { ...asParentRowOfCellsP.linearNavigationParameters, getHighestIndex, navigateAbsolute, navigateRelative },
            managedChildrenReturn: { getChildren },
            rovingTabIndexParameters: asParentRowOfCellsP.rovingTabIndexParameters,
            typeaheadNavigationParameters: asParentRowOfCellsP.typeaheadNavigationParameters,
        }
    });

    const { asChildRowOfTable: asChildRowOfTableR, asParentRowOfCells: asParentRowOfCellsR, ...void10 } = gridNavRet;
    const { propsStable: p3, ...void2 } = asParentRowOfCellsR.linearNavigationReturn;
    const { getTabbableIndex, setTabbableIndex, ...void3 } = asParentRowOfCellsR.rovingTabIndexReturn;
    const { getTabbable, propsUnstable, setTabbable, tabbable, ...void7 } = asChildRowOfTableR.rovingTabIndexChildReturn;

    const { hasCurrentFocusReturn, ...void8 } = useHasCurrentFocus<GridRowElement>({ refElementReturn, hasCurrentFocusParameters: { onCurrentFocusedChanged: null, ...asChildRowOfTableR.hasCurrentFocusParameters } });

    const { managedChildParameters: { hidden, index } } = asChildRowOfTableP;

    useManagedChild<GridChildRowInfo<GridRowElement>>({
        managedChildParameters: { getElement, getTabbable, hidden, index, setTabbable, tabbable, ...asChildRowOfTableR.managedChildParameters },
        managedChildrenReturn: asChildRowOfTableP.managedChildrenReturn
    })

    const {
        managedChildrenReturn: mcr2,
        ...void9
    } = useManagedChildren<GridChildCellInfo<GridCellElement>>({
        managedChildrenParameters: {
            onAfterChildLayoutEffect: null,
            ...asParentRowOfCellsR.managedChildrenParameters
        }
    });


    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    assertEmptyObject(void10);

    const { propsStable: p2 } = asParentRowOfCellsR.typeaheadNavigationReturn;
    const { propsStable: p1 } = hasCurrentFocusReturn;

    const { getChildren: getChildren2 } = mcr2;

    const props = useMergedProps(p1, p2, p3, p4, p5);
    const context = useStableObject<GridCellContext<GridRowElement, GridCellElement>>({
        rovingTabIndexChildParameters: asParentRowOfCellsR.rovingTabIndexChildParameters,
        typeaheadNavigationChildParameters: asParentRowOfCellsR.typeaheadNavigationChildParameters,
        gridNavigationCellParameters: asParentRowOfCellsR.gridNavigationCellParameters,
        rovingTabIndexReturn: asParentRowOfCellsR.rovingTabIndexReturn,
        managedChildrenReturn: mcr2
    });


    return {
        asChildRowOfTable: {
            managedChildrenReturn: asChildRowOfTableP.managedChildrenReturn,
            ...asChildRowOfTableR,
        },
        asParentRowOfCells: asParentRowOfCellsR,
        context,
        props,

    }

}

function useGridCellDemo<CellElement extends Element>({
    gridNavigationCellParameters,
    managedChildrenReturn,
    rovingTabIndexChildParameters,
    rovingTabIndexReturn,
    typeaheadNavigationChildParameters,
    managedChildParameters: { index, hidden },
    ...void4
}: GridDemoCellParameters<CellElement>): GridDemoCellReturn<CellElement> {


    const { refElementReturn } = useRefElement<CellElement>({ refElementParameters: {} });
    const { propsStable: p1, getElement } = refElementReturn;

    const {
        hasCurrentFocusParameters,
        rovingTabIndexChildReturn,
        ...void3
    } = useGridNavigationCell<CellElement>({
        gridNavigationCellParameters: { ...gridNavigationCellParameters, colSpan: 1 },
        managedChildParameters: { hidden, index },
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters
    });


    const { onCurrentFocusedInnerChanged, ...void1 } = hasCurrentFocusParameters;
    const { getTabbable, propsUnstable: p2, setTabbable, tabbable, ...void2 } = rovingTabIndexChildReturn;

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    const focusSelf = useCallback((e: CellElement) => { (e as Element as HTMLElement).focus(); }, [])

    const {
        hasCurrentFocusReturn: { propsStable: p3 }
    } = useHasCurrentFocus<CellElement>({
        refElementReturn,
        hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged }
    });

    useManagedChild<GridChildCellInfo<CellElement>>({
        managedChildParameters: { index, focusSelf, getElement, getTabbable, hidden: false, setTabbable, tabbable },
        managedChildrenReturn
    });

    const props = useMergedProps<CellElement>(p1, p2, p3);

    return {
        props,
        rovingTabIndexChildReturn
    }
}


//const GridRowContext = createContext<UseGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, {}, {}, string, string>>(null!);
//const GridCellContext = createContext<UseGridNavigationCell<HTMLTableCellElement, {}, string>>(null!);
export const DemoUseGrid = memo(() => {
    //return <div />;

    //const [, setLastFocusedInner, _getLastFocusedInner] = useState(false);
    //const { props } = useHasFocus<HTMLTableSectionElement>({ onLastFocusedInnerChanged: setLastFocusedInner, getDocument });

    const [tabbableColumn, setTabbableColumn, getTabbableColumn] = useState<number | null>(null);
    const [tabbableRow, setTabbableRow] = useState<number | null>(null);
    //const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const getChildren = useCallback<typeof getChildren2>(() => { return getChildren2() }, []);

    const ret: GridDemoReturn<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement> = useGridDemo<HTMLTableSectionElement, HTMLTableRowElement, HTMLTableCellElement>({
        gridNavigationParameters: { onTabbableColumnChange: setTabbableColumn },
        linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false },
        sortableChildrenParameters: { compare: useCallback((rhs, lhs) => { return lhs.index - rhs.index }, []) },
        //managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { initiallyTabbedIndex: null, onTabbableIndexChange: setTabbableRow },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 },
        rearrangeableChildrenParameters: {
            getIndex: useCallback<GetIndex<{ index: number }>>((a: VNode<{ index: number }>) => a.props.index, []),
            getValid: useStableCallback<GetValid>((index) => { return !(getChildren().getAt(index)?.hidden) })
        },
    });

    const {
        context,
        props,
        linearNavigationReturn,
        rearrangeableChildrenReturn,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        sortableChildrenReturn,
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        managedChildrenReturn,
        useSortableProps
    } = ret;

    const { getChildren: getChildren2 } = managedChildrenReturn;


    /*const {
        linearNavigationParameters,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        useSortableProps,
        ...void8
    } = useSortableChildren<HTMLUListElement, GridChildRowInfo<HTMLTableCellElement>>({
        rearrangeableChildrenParameters: {
            getHighestChildIndex: getHighestIndex,
            getIndex: useCallback<GetIndex<{ index: number }>>((a: VNode<{ index: number }>) => a.props.index, []),
            getValid: useStableCallback<GetValid>((index) => { return !(getChildren().getAt(index)?.hidden) })
        },
        sortableChildrenParameters: { compare: useCallback((rhs, lhs) => { return lhs.index - rhs.index }, []) }
    });

    const { sort } = sortableChildrenReturn;

    const {
        gridNavigationRowParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        ...void1
    } = useGridNavigation<HTMLTableSectionElement, HTMLTableRowElement, GridChildRowInfo<HTMLTableRowElement>>({
        gridNavigationParameters: { onTabbableColumnChange: setTabbableColumn },
        linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false, getHighestIndex, ...linearNavigationParameters },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { initiallyTabbedIndex: null, onTabbableIndexChange: null },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 }
    });

    const {
        managedChildrenReturn
    } = useManagedChildren<GridChildRowInfo<HTMLTableRowElement>>({
        managedChildrenParameters: {
            onAfterChildLayoutEffect: null,
            onChildrenMountChange: null
        }
    });

    const { propsStable: p1 } = linearNavigationReturn;
    const { propsStable: p2 } = typeaheadNavigationReturn;

    const { getChildren: getChildren2 } = managedChildrenReturn;*/

    return (
        <div class="demo">
            {<div>Current row: {tabbableRow}</div>}
            {<div>Current column: {tabbableColumn}</div>}
            <table {...{ border: "2" } as {}} style={{ whiteSpace: "nowrap" }}>

                <thead>
                    <tr>
                        <th>Row is tabbable?</th>
                        <th>Column 1</th>
                        <th>Column 2</th>
                    </tr>
                </thead>
                <GridRowContext.Provider value={context}>
                    <tbody {...useSortableProps({
                        ...props,
                        children: Array.from((function* () {
                            for (let i = 0; i < 10; ++i) {
                                yield <DemoUseGridRow index={i} key={i} />
                            }
                        })())
                    })} />
                </GridRowContext.Provider>
            </table>
        </div>
    );
})
type GridRowContext<ParentElement extends Element, RowElement extends Element> = UseGridNavigationContext<ParentElement, RowElement> & UseManagedChildrenContext<GridChildRowInfo<RowElement>>;
type GridCellContext<RowElement extends Element, CellElement extends Element> = UseGridNavigationRowContext<RowElement, CellElement> & UseManagedChildrenContext<GridChildCellInfo<CellElement>>;
const GridRowContext = createContext<GridRowContext<HTMLTableSectionElement, HTMLTableRowElement>>(null!);
const GridCellContext = createContext<GridCellContext<HTMLTableRowElement, HTMLTableCellElement>>(null!);

const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseGridRow = memo((({ index }: { index: number }) => {
    const [_randomWord] = useState(() => RandomWords[index/*Math.floor(Math.random() * (RandomWords.length - 1))*/]);

    const [tabbableColumn, setTabbableColumn, getTabbableColumn] = useState<number | null>(null);
    //const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    //const getChildren = useCallback(() => { return getChildren2() }, []);
    const hidden = (index === 3);
    /*
        const {
            gridNavigationRowParameters,
            rovingTabIndexChildParameters,
            typeaheadNavigationChildParameters,
            managedChildrenReturn: mcr
        } = useContext(GridRowContext);
    
        const navigateAbsolute = useCallback((n: number) => { return n; }, [])
        const navigateRelative = useCallback((n: number, o: number) => { return n + o; }, [])
    
        //const useGridRow = useContext(GridRowContext);
        const { refElementReturn } = useRefElement<HTMLTableRowElement>({ refElementParameters: {} });
        const { getElement, propsStable: p5 } = refElementReturn;
        const { propsStable: p4 } = refElementReturn;
        const setTabbableIndex2 = useStableCallback((a: Parameters<StateUpdater<number | null>>[0], b: boolean) => { setTabbableIndex(a, b) });
        const gridNavRet: UseGridNavigationRowReturnType<HTMLTableRowElement, HTMLTableCellElement> = useGridNavigationRow<HTMLTableRowElement, HTMLTableCellElement, GridChildRowInfo<HTMLTableRowElement>, GridChildCellInfo<HTMLTableCellElement>>({
            asChildRowOfTable: {
                gridNavigationRowParameters,
                managedChildParameters: { hidden, index },
                managedChildrenReturn: { getChildren },
                rovingTabIndexChildParameters,
                rovingTabIndexReturn: { setTabbableIndex: setTabbableIndex2 },
                typeaheadNavigationChildParameters: { text: "", ...typeaheadNavigationChildParameters }
            },
            asParentRowOfCells: {
                linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false, getHighestIndex, navigateAbsolute, navigateRelative },
                managedChildrenReturn: { getChildren },
                rovingTabIndexParameters: { initiallyTabbedIndex: 0, onTabbableIndexChange: setTabbableColumn },
                typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 }
            }
        });
    
        const {
            asChildRowOfTable: {
                hasCurrentFocusParameters: { onCurrentFocusedInnerChanged },
                managedChildParameters: { focusSelf: focusSelfAsChildRow, setTabbableColumnIndex, ...void6 },
                rovingTabIndexChildReturn: { getTabbable, propsUnstable, setTabbable, tabbable, ...void7 },
                ...void5
            },
            asParentRowOfCells: {
                gridNavigationCellParameters,
                linearNavigationReturn: { propsStable: p3, ...void2 },
                managedChildrenParameters: { onChildrenMountChange, ...void1 },
                rovingTabIndexChildParameters: rticp1,
                rovingTabIndexReturn,
                typeaheadNavigationChildParameters: rncp1,
                typeaheadNavigationReturn,
                ...void4
            },
            ...void10
        } = gridNavRet;
    
        const { getTabbableIndex, setTabbableIndex, ...void3 } = rovingTabIndexReturn;
    
    
        const {
            hasCurrentFocusReturn,
            ...void8
        } = useHasCurrentFocus<HTMLTableRowElement>({
            refElementReturn,
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: null,
                onCurrentFocusedInnerChanged
            }
        });
    
        useManagedChild({
            managedChildParameters: {
                focusSelf: focusSelfAsChildRow,
                getElement,
                getTabbable,
                hidden,
                index,
                setTabbable,
                tabbable,
                setTabbableColumnIndex
            },
            managedChildrenReturn: mcr
        })
    
        const {
            managedChildrenReturn,
            ...void9
        } = useManagedChildren<GridChildCellInfo<HTMLTableCellElement>>({
            managedChildrenParameters: {
                onAfterChildLayoutEffect: null,
                onChildrenMountChange: onChildrenMountChange
            }
        });
    
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
        assertEmptyObject(void7);
        assertEmptyObject(void8);
        assertEmptyObject(void9);
        assertEmptyObject(void10);
    
        //const { propsStable: p1 } = linearNavigationReturn;
        const { propsStable: p2 } = typeaheadNavigationReturn;
        const { propsStable: p1 } = hasCurrentFocusReturn;
    
        const { getChildren: getChildren2 } = managedChildrenReturn;
    
        const props = useMergedProps(p1, p2, p3, p4, p5);*/
    const {
        gridNavigationRowParameters,
        managedChildrenReturn: mcr2,
        rovingTabIndexChildParameters,
        typeaheadNavigationChildParameters,
    } = useContext(GridRowContext) as GridRowContext<any, HTMLTableRowElement>;
    const ret = useGridRowDemo<HTMLTableRowElement, HTMLTableCellElement>({
        asChildRowOfTable: {
            gridNavigationRowParameters,
            managedChildParameters: { hidden, index },
            managedChildrenReturn: mcr2,
            rovingTabIndexChildParameters,
            typeaheadNavigationChildParameters: { text: "", ...typeaheadNavigationChildParameters }
        },
        asParentRowOfCells: {
            linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false },
            rovingTabIndexParameters: { initiallyTabbedIndex: 0, onTabbableIndexChange: setTabbableColumn },
            typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 }
        }
    });

    const {
        asChildRowOfTable: { rovingTabIndexChildReturn: { tabbable } },
        context,
        props
    } = ret;

    return (
        <tr {...props}>
            <GridCellContext.Provider value={context}>
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

    /*const {
        rovingTabIndexChildParameters,
        typeaheadNavigationChildParameters,
        gridNavigationCellParameters,
        rovingTabIndexReturn,
        managedChildrenReturn,
        ...void5
    } = useContext(GridCellContext);
    const { refElementReturn } = useRefElement<HTMLTableCellElement>({ refElementParameters: {} });
    const { propsStable: p1, getElement } = refElementReturn;

    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, ...void1 },
        rovingTabIndexChildReturn: { getTabbable, propsUnstable: p2, setTabbable, tabbable, ...void2 },
        ...void3
    } = useGridNavigationCell<HTMLTableCellElement>({
        gridNavigationCellParameters: { ...gridNavigationCellParameters, colSpan: 1 },
        managedChildParameters: { hidden: false, index },
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters: {
            text: "",
            ...typeaheadNavigationChildParameters
        }
    })

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void5);
    const focusSelf = useCallback((e: HTMLTableCellElement) => { e.focus(); }, [])

    const {
        hasCurrentFocusReturn: { propsStable: p3 }
    } = useHasCurrentFocus<HTMLTableCellElement>({
        refElementReturn,
        hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged }
    });

    useManagedChild<GridChildCellInfo<HTMLTableCellElement>>({
        managedChildParameters: { index, focusSelf, getElement, getTabbable, hidden: false, setTabbable, tabbable },
        managedChildrenReturn
    });

    const props = useMergedProps(p1, p2, p3);*/

    const {
        gridNavigationCellParameters,
        managedChildrenReturn,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters
    } = useContext(GridCellContext) as GridCellContext<HTMLTableRowElement, HTMLTableCellElement>;

    const {
        props,
        rovingTabIndexChildReturn: { tabbable }
    } = useGridCellDemo<HTMLTableCellElement>({
        gridNavigationCellParameters: { colSpan: 1, ...gridNavigationCellParameters },
        managedChildParameters: { hidden: false, index },
        managedChildrenReturn,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        typeaheadNavigationChildParameters: { text: "", ...typeaheadNavigationChildParameters }
    });

    const t = (tabbable ? "(Tabbable)" : "(Not tabbable)")

    if (index === 0)
        return <td {...props}>{rowIsTabbable.toString()}</td>
    else {
        if (row < 6 || row % 2 != 0) {
            if (index === 1)
                return <td {...props}>Grid cell #{index + 1} {t}{hiddenText}</td>
            else
                return <td><label><input  {...(props as any)} type="checkbox" /> Test input {t}{hiddenText}</label></td>
        }
        else {
            if (index === 1)
                return <td {...props} colSpan={2}>Grid cell #{index + 1}, span 2 {t}{hiddenText}</td>
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
