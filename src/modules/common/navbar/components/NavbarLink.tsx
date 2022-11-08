import React from "react";
import {NavbarLinkData} from "../../../../models/ui/data/NavbarLinkData";
import {PropsBase} from "../../../../models/ui/data/PropsBase";
import {NavLink, useLocation} from "react-router-dom";

interface LinkProps extends PropsBase {
    link: NavbarLinkData
}

const NavbarLink = ({link}: LinkProps) => {
    const location = useLocation();
    return (
        <NavLink style={{ color: 'inherit', textDecoration: 'inherit'}} to={getFullLinkPath(link)}>
            <div className={getLinkClass(link, location.pathname)}>
                {link.name}
            </div>
        </NavLink>
    );
}

const getLinkClass = (link: NavbarLinkData, path: string): string => {
    const desiredPath = "/" +  getFullLinkPath(link);
    return desiredPath === path ? "app__navbar__link--active" : "app__navbar__link";
}

const getFullLinkPath = (link: NavbarLinkData): string => {
    return (link.pathPrefix ? link.pathPrefix + "/" : "") + link.path;
}

export default NavbarLink;