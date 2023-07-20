import { UseRefElementReturnType } from "../../dom-helpers/use-ref-element.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { assertEmptyObject } from "../../util/assert.js";
import { EnhancedEventHandler, enhanceEvent } from "../../util/event.js";
import { useEffect } from "../../util/lib.js";
import { monitorCallCount } from "../../util/use-call-count.js";


export interface UseEscapeDismissParametersSelf {

    /**
     * Called when the component is dismissed by pressing the `Escape` key.
     */
    onDismiss: EnhancedEventHandler<KeyboardEvent, { reason: "escape" }>;

    /** 
     * When `true`, `onDismiss` is eligible to be called. When `false`, it will not be called.
     */
    active: boolean;

    /**
     * The escape key event handler is attached onto the window, so we need to know which window.
     * 
     * @remarks The returned `Window` should not change throughout the lifetime of the component (i.e. the element in question must not switch to another window via some means, which might not even be possible).
     */
    getWindow(): Window;

    /**
     * Get this from context somewhere, and increment it in that context.
     * 
     * If multiple instances of Preact are on the page, tree depth is used as a tiebreaker
     */
    parentDepth: number;
}

export interface UseEscapeDismissParameters<PopupElement extends Element> {
    refElementPopupReturn: Pick<UseRefElementReturnType<PopupElement>["refElementReturn"], "getElement">;
    escapeDismissParameters: UseEscapeDismissParametersSelf;
}


const MagicWindowKey = ("__preact-prop-helpers-escape-key-dismiss__") as keyof Window;
interface WindowEscapeKeyInfo {
    microtaskQueued: boolean;
    elementQueue: Map<Element, { onClose: () => void, depth: number, treeDepth: number }>;//(Element | null)[];
}

function getElementDepth(element: Element) {
    let depth = 0;
    let parent = element.parentElement;
    while (parent) {
        depth += 1;
        parent = parent.parentElement;
    }

    return depth;
}

/**
 * Invokes a callback when the `Escape` key is pressed on the topmost component (a max of one invocation per `Escape` press)
 * 
 * @remarks One press of the `Escape` key is guaranteed to only call `onDismiss` for *only one* component, and it is called on the component deepest in the DOM tree.
 * 
 * TODO: Instead of being deepest in the DOM tree (which is usually fine), it should probably be related to what order something was made `active`.
 * 
 * @compositeParams 
 */
export function useEscapeDismiss<PopupElement extends Element>({ escapeDismissParameters: { onDismiss: onClose, active: open, getWindow: unstableGetWindow, parentDepth, ...void1 }, refElementPopupReturn: { getElement, ...void2 } }: UseEscapeDismissParameters<PopupElement>): void {
    monitorCallCount(useEscapeDismiss);
    assertEmptyObject(void1);
    assertEmptyObject(void2);

    const stableOnClose = useStableCallback(onClose);
    const getWindow = useStableCallback(unstableGetWindow);
    const getDepth = useStableGetter(parentDepth + 1);


    // When this component opens, add an event listener that finds the deepest open soft dismiss element to actually dismiss.
    // Only opened components will add event handlers, and will remove them once closed.
    // The reason this is so complicated is because:
    // 1. We must only close one soft dismiss component at a time.  If there's a tooltip in a popup, the tooltip must be dismissed.
    // 2. `keydown` events don't just work on arbitrary elements, for our purposes they must be from the `window`. So we can't rely on normal capturing or bubbling behavior on the element itself.
    // 3. Event handlers added to the `window` via `addEventHandler` are called in the order of registration, which is completely at odds with #1.
    //
    // So all soft dismiss components listen for a keydown of Escape, 
    // then the first one to do so will wait for a microtask, 
    // then find the deepest element in the document tree to dismiss of all of those components currently open.
    useEffect(() => {
        const window = getWindow();
        (window as any)[MagicWindowKey] ??= ({ microtaskQueued: false, elementQueue: new Map() } as WindowEscapeKeyInfo)
        const info = window[MagicWindowKey] as WindowEscapeKeyInfo;

        if (open) {
            window.addEventListener("keydown", handler, { capture: true });

            return () => {
                const element = getElement();
                if (element && info.elementQueue)
                    info.elementQueue.delete(element);
                window.removeEventListener("keydown", handler, { capture: true });
            };
        }




        function handler(e: KeyboardEvent) {
            if (e.key == "Escape") {

                // We don't know which of the currently active soft dismisses will actually do something,
                // but ONE of them definitely will,
                // so we stop propagation to child nodes, but not to everyone on the window (stopImmediatePropagation).
                e.preventDefault();
                e.stopPropagation();



                // This is what at least one of the elements will call
                const onClose2 = () => { stableOnClose(enhanceEvent(e, { reason: "escape" })); };
                const element = getElement();
                if (element) {
                    const treeDepth = getElementDepth(element);
                    const depth = getDepth();
                    info.elementQueue.set(element, { depth, onClose: onClose2, treeDepth });
                }


                if (!info.microtaskQueued) {
                    info.microtaskQueued = true;
                    setTimeout(() => {

                        const { elementQueue } = info;
                        info.microtaskQueued = false;
                        info.elementQueue = new Map();

                        let deepestDepth = -Infinity;
                        let deepestTreeDepth = -Infinity;
                        let _deepestElement: Element | null = null;
                        let deepestOnClose: (() => void) | null = null;

                        for (const [element, { depth, onClose, treeDepth }] of elementQueue) {
                            let tieBroken = false;
                            if (depth == deepestDepth) {
                                if (treeDepth > deepestTreeDepth) {
                                    tieBroken = true;
                                }
                            }

                            if (depth > deepestDepth || (depth == deepestDepth && tieBroken)) {
                                deepestDepth = depth;
                                _deepestElement = element;
                                deepestTreeDepth = treeDepth;
                                deepestOnClose = onClose;
                            }
                        }
                        deepestOnClose?.();
                    }, 0);
                }
            }
        }
    }, [open]);
}