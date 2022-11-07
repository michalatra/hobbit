import React from "react";
import {handleLogin} from "../../../services/AuthService";
import {getUser} from "../../../services/UserService";
import {useNavigate} from "react-router-dom";
import {ApplicationPathEnum} from "../../../models/ui/enum/ApplicationPathEnum";
import Container from "../../common/container/Container";
import '../../../styles/login.css'
import ContainerGrow from "../../common/container/ContainerGrow";

const Login = () => {
    const navigate = useNavigate();

    const onLogin = () => {
        handleLogin();
        getUser();
        navigate("/" + ApplicationPathEnum.SCHEDULE);
    }

    return <ContainerGrow>
        <div className="app__login">
            <div className="app__login-card">
                <h2>Login Page</h2>
                <button onClick={onLogin}>LOGIN</button>
            </div>
        </div>
    </ContainerGrow>
}

export default Login;