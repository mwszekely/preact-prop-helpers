import { defineConfig } from 'rolldown';
import { replacePlugin } from 'rolldown/plugins';

export default defineConfig( {
    input: "stage/index.tsx",
    output: {
        dir: "stage/",
        format: "es",
        name: "bundle",
        sourcemap: true,
    },
    treeshake: true,
    plugins: [
        replacePlugin({ 'process.env.NODE_ENV': JSON.stringify('development')},  {preventAssignment: true }),
    ],
})
