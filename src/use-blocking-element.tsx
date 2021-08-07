
import "wicg-inert";
import { useLayoutEffect } from "preact/hooks";
import { isFocusable } from "tabbable";

/**
 * Allows an element to trap focus by applying the "inert" attribute to all sibling, aunt, and uncle nodes.
 * 
 * Automatically handles consecutive calls with a loosely applied stack operation 
 * (specifically via `blockingElements`, with a small polyfill because I'm not sure how long
 * it'll take to find its way into the spec, if ever)
 * @param target 
 */
export function useBlockingElement<E extends Element>(target: E | null) {
    useLayoutEffect(() => {
        if (target) {
            blockingElements.push(target as Element as HTMLElement);
            return () => blockingElements.remove(target as Element as HTMLElement);
        }
    }, [target]);
}














// The code below has been slightly tweaked, mostly to remove
// adding a "$blockingElements" global to the document object,
// and to handle focus management automatically.

/**
 * @license
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * `BlockingElements` manages a stack of elements that inert the interaction
 * outside them. The top element is the interactive part of the document.
 * The stack can be updated with the methods `push, remove, pop`.
 */
interface BlockingElementsI<E extends Element> {
    /**
     * Call this whenever this object is about to become obsolete. This empties
     * the blocking elements
     */
    destructor(): void;

    /**
     * The top blocking element.
     */
    top: E | null;

    /**
     * Adds the element to the blocking elements.
     */
    push(element: E): void;

    /**
     * Removes the element from the blocking elements. Returns true if the
     * element was removed.
     */
    remove(element: E): boolean;

    /**
     * Remove the top blocking element and returns it.
     */
    pop(): E | null;

    /**
     * Returns if the element is a blocking element.
     */
    has(element: E): boolean;
}

// These are symbols to make these properties "publicly private" --
// i.e. private, but still accessible by things in this file.
const SiblingsToRestore = Symbol("symbols-to-restore");
const ParentMutationObserver = Symbol("parent-mutation-observer");
const FocusedElement = Symbol("focused-element");



interface InertableElement extends HTMLElement { inert?: boolean; }

interface TrackedElement extends InertableElement {
    [SiblingsToRestore]: Set<TrackedElement>;
    [ParentMutationObserver]: MutationObserver;
    [FocusedElement]: Element;
}

interface UntrackedElement extends Partial<TrackedElement> {};

type TrackedOrUntracked = TrackedElement | UntrackedElement;

/**
 * ShadyDOM shady roots look a lot like real ShadowRoots. The __shady property
 * gives them away, though.
 */
declare class ShadyRootElement extends Element {
    __shady: unknown;
    host: Element;
}

class BlockingElements implements BlockingElementsI<Element> {
    constructor() {
        document.addEventListener("focusin", this.#handleFocusIn, { passive: true })
    }

    #lastFocusedElement: (Node & HTMLOrSVGElement) | null = null;
    #handleFocusIn = (e: FocusEvent) => {
        let focusedElement = e.target;
        if (focusedElement instanceof Node && document.body != focusedElement && document.body.contains(focusedElement)) {
            this.#lastFocusedElement = focusedElement as (Node & HTMLOrSVGElement);
        }
    }

    /**
     * The blocking elements.
     */
    #blockingElements: TrackedOrUntracked[] = [];

    #elementsToRestoreFocusTo: Map<TrackedOrUntracked, (Node & HTMLOrSVGElement)> = new Map();

    /**
     * Used to keep track of the parents of the top element, from the element
     * itself up to body. When top changes, the old top might have been removed
     * from the document, so we need to memoize the inerted parents' siblings
     * in order to restore their inerteness when top changes.
     */
    #topElParents: TrackedElement[] = [];

    /**
     * Elements that are already inert before the first blocking element is
     * pushed.
     */
    #alreadyInertElements = new Set<TrackedOrUntracked>();

    destructor(): void {
        document.removeEventListener("focusin", this.#handleFocusIn);

        // Restore original inertness.
        this.#restoreInertedSiblings(this.#topElParents);
        

        this.#blockingElements = null!;
        this.#topElParents = null!;
        this.#alreadyInertElements = null!;
    }

    get top() {
        const elems = this.#blockingElements;
        return (elems[elems.length - 1] as Element) || null;
    }

    push(element: Element): void {
        if (!element || element === this.top) {
            return;
        }
        // Remove it from the stack, we'll bring it to the top.
        this.remove(element);
        this.#topChanged(element);
        this.#blockingElements.push(element);

        // NOTABLE CHANGE: Focus any new elements that are pushed,
        // and save whatever was previously focused.

        const firstFocusable = findFirstFocusable(element);

        // TODO: Seems fragile, but calling focus immediately doesn't work for...reasons?
        queueMicrotask(() => {
            firstFocusable?.focus();
        })

        if(this.#lastFocusedElement)
            this.#elementsToRestoreFocusTo.set(element, this.#lastFocusedElement);
    }

    remove(element: Element): boolean {
        const i = this.#blockingElements.indexOf(element);
        if (i === -1) {
            return false;
        }
        this.#blockingElements.splice(i, 1);
        // Top changed only if the removed element was the top element.
        if (i === this.#blockingElements.length) {
            this.#topChanged(this.top);

            // NOTABLE CHANGE: Restore focus when the topmost element is removed
            this.#elementsToRestoreFocusTo.get(element)?.focus();
            this.#elementsToRestoreFocusTo.delete(element);
        }
        return true;
    }

    pop(): Element | null {
        const top = this.top;
        top && this.remove(top);
        return top;
    }

    has(element: Element): boolean {
        return this.#blockingElements.indexOf(element) !== -1;
    }

    /**
     * Sets `inert` to all document elements except the new top element, its
     * parents, and its distributed content.
     */
    #topChanged(newTop: TrackedOrUntracked | null): void {
        const toKeepInert = this.#alreadyInertElements;
        const oldParents = this.#topElParents;
        // No new top, reset old top if any.
        if (!newTop) {
            this.#restoreInertedSiblings(oldParents);
            toKeepInert.clear();
            this.#topElParents = [];
            return;
        }

        const newParents = this.#getParents(newTop);
        // New top is not contained in the main document!
        if (newParents[newParents.length - 1].parentNode !== document.body) {
            throw Error('Non-connected element cannot be a blocking element');
        }
        // Cast here because we know we'll call _inertSiblings on newParents
        // below.
        this.#topElParents = newParents as Array<TrackedElement>;

        const toSkip = this.#getDistributedChildren(newTop);

        // No previous top element.
        if (!oldParents.length) {
            this.#inertSiblings(newParents, toSkip, toKeepInert);
            return;
        }

        let i = oldParents.length - 1;
        let j = newParents.length - 1;
        // Find common parent. Index 0 is the element itself (so stop before it).
        while (i > 0 && j > 0 && oldParents[i] === newParents[j]) {
            i--;
            j--;
        }
        // If up the parents tree there are 2 elements that are siblings, swap
        // the inerted sibling.
        if (oldParents[i] !== newParents[j]) {
            this.#swapInertedSibling(oldParents[i], newParents[j]);
        }
        // Restore old parents siblings inertness.
        i > 0 && this.#restoreInertedSiblings(oldParents.slice(0, i));
        // Make new parents siblings inert.
        j > 0 && this.#inertSiblings(newParents.slice(0, j), toSkip, null);
    }

    /**
     * Swaps inertness between two sibling elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    #swapInertedSibling(oldInert: TrackedElement, newInert: TrackedOrUntracked): void {
        const siblingsToRestore = oldInert[SiblingsToRestore];
        // oldInert is not contained in siblings to restore, so we have to check
        // if it's inertable and if already inert.
        if (this.#isInertable(oldInert) && !oldInert.inert) {
            oldInert.inert = true;
            siblingsToRestore.add(oldInert);
        }
        // If newInert was already between the siblings to restore, it means it is
        // inertable and must be restored.
        if (siblingsToRestore.has(newInert as TrackedElement)) {
            (newInert as TrackedElement).inert = false;
            siblingsToRestore.delete(newInert as TrackedElement);
        }
        newInert[ParentMutationObserver] = oldInert[ParentMutationObserver];
        newInert[SiblingsToRestore] = siblingsToRestore;
        newInert[FocusedElement] = oldInert[FocusedElement];

        oldInert[ParentMutationObserver] = undefined!;
        oldInert[SiblingsToRestore] = undefined!;
        oldInert[FocusedElement] = undefined!;
    }

    /**
     * Restores original inertness to the siblings of the elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    #restoreInertedSiblings(elements: TrackedElement[]) {
        for (const element of elements) {
            const mo = element[ParentMutationObserver];
            mo.disconnect();
            element[ParentMutationObserver] = undefined!;
            const siblings = element[SiblingsToRestore];
            for (const sibling of siblings) {
                sibling.inert = false;
            }
            element[SiblingsToRestore] = undefined!;
        }
    }

    /**
     * Inerts the siblings of the elements except the elements to skip. Stores
     * the inerted siblings into the element's symbol `_siblingsToRestore`.
     * Pass `toKeepInert` to collect the already inert elements.
     * Sets the property `inert` over the attribute since the inert spec
     * doesn't specify if it should be reflected.
     * https://html.spec.whatwg.org/multipage/interaction.html#inert
     */
    #inertSiblings(elements: TrackedOrUntracked[], toSkip: Set<TrackedOrUntracked> | null, toKeepInert: Set<TrackedOrUntracked> | null) {
        for (const element of elements) {

            console.assert(element != document.documentElement as Element);

            const parent = element.parentNode;
            const children = parent?.children;
            const inertedSiblings = new Set<TrackedElement>();
            for (let j = 0; j < (children?.length ?? 0); j++) {
                const sibling = children![j] as TrackedOrUntracked;
                // Skip the input element, if not inertable or to be skipped.
                if (sibling === element || !this.#isInertable(sibling) ||
                    (toSkip && toSkip.has(sibling))) {
                    continue;
                }
                // Should be collected since already inerted.
                if (toKeepInert && sibling.inert) {
                    toKeepInert.add(sibling);
                }
                else {
                    sibling.inert = true;
                    inertedSiblings.add(sibling);
                }
            }

            // Store the siblings that were inerted.
            element[SiblingsToRestore] = inertedSiblings;

            // Observe only immediate children mutations on the parent.
            const mo = new MutationObserver(this.#handleMutations.bind(this));
            element[ParentMutationObserver] = mo;
            let parentToObserve = parent;

            if (parentToObserve != null) {
                // If we're using the ShadyDOM polyfill, then our parent could be a
                // shady root, which is an object that acts like a ShadowRoot, but isn't
                // actually a node in the real DOM. Observe the real DOM parent instead.
                if ((parentToObserve as ShadyRootElement).__shady && (parentToObserve as ShadyRootElement).host) {
                    parentToObserve = (parentToObserve as ShadyRootElement).host;
                }
                mo.observe(parentToObserve, {
                    childList: true,
                });
            }
        }
    }

    /**
     * Handles newly added/removed nodes by toggling their inertness.
     * It also checks if the current top Blocking Element has been removed,
     * notifying and removing it.
     */
    #handleMutations(mutations: MutationRecord[]): void {
        const parents = this.#topElParents as UntrackedElement[];
        const toKeepInert = this.#alreadyInertElements;
        for (const mutation of mutations) {
            // If the target is a shadowRoot, get its host as we skip shadowRoots when
            // computing _topElParents.
            const target = (mutation.target as ShadowRoot).host || mutation.target;
            const idx = target === document.body ? parents.length : parents.indexOf(target as TrackedElement);
            const inertedChild = parents[idx - 1];
            const inertedSiblings = inertedChild[SiblingsToRestore]!;

            // To restore.
            for (let i = 0; i < mutation.removedNodes.length; i++) {
                const sibling = mutation.removedNodes[i] as TrackedElement;
                if (sibling === inertedChild) {
                    console.info('Detected removal of the top Blocking Element.');
                    this.pop();
                    return;
                }
                if (inertedSiblings.has(sibling)) {
                    sibling.inert = false;
                    inertedSiblings.delete(sibling);
                }
            }

            // To inert.
            for (let i = 0; i < mutation.addedNodes.length; i++) {
                const sibling = mutation.addedNodes[i] as TrackedOrUntracked;
                if (!this.#isInertable(sibling)) {
                    continue;
                }
                if (toKeepInert && sibling.inert) {
                    toKeepInert.add(sibling);
                } else {
                    sibling.inert = true;
                    inertedSiblings.add(sibling);
                }
            }
        }
    }

    /**
     * Returns if the element is inertable.
     */
    #isInertable(element: Pick<TrackedOrUntracked, "localName">): element is InertableElement {
        return false === /^(style|template|script)$/.test(element.localName ?? "");
    }

    /**
     * Returns the list of newParents of an element, starting from element
     * (included) up to `document.body` (excluded).
     */
    #getParents(element: TrackedOrUntracked): Array<TrackedOrUntracked> {
        const parents: TrackedOrUntracked[] = [];
        let current: TrackedOrUntracked | null | undefined = element;
        // Stop to body.
        while (current && (current as Element) !== document.body) {
            // Skip shadow roots.
            if (current.nodeType === Node.ELEMENT_NODE) {
                parents.push(current);
            }
            // ShadowDom v1
            if (current.assignedSlot) {
                // Collect slots from deepest slot to top.
                while (current = current.assignedSlot as (TrackedOrUntracked | null)) {
                    parents.push(current);
                }
                // Continue the search on the top slot.
                current = parents.pop();
                continue;
            }
            current = current.parentNode as TrackedOrUntracked || (current as Node as ShadowRoot).host;
        }
        return parents;
    }

    /**
     * Returns the distributed children of the element's shadow root.
     * Returns null if the element doesn't have a shadow root.
     */
    #getDistributedChildren(element: TrackedOrUntracked): Set<TrackedOrUntracked> | null {
        const shadowRoot = element.shadowRoot;
        if (!shadowRoot) {
            return null;
        }
        const result = new Set<TrackedOrUntracked>();

        const slots = shadowRoot.querySelectorAll('slot');
        if (slots.length && slots[0].assignedNodes) {
            for (let i = 0; i < slots.length; i++) {
                const nodes = slots[i].assignedNodes({ flatten: true });
                for (let j = 0; j < nodes.length; j++) {
                    if (nodes[j].nodeType === Node.ELEMENT_NODE) {
                        result.add(nodes[j] as TrackedOrUntracked);
                    }
                }
            }
            // No need to search for <content>.
        }
        return result;
    }
}

const blockingElements = new BlockingElements(); //("blockingElements" in globalThis) ? (globalThis as any).blockingElements as BlockingElements : (new BlockingElements());






function findFirstFocusable(element: Node) {
    // Now that the dialog is open, find the first focusable element
    const treeWalker = document.createTreeWalker(element, NodeFilter.SHOW_ELEMENT, { acceptNode: (node) => (node instanceof Element && isFocusable(node) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP) })

    const firstFocusable = treeWalker.firstChild() as (Element & HTMLOrSVGElement) | null;

    return firstFocusable;
}









