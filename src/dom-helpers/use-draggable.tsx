import { useState } from "../preact-extensions/use-state.js";
import { DragEventType, ElementProps, Nullable } from "../util/types.js";
import { useMonitoring } from "../util/use-call-count.js";

/*
export function useDraggableProps<E extends EventTarget>(r: UseDraggableReturnType<E>, ...otherProps: ElementProps<E>[]): ElementProps<E>[] {
    return [r.propsUnstable, ...otherProps];
}*/

export interface UseDraggableReturnType<E extends EventTarget> {
    /** *Unstable* */
    propsUnstable: ElementProps<E>;

    /**
     * Returns true if the element in question is currently being dragged
     */
    dragging: boolean;

    /** @stable */
    getDragging: () => boolean;

    /**
     * Once the drag ends, if it was over a valid droppable, this will be
     * set to the `dropEffect` value it had.
     * 
     * This can be used to detect when the element has dropped, 
     * and then what should be done with it (generally deleted if the effect was "move")
     */
    lastDropEffect: DataTransfer["dropEffect"] | null;

    /** @stable */
    getLastDropEffect: () => (DataTransfer["dropEffect"] | null);
}


export interface UseDraggableParameters {

    /**
     * Maps to the Drag and Drop API -- allows limiting the areas this element can be dropped.
     * For example, setting this to "copyLink" will allow this this to be dropped onto
     * a droppable with an effect of "copy" or "link", but not "move".
     * 
     */
    effectAllowed: Nullable<DataTransfer["effectAllowed"]>;

    /**
     * Can be used to specify a custom drag image instead of the browser default (a transparent render of the original element, generally)
     */
    dragImage: Nullable<HTMLCanvasElement | HTMLImageElement | HTMLVideoElement>;
    dragImageXOffset: Nullable<number>;
    dragImageYOffset: Nullable<number>;

    /**
     * Represents a dictionary mapping of MIME types to data
     */
    data: { [mimeType: string]: string };
}

/**
 * Allows an element to start a drag operation.
 * 
 * @remarks
 * {@include } {@link UseDraggableParameters}
 * {@include } {@link UseDraggableReturnType}
 */
export function useDraggable<E extends Element>({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }: UseDraggableParameters): UseDraggableReturnType<E> {
    return useMonitoring(function useDraggable(): UseDraggableReturnType<E> {
        const [dragging, setDragging, getDragging] = useState(false);
        const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState<DataTransfer["dropEffect"] | null>(null);

        const onDragStart = (e: DragEventType<E>) => {
            //e.preventDefault();
            setDragging(true);
            if (e.dataTransfer) {
                e.dataTransfer.effectAllowed = (effectAllowed ?? "all");
                if (dragImage)
                    e.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0)

                const entries = Object.entries(data) as [mimeType: string, data: string][];
                for (const [mimeType, data] of entries) {
                    e.dataTransfer.setData(mimeType, data);
                }
            }
        }


        const onDragEnd = (e: DragEventType<E>) => {
            e.preventDefault();
            setDragging(false);
            if (e.dataTransfer) {
                if (e.dataTransfer.dropEffect != "none") {
                    setLastDropEffect(e.dataTransfer.dropEffect);
                }
                else {
                    setLastDropEffect(null);
                }
            }
        };

        // Return both the element and the hook that modifies 
        // the props and allows us to actually find the element
        const ret: UseDraggableReturnType<E> = {
            propsUnstable: {
                draggable: true,
                onDragStart,
                onDragEnd
            },
            dragging,
            getDragging,
            lastDropEffect,
            getLastDropEffect
        };

        return ret;
    });
}

