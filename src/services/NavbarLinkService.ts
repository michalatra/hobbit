import {NavbarLinkData} from "../models/ui/data/NavbarLinkData";
import {LoginStateEnum} from "../models/ui/enum/LoginStateEnum";
import {ApplicationPathEnum} from "../models/ui/enum/ApplicationPathEnum";

const loggedLinks: NavbarLinkData[] = [
    { name: "Rejestracja", path: ApplicationPathEnum.REGISTRATION },
    { name: "Plan", path: ApplicationPathEnum.SCHEDULE}
]

const links: NavbarLinkData[] = [
    { name: "Zaloguj", pathPrefix: ApplicationPathEnum.AUTH, path: ApplicationPathEnum.LOGIN},
    { name: "Utwórz konto", pathPrefix: ApplicationPathEnum.AUTH, path: ApplicationPathEnum.SiGNIN }
]

export const getLinks = (loginState: LoginStateEnum) => {
    return loginState === LoginStateEnum.USER_LOGGED ? loggedLinks : links;
}