export interface Client {
  id: number;
  //   collection: null;
  name: string;
  type: "individual" | "company";
  from: string;
  email: string;
  phone: string;
  // "phone_verified_at": null,
  // "password": null,
  // "otp": null,
  // "otp_expire": null,
  lang: string;
  // "remember_token": null,
  branch_id: number;
  broker_id: number;
  // "status_id": null,
  // "client_request_id": null,
  agent_name: string;
  register_number: string;
  // "register_image": null,
  letter_head: string;
  card_id: null;
  card_image: string;
  // "image": null,
  // "gender": null,
  // "birth_date": null,
  active: number;
  confirmed: number;
  note: null;
  order_type: number;
  created_at: string;
  updated_at: string;
  // "deleted_at": null,
  // broker?: Broker; // Assuming Broker is another interface
  // "status": null,
  branch?: Branch; // Assuming Branch is another interface
  contracts_count?: number;
  contract_status?: string;
  contract_status_id?: number;
}
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
