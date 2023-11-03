import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { ElementProps } from "../util/lib.js";
import { Parameter, StandardDepsPick, StandardDepsRename, StandardHook } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";
import { UseRandomId, useRandomId } from "./use-random-id.js";

export type UseRandomDualIds<InputElement extends Element, LabelElement extends Element> = StandardHook<
    "randomDualIds", 
    never, [
        StandardDepsRename<StandardDepsPick<"params", UseRandomId<InputElement, LabelElement>>, "randomIdParameters", "randomIdInputParameters">,
        StandardDepsRename<StandardDepsPick<"params", UseRandomId<LabelElement, InputElement>>, "randomIdParameters", "randomIdLabelParameters">,
    ],
    never, [
        StandardDepsRename<StandardDepsPick<"return", UseRandomId<InputElement, LabelElement>>, "randomIdReturn", "randomIdInputReturn">,
        StandardDepsRename<StandardDepsPick<"return", UseRandomId<LabelElement, InputElement>>, "randomIdReturn", "randomIdLabelReturn">,
        { propsInput: ElementProps<InputElement>; propsLabel: ElementProps<LabelElement>; }
    ]
>;

/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 * 
 * @compositeParams
 */
export const useRandomDualIds = monitored(function useRandomDualIds<InputElement extends Element, LabelElement extends Element>({
    randomIdInputParameters,
    randomIdLabelParameters,
}: Parameter<UseRandomDualIds<InputElement, LabelElement>>): ReturnType<UseRandomDualIds<InputElement, LabelElement>> {
    const { randomIdReturn: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId<InputElement, LabelElement>({ randomIdParameters: randomIdInputParameters });
    const { randomIdReturn: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId<LabelElement, InputElement>({ randomIdParameters: randomIdLabelParameters });

    return {
        propsLabel: useMergedProps<LabelElement>(propsLabelAsReferencer, propsLabelAsSource),
        propsInput: useMergedProps<InputElement>(propsInputAsReferencer, propsInputAsSource),
        randomIdInputReturn,
        randomIdLabelReturn
    }
})
