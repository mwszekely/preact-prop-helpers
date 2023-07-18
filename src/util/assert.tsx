
/**
 * Does nothing at runtime -- type checking only.
 *
 * Throws a (Typescript compiler) error if the passed object is anything but the empty object `{\}`.
 *
 * Use this to ensure that your spread operators work correctly and cover all cases.
 *
 * @param _a - The remaining spread parameters of a given object that you expect to be empty (because you properly accounted for all the properties that exist in it, and want to ensure it stays that way)
 */
export function assertEmptyObject<T extends {}>(_a: [keyof T] extends [never] ? T : `Unhandled keys in this rest spread object!`): void {}
