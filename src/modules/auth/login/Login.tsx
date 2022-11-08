import React from "react";
import '../../../styles/login.css'
import ContainerGrow from "../../common/container/ContainerGrow";
import LogoSKNI from "../../../assets/images/logo-md.svg";
import LoginIcon from "../../../assets/icons/login.svg";
import Form from "../../common/form/Form";
import {InputTypeEnum} from "../../../models/ui/enum/InputTypeEnum";
import {FormData} from "../../../models/ui/data/FormData";
import {ButtonTypeEnum} from "../../../models/ui/enum/ButtonTypeEnum";
import {handleLogin} from "../../../services/AuthService";
import {DataTypeEnum} from "../../../models/ui/enum/DataTypeEnum";
import {requiredValidator} from "../../../validators/RequiredValidator";

const formData: FormData = {
    columnData: [[
        {
            label: "Adres email lub numer indeksu",
            name: "identity",
            placeholder: "Wprowadź identyfikator",
            type: InputTypeEnum.TEXT,
            dataType: DataTypeEnum.STRING,
            validators: [requiredValidator]
        },
        {
            label: "Hasło",
            name: "password",
            placeholder: "Wprowadź hasło",
            type: InputTypeEnum.PASSWORD,
            dataType: DataTypeEnum.STRING,
            validators: [requiredValidator]
        },
    ]],
    actionData: {
        type: ButtonTypeEnum.ACCEPT,
        name: "Zaloguj",
        action: handleLogin
    }
}

const Login = () => {
    return <ContainerGrow>
        <div className="app__login">
            <div className="app__login-card">
                <div className="app__login-card__left-pane">
                    <img alt="" src={LogoSKNI} className="app__login-card__logo"/>
                </div>
                <div className="app__login-card__right-pane">
                    <div className="app__login-card__header">
                        <img alt="" src={LoginIcon} className="app__p-1" />
                        <h4 className="app__p-1">Logowanie</h4>
                    </div>
                    <Form formData={formData} />
                </div>
            </div>
        </div>
    </ContainerGrow>
}

export default Login;