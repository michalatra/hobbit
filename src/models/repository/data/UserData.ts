import {PrivilegeEnum} from "../enum/PrivilegeEnum";

export interface UserData {
    username: string;
    email: string;
    umcsIndex: string;
    firstName: string;
    lastName: string;
    privilege: PrivilegeEnum;
}