import { Client } from "types/Clients";
import { Employee } from "types/Employee";
import { Media } from "types/Media";

export interface Contract {
  id: number;
  code?: string;
  period?: string;
  date?: string;
  end_date?: string;
  // card_image: any
  details?: string;
  // type: any
  amount?: string;
  contract_type_id?: number;
  client_id?: number;
  branch_id?: number;
  management_id?: string;
  status_id: number;
  employee_id?: number;
  created_at: string;
  updated_at: string;
  // deleted_at: any
  // last_status: any
  // order_id: any
  // is_done: any
  contract_type: number;
  completion_rate: number;
  end_date_period: number;
  dateEnd: string;
  Contract_status: string;
  client?: Client;
  employee?: Employee;
  // tasks: any[]
  // payments: any[]
  management?: Management;
  branch?: Branch;
  levers: any[];
  contract_details?: ContractDetails;
  contract_items: ContractItem[];
}
export interface ContractItem {
  id: number;
  name: string;
  description: string;
  manager_id: number;
  start_date: string;
  end_date: string;
  created_at: string;
  updated_at: string;
  contract_id: number;
  media?: Media[];
  contract_sub_items: ContractSubItem[];
}
export interface ContractSubItem {
  id: number;
  contract_item_id: number;
  name: string;
  employee_id: number;
  is_progress_bar: number;
  is_processing: number;
  is_attachment: number;
  created_at: string;
  updated_at: string;
}
export interface ContractDetails {
  id: number;
  contract_id: number;
  number_parts: number;
  area: number;
  location: string;
  map: string;
  website: number;
  application: number;
  online_service: number;
  created_at: string;
  updated_at: string;
  media?: Media[];
}
type Management = {
  active: number;
  branch_id: number;
  branch?: Branch;
  childrens: Childrens[];
  created_at: string;
  deleted_at: null;
  directChildren: number;
  id: number;
  manager_id: number;
  name: string;
  note: null;
  parent_id: null;
  type: string;
  updated_at: string;
};
export type Childrens = {
  active: number;
  branch_id: number;
  childrens: Childrens[];
  created_at: string;
  deleted_at: null;
  directChildren: number;
  id: number;
  manager_id: number;
  name: string;
  note: null;
  parent_id: number;
  type: string;
  updated_at: string;
};
export interface Branch {
  id: number;
  name: string;
  address: any;
  phone: string;
  email: string;
  type: string;
  manager_id: number;
  city_id: number;
  shift_id: number;
  is_clients: number;
  is_mangers: number;
  is_services: number;
  is_papers: number;
  is_projects: number;
  is_shifts: number;
  latitude: string;
  longitude: string;
  polygon: any;
  parent_id?: number;
  active: number;
  share_client: number;
  share_service: number;
  share_paper: number;
  share_shift: number;
  share_manager: number;
  created_at: string;
  updated_at: string;
  deleted_at: any;
  time_zone: string;
}
