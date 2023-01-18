import React, { useEffect, useState } from "react";
import { CalendarData } from "../../../../../models/ui/data/CalendarData";
import { bind } from "@react-rxjs/core";
import {
  calendarEvents$,
  currentScheduleDate$,
} from "../../../../../services/ScheduleService";
import { DayNameConverter } from "../../../../../models/ui/enum/DayNameConverter";
import { CalendarHourItemData } from "../../../../../models/ui/data/CalendarHourItemData";
import { CalendarEventData } from "../../../../../models/ui/data/CalendarEventData";
import { CalendarEventOverlapType } from "../../../../../models/ui/enum/CalendarEventOverlapType";

const hourItems: CalendarHourItemData[] = [
  { hour: 0 },
  { hour: 1 },
  { hour: 2 },
  { hour: 3 },
  { hour: 4 },
  { hour: 5 },
  { hour: 6 },
  { hour: 7 },
  { hour: 8 },
  { hour: 9 },
  { hour: 10 },
  { hour: 11 },
  { hour: 12 },
  { hour: 13 },
  { hour: 14 },
  { hour: 15 },
  { hour: 16 },
  { hour: 17 },
  { hour: 18 },
  { hour: 19 },
  { hour: 20 },
  { hour: 21 },
  { hour: 22 },
  { hour: 23 },
];

const prepareCalendarEvents = (
  events: CalendarEventData[],
  day: Date
): CalendarEventData[] => {
  let lastStartedEvent: CalendarEventData | undefined;
  let updatedEvents = [...events];
  updatedEvents = updatedEvents.filter(
    (event) => event.eventStart.getDate() === day.getDate()
  );
  updatedEvents = updatedEvents.sort((a, b) =>
    a.eventStart < b.eventStart ? -1 : 1
  );
  updatedEvents.forEach((event) => {
    if (
      !lastStartedEvent ||
      event.eventStart.getHours() > lastStartedEvent.eventFinish.getHours() ||
      (event.eventStart.getHours() ===
        lastStartedEvent.eventFinish.getHours() &&
        event.eventStart.getMinutes() >=
          lastStartedEvent.eventFinish.getMinutes())
    ) {
      lastStartedEvent = event;
    } else {
      if (lastStartedEvent?.isOverlapping) {
        if (lastStartedEvent.overlapType === CalendarEventOverlapType.LEFT)
          event.overlapType = CalendarEventOverlapType.RIGHT;
        else event.overlapType = CalendarEventOverlapType.LEFT;
      } else {
        lastStartedEvent!.isOverlapping = true;
        lastStartedEvent!.overlapType = CalendarEventOverlapType.LEFT;
        event.overlapType = CalendarEventOverlapType.RIGHT;
      }

      event.isOverlapping = true;

      if (
        lastStartedEvent?.eventFinish.getHours() >
          event.eventFinish.getHours() ||
        (lastStartedEvent?.eventFinish.getHours() ===
          event.eventFinish.getHours() &&
          lastStartedEvent?.eventFinish.getMinutes() >
            event.eventFinish.getMinutes())
      ) {
        lastStartedEvent = event;
      }
    }
  });

  return updatedEvents;
};

const [useCurrentScheduleDate] = bind(currentScheduleDate$);
const [useCalendarEvents] = bind(calendarEvents$);

const CalendarContent = () => {
  const currentScheduleDate = useCurrentScheduleDate();
  const calendarEvents = useCalendarEvents();
  const [calendarData, setCalendarData] = useState<CalendarData>();
  const [highlightedEvent, setHighlightedEvent] = useState<string>();
  const generateCalendarContent = (): CalendarData => {
    const startDate = new Date(
      currentScheduleDate.year,
      currentScheduleDate.month,
      currentScheduleDate.weekStartDay
    );

    const calendarData: CalendarData = {
      headersData: [],
      daysData: [],
    };

    for (let i = 0; i < 5; i++) {
      const day = new Date(startDate);
      day.setDate(day.getDate() + i);

      const dayName =
        DayNameConverter[day.getDay() as keyof typeof DayNameConverter];
      const dayNumber = day.getDate();

      calendarData.headersData.push({ dayNumber, dayName });
      calendarData.daysData.push({
        day,
        events: prepareCalendarEvents(calendarEvents, day),
      });
    }

    return calendarData;
  };

  useEffect(() => {
    setCalendarData(generateCalendarContent());
  }, [currentScheduleDate]);

  const handleEventHighlight = (eventId: string) => {
    if (highlightedEvent === eventId) setHighlightedEvent(undefined);
    else setHighlightedEvent(eventId);
  };

  const getEventClass = (event: CalendarEventData): string => {
    let className = "";

    if (event.eventId === highlightedEvent)
      className = "app__schedule__calendar__event--highlighted";
    else className = "app__schedule__calendar__event";

    if (event.isOverlapping) {
      if (event.overlapType === CalendarEventOverlapType.LEFT)
        className += " app__schedule__calendar__event--left";
      else className += " app__schedule__calendar__event--right";
    }

    return className;
  };

  return (
    <div className="app__schedule__calendar__content">
      <div className="app__schedule__calendar__content__header">
        {calendarData?.headersData.map((headerData) => (
          <div
            key={headerData.dayName}
            className="app__schedule__calendar__content__header__item"
          >
            <div className="app__schedule__calendar__content__header__item__number">
              {headerData.dayNumber}
            </div>
            <div className="app__schedule__calendar__content__header__item__name">
              {headerData.dayName}
            </div>
          </div>
        ))}
      </div>
      <div className="app__schedule__calendar__content__body">
        {calendarData?.daysData.map((dayData, idx) => (
          <div key={idx} className="app__schedule__calendar__content__column">
            {hourItems.map((hourItem) => (
              <div
                key={hourItem.hour}
                className="app__schedule__calendar__content__cell"
              />
            ))}
            {dayData.events.map((event, idx) => (
              <div
                key={idx}
                onClick={() => handleEventHighlight(event.eventId)}
                className={getEventClass(event)}
                style={{
                  top:
                    event.eventStart.getHours() * 60 +
                    event.eventStart.getMinutes(),
                  height: event.eventDuration,
                  backgroundColor: event.backgroundColor,
                  color: event.textColor,
                }}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarContent;
