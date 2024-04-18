import { createContext } from "preact";
import { EventDetail, RovingTabIndexChildContext, UseChildrenHaveFocusContext, UseManagedChildrenContext, UseMultiSelectionChildInfo, UseMultiSelectionChildReturnType, UseMultiSelectionContext, UseMultiSelectionReturnType, UseRovingTabIndexChildInfo, assertEmptyObject, useChildrenHaveFocus, useChildrenHaveFocusChild, useHasCurrentFocus, useManagedChild, useManagedChildren, useMergedProps, useMultiSelection, useMultiSelectionChild, useMultiSelectionChildDeclarative, usePress, useRefElement, useRovingTabIndex, useRovingTabIndexChild, useStableCallback } from "preact-prop-helpers";
import { useCallback, useContext } from "preact/hooks";
import { LoremIpsum } from "../lorem.js";
import { Parameters_Root, Stage_Root } from "./base.stage.js";
import { Parameters_ManagedChild, Parameters_ManagedChildren, useManagedChildParameters } from "./managed-children.parameters.js";
import { Stage_ManagedChild, Stage_ManagedChildren } from "./managed-children.stage.js";
import { Parameters_MultiSelection, Parameters_MultiSelectionChild, useMultiSelectionChildParameters, useMultiSelectionParameters } from "./multi-selection.parameters.js";
import { Parameters_RovingTabIndexChild, useRovingTabIndexChildParameters } from "./roving-tab-index.parameters.js";



const C = createContext<
    UseManagedChildrenContext<UseRovingTabIndexChildInfo<HTMLLIElement> & UseMultiSelectionChildInfo<HTMLLIElement>> &
    RovingTabIndexChildContext &
    UseChildrenHaveFocusContext<HTMLLIElement> &
    UseMultiSelectionContext>(null!);

export function Stage_MultiSelection() {
    return (
        <Parameters_Root>
            <Parameters_ManagedChildren>
                <Parameters_MultiSelection>
                    <Stage_Root>
                        <Stage_MultiSelectionImpl />
                    </Stage_Root>
                </Parameters_MultiSelection>
            </Parameters_ManagedChildren>
        </Parameters_Root>
    )
}

function Stage_MultiSelectionImpl() {

    const { multiSelectionMode } = useMultiSelectionParameters();

    type I = UseRovingTabIndexChildInfo<HTMLLIElement> & UseMultiSelectionChildInfo<HTMLLIElement>;

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

    const msRet: UseMultiSelectionReturnType<HTMLOListElement, HTMLLIElement> = useMultiSelection<HTMLOListElement, HTMLLIElement>({
        managedChildrenReturn,
        multiSelectionParameters: {
            multiSelectionAriaPropName: "aria-checked",
            multiSelectionMode,
            onSelectionChange: null
        },
        childrenHaveFocusReturn: {
            getAnyFocused: useStableCallback((...args) => getAnyFocused(...args))
        }
    });

    const {
        context: multiSelectContext,
        multiSelectionReturn,
        childrenHaveFocusParameters: {
            onCompositeFocusChange
        },
        propsStable,
        ...void6
    } = msRet;

    const {
        childrenHaveFocusReturn: {
            getAnyFocused
        },
        context: childrenHaveFocusContext,
        ...void7
    } = useChildrenHaveFocus<HTMLLIElement>({ 
        childrenHaveFocusParameters: {
            onCompositeFocusChange: useStableCallback((...args) => onCompositeFocusChange?.(...args))
        }
     })

    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);
    assertEmptyObject(void6);
    assertEmptyObject(void7);

    return (
        <C.Provider value={{ ...managedChildrenContext, ...rovingTabIndexContext, ...childrenHaveFocusContext, ...multiSelectContext }}>
            <ol {...useMergedProps(p1, p2)}>
                <Stage_ManagedChildren Factory={i => (

                    <Parameters_ManagedChild key={i} index={i}>
                        <Parameters_RovingTabIndexChild>
                            <Parameters_MultiSelectionChild>

                                <Stage_ManagedChild>
                                    <Stage_MultiSelectionChildImpl />
                                </Stage_ManagedChild>

                            </Parameters_MultiSelectionChild>
                        </Parameters_RovingTabIndexChild>
                    </Parameters_ManagedChild>

                )} />
            </ol>
        </C.Provider>
    )
}





function Stage_MultiSelectionChildImpl() {
    type I = UseRovingTabIndexChildInfo<HTMLLIElement> & UseMultiSelectionChildInfo<HTMLLIElement>;


    const context = useContext(C);
    const { index } = useManagedChildParameters();
    const { multiSelected, setMultiSelected, multiSelectionDisabled } = useMultiSelectionChildParameters();
    const { untabbable } = useRovingTabIndexChildParameters();

    const onCurrentFocusedInnerChanged = useStableCallback<typeof ocfic1>((...args) => {
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

    const msRet: UseMultiSelectionChildReturnType<HTMLLIElement, I> = useMultiSelectionChild<HTMLLIElement>({
        context,
        info: { index },
        multiSelectionChildParameters: {
            initiallyMultiSelected: multiSelected,
            multiSelectionDisabled: multiSelectionDisabled,
            onMultiSelectChange: useStableCallback((...args) => onMultiSelectChange?.(...args))
        }
    });

    const {
        multiSelectionChildReturn,
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
    } = msRet;

    const {
        info,
        multiSelectionChildParameters: {
            onMultiSelectChange
        }
    } = useMultiSelectionChildDeclarative<HTMLLIElement>({
        multiSelectionChildDeclarativeParameters: {
            multiSelected,
            onMultiSelectedChange: useStableCallback((e) => { multiSelectionChildReturn?.changeMultiSelected(e, e[EventDetail].multiSelected); })
        },
        multiSelectionChildReturn
    })


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

