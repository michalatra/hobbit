import React from "react";
import { convertMonthName } from "../../../../../converters/MonthNameConverter";
import { bind } from "@react-rxjs/core";
import { currentScheduleDate$ } from "../../../../../services/ScheduleService";

const [useCurrentScheduleDate] = bind(currentScheduleDate$);

const SidebarHeader = () => {
  const schedule = useCurrentScheduleDate();

  return (
    <div>
      <div className="app__schedule__sidebar-month">
        {convertMonthName(schedule.month)}
      </div>
      <div className="app__schedule__sidebar__week-container">
        <div>Tydzień:</div>
        <div className="app__schedule__sidebar__week-range">
          {schedule.weekStartDay + " - " + schedule.weekFinDay}
        </div>
      </div>
    </div>
  );
};

export default SidebarHeader;
