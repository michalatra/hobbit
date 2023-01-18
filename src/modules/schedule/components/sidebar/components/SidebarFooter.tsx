import React from "react";
import SettingsIcon from "../../../../../assets/icons/settings.svg";

const SidebarFooter = () => {
    return <div className="app__schedule__sidebar-footer">
        <img src={SettingsIcon} alt="settings icon" />
        <div className="app_schedule__sidebar-footer-text">Ustawienia</div>
    </div>
}

export default SidebarFooter;