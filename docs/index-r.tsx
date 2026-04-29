import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Root } from "./index-shared.js";

requestAnimationFrame(() => {
    createRoot(document.getElementById("root")!).render(<StrictMode><Root /></StrictMode>);
})
