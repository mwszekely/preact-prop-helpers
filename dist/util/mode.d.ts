declare global {
    const process: {
        env: {
            NODE_ENV?: string | undefined;
        } | undefined;
    };
}
declare function getBuildModeUnmemoized(): "production" | "development";
export declare const getBuildMode: typeof getBuildModeUnmemoized;
export {};
//# sourceMappingURL=mode.d.ts.map