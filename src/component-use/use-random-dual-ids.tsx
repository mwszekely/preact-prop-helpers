import { useMergedProps } from "../dom-helpers/use-merged-props";
import { h } from "preact";
import { useRandomId, UseRandomIdParameters, UseRandomIdReturnType } from "./use-random-id";


interface UseRandomDualIdsParameters {
    randomIdInputParameters: UseRandomIdParameters["randomIdParameters"];
    randomIdLabelParameters: UseRandomIdParameters["randomIdParameters"];
}

export interface UseRandomDualIdsReturnType<InputElement extends Element, LabelElement extends Element> {
    propsInput: h.JSX.HTMLAttributes<InputElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
    randomIdInputReturn: UseRandomIdReturnType<InputElement>["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnType<LabelElement>["randomIdReturn"];
}

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 */
export function useRandomDualIds<InputElement extends Element, LabelElement extends Element>({
    randomIdInputParameters,
    randomIdLabelParameters,
}: UseRandomDualIdsParameters): UseRandomDualIdsReturnType<InputElement, LabelElement> {

    const { randomIdReturn: randomIdInputReturn, propsReferencer: propsInputAsReferencer, propsSource: propsInputAsSource } = useRandomId<InputElement>({ randomIdParameters: randomIdInputParameters });
    const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsLabelAsSource } = useRandomId<LabelElement>({ randomIdParameters: randomIdLabelParameters });

    return {
        propsLabel: useMergedProps<LabelElement>(propsLabelAsReferencer, propsLabelAsSource),
        propsInput: useMergedProps<InputElement>(propsInputAsReferencer, propsInputAsSource),
        randomIdInputReturn,
        randomIdLabelReturn
    }
}
