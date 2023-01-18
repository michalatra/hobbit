import React, { useState } from "react";

const generateTimelineItems = (): string[] => {
  const items = [];
  for (let i = 0; i < 24; i++) items.push(`${i}:00`);
  return items;
};
const CalendarTimeline = () => {
  const [timelineItems, setTimelineItems] = useState<string[]>(
    generateTimelineItems()
  );

  return (
    <div className="app__schedule__calendar-timeline">
      {timelineItems.map((item) => (
        <div key={item} className="app__schedule__calendar-timeline-item">
          {item}
        </div>
      ))}
    </div>
  );
};

export default CalendarTimeline;
