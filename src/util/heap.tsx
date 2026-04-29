

/**
 * A heap, based almost entirely on https://stackoverflow.com/a/42919752.
 */
export class PriorityQueue<T> {
    _heap: T[];
    _comparator: (a: T, b: T) => boolean;

    constructor(comparator = (a: T, b: T): boolean => a > b) {
        this._comparator = comparator;
        this._heap = [];
    }

    size() {
        return this._heap.length;
    }

    isEmpty() {
        return this.size() == 0;
    }

    peek() {
        return this._heap[top];
    }

    push(...values: T[]) {
        values.forEach(value => {
            this._heap.push(value);
            this._siftUp();
        });
        return this.size();
    }

    pop() {
        const poppedValue = this.peek();
        const bottom = this.size() - 1;
        if (bottom > top) {
            this._swap(top, bottom);
        }
        this._heap.pop();
        this._siftDown();
        return poppedValue;
    }

    replaceTop(value: T) {
        const replacedValue = this.peek();
        this._heap[top] = value;
        this._siftDown();
        return replacedValue;
    }

    protected _greater(i: number, j: number) {
        return this._comparator(this._heap[i], this._heap[j]);
    }

    protected _swap(i: number, j: number) {
        [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
    }

    protected _siftUp() {
        let node = this.size() - 1;
        while (node > top && this._greater(node, parent(node))) {
            this._swap(node, parent(node));
            node = parent(node);
        }
    }

    protected _siftDown() {
        let node = top;
        while (
            (left(node) < this.size() && this._greater(left(node), node)) ||
            (right(node) < this.size() && this._greater(right(node), node))
        ) {
            let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
            this._swap(node, maxChild);
            node = maxChild;
        }
    }
}

const top = 0;
function parent(i: number) { return ((i + 1) >>> 1) - 1 };
function left(i: number) { return (i << 1) + 1 };
function right(i: number) { return (i + 1) << 1 };