import { BehaviorSubject, of, switchMap, tap } from "rxjs";
import { ScheduleDateData } from "../models/ui/data/ScheduleDateData";
import { shareLatest } from "@react-rxjs/core";
import { CalendarEventData } from "../models/ui/data/CalendarEventData";

const getCurrentScheduleDate = (): ScheduleDateData => {
  const currentDate = new Date();
  return {
    month: currentDate.getMonth(),
    weekStartDay: currentDate.getDate() - currentDate.getDay() + 1,
    weekFinDay: currentDate.getDate() + 7 - currentDate.getDay(),
    year: currentDate.getFullYear(),
  };
};

const currentScheduleDate = new BehaviorSubject<ScheduleDateData>(
  getCurrentScheduleDate()
);
export const currentScheduleDate$ = currentScheduleDate.asObservable();

export const userLectures$ = currentScheduleDate$.pipe(
  switchMap((_) =>
    of([
      { name: "Podstawy programowania", color: "85CB33", disabled: false },
      { name: "Środowisko programisty", color: "5BC0EB", disabled: true },
      {
        name: "Wstęp do uczenia maszynowego",
        color: "F08700",
        disabled: false,
      },
      { name: "Inżynieria oprogramowania", color: "DA2C38", disabled: false },
    ])
  ),
  shareLatest(),
  tap((_) => console.log("Downloading"))
);

const calendarEvents = new BehaviorSubject<CalendarEventData[]>([
  {
    eventId: "0",
    eventStart: new Date(2023, 0, 18, 11, 0, 0),
    eventFinish: new Date(2023, 0, 18, 12, 30, 0),
    eventDuration: 90,
    backgroundColor: "red",
    textColor: "black",
    eventTitle: "test",
  },
  {
    eventId: "1",
    eventStart: new Date(2023, 0, 18, 12, 20, 0),
    eventFinish: new Date(2023, 0, 18, 13, 50, 0),
    eventDuration: 90,
    backgroundColor: "green",
    textColor: "black",
    eventTitle: "test",
  },
  {
    eventId: "2",
    eventStart: new Date(2023, 0, 18, 11, 40, 0),
    eventFinish: new Date(2023, 0, 18, 15, 10, 0),
    eventDuration: 90,
    backgroundColor: "yellow",
    textColor: "black",
    eventTitle: "test",
  },
]);
export const calendarEvents$ = calendarEvents.asObservable();
