import { defineConfig } from 'tsdown';
import { replacePlugin } from 'rolldown/plugins';

const BaseConfig = defineConfig({
    entry: "src/index.tsx",
    sourcemap: true,
    dts: true,
    deps: {
        neverBundle: true
    },
    treeshake: true
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
