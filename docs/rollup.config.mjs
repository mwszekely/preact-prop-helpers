import { getBabelOutputPlugin } from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import typescript from '@rollup/plugin-typescript';
//import sourcemaps from "rollup-plugin-sourcemaps";

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
    input: "index.tsx",
    output: {
        file: "bundle.js",
        format: "iife",
        name: "bundle",
        sourcemap: true,
    },
    external: ["process"],
    treeshake: "recommended",
    plugins: [
        typescript(),
        replace({ 'process.env.NODE_ENV': JSON.stringify('production'), preventAssignment: true }),
        commonjs({ extensions, sourceMap: true }),
        resolve({ extensions, dedupe: ['preact', "preact/compat", "preact/hooks"] }),   // TODO: Why, exactly, is dedupe needed? It doesn't not make sense, but specifically. Why.
        getBabelOutputPlugin({      // Used instead of babel because babel generates incorrect source maps for our code (but not Preact's)
            allowAllFormats: true,  // Needed because we output in iife for this demo               
        }),
    ],
}
