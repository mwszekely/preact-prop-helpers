/**
 * Throws a (Typescript compiler) error if the passed object is anything but the empty object `{\}` or `void`.
 *
 * **Does nothing at runtime -- type checking only.**
 *
 * Use this to ensure that your spread operators work correctly and cover all cases.
 *
 * @param _a - The remaining spread parameters of a given object that you expect to be empty (because you properly accounted for all the properties that exist in it, and want to ensure it stays that way)
 */
export declare function assertEmptyObject<T extends {} | void>(_a: [Exclude<keyof T, "_e">] extends [never] ? T : [T] extends [void] ? void : `Unhandled keys in this rest spread object!`): void;
//# sourceMappingURL=assert.d.ts.map