import React from "react";
import SettingsIcon from "../../../../../assets/icons/settings.svg";

const SidebarFooter = () => {
    return <div className="app__schedule__sidebar-footer">
        <img src={SettingsIcon} alt="settings icon" />
        <div>Ustawienia</div>
    </div>
}

export default SidebarFooter;