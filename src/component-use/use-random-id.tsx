import { h } from "preact";
import { useCallback, useId, useRef } from "preact/hooks";
import { generateRandomId } from "../preact-extensions/use-before-layout-effect";
import { useEnsureStability } from "../preact-extensions/use-passive-state";
export { generateRandomId };

interface RIRP<R extends Element> { referencerProp: null | (keyof h.JSX.HTMLAttributes<R>) }

export type UseRandomIdReferencerElementParametersOmits = keyof RIRP<any>;

export interface UseRandomIdReferencerElementParameters<R extends Element, RIRPOmits extends UseRandomIdReferencerElementParametersOmits> {
    randomIdReferencerParameters: Omit<RIRP<R>, RIRPOmits>;
}

export type UseRandomIdSourceElement<S extends Element> = () => UseRandomIdSourceElementReturn<S>;
export type UseRandomIdReferencerElement = <R extends Element>(args: UseRandomIdReferencerElementParameters<R, never>) => UseRandomIdReferencerElementReturn<R>;

export interface UseRandomIdSourceElementReturn<S extends Element> {
    randomIdSourceReturn: { propsStable: h.JSX.HTMLAttributes<S>; }
}

export interface UseRandomIdReferencerElementReturn<R extends Element> {
    randomIdReferencerReturn: { propsStable: h.JSX.HTMLAttributes<R>; }
}

export interface UseRandomIdReturnTypeInfo {
    randomIdReturn: { id: string; };
}

export interface UseRandomIdReturnTypeWithHooks<S extends Element> extends UseRandomIdReturnTypeInfo {
    /**
     * **STABLE**
     * 
     * The element that needs a custom `id` prop must use this hook.
     */
    useRandomIdSourceElement: UseRandomIdSourceElement<S>;

    /**
     * **STABLE**
     * 
     * Any element that references the id via `for` or `aria-labelledby`, etc. must use this hook.
     * 
     * This hook can be used multiple times on different components.
     */
    useRandomIdReferencerElement: UseRandomIdReferencerElement;
    randomIdReturn: { id: string; };
}

interface RIP {
    /**
     * While all IDs are unique, this can be used to more easily differentiate them.
     * MUST REMAIN STABLE
     */

    prefix: string;
}

export type UseRandomIdParametersOmits = keyof RIP;

export interface UseRandomIdParameters<RIPOmits extends UseRandomIdParametersOmits> {
    randomIdParameters: Omit<RIP, RIPOmits>;
}

export function useRandomId<S extends Element>({ randomIdParameters: { prefix } }: UseRandomIdParameters<never>): UseRandomIdReturnTypeWithHooks<S> {
    const id = (prefix + useId());
    useEnsureStability("useRandomId", prefix, id);

    const useRandomIdSourceElement = useCallback<UseRandomIdSourceElement<S>>((): UseRandomIdSourceElementReturn<S> => {
        const sourceElementPropsStable = useRef<h.JSX.HTMLAttributes<S>>({ id });
        return { randomIdSourceReturn: { propsStable: sourceElementPropsStable.current } };
    }, []);
    const useRandomIdReferencerElement = useCallback<UseRandomIdReferencerElement>(<R extends Element>({ randomIdReferencerParameters: { referencerProp } }: UseRandomIdReferencerElementParameters<R, never>): UseRandomIdReferencerElementReturn<R> => {
        useEnsureStability("useRandomIdReferencerElement", referencerProp);
        const referencerElementPropsStable = useRef<h.JSX.HTMLAttributes<R>>(referencerProp == null? {} : { [referencerProp]: id });
        return { randomIdReferencerReturn: { propsStable: referencerElementPropsStable.current } };
    }, []);

    return {
        useRandomIdSourceElement,
        useRandomIdReferencerElement,
        randomIdReturn: {
            id: id
        }
    }
}
