import {ValidatorFunction} from "../models/ui/function/ValidatorFunction";

export const emailValidator: ValidatorFunction = (email: string) => {
    return { isValid: true };
}