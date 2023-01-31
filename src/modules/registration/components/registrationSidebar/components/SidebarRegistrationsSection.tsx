import React from "react";
import { changeSelectedRegistration } from "../../../../../services/RegistrationService";
import { RegistrationData } from "../../../../../models/ui/data/RegistrationData";

interface SidebarRegistrationsSectionProps {
  registrations: RegistrationData[];
  selectedRegistration: RegistrationData | null;
  title: string;
}

const SidebarRegistrationsSection = ({
  registrations,
  selectedRegistration,
  title,
}: SidebarRegistrationsSectionProps) => {
  const handleSelectRegistration = (registration: RegistrationData) => {
    changeSelectedRegistration(registration);
  };

  return (
    <div className="app__registration__sidebar__section">
      <div className="app__registration__sidebar__section__header">{title}</div>
      <div className="app__registration__sidebar__section__items">
        {registrations.map((registration) => (
          <div
            key={registration.id}
            onClick={() => handleSelectRegistration(registration)}
            className={
              selectedRegistration &&
              registration.id === selectedRegistration.id
                ? "app__registration__sidebar__section__item--selected"
                : "app__registration__sidebar__section__item"
            }
          >
            <div className="app__registration__sidebar__section__item__header">
              {registration.title}
            </div>
            <div className="app__registration__sidebar__section__item__description">
              {registration.yearName}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarRegistrationsSection;
