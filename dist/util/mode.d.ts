declare global {
    const process: {
        env: {
            NODE_ENV?: string | undefined;
        } | undefined;
    };
}
export declare function getBuildMode(): "production" | "development";
//# sourceMappingURL=mode.d.ts.map