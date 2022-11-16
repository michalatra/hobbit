import React from "react";
import {PropsBase} from "../../../../../models/ui/data/PropsBase";
import {ScheduleDateData} from "../../../../../models/ui/data/ScheduleDateData";
import {convertMonthName} from "../../../../../converters/MonthNameConverter";

interface HeaderProps extends PropsBase {
    schedule: ScheduleDateData
}

const SidebarHeader = ({schedule}: HeaderProps) => {
    return <div>
        <div className="app__schedule__sidebar-month">{convertMonthName(schedule.month)}</div>
        <div className="app__schedule__sidebar__week-container">
            <div>Tydzień:</div>
            <div className="app__schedule__sidebar__week-range">
                {schedule.weekStartDay + " - " + schedule.weekFinDay}
            </div>
        </div>
    </div>
}

export default SidebarHeader;