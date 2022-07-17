import { h } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { ManagedChildInfo, useChildManager } from "./use-child-manager";
import { useMergedProps } from "./use-merged-props";
import { useEnsureStability } from "./use-passive-state";
import { useRefElement } from "./use-ref-element";
import { useState } from "./use-state";

const Table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789_-";

function base64(value: number) {
    return Table[value];
}

function random6Bits() {
    return Math.floor(Math.random() * 0b1000000);
}

function random64Bits() {
    return [random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits(), random6Bits()] as const;
}

/**
 * Returns a randomly-generated ID with an optional prefix.
 * Note that if the prefix is *explicitly* set to "", then
 * IDs that are not valid under HTML4 may be generated. Oh no.
 */
export function generateRandomId(prefix?: string) {
    return `${prefix ?? "id-"}${random64Bits().map(n => base64(n)).join("")}`;
}

export type UseRandomIdPropsParameters = UseReferencedIdPropsParameters<"id">;
export type UseRandomIdPropsReturnType<P extends UseRandomIdPropsParameters> = UseReferencedIdPropsReturnType<P, "id">;

export interface UseRandomIdParameters { prefix?: string; }


export type UseReferencedIdPropsParameters<K extends keyof h.JSX.HTMLAttributes<any>> = Partial<Record<K, any>>;//<E extends Element> extends h.JSX.HTMLAttributes<E> { };


export type UseReferencedIdPropsReturnType<P extends UseReferencedIdPropsParameters<any>, K extends keyof h.JSX.HTMLAttributes<any>> = Omit<P, K> & Record<K, string>;

export interface UseRandomIdReturnType<S extends Element> {
    useRandomIdSourceElement: UseRandomIdSourceElement<S>;
    useRandomIdReferencerElement: UseRandomIdReferencerElement;
}

interface RandomIdChildInfo extends ManagedChildInfo<"referencer"> {
    sendSourceIdToReferencerElement(sourceId: string): void;
}

export type UseRandomIdSourceElement<S extends Element> = () => UseRandomIdSourceElementReturnType<S>;

export interface UseRandomIdSourceElementReturnType<S extends Element> {
    useRandomIdSourceElementProps: (p: h.JSX.HTMLAttributes<S>) => h.JSX.HTMLAttributes<S>;
}

export type UseRandomIdReferencerElement = <R extends Element>(idPropName: keyof h.JSX.HTMLAttributes<EventTarget>) => UseRandomIdReferencerElementReturnType<R>;
export interface UseRandomIdReferencerElementReturnType<R extends Element> {
    useRandomIdReferencerElementProps: (p: h.JSX.HTMLAttributes<R>) => h.JSX.HTMLAttributes<R>;
}



/**
 * Returns a hook that modifies a set of props to provide a randomly-generated ID if one was not provided.
 * 
 * If you'd like to use the ID in a property that's *not* named `id` (like `for` or `aria-labelledby` or whatnot), `useReferencedIdProps` is also provided.
 * 
 * And the randomly-generated id itself is also provided in case you want to handle the logic yourself without `useMergedProps`.
 * 
 * Unlike most other `use*Props` hooks, these are mostly stable.
 */
export function useRandomId<S extends Element>({ prefix }: UseRandomIdParameters = {}): UseRandomIdReturnType<S> {
    const [backupRandomId] = useState<string>(() => generateRandomId(prefix));
    const mismatchErrorRef = useRef(false);
    useEnsureStability("useRandomId", prefix);

    const { useManagedChild, managedChildren } = useChildManager<RandomIdChildInfo>();

    const useRandomIdSourceElement = useCallback<UseRandomIdSourceElement<S>>(() => {
        const { useRefElementProps, getElement } = useRefElement<S>();
        // Every time the source element renders, inspect the ID it actually used
        // (whether it was ours or not isn't up to us, it's up to the component)
        // so this is how we notify the referencer component of changes
        useEffect(() => {
            const element = getElement();

            if (element)
                managedChildren.referencer.sendSourceIdToReferencerElement(element.id);
        });

        const useRandomIdSourceElementProps = useCallback<UseRandomIdSourceElementReturnType<S>["useRandomIdSourceElementProps"]>(function <P extends h.JSX.HTMLAttributes<S>>(p: P) {
            p.id ||= backupRandomId;
            return useRefElementProps(p);
        }, [])

        return {
            useRandomIdSourceElementProps
        };
    }, []);

    const useRandomIdReferencerElement = useCallback<UseRandomIdReferencerElement>(<R extends Element>(idPropName: keyof h.JSX.HTMLAttributes<R>) => {
        // Whatever ID was most recently used by the actual "id" prop of the source element
        const [usedId, setUsedId, getUsedId] = useState<string | undefined>(undefined);
        useEnsureStability(idPropName);

        const { useManagedChildProps } = useManagedChild<any>({ index: "referencer", sendSourceIdToReferencerElement: setUsedId })

        const useRandomIdReferencerElementProps = useCallback<UseRandomIdReferencerElementReturnType<R>["useRandomIdReferencerElementProps"]>(function <R extends Element>({ [idPropName]: givenId, ...p }: h.JSX.HTMLAttributes<R>) {
            if (givenId && usedId) {
                if (givenId != usedId) {
                    if (!mismatchErrorRef.current) {
                        mismatchErrorRef.current = true;
                        console.error(`Multiple mis-matched IDs were provided for the ${idPropName} prop: the child explicitly specified ${givenId} in its  ${idPropName} prop, but the parent told this child to use ${usedId} (the parent's ID).`);
                    }
                }
            }
            return useManagedChildProps(useMergedProps<R>(p, { [idPropName]: usedId }));
        }, []);


        return { useRandomIdReferencerElementProps }
    }, []);

    return {
        useRandomIdSourceElement,
        useRandomIdReferencerElement
    };
}
