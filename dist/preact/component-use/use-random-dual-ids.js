import { useMergedProps } from "../dom-helpers/use-merged-props.js";
import { monitored } from "../util/use-call-count.js";
import { $randomIdParameters, $randomIdReturn, useRandomId } from "./use-random-id.js";
export const $randomIdInputParameters = Symbol();
export const $randomIdLabelParameters = Symbol();
/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 *
 * @compositeParams
 */
export const useRandomDualIds = monitored(function useRandomDualIds({ [$randomIdInputParameters]: randomIdInputParameters, [$randomIdLabelParameters]: randomIdLabelParameters, }) {
    const { [$randomIdReturn]: randomIdInputReturn, propsReferencer: propsLabelAsReferencer, propsSource: propsInputAsSource } = useRandomId({ [$randomIdParameters]: randomIdInputParameters });
    const { [$randomIdReturn]: randomIdLabelReturn, propsReferencer: propsInputAsReferencer, propsSource: propsLabelAsSource } = useRandomId({ [$randomIdParameters]: randomIdLabelParameters });
    return {
        propsLabel: useMergedProps(propsLabelAsReferencer, propsLabelAsSource),
        propsInput: useMergedProps(propsInputAsReferencer, propsInputAsSource),
        randomIdInputReturn,
        randomIdLabelReturn
    };
});
//# sourceMappingURL=use-random-dual-ids.js.map