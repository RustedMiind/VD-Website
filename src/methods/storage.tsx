import domain from "./domain";

export default function storage(path: string) {
  return `${domain()}storage/${path}`;
}
