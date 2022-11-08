import {InputTypeEnum} from "../enum/InputTypeEnum";
import {DataTypeEnum} from "../enum/DataTypeEnum";
import {ValidatorFunction} from "../function/ValidatorFunction";

export interface InputFieldData {
    label: string,
    name: string,
    placeholder: string,
    type: InputTypeEnum,
    dataType: DataTypeEnum,
    validators?: ValidatorFunction[]
}