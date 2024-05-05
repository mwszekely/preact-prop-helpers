// @ts-check
import { readFile, writeFile } from "node:fs/promises";

/**
 * @param {import("fs").PathLike | import("fs/promises").FileHandle} path
 */
async function replace(path) { await writeFile(path, (await readFile(path)).toString("utf-8").replace(/preact/g, "react")); }

(async () => {
    await replace("./dist/react/util/lib.js");
    await replace("./dist/react/util/lib.d.ts");
})()
