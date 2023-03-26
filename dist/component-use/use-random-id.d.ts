import { ElementProps } from "../util/types.js";
export interface UseRandomIdReturnType<S extends Element, T extends Element> {
    propsSource: ElementProps<S>;
    propsReferencer: ElementProps<T>;
    randomIdReturn: {
        id: string;
    };
}
export interface UseRandomIdParameters {
    randomIdParameters: {
        /**
         * While all IDs are unique, this can be used to more easily differentiate them.
         *
         * If this is stable, then your props are stable. Simple as that.
         */
        prefix: string;
        /** This is the prop on the **OTHER** element that will use our ID.  E.G. The `input` calls `useRandomId` and passes `for` as `referencerProp`. */
        otherReferencerProp: keyof ElementProps<any> | null;
    };
}
export declare function useRandomId<S extends Element, T extends Element>({ randomIdParameters: { prefix, otherReferencerProp } }: UseRandomIdParameters): UseRandomIdReturnType<S, T>;
//# sourceMappingURL=use-random-id.d.ts.map