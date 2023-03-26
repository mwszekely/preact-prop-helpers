import { AriaAttributes, CSSProperties, DetailedHTMLProps, HTMLAttributes, HTMLProps, SyntheticEvent } from "react";
export type OmitStrong<T, K extends keyof T> = Omit<T, K>;
export type OmitTargeted<T, K extends keyof T, L extends keyof T[K]> = OmitStrong<T, K> & {
    [M in K]: OmitStrong<T[K], L>;
};
export type PickTargeted<T, K extends keyof T, L extends keyof T[K]> = {
    [M in K]: OmitStrong<T[K], L>;
};
export type ExtendMerge<A, B> = {
    [K in (keyof A) | (keyof B)]: K extends keyof A ? (K extends keyof B ? (A[K] & B[K]) : A[K]) : K extends keyof B ? B[K] : unknown;
};
type PickByType<T, Value> = {
    [P in keyof T as T[P] extends Value | undefined ? P : never]: T[P];
};
export type ElementToTag<T extends EventTarget> = keyof PickByType<JSX.IntrinsicElements, DetailedHTMLProps<HTMLAttributes<T>, T>>;
type EventHandlerNames = (keyof HTMLProps<any> & `on${string}`);
type AriaNames = keyof AriaAttributes;
type NonConflictingAttributes = "id" | "children" | "htmlFor" | "ref" | "className" | "tabIndex" | "style" | "tabIndex" | "draggable";
export type ElementProps<T extends EventTarget> = Pick<Partial<HTMLProps<T>>, EventHandlerNames | AriaNames | NonConflictingAttributes>;
export type EventType<T extends EventTarget, E extends Event> = SyntheticEvent<T, E>;
export { CSSProperties };
export type VNode = JSX.Element;
//# sourceMappingURL=types.d.ts.map