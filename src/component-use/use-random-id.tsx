import { h } from "preact";
import { useId, useRef } from "preact/hooks";
import { generateRandomId } from "../preact-extensions/use-before-layout-effect.js";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
export { generateRandomId };





export interface UseRandomIdReturnType<S extends Element, T extends Element> {
    propsSource: h.JSX.HTMLAttributes<S>;
    propsReferencer: h.JSX.HTMLAttributes<T>;
    
    randomIdReturn: { id: string; };
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
        otherReferencerProp: keyof h.JSX.HTMLAttributes<any> | null;
    }
}

export function useRandomId<S extends Element, T extends Element>({ randomIdParameters: { prefix, otherReferencerProp } }: UseRandomIdParameters): UseRandomIdReturnType<S, T> {
    const id = (prefix + useId());
    useEnsureStability("useRandomId", prefix, id);

    const referencerElementProps = useRef<h.JSX.HTMLAttributes<any>>(otherReferencerProp == null ? {} : { [otherReferencerProp]: id });
    const sourceElementProps = useRef<h.JSX.HTMLAttributes<S>>({ id });
    useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
    

    return {
        propsReferencer: referencerElementProps.current,
        propsSource: sourceElementProps.current,
        randomIdReturn: {
            id: id
        }
    }
}
