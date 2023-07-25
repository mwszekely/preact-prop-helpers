declare global {
    const process: {
        env: {
            NODE_ENV?: string | undefined;
        } | undefined;
    };
}
/**
 * Controls other development hooks by checking for a global variable called `process.env.NODE_ENV`
 *
 * @remarks Bundlers like Rollup will actually noop-out development code if  `process.env.NODE_ENV !== "development"` (which, of course, covers the default case where `process.env.NODE_ENV` just doesn't exist).
 */
export declare function getBuildMode(): "production" | "development";
//# sourceMappingURL=mode.d.ts.map