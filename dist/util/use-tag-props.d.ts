import "./mode.js";
export type TagPropPrefices = "use-ref-element" | "staggered-children-child" | "paginated-children-child" | "focus-trap" | "dismiss-props-stable-group" | "dismiss-props-stable-popup" | "dismiss-props-stable-source" | "typeahead-navigation" | "single-selection-child" | "roving-tab-index-child" | "roving-tab-index" | "list-navigation-single-selection-child-tabbable" | "list-navigation-single-selection-child-child" | "list-navigation-single-selection-stable-parent" | "list-navigation-single-selection-stable-parent-or-child" | "list-navigation-stable-parent" | "list-navigation-stable-parent-or-child" | "linear-navigation" | "use-grid-navigation-partial-row";
/**
 * Debug function that yells at you if your forgot to use the props a hook returns.
 *
 * @remarks Like other debug hooks, only has any effect IFF there is a global variable called `process.env.NODE_ENV` and it contains the value `"development"`, AND there is a global variable called `_generate_useTagProps_tags` set to true, and stacks are only generated if `_generate_setState_stacks` is true..
 *
 * @param props - The props to return a modified copy of
 * @param tag - Should be unique
 * @returns A modified copy of the given props
 */
export declare function useTagProps<P>(props: P, tag: `data-${TagPropPrefices}`): P;
//# sourceMappingURL=use-tag-props.d.ts.map