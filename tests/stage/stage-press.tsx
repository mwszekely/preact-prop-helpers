import { h } from "preact";
import { useMergedProps, usePress, useRefElement, useStableGetter } from "../../dist/index.js";
import { TestItem, fromStringBoolean, useTestSyncState } from "./util.js";

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
        <>
            <TestBasesButtonImpl tag="button" />
            <TestBasesButtonImpl tag="div" />
        </>
    )
}

export function TestBasesButtonImpl<T extends HTMLButtonElement | HTMLDivElement>({ tag }: { tag: T extends HTMLButtonElement ? "button" : "div" }) {
    const [,,excludeEnter] = useTestSyncState("Press", "setExcludeEnter", false, fromStringBoolean);
    const [,,excludeSpace] = useTestSyncState("Press", "setExcludeSpace", false, fromStringBoolean);
    const [,,excludePointer] = useTestSyncState("Press", "setExcludePointer", false, fromStringBoolean);
    const [allowRepeatPresses] = useTestSyncState("Press", "setAllowRepeatPresses", false, fromStringBoolean);

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
