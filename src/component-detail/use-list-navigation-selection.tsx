import { UseGenericChildParameters } from "../preact-extensions/use-managed-children.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, ExtendMerge, OmitStrong } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseRovingTabIndexReturnTypeSelf } from "./keyboard-navigation/use-roving-tabindex.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysParameters, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType, useSelection, useSelectionChild } from "./selection/use-selection.js";

export interface UseListNavigationSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSelectionChildInfo<TabbableChildElement> { }
export interface UseListNavigationSelectionChildContext extends UseListNavigationContext, UseSelectionContext { }

export interface UseListNavigationSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends
    Omit<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, never>,
    Omit<UseSelectionParameters<ParentOrChildElement, ChildElement, M>, keyof UseRovingTabIndexReturnTypeSelf> { }

export interface UseListNavigationSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends OmitStrong<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, "props">, OmitStrong<UseSelectionReturnType<ParentOrChildElement, ChildElement>, "props"> {
    context: UseListNavigationSelectionChildContext;
    props: ElementProps<ParentOrChildElement>[];
}

export type UseListNavigationSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSelectionChildInfoKeysParameters;
export type UseListNavigationSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;

export interface UseListNavigationSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends
    UseGenericChildParameters<UseListNavigationSelectionChildContext, Pick<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysParameters>>,
    OmitStrong<UseListNavigationChildParameters<ChildElement>, "context" | "info">,
    OmitStrong<UseSelectionChildParameters<ChildElement, M>, "context" | "info"> {
}

export interface UseListNavigationSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement>, UseSelectionChildReturnType<ChildElement, M>>, "props"> {
    propsTabbable: ElementProps<any>[];
    propsChild: ElementProps<any>[];
}

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
    "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallyTabbedIndex,
    ...args
}: UseListNavigationSelectionParameters<ParentOrChildElement, ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>): UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement> {
    const { "PropNames.SingleSelectionParameters.initiallySingleSelectedIndex": initiallySingleSelectedIndex } = args;
    const {
        context: contextSS,
        props: propsStable,
        ...retSS
    } = useSelection<ParentOrChildElement, ChildElement>({
        "PropNames.RovingTabIndexReturn.setTabbableIndex": useStableCallback((...args) => { sti1(...args); }),
        ...args
    });
    const {
        context: contextLN,
        props,
        ...retLN
    } = useListNavigation<ParentOrChildElement, ChildElement>({
        "PropNames.RovingTabIndexParameters.initiallyTabbedIndex": initiallySingleSelectedIndex ?? initiallyTabbedIndex,
        ...args
    });

    const { "PropNames.RovingTabIndexReturn.setTabbableIndex": sti1 } = retLN;

    return {
        ...retSS,
        ...retLN,
        context: useMemoObject({
            ...contextLN,
            ...contextSS
        }),
        props: [...props, propsStable]
    }
})

/**
 * @compositeParams
 */
export const useListNavigationSelectionChild = monitored(function useListNavigationSelectionChild<ChildElement extends Element>({
    info: { index, untabbable, ...void2 },
    context,
    ...args
}: UseListNavigationSelectionChildParameters<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>): UseListNavigationSelectionChildReturnType<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>> {
    const {
        info: infoSS,
        props: propsSS,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic2,
        ...retSS
    } = useSelectionChild<ChildElement>({
        info: { index, untabbable },
        context,
       ...args
    });

    const {
        props: propsLN,
        info: infoLN,
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": ocfic1,
        ...retLN
    } = useListNavigationChild<ChildElement>({
        info: { index, untabbable },
        context,
        ...args
    });

    assertEmptyObject(void2);


    return {
        "PropNames.HasCurrentFocusParameters.onCurrentFocusedInnerChanged": useStableCallback((focused, previouslyFocused, e) => {
            ocfic1?.(focused, previouslyFocused, e);
            ocfic2?.(focused, previouslyFocused, e);
        }),
        info: { ...infoSS, ...infoLN },
        ...retSS,
        ...retLN,
        propsChild: propsSS,
        propsTabbable: [propsLN],
    }
})
