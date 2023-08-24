
declare global {
    // Sometimes there will be an error here if @types/node is included,
    // and sometimes there won't...not much we can do.
    /// @ts-ignore
    const process: { env: { NODE_ENV?: string | undefined } | undefined };
}

// Get the value of process?.env?.NODE_ENV delicately (also fun fact @rollup/plugin-replace works in comments!)
// (i.e. in a way that doesn't throw an error but has isDevMode be a constant)
(globalThis as any)["process"] ??= {};
(globalThis as any)["process"]["env"] ??= {};

/**
 * Controls other development hooks by checking the value of a global variable called `process.env.NODE_ENV`.
 * 
 * @remarks Bundlers like Rollup will actually no-op out development code if `process.env.NODE_ENV !== "development"` 
 * (which, of course, covers the default case where `process.env.NODE_ENV` just doesn't exist).
 */
export const BuildMode = process.env!.NODE_ENV || "production" as "production" | "development";
process.env!.NODE_ENV = BuildMode;
export type BuildMode = "production" | "development";