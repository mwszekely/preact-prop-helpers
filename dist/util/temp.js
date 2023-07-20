// This file is for testing documentation-related things
/**
 * Summary of TestClassBase
 */
class TestClassBase {
    constructor(arg) { }
    /** Summary of frob */
    frob() { return 0; }
}
/**
 * Summary of TestClass
 *
 * @remarks Extra remarks
 *
 * @typeParam T - A type parameter
 */
export class TestClass extends TestClassBase {
    constructor() {
        super(0);
    }
    /** Summary of frob (overridden) */
    frob() { return 1; }
    /** Summary of frob (implemented) */
    abstractFrob() { return 1; }
    /** Summary of foo */
    foo() { return null; }
}
/** Summary of returnsFunction */
export function returnsFunction() {
    return () => {
        return Math.random();
    };
}
//# sourceMappingURL=temp.js.map