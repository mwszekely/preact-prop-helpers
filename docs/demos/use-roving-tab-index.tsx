import { createContext, VNode } from "preact";
import { memo, useCallback, useContext } from "preact/compat";
import { GetIndex, useMergedProps, usePress, useStableCallback } from "../../index";

import { useState } from "../../preact-extensions/use-state";

import { CompleteListNavigationContext, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationReturnType } from "../..";
import { UseCompleteListNavigationChildInfo } from "../../component-use/use-list-navigation-complete";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

function _getDocument() {
    return window.document;
}

const ListNavigationSingleSelectionChildContext = createContext<CompleteListNavigationContext<HTMLOListElement, HTMLLIElement, CustomInfoType>>(null!)
export const DemoUseRovingTabIndex = memo(() => {


    const [selectionMode, setSelectionMode] = useState("activation" as "focus" | "activation");
    const [count, setCount] = useState(10);
    let [min, setMin] = useState<number | null>(null);
    let [max, setMax] = useState<number | null>(null);
    const [staggered, setStaggered] = useState<boolean>(false);
    // const [selectedIndex, _setLocalSelectedIndex] = useState<number | null>(0);
    // const [tabbableIndex, _setLocalTabbableIndex] = useState<number | null>(0);

    if (!isFinite(min ?? NaN))
        min = null!;
    if (!isFinite(max ?? NaN))
        max = null!;


    const r: UseCompleteListNavigationReturnType<HTMLOListElement, HTMLLIElement, CustomInfoType> = useCompleteListNavigation<HTMLOListElement, HTMLLIElement, CustomInfoType>({
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        singleSelectionParameters: { initiallySelectedIndex: 0, onSelectedIndexChange: useStableCallback(newIndex => { /*setLocalSelectedIndex(newIndex);*/ changeSelectedIndex(newIndex); }) },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 },
        linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false, navigationDirection: "vertical", navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1 },
        rearrangeableChildrenParameters: {
            getIndex: useCallback<GetIndex<{ index: number }>>((a: VNode<{ index: number }>) => a.props.index, []),
        },
        paginatedChildrenParameters: { paginationMin: min, paginationMax: max },
        sortableChildrenParameters: { compare: useCallback((rhs: CustomInfoType, lhs: CustomInfoType) => { return lhs.index - rhs.index }, []) },
        staggeredChildrenParameters: { staggered }
    });


    const {
        props,
        context,
        rovingTabIndexReturn: { setTabbableIndex },
        singleSelectionReturn: { changeSelectedIndex },
        managedChildrenReturn: { getChildren },
        typeaheadNavigationReturn: { typeaheadStatus },
        rearrangeableChildrenReturn: { useRearrangedChildren, shuffle }
        //        rearrangeableChildrenReturn: { useRearrangedChildren: useSortableProps, shuffle }
    } = r;
    //useSingleSelectionDeclarative({ singleSelectionReturn: {  changeSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex } });
    const children = getChildren();


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
            <button onClick={() => shuffle(children)}>Shuffle</button>
            <label>Imperatively set the tabbable index to: <input type="number" onInput={e => { e.preventDefault(); setTabbableIndex(e.currentTarget.valueAsNumber, e, false); }} /></label>
            <label>Imperatively set the selected index to: <input type="number" onInput={e => { e.preventDefault(); changeSelectedIndex(e.currentTarget.valueAsNumber); }} /></label>
            <label>Pagination window starts at: <input type="number" value={min ?? undefined} min={0} max={max ?? undefined} onInput={e => { e.preventDefault(); setMin(e.currentTarget.valueAsNumber); }} /></label>
            <label>Pagination window ends at: <input type="number" value={max ?? undefined} min={min ?? undefined} max={count} onInput={e => { e.preventDefault(); setMax(e.currentTarget.valueAsNumber); }} /></label>
            <label>Stagger delay: <input type="checkbox" checked={staggered} onInput={e => { e.preventDefault(); setStaggered(e.currentTarget.checked); }} /></label>
            <label>Selection mode:
                <label><input name="rti-demo-selection-mode" type="radio" checked={selectionMode == 'focus'} onInput={e => { e.preventDefault(); setSelectionMode("focus"); }} /> On focus</label>
                <label><input name="rti-demo-selection-mode" type="radio" checked={selectionMode == 'activation'} onInput={e => { e.preventDefault(); setSelectionMode("activation"); }} /> On activation (click, tap, Enter, Space, etc.)</label>
            </label>

            <SelectionModeContext.Provider value={selectionMode}>
                <ListNavigationSingleSelectionChildContext.Provider value={context}>
                    <ol {...props}>{useRearrangedChildren(jsxChildren)}</ol>
                </ListNavigationSingleSelectionChildContext.Provider>
            </SelectionModeContext.Provider>
            {<div>Typeahead status: {typeaheadStatus}</div>}
        </div>
    );
})

interface CustomInfoType extends UseCompleteListNavigationChildInfo<HTMLLIElement> {
    foo: "bar";
}

const SelectionModeContext = createContext("focus" as "focus" | "activation");
const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseRovingTabIndexChild = memo((({ index }: { index: number }) => {
    if (index == 4)
        return null;

    const selectionMode = useContext(SelectionModeContext);
    let disabled = (index == 6);
    let hidden = (index == 7);
    if (index == 8) {
        disabled = hidden = true;
    }
    const [randomWord] = useState(() => RandomWords[index/*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
    const context = useContext(ListNavigationSingleSelectionChildContext) as CompleteListNavigationContext<HTMLOListElement, HTMLLIElement, CustomInfoType>;
    const focusSelf = useCallback((e: HTMLElement) => { e.focus() }, []);
    // const { refElementReturn } = useRefElement<HTMLLIElement>({ refElementParameters: { onElementChange: undefined } });
    //const { getElement, propsStable: p3 } = refElementReturn;

    const getSortValue = useStableCallback(() => index);

    const {
        props,
        rovingTabIndexChildReturn: { tabbable, propsUnstable: p2 },
        singleSelectionChildReturn: { selected, selectedOffset },
        paginatedChildReturn: { hideBecausePaginated },
        staggeredChildReturn: { hideBecauseStaggered },
        pressParameters,
        refElementReturn
    } = useCompleteListNavigationChild<HTMLLIElement, CustomInfoType, never>({
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden },
        sortableChildParameters: { getSortValue },
        singleSelectionChildParameters: { ariaPropName: "aria-selected", selectionMode, disabled },
        completeListNavigationChildParameters: { focusSelf, foo: "bar" },
        context,
        textContentParameters: { getText: useCallback((e) => { return e?.textContent ?? "" }, []) }
    });

    const { pressReturn } = usePress<HTMLLIElement>({
        refElementReturn,
        pressParameters: { ...pressParameters, focusSelf },
    });

    const props2 = useMergedProps(props, pressReturn.propsUnstable);

    const text = `${randomWord} This is item #${index} (offset: ${selectedOffset}) ${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${selected ? " (selected)" : " (not selected)"} (${tabbable ? "Tabbable" : "Not tabbable"})`;

    /*
        const {
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, ...void5 },
            managedChildParameters: { getSelected, selected, setSelected, ...void4 },
            pressParameters: { onPressSync, ...void3 },
            rovingTabIndexChildReturn: { setTabbable, getTabbable, propsUnstable: p2, tabbable, ...void2 },
            singleSelectionChildReturn: { propsUnstable: p4, ...void1 },
            ...void6
        } = useListNavigationSingleSelectionChild<HTMLLIElement>({
            managedChildParameters: { hidden, index, disabled },
            rovingTabIndexChildParameters: rovingTabIndexChildParameters,
            rovingTabIndexReturn,
            singleSelectionChildParameters: { ariaPropName: "aria-selected", selectionMode },
            singleSelectionReturn,
            typeaheadNavigationChildParameters: { text, ...typeaheadNavigationChildParameters }
        });
    
        const {
            pressReturn: { propsStable: p5 }
        } = usePress<HTMLLIElement>({
            pressParameters: { exclude: {}, focusSelf, onPressSync, onPseudoActiveStart: null, onPseudoActiveStop: null },
            refElementReturn
        })
    
        useManagedChild<UseListNavigationSingleSelectionChildInfo<HTMLLIElement>>({
            managedChildParameters: { index, focusSelf, getElement, getSelected, getTabbable, hidden, selected, setSelected, setTabbable, tabbable, disabled },
            managedChildrenReturn
        });
    
        assertEmptyObject(void1);
        assertEmptyObject(void2);
        assertEmptyObject(void3);
        assertEmptyObject(void4);
        assertEmptyObject(void5);
        assertEmptyObject(void6);
    
        const {
            hasCurrentFocusReturn: { propsStable: p6 }
        } = useHasCurrentFocus({
            refElementReturn,
            hasCurrentFocusParameters: {
                onCurrentFocusedChanged: null,
                onCurrentFocusedInnerChanged
            }
        });
    
        const props = useMergedProps<HTMLLIElement>(p2, p3, p4, p5, p6);*/

    return (
        <li {...props2} style={{ opacity: hideBecausePaginated ? 0.25 : 1, transform: `translateX(${hideBecauseStaggered ? "50%" : "0%"})` }}>{text}<input {...useMergedProps(p2, { type: "number" }) as any} style={{ width: "5ch" }} /></li>
    )
}));