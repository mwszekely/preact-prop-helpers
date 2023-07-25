import { useMemo, useState } from "preact/hooks";
import { useTimeout } from "../timing/use-timeout.js";
import { getBuildMode } from "./mode.js";
import { useStack } from "./stack.js";
// An external bundler (like Rollup) can turn this export 
// into "./lib-react.js" to create a React version of this library.
export * from "./lib-preact.js";
let idIndex = 0;
/**
 * Debug function that yells at you if your forgot to use the props a hook returns.
 *
 *
 *
 * @param props
 * @param tag
 * @returns
 */
export function useTagProps(props, tag) {
    const [id] = useState(() => ++idIndex);
    const propsIdTag = `data-props-${tag}-${id}`;
    const getStack = useStack();
    if (getBuildMode() == 'development') {
        if (props && typeof props == "object" && tag in props) {
            console.error("A hook returned props that were not properly spread to any HTMLElement.");
            console.log(getStack());
            debugger;
        }
        useTimeout({
            callback: () => {
                let element = document.querySelectorAll(`[${propsIdTag}]`);
                if (element.length != 1) {
                    debugger;
                    console.assert(false);
                }
            },
            timeout: 250,
            triggerIndex: tag
        });
        return useMemo(() => {
            return { ...props, [propsIdTag]: true /*, [tag as never]: true*/ };
        }, [props, tag]);
    }
    else {
        return props;
    }
}
//# sourceMappingURL=lib%20copy.js.map