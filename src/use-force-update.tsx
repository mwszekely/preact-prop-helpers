import { useCallback, useRef, useState } from "preact/hooks";

export function useForceUpdate() {
    const [, set] = useState(0);
    return useRef(() => set(i => ++i)).current;
}