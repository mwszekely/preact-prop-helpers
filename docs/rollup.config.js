import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';


export default {
    input: "index.tsx",
    output: {
        file: "bundle.js",
        format: "iife",
        name: "bundle",
        sourcemap: "inline"
    },
    plugins: [typescript(), commonjs(), resolve({ dedupe: ['preact', "preact/compat", "preact/hooks"] })],
}
