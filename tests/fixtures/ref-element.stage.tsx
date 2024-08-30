import { useRefElement } from "preact-prop-helpers";
import { useCallback, useState } from "preact/hooks";
import { fromStringBoolean, useTestSyncState } from "../util.js";

export interface RefElementConstants {
    setSwapped(swapped: boolean): void;
    setAMounted(mounted: boolean): void;
    setBMounted(mounted: boolean): void;
}

export function TestBasesRefElement() {
    const [swap, setSwap] = useTestSyncState("RefElement", "setSwapped", false, fromStringBoolean);
    const [aMounted, setAMounted] = useTestSyncState("RefElement", "setAMounted", false, fromStringBoolean);
    const [bMounted, setBMounted] = useTestSyncState("RefElement", "setBMounted", false, fromStringBoolean);
    const [changeCountA, setChangeCountA] = useState(0);
    const [changeCountB, setChangeCountB] = useState(0);
    const [mountCountA, setMountCountA] = useState(0);
    const [mountCountB, setMountCountB] = useState(0);
    const [unmountCountA, setUnmountCountA] = useState(0);
    const [unmountCountB, setUnmountCountB] = useState(0);

    const incrementA = useCallback(() => setChangeCountA(a => ++a), []);
    const incrementB = useCallback(() => setChangeCountB(b => ++b), []);
    const incrementMountA = useCallback(() => setMountCountA(a => ++a), []);
    const incrementMountB = useCallback(() => setMountCountB(b => ++b), []);
    const incrementUnmountA = useCallback(() => setUnmountCountA(a => ++a), []);
    const incrementUnmountB = useCallback(() => setUnmountCountB(b => ++b), []);

    const { propsStable: propsA } = useRefElement<HTMLDivElement>({ refElementParameters: { onElementChange: incrementA, onMount: incrementMountA, onUnmount: incrementUnmountA } });
    const { propsStable: propsB } = useRefElement<HTMLDivElement>({ refElementParameters: { onElementChange: incrementB, onMount: incrementMountB, onUnmount: incrementUnmountB } });

    const a = aMounted ? <div key="a" {...propsA}>div A</div> : null;
    const b = bMounted ? <div key="b" {...propsB}>div B</div> : null;
    return (
        <>
            <div key="change-count-a"># of times A changed: <span id="change-count-a">{changeCountA}</span></div>
            <div key="change-count-b"># of times B changed: <span id="change-count-b">{changeCountB}</span></div>
            <div key="mount-count-a"># of times A mounted: <span id="mount-count-a">{mountCountA}</span></div>
            <div key="mount-count-b"># of times B mounted: <span id="mount-count-b">{mountCountB}</span></div>
            <div key="unmount-count-a"># of times A unmounted: <span id="unmount-count-a">{unmountCountA}</span></div>
            <div key="unmount-count-b"># of times B unmounted: <span id="unmount-count-b">{unmountCountB}</span></div>
            {!swap ? a : b}
            {!swap ? b : a}
        </>
    )
}