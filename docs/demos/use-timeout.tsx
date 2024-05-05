import { useState } from "preact/hooks";
import { useTimeout } from "../../dist/preact/index.js";


export const DemoUseTimeout = () => {
    const [timeout, setTimeout] = useState(1000);
    const [triggerIndex, setTriggerIndex] = useState("");

    const [fireCount, setFireCount] = useState(0);

    useTimeout({ timeout, triggerIndex, callback: () => setFireCount(i => ++i) })

    return (
        <div class="demo">
            <h2>useTimeout</h2>
            <p><code>useEffect</code> but on a timer</p>
            <label>Timeout duration: <input type="number" value={timeout} onInput={e => setTimeout(e.currentTarget.valueAsNumber)} /></label>
            <label>Refresh key: <input type="text" value={triggerIndex} onInput={e => setTriggerIndex(e.currentTarget.value)} /></label>
            <div>The callback has been called {fireCount} time{fireCount === 1 ? "" : "s"}.</div>
        </div>
    )
}
