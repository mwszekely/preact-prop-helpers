/**
 * Quick and easy way to add extra information to an event that was fired.
 *
 * For example, "this was a click event, but it has information about what list item was pressed too."
 *
 * Get that extra information from the [EventDetail] symbol.
 */
import { EventType, Nullable } from "./lib.js";
export declare const EventDetail: unique symbol;
export type EventDetail = typeof EventDetail;
export type EnhancedEventHandler<E extends Event, Detail> = (e: TargetedEnhancedEvent<E, Detail>) => void;
export type TargetedEnhancedEvent<E extends Event | TargetedEnhancedEvent<any, any>, Detail> = E & {
    [EventDetail]: Detail & (E extends TargetedEnhancedEvent<any, infer D> ? D : {});
};
export declare function enhanceEvent<E extends Event | EventType<any, any> | TargetedEnhancedEvent<any, any>, Detail extends object>(e: Nullable<E>, detail: Detail): TargetedEnhancedEvent<E & Event, Detail>;
//# sourceMappingURL=event.d.ts.map