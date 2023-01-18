import React from "react";
import SidebarHeader from "./components/SidebarHeader";
import LectureList from "./components/LectureList";
import EventList from "./components/EventList";
import SidebarFooter from "./components/SidebarFooter";

const ScheduleSidebar = () => {
  return (
    <div className="app__card app__schedule__sidebar">
      <div>
        <SidebarHeader />
        <LectureList />
        <EventList />
      </div>
      <SidebarFooter />
    </div>
  );
};

export default ScheduleSidebar;
