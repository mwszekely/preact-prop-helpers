import { useCallback } from "preact/hooks";
import { ElementSize } from "./use-element-size";

//export type BlockFlowDirection = "downwards" | "leftwards" | "rightwards";
export type PhysicalDirection = "ltr" | "rtl" | "ttb" | "btt";
export type PhysicalOrientation = "horizontal" | "vertical";
export type PhysicalSize = "width" | "height";

export type LogicalOrientation = "inline" | "block";

//export type LineOrientation = "upright" | "leftright" | "downright" | "rightright";

type WritingMode = "horizontal-tb" | "vertical-lr" | "sideways-rl" | "vertical-rl" | "sideways-lr";
type Direction = "ltr" | "rtl";
type TextOrientation = "mixed" | "upright" | "sideways";

function capitalize<T extends string>(str: T): Capitalize<T> {
    return (str[0].toUpperCase() + str.substring(1)) as Capitalize<T>;
}

export interface UseLogicalDirectionParameters {
   // logicalDirectionParameters: { onLogicalDirectionChange: null | ((info: LogicalDirectionInfo | null) => void); }
}

export interface LogicalElementSize {
    clientInlineSize: number;
    scrollInlineSize: number;
    offsetInlineSize: number | undefined;
    clientBlockSize: number;
    scrollBlockSize: number;
    offsetBlockSize: number | undefined;
    clientInlineInset: number;
    scrollInlineInset: number;
    offsetInlineInset: number | undefined;
    clientBlockInset: number;
    scrollBlockInset: number;
    offsetBlockInset: number | undefined;
}

/**
 * Inspects the element's style and determines the logical direction that text flows.
 * 
 * Certain CSS properties, like `block-size`, respect the current writing mode and text direction.
 * But `transform`, `clip`, etc. don't.
 * 
 * This is provided so that CSS properties can consistently use those logical properties.
 * 
 * See https://drafts.csswg.org/css-writing-modes/#logical-to-physical
 * 
 * @returns An object containing the following functions:
 * * `getLogicalDirection`: retrieves a `LogicalDirectionInfo` representing the current state of the element. (Function is constant between renders)
 * * `convertElementSize`: When used in conjunction with `useElementSize`, allows you to retrieve the logical size of an element instead of the physical size. 
 * * `convertToLogicalOrientation`: Based on the current direction, converts "horizontal" or "vertical" to "inline" or "block".
 * * `convertToPhysicalOrientation`:  Based on the current direction, converts "inline" or "block" to "horizontal" or "vertical".
 */
export function useLogicalDirection(): UseLogicalDirectionReturnType {

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
    /*const { elementSizeReturn, refElementReturn } = useElementSize<T>({
        elementSizeParameters: {
            onSizeChange: useStableCallback((i: ElementSize) => {
                onSizeChange?.(i);
                onLogicalDirectionChange?.(getLogicalDirectionInfo())
            }),
            ...elementSizeParameters
        },
        refElementParameters: {
            onElementChange: useStableCallback((element: T | null, prev: T | null | undefined) => {
                onElementChange?.(element, prev)
                if (element) {
                    setComputedStyles(window.getComputedStyle(element));
                }
            })
        }
    })*/

    const getLogicalDirectionInfo = useCallback((computedStyles: CSSStyleDeclaration) => {
        if (computedStyles) {
            const w = computedStyles.writingMode as WritingMode;
            let d = computedStyles.direction as Direction;
            const t = computedStyles.textOrientation as TextOrientation;

            if (t == "upright")
                d = "ltr";

            return ({ ...WritingModes[w || "horizontal-tb"][d || "ltr"] });
        }

        return null;
    }, [])

    //const [getLogicalDirectionInfo, setLogicalDirectionInfo] = usePassiveState<LogicalDirectionInfo>(onLogicalDirectionChange);

    const convertToLogicalOrientation = useCallback((computedStyles: CSSStyleDeclaration, elementOrientation: PhysicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => {
        direction ??= getLogicalDirectionInfo(computedStyles);
        if (direction?.inlineOrientation === elementOrientation)
            return "inline";
        return "block";
    }, []);

    const convertToPhysicalSide = useCallback((computedStyles: CSSStyleDeclaration, side: "inline-start" | "inline-end" | "block-start" | "block-end", direction?: LogicalDirectionInfo | null | undefined): "top" | "bottom" | "left" | "right" => {
        direction ??= getLogicalDirectionInfo(computedStyles);

        switch (side) {
            case "block-start":
                return M[(direction?.blockDirection ?? "ttb")[0] as "t" | "b" | "l" | "r"];
            case "block-end":
                return M[(direction?.blockDirection ?? "ttb")[2] as "t" | "b" | "l" | "r"];

            case "inline-start":
                return M[(direction?.inlineDirection ?? "ltr")[0] as "t" | "b" | "l" | "r"];
            case "inline-end":
                return M[(direction?.inlineDirection ?? "ltr")[2] as "t" | "b" | "l" | "r"];
        }
    }, [])

    const convertToLogicalSide = useCallback((computedStyles: CSSStyleDeclaration, side: "top" | "bottom" | "left" | "right", direction?: LogicalDirectionInfo | null | undefined): "inline-start" | "inline-end" | "block-start" | "block-end" => {
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

    }, [])

    const convertToPhysicalOrientation = useCallback((computedStyles: CSSStyleDeclaration, elementOrientation: LogicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => {
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

    const convertElementSize = useCallback((computedStyles: CSSStyleDeclaration, elementSize: ElementSize, direction?: LogicalDirectionInfo | null | undefined): LogicalElementSize | null => {
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
            const offsetInlineInset = elementSize[`offset${capitalize(f1)}`] == undefined ? undefined : (elementSize[`offset${capitalize(f1)}`]! + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]!));


            const clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
            const scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
            const offsetBlockInset = elementSize[`offset${capitalize(f3)}`] == undefined ? undefined : (elementSize[`offset${capitalize(f3)}`]! + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]!));


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
            }
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
}

// Position requires us to sometimes use one property (like `left`)
// or sometimes two (like `left` + `width`)
function getPhysicalLeftTop(dir: PhysicalDirection) { if (dir === "ltr" || dir == "rtl") return "left"; return "top"; }
function getPhysicalRightBottom(dir: PhysicalDirection) { if (dir === "rtl") return "width"; if (dir === "btt") return "height"; return null; }

// Helper for extracting info from "ltr", "ttb", etc.
const M = {
    t: "top",
    b: "bottom",
    l: "left",
    r: "right"
} as const;


export interface UseLogicalDirectionReturnType {
    /** **STABLE** */
    //useLogicalDirectionProps: (props: h.JSX.HTMLAttributes<T>) => h.JSX.HTMLAttributes<T>;
    /** **STABLE** */
    //getElement: () => T | null;
    /** **STABLE** */
    logicalDirectionReturn: {
        getLogicalDirectionInfo: (computedStyles: CSSStyleDeclaration) => LogicalDirectionInfo | null;

        /**
         * Given the ElementSize info from useElementSize, converts all those physical properties to their logical counterparts.
         * 
         * **STABLE**
         */
        convertToLogicalSize: (computedStyles: CSSStyleDeclaration, elementSize: ElementSize, direction?: LogicalDirectionInfo | null | undefined) => LogicalElementSize | null;

        /**
         * Turns `"horizontal" | "vertical"` into `"inline" | "block"`
         * 
         * **STABLE**
         */
        convertToLogicalOrientation: (computedStyles: CSSStyleDeclaration, elementOrientation: PhysicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => "inline" | "block";

        /**
         * Turns `"inline" | "block"` into `"horizontal" | "vertical"`
         * 
         * **STABLE**
         */
        convertToPhysicalOrientation: (computedStyles: CSSStyleDeclaration, elementOrientation: LogicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => "horizontal" | "vertical";

        /**
         * Turns `"top" | "bottom" | "left" | "right"` into `"block-start" | "block-end" | "inline-start" | "inline-end"`
         * 
         * **STABLE**
         */
        convertToLogicalSide: (computedStyles: CSSStyleDeclaration, side: "top" | "bottom" | "left" | "right", direction?: LogicalDirectionInfo | null | undefined) => "inline-start" | "inline-end" | "block-start" | "block-end";

        /**
         * Turns `"block-start" | "block-end" | "inline-start" | "inline-end"` into `"top" | "bottom" | "left" | "right"`
         * 
         * **STABLE**
         */
        convertToPhysicalSide: (computedStyles: CSSStyleDeclaration, side: "inline-start" | "inline-end" | "block-start" | "block-end", direction?: LogicalDirectionInfo | null | undefined) => "top" | "bottom" | "left" | "right";
    }
}



export interface LogicalDirectionInfo {
    /**
     * Represents the direction text flows, glyph by glyph.  By far the most complex property.
     * 
     * |`writing-mode`|`direction`|Result|
     * |-----|-----|-----|
     * |`horizontal-tb`|`ltr`|`ltr`|
     * |`horizontal-tb`|`rtl`|`rtl`|
     * |`vertical-rl` & `sideways-rl`|`ltr`|`ttb`|
     * |`vertical-rl` & `sideways-rl`|`rtl`|`btt`|
     * |`vertical-lr`|`ltr`|`ttb`|
     * |`vertical-lr`|`rtl`|`btt`|
     * |`sideways-lr`|`ltr`|`btt`|
     * |`sideways-lr`|`rtl`|`ttb`|
     */
    inlineDirection: PhysicalDirection;

    /**
     * Simplified version of `inlineDirection`:
     * 
     * * `horizontal` for `horizontal-tb`
     * * `vertical` for all others
     */
    inlineOrientation: PhysicalOrientation;

    /**
     * Represents the direction text flows, line by line.
     * 
     * * `ttb` for `horizontal-tb`, regardless of direction
     * * `rtl` for `vertical-rl` & `sideways-rl`, regardless of direction
     * * `ltr` for `vertical-lr` & `sideways-lr`, regardless of direction
     */
    blockDirection: PhysicalDirection;

    /**
     * Simplified version of `blockDirection`:
     * 
     * * `vertical` for `horizontal-tb`
     * * `horizontal` for all others
     */
    blockOrientation: PhysicalOrientation;

    /**
     * Represents how you can *physically* refer to the size of the element in the *inline* size.
     * 
     * * `width` for `horizontal-tb`, regardless of direction
     * * `height` for all others
     */
    inlineSize: PhysicalSize;

    /**
     * Represents how you can *physically* refer to the size of the element in the *block* size.
     * 
     * * `height` for `horizontal-tb`, regardless of direction
     * * `width` for all others
     */
    blockSize: PhysicalSize;

    /**
     * For each glyph, ascenders to descenders *physically* go:
     * 
     * * `ttb` for `horizontal-tb`
     * * `rtl` for `vertical-rl`, `vertical-lr`, & `sideways-rl`
     * * `ltr` for `sideways-lr`
     */
    overUnderDirection: PhysicalDirection;

    /**
     * For each glyph, its "left" side (think of this relative to `writing-mode` but *not* relative to `direction`, or alternatively what `text-align: left` means) to its "right" side *physically* goes from:
     * 
     * * `ltr` for `horizontal-tb`
     * * `ttb` for `vertical-rl`, `vertical-lr`, & `sideways-rl`
     * * `btt` for `sideways-lr`
     */
    leftRightDirection: PhysicalDirection;
}

const HorizontalTbLtr: LogicalDirectionInfo = {
    inlineDirection: "ltr",
    blockDirection: "ttb",

    inlineOrientation: "horizontal",
    blockOrientation: "vertical",

    inlineSize: "width",
    blockSize: "height",

    leftRightDirection: "ltr",
    overUnderDirection: "ttb"
};

const HorizontalTbRtl: LogicalDirectionInfo = {
    ...HorizontalTbLtr,
    inlineDirection: "rtl",
};

const VerticalRlLtr: LogicalDirectionInfo = {
    inlineDirection: "ttb",
    blockDirection: "rtl",

    inlineOrientation: "vertical",
    blockOrientation: "horizontal",

    inlineSize: "height",
    blockSize: "width",

    leftRightDirection: "ttb",
    overUnderDirection: "rtl"
};

const VerticalRlRtl: LogicalDirectionInfo = {
    ...VerticalRlLtr,
    inlineDirection: "btt"
};


const SidewaysRlLtr: LogicalDirectionInfo = { ...VerticalRlLtr };
const SidewaysRlRtl: LogicalDirectionInfo = { ...VerticalRlRtl };

const VerticalLrLtr: LogicalDirectionInfo = {
    ...VerticalRlLtr,
    blockDirection: "ltr",
};

const VerticalLrRtl: LogicalDirectionInfo = {
    ...VerticalRlRtl,
    blockDirection: "ltr",
};

const SidewaysLtLtr: LogicalDirectionInfo = {
    ...VerticalLrLtr,
    inlineDirection: "btt",

    leftRightDirection: "btt",
    overUnderDirection: "ltr"
};

const SidewaysLtRtl: LogicalDirectionInfo = {
    ...SidewaysLtLtr,
    inlineDirection: "ttb"
};



const HorizontalTb = {
    ltr: HorizontalTbLtr,
    rtl: HorizontalTbRtl
} as const;

const VerticalRl = {
    ltr: VerticalRlLtr,
    rtl: VerticalRlRtl
} as const;

const VerticalLr = {
    ltr: VerticalLrLtr,
    rtl: VerticalLrRtl
} as const;

const SidewaysRl = {
    ltr: SidewaysRlLtr,
    rtl: SidewaysRlRtl
} as const;

const SidewaysLr = {
    ltr: SidewaysLtLtr,
    rtl: SidewaysLtRtl
} as const;

const WritingModes = {
    "horizontal-tb": HorizontalTb,
    "vertical-lr": VerticalLr,
    "vertical-rl": VerticalRl,
    "sideways-lr": SidewaysLr,
    "sideways-rl": SidewaysRl
} as const;
