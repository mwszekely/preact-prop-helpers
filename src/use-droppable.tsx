import { h, Ref, RefCallback } from "preact";
import { useCallback, useEffect, useRef } from "preact/hooks";
import { useRefElement, UseRefElementPropsReturnType } from "./use-ref-element";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useState } from "./use-state";

export interface UseDroppableReturnType<E extends HTMLElement> {

    /**
     * Hook for modifying the props you were going to pass to your drop target Element.
     */
    useDroppableProps: UseDroppableProps<E>;

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

    element: E | null;
    getElement(): E | null;
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

export interface DropFile extends DropFileMetadata { name: string, data: ArrayBuffer, size: number | undefined, lastModified: number | undefined };
export interface DropFileMetadata { type: string | undefined };


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

type UseDroppableProps<E extends HTMLElement> = <P extends UseDroppablePropsParameters<E>>(p: P) => UseDroppablePropsReturnType<E, P>;
type UseDroppablePropsParameters<E extends HTMLElement> = h.JSX.HTMLAttributes<E>;
type UseDroppablePropsReturnType<E extends HTMLElement, P extends UseDroppablePropsParameters<E>> = 
MergedProps<E, UseRefElementPropsReturnType<E, { onDragEnter: (e: DragEvent) => void; onDragLeave: (e: DragEvent) => void; onDragOver: (e: DragEvent) => void; onDrop: (e: DragEvent) => void; }>, P>;
//MergedProps<UseRefElementPropsReturnType<E, Pick<h.JSX.HTMLAttributes<E>, "onDragEnter" | "onDragLeave" | "onDragOver" | "onDrop">>, P>;


export function useDroppable<E extends HTMLElement>({ effect }: UseDroppableParameters): UseDroppableReturnType<E> {

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

    const { element, useRefElementProps, getElement } = useRefElement<E>();

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
    }, [currentPromiseIndex])


    const useDroppableProps: UseDroppableProps<E> = <P extends UseDroppablePropsParameters<E>>(p: P): UseDroppablePropsReturnType<E, P> => {

        //const ref = useRef<E>(null);

        // Handle collecting the current file metadata or MIME types.
        const onDragEnter = (e: DragEvent) => {
            e.preventDefault();
            if (e.dataTransfer) {

                // Is there a default? I can't find one anywhere.
                e.dataTransfer.dropEffect = (effect ?? "move");

                const newMimeTypes = new Set<string>();
                const newFiles = new Array<DropFileMetadata>();

                for (let item of e.dataTransfer?.items ?? []) {
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
        };

        // Handle resetting the current file metadata or MIME types
        const onDragLeave = (e: DragEvent) => {
            e.preventDefault();
            setFilesForConsideration(null);
            setStringsForConsideration(null);
        };

        // Boilerplate, I guess
        const onDragOver = (e: DragEvent) => {
            e.preventDefault();
        }

        // Handle getting the drop data asynchronously
        const onDrop = (e: DragEvent) => {
            e.preventDefault();

            setFilesForConsideration(null);
            setStringsForConsideration(null);

            let allPromises = new Array<Promise<unknown>>();

            const dropData: { [mimeType: string]: string } = {};
            const dropFile: DropFile[] = [];

            for (let item of e.dataTransfer?.items ?? []) {
                const { kind, type } = item;

                if (kind === "string") {
                    allPromises.push((new Promise<string>((resolve, reject) => item.getAsString(resolve))).then(str => dropData[type] = str));
                }
                else if (kind === "file") {
                    const file = item.getAsFile();
                    if (file) {
                        allPromises.push(
                            new Promise<void>((resolve, reject) => {

                                let reader = new FileReader();

                                reader.onload = (e) => {
                                    resolve();
                                    const data = reader.result as ArrayBuffer;
                                    dropFile.push({ data, name: file.name, type: file.type, size: data.byteLength, lastModified: file.lastModified });
                                };
                                reader.onerror = (e) => { reject(new DroppableFileError(file.name, reader.error)); };
                                reader.onabort = (e) => { reject(new DroppableFileError(file.name, reader.error)); };

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
                debugger;   // Intentional
                setPromiseCount(i => ++i);
                setDropError(ex);
                return null;
            }));
        }


        return useMergedProps<E>()(useRefElementProps({ onDragEnter, onDragLeave, onDragOver, onDrop }), p);
    };

    return {
        useDroppableProps,
        filesForConsideration,
        stringsForConsideration,
        droppedFiles,
        droppedStrings,

        dropError,

        element,
        getElement
    }
}


