import { createContext, VNode } from "preact";
import { memo, useCallback, useContext } from "preact/compat";
import { GetIndex, returnTrue, useHasCurrentFocus, useManagedChildren, useMergedProps, usePress, useRefElement, UseRefElementParameters, useSortableChildren, useStableCallback } from "../../index";
import { assertEmptyObject, useManagedChild, UseManagedChildrenContext } from "../../use-child-manager";
import { UseListNavigationContext, useListNavigationSingleSelection, useListNavigationSingleSelectionChild, UseListNavigationSingleSelectionChildInfo } from "../../use-list-navigation";
import { useStableObject } from "../../use-stable-getter";
import { useState } from "../../use-state";
import { UseSingleSelectionContext } from "../../use-single-selection"
import { GetValid } from "../../use-sortable-children";


const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

function getDocument() {
    return window.document;
}


const ListNavigationSingleSelectionChildContext = createContext<UseListNavigationContext<HTMLLIElement> & UseSingleSelectionContext & UseManagedChildrenContext<UseListNavigationSingleSelectionChildInfo<HTMLLIElement>>>(null!)
export const DemoUseRovingTabIndex = memo(() => {

    const [selectionMode, setSelectionMode] = useState("activation" as "focus" | "activation");
    const [count, setCount] = useState(10);
    const [selectedIndex, setLocalSelectedIndex] = useState<number | null>(0);
    const [tabbableIndex, setLocalTabbableIndex] = useState<number | null>(0);

    const getHighestIndex = useCallback(() => getChildren().getHighestIndex(), []);
    const getChildren = useCallback<typeof getChildren2>(() => { return managedChildrenReturn.getChildren() }, []);

    const {
        linearNavigationParameters,
        rearrangeableChildrenReturn,
        sortableChildrenReturn,
        useSortableProps,
        ...void8
    } = useSortableChildren<HTMLUListElement, UseListNavigationSingleSelectionChildInfo<HTMLLIElement>>({
        rearrangeableChildrenParameters: {
            getHighestChildIndex: getHighestIndex,
            getIndex: useCallback<GetIndex<{ index: number }>>((a: VNode<{ index: number }>) => a.props.index, []),
            getValid: useStableCallback<GetValid>((index) => { return !(getChildren().getAt(index)?.hidden) })
        },
        sortableChildrenParameters: { compare: useCallback((rhs, lhs) => { return lhs.index - rhs.index }, []) }
    })

    const {
        childrenHaveFocusParameters,
        linearNavigationReturn,
        managedChildrenParameters,
        rovingTabIndexChildParameters,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationChildParameters,
        typeaheadNavigationReturn,
        ...void7
    } = useListNavigationSingleSelection<HTMLUListElement, HTMLLIElement, UseListNavigationSingleSelectionChildInfo<HTMLLIElement>>({
        linearNavigationParameters: {
            disableArrowKeys: false,
            disableHomeEndKeys: false,
            getHighestIndex,
            navigationDirection: "vertical",
            ...linearNavigationParameters
        },
        managedChildrenReturn: { getChildren },
        rovingTabIndexParameters: { initiallyTabbedIndex: tabbableIndex, onTabbableIndexChange: setLocalTabbableIndex },
        singleSelectionParameters: { initiallySelectedIndex: selectedIndex, onSelectedIndexChange: setLocalSelectedIndex },
        typeaheadNavigationParameters: { collator: null, noTypeahead: false, typeaheadTimeout: 1000 }
    });

    const { managedChildrenReturn, ...void5 } = useManagedChildren<UseListNavigationSingleSelectionChildInfo<HTMLLIElement>>({ managedChildrenParameters: { onAfterChildLayoutEffect: null, onChildrenMountChange: null } });
    const { getChildren: getChildren2 } = managedChildrenReturn;
    const { sort } = sortableChildrenReturn;
    const { shuffle } = rearrangeableChildrenReturn;
    const children = getChildren();

    const { propsStable: p1, ...void1 } = linearNavigationReturn;
    const { focusSelf, getTabbableIndex, setTabbableIndex, ...void2 } = rovingTabIndexReturn;
    const { getSelectedIndex, setSelectedIndex, ...void3 } = singleSelectionReturn;
    const { propsStable: p2, currentTypeahead, invalidTypeahead, ...void4 } = typeaheadNavigationReturn;
    const context: UseListNavigationContext<HTMLLIElement> & UseSingleSelectionContext & UseManagedChildrenContext<UseListNavigationSingleSelectionChildInfo<HTMLLIElement>> = useStableObject({
        rovingTabIndexChildParameters,
        typeaheadNavigationChildParameters,
        rovingTabIndexReturn,
        singleSelectionReturn,
        managedChildrenReturn
    });

    const props = useMergedProps(p1, p2);

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);

    assertEmptyObject(void7);
    assertEmptyObject(void8);

    return (
        <div className="demo">
            <h2>Keyboard &amp; List Navigation</h2>
            <h3><code>useRovingTabIndex</code></h3>

            <p>
                Native HTML elements offer fantastic keyboard accessability, but cover a relatively limited number of use cases.
                There is no native HTML tree element, for example, that allows keyboard navigation of its items,
                nor is it possible to combine the keyboard navigation behavior of a <code>{"<select>"}</code> menu with the menu in a drawer component.</p>

            <p>
                When coming across a List or a Menu or a RadioGroup or a ToggleButtonGroup or any other "one component made up of child components", the usual expected behavior,
                at least natively, is that tabbing into the component is one action, and tabbing out is another.  Navigating <em>within</em> the component is done with the arrow keys or other methods.
            </p>
            <p>
                This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through <em>every one</em> of its child elements is extremely important.
            </p>

            <p>
                <code>useListNavigation</code> wraps up the functionality of a few hooks (<code>useRovingTabIndex</code>, <code>useLinearNavigation</code>, <code>useTypeaheadNavigation</code>)
                to allow for ARIA-compliant navigation of lists and other similar components.  For more advanced use cases, you can use the other hooks individually.
            </p>

            <p>
                <code>useListNavigation</code> (and <code>useRovingTabIndex</code>) internally use <code>useChildManager</code>, which is how the child elements and the parent communicate with each other.
                This means there are virtually no restrictions on how the DOM is set up as long as you can provide the children with the <code>useListNavigationChild</code> hook that's returned, usually with a simple <code>Context</code>.
                If the child element itself has a focusable element, like a button, it can also be wired up to disable itself
                Feel free to nest them too, as long as you are aware of your <code>Context</code> management (i.e. remember that you need to create a new <code>Context</code> for each use case).
            </p>
            <label># of items<input type="number" value={count} min={0} onInput={e => { e.preventDefault(); setCount(e.currentTarget.valueAsNumber) }} /></label>
            <button onClick={() => shuffle(children)}>Shuffle</button>
            <label>Tabbable index: <input type="number" value={tabbableIndex ?? undefined} onInput={e => { e.preventDefault(); setTabbableIndex(e.currentTarget.valueAsNumber, false); }} /></label>
            <label>Selected index: <input type="number" value={selectedIndex ?? undefined} onInput={e => { e.preventDefault(); setSelectedIndex(e.currentTarget.valueAsNumber); }} /></label>
            <label>Selection mode:
                <label><input name="rti-demo-selection-mode" type="radio" checked={selectionMode == 'focus'} onInput={e => { e.preventDefault(); setSelectionMode("focus"); }} /> On focus</label>
                <label><input name="rti-demo-selection-mode" type="radio" checked={selectionMode == 'activation'} onInput={e => { e.preventDefault(); setSelectionMode("activation"); }} /> On activation (click, tap, Enter, Space, etc.)</label>
            </label>

            <SelectionModeContext.Provider value={selectionMode}>
                <ListNavigationSingleSelectionChildContext.Provider value={context}>
                    <ul {...(useSortableProps(useMergedProps(props, {
                        children: Array.from((function* () {
                            for (let i = 0; i < count; ++i) {
                                yield <DemoUseRovingTabIndexChild index={i} key={i} />
                            }
                        })())
                    })))} />
                </ListNavigationSingleSelectionChildContext.Provider>
            </SelectionModeContext.Provider>
            {currentTypeahead && <div>Typeahead: {currentTypeahead}</div>}
        </div>
    );
})

const SelectionModeContext = createContext("focus" as "focus" | "activation");
const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseRovingTabIndexChild = memo((({ index }: { index: number }) => {
    const selectionMode = useContext(SelectionModeContext);
    const hidden = (index == 7);
    const [randomWord] = useState(() => RandomWords[index/*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
    const { rovingTabIndexChildParameters, typeaheadNavigationChildParameters, rovingTabIndexReturn, singleSelectionReturn, managedChildrenReturn } = useContext(ListNavigationSingleSelectionChildContext);
    const text = `${randomWord} This is item #${index}${hidden ? " (hidden)" : ""}`;
    const focusSelf = useCallback((e: HTMLElement) => { e.focus() }, []);
    const { refElementReturn } = useRefElement<HTMLLIElement>({ refElementParameters: { onElementChange: undefined } });
    const { getElement, propsStable: p3 } = refElementReturn;


    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged, ...void5 },
        managedChildParameters: { getSelected, selected, setSelected, ...void4 },
        pressParameters: { onPressSync, ...void3 },
        rovingTabIndexChildReturn: { setTabbable, getTabbable, propsUnstable: p2, tabbable, ...void2 },
        singleSelectionChildReturn: { propsUnstable: p4, ...void1 },
        ...void6
    } = useListNavigationSingleSelectionChild<HTMLLIElement>({
        managedChildParameters: { hidden, index },
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
        managedChildParameters: { index, focusSelf, getElement, getSelected, getTabbable, hidden, selected, setSelected, setTabbable, tabbable, text },
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

    const props = useMergedProps<HTMLLIElement>(p2, p3, p4, p5, p6);

    return (
        <li {...props}>{text} ({tabbable ? "Tabbable" : "Not tabbable"}, {selected ? "Selected" : "Not selected"})<input {...useMergedProps(p2, { type: "number" }) as any} style={{ width: "5ch" }} /></li>
    )
}));