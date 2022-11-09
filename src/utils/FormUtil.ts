import {InputFieldData} from "../models/ui/data/InputFieldData";

export const createFormState = (inputData: InputFieldData[]) => {
    const formState: any = {};

    for (let input of inputData)
        formState[input.name] = input.dataType

    return formState;
}

export const createFormValidationState = (inputData: InputFieldData[]) => {
    const formValidationState: any = {};

    for (let input of inputData)
        formValidationState[input.name] = {isValid: true, error: ""}

    return formValidationState;
}