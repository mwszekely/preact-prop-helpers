
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { JSX, useId, useRef } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";

export interface UseRandomIdReturnType<SourceTag extends keyof JSX.IntrinsicElements, TargetTag extends keyof JSX.IntrinsicElements> {
    propsSource: ElementProps<SourceTag>;
    propsReferencer: ElementProps<TargetTag>;

    randomIdReturn: UseRandomIdReturnTypeSelf;
}

export interface UseRandomIdReturnTypeSelf { id: string; }

export interface UseRandomIdParametersSelf {
    /**
     * While all IDs are unique, this can be used to more easily differentiate them.
     * 
     * If this is stable, then your props are stable. Simple as that.
     * 
     * @stable
     */
    prefix: string;

    /** This is the prop on the **OTHER** element that will use our ID.  E.G. The `input` calls `useRandomId` and passes `for` as `referencerProp`. */
    otherReferencerProp: keyof ElementProps<any> | null;
}

export interface UseRandomIdParameters {
    randomIdParameters: UseRandomIdParametersSelf;
}

/**
 * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
 * 
 * @compositeParams
 */
export function useRandomId<SourceTag extends keyof JSX.IntrinsicElements, TargetTag extends keyof JSX.IntrinsicElements>({ randomIdParameters: { prefix, otherReferencerProp } }: UseRandomIdParameters): UseRandomIdReturnType<SourceTag, TargetTag> {
    return useMonitoring(function useRandomId(): UseRandomIdReturnType<SourceTag, TargetTag> {
        const id = (prefix + useId());
        useEnsureStability("useRandomId", prefix, id);

        const referencerElementProps = useRef<{}>(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
        const sourceElementProps = useRef({ id });
        useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);


        return {
            propsReferencer: referencerElementProps.current as ElementProps<TargetTag>,
            propsSource: sourceElementProps.current as ElementProps<SourceTag>,
            randomIdReturn: {
                id: id
            }
        }
    });
}
