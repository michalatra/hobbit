import {ValidationData} from "../data/ValidationData";

export interface ValidatorFunction {
    (value: any): ValidationData
}