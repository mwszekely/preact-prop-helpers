/**
 * Quick and easy way to add extra information to an event that was fired.
 *
 * For example, "this was a click event, but it has information about what list item was pressed too."
 *
 * Get that extra information from the [EventDetail] symbol.
 */
import { EventType } from "./lib.js";
export declare const EventDetail: unique symbol;
export type EventDetail = typeof EventDetail;
export type EnhancedEventHandler<E extends Event, Detail> = (e: TargetedEnhancedEvent<E, Detail>) => void;
export type TargetedEnhancedEvent<E extends Event, Detail> = E & {
    [EventDetail]: Detail;
};
export declare function getEventDetail(e: TargetedEnhancedEvent<any, any>): any;
export declare function enhanceEvent<E extends Event | EventType<any, any>, Detail extends object>(e: E, detail: Detail): TargetedEnhancedEvent<E & Event, Detail>;
//# sourceMappingURL=event.d.ts.map