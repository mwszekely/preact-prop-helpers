import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useState } from "../preact-extensions/use-state.js";
import { DragEventType, useEffect, useRef } from "../util/lib.js";
import { ElementProps } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";

export interface UseDroppableReturnType<E extends Element> {

    /**
     * Hook for modifying the props you were going to pass to your drop target Element.
     * 
     * *Unstable*
     */
    propsStable: ElementProps<E>;

    /**
     * While something is being dragged over this element, this will contain any information about any files included in that drop.
     * Otherwise, it'll be null, meaning nothing is being dragged over this element.
     */
    filesForConsideration: DropFileMetadata[] | null;
    /**
     * While something is being dragged over this element, a list of available MIME types for the non-file data will be listed here.
     * Otherwise, it'll be null, meaning nothing is being dragged over this element.
     */
    stringsForConsideration: Set<string> | null;

    /**
     * When files are dropped over the element, their data will be given here.
     * This will update as new drops happen.
     */
    droppedFiles: DropFile[] | null;

    /**
     * When non-file data is dropped over the element, their data will be given here.
     * This will update as new drops happen.
     */
    droppedStrings: { [MimeType: string]: string } | null;


    dropError: unknown;
}

export interface UseDroppableParameters {
    /**
     * Maps to the Drag and Drop API -- effectively means "as close as possible, what's happening to the data when I drop it here? 
     * Am I copying it and leaving the original, am I moving it and deleting the original, or am I linking it to the original?"
     * 
     * Whatever is being dragged over this will have its own permission that's checked against this.
     */
    effect: DataTransfer["dropEffect"] | undefined;
}

export interface DropFile extends DropFileMetadata { name: string, data: ArrayBuffer, size: number | undefined, lastModified: number | undefined }
export interface DropFileMetadata { type: string | undefined }


type DroppableFileErrorType = "IndexSizeError" | "HierarchyRequestError" | "WrongDocumentError" | "InvalidCharacterError" | "NoModificationAllowedError" | "NotFoundError" | "NotSupportedError" | "InvalidStateError" | "InUseAttributeError" | "SyntaxError" | "InvalidModificationError" | "NamespaceError" | "InvalidAccessError" | "TypeMismatchError" | "SecurityError" | "NetworkError" | "AbortError" | "URLMismatchError" | "QuotaExceededError" | "TimeoutError" | "InvalidNodeTypeError" | "DataCloneError" | "EncodingError" | "NotReadableError" | "UnknownError" | "ConstraintError" | "DataError" | "TransactionInactiveError" | "ReadOnlyError" | "VersionError" | "OperationError" | "NotAllowedError";

export class DroppableFileError extends Error {
    fileName: string;
    errorType: DroppableFileErrorType;

    constructor(fileName: string, base: DOMException | null) {
        super(base?.message ?? "An unspecified error occurred reading the file.");
        this.fileName = fileName;
        this.errorType = (base?.name as DroppableFileErrorType);
    }

}



/**
 * Allows an element to start a drag operation.
 * 
 * @remarks
 * {@include } {@link UseDroppableParameters}
 * {@include } {@link UseDroppableReturnType}
 */
export function useDroppable<E extends Element>({ effect }: UseDroppableParameters): UseDroppableReturnType<E> {
    return useMonitoring(function useDroppable(): UseDroppableReturnType<E> {
        const [filesForConsideration, setFilesForConsideration] = useState<null | DropFileMetadata[]>(null);
        const [stringsForConsideration, setStringsForConsideration] = useState<null | Set<string>>(null);

        const [droppedFiles, setDroppedFiles] = useState<null | DropFile[]>(null);
        const [droppedStrings, setDroppedStrings] = useState<null | { [MimeType: string]: string }>(null);

        const [dropError, setDropError] = useState<unknown | undefined>(undefined);

        // All the promises generated from the drop events.
        // Used to process multiple drop events in succession
        const dropPromisesRef = useRef<Promise<null | { strings: { [mimeType: string]: string }, files: DropFile[] }>[]>([]);
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
                })
            }
        }, [currentPromiseIndex]);


        // Handle collecting the current file metadata or MIME types.
        const onDragEnter = useStableCallback((e: DragEventType<E>) => {
            e.preventDefault();
            if (e.dataTransfer) {

                // Is there a default? I can't find one anywhere.
                e.dataTransfer.dropEffect = (effect ?? "move");

                const newMimeTypes = new Set<string>();
                const newFiles = new Array<DropFileMetadata>();

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
        const onDragLeave = useStableCallback((e: DragEventType<E>) => {
            e.preventDefault();
            setFilesForConsideration(null);
            setStringsForConsideration(null);
        });

        // Boilerplate, I guess
        const onDragOver = useStableCallback((e: DragEventType<E>) => {
            e.preventDefault();
        })

        // Handle getting the drop data asynchronously
        const onDrop = useStableCallback((e: DragEventType<E>) => {
            e.preventDefault();

            setFilesForConsideration(null);
            setStringsForConsideration(null);

            const allPromises = new Array<Promise<unknown>>();

            const dropData: { [mimeType: string]: string } = {};
            const dropFile: DropFile[] = [];

            for (const item of e.dataTransfer?.items ?? []) {
                const { kind, type } = item;

                if (kind === "string") {
                    allPromises.push((new Promise<string>((resolve, _reject) => item.getAsString(resolve))).then(str => dropData[type] = str));
                }
                else if (kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        allPromises.push(
                            new Promise<void>((resolve, reject) => {

                                const reader = new FileReader();

                                reader.onload = (_) => {
                                    resolve();
                                    const data = reader.result as ArrayBuffer;
                                    dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
                                };
                                reader.onerror = (_) => { reject(new DroppableFileError(file.name, reader.error)); };
                                reader.onabort = (_) => { reject(new DroppableFileError(file.name, reader.error)); };

                                reader.readAsArrayBuffer(file);
                            })
                        );
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
                }
            }).catch(ex => {
                /* eslint-disable no-debugger */
                debugger;
                setPromiseCount(i => ++i);
                setDropError(ex);
                return null;
            }));
        })

        const propsStable = useRef<ElementProps<E>>({ onDragEnter, onDragLeave, onDragOver, onDrop });

        return {
            propsStable: propsStable.current,
            filesForConsideration,
            stringsForConsideration,
            droppedFiles,
            droppedStrings,

            dropError
        }
    });
}


