import { CalendarDayData } from "./CalendarDayData";
import { CalendarHeaderData } from "./CalendarHeaderData";

export interface CalendarData {
  headersData: CalendarHeaderData[];
  daysData: CalendarDayData[];
}
