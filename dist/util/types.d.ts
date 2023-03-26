import { DetailedHTMLProps, HTMLAttributes, HTMLProps } from "react";
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
export type ElementProps<T extends EventTarget> = Pick<Partial<HTMLProps<T>>, "htmlFor" | "ref" | "className" | "tabIndex" | "onKeyDown" | "onClick" | "style" | "onPointerDown" | "onKeyUp" | "onTouchStart" | "onTouchCancel" | "onTouchMove" | "onTouchEnd" | "onPointerCancel" | "onPointerMove" | "onPointerUp" | "onPointerEnter" | "onPointerLeave" | "onFocus" | "onBlur" | "aria-modal" | "onDrag" | "onDrop" | "tabIndex" | "draggable" | "aria-posinset" | "onDragStart" | "onDragEnd" | "aria-setsize">;
export {};
//# sourceMappingURL=types.d.ts.map