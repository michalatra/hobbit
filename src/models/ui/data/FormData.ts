import {InputFieldData} from "./InputFieldData";
import {BehaviorSubject} from "rxjs";
import {ButtonData} from "./ButtonData";

export interface FormData {
    columnData: InputFieldData[][],
    outputSubject?: BehaviorSubject<any>,
    actionData?: ButtonData
}