import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps } from "../util/lib.js";
import { GenericHook, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseListNavigation, UseListNavigationChild, UseListNavigationChildContext, UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, useListNavigation, useListNavigationChild } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseSelection, UseSelectionChild, UseSelectionChildContext, UseSelectionChildInfo, UseSelectionChildInfoKeysParameters, UseSelectionChildInfoKeysReturnType, useSelection, useSelectionChild } from "./selection/use-selection.js";

export interface UseListNavigationSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSelectionChildInfo<TabbableChildElement> { }
export interface UseListNavigationSelectionChildContext extends UseListNavigationChildContext, UseSelectionChildContext { }

export type UseListNavigationSelection<ParentElement extends Element, ChildElement extends Element> = GenericHook<
    "listNavigationSelection", 
    never, [
        StandardDepsPick<"params", UseListNavigation<ParentElement, ChildElement>>,
        StandardDepsOmit<"params", UseSelection<ParentElement, ChildElement>, "rovingTabIndexReturn">
    ],
    never, [
        StandardDepsPick<"return", UseListNavigation<ParentElement, ChildElement>>,
        StandardDepsPick<"return", UseSelection<ParentElement, ChildElement>>,
        StandardDepsContext<UseListNavigationSelectionChildContext>,
        StandardDepsProps<ParentElement>
    ]
>;

export type UseListNavigationSelectionChild<ChildElement extends Element> = GenericHook<
    "listNavigationSelectionChild", 
    never, [
        StandardDepsInfo<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysParameters>,
        StandardDepsContext<UseListNavigationSelectionChildContext>,
        StandardDepsPick<"params", UseListNavigationChild<ChildElement>>,
        StandardDepsPick<"params", UseSelectionChild<ChildElement>>
    ],
    never, [
        StandardDepsPick<"return", UseListNavigationChild<ChildElement>>,
        StandardDepsPick<"return", UseSelectionChild<ChildElement>>,
        StandardDepsInfo<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysReturnType>,
        { propsChild: ElementProps<ChildElement>, propsTabbable: ElementProps<ChildElement> }
    ]
>;

export type UseListNavigationSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSelectionChildInfoKeysParameters;
export type UseListNavigationSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;

/**
 * Combines {@link useListNavigation} and {@link useSelection}.
 * 
 * @remarks The -selection behavior is optional, if you decide you need multi-selection instead within the same component.
 * 
 * @hasChild {@link useListNavigationSelectionChild}
 * 
 * @compositeParams
 */
export const useListNavigationSelection = monitored(function useListNavigationSelection<ParentOrChildElement extends Element, ChildElement extends Element>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    managedChildrenReturn,
    refElementReturn,
    paginatedChildrenParameters,
    rearrangeableChildrenReturn,
    childrenHaveFocusReturn,
    ...void3
}: Parameter<UseListNavigationSelection<ParentOrChildElement, ChildElement>>): ReturnType<UseListNavigationSelection<ParentOrChildElement, ChildElement>> {
    const { context: contextSS, propsStable, childrenHaveFocusParameters, ...retSS } = useSelection<ParentOrChildElement, ChildElement>({
        childrenHaveFocusReturn,
        rovingTabIndexReturn: { setTabbableIndex: useStableCallback((...a) => { rovingTabIndexReturn.setTabbableIndex(...a) }) },
        managedChildrenReturn,
        singleSelectionParameters,
        multiSelectionParameters
    });
    const {
        context: contextLN,
        props,
        rovingTabIndexReturn,
        managedChildrenParameters,
        ...retLN
    } = useListNavigation<ParentOrChildElement, ChildElement>({
        rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
        linearNavigationParameters,
        paginatedChildrenParameters,
        typeaheadNavigationParameters,
        managedChildrenReturn,
        refElementReturn,
        rearrangeableChildrenReturn
    });

    assertEmptyObject(void3);

    return {
        rovingTabIndexReturn,
        managedChildrenParameters,
        childrenHaveFocusParameters,
        ...retSS,
        ...retLN,
        context: useMemoObject({
            ...contextLN,
            ...contextSS
        }),
        props: useMergedProps(props, propsStable)
    }
})

/**
 * @compositeParams
 */
export const useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild<ChildElement extends Element>({
    info: { index, untabbable, ...void2 },
    context,
    refElementReturn,
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1
}: Parameter<UseListNavigationSelectionChild<ChildElement>>): ReturnType<UseListNavigationSelectionChild<ChildElement>> {
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 },
        info: infoSS,
        multiSelectionChildReturn,
        singleSelectionChildReturn,
        props: propsSS,
        pressParameters: { onPressSync },
        ...void9
    } = useSelectionChild<ChildElement>({
        info: { index, untabbable },
        context,
        singleSelectionChildParameters,
        multiSelectionChildParameters
    });
    
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 },
        pressParameters: { excludeSpace },
        rovingTabIndexChildReturn,
        textContentParameters,
        props: propsLN,
        info: infoLN,
        ...void8
    } = useListNavigationChild<ChildElement>({
        info: { index, untabbable },
        context,
        refElementReturn,
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    assertEmptyObject(void6);
    assertEmptyObject(void8);
    assertEmptyObject(void9);

    return {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: useStableMergedCallback(ocfic1, ocfic2) },
        pressParameters: { onPressSync, excludeSpace },
        info: { ...infoSS, ...infoLN },
        rovingTabIndexChildReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        textContentParameters,
        propsChild: propsSS,
        propsTabbable: propsLN
    }
})
