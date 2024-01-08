import { iAddress } from "@interface/address";

export interface iGuest {
  id: string;
  username: string;
  email: string;
  birthdate: string;
  nationality: string;
  contact: string;
  aditional_contact?: string;
  emergency_num: string;
  address: iAddress;
  is_staff: boolean;
  is_superuser: boolean;
}
