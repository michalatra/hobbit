import React from "react";
import {PropsBase} from "../../../../models/ui/data/PropsBase";
import {InputFieldData} from "../../../../models/ui/data/InputFieldData";
import {ValidationData} from "../../../../models/ui/data/ValidationData";

interface InputProps extends PropsBase {
    inputData: InputFieldData,
    validationData: ValidationData,
    value: any,
    onChange: any
}

const Input = ({inputData, validationData, value, onChange}: InputProps) => {
    return <div className="app__input">
        <label htmlFor={inputData.name}>{inputData.label}</label>
        <input
            name={inputData.name}
            id={inputData.name}
            type={inputData.type}
            placeholder={inputData.placeholder}
            value={value}
            onChange={event => onChange(inputData.name, event.target.value)}
            className={!validationData.isValid ? "app__input__error" : ""}
        />
        {!validationData.isValid ? <div className="app__input__error-message">{validationData.error}</div> : null}
    </div>
}

export default Input;