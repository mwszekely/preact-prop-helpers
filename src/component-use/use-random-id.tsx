import { h } from "preact";
import { useId, useRef } from "preact/hooks";
import { generateRandomId } from "../preact-extensions/use-before-layout-effect";
import { useEnsureStability } from "../preact-extensions/use-passive-state";
export { generateRandomId };





export interface UseRandomIdReturnType<S extends Element, T extends Element> {
    propsSource: h.JSX.HTMLAttributes<S>;
    propsReferencer: h.JSX.HTMLAttributes<T>;

    /**
     * **STABLE**
     * 
     * The element that needs a custom `id` prop must use this hook.
     */
    //useRandomIdSourceElement: UseRandomIdSourceElement<S>;

    /**
     * **STABLE**
     * 
     * Any element that references the id via `for` or `aria-labelledby`, etc. must use this hook.
     * 
     * This hook can be used multiple times on different components.
     */
    //useRandomIdReferencerElement: UseRandomIdReferencerElement;
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
        referencerProp: keyof h.JSX.HTMLAttributes<any> | null;
    }
}

export function useRandomId<S extends Element, T extends Element>({ randomIdParameters: { prefix, referencerProp } }: UseRandomIdParameters): UseRandomIdReturnType<S, T> {
    const id = (prefix + useId());
    useEnsureStability("useRandomId", prefix, id);

    const referencerElementProps = useRef<h.JSX.HTMLAttributes<any>>(referencerProp == null ? {} : { [referencerProp]: id });
    const sourceElementProps = useRef<h.JSX.HTMLAttributes<S>>({ id });
    useEnsureStability("useRandomIdReferencerElement", referencerProp);
    

    return {
        propsReferencer: referencerElementProps.current,
        propsSource: sourceElementProps.current,
        randomIdReturn: {
            id: id
        }
    }
}
