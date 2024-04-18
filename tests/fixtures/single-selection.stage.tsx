import { createContext } from "preact";
import { EventDetail, RovingTabIndexChildContext, UseChildrenHaveFocusContext, UseManagedChildrenContext, UseRovingTabIndexChildInfo, UseSingleSelectionChildInfo, UseSingleSelectionContext, UseSingleSelectionDeclarativeReturnType, assertEmptyObject, useChildrenHaveFocus, useChildrenHaveFocusChild, useHasCurrentFocus, useManagedChild, useManagedChildren, useMergedProps, usePress, useRefElement, useRovingTabIndex, useRovingTabIndexChild, useSingleSelection, useSingleSelectionChild, useSingleSelectionDeclarative, useStableCallback } from "preact-prop-helpers";
import { useCallback, useContext } from "preact/hooks";
import { LoremIpsum } from "../lorem.js";
import { Parameters_Root, Stage_Root } from "./base.stage.js";
import { Parameters_ManagedChild, Parameters_ManagedChildren, useManagedChildParameters } from "./managed-children.parameters.js";
import { Stage_ManagedChild, Stage_ManagedChildren } from "./managed-children.stage.js";
import { Parameters_RovingTabIndexChild, useRovingTabIndexChildParameters } from "./roving-tab-index.parameters.js";
import { Parameters_SingleSelection, Parameters_SingleSelectionChild, useSingleSelectionChildParameters, useSingleSelectionParameters } from "./single-selection.parameters.js";



const C = createContext<
    UseManagedChildrenContext<UseRovingTabIndexChildInfo<HTMLLIElement> & UseSingleSelectionChildInfo<HTMLLIElement>> &
    RovingTabIndexChildContext &
    UseChildrenHaveFocusContext<HTMLLIElement> &
    UseSingleSelectionContext>(null!);

export function Stage_SingleSelection() {
    return (
        <Parameters_Root>
            <Parameters_ManagedChildren>
                <Parameters_SingleSelection>
                    <Stage_Root>
                        <Stage_SingleSelectionImpl />
                    </Stage_Root>
                </Parameters_SingleSelection>
            </Parameters_ManagedChildren>
        </Parameters_Root>
    )
}

function Stage_SingleSelectionImpl() {

    const { singleSelectedIndex, singleSelectionMode, setSingleSelectedIndex } = useSingleSelectionParameters();

    type I = UseRovingTabIndexChildInfo<HTMLLIElement> & UseSingleSelectionChildInfo<HTMLLIElement>;

    const {
        propsStable: p1,
        refElementReturn,
        ...void5
    } = useRefElement<HTMLOListElement>({
        refElementParameters: {
            onElementChange: undefined,
            onMount: undefined,
            onUnmount: undefined
        }
    });

    const {
        context: managedChildrenContext,
        managedChildrenReturn,
        ...void4
    } = useManagedChildren<I>({
        managedChildrenParameters: {
            onAfterChildLayoutEffect: undefined,
            onChildrenCountChange: undefined,
            onChildrenMountChange: useStableCallback((...a) => onChildrenMountChange!(...a))
        }
    });


    const {
        context: rovingTabIndexContext,
        managedChildrenParameters: {
            onChildrenMountChange,
            ...void2
        },
        props: p2,
        rovingTabIndexReturn,
        ...void3
    } = useRovingTabIndex<HTMLOListElement, HTMLLIElement>({
        managedChildrenReturn,
        refElementReturn,
        rovingTabIndexParameters: {
            focusSelfParent: (e) => e?.focus(),
            untabbable: false,
            initiallyTabbedIndex: 0,
            onTabbableIndexChange: undefined,
            untabbableBehavior: "focus-parent"
        }
    });

    const {
        childrenHaveFocusParameters,
        context: singleSelectContext,
        singleSelectionReturn,
        ...void6
    } = useSingleSelection<HTMLOListElement, HTMLLIElement>({
        managedChildrenReturn,
        rovingTabIndexReturn,
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectedIndex,
            onSingleSelectedIndexChange: useStableCallback<typeof ossic>((...args) => ossic!(...args)),
            singleSelectionAriaPropName: "aria-selected",
            singleSelectionMode
        }
    });

    const {
        childrenHaveFocusReturn,
        context: childrenHaveFocusContext,
        ...void7
    } = useChildrenHaveFocus({ childrenHaveFocusParameters })

    const ret: UseSingleSelectionDeclarativeReturnType<HTMLOListElement, HTMLLIElement> = useSingleSelectionDeclarative<HTMLOListElement, HTMLLIElement>({
        singleSelectionDeclarativeParameters: {
            onSingleSelectedIndexChange: useStableCallback((e) => { setSingleSelectedIndex(e[EventDetail].selectedIndex)}, []),
            singleSelectedIndex
        },
        singleSelectionReturn
    });
    const {
        singleSelectionParameters: {
            onSingleSelectedIndexChange: ossic,
            ...void1
        },
        ...void8
    } = ret;

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);

    return (
        <C.Provider value={{ ...managedChildrenContext, ...rovingTabIndexContext, ...childrenHaveFocusContext, ...singleSelectContext }}>
            <ol {...useMergedProps(p1, p2)}>
                <Stage_ManagedChildren Factory={i => (

                    <Parameters_ManagedChild key={i} index={i}>
                        <Parameters_RovingTabIndexChild>
                            <Parameters_SingleSelectionChild>

                                <Stage_ManagedChild>
                                    <Stage_SingleSelectionChildImpl />
                                </Stage_ManagedChild>

                            </Parameters_SingleSelectionChild>
                        </Parameters_RovingTabIndexChild>
                    </Parameters_ManagedChild>

                )} />
            </ol>
        </C.Provider>
    )
}





function Stage_SingleSelectionChildImpl() {
    type I = UseRovingTabIndexChildInfo<HTMLLIElement> & UseSingleSelectionChildInfo<HTMLLIElement>;


    const context = useContext(C);
    const { index } = useManagedChildParameters();
    const { singleSelectionDisabled } = useSingleSelectionChildParameters();
    const { untabbable } = useRovingTabIndexChildParameters();

    const onCurrentFocusedInnerChanged = useStableCallback<typeof ocfic1>((...args) => {
        debugger;
        ocfic1!(...args);
        ocfic2!(...args);
        ocfic3!(...args);
    })

    const {
        refElementReturn,
        propsStable: p4,
    } = useRefElement<HTMLLIElement>({
        refElementParameters: {
            onElementChange: undefined,
            onMount: undefined,
            onUnmount: undefined
        }
    });

    const {
        rovingTabIndexChildReturn,
        props: p1,
        info: i1,
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: ocfic1,
            ...void7
        },
        ...void8
    } = useRovingTabIndexChild<HTMLLIElement>({
        context,
        info: { index, untabbable },
        refElementReturn
    });

    const {
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: ocfic2,
            ...void2
        },
        ...void1
    } = useChildrenHaveFocusChild({ context });

    const {
        hasCurrentFocusReturn,
        propsStable: p2,
        ...void3
    } = useHasCurrentFocus<HTMLLIElement>({
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: null,
            onCurrentFocusedInnerChanged
        },
        refElementReturn
    });

    const {
        singleSelectionChildReturn,
        props: p5,
        info: i2,
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged: ocfic3,
            ...void10
        },
        pressParameters: {
            onPressSync,
            ...void9
        },
        ...void5
    } = useSingleSelectionChild<HTMLLIElement>({
        context,
        info: { index, untabbable },
        singleSelectionChildParameters: {
            singleSelectionDisabled
        }
    });


    const focusSelf = useCallback((e: HTMLLIElement) => e.focus(), []);

    const {
        managedChildReturn,
        ...void4
    } = useManagedChild<I>({
        context,
        info: {
            index,
            focusSelf,
            getElement: refElementReturn.getElement,
            untabbable,
            ...i1,
            ...i2
        }
    });

    const {
        pressReturn,
        props: p3,
        ...void6
    } = usePress({
        pressParameters: {
            onPressingChange: null,
            excludeEnter: null,
            excludePointer: null,
            excludeSpace: null,
            allowRepeatPresses: false,
            longPressThreshold: null,
            focusSelf,
            onPressSync,
        },
        refElementReturn
    })

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);
    assertEmptyObject(void8);
    assertEmptyObject(void9);
    assertEmptyObject(void10);


    const textContent = LoremIpsum[index % LoremIpsum.length];
    return (
        <li {...useMergedProps(p1, p2, p3, p4, p5)} data-index={index} data-untabbable={untabbable.toString()}>{textContent}</li>
    )
}

