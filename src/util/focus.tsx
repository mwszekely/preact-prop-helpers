import { getBuildMode } from "./mode.js";
import { generateStack } from "./stack.js";

/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
export function focus(e: Element | null) {
    if (getBuildMode() === 'development' && (window as any).LOG_FOCUS_CHANGES === true) {
        console.log(`Focus changed to ${(e?.tagName || "").toLowerCase().padStart(6)}:`, e);
        console.log(generateStack());
    }
    (e as HTMLElement)?.focus?.();
}
