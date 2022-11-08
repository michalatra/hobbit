import {ValidatorFunction} from "../models/ui/function/ValidatorFunction";

export const passwordValidator: ValidatorFunction = (email: string) => {
    return { isValid: true };
}