/**
 * Summary of TestClassBase
 */
declare abstract class TestClassBase {
    constructor();
    constructor(arg: number);
    /** Summary of frob */
    frob(): number;
    /** Summary of abstractFrob */
    abstract abstractFrob(): number;
}
/**
 * Summary of TestClass
 *
 * @remarks Extra remarks
 *
 * @typeParam T - A type parameter
 */
export declare class TestClass<T> extends TestClassBase {
    constructor();
    /** Summary of frob (overridden) */
    frob(): number;
    /** Summary of frob (implemented) */
    abstractFrob(): number;
    /** Summary of foo */
    foo<T>(): NonNullable<T>;
}
/** Summary of returnsFunction */
export declare function returnsFunction(): () => number;
export type TypeAliasBase = 'foo';
export type TypeAliasDerived = TypeAliasBase | 'bar';
/** Summary of TestEnum */
export declare const enum TestEnum {
    A = 0,
    B = 1,
    C = 2,
    D = 3,
    E = 4,
    F = 5
}
export {};
//# sourceMappingURL=temp.d.ts.map