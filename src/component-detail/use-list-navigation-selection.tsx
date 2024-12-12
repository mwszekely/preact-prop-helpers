import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { UseGenericChildParameters } from "../preact-extensions/use-managed-children.js";
import { useStableCallback, useStableMergedCallback } from "../preact-extensions/use-stable-callback.js";
import { useMemoObject } from "../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../util/assert.js";
import { ElementProps, ExtendMerge, OmitStrong, TargetedOmit } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";
import { UseListNavigationChildInfo, UseListNavigationChildInfoKeysParameters, UseListNavigationChildInfoKeysReturnType, UseListNavigationChildParameters, UseListNavigationChildReturnType, UseListNavigationContext, UseListNavigationParameters, UseListNavigationReturnType, useListNavigation, useListNavigationChild } from "./keyboard-navigation/use-list-navigation-partial.js";
import { UseSelectionChildInfo, UseSelectionChildInfoKeysParameters, UseSelectionChildInfoKeysReturnType, UseSelectionChildParameters, UseSelectionChildReturnType, UseSelectionContext, UseSelectionParameters, UseSelectionReturnType, useSelection, useSelectionChild } from "./selection/use-selection.js";

export interface UseListNavigationSelectionChildInfo<TabbableChildElement extends Element> extends UseListNavigationChildInfo<TabbableChildElement>, UseSelectionChildInfo<TabbableChildElement> { }
export interface UseListNavigationSelectionChildContext extends UseListNavigationContext, UseSelectionContext { }

export interface UseListNavigationSelectionParameters<ParentOrChildElement extends Element, ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends
    OmitStrong<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexParameters">,
    TargetedOmit<UseListNavigationParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexParameters", "initiallyTabbedIndex">,
    OmitStrong<UseSelectionParameters<ParentOrChildElement, ChildElement, M>, "rovingTabIndexReturn"> { }
export interface UseListNavigationSelectionReturnType<ParentOrChildElement extends Element, ChildElement extends Element> extends OmitStrong<UseListNavigationReturnType<ParentOrChildElement, ChildElement>, "props">, OmitStrong<UseSelectionReturnType<ParentOrChildElement, ChildElement>, "propsStable"> {
    context: UseListNavigationSelectionChildContext;
    props: ElementProps<ParentOrChildElement>;
}

export type UseListNavigationSelectionChildInfoKeysParameters = UseListNavigationChildInfoKeysParameters | UseSelectionChildInfoKeysParameters;
export type UseListNavigationSelectionChildInfoKeysReturnType = UseListNavigationChildInfoKeysReturnType | UseSelectionChildInfoKeysReturnType;

export interface UseListNavigationSelectionChildParameters<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends
    UseGenericChildParameters<UseListNavigationSelectionChildContext, Pick<UseListNavigationSelectionChildInfo<ChildElement>, UseListNavigationSelectionChildInfoKeysParameters>>,
    OmitStrong<UseListNavigationChildParameters<ChildElement>, "context" | "info">,
    OmitStrong<UseSelectionChildParameters<ChildElement, M>, "context" | "info"> {
}

export interface UseListNavigationSelectionChildReturnType<ChildElement extends Element, M extends UseListNavigationSelectionChildInfo<ChildElement>> extends OmitStrong<ExtendMerge<UseListNavigationChildReturnType<ChildElement>, UseSelectionChildReturnType<ChildElement, M>>, "props"> {
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
export function useListNavigationSelection<ParentOrChildElement extends Element, ChildElement extends Element>({
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
}: UseListNavigationSelectionParameters<ParentOrChildElement, ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>): UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement> {
    return useMonitoring(function useListNavigationSelection(): UseListNavigationSelectionReturnType<ParentOrChildElement, ChildElement> {
        const { context: contextSS, propsStable, ...retSS } = useSelection<ParentOrChildElement, ChildElement>({
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
        } = useListNavigation<ParentOrChildElement, ChildElement>({
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
export function useListNavigationSelectionChild<ChildElement extends Element>({
    info: { index, untabbable, ...void2 },
    context,
    refElementReturn,
    singleSelectionChildParameters,
    multiSelectionChildParameters,
    ...void1
}: UseListNavigationSelectionChildParameters<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>>): UseListNavigationSelectionChildReturnType<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>> {
    return useMonitoring(function useListNavigationSelectionChild(): UseListNavigationSelectionChildReturnType<ChildElement, UseListNavigationSelectionChildInfo<ChildElement>> {
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
            multiSelectionChildReturn,
            singleSelectionChildReturn,
            textContentParameters,
            propsChild: propsSS,
            propsTabbable: propsLN
        }
    });
}
