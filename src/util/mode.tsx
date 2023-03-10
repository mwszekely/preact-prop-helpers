import { memoize } from "lodash-es"

declare global {
    const process: { env: { NODE_ENV?: string | undefined } | undefined };
}

function getBuildModeUnmemoized(): "production" | "development" {
    try {
        if (process.env!.NODE_ENV === "development")
            return "development";

        return "production";
    }
    catch (_e) {
        return "production";
    }
}

export const getBuildMode = getBuildModeUnmemoized;//memoize(getBuildModeUnmemoized) as typeof getBuildModeUnmemoized;