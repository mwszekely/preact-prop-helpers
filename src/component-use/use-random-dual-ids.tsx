import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { ElementProps } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseRandomIdParameters, UseRandomIdReturnType, $randomIdParameters, $randomIdReturn, useRandomId } from "./use-random-id.js";

export const $randomIdInputParameters = Symbol();
export const $randomIdLabelParameters = Symbol();

export interface UseRandomDualIdsParameters {
    [$randomIdInputParameters]: UseRandomIdParameters[typeof $randomIdParameters];
    [$randomIdLabelParameters]: UseRandomIdParameters[typeof $randomIdParameters];
}

export interface UseRandomDualIdsReturnType<InputElement extends Element, LabelElement extends Element> {
    propsInput: ElementProps<InputElement>;
    propsLabel: ElementProps<LabelElement>;
    randomIdInputReturn: UseRandomIdReturnType<InputElement, LabelElement>[typeof $randomIdReturn];
    randomIdLabelReturn: UseRandomIdReturnType<LabelElement, InputElement>[typeof $randomIdReturn];
}

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 * 
 * @compositeParams
 */
export const useRandomDualIds = monitored(function useRandomDualIds<InputElement extends Element, LabelElement extends Element>({
    [$randomIdInputParameters]: randomIdInputParameters,
    [$randomIdLabelParameters]: randomIdLabelParameters,
}: UseRandomDualIdsParameters): UseRandomDualIdsReturnType<InputElement, LabelElement> {
    const { [$randomIdReturn]: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId<InputElement, LabelElement>({ [$randomIdParameters]: randomIdInputParameters });
    const { [$randomIdReturn]: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId<LabelElement, InputElement>({ [$randomIdParameters]: randomIdLabelParameters });

    return {
        propsLabel: useMergedProps<LabelElement>(propsLabelAsReferencer, propsLabelAsSource),
        propsInput: useMergedProps<InputElement>(propsInputAsReferencer, propsInputAsSource),
        randomIdInputReturn,
        randomIdLabelReturn
    }
})
