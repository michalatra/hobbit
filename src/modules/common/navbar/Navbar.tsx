import React, {useState} from 'react';
import '../../../styles/navbar.css';
import Logo from '../../../assets/images/Logo.png'
import CollapseIcon from '../../../assets/icons/bars.svg';
import NavbarLinks from "./components/NavbarLinks";
import NavbarIdentity from "./components/NavbarIdentity";
import {bind} from "@react-rxjs/core";
import {loginState$} from "../../../services/AuthService";
import {LoginStateEnum} from "../../../models/ui/enum/LoginStateEnum";
import Container from "../container/Container";

const [useLoginState] = bind(loginState$);

const Navbar = () => {
    const loginState = useLoginState();
    const [navbarCollapsed, setNavbarCollapsed] = useState(true);

    return (
        <Container>
            <div className="app__navbar">
                <img alt="SKNI logo icon" src={Logo} className="app__navbar__icon"/>
                <img onClick={() => setNavbarCollapsed(!navbarCollapsed)} alt="Navbar collapse icon" src={CollapseIcon} className="app__navbar__collapse-icon" />
                <div className={getNavbarContentClass(loginState, navbarCollapsed)}>
                    <NavbarLinks loginState={loginState} />
                    <NavbarIdentity loginState={loginState} />
                </div>
            </div>
        </Container>
    )
}

const getNavbarContentClass = (loginState: LoginStateEnum, navbarCollapsed: boolean): string => {
    return (loginState === LoginStateEnum.USER_LOGGED ?
        "app__navbar__content--logged" : "app__navbar__content")
        + (navbarCollapsed ?
            " app__navbar__content--collapsed" : "");
}

export default Navbar;