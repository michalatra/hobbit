import React from "react";
import {LoginStateEnum} from "../../../../models/ui/enum/LoginStateEnum";
import {PropsBase} from "../../../../models/ui/data/PropsBase";
import {bind} from "@react-rxjs/core";
import {activeUser$} from "../../../../services/UserService";
import {handleLogout} from "../../../../services/AuthService";

const [useActiveUser] = bind(activeUser$);

const NavbarIdentity = ({loginState}: PropsBase) => {
    const activeUser = useActiveUser();

    return loginState === LoginStateEnum.USER_LOGGED && activeUser !== null ?
        (
            <div onClick={handleLogout} className="app__navbar__identity">
                <div className="app__navbar__identity__name">{`${activeUser!.firstName} ${activeUser!.lastName}`}</div>
                <div className="app__navbar__identity__email">{activeUser!.email}</div>
            </div>
        )
        : null;
}

export default NavbarIdentity;