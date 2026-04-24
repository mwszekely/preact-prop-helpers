// @ts-check
import { readFile, writeFile } from "node:fs/promises";

/**
 * This file is how we ensure that 
 * the Preact build pulls in lib-preact
 * and the React build pulls in lib-react.
 * 
 * It just runs after other build steps.
 * 
 */

(async () => {
    await replace("./dist/react/util/lib.js", /lib-preact/g, "lib-react");
    await replace("./dist/react/util/lib.d.ts", /lib-preact/g, "lib-react");
    await replace("./dist/preact/util/lib.js", /lib-react/g, "lib-preact");
    await replace("./dist/preact/util/lib.d.ts", /lib-react/g, "lib-preact");
    //await rm("./dist/preact/util/lib-react.js");
    //await rm("./dist/preact/util/lib-react.d.ts");
    //await rm("./dist/preact/util/lib-react.js.map");
    //await rm("./dist/preact/util/lib-react.d.ts.map");
    //await rm("./dist/react/util/lib-preact.js");
    //await rm("./dist/react/util/lib-preact.d.ts");
    //await rm("./dist/react/util/lib-preact.js.map");
    //await rm("./dist/react/util/lib-preact.d.ts.map");
})()

/**
 * @param {import("fs").PathLike | import("fs/promises").FileHandle} path
 * @param {RegExp} search
 * @param {string} replaceWith
 */
async function replace(path, search, replaceWith) { 
    let fileContents = (await readFile(path)).toString("utf-8");
    fileContents = fileContents.replaceAll(search, replaceWith);
    await writeFile(path, fileContents); 
}
