import { useCallback } from "preact/hooks";
import { useGlobalHandler } from "../dom-helpers/use-event-handler.js";
import { usePassiveState } from "../preact-extensions/use-passive-state.js";
import { useStableCallback } from "../preact-extensions/use-stable-callback.js";

/**
 * Allows you to inspect when the entire URL changes, 
 * either because the hash changed or because the Back/Forward 
 * browser buttons were pressed (if the URL is set programmatically
 * in a way that doesn't trigger either of those, like
 * `history.replaceState`, well, 🤷 there's no way to track that).
 * 
 * In general, you'll want to inspect a specific directory of
 * a path, or a specific query parameter value, not the
 * entire URL.
 */
export function useUrl(onUrlChange: (url: string) => void) {

    const [getUrl, setUrl] = usePassiveState<string, never>(useStableCallback(onUrlChange), useCallback(() => window.location.toString(), []));

    useGlobalHandler(window, "hashchange", e => {
        setUrl(window.location.toString());
    });

    useGlobalHandler(window, "popstate", (e: PopStateEvent) => {
        // https://developer.mozilla.org/en-US/docs/Web/API/Window/popstate_event#the_history_stack
        // TODO: If this assert never fires, it's *probably* fine??
        console.assert(window.location.toString() === document.location.toString());
        setUrl(window.location.toString());
    });

    return [getUrl, useCallback((newUrlOrSetter: (string | ((prev: string | undefined) => string)), history2: "push" | "replace") => {
        if (typeof newUrlOrSetter == "function") {
            setUrl(prev => {
                let newUrl = newUrlOrSetter(prev);
                history[`${history2 ?? "replace"}State`]({}, document.title, newUrl);
                return newUrl;
            })
        }
        else {
            history[`${history2 ?? "replace"}State`]({}, document.title, newUrlOrSetter);
            setUrl(newUrlOrSetter);
        }
    }, [])] as const;
}
