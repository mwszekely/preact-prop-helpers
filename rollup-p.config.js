import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';
import sourcemaps from "rollup-plugin-sourcemaps";
//import ts from 'rollup-plugin-ts'; // Used because the default TS plugin doesn't generate .d.ts files D:
import replace from "@rollup/plugin-replace";
import ts from "@rollup/plugin-typescript";

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
    input: "src/index.tsx",
    output: {
        file: "./dist/preact/index.js",
        format: "es",
        name: "index.preact",
        sourcemap: true,
        inlineDynamicImports: true
    },
    external: [
        "preact",
        "preact/compat",
        "preact/hooks",
        "preact/jsx-runtime",
        "blocking-elements",
        "clsx",
        "lodash-es",
        "tabbable",
        "wicg-inert",
    ],
    treeshake: "recommended",
    plugins: [
        replace({
            values: {
                "./lib-react.js": "./lib-preact.js",
            },
            delimiters: ['', ''],
            preventAssignment: false
        }),
        ts({
            noEmitOnError: false,
            tsconfig: "tsconfig.preact.json",
            module: "NodeNext"
        }),
        commonjs({ extensions, sourceMap: true }),
        resolve({ extensions, dedupe: ['react', "react-dom", "preact", "preact/compat", "preact/hooks"], }),
        sourcemaps()
    ],
}
