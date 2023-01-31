import React from "react";
import "../../styles/schedule.css";
import SecuredContainer from "../common/securityContainer/SecuredContainer";
import ContainerGrow from "../common/container/ContainerGrow";
import ScheduleSidebar from "./components/sidebar/ScheduleSidebar";
import ScheduleCalendar from "./components/calendar/ScheduleCalendar";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Schedule = () => {
  const [windowWidth] = useWindowDimensions();

  return (
    <SecuredContainer>
      <ContainerGrow>
        <div className="app__schedule__container">
          {windowWidth > 768 ? <ScheduleSidebar /> : null}
          <ScheduleCalendar />
        </div>
      </ContainerGrow>
    </SecuredContainer>
  );
};

export default Schedule;
