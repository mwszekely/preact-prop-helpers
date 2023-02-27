import { memoize } from "lodash-es";
function getBuildModeUnmemoized() {
    try {
        if (process?.env?.NODE_ENV === 'development')
            return 'development';
        return 'production';
    }
    catch (_e) {
        return "production";
    }
}
export const getBuildMode = memoize(getBuildModeUnmemoized);
//# sourceMappingURL=mode.js.map