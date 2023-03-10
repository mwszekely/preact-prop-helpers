function getBuildModeUnmemoized() {
    try {
        if (process.env.NODE_ENV === "development")
            return "development";
        return "production";
    }
    catch (_e) {
        return "production";
    }
}
export const getBuildMode = getBuildModeUnmemoized; //memoize(getBuildModeUnmemoized) as typeof getBuildModeUnmemoized;
//# sourceMappingURL=mode.js.map