// Get the value of process?.env?.NODE_ENV delicately (also fun fact @rollup/plugin-replace works in comments!)
// (i.e. in a way that doesn't throw an error but has isDevMode be a constant)
globalThis["process"] ??= {};
globalThis["process"]["env"] ??= {};
globalThis["process"]["env"]["NODE_ENV"] = (globalThis["process"]["env"]["NODE_ENV"] || "production");
/**
 * Controls other development hooks by checking the value of a global variable called `process.env.NODE_ENV`.
 *
 * @remarks Bundlers like Rollup will actually no-op out development code if `process.env.NODE_ENV !== "development"`
 * (which, of course, covers the default case where `process.env.NODE_ENV` just doesn't exist).
 */
export const BuildMode = globalThis["process"]["env"]["NODE_ENV"];
//# sourceMappingURL=mode.js.map