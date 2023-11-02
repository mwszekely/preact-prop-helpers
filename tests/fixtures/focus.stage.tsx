import { h } from "preact";
import { useHasCurrentFocus, useMergedProps, useRefElement, useStableCallback } from "preact-prop-helpers";
import { useState } from "preact/hooks";

export interface FocusConstants {
    /*onPress(e: Event): (void | Promise<void>);
    setDisabledType(type: "soft" | "hard"): void;
    setExcludeEnter(disabled: boolean): void;
    setExcludeSpace(disabled: boolean): void;
    setExcludePointer(disabled: boolean): void;
    setAllowRepeatPresses(disabled: boolean): void;*/
}

export function TestBasesFocus() {
    return (
        <>
            <Impl tag="div" tabIndex={0}>Focusable div</Impl>
            <Impl tag="button" tabIndex={0}>Focusable button</Impl>
            <Impl tag="div" tabIndex={-1}>Untabbable div</Impl>
            <Impl tag="button" tabIndex={-1}>Untabbable button</Impl>
            <input id="steal-focus" />
        </>
    )
}

function Impl({ tag, tabIndex, children }: { tag: string, tabIndex: number, children: string }) {
    const [focus, hasFocus] = useState(false);
    const [focusInner, hasFocusInner] = useState(false);
    const { propsStable, refElementReturn } = useRefElement<any>({ refElementParameters: {} })
    const { propsStable: p2, hasCurrentFocusReturn: { getCurrentFocused, getCurrentFocusedInner } } = useHasCurrentFocus({
        hasCurrentFocusParameters: {
            onCurrentFocusedChanged: useStableCallback((e) => { console.log("IMPL focus", e); document.getElementById("steal-focus")?.focus(); hasFocus(e) }),
            onCurrentFocusedInnerChanged: useStableCallback((e) => { console.log("IMPL focus-inner", e); document.getElementById("steal-focus")?.focus(); hasFocusInner(e) })
        },
        refElementReturn
    });
    console.assert(getCurrentFocused() == focus);
    console.assert(getCurrentFocusedInner() == focusInner);

    return h(tag as never, useMergedProps({ tabIndex, "data-focused": focus, "data-focus-inner": focusInner } as {}, propsStable, p2), children);
}
