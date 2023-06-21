import { getBuildMode } from "./mode.js";
import { generateStack } from "./stack.js";
/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
export function focus(e) {
    if (getBuildMode() === 'development' && window.LOG_FOCUS_CHANGES === true) {
        console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e);
        console.log(generateStack());
    }
    e?.focus?.();
}
//# sourceMappingURL=focus.js.map