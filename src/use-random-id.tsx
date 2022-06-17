import { h } from "preact";
import { useCallback, useLayoutEffect } from "preact/hooks";
import { useMergedProps } from "./use-merged-props";
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

export type UseRandomIdProps = <P extends UseRandomIdPropsParameters>(p: P) => UseRandomIdPropsReturnType<P>;
export type UseRandomIdPropsParameters = UseReferencedIdPropsParameters<"id">;
export type UseRandomIdPropsReturnType<P extends UseRandomIdPropsParameters> = UseReferencedIdPropsReturnType<P, "id">;

export interface UseRandomIdParameters { prefix?: string; }

export type UseReferencedIdProps<K extends keyof h.JSX.HTMLAttributes<any>> = <P extends UseReferencedIdPropsParameters<any>>(props: P) => UseReferencedIdPropsReturnType<P, K>;
export type UseReferencedIdPropsParameters<K extends keyof h.JSX.HTMLAttributes<any>> = Partial<Record<K, any>>;//<E extends Element> extends h.JSX.HTMLAttributes<E> { };


export type UseReferencedIdPropsReturnType<P extends UseReferencedIdPropsParameters<any>, K extends keyof h.JSX.HTMLAttributes<any>> = Omit<P, K> & Record<K, string>;

export interface UseRandomIdReturnType {
    randomId: string;

    // Note: Effectively lags behind by one render, then re-renders and syncs back up, when an ID is provided
    id: string | undefined;
    getId(): string | undefined;
    useRandomIdProps: UseRandomIdProps;
    useReferencedIdProps: <K extends keyof h.JSX.HTMLAttributes<any>>(idPropName: K) => UseReferencedIdProps<K>;
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
export function useRandomId({ prefix }: UseRandomIdParameters = {}): UseRandomIdReturnType {
    const [randomId, setRandomId] = useState<string>(() => generateRandomId(prefix));
    const [_watchPrefixUpdates, setWatchPrefixUpdates, getWatchPrefixUpdates] = useState(false);
    useLayoutEffect(() => {
        const watchPrefixUpdates = getWatchPrefixUpdates();
        if (watchPrefixUpdates)
            setRandomId(() => generateRandomId(prefix));
        setWatchPrefixUpdates(true);
    }, [prefix])

    // Whatever ID was most recently used by the actual "id" prop.
    // Used so that any ID-referencing props don't need to provide the same value.
    //
    // TODO: This does mean that on the first render, if just the ID is provided,
    // there will be a temporary mismatch, but it's corrected before rendering finishes.
    // Is this okay?
    const [usedId, setUsedId, getUsedId] = useState<string | undefined>(undefined);

    const useReferencedIdProps = useCallback(function useReferencedIdProps<K extends keyof h.JSX.HTMLAttributes<any>>(idPropName: K) {

        const ret: UseReferencedIdProps<K> = function <P extends UseReferencedIdPropsParameters<any>>({ [idPropName]: givenId, ...props }: P): UseReferencedIdPropsReturnType<P, K> {

            const usedId2 = (givenId ?? usedId ?? randomId ?? undefined);
            if (idPropName === "id")
                setUsedId(usedId2);

            return useMergedProps<HTMLElement>()({ [idPropName]: usedId2 }, props) as unknown as UseReferencedIdPropsReturnType<P, K>;
        }

        return ret;
    }, [usedId, randomId]);

    const useRandomIdProps: UseRandomIdProps = useCallback(function useRandomIdProps<P extends UseRandomIdPropsParameters>(p: P): UseRandomIdPropsReturnType<P> {
        return useReferencedIdProps("id")(p);
    }, [useReferencedIdProps]);

    return {
        randomId,
        id: usedId,
        getId: getUsedId,
        useRandomIdProps,
        useReferencedIdProps
    };
}
