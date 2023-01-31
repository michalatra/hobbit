import React from "react";
import RegistrationHeader from "./components/registrationHeader/RegistrationHeader";
import RegistrationGroups from "./components/registrationGroups/RegistrationGroups";
import RegistrationBlocks from "./components/registrationBlocks/RegistrationBlocks";
import { bind } from "@react-rxjs/core";
import {
  selectedRegistration$,
  selectedRegistrationGroup$,
} from "../../../../services/RegistrationService";
import { useWindowDimensions } from "../../../../hooks/useWindowDimensions";

const [useSelectedRegistration] = bind(selectedRegistration$);
const [useSelectedRegistrationGroup] = bind(selectedRegistrationGroup$);

const RegistrationContent = () => {
  const selectedRegistration = useSelectedRegistration();
  const selectedRegistrationGroup = useSelectedRegistrationGroup();
  const [windowWidth] = useWindowDimensions();

  return (
    <div className="app__registration__content">
      <RegistrationHeader />
      <div className="app__registration__content__body">
        {windowWidth > 768 || !selectedRegistrationGroup ? (
          <RegistrationGroups />
        ) : null}
        {windowWidth > 768 || selectedRegistrationGroup ? (
          <RegistrationBlocks />
        ) : null}
      </div>
    </div>
  );
};

export default RegistrationContent;
