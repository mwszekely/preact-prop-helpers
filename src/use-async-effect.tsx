import { Inputs, useEffect } from "preact/hooks";
import { useAsync } from "./use-async";

export function useAsyncEffect<I extends Inputs>(effect: () => Promise<(void | (() => void))>, inputs?: I, debounce?: number) {
    const { useSyncHandler, ...rest } = useAsync<typeof effect>({ debounce });
    const handler = useSyncHandler(effect);
    useEffect(handler!, inputs);
    return rest;
}
