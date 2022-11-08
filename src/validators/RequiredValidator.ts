import {ValidatorFunction} from "../models/ui/function/ValidatorFunction";

export const requiredValidator: ValidatorFunction = (value: any) => {
    const errorText = "To pole jest wymagane"

    if (value == null || (typeof value === "string" && value.length === 0))
        return { isValid: false, error: errorText}

    return { isValid: true }
}