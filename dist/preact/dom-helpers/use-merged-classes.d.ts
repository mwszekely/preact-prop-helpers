import { ElementProps } from "../util/types.js";
/**
 * Merged the `class` and `className` properties of two sets of props into a single string.
 *
 * @remarks Duplicate classes are removed (order doesn't matter anyway).
 */
export declare const useMergedClasses: (...classes: ElementProps<EventTarget>["className"][]) => string | undefined;
//# sourceMappingURL=use-merged-classes.d.ts.map