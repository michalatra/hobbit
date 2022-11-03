import React from "react";
import NavbarLink from "./NavbarLink";
import {getLinks} from "../../../../services/NavbarLinkService";
import {PropsBase} from "../../../../models/ui/data/PropsBase";

const NavbarLinks = ({loginState}: PropsBase) => {
    return <div className="app__navbar__links">
        {getLinks(loginState!).map(link => <NavbarLink link={link} />)}
    </div>
}

export default NavbarLinks;