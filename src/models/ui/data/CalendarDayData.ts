import { CalendarEventData } from "./CalendarEventData";

export interface CalendarDayData {
  day: Date;
  events: CalendarEventData[];
}
