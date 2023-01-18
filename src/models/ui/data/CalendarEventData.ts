export interface CalendarEventData {
  eventId: string;
  eventStart: Date;
  eventFinish: Date;
  eventOffset: number;
  eventDuration: number;
  backgroundColor: string;
  textColor: string;
  eventTitle: string;
  overlapCount?: number;
  overlapIdx?: number;
}
