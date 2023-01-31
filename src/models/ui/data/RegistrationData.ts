import { RegistrationGroupData } from "./RegistrationGroupData";

export interface RegistrationData {
  id: string;
  title: string;
  startTime: Date;
  endTime: Date;
  yearName: string;
  groups: RegistrationGroupData[];
}
