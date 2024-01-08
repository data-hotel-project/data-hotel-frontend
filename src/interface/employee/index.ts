import { iAddress } from "@interface/address";

export interface iEmployee {
  id: string;
  username: string;
  email: string;
  birthdate: string;
  nationality: string;
  contact: string;
  aditional_contact?: string;
  emergency_num: string;
  job_function: string;
  admission_date: string;
  address: iAddress;
  hotel: string;
  is_staff: boolean;
  is_superuser: boolean;
}
