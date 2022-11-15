import React from "react";
import {bind} from "@react-rxjs/core";
import {currentScheduleDate$} from "../../../../services/ScheduleService";
import SidenavHeader from "./components/SidenavHeader";
import LectureList from "./components/LectureList";

const [useCurrentScheduleDate] = bind(currentScheduleDate$);

const ScheduleSidebar = () => {
    const currentScheduleDate = useCurrentScheduleDate();

    return <div className="app__card app__schedule__sidebar">
        <SidenavHeader schedule={currentScheduleDate} />
        <LectureList />
    </div>
}

export default ScheduleSidebar;