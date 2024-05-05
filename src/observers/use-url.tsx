import { useGlobalHandler } from "../dom-helpers/use-event-handler.js";

import { usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";
import { useCallback } from "../util/lib.js";
import { monitored } from "../util/use-call-count.js";

/**
 * Allows you to inspect when the entire URL changes, 
 * either because the hash changed or because the Back/Forward 
 * browser buttons were pressed.
 * 
 * @remarks If the URL is set programmatically
 * in a way that doesn't trigger either of those, like
 * `history.replaceState`, well, 🤷 there's no way to track that.
 * So beware of other libraries that modify page history out from under you.
 * 
 * In general, you'll want to inspect a specific directory of
 * a path, or a specific query parameter value, not the
 * entire URL.
 */
export const useUrl = monitored(function useUrl(onUrlChange: (url: string) => void) {

    const [getUrl, setUrl] = usePassiveState<string, Event | undefined>(useStableCallback(onUrlChange), useCallback(() => window.location.toString(), []));

    useGlobalHandler(globalThis, "hashchange", (e) => {
        setUrl(globalThis.location.toString(), e);
    });

    useGlobalHandler(globalThis, "popstate", (e: PopStateEvent) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event#the_history_stack
        // TODO: If this assert never fires, it's *probably* fine??
        console.assert(globalThis.location.toString() === document.location.toString());
        setUrl(globalThis.location.toString(), e);
    });

    return [getUrl, useCallback((newUrlOrSetter: (string | ((prev: string | undefined) => string)), action: "push" | "replace") => {
        if (typeof newUrlOrSetter == "function") {
            setUrl(prev => {
                let newUrl = newUrlOrSetter(prev);
                history[`${action ?? "replace"}State`]({}, document.title, newUrl);
                return newUrl;
            }, undefined)
        }
        else {
            history[`${action ?? "replace"}State`]({}, document.title, newUrlOrSetter);
            setUrl(newUrlOrSetter, undefined);
        }
    }, [])] as const;
})
