import { h } from "preact";
import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { useRandomId, UseRandomIdParameters, UseRandomIdReturnType } from "./use-random-id.js";


export interface UseRandomDualIdsParameters {
    randomIdInputParameters: UseRandomIdParameters["randomIdParameters"];
    randomIdLabelParameters: UseRandomIdParameters["randomIdParameters"];
}

export interface UseRandomDualIdsReturnType<InputElement extends Element, LabelElement extends Element> {
    propsInput: h.JSX.HTMLAttributes<InputElement>;
    propsLabel: h.JSX.HTMLAttributes<LabelElement>;
    randomIdInputReturn: UseRandomIdReturnType<InputElement, LabelElement>["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnType<LabelElement, InputElement>["randomIdReturn"];
}

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 */
export function useRandomDualIds<InputElement extends Element, LabelElement extends Element>({
    randomIdInputParameters,
    randomIdLabelParameters,
}: UseRandomDualIdsParameters): UseRandomDualIdsReturnType<InputElement, LabelElement> {
    monitorCallCount(useRandomDualIds);

    const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId<InputElement, LabelElement>({ randomIdParameters: randomIdInputParameters });
    const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId<LabelElement, InputElement>({ randomIdParameters: randomIdLabelParameters });

    return {
        propsLabel: useMergedProps<LabelElement>(propsLabelAsReferencer, propsLabelAsSource),
        propsInput: useMergedProps<InputElement>(propsInputAsReferencer, propsInputAsSource),
        randomIdInputReturn,
        randomIdLabelReturn
    }
}
