import React from "react";
import {bind} from "@react-rxjs/core";
import {userLectures$} from "../../../../../services/ScheduleService";

const [useEvents] = bind(userLectures$);
const EventList = () => {
    const events = useEvents();

    return <div>
        <div className="app__schedule__sidebar__events-title">Nadchodzące wydarzenia</div>
        <div className="app__schedule__sidebar__events-list">
            {events.map(e => (
                <div className="app__schedule__sidebar__event">
                </div>
            ))}
        </div>
    </div>
}

export default EventList;