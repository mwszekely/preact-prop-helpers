import { createContext, h } from "preact";
import { memo, useContext } from "preact/compat";
import { useHasFocus } from "../..";
import { useListNavigation, UseListNavigationChild } from "../../use-list-navigation";
import { useState } from "../../use-state";


const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

const RovingChildContext = createContext<UseListNavigationChild<HTMLLIElement>>(null!)
export const DemoUseRovingTabIndex = memo(() => {

    const { lastFocusedInner, useHasFocusProps } = useHasFocus<HTMLUListElement>();
    const { useListNavigationChild, currentTypeahead, setTabbableIndex, tabbableIndex } = useListNavigation<HTMLUListElement, HTMLLIElement>({ focusOnChange: lastFocusedInner });
    //const { useRovingTabIndexChild, useRovingTabIndexProps } = useRovingTabIndex<HTMLUListElement, RovingTabIndexChildInfo>({ tabbableIndex, focusOnChange: false });

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
                This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through <code>every one</code> of its child elements is extremely important.
                This is important both for accessability, but also just for general usability.  When tabbing back and forth, the ability to skip a long list without needing to trudge through <code>every one</code> of its child elements is extremely important.
            </p>

            <p>
                <code>useListNavigation</code> wraps up the functionality of a few hooks (<code>useRovingTabIndex</code>, <code>useLinearNavigation</code>, <code>useTypeaheadNavigation</code>
                to allow for ARIA-compliant navigation of lists and other similar components.  For more advanced use cases, you can use the other hooks individually.
            </p>

            <p>
                <code>useListNavigation</code> (and <code>useRovingTabIndex</code>) internally use <code>useChildManager</code>, which is how the child elements and the parent communicate with each other.
                This means there are virtually no restrictions on how the DOM is set up as long as you can provide the children with the <code>useListNavigationChild</code> hook that's returned, usually with a simple <code>Context</code>.
                If the child element itself has a focusable element, like a button, it can also be wired up to disable itself
                Feel free to nest them too, as long as you are aware of your <code>Context</code> management (i.e. remember that you need to create a new <code>Context</code> for each use case).
            </p>
            <label>Tabbable index: <input type="number" value={tabbableIndex} onInput={e => { e.preventDefault(); setTabbableIndex(e.currentTarget.valueAsNumber); }} /></label>
            <ul {...useHasFocusProps({})}>
                <RovingChildContext.Provider value={useListNavigationChild}>
                    {Array.from((function* () {
                        for (let i = 0; i < 10; ++i) {
                            yield <DemoUseRovingTabIndexChild index={i} key={i} />
                        }
                    })())}
                </RovingChildContext.Provider>
            </ul>
            {currentTypeahead && <div>Typeahead: {currentTypeahead}</div>}
        </div>
    );
})

const Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseRovingTabIndexChild = (({ index }: { index: number }) => {
    const [randomWord] = useState(() => RandomWords[index/*Math.floor(Math.random() * (RandomWords.length - 1))*/]);
    const useRovingTabIndexChild = useContext(RovingChildContext);
    const text = `${randomWord} This is item #${index + 1}`;
    const { useListNavigationChildProps, useListNavigationSiblingProps, tabbable } = useRovingTabIndexChild({ index, text });
    
    const props = useListNavigationChildProps({});
    return (
        <li {...props}>{text} ({tabbable? "Tabbable" : "Not tabbable"})<input {...useListNavigationSiblingProps({ type: "checkbox" })} /></li>
    )
});