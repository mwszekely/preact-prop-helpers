
import { useCallback, useRef, useState } from "preact/hooks";
import { DismissListenerTypes, useMergedProps, useModal } from "../..";

function getWindow(): Window { return globalThis.window; }

export function DemoUseModal(props: { parentDepth?: number }) {

    const parentDepth = (props.parentDepth ?? 0);
    const depth = parentDepth + 1;

    const buttonRef = useRef<HTMLInputElement>(null);

    const [closeOnBackdrop, setCloseOnBackdrop] = useState(true);
    const [closeOnEscape, setCloseOnEscape] = useState(true);
    const [closeOnLostFocus, setCloseOnLostFocus] = useState(true);
    const [focusTrapActive, setFocusTrapActive] = useState(true);
    const [hasChild, setHasChild] = useState(false);

    const [closeReason, setCloseReason] = useState<DismissListenerTypes | null>(null);

    const [open, setOpen] = useState(false);

    const focusOpener = (e: any) =>buttonRef.current?.focus();

    const {
        propsPopup,
        propsSource,
        propsFocusContainer
    } = useModal<"lost-focus" | "backdrop" | "escape", HTMLDivElement, HTMLButtonElement, HTMLDivElement>({
        focusTrapParameters: {
            trapActive: focusTrapActive,
            focusOpener,
            focusPopup: (e, f) => f()
        },
        dismissParameters: {
            closeOnBackdrop,
            closeOnEscape,
            closeOnLostFocus,
            onClose: useCallback((reason) => { setCloseReason(reason); setOpen(false); }, []),
            open
        },
        escapeDismissParameters: { getWindow, parentDepth }
    })
    return (
        <div style={{ border: `${depth}px solid black` }}>
            <div>useModal demo:</div>
            <div style="display: flex; flex-direction: column">
                <label><input type="checkbox" disabled={true} checked={true} /> Close by setting open to false</label>
                <label><input type="checkbox" checked={closeOnBackdrop} onInput={e => setCloseOnBackdrop(e.currentTarget.checked)} /> Close on backdrop click</label>
                <label><input type="checkbox" checked={closeOnEscape} onInput={e => setCloseOnEscape(e.currentTarget.checked)} /> Close on Escape key press</label>
                <label><input type="checkbox" checked={closeOnLostFocus} onInput={e => setCloseOnLostFocus(e.currentTarget.checked)} /> Close on focus lost</label>
                <label><input type="checkbox" checked={focusTrapActive} onInput={e => setFocusTrapActive(e.currentTarget.checked)} /> Trap focus</label>
                <br />
            </div>
            <div>Last reason for closing: {closeReason ?? "(hasn't been closed yet)"}</div>
            <button {...propsSource} onClick={() => setOpen(true)}>Open Modal</button>
            <div {...useMergedProps(propsFocusContainer, propsPopup)} style={`border: ${depth}px dotted red; background: #ccc`}>
                <div style={{ display: open ? "flex" : "none", flexDirection: "column" }}>
                    <div>Modal element at depth {depth} with {hasChild ? "a" : "no"} child</div>
                    <label><input type="checkbox" checked={hasChild} onInput={e => setHasChild(e.currentTarget.checked)} ref={buttonRef} /> Add a child modal</label>
                    {hasChild && <DemoUseModal parentDepth={depth} />}
                    <button {...propsSource} onClick={() => setOpen(false)}>Close modal programmatically</button>
                </div>
            </div>
        </div>
    )
}
