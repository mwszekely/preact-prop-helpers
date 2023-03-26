//export type ElementProps<T extends EventTarget> = ComponentProps<ElementToTag<T> & keyof JSX.IntrinsicElements>;
function test(lhs, rhs) {
    return null;
}
export {};
//test<HTMLInputElement>({ type: "number" }, { ref: useRef<HTMLInputElement>(null), onClick: (e) => { e.currentTarget.valueAsNumber; } });
//# sourceMappingURL=types.js.map