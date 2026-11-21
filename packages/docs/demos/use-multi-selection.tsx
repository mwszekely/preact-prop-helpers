
const RandomWords = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".split(" ");

function _getDocument() {
    return window.document;
}
/*
const MC = createContext<UseMultiSelectionContext & UseListNavigationContext>(null!);

export const DemoUseMultiSelection = memo(() => {

    const { context: contextUMC, managedChildrenReturn } = useManagedChildren<UseMultiSelectionChildInfo<HTMLInputElement>>({ managedChildrenParameters: {} })

    const [selectionMode, setSelectionMode] = useState("activation" as "activation" | "focus");

    const [selectedPercent, setSelectedPercent] = useState(0);
    const [selectedIndices, setSelectedIndices] = useState("")

    const onSelectionChange = (e: MultiSelectionChangeEvent) => {
        setSelectedPercent(e[EventDetail].selectedPercent);
        setSelectedIndices([...e[EventDetail].selectedIndices].join(", "));
    };

    const {} = useLinearNavigation({  })

    const { 
        context: contextList, 
        linearNavigationReturn, 
        managedChildrenParameters, 
        propsParent, 
        propsStableParentOrChild, 
        rovingTabIndexReturn, 
        typeaheadNavigationReturn 
    } = useListNavigation({ 
        linearNavigationParameters, 
        managedChildrenReturn, 
        paginatedChildrenParameters, 
        rearrangeableChildrenReturn, 
        refElementReturn, 
        rovingTabIndexParameters, 
        typeaheadNavigationParameters 
    });

    const { 
        context: contextMultiSelect, 
        childrenHaveFocusParameters, 
        linearNavigationParameters, 
        multiSelectionReturn, 
        propsStable 
    } = useMultiSelection({
        managedChildrenReturn,
        multiSelectionParameters: { ariaPropName: "aria-selected", onSelectionChange, selectionMode }
    })

    return (
        <div className="demo">
            <h2>Multi selection</h2>

            <p>TODO</p>
            <p>{Math.round(selectedPercent * 100 * 100) / 100}% of children are selected</p>
            <p>The selected children's indices are: {selectedIndices}</p>
            <MC.Provider value={context}>
                {Array.from(function* () {
                    for (let i = 0; i < 10; ++i) {
                        yield <DemoUseMultiSelectionChild index={i} />
                    }
                }())}
            </MC.Provider>

        </div>
    );
})

interface CustomInfoType extends UseCompleteListNavigationChildInfo<HTMLLIElement> {
    foo: "bar";
}

const _Prefix = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const DemoUseMultiSelectionChild = memo((({ index }: { index: number }) => {
    if (index == 1)
        return <li>(Item {index} is a <strong>hole in the array</strong> and does not exist)</li>;

    let disabled = (index == 6);

    const context = useContext(MC);

    const { 
        hasCurrentFocusParameters, 
        info, 
        pressParameters, 
        props, 
        rovingTabIndexChildReturn, 
        textContentReturn
    } =useListNavigationChild({ 
        context, 
        info, 
        refElementReturn, 
        textContentParameters
     })

    const { 
        hasCurrentFocusParameters, 
        multiSelectionReturn, 
        pressParameters, 
        props 
    } = useMultiSelectionChild({
        context,
        info: { index },
        multiSelectionChildParameters: { initiallySelected: false, onSelectChange: useStableCallback<typeof onSelectChange>((e) => onSelectChange?.(e)) }
    })

    const {
        info,
        multiSelectionChildParameters: { onSelectChange }
    } = useMultiSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: {
            onSelectedChange,
            selected
        },
        multiSelectionReturn: { changeSelected }
    });


    return (
        <input type="checkbox" />
    )

}));

*/

