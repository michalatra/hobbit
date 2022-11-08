import {ButtonTypeEnum} from "../enum/ButtonTypeEnum";

export interface ButtonData {
    type: ButtonTypeEnum,
    name: string,
    action: any
}