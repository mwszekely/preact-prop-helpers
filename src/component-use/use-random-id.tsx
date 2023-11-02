
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { ElementProps, useId, useRef } from "../util/lib.js";
import { GenericHook, Parameter } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

export type UseRandomId<S extends Element, T extends Element> = GenericHook<
    "randomId", 
    UseRandomIdParametersSelf, [],
    UseRandomIdReturnTypeSelf, [{ propsSource: ElementProps<S>; propsReferencer: ElementProps<T>; }]
>;

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


/**
 * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
 * 
 * @compositeParams
 */
export const useRandomId = monitored(function useRandomId<S extends Element, T extends Element>({ 
    randomIdParameters: { prefix, otherReferencerProp } }: Parameter<UseRandomId<S, T>>): ReturnType<UseRandomId<S, T>> {
    const id = (prefix + useId());
    useEnsureStability("useRandomId", prefix, id);

    const referencerElementProps = useRef<ElementProps<any>>(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
    const sourceElementProps = useRef<ElementProps<S>>({ id });
    useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);


    return {
        propsReferencer: referencerElementProps.current,
        propsSource: sourceElementProps.current,
        randomIdReturn: {
            id: id
        }
    }
})
