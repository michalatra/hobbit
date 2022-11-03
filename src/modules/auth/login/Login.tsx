import React from "react";
import {handleLogin} from "../../../services/AuthService";
import {getUser} from "../../../services/UserService";
import {useNavigate} from "react-router-dom";
import {ApplicationPathEnum} from "../../../models/ui/enum/ApplicationPathEnum";

const Login = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        handleLogin();
        getUser();
        navigate("/" + ApplicationPathEnum.SCHEDULE);
    }

    return <div>
        <h2>Login Page</h2>
        <button onClick={onLogin}>LOGIN</button>
    </div>
}

export default Login;