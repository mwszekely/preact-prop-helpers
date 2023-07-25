let cached = null;
function getBuildModeUnmemoized() {
    try {
        if (process.env.NODE_ENV === "development")
            return "development";
        return "production";
    }
    catch (_e) {
        // As long as we're returning "production" due to it being unspecified, 
        // try to make sure anyone else who tries does too for consistency.
        // TODO: Good/bad idea?
        /*try {
            (globalThis as any)["process"] ??= {};
            (globalThis as any)["process"]["env"] ??= {};
            (globalThis as any)["process"]["env"]["NODE_ENV"] ??= "production";
        }
        finally*/ {
            return "production";
        }
    }
}
/**
 * Controls other development hooks by checking for a global variable called `process.env.NODE_ENV`
 *
 * @remarks Bundlers like Rollup will actually noop-out development code if  `process.env.NODE_ENV !== "development"` (which, of course, covers the default case where `process.env.NODE_ENV` just doesn't exist).
 */
export function getBuildMode() {
    return cached ||= (getBuildModeUnmemoized());
}
//# sourceMappingURL=mode.js.map