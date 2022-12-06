import { h } from "preact";
import { useState } from "preact/hooks";
import { useInterval } from "../..";


export const DemoUseInterval = () => {
    const [interval, setInterval] = useState(1000);

    const [fireCount, setFireCount] = useState(0);

    useInterval({ interval, callback: () => setFireCount(i => ++i) });

    return (
        <div class="demo">
            <h2>useInterval</h2>
            <p>Run code every <code>n</code> milliseconds after the component mounts</p>
            <label>Interval duration: <input type="number" value={interval} onInput={e => setInterval(e.currentTarget.valueAsNumber)} /></label>
            <div>The callback has been called {fireCount} time{fireCount === 1 ? "" : "s"}.</div>
        </div>
    )
}
