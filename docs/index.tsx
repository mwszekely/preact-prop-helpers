import { createContext, render } from "preact";
import { memo } from "preact/compat";
import { useContext, useRef } from "preact/hooks";
import { ElementSize, EventType, MouseEventType, UseChildrenHaveFocusChildParameters, UseManagedChildrenContext, UseStaggeredChildContext, UseStaggeredChildrenInfo, useAnimationFrame, useAsyncHandler, useChildrenHaveFocus, useChildrenHaveFocusChild, useDraggable, useDroppable, useElementSize, useFocusTrap, useGlobalHandler, useHasCurrentFocus, useHasLastFocus, useInterval, useManagedChild, useManagedChildren, useMergedProps, usePortalChildren, usePress, useRandomDualIds, useRefElement, useStableCallback, useStaggeredChild, useStaggeredChildren, useState } from "../dist/index.js";
import { DemoUseGrid } from "./demos/use-grid.js";
import { DemoUseInterval } from "./demos/use-interval.js";
import { DemoUseModal } from "./demos/use-modal.js";
import { DemoUseRovingTabIndex } from "./demos/use-roving-tab-index.js";
import { DemoUseTimeout } from "./demos/use-timeout.js";

import untypedJson from "./api.json";
import { ApiBlock, ApiPackage, ApiParamBlockSectionNode, MemberIdentifier, MemberReference } from "./json-types.js";

const json = untypedJson as ApiPackage;



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
            {dropError ? <div>{dropError instanceof Error ? dropError.message : JSON.stringify(dropError)}</div> : null}
        </div>
    )
}

const DemoUseDraggable = () => {
    const { propsUnstable: props } = useDraggable<HTMLDivElement>({ data: { "text/plain": "This is custom draggable content of type text/plain." }, dragImage: null, dragImageXOffset: null, dragImageYOffset: null, effectAllowed: null });


    return (
        <div {...useMergedProps(props, { className: "demo" })}>
            Draggable content
        </div>)
}

const ChildrenHaveFocusContext = createContext<UseChildrenHaveFocusChildParameters<HTMLDivElement>["context"]>(null!);
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
    const { context } = useChildrenHaveFocus<HTMLDivElement>({ childrenHaveFocusParameters: { onCompositeFocusChange: setAnyFocused } });


    return (
        <div {...useMergedProps({}, { className: "demo" })}>
            <h2>useChildrenHaveFocus</h2>
            <p>If you want to see if any of your children have focus, the easiest way is to just attach a <code>focusIn</code> handler to the parent DOM node. But what if you don't have just one single parent DOM node? This hook lets you coordinate all the children to give you that information as if you were able to take that easy parent node route.</p>
            <div><label><input type="number" min={0} value={minChildCount} onInput={e => { e.preventDefault(); setMinChildCount(e.currentTarget.valueAsNumber) }} /> Min # of children</label></div>
            <div><label><input type="number" min={minChildCount} value={maxChildCount} onInput={e => { e.preventDefault(); setMaxChildCount(e.currentTarget.valueAsNumber) }} /> Max # of children</label></div>
            <div>Current # of children: {currentChildCount}</div>
            <ChildrenHaveFocusContext.Provider value={context}>
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
    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged } } = useChildrenHaveFocusChild<HTMLDivElement>({ context: useContext(ChildrenHaveFocusContext) });
    const { refElementReturn, propsStable } = useRefElement<HTMLDivElement>({ refElementParameters: {} })
    const { hasCurrentFocusReturn } = useHasCurrentFocus({ hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged }, refElementReturn });
    return (
        <div tabIndex={0} {...useMergedProps(propsStable, hasCurrentFocusReturn.propsStable)}>
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

    const { propsStable } = useElementSize<HTMLDivElement>({
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

    const { propsStable, refElementReturn } = useRefElement<HTMLDivElement>({})
    const { props } = useFocusTrap<HTMLDivElement, HTMLDivElement>({
        focusTrapParameters: {
            trapActive: active,
            onlyMoveFocus: false,
            focusOpener: e => e?.focus(),
            focusPopup: (e, f) => f()?.focus(),
        },
        refElementReturn
    });
    //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });

    const divProps = useMergedProps(props, propsStable, { ref: undefined, className: "focus-trap-demo" });
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

    const asyncOnClick = ((_v: void, _e: MouseEventType<HTMLButtonElement>) => new Promise<void>((resolve, reject) => window.setTimeout(() => getShouldThrow() ? reject() : resolve(), timeout)));
    const {
        callCount,
        settleCount,
        hasCapture,
        syncHandler,
        pending,
        hasError,
        rejectCount,
        resolveCount
    } = useAsyncHandler<MouseEventType<HTMLButtonElement>, void>({
        asyncHandler: asyncOnClick,
        capture: () => { },
        debounce: debounce == 0 ? undefined : debounce,
        throttle: null
    });

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
    } = useAsyncHandler<EventType<HTMLInputElement, Event>, string>({
        asyncHandler: onInputAsync,
        capture: (e: EventType<HTMLInputElement, Event>) => { e.preventDefault(); return e.currentTarget.value },
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
    const { refElementReturn, propsStable: p2 } = useRefElement<HTMLDivElement>({ refElementParameters: { onElementChange: undefined } });
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


function DemoLabel() {
    const { propsInput, propsLabel } = useRandomDualIds<HTMLInputElement, HTMLLabelElement>({ randomIdInputParameters: { prefix: "input-", otherReferencerProp: "for" }, randomIdLabelParameters: { prefix: "label-", otherReferencerProp: "aria-labelledby" as never } })
    return (
        <div className="demo">
            <h2>Labels</h2>
            <input {...propsInput} />
            <label {...propsLabel}>Label</label>
        </div>
    )
}

function DemoPress({ remaining }: { remaining: number }) {

    const [count, setCount] = useState<number>(0);
    const { refElementReturn, propsStable: p1 } = useRefElement<HTMLDivElement>({ refElementParameters: {} })
    const { props: p2, pressReturn: { pressing, longPress } } = usePress<HTMLDivElement>({
        pressParameters: { focusSelf: e => { e.focus() }, longPressThreshold: 1000, onPressSync: () => { setCount((c: number) => ++c) }, allowRepeatPresses: false, excludeEnter: null, excludePointer: null, excludeSpace: null, onPressingChange: null },
        refElementReturn
    })
    return (
        <div className="demo">
            <h2>Press</h2>
            <div>Press count: {count}</div>
            <div>Active: {pressing.toString()}</div>
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

function DemoPortalChildrenChild() {
    console.log("Render portal child");
    return <p>Portal child</p>
}

function DemoPortalChildren() {
    const [element, setElement] = useState<HTMLDivElement | null>(null);
    const { children, pushChild, removeChild, updateChild } = usePortalChildren({ target: element });
    return (
        <div className="demo">
            <h2>Portal children</h2>
            <button onClick={() => pushChild(<DemoPortalChildrenChild />)}>Push child</button>
            {children}
            <div id="demo-portal-target" ref={setElement} />
        </div>
    )
}

function DemoGlobalHandler() {
    const [count, setCount] = useState(10);
    const [mode, setMode] = useState<"grouped" | "single" | null>("single");
    const [testTime, setTestTime] = useState("")
    return (
        <div className="demo">
            <div>Global event handlers:</div>
            <label># of event handlers<input type="number" value={count} min={0} onInput={e => { e.preventDefault(); setCount(e.currentTarget.valueAsNumber) }} /></label>
            <div>
                <label><input onInput={e => { e.preventDefault(); if (e.currentTarget.checked) setMode("grouped"); }} type="radio" name="global-handler-mode" /> Grouped</label>
                <label><input onInput={e => { e.preventDefault(); if (e.currentTarget.checked) setMode("single"); }} type="radio" name="global-handler-mode" /> Single</label>
                <label><input onInput={e => { e.preventDefault(); if (e.currentTarget.checked) setMode(null); }} type="radio" name="global-handler-mode" /> Off</label>
            </div>

            <button id="global-handler-test" onClick={() => {
                const now = new Date();
                document.getElementById("global-handler-test2")?.click();
                const then = new Date();
                setTestTime(((+then - +now) / 1000) + "s passed")
            }}>Run test</button>
            <button id="global-handler-test2">Run test 2</button>
            <div>{testTime}</div>

            <DemoGlobalHandlerChildren count={count} mode={mode} key={mode} />
        </div>
    )
}

const DemoGlobalHandlerChildren = memo(function DemoGlobalHandlerChildren({ count, mode }: { count: number, mode: "grouped" | "single" | null }) {
    return (
        <>

            {[...(function* () {
                for (let i = 0; i < count; ++i) {
                    yield <DemoGlobalHandlerChild key={i} mode={mode} target={window} />
                }
            })()]}
        </>
    )
})

const DemoGlobalHandlerChild = memo(function DemoGlobalHandlerChild({ mode, target }: { target: Window | Document, mode: "grouped" | "single" | null }) {

    useGlobalHandler(target, "click", mode == null ? null : (e: MouseEventType<HTMLButtonElement>) => {
        if ((e.target as Element | null)?.id != "global-handler-test2")
            return;
        (window as any)._demo_event = ((window as any)._demo_event || 0) + 1
    }, {}, mode || "grouped");

    return <div hidden />;
})

const StaggeredContext = createContext<UseManagedChildrenContext<UseStaggeredChildrenInfo<HTMLDivElement>> & UseStaggeredChildContext>(null!);

const DemoStaggered = memo(() => {
    const [staggered, setStaggered] = useState(false);
    const [checked, setChecked] = useState(false);
    const [childCount, setChildCount] = useState(100);
    const { context: mcc, managedChildrenReturn } = useManagedChildren<UseStaggeredChildrenInfo<HTMLDivElement>>({ managedChildrenParameters: {} })
    const { context: scc, staggeredChildrenReturn } = useStaggeredChildren({ managedChildrenReturn, staggeredChildrenParameters: { staggered } })
    return (
        <StaggeredContext.Provider value={{ ...mcc, ...scc }}>
            <div class="demo">
                <label><input type="checkbox" checked={checked} onInput={e => { e.preventDefault(); setChecked(e.currentTarget.checked) }} /> Children mounted</label>
                <label><input type="checkbox" checked={staggered} onInput={e => { e.preventDefault(); setStaggered(e.currentTarget.checked) }} /> Children Staggered</label>
                <label><input type="number" value={childCount} onInput={e => { e.preventDefault(); setChildCount(e.currentTarget.valueAsNumber) }} /> # of children</label>
                <div>
                    <div>Status: {staggered ? staggeredChildrenReturn.stillStaggering ? "staggering" : "done staggering" : "(not staggering)"}</div>
                    <div style="display:flex;flex-wrap: wrap;">{checked && <DemoStaggeredChildren childCount={childCount} />}</div>
                </div>
            </div>
        </StaggeredContext.Provider>
    )
})

const DemoStaggeredChildren = memo(({ childCount }: { childCount: number }) => {
    return (
        <>
            {Array.from(function* () {
                for (let i = 0; i < childCount; ++i) {
                    yield <DemoStaggeredChild index={i} key={i} />
                }
            }())}
        </>
    )
})

const DemoStaggeredChild = memo(({ index }: { index: number }) => {
    const context = useContext(StaggeredContext);
    const { info, props, staggeredChildReturn: { hideBecauseStaggered, parentIsStaggered } } = useStaggeredChild<HTMLDivElement>({ context: context, info: { index } });
    const { managedChildReturn } = useManagedChild<UseStaggeredChildrenInfo<HTMLDivElement>>({ context, info: { ...info, index } });

    return (
        <div {...useMergedProps(props, { style: hideBecauseStaggered ? { opacity: 0.25 } : {} })}>Child #{index}{parentIsStaggered ? hideBecauseStaggered ? "(pending)" : "" : "(not staggered)"}</div>
    )
})

const RenderApiBlock = (node: ApiBlock["content"]["nodes"][number] & { omitSoftBreaks?: boolean }) => {
    switch (node.kind) {
        case "Paragraph": return <p>{node.nodes.map(node => {
            return <RenderApiBlockInner {...node} />
        })}</p>
        case "FencedCode":
            return <span class={`fenced-code fenced-code-lang-${node.language}`}>{node.code}</span>
    }
}

const RenderApiBlockInner = (node: ApiParamBlockSectionNode & { omitSoftBreaks?: boolean }) => {
    switch (node.kind) {
        case "PlainText": return <>{node.text}</>;
        case "CodeSpan": return <span class="code-span">{node.code}</span>;
        case "FencedCode": return <span class={`fenced-code fenced-code-lang-${node.language}`}>{node.code}</span>;
        case "ErrorText": return <span class="error-text"><span class="error-text-message">{node.errorMessage}</span><span class="error-location">{node.errorLocation}</span></span>;
        case "LinkTag": return <span class="link-tag">{node.codeDestination.memberReferences.map(ref => <RenderMemberReference {...ref} />)}</span>;
        case "SoftBreak": return node.omitSoftBreaks ? null : <br />;
    }
}

const RenderMemberReference = ({ hasDot, kind, memberIdentifier }: MemberReference) => {

    return (
        <>
            {hasDot ? "." : ""}
            <RenderMemberIdentifier {...memberIdentifier} />
        </>
    )
}

const RenderMemberIdentifier = ({ hasQuotes, identifier, kind }: MemberIdentifier) => {
    return (
        <>{hasQuotes ? "\"" : ""}{identifier}{hasQuotes ? "\"" : ""}</>
    )
}
/*
const FullReference = () => {
    json.entryPoints[0].
}*/

const Component = () => {

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
        <DemoGlobalHandler />
        <hr />
        <DemoPortalChildren />
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
        <DemoStaggered />
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
