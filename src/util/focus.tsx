
/**
 * If you want a single place to put a debugger for tracking focus,
 * here:
 */
export function focus(e: Element) {
    (e as HTMLElement).focus?.();
}
