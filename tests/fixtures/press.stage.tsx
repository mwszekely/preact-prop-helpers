import { h } from "preact";
import { useMergedProps, usePress, useRefElement } from "preact-prop-helpers";
import { fromStringBoolean, useTestSyncState } from "../util.js";

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

export function TestBasesButtonImpl<Tag extends 'div' | 'button'>({ tag }: { tag: Tag }) {
    const [,,excludeEnter] = useTestSyncState("Press", "setExcludeEnter", false, fromStringBoolean);
    const [,,excludeSpace] = useTestSyncState("Press", "setExcludeSpace", false, fromStringBoolean);
    const [,,excludePointer] = useTestSyncState("Press", "setExcludePointer", false, fromStringBoolean);
    const [allowRepeatPresses] = useTestSyncState("Press", "setAllowRepeatPresses", false, fromStringBoolean);

    const { refElementReturn } = useRefElement<Tag>({ refElementParameters: {} });
    const { pressReturn: { getIsPressing, longPress, pressing }, props } = usePress<Tag>({
        refElementReturn,
        pressParameters: {
            focusSelf: e => e.focus(),
            excludeEnter,
            excludePointer,
            excludeSpace,
            onPressingChange: null,
            allowRepeatPresses,
            longPressThreshold: 1000,
            onPressSync: (e) => {
                return getTestingHandler("Press", "onPress")?.(e);
            }
        }
    })

    return (
        h(tag, useMergedProps({
            "data-pressing": pressing,
            "data-long-press": longPress,
            children: "Pressable " + tag
        },
            props,
            // As a div, it needs to be focusable (and also add a role for the selector)
            tag == "button" ? {} : { role: "button", tabIndex: 0 }
        ))
    );
}
