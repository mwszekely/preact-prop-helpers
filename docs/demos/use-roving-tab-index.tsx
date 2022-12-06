import { createContext, VNode } from "preact";
import { memo, useCallback, useContext } from "preact/compat";
import { GetIndex, UseListNavigationSingleSelectionSortableChildInfo, useMergedProps, useStableCallback } from "../../index";

import { useState } from "../../preact-extensions/use-state";

import { CompleteListNavigationContext, useCompleteListNavigation, useCompleteListNavigationChild, UseCompleteListNavigationReturnType } from "../..";

const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

function _getDocument() {
    return window.document;
}

const ListNavigationSingleSelectionChildContext = createContext<CompleteListNavigationContext<HTMLOListElement, HTMLLIElement, CustomInfoType>>(null!)
export const DemoUseRovingTabIndex = memo(() => {


    const [selectionMode, setSelectionMode] = useState("activation" as "focus" | "activation");
    const [count, setCount] = useState(10);
    const [min, setMin] = useState(0)
    // const [selectedIndex, _setLocalSelectedIndex] = useState<number | null>(0);
    // const [tabbableIndex, _setLocalTabbableIndex] = useState<number | null>(0);


    const r: UseCompleteListNavigationReturnType<HTMLOListElement, HTMLLIElement, CustomInfoType> = useCompleteListNavigation<HTMLOListElement, HTMLLIElement, CustomInfoType>({
        rovingTabIndexParameters: { onTabbableIndexChange: null, untabbable: false },
        singleSelectionParameters: { initiallySelectedIndex: 0, setSelectedIndex: useStableCallback(newIndex => { /*setLocalSelectedIndex(newIndex);*/ setSelectedIndex(newIndex); }) },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 },
        linearNavigationParameters: { disableArrowKeys: false, disableHomeEndKeys: false, navigationDirection: "vertical", navigatePastEnd: "wrap", navigatePastStart: "wrap", pageNavigationSize: 0.1 },
        rearrangeableChildrenParameters: {
            getIndex: useCallback<GetIndex<{ index: number }>>((a: VNode<{ index: number }>) => a.props.index, []),
        },
        sortableChildrenParameters: { compare: useCallback((rhs: CustomInfoType, lhs: CustomInfoType) => { return lhs.index - rhs.index }, []) },
    });


    const {
        props,
        context,
        rovingTabIndexReturn: { setTabbableIndex },
        singleSelectionReturn: { setSelectedIndex },
        managedChildrenReturn: { getChildren },
        typeaheadNavigationReturn: { invalidTypeahead },
        rearrangeableChildrenReturn: { useRearrangedChildren, shuffle }
        //        rearrangeableChildrenReturn: { useRearrangedChildren: useSortableProps, shuffle }
    } = r;
    //useSingleSelectionDeclarative({ singleSelectionReturn: {  setSelectedIndex }, singleSelectionDeclarativeParameters: { selectedIndex } });
    const children = getChildren();


    const jsxChildren = Array.from((function* () {
        for (let i = min; i < (count); ++i) {
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
            <label>Imperatively set the selected index to: <input type="number" onInput={e => { e.preventDefault(); setSelectedIndex(e.currentTarget.valueAsNumber); }} /></label>
            <label>Skip rendering the first N children: <input type="number" min={0} onInput={e => { e.preventDefault(); setMin(e.currentTarget.valueAsNumber); }} /></label>
            <label>Selection mode:
                <label><input name="rti-demo-selection-mode" type="radio" checked={selectionMode == 'focus'} onInput={e => { e.preventDefault(); setSelectionMode("focus"); }} /> On focus</label>
                <label><input name="rti-demo-selection-mode" type="radio" checked={selectionMode == 'activation'} onInput={e => { e.preventDefault(); setSelectionMode("activation"); }} /> On activation (click, tap, Enter, Space, etc.)</label>
            </label>

            <SelectionModeContext.Provider value={selectionMode}>
                <ListNavigationSingleSelectionChildContext.Provider value={context}>
                    <ol {...props}>{useRearrangedChildren(jsxChildren)}</ol>
                </ListNavigationSingleSelectionChildContext.Provider>
            </SelectionModeContext.Provider>
            {<div>{invalidTypeahead && "Invalid typeahead (no matches for the current string)"}</div>}
        </div>
    );
})

interface CustomInfoType extends UseListNavigationSingleSelectionSortableChildInfo<HTMLLIElement> {
    foo: "bar";
}

const SelectionModeContext = createContext("focus" as "focus" | "activation");
const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseRovingTabIndexChild = memo((({ index }: { index: number }) => {
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
        singleSelectionChildReturn: { selected }
    } = useCompleteListNavigationChild<HTMLLIElement, CustomInfoType, never>({
        managedChildParameters: { index },
        rovingTabIndexChildParameters: { hidden },
        sortableChildParameters: { getSortValue },
        pressParameters: { onPressSync: null, exclude: {}, focusSelf },
        singleSelectionChildParameters: { ariaPropName: "aria-selected", selectionMode, disabled },
        completeListNavigationChildParameters: { foo: "bar" },
        context,
        textContentParameters: { getText: useCallback((e) => { return e?.textContent ?? "" }, []) }
    });

    const text = `${randomWord} This is item #${index}${hidden ? " (hidden)" : ""}${disabled ? " (disabled)" : ""}${selected ? " (selected)" : " (not selected)"} (${tabbable ? "Tabbable" : "Not tabbable"})`;

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
        <li {...props}>{text}<input {...useMergedProps(p2, { type: "number" }) as any} style={{ width: "5ch" }} /></li>
    )
}));