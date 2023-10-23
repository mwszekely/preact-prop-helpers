import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useId, useRef } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";
/**
 * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
 *
 * @compositeParams
 */
export const useRandomId = monitored(function useRandomId({ randomIdParameters: { prefix, otherReferencerProp } }) {
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
});
//# sourceMappingURL=use-random-id.js.map