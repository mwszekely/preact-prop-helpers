declare global {
    const process: {
        env: {
            NODE_ENV?: string | undefined;
        } | undefined;
    } | undefined;
}
declare function getBuildModeUnmemoized(): "development" | "production";
export declare const getBuildMode: typeof getBuildModeUnmemoized;
export {};
//# sourceMappingURL=mode.d.ts.map