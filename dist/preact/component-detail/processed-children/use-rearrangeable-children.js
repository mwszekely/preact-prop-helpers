import { useEnsureStability } from "../../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../../preact-extensions/use-stable-callback.js";
import { useMemoObject, useStableGetter } from "../../preact-extensions/use-stable-getter.js";
import { useCallback, useLayoutEffect, useMemo, useRef, useState } from "../../util/lib.js";
import { useMonitoring } from "../../util/use-call-count.js";
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
 *
 * #__NO_SIDE_EFFECTS__
 */
export function useRearrangeableChildren({ rearrangeableChildrenParameters: { children: childrenIn }, processedIndexManglerParameters: { getIndex, getSortValueAt }, managedChildrenReturn: { getChildren: getManagedChildren }, context: { processedIndexManglerContext: { mangler } } }) {
    return useMonitoring(function useRearrangeableChildren() {
        useEnsureStability("useRearrangeableChildren", getIndex, getSortValueAt);
        const allChildPositions = useRef([]);
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
        const getFLIPStart = useCallback((index) => {
            return allChildPositions.current[index];
        }, []);
        return {
            rearrangeableChildrenReturn: {
                children: childrenOut,
                refresh: useStableCallback(() => { setRefreshIndex(p => ++p); }, [])
            },
            context: useMemoObject({
                rearrangeableChildrenContext: useMemoObject({ getFLIPStart })
            })
        };
    });
}
/**
 * #__NO_SIDE_EFFECTS__
 */
export function useRearrangeableChild({ context, info: { getElement, index }, rearrangeableChildParameters: { cssProperty, duration } }) {
    return useMonitoring(function useRearrangeableChild() {
        const { rearrangeableChildrenContext: { getFLIPStart } } = context;
        const getCssProperty = useStableGetter(cssProperty);
        const getDuration = useStableGetter(duration);
        // TODO: This ref doesn't work correctly? Or info.updateFLIPAnimation isn't update right? Not sure.
        // Either way, doing something like reversing twice results in it working right the first time,
        // but incorrect the second time around, because the position is from the wrong index.
        const flipStartPosition = useRef(undefined);
        const [animationIndex, setAnimationIndex] = useState(0);
        useLayoutEffect(() => {
            const duration = getDuration();
            const cssProperty = getCssProperty();
            if (cssProperty && animationIndex > 0) {
                const element = getElement();
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
        }, [index, animationIndex]);
        const updateFLIPAnimation = useCallback((position) => {
            flipStartPosition.current = position;
            setAnimationIndex(p => ++p);
        }, []);
        return {
            info: { updateFLIPAnimation }
        };
    });
}
//# sourceMappingURL=use-rearrangeable-children.js.map