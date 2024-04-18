/**
 * Quick and easy way to add extra information to an event that was fired.
 *
 * For example, "this was a click event, but it has information about what list item was pressed too."
 *
 * Get that extra information from the [EventDetail] symbol.
 */
export const EventDetail = Symbol("event-detail");
//export function getEventDetail<Detail>(e: TargetedEnhancedEvent<any, Detail>): Detail { return e[EventDetail]; }
export function enhanceEvent(e, detail) {
    const event = (e ?? {});
    event[EventDetail] ??= {};
    Object.assign(event[EventDetail], detail);
    return event;
}
//# sourceMappingURL=event.js.map