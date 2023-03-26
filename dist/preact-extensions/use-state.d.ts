import { Dispatch, SetStateAction } from "react";
/**
 * Slightly enhanced version of `useState` that includes a getter that remains constant
 * (i.e. you can use it in `useEffect` and friends without it being a dependency).
 *
 * @param initialState
 * @returns
 */
export declare function useState<T>(initialState: T | (() => T)): readonly [value: T, setValue: Dispatch<SetStateAction<T>>, getValue: () => T];
//# sourceMappingURL=use-state.d.ts.map