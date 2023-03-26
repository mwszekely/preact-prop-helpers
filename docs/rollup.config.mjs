import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import replace from '@rollup/plugin-replace'
import { babel } from '@rollup/plugin-babel';
import path from "path";
import sourcemaps from "rollup-plugin-sourcemaps"

const extensions = [".js", ".jsx", ".ts", ".tsx"];

export default {
    input: "index.tsx",
    output: {
        file: "bundle.js",
        format: "iife",
        name: "bundle",
        sourcemap: true,
    },
    treeshake: "recommended",
    plugins: [
        typescript({ sourceMap: true, moduleResolution: "nodenext" }), 
        replace({ 'process.env.NODE_ENV': JSON.stringify('development'), preventAssignment: true }),
        commonjs({ sourceMap: true, extensions }), 
        resolve({ extensions, dedupe: ['react', "react-dom", "react-dom/client"] }),   // TODO: Why, exactly, is this needed? It doesn't not make sense, but specifically. Why.
        babel({
            configFile: path.resolve(".babelrc"),
            sourceMaps: true,
            babelHelpers: "bundled",
            extensions
        }),
        sourcemaps()    // TODO: This is deprecated but needed for TS source maps
    ],
}
