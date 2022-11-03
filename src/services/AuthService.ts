import {BehaviorSubject} from "rxjs";
import {LoginStateEnum} from "../models/ui/enum/LoginStateEnum";

const loginState = new BehaviorSubject<LoginStateEnum>(LoginStateEnum.USER_NOT_LOGGED);
export const loginState$ = loginState.asObservable();

export const handleLogin = () => {
    // TODO: Login validation logic

    loginState.next(LoginStateEnum.USER_LOGGED);
}

export const handleLogout = () => {
    // TODO: Logout validation logic

    loginState.next(LoginStateEnum.USER_NOT_LOGGED);
}

export const handleSignIn = () => {
    // TODO: Sign In validation logic

    loginState.next(LoginStateEnum.USER_LOGGED);
}