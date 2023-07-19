import { useState } from "../preact-extensions/use-state.js";
import { monitorCallCount } from "../util/use-call-count.js";
/**
 * Allows an element to start a drag operation.
 *
 * {@include } {@link UseDraggableParameters}
 * {@include } {@link UseDraggableReturnType}
 */
export function useDraggable({ effectAllowed, data, dragImage, dragImageXOffset, dragImageYOffset }) {
    monitorCallCount(useDraggable);
    const [dragging, setDragging, getDragging] = useState(false);
    const [lastDropEffect, setLastDropEffect, getLastDropEffect] = useState(null);
    const onDragStart = (e) => {
        //e.preventDefault();
        setDragging(true);
        if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = (effectAllowed ?? "all");
            if (dragImage)
                e.dataTransfer.setDragImage(dragImage, dragImageXOffset ?? 0, dragImageYOffset ?? 0);
            const entries = Object.entries(data);
            for (const [mimeType, data] of entries) {
                e.dataTransfer.setData(mimeType, data);
            }
        }
    };
    const onDragEnd = (e) => {
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
    const ret = {
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
}
//# sourceMappingURL=use-draggable.js.map