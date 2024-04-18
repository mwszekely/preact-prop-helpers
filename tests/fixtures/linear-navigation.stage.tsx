import { createContext } from "preact";
import { RovingTabIndexChildContext, UseLinearNavigationChildInfo, UseManagedChildrenContext, UseRovingTabIndexChildInfo, assertEmptyObject, identity, useHasCurrentFocus, useLinearNavigation, useManagedChild, useManagedChildren, useMergedProps, useRefElement, useRovingTabIndex, useRovingTabIndexChild, useStableCallback } from "preact-prop-helpers";
import { useContext } from "preact/hooks";
import { LoremIpsum } from "../lorem.js";
import { Parameters_Root, Stage_Root } from "./base.stage.js";
import { Parameters_LinearNavigation, Parameters_LinearNavigationChild, useLinearNavigationChildParameters, useLinearNavigationParameters } from "./linear-navigation.parameters.js";
import { Parameters_ManagedChild, Parameters_ManagedChildren } from "./managed-children.parameters.js";
import { Stage_ManagedChild, Stage_ManagedChildren } from "./managed-children.stage.js";
import { Parameters_RovingTabIndexChild, useRovingTabIndexChildParameters } from "./roving-tab-index.parameters.js";



const C = createContext<UseManagedChildrenContext<UseRovingTabIndexChildInfo<HTMLLIElement> & UseLinearNavigationChildInfo<HTMLLIElement>> & RovingTabIndexChildContext>(null!);

export function Stage_LinearNavigation() {
    return (
        <Parameters_Root>
            <Parameters_ManagedChildren>
                <Parameters_LinearNavigation>
                    <Stage_Root>
                        <Stage_LinearNavigationImpl />
                    </Stage_Root>
                </Parameters_LinearNavigation>
            </Parameters_ManagedChildren>
        </Parameters_Root>
    )
}

function Stage_LinearNavigationImpl() {

    const { arrowKeyDirection, disableHomeEndKeys, navigatePastEnd, navigatePastStart } = useLinearNavigationParameters();

    type I = UseRovingTabIndexChildInfo<HTMLLIElement> & UseLinearNavigationChildInfo<HTMLLIElement>;

    const {
        propsStable: p2,
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
        props: p3,
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
        propsStable: p1,
        linearNavigationReturn,
        ...void1
    } = useLinearNavigation<HTMLOListElement, HTMLLIElement>({
        managedChildrenReturn,
        paginatedChildrenParameters: { paginationMax: null, paginationMin: null },
        rearrangeableChildrenReturn: { indexDemangler: identity, indexMangler: identity },
        rovingTabIndexReturn,
        linearNavigationParameters: {
            arrowKeyDirection,
            disableHomeEndKeys,
            navigatePastEnd,
            navigatePastStart,
            onNavigateLinear: null,
            pageNavigationSize: 0.1
        }
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void4);
    assertEmptyObject(void5);

    return (
        <C.Provider value={{ ...managedChildrenContext, ...rovingTabIndexContext }}>
            <ol {...useMergedProps(p1, p2, p3)}>
                <Stage_ManagedChildren Factory={i => (

                    <Parameters_ManagedChild key={i} index={i}>
                        <Parameters_RovingTabIndexChild>
                            <Parameters_LinearNavigationChild>

                                <Stage_ManagedChild>
                                    <Stage_LinearNavigationChildImpl />
                                </Stage_ManagedChild>

                            </Parameters_LinearNavigationChild>
                        </Parameters_RovingTabIndexChild>
                    </Parameters_ManagedChild>

                )} />
            </ol>
        </C.Provider>
    )
}




function Stage_LinearNavigationChildImpl() {
    type I = UseRovingTabIndexChildInfo<HTMLLIElement> & UseLinearNavigationChildInfo<HTMLLIElement>;

    const context = useContext(C);
    const { index } = useLinearNavigationChildParameters();
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

