
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { useId, useRef } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
import { monitored } from "../util/use-call-count.js";

export const $randomIdReturn = Symbol();
export const $randomIdParameters = Symbol();
export const $prefix = Symbol();
export const $otherReferencerProp = Symbol();
export const $id = Symbol();

export interface UseRandomIdReturnType<S extends Element, T extends Element> {
    propsSource: ElementProps<S>;
    propsReferencer: ElementProps<T>;

    [$randomIdReturn]: UseRandomIdReturnTypeSelf;
}

export interface UseRandomIdReturnTypeSelf { [$id]: string; }

export interface UseRandomIdParametersSelf {
    /**
     * While all IDs are unique, this can be used to more easily differentiate them.
     * 
     * If this is stable, then your props are stable. Simple as that.
     * 
     * @stable
     */
    [$prefix]: string;

    /** This is the prop on the **OTHER** element that will use our ID.  E.G. The `input` calls `useRandomId` and passes `for` as `referencerProp`. */
    [$otherReferencerProp]: keyof ElementProps<any> | null;
}

export interface UseRandomIdParameters {
    [$randomIdParameters]: UseRandomIdParametersSelf;
}

/**
 * Besides just generating something for the `id` prop, also gives you the props to use on another element if you'd like (e.g. a label's `for`).
 * 
 * @compositeParams
 */
export const useRandomId = monitored(function useRandomId<S extends Element, T extends Element>({ [$randomIdParameters]: { [$prefix]: prefix, [$otherReferencerProp]: otherReferencerProp } }: UseRandomIdParameters): UseRandomIdReturnType<S, T> {
    const id = (prefix + useId());
    useEnsureStability("useRandomId", prefix, id);

    const referencerElementProps = useRef<ElementProps<any>>(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
    const sourceElementProps = useRef<ElementProps<S>>({ id });
    useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);

    return {
        propsReferencer: referencerElementProps.current,
        propsSource: sourceElementProps.current,
        [$randomIdReturn]: {
            [$id]: id
        }
    }
})
