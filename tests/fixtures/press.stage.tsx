import { h } from "preact";
import { useMergedProps, usePress, useRefElement, useState } from "preact-prop-helpers/preact";
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
    const [count, setCount] = useState(0);
    return (
        <div>
            <div>Times pressed: <output>{count}</output></div>
            <TestBasesButtonImpl tag="button" onPress={() => { setCount(p => p + 1) }} />
            <TestBasesButtonImpl tag="div" onPress={() => { setCount(p => p + 1) }} />
        </div>
    )
}

export function TestBasesButtonImpl<Tag extends 'div' | 'button'>({ tag, onPress }: { tag: Tag, onPress: () => void }) {
    const [, , excludeEnter] = useTestSyncState("Press", "setExcludeEnter", false, fromStringBoolean);
    const [, , excludeSpace] = useTestSyncState("Press", "setExcludeSpace", false, fromStringBoolean);
    const [, , excludePointer] = useTestSyncState("Press", "setExcludePointer", false, fromStringBoolean);
    const [allowRepeatPresses] = useTestSyncState("Press", "setAllowRepeatPresses", false, fromStringBoolean);

    const { refElementReturn, propsStable } = useRefElement<Tag>({ refElementParameters: {} });
    const { pressReturn: { getIsPressing, longPress, pressing }, props } = usePress<Tag>({
        pressParameters: {
            focusSelf: () => refElementReturn.getElement()!.focus(),
            excludeEnter,
            excludePointer,
            excludeSpace,
            onPressingChange: null,
            allowRepeatPresses,
            longPressThreshold: 1000,
            elementIsContained: (e) => refElementReturn.getElement()!.contains(e),
            onPressSync: (e) => {
                onPress();
                return getTestingHandler("Press", "onPress")?.(e);
            }
        }
    })

    return (
        h(tag, useMergedProps<Tag>({
            "data-pressing": pressing,
            "data-long-press": longPress,
            children: "Pressable " + tag
        },
            useMergedProps(propsStable, props),
            // As a div, it needs to be focusable (and also add a role for the selector)
            tag == "button" ? {} : { role: "button", tabIndex: 0 }
        ))
    );
}
