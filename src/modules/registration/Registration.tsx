import React from "react";
import "../../styles/registration.css";
import SecuredContainer from "../common/securityContainer/SecuredContainer";
import RegistrationSidebar from "./components/registrationSidebar/RegistrationSidebar";
import RegistrationContent from "./components/registrationContent/RegistrationContent";
import { bind } from "@react-rxjs/core";
import { selectedRegistration$ } from "../../services/RegistrationService";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const [useSelectedRegistration] = bind(selectedRegistration$);

const Registration = () => {
  const selectedRegistration = useSelectedRegistration();
  const [windowWidth] = useWindowDimensions();

  return (
    <SecuredContainer>
      <div className="app__registration">
        {windowWidth > 768 || !selectedRegistration ? (
          <RegistrationSidebar />
        ) : null}
        {windowWidth > 768 || selectedRegistration ? (
          <RegistrationContent />
        ) : null}
      </div>
    </SecuredContainer>
  );
};

export default Registration;
