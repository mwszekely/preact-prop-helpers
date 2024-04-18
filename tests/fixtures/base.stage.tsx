import { createContext } from "preact";
import { useContext } from "preact-prop-helpers";
import { fromStringBoolean, useTestSyncState } from "../util.js";


export interface RootConstants {
    setUnmounted(unmounted: boolean): void;
}

const C = createContext(false);

export function Parameters_Root({ children }: { children: any }) {

    const [unmounted] = useTestSyncState("Root", "setUnmounted", false, fromStringBoolean);

    return (<C.Provider value={unmounted}>{children}</C.Provider>);
}

export function Stage_Root({ children }: { children: any }) {
    const unmounted = useContext(C);
    if (unmounted)
        return (<div class="tests-container" data-unmounted="true" />);

    return (<div class="tests-container" data-unmounted="false">{children}</div>);
}
