import React from "react";
import { bind } from "@react-rxjs/core";
import {
  changeSelectedRegistrationGroup,
  selectedRegistration$,
  selectedRegistrationGroup$,
} from "../../../../../../services/RegistrationService";
import { RegistrationGroupData } from "../../../../../../models/ui/data/RegistrationGroupData";

const [useSelectedRegistration] = bind(selectedRegistration$);
const [useSelectedRegistrationGroup] = bind(selectedRegistrationGroup$);

const RegistrationGroups = () => {
  const selectedRegistration = useSelectedRegistration();
  const selectedRegistrationGroup = useSelectedRegistrationGroup();

  const handleSelectGroup = (group: RegistrationGroupData) => {
    changeSelectedRegistrationGroup(group);
  };

  return (
    <div className="app__registration__content__body__groups__container">
      <div className="app__registration__content__body__groups app__card">
        <div className="app__registration__content__body__groups__header">
          Grupy Rejestracji
        </div>
        <div className="app__registration__content__body__groups__items">
          {selectedRegistration?.groups.map((group) => (
            <div
              key={group.id}
              onClick={() => handleSelectGroup(group)}
              className={
                selectedRegistrationGroup &&
                selectedRegistrationGroup.id === group.id
                  ? "app__registration__content__body__groups__item--selected"
                  : "app__registration__content__body__groups__item"
              }
            >
              <div className="app__registration__content__body__groups__item__name">
                {group.name}
              </div>
              <div className="app__registration__content__body__groups__item__blocks-count">
                {`Liczba grup: ${group.blocks.length}`}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RegistrationGroups;
