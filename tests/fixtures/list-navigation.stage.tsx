import { createContext } from "preact";
import { CompleteListNavigationContext, EventDetail, UseCompleteListNavigationChildInfo, assertEmptyObject, useCompleteListNavigationChildDeclarative, useCompleteListNavigationDeclarative, useContext, useMergedProps, useStableCallback } from "preact-prop-helpers";
import { LoremIpsum } from "../lorem.js";
import { Parameters_Root, Stage_Root } from "./base.stage.js";
import { useLinearNavigationParameters } from "./linear-navigation.parameters.js";
import { Parameters_ListNavigation, Parameters_ListNavigationChild } from "./list-navigation.parameters.js";
import { Parameters_ManagedChild, Parameters_ManagedChildren, useManagedChildParameters, useManagedChildrenCount } from "./managed-children.parameters.js";
import { Stage_ManagedChild, Stage_ManagedChildren } from "./managed-children.stage.js";
import { useRovingTabIndexChildParameters, useRovingTabIndexParameters } from "./roving-tab-index.parameters.js";
import { Parameters_SingleSelectionChild, useSingleSelectionChildParameters, useSingleSelectionParameters } from "./single-selection.parameters.js";

const C = createContext<CompleteListNavigationContext<HTMLLIElement, UseCompleteListNavigationChildInfo<HTMLLIElement>>>(null!);

export function Stage_ListNavigation() {
    return (
        <Parameters_Root>
            <Parameters_ManagedChildren>
                <Parameters_ListNavigation>
                    <Stage_Root>
                        <Stage_ListNavigationImpl />
                    </Stage_Root>
                </Parameters_ListNavigation>
            </Parameters_ManagedChildren>
        </Parameters_Root>
    )
}

function Stage_ListNavigationChild({ index }: { index: number }) {
    return (
        <Parameters_ManagedChild index={index}>
            <Parameters_ListNavigationChild>
                <Parameters_SingleSelectionChild>
                    <Stage_ManagedChild>
                        <Stage_ListNavigationChildImpl />
                    </Stage_ManagedChild>
                </Parameters_SingleSelectionChild>
            </Parameters_ListNavigationChild>
        </Parameters_ManagedChild>
    )
}


function Stage_ListNavigationImpl() {

    const { initiallyTabbedIndex, untabbable, untabbableBehavior } = useRovingTabIndexParameters();
    const { arrowKeyDirection, disableHomeEndKeys, navigatePastEnd, navigatePastStart } = useLinearNavigationParameters();
    const { setSingleSelectedIndex, singleSelectedIndex, singleSelectionMode } = useSingleSelectionParameters();
    const childCount = useManagedChildrenCount();

    type I = UseCompleteListNavigationChildInfo<HTMLLIElement>;


    const {
        childrenHaveFocusReturn,
        contextChildren,
        contextProcessing,
        managedChildrenReturn,
        multiSelectionReturn,
        rearrangeableChildrenReturn,
        refElementReturn,
        singleSelectionReturn,
        linearNavigationReturn,
        props: p3,
        rovingTabIndexReturn,
        typeaheadNavigationReturn,
        ...void1
    } = useCompleteListNavigationDeclarative<HTMLOListElement, HTMLLIElement, I>({
        rovingTabIndexParameters: {
            untabbable,
            onTabbableIndexChange: undefined,
            focusSelfParent: e => e?.focus(),
        },
        linearNavigationParameters: {
            arrowKeyDirection,
            disableHomeEndKeys,
            navigatePastEnd,
            navigatePastStart,
            onNavigateLinear: null,
            pageNavigationSize: null
        },
        typeaheadNavigationParameters: {
            collator: null,
            noTypeahead: false,
            onNavigateTypeahead: null,
            typeaheadTimeout: 1000
        },
        paginatedChildrenParameters: {
            paginationMax: null,
            paginationMin: null
        },
        multiSelectionParameters: {
            multiSelectionAriaPropName: "aria-checked",
            multiSelectionMode: "disabled",
            onSelectionChange: null
        },
        refElementParameters: {

        },
        singleSelectionDeclarativeParameters: {
            onSingleSelectedIndexChange: useStableCallback((e) => {
                debugger;
                setSingleSelectedIndex(e[EventDetail].selectedIndex);
            }, []),
            singleSelectedIndex
        },
        singleSelectionParameters: {
            singleSelectionAriaPropName: "aria-selected",
            singleSelectionMode,
        }
    })

    const childrenCount = useManagedChildrenCount();

    assertEmptyObject(void1);

    return (
        <C.Provider value={contextChildren}>
            <ol data-child-count={childrenCount} {...p3}>
                <Stage_ManagedChildren Factory={i => (

                    <Stage_ListNavigationChild key={i} index={i} />

                )} />
            </ol>
        </C.Provider>
    )
}




function Stage_ListNavigationChildImpl() {
    type I = UseCompleteListNavigationChildInfo<HTMLLIElement>;

    const context = useContext(C);
    const { untabbable } = useRovingTabIndexChildParameters();
    const { index } = useManagedChildParameters();
    const { singleSelectionDisabled } = useSingleSelectionChildParameters()


    const {
        hasCurrentFocusReturn,
        managedChildReturn,
        multiSelectionChildReturn,
        propsChild,
        propsTabbable,
        refElementReturn,
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        textContentReturn,
        pressReturn,
        ...void1
    } = useCompleteListNavigationChildDeclarative<HTMLLIElement, I>({
        context,
        hasCurrentFocusParameters: { onCurrentFocusedChanged: null, onCurrentFocusedInnerChanged: null },
        info: { index, untabbable, focusSelf: useStableCallback((e) => e.focus(), []) },
        multiSelectionChildDeclarativeParameters: {
            multiSelected: false,
            onMultiSelectedChange: null
        },
        multiSelectionChildParameters: {
            multiSelectionDisabled: true
        },
        refElementParameters: { onElementChange: null, onMount: null, onUnmount: null },
        singleSelectionChildParameters: { singleSelectionDisabled },
        textContentParameters: {
            getText: useStableCallback((e) => { return e?.textContent ?? "" }, []),
            onTextContentChange: null
        },
        pressParameters: {
            allowRepeatPresses: null,
            longPressThreshold: null,
            onPressingChange: null
        }

    });


    assertEmptyObject(void1);

    const textContent = LoremIpsum[index % LoremIpsum.length];
    return (
        <li {...useMergedProps(propsChild, propsTabbable)} data-index={index} data-untabbable={untabbable.toString()}>{textContent}</li>
    )
}

