import { ElementProps } from "../util/types.js";
import { UseRandomIdParameters, UseRandomIdReturnType, $randomIdParameters, $randomIdReturn } from "./use-random-id.js";
export declare const $randomIdInputParameters: unique symbol;
export declare const $randomIdLabelParameters: unique symbol;
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
export declare const useRandomDualIds: <InputElement extends Element, LabelElement extends Element>({ [$randomIdInputParameters]: randomIdInputParameters, [$randomIdLabelParameters]: randomIdLabelParameters, }: UseRandomDualIdsParameters) => UseRandomDualIdsReturnType<InputElement, LabelElement>;
//# sourceMappingURL=use-random-dual-ids.d.ts.map