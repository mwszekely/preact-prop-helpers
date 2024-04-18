import { createContext } from "preact";
import { RovingTabIndexChildContext, UseManagedChildrenContext, UseRovingTabIndexChildInfo, useHasCurrentFocus, useManagedChild, useManagedChildren, useMergedProps, useRefElement, useRovingTabIndex, useRovingTabIndexChild } from "preact-prop-helpers";
import { useContext } from "preact/hooks";
import { LoremIpsum } from "../lorem.js";
import { Parameters_Root, Stage_Root } from "./base.stage.js";
import { Parameters_ManagedChild, Parameters_ManagedChildren, useManagedChildParameters, useManagedChildrenCount } from "./managed-children.parameters.js";
import { Stage_ManagedChild, Stage_ManagedChildren } from "./managed-children.stage.js";
import { Parameters_RovingTabIndex, Parameters_RovingTabIndexChild, useRovingTabIndexChildParameters, useRovingTabIndexParameters } from "./roving-tab-index.parameters.js";



const C = createContext<UseManagedChildrenContext<UseRovingTabIndexChildInfo<HTMLLIElement>> & RovingTabIndexChildContext>(null!);

export function Stage_RovingTabIndex() {
    return (
        <Parameters_Root>
            <Parameters_ManagedChildren>
                <Parameters_RovingTabIndex>
                    <Stage_Root>
                        <Stage_RovingTabIndexImpl />
                    </Stage_Root>
                </Parameters_RovingTabIndex>
            </Parameters_ManagedChildren>
        </Parameters_Root>
    )
}

function Stage_RovingTabIndexImpl() {

    const { initiallyTabbedIndex, untabbable, untabbableBehavior } = useRovingTabIndexParameters();

    type I = UseRovingTabIndexChildInfo<HTMLLIElement>;

    const {
        propsStable,
        refElementReturn
    } = useRefElement<HTMLOListElement>({
        refElementParameters: {
            onElementChange: undefined,
            onMount: undefined,
            onUnmount: undefined
        }
    });

    const {
        context: managedChildrenContext,
        managedChildrenReturn
    } = useManagedChildren<I>({
        managedChildrenParameters: {
            onAfterChildLayoutEffect: undefined,
            onChildrenCountChange: undefined,
            onChildrenMountChange: undefined
        }
    });

    const {
        context: rovingTabIndexContext,
        managedChildrenParameters,
        props,
        rovingTabIndexReturn
    } = useRovingTabIndex<HTMLOListElement, HTMLLIElement>({
        managedChildrenReturn,
        refElementReturn,
        rovingTabIndexParameters: {
            focusSelfParent: (e) => e?.focus(),
            untabbable,
            initiallyTabbedIndex,
            onTabbableIndexChange: undefined,
            untabbableBehavior
        }
    });

    const childrenCount = useManagedChildrenCount();

    return (
        <C.Provider value={{ ...rovingTabIndexContext, ...managedChildrenContext }}>
            <ol data-child-count={childrenCount} {...useMergedProps(props, propsStable)}>
                <Stage_ManagedChildren Factory={i => (

                    <Parameters_ManagedChild key={i} index={i}>
                        <Parameters_RovingTabIndexChild>

                            <Stage_ManagedChild>
                                <Stage_RovingTabIndexChildImpl />
                            </Stage_ManagedChild>

                        </Parameters_RovingTabIndexChild>
                    </Parameters_ManagedChild>

                )} />
            </ol>
        </C.Provider>
    )
}




function Stage_RovingTabIndexChildImpl() {
    type I = UseRovingTabIndexChildInfo<HTMLLIElement>;

    const context = useContext(C);
    const { index } = useManagedChildParameters();
    const { untabbable } = useRovingTabIndexChildParameters();

    const {
        propsStable,
        refElementReturn
    } = useRefElement<HTMLLIElement>({
        refElementParameters: {
            onElementChange: undefined,
            onMount: undefined,
            onUnmount: undefined
        }
    });

    const {
        hasCurrentFocusParameters,
        info,
        props: p1
    } = useRovingTabIndexChild<HTMLLIElement>({
        context,
        info: { index, untabbable },
        refElementReturn
    });
    const {
        propsStable: p2,
        hasCurrentFocusReturn: {
            getCurrentFocused,
            getCurrentFocusedInner
        },
    } = useHasCurrentFocus({
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: undefined,
            ...hasCurrentFocusParameters,
        },
        refElementReturn
    });

    const {
        managedChildReturn
    } = useManagedChild<I>({
        context,
        info: {
            index,
            focusSelf: (e) => e.focus(),
            getElement: refElementReturn.getElement,
            untabbable,
            ...info,
        }
    })



    const textContent = LoremIpsum[index % LoremIpsum.length];
    return (
        <li {...useMergedProps(p1, p2, propsStable)} data-index={index} data-untabbable={untabbable.toString()}>{textContent}</li>
    )
}

