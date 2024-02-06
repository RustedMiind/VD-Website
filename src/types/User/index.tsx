export type User = {
  id: number;
  name: string;
  phone: string;
  email: string;
  type: "individual";
  image: string;
  card_id: string;
  card_image?: string;
  status?: string;
  letter_head: string;
  branch_id: number;
  branch: string;
};
