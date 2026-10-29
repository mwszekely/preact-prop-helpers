import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseGenericChildParameters } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, ExtendMerge, OmitStrong, TargetedOmit, JSX } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysParameters, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType, useSelection, useSelectionChild } from "./selection/use-selection.js";

export interface UseListNavigationSelectionChildInfo<TabbableChildElementTag extends keyof JSX.IntrinsicElements> extends UseListNavigationChildInfo<TabbableChildElementTag>, UseSelectionChildInfo<TabbableChildElementTag> { }
export interface UseListNavigationSelectionChildContext extends UseListNavigationContext, UseSelectionContext { }

export interface UseListNavigationSelectionParameters<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseListNavigationSelectionChildInfo<ChildElementTag>> extends
    OmitStrong<UseListNavigationParameters<ParentOrChildElementTag, ChildElementTag, M>, "rovingTabIndexParameters">,
    TargetedOmit<UseListNavigationParameters<ParentOrChildElementTag, ChildElementTag, M>, "rovingTabIndexParameters", "initiallyTabbedIndex">,
    OmitStrong<UseSelectionParameters<ParentOrChildElementTag, ChildElementTag, M>, "rovingTabIndexReturn"> { }
export interface UseListNavigationSelectionReturnType<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements> extends OmitStrong<UseListNavigationReturnType<ParentOrChildElementTag, ChildElementTag>, "props">, OmitStrong<UseSelectionReturnType<ParentOrChildElementTag, ChildElementTag>, "propsStable"> {
    context: UseListNavigationSelectionChildContext;
    props: ElementProps<ParentOrChildElementTag>;
}

export type UseListNavigationSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSelectionChildInfoKeysParameters;
export type UseListNavigationSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;

export interface UseListNavigationSelectionChildParameters<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseListNavigationSelectionChildInfo<ChildElementTag>> extends
    UseGenericChildParameters<UseListNavigationSelectionChildContext, Pick<UseListNavigationSelectionChildInfo<ChildElementTag>, UseListNavigationSelectionChildInfoKeysParameters>>,
    OmitStrong<UseListNavigationChildParameters<ChildElementTag>, "context" | "info">,
    OmitStrong<UseSelectionChildParameters<ChildElementTag, M>, "context" | "info"> {
}

export interface UseListNavigationSelectionChildReturnType<ChildElementTag extends keyof JSX.IntrinsicElements, M extends UseListNavigationSelectionChildInfo<ChildElementTag>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElementTag>, UseSelectionChildReturnType<ChildElementTag, M>>, "props"> {
    propsTabbable: ElementProps<any>;
    propsChild: ElementProps<any>;
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
export function useListNavigationSelection<ParentOrChildElementTag extends keyof JSX.IntrinsicElements, ChildElementTag extends keyof JSX.IntrinsicElements>({
    linearNavigationParameters,
    rovingTabIndexParameters,
    typeaheadNavigationParameters,
    singleSelectionParameters,
    multiSelectionParameters,
    managedChildrenReturn,
    refElementReturn,
    paginatedChildrenParameters,
    processedIndexManglerReturn,
    childrenHaveFocusReturn,
    ...void3
}: UseListNavigationSelectionParameters<ParentOrChildElementTag, ChildElementTag, UseListNavigationSelectionChildInfo<ChildElementTag>>): UseListNavigationSelectionReturnType<ParentOrChildElementTag, ChildElementTag> {
    return useMonitoring(function useListNavigationSelection(): UseListNavigationSelectionReturnType<ParentOrChildElementTag, ChildElementTag> {
        const { context: contextSS, propsStable, ...retSS } = useSelection<ParentOrChildElementTag, ChildElementTag>({
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
            ...retLN
        } = useListNavigation<ParentOrChildElementTag, ChildElementTag>({
            rovingTabIndexParameters: { ...rovingTabIndexParameters, initiallyTabbedIndex: singleSelectionParameters.initiallySingleSelectedIndex || 0 },
            linearNavigationParameters,
            paginatedChildrenParameters,
            typeaheadNavigationParameters,
            managedChildrenReturn,
            refElementReturn,
            processedIndexManglerReturn
        });

        assertEmptyObject(void3);

        return {
            rovingTabIndexReturn,
            ...retSS,
            ...retLN,
            context: useMemoObject({
                ...contextLN,
                ...contextSS
            }),
            props: useMergedProps(props, propsStable)
        }
    });
}

/**
 * @compositeParams
 */
export function useListNavigationSelectionChild<ChildElementTag extends keyof JSX.IntrinsicElements>({
    info: { index, untabbable, ...void2 },
    context,
    refElementReturn,
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1
}: UseListNavigationSelectionChildParameters<ChildElementTag, UseListNavigationSelectionChildInfo<ChildElementTag>>): UseListNavigationSelectionChildReturnType<ChildElementTag, UseListNavigationSelectionChildInfo<ChildElementTag>> {
    return useMonitoring(function useListNavigationSelectionChild(): UseListNavigationSelectionChildReturnType<ChildElementTag, UseListNavigationSelectionChildInfo<ChildElementTag>> {
        const {
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic2, ...void3 },
            info: infoSS,
            multiSelectionChildReturn,
            singleSelectionChildReturn,
            props: propsSS,
            selectionChildReturn,
            ...void9
        } = useSelectionChild<ChildElementTag>({
            info: { index, untabbable },
            context,
            multiSelectionChildParameters,
            singleSelectionChildParameters
        });

        const {
            hasCurrentFocusParameters: { onCurrentFocusedInnerChanged: ocfic1, ...void6 },
            pressParameters: { excludeSpace },
            rovingTabIndexChildReturn,
            textContentParameters,
            props: propsLN,
            info: infoLN,
            ...void8
        } = useListNavigationChild<ChildElementTag>({
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
            pressParameters: { excludeSpace },
            selectionChildReturn,
            info: { ...infoSS, ...infoLN },
            rovingTabIndexChildReturn,
            multiSelectionChildReturn,
            singleSelectionChildReturn,
            textContentParameters,
            propsChild: propsSS,
            propsTabbable: propsLN
        }
    });
}
