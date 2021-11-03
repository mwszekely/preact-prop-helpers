import { useCallback, useLayoutEffect, useRef, useState } from "preact/hooks";
import { useRefElement } from "./use-ref-element";
import type { ElementSize } from "./use-element-size";

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
    return (str[0].toUpperCase() + str.substr(1)) as Capitalize<T>;
}

export interface LogicalElementSize {
    clientInlineSize: number;
    scrollInlineSize: number;
    offsetInlineSize: number;
    clientBlockSize: number;
    scrollBlockSize: number;
    offsetBlockSize: number;
    clientInlineInset: number;
    scrollInlineInset: number;
    offsetInlineInset: number;
    clientBlockInset: number;
    scrollBlockInset: number;
    offsetBlockInset: number;
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
export function useLogicalDirection<T extends Element>() {

    // TODO: There's no way to refresh which writing mode we have once mounted.
    // If the writing mode changes, the whole component needs to 
    // mount/unmount because (more-or-less in order of importance)
    //   A. There's no way to watch for CSS style changes
    //   B. Calling getComputedStyle after every render for every element gets expensive fast and
    //   C. Is not necessary for most use cases that will never switch writing-mode within a single component
    //      (Those that do will need to mount and unmount the component that uses it)
    //
    // Maybe there could be a context object that can be used to remotely update all components that use this hook?
    const { getElement, useRefElementProps } = useRefElement<T | null>({
        onElementChange: (element) => {
            if (element) {
                // The element hasn't actually been hooked up to the document yet.
                // Wait a moment so that we can properly use `getComputedStyle`
                // (since we only read it on mount)
                queueMicrotask(() => {
                    console.assert(element!.isConnected);
                    element = (element!.parentElement ?? element) as T;
                    const computedStyles = window.getComputedStyle(element);
                    const w = computedStyles.writingMode as WritingMode;
                    const t = computedStyles.textOrientation as TextOrientation;
                    const d = computedStyles.direction as Direction;

                    setWritingMode(w || "horizontal-tb");
                    setDirection(d || "rtl");
                    setTextOrientation(t || "mixed");
                })

            }
        }
    });

    const [writingMode, setWritingMode] = useState<WritingMode | null>(null);
    const [direction, setDirection] = useState<Direction | null>(null);
    const [textOrientation, setTextOrientation] = useState<TextOrientation | null>(null);

    const writingModeRef = useRef<WritingMode | null>(writingMode);
    const directionRef = useRef<Direction | null>(direction);
    const textOrientationRef = useRef<TextOrientation | null>(textOrientation);

    useLayoutEffect(() => { writingModeRef.current = writingMode; }, [writingMode]);
    useLayoutEffect(() => { directionRef.current = direction; }, [direction]);
    useLayoutEffect(() => { textOrientationRef.current = textOrientation; }, [textOrientation]);


    const getLogicalDirection = useCallback((): LogicalDirectionInfo | null => {
        let writingMode = writingModeRef.current;
        let direction = directionRef.current;
        let textOrientation = textOrientationRef.current;

        if (!writingMode || !direction || !textOrientation)
            return null;

        if (textOrientation == "upright")
            direction = "ltr";

        return {
            ...WritingModes[writingMode ?? "horizontal-tb"][direction ?? "ltr"]
        }

    }, [writingModeRef, directionRef, textOrientationRef]);

    const convertToLogicalOrientation = useCallback((elementOrientation: PhysicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => {
        direction ??= getLogicalDirection();
        if (direction?.inlineOrientation === elementOrientation)
            return "inline";
        return "block";
    }, [getLogicalDirection]);

    const convertToPhysicalOrientation = useCallback((elementOrientation: LogicalOrientation, direction?: LogicalDirectionInfo | null | undefined) => {
        direction ??= getLogicalDirection();
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
    }, [getLogicalDirection]);

    const convertElementSize = useCallback((elementSize: ElementSize, direction?: LogicalDirectionInfo | null | undefined): LogicalElementSize | null => {
        direction ??= getLogicalDirection();
        if (direction) {
            const { inlineSize, blockSize, inlineDirection, blockDirection } = direction;

            // Size is relatively simple
            let clientInlineSize = elementSize[`client${capitalize(inlineSize)}`];
            let clientBlockSize = elementSize[`client${capitalize(blockSize)}`];

            let offsetInlineSize = elementSize[`offset${capitalize(inlineSize)}`];
            let offsetBlockSize = elementSize[`offset${capitalize(blockSize)}`];

            let scrollInlineSize = elementSize[`scroll${capitalize(inlineSize)}`];
            let scrollBlockSize = elementSize[`scroll${capitalize(blockSize)}`];



            // Position requires us to sometimes use one property (like `left`)
            // or sometimes two (like `left` + `width`)
            function getPhysicalLeftTop(dir: PhysicalDirection) { if (dir === "ltr" || dir == "rtl") return "left"; return "top"; }
            function getPhysicalRightBottom(dir: PhysicalDirection) { if (dir === "rtl") return "width"; if (dir === "btt") return "height"; return null; }

            const f1 = getPhysicalLeftTop(inlineDirection);
            const f2 = getPhysicalRightBottom(inlineDirection);

            const f3 = getPhysicalLeftTop(blockDirection);
            const f4 = getPhysicalRightBottom(blockDirection);


            let clientInlineInset = elementSize[`client${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`client${capitalize(f2)}`]);
            let scrollInlineInset = elementSize[`scroll${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`scroll${capitalize(f2)}`]);
            let offsetInlineInset = elementSize[`offset${capitalize(f1)}`] + (!f2 ? 0 : elementSize[`offset${capitalize(f2)}`]);


            let clientBlockInset = elementSize[`client${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`client${capitalize(f4)}`]);
            let scrollBlockInset = elementSize[`scroll${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`scroll${capitalize(f4)}`]);
            let offsetBlockInset = elementSize[`offset${capitalize(f3)}`] + (!f4 ? 0 : elementSize[`offset${capitalize(f4)}`]);


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

    }, [getLogicalDirection])

    return {
        useLogicalDirectionProps: useRefElementProps,
        getElement,
        getLogicalDirection,
        convertElementSize,
        convertToLogicalOrientation,
        convertToPhysicalOrientation
    };
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
};

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


