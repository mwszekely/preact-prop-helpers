import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useState } from "../preact-extensions/use-state.js";
import { useEffect, useRef } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
export class DroppableFileError extends Error {
    fileName;
    errorType;
    constructor(fileName, base) {
        super(base?.message ?? "An unspecified error occurred reading the file.");
        this.fileName = fileName;
        this.errorType = base?.name;
    }
}
/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDroppableParameters}
 * {@include } {@link UseDroppableReturnType}
 */
export function useDroppable({ effect }) {
    return useMonitoring(function useDroppable() {
        const [filesForConsideration, setFilesForConsideration] = useState(null);
        const [stringsForConsideration, setStringsForConsideration] = useState(null);
        const [droppedFiles, setDroppedFiles] = useState(null);
        const [droppedStrings, setDroppedStrings] = useState(null);
        const [dropError, setDropError] = useState(undefined);
        // All the promises generated from the drop events.
        // Used to process multiple drop events in succession
        const dropPromisesRef = useRef([]);
        const [currentPromiseIndex, setCurrentPromiseIndex, getCurrentPromiseIndex] = useState(-1);
        const [promiseCount, setPromiseCount, getPromiseCount] = useState(0);
        // Any time we add a new promise, if there's no current promise running, we need to start one.
        // If there is one, then we don't need to do anything, since it runs the same check.
        useEffect(() => {
            const currentPromiseIndex = getCurrentPromiseIndex();
            const promiseCount = getPromiseCount();
            if (promiseCount > 0) {
                if ((currentPromiseIndex + 1) < promiseCount) {
                    setCurrentPromiseIndex(i => ++i);
                }
            }
        }, [promiseCount]);
        // Anytime our current promise changes,
        // wait for it to finish, then set our state to its result.
        // Finally, check to see if there are anymore promises.
        // If there are, then increase currentPromiseCount,
        // which will trigger this again.
        //
        // This shouldn't happen *often*, but maybe in the case of
        // individually dropping a bunch of large files or something.
        useEffect(() => {
            if (currentPromiseIndex >= 0) {
                const currentPromise = dropPromisesRef.current[currentPromiseIndex];
                currentPromise.then((info) => {
                    if (info !== null) {
                        const { files, strings } = info;
                        setDroppedFiles(files);
                        setDroppedStrings(strings);
                    }
                    // Now that we're done, are there more promises in the queue?
                    const currentPromiseIndex = getCurrentPromiseIndex();
                    const promiseCount = getPromiseCount();
                    if ((currentPromiseIndex + 1) < promiseCount) {
                        // Since this promise has started, more have been added.
                        // Run this effect again.
                        setCurrentPromiseIndex(i => ++i);
                    }
                });
            }
        }, [currentPromiseIndex]);
        // Handle collecting the current file metadata or MIME types.
        const onDragEnter = useStableCallback((e) => {
            e.preventDefault();
            if (e.dataTransfer) {
                // Is there a default? I can't find one anywhere.
                e.dataTransfer.dropEffect = (effect ?? "move");
                const newMimeTypes = new Set();
                const newFiles = new Array();
                for (const item of e.dataTransfer?.items ?? []) {
                    const { kind, type } = item;
                    if (kind === "string") {
                        newMimeTypes.add(type);
                    }
                    else if (kind === "file") {
                        newFiles.push({ type: item.type });
                    }
                }
                setFilesForConsideration(newFiles);
                setStringsForConsideration(newMimeTypes);
            }
        });
        // Handle resetting the current file metadata or MIME types
        const onDragLeave = useStableCallback((e) => {
            e.preventDefault();
            setFilesForConsideration(null);
            setStringsForConsideration(null);
        });
        // Boilerplate, I guess
        const onDragOver = useStableCallback((e) => {
            e.preventDefault();
        });
        // Handle getting the drop data asynchronously
        const onDrop = useStableCallback((e) => {
            e.preventDefault();
            setFilesForConsideration(null);
            setStringsForConsideration(null);
            const allPromises = new Array();
            const dropData = {};
            const dropFile = [];
            for (const item of e.dataTransfer?.items ?? []) {
                const { kind, type } = item;
                if (kind === "string") {
                    allPromises.push((new Promise((resolve, _reject) => item.getAsString(resolve))).then(str => dropData[type] = str));
                }
                else if (kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        allPromises.push(new Promise((resolve, reject) => {
                            const reader = new FileReader();
                            reader.onload = (_) => {
                                resolve();
                                const data = reader.result;
                                dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
                            };
                            reader.onerror = (_) => { reject(new DroppableFileError(file.name, reader.error)); };
                            reader.onabort = (_) => { reject(new DroppableFileError(file.name, reader.error)); };
                            reader.readAsArrayBuffer(file);
                        }));
                        dropFile.push();
                    }
                }
            }
            dropPromisesRef.current.push(Promise.all(allPromises).then(() => {
                setPromiseCount(i => ++i);
                setDropError(null);
                return {
                    strings: dropData,
                    files: dropFile
                };
            }).catch(ex => {
                /* eslint-disable no-debugger */
                debugger;
                setPromiseCount(i => ++i);
                setDropError(ex);
                return null;
            }));
        });
        const propsStable = useRef({ onDragEnter, onDragLeave, onDragOver, onDrop });
        return {
            propsStable: propsStable.current,
            filesForConsideration,
            stringsForConsideration,
            droppedFiles,
            droppedStrings,
            dropError
        };
    });
}
//# sourceMappingURL=use-droppable.js.map