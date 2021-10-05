import { h, Ref } from "preact";
import { useCallback, useRef } from "preact/hooks";
import { MergedProps, useMergedProps } from "./use-merged-props";
import { useRefElement, UseRefElementPropsReturnType } from "./use-ref-element";
import { useState } from "./use-state";

interface UseDraggableReturnType<E extends EventTarget> {
    useDraggableProps: UseDraggableProps<E>;

    /**
     * Returns true if the element in question is currently being dragged
     */
    dragging: boolean;
    getDragging: () => boolean;

    /**
     * Once the drag ends, if it was over a valid droppable, this will be
     * set to the `dropEffect` value it had.
     * 
     * This can be used to detect when the element has dropped, 
     * and then what should be done with it (generally deleted if the effect was "move")
     */
    lastDropEffect: DataTransfer["dropEffect"] | null;
    getLastDropEffect: () => (DataTransfer["dropEffect"] | null);
}

type UseDraggableProps<E extends EventTarget> = <P extends h.JSX.HTMLAttributes<E>>(p: P) => MergedProps<E, UseRefElementPropsReturnType<E, { draggable: true; onDragStart: (e: DragEvent) => void; onDragEnd: (e: DragEvent) => void; ref: Ref<E>; }>, P>

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
    data: { [mimeType: string]: string };
}

export function useDraggable<E extends HTMLElement>({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }: UseDraggableParameters) {

    const [dragging, setDragging, getDragging] = useState(false);
    const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState<DataTransfer["dropEffect"] | null>(null);

    const useDraggableProps = useCallback(<P extends h.JSX.HTMLAttributes<E>>(p: P) => {

        const ref = useRef<E>(null);
        const { element, useRefElementProps } = useRefElement<E>();

        const onDragStart = (e: DragEvent) => {
            //e.preventDefault();
            setDragging(true);
            if (e.dataTransfer) {
                e.dataTransfer.effectAllowed = (effectAllowed ?? "all");
                if (dragImage)
                    e.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0)

                let entries = Object.entries(data) as [mimeType: string, data: string][];
                for (const [mimeType, data] of entries) {
                    e.dataTransfer.setData(mimeType, data);
                }
            }
        };

        const onDragEnd = (e: DragEvent) => {
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


        return useMergedProps<E>()(useRefElementProps({
            draggable: true,
            onDragStart,
            onDragEnd,
            ref
        }), p);

    }, [effectAllowed, dragImage, dragImageXOffset, dragImageYOffset, ...Object.entries(data).flat()]);

    // Return both the element and the hook that modifies 
    // the props and allows us to actually find the element
    let ret: UseDraggableReturnType<E> = {
        useDraggableProps,
        dragging,
        getDragging,

        // Set once a drag has completed with the resulting action
        // Useful for removing the element afterwards if it was "move"
        lastDropEffect,

        /**
         * Test
         */
        getLastDropEffect
    };

    return ret;
}

