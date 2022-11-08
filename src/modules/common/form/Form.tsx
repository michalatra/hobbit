import React, {useState} from "react";
import {PropsBase} from "../../../models/ui/data/PropsBase";
import {FormData} from "../../../models/ui/data/FormData";
import Input from "./input/Input";
import Button from "../button/Button";
import "../../../styles/form.css"
import {InputFieldData} from "../../../models/ui/data/InputFieldData";

interface FormProps extends PropsBase {
    formData: FormData;
}

const Form = ({formData}: FormProps) => {
    const [formState, setFormState] = useState(
        createFormState(formData.columnData.flat())
    );

    const [formValidationState, setFormValidationState] = useState(
        createFormValidationState(formData.columnData.flat())
    );

    const updateFormState = (property: string, value: any) => {
        const state: any = {...formState};
        state[property] = value;

        if (formData.outputSubject)
            formData.outputSubject.next(state);

        validateField(property, value)
        setFormState(state);
    }

    const validateField = (fieldName: string, fieldValue: any) => {
        const input = formData.columnData.flat().find(field => field.name === fieldName);

        if (!input) return;

        const validationState = {...formValidationState};

        if (input.validators)
            for (let validator of input.validators)
                validationState[input.name] = validator(fieldValue);

        setFormValidationState(validationState);
    }

    const validateForm = (): boolean => {
        let formValid = true;
        const validationState = {...formValidationState};

        for (let input of formData.columnData.flat()) {
            if (input.validators) {
                for (let validator of input.validators) {
                    validationState[input.name] = validator(formState[input.name]);
                    formValid = formValid && validationState[input.name].isValid;
                }
            }
        }

        setFormValidationState(validationState);

        return formValid;
    }

    const handleAction = () => {
        if (validateForm())
            formData.actionData?.action(formState);
    }

    return <div className="app__form">
        <div className="app__form__grid">
            {formData.columnData.map(column => (
                <div key={column[0].name} className="app__form__grid__column">
                    {column.map(input => (
                        <Input
                            key={input.name}
                            inputData={input}
                            validationData={formValidationState[input.name]}
                            value={formState[input.name as keyof Object]}
                            onChange={updateFormState}
                        />
                    ))}
                </div>
            ))}
        </div>
        {formData.actionData ?
            <Button buttonData={{...formData.actionData, action: handleAction}} /> :
            null
        }
    </div>
}

const createFormState = (inputData: InputFieldData[]) => {
    const formState: any = {};

    for (let input of inputData)
        formState[input.name] = input.dataType

    return formState;
}

const createFormValidationState = (inputData: InputFieldData[]) => {
    const formValidationState: any = {};

    for (let input of inputData)
        formValidationState[input.name] = {isValid: true, error: ""}

    return formValidationState;
}

export default Form;