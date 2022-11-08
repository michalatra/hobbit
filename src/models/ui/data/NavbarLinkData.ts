import {ApplicationPathEnum} from "../enum/ApplicationPathEnum";

export interface NavbarLinkData {
    name: string;
    pathPrefix?: string;
    path: ApplicationPathEnum;
}