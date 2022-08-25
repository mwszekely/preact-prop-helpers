import { h } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { generateRandomId } from "./use-before-layout-effect";
import { ManagedChildInfoBase, useManagedChildren, UseManagedChildrenParameters } from "./use-child-manager";
import { useMergedProps } from "./use-merged-props";
import { useEnsureStability } from "./use-passive-state";
import { useRefElement } from "./use-ref-element";
import { useState } from "./use-state";
export { generateRandomId };

export type UseRandomIdPropsParameters = UseReferencedIdPropsParameters<"id">;
export type UseRandomIdPropsReturnType<P extends UseRandomIdPropsParameters> = UseReferencedIdPropsReturnType<P, "id">;

export interface UseRandomIdParameters<I extends RandomIdChildInfoBase> extends UseManagedChildrenParameters<I> { prefix?: string; }


export type UseReferencedIdPropsParameters<K extends keyof h.JSX.HTMLAttributes<any>> = Partial<Record<K, any>>;//<E extends Element> extends h.JSX.HTMLAttributes<E> { };


export type UseReferencedIdPropsReturnType<P extends UseReferencedIdPropsParameters<any>, K extends keyof h.JSX.HTMLAttributes<any>> = Omit<P, K> & Record<K, string>;

export interface UseRandomIdReturnType<S extends Element> {
    useRandomIdSourceElement: UseRandomIdSourceElement<S>;
    useRandomIdReferencerElement: UseRandomIdReferencerElement;
    usedId: string | undefined;
    getUsedId(): string | undefined;
}

interface RandomIdChildInfoBase extends ManagedChildInfoBase<"referencer" | "source"> {
    setUsedId(id: string): void;
    //sendSourceIdToReferencerElement(sourceId: string): void;
}

export type UseRandomIdSourceElement<S extends Element> = () => UseRandomIdSourceElementReturnType<S>;

export interface UseRandomIdSourceElementReturnType<S extends Element> {
    usedId: string | undefined;
    getUsedId(): string | undefined;
    useRandomIdSourceElementProps: (p: h.JSX.HTMLAttributes<S>) => h.JSX.HTMLAttributes<S>;
}

export type UseRandomIdReferencerElement = <R extends Element>(idPropName: keyof h.JSX.HTMLAttributes<EventTarget>) => UseRandomIdReferencerElementReturnType<R>;
export interface UseRandomIdReferencerElementReturnType<R extends Element> {
    usedId: string | undefined;
    getUsedId(): string | undefined;
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
export function useRandomId<S extends Element>({ prefix, onAfterChildLayoutEffect, onChildrenMountChange }: UseRandomIdParameters<RandomIdChildInfoBase>): UseRandomIdReturnType<S> {
    const [backupRandomId, , getBackupRandomId] = useState<string>(() => generateRandomId(prefix));
    const [usedId, setUsedId, getUsedId] = useState<string | undefined>(() => getBackupRandomId());
    const mismatchErrorRef = useRef(false);
    useEnsureStability("useRandomId", prefix);

    const { useManagedChild, children } = useManagedChildren<RandomIdChildInfoBase>({ onAfterChildLayoutEffect, onChildrenMountChange });

    const useRandomIdSourceElement = useCallback<UseRandomIdSourceElement<S>>(() => {
        const [usedIdLocal, setUsedIdLocal, getUsedIdLocal] = useState(getUsedId());
        const { useRefElementProps, getElement } = useRefElement<S>();
        // Every time the source element renders, inspect the ID it actually used
        // (whether it was ours or not isn't up to us, it's up to the component)
        // so this is how we notify the referencer component of changes
        useEffect(() => {
            const element = getElement();

            if (element) {
                children.getAt("referencer")!.setUsedId(element.id);
                setUsedId(element.id);
            }
        });

        const _: void = useManagedChild({ info: { index: "source", setUsedId: setUsedIdLocal } });

        const useRandomIdSourceElementProps = useCallback<UseRandomIdSourceElementReturnType<S>["useRandomIdSourceElementProps"]>(function (p: h.JSX.HTMLAttributes<S>) {
            p.id ||= backupRandomId;
            return useRefElementProps(p);
        }, [])

        return {
            usedId: usedIdLocal,
            getUsedId: getUsedIdLocal,
            useRandomIdSourceElementProps
        };
    }, []);

    const useRandomIdReferencerElement = useCallback<UseRandomIdReferencerElement>(<R extends Element>(idPropName: keyof h.JSX.HTMLAttributes<R>) => {
        const [usedIdLocal, setUsedIdLocal, getUsedIdLocal] = useState(getUsedId());
        // Whatever ID was most recently used by the actual "id" prop of the source element
        useEnsureStability(idPropName);

        const _v: void = useManagedChild({ info: { index: "referencer", setUsedId: setUsedIdLocal } });

        const useRandomIdReferencerElementProps = useCallback<UseRandomIdReferencerElementReturnType<R>["useRandomIdReferencerElementProps"]>(function <R extends Element>({ [idPropName]: givenId, ...p }: h.JSX.HTMLAttributes<R>) {
            if (givenId && usedId) {
                if (givenId != usedId) {
                    if (!mismatchErrorRef.current) {
                        mismatchErrorRef.current = true;
                        console.error(`Multiple mis-matched IDs were provided for the ${idPropName} prop: the child explicitly specified ${givenId} in its  ${idPropName} prop, but the parent told this child to use ${usedId} (the parent's ID).`);
                    }
                }
            }
            return useMergedProps<R>(p, { [idPropName]: usedId });
        }, [usedId]);


        return {
            usedId: usedIdLocal,
            getUsedId: getUsedIdLocal,
            useRandomIdReferencerElementProps
        }
    }, []);

    return {
        usedId,
        getUsedId,
        useRandomIdSourceElement,
        useRandomIdReferencerElement
    };
}
