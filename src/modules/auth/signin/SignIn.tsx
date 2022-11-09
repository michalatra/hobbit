import React from "react";
import ContainerGrow from "../../common/container/ContainerGrow";
import LoginIcon from "../../../assets/icons/login.svg";
import {FormData} from "../../../models/ui/data/FormData";
import {InputTypeEnum} from "../../../models/ui/enum/InputTypeEnum";
import {DataTypeEnum} from "../../../models/ui/enum/DataTypeEnum";
import {requiredValidator} from "../../../validators/RequiredValidator";
import {ButtonTypeEnum} from "../../../models/ui/enum/ButtonTypeEnum";
import {handleSignIn} from "../../../services/AuthService";
import Form from "../../common/form/Form";

const formData: FormData = {
    columnData: [
        [
            {
                label: "Adres Email",
                name: "email",
                placeholder: "Wprowadź adres email",
                type: InputTypeEnum.EMAIL,
                dataType: DataTypeEnum.STRING,
                uiIndex: 0,
                validators: [requiredValidator]
            },
            {
                label: "Imię",
                name: "name",
                placeholder: "Wprowadź imię",
                type: InputTypeEnum.TEXT,
                dataType: DataTypeEnum.STRING,
                uiIndex: 2,
                validators: [requiredValidator]
            },
            {
                label: "Hasło",
                name: "password",
                placeholder: "Wprowadź hasło",
                type: InputTypeEnum.PASSWORD,
                dataType: DataTypeEnum.STRING,
                uiIndex: 4,
                validators: [requiredValidator]
            },
        ],
        [
            {
                label: "Numer indeksu",
                name: "umcsIndex",
                placeholder: "Wprowadź numer indeksu",
                type: InputTypeEnum.TEXT,
                dataType: DataTypeEnum.STRING,
                uiIndex: 1,
                validators: [requiredValidator]
            },
            {
                label: "Nazwisko",
                name: "surname",
                placeholder: "Wprowadź nazwisko",
                type: InputTypeEnum.TEXT,
                dataType: DataTypeEnum.STRING,
                uiIndex: 3,
                validators: [requiredValidator]
            },
            {
                label: "Powtórz hasło",
                name: "passwordRep",
                placeholder: "Wprowadź hasło",
                type: InputTypeEnum.PASSWORD,
                dataType: DataTypeEnum.STRING,
                uiIndex: 5,
                validators: [requiredValidator]
            },
        ]
    ],
    actionData: {
        type: ButtonTypeEnum.ACCEPT,
        name: "Zarejestruj",
        action: handleSignIn
    }
}

const SignIn = () => {
    return <ContainerGrow>
        <div className="app__login">
            <div className="app__signin-card">
                <div className="app__login-card__header">
                    <img alt="" src={LoginIcon} className="app__p-1" />
                    <h4 className="app__p-1">Rejestracja</h4>
                </div>
                <Form formData={formData} />
            </div>
        </div>
    </ContainerGrow>
}

export default SignIn;