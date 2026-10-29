import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { ElementProps, JSX } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";
import { UseRandomIdParameters, UseRandomIdReturnType, useRandomId } from "./use-random-id.js";


export interface UseRandomDualIdsParameters {
    randomIdInputParameters: UseRandomIdParameters["randomIdParameters"];
    randomIdLabelParameters: UseRandomIdParameters["randomIdParameters"];
}

export interface UseRandomDualIdsReturnType<InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements> {
    propsInput: ElementProps<InputElementTag>;
    propsLabel: ElementProps<LabelElementTag>;
    randomIdInputReturn: UseRandomIdReturnType<InputElementTag, LabelElementTag>["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnType<LabelElementTag, InputElementTag>["randomIdReturn"];
}

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 * 
 * @compositeParams
 */
export function useRandomDualIds<InputElementTag extends keyof JSX.IntrinsicElements, LabelElementTag extends keyof JSX.IntrinsicElements>({
    randomIdInputParameters,
    randomIdLabelParameters,
}: UseRandomDualIdsParameters): UseRandomDualIdsReturnType<InputElementTag, LabelElementTag> {
    return useMonitoring(function useRandomDualIds(): UseRandomDualIdsReturnType<InputElementTag, LabelElementTag> {
        const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId<InputElementTag, LabelElementTag>({ randomIdParameters: randomIdInputParameters });
        const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId<LabelElementTag, InputElementTag>({ randomIdParameters: randomIdLabelParameters });

        return {
            propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
            propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
            randomIdInputReturn,
            randomIdLabelReturn
        }
    });
}
