import { createContext } from "preact";
import { StateUpdater, memo, useCallback, useContext, useEffect } from "preact/compat";
import { UseProcessedChildReturnType, UseProcessedChildrenContext } from "../../dist/component-detail/processed-children/use-processed-children.js";
import {
    CompleteListNavigationContext,
    EventDetail,
    GetIndex,
    MultiSelectionChangeEvent,
    UseProcessedChildContext as NormalListChildContext,
    PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged,
    PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged,
    PropNames_LinearNavigationParameters_arrowKeyDirection,
    PropNames_LinearNavigationParameters_disableHomeEndKeys,
    PropNames_LinearNavigationParameters_navigatePastEnd,
    PropNames_LinearNavigationParameters_navigatePastStart,
    PropNames_LinearNavigationParameters_onNavigateLinear,
    PropNames_LinearNavigationParameters_pageNavigationSize,
    PropNames_ManagedChildrenReturn_getChildren,
    PropNames_MultiSelectionChildParameters_multiSelected,
    PropNames_MultiSelectionChildParameters_multiSelectionDisabled,
    PropNames_MultiSelectionChildParameters_onMultiSelectChange,
    PropNames_MultiSelectionChildReturn_getMultiSelected,
    PropNames_MultiSelectionParameters_multiSelectionAriaPropName,
    PropNames_MultiSelectionParameters_multiSelectionMode,
    PropNames_MultiSelectionParameters_onSelectionChange,
    PropNames_PaginatedChildReturn_hideBecausePaginated,
    PropNames_PaginatedParameters_paginationMax,
    PropNames_PaginatedParameters_paginationMin,
    PropNames_PaginatedReturn_refreshPagination,
    PropNames_PressParameters_allowRepeatPresses,
    PropNames_PressParameters_excludeEnter,
    PropNames_PressParameters_excludePointer,
    PropNames_PressParameters_excludeSpace,
    PropNames_PressParameters_focusSelf,
    PropNames_PressParameters_longPressThreshold,
    PropNames_PressParameters_onPressSync,
    PropNames_PressParameters_onPressingChange,
    PropNames_PressReturn_getIsPressing,
    PropNames_PressReturn_longPress,
    PropNames_PressReturn_pressing,
    PropNames_RearrangeableParameters_adjust,
    PropNames_RearrangeableParameters_children,
    PropNames_RearrangeableParameters_compare,
    PropNames_RearrangeableParameters_getIndex,
    PropNames_RearrangeableParameters_onRearranged,
    PropNames_RearrangeableReturn_children,
    PropNames_RearrangeableReturn_indexDemangler,
    PropNames_RearrangeableReturn_indexMangler,
    PropNames_RearrangeableReturn_rearrange,
    PropNames_RearrangeableReturn_reverse,
    PropNames_RearrangeableReturn_shuffle,
    PropNames_RearrangeableReturn_sort,
    PropNames_RefElementParameters_onElementChange,
    PropNames_RefElementParameters_onMount,
    PropNames_RefElementParameters_onUnmount,
    PropNames_RefElementReturn_getElement,
    PropNames_RovingTabIndexChildReturn_getTabbable,
    PropNames_RovingTabIndexChildReturn_tabbable,
    PropNames_RovingTabIndexParameters_focusSelfParent,
    PropNames_RovingTabIndexParameters_initiallyTabbedIndex,
    PropNames_RovingTabIndexParameters_onTabbableIndexChange,
    PropNames_RovingTabIndexParameters_untabbable,
    PropNames_RovingTabIndexReturn_setTabbableIndex,
    PropNames_SingleSelectionChildParameters_singleSelectionDisabled,
    PropNames_SingleSelectionChildReturn_getSingleSelected,
    PropNames_SingleSelectionChildReturn_getSingleSelectedOffset,
    PropNames_SingleSelectionChildReturn_singleSelected,
    PropNames_SingleSelectionChildReturn_singleSelectedOffset,
    PropNames_SingleSelectionChildReturn_singleSelectionMode,
    PropNames_SingleSelectionParameters_onSingleSelectedIndexChange,
    PropNames_SingleSelectionParameters_singleSelectedIndex,
    PropNames_SingleSelectionParameters_singleSelectionAriaPropName,
    PropNames_SingleSelectionParameters_singleSelectionMode,
    PropNames_StaggeredChildReturn_hideBecauseStaggered,
    PropNames_StaggeredParameters_staggered,
    PropNames_StaggeredReturn_stillStaggering,
    PropNames_TextContentParameters_getText,
    PropNames_TextContentReturn_getTextContent,
    PropNames_TypeaheadNavigationParameters_collator,
    PropNames_TypeaheadNavigationParameters_noTypeahead,
    PropNames_TypeaheadNavigationParameters_onNavigateTypeahead,
    PropNames_TypeaheadNavigationParameters_typeaheadTimeout,
    PropNames_TypeaheadNavigationReturn_typeaheadStatus,
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
        [PropNames_RovingTabIndexParameters_onTabbableIndexChange]: null,
        [PropNames_RovingTabIndexParameters_untabbable]: untabbable,
        [PropNames_RovingTabIndexParameters_focusSelfParent]: focus,
        [PropNames_SingleSelectionParameters_onSingleSelectedIndexChange]: useStableCallback((e) => { setSingleSelectedIndex(e[EventDetail].selectedIndex) }, []),
        [PropNames_SingleSelectionParameters_singleSelectedIndex]: singleSelectedIndex,
        [PropNames_TypeaheadNavigationParameters_collator]: null,
        [PropNames_TypeaheadNavigationParameters_noTypeahead]: false,
        [PropNames_TypeaheadNavigationParameters_typeaheadTimeout]: 1000,
        [PropNames_TypeaheadNavigationParameters_onNavigateTypeahead]: null,
        [PropNames_LinearNavigationParameters_disableHomeEndKeys]: false,
        [PropNames_LinearNavigationParameters_arrowKeyDirection]: "vertical",
        [PropNames_LinearNavigationParameters_navigatePastEnd]: "wrap",
        [PropNames_LinearNavigationParameters_navigatePastStart]: "wrap",
        [PropNames_LinearNavigationParameters_pageNavigationSize]: 0.1,
        [PropNames_LinearNavigationParameters_onNavigateLinear]: null,
        [PropNames_PaginatedParameters_paginationMin]: min,
        [PropNames_PaginatedParameters_paginationMax]: max,
        [PropNames_SingleSelectionParameters_singleSelectionAriaPropName]: "aria-selected",
        [PropNames_SingleSelectionParameters_singleSelectionMode]: singleSelectionMode,
        [PropNames_MultiSelectionParameters_multiSelectionAriaPropName]: "aria-checked",
        [PropNames_MultiSelectionParameters_onSelectionChange]: onSelectionChange,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_RovingTabIndexParameters_initiallyTabbedIndex]: 0,
        [PropNames_StaggeredParameters_staggered]: staggered
    });


    const {
        props,
        contextChildren,
        contextProcessing,
        [PropNames_RovingTabIndexReturn_setTabbableIndex]: setTabbableIndex,
        [PropNames_ManagedChildrenReturn_getChildren]: getChildren,
        [PropNames_TypeaheadNavigationReturn_typeaheadStatus]: typeaheadStatus,
        [PropNames_RearrangeableReturn_shuffle]: shuffle,
        [PropNames_RearrangeableReturn_reverse]: reverse,
        [PropNames_RearrangeableReturn_sort]: _sort
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
        [PropNames_PaginatedReturn_refreshPagination]: refreshPagination,
        [PropNames_RearrangeableReturn_children]: children,
        [PropNames_RearrangeableReturn_indexDemangler]: indexDemangler,
        [PropNames_RearrangeableReturn_indexMangler]: indexMangler,
        [PropNames_RearrangeableReturn_rearrange]: rearrange,
        [PropNames_RearrangeableReturn_reverse]: reverse,
        [PropNames_RearrangeableReturn_shuffle]: shuffle,
        [PropNames_RearrangeableReturn_sort]: sort,
        [PropNames_StaggeredReturn_stillStaggering]: stillStaggering
    } = useCompleteListNavigationChildren({
        [PropNames_PaginatedParameters_paginationMax]: max,
        [PropNames_PaginatedParameters_paginationMin]: min,
        [PropNames_RearrangeableParameters_getIndex]: useCallback<GetIndex>((a: VNode) => a.props.index, []),
        [PropNames_RearrangeableParameters_onRearranged]: null,
        [PropNames_RearrangeableParameters_compare]: null,
        [PropNames_RearrangeableParameters_adjust]: null,
        [PropNames_RearrangeableParameters_children]: useMemo(() => Array.from((function* () {
            for (let i = 0; i < (count); ++i) {
                yield <DemoUseRovingTabIndexChildOuter index={i} key={i} />
            }
        })()), [count]),
        [PropNames_StaggeredParameters_staggered]: staggered,
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
        [PropNames_RefElementReturn_getElement]: getElement
    } = useRefElement<HTMLLIElement>({
        [PropNames_RefElementParameters_onElementChange]: useStableCallback((e, p, r) => {
            onElementChange?.(e, p, r);
        })
    })
    const { managedChildContext, paginatedChildContext, staggeredChildContext } = useContext(ListChildContext) as NormalListChildContext<HTMLLIElement, any>;
    const {
        props,
        [PropNames_RefElementParameters_onElementChange]: onElementChange,
        [PropNames_StaggeredChildReturn_hideBecauseStaggered]: hideBecauseStaggered,
        [PropNames_PaginatedChildReturn_hideBecausePaginated]: hideBecausePaginated

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

        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: onCurrentFocusedInnerChanged,
        //  [PropNames_HasCurrentFocusReturn_getLastFocused]: getLastFocused,
        // [PropNames_HasCurrentFocusReturn_getLastFocusedInner]: getLastFocusedInner,
        //  [PropNames_ManagedChildReturnType_getChildren]: getChildren,
        [PropNames_MultiSelectionChildReturn_getMultiSelected]: getMultiSelected,
        //    [PropNames_MultiSelectionChildReturn_multiSelected]: multiSelected,
        [PropNames_MultiSelectionParameters_multiSelectionMode]: multiSelectionMode,
        [PropNames_PressParameters_excludeSpace]: excludeSpace,
        [PropNames_PressParameters_onPressSync]: onPressSync,
        [PropNames_RefElementReturn_getElement]: getElement,
        [PropNames_RovingTabIndexChildReturn_getTabbable]: getTabbable,
        [PropNames_RovingTabIndexChildReturn_tabbable]: tabbable,
        [PropNames_SingleSelectionChildReturn_getSingleSelected]: getSingleSelected,
        [PropNames_SingleSelectionChildReturn_getSingleSelectedOffset]: getSingleSelectedOffset,
        [PropNames_SingleSelectionChildReturn_singleSelected]: singleSelected,
        [PropNames_SingleSelectionChildReturn_singleSelectedOffset]: singleSelectedOffset,
        [PropNames_SingleSelectionChildReturn_singleSelectionMode]: singleSelectionMode,
        [PropNames_TextContentReturn_getTextContent]: getTextContent
    } = useCompleteListNavigationChildDeclarative<HTMLLIElement, CustomInfoType>({
        info: { index, focusSelf, foo: "bar", untabbable: hidden },
        context,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedChanged]: null,
        [PropNames_HasCurrentFocusParameters_onCurrentFocusedInnerChanged]: null,
        [PropNames_MultiSelectionChildParameters_multiSelected]: multiSelected,
        [PropNames_MultiSelectionChildParameters_multiSelectionDisabled]: disabled,
        [PropNames_MultiSelectionChildParameters_onMultiSelectChange]: null,
        [PropNames_SingleSelectionChildParameters_singleSelectionDisabled]: false,
        [PropNames_TextContentParameters_getText]: useCallback((e) => { return e?.textContent ?? "" }, []),
        [PropNames_RefElementParameters_onElementChange]: null,
        [PropNames_RefElementParameters_onMount]: null,
        [PropNames_RefElementParameters_onUnmount]: null
        //  textContentParameters: { getText: useCallback((e) => { return e?.textContent ?? "" }, []) },
        //  hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
        //  refElementParameters: { onElementChange: null, onMount: null, onUnmount: null },
        //   multiSelectionChildParameters: { multiSelectionDisabled: disabled },
        //   singleSelectionChildParameters: { singleSelectionDisabled: disabled },
        //   multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange: e => setMultiSelected(e[EventDetail].multiSelected) }
    });

    const {
        props: p2,
        [PropNames_PressReturn_getIsPressing]: getIsPressing,
        [PropNames_PressReturn_longPress]: longPress,
        [PropNames_PressReturn_pressing]: pressing

    } = usePress<HTMLLIElement>({
        [PropNames_PressParameters_focusSelf]: focusSelf,
        [PropNames_PressParameters_onPressSync]: onPressSync,
        [PropNames_PressParameters_excludeSpace]: excludeSpace,
        [PropNames_PressParameters_allowRepeatPresses]: false,
        [PropNames_PressParameters_excludeEnter]: null,
        [PropNames_PressParameters_excludePointer]: null,
        [PropNames_PressParameters_longPressThreshold]: null,
        [PropNames_PressParameters_onPressingChange]: null,
        [PropNames_RefElementReturn_getElement]: getElement
    })

    let s = (singleSelected && multiSelected ? " (single- & multi- selected)" : singleSelected ? " (single-selected)" : multiSelected ? " (multi-selected)" : "");

    const text = `${randomWord} This is item #${index} (offset: ${singleSelected}) ${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${s} (${tabbable ? "Tabbable" : "Not tabbable"})`;

    return (
        <span {...useMergedProps(...propsChild, ...propsTabbable, ...p2)}>{text}<input {...useMergedProps(...propsTabbable, { type: "number" }) as any} style={{ width: "5ch" }} /></span>
    )
}));