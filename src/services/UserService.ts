import {BehaviorSubject} from "rxjs";
import {UserData} from "../models/repository/data/UserData";
import {PrivilegeEnum} from "../models/repository/enum/PrivilegeEnum";

const activeUser = new BehaviorSubject<UserData | null>({
    username: "anowak",
    email: "adam.nowak@gmail.com",
    umcsIndex: "111111",
    firstName: "Adam",
    lastName: "Nowak",
    privilege: PrivilegeEnum.USER
});
export const activeUser$ = activeUser.asObservable();

export const getUser = () => {
    // TODO: Retrieving user from backend services

    activeUser.next({
        username: "anowak",
        email: "adam.nowak@gmail.com",
        umcsIndex: "111111",
        firstName: "Adam",
        lastName: "Nowak",
        privilege: PrivilegeEnum.USER
    })
}