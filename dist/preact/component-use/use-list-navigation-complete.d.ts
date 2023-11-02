import { RovingTabIndexChildContext } from "../component-detail/keyboard-navigation/use-roving-tabindex.js";
import { UseTypeaheadNavigationChildContext } from "../component-detail/keyboard-navigation/use-typeahead-navigation.js";
import { UseProcessedChildContext, UseProcessedChildInfo, UseProcessedChildren, UseProcessedChildrenContext } from "../component-detail/processed-children/use-processed-children.js";
import { MakeSelectionDeclarativeChildParameters, MakeSelectionDeclarativeParameters, UseSelection, UseSelectionChild, UseSelectionChildContext } from "../component-detail/selection/use-selection.js";
import { UseListNavigationSelection, UseListNavigationSelectionChild, UseListNavigationSelectionChildInfo, UseListNavigationSelectionChildInfoKeysParameters } from "../component-detail/use-list-navigation-selection.js";
import { UseRefElement } from "../dom-helpers/use-ref-element.js";
import { UseTextContent } from "../dom-helpers/use-text-content.js";
import { UseChildrenHaveFocus, UseChildrenHaveFocusContext } from "../observers/use-children-have-focus.js";
import { UseHasCurrentFocus } from "../observers/use-has-current-focus.js";
import { UseManagedChild, UseManagedChildContext, UseManagedChildren } from "../preact-extensions/use-managed-children.js";
import { ElementProps } from "../util/lib.js";
import { GenericHook, OmitStrong, Parameter, StandardDepsContext, StandardDepsInfo, StandardDepsOmit, StandardDepsPick, StandardDepsProps, TargetedOmit } from "../util/types.js";
export interface UseCompleteListNavigationChildInfo<ChildElement extends Element> extends UseListNavigationSelectionChildInfo<ChildElement> {
}
export interface UseCompleteListNavigationChildrenInfo<ChildElement extends Element> extends UseProcessedChildInfo<ChildElement> {
}
export type UseCompleteListNavigation<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> = GenericHook<"completeListNavigation", never, [
    StandardDepsOmit<"params", UseRefElement<ParentElement>>,
    StandardDepsOmit<"params", UseManagedChildren<M>>,
    StandardDepsOmit<"params", UseChildrenHaveFocus<ChildElement>>,
    StandardDepsOmit<"params", UseListNavigationSelection<ParentElement, ChildElement>, "childrenHaveFocusReturn" | "refElementReturn" | "managedChildrenReturn" | "rearrangeableChildrenReturn", [
        StandardDepsPick<"params", UseListNavigationSelection<ParentElement, ChildElement>, "linearNavigationParameters", "omit", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">,
        StandardDepsPick<"params", UseListNavigationSelection<ParentElement, ChildElement>, "typeaheadNavigationParameters", "omit", "isValidForTypeaheadNavigation">,
        StandardDepsPick<"params", UseListNavigationSelection<ParentElement, ChildElement>, "rovingTabIndexParameters", "omit", "untabbableBehavior">
    ]>
], never, [
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
]>;
export type UseCompleteListNavigationChildren<ChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<ChildElement>> = GenericHook<"listNavigationChildren", never, [
    StandardDepsOmit<"params", UseProcessedChildren<ChildElement, M>>,
    StandardDepsOmit<"params", UseChildrenHaveFocus<ChildElement>>,
    StandardDepsContext<UseProcessedChildrenContext>
], never, [
    StandardDepsOmit<"return", UseProcessedChildren<ChildElement, M>>,
    StandardDepsContext<UseProcessedChildContext<ChildElement, M>>
]>;
export type UseCompleteListNavigationChild<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> = GenericHook<"listNavigationSelectionChild", never, [
    StandardDepsInfo<M, UseCompleteListNavigationChildInfoKeysParameters<M>>,
    StandardDepsContext<CompleteListNavigationContext<ChildElement, M>>,
    StandardDepsOmit<"params", UseListNavigationSelectionChild<ChildElement>, "refElementReturn">,
    StandardDepsOmit<"params", UseTextContent<ChildElement>, "refElementReturn">,
    StandardDepsOmit<"params", UseHasCurrentFocus<ChildElement>, "refElementReturn">,
    StandardDepsOmit<"params", UseRefElement<ChildElement>>
], never, [
    StandardDepsOmit<"return", UseListNavigationSelectionChild<ChildElement>, "textContentParameters" | "hasCurrentFocusParameters">,
    StandardDepsOmit<"return", UseTextContent<ChildElement>>,
    StandardDepsOmit<"return", UseHasCurrentFocus<ChildElement>>,
    StandardDepsOmit<"return", UseRefElement<ChildElement>>,
    StandardDepsOmit<"return", UseManagedChild<M>>,
    {
        propsChild: ElementProps<ChildElement>;
        propsTabbable: ElementProps<ChildElement>;
    }
]>;
export interface CompleteListNavigationContext<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends UseChildrenHaveFocusContext<ChildElement>, UseTypeaheadNavigationChildContext, UseSelectionChildContext, UseManagedChildContext<M>, RovingTabIndexChildContext {
}
export type UseCompleteListNavigationChildInfoKeysParameters<M extends UseCompleteListNavigationChildInfo<any>> = Exclude<keyof M, keyof UseCompleteListNavigationChildInfo<any>> | UseListNavigationSelectionChildInfoKeysParameters | "focusSelf";
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
export declare const useCompleteListNavigation: <ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ linearNavigationParameters, typeaheadNavigationParameters, rovingTabIndexParameters, singleSelectionParameters, multiSelectionParameters, paginatedChildrenParameters, refElementParameters, managedChildrenParameters, childrenHaveFocusParameters, ...void1 }: {} & StandardDepsOmit<"params", UseRefElement<ParentElement>> & StandardDepsOmit<"params", UseManagedChildren<M>> & StandardDepsOmit<"params", UseChildrenHaveFocus<ChildElement>> & StandardDepsOmit<"params", UseListNavigationSelection<ParentElement, ChildElement>, "refElementReturn" | "childrenHaveFocusReturn" | "managedChildrenReturn" | "rearrangeableChildrenReturn", [StandardDepsPick<"params", UseListNavigationSelection<ParentElement, ChildElement>, "linearNavigationParameters", "omit", "getLowestIndex" | "getHighestIndex" | "isValidForLinearNavigation">, StandardDepsPick<"params", UseListNavigationSelection<ParentElement, ChildElement>, "typeaheadNavigationParameters", "omit", "isValidForTypeaheadNavigation">, StandardDepsPick<"params", UseListNavigationSelection<ParentElement, ChildElement>, "rovingTabIndexParameters", "omit", "untabbableBehavior">]>) => {} & StandardDepsOmit<"return", UseRefElement<ParentElement>> & StandardDepsOmit<"return", UseManagedChildren<M>> & StandardDepsOmit<"return", UseChildrenHaveFocus<ChildElement>> & StandardDepsOmit<"return", UseListNavigationSelection<ParentElement, ChildElement>, "childrenHaveFocusParameters" | "managedChildrenParameters"> & StandardDepsPick<"return", UseProcessedChildren<ParentElement, any>, "rearrangeableChildrenReturn", "pick", "reverse" | "sort" | "shuffle" | "rearrange"> & StandardDepsProps<ParentElement> & {
    contextChildren: CompleteListNavigationContext<ChildElement, M>;
    contextProcessing: UseProcessedChildrenContext;
};
/**
 * Helper for `useCompleteListNavigation` that handles the array of children in a way that allows for sorting, pagination, and staggering. Optional but recommended.
 *
 * @remarks Each child must also call `useProcessedChild`, and use its information to optimize
 */
export declare const useCompleteListNavigationChildren: <TabbableChildElement extends Element, M extends UseCompleteListNavigationChildrenInfo<TabbableChildElement>>({ context, paginatedChildrenParameters, rearrangeableChildrenParameters, staggeredChildrenParameters, managedChildrenParameters }: {} & StandardDepsOmit<"params", UseProcessedChildren<TabbableChildElement, M>> & StandardDepsOmit<"params", UseChildrenHaveFocus<TabbableChildElement>> & StandardDepsContext<UseProcessedChildrenContext, keyof UseProcessedChildrenContext>) => {} & StandardDepsOmit<"return", UseProcessedChildren<TabbableChildElement, M>> & StandardDepsContext<UseProcessedChildContext<TabbableChildElement, M>, keyof UseProcessedChildContext<ChildElement, M_1>>;
/**
 *
 * @compositeParams
 */
export declare const useCompleteListNavigationChild: <ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ info: { index, focusSelf, untabbable, ...customUserInfo }, textContentParameters: { getText, onTextContentChange: otcc1, ...void10 }, refElementParameters, hasCurrentFocusParameters: { onCurrentFocusedChanged, onCurrentFocusedInnerChanged: ocfic3, ...void7 }, singleSelectionChildParameters, multiSelectionChildParameters, context: { managedChildContext, rovingTabIndexContext, singleSelectionContext, multiSelectionContext, typeaheadNavigationContext, childrenHaveFocusChildContext, ...void5 }, ...void1 }: {} & StandardDepsInfo<M, UseCompleteListNavigationChildInfoKeysParameters<M>> & StandardDepsContext<CompleteListNavigationContext<ChildElement, M>, keyof CompleteListNavigationContext<ChildElement_1, M_1>> & StandardDepsOmit<"params", UseListNavigationSelectionChild<ChildElement>, "refElementReturn"> & StandardDepsOmit<"params", UseTextContent<ChildElement>, "refElementReturn"> & StandardDepsOmit<"params", UseHasCurrentFocus<ChildElement>, "refElementReturn"> & StandardDepsOmit<"params", UseRefElement<ChildElement>>) => {} & StandardDepsOmit<"return", UseListNavigationSelectionChild<ChildElement>, "hasCurrentFocusParameters" | "textContentParameters"> & StandardDepsOmit<"return", UseTextContent<ChildElement_1>> & StandardDepsOmit<"return", UseHasCurrentFocus<ChildElement>> & StandardDepsOmit<"return", UseRefElement<ChildElement>> & StandardDepsOmit<"return", UseManagedChild<M>> & {
    propsChild: ElementProps<ChildElement>;
    propsTabbable: ElementProps<ChildElement>;
};
export interface UseCompleteListNavigationDeclarativeParameters<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeParameters<Parameter<UseCompleteListNavigation<ParentElement, ChildElement, M>>>, "singleSelectionParameters" | "singleSelectionReturn">, TargetedOmit<Parameter<UseSelection<ParentElement, ChildElement>>, "singleSelectionParameters", "initiallySingleSelectedIndex" | "onSingleSelectedIndexChange"> {
}
export interface UseCompleteListNavigationDeclarativeReturnType<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<ReturnType<UseCompleteListNavigation<ParentElement, ChildElement, M>>, "singleSelectionReturn", "changeSingleSelectedIndex">, OmitStrong<ReturnType<UseCompleteListNavigation<ParentElement, ChildElement, M>>, "singleSelectionReturn"> {
}
export interface UseCompleteListNavigationChildDeclarativeParameters<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends OmitStrong<MakeSelectionDeclarativeChildParameters<Parameter<UseCompleteListNavigationChild<ChildElement, M>>>, "multiSelectionChildParameters" | "multiSelectionChildReturn">, TargetedOmit<Parameter<UseSelectionChild<ChildElement>>, "multiSelectionChildParameters", "initiallyMultiSelected" | "onMultiSelectChange"> {
}
export interface UseCompleteListNavigationChildDeclarativeReturnType<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>> extends TargetedOmit<ReturnType<UseCompleteListNavigationChild<ChildElement, M>>, "singleSelectionChildReturn", never>, TargetedOmit<ReturnType<UseCompleteListNavigationChild<ChildElement, M>>, "multiSelectionChildReturn", "changeMultiSelected">, OmitStrong<ReturnType<UseCompleteListNavigationChild<ChildElement, M>>, "singleSelectionChildReturn" | "multiSelectionChildReturn"> {
}
export declare function useCompleteListNavigationDeclarative<ParentElement extends Element, ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ singleSelectionParameters, singleSelectionDeclarativeParameters, ...rest }: UseCompleteListNavigationDeclarativeParameters<ParentElement, ChildElement, M>): UseCompleteListNavigationDeclarativeReturnType<ParentElement, ChildElement, M>;
export declare function useCompleteListNavigationChildDeclarative<ChildElement extends Element, M extends UseCompleteListNavigationChildInfo<ChildElement>>({ multiSelectionChildParameters, multiSelectionChildDeclarativeParameters: { multiSelected, onMultiSelectedChange }, info: i1, ...rest }: UseCompleteListNavigationChildDeclarativeParameters<ChildElement, M>): UseCompleteListNavigationChildDeclarativeReturnType<ChildElement, M>;
//# sourceMappingURL=use-list-navigation-complete.d.ts.map