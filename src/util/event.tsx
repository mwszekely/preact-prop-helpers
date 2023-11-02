
/**
 * Quick and easy way to add extra information to an event that was fired.
 * 
 * For example, "this was a click event, but it has information about what list item was pressed too."
 * 
 * Get that extra information from the [EventDetail] symbol.
 */

import type { EventType } from "./lib.js";
import type { Nullable } from "./types.js";

export const EventDetail = Symbol("event-detail");
export type EventDetail = typeof EventDetail;
export type EnhancedEventHandler<E extends Event, Detail> = (e: TargetedEnhancedEvent<E, Detail>) => void;
export type TargetedEnhancedEvent<E extends Event | TargetedEnhancedEvent<any, any>, Detail> = E & { [EventDetail]: Detail & (E extends TargetedEnhancedEvent<any, infer D> ? D : {}); };

export function getEventDetail<Detail>(e: TargetedEnhancedEvent<any, Detail>): Detail { return e[EventDetail]; }

export function enhanceEvent<E extends Event | EventType<any, any> | TargetedEnhancedEvent<any, any>, Detail extends object>(e: Nullable<E>, detail: Detail): TargetedEnhancedEvent<E & Event, Detail> {
    const event = (e as TargetedEnhancedEvent<E & Event, Detail> ?? {});
    event[EventDetail] ??= {} as never;
    Object.assign(event[EventDetail], detail);
    return event;
}
