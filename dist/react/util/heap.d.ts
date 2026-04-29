/**
 * A heap, based almost entirely on https://stackoverflow.com/a/42919752.
 */
export declare class PriorityQueue<T> {
    _heap: T[];
    _comparator: (a: T, b: T) => boolean;
    constructor(comparator?: (a: T, b: T) => boolean);
    size(): number;
    isEmpty(): boolean;
    peek(): T;
    push(...values: T[]): number;
    pop(): T;
    replaceTop(value: T): T;
    protected _greater(i: number, j: number): boolean;
    protected _swap(i: number, j: number): void;
    protected _siftUp(): void;
    protected _siftDown(): void;
}
//# sourceMappingURL=heap.d.ts.map