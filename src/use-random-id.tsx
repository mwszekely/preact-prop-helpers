import { h } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { generateRandomId } from "./use-before-layout-effect";
import { useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useMergedProps } from "./use-merged-props";
import { useEnsureStability } from "./use-passive-state";
import { useRefElement } from "./use-ref-element";
import { useState } from "./use-state";
export { generateRandomId }

export type UseRandomIdPropsParameters = UseReferencedIdPropsParameters<"id">;
export type UseRandomIdPropsReturnType<P extends UseRandomIdPropsParameters> = UseReferencedIdPropsReturnType<P, "id">;

export interface UseRandomIdParameters extends UseManagedChildrenParameters<"referencer" | "source", never> {
    randomId: {
        prefix?: string;
    }
}


export type UseReferencedIdPropsParameters<K extends keyof h.JSX.HTMLAttributes<any>> = Partial<Record<K, any>>;//<E extends Element> extends h.JSX.HTMLAttributes<E> { };


export type UseReferencedIdPropsReturnType<P extends UseReferencedIdPropsParameters<any>, K extends keyof h.JSX.HTMLAttributes<any>> = Omit<P, K> & Record<K, string>;

export interface UseRandomIdReturnTypeInfo extends UseManagedChildrenReturnTypeInfo<"referencer" | "source", {}, never> {
    randomId: {
        usedId: string | undefined;
        /** **STABLE** */
        getUsedId(): string | undefined;
    }
}

export interface UseRandomIdReturnTypeWithHooks<S extends Element> extends UseRandomIdReturnTypeInfo {
    /** **STABLE** */
    useRandomIdSourceElement: UseRandomIdSourceElement<S>;
    /** **STABLE** */
    useRandomIdReferencerElement: UseRandomIdReferencerElement;
}

interface RandomIdChildInfoBase {
    setUsedId(id: string): void;
    //sendSourceIdToReferencerElement(sourceId: string): void;
}

export type UseRandomIdSourceElement<S extends Element> = () => UseRandomIdSourceElementReturnType<S>;

export interface UseRandomIdSourceElementReturnType<S extends Element> {
    usedId: string | undefined;
    /** **STABLE** */
    getUsedId(): string | undefined;
    /** *Unstable* */
    useProps: (p: h.JSX.HTMLAttributes<S>) => h.JSX.HTMLAttributes<S>;
}

export type UseRandomIdReferencerElement = <R extends Element>(idPropName: keyof h.JSX.HTMLAttributes<EventTarget>) => UseRandomIdReferencerElementReturnType<R>;
export interface UseRandomIdReferencerElementReturnType<R extends Element> {
    usedId: string | undefined;
    /** **STABLE** */
    getUsedId(): string | undefined;
    useProps: (p: h.JSX.HTMLAttributes<R>) => h.JSX.HTMLAttributes<R>;
    /** *Unstable* */
    //useRandomIdReferencerElementProps: (p: h.JSX.HTMLAttributes<R>) => h.JSX.HTMLAttributes<R>;
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
export function useRandomId<S extends Element>({ randomId: { prefix }, managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange } }: UseRandomIdParameters): UseRandomIdReturnTypeWithHooks<S> {

    // Generate a random ID that will be used when no other ID is provided
    useEnsureStability("useRandomId", prefix);
    const [backupRandomId, , getBackupRandomId] = useState<string>(() => generateRandomId(prefix));

    // By default, we just use a random ID.
    // But if the element already supplies its own ID, then we need to make sure whoever references it uses that instead of the random one we made.
    const [usedId, setUsedId, getUsedId] = useState<string | undefined>(() => getBackupRandomId());
    const mismatchErrorRef = useRef(false);

    // We need to be able to modify our children remotely
    const { useManagedChild, ...managedChildrenReturnType } = useManagedChildren<"referencer" | "source", RandomIdChildInfoBase, never>({ managedChildren: { onAfterChildLayoutEffect, onChildrenMountChange } });
    const { managedChildren: { children } } = managedChildrenReturnType;

    const useRandomIdSourceElement = useCallback<UseRandomIdSourceElement<S>>(() => {
        const [usedIdLocal, setUsedIdLocal, getUsedIdLocal] = useState(getUsedId());
        const { getElement, useProps } = useRefElement<S>();
        // Every time the source element renders, inspect the ID it actually used
        // (whether it was ours or not isn't up to us, it's up to the component)
        // so this is how we notify the referencer component of changes
        useEffect(() => {
            const element = getElement();

            if (element) {
                children.getAt("referencer")!.subInfo.setUsedId(element.id);
                setUsedId(element.id);
            }
        });

        const _: void = useManagedChild({ managedChild: { index: "source" }, subInfo: { setUsedId: setUsedIdLocal } });

        const useRandomIdSourceElementProps = useCallback<UseRandomIdSourceElementReturnType<S>["useProps"]>(function (p: h.JSX.HTMLAttributes<S>) {
            p.id ||= backupRandomId;
            return useProps(p);
        }, [])

        return {
            usedId: usedIdLocal,
            getUsedId: getUsedIdLocal,
            useProps: useRandomIdSourceElementProps
        };
    }, []);

    const useRandomIdReferencerElement = useCallback<UseRandomIdReferencerElement>(<R extends Element>(idPropName: keyof h.JSX.HTMLAttributes<R>) => {
        const [usedIdLocal, setUsedIdLocal, getUsedIdLocal] = useState(getUsedId());
        // Whatever ID was most recently used by the actual "id" prop of the source element
        useEnsureStability(idPropName);

        const _v: void = useManagedChild({ managedChild: { index: "referencer" }, subInfo: { setUsedId: setUsedIdLocal } });

        const useRandomIdReferencerElementProps = useCallback<UseRandomIdReferencerElementReturnType<R>["useProps"]>(function <R extends Element>({ [idPropName]: givenId, ...p }: h.JSX.HTMLAttributes<R>) {
            if (givenId && usedId) {
                if (givenId != usedId) {
                    if (!mismatchErrorRef.current) {
                        mismatchErrorRef.current = true;
                        console.error(`Multiple mis-matched IDs were provided for the ${idPropName} prop: the child explicitly specified ${givenId} in its  ${idPropName} prop, but the parent told this child to use ${usedId}.`);
                    }
                }
            }
            return useMergedProps<R>(p, { [idPropName]: usedId });
        }, [usedId]);


        return {
            usedId: usedIdLocal,
            getUsedId: getUsedIdLocal,
            useProps: useRandomIdReferencerElementProps
        }
    }, []);

    return {
        randomId: {
            usedId,
            getUsedId
        },
        ...managedChildrenReturnType,
        useRandomIdSourceElement,
        useRandomIdReferencerElement
    };
}
