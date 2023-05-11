import { RenderableProps, render } from "preact";
import { TestBasesButton } from "./stage-press.js";
import { TestBasesListNav } from "./stage-list-nav.js";
import { TestingConstants } from "./util.js";
import { TestBasesFocus } from "./stage-focus.js";
import type { SharedFixtures } from "../fixtures/shared.js";
import { useSearchParamState, useState } from "../../dist/index.js"
import { useSearchParamStateDeclarative } from "../../dist/preact-extensions/use-search-param-state.js";


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
    "focus": <TestBasesFocus />,
    /*"menu": <TestBasesMenu />,*/
}

declare module "../../dist/index.js" {
    export interface SearchParamStates {
        "test-base": string;
    }
}

function TestsContainer() {
    const [base, setBase, getBase] = useSearchParamStateDeclarative({ key: "test-base", initialValue: "", fromString: value => value });

    if (!base) {
        return (
            <>
                <p><strong>No test selected</strong>. View any of the available bases below:</p>
                <ul>{Object.entries(TestBases).map(([name, component]) => <li><code><a href={`?test-base=${name}`}>{name}</a></code></li>)}</ul>
            </>
        );
    }
    return (
        <div class="tests-container">
            {Object.entries(TestBases).map(([name, component]) => {
                if (name === base)
                    return component;
                return null;
            })}
        </div>
    )
}

document.addEventListener("DOMContentLoaded", () => {

    render(<TestsContainer />, document.body);
})

