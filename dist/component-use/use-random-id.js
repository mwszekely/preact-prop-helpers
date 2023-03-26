import { useId, useRef } from "react";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
export function useRandomId({ randomIdParameters: { prefix, otherReferencerProp } }) {
    monitorCallCount(useRandomId);
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