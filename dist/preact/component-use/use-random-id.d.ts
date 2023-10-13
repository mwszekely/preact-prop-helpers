import { ElementProps } from "../util/types.js";
export interface UseRandomIdReturnType<S extends Element, T extends Element> {
    propsSource: ElementProps<S>;
    propsReferencer: ElementProps<T>;
    randomIdReturn: UseRandomIdReturnTypeSelf;
}
export interface UseRandomIdReturnTypeSelf {
    id: string;
}
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
export declare const useRandomId: <S extends Element, T extends Element>({ randomIdParameters: { prefix, otherReferencerProp } }: UseRandomIdParameters) => UseRandomIdReturnType<S, T>;
//# sourceMappingURL=use-random-id.d.ts.map