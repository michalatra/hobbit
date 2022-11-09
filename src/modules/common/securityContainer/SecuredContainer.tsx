import React, {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {PropsBase} from "../../../models/ui/data/PropsBase";
import {bind} from "@react-rxjs/core";
import {loginState$} from "../../../services/AuthService";
import {LoginStateEnum} from "../../../models/ui/enum/LoginStateEnum";
import {ApplicationPathEnum} from "../../../models/ui/enum/ApplicationPathEnum";

const [useLoginState] = bind(loginState$);

const SecuredContainer = ({children}: PropsBase) => {
    const navigate = useNavigate();
    const loginState = useLoginState();

    useEffect(() => {
        if (loginState === LoginStateEnum.USER_NOT_LOGGED)
            navigate("/" + ApplicationPathEnum.AUTH + "/" + ApplicationPathEnum.LOGIN);
    }, [loginState])

    return <React.Fragment>{children}</React.Fragment>
}

export default SecuredContainer;