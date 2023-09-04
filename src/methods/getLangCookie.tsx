import { getCookie } from "./cookies";

function getLangCookie(): "ar" | "en" {
  return (getCookie("lang") as "ar" | "en") || "ar";
}

export { getLangCookie };
