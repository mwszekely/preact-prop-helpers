import { replacePlugin } from 'rolldown/plugins';
import { defineConfig } from 'tsdown';

const BaseConfig = defineConfig({
    entry: "./src/index.tsx",
    sourcemap: true,
    dts: true,
    deps: {
        neverBundle: true
    },
    treeshake: true,
    attw: true,
})

export default defineConfig([
    {
        ...BaseConfig,
        outDir: "./dist/preact",
    },
    {
        ...BaseConfig,
        outDir: "./dist/react",
        tsconfig: "tsconfig.react.json",
        plugins: [
            replacePlugin(
                {
                    "./lib-preact.js": "./lib-react.js"
                },
                {
                    sourcemap: true,
                    delimiters: ['', ''],
                    preventAssignment: false
                }
            ),
        ],
    }
])
