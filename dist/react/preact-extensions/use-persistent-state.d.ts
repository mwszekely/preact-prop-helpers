import { StateUpdater } from "../util/lib.js";
/**
 * All types allowed by `usePersistentState`.
 *
 * Use module augmentation to add new properties to this object that `usePersistentState` will correctly understand:
 *
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ```
 */
export interface PersistentStates {
}
export declare const PersistentStates: PersistentStates;
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function getFromLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, converter?: ((input: string) => PersistentStates[Key]), storage?: Storage): PersistentStates[Key] | null;
/**
 * #__NO_SIDE_EFFECTS__
 */
export declare function storeToLocalStorage<Key extends (keyof PersistentStates) & string>(key: Key, value: PersistentStates[Key], converter?: ((input: PersistentStates[Key]) => string), storage?: Storage): void;
/**
 * @remarks Use module augmentation to get the correct types for this function.
 *
 * ```typescript
 * declare module 'preact-prop-helpers' {
 *     interface PersistentStates {
 *         numberState: number;
 *         stringState: string;
 *     }
 * }
 * ```
 * @param key -
 * @param initialValue -
 * @param fromString -
 * @param toString -
 * @returns
 *
 * #__NO_SIDE_EFFECTS__
 */
export declare function usePersistentState<Key extends keyof PersistentStates, T = PersistentStates[Key]>(key: Key | null, initialValue: T, fromString?: ((value: string) => T), toString?: ((value: T) => string), storage?: Storage): [T, StateUpdater<T>, () => T];
//# sourceMappingURL=use-persistent-state.d.ts.map