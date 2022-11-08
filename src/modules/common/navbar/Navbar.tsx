import React from 'react';
import '../../../styles/navbar.css';
import Logo from '../../../assets/images/Logo.png'
import NavbarLinks from "./components/NavbarLinks";
import NavbarIdentity from "./components/NavbarIdentity";
import {bind} from "@react-rxjs/core";
import {loginState$} from "../../../services/AuthService";
import {LoginStateEnum} from "../../../models/ui/enum/LoginStateEnum";
import Container from "../container/Container";

const [useLoginState] = bind(loginState$);

const Navbar = () => {
    const loginState = useLoginState();

    return (
        <Container>
            <div className="app__navbar">
                <img alt="SKNI logo icon" src={Logo} className="app__navbar__icon"/>
                <div className={
                    useLoginState() === LoginStateEnum.USER_LOGGED ? "app__navbar__content--logged" : 'app__navbar__content'
                }>
                    <NavbarLinks loginState={loginState} />
                    <NavbarIdentity loginState={loginState} />
                </div>
            </div>
        </Container>
    )
}

export default Navbar;