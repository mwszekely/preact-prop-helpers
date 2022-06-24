import { Inputs, useEffect } from "preact/hooks";
import { useAsync, UseAsyncParameters } from "./use-async";

export function useAsyncEffect<I extends Inputs>(effect: () => Promise<(void | (() => void))>, inputs?: I, options?: Omit<UseAsyncParameters<[void], [void]>, "capture">) {
    const { syncHandler, ...rest } = useAsync(effect, options);
    useEffect(syncHandler, inputs);
    return rest;
}
