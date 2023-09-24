import { createContext } from "preact";
import { StateUpdater, memo, useCallback, useContext, useEffect } from "preact/compat";
import { UseProcessedChildReturnType, UseProcessedChildrenContext } from "../../dist/component-detail/processed-children/use-processed-children.js";
import {
    CompleteListNavigationContext,
    EventDetail,
    GetIndex,
    MultiSelectionChangeEvent,
    UseProcessedChildContext as NormalListChildContext,
    UseCompleteListNavigationChildInfo,
    UseCompleteListNavigationDeclarativeReturnType,
    VNode,

    focus,
    useCompleteListNavigationChildDeclarative,
    useCompleteListNavigationChildren,
    useCompleteListNavigationDeclarative,
    useProcessedChild as useListChild,
    useMemo,
    useMergedProps,
    usePress,
    useRefElement,
    useStableCallback,
    useState
} from "../../dist/index.js";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

function _getDocument() {
    return window.document;
}

const SingleSelectionModeContext = createContext<"activation" | "focus" | "disabled">("focus");
const MultiSelectionModeContext = createContext<"activation" | "focus" | "disabled">("activation");
const UntabbableContext = createContext(false);
const ListNavigationSingleSelectionChildContext = createContext<CompleteListNavigationContext<HTMLLIElement, CustomInfoType>>(null!);
const ListChildContext = createContext<NormalListChildContext<HTMLLIElement, any>>(null!);
const WeirdContext = createContext<UseProcessedChildrenContext>(null!);
export const DemoUseRovingTabIndex = memo(function DemoUseRovingTabIndex() {

    const [multiSelectPercent, setMultiSelectPercent] = useState(0);

    const [singleSelectedIndex, setSingleSelectedIndex] = useState(null as number | null);
    const [singleSelectionMode, setSingleSelectionMode] = useState("focus" as "focus" | "activation" | "disabled");
    const [multiSelectionMode, setMultiSelectionMode] = useState("activation" as "focus" | "activation" | "disabled");
    const [count, setCount] = useState(10);
    let [min, setMin] = useState<number | null>(null);
    let [max, setMax] = useState<number | null>(null);
    const [staggered, setStaggered] = useState<boolean>(false);

    if (!isFinite(min ?? NaN))
        min = null!;
    if (!isFinite(max ?? NaN))
        max = null!;

    const untabbable = false;

    const onSelectionChange = (e: MultiSelectionChangeEvent) => {
        setMultiSelectPercent(e[EventDetail].selectedPercent)
    }

    const r: UseCompleteListNavigationDeclarativeReturnType<HTMLOListElement, HTMLLIElement, CustomInfoType> = useCompleteListNavigationDeclarative<HTMLOListElement, HTMLLIElement, CustomInfoType>({
        "PropNames.RovingTabIndexParameters.onTabbableIndexChange": null,
        "PropNames.RovingTabIndexParameters.untabbable": untabbable,
        "PropNames.RovingTabIndexParameters.focusSelfParent": focus,
        "PropNames.SingleSelectionParameters.onSingleSelectedIndexChange": useStableCallback((e) => { setSingleSelectedIndex(e[EventDetail].selectedIndex) }, []),
        "PropNames.SingleSelectionParameters.singleSelectedIndex": singleSelectedIndex,
        "PropNames.TypeaheadNavigationParameters.collator": null,
        "PropNames.TypeaheadNavigationParameters.noTypeahead": false,
        "PropNames.TypeaheadNavigationParameters.typeaheadTimeout": 1000,
        "PropNames.TypeaheadNavigationParameters.onNavigateTypeahead": null,
        "PropNames.LinearNavigationParameters.disableHomeEndKeys": false,
        "PropNames.LinearNavigationParameters.arrowKeyDirection": "vertical",
        "PropNames.LinearNavigationParameters.navigatePastEnd": "wrap",
        "PropNames.LinearNavigationParameters.navigatePastStart": "wrap",
        "PropNames.LinearNavigationParameters.pageNavigationSize": 0.1,
        "PropNames.LinearNavigationParameters.onNavigateLinear": null,
        "PropNames.PaginatedParameters.paginationMin": min,
        "PropNames.PaginatedParameters.paginationMax": max,
        "PropNames.SingleSelectionParameters.singleSelectionAriaPropName": "aria-selected",
        "PropNames.SingleSelectionParameters.singleSelectionMode": singleSelectionMode,
        "PropNames.MultiSelectionParameters.multiSelectionAriaPropName": "aria-checked",
        "PropNames.MultiSelectionParameters.onSelectionChange": onSelectionChange,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": 0,
        "PropNames.StaggeredParameters.staggered": staggered
    });


    const {
        props,
        contextChildren,
        contextProcessing,
        "PropNames.RovingTabIndexReturn.setTabbableIndex": setTabbableIndex,
        "PropNames.ManagedChildrenReturn.getChildren": getChildren,
        "PropNames.TypeaheadNavigationReturn.typeaheadStatus": typeaheadStatus,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RearrangeableReturn.sort": _sort
    } = r;


    const [staggering, setStaggering] = useState(false);

    return (
        <div className="demo">
            <h2>Keyboard &amp; List Navigation</h2>
            <h3><code>useCompleteListNavigation</code></h3>
            <p>This hook accomplishes a few things:</p>
            <ul>
                <li>Turns a group of widgets into one singular composite widget with only <strong>a single tab stop</strong> shared between them (a "roving" tab stop, because it wanders back and forth).</li>
                <li>Navigation within this composite widget is done via:
                    <ul>
                        <li>Arrow keys (up/down or left/right depending in the orientation you specify)</li>
                        <li>Page Up/Down to jump by a larger amount (either a fixed number or some percentage of the total number of items, as you specify)</li>
                        <li>Home/End to jump to the first or last item</li>
                    </ul>
                </li>
                <li>Items can be marked as "hidden", in which case they are skipped over when navigating, no matter the method. E.G. if Home is pressed but the first item is hidden, the second item is focused instead.</li>
                <li>Items can be marked as "disabled" to prevent selection (with or without also marking them as "hidden", though "hidden" implies "disabled").</li>
                <li>Children can be reordered arbitrarily, including sorting, shuffling, etc. while ensuring coherent navigation regardless.</li>
                <li>The parent's selected index is <strong>uncontrolled</strong> and so it does not re-render itself when the selected index changes (you can easily make it controlled, of course, at the cost of 1 additional render. See <code>useSingleSelectionDeclarative</code> for a shortcut to do exactly that)</li>
                <li>Changing which child is focused or selected only re-renders a maximum of 2 children each time.</li>
                <li>Lists can be nested, and there is no strict requirement on DOM structure (except for sorting/rearranging children, if you use that).
                    <ul><li>If you don't need sorting/rearranging this DOM requirement is <strong>optional</strong>; rearranging requires all children be in one contiguous array of VNodes so that their <code>key</code> props can be manipulated.</li></ul>
                </li>
            </ul>
            <p>The biggest restriction of this method is that every child needs a 0-based numeric index.</p>

            <label># of items<input type="number" value={count} min={0} onInput={e => { e.preventDefault(); setCount(e.currentTarget.valueAsNumber) }} /></label>
            <button onClick={() => shuffle()}>Shuffle</button>
            <button onClick={() => { debugger; reverse() }}>Reverse</button>
            <label>Imperatively set the tabbable index to: <input type="number" onInput={e => { e.preventDefault(); setTabbableIndex(e.currentTarget.valueAsNumber, e, false); }} /></label>
            <label>Imperatively set the selected index to: <input type="number" onInput={e => { e.preventDefault(); setSingleSelectedIndex(e.currentTarget.valueAsNumber); }} /> (currently {singleSelectedIndex})</label>
            <label>Pagination window starts at: <input type="number" value={min ?? undefined} min={0} max={max ?? undefined} onInput={e => { e.preventDefault(); setMin(e.currentTarget.valueAsNumber); }} /></label>
            <label>Pagination window ends at: <input type="number" value={max ?? undefined} min={min ?? undefined} max={count} onInput={e => { e.preventDefault(); setMax(e.currentTarget.valueAsNumber); }} /></label>
            <label>Stagger delay: <input type="checkbox" checked={staggered} onInput={e => { e.preventDefault(); setStaggered(e.currentTarget.checked); }} /></label>
            <label>Single-Selection mode:
                <label><input name="rti-demo-single-selection-mode" type="radio" checked={singleSelectionMode == 'disabled'} onInput={e => { e.preventDefault(); setSingleSelectionMode("disabled"); }} /> Off</label>
                <label><input name="rti-demo-single-selection-mode" type="radio" checked={singleSelectionMode == 'focus'} onInput={e => { e.preventDefault(); setSingleSelectionMode("focus"); }} /> On focus</label>
                <label><input name="rti-demo-single-selection-mode" type="radio" checked={singleSelectionMode == 'activation'} onInput={e => { e.preventDefault(); setSingleSelectionMode("activation"); }} /> On activation (click, tap, Enter, Space, etc.)</label>
            </label>
            <label>Multi-Selection mode:
                <label><input name="rti-demo-multi-selection-mode" type="radio" checked={multiSelectionMode == 'disabled'} onInput={e => { e.preventDefault(); setMultiSelectionMode("disabled"); }} /> Off</label>
                <label><input name="rti-demo-multi-selection-mode" type="radio" checked={multiSelectionMode == 'focus'} onInput={e => { e.preventDefault(); setMultiSelectionMode("focus"); }} /> On focus</label>
                <label><input name="rti-demo-multi-selection-mode" type="radio" checked={multiSelectionMode == 'activation'} onInput={e => { e.preventDefault(); setMultiSelectionMode("activation"); }} /> On activation (click, tap, Enter, Space, etc.)</label>
            </label>

            <div>Staggering status: {staggered ? staggering ? "Staggering..." : "Done staggering" : "Not staggered"}</div>
            {<div>Typeahead status: {typeaheadStatus}</div>}
            {<div>Multi-select: {Math.round(multiSelectPercent * 100 * 10) / 10}%</div>}
            <UntabbableContext.Provider value={untabbable}>
                <SingleSelectionModeContext.Provider value={singleSelectionMode}>
                    <MultiSelectionModeContext.Provider value={multiSelectionMode}>
                        <ListNavigationSingleSelectionChildContext.Provider value={contextChildren}>
                            <WeirdContext.Provider value={contextProcessing}>
                                <ol start={0} {...useMergedProps(...props)}>
                                    <DemoUseRovingTabIndexChildren max={max} min={min} staggered={staggered} count={count} setStaggering={setStaggering} />
                                </ol>
                            </WeirdContext.Provider>
                        </ListNavigationSingleSelectionChildContext.Provider>
                    </MultiSelectionModeContext.Provider>
                </SingleSelectionModeContext.Provider>
            </UntabbableContext.Provider>
        </div>
    );
})

export const DemoUseRovingTabIndexChildren = memo((function DemoUseRovingTabIndexChildren({ count, max, min, staggered, setStaggering }: { setStaggering: StateUpdater<boolean>, count: number, min: number | null, max: number | null, staggered: boolean }) {
    const {
        context,
        "PropNames.PaginatedReturn.refreshPagination": refreshPagination,
        "PropNames.RearrangeableReturn.children": children,
        "PropNames.RearrangeableReturn.indexDemangler": indexDemangler,
        "PropNames.RearrangeableReturn.indexMangler": indexMangler,
        "PropNames.RearrangeableReturn.rearrange": rearrange,
        "PropNames.RearrangeableReturn.reverse": reverse,
        "PropNames.RearrangeableReturn.shuffle": shuffle,
        "PropNames.RearrangeableReturn.sort": sort,
        "PropNames.StaggeredReturn.stillStaggering": stillStaggering
    } = useCompleteListNavigationChildren({
        "PropNames.PaginatedParameters.paginationMax": max,
        "PropNames.PaginatedParameters.paginationMin": min,
        "PropNames.RearrangeableParameters.getIndex": useCallback<GetIndex>((a: VNode) => a.props.index, []),
        "PropNames.RearrangeableParameters.onRearranged": null,
        "PropNames.RearrangeableParameters.compare": null,
        "PropNames.RearrangeableParameters.adjust": null,
        "PropNames.RearrangeableParameters.children": useMemo(() => Array.from((function* () {
            for (let i = 0; i < (count); ++i) {
                yield <DemoUseRovingTabIndexChildOuter index={i} key={i} />
            }
        })()), [count]),
        "PropNames.StaggeredParameters.staggered": staggered,
        context: useContext(WeirdContext)
    })

    useEffect(() => {
        setStaggering(stillStaggering);
    }, [stillStaggering])

    return (
        <ListChildContext.Provider value={context}>{children}</ListChildContext.Provider>
    )
}));

interface CustomInfoType extends UseCompleteListNavigationChildInfo<HTMLLIElement> {
    foo: "bar";
}

const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";


const DemoUseRovingTabIndexChildOuter = memo((function DemoUseRovingTabIndexChildOuter({ index }: { index: number }) {
    const {
        props: propsStable,
        "PropNames.RefElementReturn.getElement": getElement
    } = useRefElement<HTMLLIElement>({
        "PropNames.RefElementParameters.onElementChange": useStableCallback((e, p, r) => {
            onElementChange?.(e, p, r);
        })
    })
    const { managedChildContext, paginatedChildContext, staggeredChildContext } = useContext(ListChildContext) as NormalListChildContext<HTMLLIElement, any>;
    const {
        props,
        "PropNames.RefElementParameters.onElementChange": onElementChange,
        "PropNames.StaggeredChildReturn.hideBecauseStaggered": hideBecauseStaggered,
        "PropNames.PaginatedChildReturn.hideBecausePaginated": hideBecausePaginated

    }: UseProcessedChildReturnType<HTMLLIElement, any> = useListChild<HTMLLIElement>({
        context: { managedChildContext, paginatedChildContext, staggeredChildContext },
        info: { index }
    })
    const c = useMemo(() => <DemoUseRovingTabIndexChild index={index} />, [index]);
    return (
        <li {...useMergedProps(props, propsStable)}>{hideBecausePaginated || hideBecauseStaggered ? "\xA0" : c}</li>
    )
}));

const DemoUseRovingTabIndexChild = memo((function DemoUseRovingTabIndexChild({ index }: { index: number }) {
    if (index == 1)
        return <span>(Item {index} is a <strong>hole in the array</strong> and does not exist)</span>;

    let disabled = (index == 6);
    let hidden = (index == 7);
    if (index == 8) {
        disabled = hidden = true;
    }

    const [multiSelected, setMultiSelected] = useState(false);

    const [randomWord] = useState(() => RandomWords[index]);
    const context = useContext(ListNavigationSingleSelectionChildContext) as CompleteListNavigationContext<HTMLLIElement, CustomInfoType>;
    const focusSelf = useCallback((e: HTMLElement) => { e.focus() }, []);

    const getSortValue = useStableCallback(() => index);

    const {
        propsChild,
        propsTabbable,

        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": onCurrentFocusedInnerChanged,
        //  "PropNames.HasCurrentFocusReturn.getLastFocused": getLastFocused,
        // "PropNames.HasCurrentFocusReturn.getLastFocusedInner": getLastFocusedInner,
        //  "PropNames.ManagedChildReturnType.getChildren": getChildren,
        "PropNames.MultiSelectionChildReturn.getMultiSelected": getMultiSelected,
        //    "PropNames.MultiSelectionChildReturn.multiSelected": multiSelected,
        "PropNames.MultiSelectionParameters.multiSelectionMode": multiSelectionMode,
        "PropNames.PressParameters.excludeSpace": excludeSpace,
        "PropNames.PressParameters.onPressSync": onPressSync,
        "PropNames.RefElementReturn.getElement": getElement,
        "PropNames.RovingTabIndexChildReturn.getTabbable": getTabbable,
        "PropNames.RovingTabIndexChildReturn.tabbable": tabbable,
        "PropNames.SingleSelectionChildReturn.getSingleSelected": getSingleSelected,
        "PropNames.SingleSelectionChildReturn.getSingleSelectedOffset": getSingleSelectedOffset,
        "PropNames.SingleSelectionChildReturn.singleSelected": singleSelected,
        "PropNames.SingleSelectionChildReturn.singleSelectedOffset": singleSelectedOffset,
        "PropNames.SingleSelectionChildReturn.singleSelectionMode": singleSelectionMode,
        "PropNames.TextContentReturn.getTextContent": getTextContent
    } = useCompleteListNavigationChildDeclarative<HTMLLIElement, CustomInfoType>({
        info: { index, focusSelf, foo: "bar", untabbable: hidden },
        context,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedChanged": null,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": null,
        "PropNames.MultiSelectionChildParameters.multiSelected": multiSelected,
        "PropNames.MultiSelectionChildParameters.multiSelectionDisabled": disabled,
        "PropNames.MultiSelectionChildParameters.onMultiSelectChange": null,
        "PropNames.SingleSelectionChildParameters.singleSelectionDisabled": false,
        "PropNames.TextContentParameters.getText": useCallback((e) => { return e?.textContent ?? "" }, []),
        "PropNames.RefElementParameters.onElementChange": null,
        "PropNames.RefElementParameters.onMount": null,
        "PropNames.RefElementParameters.onUnmount": null
        //  textContentParameters: { getText: useCallback((e) => { return e?.textContent ?? "" }, []) },
        //  hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
        //  refElementParameters: { onElementChange: null, onMount: null, onUnmount: null },
        //   multiSelectionChildParameters: { multiSelectionDisabled: disabled },
        //   singleSelectionChildParameters: { singleSelectionDisabled: disabled },
        //   multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange: e => setMultiSelected(e[EventDetail].multiSelected) }
    });

    const {
        props: p2,
        "PropNames.PressReturn.getIsPressing": getIsPressing,
        "PropNames.PressReturn.longPress": longPress,
        "PropNames.PressReturn.pressing": pressing

    } = usePress<HTMLLIElement>({
        "PropNames.PressParameters.focusSelf": focusSelf,
        "PropNames.PressParameters.onPressSync": onPressSync,
        "PropNames.PressParameters.excludeSpace": excludeSpace,
        "PropNames.PressParameters.allowRepeatPresses": false,
        "PropNames.PressParameters.excludeEnter": null,
        "PropNames.PressParameters.excludePointer": null,
        "PropNames.PressParameters.longPressThreshold": null,
        "PropNames.PressParameters.onPressingChange": null,
        "PropNames.RefElementReturn.getElement": getElement
    })

    let s = (singleSelected && multiSelected ? " (single- & multi- selected)" : singleSelected ? " (single-selected)" : multiSelected ? " (multi-selected)" : "");

    const text = `${randomWord} This is item #${index} (offset: ${singleSelected}) ${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${s} (${tabbable ? "Tabbable" : "Not tabbable"})`;

    return (
        <span {...useMergedProps(...propsChild, ...propsTabbable, ...p2)}>{text}<input {...useMergedProps(...propsTabbable, { type: "number" }) as any} style={{ width: "5ch" }} /></span>
    )
}));