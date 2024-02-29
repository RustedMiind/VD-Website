import { Employee } from "types/Employee";

export interface WorkInstructionsResponseRoot<T = unknown> {
  map_report: T;
  message: string;
  status: boolean;
}

export interface MapReportEmployee extends Employee {}

export interface MapReportContractor {
  id: number;
  reference_number: string;
  type_work_instruction_id: string;
  costable_id: number;
  expected_cost: string;
  real_cost: string;
  latitude: string;
  longitude: string;
  contractor_id: number;
  period: number;
  status: number;
  start_date: string;
  created_at: string;
  updated_at: string;
  type_work_instruction: TypeWorkInstruction;
  contractor: Contractor;
}

export interface TypeWorkInstruction {
  id: number;
  reference_number: string;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
}

export interface Contractor {
  id: number;
  name: string;
  phone: string;
  email: string;
  created_at: string;
  updated_at: string;
}
