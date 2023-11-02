import type { ElementProps } from "./lib.js";
/** Opposite of NonNullable */
export type Nullable<T = null> = null | undefined | T;
/** Like `Required`, but also makes types `NonNullable` besides just required. */
export type RequiredN<T> = {
    [P in keyof T]-?: NonNullable<T[P]>;
};
/** Like Omit, but with type completion */
export type OmitStrong<T, K extends keyof T> = Omit<T, K>;
/** Combines two interfaces in a way that leaves them still able to be extended (via class, another interface, etc.) */
export type ExtendMerge<A, B> = {
    [K in (keyof A) | (keyof B)]: K extends keyof A ? (K extends keyof B ? (A[K] & B[K]) : A[K]) : K extends keyof B ? B[K] : unknown;
};
export type TargetedOmit<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: OmitStrong<T[K], L>;
};
export type TargetedPick<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: Pick<T[K], L>;
};
type ArrayTail<Rest extends any[]> = Rest extends [infer _A, ...infer B] ? B : [];
type Dependencies<Args extends any[]> = Args["length"] extends 0 ? {} : (Args[0] & Dependencies<ArrayTail<Args>>);
type GenericParameters<N extends string, P extends {}, Deps extends any[]> = OmitNever<{
    [Name in N as `${Name}Parameters`]: P;
}> & Dependencies<Deps>;
type GenericReturnType<N extends string, R extends {}, Deps extends any[]> = OmitNever<{
    [Name in N as `${Name}Return`]: R;
}> & Dependencies<Deps>;
/**
 * Describes the parameters and return type for a generic "composite args" hook.
 *
 * @param Name -   The name of the hook, as a string
 * @param PSelf -      The "Self" object that this hook needs to operate
 * @param PDeps -  The dependencies that this hook needs to operate (props, context, other hooks, etc.)
 * @param RSelf -      The "Self" object that this hook returns
 * @param RDeps -  The dependencies that this hook returns for other hooks
 */
export type GenericHook<Name extends string, PSelf extends {}, PDeps extends any[], RSelf extends {}, RDeps extends any[]> = (args: GenericParameters<Name, PSelf, PDeps>) => GenericReturnType<Name, RSelf, RDeps>;
export type Parameter<T extends (...args: any) => any> = Parameters<T>[0];
type OmitNever<T> = {
    [K in keyof T as T[K] extends never ? never : K]: T[K];
};
export interface StandardDepsProps<E extends Element> {
    props: ElementProps<E>;
}
export interface StandardDepsPropsStable<E extends Element> {
    propsStable: ElementProps<E>;
}
export interface StandardDepsContext<C extends {}, K extends keyof C = keyof C> {
    context: Pick<C, K>;
}
export interface StandardDepsInfo<M extends {}, K extends keyof M> {
    info: Pick<M, K>;
}
type OmitUsualSuspects<T> = Omit<T, `info` | `props${string}` | `context${string}`>;
type PorR<Mode extends "params" | "return", Base extends (...args: any) => any> = Mode extends "params" ? Parameter<Base> : ReturnType<Base>;
/**
 * Copies the type of another hook's parameter/return, but only takes the specified category/categories.
 *
 * You can further narrow within that category to omit a certain property (or only take the specified properties from a category)
 *
 * * `StandardDepsPick<"params", UsePet>` will take all categories from `UsePet`.
 * * `StandardDepsPick<"params", UsePet, "catParameters">` will take all properties in the category `cat` from `UsePet`.
 * * `StandardDepsPick<"return", UsePet, "catParameters">` does the same, but for `UsePet`'s return type, if its return type includes parameters for another hook.
 * * `StandardDepsPick<"params", UsePet, "catParameters", "pick", "meow">` will take a version of `catParameters` that only has `meow` in it.
 * * `StandardDepsPick<"params", UsePet, "catParameters", "omit", "meow">` will take a version of `catParameters` that excludes `meow` from it.
 *
 */
export type StandardDepsPick<Mode extends "params" | "return", Base extends (...args: any) => any, CategoryToModify extends keyof PorR<Mode, Base> = never, Action2 extends "pick" | "omit" = never, PropsInCategory extends keyof PorR<Mode, Base>[CategoryToModify] = never> = OmitUsualSuspects<([
    Action2
] extends [never] ? (Pick<PorR<Mode, Base>, [CategoryToModify] extends [never] ? keyof PorR<Mode, Base> : CategoryToModify>) : Action2 extends "pick" ? (TargetedPick<PorR<Mode, Base>, CategoryToModify, PropsInCategory>) : (TargetedOmit<PorR<Mode, Base>, CategoryToModify, PropsInCategory>))>;
/**
 * Copies the type of another hook's parameter/return, but removes the specified categories and replaces others with your overrides.
 *
 * Replacements can be specified with StandardDepsPick or StandardDepsOmit.
 *
 * * `StandardDepsOmit<"params", UsePet>` will take all categories from `UsePet` (identical to `StandardDepsPick` with two arguments -- probably prefer that one in this case for clarity).
 * * `StandardDepsOmit<"params", UsePet, "catParameters">` will take all categories *except* `catParameters`.
 * * `StandardDepsOmit<"params", UsePet, "catParameters", [...]>` acts as the above, but additionally replaces any types specified in the array with what's specified. Either `StandardDepsPick` or `StandardDepsOmit` can be used in that array.
 */
export type StandardDepsOmit<Mode extends "params" | "return", Base extends (...args: any) => any, ExtraOmits extends Exclude<keyof PorR<Mode, Base>, "_e"> = never, Replacements extends any[] = []> = OmitUsualSuspects<OmitStrong<PorR<Mode, Base>, (ExtraOmits | keyof Dependencies<Replacements>)> & Dependencies<Replacements>>;
export type StandardDepsRename<D, From extends keyof D, To extends string> = {
    [K in From as To]: D[K];
};
export {};
//# sourceMappingURL=types.d.ts.map