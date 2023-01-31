import React from "react";
import { bind } from "@react-rxjs/core";
import {
  activeRegistrations$,
  selectedRegistration$,
  upcomingRegistrations$,
} from "../../../../services/RegistrationService";
import SidebarRegistrationsSection from "./components/SidebarRegistrationsSection";

const [useActiveRegistrations] = bind(activeRegistrations$);
const [useUpcomingRegistrations] = bind(upcomingRegistrations$);
const [useSelectedRegistration] = bind(selectedRegistration$);

const RegistrationSidebar = () => {
  const activeRegistrations = useActiveRegistrations();
  const upcomingRegistrations = useUpcomingRegistrations();
  const selectedRegistration = useSelectedRegistration();

  return (
    <div className="app__registration__sidebar__container">
      <div className="app__registration__sidebar app__card">
        <SidebarRegistrationsSection
          registrations={activeRegistrations}
          selectedRegistration={selectedRegistration}
          title="Aktywne rejestracje"
        />
        <SidebarRegistrationsSection
          registrations={upcomingRegistrations}
          selectedRegistration={selectedRegistration}
          title="Rejestracje ocekujące"
        />
      </div>
    </div>
  );
};

export default RegistrationSidebar;
