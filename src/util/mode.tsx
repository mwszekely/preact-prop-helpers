import { memoize } from "lodash-es"

declare global {
    const process: { env: { NODE_ENV?: string | undefined } | undefined } | undefined;
}

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

export const getBuildMode = memoize(getBuildModeUnmemoized) as typeof getBuildModeUnmemoized;