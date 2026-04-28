import { options } from "preact";
import { createRoot } from "react-dom/client";
import { preactAddUseInsertionEffectHook } from "../dist/preact/index.js";
import { Root } from "./index-shared.js";

requestAnimationFrame(() => {
    preactAddUseInsertionEffectHook(options);
    //preactAddUseInsertionEffectHook(options);
    createRoot(document.getElementById("root")!).render(<Root />);
})
