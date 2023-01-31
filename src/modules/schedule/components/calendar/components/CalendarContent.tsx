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
import { useWindowDimensions } from "../../../../../hooks/useWindowDimensions";

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
  let overlappingEvents: (CalendarEventData | null)[] = [];

  let updatedEvents = [...events];
  updatedEvents = updatedEvents.filter(
    (event) => event.eventStart.getDate() === day.getDate()
  );
  updatedEvents = updatedEvents.sort((a, b) =>
    a.eventOffset - b.eventOffset > 0 ? 1 : -1
  );

  updatedEvents.forEach((event, eventIdx) => {
    if (overlappingEvents.length === 0) {
      event.overlapIdx = 0;
      return overlappingEvents.push(event);
    }

    let firstNullId = -1;
    let isOverlapping = false;

    overlappingEvents.forEach((overlappingEvent, idx) => {
      if (overlappingEvent === null) {
        if (firstNullId === -1) {
          firstNullId = idx;
        }
      } else {
        if (
          overlappingEvent.eventOffset + overlappingEvent.eventDuration <
          event.eventOffset
        ) {
          overlappingEvents[idx] = null;
          if (firstNullId === -1) {
            firstNullId = idx;
          }
        } else {
          isOverlapping = true;
        }
      }
    });

    if (isOverlapping) {
      if (firstNullId === -1) {
        event.overlapIdx = overlappingEvents.length;
        overlappingEvents.push(event);
      } else {
        event.overlapIdx = firstNullId;
        overlappingEvents[firstNullId] = event;
      }
    } else {
      for (let i = 0; i < eventIdx; i++) {
        if (!updatedEvents[i].overlapCount) {
          updatedEvents[i].overlapCount = overlappingEvents.length;
        }
      }
      event.overlapIdx = 0;
      overlappingEvents = [event];
    }
  });

  updatedEvents.forEach((event) => {
    if (!event?.overlapCount) {
      event.overlapCount = overlappingEvents.length;
    }
  });

  return updatedEvents;
};

const [useCurrentScheduleDate] = bind(currentScheduleDate$);
const [useCalendarEvents] = bind(calendarEvents$);

const CalendarContent = () => {
  const [windowWidth] = useWindowDimensions();
  const currentScheduleDate = useCurrentScheduleDate();
  const calendarEvents = useCalendarEvents();
  const [calendarData, setCalendarData] = useState<CalendarData>();
  const [highlightedEvent, setHighlightedEvent] = useState<string>();
  const [mobileView, setMobileView] = useState<boolean>(false);
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

    const numberOfDays = mobileView ? 1 : 5;

    if (mobileView) {
      startDate.setDate(new Date().getDate());
    }

    for (let i = 0; i < numberOfDays; i++) {
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
  }, [currentScheduleDate, mobileView]);

  useEffect(() => {
    if (windowWidth <= 768 && !mobileView) {
      setMobileView(true);
    } else if (windowWidth > 768 && mobileView) {
      setMobileView(false);
    }
  }, [windowWidth]);

  const handleEventHighlight = (eventId: string) => {
    if (highlightedEvent === eventId) setHighlightedEvent(undefined);
    else setHighlightedEvent(eventId);
  };

  const getEventClass = (event: CalendarEventData): string => {
    let className;

    if (event.eventId === highlightedEvent)
      className = "app__schedule__calendar__event--highlighted";
    else className = "app__schedule__calendar__event";

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
                  top: event.eventOffset,
                  height: event.eventDuration,
                  backgroundColor: event.backgroundColor,
                  color: event.textColor,
                  width: `${95 / event.overlapCount!}%`,
                  left: `${
                    (event.overlapIdx! * 100) / event.overlapCount! +
                    5 / event.overlapCount!
                  }%`,
                }}
              >
                {event.overlapCount}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarContent;
