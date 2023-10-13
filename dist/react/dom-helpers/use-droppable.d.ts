import { ElementProps } from "../util/types.js";
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
    droppedStrings: {
        [MimeType: string]: string;
    } | null;
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
export interface DropFile extends DropFileMetadata {
    name: string;
    data: ArrayBuffer;
    size: number | undefined;
    lastModified: number | undefined;
}
export interface DropFileMetadata {
    type: string | undefined;
}
type DroppableFileErrorType = "IndexSizeError" | "HierarchyRequestError" | "WrongDocumentError" | "InvalidCharacterError" | "NoModificationAllowedError" | "NotFoundError" | "NotSupportedError" | "InvalidStateError" | "InUseAttributeError" | "SyntaxError" | "InvalidModificationError" | "NamespaceError" | "InvalidAccessError" | "TypeMismatchError" | "SecurityError" | "NetworkError" | "AbortError" | "URLMismatchError" | "QuotaExceededError" | "TimeoutError" | "InvalidNodeTypeError" | "DataCloneError" | "EncodingError" | "NotReadableError" | "UnknownError" | "ConstraintError" | "DataError" | "TransactionInactiveError" | "ReadOnlyError" | "VersionError" | "OperationError" | "NotAllowedError";
export declare class DroppableFileError extends Error {
    fileName: string;
    errorType: DroppableFileErrorType;
    constructor(fileName: string, base: DOMException | null);
}
/**
 * Allows an element to start a drag operation.
 *
 * @remarks
 * {@include } {@link UseDroppableParameters}
 * {@include } {@link UseDroppableReturnType}
 */
export declare const useDroppable: <E extends Element>({ effect }: UseDroppableParameters) => UseDroppableReturnType<E>;
export {};
//# sourceMappingURL=use-droppable.d.ts.map