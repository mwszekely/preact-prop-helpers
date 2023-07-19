import { ElementProps } from "../util/types.js";
export interface UseDraggableReturnType<E extends EventTarget> {
    /** *Unstable* */
    propsUnstable: ElementProps<E>;
    /**
     * Returns true if the element in question is currently being dragged
     */
    dragging: boolean;
    /** **STABLE** */
    getDragging: () => boolean;
    /**
     * Once the drag ends, if it was over a valid droppable, this will be
     * set to the `dropEffect` value it had.
     *
     * This can be used to detect when the element has dropped,
     * and then what should be done with it (generally deleted if the effect was "move")
     */
    lastDropEffect: DataTransfer["dropEffect"] | null;
    /** **STABLE** */
    getLastDropEffect: () => (DataTransfer["dropEffect"] | null);
}
export interface UseDraggableParameters {
    /**
     * Maps to the Drag and Drop API -- allows limiting the areas this element can be dropped.
     * For example, setting this to "copyLink" will allow this this to be dropped onto
     * a droppable with an effect of "copy" or "link", but not "move".
     *
     */
    effectAllowed?: DataTransfer["effectAllowed"] | undefined;
    /**
     * Can be used to specify a custom drag image instead of the browser default (a transparent render of the original element, generally)
     */
    dragImage?: HTMLCanvasElement | HTMLImageElement | HTMLVideoElement;
    dragImageXOffset?: number;
    dragImageYOffset?: number;
    /**
     * Represents a dictionary mapping of MIME types to data
     */
    data: {
        [mimeType: string]: string;
    };
}
/**
 * Allows an element to start a drag operation.
 *
 * {@include } {@link UseDraggableParameters}
 * {@include } {@link UseDraggableReturnType}
 */
export declare function useDraggable<E extends Element>({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }: UseDraggableParameters): UseDraggableReturnType<E>;
//# sourceMappingURL=use-draggable.d.ts.map