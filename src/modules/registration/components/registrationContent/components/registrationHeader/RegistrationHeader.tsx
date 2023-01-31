import React from "react";
import { selectedRegistration$ } from "../../../../../../services/RegistrationService";
import { bind } from "@react-rxjs/core";
import RegistrationTimer from "./components/RegistrationTimer";
import RegistrationHeaderActions from "./components/RegistrationHeaderActions";

const [useSelectedRegistration] = bind(selectedRegistration$);

const RegistrationHeader = () => {
  const selectedRegistration = useSelectedRegistration();

  return selectedRegistration ? (
    <div className="app__registration__content__header app__card">
      <RegistrationTimer />
      <div className="app__registration__content__header__title">
        {selectedRegistration.title}
      </div>
      <RegistrationHeaderActions />
    </div>
  ) : null;
};

export default RegistrationHeader;
