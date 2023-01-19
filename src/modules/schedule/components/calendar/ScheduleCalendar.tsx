import React from "react";
import CalendarTimeline from "./components/CalendarTimeline";
import CalendarContent from "./components/CalendarContent";

const ScheduleCalendar = () => {
  return (
    <div className="app__card app__schedule__calendar">
      <CalendarTimeline />
      <CalendarContent />
    </div>
  );
};

export default ScheduleCalendar;
