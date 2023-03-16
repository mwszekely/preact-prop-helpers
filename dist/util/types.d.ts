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
//# sourceMappingURL=types.d.ts.map