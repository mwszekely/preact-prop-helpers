
import { ManagedChildInfo, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "../../util/lib.js";
import { Nullable, TargetedPick, VNode } from "../../util/types.js";
import { monitored } from "../../util/use-call-count.js";
import { UseProcessedIndexManglerContext, UseProcessedIndexManglerParameters } from "./use-processed-index-mangler.js";

// TODO: This actually pulls in a lot of lodash for, like, one questionably-useful import.






export interface UseRearrangedChildrenContextSelf {
    _unused: undefined;
    //provideManglers(mangler: ProcessedIndexMangler): void;
}

/**
 * Unusually, this context is not passed from parent to child,
 * but from parent to a different parent.
 */
export interface UseRearrangedChildrenContext extends UseProcessedIndexManglerContext {
    //rearrangeableChildrenContext: UseRearrangedChildrenContextSelf;
}


/**
 * A parent can call this to provide useRearrangeableChildren with the `context` it expects.
 * 
 * @returns 
 */
/*export function useCreateProcessedChildrenContext(): OmitStrong<UseRearrangeableChildrenReturnTypeSelf<any>, "children"> & { context: UseRearrangedChildrenContext } {
    const sortRef = useRef<null | UseRearrangeableChildrenReturnTypeSelf<any>["sort"]>(null);
    const shuffleRef = useRef<null | UseRearrangeableChildrenReturnTypeSelf<any>["shuffle"]>(null);
    const reverseRef = useRef<null | UseRearrangeableChildrenReturnTypeSelf<any>["reverse"]>(null);
    const rearrangeRef = useRef<null | UseRearrangeableChildrenReturnTypeSelf<any>["rearrange"]>(null);
    const indexManglerRef = useRef<null | ((n: number) => number)>(null);
    const indexDemanglerRef = useRef<null | ((n: number) => number)>(null);
    const indexMangler = useStableCallback((i: number) => { return (indexManglerRef.current ?? identity)(i)! }, []);
    const indexDemangler = useStableCallback((i: number) => { return (indexDemanglerRef.current ?? identity)(i)! }, []);
    const sort = useStableCallback<(typeof sortRef)["current"]>((i) => { return (sortRef.current ?? identity)(i)! }, []);
    const shuffle = useStableCallback<(typeof shuffleRef)["current"]>(() => { return (shuffleRef.current ?? identity)()! }, []);
    const reverse = useStableCallback<(typeof reverseRef)["current"]>(() => { return (reverseRef.current ?? identity)()! }, []);
    const rearrange = useStableCallback<(typeof rearrangeRef)["current"]>((original, ordered) => { (rearrangeRef.current ?? noop)(original, ordered)! }, []);*/
/*const manglerRef = useRef<null | ProcessedIndexMangler>(null);

const provideManglers = useStableCallback<UseRearrangedChildrenContextSelf["provideManglers"]>((mangler) => { manglerRef.current = mangler; });

const rearrangeableChildrenContext = useMemoObject<UseRearrangedChildrenContextSelf>({ provideManglers });
const context = useMemoObject<UseRearrangedChildrenContext>({ rearrangeableChildrenContext });

return {
    context,
    mangler: manglerRef.current
}
}*/


type RearrangeableChildPositionInfo = Pick<DOMRectReadOnly, "left" | "top" | "width" | "height">;



export interface UseRearrangeableChildInfo<ChildElement extends Element> extends ManagedChildInfo<number> {
    getElement(): ChildElement | null;

    /** 
     * This notifies the child of the position that it is currently in,
     * so that the next time it renders itself, it can use that for a FLIP animation
     */
    updateFLIPAnimation(originalPosition: RearrangeableChildPositionInfo): void;
}

export type GetValid = (index: number) => boolean;
export type GetHighestChildIndex = () => number;


export interface UseRearrangeableChildrenParametersSelf {
    /**
     * The children to rearrange.
     */
    children: (VNode | null)[];
}

/**
 * All of these functions **MUST** be stable across renders.
 */
export interface UseRearrangeableChildrenParameters<ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>> extends UseProcessedIndexManglerParameters, TargetedPick<UseManagedChildrenReturnType<M>, "managedChildrenReturn", "getChildren"> {
    rearrangeableChildrenParameters: UseRearrangeableChildrenParametersSelf;
    context: UseRearrangedChildrenContext;
}


export interface UseRearrangeableChildrenReturnType {
    rearrangeableChildrenReturn: UseRearrangeableChildrenReturnTypeSelf;
    context: UseRearrangeableChildrenContext;
}

export interface UseRearrangeableChildrenContext {
    rearrangeableChildrenContext: UseRearrangeableChildrenContextSelf;
}

export interface UseRearrangeableChildrenContextSelf {
    getFLIPStart(index: number): RearrangeableChildPositionInfo | undefined;
}

export interface UseRearrangeableChildrenReturnTypeSelf {

    refresh(): void;

    /**
     * Pass an array of not-sorted child information to this function
     * and the children will re-arrange themselves to match.
     * 
     * @remarks This is only needed if you are implementing your own sort/reordering algorithm, just call this at the end when you're ready.
     *  
     * @stable
     */
    //rearrange: (phase: 'render' | 'async', originalRows: M["index"][], rowsInOrder: M["index"][]) => void;

    /** 
     * Arranges the children in a random order.
     * 
     * @stable 
     */
    //shuffle: () => Promise<void> | void;

    /** 
     * Reverses the order of the children
     * 
     * @stable 
     */
    //reverse: () => Promise<void> | void;

    /** 
     * @stable
     *
     * This function takes a component's original `index` prop and outputs a new index that represents its re-arranged position.
     * In conjunction with `indexDemangler`, this can be used to perform math on indices (incrementing, decrementing, etc.)
     *  
     * E.G. to decrement a component's index "c": indexDemangler(indexMangler(c) - 1)
     */
    //indexMangler: (n: number) => number;
    /** @stable */
    //indexDemangler: (n: number) => number;

    /**
     * The transformed (i.e. rearranged) children to render.
     */
    children: (VNode | null)[];

    /** 
     * @stable
     * 
     * Call to rearrange the children in ascending or descending order according to `compare`.
     * 
     * Note: `descending` simply inverts the value returned by `compare`.
     * 
     */
    //sort: (direction: "ascending" | "descending") => void;

    /**
     * Returns an array of each cell's `getSortValue()` result.
     */
    //toJsonArray(transform?: (info: M) => object): object;

}

export interface UseRearrangeableChildParameters<ChildElement extends Element> {
    info: Pick<UseRearrangeableChildInfo<ChildElement>, "getElement" | "index">;
    rearrangeableChildParameters: UseRearrangeableChildParametersSelf;
    context: UseRearrangeableChildrenContext;
}

export interface UseRearrangeableChildParametersSelf {
    cssProperty: Nullable<'translate' | 'transform'>;
    duration: Nullable<string>;
}

/**
 * Hook that allows for the **direct descendant** children of this component to be re-ordered and sorted.
 * 
 * @remarks *This is **separate** from "managed" children, which can be any level of child needed! Sortable/rearrangeable children must be **direct descendants** of the parent that uses this hook!*
 * 
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same `indexMangler` and `indexDemangler` 
 * functions that this hook returns. `useListNavigation` does not directly use this hook because, as mentioned, 
 * this hook imposes serious restrictions on child structure, while `useListNavigation` allows anything.
 * 
 * Besides the prop-modifying hook that's returned, the `sort` function that's returned will
 * sort all children according to their value from the `getValue` argument you pass in.
 * 
 * If you want to perform some re-ordering operation that's *not* a sort, you can manually
 * re-map each child's position using `mangleMap` and `demangleMap`, which convert between
 * sorted and unsorted index positions.
 * 
 * Again, unlike some other hooks, **these children must be direct descendants**. This is because
 * the prop-modifying hook inspects the given children, then re-creates them with new `key`s.
 * Because keys are given special treatment and a child has no way of modifying its own key
 * there's no other time or place this can happen other than exactly within the parent component's render function.
 * 
 * @compositeParams
 */
export const useRearrangeableChildren = /*@__PURE__*/ monitored(function useRearrangeableChildren<ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>>({
    rearrangeableChildrenParameters: { children: childrenIn },
    processedIndexManglerParameters: { getIndex, getSortValueAt },
    managedChildrenReturn: { getChildren: getManagedChildren },
    context: { processedIndexManglerContext: { mangler } }
}: UseRearrangeableChildrenParameters<ChildElement, M>): UseRearrangeableChildrenReturnType {
    useEnsureStability("useRearrangeableChildren", getIndex, getSortValueAt);

    const allChildPositions = useRef<RearrangeableChildPositionInfo[]>([]);

    const [refreshIndex, setRefreshIndex] = useState(0);

    const childrenOut = useMemo(() => {
        const rearrangedChildren = mangler.setChildren(childrenIn);

        for (const ch of rearrangedChildren) {
            const index = ch == null ? null : getIndex(ch);
            const mangledIndex = index == null ? null : mangler.map(index, "demangled", "mangled");
            const demangledIndex = index == null ? null : mangler.map(index, "mangled", "demangled");
            if (index != null && mangledIndex != null) {
                const info = getManagedChildren().getAt(index);
                const info2 = getManagedChildren().getAt(mangledIndex);
                if (info && info2) {

                    const element = info2.getElement();

                    const rect = element?.getBoundingClientRect();
                    if (rect) {
                        // TODO: This still fires even if the index hasn't changed for this child.
                        // Find a way to bail out if this child's position hasn't changed
                        info2.updateFLIPAnimation(allChildPositions.current[mangledIndex] = { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
                    }
                }
            }
        }

        return rearrangedChildren;
    }, [childrenIn, refreshIndex]);

    const getFLIPStart = useCallback((index: number) => {
        return allChildPositions.current[index];
    }, [])

    return {
        rearrangeableChildrenReturn: {
            children: childrenOut,
            refresh: useStableCallback(() => { setRefreshIndex(p => ++p); }, [])
        },
        context: useMemoObject<UseRearrangeableChildrenContext>({
            rearrangeableChildrenContext: useMemoObject({ getFLIPStart })
        })
    }
})

export interface UseRearrangeableChildReturnType<ChildElement extends Element> {
    info: Pick<UseRearrangeableChildInfo<ChildElement>, "updateFLIPAnimation">;
}

export const useRearrangeableChild = /*@__PURE__*/ monitored(function useRearrangeableChild<ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>>({
    context,
    info: { getElement, index },
    rearrangeableChildParameters: { cssProperty, duration }
}: UseRearrangeableChildParameters<ChildElement>): UseRearrangeableChildReturnType<ChildElement> {
    const { rearrangeableChildrenContext: { getFLIPStart } } = context;

    const getCssProperty = useStableGetter(cssProperty);
    const getDuration = useStableGetter(duration);

    // TODO: This ref doesn't work correctly? Or info.updateFLIPAnimation isn't update right? Not sure.
    // Either way, doing something like reversing twice results in it working right the first time,
    // but incorrect the second time around, because the position is from the wrong index.
    const flipStartPosition = useRef<RearrangeableChildPositionInfo | undefined>(undefined);
    const [animationIndex, setAnimationIndex] = useState(0);

    useLayoutEffect(() => {
        const duration = getDuration();
        const cssProperty = getCssProperty();
        if (cssProperty && animationIndex > 0) {
            const element = getElement() as Element as HTMLElement;
            const first = getFLIPStart(index); //flipStartPosition.current;

            const mid = element.getBoundingClientRect();
            console.log(mid);
            // Forcibly end any previous transitions.
            // Otherwise, interruptions end up causing exponentially larger transforms.
            // Which, TODO, is definitely fixable.
            if (cssProperty === 'translate')
                element.style.scale = element.style.translate = '';
            else if (cssProperty === 'transform')
                element.style.transform = '';
            element.style.transition = 'none';

            const last = element.getBoundingClientRect();

            if (first && last) {
                const dx = first.left - last.left;
                const dy = first.top - last.top;
                const dsx = first.width / last.width;
                const dsy = first.height / last.height;

                if (cssProperty === 'translate') {
                    element.style.translate = `${dx}px ${dy}px`;
                    element.style.scale = `${dsx} ${dsy}`;
                }
                else if (cssProperty === 'transform') {
                    element.style.transform = `translate(${dx}px, ${dy}px) scale(${dsx}, ${dsy})`;
                }
                element.style.transition = cssProperty === 'translate'? 'translate 0s, scale 0s' : `transform 0s`;
                requestAnimationFrame(() => {
                    if (cssProperty === 'translate')
                        element.style.scale = element.style.translate = '';
                    else if (cssProperty === 'transform')
                        element.style.transform = '';

                    element.style.transition = cssProperty === 'translate'? `translate ${duration}, scale ${duration}` : `transform ${duration}`;
                });
            }
        }
    }, [index, animationIndex]);

    const updateFLIPAnimation = useCallback((position: RearrangeableChildPositionInfo) => {
        flipStartPosition.current = position;
        setAnimationIndex(p => ++p);
    }, [])

    return {
        info: { updateFLIPAnimation }
    }
})
