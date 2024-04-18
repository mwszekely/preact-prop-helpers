import { JSX } from "preact";
import { useManagedChildParameters, useManagedChildrenCount } from "./managed-children.parameters.js";


export function Stage_ManagedChildren({ Factory }: { Factory: (index: number) => JSX.Element }) {
    const count = useManagedChildrenCount();
    return (
        <>
            {Array.from(function* () {
                for (let i = 0; i < count; ++i) {
                    yield Factory(i);
                }
            }())}
        </>
    )
}

export function Stage_ManagedChild({ children, ifUnmounted }: { children: any, ifUnmounted?: JSX.Element }) {
    const { unmounted, index } = useManagedChildParameters();
    if (unmounted)
        return (<>{ifUnmounted ?? null}</>);

    return (<>{children}</>)
}
