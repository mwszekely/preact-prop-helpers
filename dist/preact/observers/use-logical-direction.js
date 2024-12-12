import { assertEmptyObject } from "../util/assert.js";
import { useCallback } from "../util/lib.js";
import { useMonitoring } from "../util/use-call-count.js";
function capitalize(str) {
    return (str[0].toUpperCase() + str.substring(1));
}
/**
 * Inspects the element's style and determines the logical direction that text flows.
 *
 * @remarks Certain CSS properties, like `block-size`, respect the current writing mode and text direction.
 * But `transform`, `clip`, etc. don't.
 *
 * This is provided so that CSS properties can consistently use those logical properties.
 *
 * See https://drafts.csswg.org/css-writing-modes/#logical-to-physical
 *
 * {@include } {@link UseLogicalDirectionParameters}
 *
 * @returns An object containing the following functions:
 * * `getLogicalDirection`: retrieves a `LogicalDirectionInfo` representing the current state of the element. (Function is constant between renders)
 * * `convertElementSize`: When used in conjunction with `useElementSize`, allows you to retrieve the logical size of an element instead of the physical size.
 * * `convertToLogicalOrientation`: Based on the current direction, converts "horizontal" or "vertical" to "inline" or "block".
 * * `convertToPhysicalOrientation`:  Based on the current direction, converts "inline" or "block" to "horizontal" or "vertical".
 */
export function useLogicalDirection({ ...void1 }) {
    return useMonitoring(function useLogicalDirection() {
        assertEmptyObject(void1);
        //    useEnsureStability("useLogicalDirection", onLogicalDirectionChange);
        //const [getComputedStyles, setComputedStyles] = usePassiveState<CSSStyleDeclaration | null>(null, returnNull);
        // TODO: There's no way to refresh which writing mode we have once mounted.
        //   A. There's no way to watch for CSS style changes
        //   B. Calling getComputedStyle after every render for every element gets expensive fast and
        //   C. Is not necessary for most use cases that will never switch writing-mode within a single component
        //      (Those that do will need to mount and unmount the component that uses it)
        //
        // As a solution, here's a cheap workaround that checks when the element's size has changed,
        // and if so, tests if the writing mode has changed too.
        //
        // This will work for at least some number of cases, but a better solution is still needed.
        //const { useElementSizeProps } = useElementSize({ onSizeChange: useCallback(_ => onLogicalDirectionChange?.(getLogicalDirectionInfo()), []) })
        const getLogicalDirectionInfo = useCallback((computedStyles) => {
            if (computedStyles) {
                const w = computedStyles.writingMode;
                let d = computedStyles.direction;
                const t = computedStyles.textOrientation;
                if (t == "upright")
                    d = "ltr";
                return ({ ...WritingModes[w || "horizontal-tb"][d || "ltr"] });
            }
            return null;
        }, []);
        //const [getLogicalDirectionInfo, setLogicalDirectionInfo] = usePassiveState<LogicalDirectionInfo>(onLogicalDirectionChange);
        const convertToLogicalOrientation = useCallback((computedStyles, elementOrientation, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            if (direction?.inlineOrientation === elementOrientation)
                return "inline";
            return "block";
        }, []);
        const convertToPhysicalSide = useCallback((computedStyles, side, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            switch (side) {
                case "block-start":
                    return M[(direction?.blockDirection ?? "ttb")[0]];
                case "block-end":
                    return M[(direction?.blockDirection ?? "ttb")[2]];
                case "inline-start":
                    return M[(direction?.inlineDirection ?? "ltr")[0]];
                case "inline-end":
                    return M[(direction?.inlineDirection ?? "ltr")[2]];
            }
        }, []);
        const convertToLogicalSide = useCallback((computedStyles, side, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            if (direction?.inlineOrientation === "vertical") {
                switch (side) {
                    case "top":
                        return direction.inlineDirection === "ttb" ? "inline-start" : "inline-end";
                    case "bottom":
                        return direction.inlineDirection === "btt" ? "inline-start" : "inline-end";
                    case "left":
                        return direction.blockDirection === "ltr" ? "block-start" : "block-end";
                    case "right":
                        return direction.blockDirection === "rtl" ? "block-start" : "block-end";
                }
            }
            else if (direction?.inlineOrientation === "horizontal") {
                switch (side) {
                    case "top":
                        return direction.blockDirection === "ttb" ? "block-start" : "block-end";
                    case "bottom":
                        return direction.blockDirection === "btt" ? "block-start" : "block-end";
                    case "left":
                        return direction.inlineDirection === "ltr" ? "inline-start" : "inline-end";
                    case "right":
                        return direction.inlineDirection === "rtl" ? "inline-start" : "inline-end";
                }
            }
            /* eslint-disable no-debugger */
            debugger;
            console.assert(false);
            return "inline-start";
        }, []);
        const convertToPhysicalOrientation = useCallback((computedStyles, elementOrientation, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            if (elementOrientation == "inline") {
                if (direction?.inlineOrientation == "horizontal")
                    return "horizontal";
                return "vertical";
            }
            else {
                if (direction?.blockOrientation == "vertical")
                    return "vertical";
                return "horizontal";
            }
        }, []);
        const convertElementSize = useCallback((computedStyles, elementSize, direction) => {
            direction ??= getLogicalDirectionInfo(computedStyles);
            if (direction) {
                const { inlineSize, blockSize, inlineDirection, blockDirection } = direction;
                // Size is relatively simple
                const clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
                const clientBlockSize = elementSize[`client${capitalize(blockSize)}`];
                const offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
                const offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];
                const scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
                const scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`];
                const f1 = getPhysicalLeftTop(inlineDirection);
                const f2 = getPhysicalRightBottom(inlineDirection);
                const f3 = getPhysicalLeftTop(blockDirection);
                const f4 = getPhysicalRightBottom(blockDirection);
                const clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`client${capitalize(f2)}`]);
                const scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`scroll${capitalize(f2)}`]);
                const offsetInlineInset = elementSize[`offset${capitalize(f1)}`] == undefined ? undefined : (elementSize[`offset${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]));
                const clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
                const scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
                const offsetBlockInset = elementSize[`offset${capitalize(f3)}`] == undefined ? undefined : (elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]));
                return {
                    clientInlineSize,
                    scrollInlineSize,
                    offsetInlineSize,
                    clientBlockSize,
                    scrollBlockSize,
                    offsetBlockSize,
                    clientInlineInset,
                    scrollInlineInset,
                    offsetInlineInset,
                    clientBlockInset,
                    scrollBlockInset,
                    offsetBlockInset,
                };
            }
            return null;
        }, []);
        return {
            logicalDirectionReturn: {
                getLogicalDirectionInfo,
                convertToLogicalSize: convertElementSize,
                convertToLogicalOrientation,
                convertToPhysicalOrientation,
                convertToLogicalSide,
                convertToPhysicalSide
            }
        };
    });
}
// Position requires us to sometimes use one property (like `left`)
// or sometimes two (like `left` + `width`)
function getPhysicalLeftTop(dir) { if (dir === "ltr" || dir == "rtl")
    return "left"; return "top"; }
function getPhysicalRightBottom(dir) { if (dir === "rtl")
    return "width"; if (dir === "btt")
    return "height"; return null; }
// Helper for extracting info from "ltr", "ttb", etc.
const M = {
    t: "top",
    b: "bottom",
    l: "left",
    r: "right"
};
const HorizontalTbLtr = {
    inlineDirection: "ltr",
    blockDirection: "ttb",
    inlineOrientation: "horizontal",
    blockOrientation: "vertical",
    inlineSize: "width",
    blockSize: "height",
    leftRightDirection: "ltr",
    overUnderDirection: "ttb"
};
const HorizontalTbRtl = {
    ...HorizontalTbLtr,
    inlineDirection: "rtl",
};
const VerticalRlLtr = {
    inlineDirection: "ttb",
    blockDirection: "rtl",
    inlineOrientation: "vertical",
    blockOrientation: "horizontal",
    inlineSize: "height",
    blockSize: "width",
    leftRightDirection: "ttb",
    overUnderDirection: "rtl"
};
const VerticalRlRtl = {
    ...VerticalRlLtr,
    inlineDirection: "btt"
};
const SidewaysRlLtr = { ...VerticalRlLtr };
const SidewaysRlRtl = { ...VerticalRlRtl };
const VerticalLrLtr = {
    ...VerticalRlLtr,
    blockDirection: "ltr",
};
const VerticalLrRtl = {
    ...VerticalRlRtl,
    blockDirection: "ltr",
};
const SidewaysLtLtr = {
    ...VerticalLrLtr,
    inlineDirection: "btt",
    leftRightDirection: "btt",
    overUnderDirection: "ltr"
};
const SidewaysLtRtl = {
    ...SidewaysLtLtr,
    inlineDirection: "ttb"
};
const HorizontalTb = {
    ltr: HorizontalTbLtr,
    rtl: HorizontalTbRtl
};
const VerticalRl = {
    ltr: VerticalRlLtr,
    rtl: VerticalRlRtl
};
const VerticalLr = {
    ltr: VerticalLrLtr,
    rtl: VerticalLrRtl
};
const SidewaysRl = {
    ltr: SidewaysRlLtr,
    rtl: SidewaysRlRtl
};
const SidewaysLr = {
    ltr: SidewaysLtLtr,
    rtl: SidewaysLtRtl
};
const WritingModes = {
    "horizontal-tb": HorizontalTb,
    "vertical-lr": VerticalLr,
    "vertical-rl": VerticalRl,
    "sideways-lr": SidewaysLr,
    "sideways-rl": SidewaysRl
};
//# sourceMappingURL=use-logical-direction.js.map