export interface WorkInstructionsResponseRoot {
  map_report: MapReport[];
  message: string;
  status: boolean;
}

export interface MapReport {
  id: number;
  name: string;
  first_name: string;
  second_name: string;
  last_name: string;
  full_name: string;
  user_id: number;
  shift_id: number;
  email: string;
  phone: string;
  country_id: number;
  city_id: number;
  address: string;
  draft: number;
  has_overtime: number;
  deleted_at: any;
  created_at: string;
  updated_at: string;
  employee_track?: EmployeeTrack;
}

export interface EmployeeTrack {
  id: number;
  latitude?: string;
  longitude?: string;
  last_seen: string;
  employee_id: number;
  created_at: string;
  updated_at: string;
  active: number;
  notify: number;
}
