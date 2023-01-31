import React from "react";
import { bind } from "@react-rxjs/core";
import {
  changeSelectedRegistration,
  changeSelectedRegistrationGroup,
  selectedRegistration$,
  selectedRegistrationGroup$,
} from "../../../../../../../services/RegistrationService";

const [useSelectedRegistration] = bind(selectedRegistration$);
const [useSelectedRegistrationGroup] = bind(selectedRegistrationGroup$);

const RegistrationTimer = () => {
  const selectedRegistration = useSelectedRegistration();
  const selectedRegistrationGroup = useSelectedRegistrationGroup();

  const handleBackButtonClick = () => {
    if (selectedRegistrationGroup) {
      changeSelectedRegistrationGroup(null);
    } else if (selectedRegistration) {
      changeSelectedRegistration(null);
    }
  };

  return <div onClick={handleBackButtonClick}>timer</div>;
};

export default RegistrationTimer;
