import { CalendarEventOverlapType } from "../enum/CalendarEventOverlapType";

export interface CalendarEventData {
  eventId: string;
  eventStart: Date;
  eventFinish: Date;
  eventDuration: number;
  backgroundColor: string;
  textColor: string;
  eventTitle: string;
  isOverlapping?: boolean;
  overlapType?: CalendarEventOverlapType;
}
