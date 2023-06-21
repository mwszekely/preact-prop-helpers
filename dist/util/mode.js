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
        try {
            globalThis["process"] ??= {};
            globalThis["process"]["env"] ??= {};
            globalThis["process"]["env"]["NODE_ENV"] ??= "production";
        }
        finally {
            return "production";
        }
    }
}
export function getBuildMode() {
    return cached ||= (getBuildModeUnmemoized());
}
//# sourceMappingURL=mode.js.map