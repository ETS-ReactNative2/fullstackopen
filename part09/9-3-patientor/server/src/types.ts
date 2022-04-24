export enum Gender {
  Male = 'male',
  Female = 'female',
  Other = 'other'
}

export interface Diagnosis {
  code: string,
  name: string,
  latin?: string
}

export interface Patient {
  id: string,
  name: string,
  dateOfBirth: Date,
  ssn: string,
  gender: Gender,
  occupation: string
}

export type SafePatient = Omit<Patient, 'ssn'>;

export type NewPatient = Omit<Patient, 'id'>;