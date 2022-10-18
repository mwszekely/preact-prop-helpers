import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from '@rollup/plugin-typescript';
import sourcemaps from 'rollup-plugin-sourcemaps';

export default {
    input: "index.tsx",
    output: {
        file: "bundle.js",
        format: "iife",
        name: "bundle",
        sourcemap: true
    },
    plugins: [
        typescript({  }), 
        commonjs({ sourceMap: true }), 
        resolve({ dedupe: ['preact', "preact/compat", "preact/hooks"] }), 
        sourcemaps()
    ],
}
