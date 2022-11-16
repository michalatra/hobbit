import React from "react";
import {bind} from "@react-rxjs/core";
import {currentScheduleDate$} from "../../../../services/ScheduleService";
import SidebarHeader from "./components/SidebarHeader";
import LectureList from "./components/LectureList";
import EventList from "./components/EventList";
import SidebarFooter from "./components/SidebarFooter";

const [useCurrentScheduleDate] = bind(currentScheduleDate$);

const ScheduleSidebar = () => {
    const currentScheduleDate = useCurrentScheduleDate();

    return <div className="app__card app__schedule__sidebar">
        <div>
            <SidebarHeader schedule={currentScheduleDate} />
            <LectureList />
            <EventList />
        </div>
        <SidebarFooter />

    </div>
}

export default ScheduleSidebar;