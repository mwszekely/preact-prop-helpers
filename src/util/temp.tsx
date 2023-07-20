
// This file is for testing documentation-related things

/**
 * Summary of TestClassBase
 */
abstract class TestClassBase {
    constructor();
    constructor(arg: number);
    constructor(arg?: number) { }

    /** Summary of frob */
    frob(): number { return 0; }

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
export class TestClass<T> extends TestClassBase {
    constructor() {
        super(0);
    }

    /** Summary of frob (overridden) */
    override frob() { return 1; }

    /** Summary of frob (implemented) */
    abstractFrob(): number { return 1; }

    /** Summary of foo */
    foo<T>(): NonNullable<T> { return null! }
}

/** Summary of returnsFunction */
export function returnsFunction() {
    return () => {
        return Math.random();
    }
}

export type TypeAliasBase = 'foo';
export type TypeAliasDerived = TypeAliasBase | 'bar';

/** Summary of TestEnum */
export const enum TestEnum {
    A = 0,
    B = 1,
    C = 2,
    D,
    E,
    F,
}
