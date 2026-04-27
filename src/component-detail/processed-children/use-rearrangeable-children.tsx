
import { ManagedChildInfo, UseManagedChildrenReturnType } from "../../preact-extensions/use-managed-children.js";
import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "../../util/lib.js";
import { Nullable, TargetedPick, VNode } from "../../util/types.js";
import { useMonitoring } from "../../util/use-call-count.js";
import { UseProcessedIndexManglerContext, UseProcessedIndexManglerParameters } from "./use-processed-index-mangler.js";






export interface UseRearrangedChildrenContextSelf {
    //provideManglers(mangler: ProcessedIndexMangler): void;
}

/**
 * Unusually, this context is not passed from parent to child,
 * but from parent to a different parent.
 */
export interface UseRearrangedChildrenContext extends UseProcessedIndexManglerContext {
    //rearrangeableChildrenContext: UseRearrangedChildrenContextSelf;
}


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

    /**
     * If true, moving children around will visually translate 
     * them to their new position via CSS transforms.
     * 
     * TODO: Disabled for now for performance reasons
     */
    animate: false;
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

    animate: boolean;
}

export interface UseRearrangeableChildrenReturnTypeSelf {

    refresh(): void;


    /**
     * The transformed (i.e. rearranged) children to render.
     */
    children: (VNode | null)[];

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
 * It's recommended to use this in conjunction with `useListNavigation`; it takes the same index mangling
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
export function useRearrangeableChildren<ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>>({
    rearrangeableChildrenParameters: { children: childrenIn, animate },
    processedIndexManglerParameters: { getIndex, getSortValueAt },
    managedChildrenReturn: { getChildren: getManagedChildren },
    context: { processedIndexManglerContext: { mangler } }
}: UseRearrangeableChildrenParameters<ChildElement, M>): UseRearrangeableChildrenReturnType {
    return useMonitoring(function useRearrangeableChildren(): UseRearrangeableChildrenReturnType {
        useEnsureStability("useRearrangeableChildren", getIndex, getSortValueAt);

        const allChildPositions = useRef<RearrangeableChildPositionInfo[]>([]);

        const [refreshIndex, setRefreshIndex] = useState(0);

        const childrenOut = useMemo(() => {
            const rearrangedChildren = mangler.setChildren(childrenIn);

            if (animate) {
                for (const ch of rearrangedChildren) {
                    const index = ch == null ? null : getIndex(ch);
                    const mangledIndex = index == null ? null : mangler.map(index, "original", "repositioned");
                    if (index != null && mangledIndex != null) {
                        const info = getManagedChildren().getAt(index);
                        const info2 = getManagedChildren().getAt(mangledIndex);
                        if (info && info2 && animate) {

                            const element = info2.getElement();

                            const rect = element?.getBoundingClientRect();
                            if (rect) {
                                // TODO: This still fires even if the index hasn't changed for this child.
                                // Find a way to bail out if this child's position hasn't changed.
                                // This is important because otherwise, on mount, we call getBoundingClientRect for EVERY child.
                                info2.updateFLIPAnimation(allChildPositions.current[mangledIndex] = { left: rect.left, top: rect.top, width: rect.width, height: rect.height });
                            }
                        }
                    }
                }
            }

            return rearrangedChildren;
        }, [childrenIn, refreshIndex, animate]);

        const getFLIPStart = useCallback((index: number) => {
            return allChildPositions.current[index];
        }, [])

        return {
            rearrangeableChildrenReturn: {
                children: childrenOut,
                refresh: useStableCallback(() => { setRefreshIndex(p => ++p); }, [])
            },
            context: useMemoObject<UseRearrangeableChildrenContext>({
                rearrangeableChildrenContext: useMemoObject<UseRearrangeableChildrenContextSelf>({ getFLIPStart, animate })
            })
        }
    });
}

export interface UseRearrangeableChildReturnType<ChildElement extends Element> {
    info: Pick<UseRearrangeableChildInfo<ChildElement>, "updateFLIPAnimation">;
}

/**
 * @compositeParams
 */
export function useRearrangeableChild<ChildElement extends Element, M extends UseRearrangeableChildInfo<ChildElement>>({
    context,
    info: { getElement, index },
    rearrangeableChildParameters: { cssProperty, duration }
}: UseRearrangeableChildParameters<ChildElement>): UseRearrangeableChildReturnType<ChildElement> {
    return useMonitoring(function useRearrangeableChild(): UseRearrangeableChildReturnType<ChildElement> {
        const { rearrangeableChildrenContext: { getFLIPStart, animate } } = context;

        const getCssProperty = useStableGetter(cssProperty);
        const getDuration = useStableGetter(duration);

        // TODO: This ref doesn't work correctly? Or info.updateFLIPAnimation isn't update right? Not sure.
        // Either way, doing something like reversing twice results in it working right the first time,
        // but incorrect the second time around, because the position is from the wrong index.
        const flipStartPosition = useRef<RearrangeableChildPositionInfo | undefined>(undefined);
        const [animationIndex, setAnimationIndex] = useState(0);

        useLayoutEffect(() => {
            if (animate) {
                const duration = getDuration();
                const cssProperty = getCssProperty();
                if (cssProperty && animationIndex > 0) {
                    const element = getElement() as Element as HTMLElement;
                    const first = getFLIPStart(index); //flipStartPosition.current;

                    //const mid = element.getBoundingClientRect();
                    //console.log(mid);
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
                        element.style.transition = cssProperty === 'translate' ? 'translate 0s, scale 0s' : `transform 0s`;
                        requestAnimationFrame(() => {
                            if (cssProperty === 'translate')
                                element.style.scale = element.style.translate = '';
                            else if (cssProperty === 'transform')
                                element.style.transform = '';

                            element.style.transition = cssProperty === 'translate' ? `translate ${duration}, scale ${duration}` : `transform ${duration}`;
                        });
                    }
                }
            }
        }, [index, animationIndex, animate]);

        const updateFLIPAnimation = useCallback((position: RearrangeableChildPositionInfo) => {
            flipStartPosition.current = position;
            setAnimationIndex(p => ++p);
        }, [])

        return {
            info: { updateFLIPAnimation }
        }
    });
}
