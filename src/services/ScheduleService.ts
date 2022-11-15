import {BehaviorSubject, of, switchMap, tap} from "rxjs";
import {ScheduleDateData} from "../models/ui/data/ScheduleDateData"
import {shareLatest} from "@react-rxjs/core";

const getCurrentScheduleDate = (): ScheduleDateData => {
    const currentDate = new Date();
    return {
        month: currentDate.getMonth(),
        weekStartDay: currentDate.getDate() - currentDate.getDay() + 1,
        weekFinDay: currentDate.getDate() + 7 - currentDate.getDay(),
        year: currentDate.getFullYear()
    }
}

const currentScheduleDate = new BehaviorSubject<ScheduleDateData>(getCurrentScheduleDate());
export const currentScheduleDate$ = currentScheduleDate.asObservable();

export const userLectures$ = currentScheduleDate$.pipe(
    switchMap(_ => of([
        {name: "Podstawy programowania", color: "85CB33", disabled: false},
        {name: "Środowisko programisty", color: "5BC0EB", disabled: true},
        {name: "Wstęp do uczenia maszynowego", color: "F08700", disabled: false},
        {name: "Inżynieria oprogramowania", color: "DA2C38", disabled: false},
    ])),
    shareLatest(),
    tap(_ => console.log("Downloading"))
);