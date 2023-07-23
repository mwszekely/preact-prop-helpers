//import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import json from '@rollup/plugin-json';
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import sourcemaps from "rollup-plugin-sourcemaps";
import ts from "rollup-plugin-ts";

const extensions = [".js", ".jsx", ".ts", ".tsx"];

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

/** @type {import('rollup').RollupOptions} */
export default {
    input: "./src/index.tsx",
    output: {
        file: "./dist/index.react.js",
        format: "es",
        name: "index.preact",
        sourcemap: true,
        globals: { react: 'React', "react-dom": 'ReactDOM' }
    },
    external: ["react", "react-dom"],
    treeshake: "recommended",
    plugins: [
        ts({  }),
        json({}),
        replace({ "lib-preact": "lib-react", preventAssignment: true }),
        commonjs({ extensions, sourceMap: true }),
        resolve({ extensions, dedupe: ['react', "react-dom"] }),   // TODO: Needed?
        sourcemaps(),    // TODO: This is deprecated but needed for both Preact's and our own TS source maps.
    ],
}
