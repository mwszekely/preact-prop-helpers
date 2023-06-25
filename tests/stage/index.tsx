import { render } from "preact";
import { useEffect, useRef } from "preact/hooks";
import { useSearchParamState, useState } from "../../dist/index.js";
import { useSearchParamStateDeclarative } from "../../dist/preact-extensions/use-search-param-state.js";
import type { SharedFixtures } from "../fixtures/base.fixture.js";
import { TestBasesFocus } from "../fixtures/focus.stage.js";
import { TestBasesGridNav } from "../fixtures/grid-nav.stage.js";
import { TestBasesListNav } from "../fixtures/list-nav.stage.js";
import { TestBasesButton } from "../fixtures/press.stage.js";
import { TestItem, TestingConstants, fromStringBoolean, fromStringNumber } from "../util.js";


declare module globalThis {
    let installTestingHandler: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, func: TestingConstants[K][K2]) => void;
    let _TestingConstants: TestingConstants;
    let getTestingHandler: <K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2) => TestingConstants[K][K2];

    // TODO: Rename run, both here and in Playwright.
    // This is here so that both sides can just call run and it just works,
    // but it should have a different name in that case.
    let run: SharedFixtures["run"];
}




globalThis.installTestingHandler = function installTestingHandler<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2, func: TestingConstants[K][K2]) {
    (globalThis)._TestingConstants ??= {} as any;
    (globalThis)._TestingConstants[key] ??= {} as any;
    (globalThis)._TestingConstants[key][Key2] = func;
};
globalThis.getTestingHandler = function getTestingHandler<K extends keyof TestingConstants, K2 extends keyof TestingConstants[K]>(key: K, Key2: K2) {
    (globalThis)._TestingConstants ??= {} as any;
    (globalThis)._TestingConstants[key] ??= {} as any;
    return (globalThis)._TestingConstants[key][Key2] ?? undefined!; // || (noop as never);
};
globalThis.run = (key, key2, ...args) => ((globalThis).getTestingHandler?.(key, key2) as Function | null)?.(...(args as any[]));

function noop() { }
/*
let old = HTMLElement.prototype.focus
HTMLElement.prototype.focus = function (e) {
    debugger;
    old.bind(this)();
}*/


/*
function TestBasesMenu() {
    return (
        <TestItem>
            <Menu anchor={<Button onPress={null}>Open Menu</Button>}>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 0), [])} index={0}>Item 0</MenuItem>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 1), [])} index={1}>Another Item (1)</MenuItem>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 2), [])} index={2} disabled>Disabled Item (2)</MenuItem>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 3), [])} index={3}>The next item is missing (3)</MenuItem>
                <MenuItem onPress={useCallback(async (closeMenu, ...rest) => await (getTestingHandler("Menu", "onMenuItem") ?? (async (closeMenu) => { await new Promise(resolve => setTimeout(resolve, 1000)); closeMenu(); }))(closeMenu, ...rest, 5), [])} index={5}>Final Item (5)</MenuItem>
            </Menu>
            <input type="text" value="I can take focus" />
        </TestItem>
    )
}
*/
function TestBasesSanityCheck() {

    let which = useRef(9);
    const [s, setS] = useSearchParamStateDeclarative({ key: "sanity-check", initialValue: 9, stringToValue: fromStringNumber, defaultReason: "replace" });

    console.assert(s == which.current);
    console.assert(new URL(window.location.toString()).searchParams.get("sanity-check") == (which.current as number | string));

    useEffect(() => {
        which.current = 10;
        setS(10);
    }, []);

    // Please, it's 2023, this should never ever fail, surely, please. (please)
    return (
        <>
            <div class="default">default</div>
            <div class="encoding">符号化テスト</div>
        </>
    )
}

const TestBases = {
    "sanity-check": <TestBasesSanityCheck />,
    "press": <TestBasesButton />,
    "list-navigation": <TestBasesListNav />,
    "grid-navigation": <TestBasesGridNav />,
    "focus": <TestBasesFocus />,
    /*"menu": <TestBasesMenu />,*/
}

declare module "../../dist/index.js" {
    export interface SearchParamStates {
        "test-base": string;
        "test-bool": boolean | null;
        "sanity-check": number;
    }
}

function TestsContainer() {
    const [bool, setBool, getBool] = useSearchParamStateDeclarative({ key: "test-bool", initialValue: null, stringToValue: fromStringBoolean });

    const [base, setBase, getBase] = useSearchParamStateDeclarative({ key: "test-base", initialValue: "", stringToValue: value => value });

    useEffect(() => {
        document.getElementById("focusable-first")?.focus?.();
    }, [])
    if (!base) {
        return (
            <>
                <p><strong>No test selected</strong>. View any of the available bases below:</p>
                <ul>{Object.entries(TestBases).map(([name, component]) => <li><code><a href={`?test-base=${name}`}>{name}</a></code></li>)}</ul>
                <button onClick={() => setBool(b => { debugger; return !b; })}>Currently {(bool ?? "null").toString()}</button>
            </>
        );
    }
    return (
        <>
            <input id="focusable-first" />
            <TestItem>
                {Object.entries(TestBases).map(([name, component]) => {
                    if (name === base)
                        return component;
                    return null;
                })}

            </TestItem>
            <input id="focusable-last" />
        </>
    )
}


document.addEventListener("DOMContentLoaded", () => {

    render(<TestsContainer />, document.body);
})

