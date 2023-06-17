/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
export function focus(e) {
    if (e?.tagName.toUpperCase() == "TR") {
        debugger;
    }
    e?.focus?.();
}
//# sourceMappingURL=focus.js.map