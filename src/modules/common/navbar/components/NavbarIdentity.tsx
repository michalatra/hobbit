import React from "react";
import {LoginStateEnum} from "../../../../models/ui/enum/LoginStateEnum";
import {PropsBase} from "../../../../models/ui/data/PropsBase";
import {bind} from "@react-rxjs/core";
import {activeUser$} from "../../../../services/UserService";

const NavbarIdentity = ({loginState}: PropsBase) => {
    const [activeUser] = bind(activeUser$);

    return loginState === LoginStateEnum.USER_LOGGED && activeUser() !== null ?
        (
            <div className="app__navbar__identity">
                <div className="app__navbar__identity__name">{`${activeUser()!.firstName} ${activeUser()!.lastName}`}</div>
                <div className="app__navbar__identity__email">{activeUser()!.email}</div>
            </div>
        )
        : null;
}

export default NavbarIdentity;