import { createContext } from "preact";
import { memo, useCallback, useContext } from "preact/compat";
import { CompleteListNavigationContext, EventDetail, GetIndex, UseCompleteListNavigationChildInfo, UseCompleteListNavigationDeclarativeReturnType, VNode, useCompleteListNavigationChild, useCompleteListNavigationDeclarative, useMergedProps, usePress, useStableCallback, useState } from "../../dist/index.js";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

function _getDocument() {
    return window.document;
}

const SelectionModeContext = createContext<"activation" | "focus">("activation");
const UntabbableContext = createContext(false);
const ListNavigationSingleSelectionChildContext = createContext<CompleteListNavigationContext<HTMLOListElement, HTMLLIElement, CustomInfoType>>(null!)
export const DemoUseRovingTabIndex = memo(() => {

    const [selectedIndex, setSelectedIndex] = useState(null as number | null);
    const [selectionMode, setSelectionMode] = useState("activation" as "focus" | "activation");
    const [count, setCount] = useState(10);
    let [min, setMin] = useState<number | null>(null);
    let [max, setMax] = useState<number | null>(null);
    const [staggered, setStaggered] = useState<boolean>(false);

    if (!isFinite(min ?? NaN))
        min = null!;
    if (!isFinite(max ?? NaN))
        max = null!;

    const untabbable = false;

    const r: UseCompleteListNavigationDeclarativeReturnType<HTMLOListElement, HTMLLIElement, CustomInfoType> = useCompleteListNavigationDeclarative<HTMLOListElement, HTMLLIElement, CustomInfoType>({
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable },
        singleSelectionDeclarativeParameters: { selectedIndex, onSelectedIndexChange: useStableCallback((e) => { setSelectedIndex(e[EventDetail].selectedIndex) }, []) },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 },
        linearNavigationParameters: { disableHomeEndKeys: false, arrowKeyDirection: "vertical", navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1 },
        rearrangeableChildrenParameters: {
            getIndex: useCallback<GetIndex>((a: VNode) => a.props.index, []),
        },
        paginatedChildrenParameters: { paginationMin: min, paginationMax: max },
        sortableChildrenParameters: { compare: useCallback((rhs: CustomInfoType, lhs: CustomInfoType) => { return lhs.index - rhs.index }, []) },
        staggeredChildrenParameters: { staggered },
        singleSelectionParameters: { ariaPropName: "aria-selected", selectionMode }
    });


    const {
        props,
        context,
        rovingTabIndexReturn: { setTabbableIndex },
        managedChildrenReturn: { getChildren },
        typeaheadNavigationReturn: { typeaheadStatus },
        rearrangeableChildrenReturn: { useRearrangedChildren, shuffle, reverse }
        //        rearrangeableChildrenReturn: { useRearrangedChildren: useSortableProps, shuffle }
    } = r;
    //useSingleSelectionDeclarative({ singleSelectionReturn: {  changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex } });



    const jsxChildren = Array.from((function* () {
        for (let i = 0; i < (count); ++i) {
            yield <DemoUseRovingTabIndexChild index={i} key={i} />
        }
    })());

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
            <label>Imperatively set the selected index to: <input type="number" onInput={e => { e.preventDefault(); setSelectedIndex(e.currentTarget.valueAsNumber); }} /> (currently {selectedIndex})</label>
            <label>Pagination window starts at: <input type="number" value={min ?? undefined} min={0} max={max ?? undefined} onInput={e => { e.preventDefault(); setMin(e.currentTarget.valueAsNumber); }} /></label>
            <label>Pagination window ends at: <input type="number" value={max ?? undefined} min={min ?? undefined} max={count} onInput={e => { e.preventDefault(); setMax(e.currentTarget.valueAsNumber); }} /></label>
            <label>Stagger delay: <input type="checkbox" checked={staggered} onInput={e => { e.preventDefault(); setStaggered(e.currentTarget.checked); }} /></label>
            <label>Selection mode:
                <label><input name="rti-demo-selection-mode" type="radio" checked={selectionMode == 'focus'} onInput={e => { e.preventDefault(); setSelectionMode("focus"); }} /> On focus</label>
                <label><input name="rti-demo-selection-mode" type="radio" checked={selectionMode == 'activation'} onInput={e => { e.preventDefault(); setSelectionMode("activation"); }} /> On activation (click, tap, Enter, Space, etc.)</label>
            </label>

            <UntabbableContext.Provider value={untabbable}>
                <SelectionModeContext.Provider value={selectionMode}>
                    <ListNavigationSingleSelectionChildContext.Provider value={context}>
                        <ol start={0} {...props}>{useRearrangedChildren(jsxChildren)}</ol>
                    </ListNavigationSingleSelectionChildContext.Provider></SelectionModeContext.Provider>
            </UntabbableContext.Provider>
            {<div>Typeahead status: {typeaheadStatus}</div>}
        </div>
    );
})

interface CustomInfoType extends UseCompleteListNavigationChildInfo<HTMLLIElement> {
    foo: "bar";
}

const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseRovingTabIndexChild = memo((({ index }: { index: number }) => {
    if (index == 1)
        return <li>(Item {index} is a <strong>hole in the array</strong> and does not exist)</li>;

    let disabled = (index == 6);
    let hidden = (index == 7);
    if (index == 8) {
        disabled = hidden = true;
    }
    const [randomWord] = useState(() => RandomWords[index]);
    const context = useContext(ListNavigationSingleSelectionChildContext) as CompleteListNavigationContext<HTMLOListElement, HTMLLIElement, CustomInfoType>;
    const focusSelf = useCallback((e: HTMLElement) => { e.focus() }, []);

    const getSortValue = useStableCallback(() => index);

    const {
        props,
        rovingTabIndexChildReturn: { tabbable },
        singleSelectionChildReturn: { selected, selectedOffset, setThisOneSelected },
        paginatedChildReturn: { hideBecausePaginated },
        staggeredChildReturn: { hideBecauseStaggered },
        refElementReturn
    } = useCompleteListNavigationChild<HTMLLIElement, CustomInfoType>({
        info: { index, focusSelf, foo: "bar", untabbable: hidden, unselectable: disabled },
        sortableChildParameters: { getSortValue },
        pressParameters: { onPressSync: null, focusSelf },
        context,
        textContentParameters: { getText: useCallback((e) => { return e?.textContent ?? "" }, []) }
    });

    const text = `${randomWord} This is item #${index} (offset: ${selectedOffset}) ${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${selected ? " (selected)" : " (not selected)"} (${tabbable ? "Tabbable" : "Not tabbable"})`;

    return (
        <li {...props} style={{ opacity: hideBecausePaginated ? 0.25 : 1, transform: `translateX(${hideBecauseStaggered ? "50%" : "0%"})` }}>{text}<input {...useMergedProps({ type: "number", tabIndex: props.tabIndex }) as any} style={{ width: "5ch" }} /></li>
    )
}));