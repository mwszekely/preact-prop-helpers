import { useId, useRef } from "preact/hooks";
import { generateRandomId } from "../preact-extensions/use-before-layout-effect.js";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
export { generateRandomId };
export function useRandomId({ randomIdParameters: { prefix, otherReferencerProp } }) {
    const id = (prefix + useId());
    useEnsureStability("useRandomId", prefix, id);
    const referencerElementProps = useRef(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
    const sourceElementProps = useRef({ id });
    useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
    return {
        propsReferencer: referencerElementProps.current,
        propsSource: sourceElementProps.current,
        randomIdReturn: {
            id: id
        }
    };
}
//# sourceMappingURL=use-random-id.js.map