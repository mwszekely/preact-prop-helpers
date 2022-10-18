import { h } from "preact";
import { useCallback, useEffect, useRef, useId as usePreactId, useId } from "preact/hooks";
import { generateRandomId } from "./use-before-layout-effect";
import { useManagedChildren, UseManagedChildrenParameters, UseManagedChildrenReturnTypeInfo } from "./use-child-manager";
import { useMergedProps } from "./use-merged-props";
import { useEnsureStability } from "./use-passive-state";
import { useRefElement } from "./use-ref-element";
import { useState } from "./use-state";
export { generateRandomId }

interface RIRP<R extends Element> { referencerProp: null | (keyof h.JSX.HTMLAttributes<R>) }

export interface UseRandomIdReferencerElementParameters<R extends Element, RIRPOmits extends keyof RIRP<any>> {
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

export interface RIP {
    /**
     * While all IDs are unique, this can be used to more easily differentiate them.
     * MUST REMAIN STABLE
     */

    prefix: string;
}

export interface UseRandomIdParameters<RIPOmits extends keyof RIP> {
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

/**
 * Returns a hook that modifies a set of props to provide a randomly-generated ID if one was not provided.
 * 
 * If you'd like to use the ID in a property that's *not* named `id` (like `for` or `aria-labelledby` or whatnot), `useReferencedIdProps` is also provided.
 * 
 * And the randomly-generated id itself is also provided in case you want to handle the logic yourself without `useMergedProps`.
 * 
 * Unlike most other `use*Props` hooks, these are mostly stable.
 */
/*
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
        const { getElement, propsStable } = useRefElement<S>();
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

        const useRandomIdSourceElementProps = useCallback<UseRandomIdSourceElementReturnType<S>["usePropsStable"]>(function (p: h.JSX.HTMLAttributes<S>) {
            p.id ||= backupRandomId;
            return useMergedProps(propsStable, p);
        }, [])

        return {
            usedId: usedIdLocal,
            getUsedId: getUsedIdLocal,
            usePropsStable: useRandomIdSourceElementProps
        };
    }, []);

    const useRandomIdReferencerElement = useCallback<UseRandomIdReferencerElement>(<R extends Element>(idPropName: keyof h.JSX.HTMLAttributes<R>) => {
        const [usedIdLocal, setUsedIdLocal, getUsedIdLocal] = useState(getUsedId());
        // Whatever ID was most recently used by the actual "id" prop of the source element
        useEnsureStability(idPropName);

        const _v: void = useManagedChild({ managedChild: { index: "referencer" }, subInfo: { setUsedId: setUsedIdLocal } });

        const useRandomIdReferencerElementProps = useCallback<UseRandomIdReferencerElementReturnType<R>["usePropsStable"]>(function <R extends Element>({ [idPropName]: givenId, ...p }: h.JSX.HTMLAttributes<R>) {
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
            usePropsStable: useRandomIdReferencerElementProps
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
}*/
