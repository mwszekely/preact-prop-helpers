
declare global {
    const process: { env: { NODE_ENV?: string | undefined } | undefined };
}

let cached: "production" | "development" | null = null;

function getBuildModeUnmemoized(): "production" | "development" {
    try {
        if (process.env!.NODE_ENV === "development")
            return "development";

        return "production";
    }
    catch (_e) {
        // As long as we're returning "production" due to it being unspecified, 
        // try to make sure anyone else who tries does too for consistency.
        // TODO: Good/bad idea?
        try {
            (globalThis as any)["process"] ??= {};
            (globalThis as any)["process"]["env"] ??= {};
            (globalThis as any)["process"]["env"]["NODE_ENV"] ??= "production";
        }
        finally {
            return "production";
        }
    }
}

export function getBuildMode() {
    return cached ??= (getBuildModeUnmemoized());
}
