import { ElementProps } from "../util/types.js";
import { UseRandomIdParameters, UseRandomIdReturnType } from "./use-random-id.js";
export interface UseRandomDualIdsParameters {
    randomIdInputParameters: UseRandomIdParameters["randomIdParameters"];
    randomIdLabelParameters: UseRandomIdParameters["randomIdParameters"];
}
export interface UseRandomDualIdsReturnType<InputElement extends Element, LabelElement extends Element> {
    propsInput: ElementProps<InputElement>;
    propsLabel: ElementProps<LabelElement>;
    randomIdInputReturn: UseRandomIdReturnType<InputElement, LabelElement>["randomIdReturn"];
    randomIdLabelReturn: UseRandomIdReturnType<LabelElement, InputElement>["randomIdReturn"];
}
/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 */
export declare function useRandomDualIds<InputElement extends Element, LabelElement extends Element>({ randomIdInputParameters, randomIdLabelParameters, }: UseRandomDualIdsParameters): UseRandomDualIdsReturnType<InputElement, LabelElement>;
//# sourceMappingURL=use-random-dual-ids.d.ts.map