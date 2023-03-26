import { useId, useRef } from "react";
import { useEnsureStability } from "../preact-extensions/use-passive-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
import { ElementProps } from "../util/types.js";

export interface UseRandomIdReturnType<S extends Element, T extends Element> {
    propsSource: ElementProps<S>;
    propsReferencer: ElementProps<T>;
    
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
        otherReferencerProp: keyof ElementProps<any> | null;
    }
}

export function useRandomId<S extends Element, T extends Element>({ randomIdParameters: { prefix, otherReferencerProp } }: UseRandomIdParameters): UseRandomIdReturnType<S, T> {
    monitorCallCount(useRandomId);

    const id = (prefix + useId());
    useEnsureStability("useRandomId", prefix, id);

    const referencerElementProps = useRef<ElementProps<any>>(otherReferencerProp == null ? {} : { [otherReferencerProp]: id } as never);
    const sourceElementProps = useRef<ElementProps<S>>({ id } as never);
    useEnsureStability("useRandomIdReferencerElement", otherReferencerProp);
    

    return {
        propsReferencer: referencerElementProps.current,
        propsSource: sourceElementProps.current,
        randomIdReturn: {
            id: id
        }
    }
}
