import { h } from "preact";
import { useMergedProps, usePress, useRefElement, useStableGetter } from "../../dist/index.js";
import { TestItem, useTestSyncState } from "./util.js";

export interface PressConstants {
    onPress(e: Event): (void | Promise<void>);
    setDisabledType(type: "soft" | "hard"): void;
    setExcludeEnter(disabled: boolean): void;
    setExcludeSpace(disabled: boolean): void;
    setExcludePointer(disabled: boolean): void;
    setAllowRepeatPresses(disabled: boolean): void;
}

export function TestBasesButton() {
    return (
        <TestItem>
            <TestBasesButtonImpl tag="button" />
            <TestBasesButtonImpl tag="div" />
        </TestItem>
    )
}

export function TestBasesButtonImpl<T extends HTMLButtonElement | HTMLDivElement>({ tag }: { tag: T extends HTMLButtonElement ? "button" : "div" }) {
    const excludeEnter = useStableGetter(useTestSyncState("Press", "setExcludeEnter", false));
    const excludeSpace = useStableGetter(useTestSyncState("Press", "setExcludeSpace", false));
    const excludePointer = useStableGetter(useTestSyncState("Press", "setExcludePointer", false));
    const allowRepeatPresses = useTestSyncState("Press", "setAllowRepeatPresses", false);

    const { refElementReturn } = useRefElement<T>({ refElementParameters: {} });
    const { pressReturn: { getIsPressing, longPress, pressing }, props } = usePress({
        refElementReturn,
        pressParameters: {
            focusSelf: e => e.focus(),
            excludeEnter,
            excludePointer,
            excludeSpace,
            allowRepeatPresses,
            longPressThreshold: 1000,
            onPressSync: (e) => {
                return getTestingHandler("Press", "onPress")?.(e);
            }
        }
    })

    return (
        h(tag as never, useMergedProps({
            "data-pressing": pressing,
            "data-long-press": longPress,
            children: "Pressable " + tag
        } as {},
            props,
            // As a div, it needs to be focusable (and also add a role for the selector)
            tag == "button" ? {} : { role: "button", tabIndex: 0 }
        ))
    );
}
