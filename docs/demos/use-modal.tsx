
import { useCallback, useRef, useState } from "react";
import { DismissListenerTypes, useMergedProps, useModal, useStableCallback } from "../../dist/index.js";

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

    const focusOpener = () => buttonRef.current?.focus();

    const {
        propsStablePopup,
        propsStableSource,
        propsFocusContainer
    } = useModal<"lost-focus" | "backdrop" | "escape", HTMLDivElement, HTMLButtonElement, HTMLDivElement>({
        focusTrapParameters: {
            trapActive: focusTrapActive,
            onlyMoveFocus: false,
            focusOpener,
            focusPopup: useStableCallback((e, f) => f()?.focus())
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
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label><input type="checkbox" disabled={true} checked={true} /> Close by setting open to false</label>
                <label><input type="checkbox" checked={closeOnBackdrop} onChange={e => setCloseOnBackdrop(e.currentTarget.checked)} /> Close on backdrop click</label>
                <label><input type="checkbox" checked={closeOnEscape} onChange={e => setCloseOnEscape(e.currentTarget.checked)} /> Close on Escape key press</label>
                <label><input type="checkbox" checked={closeOnLostFocus} onChange={e => setCloseOnLostFocus(e.currentTarget.checked)} /> Close on focus lost</label>
                <label><input type="checkbox" checked={focusTrapActive} onChange={e => setFocusTrapActive(e.currentTarget.checked)} /> Trap focus</label>
                <br />
            </div>
            <div>Last reason for closing: {closeReason ?? "(hasn't been closed yet)"}</div>
            <button {...propsStableSource} onClick={() => setOpen(true)}>Open Modal</button>
            <div {...useMergedProps(propsFocusContainer, propsStablePopup)} style={{ border: `${depth}px dotted red`, background: "#ccc" }}>
                <div style={{ display: open ? "flex" : "none", flexDirection: "column" }}>
                    <div>Modal element at depth {depth} with {hasChild ? "a" : "no"} child</div>
                    <label><input type="checkbox" checked={hasChild} onChange={e => setHasChild(e.currentTarget.checked)} ref={buttonRef} /> Add a child modal</label>
                    {hasChild && <DemoUseModal parentDepth={depth} />}
                    <button {...propsStableSource} onClick={() => setOpen(false)}>Close modal programmatically</button>
                </div>
            </div>
        </div>
    )
}
