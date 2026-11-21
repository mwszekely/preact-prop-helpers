import { replacePlugin } from 'rolldown/plugins';
import { defineConfig } from 'rolldown';

/** 
 * Source maps are really tricky.
 * 
 * It's really hard to drag them all the way through TypeScript, Rollup, and Babel unscathed
 * without something going wrong.
 * 
 * Things to check for:
 * 1. Do the source maps point to the original TS sources, or the distributed JS sources?
 * 2. Do the source maps work in our code but not Preact?
 * 3. Do the source maps work in Preact but not our code?
 */

export default defineConfig({
    input: "index.tsx",
    output: {
        dir: ".",
        format: "es",
        name: "bundle",
        sourcemap: "inline",
        sourcemapIgnoreList: false,
    },
    transform: {
        target: ["es2015"]
    },
    external: ["process"],
    treeshake: true,
    plugins: [
        replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }, { preventAssignment: true }),
    ],
})
