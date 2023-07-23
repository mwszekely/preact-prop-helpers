import commonjs from "@rollup/plugin-commonjs";
import resolve from '@rollup/plugin-node-resolve';
import replace from '@rollup/plugin-replace';
import sourcemaps from "rollup-plugin-sourcemaps";
import ts from 'rollup-plugin-ts'; // Used because the default TS plugin doesn't generate .d.ts files D:

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
        file: "./dist/index.react.js",
        format: "es",
        name: "index.react",
        sourcemap: true,
        globals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    },
    external: ["react", "react-dom"],
    treeshake: "recommended",
    plugins: [
        ts(),
        replace({
            values: {
                "./lib-preact.js": "./lib-react.js",
            },
            delimiters: ['', ''],
            preventAssignment: false
        }),
        commonjs({ extensions, sourceMap: true }),
        resolve({ extensions, dedupe: ['react', "react-dom"] }),
        sourcemaps()
    ],
}
