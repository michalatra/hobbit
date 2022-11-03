import React from "react";
import {LoginStateEnum} from "../../../../models/ui/enum/LoginStateEnum";
import {PropsBase} from "../../../../models/ui/data/PropsBase";

const NavbarIdentity = ({loginState}: PropsBase) => {
    return loginState === LoginStateEnum.USER_LOGGED ?
        (
            <div className="app__navbar__identity">

            </div>
        )
        : null;
}

export default NavbarIdentity;