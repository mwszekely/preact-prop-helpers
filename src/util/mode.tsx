export { };

declare global {
    // Sometimes there will be an error here if @types/node is included,
    // and sometimes there won't...not much we can do.
    /// @ts-ignore
    const process: { env: { NODE_ENV: "production" | "development" } };
}

// Get/set the value of process?.env?.NODE_ENV delicately (also fun fact @rollup/plugin-replace works in comments!)
// (i.e. in a way that doesn't throw an error)
(globalThis as any)["process"] ??= {};
(globalThis as any)["process"]["env"] ??= {};
(globalThis as any)["process"]["env"]["NODE_ENV"] = process.env.NODE_ENV; 
// The above statement looks redundant, but it ensures that manual
// reads to `process.env.NODE_ENV` work regardless of if the bundler 
// replaces `process.env.NODE_ENV` with the string `"development"` or not.


