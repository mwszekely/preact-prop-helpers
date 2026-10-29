import { defineConfig } from 'rolldown';
import { replacePlugin } from 'rolldown/plugins';

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

export default defineConfig({
    input: "src/index.tsx",
    output: {
        file: "./dist/react/index.js",
        format: "es",
        name: "index.react",
        sourcemap: true,
        codeSplitting: false,
        globals: {
            "react": "React",
            "react-dom": "ReactDOM"
        }
    },
    transform: {
        typescript: {
            noEmitOnError: false,
            tsconfig: "tsconfig.react.json",
            module: "NodeNext"
        }
    },
    external: [
        "react",
        "react-dom",
        "lodash-es",
        "blocking-elements",
        "clsx",
        "lodash-es",
        "tabbable",
        "wicg-inert",
    ],
    treeshake: true,
    plugins: [
        replacePlugin({
            "./lib-preact.js": "./lib-react.js"
        },
            {
                sourcemap: true,
                delimiters: ['', ''],
                preventAssignment: false
            }),
    ],
})
