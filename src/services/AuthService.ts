import {BehaviorSubject} from "rxjs";
import {LoginStateEnum} from "../models/ui/enum/LoginStateEnum";
import {LoginFormData} from "../models/ui/data/LoginFormData";
import {navigate} from "./NavigationService";
import {ApplicationPathEnum} from "../models/ui/enum/ApplicationPathEnum";

const loginState = new BehaviorSubject<LoginStateEnum>(LoginStateEnum.USER_LOGGED);
export const loginState$ = loginState.asObservable();

export const handleLogin = (loginData: LoginFormData) => {
    // TODO: Login validation logics
    navigate("/" + ApplicationPathEnum.SCHEDULE);
    loginState.next(LoginStateEnum.USER_LOGGED);
}

export const handleLogout = () => {
    // TODO: Logout validation logic
    navigate("/");
    loginState.next(LoginStateEnum.USER_NOT_LOGGED);
}

export const handleSignIn = () => {
    // TODO: Sign In validation logic
    navigate("/" + ApplicationPathEnum.SCHEDULE);
    loginState.next(LoginStateEnum.USER_LOGGED);
}