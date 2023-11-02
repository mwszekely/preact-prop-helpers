import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationChildContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildren, UseProcessedChildrenContext, useProcessedChildren } from "../component-detail/processed-children/use-processed-children.js";
import { useCreateProcessedChildrenContext } from "../component-detail/processed-children/use-rearrangeable-children.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelection, UseSelectionChild, UseSelectionChildContext, useSelectionChildDeclarative, useSelectionDeclarative } from "../component-detail/selection/use-selection.js";
import { UseListNavigationSelection, UseListNavigationSelectionChild, UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters, useListNavigationSelection, useListNavigationSelectionChild } from "../component-detail/use-list-navigation-selection.js";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseRefElement, useRefElement } from "../dom-helpers/use-ref-element.js";
import { UseTextContent, useTextContent } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocus, UseChildrenHaveFocusContext, useChildrenHaveFocus, useChildrenHaveFocusChild } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocus, useHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { ManagedChildren, UseManagedChild, UseManagedChildContext, UseManagedChildren, useManagedChild, useManagedChildren } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, useCallback } from "../util/lib.js";
import { GenericHook, OmitStrong, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps, TargetedOmit } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends UseListNavigationSelectionChildInfo<ChildElement> { }
export interface UseCompleteListNavigationChildrenInfo<ChildElement extends Element> extends UseProcessedChildInfo<ChildElement> { }

export type UseCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> = GenericHook<
    "completeListNavigation", 
    never, [
        // Ask for parameters for all the hooks this hook calls
        // These ones are straightforward:
        StandardDepsOmit<"params", UseRefElement<ParentElement>>,
        StandardDepsOmit<"params", UseManagedChildren<M>>,
        StandardDepsOmit<"params", UseChildrenHaveFocus<ChildElement>>,

        // This one is more complex because we provide some of its dependencies
        // (and thus shouldn't ask for them ourselves)
        StandardDepsOmit<"params", 
            // This is the hook whose parameters we're borrowing 
            UseListNavigationSelection<ParentElement, ChildElement>,

            // These are the dependencies that we *completely* take care of.
            // By putting them here, they're moved outright
            // Note that we ask for their parameters (instead of the return types) above.
            "childrenHaveFocusReturn" | "refElementReturn" | "managedChildrenReturn" | "rearrangeableChildrenReturn",

            // These are the definitions for the dependencies we *partially* take care of.
            [
                StandardDepsPick<"params", UseListNavigationSelection<ParentElement, ChildElement>, "linearNavigationParameters", "omit", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
                StandardDepsPick<"params", UseListNavigationSelection<ParentElement, ChildElement>, "typeaheadNavigationParameters", "omit", "isValidForTypeaheadNavigation">,
                StandardDepsPick<"params", UseListNavigationSelection<ParentElement, ChildElement>, "rovingTabIndexParameters", "omit", "untabbableBehavior">
            ]

        >
    ],
    never, [
        StandardDepsOmit<"return", UseRefElement<ParentElement>>,
        StandardDepsOmit<"return", UseManagedChildren<M>>,
        StandardDepsOmit<"return", UseChildrenHaveFocus<ChildElement>>,
        StandardDepsOmit<"return", UseListNavigationSelection<ParentElement, ChildElement>, "managedChildrenParameters" | "childrenHaveFocusParameters">,
        StandardDepsPick<"return", UseProcessedChildren<ParentElement, any>, "rearrangeableChildrenReturn", "pick", "reverse" | "sort" | "shuffle" | "rearrange">,
        StandardDepsProps<ParentElement>,
        {
            contextChildren: CompleteListNavigationContext<ChildElement, M>;
            contextProcessing: UseProcessedChildrenContext;
        }
    ]
>;

export type UseCompleteListNavigationChildren<ChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<ChildElement>> = GenericHook<
    "listNavigationChildren", 
    never, [
        StandardDepsOmit<"params", UseProcessedChildren<ChildElement, M>>,
        StandardDepsOmit<"params", UseChildrenHaveFocus<ChildElement>>,
        StandardDepsContext<UseProcessedChildrenContext>
    ],
    never, [
        StandardDepsOmit<"return", UseProcessedChildren<ChildElement, M>>,
        StandardDepsContext<UseProcessedChildContext<ChildElement, M>>
    ]
>;

export type UseCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> = GenericHook<
    "listNavigationSelectionChild", 
    never, [
        StandardDepsInfo<M, UseCompleteListNavigationChildInfoKeysParameters<M>>,
        StandardDepsContext<CompleteListNavigationContext<ChildElement, M>>,
        StandardDepsOmit<"params", UseListNavigationSelectionChild<ChildElement>, "refElementReturn">,
        StandardDepsOmit<"params", UseTextContent<ChildElement>, "refElementReturn">,
        StandardDepsOmit<"params", UseHasCurrentFocus<ChildElement>, "refElementReturn">,
        StandardDepsOmit<"params", UseRefElement<ChildElement>>
    ],
    never, [
        StandardDepsOmit<"return", UseListNavigationSelectionChild<ChildElement>, "textContentParameters" | "hasCurrentFocusParameters">,
        StandardDepsOmit<"return", UseTextContent<ChildElement>>,
        StandardDepsOmit<"return", UseHasCurrentFocus<ChildElement>>,
        StandardDepsOmit<"return", UseRefElement<ChildElement>>,
        StandardDepsOmit<"return", UseManagedChild<M>>,
        { propsChild: ElementProps<ChildElement>, propsTabbable: ElementProps<ChildElement> }
    ]
>;


export interface CompleteListNavigationContext<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    UseChildrenHaveFocusContext<ChildElement>,
    UseTypeaheadNavigationChildContext,
    UseSelectionChildContext,
    UseManagedChildContext<M>,
    RovingTabIndexChildContext {
}



export type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> =
    // All types in the user-supplied info type that aren't in the base type (since we handle it) 
    Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> |
    // except for these extra types! Because the user supplies them.
    // TODO: Where exactly does focusSelf come from? (should be typed)
    // I feel like this always happens with focusSelf, why.
    UseListNavigationSelectionChildInfoKeysParameters | "focusSelf";



/**
 * All the list-related hooks combined into one large hook that encapsulates everything.
 * 
 * @remarks Unlike most others, this hook assume's it's the final one--the "outermost" hook in the component--so it uses `useManagedChildren` and wraps everything up nicely,
 * combining event handlers that are used in multiple sub-hooks, collecting all the necessary context-related data, and merging all known DOM props together.
 * 
 * @hasChild {@link useCompleteListNavigationChild}
 * 
 * @compositeParams
 */
export const useCompleteListNavigation = monitored(function useCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    linearNavigationParameters,
    typeaheadNavigationParameters,
    rovingTabIndexParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    paginatedChildrenParameters,
    //staggeredChildrenParameters,
    refElementParameters,
    managedChildrenParameters,
    childrenHaveFocusParameters,
    ...void1
}: Parameter<UseCompleteListNavigation<ParentElement, ChildElement, M>>): ReturnType<UseCompleteListNavigation<ParentElement, ChildElement, M>> {
    const getChildren: () => ManagedChildren<M> = useCallback(() => managedChildrenReturn.getChildren(), []);
    const getLowestIndex: (() => number) = useCallback<() => number>(() => getChildren().getLowestIndex(), []);
    const getHighestIndex: (() => number) = useCallback<() => number>(() => getChildren().getHighestIndex(), []);
    const isValidForNavigation = useCallback((i: number) => {
        const child = getChildren().getAt(i);
        if (!child)
            return false;
        if (child.untabbable)
            return false;
        return true;
    }, []);

    const { propsStable: propsRef, refElementReturn } = useRefElement<ParentElement>({ refElementParameters });

    // Grab the information from the array of children we may or may not render.
    // (see useProcessedChildren -- it send this information to us if it's used.)
    // These are all stable functions, except for `contextPreprocessing`, which is how it sends things to us.
    const { context: contextProcessing, indexDemangler, indexMangler, rearrange, reverse, shuffle, sort } = useCreateProcessedChildrenContext();

    const {
        childrenHaveFocusParameters: { onCompositeFocusChange: ocfc1, ...chfp },
        managedChildrenParameters: { onChildrenMountChange, ...mcp1 },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        props,
        ...void2
    } = useListNavigationSelection<ParentElement, ChildElement>({
        managedChildrenReturn: { getChildren },
        linearNavigationParameters: { getLowestIndex, getHighestIndex, isValidForLinearNavigation: isValidForNavigation, ...linearNavigationParameters },
        typeaheadNavigationParameters: { isValidForTypeaheadNavigation: isValidForNavigation, ...typeaheadNavigationParameters },
        rovingTabIndexParameters: { untabbableBehavior: "focus-parent", ...rovingTabIndexParameters },
        singleSelectionParameters,
        multiSelectionParameters,
        paginatedChildrenParameters,
        refElementReturn,
        childrenHaveFocusReturn: { getAnyFocused: useStableCallback((): boolean => childrenHaveFocusReturn.getAnyFocused()) },
        rearrangeableChildrenReturn: { indexDemangler, indexMangler }
    });

    const { context: { childrenHaveFocusChildContext }, childrenHaveFocusReturn } = useChildrenHaveFocus({ childrenHaveFocusParameters });

    const mcr: ReturnType<UseManagedChildren<M>> = useManagedChildren<M>({
        managedChildrenParameters: {
            onChildrenMountChange,
            ...mcp1
        }
    });
    const { context: { managedChildContext: managedChildRTIContext }, managedChildrenReturn } = mcr;
    const { getTabbableIndex, setTabbableIndex } = rovingTabIndexReturn;
    const { getAnyFocused } = childrenHaveFocusReturn;

    const contextChildren = useMemoObject<CompleteListNavigationContext<ChildElement, M>>({
        childrenHaveFocusChildContext,
        rovingTabIndexContext,
        singleSelectionContext,
        multiSelectionContext,
        typeaheadNavigationContext,
        managedChildContext: managedChildRTIContext,
    });

    assertEmptyObject(void1);
    assertEmptyObject(void2);
    assertEmptyObject(chfp);
    assertEmptyObject(mcp1);

    const processedChildrenContext = useMemoObject({ getTabbableIndex, setTabbableIndex, getAnyFocused, getElement: refElementReturn.getElement });

    return {
        contextChildren,
        contextProcessing: useMemoObject({
            processedChildrenContext,
            ...contextProcessing
        }),
        props: useMergedProps(props, propsRef),
        managedChildrenReturn,
        linearNavigationReturn,
        rovingTabIndexReturn,
        singleSelectionReturn,
        typeaheadNavigationReturn,
        childrenHaveFocusReturn,
        refElementReturn,
        rearrangeableChildrenReturn: { reverse, shuffle, rearrange, sort },
    }
});

/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 * 
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize 
 */
export const useCompleteListNavigationChildren = monitored(function useCompleteListNavigationChildren<TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>>({
    context,
    paginatedChildrenParameters,
    rearrangeableChildrenParameters,
    staggeredChildrenParameters,
    managedChildrenParameters
}: Parameter<UseCompleteListNavigationChildren<TabbableChildElement, M>>): ReturnType<UseCompleteListNavigationChildren<TabbableChildElement, M>> {
    const {
        context: contextRPS,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        managedChildrenReturn
    } = useProcessedChildren<TabbableChildElement, M>({
        paginatedChildrenParameters,
        rearrangeableChildrenParameters,
        staggeredChildrenParameters,
        managedChildrenParameters,
        context,
    });

    return {
        context: contextRPS,
        paginatedChildrenReturn,
        rearrangeableChildrenReturn,
        staggeredChildrenReturn,
        managedChildrenReturn
    }
})

/**
 * 
 * @compositeParams
 */
export const useCompleteListNavigationChild = monitored(function useCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    info: { index, focusSelf, untabbable, ...customUserInfo },  // The "...info" is empty if M is the same as UCLNCI<ChildElement>.
    textContentParameters: { getText, onTextContentChange: otcc1, ...void10 },
    refElementParameters,
    hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 },
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 },
    ...void1
}: Parameter<UseCompleteListNavigationChild<ChildElement, M>>): ReturnType<UseCompleteListNavigationChild<ChildElement, M>> {
    const { refElementReturn, propsStable, ...void6 } = useRefElement<ChildElement>({ refElementParameters });
    const {
        hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void3 },
        pressParameters: { excludeSpace, onPressSync, ...void2 },
        textContentParameters: { onTextContentChange: otcc2, ...void8 },
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        info: infoFromListNav,
        rovingTabIndexChildReturn,
        propsChild,
        propsTabbable,
        ...void4
    } = useListNavigationSelectionChild<ChildElement>({
        info: { index, untabbable },
        context: { rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext },
        singleSelectionChildParameters,
        multiSelectionChildParameters,
        refElementReturn
    });
    const { textContentReturn, ...void9 } = useTextContent({ refElementReturn, textContentParameters: { getText, onTextContentChange: useStableMergedCallback(otcc1, otcc2) } })

    const allStandardInfo: UseCompleteListNavigationChildInfo<ChildElement> = {
        index,
        focusSelf,
        getElement: refElementReturn.getElement,
        untabbable,
        ...infoFromListNav,
    }

    const { managedChildReturn } = useManagedChild<M>({ context: { managedChildContext }, info: { ...allStandardInfo, ...customUserInfo } as M });

    const { hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2 } } = useChildrenHaveFocusChild({ context: { childrenHaveFocusChildContext } });
    const onCurrentFocusedInnerChanged = useStableMergedCallback(ocfic1, ocfic2, ocfic3);
    const { hasCurrentFocusReturn, propsStable: hcfrPropsStable } = useHasCurrentFocus<ChildElement>({
        hasCurrentFocusParameters: {
            onCurrentFocusedInnerChanged,
            onCurrentFocusedChanged
        },
        refElementReturn
    });


    const props = useMergedProps<ChildElement>(
        propsStable,
        hcfrPropsStable,
        propsChild
    );

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

    return {
        propsChild: props,
        propsTabbable,
        pressParameters: {
            onPressSync,
            excludeSpace
        },
        textContentReturn,
        refElementReturn,
        singleSelectionChildReturn,
        multiSelectionChildReturn,
        hasCurrentFocusReturn,
        managedChildReturn,
        rovingTabIndexChildReturn
    }

});


export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<MakeSelectionDeclarativeParameters<Parameter<UseCompleteListNavigation<ParentElement, ChildElement, M>>>, "singleSelectionParameters" | "singleSelectionReturn">,
    TargetedOmit<Parameter<UseSelection<ParentElement, ChildElement>>, "singleSelectionParameters", "initiallySingleSelectedIndex" | "onSingleSelectedIndexChange"> { }

export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    TargetedOmit<ReturnType<UseCompleteListNavigation<ParentElement, ChildElement, M>>, "singleSelectionReturn", "changeSingleSelectedIndex">,
    OmitStrong<ReturnType<UseCompleteListNavigation<ParentElement, ChildElement, M>>, "singleSelectionReturn"> { }


export interface UseCompleteListNavigationChildDeclarativeParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    OmitStrong<MakeSelectionDeclarativeChildParameters<Parameter<UseCompleteListNavigationChild<ChildElement, M>>>, "multiSelectionChildParameters" | "multiSelectionChildReturn">,
    TargetedOmit<Parameter<UseSelectionChild<ChildElement>>, "multiSelectionChildParameters", "initiallyMultiSelected" | "onMultiSelectChange"> { }

export interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends
    TargetedOmit<ReturnType<UseCompleteListNavigationChild<ChildElement, M>>, "singleSelectionChildReturn", never>,
    TargetedOmit<ReturnType<UseCompleteListNavigationChild<ChildElement, M>>, "multiSelectionChildReturn", "changeMultiSelected">,
    OmitStrong<ReturnType<UseCompleteListNavigationChild<ChildElement, M>>, "singleSelectionChildReturn" | "multiSelectionChildReturn"> { }

export function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    singleSelectionParameters,
    singleSelectionDeclarativeParameters,
    ...rest
}: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M> {

    const ret: ReturnType<UseCompleteListNavigation<ParentElement, ChildElement, M>> = useCompleteListNavigation<ParentElement, ChildElement, M>({
        singleSelectionParameters: {
            initiallySingleSelectedIndex: singleSelectionDeclarativeParameters.singleSelectedIndex,
            // Needs to be a (stable) callback because of declaration order
            onSingleSelectedIndexChange: useStableCallback((...e) => onSingleSelectedIndexChange?.(...e)),
            ...singleSelectionParameters
        },
        ...rest
    });
    const { singleSelectionParameters: { onSingleSelectedIndexChange, ...void3 }, ...void2 } = useSelectionDeclarative({ singleSelectionDeclarativeParameters, singleSelectionReturn: ret.singleSelectionReturn });

    const { singleSelectionReturn: { getSingleSelectedIndex }, ...ret2 } = ret;
    assertEmptyObject(void2);
    assertEmptyObject(void3);
    return { ...ret2, singleSelectionReturn: { getSingleSelectedIndex } };
}


export function useCompleteListNavigationChildDeclarative<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({
    multiSelectionChildParameters,
    multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange },
    info: i1,
    ...rest
}: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M> {

    const { multiSelectionChildParameters: { onMultiSelectChange }, info: i2, ...void2 } = useSelectionChildDeclarative({
        multiSelectionChildDeclarativeParameters: { onMultiSelectedChange, multiSelected },
        multiSelectionChildReturn: {
            changeMultiSelected: useStableCallback((...args) => { ret.multiSelectionChildReturn.changeMultiSelected(...args); })
        }
    });

    const ret: ReturnType<UseCompleteListNavigationChild<ChildElement, M>> = useCompleteListNavigationChild({
        multiSelectionChildParameters: {
            initiallyMultiSelected: multiSelected,
            onMultiSelectChange: useStableCallback((e) => { onMultiSelectChange!(e); }),
            ...multiSelectionChildParameters
        },
        info: { ...i1, ...i2 },
        ...rest
    });

    const { multiSelectionChildReturn, ...ret2 } = ret;
    assertEmptyObject(void2);
    return { ...ret2, multiSelectionChildReturn };
}