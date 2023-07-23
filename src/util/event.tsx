
/**
 * Quick and easy way to add extra information to an event that was fired.
 * 
 * For example, "this was a click event, but it has information about what list item was pressed too."
 * 
 * Get that extra information from the [EventDetail] symbol.
 */

import { EventType } from "./lib.js";

export const EventDetail = Symbol("event-detail");
export type EventDetail = typeof EventDetail;
export type EnhancedEventHandler<E extends Event, Detail> = (e: TargetedEnhancedEvent<E, Detail>) => void;
export type TargetedEnhancedEvent<E extends Event, Detail> = E & { [EventDetail]: Detail; };

export function getEventDetail(e: TargetedEnhancedEvent<any, any>) { return e[EventDetail]; }

export function enhanceEvent<E extends Event | EventType<any, any>, Detail extends object>(e: E, detail: Detail): TargetedEnhancedEvent<E & Event, Detail> {
    const event = (e as TargetedEnhancedEvent<E & Event, Detail> ?? {});
    event[EventDetail] = detail;
    return event;
}
