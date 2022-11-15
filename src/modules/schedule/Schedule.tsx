import React from "react";
import "../../styles/schedule.css"
import SecuredContainer from "../common/securityContainer/SecuredContainer";
import ContainerGrow from "../common/container/ContainerGrow";
import ScheduleSidebar from "./components/sidenav/ScheduleSidebar";
import ScheduleCalendar from "./components/calendar/ScheduleCalendar";

const Schedule = () => {
    return <SecuredContainer>
        <ContainerGrow>
            <div className="app__schedule__container">
                <ScheduleSidebar />
                <ScheduleCalendar />
            </div>
        </ContainerGrow>
    </SecuredContainer>
}

export default Schedule;