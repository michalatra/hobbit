import { RegistrationBlockData } from "./RegistrationBlockData";

export interface RegistrationGroupData {
  id: string;
  name: string;
  blocks: RegistrationBlockData[];
}
