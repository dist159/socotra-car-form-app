export interface Vehicle {
  make?: string;
  model?: string;
  year?: string;
  value?: string;
}

export interface Driver {
  firstName: string;
  lastName: string;
  licenceNumber: string;
}

export interface User {
  name: string;
  dateOfBirth: Date;
}

export interface UserHistory {
  driverHasAccidents: boolean;
  driverHasConvictions: boolean;
  driverHasSuspensions: boolean;
}
