import React from "react";
import {bind} from "@react-rxjs/core";
import {userLectures$} from "../../../../../services/ScheduleService";

const [useLectures] = bind(userLectures$);
const LectureList = () => {
    const lectures = useLectures();

    return <div>
        <div className="app__schedule__sidebar__lectures-title">Lista zajęć</div>
        <div className="app__schedule__sidebar__lectures-list">
            {lectures.map(l => (
                <div
                    className={"app__schedule__sidebar__lecture" + (l.disabled ? "--disabled" : "")}
                >
                    <div className="app__schedule__sidebar__lecture-tag" style={{backgroundColor: "#" + l.color}}></div>
                    <div className="app__schedule__sidebar__lecture-name">{l.name}</div>

                </div>
            ))}
        </div>
    </div>
}

export default LectureList;