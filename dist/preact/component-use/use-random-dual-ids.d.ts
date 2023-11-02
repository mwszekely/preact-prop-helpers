import { ElementProps } from "../util/lib.js";
import { GenericHook, Parameter, StandardDepsPick, StandardDepsRename } from "../util/types.js";
import { UseRandomId } from "./use-random-id.js";
export type UseRandomDualIds<InputElement extends Element, LabelElement extends Element> = GenericHook<"randomDualIds", never, [
    StandardDepsRename<StandardDepsPick<"params", UseRandomId<InputElement, LabelElement>>, "randomIdParameters", "randomIdInputParameters">,
    StandardDepsRename<StandardDepsPick<"params", UseRandomId<LabelElement, InputElement>>, "randomIdParameters", "randomIdLabelParameters">
], never, [
    StandardDepsRename<StandardDepsPick<"return", UseRandomId<InputElement, LabelElement>>, "randomIdReturn", "randomIdInputReturn">,
    StandardDepsRename<StandardDepsPick<"return", UseRandomId<LabelElement, InputElement>>, "randomIdReturn", "randomIdLabelReturn">,
    {
        propsInput: ElementProps<InputElement>;
        propsLabel: ElementProps<LabelElement>;
    }
]>;
/**
 * While `useRandomId` allows the referencer to use the source's ID, sometimes you also want the reverse too (e.g. I `aria-label` you, you `aria-controls` me. That sort of thing).
 *
 * @compositeParams
 */
export declare const useRandomDualIds: <InputElement extends Element, LabelElement extends Element>({ randomIdInputParameters, randomIdLabelParameters, }: {} & StandardDepsRename<StandardDepsPick<"params", UseRandomId<InputElement_1, LabelElement_1>>, "randomIdParameters", "randomIdInputParameters"> & StandardDepsRename<StandardDepsPick<"params", UseRandomId<LabelElement_1, InputElement_1>>, "randomIdParameters", "randomIdLabelParameters">) => {} & StandardDepsRename<StandardDepsPick<"return", UseRandomId<InputElement, LabelElement>>, "randomIdReturn", "randomIdInputReturn"> & StandardDepsRename<StandardDepsPick<"return", UseRandomId<LabelElement, InputElement>>, "randomIdReturn", "randomIdLabelReturn"> & {
    propsInput: ElementProps<InputElement>;
    propsLabel: ElementProps<LabelElement>;
};
//# sourceMappingURL=use-random-dual-ids.d.ts.map